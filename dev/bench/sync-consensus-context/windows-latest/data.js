window.BENCHMARK_DATA = {
  "lastUpdate": 1681957846526,
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
          "id": "d6d87834a170b07dd60f9311efe37295800a4c4e",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-20T11:15:04+09:00",
          "tree_id": "aa4baf5796af7f658859b22d9da95ce319e15ac9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d6d87834a170b07dd60f9311efe37295800a4c4e"
        },
        "date": 1681957811935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344596,
            "unit": "ns",
            "range": "± 102259.82545961197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2428294,
            "unit": "ns",
            "range": "± 48639.19955481724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2065733.7837837837,
            "unit": "ns",
            "range": "± 102214.37487977021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5024167.647058823,
            "unit": "ns",
            "range": "± 160492.99941418806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42935,
            "unit": "ns",
            "range": "± 2247.6485603031697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6929176.923076923,
            "unit": "ns",
            "range": "± 25113.646816228353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17781333.333333332,
            "unit": "ns",
            "range": "± 92027.53987387741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47410675,
            "unit": "ns",
            "range": "± 413024.6638574329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92002906.66666667,
            "unit": "ns",
            "range": "± 842730.465694414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183398880,
            "unit": "ns",
            "range": "± 1820488.8775114384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4715324.322916667,
            "unit": "ns",
            "range": "± 17358.074190271196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499944.4921875,
            "unit": "ns",
            "range": "± 3150.842593896698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143134.849330357,
            "unit": "ns",
            "range": "± 1186.995875333519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552666.2890625,
            "unit": "ns",
            "range": "± 8721.004493072971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821200.6184895834,
            "unit": "ns",
            "range": "± 2366.7285018201096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722677.7278645834,
            "unit": "ns",
            "range": "± 805.2582949599432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2984535.294117647,
            "unit": "ns",
            "range": "± 60007.13437976011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182962.2641509436,
            "unit": "ns",
            "range": "± 131526.9762128595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912384.6153846155,
            "unit": "ns",
            "range": "± 41428.59009093934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3922895.744680851,
            "unit": "ns",
            "range": "± 152409.7137687222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6798214.814814814,
            "unit": "ns",
            "range": "± 172108.88481893734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293847.7272727273,
            "unit": "ns",
            "range": "± 10831.44622258391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241789.2857142857,
            "unit": "ns",
            "range": "± 6498.623175304379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224789.156626506,
            "unit": "ns",
            "range": "± 11902.838481395662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5191326.666666667,
            "unit": "ns",
            "range": "± 67686.22424379241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3467935.714285714,
            "unit": "ns",
            "range": "± 39421.36490520098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15573.684210526315,
            "unit": "ns",
            "range": "± 1321.6857809144517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79290.4255319149,
            "unit": "ns",
            "range": "± 4594.832748753596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68892.70833333333,
            "unit": "ns",
            "range": "± 5832.634951928343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91276.04166666667,
            "unit": "ns",
            "range": "± 14256.313429064305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4662.886597938144,
            "unit": "ns",
            "range": "± 659.7536768289715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15825.263157894737,
            "unit": "ns",
            "range": "± 1632.4481302927527"
          }
        ]
      }
    ]
  }
}