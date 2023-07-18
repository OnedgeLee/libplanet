window.BENCHMARK_DATA = {
  "lastUpdate": 1689641730021,
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
        "date": 1689641698624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362982,
            "unit": "ns",
            "range": "± 122781.41238918384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424859.2592592593,
            "unit": "ns",
            "range": "± 127103.31602458075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746855.7894736843,
            "unit": "ns",
            "range": "± 134350.58830473182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4608424.4186046515,
            "unit": "ns",
            "range": "± 249619.20077733768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45936.26373626374,
            "unit": "ns",
            "range": "± 2842.554269335024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6546505.882352941,
            "unit": "ns",
            "range": "± 131594.8539580302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19180763.636363637,
            "unit": "ns",
            "range": "± 447329.22843775665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47629666.666666664,
            "unit": "ns",
            "range": "± 980071.6270342934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94727084.61538461,
            "unit": "ns",
            "range": "± 830804.0561670301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189299428.57142857,
            "unit": "ns",
            "range": "± 2089081.5697992085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4415048.177083333,
            "unit": "ns",
            "range": "± 19765.96920725371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391821.6145833333,
            "unit": "ns",
            "range": "± 5124.32997396476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091101.3411458333,
            "unit": "ns",
            "range": "± 6716.760225659726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434430.0260416665,
            "unit": "ns",
            "range": "± 8785.617144477017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767562.5260416666,
            "unit": "ns",
            "range": "± 3372.926835097778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700408.203125,
            "unit": "ns",
            "range": "± 1999.4812698002102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047435.714285714,
            "unit": "ns",
            "range": "± 80513.79092491255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118761.5384615385,
            "unit": "ns",
            "range": "± 107632.31664813563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3836612,
            "unit": "ns",
            "range": "± 102275.26305677896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3555844.285714286,
            "unit": "ns",
            "range": "± 116609.8369951421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5826868.181818182,
            "unit": "ns",
            "range": "± 142747.03361562584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254230.76923076922,
            "unit": "ns",
            "range": "± 8569.350336063186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241690,
            "unit": "ns",
            "range": "± 6824.668742750513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221600.50505050505,
            "unit": "ns",
            "range": "± 15845.834923922399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3753986.6666666665,
            "unit": "ns",
            "range": "± 62121.77978623539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3382593.75,
            "unit": "ns",
            "range": "± 65489.209989127216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20780.645161290322,
            "unit": "ns",
            "range": "± 2163.695412971105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83050.7042253521,
            "unit": "ns",
            "range": "± 4042.166082663975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71952.8735632184,
            "unit": "ns",
            "range": "± 4614.432341324886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100191.66666666667,
            "unit": "ns",
            "range": "± 14395.194129815955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5753.191489361702,
            "unit": "ns",
            "range": "± 1061.2127499101919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21919.58762886598,
            "unit": "ns",
            "range": "± 2494.2283031388074"
          }
        ]
      }
    ]
  }
}