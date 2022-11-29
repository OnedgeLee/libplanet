using System.Numerics;
using Bencodex.Types;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Action.Sys
{
    /// <summary>
    /// A action that promotes operator to validator.
    /// </summary>
    public class PromoteValidator : IAction
    {
        /// <summary>
        /// Creates a new instance of <see cref="PromoteValidator"/> action.
        /// </summary>
        /// <param name="validatorPublicKey">The public key of the validator operator.
        /// </param>
        /// <param name="power">The power of the validator.</param>
        public PromoteValidator(PublicKey validatorPublicKey, BigInteger power)
        {
            Validator = new Validator(validatorPublicKey, power);
        }

        /// <summary>
        /// The <see cref="PublicKey"/> of the target promoting to a validator.
        /// </summary>
        public Validator Validator { get; set; }

        /// <inheritdoc cref="IAction.PlainValue"/>
        public IValue PlainValue => Dictionary.Empty
            .Add("validator", Validator.ByteArray);

        /// <inheritdoc cref="IAction.LoadPlainValue(IValue)"/>
        public void LoadPlainValue(IValue plainValue)
        {
            var dict = (Dictionary)plainValue;
            Validator = new Validator(dict.GetValue<Binary>("validator"));
        }

        /// <inheritdoc cref="IAction.Execute(IActionContext)"/>
        public IAccountStateDelta Execute(IActionContext context)
        {
            IActionContext ctx = context;
            var states = ctx.PreviousStates;
            states = states.PromoteValidator(Validator);
            return states;
        }
    }
}