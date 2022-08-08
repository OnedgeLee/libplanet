using System;
using System.Collections.Generic;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.PoS
{
    [Serializable]
    internal class Redelegation
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

        public Redelegation(List serialized)
        {
            Address = serialized[0].ToAddress();
            DelegatorAddress = serialized[1].ToAddress();
            SrcValidatorAddress = serialized[2].ToAddress();
            DstValidatorAddress = serialized[2].ToAddress();
            RedelegationEntryIndex = serialized[3].ToLong();
            RedelegationEntryAddresses = new SortedList<long, Address>();
            foreach (
                IValue serializedRedelegationEntryAddress
                in (List)serialized[4])
            {
                List items = (List)serializedRedelegationEntryAddress;
                RedelegationEntryAddresses.Add(items[0].ToLong(), items[1].ToAddress());
            }
        }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address SrcValidatorAddress { get; }

        public Address DstValidatorAddress { get; }

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

        public IAccountStateDelta Redelegate(
            IAccountStateDelta states, BigInteger amount, long blockHeight)
        {
            // TODO: Failure condition
            // 1. Delegation does not exist
            // 2. Source validator does not exist
            // 3. Target validator does not exist
            // 3. Delegation has less shares than worth of amount
            // 4. Existing redelegation has maximum entries
            // 5?. Delegation does not have sufficient token (fail or apply maximum)
            RedelegationEntry redelegationEntry
                = new RedelegationEntry(Address, amount, RedelegationEntryIndex, blockHeight);
            RedelegationEntryAddresses.Add(
                redelegationEntry.Index, redelegationEntry.Address);
            states = states.TransferAsset(
                        SrcValidatorAddress,
                        DstValidatorAddress,
                        Asset.GovernanceToken * redelegationEntry.Amount);
            RedelegationEntryIndex += 1;

            // TODO: Global state indexing is also needed
            states = states.SetState(Address, Serialize());
            return states;
        }

        // This have to be called for each block,
        // to update staking status and generate block with updated validators.
        // Would it be better to declare this on out of this class?
        public IAccountStateDelta ProcessEntries(IAccountStateDelta states, long blockHeight)
        {
            foreach (KeyValuePair<long, Address> redelegationEntryAddressKV
                in RedelegationEntryAddresses)
            {
                IValue? serializedRedelegationEntry
                    = states.GetState(redelegationEntryAddressKV.Value);
                if (serializedRedelegationEntry == null)
                {
                    continue;
                }

                RedelegationEntry redelegationEntry
                    = new RedelegationEntry((List)serializedRedelegationEntry);
                if (redelegationEntry.IsMatured(blockHeight))
                {
                    RedelegationEntryAddresses.Remove(redelegationEntry.Index);
                }
            }

            states = states.SetState(Address, Serialize());
            return states;
        }

        public IValue Serialize()
        {
            List serializedRedelegationEntryAddresses = List.Empty;
            foreach (
                KeyValuePair<long, Address> redelegationEntryAddressKV
                in RedelegationEntryAddresses)
            {
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
