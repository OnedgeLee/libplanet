using System;
using System.Runtime.Serialization;
using Libplanet.Common.Serialization;
using Libplanet.Types.Assets;

namespace Libplanet.Action.State
{
    /// <summary>
    /// The exception thrown when <see cref="IAccountState.GetTotalSupply"/> was called on a
    /// legacy untracked currency with
    /// <see cref="Common.Types.Assets.Currency.TotalSupplyTrackable"/> set to
    /// <see langword="false"/>.
    /// </summary>
    /// <seealso cref="IAccountState.GetTotalSupply"/>
    [Serializable]
    public sealed class TotalSupplyNotTrackableException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="TotalSupplyNotTrackableException"/> object.
        /// </summary>
        /// <param name="message">Specifies a <see cref="Exception.Message"/>.</param>
        /// <param name="currency">The currency queried for the total supply.
        /// Corresponds to the <see cref="TotalSupplyNotTrackableException.Currency"/> property.
        /// </param>
        public TotalSupplyNotTrackableException(
            string? message,
            Currency currency
        )
            : base(message)
        {
            Currency = currency;
        }

        private TotalSupplyNotTrackableException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            Currency = info.GetValue<Currency>(nameof(Currency));
        }

        /// <summary>
        /// The currency queried for the total supply.
        /// </summary>
        public Currency Currency { get; }

        public static TotalSupplyNotTrackableException WithDefaultMessage(Currency currency)
        {
            var msg =
                $"The total supply value of the currency {currency} is not trackable because it"
                + " is a legacy untracked currency which might have been established before"
                + " the introduction of total supply tracking support.";
            return new TotalSupplyNotTrackableException(msg, currency);
        }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);

            info.AddValue(nameof(Currency), Currency);
        }
    }
}
