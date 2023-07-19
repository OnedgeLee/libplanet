window.BENCHMARK_DATA = {
  "lastUpdate": 1689754691858,
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
          "id": "27ec7be4dd62adb956c0802b1d41c28bd059f8e9",
          "message": "Prepare 3.0.1",
          "timestamp": "2023-07-19T16:56:09+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/OnedgeLee/libplanet/commit/27ec7be4dd62adb956c0802b1d41c28bd059f8e9"
        },
        "date": 1689754643478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744997.9166666667,
            "unit": "ns",
            "range": "± 251865.78546986266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3247933.6842105263,
            "unit": "ns",
            "range": "± 351633.62328354816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242004.210526316,
            "unit": "ns",
            "range": "± 322107.95498238463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6246011.827956989,
            "unit": "ns",
            "range": "± 509024.9532299499"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61811.458333333336,
            "unit": "ns",
            "range": "± 15665.71092876122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9752868.041237114,
            "unit": "ns",
            "range": "± 1016156.0761789983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25402610.63829787,
            "unit": "ns",
            "range": "± 1448359.74369066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69926287.65432099,
            "unit": "ns",
            "range": "± 3673153.5493150405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133889783.33333333,
            "unit": "ns",
            "range": "± 2555799.0756892683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267355550,
            "unit": "ns",
            "range": "± 4585129.07109183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6172371.930803572,
            "unit": "ns",
            "range": "± 252164.37158890025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2091669.5052083333,
            "unit": "ns",
            "range": "± 37284.12065418138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1620922.5260416667,
            "unit": "ns",
            "range": "± 33679.33175471258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3315141.5283203125,
            "unit": "ns",
            "range": "± 60208.274727624084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1121095.8333333333,
            "unit": "ns",
            "range": "± 20906.886735650274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1026901.9140625,
            "unit": "ns",
            "range": "± 15758.340357842555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3909673.6263736263,
            "unit": "ns",
            "range": "± 322523.48952704715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4284643.956043956,
            "unit": "ns",
            "range": "± 367472.5719798814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5523800,
            "unit": "ns",
            "range": "± 362883.75674462324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4780156.666666667,
            "unit": "ns",
            "range": "± 426126.16427110473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8470671.875,
            "unit": "ns",
            "range": "± 682194.30211065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336206.3157894737,
            "unit": "ns",
            "range": "± 48681.97449300422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314904.347826087,
            "unit": "ns",
            "range": "± 48216.07481948907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285950.5376344086,
            "unit": "ns",
            "range": "± 38903.22615340004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5410626.373626374,
            "unit": "ns",
            "range": "± 469328.8008387119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4533804.395604395,
            "unit": "ns",
            "range": "± 280882.07565615216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26884.69387755102,
            "unit": "ns",
            "range": "± 9839.10095675828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106648.42105263157,
            "unit": "ns",
            "range": "± 18930.027161403308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127102.12765957447,
            "unit": "ns",
            "range": "± 22766.71300892686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143654.34782608695,
            "unit": "ns",
            "range": "± 26987.939565435114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7384.090909090909,
            "unit": "ns",
            "range": "± 1407.9320748078464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25703.684210526317,
            "unit": "ns",
            "range": "± 9202.125223154722"
          }
        ]
      }
    ]
  }
}