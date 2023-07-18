window.BENCHMARK_DATA = {
  "lastUpdate": 1689641745348,
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641718812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8933118.494736843,
            "unit": "ns",
            "range": "± 561123.714714536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21497784.546511628,
            "unit": "ns",
            "range": "± 737214.7753345812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55575362.7,
            "unit": "ns",
            "range": "± 1272163.5659923318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110823726.46610169,
            "unit": "ns",
            "range": "± 4866055.669009205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220802454.16666666,
            "unit": "ns",
            "range": "± 9799972.410120748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68725.72527472528,
            "unit": "ns",
            "range": "± 9963.284013556899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323879.94623655913,
            "unit": "ns",
            "range": "± 18287.84356529815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316128.1629213483,
            "unit": "ns",
            "range": "± 17397.169224372406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304023.96774193546,
            "unit": "ns",
            "range": "± 8325.741274240474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161244.1428571427,
            "unit": "ns",
            "range": "± 65794.01236798089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3722345.576923077,
            "unit": "ns",
            "range": "± 44047.71647592631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21872.11827956989,
            "unit": "ns",
            "range": "± 3015.066239987117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100239.74210526315,
            "unit": "ns",
            "range": "± 10606.963811186748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120704.15934065935,
            "unit": "ns",
            "range": "± 17711.552769132722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120635.9255319149,
            "unit": "ns",
            "range": "± 18773.307111937578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7215.907216494846,
            "unit": "ns",
            "range": "± 680.4796421531505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23236.84946236559,
            "unit": "ns",
            "range": "± 4606.148357845566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723834.89,
            "unit": "ns",
            "range": "± 262340.61283677304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3005745.8333333335,
            "unit": "ns",
            "range": "± 104349.60482116515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2097743.0729166665,
            "unit": "ns",
            "range": "± 187440.9901711242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5843243.660377358,
            "unit": "ns",
            "range": "± 230224.05426895837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3491962.2653061226,
            "unit": "ns",
            "range": "± 223303.62970788797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3747321.737113402,
            "unit": "ns",
            "range": "± 339132.96652894776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4720456.642105263,
            "unit": "ns",
            "range": "± 373609.33945189195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4249205.231958763,
            "unit": "ns",
            "range": "± 327987.8836270263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7481789.512345679,
            "unit": "ns",
            "range": "± 387495.4277803963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7426448.799479167,
            "unit": "ns",
            "range": "± 82679.4602331713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2226640.13984375,
            "unit": "ns",
            "range": "± 36645.24538724512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369127.2447916667,
            "unit": "ns",
            "range": "± 19453.77617339166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2855326.0249023438,
            "unit": "ns",
            "range": "± 55615.3436629381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833324.4336688702,
            "unit": "ns",
            "range": "± 6062.474826274996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812720.2231770833,
            "unit": "ns",
            "range": "± 9029.691415122114"
          }
        ]
      }
    ]
  }
}