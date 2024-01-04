window.BENCHMARK_DATA = {
  "lastUpdate": 1704339690040,
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
          "id": "2eff7abe8901207e17ceb653575dd32a3f07c7a7",
          "message": "fix: Fix GossipConsensusMessageCommunicator",
          "timestamp": "2024-01-04T12:29:54+09:00",
          "tree_id": "233a0932b362fbd8924c78581d9802109b20c44d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2eff7abe8901207e17ceb653575dd32a3f07c7a7"
        },
        "date": 1704339679840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737399.8864397323,
            "unit": "ns",
            "range": "± 45918.238925118276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203831.7920572916,
            "unit": "ns",
            "range": "± 3139.937257343697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756257.0822566106,
            "unit": "ns",
            "range": "± 3217.7215105696673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930888.903483073,
            "unit": "ns",
            "range": "± 1144.9186804319982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623759.6023220486,
            "unit": "ns",
            "range": "± 11783.912792501169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581182.9995442708,
            "unit": "ns",
            "range": "± 1954.7995277370076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503773.1379310344,
            "unit": "ns",
            "range": "± 59392.27892322857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2457474.925531915,
            "unit": "ns",
            "range": "± 133879.24053426666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3154454.7592592593,
            "unit": "ns",
            "range": "± 88300.17805348046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3178191.6911764704,
            "unit": "ns",
            "range": "± 151417.1466413979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13951879.225806452,
            "unit": "ns",
            "range": "± 1094971.6254437843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38771.290322580644,
            "unit": "ns",
            "range": "± 4257.657734269858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203534.2,
            "unit": "ns",
            "range": "± 7590.060251287983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194259.07692307694,
            "unit": "ns",
            "range": "± 8080.981366973035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165149.77142857143,
            "unit": "ns",
            "range": "± 5023.424119800652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3186461.3571428573,
            "unit": "ns",
            "range": "± 53123.346695152846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2895788.75,
            "unit": "ns",
            "range": "± 55688.67793785974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13818.171717171717,
            "unit": "ns",
            "range": "± 2517.480125939039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59988.02380952381,
            "unit": "ns",
            "range": "± 4685.077525624632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52216.2037037037,
            "unit": "ns",
            "range": "± 1262.865204293999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63885,
            "unit": "ns",
            "range": "± 10871.065439377782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3408.360465116279,
            "unit": "ns",
            "range": "± 597.897648388097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14357.020202020201,
            "unit": "ns",
            "range": "± 2737.389591398696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5814097.866666666,
            "unit": "ns",
            "range": "± 49196.222065849535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14687016.533333333,
            "unit": "ns",
            "range": "± 64579.2559427856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36392197,
            "unit": "ns",
            "range": "± 418373.8669042661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78909945.35714285,
            "unit": "ns",
            "range": "± 809464.3525997829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150724461.35714287,
            "unit": "ns",
            "range": "± 780261.384626835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980550.5054945055,
            "unit": "ns",
            "range": "± 74776.45493251849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865120.1515151516,
            "unit": "ns",
            "range": "± 86641.1522221207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1618299.3894736841,
            "unit": "ns",
            "range": "± 169725.8807506408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12781874.074468086,
            "unit": "ns",
            "range": "± 1129155.2577862574"
          }
        ]
      }
    ]
  }
}