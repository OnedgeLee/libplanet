window.BENCHMARK_DATA = {
  "lastUpdate": 1686716523627,
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
        "date": 1686716327483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8997100.5,
            "unit": "ns",
            "range": "± 141281.43573228907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24202838.04,
            "unit": "ns",
            "range": "± 969434.2988779949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58009416.0862069,
            "unit": "ns",
            "range": "± 1654592.050243083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126696608.6904762,
            "unit": "ns",
            "range": "± 2851931.5372887305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240588785.5,
            "unit": "ns",
            "range": "± 4271949.277099089"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69237.58695652174,
            "unit": "ns",
            "range": "± 8304.627750193175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382887.5319148936,
            "unit": "ns",
            "range": "± 27612.13120236475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360011.2368421053,
            "unit": "ns",
            "range": "± 17169.64878527877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319102.737704918,
            "unit": "ns",
            "range": "± 12618.371900925042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4820841.366666666,
            "unit": "ns",
            "range": "± 143110.96478040444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4474467.269230769,
            "unit": "ns",
            "range": "± 152829.48042292128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19310.329545454544,
            "unit": "ns",
            "range": "± 1558.1466276124404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97461.8111111111,
            "unit": "ns",
            "range": "± 6635.199428252639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90541.59523809524,
            "unit": "ns",
            "range": "± 6670.403203288006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115172.8350515464,
            "unit": "ns",
            "range": "± 16582.15992269027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5995.8125,
            "unit": "ns",
            "range": "± 1387.8581097845474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18985.184782608696,
            "unit": "ns",
            "range": "± 1444.2884474115017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1932937.5353535353,
            "unit": "ns",
            "range": "± 216925.36935142303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3566122.1071428573,
            "unit": "ns",
            "range": "± 150825.3341814092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3029247.173469388,
            "unit": "ns",
            "range": "± 230141.02790281762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8308689.10989011,
            "unit": "ns",
            "range": "± 475439.55158768495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3850805.3402061854,
            "unit": "ns",
            "range": "± 257047.40094095023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4113053.5454545454,
            "unit": "ns",
            "range": "± 153952.94586884513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5253621.859649123,
            "unit": "ns",
            "range": "± 228408.04453515384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5378813.875,
            "unit": "ns",
            "range": "± 98097.75885572853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9280383.693548387,
            "unit": "ns",
            "range": "± 395425.0820239329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7358581.094791667,
            "unit": "ns",
            "range": "± 66163.16986035941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2276583.3169270833,
            "unit": "ns",
            "range": "± 32038.93192864119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1535857.8274274555,
            "unit": "ns",
            "range": "± 17989.756098633232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078806.7580915177,
            "unit": "ns",
            "range": "± 34428.32327671621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043522.705078125,
            "unit": "ns",
            "range": "± 10125.24278783412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 928602.8669782366,
            "unit": "ns",
            "range": "± 8758.118236213762"
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
          "id": "e99d507bbe722d4ed8adda1eb5b9e06edf71c71f",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:03:12+09:00",
          "tree_id": "668448bb952bb72b9773743c6375fe8071a1881f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e99d507bbe722d4ed8adda1eb5b9e06edf71c71f"
        },
        "date": 1686716471314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8395426.416666666,
            "unit": "ns",
            "range": "± 327527.35602173547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20269763.733333334,
            "unit": "ns",
            "range": "± 305728.60485298454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50289911.89473684,
            "unit": "ns",
            "range": "± 1078886.5678756705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103097502.6111111,
            "unit": "ns",
            "range": "± 2205462.509210947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240100928.53846154,
            "unit": "ns",
            "range": "± 5715289.902821221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62963.729166666664,
            "unit": "ns",
            "range": "± 8835.245317511792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317421.56666666665,
            "unit": "ns",
            "range": "± 20520.189977136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314704.8085106383,
            "unit": "ns",
            "range": "± 22252.599760780206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320084.6777777778,
            "unit": "ns",
            "range": "± 20636.767361594673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4384873.136363637,
            "unit": "ns",
            "range": "± 104978.9905227279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3862784.625,
            "unit": "ns",
            "range": "± 72551.59016578019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24867.64210526316,
            "unit": "ns",
            "range": "± 3996.5983592321104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126792.20212765958,
            "unit": "ns",
            "range": "± 11468.099102432854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121864.83333333333,
            "unit": "ns",
            "range": "± 11055.030312165518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125836.65263157895,
            "unit": "ns",
            "range": "± 15047.455201382922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8564.32105263158,
            "unit": "ns",
            "range": "± 1204.8476638849795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24861.74742268041,
            "unit": "ns",
            "range": "± 3434.3252158385244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1568185.2765957448,
            "unit": "ns",
            "range": "± 142342.15289824593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006701.7358490564,
            "unit": "ns",
            "range": "± 124128.06048952193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581373.855670103,
            "unit": "ns",
            "range": "± 165508.13541308613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726074.615384615,
            "unit": "ns",
            "range": "± 377088.32549790904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3323652.5862068967,
            "unit": "ns",
            "range": "± 94371.86807386634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483990.0520833335,
            "unit": "ns",
            "range": "± 239899.2599487662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4477738.458333333,
            "unit": "ns",
            "range": "± 174448.61462003444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4324596.030927835,
            "unit": "ns",
            "range": "± 260063.96719991692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7658929.609756097,
            "unit": "ns",
            "range": "± 274392.0481736741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7226709.125,
            "unit": "ns",
            "range": "± 34611.58106722567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052042.5052083333,
            "unit": "ns",
            "range": "± 29506.175334279735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348859.2645089286,
            "unit": "ns",
            "range": "± 16582.77209100073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2740068.562763936,
            "unit": "ns",
            "range": "± 135856.0968321477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903499.1166294643,
            "unit": "ns",
            "range": "± 9910.880640364698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811706.6991536458,
            "unit": "ns",
            "range": "± 12998.8494368515"
          }
        ]
      }
    ]
  }
}