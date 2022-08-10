using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

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

        public Address DelegationAddress
        {
            get => Delegation.DeriveAddress(DelegatorAddress, ValidatorAddress);
        }

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
            IAccountStateDelta states, FungibleAssetValue share, long blockHeight)
        {
            // TODO: Failure condition
            // 1. Delegation does not exist
            // 2. Validator does not exist
            // 3. Delegation has less shares than worth of amount
            // 4. Existing undelegation has maximum entries
            // 5?. Delegation does not have sufficient token (fail or apply maximum)
            if (!share.Currency.Equals(Asset.Share))
            {
                throw new ArgumentException();
            }

            if (share < states.GetBalance(DelegationAddress, Asset.Share))
            {
                throw new ArgumentException();
            }

            IValue? serializedValidator = states.GetState(ValidatorAddress);
            Validator validator = (serializedValidator == null)
                ? throw new InvalidOperationException()
                : new Validator((List)serializedValidator);

            states = states.BurnAsset(DelegationAddress, share);

            FungibleAssetValue delegationShare = states.GetBalance(DelegationAddress, Asset.Share);
            if (DelegatorAddress.Equals(validator.OperatorAddress)
                && !validator.Jailed
                && validator.GovernanceTokenFromShare(states, delegationShare)
                < validator.MinSelfDelegation)
            {
                validator.Jailed = true;
            }

            validator.DelegatorShares -= share;

            FungibleAssetValue? unbondingGovernanceToken
                = validator.DelegatorShares == Asset.Share * 0
                ? states.GetBalance(ValidatorAddress, Asset.GovernanceToken)
                : validator.GovernanceTokenFromShare(states, share);

            if (unbondingGovernanceToken == null)
            {
                throw new InvalidOperationException();
            }

            // Burn governance token on Cosmos
            states = states.TransferAsset(
                        ValidatorAddress,
                        Pool.UnbondedPool,
                        (FungibleAssetValue)unbondingGovernanceToken);

            if (validator.GetBondingStatus(states) == BondingStatus.Bonded)
            {
                states = states.TransferAsset(
                        Pool.BondedPool,
                        Pool.UnbondedPool,
                        Asset.NativeFromGovernance((FungibleAssetValue)unbondingGovernanceToken));
            }

            UndelegationEntry undelegationEntry = new UndelegationEntry(
                    Address,
                    (FungibleAssetValue)unbondingGovernanceToken,
                    UndelegationEntryIndex,
                    blockHeight);

            UndelegationEntryAddresses.Add(
                undelegationEntry.Index, undelegationEntry.Address);

            UndelegationEntryIndex += 1;

            // TODO: Global state indexing is also needed
            states = states.SetState(ValidatorAddress, validator.Serialize());
            states = states.SetState(Address, Serialize());
            return states;
        }

        public IAccountStateDelta CancelUndelegation(
            IAccountStateDelta states,
            FungibleAssetValue cancelledGovernanceToken,
            long blockHeight)
        {
            FungibleAssetValue cancellingGovernanceToken =
                new FungibleAssetValue(
                    Asset.GovernanceToken,
                    cancelledGovernanceToken.MajorUnit,
                    cancelledGovernanceToken.MinorUnit);
            IValue? serializedValidator = states.GetState(ValidatorAddress);
            Validator validator = (serializedValidator == null)
                ? throw new InvalidOperationException()
                : new Validator((List)serializedValidator);
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

                if (cancellingGovernanceToken < undelegationEntry.UnbondingGovernanceToken)
                {
                    if (cancellingGovernanceToken.RawValue > 0)
                    {
                        undelegationEntry.UnbondingGovernanceToken -= cancellingGovernanceToken;
                    }

                    FungibleAssetValue? cancelledShare
                        = validator.ShareFromGovernanceToken(states, cancelledGovernanceToken);
                    if (cancelledShare == null)
                    {
                        throw new InvalidOperationException();
                    }

                    states = states.MintAsset(
                        DelegationAddress, (FungibleAssetValue)cancelledShare);

                    FungibleAssetValue delegationShare
                        = states.GetBalance(DelegationAddress, Asset.Share);
                    if (DelegatorAddress.Equals(validator.OperatorAddress)
                        && validator.Jailed
                        && validator.GovernanceTokenFromShare(states, delegationShare)
                        >= validator.MinSelfDelegation)
                    {
                        validator.Jailed = false;
                    }

                    validator.DelegatorShares += (FungibleAssetValue)cancelledShare;

                    states = states.TransferAsset(
                        Pool.UnbondedPool,
                        ValidatorAddress,
                        cancelledGovernanceToken);

                    if (validator.GetBondingStatus(states) == BondingStatus.Bonded)
                    {
                        states = states.TransferAsset(
                                Pool.UnbondedPool,
                                Pool.BondedPool,
                                Asset.NativeFromGovernance(cancelledGovernanceToken));
                    }

                    undelegationEntryIndices.ForEach(
                        idx => UndelegationEntryAddresses.Remove(idx));
                    break;
                }
                else
                {
                    cancellingGovernanceToken -= undelegationEntry.UnbondingGovernanceToken;
                    undelegationEntryIndices.Add(undelegationEntry.Index);
                }
            }

            states = states.SetState(ValidatorAddress, validator.Serialize());
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
                        Pool.UnbondedPool,
                        DelegatorAddress,
                        Asset.NativeFromGovernance(undelegationEntry.UnbondingGovernanceToken));

                    states = states.BurnAsset(
                        Pool.UnbondedPool,
                        undelegationEntry.UnbondingGovernanceToken);

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
