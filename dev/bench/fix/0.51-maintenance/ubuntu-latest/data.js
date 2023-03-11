window.BENCHMARK_DATA = {
  "lastUpdate": 1678518990662,
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
          "id": "6ca115644a09dae06fb5003352db39f25305bbf8",
          "message": "fix: ActionExecutionState total count",
          "timestamp": "2023-03-11T16:02:59+09:00",
          "tree_id": "a307135d2d9e360060cf6e08395ba431cb14e229",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6ca115644a09dae06fb5003352db39f25305bbf8"
        },
        "date": 1678518978385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188941.57894736843,
            "unit": "ns",
            "range": "± 4158.920550599498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190414.17647058822,
            "unit": "ns",
            "range": "± 6003.880525281447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155738.46153846153,
            "unit": "ns",
            "range": "± 1601.6859146632867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11361791.733333332,
            "unit": "ns",
            "range": "± 110513.23200831567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9081472.357142856,
            "unit": "ns",
            "range": "± 74610.14965148162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16828.67021276596,
            "unit": "ns",
            "range": "± 1180.2147552736094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48296.816326530614,
            "unit": "ns",
            "range": "± 5711.333477361271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38939.86666666667,
            "unit": "ns",
            "range": "± 701.7611383071132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81908.07216494845,
            "unit": "ns",
            "range": "± 11851.762130100653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4157.586956521739,
            "unit": "ns",
            "range": "± 302.76575474379615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15212.246913580248,
            "unit": "ns",
            "range": "± 810.6406344809054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171122.052631579,
            "unit": "ns",
            "range": "± 70261.61528686412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5015027.571428572,
            "unit": "ns",
            "range": "± 37713.99498597567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23086009.066666666,
            "unit": "ns",
            "range": "± 227983.48051855067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6035043.428571428,
            "unit": "ns",
            "range": "± 100578.9593720135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26670543,
            "unit": "ns",
            "range": "± 296139.3237047949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6062563.95,
            "unit": "ns",
            "range": "± 28188.127489858405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894874.4692708333,
            "unit": "ns",
            "range": "± 5527.903192721859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400607.8119419643,
            "unit": "ns",
            "range": "± 4554.106938579331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627059.7042410714,
            "unit": "ns",
            "range": "± 5540.043561015829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808603.3169270833,
            "unit": "ns",
            "range": "± 1383.4749272635477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734529.4915114183,
            "unit": "ns",
            "range": "± 1765.0611537267278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7817903.133333334,
            "unit": "ns",
            "range": "± 20399.87913783058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19411740.866666667,
            "unit": "ns",
            "range": "± 140707.48035850152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49185528.2,
            "unit": "ns",
            "range": "± 299904.2048171859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98504802.86666666,
            "unit": "ns",
            "range": "± 605863.5132216386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 197371674.92857143,
            "unit": "ns",
            "range": "± 897496.7561831642"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44240.28846153846,
            "unit": "ns",
            "range": "± 1829.111005931875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297852.1123595505,
            "unit": "ns",
            "range": "± 69025.33377095526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411488.769230769,
            "unit": "ns",
            "range": "± 65197.55116401701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050601.3974358975,
            "unit": "ns",
            "range": "± 105428.34757390761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5105557.358208955,
            "unit": "ns",
            "range": "± 240689.1718836798"
          }
        ]
      }
    ]
  }
}