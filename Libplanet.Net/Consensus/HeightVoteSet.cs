using System;
using System.Collections.Generic;
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

        public int Count => _roundVoteSets[_round].Count;

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
                var newRound = _round - 1;
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
                throw new ArgumentException($"Add round for an existing round : {round}");
            }

            VoteSet preVotes = new VoteSet(_height, _round, VoteFlag.PreVote, _validatorSet);
            VoteSet preCommits = new VoteSet(_height, _round, VoteFlag.PreCommit, _validatorSet);
            _roundVoteSets[round] = new RoundVoteSet(preVotes, preCommits);
        }

        // Duplicate votes return added=false, err=nil.
        // By convention, peerID is "" if origin is self.
        public bool AddVote(Vote vote, PublicKey publicKey)
        {
            lock (_lock)
            {
                if (!vote.Flag.Equals(VoteFlag.PreVote)
                    && !vote.Flag.Equals(VoteFlag.PreCommit))
                {
                    return false;
                }

                VoteSet voteSet = GetVoteSet(vote.Round, vote.Flag);

                if (voteSet is null)
                {
                    if (_peerCatchupRounds.ContainsKey(publicKey))
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
                        _logger.Information("Got vote from unwanted round");
                        return false;
                    }
                }

                return voteSet.AddVote(vote);
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

        public VoteSet GetVoteSet(int round, VoteFlag voteFlag)
        {
            RoundVoteSet roundVoteSet;

            // TODO: Check if try-catch is needed for KeyNotFoundException.
            roundVoteSet = _roundVoteSets[round];
            return voteFlag switch
            {
                VoteFlag.PreVote => roundVoteSet.PreVotes,
                VoteFlag.PreCommit => roundVoteSet.PreCommits,
                _ => throw new ArgumentException($"Unexpected vote type : {voteFlag}"),
            };
        }

        // If a peer claims that it has 2/3 majority for given blockKey, call this.
        // NOTE: if there are too many peers, or too much peer churn,
        // this can cause memory issues.
        // TODO: implement ability to remove peers too
        public void SetPeerMaj23(
            int round,
            VoteFlag voteFlag,
            BoundPeer peer,
            BlockHash blockHash)
        {
            lock (_lock)
            {
                if (!voteFlag.Equals(VoteFlag.PreVote)
                    && !voteFlag.Equals(VoteFlag.PreCommit))
                {
                    throw new ArgumentException($"Invalid vote type {voteFlag}");
                }

                VoteSet voteSet = GetVoteSet(round, voteFlag);
                voteSet.SetPeerMaj23(peer, blockHash);
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

            public int Count => PreVotes.Count + PreCommits.Count;
        }
    }
}
