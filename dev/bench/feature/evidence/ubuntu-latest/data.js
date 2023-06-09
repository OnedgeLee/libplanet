window.BENCHMARK_DATA = {
  "lastUpdate": 1686298210513,
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
          "id": "d9bdfe98da1ced3d6978f7673fe9b34580b7745f",
          "message": "feat: Introduce DuplicateVoteEvidence",
          "timestamp": "2023-05-23T17:51:45+09:00",
          "tree_id": "696d37566d51827dd0dbd7c64d5280ec15a2cd5e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9bdfe98da1ced3d6978f7673fe9b34580b7745f"
        },
        "date": 1684832720178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497457.8947368423,
            "unit": "ns",
            "range": "± 73704.9061158337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3711961,
            "unit": "ns",
            "range": "± 98136.91708568868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4490956.5625,
            "unit": "ns",
            "range": "± 84879.31058231545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4701646.6,
            "unit": "ns",
            "range": "± 82066.28129297162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7153422.956521739,
            "unit": "ns",
            "range": "± 172848.84993607938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278459.1891891892,
            "unit": "ns",
            "range": "± 9435.085461068047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268139.875,
            "unit": "ns",
            "range": "± 9179.235983478397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233327.23076923078,
            "unit": "ns",
            "range": "± 2224.863035254311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4352901.076923077,
            "unit": "ns",
            "range": "± 30777.280420416017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4091560.066666667,
            "unit": "ns",
            "range": "± 57775.424773695544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18116.372340425532,
            "unit": "ns",
            "range": "± 1282.7936665943898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86997.25714285714,
            "unit": "ns",
            "range": "± 4209.7833903645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73362.76923076923,
            "unit": "ns",
            "range": "± 766.6486759316109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80449.59493670886,
            "unit": "ns",
            "range": "± 4540.75685976041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4940.229166666667,
            "unit": "ns",
            "range": "± 611.2330846509619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16733.460674157304,
            "unit": "ns",
            "range": "± 956.1326108122405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884446.495192308,
            "unit": "ns",
            "range": "± 24854.700493842123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878137.8009207589,
            "unit": "ns",
            "range": "± 6176.201674003404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362190.973046875,
            "unit": "ns",
            "range": "± 2480.005334398931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638631.1200520834,
            "unit": "ns",
            "range": "± 2777.8958611199855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833280.823828125,
            "unit": "ns",
            "range": "± 826.7050506345656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757510.8456333706,
            "unit": "ns",
            "range": "± 329.53625205131976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8072589.733333333,
            "unit": "ns",
            "range": "± 98168.13217817878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21700933.733333334,
            "unit": "ns",
            "range": "± 198882.6421175013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58004791.15384615,
            "unit": "ns",
            "range": "± 363647.809468366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109421555.33333333,
            "unit": "ns",
            "range": "± 715448.9029570045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219371002.7142857,
            "unit": "ns",
            "range": "± 1325157.337225365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403534,
            "unit": "ns",
            "range": "± 77650.60782665815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661969.5217391304,
            "unit": "ns",
            "range": "± 56917.20341375433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2278977.964285714,
            "unit": "ns",
            "range": "± 120036.34562377159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5780524.282352941,
            "unit": "ns",
            "range": "± 311108.05921670696"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48944.38043478261,
            "unit": "ns",
            "range": "± 2780.69933034243"
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
          "id": "258929fa4177d2fada72bcdf61eef2359d73ee5c",
          "message": "Fix with tests",
          "timestamp": "2023-06-08T21:24:03+09:00",
          "tree_id": "e17fd7c8033940cc937ed35eca5e77fa252e0202",
          "url": "https://github.com/OnedgeLee/libplanet/commit/258929fa4177d2fada72bcdf61eef2359d73ee5c"
        },
        "date": 1686227830784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322686.4,
            "unit": "ns",
            "range": "± 75861.1780976139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409537.476190476,
            "unit": "ns",
            "range": "± 70179.89409412004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4391954.666666667,
            "unit": "ns",
            "range": "± 73735.6730119405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295665.928571428,
            "unit": "ns",
            "range": "± 51816.812835016404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6939276.583333333,
            "unit": "ns",
            "range": "± 143105.61192378064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6033696.558333334,
            "unit": "ns",
            "range": "± 16415.804522734365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902077.4358072917,
            "unit": "ns",
            "range": "± 6595.903557613828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356697.0248697917,
            "unit": "ns",
            "range": "± 972.868657016987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554561.172200521,
            "unit": "ns",
            "range": "± 3180.597698128752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826179.652483259,
            "unit": "ns",
            "range": "± 812.5693033514214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726680.3482840402,
            "unit": "ns",
            "range": "± 545.525921532383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282432.1612903226,
            "unit": "ns",
            "range": "± 10294.594591805184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271933.0483870968,
            "unit": "ns",
            "range": "± 12372.090972443064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247149.76923076922,
            "unit": "ns",
            "range": "± 11508.909769675773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273106.538461538,
            "unit": "ns",
            "range": "± 31067.049609447906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815684.9285714286,
            "unit": "ns",
            "range": "± 30835.134152866514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18597.47311827957,
            "unit": "ns",
            "range": "± 2064.8198183913514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89267.85416666667,
            "unit": "ns",
            "range": "± 5383.5345207775445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75566.08602150538,
            "unit": "ns",
            "range": "± 4800.803953632716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92095.82653061225,
            "unit": "ns",
            "range": "± 12733.077049761585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5335.602040816327,
            "unit": "ns",
            "range": "± 663.6496675452383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20838.236559139787,
            "unit": "ns",
            "range": "± 1527.7600639487623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420065.1354166667,
            "unit": "ns",
            "range": "± 98374.56739193262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2646839.4444444445,
            "unit": "ns",
            "range": "± 72364.95824602345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202402.6578947366,
            "unit": "ns",
            "range": "± 108763.99352954421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5305618.1875,
            "unit": "ns",
            "range": "± 162600.68274971476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47222.88043478261,
            "unit": "ns",
            "range": "± 2841.4613708109423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8020573.666666667,
            "unit": "ns",
            "range": "± 61699.46366711403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20017116.64285714,
            "unit": "ns",
            "range": "± 137028.36286618077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51906067.85714286,
            "unit": "ns",
            "range": "± 1247348.376893181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102859123.21428572,
            "unit": "ns",
            "range": "± 444840.0020680173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204357629.5,
            "unit": "ns",
            "range": "± 397752.0904420723"
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
          "id": "da3894c86bfe8ab49f77759f830d0d6516b3d746",
          "message": "Fix with tests",
          "timestamp": "2023-06-08T21:25:50+09:00",
          "tree_id": "74501735b546fe096b55d1dafbef10de0cb2ea72",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da3894c86bfe8ab49f77759f830d0d6516b3d746"
        },
        "date": 1686229489229,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3221174.777777778,
            "unit": "ns",
            "range": "± 68296.65288461675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396297.066666667,
            "unit": "ns",
            "range": "± 56965.00011719811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174857.3333333335,
            "unit": "ns",
            "range": "± 58798.12582614064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4144341.878787879,
            "unit": "ns",
            "range": "± 124011.31031627659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6737025.791666667,
            "unit": "ns",
            "range": "± 165012.5654293133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6078571.461979167,
            "unit": "ns",
            "range": "± 39862.168410622195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835928.5652901786,
            "unit": "ns",
            "range": "± 1040.125487712869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368031.2603665865,
            "unit": "ns",
            "range": "± 463.1798351169132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2527864.2575334823,
            "unit": "ns",
            "range": "± 1650.8421042328002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844859.2594168527,
            "unit": "ns",
            "range": "± 962.098254239952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741062.1953776042,
            "unit": "ns",
            "range": "± 385.4243275602121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281629.14705882355,
            "unit": "ns",
            "range": "± 7509.222140777069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269459.0512820513,
            "unit": "ns",
            "range": "± 5489.517488856269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234555.53333333333,
            "unit": "ns",
            "range": "± 4357.681360321706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4263203.333333333,
            "unit": "ns",
            "range": "± 35264.411784741416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846166.769230769,
            "unit": "ns",
            "range": "± 19012.162099359128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17587.204301075268,
            "unit": "ns",
            "range": "± 1291.7370472010682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85748.43529411765,
            "unit": "ns",
            "range": "± 4085.4970830250463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70759.58823529411,
            "unit": "ns",
            "range": "± 1394.6650609924022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86766.19387755102,
            "unit": "ns",
            "range": "± 10180.92090163375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4670.459183673469,
            "unit": "ns",
            "range": "± 707.0038738920006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17325.184782608696,
            "unit": "ns",
            "range": "± 1529.9082923700325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1421668.98989899,
            "unit": "ns",
            "range": "± 120604.37461203935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2559548,
            "unit": "ns",
            "range": "± 55081.17705350894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171517.0229885057,
            "unit": "ns",
            "range": "± 118172.2515912217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5271521.238095238,
            "unit": "ns",
            "range": "± 188963.43037597014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45944.515789473684,
            "unit": "ns",
            "range": "± 2867.3298642255922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7858450.233333333,
            "unit": "ns",
            "range": "± 90414.6155587585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19653306.333333332,
            "unit": "ns",
            "range": "± 84239.81515773598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49775098.266666666,
            "unit": "ns",
            "range": "± 349408.23957891733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101186472.13333334,
            "unit": "ns",
            "range": "± 787076.1772538617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203564532.26666668,
            "unit": "ns",
            "range": "± 1400063.9049680894"
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
          "id": "67e4f7b2512bd31a009e60bea12014204b33d58c",
          "message": "Fix with tests",
          "timestamp": "2023-06-09T01:57:52+09:00",
          "tree_id": "e11af0f39cd18fc1181dc4496b99100d53630ebf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/67e4f7b2512bd31a009e60bea12014204b33d58c"
        },
        "date": 1686244420937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3900319.85,
            "unit": "ns",
            "range": "± 86452.16015703957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4044689.814285714,
            "unit": "ns",
            "range": "± 195458.8133929115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4896168.933333334,
            "unit": "ns",
            "range": "± 80460.47158207267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4713477.422222222,
            "unit": "ns",
            "range": "± 262545.11336868326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7272216.642857143,
            "unit": "ns",
            "range": "± 116898.0976495914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6488465.620535715,
            "unit": "ns",
            "range": "± 66506.46583039167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932096.6403245192,
            "unit": "ns",
            "range": "± 3358.5115622268786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401417.879296875,
            "unit": "ns",
            "range": "± 5319.597506967483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668296.0909598214,
            "unit": "ns",
            "range": "± 9602.32756363939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832455.4508463541,
            "unit": "ns",
            "range": "± 2059.632071230479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768677.4838541667,
            "unit": "ns",
            "range": "± 421.97657811766607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319509.51020408166,
            "unit": "ns",
            "range": "± 28167.999476720273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311626.55555555556,
            "unit": "ns",
            "range": "± 21180.740113594642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284654.52,
            "unit": "ns",
            "range": "± 35528.35789615915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4893434,
            "unit": "ns",
            "range": "± 132548.1605469673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550011.923076923,
            "unit": "ns",
            "range": "± 31060.33362790753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28413.81443298969,
            "unit": "ns",
            "range": "± 3445.5277907561363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115248.06060606061,
            "unit": "ns",
            "range": "± 14707.429888143502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111807.0505050505,
            "unit": "ns",
            "range": "± 14271.917846878023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140783.5612244898,
            "unit": "ns",
            "range": "± 17597.44378640831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8193.989795918367,
            "unit": "ns",
            "range": "± 2210.9243087143154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26269.040404040403,
            "unit": "ns",
            "range": "± 5254.261772491075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464292.4367816092,
            "unit": "ns",
            "range": "± 75149.48652266998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3184653.96,
            "unit": "ns",
            "range": "± 224646.37460149315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2651549.5306122447,
            "unit": "ns",
            "range": "± 184789.63280244358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6530438.69,
            "unit": "ns",
            "range": "± 470257.8314281313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57423.47422680412,
            "unit": "ns",
            "range": "± 7498.732272153275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8063949.555555556,
            "unit": "ns",
            "range": "± 169003.12369832356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23767092.214285713,
            "unit": "ns",
            "range": "± 247996.4909693369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61582214.8,
            "unit": "ns",
            "range": "± 618143.8096767958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120953610.5,
            "unit": "ns",
            "range": "± 2470130.741264977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244848201.46666667,
            "unit": "ns",
            "range": "± 1475349.2033919033"
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
          "id": "f29f3d037b0c1ff204e651a6b2c87819e289b685",
          "message": "Fix with tests",
          "timestamp": "2023-06-09T13:43:55+09:00",
          "tree_id": "a2bd70bc6f264d097612af64d07db66115453b1e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f29f3d037b0c1ff204e651a6b2c87819e289b685"
        },
        "date": 1686286640022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467369.6907216494,
            "unit": "ns",
            "range": "± 92518.85629363626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764635.9714285713,
            "unit": "ns",
            "range": "± 90343.28058332829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282180.2253521127,
            "unit": "ns",
            "range": "± 106119.03657243961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5764926.714285715,
            "unit": "ns",
            "range": "± 247623.4782124384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611551.6923076925,
            "unit": "ns",
            "range": "± 58803.15744128118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3802012.285714286,
            "unit": "ns",
            "range": "± 63752.33790274623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457923.416666667,
            "unit": "ns",
            "range": "± 114980.68398910074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4607230.5,
            "unit": "ns",
            "range": "± 94712.54945250982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7132227.851851852,
            "unit": "ns",
            "range": "± 170890.19146217027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8528802.357142856,
            "unit": "ns",
            "range": "± 107074.3944565985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22019901.466666665,
            "unit": "ns",
            "range": "± 142265.2075410402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56682493.733333334,
            "unit": "ns",
            "range": "± 285594.6042818803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111014501.92857143,
            "unit": "ns",
            "range": "± 416428.31671128527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220648275.53333333,
            "unit": "ns",
            "range": "± 1815988.342607914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6075840.711495535,
            "unit": "ns",
            "range": "± 28457.966157652776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856852.7216796875,
            "unit": "ns",
            "range": "± 4532.666324959938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364979.358203125,
            "unit": "ns",
            "range": "± 3546.4275444324376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605550.1495535714,
            "unit": "ns",
            "range": "± 3178.480917893711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864106.7236328125,
            "unit": "ns",
            "range": "± 1881.5080885313928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749987.4031901042,
            "unit": "ns",
            "range": "± 440.93130651009307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49860.57831325301,
            "unit": "ns",
            "range": "± 2674.8286934912207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294407.25,
            "unit": "ns",
            "range": "± 9054.128386471537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283012.60784313723,
            "unit": "ns",
            "range": "± 11514.550200643413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261542.43548387097,
            "unit": "ns",
            "range": "± 11385.649697612915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572683.714285715,
            "unit": "ns",
            "range": "± 37956.142126708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4049808.285714286,
            "unit": "ns",
            "range": "± 31212.338614052005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20112.01052631579,
            "unit": "ns",
            "range": "± 1543.903373772981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92023.4574468085,
            "unit": "ns",
            "range": "± 6264.994518383401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77118.97014925373,
            "unit": "ns",
            "range": "± 3668.0915687413244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97501.13684210526,
            "unit": "ns",
            "range": "± 13984.033508323913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5621.115789473684,
            "unit": "ns",
            "range": "± 600.5338912461764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20042.473684210527,
            "unit": "ns",
            "range": "± 1987.8065899864923"
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
          "id": "1a24fed02fab391c473a200af054df24a9a1d00f",
          "message": "Fix RocksDBStore to dispose new DBs",
          "timestamp": "2023-06-09T14:03:26+09:00",
          "tree_id": "009effa4b298705939aa9464304513c431b83dd1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a24fed02fab391c473a200af054df24a9a1d00f"
        },
        "date": 1686287862505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1600064.9583333333,
            "unit": "ns",
            "range": "± 108671.99432584339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3053986.2083333335,
            "unit": "ns",
            "range": "± 78520.84655293454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2566554.5581395347,
            "unit": "ns",
            "range": "± 138331.42453777275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5830526.75,
            "unit": "ns",
            "range": "± 79645.21689584607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3736626.076923077,
            "unit": "ns",
            "range": "± 52485.45940617194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4018046.05,
            "unit": "ns",
            "range": "± 89602.10018478186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4739802.533333333,
            "unit": "ns",
            "range": "± 81728.39786570662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4924422.928571428,
            "unit": "ns",
            "range": "± 61944.691828789786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7357979.8,
            "unit": "ns",
            "range": "± 109120.9673967382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8743103.8,
            "unit": "ns",
            "range": "± 62154.563142677966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22795419.64285714,
            "unit": "ns",
            "range": "± 211892.55605489784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56485329.46666667,
            "unit": "ns",
            "range": "± 224986.42477900325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113007586.4,
            "unit": "ns",
            "range": "± 286949.4140112504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226188683.85714287,
            "unit": "ns",
            "range": "± 377037.2027460863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6374590.677083333,
            "unit": "ns",
            "range": "± 59065.341379172605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868214.0024739583,
            "unit": "ns",
            "range": "± 1550.950053822757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363564.8451450893,
            "unit": "ns",
            "range": "± 3931.285821385261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638141.6291852677,
            "unit": "ns",
            "range": "± 5042.808003303019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838078.886311849,
            "unit": "ns",
            "range": "± 495.13835053769475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757086.5277944711,
            "unit": "ns",
            "range": "± 635.9134922856019"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64802.791666666664,
            "unit": "ns",
            "range": "± 9409.037381175127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316910.13333333336,
            "unit": "ns",
            "range": "± 9450.904148439371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303897.22222222225,
            "unit": "ns",
            "range": "± 11432.9815364642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294781.0410958904,
            "unit": "ns",
            "range": "± 14532.652989081707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4659285.923076923,
            "unit": "ns",
            "range": "± 26589.77389731354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4306268.583333333,
            "unit": "ns",
            "range": "± 27654.520841851954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26848.168421052633,
            "unit": "ns",
            "range": "± 2394.186014799236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112373.48936170213,
            "unit": "ns",
            "range": "± 10358.722090554798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103041.93,
            "unit": "ns",
            "range": "± 10132.701279386107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118312.83695652174,
            "unit": "ns",
            "range": "± 12338.102568673303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8530.364583333334,
            "unit": "ns",
            "range": "± 960.5541286678628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28470.884210526317,
            "unit": "ns",
            "range": "± 2986.030061637585"
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
          "id": "954d3004ee73427600aac94090ed23c854cc84b8",
          "message": "Fix error on RocksDbStore",
          "timestamp": "2023-06-09T14:08:49+09:00",
          "tree_id": "8eddfa90192bad75e7c94c0eb75771afb4075eee",
          "url": "https://github.com/OnedgeLee/libplanet/commit/954d3004ee73427600aac94090ed23c854cc84b8"
        },
        "date": 1686288107364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415195.0520833333,
            "unit": "ns",
            "range": "± 82177.3108457521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691847.066666667,
            "unit": "ns",
            "range": "± 78570.10341877361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270792.83908046,
            "unit": "ns",
            "range": "± 123594.84765921289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5380894.590909091,
            "unit": "ns",
            "range": "± 128750.79363182458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3381451.5,
            "unit": "ns",
            "range": "± 52444.35758276796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3553725.4615384615,
            "unit": "ns",
            "range": "± 49794.70811176523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4261869.333333333,
            "unit": "ns",
            "range": "± 56093.60622804231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402526.666666667,
            "unit": "ns",
            "range": "± 130512.99100785366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6783872.55,
            "unit": "ns",
            "range": "± 144126.34448525216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7836258.857142857,
            "unit": "ns",
            "range": "± 22912.08329800992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21400369.2,
            "unit": "ns",
            "range": "± 322601.8138546563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52936363,
            "unit": "ns",
            "range": "± 687477.8389899457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104762498.66666667,
            "unit": "ns",
            "range": "± 773061.6792894851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209142994.2857143,
            "unit": "ns",
            "range": "± 1544390.7433611497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5913274.907366072,
            "unit": "ns",
            "range": "± 23577.297247094404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850745.2485677083,
            "unit": "ns",
            "range": "± 3852.4512241504513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376742.916015625,
            "unit": "ns",
            "range": "± 3670.0061288106413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634738.35,
            "unit": "ns",
            "range": "± 11076.270007216683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846981.6372395833,
            "unit": "ns",
            "range": "± 2608.5241512214484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753759.5576822917,
            "unit": "ns",
            "range": "± 1861.47700988479"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49598.19565217391,
            "unit": "ns",
            "range": "± 2848.405222742705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282302.2962962963,
            "unit": "ns",
            "range": "± 11807.284019221017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272246.26923076925,
            "unit": "ns",
            "range": "± 7014.893946783186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234349.7857142857,
            "unit": "ns",
            "range": "± 2372.140746199563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4428342.733333333,
            "unit": "ns",
            "range": "± 67086.98565132401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3975718,
            "unit": "ns",
            "range": "± 44728.458251670476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17052.647727272728,
            "unit": "ns",
            "range": "± 1128.2267445514717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83092.01298701299,
            "unit": "ns",
            "range": "± 4253.935872544843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72454.14285714286,
            "unit": "ns",
            "range": "± 722.188751924726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85373.81443298969,
            "unit": "ns",
            "range": "± 11426.468271198506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4690.959183673469,
            "unit": "ns",
            "range": "± 450.4271035766388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16485.032967032967,
            "unit": "ns",
            "range": "± 947.4201983462416"
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
          "id": "d8fa11a9055d3b84fbed3c527ac8f9412bbbaac5",
          "message": "Update changelog",
          "timestamp": "2023-06-09T14:28:45+09:00",
          "tree_id": "404758d824af1449b09717bd64b5f4fc0380ec16",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d8fa11a9055d3b84fbed3c527ac8f9412bbbaac5"
        },
        "date": 1686289349999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1387418.2021276595,
            "unit": "ns",
            "range": "± 78523.6197023052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695525.8723404254,
            "unit": "ns",
            "range": "± 104971.13714744081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2277467.8988764044,
            "unit": "ns",
            "range": "± 121283.90270100723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5509035.777777778,
            "unit": "ns",
            "range": "± 208627.88492606214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3385459,
            "unit": "ns",
            "range": "± 127174.02860811874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3591983.6129032257,
            "unit": "ns",
            "range": "± 107800.78829046272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4400911.653846154,
            "unit": "ns",
            "range": "± 120396.55775276711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4573797.347826087,
            "unit": "ns",
            "range": "± 173284.21551225765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6964416.59375,
            "unit": "ns",
            "range": "± 196484.11130047974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803313.285714285,
            "unit": "ns",
            "range": "± 64448.6234267606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20991638.46153846,
            "unit": "ns",
            "range": "± 113765.80743836245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54435170.266666666,
            "unit": "ns",
            "range": "± 760563.8178665752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107696583.73333333,
            "unit": "ns",
            "range": "± 1864637.5353650013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217246812.33333334,
            "unit": "ns",
            "range": "± 3473829.8385873907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5917743.416852678,
            "unit": "ns",
            "range": "± 37673.91107604185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851819.306919643,
            "unit": "ns",
            "range": "± 3729.2484532478343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357694.570703125,
            "unit": "ns",
            "range": "± 4935.112066335209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569946.0765625,
            "unit": "ns",
            "range": "± 6579.761366449162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835586.5470703125,
            "unit": "ns",
            "range": "± 1297.4845886360076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757830.6200420673,
            "unit": "ns",
            "range": "± 375.20078718763995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48983.75,
            "unit": "ns",
            "range": "± 2666.5985273460187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289282.63636363635,
            "unit": "ns",
            "range": "± 10751.240287760225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269354.0487804878,
            "unit": "ns",
            "range": "± 9690.536329200824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240237.54901960783,
            "unit": "ns",
            "range": "± 9752.046768373757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4398702.8,
            "unit": "ns",
            "range": "± 96480.31293405216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4024958.8125,
            "unit": "ns",
            "range": "± 75469.15411497049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18381.625,
            "unit": "ns",
            "range": "± 1927.6023353269456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86922.48453608247,
            "unit": "ns",
            "range": "± 6786.335333032294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74877.28125,
            "unit": "ns",
            "range": "± 5004.029971097769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90861.64285714286,
            "unit": "ns",
            "range": "± 12786.111442482723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5581.395833333333,
            "unit": "ns",
            "range": "± 848.7265194540354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19374.797872340427,
            "unit": "ns",
            "range": "± 1982.6677129010727"
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
          "id": "d61782e90b2eaff77aa6d016026ae6e39039faeb",
          "message": "Update changelog",
          "timestamp": "2023-06-09T14:27:50+09:00",
          "tree_id": "81c7760b1b4e1dd3b8c277b3fbcdb7c6e511e9ca",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d61782e90b2eaff77aa6d016026ae6e39039faeb"
        },
        "date": 1686289450326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1817965.4814814816,
            "unit": "ns",
            "range": "± 93506.32034936344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3559579.1710526315,
            "unit": "ns",
            "range": "± 173343.29937995976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2809784.7474747472,
            "unit": "ns",
            "range": "± 168202.93034589436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6971578.31372549,
            "unit": "ns",
            "range": "± 282962.1875590794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4610008.357142857,
            "unit": "ns",
            "range": "± 70664.84109198113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4491341.409090909,
            "unit": "ns",
            "range": "± 110264.80031082712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5455927.266666667,
            "unit": "ns",
            "range": "± 98205.41642573684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5617631.176470588,
            "unit": "ns",
            "range": "± 86498.62160696212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8680113.533333333,
            "unit": "ns",
            "range": "± 143892.35276407484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9982926.066666666,
            "unit": "ns",
            "range": "± 119268.39274897524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27253670.266666666,
            "unit": "ns",
            "range": "± 275474.4451942261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70809383.35294117,
            "unit": "ns",
            "range": "± 1298078.8914938848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134887003.26666668,
            "unit": "ns",
            "range": "± 842974.2806488791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271790185.06666666,
            "unit": "ns",
            "range": "± 716048.4512118743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7274540.344270834,
            "unit": "ns",
            "range": "± 18817.91617443905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2337369.2338541667,
            "unit": "ns",
            "range": "± 25189.647552563012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1659087.4766927084,
            "unit": "ns",
            "range": "± 3311.3096265661425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126564.6847098214,
            "unit": "ns",
            "range": "± 2403.207621805344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988096.8583333333,
            "unit": "ns",
            "range": "± 10758.508972312005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910192.7877854567,
            "unit": "ns",
            "range": "± 4127.456150213284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57940.85106382979,
            "unit": "ns",
            "range": "± 3991.8833913126227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354277.25,
            "unit": "ns",
            "range": "± 13299.98315327696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327635.98039215687,
            "unit": "ns",
            "range": "± 13328.44371483812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303865.3846153846,
            "unit": "ns",
            "range": "± 14207.315165404567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5597980.666666667,
            "unit": "ns",
            "range": "± 28885.862609011117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5177078.378378378,
            "unit": "ns",
            "range": "± 171121.34206030387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21164.28888888889,
            "unit": "ns",
            "range": "± 1476.5976473754477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107957.21794871795,
            "unit": "ns",
            "range": "± 5539.524972947357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92345.83870967742,
            "unit": "ns",
            "range": "± 5622.756975569135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132051.84615384616,
            "unit": "ns",
            "range": "± 2183.8017250563234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7061.760416666667,
            "unit": "ns",
            "range": "± 1056.9999825204566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20780.944444444445,
            "unit": "ns",
            "range": "± 1859.2363139300517"
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
          "id": "962db89abe408ca5ba44da1a3965e9e28bf34dfa",
          "message": "Fix error on DefaultStore",
          "timestamp": "2023-06-09T15:44:01+09:00",
          "tree_id": "f67005a3b2dc25392b864388d29a0d5343c3399a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/962db89abe408ca5ba44da1a3965e9e28bf34dfa"
        },
        "date": 1686294270027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1830958.4505494505,
            "unit": "ns",
            "range": "± 160734.9295410348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3647012.1938775512,
            "unit": "ns",
            "range": "± 301041.3734500183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3012155.290322581,
            "unit": "ns",
            "range": "± 245573.08114111985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7603500.59375,
            "unit": "ns",
            "range": "± 611670.3151136332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4074756,
            "unit": "ns",
            "range": "± 369410.90002343425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4454936.378947369,
            "unit": "ns",
            "range": "± 458063.8868385524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6003701.027777778,
            "unit": "ns",
            "range": "± 295895.8197789811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5407320.3838383835,
            "unit": "ns",
            "range": "± 735344.5854282514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9793931.863157894,
            "unit": "ns",
            "range": "± 588925.4209338197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10235165.762886599,
            "unit": "ns",
            "range": "± 1021679.1337334786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27739383.431034483,
            "unit": "ns",
            "range": "± 1209554.4031469373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69360704.78181818,
            "unit": "ns",
            "range": "± 2923065.1711546425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139845438.37209302,
            "unit": "ns",
            "range": "± 7564562.090913107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277208732.8301887,
            "unit": "ns",
            "range": "± 11415615.866853943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7571813.881478659,
            "unit": "ns",
            "range": "± 271179.87047849764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2417300.947526042,
            "unit": "ns",
            "range": "± 26447.59146150547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1796229.5946614584,
            "unit": "ns",
            "range": "± 22687.582604247502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3499822.3009588066,
            "unit": "ns",
            "range": "± 83400.49599169729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1111945.9144345238,
            "unit": "ns",
            "range": "± 26242.159566198923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1028353.1420572917,
            "unit": "ns",
            "range": "± 14706.691775892175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75615.78125,
            "unit": "ns",
            "range": "± 15714.612076665011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384346.0208333333,
            "unit": "ns",
            "range": "± 66255.83483325975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357577.89795918367,
            "unit": "ns",
            "range": "± 66019.32403463004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309420.5106382979,
            "unit": "ns",
            "range": "± 49943.91780416227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5669932.670103093,
            "unit": "ns",
            "range": "± 407421.6878018993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5139013.69072165,
            "unit": "ns",
            "range": "± 395734.2621496821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26138.297872340427,
            "unit": "ns",
            "range": "± 8389.90825411509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110392.51612903226,
            "unit": "ns",
            "range": "± 18246.70101070858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122671.64948453609,
            "unit": "ns",
            "range": "± 29004.687712377214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138077.77659574468,
            "unit": "ns",
            "range": "± 27651.068035976456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7343.541176470589,
            "unit": "ns",
            "range": "± 1660.2841663899783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27347.432989690722,
            "unit": "ns",
            "range": "± 9089.687587346829"
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
          "id": "3ffab8183fcce416156d0599591df6abfa73a625",
          "message": "Moved UpdateEvidence() to NewHeight()",
          "timestamp": "2023-06-09T16:50:05+09:00",
          "tree_id": "8c260094be9b98339b734e1da4cbbb102d954cf3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3ffab8183fcce416156d0599591df6abfa73a625"
        },
        "date": 1686298195850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617943.5360824743,
            "unit": "ns",
            "range": "± 197408.13802606505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920032.489361702,
            "unit": "ns",
            "range": "± 331644.09942671034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2422225.290322581,
            "unit": "ns",
            "range": "± 277884.36563933117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6746255.979166667,
            "unit": "ns",
            "range": "± 648571.329319905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247289.8387096776,
            "unit": "ns",
            "range": "± 357610.88844213885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564699.793814433,
            "unit": "ns",
            "range": "± 456572.29718933755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5185434.81443299,
            "unit": "ns",
            "range": "± 657318.5102320914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5101667.166666667,
            "unit": "ns",
            "range": "± 599085.7617562679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9032349.37113402,
            "unit": "ns",
            "range": "± 842790.1740541073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8354799.37755102,
            "unit": "ns",
            "range": "± 843467.844755058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21706575.53,
            "unit": "ns",
            "range": "± 2690744.5831802706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61060012.11111111,
            "unit": "ns",
            "range": "± 4665836.552164403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120669893.05,
            "unit": "ns",
            "range": "± 7615815.797297716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229818196.6122449,
            "unit": "ns",
            "range": "± 16290124.489539571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7010287.954603041,
            "unit": "ns",
            "range": "± 234754.05094525425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2056542.781467014,
            "unit": "ns",
            "range": "± 42827.96422264651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1585828.1677024148,
            "unit": "ns",
            "range": "± 38816.38304268091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3089937.5036951015,
            "unit": "ns",
            "range": "± 103349.93897697351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962966.0367553711,
            "unit": "ns",
            "range": "± 49802.094194729565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852505.9377520161,
            "unit": "ns",
            "range": "± 24399.99352342625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69928,
            "unit": "ns",
            "range": "± 14406.67348156221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336639.96875,
            "unit": "ns",
            "range": "± 50448.121876564415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325468.38144329895,
            "unit": "ns",
            "range": "± 47264.03078792303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287548.7157894737,
            "unit": "ns",
            "range": "± 38714.19586895829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4976542.041237113,
            "unit": "ns",
            "range": "± 544604.1181010698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162717.3775510206,
            "unit": "ns",
            "range": "± 517242.7492706716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31047.872093023256,
            "unit": "ns",
            "range": "± 7581.366109701449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124203.95,
            "unit": "ns",
            "range": "± 21401.977027705736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116665.81443298969,
            "unit": "ns",
            "range": "± 22410.3868530355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133728.5052631579,
            "unit": "ns",
            "range": "± 29019.994455354426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5818,
            "unit": "ns",
            "range": "± 1504.512398899244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30881.09574468085,
            "unit": "ns",
            "range": "± 7055.956097730484"
          }
        ]
      }
    ]
  }
}