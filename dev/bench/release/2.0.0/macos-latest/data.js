window.BENCHMARK_DATA = {
  "lastUpdate": 1686718446960,
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
          "id": "d9ed1a98f743ad30c9a27a78e0a5d6d352b10f15",
          "message": "Fix changelog typo",
          "timestamp": "2023-06-14T13:27:50+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9ed1a98f743ad30c9a27a78e0a5d6d352b10f15"
        },
        "date": 1686718332579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9170033.433333334,
            "unit": "ns",
            "range": "± 162838.1821785343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22274948.88679245,
            "unit": "ns",
            "range": "± 926061.1261193138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54779041.34615385,
            "unit": "ns",
            "range": "± 1443500.629866352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109941014,
            "unit": "ns",
            "range": "± 4786595.908942503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253950814.35555556,
            "unit": "ns",
            "range": "± 43300319.79191173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80061.23626373627,
            "unit": "ns",
            "range": "± 5110.727049463196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357204.3510638298,
            "unit": "ns",
            "range": "± 30938.079450841997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349344.8021978022,
            "unit": "ns",
            "range": "± 39593.446643554475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310647.40449438203,
            "unit": "ns",
            "range": "± 19240.836958335578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4272810.930555556,
            "unit": "ns",
            "range": "± 208772.49261180748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4100864.3647058825,
            "unit": "ns",
            "range": "± 561246.3299433903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24623.5625,
            "unit": "ns",
            "range": "± 5512.8089846570765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115196.59782608696,
            "unit": "ns",
            "range": "± 14402.673664380258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120810.94444444444,
            "unit": "ns",
            "range": "± 9442.495183128014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129561.41578947369,
            "unit": "ns",
            "range": "± 18693.785177115748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8685.53125,
            "unit": "ns",
            "range": "± 1297.1803222709023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26603.12222222222,
            "unit": "ns",
            "range": "± 2361.300839247979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707498.6590909092,
            "unit": "ns",
            "range": "± 139888.9588786703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3202816.1529411767,
            "unit": "ns",
            "range": "± 212693.53058620833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2848201.6704545454,
            "unit": "ns",
            "range": "± 336606.68367696606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8024397.152173913,
            "unit": "ns",
            "range": "± 1681267.4225253037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3700098.5222222223,
            "unit": "ns",
            "range": "± 326862.9571880782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3736404.4693877553,
            "unit": "ns",
            "range": "± 304364.6179516091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4933631.576086956,
            "unit": "ns",
            "range": "± 578478.5773549618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5037895.11827957,
            "unit": "ns",
            "range": "± 724953.2531182066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8542179.515463918,
            "unit": "ns",
            "range": "± 802987.9333707211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7683970.770452949,
            "unit": "ns",
            "range": "± 696549.3541930817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2433590.4841649868,
            "unit": "ns",
            "range": "± 465004.53107579355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1601747.8335626775,
            "unit": "ns",
            "range": "± 209464.180022376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3342305.991477273,
            "unit": "ns",
            "range": "± 267942.9497979281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 914098.8544606855,
            "unit": "ns",
            "range": "± 41164.310970578146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836078.5106956845,
            "unit": "ns",
            "range": "± 37374.49104861033"
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
          "id": "ed894ec9a0bb678538dafc31f06551b6fde13335",
          "message": "Fix typo on changelog",
          "timestamp": "2023-06-14T13:30:08+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ed894ec9a0bb678538dafc31f06551b6fde13335"
        },
        "date": 1686718408675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8513298.594736842,
            "unit": "ns",
            "range": "± 763355.8214064866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24228540.68478261,
            "unit": "ns",
            "range": "± 3197747.883520841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69841990.86597939,
            "unit": "ns",
            "range": "± 18208403.497834045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130797396.6875,
            "unit": "ns",
            "range": "± 25209815.16441558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275239366.27472526,
            "unit": "ns",
            "range": "± 53139382.5811325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83536.14367816092,
            "unit": "ns",
            "range": "± 7646.810517626852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387139.94505494507,
            "unit": "ns",
            "range": "± 50528.604610185925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374392.70430107525,
            "unit": "ns",
            "range": "± 41040.361337442046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354976.7032967033,
            "unit": "ns",
            "range": "± 33064.25280890207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4605803.113636363,
            "unit": "ns",
            "range": "± 252945.75547017535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4090943.8352941177,
            "unit": "ns",
            "range": "± 210647.28292155697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26265.468085106382,
            "unit": "ns",
            "range": "± 3233.163994131597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130095.64432989691,
            "unit": "ns",
            "range": "± 15067.321300990607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123184.61111111111,
            "unit": "ns",
            "range": "± 8603.169721187684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129476.82828282828,
            "unit": "ns",
            "range": "± 21073.325765943053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5941.4375,
            "unit": "ns",
            "range": "± 1663.2034898605193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22707.591836734693,
            "unit": "ns",
            "range": "± 5666.6562948218425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1714656.8351648352,
            "unit": "ns",
            "range": "± 185658.79146507586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3314885.275862069,
            "unit": "ns",
            "range": "± 466960.9546625053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2735708.206896552,
            "unit": "ns",
            "range": "± 297235.1562175606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13208851.75510204,
            "unit": "ns",
            "range": "± 4710206.844129056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3921431.2906976743,
            "unit": "ns",
            "range": "± 502238.36969501706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941069.205882353,
            "unit": "ns",
            "range": "± 444034.14494685683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5122453.383720931,
            "unit": "ns",
            "range": "± 789571.1918481027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4837681.544444445,
            "unit": "ns",
            "range": "± 405806.8131206018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8513512.711764706,
            "unit": "ns",
            "range": "± 796210.6380841737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7256414.866508152,
            "unit": "ns",
            "range": "± 408088.6665575856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2075656.0319393382,
            "unit": "ns",
            "range": "± 40737.671411323994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346567.2534555288,
            "unit": "ns",
            "range": "± 18731.717175714173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2820636.8436612217,
            "unit": "ns",
            "range": "± 163961.21394458902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919025.4167668269,
            "unit": "ns",
            "range": "± 12615.037858420914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801177.0398023201,
            "unit": "ns",
            "range": "± 37697.005996803426"
          }
        ]
      }
    ]
  }
}