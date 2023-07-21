window.BENCHMARK_DATA = {
  "lastUpdate": 1689912819361,
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
          "id": "9b20587b8e9f203b2a0b339cda774fa6f75846b6",
          "message": "Release 3.0.1",
          "timestamp": "2023-07-21T12:58:34+09:00",
          "tree_id": "d32e848727b58e4299385bc6aefbdc967485163f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9b20587b8e9f203b2a0b339cda774fa6f75846b6"
        },
        "date": 1689912806658,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283087.96153846156,
            "unit": "ns",
            "range": "± 10749.164416155823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275106.6666666667,
            "unit": "ns",
            "range": "± 12212.982539745526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251347.19191919192,
            "unit": "ns",
            "range": "± 14971.631334284519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4213551.733333333,
            "unit": "ns",
            "range": "± 47186.561693931864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3901577.066666667,
            "unit": "ns",
            "range": "± 47027.733812030936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22833.39175257732,
            "unit": "ns",
            "range": "± 2559.93831939325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101471.61458333333,
            "unit": "ns",
            "range": "± 7619.176901766796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83918.98979591837,
            "unit": "ns",
            "range": "± 7358.205285292967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114145.8125,
            "unit": "ns",
            "range": "± 12851.967098515144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7839.9795918367345,
            "unit": "ns",
            "range": "± 1490.1760013646478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22678.892473118278,
            "unit": "ns",
            "range": "± 1972.5325889321198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495970.888888889,
            "unit": "ns",
            "range": "± 121428.65012593153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2688336.75,
            "unit": "ns",
            "range": "± 49779.40793340153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1888611.1395348837,
            "unit": "ns",
            "range": "± 97156.3251517474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5214346.044943821,
            "unit": "ns",
            "range": "± 288799.86791681655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5563498.568509615,
            "unit": "ns",
            "range": "± 15232.514620655347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1738157.7979910714,
            "unit": "ns",
            "range": "± 1449.7802118000218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1247261.373325893,
            "unit": "ns",
            "range": "± 14687.007255139266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2387290.8563701925,
            "unit": "ns",
            "range": "± 2407.3254048546883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 743790.7673177083,
            "unit": "ns",
            "range": "± 430.3452023504626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 682663.1498647836,
            "unit": "ns",
            "range": "± 350.1037349967899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3822994.7333333334,
            "unit": "ns",
            "range": "± 66601.8536179916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3685391.846153846,
            "unit": "ns",
            "range": "± 38459.36775968059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4393968.533333333,
            "unit": "ns",
            "range": "± 66787.39439644781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4003055.4285714286,
            "unit": "ns",
            "range": "± 69030.94069241069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6247304.047619048,
            "unit": "ns",
            "range": "± 129705.28678063829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7573542.631578947,
            "unit": "ns",
            "range": "± 158311.63854148582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20931950.133333333,
            "unit": "ns",
            "range": "± 272883.72576948977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52448658.28571428,
            "unit": "ns",
            "range": "± 418487.7899807699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105091152.4,
            "unit": "ns",
            "range": "± 734934.8177553668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209605426.2142857,
            "unit": "ns",
            "range": "± 1571868.5300322413"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49166.04347826087,
            "unit": "ns",
            "range": "± 5667.986835492796"
          }
        ]
      }
    ]
  }
}