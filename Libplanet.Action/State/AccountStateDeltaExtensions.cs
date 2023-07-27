using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    public static class AccountStateDeltaExtensions
    {
        public static IImmutableDictionary<Address, IValue> GetUpdatedStates(
            this IAccountStateDelta stateDelta) => stateDelta.Delta.States;

        internal static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
            GetUpdatedBalances(this IAccountStateDelta stateDelta) =>
            stateDelta.Delta.Fungibles.ToImmutableDictionary(
                kv => kv.Key,
                kv => FungibleAssetValue.FromRawValue(kv.Key.Item2, kv.Value));

        internal static IImmutableDictionary<Currency, FungibleAssetValue>
            GetUpdatedTotalSupplies(this IAccountStateDelta stateDelta) =>
            stateDelta.Delta.TotalSupplies.ToImmutableDictionary(
                kv => kv.Key,
                kv => FungibleAssetValue.FromRawValue(kv.Key, kv.Value));
    }
}