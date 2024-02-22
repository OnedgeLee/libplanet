window.BENCHMARK_DATA = {
  "lastUpdate": 1708586289563,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:05:30+09:00",
          "tree_id": "3fdd296222640e7db1e6a6370a55aa7a3699a196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2"
        },
        "date": 1708586279181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5768505.714285715,
            "unit": "ns",
            "range": "± 26217.405922339138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14632784.766666668,
            "unit": "ns",
            "range": "± 43441.51898894268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39766991.26923077,
            "unit": "ns",
            "range": "± 167632.44272174456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76225647.61538461,
            "unit": "ns",
            "range": "± 382341.62844711234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156661446.8,
            "unit": "ns",
            "range": "± 668535.9866651266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203838.96666666667,
            "unit": "ns",
            "range": "± 14235.89726076657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192349.6037735849,
            "unit": "ns",
            "range": "± 7291.304577106852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165176.03488372092,
            "unit": "ns",
            "range": "± 5317.500318350617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3266596.0714285714,
            "unit": "ns",
            "range": "± 23474.886212435904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834590.1,
            "unit": "ns",
            "range": "± 52362.463392614154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18392.848484848484,
            "unit": "ns",
            "range": "± 5428.7902368753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67152.40217391304,
            "unit": "ns",
            "range": "± 6546.395567363068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83025.89361702128,
            "unit": "ns",
            "range": "± 15965.586929708104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94755.51020408163,
            "unit": "ns",
            "range": "± 9378.751538313647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3282.3,
            "unit": "ns",
            "range": "± 460.97928369938694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11760.54945054945,
            "unit": "ns",
            "range": "± 689.0781646315003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39094.09375,
            "unit": "ns",
            "range": "± 4874.514090932282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001850.5416666666,
            "unit": "ns",
            "range": "± 91359.67024769007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1890748.35,
            "unit": "ns",
            "range": "± 84180.00785158179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728922.0757575757,
            "unit": "ns",
            "range": "± 79032.68611254082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7706679.510204081,
            "unit": "ns",
            "range": "± 305342.0410057331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3816535.7237723214,
            "unit": "ns",
            "range": "± 17194.261975247915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216523.772298177,
            "unit": "ns",
            "range": "± 3280.7186669981375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761928.7931640625,
            "unit": "ns",
            "range": "± 12607.791154868615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905204.6891526442,
            "unit": "ns",
            "range": "± 5783.598982726113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623845.7530924479,
            "unit": "ns",
            "range": "± 11791.38731951822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579746.9801199777,
            "unit": "ns",
            "range": "± 1094.5157650605065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2457545.7954545454,
            "unit": "ns",
            "range": "± 86912.62227638278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2579392.1333333333,
            "unit": "ns",
            "range": "± 68703.01432514384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3282954.966666667,
            "unit": "ns",
            "range": "± 60735.81449296461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3340177.5614035088,
            "unit": "ns",
            "range": "± 144293.282941997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9080799.525,
            "unit": "ns",
            "range": "± 206417.1601340835"
          }
        ]
      }
    ]
  }
}