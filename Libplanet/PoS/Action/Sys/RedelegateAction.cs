using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("RedelegateAction")]
    public class RedelegateAction : SystemAction
    {
        public Address SrcValidatorAddress { get; set; }

        public Address DstValidatorAddress { get; set; }

        public BigInteger Amount { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
        {
            ["SrcValidatorAddress"] = SrcValidatorAddress.Serialize(),
            ["DstValidatorAddress"] = DstValidatorAddress.Serialize(),
            ["Amount"] = Amount.Serialize(),
        }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            Address srcDelegationAddress = Delegation.DeriveAddress(
                ctx.Signer, SrcValidatorAddress);
            Address dstDelegationAddress = Delegation.DeriveAddress(
                ctx.Signer, DstValidatorAddress);

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            Redelegation redelegation;
            IValue? serializedSrcDelegation = states.GetState(srcDelegationAddress);
            if (serializedSrcDelegation == null)
            {
                redelegation = new Redelegation(
                    ctx.Signer, SrcValidatorAddress, DstValidatorAddress);
            }
            else
            {
                redelegation = new Redelegation((List)serializedSrcDelegation);
            }

            states = redelegation.Redelegate(states, Amount, ctx.BlockIndex);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            SrcValidatorAddress = plainValue["SrcValidatorAddress"].ToAddress();
            DstValidatorAddress = plainValue["DstValidatorAddress"].ToAddress();
            Amount = plainValue["Amount"].ToBigInteger();
        }
    }
}
