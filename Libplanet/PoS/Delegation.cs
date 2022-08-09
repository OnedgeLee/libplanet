using System;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;

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
            Amount = 0;
        }

        public Delegation(List serialized)
        {
            Address = serialized[0].ToAddress();
            DelegatorAddress = serialized[1].ToAddress();
            ValidatorAddress = serialized[2].ToAddress();
            Amount = serialized[3].ToLong();
        }

        public Address Address { get; }

        public Address DelegatorAddress { get; }

        public Address ValidatorAddress { get; }

        public BigInteger Amount { get; set; }

        public static Address DeriveAddress(Address delegatorAddress, Address validatorAddress)
        {
            return delegatorAddress
                .Derive(validatorAddress.ToByteArray())
                .Derive("Delegation");
        }

        public IAccountStateDelta Delegate(IAccountStateDelta states, BigInteger amount)
        {
            // TODO: Failure condition
            // 1. Validator does not exist
            // 2. Exchange rate is invalid(validator has no tokens but there are outstanding shares)
            // 3. Amount is less than the minimum amount
            // 4. Delegator does not have sufficient native token (fail or apply maximum)
            Validator validator;
            IValue? serializedValidator = states.GetState(ValidatorAddress);
            if (serializedValidator == null)
            {
                throw new InvalidOperationException();
            }
            else
            {
                validator = new Validator((List)serializedValidator);
            }

            BigInteger? issuedShareAmount = validator.TokenEquivShare(states, amount);
            if (issuedShareAmount == null)
            {
                throw new InvalidOperationException();
            }

            // If validator share is zero, exchange rate is 1
            // Else, exchange rate is validator share / token
            Assets.FungibleAssetValue issuedShare
                = Asset.Share * (BigInteger)issuedShareAmount;

            Address poolAddress;
            switch (validator.Status)
            {
                case BondingStatus.Bonded:
                    {
                        poolAddress = Pool.BondedPool;
                        break;
                    }

                case BondingStatus.Unbonding:
                    {
                        poolAddress = Pool.UnbondingPool;
                        break;
                    }

                case BondingStatus.Unbonded:
                    {
                        poolAddress = Pool.UnbondedPool;
                        break;
                    }

                default: throw new InvalidOperationException();
            }

            // Have to be failed from here if delegator does not have sufficient
            states = states.TransferAsset(
                DelegatorAddress, poolAddress, Asset.NativeToken * amount);
            states = states.MintAsset(Address, Asset.GovernanceToken * amount);
            states = states.MintAsset(ValidatorAddress, issuedShare);
            states = states.MintAsset(Address, issuedShare);
            Amount += amount;
            states = states.SetState(Address, Serialize());
            return states;
        }

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(DelegatorAddress.Serialize())
                .Add(ValidatorAddress.Serialize())
                .Add(Amount.Serialize());
        }
    }
}
