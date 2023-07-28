using System.Collections.Immutable;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    internal class WorldDelta : IWorldDelta
    {
        internal WorldDelta()
        {
            Accounts = ImmutableDictionary<Address, IAccount>.Empty;
        }

        internal WorldDelta(IImmutableDictionary<Address, IAccount> accounts)
        {
            Accounts = accounts;
        }

        public IImmutableSet<Address> UpdatedAccounts => Accounts.Keys.ToImmutableHashSet();

        public IImmutableDictionary<Address, IAccount> Accounts { get; }
    }
}
