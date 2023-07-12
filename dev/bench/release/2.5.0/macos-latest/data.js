window.BENCHMARK_DATA = {
  "lastUpdate": 1689146847122,
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
          "id": "c5b47f3d0cdd1dd4c8c188e8ca8f2e75fcd9376b",
          "message": "Release 2.5.0",
          "timestamp": "2023-07-12T16:08:03+09:00",
          "tree_id": "de4825b452f7edcc131ba1b3671a91c396a9b554",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c5b47f3d0cdd1dd4c8c188e8ca8f2e75fcd9376b"
        },
        "date": 1689146813626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8965322.149484536,
            "unit": "ns",
            "range": "± 538882.3235115522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21634110.85135135,
            "unit": "ns",
            "range": "± 1083917.6760385383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52867525.25925926,
            "unit": "ns",
            "range": "± 2169178.9249255876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108164310.4,
            "unit": "ns",
            "range": "± 3148655.3465619786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233030024.8275862,
            "unit": "ns",
            "range": "± 6691444.305717596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75012.33908045977,
            "unit": "ns",
            "range": "± 8285.111572242191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363051.54347826086,
            "unit": "ns",
            "range": "± 37000.83806354502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337679.7173913043,
            "unit": "ns",
            "range": "± 26094.50000819131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321853.2456140351,
            "unit": "ns",
            "range": "± 13834.186450963607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259525.466666667,
            "unit": "ns",
            "range": "± 61798.66799173248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3988077.4791666665,
            "unit": "ns",
            "range": "± 317022.5553425756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24692.59677419355,
            "unit": "ns",
            "range": "± 4866.990597860591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123198.2,
            "unit": "ns",
            "range": "± 12755.459546864056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130303.21739130435,
            "unit": "ns",
            "range": "± 22018.74287257302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129777.94680851063,
            "unit": "ns",
            "range": "± 20799.12065377425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8662.78125,
            "unit": "ns",
            "range": "± 1170.3393183456624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25814.25287356322,
            "unit": "ns",
            "range": "± 3721.9940680081904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1652716.8709677418,
            "unit": "ns",
            "range": "± 159667.71825754296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3087496.1263736263,
            "unit": "ns",
            "range": "± 252617.64234746588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2451443.865591398,
            "unit": "ns",
            "range": "± 376286.5178585093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8081872.423913044,
            "unit": "ns",
            "range": "± 2429068.67773295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3691072.4081632653,
            "unit": "ns",
            "range": "± 327869.9879292767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4018024.6666666665,
            "unit": "ns",
            "range": "± 370330.98154182924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4564598.194736842,
            "unit": "ns",
            "range": "± 283932.0359648224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256434.489583333,
            "unit": "ns",
            "range": "± 386730.4349609072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8009054.947368421,
            "unit": "ns",
            "range": "± 822652.8234657157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7273282.7633463545,
            "unit": "ns",
            "range": "± 282532.99287289294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2201545.6389508927,
            "unit": "ns",
            "range": "± 31212.347163182665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393737.953203125,
            "unit": "ns",
            "range": "± 36589.56097704241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3170901.5124362246,
            "unit": "ns",
            "range": "± 211352.39516568792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876529.7345842634,
            "unit": "ns",
            "range": "± 12819.799648021104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934375.9374186198,
            "unit": "ns",
            "range": "± 9646.164660258275"
          }
        ]
      }
    ]
  }
}