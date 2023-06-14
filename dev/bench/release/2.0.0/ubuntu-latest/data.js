window.BENCHMARK_DATA = {
  "lastUpdate": 1686716112801,
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
          "id": "335fd39e76d19f625d79562010f69e99263dfeec",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:00:09+09:00",
          "tree_id": "2a1c21dc2c292847a99ea06984255271aafb7ddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/335fd39e76d19f625d79562010f69e99263dfeec"
        },
        "date": 1686716100801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478723.6129032257,
            "unit": "ns",
            "range": "± 83818.48861288617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2843747.2333333334,
            "unit": "ns",
            "range": "± 84889.96376311101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413419.527777778,
            "unit": "ns",
            "range": "± 118942.25172012148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5881466.833333333,
            "unit": "ns",
            "range": "± 244309.33994910616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506757.5588235296,
            "unit": "ns",
            "range": "± 103996.08709340396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3732322.1363636362,
            "unit": "ns",
            "range": "± 140206.13781916618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4554754.692307692,
            "unit": "ns",
            "range": "± 53618.30788139535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4663315.952380952,
            "unit": "ns",
            "range": "± 108269.12646109055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7218618.038461538,
            "unit": "ns",
            "range": "± 196137.6363296919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8161067.785714285,
            "unit": "ns",
            "range": "± 53350.88622316132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22762929.64285714,
            "unit": "ns",
            "range": "± 150793.3556955994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56373485,
            "unit": "ns",
            "range": "± 586265.6578406121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111360249.2,
            "unit": "ns",
            "range": "± 940470.8733829788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224409888.5,
            "unit": "ns",
            "range": "± 2299650.267646089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6130640.895833333,
            "unit": "ns",
            "range": "± 28026.502058986385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878243.9831194195,
            "unit": "ns",
            "range": "± 2143.048517642629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402019.6006510416,
            "unit": "ns",
            "range": "± 2923.17087232996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654276.619010417,
            "unit": "ns",
            "range": "± 3678.013892693113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829976.7978515625,
            "unit": "ns",
            "range": "± 810.9550196453149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759899.9056222098,
            "unit": "ns",
            "range": "± 1176.1102865074727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46399.573033707864,
            "unit": "ns",
            "range": "± 2318.0474389590386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291180.4130434783,
            "unit": "ns",
            "range": "± 11189.751316025426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276899.6923076923,
            "unit": "ns",
            "range": "± 8104.232023597776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244980.66666666666,
            "unit": "ns",
            "range": "± 6676.77309181166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4644898.266666667,
            "unit": "ns",
            "range": "± 41398.664477193444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4186907.8,
            "unit": "ns",
            "range": "± 45824.23141464412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19979.22340425532,
            "unit": "ns",
            "range": "± 1307.5112627591589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89380.36781609195,
            "unit": "ns",
            "range": "± 4671.622560900045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76757.0425531915,
            "unit": "ns",
            "range": "± 2962.088048462691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95855.06185567011,
            "unit": "ns",
            "range": "± 12869.204344265707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5945.546391752578,
            "unit": "ns",
            "range": "± 976.4732141382851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19479.728260869564,
            "unit": "ns",
            "range": "± 1337.2590805163056"
          }
        ]
      }
    ]
  }
}