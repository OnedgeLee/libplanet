using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    [Serializable]
    internal class Delegation
    {
        public Delegation(Address delegatorAddress, Address validatorAddress)
        {
            Address = DeriveAddress(delegatorAddress, validatorAddress);
            DelegatorAddress = delegatorAddress;
            ValidatorAddress = validatorAddress;
        }

        public Delegation(List serialized)
        {
            Address = serialized[0].ToAddress();
            DelegatorAddress = serialized[1].ToAddress();
            ValidatorAddress = serialized[2].ToAddress();
        }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address ValidatorAddress { get; }

        public static Address DeriveAddress(Address delegatorAddress, Address validatorAddress)
        {
            return delegatorAddress
                .Derive(validatorAddress.ToByteArray())
                .Derive("Delegation");
        }

        public IAccountStateDelta Delegate(
            IAccountStateDelta states, FungibleAssetValue nativeToken)
        {
            // TODO: Failure condition
            // 1. Validator does not exist
            // 2. Exchange rate is invalid(validator has no tokens but there are outstanding shares)
            // 3. Amount is less than the minimum amount
            // 4. Delegator does not have sufficient native token (fail or apply maximum)
            if (!nativeToken.Currency.Equals(Asset.NativeToken))
            {
                throw new ArgumentException();
            }

            FungibleAssetValue governanceToken = Asset.GovernanceFromNative(nativeToken);

            IValue? serializedValidator = states.GetState(ValidatorAddress);
            Validator validator = serializedValidator == null
                ? throw new InvalidOperationException()
                : new Validator((List)serializedValidator);

            // If validator share is zero, exchange rate is 1
            // Else, exchange rate is validator share / token
            FungibleAssetValue? issuedShare
                = validator.ShareFromGovernanceToken(states, governanceToken);
            if (issuedShare == null)
            {
                throw new InvalidOperationException();
            }

            Address poolAddress = validator.GetBondingStatus(states) == BondingStatus.Bonded
                ? Pool.BondedPool
                : Pool.UnbondedPool;

            // Have to be failed from here if delegator does not have sufficient
            // Native token : delegator -> pool
            // Governance token : -> validator
            // Share : -> delegation
            states = states.TransferAsset(
                DelegatorAddress, poolAddress, Asset.NativeFromGovernance(governanceToken));
            states = states.MintAsset(
                ValidatorAddress, governanceToken);
            states = states.MintAsset(Address, (FungibleAssetValue)issuedShare);
            validator.DelegatorShares += (FungibleAssetValue)issuedShare;
            states = states.SetState(ValidatorAddress, validator.Serialize());
            states = states.SetState(Address, Serialize());
            return states;
        }

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(DelegatorAddress.Serialize())
                .Add(ValidatorAddress.Serialize());
        }
    }
}
