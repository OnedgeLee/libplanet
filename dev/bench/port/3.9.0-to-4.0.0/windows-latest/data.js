window.BENCHMARK_DATA = {
  "lastUpdate": 1702025157655,
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
          "id": "c440d85a5ce59c88ba6d826ce8d5b8de04a66844",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:33:28+09:00",
          "tree_id": "89f49ba453970fb5696b15c4ec9a17c3c6119325",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c440d85a5ce59c88ba6d826ce8d5b8de04a66844"
        },
        "date": 1702025129849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1095996.3157894737,
            "unit": "ns",
            "range": "± 159724.08444306641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1829251.5151515151,
            "unit": "ns",
            "range": "± 85288.0228626672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661946.8085106383,
            "unit": "ns",
            "range": "± 128619.6290159457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7199684.2105263155,
            "unit": "ns",
            "range": "± 123288.68229195473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33988.15789473684,
            "unit": "ns",
            "range": "± 1630.9479538201626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5100380,
            "unit": "ns",
            "range": "± 30861.145243076862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12924193.333333334,
            "unit": "ns",
            "range": "± 125873.60137776914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32095471.42857143,
            "unit": "ns",
            "range": "± 253205.73401142348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63947292.85714286,
            "unit": "ns",
            "range": "± 393724.8736096071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127537514.28571428,
            "unit": "ns",
            "range": "± 1018680.2395989875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3232312.8645833335,
            "unit": "ns",
            "range": "± 12396.014131502592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039693.3872767857,
            "unit": "ns",
            "range": "± 2745.6330844473296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729271.3518415178,
            "unit": "ns",
            "range": "± 1955.2926247609828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966063.2291666667,
            "unit": "ns",
            "range": "± 5334.120892505054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618087.2591145834,
            "unit": "ns",
            "range": "± 2413.1011476138997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569164.6634615385,
            "unit": "ns",
            "range": "± 2105.695808485269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134471.875,
            "unit": "ns",
            "range": "± 66235.48524807821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284446.6666666665,
            "unit": "ns",
            "range": "± 35767.26090129006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2806657.6923076925,
            "unit": "ns",
            "range": "± 66284.03230387798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2814044.4444444445,
            "unit": "ns",
            "range": "± 113745.18968334718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8178054.166666667,
            "unit": "ns",
            "range": "± 322244.8315669798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172685.7142857143,
            "unit": "ns",
            "range": "± 8761.814794678132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160997.33333333334,
            "unit": "ns",
            "range": "± 7697.770356958466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138720,
            "unit": "ns",
            "range": "± 3678.8811705009807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2843355.5555555555,
            "unit": "ns",
            "range": "± 58701.84105963671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432778.5714285714,
            "unit": "ns",
            "range": "± 37607.92016770749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11519.791666666666,
            "unit": "ns",
            "range": "± 1728.9863042693187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56725,
            "unit": "ns",
            "range": "± 6427.588563127085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45653.60824742268,
            "unit": "ns",
            "range": "± 2827.582221604046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51654.76190476191,
            "unit": "ns",
            "range": "± 9318.596574125439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2538.7755102040815,
            "unit": "ns",
            "range": "± 524.9708196232648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10273.033707865168,
            "unit": "ns",
            "range": "± 1663.2227782875343"
          }
        ]
      }
    ]
  }
}