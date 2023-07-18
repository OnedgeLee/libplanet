window.BENCHMARK_DATA = {
  "lastUpdate": 1689641909594,
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
      }
    ]
  }
}