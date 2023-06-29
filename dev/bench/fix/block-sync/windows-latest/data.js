window.BENCHMARK_DATA = {
  "lastUpdate": 1688033223022,
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
      },
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
          "id": "ba43002dca652c7895c36f90b26990593d2688f4",
          "message": "Fix BlockCompletion.Complete() to ignore empty chunk",
          "timestamp": "2023-06-29T18:47:15+09:00",
          "tree_id": "9ece02ac6488a9cbaa226825dc7af02b965b95d0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ba43002dca652c7895c36f90b26990593d2688f4"
        },
        "date": 1688033172622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762771.875,
            "unit": "ns",
            "range": "± 187513.7180683477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3356526.88172043,
            "unit": "ns",
            "range": "± 227361.4485599034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2821658.064516129,
            "unit": "ns",
            "range": "± 202438.40465391413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6659137.2549019605,
            "unit": "ns",
            "range": "± 252839.72548694504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58790.10989010989,
            "unit": "ns",
            "range": "± 5626.723043656246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9563044.444444444,
            "unit": "ns",
            "range": "± 314794.54019992554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25440341.666666668,
            "unit": "ns",
            "range": "± 278387.6644940006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64785006.52173913,
            "unit": "ns",
            "range": "± 2335102.5694723823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135601647.36842105,
            "unit": "ns",
            "range": "± 2990632.3603635742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262028250,
            "unit": "ns",
            "range": "± 5437286.472697247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6498584.375,
            "unit": "ns",
            "range": "± 115616.13172622374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953141.2109375,
            "unit": "ns",
            "range": "± 36050.09903823312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1518703.80859375,
            "unit": "ns",
            "range": "± 25516.677034962133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3325981.3151041665,
            "unit": "ns",
            "range": "± 66967.91975307903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1078931.8277994792,
            "unit": "ns",
            "range": "± 27235.531605398068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991688.3957435344,
            "unit": "ns",
            "range": "± 28767.92927729237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4173950,
            "unit": "ns",
            "range": "± 271538.04502267606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4267531.914893617,
            "unit": "ns",
            "range": "± 164591.29501307037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5178375,
            "unit": "ns",
            "range": "± 146788.81687396782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5209968.9655172415,
            "unit": "ns",
            "range": "± 227829.0658157778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8404057.142857144,
            "unit": "ns",
            "range": "± 301390.7099923394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318232.3076923077,
            "unit": "ns",
            "range": "± 14767.099280286773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302836.6666666667,
            "unit": "ns",
            "range": "± 12667.909097556503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279146.9135802469,
            "unit": "ns",
            "range": "± 14716.768381847227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5059167.5,
            "unit": "ns",
            "range": "± 165446.96165779192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4618003.333333333,
            "unit": "ns",
            "range": "± 134737.74906457544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23936.17021276596,
            "unit": "ns",
            "range": "± 1827.2637198551495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108406.31578947368,
            "unit": "ns",
            "range": "± 7810.097263217548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97706.52173913043,
            "unit": "ns",
            "range": "± 8435.01733484186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121357.8947368421,
            "unit": "ns",
            "range": "± 14583.666022974227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8132.98969072165,
            "unit": "ns",
            "range": "± 1886.2286915896345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23204.347826086956,
            "unit": "ns",
            "range": "± 1852.8216108529105"
          }
        ]
      }
    ]
  }
}