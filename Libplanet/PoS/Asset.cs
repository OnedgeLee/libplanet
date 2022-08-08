using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal struct Asset
    {
        public static readonly Currency NativeToken =
            new Currency("NativeToken", 18, minters: null);

        public static readonly Currency GovernanceToken =
            new Currency("GovernanceToken", 18, minters: null);

        public static readonly Currency Share =
            new Currency("GovernanceToken", 18, minters: null);
    }
}
