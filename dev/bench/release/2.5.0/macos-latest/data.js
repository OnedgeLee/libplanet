window.BENCHMARK_DATA = {
  "lastUpdate": 1689146673300,
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
          "id": "b04d99b0618448958c21b00fef1e3daa69cf8c47",
          "message": "Release 2.5.0",
          "timestamp": "2023-07-12T16:09:09+09:00",
          "tree_id": "17a066ea486c168def576e22f7703b92c172deac",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b04d99b0618448958c21b00fef1e3daa69cf8c47"
        },
        "date": 1689146624122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7785269.375,
            "unit": "ns",
            "range": "± 240609.570018392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18959883.363636363,
            "unit": "ns",
            "range": "± 463071.5268158643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46565007.526315786,
            "unit": "ns",
            "range": "± 988393.624415921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95563258.85714285,
            "unit": "ns",
            "range": "± 1559692.7404460078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193267866.9,
            "unit": "ns",
            "range": "± 2097612.9517369703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54485.06451612903,
            "unit": "ns",
            "range": "± 4400.725725245314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306784.1153846154,
            "unit": "ns",
            "range": "± 15759.824043929053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296436.8095238095,
            "unit": "ns",
            "range": "± 13534.728696897384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275667.57446808513,
            "unit": "ns",
            "range": "± 20243.493008568043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4002796.4,
            "unit": "ns",
            "range": "± 72259.97232493243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3693133.2,
            "unit": "ns",
            "range": "± 84168.49676915316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17562.614457831325,
            "unit": "ns",
            "range": "± 2294.905215276983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85069.27894736842,
            "unit": "ns",
            "range": "± 7564.540442762559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79626.52222222222,
            "unit": "ns",
            "range": "± 6685.687757563575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101546.93548387097,
            "unit": "ns",
            "range": "± 11956.075208323875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5433.75,
            "unit": "ns",
            "range": "± 586.8970469155224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16906.170454545456,
            "unit": "ns",
            "range": "± 1877.6941424125407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463788.5412371133,
            "unit": "ns",
            "range": "± 135916.0835176217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2752787.417910448,
            "unit": "ns",
            "range": "± 105196.72478628837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076933.7204301076,
            "unit": "ns",
            "range": "± 193796.31512623746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5950829.597826087,
            "unit": "ns",
            "range": "± 333222.3751308868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3245624.911764706,
            "unit": "ns",
            "range": "± 63699.53321852016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3372383.3913043477,
            "unit": "ns",
            "range": "± 84689.59354862219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4337511.820224719,
            "unit": "ns",
            "range": "± 231941.63651349497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3800981.3529411764,
            "unit": "ns",
            "range": "± 178839.37327925957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7012289.317073171,
            "unit": "ns",
            "range": "± 225456.6746200297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6164547.821354167,
            "unit": "ns",
            "range": "± 56274.43599015864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868794.5295572917,
            "unit": "ns",
            "range": "± 11195.54569058429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225884.271484375,
            "unit": "ns",
            "range": "± 6395.091291316314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2410510.263221154,
            "unit": "ns",
            "range": "± 12144.974739670299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758929.5337239583,
            "unit": "ns",
            "range": "± 3327.0187443806667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694287.364453125,
            "unit": "ns",
            "range": "± 4254.495266813317"
          }
        ]
      }
    ]
  }
}