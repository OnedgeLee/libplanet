using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    [ActionType("CreateValidatorAction")]
    public class CreateValidatorAction : SystemAction
    {
        public FungibleAssetValue NativeToken { get; set; }

        protected override IImmutableDictionary<string, IValue> PlainValueInternal
            => new Dictionary<string, IValue>
            {
                ["NativeToken"] = NativeToken.Serialize(),
            }.ToImmutableDictionary();

        public override IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            Address validatorAddress = Validator.DeriveAddress(ctx.Signer);

            // if (ctx.Rehearsal)
            // Rehearsal mode is not implemented
            Validator validator;
            IValue? serializedValidator = states.GetState(validatorAddress);
            if (serializedValidator == null)
            {
                validator = new Validator(ctx.Signer);
            }
            else
            {
                validator = new Validator((List)serializedValidator);
            }

            states = validator.Apply(states, NativeToken);

            return states;
        }

        protected override void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue)
        {
            NativeToken = plainValue["NativeToken"].ToFungibleAssetValue();
        }
    }
}
