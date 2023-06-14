window.BENCHMARK_DATA = {
  "lastUpdate": 1686718731261,
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
          "id": "2af02e0e2a1312db09d4422f84717ac606b9e0b3",
          "message": "Prepare 2.0.1",
          "timestamp": "2023-06-14T13:38:47+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2af02e0e2a1312db09d4422f84717ac606b9e0b3"
        },
        "date": 1686718696932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435976.7676767677,
            "unit": "ns",
            "range": "± 124577.232686118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2706024.5901639345,
            "unit": "ns",
            "range": "± 122048.9378019294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265257.7319587627,
            "unit": "ns",
            "range": "± 174619.45340454596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5604090.769230769,
            "unit": "ns",
            "range": "± 260655.87210623422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49435.10638297872,
            "unit": "ns",
            "range": "± 3542.6345656841786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7186176.923076923,
            "unit": "ns",
            "range": "± 78453.23611177717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20013366.666666668,
            "unit": "ns",
            "range": "± 259967.20031206871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52231646.15384615,
            "unit": "ns",
            "range": "± 471232.6400257531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103180458.8235294,
            "unit": "ns",
            "range": "± 1889516.2175338771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203059733.33333334,
            "unit": "ns",
            "range": "± 3064828.7940220525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4885258.072916667,
            "unit": "ns",
            "range": "± 69190.24598069814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546147.5027901786,
            "unit": "ns",
            "range": "± 9796.937475712783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190271.8489583333,
            "unit": "ns",
            "range": "± 7424.785443157538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682637.8385416665,
            "unit": "ns",
            "range": "± 32453.029915111103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829782.0012019231,
            "unit": "ns",
            "range": "± 3125.909863165745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764339.6484375,
            "unit": "ns",
            "range": "± 9433.264284019206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342770.9677419355,
            "unit": "ns",
            "range": "± 100200.7225308227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511916.6666666665,
            "unit": "ns",
            "range": "± 51997.339675538526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4229693.75,
            "unit": "ns",
            "range": "± 131396.93357619047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295581.25,
            "unit": "ns",
            "range": "± 224753.57255929118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6804270.588235294,
            "unit": "ns",
            "range": "± 218851.5222832688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267639.2156862745,
            "unit": "ns",
            "range": "± 10824.362862198821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264623.6842105263,
            "unit": "ns",
            "range": "± 11772.072810071046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247829.11392405065,
            "unit": "ns",
            "range": "± 12829.514768875855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4136938.4615384615,
            "unit": "ns",
            "range": "± 40455.45983880582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658671.4285714286,
            "unit": "ns",
            "range": "± 58374.235999894925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22052.127659574468,
            "unit": "ns",
            "range": "± 2573.7604271213686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95041.66666666667,
            "unit": "ns",
            "range": "± 7457.312436255425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78956.52173913043,
            "unit": "ns",
            "range": "± 5716.39831946436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108194.9494949495,
            "unit": "ns",
            "range": "± 16201.337647831919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6564.948453608247,
            "unit": "ns",
            "range": "± 1096.969427285294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21852.15053763441,
            "unit": "ns",
            "range": "± 1953.1456508959693"
          }
        ]
      }
    ]
  }
}