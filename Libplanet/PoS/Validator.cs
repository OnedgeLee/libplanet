using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    public class Validator
    {
        public Validator(Address operatorAddress)
        {
            Address = DeriveAddress(operatorAddress);
            OperatorAddress = operatorAddress;
            Jailed = false;
            Status = BondingStatus.Unbonded;
            DelegatorShares = Asset.Share * 0;
        }

        public Validator(List serialized)
        {
            Address = serialized[0].ToAddress();
            OperatorAddress = serialized[1].ToAddress();
            Jailed = serialized[2].ToBoolean();
            Status = serialized[3].ToEnum<BondingStatus>();
            DelegatorShares = serialized[4].ToFungibleAssetValue();
        }

        public Address Address { get; set; }

        public Address OperatorAddress { get; set; }

        public bool Jailed { get; set; }

        public BondingStatus Status { get; set; }

        public FungibleAssetValue DelegatorShares { get; set; }

        // TODO: Better structure
        public FungibleAssetValue MinSelfDelegation => Asset.GovernanceToken * 100;

        public static Address DeriveAddress(Address operatorAddress)
        {
            return operatorAddress.Derive("ValidatorAddress");
        }

        public IAccountStateDelta Apply(IAccountStateDelta states, FungibleAssetValue nativeToken)
        {
            states = states.TransferAsset(
                OperatorAddress, Pool.BondedPool, nativeToken);
            states = states.MintAsset(
                Address, Asset.GovernanceFromNative(nativeToken));
            Status = GetBondingStatus(states);
            states = states.SetState(Address, Serialize());
            return states;
        }

        public FungibleAssetValue GetGovernanceToken(IAccountStateDelta states)
        {
            return states.GetBalance(Address, Asset.GovernanceToken);
        }

        // Status update via consensus power index
        public BondingStatus GetBondingStatus(IAccountStateDelta states)
        {
            return BondingStatus.Bonded;
        }

        public FungibleAssetValue? ShareFromGovernanceToken(
            IAccountStateDelta states, FungibleAssetValue governanceToken)
        {
            FungibleAssetValue validatorGovernanceToken
                = states.GetBalance(Address, Asset.GovernanceToken);

            if (DelegatorShares.RawValue == 0)
            {
                return new FungibleAssetValue(
                    Asset.Share, governanceToken.MajorUnit, governanceToken.MinorUnit);
            }

            if (validatorGovernanceToken.RawValue == 0)
            {
                return null;
            }

            FungibleAssetValue share = Asset.Share * BigInteger.DivRem(
                BigInteger.Multiply(governanceToken.RawValue, DelegatorShares.RawValue),
                validatorGovernanceToken.RawValue,
                out BigInteger rem);

            return share;
        }

        public FungibleAssetValue? GovernanceTokenFromShare(
            IAccountStateDelta states, FungibleAssetValue share)
        {
            FungibleAssetValue validatorGovernanceToken
                = states.GetBalance(Address, Asset.GovernanceToken);

            // Is below conditional statement right?
            // Need to be investigated
            if (validatorGovernanceToken.RawValue == 0)
            {
                return null;
            }

            if (DelegatorShares.RawValue == 0)
            {
                return null;
            }

            FungibleAssetValue governanceToken = Asset.GovernanceToken * BigInteger.DivRem(
                BigInteger.Multiply(share.RawValue, validatorGovernanceToken.RawValue),
                DelegatorShares.RawValue,
                out BigInteger rem);

            return governanceToken;
        }

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(OperatorAddress.Serialize())
                .Add(Jailed.Serialize())
                .Add(Status.Serialize())
                .Add(DelegatorShares.Serialize());
        }
    }
}
