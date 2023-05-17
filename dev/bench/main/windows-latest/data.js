window.BENCHMARK_DATA = {
  "lastUpdate": 1684285818317,
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
      }
    ]
  }
}