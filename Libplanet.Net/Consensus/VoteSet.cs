using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Net.Consensus
{
    public class VoteSet
    {
        private readonly long _height;
        private readonly int _round;
        private readonly VoteFlag _voteType;
        private readonly ValidatorSet _validatorSet;
        private readonly object _lock;
        private readonly Dictionary<PublicKey, Vote> _votes; // Primary votes to share
        private readonly Dictionary<BlockHash, BlockVotes> _votesByBlock;
        private readonly Dictionary<BoundPeer, BlockHash> _peerMaj23s;
        private BlockHash? _maj23; // First 2/3 majority seen

        public VoteSet(
            long height,
            int round,
            VoteFlag voteType,
            ValidatorSet validatorSet)
        {
            _height = height;
            _round = round;
            _voteType = voteType;
            _validatorSet = validatorSet;
            _lock = new object();
            _votes = new Dictionary<PublicKey, Vote>();
            _votesByBlock = new Dictionary<BlockHash, BlockVotes>();
            _peerMaj23s = new Dictionary<BoundPeer, BlockHash>();
        }

        public IEnumerable<Validator> Validators => _validatorSet.Validators;

        public BigInteger Sum => _validatorSet.GetValidatorsPower(
            _votes.Values.Select(vote => vote.ValidatorPublicKey).ToList());

        public int Count => _votes.Count;

        public int TotalCount => _votesByBlock.Count;

        public bool AddVote(Vote vote)
        {
            PublicKey validatorKey = vote.ValidatorPublicKey;

            if (validatorKey is null)
            {
                throw new ArgumentException("ValidatorKey of the vote cannot be null");
            }

            if (!_validatorSet.ContainsPublicKey(validatorKey))
            {
                return false;
            }

            int validatorIndex = _validatorSet.FindIndex(validatorKey);
            BlockHash blockHash = vote.BlockHash;

            if (vote.Height != _height
                || vote.Round != _round
                || vote.Flag != _voteType)
            {
                return false;
            }

            if (vote.Signature.SequenceEqual(GetVote(validatorKey, blockHash)?.Signature))
            {
                return false;
            }

            if (!vote.Verify())
            {
                return false;
            }

            // Add vote and get conflicting vote if any.
            return AddVerifiedVote(vote, blockHash, _validatorSet.GetValidator(validatorKey).Power);
        }

        public bool AddVerifiedVote(
            Vote vote,
            BlockHash blockHash,
            BigInteger votingPower)
        {
            var publicKey = vote.ValidatorPublicKey;
            Vote? conflicting = null;

            // Already exists in voteSet.votes?
            if (_votes.ContainsKey(publicKey))
            {
                var existing = _votes[publicKey];
                if (existing.BlockHash.Equals(vote.BlockHash))
                {
                    throw new Exception("AddVerifiedVote does not expect duplicate votes");
                }
                else
                {
                    conflicting = existing;
                }

                // Replace vote if blockKey matches voteSet.maj23.
                if (_maj23 is { } maj23NotNull && maj23NotNull.Equals(blockHash))
                {
                    _votes[publicKey] = vote;
                }

                // Otherwise don't add it to voteSet.votes
            }
            else
            {
                // Add to voteSet.votes and incr .sum
                _votes[publicKey] = vote;
            }

            if (_votesByBlock.ContainsKey(blockHash))
            {
                if (conflicting is null && !_votesByBlock[blockHash].PeerMaj23)
                {
                    // There's a conflict and no peer claims that this block is special.
                    return false;
                }

                // We'll add the vote in a bit.
            }
            else
            {
                // .votesByBlock doesn't exist...
                if (conflicting != null)
                {
                    // ... and there's a conflicting vote.
                    // We're not even tracking this blockKey, so just forget it.
                    return false;
                }

                // ... and there's no conflicting vote.
                // Start tracking this blockKey
                _votesByBlock[blockHash] = new BlockVotes();

                // We'll add the vote in a bit.
            }

            BlockVotes votesByBlock = _votesByBlock[blockHash];

            // Before adding to votesByBlock, see if we'll exceed quorum
            BigInteger origSum = votesByBlock.Sum;
            BigInteger quorum = _validatorSet.TwoThirdsPower + 1;

            // Add vote to votesByBlock
            votesByBlock.AddVerifiedVote(vote, votingPower);

            // If we just crossed the quorum threshold and have 2/3 majority...
            if (origSum < quorum && quorum <= votesByBlock.Sum && _maj23 is null)
            {
                _maj23 = vote.BlockHash;

                // And also copy votes over to voteSet.votes
                foreach (var pair in votesByBlock.Votes)
                {
                    _votes[pair.Key] = pair.Value;
                }
            }

            return true;
        }

        public bool Contains(PublicKey publicKey, BlockHash blockHash)
        {
            return _votes.Values.Any(
                vote => vote.ValidatorPublicKey.Equals(publicKey)
                && vote.BlockHash.Equals(blockHash));
        }

        public Vote? GetVote(PublicKey publicKey, BlockHash blockHash)
        {
            Vote vote;
            try
            {
                vote = _votes[publicKey];
                if (vote.BlockHash.Equals(blockHash))
                {
                    return vote;
                }
            }
            catch (KeyNotFoundException)
            {
            }

            try
            {
                return _votesByBlock[blockHash].Votes[publicKey];
            }
            catch (KeyNotFoundException)
            {
            }

            return null;
        }

        public IEnumerable<Vote> GetVotes(BlockHash blockHash) => _votes.Values;

        // If a peer claims that it has 2/3 majority for given blockKey, call this.
        // NOTE: if there are too many peers, or too much peer churn,
        // this can cause memory issues.
        // TODO: implement ability to remove peers too
        // NOTE: VoteSet must not be nil
        public void SetPeerMaj23(BoundPeer peer, BlockHash blockHash)
        {
            lock (_lock)
            {
                // Make sure peer hasn't already told us something.
                try
                {
                    BlockHash hash = _peerMaj23s[peer];
                    if (hash.Equals(blockHash))
                    {
                        return;
                    }
                    else
                    {
                        throw new ArgumentException(
                            $"Received conflicting blockID from peer {peer}. ",
                            $"Expected : {hash}, Actual : {blockHash}");
                    }
                }
                catch (KeyNotFoundException)
                {
                }

                _peerMaj23s[peer] = blockHash;

                try
                {
                    BlockVotes votesByBlock = _votesByBlock[blockHash];
                    if (votesByBlock.PeerMaj23)
                    {
                        return;
                    }
                    else
                    {
                        votesByBlock.PeerMaj23 = true;
                    }
                }
                catch (KeyNotFoundException)
                {
                    _votesByBlock[blockHash] = new BlockVotes();
                }

                return;
            }
        }

        // Implements VoteSetReader.
        public bool[] BitArray()
        {
            lock (_lock)
            {
                return _validatorSet.Validators.Select(validator =>
                     _votes.ContainsKey(validator.PublicKey)).ToArray();
            }
        }

        public bool[] BitArrayByBlockHash(BlockHash blockHash)
        {
            lock (_lock)
            {
                if (_votesByBlock.ContainsKey(blockHash))
                {
                    return _validatorSet.Validators.Select(validator =>
                        _votesByBlock[blockHash].Votes.ContainsKey(validator.PublicKey)).ToArray();
                }

                return _validatorSet.Validators.Select(_ => false).ToArray();
            }
        }

        // List returns a copy of the list of votes stored by the VoteSet.
        public List<Vote> List()
            => _votes.Values.OrderBy(vote => vote.ValidatorPublicKey.ToAddress()).ToList();

        // List returns a copy of the list of votes stored by the VoteSet.
        public List<Vote?> MappedList()
            => _validatorSet.PublicKeys.Select(
                key => _votes.TryGetValue(key, out Vote? vote) ? vote : null).ToList();

        // NOTE: if validator has conflicting votes, returns "canonical" vote
        // Implements VoteSetReader.
        public Vote GetByPublicKey(PublicKey publicKey)
        {
            lock (_lock)
            {
                if (_votes.ContainsKey(publicKey))
                {
                    return _votes[publicKey];
                }

                throw new KeyNotFoundException(nameof(publicKey));
            }
        }

        public bool HasTwoThirdsMajority()
        {
            lock (_lock)
            {
                return !(_maj23 is null);
            }
        }

        // Implements VoteSetReader.
        public bool IsCommit()
        {
            if (_voteType != VoteFlag.PreCommit)
            {
                return false;
            }

            return HasTwoThirdsMajority();
        }

        public bool HasTwoThirdsAny()
        {
            lock (_lock)
            {
                return Sum > _validatorSet.TwoThirdsPower;
            }
        }

        public bool HasAll()
        {
            lock (_lock)
            {
                return Sum == _validatorSet.TotalPower;
            }
        }

        // If there was a +2/3 majority for blockID, return blockID and true.
        // Else, return the empty BlockID{} and false.
        public bool TwoThirdsMajority(out BlockHash blockHash)
        {
            lock (_lock)
            {
                if (_maj23 is { } maj23)
                {
                    blockHash = maj23;
                    return true;
                }

                return false;
            }
        }

        public BlockCommit ToBlockCommit()
        {
            if (!IsCommit())
            {
                throw new Exception();
            }

            return new BlockCommit(
                _height, _round, _maj23!.Value, _votes.Values.ToImmutableArray());
        }

        internal class BlockVotes
        {
            public BlockVotes()
            {
                PeerMaj23 = false;
                Votes = new Dictionary<PublicKey, Vote>();
                Sum = BigInteger.Zero;
            }

            public bool PeerMaj23 { get; set; }

            public Dictionary<PublicKey, Vote> Votes { get; set; }

            public BigInteger Sum { get; set; }

            public void AddVerifiedVote(Vote vote, BigInteger power)
            {
                if (Votes.ContainsKey(vote.ValidatorPublicKey))
                {
                    return;
                }

                Votes[vote.ValidatorPublicKey] = vote;
                Sum += power;
            }
        }
    }
}
