window.BENCHMARK_DATA = {
  "lastUpdate": 1686716217475,
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
          "id": "335fd39e76d19f625d79562010f69e99263dfeec",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:00:09+09:00",
          "tree_id": "2a1c21dc2c292847a99ea06984255271aafb7ddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/335fd39e76d19f625d79562010f69e99263dfeec"
        },
        "date": 1686716100801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478723.6129032257,
            "unit": "ns",
            "range": "± 83818.48861288617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2843747.2333333334,
            "unit": "ns",
            "range": "± 84889.96376311101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413419.527777778,
            "unit": "ns",
            "range": "± 118942.25172012148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5881466.833333333,
            "unit": "ns",
            "range": "± 244309.33994910616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506757.5588235296,
            "unit": "ns",
            "range": "± 103996.08709340396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3732322.1363636362,
            "unit": "ns",
            "range": "± 140206.13781916618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4554754.692307692,
            "unit": "ns",
            "range": "± 53618.30788139535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4663315.952380952,
            "unit": "ns",
            "range": "± 108269.12646109055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7218618.038461538,
            "unit": "ns",
            "range": "± 196137.6363296919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8161067.785714285,
            "unit": "ns",
            "range": "± 53350.88622316132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22762929.64285714,
            "unit": "ns",
            "range": "± 150793.3556955994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56373485,
            "unit": "ns",
            "range": "± 586265.6578406121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111360249.2,
            "unit": "ns",
            "range": "± 940470.8733829788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224409888.5,
            "unit": "ns",
            "range": "± 2299650.267646089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6130640.895833333,
            "unit": "ns",
            "range": "± 28026.502058986385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878243.9831194195,
            "unit": "ns",
            "range": "± 2143.048517642629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402019.6006510416,
            "unit": "ns",
            "range": "± 2923.17087232996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654276.619010417,
            "unit": "ns",
            "range": "± 3678.013892693113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829976.7978515625,
            "unit": "ns",
            "range": "± 810.9550196453149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759899.9056222098,
            "unit": "ns",
            "range": "± 1176.1102865074727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46399.573033707864,
            "unit": "ns",
            "range": "± 2318.0474389590386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291180.4130434783,
            "unit": "ns",
            "range": "± 11189.751316025426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276899.6923076923,
            "unit": "ns",
            "range": "± 8104.232023597776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244980.66666666666,
            "unit": "ns",
            "range": "± 6676.77309181166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4644898.266666667,
            "unit": "ns",
            "range": "± 41398.664477193444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4186907.8,
            "unit": "ns",
            "range": "± 45824.23141464412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19979.22340425532,
            "unit": "ns",
            "range": "± 1307.5112627591589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89380.36781609195,
            "unit": "ns",
            "range": "± 4671.622560900045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76757.0425531915,
            "unit": "ns",
            "range": "± 2962.088048462691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95855.06185567011,
            "unit": "ns",
            "range": "± 12869.204344265707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5945.546391752578,
            "unit": "ns",
            "range": "± 976.4732141382851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19479.728260869564,
            "unit": "ns",
            "range": "± 1337.2590805163056"
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
          "id": "e99d507bbe722d4ed8adda1eb5b9e06edf71c71f",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:03:12+09:00",
          "tree_id": "668448bb952bb72b9773743c6375fe8071a1881f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e99d507bbe722d4ed8adda1eb5b9e06edf71c71f"
        },
        "date": 1686716205441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1501334.1836734693,
            "unit": "ns",
            "range": "± 87599.27110313742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872398.4545454546,
            "unit": "ns",
            "range": "± 105863.25873161545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2461610.7710843375,
            "unit": "ns",
            "range": "± 131183.7861064676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5775869.3,
            "unit": "ns",
            "range": "± 127148.07695219816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3402495.4615384615,
            "unit": "ns",
            "range": "± 92646.63712935544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541430.603773585,
            "unit": "ns",
            "range": "± 146929.995205375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533334.333333333,
            "unit": "ns",
            "range": "± 107102.98868207802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436744.041666667,
            "unit": "ns",
            "range": "± 111210.76170887308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7059719.055555556,
            "unit": "ns",
            "range": "± 150350.29878351043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7983775.307692308,
            "unit": "ns",
            "range": "± 23518.23499040909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21612926.2,
            "unit": "ns",
            "range": "± 377259.5007935898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53762300.666666664,
            "unit": "ns",
            "range": "± 928596.3000527553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108152830.8,
            "unit": "ns",
            "range": "± 1926479.4654252166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212071435.93333334,
            "unit": "ns",
            "range": "± 2789558.370040561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6126276.196354167,
            "unit": "ns",
            "range": "± 28276.806871065357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862180.912890625,
            "unit": "ns",
            "range": "± 7939.899370367399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394660.72109375,
            "unit": "ns",
            "range": "± 5690.0918749410075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664303.40625,
            "unit": "ns",
            "range": "± 1638.910700381316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836472.9577473958,
            "unit": "ns",
            "range": "± 1194.2776058144073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782548.9656901042,
            "unit": "ns",
            "range": "± 1502.0743670167938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49279.560975609755,
            "unit": "ns",
            "range": "± 2266.7254028204716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280312.25925925927,
            "unit": "ns",
            "range": "± 7019.756683228977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278853.84210526315,
            "unit": "ns",
            "range": "± 5996.261569262764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245532.45454545456,
            "unit": "ns",
            "range": "± 5939.5087236898535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4474344.4375,
            "unit": "ns",
            "range": "± 85110.18579619304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4031458.705882353,
            "unit": "ns",
            "range": "± 81789.76710121254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18865.0412371134,
            "unit": "ns",
            "range": "± 1361.7829299421348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88557.38372093023,
            "unit": "ns",
            "range": "± 4768.064654043991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76658.63736263737,
            "unit": "ns",
            "range": "± 3887.18799681576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88395.23076923077,
            "unit": "ns",
            "range": "± 8985.058242656618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5153.081632653061,
            "unit": "ns",
            "range": "± 627.9230314884106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17727.125,
            "unit": "ns",
            "range": "± 1330.1063293468012"
          }
        ]
      }
    ]
  }
}