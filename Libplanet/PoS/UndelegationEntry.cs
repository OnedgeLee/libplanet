using System.Numerics;
using Bencodex.Types;

namespace Libplanet.PoS
{
    internal class UndelegationEntry
    {
        public UndelegationEntry(
            Address undelegationAddress,
            BigInteger amount,
            long index,
            long blockHeight,
            long boundBlockHeight = 50400 * 4)
        {
            Address = DeriveAddress(undelegationAddress, index);
            UndelegationAddress = undelegationAddress;
            Amount = amount;
            Index = index;
            CompletionBlockHeight = blockHeight + boundBlockHeight;
        }

        public UndelegationEntry(List serialized)
        {
            Address = serialized[0].ToAddress();
            UndelegationAddress = serialized[1].ToAddress();
            Amount = serialized[2].ToBigInteger();
            Index = serialized[3].ToLong();
            CompletionBlockHeight = serialized[4].ToLong();
        }

        public Address Address { get; set; }

        public Address UndelegationAddress { get; set; }

        public BigInteger Amount { get; set; }

        public long Index { get; set; }

        public long CompletionBlockHeight { get; set; }

        public static Address DeriveAddress(Address undelegationAddress, long index)
        {
            return undelegationAddress.Derive($"UndelegationEntry{index}");
        }

        public bool IsMatured(long blockHeight) => blockHeight >= CompletionBlockHeight;

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(UndelegationAddress.Serialize())
                .Add(Amount.Serialize())
                .Add(Index.Serialize())
                .Add(CompletionBlockHeight.Serialize());
        }
    }
}
