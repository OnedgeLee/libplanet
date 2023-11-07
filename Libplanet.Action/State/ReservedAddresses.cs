using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Action.State
{
    public class ReservedAddresses
    {
        private readonly PolicyAccountAddressGetter _legacyAccountGetter;
        private readonly PolicyAccountAddressGetter _validatorSetAccountGetter;
        private readonly PolicyAccountAddressGetter _gasAccountGetter;

        public ReservedAddresses(
            PolicyAccountAddressGetter legacyAccountGetter,
            PolicyAccountAddressGetter validatorSetAccountGetter,
            PolicyAccountAddressGetter gasAccountGetter)
        {
            _legacyAccountGetter = legacyAccountGetter;
            _validatorSetAccountGetter = validatorSetAccountGetter;
            _gasAccountGetter = gasAccountGetter;
        }

        public Address LegacyAccount(IPreEvaluationBlockHeader blockHeader)
            => _legacyAccountGetter(blockHeader);

        public Address ValidatorSetAccount(IPreEvaluationBlockHeader blockHeader)
            => _validatorSetAccountGetter(blockHeader);

        public Address GasAccount(IPreEvaluationBlockHeader blockHeader)
            => _gasAccountGetter(blockHeader);
    }
}
