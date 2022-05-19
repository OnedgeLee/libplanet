using System;
using System.Collections.Generic;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Libplanet.Tests.Common.Action;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    public class ConsensusReactorTest : ReactorTest
    {
        public ConsensusReactorTest(ITestOutputHelper output)
            : base(output)
        {
        }

        public override IReactor CreateReactor(
            BlockChain<DumbAction> blockChain,
            PrivateKey? key = null,
            RoutingTable? table = null,
            string host = "localhost",
            int port = 5001,
            long id = 0,
            List<Address> validators = null!)
        {
            key ??= new PrivateKey();
            var transport = new NetMQTransport(
                key,
                TestUtils.AppProtocolVersion,
                null,
                8,
                host,
                port,
                Array.Empty<IceServer>(),
                null);

            return new ConsensusReactor<DumbAction>(
                table ?? new RoutingTable(key.ToAddress()),
                transport,
                blockChain,
                id,
                validators);
        }
    }
}