window.BENCHMARK_DATA = {
  "lastUpdate": 1688387922914,
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
          "id": "495ef9dba3a51dd2535deaaebaf8f05463c913df",
          "message": "Prepare 2.5.0",
          "timestamp": "2023-07-03T21:20:27+09:00",
          "tree_id": "df6b6dca20ffeaf28ae66c872ced0c91410428f3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/495ef9dba3a51dd2535deaaebaf8f05463c913df"
        },
        "date": 1688387897105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8659759.794117646,
            "unit": "ns",
            "range": "± 278076.7894283421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21343184.441860463,
            "unit": "ns",
            "range": "± 787261.1098049667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53987117.45454545,
            "unit": "ns",
            "range": "± 1291544.0044452322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106901165.14285715,
            "unit": "ns",
            "range": "± 1694792.8769832524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228100255.13333333,
            "unit": "ns",
            "range": "± 3856682.1149294316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75205.83870967742,
            "unit": "ns",
            "range": "± 6794.145842098378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364989.4421052632,
            "unit": "ns",
            "range": "± 35216.34197741936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348215.2150537634,
            "unit": "ns",
            "range": "± 27193.301698751777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325694.98863636365,
            "unit": "ns",
            "range": "± 18653.662182114993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4456657.689655173,
            "unit": "ns",
            "range": "± 130400.78677049663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3770173.222222222,
            "unit": "ns",
            "range": "± 140278.5650430614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21403.462365591397,
            "unit": "ns",
            "range": "± 3935.289259461554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100166.61224489796,
            "unit": "ns",
            "range": "± 18752.603811442306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104251.30412371134,
            "unit": "ns",
            "range": "± 14829.671041557738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108775.44086021505,
            "unit": "ns",
            "range": "± 13781.388717698674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6388.430107526881,
            "unit": "ns",
            "range": "± 985.9266045291943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19544.226315789474,
            "unit": "ns",
            "range": "± 5288.6926499444735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623222.8333333333,
            "unit": "ns",
            "range": "± 170262.44870259584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2972389.4109589043,
            "unit": "ns",
            "range": "± 144193.94976739908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057276.8105263158,
            "unit": "ns",
            "range": "± 153444.69674476006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5630027.27027027,
            "unit": "ns",
            "range": "± 181473.33740810532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452927.584210526,
            "unit": "ns",
            "range": "± 218510.68367822372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667836.3172043012,
            "unit": "ns",
            "range": "± 252819.1625502886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4478417.894736842,
            "unit": "ns",
            "range": "± 170752.7995309807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4202882.833333333,
            "unit": "ns",
            "range": "± 471539.91723381897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7624232.535353536,
            "unit": "ns",
            "range": "± 470046.83749252127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7232956.456149193,
            "unit": "ns",
            "range": "± 218049.06049777934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016403.978515625,
            "unit": "ns",
            "range": "± 20307.826712550926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368864.6958333333,
            "unit": "ns",
            "range": "± 22376.792149698853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2972717.7787873643,
            "unit": "ns",
            "range": "± 114035.6929681992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823926.6946614584,
            "unit": "ns",
            "range": "± 5040.936221297675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753867.6336588542,
            "unit": "ns",
            "range": "± 12075.517263398515"
          }
        ]
      }
    ]
  }
}