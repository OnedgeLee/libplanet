using System;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.Sys;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void ValidateNextBlock()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(validNextBlock, TestUtils.CreateBlockCommit(validNextBlock));
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockProtocolVersion()
        {
            var protocolVersion = _blockChain.Tip.ProtocolVersion;
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion,
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    miner: _fx.Proposer.PublicKey.ToAddress(),
                    publicKey: protocolVersion >= 2 ? _fx.Proposer.PublicKey : null,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: protocolVersion - 1,
                    index: 2L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                    miner: _fx.Proposer.PublicKey.ToAddress(),
                    publicKey: protocolVersion - 1 >= 2 ? _fx.Proposer.PublicKey : null,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
            Assert.Throws<InvalidBlockProtocolVersionException>(() =>
            {
                Block<DumbAction> block3 = new BlockContent<DumbAction>(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion + 1,
                        index: 2L,
                        timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                        miner: _fx.Proposer.PublicKey.ToAddress(),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: block1.Hash,
                        txHash: null,
                        lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
                _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            });
        }

        [Fact]
        public void ValidateNextBlockInvalidIndex()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block<DumbAction> prev = _blockChain.Tip;
            Block<DumbAction> blockWithAlreadyUsedIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: prev.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(
                    blockWithAlreadyUsedIndex,
                    TestUtils.CreateBlockCommit(blockWithAlreadyUsedIndex))
            );

            Block<DumbAction> blockWithIndexAfterNonexistentIndex = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: prev.Index + 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: prev.Hash,
                    txHash: null,
                    lastCommit: TestUtils.CreateBlockCommit(prev.Hash, prev.Index + 1, 0)))
                    .Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(
                    blockWithIndexAfterNonexistentIndex,
                    TestUtils.CreateBlockCommit(blockWithIndexAfterNonexistentIndex))
            );
        }

        [Fact]
        public void ValidateNextBlockInvalidPreviousHash()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block<DumbAction> invalidPreviousHashBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    // Should be _validNext.Hash instead
                    previousHash: _validNext.PreviousHash,
                    txHash: null,
                    // ReSharper disable once PossibleInvalidOperationException
                    lastCommit: TestUtils.CreateBlockCommit(_validNext.PreviousHash.Value, 1, 0)))
                .Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockPreviousHashException>(() =>
                    _blockChain.Append(
                        invalidPreviousHashBlock,
                        TestUtils.CreateBlockCommit(invalidPreviousHashBlock)));
        }

        [Fact]
        public void ValidateNextBlockInvalidTimestamp()
        {
            _blockChain.Append(_validNext, TestUtils.CreateBlockCommit(_validNext));

            Block<DumbAction> invalidPreviousTimestamp = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: _validNext.Timestamp.AddSeconds(-1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _validNext.Hash,
                    txHash: null,
                    lastCommit: TestUtils.CreateBlockCommit(_validNext)))
                .Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockTimestampException>(() =>
                    _blockChain.Append(
                        invalidPreviousTimestamp,
                        TestUtils.CreateBlockCommit(invalidPreviousTimestamp)));
        }

        [Fact]
        public void ValidateNextBlockInvalidStateRootHash()
        {
            IKeyValueStore stateKeyValueStore = new MemoryKeyValueStore();
            var policy = new BlockPolicy<DumbAction>(
                blockInterval: TimeSpan.FromMilliseconds(3 * 60 * 60 * 1000)
            );
            var stateStore = new TrieStateStore(stateKeyValueStore);
            IStore store = new MemoryStore();
            var genesisBlock = TestUtils.ProposeGenesis<DumbAction>(
                TestUtils.GenesisProposer.PublicKey
            ).Evaluate(
                TestUtils.GenesisProposer,
                policy.BlockAction,
                policy.NativeTokens.Contains,
                stateStore
            );
            store.PutBlock(genesisBlock);
            Assert.NotNull(store.GetStateRootHash(genesisBlock.Hash));

            var chain1 = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock
            );

            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: 1,
                    timestamp: genesisBlock.Timestamp.AddSeconds(1),
                    miner: TestUtils.GenesisProposer.PublicKey.ToAddress(),
                    publicKey: TestUtils.GenesisProposer.PublicKey,
                    previousHash: genesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(TestUtils.GenesisProposer, chain1);

            var policyWithBlockAction = new BlockPolicy<DumbAction>(
                new SetStatesAtBlock(default, (Text)"foo", 1),
                policy.BlockInterval
            );
            var chain2 = new BlockChain<DumbAction>(
                policyWithBlockAction,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock
            );
            Assert.Throws<InvalidBlockStateRootHashException>(() =>
                chain2.Append(block1, TestUtils.CreateBlockCommit(block1)));
        }

        [Fact]
        public void ValidateNextBlockLastCommitNullAtIndexOne()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(validNextBlock, TestUtils.CreateBlockCommit(validNextBlock));
            Assert.Equal(_blockChain.Tip, validNextBlock);
        }

        [Fact]
        public void ValidateNextBlockLastCommitUpperIndexOne()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var blockCommit = TestUtils.CreateBlockCommit(block1);
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(_blockChain.Tip, block2);
        }

        [Fact]
        public void ValidateNextBlockLastCommitFailsUnexpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var invalidValidator = new PrivateKey();
            var validators = TestUtils.ValidatorPrivateKeys.Append(invalidValidator).ToList();
            var votes = validators.Select(key => new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();
            var blockCommit = new BlockCommit(1, 0, block1.Hash, votes);

            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
        }

        [Fact]
        public void ValidateNextBlockLastCommitFailsDropExpectedValidator()
        {
            Block<DumbAction> block1 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

            var keysExceptPeer0 = TestUtils.ValidatorPrivateKeys.Where(
                key => key != TestUtils.ValidatorPrivateKeys[0]).ToList();
            var votes = keysExceptPeer0.Select(key => new VoteMetadata(
                1,
                0,
                block1.Hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();
            var blockCommit = new BlockCommit(1, 0, block1.Hash, votes);
            Block<DumbAction> block2 = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: block1.Hash,
                    txHash: null,
                    lastCommit: blockCommit)).Propose().Evaluate(_fx.Proposer, _blockChain);
            Assert.Throws<InvalidBlockLastCommitException>(() =>
                _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2)));
        }

        [Fact]
        public void ValidateBlockCommitGenesis()
        {
            InvalidBlockCommitException ibcm =
                _blockChain.ValidateBlockCommit(_fx.GenesisBlock, null);

            Assert.Null(ibcm);

            ibcm = _blockChain.ValidateBlockCommit(
                _fx.GenesisBlock,
                new BlockCommit(
                    0,
                    0,
                    _fx.GenesisBlock.Hash,
                    TestUtils.ValidatorPrivateKeys.Select(x => new VoteMetadata(
                        0,
                        0,
                        _fx.GenesisBlock.Hash,
                        DateTimeOffset.UtcNow,
                        x.PublicKey,
                        VoteFlag.PreCommit).Sign(x)).ToImmutableArray()));

            Assert.NotNull(ibcm);
        }

        [Fact]
        public void ValidateBlockCommitFailsDifferentBlockHash()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(
                    validNextBlock,
                    TestUtils.CreateBlockCommit(
                        new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                        1,
                        0)));
        }

        [Fact]
        public void ValidateBlockCommitFailsDifferentHeight()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(
                    validNextBlock,
                    TestUtils.CreateBlockCommit(
                        validNextBlock.Hash,
                        2,
                        0)));
        }

        [Fact]
        public void ValidateBlockCommitFailsDifferentValidatorSet()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(
                    validNextBlock,
                    new BlockCommit(
                        1,
                        0,
                        validNextBlock.Hash,
                        Enumerable.Range(0, TestUtils.ValidatorSet.TotalCount)
                            .Select(x => new PrivateKey())
                            .Select(x => new VoteMetadata(
                            1,
                            0,
                            validNextBlock.Hash,
                            DateTimeOffset.UtcNow,
                            x.PublicKey,
                            VoteFlag.PreCommit).Sign(x)).ToImmutableArray())));
        }

        [Fact]
        public void ValidateBlockCommitFailsNullBlockCommit()
        {
            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: null)).Propose().Evaluate(_fx.Proposer, _blockChain);

            Assert.Throws<InvalidBlockCommitException>(() =>
                _blockChain.Append(validNextBlock, null));
        }

        [Fact]
        public void ValidateValidatorSetChangedBlock()
        {
            var genesisValidatorSet = _blockChain.GetValidatorSet();
            var newValidator = new Validator(new PrivateKey().PublicKey, BigInteger.One);
            var txs = new ImmutableArray<Transaction<DumbAction>>
            {
                Transaction<DumbAction>.Create(
                    _blockChain.GetNextTxNonce(_fx.Proposer.ToAddress()),
                    _fx.Proposer,
                    _fx.GenesisBlock.Hash,
                    systemAction: new SetValidator(newValidator.PublicKey, newValidator.Power),
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1)),
            };

            Block<DumbAction> setValidatorBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 1L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(1),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: BlockContent<DumbAction>.DeriveTxHash(txs),
                    lastCommit: null),
                transactions: txs).Propose().Evaluate(_fx.Proposer, _blockChain);

            _blockChain.Append(
                setValidatorBlock,
                new BlockCommit(
                    1L,
                    0,
                    setValidatorBlock.Hash,
                    _fx.ValidatorPrivateKeys.Select(privateKey => new VoteMetadata(
                        1L,
                        0,
                        setValidatorBlock.Hash,
                        _fx.GenesisBlock.Timestamp.AddDays(1),
                        privateKey.PublicKey,
                        VoteFlag.PreCommit).Sign(privateKey)).ToImmutableArray()));

            Assert.Equal(
                new ValidatorSet(genesisValidatorSet.Validators.Append(newValidator).ToList()),
                _blockChain.GetValidatorSet());

            Block<DumbAction> validNextBlock = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 2L,
                    timestamp: _fx.GenesisBlock.Timestamp.AddDays(2),
                    publicKey: _fx.Proposer.PublicKey,
                    previousHash: _fx.GenesisBlock.Hash,
                    txHash: null,
                    lastCommit: _blockChain.GetBlockCommit(1L)))
                .Propose().Evaluate(_fx.Proposer, _blockChain);

            _blockChain.Append(
                validNextBlock,
                new BlockCommit(
                    2L,
                    0,
                    validNextBlock.Hash,
                    _fx.ValidatorPrivateKeys.Select(privateKey => new VoteMetadata(
                        2L,
                        0,
                        validNextBlock.Hash,
                        _fx.GenesisBlock.Timestamp.AddDays(2),
                        privateKey.PublicKey,
                        VoteFlag.PreCommit).Sign(privateKey)).ToImmutableArray()));
        }
    }
}
