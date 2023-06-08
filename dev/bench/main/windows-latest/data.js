window.BENCHMARK_DATA = {
  "lastUpdate": 1686240804342,
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
      }
    ]
  }
}