window.BENCHMARK_DATA = {
  "lastUpdate": 1688387632860,
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
          "id": "74e6be3177341482c0d7e87c787851d2b6a44ba5",
          "message": "Prepare 2.4.1",
          "timestamp": "2023-07-03T21:16:51+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/OnedgeLee/libplanet/commit/74e6be3177341482c0d7e87c787851d2b6a44ba5"
        },
        "date": 1688387617058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10433105.2,
            "unit": "ns",
            "range": "± 236882.67863595975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27337819.533333335,
            "unit": "ns",
            "range": "± 510874.10797431535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68009625.86666666,
            "unit": "ns",
            "range": "± 583433.6809837659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137914386.2857143,
            "unit": "ns",
            "range": "± 226828.04474736383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279479134.85714287,
            "unit": "ns",
            "range": "± 1120781.3079646274"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59792.04347826087,
            "unit": "ns",
            "range": "± 5731.418498860285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357390.4,
            "unit": "ns",
            "range": "± 10426.789324983323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339336.5675675676,
            "unit": "ns",
            "range": "± 16823.913525205462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321256.0888888889,
            "unit": "ns",
            "range": "± 12135.080206915933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5487101.533333333,
            "unit": "ns",
            "range": "± 94222.259791764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4883921.375,
            "unit": "ns",
            "range": "± 95899.58527117483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25328.01030927835,
            "unit": "ns",
            "range": "± 2104.5275424607644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121790.53608247422,
            "unit": "ns",
            "range": "± 10310.443527339417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116745.68,
            "unit": "ns",
            "range": "± 10371.452099105518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126637.21052631579,
            "unit": "ns",
            "range": "± 14887.731093223822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7386.219780219781,
            "unit": "ns",
            "range": "± 1099.226827286624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25960.854166666668,
            "unit": "ns",
            "range": "± 2494.8982132139668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845866.3023255814,
            "unit": "ns",
            "range": "± 99379.47498826314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3484256.3928571427,
            "unit": "ns",
            "range": "± 94908.09596709443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2356206.710526316,
            "unit": "ns",
            "range": "± 118740.85316967263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6403021,
            "unit": "ns",
            "range": "± 249809.82362384934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7672694.286458333,
            "unit": "ns",
            "range": "± 103225.22506935193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2293526.2450520834,
            "unit": "ns",
            "range": "± 9047.364586356387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1669179.0553850445,
            "unit": "ns",
            "range": "± 3538.735581863486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3272267.427604167,
            "unit": "ns",
            "range": "± 37592.2351729306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002955.749860491,
            "unit": "ns",
            "range": "± 957.1458004080296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916393.0289481027,
            "unit": "ns",
            "range": "± 790.3051386156781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4494882.25,
            "unit": "ns",
            "range": "± 63955.16763223021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4734020.875,
            "unit": "ns",
            "range": "± 88159.01881704069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5645152.95,
            "unit": "ns",
            "range": "± 128094.91093777014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5023334.214285715,
            "unit": "ns",
            "range": "± 65589.11405945651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8078816.95,
            "unit": "ns",
            "range": "± 183750.2367535818"
          }
        ]
      }
    ]
  }
}