using System;
using Bencodex;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Consensus
{
    public class ProposalMetaDataTest
    {
        private ILogger _logger;

        public ProposalMetaDataTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ProposalMetaDataTest>();

            _logger = Log.ForContext<ProposalMetaDataTest>();
        }

        [Fact]
        public void InvalidValues()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var codec = new Codec();

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetaData(
                    -1,
                    0,
                    DateTimeOffset.UtcNow,
                    new PrivateKey().PublicKey,
                    codec.Encode(fx.Block1.MarshalBlock()),
                    -1));

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetaData(
                1,
                -1,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                codec.Encode(fx.Block1.MarshalBlock()),
                -1));

            Assert.Throws<ArgumentOutOfRangeException>(() => new ProposalMetaData(
                1,
                0,
                DateTimeOffset.UtcNow,
                new PrivateKey().PublicKey,
                codec.Encode(fx.Block1.MarshalBlock()),
                -2));
        }
    }
}