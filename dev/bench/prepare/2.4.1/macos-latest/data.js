window.BENCHMARK_DATA = {
  "lastUpdate": 1688387728076,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "74e6be3177341482c0d7e87c787851d2b6a44ba5",
          "message": "Prepare 2.4.1",
          "timestamp": "2023-07-03T21:16:51+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/OnedgeLee/libplanet/commit/74e6be3177341482c0d7e87c787851d2b6a44ba5"
        },
        "date": 1688387700393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8725942.6,
            "unit": "ns",
            "range": "± 499794.06594645075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21261905.30612245,
            "unit": "ns",
            "range": "± 1313780.053674355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52754811.5,
            "unit": "ns",
            "range": "± 1653764.773009827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110475837.05555555,
            "unit": "ns",
            "range": "± 2327185.696163235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229150774.7222222,
            "unit": "ns",
            "range": "± 8651152.815398362"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72580.9247311828,
            "unit": "ns",
            "range": "± 9816.699406841031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373611.8085106383,
            "unit": "ns",
            "range": "± 47737.75674560675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328272.28125,
            "unit": "ns",
            "range": "± 28891.119240385462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299419.489010989,
            "unit": "ns",
            "range": "± 20305.636310309128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4166995.722222222,
            "unit": "ns",
            "range": "± 116656.17395885204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3777329.0588235296,
            "unit": "ns",
            "range": "± 74759.71381154306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21361.25,
            "unit": "ns",
            "range": "± 5434.354307260625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117662.2741935484,
            "unit": "ns",
            "range": "± 16842.372875867622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119084.29347826086,
            "unit": "ns",
            "range": "± 12053.84311023297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120446.02040816327,
            "unit": "ns",
            "range": "± 22739.81098228146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6555.61052631579,
            "unit": "ns",
            "range": "± 1557.1372894468525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18285.46153846154,
            "unit": "ns",
            "range": "± 2562.178835408525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1699061.2795698924,
            "unit": "ns",
            "range": "± 180946.87610987097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3151758.5,
            "unit": "ns",
            "range": "± 253413.46289969404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2661617.3913043477,
            "unit": "ns",
            "range": "± 734769.5251237876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9127793.739583334,
            "unit": "ns",
            "range": "± 3204638.868823871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506744.9278350514,
            "unit": "ns",
            "range": "± 232060.0906301555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734409.3163265307,
            "unit": "ns",
            "range": "± 271460.80118227494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4825205.036842105,
            "unit": "ns",
            "range": "± 468021.2212961372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4190917.5208333335,
            "unit": "ns",
            "range": "± 377328.839482681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7685469.166666667,
            "unit": "ns",
            "range": "± 529891.4154202262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6746476.350446428,
            "unit": "ns",
            "range": "± 92152.12210978544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2003195.9773995536,
            "unit": "ns",
            "range": "± 28703.02444499513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412407.425595238,
            "unit": "ns",
            "range": "± 32912.50929205698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684591.9944196427,
            "unit": "ns",
            "range": "± 24458.002679186957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912933.8326605903,
            "unit": "ns",
            "range": "± 34684.731152193104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 895177.0311025943,
            "unit": "ns",
            "range": "± 36883.85071379178"
          }
        ]
      }
    ]
  }
}