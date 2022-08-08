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
        }

        public Validator(List serialized)
        {
            Address = serialized[0].ToAddress();
            OperatorAddress = serialized[1].ToAddress();
            Jailed = serialized[2].ToBoolean();
            Status = serialized[3].ToEnum<BondingStatus>();
        }

        public Address Address { get; set; }

        public Address OperatorAddress { get; set; }

        public bool Jailed { get; set; }

        public BondingStatus Status { get; set; }

        public static Address DeriveAddress(Address operatorAddress)
        {
            return operatorAddress.Derive("ValidatorAddress");
        }

        public IAccountStateDelta Apply(IAccountStateDelta states, BigInteger amount)
        {
            states = states.TransferAsset(
                OperatorAddress, Pool.BondedPool, Asset.NativeToken * amount);
            states = states.MintAsset(Address, Asset.GovernanceToken * amount);
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

        public BigInteger? GovTokenEquivShare(IAccountStateDelta states, BigInteger amount)
        {
            BigInteger tokenAmount = states.GetBalance(Address, Asset.GovernanceToken).RawValue;
            BigInteger shareAmount = states.GetBalance(Address, Asset.Share).RawValue;
            if (shareAmount == 0)
            {
                return amount;
            }

            if (tokenAmount == 0)
            {
                return null;
            }

            BigInteger quo = BigInteger.DivRem(
                BigInteger.Multiply(amount, shareAmount), tokenAmount, out BigInteger rem);
            return quo;
        }

        public IValue Serialize()
        {
            return List.Empty
                .Add(Address.Serialize())
                .Add(OperatorAddress.Serialize())
                .Add(Jailed.Serialize())
                .Add(Status.Serialize());
        }
    }
}
