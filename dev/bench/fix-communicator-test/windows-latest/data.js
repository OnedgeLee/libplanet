window.BENCHMARK_DATA = {
  "lastUpdate": 1689642338504,
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641698624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362982,
            "unit": "ns",
            "range": "± 122781.41238918384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424859.2592592593,
            "unit": "ns",
            "range": "± 127103.31602458075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746855.7894736843,
            "unit": "ns",
            "range": "± 134350.58830473182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4608424.4186046515,
            "unit": "ns",
            "range": "± 249619.20077733768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45936.26373626374,
            "unit": "ns",
            "range": "± 2842.554269335024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6546505.882352941,
            "unit": "ns",
            "range": "± 131594.8539580302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19180763.636363637,
            "unit": "ns",
            "range": "± 447329.22843775665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47629666.666666664,
            "unit": "ns",
            "range": "± 980071.6270342934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94727084.61538461,
            "unit": "ns",
            "range": "± 830804.0561670301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189299428.57142857,
            "unit": "ns",
            "range": "± 2089081.5697992085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4415048.177083333,
            "unit": "ns",
            "range": "± 19765.96920725371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391821.6145833333,
            "unit": "ns",
            "range": "± 5124.32997396476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091101.3411458333,
            "unit": "ns",
            "range": "± 6716.760225659726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434430.0260416665,
            "unit": "ns",
            "range": "± 8785.617144477017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767562.5260416666,
            "unit": "ns",
            "range": "± 3372.926835097778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700408.203125,
            "unit": "ns",
            "range": "± 1999.4812698002102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047435.714285714,
            "unit": "ns",
            "range": "± 80513.79092491255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118761.5384615385,
            "unit": "ns",
            "range": "± 107632.31664813563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3836612,
            "unit": "ns",
            "range": "± 102275.26305677896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3555844.285714286,
            "unit": "ns",
            "range": "± 116609.8369951421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5826868.181818182,
            "unit": "ns",
            "range": "± 142747.03361562584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254230.76923076922,
            "unit": "ns",
            "range": "± 8569.350336063186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241690,
            "unit": "ns",
            "range": "± 6824.668742750513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221600.50505050505,
            "unit": "ns",
            "range": "± 15845.834923922399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3753986.6666666665,
            "unit": "ns",
            "range": "± 62121.77978623539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3382593.75,
            "unit": "ns",
            "range": "± 65489.209989127216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20780.645161290322,
            "unit": "ns",
            "range": "± 2163.695412971105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83050.7042253521,
            "unit": "ns",
            "range": "± 4042.166082663975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71952.8735632184,
            "unit": "ns",
            "range": "± 4614.432341324886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100191.66666666667,
            "unit": "ns",
            "range": "± 14395.194129815955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5753.191489361702,
            "unit": "ns",
            "range": "± 1061.2127499101919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21919.58762886598,
            "unit": "ns",
            "range": "± 2494.2283031388074"
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
          "id": "587fb1dcd9648be70849a7da85466ff3b2879854",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:43:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/587fb1dcd9648be70849a7da85466ff3b2879854"
        },
        "date": 1689641868707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329751,
            "unit": "ns",
            "range": "± 117558.74224309214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2365117.6470588236,
            "unit": "ns",
            "range": "± 95661.1639190792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722485,
            "unit": "ns",
            "range": "± 162226.25948864373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4477997.959183673,
            "unit": "ns",
            "range": "± 178234.73110128762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43413.63636363636,
            "unit": "ns",
            "range": "± 2041.7101703181136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6824623.076923077,
            "unit": "ns",
            "range": "± 28834.82136370751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17482380,
            "unit": "ns",
            "range": "± 145498.37112490297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45427392.85714286,
            "unit": "ns",
            "range": "± 212530.19501051796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91962653.84615384,
            "unit": "ns",
            "range": "± 315853.3721401557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179984266.66666666,
            "unit": "ns",
            "range": "± 1523411.8107846268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4899899.21875,
            "unit": "ns",
            "range": "± 8446.25661284228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539518.0859375,
            "unit": "ns",
            "range": "± 4164.434806512215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161387.51953125,
            "unit": "ns",
            "range": "± 1475.286029856748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566003.1808035714,
            "unit": "ns",
            "range": "± 1642.6017299503746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812502.6692708334,
            "unit": "ns",
            "range": "± 1267.1059496263993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751011.6927083334,
            "unit": "ns",
            "range": "± 1084.2346738015683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888091.111111111,
            "unit": "ns",
            "range": "± 101558.25426867582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3096526.470588235,
            "unit": "ns",
            "range": "± 99703.94754904514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3925159.375,
            "unit": "ns",
            "range": "± 120295.31902880484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3518126.6666666665,
            "unit": "ns",
            "range": "± 104625.38075844968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5838948.571428572,
            "unit": "ns",
            "range": "± 165037.9410414262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253924.24242424243,
            "unit": "ns",
            "range": "± 8045.224915401306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242771.05263157896,
            "unit": "ns",
            "range": "± 7685.645021893769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213853.0303030303,
            "unit": "ns",
            "range": "± 9966.312020570864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3856603.3333333335,
            "unit": "ns",
            "range": "± 38524.23850488095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3541226.6666666665,
            "unit": "ns",
            "range": "± 45999.44823685647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17920.212765957447,
            "unit": "ns",
            "range": "± 1346.966307601557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84134.40860215054,
            "unit": "ns",
            "range": "± 5136.770568626538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68710.41666666667,
            "unit": "ns",
            "range": "± 2700.688610638258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86708.16326530612,
            "unit": "ns",
            "range": "± 14585.748399908754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4326.288659793814,
            "unit": "ns",
            "range": "± 677.42976202277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17867.021276595744,
            "unit": "ns",
            "range": "± 1636.6362236534721"
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
          "id": "7aa9321fdca2b910162eac71866d4fcc9013befa",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:51:09+09:00",
          "tree_id": "6b14c918ec5d2f00858b78e1c8dfe3601974c2c2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7aa9321fdca2b910162eac71866d4fcc9013befa"
        },
        "date": 1689642303631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484838.4615384615,
            "unit": "ns",
            "range": "± 20171.04105979405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471094.4444444445,
            "unit": "ns",
            "range": "± 98781.26095430889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1739657.731958763,
            "unit": "ns",
            "range": "± 125067.67154479107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4550133.333333333,
            "unit": "ns",
            "range": "± 190021.23913066855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43265,
            "unit": "ns",
            "range": "± 1922.288978081661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6877185.714285715,
            "unit": "ns",
            "range": "± 74249.00783737897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17702626.666666668,
            "unit": "ns",
            "range": "± 125363.48560808894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45323173.333333336,
            "unit": "ns",
            "range": "± 247627.26444242385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91201720,
            "unit": "ns",
            "range": "± 1250143.0502146545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181755446.66666666,
            "unit": "ns",
            "range": "± 1245342.095780838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4950778.966346154,
            "unit": "ns",
            "range": "± 6294.918319511892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532600.5078125,
            "unit": "ns",
            "range": "± 1758.2433713619987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149505.3431919643,
            "unit": "ns",
            "range": "± 1829.2098640931035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565411.0546875,
            "unit": "ns",
            "range": "± 2571.8674193821626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819825.2278645834,
            "unit": "ns",
            "range": "± 965.353173054429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733587.7669270834,
            "unit": "ns",
            "range": "± 956.8961356502161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2975463.1578947366,
            "unit": "ns",
            "range": "± 32725.460874885845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3106326.6666666665,
            "unit": "ns",
            "range": "± 91329.55080681559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3903460,
            "unit": "ns",
            "range": "± 66081.68970513476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3451625,
            "unit": "ns",
            "range": "± 113154.30772685085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5934305.128205128,
            "unit": "ns",
            "range": "± 206822.94353627562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253930.61224489796,
            "unit": "ns",
            "range": "± 10098.312649514619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239211.11111111112,
            "unit": "ns",
            "range": "± 9477.195402881725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211915.9420289855,
            "unit": "ns",
            "range": "± 10158.835956771325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3887846.6666666665,
            "unit": "ns",
            "range": "± 42072.80877354444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539453.3333333335,
            "unit": "ns",
            "range": "± 43200.807973043855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17387.23404255319,
            "unit": "ns",
            "range": "± 1686.775510272321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78507.4074074074,
            "unit": "ns",
            "range": "± 4115.421539094683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66653.48837209302,
            "unit": "ns",
            "range": "± 2419.597451487029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87409.47368421052,
            "unit": "ns",
            "range": "± 10465.526729221267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4221.276595744681,
            "unit": "ns",
            "range": "± 797.4249336600246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16321.875,
            "unit": "ns",
            "range": "± 1252.467301810815"
          }
        ]
      }
    ]
  }
}