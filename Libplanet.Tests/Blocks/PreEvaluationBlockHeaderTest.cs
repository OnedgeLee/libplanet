using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Fixtures;
using Xunit;
using static Libplanet.ByteUtil;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blocks
{
    // FIXME: The most of the following tests are duplicated in PreEvaluationBlockTest.
    public class PreEvaluationBlockHeaderTest
    {
        protected readonly BlockContentFixture _contents;
        protected readonly Codec _codec;

        public PreEvaluationBlockHeaderTest()
        {
            _contents = new BlockContentFixture();
            _codec = new Codec();
        }

        [Fact]
        public void CopyConstructor()
        {
            BlockMetadata metadata = new BlockMetadata(_contents.GenesisContent);
            var preEvalBlock = new PreEvaluationBlockHeader(
                metadata, metadata.DerivePreEvaluationHash(default));
            var copy = new PreEvaluationBlockHeader(preEvalBlock);
            AssertPreEvaluationBlockHeadersEqual(preEvalBlock, copy);
        }

        [Fact]
        public void ValidatePreEvaluationHash()
        {
            BlockMetadata metadataPv1 = new BlockMetadata(_contents.Block1ContentPv1);
            Assert.True(metadataPv1.ProtocolVersion <= BlockMetadata.PoWProtocolVersion);

            // Should be fine.
            var preEvaluationBlockHeaderPv1 = new PreEvaluationBlockHeader(
                metadataPv1,
                metadataPv1.DerivePreEvaluationHash(new Nonce(TestUtils.GetRandomBytes(4))));

            BlockMetadata metadata = new BlockMetadata(_contents.Block1Content);
            Assert.False(metadata.ProtocolVersion <= BlockMetadata.PoWProtocolVersion);
            var preEvaluationBlockHeader = new PreEvaluationBlockHeader(
                metadata,
                metadata.DerivePreEvaluationHash(default));
        }

        [Fact]
        public void MakeCandidateData()
        {
            var random = new Random();
            Bencodex.Types.Dictionary expectedGenesis = Bencodex.Types.Dictionary.Empty
                .Add("index", 0L)
                .Add("timestamp", "2021-09-06T04:46:39.123000Z")
                .Add("nonce", default(Nonce).ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f")
                )
                .Add("protocol_version", 5)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray)
                .Add(
                    "transaction_fingerprint",
                    ParseHex("7786de6a7c745f9628b44f58df1882fbae30763d3515b2c81ad34a27c81f8845"));
            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedGenesis, genesis.MakeCandidateData(default));
            HashDigest<SHA256> stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedGenesis.SetItem("state_root_hash", stateRootHash.ByteArray),
                genesis.MakeCandidateData(stateRootHash)
            );

            Bencodex.Types.Dictionary expectedBlock1 = Bencodex.Types.Dictionary.Empty
                .Add("index", 1L)
                .Add("timestamp", "2021-09-06T08:01:09.045000Z")
                .Add("nonce", default(Nonce).ByteArray)
                .Add(
                    "public_key",
                    ParseHex("0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed")
                )
                .Add(
                    "previous_hash",
                    ParseHex(
                        "341e8f360597d5bc45ab96aabc5f1b0608063f30af7bd4153556c9536a07693a"
                    )
                )
                .Add(
                    "transaction_fingerprint",
                    ParseHex(
                        "654698d34b6d9a55b0c93e4ffb2639278324868c91965bc5f96cb3071d6903a0"
                    )
                )
                .Add("protocol_version", 5)
                .Add("state_root_hash", default(HashDigest<SHA256>).ByteArray);
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            AssertBencodexEqual(expectedBlock1, block1.MakeCandidateData(default));
            stateRootHash = random.NextHashDigest<SHA256>();
            AssertBencodexEqual(
                expectedBlock1.SetItem("state_root_hash", stateRootHash.ByteArray),
                block1.MakeCandidateData(stateRootHash)
            );
        }

        [Fact]
        public void MakeSignature()
        {
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var key = _contents.Block1Key;
            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            ImmutableArray<byte> validSig = block1.MakeSignature(key, arbitraryHash);
            Assert.True(
                key.PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );
            Assert.False(
                key.PublicKey.Verify(_codec.Encode(block1.MakeCandidateData(default)), validSig)
            );
            Assert.False(
                new PrivateKey().PublicKey.Verify(
                    _codec.Encode(block1.MakeCandidateData(arbitraryHash)),
                    validSig
                )
            );

            ArgumentException e = Assert.Throws<ArgumentException>(
                () => block1.MakeSignature(new PrivateKey(), arbitraryHash)
            );
            Assert.Equal("privateKey", e.ParamName);
            Assert.Contains("does not match", e.Message);

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.Block1MetadataPv1,
                _contents.Block1MetadataPv1.DerivePreEvaluationHash(default));
            InvalidOperationException e2 = Assert.Throws<InvalidOperationException>(
                () => blockPv1.MakeSignature(key, arbitraryHash)
            );
            Assert.Contains("protocol version", e2.Message);
        }

        [Fact]
        public void VerifySignature()
        {
            var random = new Random();
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));

            // Same as block1.MakeSignature(_contents.Block1Key, arbitraryHash)
            ImmutableArray<byte> validSig = ByteUtil.ParseHexToImmutable(
                "3044022070295135bbe705ca79723cbad8bc8c958c6d2e8a8a17d77ecde23135757779" +
                "e402207ba382b665c7960b3c036ddde850641b8782db6042eb74f68b65c16fdb06b146"
            );

            AssertBytesEqual(
                validSig,
                block1.MakeSignature(_contents.Block1Key, arbitraryHash));
            Assert.True(block1.VerifySignature(validSig, arbitraryHash));
            Assert.False(block1.VerifySignature(null, arbitraryHash));
            Assert.False(block1.VerifySignature(validSig, default));
            Assert.False(
                block1.VerifySignature(
                    random.NextBytes(validSig.Length).ToImmutableArray(),
                    arbitraryHash
                )
            );

            var blockPv1 = new PreEvaluationBlockHeader(
                _contents.Block1MetadataPv1,
                _contents.Block1MetadataPv1.DerivePreEvaluationHash(default));
            Assert.True(blockPv1.VerifySignature(null, arbitraryHash));
            Assert.False(blockPv1.VerifySignature(validSig, arbitraryHash));
        }

        [Fact]
        public void DeriveBlockHash()
        {
            Func<string, BlockHash> fromHex = BlockHash.FromString;
            HashDigest<SHA256> arbitraryHash = HashDigest<SHA256>.FromString(
                "e6b3803208416556db8de50670aaf0b642e13c90afd77d24da8f642dc3e8f320"
            );

            var genesis = new PreEvaluationBlockHeader(
                _contents.GenesisMetadata,
                _contents.GenesisMetadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("cea0c9ac3fa56829e7e1a7fb566803588f0407d95b45b1c0e7265d8dd27101c1"),
                genesis.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("1eaf76b6f4c6a6418884ac52330c125231a4e55ec7eb21fd71345d2e9844c085"),
                genesis.DeriveBlockHash(
                    default,
                    genesis.MakeSignature(_contents.GenesisKey, default)
                )
            );
            AssertBytesEqual(
                fromHex("a756ba9de50b2f09d90021b5825a1cf451ca5373ad036359e547dd8653c1fa94"),
                genesis.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("28c6e023f30597815e37b341c9b83385e0d52f555488979ee44a1d128a9ed6cf"),
                genesis.DeriveBlockHash(
                    arbitraryHash,
                    genesis.MakeSignature(_contents.GenesisKey, arbitraryHash))
            );

            var block1 = new PreEvaluationBlockHeader(
                _contents.Block1Metadata,
                _contents.Block1Metadata.DerivePreEvaluationHash(default));
            AssertBytesEqual(
                fromHex("4b6b0261d090214093bb9f00c545370500aded8f632a0ae058238f67a786ae36"),
                block1.DeriveBlockHash(default, null)
            );
            AssertBytesEqual(
                fromHex("f1a1b865f56103798fe6df04dac39378de70094dd79b7a5f5114db12bb4b20a0"),
                block1.DeriveBlockHash(default, block1.MakeSignature(_contents.Block1Key, default))
            );
            AssertBytesEqual(
                fromHex("119d9e28fc4feb5756da29d3e0dd40f92d03c54e2b7b7ff0d3b2b01751623ce6"),
                block1.DeriveBlockHash(arbitraryHash, null)
            );
            AssertBytesEqual(
                fromHex("df2d543374588f4e869d3c77c47b2200a0bca2729d904b349090afe919afef1c"),
                block1.DeriveBlockHash(
                    arbitraryHash, block1.MakeSignature(_contents.Block1Key, arbitraryHash)
                )
            );
        }
    }
}
