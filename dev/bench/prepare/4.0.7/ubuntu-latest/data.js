window.BENCHMARK_DATA = {
  "lastUpdate": 1708600030447,
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
          "id": "c391e3e537d974ce9306bfba7b200093d614b44e",
          "message": "Prepare 4.0.7",
          "timestamp": "2024-02-22T19:55:52+09:00",
          "tree_id": "7ecc2e5ec9876c5a41779d840614a8429327d2ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c391e3e537d974ce9306bfba7b200093d614b44e"
        },
        "date": 1708600020096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5738629.642857143,
            "unit": "ns",
            "range": "± 64620.44134507183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15004400.357142856,
            "unit": "ns",
            "range": "± 140605.3584730119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37365622.833333336,
            "unit": "ns",
            "range": "± 308589.09672700346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77190995.78571428,
            "unit": "ns",
            "range": "± 639149.9316296461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149613020.1153846,
            "unit": "ns",
            "range": "± 555124.3450710749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208137.25,
            "unit": "ns",
            "range": "± 9800.752461783952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210021.13917525773,
            "unit": "ns",
            "range": "± 16905.844058703467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173568.875,
            "unit": "ns",
            "range": "± 3253.400003585992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3242246.066666667,
            "unit": "ns",
            "range": "± 34389.21156506306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804825.066666667,
            "unit": "ns",
            "range": "± 44462.334834372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18776.93,
            "unit": "ns",
            "range": "± 5574.285588605354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73685.41666666667,
            "unit": "ns",
            "range": "± 7709.42404520415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82666.76,
            "unit": "ns",
            "range": "± 18762.494117722617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73759,
            "unit": "ns",
            "range": "± 14865.933294475308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4426.395833333333,
            "unit": "ns",
            "range": "± 997.7369496084804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15095.060606060606,
            "unit": "ns",
            "range": "± 2569.7959929280414"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42399.104166666664,
            "unit": "ns",
            "range": "± 5981.770821208059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009927.4639175257,
            "unit": "ns",
            "range": "± 101805.42702043828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921614.049019608,
            "unit": "ns",
            "range": "± 77846.15237667531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1658638.2842105264,
            "unit": "ns",
            "range": "± 118823.32270086408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7713421.342857143,
            "unit": "ns",
            "range": "± 253059.26808892522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3774589.826171875,
            "unit": "ns",
            "range": "± 15526.883880755759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208578.1703725962,
            "unit": "ns",
            "range": "± 2068.7047721661143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 789383.1115373884,
            "unit": "ns",
            "range": "± 1583.1542295366112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971770.832310268,
            "unit": "ns",
            "range": "± 5056.053434587888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624163.3856026785,
            "unit": "ns",
            "range": "± 552.1404512361464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580397.9750976562,
            "unit": "ns",
            "range": "± 1291.5782719261254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2528275.8684210526,
            "unit": "ns",
            "range": "± 86762.82233555376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2614403.557142857,
            "unit": "ns",
            "range": "± 85845.07628380971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3243525.911764706,
            "unit": "ns",
            "range": "± 102645.2883650167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3342028,
            "unit": "ns",
            "range": "± 127992.83260508969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8985543,
            "unit": "ns",
            "range": "± 254201.08311356802"
          }
        ]
      }
    ]
  }
}