window.BENCHMARK_DATA = {
  "lastUpdate": 1701044311843,
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
          "id": "95fc6b0769b298364917360c5cec98ffd7e3b245",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:06:59+09:00",
          "tree_id": "c9fc9a8bfa29a6b3372b78366db598670ca40ec6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/95fc6b0769b298364917360c5cec98ffd7e3b245"
        },
        "date": 1700450381562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005167.0103092784,
            "unit": "ns",
            "range": "± 98313.26707864497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1714524.2424242424,
            "unit": "ns",
            "range": "± 73446.78881938127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545859,
            "unit": "ns",
            "range": "± 171514.08287733264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5754883.695652174,
            "unit": "ns",
            "range": "± 352571.28849001694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33453.333333333336,
            "unit": "ns",
            "range": "± 1683.0902509351042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4966046.153846154,
            "unit": "ns",
            "range": "± 13351.817316044495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12818464.285714285,
            "unit": "ns",
            "range": "± 110876.58840865757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31557300,
            "unit": "ns",
            "range": "± 225071.57408597483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64405307.14285714,
            "unit": "ns",
            "range": "± 599444.1238659051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126226328.57142857,
            "unit": "ns",
            "range": "± 443572.7369519378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332159.765625,
            "unit": "ns",
            "range": "± 9241.939675516718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1021316.748046875,
            "unit": "ns",
            "range": "± 1576.7618255583066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719772.8450520834,
            "unit": "ns",
            "range": "± 1540.2000482150402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903476.674107143,
            "unit": "ns",
            "range": "± 3835.7428012021905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613658.4244791666,
            "unit": "ns",
            "range": "± 1682.8261624066802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555769.6484375,
            "unit": "ns",
            "range": "± 2346.2399975921808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156071.4285714286,
            "unit": "ns",
            "range": "± 78278.70559180778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259564.285714286,
            "unit": "ns",
            "range": "± 28959.69632073187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2715944,
            "unit": "ns",
            "range": "± 70265.2775795651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2710490.425531915,
            "unit": "ns",
            "range": "± 163854.705550374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6385837.037037037,
            "unit": "ns",
            "range": "± 174114.53159906017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164259.55056179775,
            "unit": "ns",
            "range": "± 8797.581267561345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155548.5294117647,
            "unit": "ns",
            "range": "± 5603.103954460882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137784,
            "unit": "ns",
            "range": "± 2796.6765991083057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2570160,
            "unit": "ns",
            "range": "± 30611.05775929439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421506.6666666665,
            "unit": "ns",
            "range": "± 31991.16991266422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9551.578947368422,
            "unit": "ns",
            "range": "± 1394.355121124956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50388.76404494382,
            "unit": "ns",
            "range": "± 3682.527485617576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42812.5,
            "unit": "ns",
            "range": "± 1272.982274412233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46195.555555555555,
            "unit": "ns",
            "range": "± 5257.8653999788385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2176.530612244898,
            "unit": "ns",
            "range": "± 355.16832669924673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9221.59090909091,
            "unit": "ns",
            "range": "± 1090.7604500790426"
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
          "id": "b2d054b77502ba95398e99b7f91b3369a8adf951",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:42:56+09:00",
          "tree_id": "2122fe1694da7bf180ea40e3269d0f3dc25f5d63",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b2d054b77502ba95398e99b7f91b3369a8adf951"
        },
        "date": 1700452551858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027834,
            "unit": "ns",
            "range": "± 121306.12017503152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729758.6206896552,
            "unit": "ns",
            "range": "± 75711.12929958524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1517496.8421052631,
            "unit": "ns",
            "range": "± 131357.98127727438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5847070.786516854,
            "unit": "ns",
            "range": "± 364834.9630630786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34461.25,
            "unit": "ns",
            "range": "± 1695.2647192560903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5010957.142857143,
            "unit": "ns",
            "range": "± 31333.239030331166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12979413.333333334,
            "unit": "ns",
            "range": "± 116384.5342368298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33256700,
            "unit": "ns",
            "range": "± 414635.6696805384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67263446.66666667,
            "unit": "ns",
            "range": "± 901946.9661845556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135855326.66666666,
            "unit": "ns",
            "range": "± 1957205.7014553999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3286647.109375,
            "unit": "ns",
            "range": "± 16412.417113769607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068555.1171875,
            "unit": "ns",
            "range": "± 3946.232457028095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751284.0690104166,
            "unit": "ns",
            "range": "± 2972.601703265323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929143.3872767857,
            "unit": "ns",
            "range": "± 3416.481310839216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608984.1448102678,
            "unit": "ns",
            "range": "± 2250.9569756335713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555679.1666666666,
            "unit": "ns",
            "range": "± 1438.4428302409658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2213081.081081081,
            "unit": "ns",
            "range": "± 73494.74220739966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486392.6829268294,
            "unit": "ns",
            "range": "± 84569.64996452304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3004285.714285714,
            "unit": "ns",
            "range": "± 84010.0951353829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2957531.25,
            "unit": "ns",
            "range": "± 137014.63121384764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6719925.675675675,
            "unit": "ns",
            "range": "± 145108.99620899037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188926.08695652173,
            "unit": "ns",
            "range": "± 12618.857940741675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182957.53424657535,
            "unit": "ns",
            "range": "± 9105.979686878214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137730.76923076922,
            "unit": "ns",
            "range": "± 1441.8648892924602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2636586.6666666665,
            "unit": "ns",
            "range": "± 43606.87800707371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2403047.0588235296,
            "unit": "ns",
            "range": "± 48398.95553685868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11325,
            "unit": "ns",
            "range": "± 1076.0760012376265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56650,
            "unit": "ns",
            "range": "± 3756.3738934757557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45559.87654320987,
            "unit": "ns",
            "range": "± 2401.5414288676975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59383.87096774193,
            "unit": "ns",
            "range": "± 7982.403069613712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2738.144329896907,
            "unit": "ns",
            "range": "± 503.207068662484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10512.37113402062,
            "unit": "ns",
            "range": "± 1626.362104255407"
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
          "id": "9e6284a235a84f88bb3b536146a1ca39f02256c6",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-27T09:05:46+09:00",
          "tree_id": "30446fafd3ccea90d584846b5fb459fff2314d71",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9e6284a235a84f88bb3b536146a1ca39f02256c6"
        },
        "date": 1701044284450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1105248.4848484849,
            "unit": "ns",
            "range": "± 145143.9175746107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1857277.7777777778,
            "unit": "ns",
            "range": "± 77591.58354150267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612795.9595959596,
            "unit": "ns",
            "range": "± 139837.47557555986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5652909.677419355,
            "unit": "ns",
            "range": "± 153023.9727511972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36034.782608695656,
            "unit": "ns",
            "range": "± 2613.171824658441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5211935.714285715,
            "unit": "ns",
            "range": "± 29730.807827335164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13543492.857142856,
            "unit": "ns",
            "range": "± 99440.56179281334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33600886.666666664,
            "unit": "ns",
            "range": "± 190467.33828239675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67529160,
            "unit": "ns",
            "range": "± 456640.4693910892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133377861.53846154,
            "unit": "ns",
            "range": "± 821018.5975750504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329314.5052083335,
            "unit": "ns",
            "range": "± 18346.944257620635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073015.6947544643,
            "unit": "ns",
            "range": "± 2691.3427270129764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731905.0432477678,
            "unit": "ns",
            "range": "± 1251.5673635817195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1880780.56640625,
            "unit": "ns",
            "range": "± 6999.684340412775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614265.8528645834,
            "unit": "ns",
            "range": "± 2361.9521937289974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563561.9856770834,
            "unit": "ns",
            "range": "± 2992.807580817348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2247333.3333333335,
            "unit": "ns",
            "range": "± 33825.04707348993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2333545.4545454546,
            "unit": "ns",
            "range": "± 68523.05826320124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2887310.3448275863,
            "unit": "ns",
            "range": "± 76095.96546855249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2875088.888888889,
            "unit": "ns",
            "range": "± 82434.69026283873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6809541.860465116,
            "unit": "ns",
            "range": "± 223320.06630731566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185685.9375,
            "unit": "ns",
            "range": "± 7722.321124609317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171173.0158730159,
            "unit": "ns",
            "range": "± 6313.329635017417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142834.04255319148,
            "unit": "ns",
            "range": "± 5565.080435988272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2785553.846153846,
            "unit": "ns",
            "range": "± 38935.55819951336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535220,
            "unit": "ns",
            "range": "± 40442.34343923634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13837.755102040815,
            "unit": "ns",
            "range": "± 2474.2598729293036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62067.010309278354,
            "unit": "ns",
            "range": "± 6831.875682683535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51577.31958762887,
            "unit": "ns",
            "range": "± 5044.06633982443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69237.5,
            "unit": "ns",
            "range": "± 12478.775665315214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3045.360824742268,
            "unit": "ns",
            "range": "± 535.9999647381637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13477.551020408164,
            "unit": "ns",
            "range": "± 2140.841467295449"
          }
        ]
      }
    ]
  }
}