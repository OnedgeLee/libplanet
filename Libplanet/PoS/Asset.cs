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
            new Currency("Share", 18, minters: null);

        public static FungibleAssetValue GovernanceFromNative(FungibleAssetValue nativeToken)
        {
            return new FungibleAssetValue(
                GovernanceToken, nativeToken.MajorUnit, nativeToken.MinorUnit);
        }

        public static FungibleAssetValue NativeFromGovernance(FungibleAssetValue governanceToken)
        {
            return new FungibleAssetValue(
                NativeToken, governanceToken.MajorUnit, governanceToken.MinorUnit);
        }
    }
}
