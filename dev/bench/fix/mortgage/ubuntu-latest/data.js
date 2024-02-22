window.BENCHMARK_DATA = {
  "lastUpdate": 1708592110640,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:05:30+09:00",
          "tree_id": "3fdd296222640e7db1e6a6370a55aa7a3699a196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2"
        },
        "date": 1708586279181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5768505.714285715,
            "unit": "ns",
            "range": "± 26217.405922339138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14632784.766666668,
            "unit": "ns",
            "range": "± 43441.51898894268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39766991.26923077,
            "unit": "ns",
            "range": "± 167632.44272174456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76225647.61538461,
            "unit": "ns",
            "range": "± 382341.62844711234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156661446.8,
            "unit": "ns",
            "range": "± 668535.9866651266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203838.96666666667,
            "unit": "ns",
            "range": "± 14235.89726076657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192349.6037735849,
            "unit": "ns",
            "range": "± 7291.304577106852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165176.03488372092,
            "unit": "ns",
            "range": "± 5317.500318350617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3266596.0714285714,
            "unit": "ns",
            "range": "± 23474.886212435904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834590.1,
            "unit": "ns",
            "range": "± 52362.463392614154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18392.848484848484,
            "unit": "ns",
            "range": "± 5428.7902368753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67152.40217391304,
            "unit": "ns",
            "range": "± 6546.395567363068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83025.89361702128,
            "unit": "ns",
            "range": "± 15965.586929708104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94755.51020408163,
            "unit": "ns",
            "range": "± 9378.751538313647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3282.3,
            "unit": "ns",
            "range": "± 460.97928369938694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11760.54945054945,
            "unit": "ns",
            "range": "± 689.0781646315003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39094.09375,
            "unit": "ns",
            "range": "± 4874.514090932282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001850.5416666666,
            "unit": "ns",
            "range": "± 91359.67024769007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1890748.35,
            "unit": "ns",
            "range": "± 84180.00785158179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728922.0757575757,
            "unit": "ns",
            "range": "± 79032.68611254082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7706679.510204081,
            "unit": "ns",
            "range": "± 305342.0410057331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3816535.7237723214,
            "unit": "ns",
            "range": "± 17194.261975247915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216523.772298177,
            "unit": "ns",
            "range": "± 3280.7186669981375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761928.7931640625,
            "unit": "ns",
            "range": "± 12607.791154868615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905204.6891526442,
            "unit": "ns",
            "range": "± 5783.598982726113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623845.7530924479,
            "unit": "ns",
            "range": "± 11791.38731951822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579746.9801199777,
            "unit": "ns",
            "range": "± 1094.5157650605065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2457545.7954545454,
            "unit": "ns",
            "range": "± 86912.62227638278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2579392.1333333333,
            "unit": "ns",
            "range": "± 68703.01432514384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3282954.966666667,
            "unit": "ns",
            "range": "± 60735.81449296461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3340177.5614035088,
            "unit": "ns",
            "range": "± 144293.282941997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9080799.525,
            "unit": "ns",
            "range": "± 206417.1601340835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "8852513afe358ef7572e74454706f6c1bdfe3fcf",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:13:33+09:00",
          "tree_id": "f1f064ff5f0c00010e42112584f77f6a0c7deed6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8852513afe358ef7572e74454706f6c1bdfe3fcf"
        },
        "date": 1708586667307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5742268.366666666,
            "unit": "ns",
            "range": "± 41281.630762477434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14639671.466666667,
            "unit": "ns",
            "range": "± 99373.40362194265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37036591.538461536,
            "unit": "ns",
            "range": "± 377434.0797204671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74920130.92307693,
            "unit": "ns",
            "range": "± 336514.5157251669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151503997.36666667,
            "unit": "ns",
            "range": "± 1229802.9180873928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203025.38235294117,
            "unit": "ns",
            "range": "± 6504.555774153458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193137.77659574468,
            "unit": "ns",
            "range": "± 7466.3866754306955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175129.73076923078,
            "unit": "ns",
            "range": "± 2515.989306874672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3215242.6153846155,
            "unit": "ns",
            "range": "± 26672.90973546775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2864426.25,
            "unit": "ns",
            "range": "± 29215.71700028786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14798.583333333334,
            "unit": "ns",
            "range": "± 2499.9304692085325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70317.10416666667,
            "unit": "ns",
            "range": "± 9600.591015227483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92118.93814432989,
            "unit": "ns",
            "range": "± 7545.126752047799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63899.84523809524,
            "unit": "ns",
            "range": "± 8273.18857907378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3194.3894736842103,
            "unit": "ns",
            "range": "± 425.18687492845095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12074.113636363636,
            "unit": "ns",
            "range": "± 740.0991147015561"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40398.53684210526,
            "unit": "ns",
            "range": "± 6288.815896410657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991053.306122449,
            "unit": "ns",
            "range": "± 84410.8195740819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1869907.388888889,
            "unit": "ns",
            "range": "± 71138.4129516735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640880.09375,
            "unit": "ns",
            "range": "± 165184.38887721347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7837055.903846154,
            "unit": "ns",
            "range": "± 305232.9493581145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3779127.918269231,
            "unit": "ns",
            "range": "± 34278.8005183785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216493.6162109375,
            "unit": "ns",
            "range": "± 17969.727332005223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765739.3466796875,
            "unit": "ns",
            "range": "± 2658.223617530479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953117.8759765625,
            "unit": "ns",
            "range": "± 2876.545610218854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626960.1576450893,
            "unit": "ns",
            "range": "± 3414.8646180512583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587255.1682942709,
            "unit": "ns",
            "range": "± 1029.3109868739211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439367.6481481483,
            "unit": "ns",
            "range": "± 68133.76878764287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2623684.1666666665,
            "unit": "ns",
            "range": "± 86726.08878235957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3250367.722222222,
            "unit": "ns",
            "range": "± 67917.10041427716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3180683.8620689656,
            "unit": "ns",
            "range": "± 134526.2016386501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8973765.75,
            "unit": "ns",
            "range": "± 269292.04497926665"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "81db7a44655ed2a15e057489b234b822ef63d0d6",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:18:21+09:00",
          "tree_id": "a93e129b8f0796ce556626d19290357b89b02fb8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/81db7a44655ed2a15e057489b234b822ef63d0d6"
        },
        "date": 1708590583279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5600619.076923077,
            "unit": "ns",
            "range": "± 41472.418204676585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14825283.533333333,
            "unit": "ns",
            "range": "± 137188.60818536681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36451385.28571428,
            "unit": "ns",
            "range": "± 288888.50325273315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77109364.83333333,
            "unit": "ns",
            "range": "± 218045.14365392458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153649973.58333334,
            "unit": "ns",
            "range": "± 457837.7298232636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204385.26470588235,
            "unit": "ns",
            "range": "± 6517.629980611903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201204.55555555556,
            "unit": "ns",
            "range": "± 7498.509977914871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168862.83333333334,
            "unit": "ns",
            "range": "± 2214.864754062396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3196525.6923076925,
            "unit": "ns",
            "range": "± 37569.3074450067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2965619.8571428573,
            "unit": "ns",
            "range": "± 36424.790587766416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16294.094736842106,
            "unit": "ns",
            "range": "± 2559.0895990636664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75072.8762886598,
            "unit": "ns",
            "range": "± 7807.946785510862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60017.55319148936,
            "unit": "ns",
            "range": "± 6230.4798437328855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89298.6551724138,
            "unit": "ns",
            "range": "± 8681.773675855706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5815.788659793814,
            "unit": "ns",
            "range": "± 953.5888566223007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12582.494505494506,
            "unit": "ns",
            "range": "± 984.5974854237687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39977.395833333336,
            "unit": "ns",
            "range": "± 4579.0703480284055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981266.0760869565,
            "unit": "ns",
            "range": "± 80834.32493921602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913804.8111111112,
            "unit": "ns",
            "range": "± 70551.4272311734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1624691.206185567,
            "unit": "ns",
            "range": "± 123236.51120211712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7796464.75,
            "unit": "ns",
            "range": "± 276789.96271631675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3799947.2189002405,
            "unit": "ns",
            "range": "± 23812.32320216679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223137.2915039062,
            "unit": "ns",
            "range": "± 2607.8668896953745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779806.7501302083,
            "unit": "ns",
            "range": "± 1975.7940033252398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942128.2293526786,
            "unit": "ns",
            "range": "± 3773.3101721064913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613923.9577636719,
            "unit": "ns",
            "range": "± 1977.8480845805036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589660.0075334822,
            "unit": "ns",
            "range": "± 823.6119412726106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436730.1428571427,
            "unit": "ns",
            "range": "± 57805.836714198434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532907.1515151514,
            "unit": "ns",
            "range": "± 70060.78210789597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3223232.217391304,
            "unit": "ns",
            "range": "± 80648.12845146078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3305690.846153846,
            "unit": "ns",
            "range": "± 127932.4156520313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8862953.337837838,
            "unit": "ns",
            "range": "± 168947.60185935913"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "1517f9e4ffad728bd619dab1d12b465f2a86c372",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:29:22+09:00",
          "tree_id": "0a81982a46b3799bbc319c503c9772176680a2eb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1517f9e4ffad728bd619dab1d12b465f2a86c372"
        },
        "date": 1708591235293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5536513.266666667,
            "unit": "ns",
            "range": "± 15687.548904723619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14618211.833333334,
            "unit": "ns",
            "range": "± 58981.278225048714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36996651.78571428,
            "unit": "ns",
            "range": "± 435761.2790397228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74037222.53846154,
            "unit": "ns",
            "range": "± 449795.1226061363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153891926.25,
            "unit": "ns",
            "range": "± 577610.7244090836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195784.89436619717,
            "unit": "ns",
            "range": "± 9222.271657675661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191167.9827586207,
            "unit": "ns",
            "range": "± 8031.947181475567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171212.14285714287,
            "unit": "ns",
            "range": "± 5547.595913561843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3422223.4375,
            "unit": "ns",
            "range": "± 65641.09076279252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2973162.7333333334,
            "unit": "ns",
            "range": "± 42354.0769592098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15390.656565656565,
            "unit": "ns",
            "range": "± 3039.7884598848827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66551.56185567011,
            "unit": "ns",
            "range": "± 7776.913626795275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55938.67525773196,
            "unit": "ns",
            "range": "± 5070.715342389879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70679.97959183673,
            "unit": "ns",
            "range": "± 16682.568268729377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3328.808510638298,
            "unit": "ns",
            "range": "± 735.9593297054896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15046.57,
            "unit": "ns",
            "range": "± 3068.159676928714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40493.56701030928,
            "unit": "ns",
            "range": "± 5932.000052517448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027089.14,
            "unit": "ns",
            "range": "± 110858.9153013793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1953601.3529411764,
            "unit": "ns",
            "range": "± 93310.05249836006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1671487.852631579,
            "unit": "ns",
            "range": "± 201180.89235037446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7670080.064516129,
            "unit": "ns",
            "range": "± 189965.05665287244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3840762.3119791667,
            "unit": "ns",
            "range": "± 57927.37953873879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220194.5687779018,
            "unit": "ns",
            "range": "± 1851.7079276765735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762478.4533503606,
            "unit": "ns",
            "range": "± 1739.270954374013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944180.616015625,
            "unit": "ns",
            "range": "± 19664.94519706632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626558.6586303711,
            "unit": "ns",
            "range": "± 11660.082085810785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582653.3002115885,
            "unit": "ns",
            "range": "± 2031.4025567430585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383315.1379310344,
            "unit": "ns",
            "range": "± 59206.457367252566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2568032.1818181816,
            "unit": "ns",
            "range": "± 54366.11845681652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3142872,
            "unit": "ns",
            "range": "± 99065.25337624691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3159386.725490196,
            "unit": "ns",
            "range": "± 118525.80372595301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8956501.544444444,
            "unit": "ns",
            "range": "± 281214.71613810386"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "1c053daff0e28cb063d41dc2188f9a34750c4b18",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:31:28+09:00",
          "tree_id": "a0d9de13a8359f5b9ef681b7ed0e224994becf14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1c053daff0e28cb063d41dc2188f9a34750c4b18"
        },
        "date": 1708591355226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5671722.866666666,
            "unit": "ns",
            "range": "± 50646.0853780804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14934349.214285715,
            "unit": "ns",
            "range": "± 155740.56869934918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37298472.07692308,
            "unit": "ns",
            "range": "± 248304.921555622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76648709.57692307,
            "unit": "ns",
            "range": "± 296048.231815488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150026102.15384614,
            "unit": "ns",
            "range": "± 663892.0683643849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212756.20652173914,
            "unit": "ns",
            "range": "± 16590.209169794678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196550.75862068965,
            "unit": "ns",
            "range": "± 8627.950073281003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168172.07894736843,
            "unit": "ns",
            "range": "± 5738.905114437577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3329840.5714285714,
            "unit": "ns",
            "range": "± 42558.74550947971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3006304,
            "unit": "ns",
            "range": "± 38169.213006969745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16847.958333333332,
            "unit": "ns",
            "range": "± 3927.2492875633284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69143.29885057472,
            "unit": "ns",
            "range": "± 4291.8128822942135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69736.97,
            "unit": "ns",
            "range": "± 18926.15128849631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92043.76288659793,
            "unit": "ns",
            "range": "± 12125.664203262224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6517.234693877551,
            "unit": "ns",
            "range": "± 701.1412464287918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12862.544943820225,
            "unit": "ns",
            "range": "± 1201.80549695138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40280.729166666664,
            "unit": "ns",
            "range": "± 5219.579435526576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010914.4545454546,
            "unit": "ns",
            "range": "± 93125.40426070565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011466.1186440678,
            "unit": "ns",
            "range": "± 88312.05513250761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684750.0108695652,
            "unit": "ns",
            "range": "± 109815.90560855133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7845608.79032258,
            "unit": "ns",
            "range": "± 232823.72546817386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3675766.924278846,
            "unit": "ns",
            "range": "± 22219.669452709535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201613.249609375,
            "unit": "ns",
            "range": "± 2057.8428109465835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764679.7361778846,
            "unit": "ns",
            "range": "± 3637.8149887613836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935765.2602539062,
            "unit": "ns",
            "range": "± 3986.801795555303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615463.9364420573,
            "unit": "ns",
            "range": "± 1869.213908506198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573668.8557128906,
            "unit": "ns",
            "range": "± 902.424174098772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2471118.2413793104,
            "unit": "ns",
            "range": "± 63207.19789066476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2610038.5862068967,
            "unit": "ns",
            "range": "± 74857.36923238813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3218204.617647059,
            "unit": "ns",
            "range": "± 93704.94425686784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3311758.7536231885,
            "unit": "ns",
            "range": "± 159231.4016115804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9066208.972972972,
            "unit": "ns",
            "range": "± 224676.54591242524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "9bfdbffecda9f37bc2c9388bcda7e23659c0e337",
          "message": "fix: Fix Mortgage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:43:57+09:00",
          "tree_id": "a0d9de13a8359f5b9ef681b7ed0e224994becf14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9bfdbffecda9f37bc2c9388bcda7e23659c0e337"
        },
        "date": 1708592099544,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5667965.214285715,
            "unit": "ns",
            "range": "± 54271.21290217887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14776163.733333332,
            "unit": "ns",
            "range": "± 73455.91101515702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37216889.14285714,
            "unit": "ns",
            "range": "± 145814.0852270226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75860979.07692307,
            "unit": "ns",
            "range": "± 492336.16696681635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154209800.7857143,
            "unit": "ns",
            "range": "± 1116951.9134806928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202460.6582278481,
            "unit": "ns",
            "range": "± 10132.671022408695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193766.27692307692,
            "unit": "ns",
            "range": "± 8729.503521656623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169328.5,
            "unit": "ns",
            "range": "± 2945.5908575360563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3265357.533333333,
            "unit": "ns",
            "range": "± 47423.12966244375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2941934.466666667,
            "unit": "ns",
            "range": "± 40485.71820648904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13433.220930232557,
            "unit": "ns",
            "range": "± 1678.5021291837609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65001.4081632653,
            "unit": "ns",
            "range": "± 5433.159062524817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64139.48235294117,
            "unit": "ns",
            "range": "± 4305.264047020325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62622.68947368421,
            "unit": "ns",
            "range": "± 14494.468196665353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4238.677419354839,
            "unit": "ns",
            "range": "± 1205.3039771855708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14135.064516129032,
            "unit": "ns",
            "range": "± 2054.6424041267874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40426.31914893617,
            "unit": "ns",
            "range": "± 6033.006260746795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993622.4226804124,
            "unit": "ns",
            "range": "± 88387.04953602684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852945.28,
            "unit": "ns",
            "range": "± 65831.41685017597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1628400.2150537635,
            "unit": "ns",
            "range": "± 147359.01185922482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7696745.823529412,
            "unit": "ns",
            "range": "± 246429.17424005334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3777053.7135416665,
            "unit": "ns",
            "range": "± 46348.13010349244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217928.0026506695,
            "unit": "ns",
            "range": "± 4706.462253103982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 801600.4311523438,
            "unit": "ns",
            "range": "± 848.1812978333722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1997394.073046875,
            "unit": "ns",
            "range": "± 45600.14230124754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615427.2133789062,
            "unit": "ns",
            "range": "± 6659.041984845225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579641.0803786058,
            "unit": "ns",
            "range": "± 747.0889629407266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2410062.9615384615,
            "unit": "ns",
            "range": "± 63521.63211850323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625914.3846153845,
            "unit": "ns",
            "range": "± 86717.55436734503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3168717.588235294,
            "unit": "ns",
            "range": "± 63834.88959912403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3350574.976190476,
            "unit": "ns",
            "range": "± 179666.59245330657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8817785.483870968,
            "unit": "ns",
            "range": "± 149514.64456319343"
          }
        ]
      }
    ]
  }
}