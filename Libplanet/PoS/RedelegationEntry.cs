using System.Numerics;
using Bencodex.Types;

namespace Libplanet.PoS
{
    internal class RedelegationEntry
    {
        public RedelegationEntry(
            Address redelegationAddress,
            BigInteger amount,
            long index,
            long blockHeight,
            long boundBlockHeight = 50400 * 4)
        {
            Address = DeriveAddress(redelegationAddress, index);
            RedelegationAddress = redelegationAddress;
            Amount = amount;
            Index = index;
            CompletionBlockHeight = blockHeight + boundBlockHeight;
        }

        public RedelegationEntry(List serialized)
        {
            Address = serialized[0].ToAddress();
            RedelegationAddress = serialized[1].ToAddress();
            Amount = serialized[2].ToBigInteger();
            Index = serialized[3].ToLong();
            CompletionBlockHeight = serialized[4].ToLong();
        }

        public Address Address { get; set; }

        public Address RedelegationAddress { get; set; }

        public BigInteger Amount { get; set; }

        public long Index { get; set; }

        public long CompletionBlockHeight { get; set; }

        public static Address DeriveAddress(Address redelegationAddress, long index)
        {
            return redelegationAddress.Derive($"RedelegationEntry{index}");
        }

        public bool IsMatured(long blockHeight) => blockHeight >= CompletionBlockHeight;

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(RedelegationAddress.Serialize())
                .Add(Amount.Serialize())
                .Add(Index.Serialize())
                .Add(CompletionBlockHeight.Serialize());
        }
    }
}
