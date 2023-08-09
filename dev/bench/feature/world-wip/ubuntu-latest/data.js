window.BENCHMARK_DATA = {
  "lastUpdate": 1691585979508,
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
          "id": "595b0867bda8bf47eb16023dc4214aae4828c7a6",
          "message": "test: fix",
          "timestamp": "2023-08-09T12:54:45+09:00",
          "tree_id": "29b3b292330f028d9ac0c50fb7bec793d35b7cf9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/595b0867bda8bf47eb16023dc4214aae4828c7a6"
        },
        "date": 1691554261887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3633323.846153846,
            "unit": "ns",
            "range": "± 94893.92864022116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3760051.075,
            "unit": "ns",
            "range": "± 133338.84673717318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4582352.465116279,
            "unit": "ns",
            "range": "± 153240.465205343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4094622.3243243243,
            "unit": "ns",
            "range": "± 134763.72639365165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7032251.353658536,
            "unit": "ns",
            "range": "± 250983.3550759453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8643808.55,
            "unit": "ns",
            "range": "± 195550.88640245752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20895398.714285713,
            "unit": "ns",
            "range": "± 167207.6425265804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53680445.07692308,
            "unit": "ns",
            "range": "± 433217.00293491513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107554982.28571428,
            "unit": "ns",
            "range": "± 1545245.2958007087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216931741.7857143,
            "unit": "ns",
            "range": "± 3228683.4768255996"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69618.94666666667,
            "unit": "ns",
            "range": "± 3519.4543607095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6504288.622395833,
            "unit": "ns",
            "range": "± 39153.23791552554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1964560.016796875,
            "unit": "ns",
            "range": "± 11429.450002495167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1418267.3109654018,
            "unit": "ns",
            "range": "± 6110.356853380054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2761577.3177083335,
            "unit": "ns",
            "range": "± 12074.455135304983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840512.4927455357,
            "unit": "ns",
            "range": "± 4295.108619228099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797185.7440655048,
            "unit": "ns",
            "range": "± 6497.068022174186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325308.3076923077,
            "unit": "ns",
            "range": "± 13350.104650450454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313302.48148148146,
            "unit": "ns",
            "range": "± 8060.476443116032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288828.75,
            "unit": "ns",
            "range": "± 4482.7623002908695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4434790.266666667,
            "unit": "ns",
            "range": "± 61604.97309293262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4093278.6428571427,
            "unit": "ns",
            "range": "± 57427.233522897535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27886.908045977012,
            "unit": "ns",
            "range": "± 1547.5416636551222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122457.15151515152,
            "unit": "ns",
            "range": "± 5704.809412962754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112232.42105263157,
            "unit": "ns",
            "range": "± 3872.5813210562096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120845.9574468085,
            "unit": "ns",
            "range": "± 17234.34306992678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8661.102040816326,
            "unit": "ns",
            "range": "± 884.1941580150578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27589.177083333332,
            "unit": "ns",
            "range": "± 1604.0159927985471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542135.1505376345,
            "unit": "ns",
            "range": "± 116137.07213984783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2901065.52,
            "unit": "ns",
            "range": "± 108488.12018236684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2144906.7959183673,
            "unit": "ns",
            "range": "± 142320.9971860083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5769889.5344827585,
            "unit": "ns",
            "range": "± 218702.07581613914"
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
          "id": "f90581cb274e19a5252cca441161d626fa07fc5e",
          "message": "test: fix",
          "timestamp": "2023-08-09T13:25:16+09:00",
          "tree_id": "963bb15b7ce4dfddec78357d92ca86a02e0122a3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f90581cb274e19a5252cca441161d626fa07fc5e"
        },
        "date": 1691555957682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3587439.8235294116,
            "unit": "ns",
            "range": "± 115349.93585120454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3751906,
            "unit": "ns",
            "range": "± 149766.7327489375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4520311.892857143,
            "unit": "ns",
            "range": "± 126547.57607387537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4216396.847826087,
            "unit": "ns",
            "range": "± 160522.4931686062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6844888.24137931,
            "unit": "ns",
            "range": "± 192256.24416697017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8259763.285714285,
            "unit": "ns",
            "range": "± 196187.61780401506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22673015,
            "unit": "ns",
            "range": "± 331061.210590601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56745152.2,
            "unit": "ns",
            "range": "± 775695.0066869251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113245336.86666666,
            "unit": "ns",
            "range": "± 1568112.7931134228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224796366.8,
            "unit": "ns",
            "range": "± 3033495.2110600593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48748.76,
            "unit": "ns",
            "range": "± 2425.081624928853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6110303.161272322,
            "unit": "ns",
            "range": "± 24508.813253653283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898788.6240234375,
            "unit": "ns",
            "range": "± 4031.664987477208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389650.4529947916,
            "unit": "ns",
            "range": "± 4121.504693935702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650091.096875,
            "unit": "ns",
            "range": "± 3887.5288609208355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835185.9323567708,
            "unit": "ns",
            "range": "± 1052.1973633611005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778729.4543619792,
            "unit": "ns",
            "range": "± 558.4955069615102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293743.8510638298,
            "unit": "ns",
            "range": "± 10457.102830505713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278680.81395348837,
            "unit": "ns",
            "range": "± 10306.994722161151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251593.02702702704,
            "unit": "ns",
            "range": "± 7854.5909274855385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4492571.6875,
            "unit": "ns",
            "range": "± 84130.20968214986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174517.8,
            "unit": "ns",
            "range": "± 62130.842797622325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19931.59375,
            "unit": "ns",
            "range": "± 1518.3752020750062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93421.49367088608,
            "unit": "ns",
            "range": "± 4823.74022314055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75236.35714285714,
            "unit": "ns",
            "range": "± 2136.3971786074576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94382.48958333333,
            "unit": "ns",
            "range": "± 11602.791556113863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5610.541666666667,
            "unit": "ns",
            "range": "± 820.9849273142552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19390.791666666668,
            "unit": "ns",
            "range": "± 1833.156828026547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506744.6976744186,
            "unit": "ns",
            "range": "± 81957.33263021964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817280.0222222223,
            "unit": "ns",
            "range": "± 99751.2711309961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2015403.8055555555,
            "unit": "ns",
            "range": "± 97151.79652186803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5425524.518518519,
            "unit": "ns",
            "range": "± 146109.62778795988"
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
          "id": "16336d1b3f6ca8ee98311a03c44201df0a615eee",
          "message": "test: fix",
          "timestamp": "2023-08-09T17:05:15+09:00",
          "tree_id": "6550a67fca37def694f76ba7181eddd9fb9a1999",
          "url": "https://github.com/OnedgeLee/libplanet/commit/16336d1b3f6ca8ee98311a03c44201df0a615eee"
        },
        "date": 1691569315067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3976577.9206349207,
            "unit": "ns",
            "range": "± 182656.62453898974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4396558.864864865,
            "unit": "ns",
            "range": "± 147327.92806961885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5183465.217391305,
            "unit": "ns",
            "range": "± 128072.81520041512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4764269.641025641,
            "unit": "ns",
            "range": "± 165177.17222480697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7805646.369565218,
            "unit": "ns",
            "range": "± 294954.00454265624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8820011.88372093,
            "unit": "ns",
            "range": "± 325473.0116484102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25848499.933333334,
            "unit": "ns",
            "range": "± 421344.099717536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67865346.33333333,
            "unit": "ns",
            "range": "± 834762.9052112143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133922163.4375,
            "unit": "ns",
            "range": "± 2514022.015760587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260796055.7142857,
            "unit": "ns",
            "range": "± 6014161.264111956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58710.68817204301,
            "unit": "ns",
            "range": "± 4199.2552108224445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6482234.058854166,
            "unit": "ns",
            "range": "± 70376.26094546761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2005910.2608816964,
            "unit": "ns",
            "range": "± 3915.026747125629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439395.713671875,
            "unit": "ns",
            "range": "± 4893.548985453661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2761164.8743990385,
            "unit": "ns",
            "range": "± 7098.716798800489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890982.8591796875,
            "unit": "ns",
            "range": "± 2074.0245346171973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788590.0831380208,
            "unit": "ns",
            "range": "± 978.7054199131336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349720.0833333333,
            "unit": "ns",
            "range": "± 15002.439891159474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320262.6721311475,
            "unit": "ns",
            "range": "± 14339.393599127909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289899.7346938776,
            "unit": "ns",
            "range": "± 21966.757198680785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5118104.695652174,
            "unit": "ns",
            "range": "± 128734.42795553769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4661927.411764706,
            "unit": "ns",
            "range": "± 95450.72857439253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29027.98947368421,
            "unit": "ns",
            "range": "± 3729.5536710167344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116502.87755102041,
            "unit": "ns",
            "range": "± 11767.498109540857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93971.86734693877,
            "unit": "ns",
            "range": "± 9659.772718973349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131688.94505494504,
            "unit": "ns",
            "range": "± 16687.496152217707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8562.469387755102,
            "unit": "ns",
            "range": "± 1381.3200932746029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25827.319587628866,
            "unit": "ns",
            "range": "± 3286.683442780858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1709181.7303370787,
            "unit": "ns",
            "range": "± 94740.8407889846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3367529.9292929294,
            "unit": "ns",
            "range": "± 200695.83261214642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2421755.6195652173,
            "unit": "ns",
            "range": "± 132692.74706603447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6084637.611111111,
            "unit": "ns",
            "range": "± 129480.65014744316"
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
          "id": "cafd97bab017b07b2eb2421237f4d12511cad88e",
          "message": "test: fix",
          "timestamp": "2023-08-09T21:45:53+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/cafd97bab017b07b2eb2421237f4d12511cad88e"
        },
        "date": 1691585965590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261353.4,
            "unit": "ns",
            "range": "± 49699.08063794685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3390392.75,
            "unit": "ns",
            "range": "± 43816.5641243887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4316542.68,
            "unit": "ns",
            "range": "± 114874.90085404497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796725.1578947366,
            "unit": "ns",
            "range": "± 79825.35179395854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6464964.6,
            "unit": "ns",
            "range": "± 206965.51168557478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7559857.142857143,
            "unit": "ns",
            "range": "± 13870.192959986272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19381935.866666667,
            "unit": "ns",
            "range": "± 130613.79543298451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49566660.538461536,
            "unit": "ns",
            "range": "± 249997.6056454059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98492097.61538461,
            "unit": "ns",
            "range": "± 666991.0004967006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196352886.85714287,
            "unit": "ns",
            "range": "± 1369176.6373809006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46450.56179775281,
            "unit": "ns",
            "range": "± 2575.1488745801234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6376529.017708333,
            "unit": "ns",
            "range": "± 17644.526021942733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885614.50625,
            "unit": "ns",
            "range": "± 2399.4049227914225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386870.3328683036,
            "unit": "ns",
            "range": "± 1121.7032407704962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631824.3174479166,
            "unit": "ns",
            "range": "± 3438.1667231448932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823695.1150251116,
            "unit": "ns",
            "range": "± 904.7193614975137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748015.068359375,
            "unit": "ns",
            "range": "± 573.0706056626635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273593.2631578947,
            "unit": "ns",
            "range": "± 10651.614254801134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263604.8333333333,
            "unit": "ns",
            "range": "± 9615.540295098694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226776.92307692306,
            "unit": "ns",
            "range": "± 1742.1987286921117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4149358.3571428573,
            "unit": "ns",
            "range": "± 25800.19043640851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3787443.8571428573,
            "unit": "ns",
            "range": "± 35326.884821744345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17314.583333333332,
            "unit": "ns",
            "range": "± 1113.5509032078814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81859.9857142857,
            "unit": "ns",
            "range": "± 3949.2577196259103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71333.33333333333,
            "unit": "ns",
            "range": "± 651.3389472789297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83359.1836734694,
            "unit": "ns",
            "range": "± 10696.765449392555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4195.744680851064,
            "unit": "ns",
            "range": "± 306.5292680572339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16634.40860215054,
            "unit": "ns",
            "range": "± 1191.4089780460267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356825.5666666667,
            "unit": "ns",
            "range": "± 74916.73103152968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2530319.4516129033,
            "unit": "ns",
            "range": "± 72033.73938039439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1825495.7362637362,
            "unit": "ns",
            "range": "± 102271.92080960063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5278718.965116279,
            "unit": "ns",
            "range": "± 286156.78367346094"
          }
        ]
      }
    ]
  }
}