using System.Collections.Generic;
using Bencodex.Types;

namespace Libplanet.PoS
{
    public class Redelegation
    {
        public Redelegation(
            Address delegatorAddress, Address srcValidatorAddress, Address dstValidatorAddress)
        {
            Address = DeriveAddress(delegatorAddress, srcValidatorAddress, dstValidatorAddress);
            DelegatorAddress = delegatorAddress;
            SrcValidatorAddress = srcValidatorAddress;
            DstValidatorAddress = dstValidatorAddress;
            RedelegationEntryIndex = 0;
            RedelegationEntryAddresses = new SortedList<long, Address>();
        }

        public Redelegation(IValue serialized)
        {
            List serializedList = (List)serialized;
            Address = serializedList[0].ToAddress();
            DelegatorAddress = serializedList[1].ToAddress();
            SrcValidatorAddress = serializedList[2].ToAddress();
            DstValidatorAddress = serializedList[3].ToAddress();
            RedelegationEntryIndex = serializedList[4].ToLong();
            RedelegationEntryAddresses = new SortedList<long, Address>();
            foreach (
                IValue serializedRedelegationEntryAddress
                in (List)serializedList[5])
            {
                List items = (List)serializedRedelegationEntryAddress;
                RedelegationEntryAddresses.Add(items[0].ToLong(), items[1].ToAddress());
            }
        }

        public Redelegation(Redelegation redelegationInfo)
        {
            Address = redelegationInfo.Address;
            DelegatorAddress = redelegationInfo.DelegatorAddress;
            SrcValidatorAddress = redelegationInfo.SrcValidatorAddress;
            DstValidatorAddress = redelegationInfo.DstValidatorAddress;
            RedelegationEntryIndex = redelegationInfo.RedelegationEntryIndex;
            RedelegationEntryAddresses = redelegationInfo.RedelegationEntryAddresses;
        }

        // TODO: Better structure
        // This hard coding will cause some problems when it's modified
        // May be it would be better to be serialized
        public static int MaximumRedelegationEntries { get => 10; }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address SrcValidatorAddress { get; }

        public Address DstValidatorAddress { get; }

        public Address SrcDelegationAddress
            => Delegation.DeriveAddress(DelegatorAddress, SrcValidatorAddress);

        public Address DstDelegationAddress
            => Delegation.DeriveAddress(DelegatorAddress, DstValidatorAddress);

        public long RedelegationEntryIndex { get; set; }

        public SortedList<long, Address> RedelegationEntryAddresses { get; set; }

        public static Address DeriveAddress(
            Address delegatorAddress, Address srcValidatorAddress, Address dstValidatorAddress)
        {
            return delegatorAddress
                .Derive(srcValidatorAddress.ToByteArray())
                .Derive(dstValidatorAddress.ToByteArray())
                .Derive("Redelegation");
        }

        public IValue Serialize()
        {
            List serializedRedelegationEntryAddresses = List.Empty;
            foreach (
                KeyValuePair<long, Address> redelegationEntryAddressKV
                in RedelegationEntryAddresses)
            {
                serializedRedelegationEntryAddresses =
                    serializedRedelegationEntryAddresses.Add(
                        List.Empty
                        .Add(redelegationEntryAddressKV.Key.Serialize())
                        .Add(redelegationEntryAddressKV.Value.Serialize()));
            }

            return List.Empty
                .Add(Address.Serialize())
                .Add(DelegatorAddress.Serialize())
                .Add(SrcValidatorAddress.Serialize())
                .Add(DstValidatorAddress.Serialize())
                .Add(RedelegationEntryIndex.Serialize())
                .Add(serializedRedelegationEntryAddresses);
        }
    }
}