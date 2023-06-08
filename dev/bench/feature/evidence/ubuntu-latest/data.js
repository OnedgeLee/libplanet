window.BENCHMARK_DATA = {
  "lastUpdate": 1686244433938,
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
      }
    ]
  }
}