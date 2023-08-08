window.BENCHMARK_DATA = {
  "lastUpdate": 1691504964075,
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
          "id": "324bd13c01474b989b9dae721079349d289b93c3",
          "message": "wip: test fix",
          "timestamp": "2023-08-08T23:12:37+09:00",
          "tree_id": "539ccc7cb1c6bf65f3aa7baec9e5c1c2e3a31e88",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324bd13c01474b989b9dae721079349d289b93c3"
        },
        "date": 1691504951408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3501271.0631578946,
            "unit": "ns",
            "range": "± 200063.47648725435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4049413.5316455695,
            "unit": "ns",
            "range": "± 210213.45168513924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573635.492537313,
            "unit": "ns",
            "range": "± 216891.43948538313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4342191.818181818,
            "unit": "ns",
            "range": "± 298805.2621115948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7430493.59,
            "unit": "ns",
            "range": "± 508113.07988697174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8812471.684210526,
            "unit": "ns",
            "range": "± 302097.51451343467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22956502.133333333,
            "unit": "ns",
            "range": "± 423563.2497537776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57644806.69354839,
            "unit": "ns",
            "range": "± 2586011.9726305045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111541787.33333333,
            "unit": "ns",
            "range": "± 2031257.4639337386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221622327.15384614,
            "unit": "ns",
            "range": "± 3534924.9197424226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52504.86021505376,
            "unit": "ns",
            "range": "± 3882.8573314422383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194543.465745192,
            "unit": "ns",
            "range": "± 42531.188031817335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919244.9965820312,
            "unit": "ns",
            "range": "± 11934.35838515692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413849.5358072917,
            "unit": "ns",
            "range": "± 26102.10687457033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2738093.572395833,
            "unit": "ns",
            "range": "± 30764.164870142275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860459.9721354167,
            "unit": "ns",
            "range": "± 9270.071283170155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769634.3347981771,
            "unit": "ns",
            "range": "± 4344.611994417294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298881.1267605634,
            "unit": "ns",
            "range": "± 14624.186462285767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296439.2315789474,
            "unit": "ns",
            "range": "± 23106.57163106517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249074.35164835164,
            "unit": "ns",
            "range": "± 13418.871259348509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4537867.5227272725,
            "unit": "ns",
            "range": "± 160729.3987488358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4108500.926829268,
            "unit": "ns",
            "range": "± 216672.82732607718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22282.74226804124,
            "unit": "ns",
            "range": "± 4233.142470135589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104388.98979591837,
            "unit": "ns",
            "range": "± 10552.45722446301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75965.24,
            "unit": "ns",
            "range": "± 1993.096821531759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105876.86585365854,
            "unit": "ns",
            "range": "± 13854.743119513569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5498.030927835051,
            "unit": "ns",
            "range": "± 787.1443172105347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19642.35789473684,
            "unit": "ns",
            "range": "± 2009.0136667285028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695922.0588235294,
            "unit": "ns",
            "range": "± 91305.55875626695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928544.6301369863,
            "unit": "ns",
            "range": "± 144679.28528429766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160392.67,
            "unit": "ns",
            "range": "± 129122.65191967208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6170779,
            "unit": "ns",
            "range": "± 572500.3147867513"
          }
        ]
      }
    ]
  }
}