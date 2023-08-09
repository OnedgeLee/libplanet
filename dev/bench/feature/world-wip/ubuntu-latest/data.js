window.BENCHMARK_DATA = {
  "lastUpdate": 1691550328113,
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
          "id": "324bd13c01474b989b9dae721079349d289b93c3",
          "message": "wip: test fix",
          "timestamp": "2023-08-08T23:12:37+09:00",
          "tree_id": "539ccc7cb1c6bf65f3aa7baec9e5c1c2e3a31e88",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324bd13c01474b989b9dae721079349d289b93c3"
        },
        "date": 1691504951408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3501271.0631578946,
            "unit": "ns",
            "range": "± 200063.47648725435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4049413.5316455695,
            "unit": "ns",
            "range": "± 210213.45168513924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573635.492537313,
            "unit": "ns",
            "range": "± 216891.43948538313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4342191.818181818,
            "unit": "ns",
            "range": "± 298805.2621115948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7430493.59,
            "unit": "ns",
            "range": "± 508113.07988697174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8812471.684210526,
            "unit": "ns",
            "range": "± 302097.51451343467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22956502.133333333,
            "unit": "ns",
            "range": "± 423563.2497537776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57644806.69354839,
            "unit": "ns",
            "range": "± 2586011.9726305045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111541787.33333333,
            "unit": "ns",
            "range": "± 2031257.4639337386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221622327.15384614,
            "unit": "ns",
            "range": "± 3534924.9197424226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52504.86021505376,
            "unit": "ns",
            "range": "± 3882.8573314422383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194543.465745192,
            "unit": "ns",
            "range": "± 42531.188031817335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919244.9965820312,
            "unit": "ns",
            "range": "± 11934.35838515692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413849.5358072917,
            "unit": "ns",
            "range": "± 26102.10687457033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2738093.572395833,
            "unit": "ns",
            "range": "± 30764.164870142275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860459.9721354167,
            "unit": "ns",
            "range": "± 9270.071283170155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769634.3347981771,
            "unit": "ns",
            "range": "± 4344.611994417294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298881.1267605634,
            "unit": "ns",
            "range": "± 14624.186462285767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296439.2315789474,
            "unit": "ns",
            "range": "± 23106.57163106517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249074.35164835164,
            "unit": "ns",
            "range": "± 13418.871259348509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4537867.5227272725,
            "unit": "ns",
            "range": "± 160729.3987488358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4108500.926829268,
            "unit": "ns",
            "range": "± 216672.82732607718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22282.74226804124,
            "unit": "ns",
            "range": "± 4233.142470135589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104388.98979591837,
            "unit": "ns",
            "range": "± 10552.45722446301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75965.24,
            "unit": "ns",
            "range": "± 1993.096821531759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105876.86585365854,
            "unit": "ns",
            "range": "± 13854.743119513569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5498.030927835051,
            "unit": "ns",
            "range": "± 787.1443172105347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19642.35789473684,
            "unit": "ns",
            "range": "± 2009.0136667285028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695922.0588235294,
            "unit": "ns",
            "range": "± 91305.55875626695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928544.6301369863,
            "unit": "ns",
            "range": "± 144679.28528429766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160392.67,
            "unit": "ns",
            "range": "± 129122.65191967208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6170779,
            "unit": "ns",
            "range": "± 572500.3147867513"
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
          "id": "0acaa8512421a414931248c6895a8d7b9bf79651",
          "message": "fix test",
          "timestamp": "2023-08-09T11:42:28+09:00",
          "tree_id": "7fa0e4a5bd26f8b3b447b7de0732f1d1eae06668",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0acaa8512421a414931248c6895a8d7b9bf79651"
        },
        "date": 1691550100804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3916878.811111111,
            "unit": "ns",
            "range": "± 321142.5139138331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4452552.802197802,
            "unit": "ns",
            "range": "± 505952.6973960933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5259269.9130434785,
            "unit": "ns",
            "range": "± 313805.7701085863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4703717.25,
            "unit": "ns",
            "range": "± 324593.09315332345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8642537.466666667,
            "unit": "ns",
            "range": "± 419756.8486859897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9848975.157894736,
            "unit": "ns",
            "range": "± 614182.4198375745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26251430.615384616,
            "unit": "ns",
            "range": "± 706734.6114491395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67274167.74509804,
            "unit": "ns",
            "range": "± 2719155.472088213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131644096.42168675,
            "unit": "ns",
            "range": "± 6995709.935707955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250260671.0153846,
            "unit": "ns",
            "range": "± 11349441.524113046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65284.614583333336,
            "unit": "ns",
            "range": "± 12155.230458634747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7491505.497916667,
            "unit": "ns",
            "range": "± 131168.40029461173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2352437.770733173,
            "unit": "ns",
            "range": "± 31993.681995348234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1711758.9729166667,
            "unit": "ns",
            "range": "± 25212.971142995943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3195079.015885417,
            "unit": "ns",
            "range": "± 49513.41192211612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031931.1450892857,
            "unit": "ns",
            "range": "± 10278.032194404812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948634.2888671875,
            "unit": "ns",
            "range": "± 8140.148277211368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357433.0804597701,
            "unit": "ns",
            "range": "± 20798.93481016845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337973.39130434784,
            "unit": "ns",
            "range": "± 32777.09879482378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325177.4,
            "unit": "ns",
            "range": "± 31628.44516343129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5296866.603773585,
            "unit": "ns",
            "range": "± 197834.60760125823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4808989.166666667,
            "unit": "ns",
            "range": "± 187405.1423497247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25027.55,
            "unit": "ns",
            "range": "± 7218.972877183783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106272,
            "unit": "ns",
            "range": "± 10676.215596283793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124621.39175257731,
            "unit": "ns",
            "range": "± 20152.97286979677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124070.37894736842,
            "unit": "ns",
            "range": "± 16053.741565726245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10070.7,
            "unit": "ns",
            "range": "± 5169.095062743263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21153.577777777777,
            "unit": "ns",
            "range": "± 3834.4069695963926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762469.2688172043,
            "unit": "ns",
            "range": "± 127315.60686120858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3186258.25,
            "unit": "ns",
            "range": "± 244725.1165731725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317884.8333333335,
            "unit": "ns",
            "range": "± 244730.19593433122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6976773.204081632,
            "unit": "ns",
            "range": "± 667096.9850874628"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f6f3d48aed11a3c3883db57b87cd134dee39353d",
          "message": "fix test",
          "timestamp": "2023-08-09T11:46:58+09:00",
          "tree_id": "85a1d0e44b14a0b54b7bca7e6116d3602dc9bc35",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f6f3d48aed11a3c3883db57b87cd134dee39353d"
        },
        "date": 1691550313227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3838666.2,
            "unit": "ns",
            "range": "± 245416.24147261615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4069589.7974683545,
            "unit": "ns",
            "range": "± 210285.41426834563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4991340.626506024,
            "unit": "ns",
            "range": "± 265414.10607456195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4544000.75,
            "unit": "ns",
            "range": "± 85234.91992722232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7858021.03,
            "unit": "ns",
            "range": "± 514184.2637639291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9133842.844827587,
            "unit": "ns",
            "range": "± 396476.2821721442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24110294.285714287,
            "unit": "ns",
            "range": "± 953786.3532334124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60626375.37209302,
            "unit": "ns",
            "range": "± 2217261.7967825932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125999041.46666667,
            "unit": "ns",
            "range": "± 2159305.3786081257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245694378.32258064,
            "unit": "ns",
            "range": "± 7481265.509417598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55143.23655913978,
            "unit": "ns",
            "range": "± 4962.840478732372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6789105.734895834,
            "unit": "ns",
            "range": "± 114848.38324876499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2127955.273046875,
            "unit": "ns",
            "range": "± 37856.71837176052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1579483.01171875,
            "unit": "ns",
            "range": "± 22204.037790238202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3000045.3984375,
            "unit": "ns",
            "range": "± 29490.388402695324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945650.9180338542,
            "unit": "ns",
            "range": "± 9138.658718406452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850231.9950195312,
            "unit": "ns",
            "range": "± 13390.920361230179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322258.0987654321,
            "unit": "ns",
            "range": "± 16909.09729820381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319247.59375,
            "unit": "ns",
            "range": "± 18320.542592274087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277166.89898989897,
            "unit": "ns",
            "range": "± 19758.272763111898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4981620.828571429,
            "unit": "ns",
            "range": "± 163431.58668429495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4532825.370967742,
            "unit": "ns",
            "range": "± 205785.97047881884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21256.988636363636,
            "unit": "ns",
            "range": "± 1717.8634517766081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99599.6875,
            "unit": "ns",
            "range": "± 8503.05209391558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85541.87755102041,
            "unit": "ns",
            "range": "± 7871.331753425246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101138.0824742268,
            "unit": "ns",
            "range": "± 14886.75461167165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5687.585106382979,
            "unit": "ns",
            "range": "± 565.127683918098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20507.25,
            "unit": "ns",
            "range": "± 1790.054420100986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659575.7575757576,
            "unit": "ns",
            "range": "± 140263.0565957169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3108432.69,
            "unit": "ns",
            "range": "± 221416.7828939919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2344177.8846153845,
            "unit": "ns",
            "range": "± 119475.28389869942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6399541.292929293,
            "unit": "ns",
            "range": "± 431525.89101519063"
          }
        ]
      }
    ]
  }
}