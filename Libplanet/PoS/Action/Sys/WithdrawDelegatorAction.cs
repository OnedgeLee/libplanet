using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("WithdrawDelegatorAction")]
    public class WithdrawDelegatorAction : SystemAction
    {
        public Address ValidatorAddress { get; set; }

        public BigInteger Amount { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
        {
            ["ValidatorAddress"] = ValidatorAddress.Serialize(),
            ["Amount"] = Amount.Serialize(),
        }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            Address delegationAddress = Delegation.DeriveAddress(ctx.Signer, ValidatorAddress);

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            Delegation delegation;
            IValue? serializedDelegation = states.GetState(delegationAddress);
            if (serializedDelegation == null)
            {
                delegation = new Delegation(ctx.Signer, ValidatorAddress);
            }
            else
            {
                delegation = new Delegation((List)serializedDelegation);
            }

            states = delegation.Withdraw(states, Amount);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            ValidatorAddress = plainValue["ValidatorAddress"].ToAddress();
            Amount = plainValue["Amount"].ToBigInteger();
        }
    }
}
