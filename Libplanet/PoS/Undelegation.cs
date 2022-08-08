using System;
using System.Collections.Generic;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.PoS
{
    [Serializable]
    internal class Undelegation
    {
        public Undelegation(Address delegatorAddress, Address validatorAddress)
        {
            Address = DeriveAddress(delegatorAddress, validatorAddress);
            DelegatorAddress = delegatorAddress;
            ValidatorAddress = validatorAddress;
            UndelegationEntryIndex = 0;
            UndelegationEntryAddresses = new SortedList<long, Address>();
        }

        public Undelegation(List serialized)
        {
            Address = serialized[0].ToAddress();
            DelegatorAddress = serialized[1].ToAddress();
            ValidatorAddress = serialized[2].ToAddress();
            UndelegationEntryIndex = serialized[3].ToLong();
            UndelegationEntryAddresses = new SortedList<long, Address>();
            foreach (
                IValue serializedUndelegationEntryAddress
                in (List)serialized[4])
            {
                List items = (List)serializedUndelegationEntryAddress;
                UndelegationEntryAddresses.Add(items[0].ToLong(), items[1].ToAddress());
            }
        }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address ValidatorAddress { get; }

        public long UndelegationEntryIndex { get; set; }

        public SortedList<long, Address> UndelegationEntryAddresses { get; set; }

        public static Address DeriveAddress(
            Address delegatorAddress, Address validatorAddress)
        {
            return delegatorAddress
                .Derive(validatorAddress.ToByteArray())
                .Derive("Undelegation");
        }

        public IAccountStateDelta Undelegate(
            IAccountStateDelta states, BigInteger amount, long blockHeight)
        {
            // TODO: Failure condition
            // 1. Delegation does not exist
            // 2. Validator does not exist
            // 3. Delegation has less shares than worth of amount
            // 4. Existing undelegation has maximum entries
            // 5?. Delegation does not have sufficient token (fail or apply maximum)
            UndelegationEntry undelegationEntry
                = new UndelegationEntry(Address, amount, UndelegationEntryIndex, blockHeight);
            UndelegationEntryAddresses.Add(
                undelegationEntry.Index, undelegationEntry.Address);
            states = states.TransferAsset(
                        ValidatorAddress,
                        Pool.UnbondingPool,
                        Asset.GovernanceToken * undelegationEntry.Amount);
            UndelegationEntryIndex += 1;

            // TODO: Global state indexing is also needed
            states = states.SetState(Address, Serialize());
            return states;
        }

        public IAccountStateDelta CancelUndelegation(
            IAccountStateDelta states, BigInteger amount, long blockHeight)
        {
            List<long> undelegationEntryIndices = new List<long>();
            foreach (KeyValuePair<long, Address> undelegationEntryAddressKV
                in UndelegationEntryAddresses)
            {
                IValue? serializedUndelegationEntry
                    = states.GetState(undelegationEntryAddressKV.Value);
                if (serializedUndelegationEntry == null)
                {
                    continue;
                }

                UndelegationEntry undelegationEntry
                    = new UndelegationEntry((List)serializedUndelegationEntry);
                if (blockHeight >= undelegationEntry.CompletionBlockHeight)
                {
                    // Double check for unbonded.
                    break;
                }

                if (amount < undelegationEntry.Amount)
                {
                    if (amount > 0)
                    {
                        undelegationEntry.Amount -= amount;
                    }

                    undelegationEntryIndices.ForEach(
                        idx => UndelegationEntryAddresses.Remove(idx));

                    states = states.TransferAsset(
                        Pool.UnbondingPool,
                        ValidatorAddress,
                        Asset.GovernanceToken * undelegationEntry.Amount);
                    break;
                }
                else
                {
                    amount -= undelegationEntry.Amount;
                    undelegationEntryIndices.Add(undelegationEntry.Index);
                }
            }

            states = states.SetState(Address, Serialize());
            return states;
        }

        // This have to be called for each block,
        // to update staking status and generate block with updated validators.
        // Would it be better to declare this on out of this class?
        public IAccountStateDelta ProcessEntries(IAccountStateDelta states, long blockHeight)
        {
            foreach (KeyValuePair<long, Address> undelegationEntryAddressKV
                in UndelegationEntryAddresses)
            {
                IValue? serializedUndelegationEntry
                    = states.GetState(undelegationEntryAddressKV.Value);
                if (serializedUndelegationEntry == null)
                {
                    continue;
                }

                UndelegationEntry undelegationEntry
                    = new UndelegationEntry((List)serializedUndelegationEntry);
                if (undelegationEntry.IsMatured(blockHeight))
                {
                    states = states.TransferAsset(
                        Pool.BondedPool,
                        DelegatorAddress,
                        Asset.NativeToken * undelegationEntry.Amount);

                    states = states.BurnAsset(
                        Pool.UnbondingPool,
                        Asset.GovernanceToken * undelegationEntry.Amount);

                    UndelegationEntryAddresses.Remove(undelegationEntry.Index);
                }
            }

            states = states.SetState(Address, Serialize());
            return states;
        }

        public IValue Serialize()
        {
            List serializedUndelegationEntryAddresses = List.Empty;
            foreach (
                KeyValuePair<long, Address> undelegationEntryAddressKV
                in UndelegationEntryAddresses)
            {
                serializedUndelegationEntryAddresses.Add(
                    List.Empty
                    .Add(undelegationEntryAddressKV.Key.Serialize())
                    .Add(undelegationEntryAddressKV.Value.Serialize()));
            }

            return List.Empty
                .Add(Address.Serialize())
                .Add(DelegatorAddress.Serialize())
                .Add(ValidatorAddress.Serialize())
                .Add(UndelegationEntryIndex.Serialize())
                .Add(serializedUndelegationEntryAddresses);
        }
    }
}
