window.BENCHMARK_DATA = {
  "lastUpdate": 1688032923367,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688032886822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428500,
            "unit": "ns",
            "range": "± 120294.71884269608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2543333.3333333335,
            "unit": "ns",
            "range": "± 84546.38506802154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2218448.484848485,
            "unit": "ns",
            "range": "± 136793.53902545787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5228636.734693877,
            "unit": "ns",
            "range": "± 206805.61695897506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45824.17582417582,
            "unit": "ns",
            "range": "± 2638.82720832741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7289086.666666667,
            "unit": "ns",
            "range": "± 98230.35511829665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18511283.333333332,
            "unit": "ns",
            "range": "± 64997.75453996926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46283000,
            "unit": "ns",
            "range": "± 228275.53863360293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92946978.57142857,
            "unit": "ns",
            "range": "± 293037.6746021981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185901606.66666666,
            "unit": "ns",
            "range": "± 451816.0789946449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4928290.848214285,
            "unit": "ns",
            "range": "± 12068.963152844328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527761.5234375,
            "unit": "ns",
            "range": "± 3386.399981047258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146047.4888392857,
            "unit": "ns",
            "range": "± 1202.4114651322975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635438.895089286,
            "unit": "ns",
            "range": "± 14628.142453249362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832785.546875,
            "unit": "ns",
            "range": "± 4990.878860946846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745021.875,
            "unit": "ns",
            "range": "± 1132.4274999310956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3182657.1428571427,
            "unit": "ns",
            "range": "± 44778.733178317416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3286943.75,
            "unit": "ns",
            "range": "± 128893.74463842259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4055376.6666666665,
            "unit": "ns",
            "range": "± 59122.54182949979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4172321.875,
            "unit": "ns",
            "range": "± 114189.09256530195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6564318.75,
            "unit": "ns",
            "range": "± 180079.61041914122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272914.28571428574,
            "unit": "ns",
            "range": "± 9914.821903584096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257367.02127659574,
            "unit": "ns",
            "range": "± 8913.944111894143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234916.32653061225,
            "unit": "ns",
            "range": "± 9323.700690059883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4050900,
            "unit": "ns",
            "range": "± 33170.561554579595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3576914.285714286,
            "unit": "ns",
            "range": "± 42647.20402311283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20337.894736842107,
            "unit": "ns",
            "range": "± 1627.3708693007259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94956.70103092784,
            "unit": "ns",
            "range": "± 6635.9172189509545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75103.15789473684,
            "unit": "ns",
            "range": "± 6393.17209967639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93893.81443298969,
            "unit": "ns",
            "range": "± 12794.992627594835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5178.125,
            "unit": "ns",
            "range": "± 860.7466923671868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19070.652173913044,
            "unit": "ns",
            "range": "± 1542.5494840213594"
          }
        ]
      }
    ]
  }
}