using System;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus.Context
{
    public class MessageLogTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();
        private BlockChain<DumbAction> _blockChain;
        private BlockCommit _lastCommit;
        private MessageLog _messageLog;

        /// <summary>
        /// Sets up a <see cref="BlockChain{T}"/> with tip index of 1, i.e. two blocks.
        /// </summary>
        public MessageLogTest()
        {
            _blockChain = TestUtils.CreateDummyBlockChain(
                new MemoryStoreFixture(TestUtils.Policy.BlockAction));
            var block = _blockChain.ProposeBlock(
                TestUtils.Peer1Priv,
                DateTimeOffset.UtcNow,
                int.MaxValue,
                0,
                0);
            _lastCommit = TestUtils.CreateLastCommit(block.Hash, 1, 0);
            _messageLog = new MessageLog(2, TestUtils.Validators);
            _blockChain.Append(block);
        }

        [Fact]
        public void CannotAddDifferentHeight()
        {
            var preVote = new ConsensusPreVoteMsg(new VoteMetadata(
                3, 0, null, DateTimeOffset.UtcNow, TestUtils.Peer0Priv.PublicKey, VoteFlag.PreVote)
                    .Sign(TestUtils.Peer0Priv));

            Assert.Throws<ArgumentException>(() => _messageLog.Add(preVote));
        }

        [Fact]
        public void CannotAddUnknownValidator()
        {
            var key = new PrivateKey();
            var preVote = new ConsensusPreVoteMsg(new VoteMetadata(
                2, 0, null, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreVote).Sign(key));

            Assert.Throws<ArgumentException>(() => _messageLog.Add(preVote));
        }

        [Fact]
        public void CannotAddMultipleProposalsPerRound()
        {
            var block = _blockChain.ProposeBlock(
                TestUtils.Peer0Priv,
                DateTimeOffset.UtcNow,
                int.MaxValue,
                0,
                0,
                lastCommit: _lastCommit);
            var proposal0 = new ConsensusProposalMsg(new ProposalMetadata(
                2,
                0,
                DateTimeOffset.UtcNow,
                TestUtils.Peer0Priv.PublicKey,
                _codec.Encode(block.MarshalBlock()),
                -1).Sign(TestUtils.Peer0Priv));
            var proposal1 = new ConsensusProposalMsg(new ProposalMetadata(
                2,
                0,
                DateTimeOffset.UtcNow,
                TestUtils.Peer1Priv.PublicKey,
                _codec.Encode(block.MarshalBlock()),
                -1).Sign(TestUtils.Peer1Priv));

            _messageLog.Add(proposal0);
            Assert.Throws<ArgumentException>(() => _messageLog.Add(proposal1));
        }

        [Fact]
        public void CannotAddMultipleVotesPerRoundPerValidator()
        {
            Random random = new Random();
            var preVote0 = new ConsensusPreVoteMsg(new VoteMetadata(
                2, 0, null, DateTimeOffset.UtcNow, TestUtils.Peer0Priv.PublicKey, VoteFlag.PreVote)
                    .Sign(TestUtils.Peer0Priv));
            var preVote1 = new ConsensusPreVoteMsg(new VoteMetadata(
                2,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                TestUtils.Peer0Priv.PublicKey,
                VoteFlag.PreVote).Sign(TestUtils.Peer0Priv));
            var preCommit0 = new ConsensusPreCommitMsg(new VoteMetadata(
                2,
                0,
                null,
                DateTimeOffset.UtcNow,
                TestUtils.Peer0Priv.PublicKey,
                VoteFlag.PreCommit).Sign(TestUtils.Peer0Priv));
            var preCommit1 = new ConsensusPreCommitMsg(new VoteMetadata(
                2,
                0,
                new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                DateTimeOffset.UtcNow,
                TestUtils.Peer0Priv.PublicKey,
                VoteFlag.PreCommit).Sign(TestUtils.Peer0Priv));

            _messageLog.Add(preVote0);
            Assert.Throws<ArgumentException>(() => _messageLog.Add(preVote1));
            _messageLog.Add(preCommit0);
            Assert.Throws<ArgumentException>(() => _messageLog.Add(preCommit1));
        }

        [Fact]
        public void GetValidatorsCount()
        {
            var block = _blockChain.ProposeBlock(
                TestUtils.Peer0Priv,
                DateTimeOffset.UtcNow,
                int.MaxValue,
                0,
                0,
                lastCommit: _lastCommit);
            var proposal = new ConsensusProposalMsg(new ProposalMetadata(
                2,
                0,
                DateTimeOffset.UtcNow,
                TestUtils.Peer0Priv.PublicKey,
                _codec.Encode(block.MarshalBlock()),
                -1).Sign(TestUtils.Peer0Priv));
            var preVotes = TestUtils.PrivateKeys.Select(key => new ConsensusPreVoteMsg(
                new VoteMetadata(
                    2, 0, null, DateTimeOffset.UtcNow, key.PublicKey, VoteFlag.PreVote)
                    .Sign(key))).ToList();

            _messageLog.Add(proposal);
            foreach (var preVote in preVotes)
            {
                _messageLog.Add(preVote);
            }

            Assert.Equal(4, _messageLog.GetValidatorsCount(0));
            Assert.Equal(0, _messageLog.GetValidatorsCount(1));
            Assert.Equal(5, _messageLog.GetTotalCount());
        }

        [Fact]
        public void GetBlockCommit()
        {
            var block = _blockChain.ProposeBlock(
                TestUtils.Peer0Priv,
                DateTimeOffset.UtcNow,
                int.MaxValue,
                0,
                0,
                lastCommit: _lastCommit);
            var proposal = new ConsensusProposalMsg(new ProposalMetadata(
                2,
                0,
                DateTimeOffset.UtcNow,
                TestUtils.Peer0Priv.PublicKey,
                _codec.Encode(block.MarshalBlock()),
                -1).Sign(TestUtils.Peer0Priv));

            // Last vote has a different hash.
            var invalidHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var preCommits = TestUtils.PrivateKeys.Take(3).Select(key => new ConsensusPreCommitMsg(
                new VoteMetadata(
                    2,
                    0,
                    proposal.BlockHash,
                    DateTimeOffset.UtcNow,
                    key.PublicKey,
                    VoteFlag.PreCommit).Sign(key))).ToList();
            preCommits = preCommits.Concat(TestUtils.PrivateKeys.Skip(3).Select(key =>
                new ConsensusPreCommitMsg(
                    new VoteMetadata(
                        2,
                        0,
                        invalidHash,
                        DateTimeOffset.UtcNow,
                        key.PublicKey,
                        VoteFlag.PreCommit).Sign(key)))).ToList();
            var randomHash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));

            // Insufficient pre-commits.
            _messageLog.Add(proposal);
            foreach (var preCommit in preCommits.Take(2))
            {
                _messageLog.Add(preCommit);
            }

            Assert.Null(_messageLog.GetBlockCommit(0, randomHash));
            Assert.Null(_messageLog.GetBlockCommit(0, proposal.Proposal.BlockHash));

            // Add the rest.
            foreach (var preCommit in preCommits.Skip(2))
            {
                _messageLog.Add(preCommit);
            }

            Assert.Null(_messageLog.GetBlockCommit(0, randomHash));
            Assert.Null(_messageLog.GetBlockCommit(1, proposal.Proposal.BlockHash));
            var blockCommit = _messageLog.GetBlockCommit(0, proposal.Proposal.BlockHash);
            Assert.NotNull(blockCommit);
            Assert.Equal(
                3, blockCommit!.Votes.Where(vote => vote.Flag == VoteFlag.PreCommit).Count());
        }
    }
}