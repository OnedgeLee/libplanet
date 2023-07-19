window.BENCHMARK_DATA = {
  "lastUpdate": 1689752409211,
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
          "id": "f040cdf1aecb6f711eff50e1ce4583d091bf5061",
          "message": "Release 2.6.0",
          "timestamp": "2023-07-19T16:17:54+09:00",
          "tree_id": "6b5f9f2c1707a9486cea6187f894f6e0483f6c6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f040cdf1aecb6f711eff50e1ce4583d091bf5061"
        },
        "date": 1689752135616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342705.9692307692,
            "unit": "ns",
            "range": "± 15658.120988972098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335792.77777777775,
            "unit": "ns",
            "range": "± 13636.098164350342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319543.5,
            "unit": "ns",
            "range": "± 21011.48366123784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5376258.055555556,
            "unit": "ns",
            "range": "± 113402.96484166139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4740535.736842105,
            "unit": "ns",
            "range": "± 104773.95020595641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24936.444444444445,
            "unit": "ns",
            "range": "± 1533.983681491152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111008.3373493976,
            "unit": "ns",
            "range": "± 5772.628215895586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106070.44,
            "unit": "ns",
            "range": "± 10617.825136661808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119869.01041666667,
            "unit": "ns",
            "range": "± 14065.972390653524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7987.104166666667,
            "unit": "ns",
            "range": "± 812.6842913802014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25196.873684210525,
            "unit": "ns",
            "range": "± 1818.0300318313055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746775.90625,
            "unit": "ns",
            "range": "± 76047.46663255237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3323173.033333333,
            "unit": "ns",
            "range": "± 148446.32816462047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2331894.1134020616,
            "unit": "ns",
            "range": "± 154283.74842220344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6294962.573770491,
            "unit": "ns",
            "range": "± 279921.840799562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7274453.127864583,
            "unit": "ns",
            "range": "± 44800.953302569396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2263025.61796875,
            "unit": "ns",
            "range": "± 11623.768384474883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1655116.7940104166,
            "unit": "ns",
            "range": "± 7460.526797127961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161744.0245535714,
            "unit": "ns",
            "range": "± 6091.985547268175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997578.8498046875,
            "unit": "ns",
            "range": "± 4367.1950463524845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904100.54609375,
            "unit": "ns",
            "range": "± 5837.960243326758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4303799.583333333,
            "unit": "ns",
            "range": "± 141033.10986742997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4580678.8125,
            "unit": "ns",
            "range": "± 87786.46551887046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5435726.476190476,
            "unit": "ns",
            "range": "± 116034.55694258456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4926125.23255814,
            "unit": "ns",
            "range": "± 168342.34425629978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8050914.934782608,
            "unit": "ns",
            "range": "± 307962.6011218752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10231739.96875,
            "unit": "ns",
            "range": "± 305084.22346100665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26424616.588235293,
            "unit": "ns",
            "range": "± 528547.4247580649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66000432.46666667,
            "unit": "ns",
            "range": "± 687351.8054132381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132573145,
            "unit": "ns",
            "range": "± 1502732.1763430154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264067051.57142857,
            "unit": "ns",
            "range": "± 1511712.9104632097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56454.45744680851,
            "unit": "ns",
            "range": "± 4222.43308971196"
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
          "id": "d4b7fb4ddff53907b8e97d43c7928e32147fd3bf",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:25:42+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d4b7fb4ddff53907b8e97d43c7928e32147fd3bf"
        },
        "date": 1689752330075,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269253.75,
            "unit": "ns",
            "range": "± 8216.606626315568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260615.5,
            "unit": "ns",
            "range": "± 7020.686984956724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228982.38461538462,
            "unit": "ns",
            "range": "± 3058.9681413417156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4191573,
            "unit": "ns",
            "range": "± 44522.66074066746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3752557,
            "unit": "ns",
            "range": "± 20098.25770481687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16999.263157894737,
            "unit": "ns",
            "range": "± 1242.4386984366272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78761.41379310345,
            "unit": "ns",
            "range": "± 4279.078257494367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71091.61538461539,
            "unit": "ns",
            "range": "± 655.088739340142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75496.65333333334,
            "unit": "ns",
            "range": "± 3613.666646905184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4263.04347826087,
            "unit": "ns",
            "range": "± 301.3586054485232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15906.125,
            "unit": "ns",
            "range": "± 1571.587901321128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310074.9263157896,
            "unit": "ns",
            "range": "± 78450.30468273314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2512881.8285714285,
            "unit": "ns",
            "range": "± 80469.27518203882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716558.4105263157,
            "unit": "ns",
            "range": "± 115420.49560420873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4768984.787878788,
            "unit": "ns",
            "range": "± 140896.2590442782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6464995.044642857,
            "unit": "ns",
            "range": "± 19752.73793925207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884141.0514787945,
            "unit": "ns",
            "range": "± 5117.68266370069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333996.3106863839,
            "unit": "ns",
            "range": "± 3580.1989232852143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546629.9674479165,
            "unit": "ns",
            "range": "± 7107.673183667465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800304.6012369791,
            "unit": "ns",
            "range": "± 881.561158884766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743064.4485677084,
            "unit": "ns",
            "range": "± 449.3318175704571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272056.5714285714,
            "unit": "ns",
            "range": "± 28822.839620727824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3355410.325,
            "unit": "ns",
            "range": "± 97749.42452486843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4195906.333333333,
            "unit": "ns",
            "range": "± 69329.19371135558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3706571.476190476,
            "unit": "ns",
            "range": "± 128433.52543958639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6188104.136363637,
            "unit": "ns",
            "range": "± 149344.1366130415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7519563.071428572,
            "unit": "ns",
            "range": "± 11329.474795786062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18967149.8,
            "unit": "ns",
            "range": "± 140520.76397163313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49430835.666666664,
            "unit": "ns",
            "range": "± 412418.09419233544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96672331.26666667,
            "unit": "ns",
            "range": "± 758139.8044006383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194453244.4,
            "unit": "ns",
            "range": "± 1146639.933698506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45545.20987654321,
            "unit": "ns",
            "range": "± 2057.445866335549"
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
          "id": "92d849c4a64513022b6a324844535877aba16760",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:24:44+09:00",
          "tree_id": "6b5f9f2c1707a9486cea6187f894f6e0483f6c6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/92d849c4a64513022b6a324844535877aba16760"
        },
        "date": 1689752396294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294742.35714285716,
            "unit": "ns",
            "range": "± 10787.728820898328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297141.3953488372,
            "unit": "ns",
            "range": "± 10846.212940446158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287742.046875,
            "unit": "ns",
            "range": "± 13326.555771983982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4780783.642857143,
            "unit": "ns",
            "range": "± 55557.88852886432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4248290.214285715,
            "unit": "ns",
            "range": "± 32180.548551949756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25118.052083333332,
            "unit": "ns",
            "range": "± 2070.5589093910785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103097.03296703297,
            "unit": "ns",
            "range": "± 6096.503375707441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88165.82291666667,
            "unit": "ns",
            "range": "± 5793.372829080868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107592.15625,
            "unit": "ns",
            "range": "± 15980.6550628717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5320.469387755102,
            "unit": "ns",
            "range": "± 833.822055778518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20574.73404255319,
            "unit": "ns",
            "range": "± 1984.7846456974582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505940.4594594594,
            "unit": "ns",
            "range": "± 74684.12357080606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2913560.4285714286,
            "unit": "ns",
            "range": "± 68476.91132679059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1955946.4933333334,
            "unit": "ns",
            "range": "± 98822.83720339651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5243348.4878048785,
            "unit": "ns",
            "range": "± 188656.84440951538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6137068.761979166,
            "unit": "ns",
            "range": "± 22533.384062175188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909598.0399739584,
            "unit": "ns",
            "range": "± 4402.06795190524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397495.6532451923,
            "unit": "ns",
            "range": "± 2370.0939901882675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639243.1802083333,
            "unit": "ns",
            "range": "± 2314.7675689038842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846881.7003455529,
            "unit": "ns",
            "range": "± 396.57213228396944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765523.9154296875,
            "unit": "ns",
            "range": "± 1030.5319923888312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3728471.411764706,
            "unit": "ns",
            "range": "± 58230.56202401238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3890553.727272727,
            "unit": "ns",
            "range": "± 94250.83309177436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4578204.363636363,
            "unit": "ns",
            "range": "± 110931.05186450832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4238065.074074074,
            "unit": "ns",
            "range": "± 115944.87880484945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6678634.925925926,
            "unit": "ns",
            "range": "± 184912.52263808125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8512507,
            "unit": "ns",
            "range": "± 152542.30287459842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22797886.35714286,
            "unit": "ns",
            "range": "± 158182.76991778414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57475532.35714286,
            "unit": "ns",
            "range": "± 150966.58606490845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115554222.5,
            "unit": "ns",
            "range": "± 334647.3501019681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230144689.8,
            "unit": "ns",
            "range": "± 697895.7233570275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50413.833333333336,
            "unit": "ns",
            "range": "± 2725.794663983478"
          }
        ]
      }
    ]
  }
}