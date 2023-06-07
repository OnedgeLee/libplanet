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
        public void VoteFlagShouldBePreVoteOrPreCommit()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size));
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var preVotes = new Vote[]
            {
                new VoteMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    key1.PublicKey,
                    VoteFlag.PreVote).Sign(key1),
                new VoteMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    key2.PublicKey,
                    VoteFlag.PreVote).Sign(key2),
            };
            var preCommits = new Vote[]
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

            // Works with PreVote and PreCommit vote flags.
            _ = new VoteSetBitsMetadata(
                2,
                2,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.PreVote,
                preVotes);
            _ = new VoteSetBitsMetadata(
                2,
                2,
                hash,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                VoteFlag.PreCommit,
                preCommits);

            // Null and Unknown vote flags are not allowed.
            Assert.Throws<ArgumentException>(
                () => new VoteSetBitsMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    new PrivateKey().PublicKey,
                    VoteFlag.Null,
                    preVotes));
            Assert.Throws<ArgumentException>(
                () => new VoteSetBitsMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    new PrivateKey().PublicKey,
                    VoteFlag.Unknown,
                    preVotes));

            // Votes should have same vote flag as metadata's vote flag.
            Assert.Throws<ArgumentException>(
                () => new VoteSetBitsMetadata(
                    2,
                    2,
                    hash,
                    DateTimeOffset.UtcNow,
                    new PrivateKey().PublicKey,
                    VoteFlag.PreVote,
                    preCommits));

            // Votes should have same BlockHash as metadata's BlockHash.
            Assert.Throws<ArgumentException>(
                () => new VoteSetBitsMetadata(
                    2,
                    2,
                    new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)),
                    DateTimeOffset.UtcNow,
                    new PrivateKey().PublicKey,
                    VoteFlag.PreVote,
                    preVotes));
        }

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
