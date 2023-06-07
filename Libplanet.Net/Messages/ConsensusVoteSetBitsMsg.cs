using System;
using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for requesting lacking <see cref="Vote"/>s
    /// by sending the <see cref="Vote"/>s that the peer has.
    /// </summary>
    public class ConsensusVoteSetBitsMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusVoteSetBitsMsg"/> class.
        /// </summary>
        /// <param name="voteSetBits">A <see cref="VoteSetBits"/> of given height and round.</param>
        public ConsensusVoteSetBitsMsg(VoteSetBits voteSetBits)
            : base(
                voteSetBits.ValidatorPublicKey,
                voteSetBits.Height,
                voteSetBits.Round,
                voteSetBits.BlockHash)
        {
            VoteSetBits = voteSetBits;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusVoteSetBitsMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusVoteSetBitsMsg(byte[][] dataframes)
            : this(voteSetBits: new VoteSetBits(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="VoteSetBits"/> of the message.
        /// </summary>
        public VoteSetBits VoteSetBits { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { VoteSetBits.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusVoteSetBitsMsg;

        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusVoteSetBitsMsg message &&
                   message.VoteSetBits.Equals(VoteSetBits);
        }

        public override bool Equals(object? obj)
        {
            return obj is ConsensusVoteSetBitsMsg other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Type, VoteSetBits);
        }
    }
}
