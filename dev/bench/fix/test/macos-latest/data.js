window.BENCHMARK_DATA = {
  "lastUpdate": 1688739200431,
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
          "id": "efc27e150171b0d54ca29d905eb0afc5d4542eee",
          "message": "fix: Fix flaky test\n\n[skip changelog]",
          "timestamp": "2023-07-07T22:55:31+09:00",
          "tree_id": "a2c35e0829542a513e93e235985027669bce69c8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/efc27e150171b0d54ca29d905eb0afc5d4542eee"
        },
        "date": 1688739162263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9193977.355670104,
            "unit": "ns",
            "range": "± 685667.8852989493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21128963.95,
            "unit": "ns",
            "range": "± 1489531.9402489308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53516438.057692304,
            "unit": "ns",
            "range": "± 2204238.514131847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109933666.07936507,
            "unit": "ns",
            "range": "± 4654102.835092166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215657350.1111111,
            "unit": "ns",
            "range": "± 7058240.519308324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66442.82291666667,
            "unit": "ns",
            "range": "± 10335.977266956821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316990.670212766,
            "unit": "ns",
            "range": "± 22368.044190576347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338255.2752808989,
            "unit": "ns",
            "range": "± 51400.10604887204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305687.152173913,
            "unit": "ns",
            "range": "± 21867.64361476341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4202733.560975609,
            "unit": "ns",
            "range": "± 150447.36276968246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4265470.149484536,
            "unit": "ns",
            "range": "± 377275.97310059494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20152.893617021276,
            "unit": "ns",
            "range": "± 3100.2737867932083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114744.28571428571,
            "unit": "ns",
            "range": "± 17329.529923922546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100119.88541666667,
            "unit": "ns",
            "range": "± 17603.701129902853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102476.78888888888,
            "unit": "ns",
            "range": "± 10852.986620989668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5912.619565217391,
            "unit": "ns",
            "range": "± 1300.7925381494558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20426.116161616163,
            "unit": "ns",
            "range": "± 5015.302177615758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625671.52,
            "unit": "ns",
            "range": "± 189645.97855760163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958320.6772151897,
            "unit": "ns",
            "range": "± 153757.87101826936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035278.1326530613,
            "unit": "ns",
            "range": "± 164808.24053378837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6163157.96875,
            "unit": "ns",
            "range": "± 384216.689952714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3353833.5443037977,
            "unit": "ns",
            "range": "± 254387.6153642058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3645202.5280898875,
            "unit": "ns",
            "range": "± 218390.61882033604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4738764.717171717,
            "unit": "ns",
            "range": "± 354532.1699679804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4134960.3571428573,
            "unit": "ns",
            "range": "± 231089.96166065676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7249183.865384615,
            "unit": "ns",
            "range": "± 296915.64048198046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6612265.007179054,
            "unit": "ns",
            "range": "± 220741.33532115523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906416.5311197916,
            "unit": "ns",
            "range": "± 11347.108229846452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270903.889765625,
            "unit": "ns",
            "range": "± 32731.26975711369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2711448.848067434,
            "unit": "ns",
            "range": "± 60009.49135614813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878442.570172991,
            "unit": "ns",
            "range": "± 5325.351785144352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714914.1694661458,
            "unit": "ns",
            "range": "± 4035.82566271963"
          }
        ]
      }
    ]
  }
}