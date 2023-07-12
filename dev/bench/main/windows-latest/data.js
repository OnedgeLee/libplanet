window.BENCHMARK_DATA = {
  "lastUpdate": 1689145205454,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "508cdf7ef668ce4bd2268956e50e8059c453464a",
          "message": "Merge pull request #3139 from dahlia/main",
          "timestamp": "2023-05-05T02:32:59+09:00",
          "tree_id": "128924b65b11b0d0687f3552fc28ec882283dc27",
          "url": "https://github.com/OnedgeLee/libplanet/commit/508cdf7ef668ce4bd2268956e50e8059c453464a"
        },
        "date": 1683521683967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599573.9583333333,
            "unit": "ns",
            "range": "± 115933.02399029833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2891987.5,
            "unit": "ns",
            "range": "± 101750.5249466708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2593458.947368421,
            "unit": "ns",
            "range": "± 185590.7929981676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6318605.714285715,
            "unit": "ns",
            "range": "± 305738.81430981145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61440.625,
            "unit": "ns",
            "range": "± 5190.265749711818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8876337.17948718,
            "unit": "ns",
            "range": "± 310033.60614064435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24042806.666666668,
            "unit": "ns",
            "range": "± 239849.4928868836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59587813.333333336,
            "unit": "ns",
            "range": "± 471923.32286788564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120731173.33333333,
            "unit": "ns",
            "range": "± 866238.8391090257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239217720,
            "unit": "ns",
            "range": "± 2225514.8008622956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5762588.619791667,
            "unit": "ns",
            "range": "± 19575.298127834983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849367.40234375,
            "unit": "ns",
            "range": "± 3540.7471280792906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397896.5364583333,
            "unit": "ns",
            "range": "± 5925.025712000185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3129445.41015625,
            "unit": "ns",
            "range": "± 16498.26385706461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990747.0833333334,
            "unit": "ns",
            "range": "± 4811.144882228217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927586.3736979166,
            "unit": "ns",
            "range": "± 3499.433432453025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4008103.3333333335,
            "unit": "ns",
            "range": "± 116722.761670353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4087350,
            "unit": "ns",
            "range": "± 93462.86906968371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4680688.888888889,
            "unit": "ns",
            "range": "± 96010.07844699791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5025765.714285715,
            "unit": "ns",
            "range": "± 163426.0670093705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7700643.478260869,
            "unit": "ns",
            "range": "± 175180.11205636055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325903.0303030303,
            "unit": "ns",
            "range": "± 10170.591331397749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310337.5,
            "unit": "ns",
            "range": "± 16173.61795398664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260415.59139784946,
            "unit": "ns",
            "range": "± 14681.484158357396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4695713.333333333,
            "unit": "ns",
            "range": "± 56300.29011174513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4336928.571428572,
            "unit": "ns",
            "range": "± 59814.693699939504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26701.041666666668,
            "unit": "ns",
            "range": "± 2227.5308393714504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117811.61616161616,
            "unit": "ns",
            "range": "± 9700.37561939161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109843.43434343435,
            "unit": "ns",
            "range": "± 9779.321807963292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124165.97938144329,
            "unit": "ns",
            "range": "± 19203.12413058278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8769.387755102041,
            "unit": "ns",
            "range": "± 1321.0748640972427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25387.5,
            "unit": "ns",
            "range": "± 2560.8900590882154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684285784402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529507.142857143,
            "unit": "ns",
            "range": "± 26679.24760459434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2512563.1578947366,
            "unit": "ns",
            "range": "± 85465.79344520027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158107.1428571427,
            "unit": "ns",
            "range": "± 145515.14127473536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5411642.222222222,
            "unit": "ns",
            "range": "± 299264.74280666787"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48520,
            "unit": "ns",
            "range": "± 2861.1707170912446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6974284.615384615,
            "unit": "ns",
            "range": "± 90156.945065756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19314020,
            "unit": "ns",
            "range": "± 268923.9834175131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49895576.92307692,
            "unit": "ns",
            "range": "± 327719.86806276627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96441806.66666667,
            "unit": "ns",
            "range": "± 1218625.5093732604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194629840,
            "unit": "ns",
            "range": "± 3110347.3377008648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4780740.546875,
            "unit": "ns",
            "range": "± 14549.120856848043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556269.8828125,
            "unit": "ns",
            "range": "± 8960.264378255135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165338.4765625,
            "unit": "ns",
            "range": "± 6852.664985994742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620315.6640625,
            "unit": "ns",
            "range": "± 7070.607355298605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841859.7446986607,
            "unit": "ns",
            "range": "± 2255.573520712785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762640.0520833334,
            "unit": "ns",
            "range": "± 2693.7281368701483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3094350,
            "unit": "ns",
            "range": "± 115946.5343906807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424225.714285714,
            "unit": "ns",
            "range": "± 110762.02455730761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4115306.976744186,
            "unit": "ns",
            "range": "± 149895.2878883072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4146591.891891892,
            "unit": "ns",
            "range": "± 138161.59897899427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6516662.5,
            "unit": "ns",
            "range": "± 226090.63497712364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261176.7441860465,
            "unit": "ns",
            "range": "± 8231.670466624399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245019.04761904763,
            "unit": "ns",
            "range": "± 5250.201810180162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223666.66666666666,
            "unit": "ns",
            "range": "± 10945.666066247535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3959175,
            "unit": "ns",
            "range": "± 77298.81844720095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3546235.714285714,
            "unit": "ns",
            "range": "± 61711.71945976971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19036.458333333332,
            "unit": "ns",
            "range": "± 1618.193911460465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84470.65217391304,
            "unit": "ns",
            "range": "± 5604.6593262572005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69271.15384615384,
            "unit": "ns",
            "range": "± 2846.279755480038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96523.4693877551,
            "unit": "ns",
            "range": "± 15677.824650677905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5398.989898989899,
            "unit": "ns",
            "range": "± 972.0056006279134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18643.157894736843,
            "unit": "ns",
            "range": "± 1795.8967789829899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684718890721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010709.0909090909,
            "unit": "ns",
            "range": "± 89560.81401097232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861743.5897435897,
            "unit": "ns",
            "range": "± 95270.70465871012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1599226.530612245,
            "unit": "ns",
            "range": "± 116121.86591025151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3907102.222222222,
            "unit": "ns",
            "range": "± 215544.7121048312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35553.896103896106,
            "unit": "ns",
            "range": "± 1825.2931674003235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5036464.285714285,
            "unit": "ns",
            "range": "± 61250.85377292376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12921130.76923077,
            "unit": "ns",
            "range": "± 81835.64203751509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33934242.85714286,
            "unit": "ns",
            "range": "± 574333.1366621047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67233369.23076923,
            "unit": "ns",
            "range": "± 730587.209469907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135616520,
            "unit": "ns",
            "range": "± 1740596.3034874818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3590391.346153846,
            "unit": "ns",
            "range": "± 15816.81259418602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1114841.5114182692,
            "unit": "ns",
            "range": "± 3601.6892863812245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 834333.3844866072,
            "unit": "ns",
            "range": "± 1721.8535684818412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959796.8149038462,
            "unit": "ns",
            "range": "± 11884.196944255036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603769.6875,
            "unit": "ns",
            "range": "± 1643.7156822024551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 535650.0075120192,
            "unit": "ns",
            "range": "± 1041.3002019013984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182737.5,
            "unit": "ns",
            "range": "± 55434.25257632371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2344412,
            "unit": "ns",
            "range": "± 92696.09691714894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2909831.8181818184,
            "unit": "ns",
            "range": "± 109043.71061425007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3038574.5454545454,
            "unit": "ns",
            "range": "± 123381.1832375763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4677443.902439024,
            "unit": "ns",
            "range": "± 168248.089214678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195253.33333333334,
            "unit": "ns",
            "range": "± 8536.352308478328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187855.76923076922,
            "unit": "ns",
            "range": "± 7631.036047705949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179459,
            "unit": "ns",
            "range": "± 16117.561129639831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2853170,
            "unit": "ns",
            "range": "± 63650.34088468688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557018.4210526315,
            "unit": "ns",
            "range": "± 55617.68356508745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17318.556701030928,
            "unit": "ns",
            "range": "± 2550.176868739827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72897.9797979798,
            "unit": "ns",
            "range": "± 7713.8753832402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65184.536082474224,
            "unit": "ns",
            "range": "± 9508.64015214349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78528.42105263157,
            "unit": "ns",
            "range": "± 9311.359604975478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4455.208333333333,
            "unit": "ns",
            "range": "± 969.8474966027734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19290.816326530614,
            "unit": "ns",
            "range": "± 2869.0343479344415"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c41af682bb608c821a4c96c09d9b9e563cdc09a7",
          "message": "Merge pull request #3204 from greymistcube/prepare/2.0.0\n\n🔧 Prepare 2.0.0",
          "timestamp": "2023-06-07T21:50:07+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c41af682bb608c821a4c96c09d9b9e563cdc09a7"
        },
        "date": 1686240295011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406482.2916666667,
            "unit": "ns",
            "range": "± 130785.62651976198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2570243.75,
            "unit": "ns",
            "range": "± 100856.59907575537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174508.641975309,
            "unit": "ns",
            "range": "± 110791.14156548219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5210155,
            "unit": "ns",
            "range": "± 111865.64062584892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53306.18556701031,
            "unit": "ns",
            "range": "± 5239.410241004184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7602665,
            "unit": "ns",
            "range": "± 174475.38591295245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20134673.333333332,
            "unit": "ns",
            "range": "± 344453.8585451855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49825117.64705882,
            "unit": "ns",
            "range": "± 997598.1588516078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101962700,
            "unit": "ns",
            "range": "± 1003774.3662463857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203523085.7142857,
            "unit": "ns",
            "range": "± 2437895.587736131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5027061.778846154,
            "unit": "ns",
            "range": "± 27322.794787438826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532255.6770833333,
            "unit": "ns",
            "range": "± 8892.288149590362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170122.9036458333,
            "unit": "ns",
            "range": "± 3847.242011859796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668921.4453125,
            "unit": "ns",
            "range": "± 6938.485891704168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832382.6171875,
            "unit": "ns",
            "range": "± 3201.0376962495493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765423.6607142857,
            "unit": "ns",
            "range": "± 5677.583058955071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291013.0434782607,
            "unit": "ns",
            "range": "± 73788.23695578774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3427920,
            "unit": "ns",
            "range": "± 167279.19694250607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4325056.25,
            "unit": "ns",
            "range": "± 81682.58866898542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4463357.142857143,
            "unit": "ns",
            "range": "± 68344.6324974302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6731275,
            "unit": "ns",
            "range": "± 204282.02990457942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271461.6666666667,
            "unit": "ns",
            "range": "± 12140.185289774474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265121.875,
            "unit": "ns",
            "range": "± 12301.625505573036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250210,
            "unit": "ns",
            "range": "± 17162.05881082636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4065060,
            "unit": "ns",
            "range": "± 42118.485931273186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678653.3333333335,
            "unit": "ns",
            "range": "± 59787.299973282265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21813.82978723404,
            "unit": "ns",
            "range": "± 1716.7486814418155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94862.62626262626,
            "unit": "ns",
            "range": "± 9119.105150542468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75974.19354838709,
            "unit": "ns",
            "range": "± 5951.870426246483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102396.9387755102,
            "unit": "ns",
            "range": "± 19067.370812661957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6773.958333333333,
            "unit": "ns",
            "range": "± 1299.2503742880813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23624.74226804124,
            "unit": "ns",
            "range": "± 3052.356703155607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c41af682bb608c821a4c96c09d9b9e563cdc09a7",
          "message": "Merge pull request #3204 from greymistcube/prepare/2.0.0\n\n🔧 Prepare 2.0.0",
          "timestamp": "2023-06-07T21:50:07+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c41af682bb608c821a4c96c09d9b9e563cdc09a7"
        },
        "date": 1686240758936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675854.7368421052,
            "unit": "ns",
            "range": "± 203717.1781517998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041200,
            "unit": "ns",
            "range": "± 288435.3069854477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2659461,
            "unit": "ns",
            "range": "± 307317.42281007476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6777603.092783505,
            "unit": "ns",
            "range": "± 671723.4612754233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59431.868131868134,
            "unit": "ns",
            "range": "± 11636.884645345774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8427752.525252525,
            "unit": "ns",
            "range": "± 536079.6952524179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23465963.076923076,
            "unit": "ns",
            "range": "± 1090566.3828902782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61752795.55555555,
            "unit": "ns",
            "range": "± 2301900.55951357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125684744,
            "unit": "ns",
            "range": "± 5075673.17329496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251954505.7142857,
            "unit": "ns",
            "range": "± 8202689.956670342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5590804.270833333,
            "unit": "ns",
            "range": "± 68378.21209905618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867067.4954927885,
            "unit": "ns",
            "range": "± 22059.134390340463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447083.0877130681,
            "unit": "ns",
            "range": "± 35408.262546855796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072187.8551136362,
            "unit": "ns",
            "range": "± 68355.12429066359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038065.2131453805,
            "unit": "ns",
            "range": "± 22776.65019871343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 994727.978515625,
            "unit": "ns",
            "range": "± 27629.305232028528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687381,
            "unit": "ns",
            "range": "± 383322.97184810706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3856191.489361702,
            "unit": "ns",
            "range": "± 339609.20849806577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5230544.329896907,
            "unit": "ns",
            "range": "± 341144.8980299867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4855735.7894736845,
            "unit": "ns",
            "range": "± 411854.1272219357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8600711.224489795,
            "unit": "ns",
            "range": "± 521224.6589815604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326436.59793814435,
            "unit": "ns",
            "range": "± 50458.757145617565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323188.5416666667,
            "unit": "ns",
            "range": "± 45345.345887316274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266720.4081632653,
            "unit": "ns",
            "range": "± 34533.41713182693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4751112.765957447,
            "unit": "ns",
            "range": "± 354007.1086200919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4370144.680851064,
            "unit": "ns",
            "range": "± 370060.5127403922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19214.814814814814,
            "unit": "ns",
            "range": "± 2778.7637139162766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93065.59139784946,
            "unit": "ns",
            "range": "± 13995.034015396286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98312.76595744681,
            "unit": "ns",
            "range": "± 19439.784248341195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133872.63157894736,
            "unit": "ns",
            "range": "± 39581.221213958954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6359.782608695652,
            "unit": "ns",
            "range": "± 1512.4436077115095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18169.135802469136,
            "unit": "ns",
            "range": "± 2898.216778266795"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "848022c87ceca17c886bf4d4f4f3c63c26325761",
          "message": "Merge pull request #3201 from riemannulus/fee-collect\n\nintroduce: fee collector",
          "timestamp": "2023-06-14T10:47:05+08:00",
          "tree_id": "b25599c654e1481c16ce4f6b78e1d40792340bc3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/848022c87ceca17c886bf4d4f4f3c63c26325761"
        },
        "date": 1686712848866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429723,
            "unit": "ns",
            "range": "± 121895.88192926426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2718708.6021505375,
            "unit": "ns",
            "range": "± 152733.79772884896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285535.3535353537,
            "unit": "ns",
            "range": "± 165493.85851674827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5468067.346938776,
            "unit": "ns",
            "range": "± 213948.18627781028"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46885.416666666664,
            "unit": "ns",
            "range": "± 2950.253483013805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7347385.714285715,
            "unit": "ns",
            "range": "± 73936.16640925268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20876050,
            "unit": "ns",
            "range": "± 204044.33436048988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52749864.28571428,
            "unit": "ns",
            "range": "± 523468.6686783767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104002252.94117647,
            "unit": "ns",
            "range": "± 2084504.6135465996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207083600,
            "unit": "ns",
            "range": "± 3816305.565783297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895021.819196428,
            "unit": "ns",
            "range": "± 23300.77853577803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569561.640625,
            "unit": "ns",
            "range": "± 5208.694045951711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177594.04296875,
            "unit": "ns",
            "range": "± 5745.541822819342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675156.082589286,
            "unit": "ns",
            "range": "± 6603.436057931553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851863.818359375,
            "unit": "ns",
            "range": "± 2301.6196655237372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780620.1171875,
            "unit": "ns",
            "range": "± 2754.7505226156027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3337372.222222222,
            "unit": "ns",
            "range": "± 110554.25199837696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3605464,
            "unit": "ns",
            "range": "± 145344.64566845866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4486611.764705882,
            "unit": "ns",
            "range": "± 79682.47048718542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499988.888888889,
            "unit": "ns",
            "range": "± 95978.23827421622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6859865.714285715,
            "unit": "ns",
            "range": "± 203223.4888908632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268015.6862745098,
            "unit": "ns",
            "range": "± 10872.320314431867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249270.58823529413,
            "unit": "ns",
            "range": "± 8010.846034530204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229738.77551020408,
            "unit": "ns",
            "range": "± 15180.417612751578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4153364.285714286,
            "unit": "ns",
            "range": "± 64843.42807744795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756400,
            "unit": "ns",
            "range": "± 66598.34832786772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20220.618556701033,
            "unit": "ns",
            "range": "± 2728.32129951772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87571.875,
            "unit": "ns",
            "range": "± 6596.070650494565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77395.83333333333,
            "unit": "ns",
            "range": "± 6929.660380022685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97640.8163265306,
            "unit": "ns",
            "range": "± 12613.630630284704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5507.142857142857,
            "unit": "ns",
            "range": "± 947.7319643700215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18136.082474226805,
            "unit": "ns",
            "range": "± 1804.2880386624754"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "848022c87ceca17c886bf4d4f4f3c63c26325761",
          "message": "Merge pull request #3201 from riemannulus/fee-collect\n\nintroduce: fee collector",
          "timestamp": "2023-06-14T10:47:05+08:00",
          "tree_id": "b25599c654e1481c16ce4f6b78e1d40792340bc3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/848022c87ceca17c886bf4d4f4f3c63c26325761"
        },
        "date": 1686713140429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1757278.7878787878,
            "unit": "ns",
            "range": "± 192233.291130657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3245853.7634408604,
            "unit": "ns",
            "range": "± 323258.57013392606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2734386.0215053763,
            "unit": "ns",
            "range": "± 270475.00229724596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6963640.217391305,
            "unit": "ns",
            "range": "± 601066.6891854047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52963.63636363636,
            "unit": "ns",
            "range": "± 10966.030954758948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8575012.637362637,
            "unit": "ns",
            "range": "± 599196.6591748492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23293775.757575758,
            "unit": "ns",
            "range": "± 1798705.6459106354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63295461.616161615,
            "unit": "ns",
            "range": "± 4508853.84111666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124578658.8235294,
            "unit": "ns",
            "range": "± 2475598.12925554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233163158.82352942,
            "unit": "ns",
            "range": "± 7530105.152838078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5672790.569196428,
            "unit": "ns",
            "range": "± 82888.12461534145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1781568.7959558824,
            "unit": "ns",
            "range": "± 36181.092950340666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400177.7794471155,
            "unit": "ns",
            "range": "± 18034.012491869824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3054377.5,
            "unit": "ns",
            "range": "± 43099.65437889921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008456.2239583334,
            "unit": "ns",
            "range": "± 18273.869329735644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906322.578125,
            "unit": "ns",
            "range": "± 11039.384348922727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3527167.204301075,
            "unit": "ns",
            "range": "± 366736.3250239866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3728511.5789473685,
            "unit": "ns",
            "range": "± 350004.31360963645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4866281.720430108,
            "unit": "ns",
            "range": "± 366857.19735229656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4651511.340206185,
            "unit": "ns",
            "range": "± 537830.3629856042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8494729.347826088,
            "unit": "ns",
            "range": "± 597297.2200916728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322782.60869565216,
            "unit": "ns",
            "range": "± 48803.60194033522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314722.44897959183,
            "unit": "ns",
            "range": "± 54526.0583321373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249791.66666666666,
            "unit": "ns",
            "range": "± 40977.52314999983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4590998.947368421,
            "unit": "ns",
            "range": "± 330278.83464718336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4381225.806451613,
            "unit": "ns",
            "range": "± 422866.2214971893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28092.63157894737,
            "unit": "ns",
            "range": "± 9917.760150627517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102468.68686868687,
            "unit": "ns",
            "range": "± 22549.730286927886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84259.5744680851,
            "unit": "ns",
            "range": "± 18786.17839640907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129061.05263157895,
            "unit": "ns",
            "range": "± 33406.685834644646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5301.123595505618,
            "unit": "ns",
            "range": "± 1176.328492890879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23958,
            "unit": "ns",
            "range": "± 9994.6165307109"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6570787e9df245ff0db9c317937cc434df793fef",
          "message": "Merge pull request #3213 from OnedgeLee/prepare/2.1.0\n\n🔧 Prepare 2.1.0",
          "timestamp": "2023-06-14T13:59:49+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6570787e9df245ff0db9c317937cc434df793fef"
        },
        "date": 1686892836856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336241.836734694,
            "unit": "ns",
            "range": "± 106485.95756942895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436868.867924528,
            "unit": "ns",
            "range": "± 92199.42653042867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103554,
            "unit": "ns",
            "range": "± 129105.38285768058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5090391.228070175,
            "unit": "ns",
            "range": "± 217223.50510863046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44000,
            "unit": "ns",
            "range": "± 1959.4158172342047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6764620,
            "unit": "ns",
            "range": "± 41954.46851732755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17500183.333333332,
            "unit": "ns",
            "range": "± 95394.78622071145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45236833.333333336,
            "unit": "ns",
            "range": "± 367292.87587246596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89420593.33333333,
            "unit": "ns",
            "range": "± 550110.1687930553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180260957.14285713,
            "unit": "ns",
            "range": "± 633418.6630005171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831827.884615385,
            "unit": "ns",
            "range": "± 5408.113524415537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510827.943638393,
            "unit": "ns",
            "range": "± 1558.9300840729716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158531.3895089286,
            "unit": "ns",
            "range": "± 842.1950065105449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568584.4401041665,
            "unit": "ns",
            "range": "± 12139.161711530443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802383.5100446428,
            "unit": "ns",
            "range": "± 2877.661257013516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729763.4212239584,
            "unit": "ns",
            "range": "± 552.1893799855401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2931806.6666666665,
            "unit": "ns",
            "range": "± 45550.19941412624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3155848.8372093025,
            "unit": "ns",
            "range": "± 116925.74642561472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4001035.714285714,
            "unit": "ns",
            "range": "± 64521.45566986412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4051143.75,
            "unit": "ns",
            "range": "± 78486.66102168783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6445128.571428572,
            "unit": "ns",
            "range": "± 212679.97404289152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254602.12765957447,
            "unit": "ns",
            "range": "± 9031.550720564623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241578.94736842104,
            "unit": "ns",
            "range": "± 9369.035947549042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217986,
            "unit": "ns",
            "range": "± 8669.581116449277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3817460,
            "unit": "ns",
            "range": "± 49303.08306789749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3513100,
            "unit": "ns",
            "range": "± 58543.4637073785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16716.326530612245,
            "unit": "ns",
            "range": "± 1768.0844009773944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80544.578313253,
            "unit": "ns",
            "range": "± 4133.186717529584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66579.41176470589,
            "unit": "ns",
            "range": "± 2081.6338879576692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83188.88888888889,
            "unit": "ns",
            "range": "± 8171.909194010666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4522.448979591837,
            "unit": "ns",
            "range": "± 739.9541100628795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16372.631578947368,
            "unit": "ns",
            "range": "± 2122.996783215969"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6570787e9df245ff0db9c317937cc434df793fef",
          "message": "Merge pull request #3213 from OnedgeLee/prepare/2.1.0\n\n🔧 Prepare 2.1.0",
          "timestamp": "2023-06-14T13:59:49+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6570787e9df245ff0db9c317937cc434df793fef"
        },
        "date": 1686892899295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460898.98989899,
            "unit": "ns",
            "range": "± 143162.96016160952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2715938.947368421,
            "unit": "ns",
            "range": "± 156861.91806587638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215944.210526316,
            "unit": "ns",
            "range": "± 138598.8952673033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5605118.681318682,
            "unit": "ns",
            "range": "± 312671.1211168438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49831.57894736842,
            "unit": "ns",
            "range": "± 4081.7774381844024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7635406.25,
            "unit": "ns",
            "range": "± 140028.4755267061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19919826.666666668,
            "unit": "ns",
            "range": "± 333753.84955868014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48899600,
            "unit": "ns",
            "range": "± 845125.5764677816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97889511.1111111,
            "unit": "ns",
            "range": "± 2023870.8892466114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196869766.66666666,
            "unit": "ns",
            "range": "± 3217767.357893328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4814448.697916667,
            "unit": "ns",
            "range": "± 24665.08018919926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524626.0323660714,
            "unit": "ns",
            "range": "± 7485.052223542269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158924.609375,
            "unit": "ns",
            "range": "± 8169.269185271842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631498.409598214,
            "unit": "ns",
            "range": "± 6293.607401431555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838169.6498325893,
            "unit": "ns",
            "range": "± 3143.2758306063583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753426.3044084822,
            "unit": "ns",
            "range": "± 1679.527999421572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000337.8378378376,
            "unit": "ns",
            "range": "± 86544.0746779458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3239080.487804878,
            "unit": "ns",
            "range": "± 171202.6338488872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4111396.923076923,
            "unit": "ns",
            "range": "± 190859.49017637194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4477491.304347826,
            "unit": "ns",
            "range": "± 109428.43619563126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6945856.25,
            "unit": "ns",
            "range": "± 214298.20937264638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274994.54545454547,
            "unit": "ns",
            "range": "± 11567.729989257921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272412,
            "unit": "ns",
            "range": "± 13211.542455521765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256170.4081632653,
            "unit": "ns",
            "range": "± 19936.151740580168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4167172.727272727,
            "unit": "ns",
            "range": "± 98485.57028373523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3772510.5263157897,
            "unit": "ns",
            "range": "± 82888.96116516924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22987.628865979383,
            "unit": "ns",
            "range": "± 2793.901756950557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97574.22680412371,
            "unit": "ns",
            "range": "± 9151.141531143754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79646.55172413793,
            "unit": "ns",
            "range": "± 4367.066182335477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108834.375,
            "unit": "ns",
            "range": "± 15691.726469871413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6737.5,
            "unit": "ns",
            "range": "± 1092.3899438724636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23178.78787878788,
            "unit": "ns",
            "range": "± 3622.0772236010007"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688031574399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664023.7113402062,
            "unit": "ns",
            "range": "± 222909.59993776807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3170603.1914893617,
            "unit": "ns",
            "range": "± 434011.21621008427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2600705.2083333335,
            "unit": "ns",
            "range": "± 361103.02958101535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6527190.322580645,
            "unit": "ns",
            "range": "± 743034.6753077392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58001.086956521736,
            "unit": "ns",
            "range": "± 12085.160226767423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8531987.5,
            "unit": "ns",
            "range": "± 822661.8240104561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22553891,
            "unit": "ns",
            "range": "± 2309726.9172221213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61769150,
            "unit": "ns",
            "range": "± 3737139.726876141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125571423.68421052,
            "unit": "ns",
            "range": "± 4323751.433928282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252096143.85964912,
            "unit": "ns",
            "range": "± 10861476.180454373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6077564.341517857,
            "unit": "ns",
            "range": "± 79453.89293035636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980458.0989583333,
            "unit": "ns",
            "range": "± 59207.06033048888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482593.4640066964,
            "unit": "ns",
            "range": "± 41358.01027830925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203320.46875,
            "unit": "ns",
            "range": "± 44170.89532477073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1071150.913783482,
            "unit": "ns",
            "range": "± 29807.71371734892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003703.9481026785,
            "unit": "ns",
            "range": "± 16632.082618134034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3729770.4081632653,
            "unit": "ns",
            "range": "± 449382.4977916709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3813964.8936170214,
            "unit": "ns",
            "range": "± 291646.61069260375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5475973.958333333,
            "unit": "ns",
            "range": "± 633598.6247733599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4909938.043478261,
            "unit": "ns",
            "range": "± 471369.7402817376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8727769.148936171,
            "unit": "ns",
            "range": "± 637089.2203054258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332240.625,
            "unit": "ns",
            "range": "± 51675.93062462497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312002.12765957444,
            "unit": "ns",
            "range": "± 42180.763027924666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279784.0425531915,
            "unit": "ns",
            "range": "± 46608.0276051828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5026088.29787234,
            "unit": "ns",
            "range": "± 576000.0946192393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4238930.769230769,
            "unit": "ns",
            "range": "± 385519.560446911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22943.157894736843,
            "unit": "ns",
            "range": "± 7871.841178443187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106585.26315789473,
            "unit": "ns",
            "range": "± 22691.384476300424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108872.1649484536,
            "unit": "ns",
            "range": "± 34956.77015456627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139701.04166666666,
            "unit": "ns",
            "range": "± 26688.769547435873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7703.225806451613,
            "unit": "ns",
            "range": "± 2182.4622917656475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22637.23404255319,
            "unit": "ns",
            "range": "± 6851.543802842502"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688031591393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1857991.7525773195,
            "unit": "ns",
            "range": "± 199743.20371735172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3522974.4680851065,
            "unit": "ns",
            "range": "± 210376.20369958045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2834379.569892473,
            "unit": "ns",
            "range": "± 232783.19711844015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7191596.96969697,
            "unit": "ns",
            "range": "± 442875.59718566603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79201.08695652174,
            "unit": "ns",
            "range": "± 9034.786186894791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10176255,
            "unit": "ns",
            "range": "± 210203.42647064533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25502333.333333332,
            "unit": "ns",
            "range": "± 309149.86607949506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63706850,
            "unit": "ns",
            "range": "± 484563.9417418135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129760706.66666667,
            "unit": "ns",
            "range": "± 2248357.688392214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261336037.5,
            "unit": "ns",
            "range": "± 3921643.7760842075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6565043.625,
            "unit": "ns",
            "range": "± 173712.4014292678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950768.4194711538,
            "unit": "ns",
            "range": "± 24436.014307021633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1470733.0797697369,
            "unit": "ns",
            "range": "± 31557.909176050733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3505256.4453125,
            "unit": "ns",
            "range": "± 65520.43249227381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1060814.0104166667,
            "unit": "ns",
            "range": "± 15785.428246475802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 994028.4458705357,
            "unit": "ns",
            "range": "± 14827.28586878877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4260632.467532467,
            "unit": "ns",
            "range": "± 216261.82927278246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4499848.192771085,
            "unit": "ns",
            "range": "± 238793.93471964318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5391073.076923077,
            "unit": "ns",
            "range": "± 132140.5571584812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5628839.024390244,
            "unit": "ns",
            "range": "± 294911.246643066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8771154.716981132,
            "unit": "ns",
            "range": "± 331995.6785898308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354076.13636363635,
            "unit": "ns",
            "range": "± 19430.40036808171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343293.1818181818,
            "unit": "ns",
            "range": "± 12732.69729233623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321030,
            "unit": "ns",
            "range": "± 7208.48184615289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5206485.714285715,
            "unit": "ns",
            "range": "± 60031.925572249376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4939477.5,
            "unit": "ns",
            "range": "± 172352.3767995717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31301.063829787236,
            "unit": "ns",
            "range": "± 3643.892951960076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 140244.08602150538,
            "unit": "ns",
            "range": "± 9973.360847839385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129943.6170212766,
            "unit": "ns",
            "range": "± 16604.576118251374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143203.1914893617,
            "unit": "ns",
            "range": "± 18371.33960105063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9300,
            "unit": "ns",
            "range": "± 2181.137922590554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26665.625,
            "unit": "ns",
            "range": "± 5625.221925446704"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d28947e8c972a220e442fddc21270b28a16f367",
          "message": "Merge pull request #3257 from greymistcube/refactor/reroute-delta-access\n\n♻️ Reroute `IAccountDelta` access",
          "timestamp": "2023-06-30T18:06:39+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d28947e8c972a220e442fddc21270b28a16f367"
        },
        "date": 1688130092769,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479117.391304348,
            "unit": "ns",
            "range": "± 36488.848261226754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2609784.9315068494,
            "unit": "ns",
            "range": "± 128459.20847494403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1865810.4166666667,
            "unit": "ns",
            "range": "± 143104.43921112237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4844222.033898305,
            "unit": "ns",
            "range": "± 212261.39307206904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49868.42105263158,
            "unit": "ns",
            "range": "± 3663.745994804455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7195346.153846154,
            "unit": "ns",
            "range": "± 105099.56878586304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20075553.333333332,
            "unit": "ns",
            "range": "± 262431.17156603903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50051306.666666664,
            "unit": "ns",
            "range": "± 744384.1447481139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98290228.57142857,
            "unit": "ns",
            "range": "± 1220450.487716332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197116403.33333334,
            "unit": "ns",
            "range": "± 3664751.6220390834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4855143.515625,
            "unit": "ns",
            "range": "± 12172.06344555435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533484.296875,
            "unit": "ns",
            "range": "± 4724.155024535539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179120.703125,
            "unit": "ns",
            "range": "± 3377.7086172974796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662466.5364583335,
            "unit": "ns",
            "range": "± 9511.470635911559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828430.1139322916,
            "unit": "ns",
            "range": "± 2077.595141350843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758000.3981370192,
            "unit": "ns",
            "range": "± 1818.2918637772411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3134540,
            "unit": "ns",
            "range": "± 109317.61018900796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3230536.4864864866,
            "unit": "ns",
            "range": "± 108371.27838582962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4039669.230769231,
            "unit": "ns",
            "range": "± 108362.32839591725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3619625,
            "unit": "ns",
            "range": "± 160107.05171376612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6009911.538461538,
            "unit": "ns",
            "range": "± 139974.2071295225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264452.7272727273,
            "unit": "ns",
            "range": "± 10593.968489200275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257617.07317073172,
            "unit": "ns",
            "range": "± 9210.996212110404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234673,
            "unit": "ns",
            "range": "± 14608.997193164867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4061071.4285714286,
            "unit": "ns",
            "range": "± 59426.19764912582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3655035.714285714,
            "unit": "ns",
            "range": "± 53854.513519050815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22018.478260869564,
            "unit": "ns",
            "range": "± 1978.8957597846445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97630.92783505155,
            "unit": "ns",
            "range": "± 7201.784513009349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85832.6530612245,
            "unit": "ns",
            "range": "± 7574.942080826568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106978.35051546391,
            "unit": "ns",
            "range": "± 17521.85080361639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6622.105263157895,
            "unit": "ns",
            "range": "± 991.2574163140149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21563.82978723404,
            "unit": "ns",
            "range": "± 1667.5170559866563"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d28947e8c972a220e442fddc21270b28a16f367",
          "message": "Merge pull request #3257 from greymistcube/refactor/reroute-delta-access\n\n♻️ Reroute `IAccountDelta` access",
          "timestamp": "2023-06-30T18:06:39+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d28947e8c972a220e442fddc21270b28a16f367"
        },
        "date": 1688130406070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2003833.6842105263,
            "unit": "ns",
            "range": "± 270662.29355264065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3588129.347826087,
            "unit": "ns",
            "range": "± 298057.64894777205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2361633.3333333335,
            "unit": "ns",
            "range": "± 202718.59502304156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6616367.708333333,
            "unit": "ns",
            "range": "± 440901.02588957816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60235.10638297872,
            "unit": "ns",
            "range": "± 10804.983989845567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9236409.375,
            "unit": "ns",
            "range": "± 641899.2870795928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25648152.127659574,
            "unit": "ns",
            "range": "± 1595463.0085870426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65767576.315789476,
            "unit": "ns",
            "range": "± 1431080.2741061286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134064019.23076923,
            "unit": "ns",
            "range": "± 3622805.3673383263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270796488.8888889,
            "unit": "ns",
            "range": "± 5569845.922242045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6505340.8984375,
            "unit": "ns",
            "range": "± 141545.12082238385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2116265.625,
            "unit": "ns",
            "range": "± 40217.36522520529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1577342.6199776786,
            "unit": "ns",
            "range": "± 17185.8845145676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3434632.3467548075,
            "unit": "ns",
            "range": "± 31382.961373518472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1126392.2916666667,
            "unit": "ns",
            "range": "± 20428.570748901104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1055781.4034598214,
            "unit": "ns",
            "range": "± 13497.536040238681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3778182.1052631577,
            "unit": "ns",
            "range": "± 257173.66016931515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4102597.8947368423,
            "unit": "ns",
            "range": "± 349306.86441499484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5448281.318681318,
            "unit": "ns",
            "range": "± 376888.41700077866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4484902.222222222,
            "unit": "ns",
            "range": "± 333357.17996348673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8512610.869565217,
            "unit": "ns",
            "range": "± 499564.0878831585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350720.5263157895,
            "unit": "ns",
            "range": "± 42695.36043777514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319492.85714285716,
            "unit": "ns",
            "range": "± 36990.358872070115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283451.0869565217,
            "unit": "ns",
            "range": "± 35230.92577088592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5039670.212765957,
            "unit": "ns",
            "range": "± 317690.96901132097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4575135.483870967,
            "unit": "ns",
            "range": "± 261267.3816332032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21828.08988764045,
            "unit": "ns",
            "range": "± 3530.48376687842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102140.21739130435,
            "unit": "ns",
            "range": "± 13590.308924212075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119473.19587628866,
            "unit": "ns",
            "range": "± 23335.865259045277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137030.8510638298,
            "unit": "ns",
            "range": "± 24644.7666219128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7702.688172043011,
            "unit": "ns",
            "range": "± 1965.0529032511997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22953.846153846152,
            "unit": "ns",
            "range": "± 6258.333247977055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65eed8a84207980727fba3dff62340b64a709f50",
          "message": "Add preEvaluationHash field to BlockType (#3281)\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-10T11:50:06+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/OnedgeLee/libplanet/commit/65eed8a84207980727fba3dff62340b64a709f50"
        },
        "date": 1688973448760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014130.2083333334,
            "unit": "ns",
            "range": "± 103013.89187850413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1764690.1960784313,
            "unit": "ns",
            "range": "± 71399.15477063286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1356952.0202020202,
            "unit": "ns",
            "range": "± 114442.22049843245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3491262.222222222,
            "unit": "ns",
            "range": "± 192448.77361759508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33928.260869565216,
            "unit": "ns",
            "range": "± 1552.1208986053464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4939384.615384615,
            "unit": "ns",
            "range": "± 20048.975291929768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12717214.285714285,
            "unit": "ns",
            "range": "± 66912.50150116088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31979857.14285714,
            "unit": "ns",
            "range": "± 231048.34896713623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63654557.14285714,
            "unit": "ns",
            "range": "± 214640.6862079605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126822353.84615384,
            "unit": "ns",
            "range": "± 453691.7503757087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3623346.456473214,
            "unit": "ns",
            "range": "± 5610.361910303953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1111809.3229166667,
            "unit": "ns",
            "range": "± 2249.8458657730007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 815537.4930245535,
            "unit": "ns",
            "range": "± 1210.9847693454985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981468.6328125,
            "unit": "ns",
            "range": "± 6103.485100280814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633723.4375,
            "unit": "ns",
            "range": "± 812.8215789942208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575419.82421875,
            "unit": "ns",
            "range": "± 1191.1641859946158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149577.777777778,
            "unit": "ns",
            "range": "± 58723.867073810485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308829.090909091,
            "unit": "ns",
            "range": "± 98134.9593629011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2812703.2258064514,
            "unit": "ns",
            "range": "± 68159.53092498495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2677400,
            "unit": "ns",
            "range": "± 70542.64076901763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4269765,
            "unit": "ns",
            "range": "± 129344.69232327776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176317.39130434784,
            "unit": "ns",
            "range": "± 10482.687021267859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169084.74576271186,
            "unit": "ns",
            "range": "± 7345.625335679735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148993.75,
            "unit": "ns",
            "range": "± 4556.168275518225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771928.5714285714,
            "unit": "ns",
            "range": "± 42946.84422133282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2487100,
            "unit": "ns",
            "range": "± 34487.69967062791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9916.304347826086,
            "unit": "ns",
            "range": "± 1340.5982897521476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51719.767441860466,
            "unit": "ns",
            "range": "± 2877.747066817123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44995.454545454544,
            "unit": "ns",
            "range": "± 1046.2983607653507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58272.34042553192,
            "unit": "ns",
            "range": "± 9533.195024058583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2280.1075268817203,
            "unit": "ns",
            "range": "± 316.8407041252061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9070.967741935483,
            "unit": "ns",
            "range": "± 1069.496086660858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65eed8a84207980727fba3dff62340b64a709f50",
          "message": "Add preEvaluationHash field to BlockType (#3281)\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-10T11:50:06+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/OnedgeLee/libplanet/commit/65eed8a84207980727fba3dff62340b64a709f50"
        },
        "date": 1688973676537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1458835.7142857143,
            "unit": "ns",
            "range": "± 157187.06384826047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596603.5714285714,
            "unit": "ns",
            "range": "± 139486.5830628921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1824379.797979798,
            "unit": "ns",
            "range": "± 148468.661559485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4904818,
            "unit": "ns",
            "range": "± 193842.6667823834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47234.04255319149,
            "unit": "ns",
            "range": "± 3546.543165996614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7279184.615384615,
            "unit": "ns",
            "range": "± 53541.18113119168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20316329.411764707,
            "unit": "ns",
            "range": "± 412906.67190768704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50761587.5,
            "unit": "ns",
            "range": "± 1303967.0195590938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101883650,
            "unit": "ns",
            "range": "± 2034391.5915520734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206902214.2857143,
            "unit": "ns",
            "range": "± 3471433.9927375927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4853766.770833333,
            "unit": "ns",
            "range": "± 32826.05027513924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1552507.1875,
            "unit": "ns",
            "range": "± 8204.531647638563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1188251.9661458333,
            "unit": "ns",
            "range": "± 6940.863825812279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631008.9006696427,
            "unit": "ns",
            "range": "± 9856.72976100736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839680.712890625,
            "unit": "ns",
            "range": "± 4407.524760558005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803593.45703125,
            "unit": "ns",
            "range": "± 3207.6005029600715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3267698.245614035,
            "unit": "ns",
            "range": "± 129037.61701151346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314182.6666666665,
            "unit": "ns",
            "range": "± 153328.28706541535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4064581.5789473685,
            "unit": "ns",
            "range": "± 137790.76157644938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3662671.875,
            "unit": "ns",
            "range": "± 111428.6614961455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6241452.173913044,
            "unit": "ns",
            "range": "± 230373.67783584463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267218.4210526316,
            "unit": "ns",
            "range": "± 5897.179422927441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255446.66666666666,
            "unit": "ns",
            "range": "± 11279.890110455633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224564.93506493507,
            "unit": "ns",
            "range": "± 11203.990903547743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4102510.5263157897,
            "unit": "ns",
            "range": "± 90295.29269591486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3725814.285714286,
            "unit": "ns",
            "range": "± 65572.24855241568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18445.744680851065,
            "unit": "ns",
            "range": "± 1927.0382251548517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85964.89361702128,
            "unit": "ns",
            "range": "± 5624.97708376328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71947.82608695653,
            "unit": "ns",
            "range": "± 4187.828471902976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89939.24050632911,
            "unit": "ns",
            "range": "± 5430.432237637163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4911.627906976744,
            "unit": "ns",
            "range": "± 811.7401213589255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18020.43010752688,
            "unit": "ns",
            "range": "± 1917.7976011778942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4820bf17b18ecdc0a149eb5dbf08c01e700d657e",
          "message": "Merge pull request #3288 from limebell/chore/fix-test\n\nAdd `Context.VoteSetModified` event handler",
          "timestamp": "2023-07-10T18:49:37+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4820bf17b18ecdc0a149eb5dbf08c01e700d657e"
        },
        "date": 1689118133830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687020.8333333333,
            "unit": "ns",
            "range": "± 163426.3007350097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3151669.7802197803,
            "unit": "ns",
            "range": "± 203409.44052153654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219004.1666666665,
            "unit": "ns",
            "range": "± 232482.96594834718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5960975.757575758,
            "unit": "ns",
            "range": "± 486511.5664650402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54785.71428571428,
            "unit": "ns",
            "range": "± 4649.147387271287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8876330.337078651,
            "unit": "ns",
            "range": "± 489727.0151932731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24358670.27027027,
            "unit": "ns",
            "range": "± 785440.7746485284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62643946.34146342,
            "unit": "ns",
            "range": "± 2246598.1712466474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126487970.1754386,
            "unit": "ns",
            "range": "± 5438861.508328116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249422326.47058824,
            "unit": "ns",
            "range": "± 8039703.40743868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6037206.171875,
            "unit": "ns",
            "range": "± 138901.9521521712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913863.4895833333,
            "unit": "ns",
            "range": "± 35113.16027848376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456022.021484375,
            "unit": "ns",
            "range": "± 27607.869818569627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3263514.3415178573,
            "unit": "ns",
            "range": "± 47971.053889395735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997303.80859375,
            "unit": "ns",
            "range": "± 20659.81440680928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943874.8180042614,
            "unit": "ns",
            "range": "± 22612.092544517443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3908205.376344086,
            "unit": "ns",
            "range": "± 225892.04393749463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4025095.8333333335,
            "unit": "ns",
            "range": "± 273056.4109509306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4974155.813953488,
            "unit": "ns",
            "range": "± 183911.81285026073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4516000,
            "unit": "ns",
            "range": "± 307526.0138047945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7575389.230769231,
            "unit": "ns",
            "range": "± 348754.74195838766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302216.091954023,
            "unit": "ns",
            "range": "± 18301.181011345983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295886.5168539326,
            "unit": "ns",
            "range": "± 20396.491404000404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275353.8461538461,
            "unit": "ns",
            "range": "± 19045.193664266102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4981160.975609756,
            "unit": "ns",
            "range": "± 262495.1361130089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4495087.640449438,
            "unit": "ns",
            "range": "± 247503.47969097723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24217.021276595744,
            "unit": "ns",
            "range": "± 2533.4594605503594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102560.75268817204,
            "unit": "ns",
            "range": "± 10322.03702475175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97401.08695652174,
            "unit": "ns",
            "range": "± 8817.122385290488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118305.78947368421,
            "unit": "ns",
            "range": "± 18672.916533581487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7106.25,
            "unit": "ns",
            "range": "± 1408.307121109746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23627.083333333332,
            "unit": "ns",
            "range": "± 2448.6937083255193"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4820bf17b18ecdc0a149eb5dbf08c01e700d657e",
          "message": "Merge pull request #3288 from limebell/chore/fix-test\n\nAdd `Context.VoteSetModified` event handler",
          "timestamp": "2023-07-10T18:49:37+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4820bf17b18ecdc0a149eb5dbf08c01e700d657e"
        },
        "date": 1689118535656,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1879421.2765957448,
            "unit": "ns",
            "range": "± 230520.0958619492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3676154.4444444445,
            "unit": "ns",
            "range": "± 354338.3069420266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2451073.1958762887,
            "unit": "ns",
            "range": "± 291308.4199333329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6850620,
            "unit": "ns",
            "range": "± 576370.6986439535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58128.089887640446,
            "unit": "ns",
            "range": "± 10302.592224158101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9481473.469387755,
            "unit": "ns",
            "range": "± 731667.4773646838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24097097.802197803,
            "unit": "ns",
            "range": "± 1530924.845530238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64295532.530120485,
            "unit": "ns",
            "range": "± 3425338.85662563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133318364,
            "unit": "ns",
            "range": "± 8184002.082203987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274013533.68421054,
            "unit": "ns",
            "range": "± 15597281.937586287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6521018.136160715,
            "unit": "ns",
            "range": "± 108774.70753118844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2169923.59375,
            "unit": "ns",
            "range": "± 100535.46656316434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1607298.7421875,
            "unit": "ns",
            "range": "± 41912.69373460078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3520433.7565104165,
            "unit": "ns",
            "range": "± 116234.9895837355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1166279.4686153017,
            "unit": "ns",
            "range": "± 50400.9399188995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1061075.9847005208,
            "unit": "ns",
            "range": "± 26776.16577952321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3896500,
            "unit": "ns",
            "range": "± 312099.1234990718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4261518.556701031,
            "unit": "ns",
            "range": "± 502982.5051484349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5789028.865979382,
            "unit": "ns",
            "range": "± 587270.3004790404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4675206.666666667,
            "unit": "ns",
            "range": "± 350645.10814378766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8866953.125,
            "unit": "ns",
            "range": "± 958633.1762026846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349272.9166666667,
            "unit": "ns",
            "range": "± 60421.082899695946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336491.05263157893,
            "unit": "ns",
            "range": "± 59872.6885037528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260347.67441860464,
            "unit": "ns",
            "range": "± 18233.85814256922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5220547.872340426,
            "unit": "ns",
            "range": "± 428464.8078367279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4957089.247311828,
            "unit": "ns",
            "range": "± 419821.2439117924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19352.808988764045,
            "unit": "ns",
            "range": "± 1717.9592734907396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110641.93548387097,
            "unit": "ns",
            "range": "± 23642.3961605668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100719.35483870968,
            "unit": "ns",
            "range": "± 19042.071601682168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122801.0989010989,
            "unit": "ns",
            "range": "± 21644.837693524034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6814.606741573034,
            "unit": "ns",
            "range": "± 1404.7444414779245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19903.44827586207,
            "unit": "ns",
            "range": "± 2432.4094799411255"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d715abb2338f0127016299c566534770829eeb70",
          "message": "Merge pull request #3284 from riemannulus/fix/currency/backward-compability\n\nFix `Currency` backward compability broken bug",
          "timestamp": "2023-07-12T15:23:10+09:00",
          "tree_id": "e2435a1e15e4c6a5892adedd6a459739ba907255",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d715abb2338f0127016299c566534770829eeb70"
        },
        "date": 1689144990527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428250,
            "unit": "ns",
            "range": "± 113887.05023191318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626644.4444444445,
            "unit": "ns",
            "range": "± 110077.79181820614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1803480.2083333333,
            "unit": "ns",
            "range": "± 111000.48138330103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5011661.333333333,
            "unit": "ns",
            "range": "± 250476.74644907002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45880.645161290326,
            "unit": "ns",
            "range": "± 2628.4918003410294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803115.7894736845,
            "unit": "ns",
            "range": "± 166988.9625865464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20474350,
            "unit": "ns",
            "range": "± 229164.998502087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52953040,
            "unit": "ns",
            "range": "± 574670.4829726337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107031985.71428572,
            "unit": "ns",
            "range": "± 852842.1847492723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211665393.33333334,
            "unit": "ns",
            "range": "± 3184408.885596614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4901778.75,
            "unit": "ns",
            "range": "± 16458.198098532237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1559594.4921875,
            "unit": "ns",
            "range": "± 7734.912974996805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1200086.3978794643,
            "unit": "ns",
            "range": "± 3625.0685534946147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694595.089285714,
            "unit": "ns",
            "range": "± 14618.113345288364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846334.51171875,
            "unit": "ns",
            "range": "± 3604.6549874170046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790061.4713541666,
            "unit": "ns",
            "range": "± 1832.5332411632828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3503525,
            "unit": "ns",
            "range": "± 65077.26177398677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3638373.3333333335,
            "unit": "ns",
            "range": "± 58826.54243824037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277028.571428572,
            "unit": "ns",
            "range": "± 100984.53417656163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4151650,
            "unit": "ns",
            "range": "± 66919.9615212083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6397277.777777778,
            "unit": "ns",
            "range": "± 171263.46175799824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293297.9166666667,
            "unit": "ns",
            "range": "± 11399.822499240257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272605.2083333333,
            "unit": "ns",
            "range": "± 15830.386302376079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239759.18367346938,
            "unit": "ns",
            "range": "± 14283.887806655888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229835.714285715,
            "unit": "ns",
            "range": "± 68190.38514610125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3692716.6666666665,
            "unit": "ns",
            "range": "± 78996.59151247119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21514.285714285714,
            "unit": "ns",
            "range": "± 2116.7471640942454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91663.15789473684,
            "unit": "ns",
            "range": "± 7247.788402686931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76138.42105263157,
            "unit": "ns",
            "range": "± 5692.54576333271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101964.64646464646,
            "unit": "ns",
            "range": "± 17551.26202294944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5726.80412371134,
            "unit": "ns",
            "range": "± 897.8580372101248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19698.936170212764,
            "unit": "ns",
            "range": "± 1872.810244241448"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d715abb2338f0127016299c566534770829eeb70",
          "message": "Merge pull request #3284 from riemannulus/fix/currency/backward-compability\n\nFix `Currency` backward compability broken bug",
          "timestamp": "2023-07-12T15:23:10+09:00",
          "tree_id": "e2435a1e15e4c6a5892adedd6a459739ba907255",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d715abb2338f0127016299c566534770829eeb70"
        },
        "date": 1689145170477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1604920.707070707,
            "unit": "ns",
            "range": "± 136900.45933385863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3009156.3636363638,
            "unit": "ns",
            "range": "± 126541.60165532502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2062166.3157894737,
            "unit": "ns",
            "range": "± 119548.995217688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5852092.424242424,
            "unit": "ns",
            "range": "± 377884.7775719388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53660.215053763444,
            "unit": "ns",
            "range": "± 5248.750157334482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8299534.343434343,
            "unit": "ns",
            "range": "± 568492.1513578107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23989580,
            "unit": "ns",
            "range": "± 311685.57691549166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59999140,
            "unit": "ns",
            "range": "± 685602.2751670867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122232673.33333333,
            "unit": "ns",
            "range": "± 1516845.0897771178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243441135.7142857,
            "unit": "ns",
            "range": "± 2866833.025538579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5178864.84375,
            "unit": "ns",
            "range": "± 33976.91715813855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1708895.8984375,
            "unit": "ns",
            "range": "± 7710.6536884832485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290885.859375,
            "unit": "ns",
            "range": "± 7093.470185279753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2827740.625,
            "unit": "ns",
            "range": "± 13086.011572112046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878924.5572916666,
            "unit": "ns",
            "range": "± 5734.4469966642755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807844.8542668269,
            "unit": "ns",
            "range": "± 3538.935706597158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3883803.0303030303,
            "unit": "ns",
            "range": "± 121473.42941166312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4083860.4166666665,
            "unit": "ns",
            "range": "± 160016.3538711143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4751397.826086956,
            "unit": "ns",
            "range": "± 111872.42681475593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4069653.409090909,
            "unit": "ns",
            "range": "± 223250.70179131237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6956107.2727272725,
            "unit": "ns",
            "range": "± 293415.5262715984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300055,
            "unit": "ns",
            "range": "± 13287.555347717052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291965.85365853657,
            "unit": "ns",
            "range": "± 9843.642866238533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274698,
            "unit": "ns",
            "range": "± 23221.532936462052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4767928.571428572,
            "unit": "ns",
            "range": "± 74170.1803917225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4284605.555555556,
            "unit": "ns",
            "range": "± 87761.44451745796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28678.947368421053,
            "unit": "ns",
            "range": "± 3270.268865804042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118197.95918367348,
            "unit": "ns",
            "range": "± 10271.359234999005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112509,
            "unit": "ns",
            "range": "± 19712.612457484927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133815.306122449,
            "unit": "ns",
            "range": "± 25982.691907716227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6891.836734693878,
            "unit": "ns",
            "range": "± 1575.0583997935955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26268.08510638298,
            "unit": "ns",
            "range": "± 2725.9490905539533"
          }
        ]
      }
    ]
  }
}