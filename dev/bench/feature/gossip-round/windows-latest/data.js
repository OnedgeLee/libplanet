window.BENCHMARK_DATA = {
  "lastUpdate": 1688137160792,
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
          "id": "71acc5d584de19e5e0622b2b9bc8cd6966cad2bb",
          "message": "feat: Fix gossip to forget only with NewRound",
          "timestamp": "2023-06-30T23:38:10+09:00",
          "tree_id": "eb102d493eedf9889af83dec5cde100aaf559683",
          "url": "https://github.com/OnedgeLee/libplanet/commit/71acc5d584de19e5e0622b2b9bc8cd6966cad2bb"
        },
        "date": 1688137122426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1673694.7368421052,
            "unit": "ns",
            "range": "± 113443.97845897429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3309705.3191489363,
            "unit": "ns",
            "range": "± 206731.27243757897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171173.6842105263,
            "unit": "ns",
            "range": "± 198335.18599139096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5921649.315068494,
            "unit": "ns",
            "range": "± 293620.344967257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58654.166666666664,
            "unit": "ns",
            "range": "± 5968.406587438765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9579379.310344828,
            "unit": "ns",
            "range": "± 387101.2301342452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25242206.451612905,
            "unit": "ns",
            "range": "± 1428215.7856545022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62048007.35294118,
            "unit": "ns",
            "range": "± 2950288.2183168405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124656300,
            "unit": "ns",
            "range": "± 4142372.755317899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250521000,
            "unit": "ns",
            "range": "± 8468071.77743421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6167503.571428572,
            "unit": "ns",
            "range": "± 142161.34169572173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961426.9381009615,
            "unit": "ns",
            "range": "± 67650.48172288218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1476121.1741727942,
            "unit": "ns",
            "range": "± 30189.909278106814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3310200.2672697366,
            "unit": "ns",
            "range": "± 68922.69448257844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1042337.0442708334,
            "unit": "ns",
            "range": "± 23533.215123312846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969559.6749441965,
            "unit": "ns",
            "range": "± 14489.125585648284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3872751.4285714286,
            "unit": "ns",
            "range": "± 125587.67120885658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4104125.6756756757,
            "unit": "ns",
            "range": "± 200899.39011397556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110615,
            "unit": "ns",
            "range": "± 181235.94134690127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4506632.258064516,
            "unit": "ns",
            "range": "± 198468.61400643986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8042879.120879121,
            "unit": "ns",
            "range": "± 503940.4077460137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323481.0344827586,
            "unit": "ns",
            "range": "± 12803.953020304256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307120,
            "unit": "ns",
            "range": "± 15336.469518676628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291132.3076923077,
            "unit": "ns",
            "range": "± 13547.913904134693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4911557.692307692,
            "unit": "ns",
            "range": "± 170615.21864713036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4375321.428571428,
            "unit": "ns",
            "range": "± 123226.76584291995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26024.7311827957,
            "unit": "ns",
            "range": "± 2776.7534966755106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114728.72340425532,
            "unit": "ns",
            "range": "± 9799.919051019917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108060.41666666667,
            "unit": "ns",
            "range": "± 12976.809105531433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124259.375,
            "unit": "ns",
            "range": "± 18914.136056483203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8180.412371134021,
            "unit": "ns",
            "range": "± 1428.8427117234985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26791.666666666668,
            "unit": "ns",
            "range": "± 2467.2450720619618"
          }
        ]
      }
    ]
  }
}