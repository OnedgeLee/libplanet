using System;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class VoteSetBitsMetadataTest
    {
        private static Bencodex.Codec _codec = new Bencodex.Codec();

        [Fact]
        public void Bencoded()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key = new PrivateKey();
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var votes = new Vote[]
            {
                new VoteMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    key1.PublicKey,
                    VoteFlag.PreCommit).Sign(key1),
                new VoteMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    key2.PublicKey,
                    VoteFlag.PreCommit).Sign(key2),
            };
            var expected = new VoteSetBitsMetadata(
                1,
                2,
                hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit,
                votes);
            var decoded = new VoteSetBitsMetadata(expected.Encoded);
            Assert.Equal(expected, decoded);
        }
    }
}
