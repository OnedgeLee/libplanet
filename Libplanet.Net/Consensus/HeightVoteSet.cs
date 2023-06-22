using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Serilog;

namespace Libplanet.Net.Consensus
{
    internal class HeightVoteSet
    {
        private readonly ILogger _logger;
        private readonly object _lock;
        private long _height;
        private ValidatorSet _validatorSet;
        private Dictionary<int, RoundVoteSet> _roundVoteSets;
        private Dictionary<PublicKey, List<int>> _peerCatchupRounds;
        private int _round;

        internal HeightVoteSet(long height, ValidatorSet validatorSet)
        {
            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<HeightVoteSet>()
                .ForContext("Source", nameof(HeightVoteSet));
            _lock = new object();
            lock (_lock)
            {
                _height = height;
                _validatorSet = validatorSet;
                _roundVoteSets = new Dictionary<int, RoundVoteSet>();
                _peerCatchupRounds = new Dictionary<PublicKey, List<int>>();
            }

            Reset(height, validatorSet);
        }

        public int Count => _roundVoteSets.Values.Sum(v => v.Count);

        public void Reset(long height, ValidatorSet validatorSet)
        {
            lock (_lock)
            {
                _height = height;
                _validatorSet = validatorSet;
                _roundVoteSets = new Dictionary<int, RoundVoteSet>();
                _peerCatchupRounds = new Dictionary<PublicKey, List<int>>();

                AddRound(0);
                _round = 0;
            }
        }

        public long Height()
        {
            lock (_lock)
            {
                return _height;
            }
        }

        public int Round()
        {
            lock (_lock)
            {
                return _round;
            }
        }

        // Create more RoundVoteSets up to round.
        public void SetRound(int round)
        {
            lock (_lock)
            {
                // FIXME: This shouldn't be _round + 1?
                var newRound = _round + 1;
                if (_round != 0 && (round < newRound))
                {
                    throw new ArgumentException("Round must increase");
                }

                for (int r = newRound; r <= round; r++)
                {
                    if (_roundVoteSets.ContainsKey(r))
                    {
                        continue; // Already exists because peerCatchupRounds.
                    }

                    AddRound(r);
                }

                _round = round;
            }
        }

        public void AddRound(int round)
        {
            if (_roundVoteSets.ContainsKey(round))
            {
                throw new ArgumentException($"Add round for an existing round: {round}");
            }

            _logger.Debug("Adding round {Round}", round);
            VoteSet preVotes = new VoteSet(_height, round, VoteFlag.PreVote, _validatorSet);
            VoteSet preCommits = new VoteSet(_height, round, VoteFlag.PreCommit, _validatorSet);
            _roundVoteSets[round] = new RoundVoteSet(preVotes, preCommits);
        }

        // Duplicate votes return added=false, err=nil.
        // By convention, peerID is "" if origin is self.
        public void AddVote(Vote vote)
        {
            lock (_lock)
            {
                PublicKey publicKey = vote.ValidatorPublicKey;
                if (!vote.Flag.Equals(VoteFlag.PreVote) &&
                    !vote.Flag.Equals(VoteFlag.PreCommit))
                {
                    throw new InvalidVoteException(
                        $"VoteFlag should be either {VoteFlag.PreVote} or {VoteFlag.PreCommit}",
                        vote);
                }

                VoteSet voteSet;

                try
                {
                    voteSet = GetVoteSet(vote.Round, vote.Flag);
                }
                catch (KeyNotFoundException)
                {
                    if (!_peerCatchupRounds.ContainsKey(publicKey))
                    {
                        _peerCatchupRounds[publicKey] = new List<int>();
                    }

                    List<int> rounds = _peerCatchupRounds[publicKey];
                    if (rounds.Count < 2)
                    {
                        AddRound(vote.Round);
                        voteSet = GetVoteSet(vote.Round, vote.Flag);
                        rounds.Add(vote.Round);
                        _peerCatchupRounds[publicKey] = rounds;
                    }
                    else
                    {
                        throw new InvalidVoteException(
                            $"Got vote from unwanted round {vote.Round}",
                            vote);
                    }
                }

                voteSet.AddVote(vote);
            }
        }

        public VoteSet PreVotes(int round)
        {
            lock (_lock)
            {
                return GetVoteSet(round, VoteFlag.PreVote);
            }
        }

        public VoteSet PreCommits(int round)
        {
            lock (_lock)
            {
                return GetVoteSet(round, VoteFlag.PreCommit);
            }
        }

        // Last round and blockID that has +2/3 prevotes for a particular block or nil.
        // Returns -1 if no such round exists.
        public (int, BlockHash) POLInfo()
        {
            lock (_lock)
            {
                for (int r = _round; r >= 0; r--)
                {
                    VoteSet voteSet = GetVoteSet(r, VoteFlag.PreVote);
                    bool exists = voteSet.TwoThirdsMajority(out BlockHash polBlockHash);
                    if (exists)
                    {
                        return (r, polBlockHash);
                    }
                }

                return (-1, default(BlockHash));
            }
        }

        /// <summary>
        /// Gets a <see cref="VoteSet"/> for given round and flag.
        /// </summary>
        /// <param name="round">A round of the <see cref="VoteSet"/> to get.</param>
        /// <param name="voteFlag">A vote flag of the <see cref="VoteSet"/> to get.</param>
        /// <returns>A <see cref="VoteSet"/> for given round and flag.</returns>
        /// <exception cref="KeyNotFoundException">Thrown when <see cref="VoteSet"/> for
        /// given round does not exist.
        /// </exception>
        /// <exception cref="ArgumentException">Thrown when given <paramref name="voteFlag"/>
        /// is not either <see cref="VoteFlag.PreVote"/> or <see cref="VoteFlag.PreCommit"/>.
        /// </exception>
        public VoteSet GetVoteSet(int round, VoteFlag voteFlag)
        {
            RoundVoteSet roundVoteSet;

            // TODO: Check if try-catch is needed for KeyNotFoundException.
            roundVoteSet = _roundVoteSets[round];
            return voteFlag switch
            {
                VoteFlag.PreVote => roundVoteSet.PreVotes,
                VoteFlag.PreCommit => roundVoteSet.PreCommits,
                _ => throw new ArgumentException($"Unexpected vote type: {voteFlag}"),
            };
        }

        // If a peer claims that it has 2/3 majority for given blockKey, call this.
        // NOTE: if there are too many peers, or too much peer churn,
        // this can cause memory issues.
        // TODO: implement ability to remove peers too
        public bool SetPeerMaj23(Maj23 maj23)
        {
            lock (_lock)
            {
                if (!maj23.Flag.Equals(VoteFlag.PreVote) &&
                    !maj23.Flag.Equals(VoteFlag.PreCommit))
                {
                    throw new InvalidMaj23Exception(
                        $"Maj23 must have either {VoteFlag.PreVote} or {VoteFlag.PreCommit} " +
                        $"(Actual: {maj23.Flag})",
                        maj23);
                }

                VoteSet voteSet = GetVoteSet(maj23.Round, maj23.Flag);
                return voteSet.SetPeerMaj23(maj23);
            }
        }

        internal class RoundVoteSet
        {
            public RoundVoteSet(VoteSet preVotes, VoteSet preCommits)
            {
                PreVotes = preVotes;
                PreCommits = preCommits;
            }

            public VoteSet PreVotes { get; set; }

            public VoteSet PreCommits { get; set; }

            public int Count => PreVotes.TotalCount + PreCommits.TotalCount;
        }
    }
}
