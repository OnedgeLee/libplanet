window.BENCHMARK_DATA = {
  "lastUpdate": 1686661712374,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "602d4a8c43316e1681586047a56bc74bcc9f3cd3",
          "message": "docs: change.md",
          "timestamp": "2023-06-09T01:46:10+09:00",
          "tree_id": "6c0bf379ad0dea93874cdb8bf20460e88b1a27a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/602d4a8c43316e1681586047a56bc74bcc9f3cd3"
        },
        "date": 1686661675029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314736.3636363635,
            "unit": "ns",
            "range": "± 130234.5047029141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2403735.4166666665,
            "unit": "ns",
            "range": "± 93228.95059803006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2135223,
            "unit": "ns",
            "range": "± 139323.77294661815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5080242.372881356,
            "unit": "ns",
            "range": "± 210910.79925539187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42925.294117647056,
            "unit": "ns",
            "range": "± 2099.314280468571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6811100,
            "unit": "ns",
            "range": "± 52882.14659572197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18109800,
            "unit": "ns",
            "range": "± 251151.92044429432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45486414.28571428,
            "unit": "ns",
            "range": "± 205073.80137645328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90744335.71428572,
            "unit": "ns",
            "range": "± 768902.0009649553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179809100,
            "unit": "ns",
            "range": "± 1159293.6390011685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841393.359375,
            "unit": "ns",
            "range": "± 17943.664190384527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490814.2708333333,
            "unit": "ns",
            "range": "± 4590.969611908405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141125.3450520833,
            "unit": "ns",
            "range": "± 2685.1609569169896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599503.6197916665,
            "unit": "ns",
            "range": "± 25275.902795117177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805831.8284254808,
            "unit": "ns",
            "range": "± 2149.2317030002155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728139.51171875,
            "unit": "ns",
            "range": "± 2074.2545089697633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2981584.210526316,
            "unit": "ns",
            "range": "± 63690.250982198515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3152650,
            "unit": "ns",
            "range": "± 52380.87164495942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4001910.5263157897,
            "unit": "ns",
            "range": "± 135171.4742605464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3862992.592592593,
            "unit": "ns",
            "range": "± 162040.8181186082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6438932.558139535,
            "unit": "ns",
            "range": "± 209742.07939064025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261160.9756097561,
            "unit": "ns",
            "range": "± 9307.789158784713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243218.3673469388,
            "unit": "ns",
            "range": "± 9272.263151225714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213970,
            "unit": "ns",
            "range": "± 8647.52530366642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3863535.714285714,
            "unit": "ns",
            "range": "± 67106.97094527923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3370571.4285714286,
            "unit": "ns",
            "range": "± 33845.654841476346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16328.260869565218,
            "unit": "ns",
            "range": "± 1737.3926458703888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79418.47826086957,
            "unit": "ns",
            "range": "± 5025.01280623432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65643.07692307692,
            "unit": "ns",
            "range": "± 3064.8699621053065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84694.79166666667,
            "unit": "ns",
            "range": "± 11701.033420772505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4312.244897959184,
            "unit": "ns",
            "range": "± 642.2038899865892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16004.123711340206,
            "unit": "ns",
            "range": "± 2156.526795073369"
          }
        ]
      }
    ]
  }
}