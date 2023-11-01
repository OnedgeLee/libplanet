window.BENCHMARK_DATA = {
  "lastUpdate": 1698808202712,
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
          "id": "324184e4815b9ea2ba056265b536e077d0c08411",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-01T11:54:43+09:00",
          "tree_id": "3b0cb04acaab6ec004dd75eb29facea232ce0a7d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324184e4815b9ea2ba056265b536e077d0c08411"
        },
        "date": 1698808189978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50966.663043478264,
            "unit": "ns",
            "range": "± 2701.337419176949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5325359.502232143,
            "unit": "ns",
            "range": "± 10180.743029072979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1654269.0579427083,
            "unit": "ns",
            "range": "± 5482.450684210416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160299.284877232,
            "unit": "ns",
            "range": "± 2877.5537732514267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675494.7158854166,
            "unit": "ns",
            "range": "± 2592.4603168719495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845499.0553152902,
            "unit": "ns",
            "range": "± 1348.6585062046277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746585.0516075721,
            "unit": "ns",
            "range": "± 502.6362218384149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8751754.666666666,
            "unit": "ns",
            "range": "± 135093.89736489984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23218513.53846154,
            "unit": "ns",
            "range": "± 178993.0549377151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58440572.666666664,
            "unit": "ns",
            "range": "± 312710.74104643345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118351703.73333333,
            "unit": "ns",
            "range": "± 436248.4005333702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240142167,
            "unit": "ns",
            "range": "± 937465.9074756494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3727149.066666667,
            "unit": "ns",
            "range": "± 63629.04188729576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3890553.3333333335,
            "unit": "ns",
            "range": "± 147661.10166957555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4659610.580645162,
            "unit": "ns",
            "range": "± 140804.23031826236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4564770.870967742,
            "unit": "ns",
            "range": "± 131081.8823030709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11218969.590909092,
            "unit": "ns",
            "range": "± 365200.57021080056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283825.06976744183,
            "unit": "ns",
            "range": "± 8106.495048490875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276895.1,
            "unit": "ns",
            "range": "± 9703.700348386797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252970.19642857142,
            "unit": "ns",
            "range": "± 10907.574206477131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4544941.133333334,
            "unit": "ns",
            "range": "± 48039.54512670735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209468.733333333,
            "unit": "ns",
            "range": "± 37740.90969731589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23425.625,
            "unit": "ns",
            "range": "± 2126.4886364739014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95646.06451612903,
            "unit": "ns",
            "range": "± 6905.467178425668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85036.38541666667,
            "unit": "ns",
            "range": "± 5080.128368394252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98520.51515151515,
            "unit": "ns",
            "range": "± 11288.904926342173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6750.7052631578945,
            "unit": "ns",
            "range": "± 1079.397831276075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22084.673684210527,
            "unit": "ns",
            "range": "± 1935.8381792430393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1458517.5157894737,
            "unit": "ns",
            "range": "± 98514.33715701714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794097.4716981133,
            "unit": "ns",
            "range": "± 116564.12098128055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274536.236842105,
            "unit": "ns",
            "range": "± 98816.60617755412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10005207.912087912,
            "unit": "ns",
            "range": "± 630578.5823194027"
          }
        ]
      }
    ]
  }
}