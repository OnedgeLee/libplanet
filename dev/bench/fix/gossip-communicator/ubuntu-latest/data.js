window.BENCHMARK_DATA = {
  "lastUpdate": 1704696226559,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "e6e801aa418b3f5894ad26739165dee2367c0579",
          "message": "fix: Fix GossipConsensusMessageCommunicator",
          "timestamp": "2024-01-08T15:32:17+09:00",
          "tree_id": "e082ce5966b069a0b85c6e3006d47c1860ba2d90",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6e801aa418b3f5894ad26739165dee2367c0579"
        },
        "date": 1704696216219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753254.91796875,
            "unit": "ns",
            "range": "± 21088.607420214743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228910.4307391827,
            "unit": "ns",
            "range": "± 2592.910081498126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784216.6326497396,
            "unit": "ns",
            "range": "± 3728.4023579601585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940063.6893028845,
            "unit": "ns",
            "range": "± 14392.926018015507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618655.1043419471,
            "unit": "ns",
            "range": "± 3365.090946035944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566368.6776692708,
            "unit": "ns",
            "range": "± 1785.4628095608234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2359358.080645161,
            "unit": "ns",
            "range": "± 106687.33511459571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2448149.956140351,
            "unit": "ns",
            "range": "± 104874.77630370662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3179662.705882353,
            "unit": "ns",
            "range": "± 62123.087239935114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3294883.1428571427,
            "unit": "ns",
            "range": "± 92354.22217672413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13954062,
            "unit": "ns",
            "range": "± 942776.8464036598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43292.572916666664,
            "unit": "ns",
            "range": "± 5803.633286221917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197449.90322580645,
            "unit": "ns",
            "range": "± 8848.206691901607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192057.3896103896,
            "unit": "ns",
            "range": "± 8916.389647509044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170677.15,
            "unit": "ns",
            "range": "± 3748.190107449054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3234885.0714285714,
            "unit": "ns",
            "range": "± 39403.91125347113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865508.285714286,
            "unit": "ns",
            "range": "± 31325.092606968698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14575.65306122449,
            "unit": "ns",
            "range": "± 2731.7726169961356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69339.10824742269,
            "unit": "ns",
            "range": "± 7809.172738886278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98064.34146341463,
            "unit": "ns",
            "range": "± 3532.1510557290444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67725,
            "unit": "ns",
            "range": "± 17063.61410098986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3565.714285714286,
            "unit": "ns",
            "range": "± 847.8383924325082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13318.357142857143,
            "unit": "ns",
            "range": "± 2719.03656091411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5569739.066666666,
            "unit": "ns",
            "range": "± 44089.82834666172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14759731.6,
            "unit": "ns",
            "range": "± 237229.5351949849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36456518.46666667,
            "unit": "ns",
            "range": "± 243036.3126988777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77566148.86666666,
            "unit": "ns",
            "range": "± 824472.054063505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152381757.42857143,
            "unit": "ns",
            "range": "± 858484.8038496899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025246.9052631579,
            "unit": "ns",
            "range": "± 96977.24910086788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1987829.7795698924,
            "unit": "ns",
            "range": "± 111702.7168026584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650415.989010989,
            "unit": "ns",
            "range": "± 128858.4237093386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13113160.189473685,
            "unit": "ns",
            "range": "± 1012166.045228539"
          }
        ]
      }
    ]
  }
}