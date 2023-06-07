using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public class VoteSetBitsMetadata : IEquatable<VoteSetBitsMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x48 };                // 'H'
        private static readonly byte[] RoundKey = { 0x52 };                 // 'R'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly byte[] ValidatorPublicKeyKey = { 0x50 };    // 'P'
        private static readonly byte[] BlockHashKey = { 0x42 };             // 'B'
        private static readonly byte[] FlagKey = { 0x46 };                  // 'F'
        private static readonly byte[] VotesKey = { 0x56 };                 // 'V'

        private static Codec _codec = new Codec();

        public VoteSetBitsMetadata(
            long height,
            int round,
            BlockHash blockHash,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            VoteFlag flag,
            IEnumerable<Vote> votes)
        {
            if (height < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(height),
                    "Height must be greater than or equal to 0.");
            }
            else if (round < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(round),
                    "Round must be greater than or equal to 0.");
            }

            if (flag == VoteFlag.Null || flag == VoteFlag.Unknown)
            {
                throw new ArgumentException(
                    "Vote flag should be PreVote or PreCommit.",
                    nameof(flag));
            }

            var votesArray = votes.ToArray();

            if (votesArray.Any(vote => !vote.BlockHash.Equals(blockHash)))
            {
                throw new ArgumentException(
                    "All votes' BlockHash should be equal to given BlockHash.",
                    nameof(flag));
            }

            if (votesArray.Any(vote => vote.Flag != flag))
            {
                throw new ArgumentException(
                    "All votes' VoteFlag should be equal to given VoteFlag.",
                    nameof(flag));
            }

            Height = height;
            Round = round;
            BlockHash = blockHash;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
            Flag = flag;
            Votes = votesArray;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VoteSetBitsMetadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                blockHash: new BlockHash(encoded.GetValue<Binary>(BlockHashKey).ByteArray),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    encoded.GetValue<Binary>(ValidatorPublicKeyKey).ByteArray),
                flag: (VoteFlag)(int)encoded.GetValue<Integer>(FlagKey).Value,
                votes: encoded.GetValue<List>(VotesKey).Select(value => new Vote(value)))
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// A height of the votes in the given vote set.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round of the votes in the given vote set.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// The <see cref="Libplanet.Blocks.BlockHash"/> of the votes in the vote sets.
        /// </summary>
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The time at which the set is created.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the vote set.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The <see cref="VoteFlag"/> of the votes in the vote set.
        /// </summary>
        public VoteFlag Flag { get; }

        /// <summary>
        /// <see cref="Vote"/>s of the vote set.
        /// </summary>
        public IEnumerable<Vote> Votes { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="VoteSetBitsMetadata"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true))
                    .Add(BlockHashKey, BlockHash.ByteArray)
                    .Add(FlagKey, (int)Flag)
                    .Add(VotesKey, new List(Votes.Select(vote => vote.Bencoded)));

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="VoteSetBitsMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="VoteSetBits"/>.</returns>
        public VoteSetBits Sign(PrivateKey signer) =>
            new VoteSetBits(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(VoteSetBitsMetadata? other)
        {
            return other is { } metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                BlockHash.Equals(metadata.BlockHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Flag == metadata.Flag &&
                Votes.SequenceEqual(other.Votes);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is VoteSetBitsMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            int votesHashCode = Votes.Aggregate(
                0,
                (current, vote) => (current * 397) ^ vote.GetHashCode());

            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey,
                Flag,
                votesHashCode);
        }
    }
}
