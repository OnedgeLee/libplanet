using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// <para>
    /// An <see cref="Exception"/> free concurrent <see cref="Dictionary{TKey, TValue}"/> wrapper
    /// to be used for <see cref="Context"/> with well-defined default behaviors.
    /// </para>
    /// <para>
    /// This is <see cref="Context"/> aware in the sense that it knows the height, the list of
    /// validators for the given height, and the valid proposer selection mechanism.
    /// Using this info, <see cref="MessageLog"/> prevents adding an invalid
    /// <see cref="ConsensusMsg"/> to an internal collection, such as adding multiple
    /// <see cref="ConsensusMsg"/>s for the same <see cref="Context.Round"/> and
    /// the same validator.  See <see cref="MessageLog.Add"/> for more detail.
    /// </para>
    /// </summary>
    /// <seealso cref="MessageLog.Add"/>
    internal class MessageLog
    {
        private object _lock;
        private ILogger _logger;

        private long _height;
        private ValidatorSet _validators;
        private Dictionary<int, ConsensusProposalMsg> _proposals;
        private Dictionary<int, Dictionary<PublicKey, ConsensusPreVoteMsg>> _preVotes;
        private Dictionary<int, Dictionary<PublicKey, ConsensusPreCommitMsg>> _preCommits;
        private Dictionary<int, List<ConsensusMaj23Msg>> _maj23s;

        internal MessageLog(long height, ValidatorSet validators)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<MessageLog>()
                .ForContext("Source", nameof(MessageLog));

            _height = height;
            _validators = validators;
            _proposals = new Dictionary<int, ConsensusProposalMsg>();
            _preVotes = new Dictionary<int, Dictionary<PublicKey, ConsensusPreVoteMsg>>();
            _preCommits = new Dictionary<int, Dictionary<PublicKey, ConsensusPreCommitMsg>>();
            _maj23s = new Dictionary<int, List<ConsensusMaj23Msg>>();
            _lock = new object();
        }

        /// <summary>
        /// <para>
        /// Tries to add given <paramref name="message"/> to the collection.
        /// </para>
        /// <para>
        /// Given <paramref name="message"/> will be ignored, i.e. not be added, for
        /// any of the following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     If <paramref name="message"/>'s height does not match the height of
        ///     this <see cref="MessageLog"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/>'s validator is not one of the validators
        ///     for the height of this <see cref="MessageLog"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusProposalMsg"/> and
        ///     <pararef name="message"/>'s validator does not match the expected
        ///     validator for the <see cref="ConsensusMsg.Height"/>
        ///     and <see cref="ConsensusMsg.Round"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusProposalMsg"/> and
        ///     there is already a <see cref="ConsensusProposalMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusPreVoteMsg"/> and
        ///     there is already a <see cref="ConsensusPreVoteMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/> and <see cref="ConsensusMsg.ValidatorPublicKey"/>.
        /// </description></item>
        /// <item><description>
        ///     If <paramref name="message"/> is a <see cref="ConsensusPreCommitMsg"/> and
        ///     there is already a <see cref="ConsensusPreCommitMsg"/> with the same
        ///     <see cref="ConsensusMsg.Round"/> and <see cref="ConsensusMsg.ValidatorPublicKey"/>.
        /// </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="message">The <see cref="ConsensusMsg"/> to add.</param>
        /// <exception cref="InvalidConsensusMessageException">Thrown when the given
        /// <paramref name="message"/> is invalid.</exception>
        internal void Add(ConsensusMsg message)
        {
            lock (_lock)
            {
                var expectedProposer = _validators.GetProposer(message.Height, message.Round);

                if (message.Height != _height)
                {
                    var msg =
                        $"Given message's height {message.Height} does not match the expected " +
                        $"height {_height}";
                    throw new InvalidConsensusMessageException(msg, message);
                }
                else if (!_validators.PublicKeys.Contains(message.ValidatorPublicKey))
                {
                    var msg =
                        $"Given message's validator {message.ValidatorPublicKey} is not one of " +
                        $"the validators for height {message.Height}";
                    throw new InvalidConsensusMessageException(msg, message);
                }
                else if (message is ConsensusProposalMsg proposal1 &&
                    !proposal1.ValidatorPublicKey.Equals(expectedProposer.PublicKey))
                {
                    var msg =
                        $"Given proposal message's validator {proposal1.ValidatorPublicKey} " +
                        $"does not match the expected proposer {expectedProposer} for height " +
                        $"{proposal1.Height} and round {proposal1.Round}";
                    throw new InvalidConsensusMessageException(msg, message);
                }
                else if (message is ConsensusProposalMsg proposal2)
                {
                    if (_proposals.ContainsKey(proposal2.Round))
                    {
                        if (_maj23s.ContainsKey(proposal2.Round) &&
                            _maj23s[proposal2.Round]
                                .Any(maj23 => maj23.BlockHash.Equals(proposal2.BlockHash)) &&
                            (HasTwoThirdsPreVote(
                                 proposal2.Round,
                                 msg => msg.BlockHash.Equals(proposal2.BlockHash)) ||
                             HasTwoThirdsPreCommit(
                                 proposal2.Round,
                                 msg => msg.BlockHash.Equals(proposal2.BlockHash))))
                        {
                            // If maj23 is received and received proposal's BlockHash is equal to
                            // maj23's BlockHash, and collected +2/3 votes, override proposal.
                            // TODO: Store proposal in somewhere and pull it out when
                            // the conditions are met.
                            _logger.Debug(
                                "Override proposal from {Before} to After} since " +
                                "maj23 has collected and +2/3 votes are collected",
                                _proposals[proposal2.Round].BlockHash,
                                proposal2.BlockHash);
                            _proposals[proposal2.Round] = proposal2;
                        }
                        else
                        {
                            var msg =
                                "There is already a proposal for given proposal message's round " +
                                proposal2.Round + " and there are no appropriate maj23 received";
                            throw new InvalidConsensusMessageException(msg, message);
                        }
                    }
                    else
                    {
                        _proposals[proposal2.Round] = proposal2;
                    }
                }
                else if (message is ConsensusPreVoteMsg preVote)
                {
                    if (!_preVotes.ContainsKey(preVote.Round))
                    {
                        _preVotes[preVote.Round] =
                            new Dictionary<PublicKey, ConsensusPreVoteMsg>();
                    }

                    if (_preVotes[preVote.Round].ContainsKey(preVote.ValidatorPublicKey))
                    {
                        var msg =
                            "There is already a prevote message for given prevote message's " +
                            $"round {preVote.Round} and validator {preVote.ValidatorPublicKey}";
                        throw new InvalidConsensusMessageException(msg, message);
                    }
                    else
                    {
                        _preVotes[preVote.Round][preVote.ValidatorPublicKey] = preVote;
                    }
                }
                else if (message is ConsensusPreCommitMsg preCommit)
                {
                    if (!_preCommits.ContainsKey(preCommit.Round))
                    {
                        _preCommits[preCommit.Round] =
                            new Dictionary<PublicKey, ConsensusPreCommitMsg>();
                    }

                    if (_preCommits[preCommit.Round].ContainsKey(preCommit.ValidatorPublicKey))
                    {
                        var msg =
                            "There is already a precommit message for given precommit message's " +
                            $"round {preCommit.Round} and validator {preCommit.ValidatorPublicKey}";
                        throw new InvalidConsensusMessageException(msg, message);
                    }
                    else
                    {
                        _preCommits[preCommit.Round][preCommit.ValidatorPublicKey] = preCommit;
                    }
                }
                else if (message is ConsensusMaj23Msg maj23)
                {
                    if (!_maj23s.ContainsKey(maj23.Round))
                    {
                        _maj23s[maj23.Round] = new List<ConsensusMaj23Msg>();
                    }

                    if (_maj23s[maj23.Round].Any(maj => maj.BlockHash.Equals(maj23.BlockHash)))
                    {
                        var msg =
                            "There is already a maj23 message for given maj23 message's " +
                            $"round {maj23.Round} and blockHash {maj23.BlockHash}";
                        throw new InvalidConsensusMessageException(msg, message);
                    }
                    else
                    {
                        _maj23s[maj23.Round].Add(maj23);
                    }
                }
                else
                {
                    var msg = $"Unknown message type {message.GetType()} received";
                    throw new InvalidConsensusMessageException(msg, message);
                }
            }
        }

        /// <summary>
        /// Gets the <see cref="ConsensusProposalMsg"/> for given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The <see cref="ConsensusProposalMsg"/> for given <paramref name="round"/>
        /// if found, otherwise <see langword="null"/>.
        /// </returns>
        internal ConsensusProposalMsg? GetProposal(int round)
        {
            lock (_lock)
            {
                return _proposals.ContainsKey(round)
                    ? _proposals[round]
                    : null;
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreVoteMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        internal List<ConsensusPreVoteMsg> GetPreVotes(int round)
        {
            lock (_lock)
            {
                return _preVotes.ContainsKey(round)
                    ? _preVotes[round].Select(pair => pair.Value).ToList()
                    : new List<ConsensusPreVoteMsg>();
            }
        }

        /// <summary>
        /// Gets all <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>All <see cref="ConsensusPreCommitMsg"/>s in given <paramref name="round"/>.
        /// </returns>
        internal List<ConsensusPreCommitMsg> GetPreCommits(int round)
        {
            lock (_lock)
            {
                return _preCommits.ContainsKey(round)
                    ? _preCommits[round].Select(pair => pair.Value).ToList()
                    : new List<ConsensusPreCommitMsg>();
            }
        }

        /// <summary>
        /// Counts distinct validators for <see cref="ConsensusMsg"/>s in given
        /// <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The number of distinct validators for <see cref="ConsensusMsg"/>s
        /// in given <paramref name="round"/>.
        /// </returns>
        internal List<PublicKey> GetValidators(int round)
        {
            lock (_lock)
            {
                HashSet<PublicKey> validators = new HashSet<PublicKey>();

                if (_proposals.ContainsKey(round))
                {
                    validators.Add(_proposals[round].ValidatorPublicKey);
                }

                return validators
                    .Union(_preVotes.ContainsKey(round)
                        ? _preVotes[round].Keys
                        : new Dictionary<PublicKey, ConsensusPreVoteMsg>().Keys)
                    .Union(_preCommits.ContainsKey(round)
                        ? _preCommits[round].Keys
                        : new Dictionary<PublicKey, ConsensusPreCommitMsg>().Keys).ToList();
            }
        }

        /// <summary>
        /// Counts distinct validators for <see cref="ConsensusMsg"/>s in given
        /// <paramref name="round"/>.
        /// </summary>
        /// <param name="round">The round to search.</param>
        /// <returns>The number of distinct validators for <see cref="ConsensusMsg"/>s
        /// in given <paramref name="round"/>.
        /// </returns>
        internal int GetValidatorsCount(int round)
        {
           return GetValidators(round).Count;
        }

        /// <summary>
        /// Counts the total number of <see cref="ConsensusMsg"/>s in a log.
        /// </summary>
        /// <returns>The number of all <see cref="ConsensusMsg"/>s.</returns>
        internal int GetTotalCount()
        {
            lock (_lock)
            {
                return _proposals.Count +
                    _preVotes.Sum(pair => pair.Value.Count) +
                    _preCommits.Sum(pair => pair.Value.Count);
            }
        }

        /// <summary>
        /// Returns a <see cref="BlockCommit"/> for given <paramref name="round"/>
        /// and <paramref name="hash"/>.
        /// </summary>
        /// <param name="round">The round to match.</param>
        /// <param name="hash">The <see cref="BlockHash"/> to match.</param>
        /// <returns>A <see cref="BlockCommit"/> created on the fly if
        /// conditions are met (i.e. there are 2/3+ <see cref="Vote"/>s with
        /// <see cref="VoteFlag.PreCommit"/> flag for given <paramref name="round"/>
        /// and <paramref name="hash"/>), otherwise <see langword="null"/>.</returns>
        internal BlockCommit? GetBlockCommit(int round, BlockHash hash)
        {
            lock (_lock)
            {
                ImmutableArray<Vote> votes = _validators.Validators.Select(validator =>
                    _preCommits.ContainsKey(round) &&
                    _preCommits[round].ContainsKey(validator.PublicKey) &&
                    hash.Equals(_preCommits[round][validator.PublicKey].BlockHash)
                        ? _preCommits[round][validator.PublicKey].PreCommit
                        : new VoteMetadata(
                            _height,
                            round,
                            hash,
                            DateTimeOffset.UtcNow,
                            validator.PublicKey,
                            VoteFlag.Null).Sign(null)).ToImmutableArray();

                try
                {
                    return new BlockCommit(_height, round, hash, votes);
                }
                catch (ArgumentException ae)
                {
                    const string errorMessage =
                        "{FName} failed to create a BlockCommit for height {Height}, " +
                        "round {Round} and hash {Hash}";
                    _logger.Error(
                        ae,
                        errorMessage,
                        nameof(GetBlockCommit),
                        _height,
                        round,
                        hash);
                    return null;
                }
            }
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusPreVoteMsg"/> for
        /// <paramref name="round"/> and <paramref name="predicate"/>.
        /// </summary>
        /// <param name="round">The round to check.</param>
        /// <param name="predicate">An additional predicate for counting votes.</param>
        /// <returns>Returns <see langword="true"/> if the count is +2/3,
        /// otherwise <see langword="false"/>.</returns>
        internal bool HasTwoThirdsPreVote(int round, Func<ConsensusPreVoteMsg, bool> predicate)
        {
            var validatorPublicKeys = GetPreVotes(round).FindAll(
                preVote => predicate(preVote)).Select(
                preVote => preVote.PreVote.ValidatorPublicKey).ToList();
            return _validators.GetValidatorsPower(validatorPublicKeys)
                   > _validators.TwoThirdsPower;
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusPreCommitMsg"/> for
        /// <paramref name="round"/> and <paramref name="predicate"/>.
        /// </summary>
        /// <param name="round">The round to check.</param>
        /// <param name="predicate">An additional predicate for counting votes.</param>
        /// <returns>Returns <see langword="true"/> if the count is +2/3,
        /// otherwise <see langword="false"/>.</returns>
        internal bool HasTwoThirdsPreCommit(int round, Func<ConsensusPreCommitMsg, bool> predicate)
        {
            var validatorPublicKeys = GetPreCommits(round).FindAll(
                preCommit => predicate(preCommit)).Select(
                preCommit => preCommit.PreCommit.ValidatorPublicKey).ToList();
            return _validators.GetValidatorsPower(validatorPublicKeys)
                   > _validators.TwoThirdsPower;
        }

        internal bool PeerMaj23(int round, BlockHash hash)
        {
            lock (_lock)
            {
                return _maj23s.ContainsKey(round) &&
                       _maj23s[round].Any(maj => maj.BlockHash.Equals(hash));
            }
        }

        internal ConsensusMsg? GetRandomMessage()
        {
            lock (_lock)
            {
                Random random = new Random();
                List<ConsensusMsg> pool = new List<ConsensusMsg>()
                    .Concat(_proposals.Values)
                    .Concat(_preVotes.Values.SelectMany(kv => kv.Values))
                    .Concat(_preCommits.Values.SelectMany(kv => kv.Values))
                    .ToList();
                return pool.Count > 0
                    ? pool[random.Next(pool.Count)]
                    : null;
            }
        }
    }
}
