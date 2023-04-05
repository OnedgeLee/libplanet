window.BENCHMARK_DATA = {
  "lastUpdate": 1680700619716,
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
          "id": "a51c482f4e17044007e75869872dba7a252b5f32",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:44:41+09:00",
          "tree_id": "e940990a794e091ec51fad4900f4bc53006d0141",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a51c482f4e17044007e75869872dba7a252b5f32"
        },
        "date": 1680685504912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8856179.566666666,
            "unit": "ns",
            "range": "± 68990.46358578085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22581529.64285714,
            "unit": "ns",
            "range": "± 189820.83743386393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57811218.071428575,
            "unit": "ns",
            "range": "± 435391.8734580403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113230631.14285715,
            "unit": "ns",
            "range": "± 850748.7049313913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228130959.85714287,
            "unit": "ns",
            "range": "± 2051997.7853338104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67242.6875,
            "unit": "ns",
            "range": "± 5950.744468795037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243302.32258064515,
            "unit": "ns",
            "range": "± 10953.416918446856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252046.5,
            "unit": "ns",
            "range": "± 13079.61859758257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231778.97402597402,
            "unit": "ns",
            "range": "± 11828.865294575435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13307446.92857143,
            "unit": "ns",
            "range": "± 88538.1626839864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10713304.666666666,
            "unit": "ns",
            "range": "± 94912.56768330575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20983.36842105263,
            "unit": "ns",
            "range": "± 1783.5898539398756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62104.56593406593,
            "unit": "ns",
            "range": "± 5598.534434816546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48112.39361702128,
            "unit": "ns",
            "range": "± 3774.976291937475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118128.72164948453,
            "unit": "ns",
            "range": "± 17286.868055901006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5924.308510638298,
            "unit": "ns",
            "range": "± 410.69178529334545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20197.79120879121,
            "unit": "ns",
            "range": "± 1838.6257943032922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1815196.48,
            "unit": "ns",
            "range": "± 197948.04077590615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3182445.783333333,
            "unit": "ns",
            "range": "± 141582.77964212155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2915709,
            "unit": "ns",
            "range": "± 269371.6992969028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7358935.857142857,
            "unit": "ns",
            "range": "± 334463.9426504051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3864689.0434782607,
            "unit": "ns",
            "range": "± 70480.96081307624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5820311.033333333,
            "unit": "ns",
            "range": "± 92990.79796476536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28227691.133333333,
            "unit": "ns",
            "range": "± 359800.7570076342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7379498.347826087,
            "unit": "ns",
            "range": "± 175343.40208019048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32288529.217391305,
            "unit": "ns",
            "range": "± 707126.2005713341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6729908.621744792,
            "unit": "ns",
            "range": "± 25327.381066763373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2263005.6826923075,
            "unit": "ns",
            "range": "± 8652.311940699405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472797.8326322115,
            "unit": "ns",
            "range": "± 6405.3706723353425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2856906.267127404,
            "unit": "ns",
            "range": "± 11885.9981709127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 923703.421875,
            "unit": "ns",
            "range": "± 4200.335147601992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852231.4256510417,
            "unit": "ns",
            "range": "± 4420.541779939672"
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
          "id": "8e9373623dda52f70a71b0e207e8ba0a54cc5bce",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:55:41+09:00",
          "tree_id": "5620cd033e9926b29098aaba821eedbdffb8880b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8e9373623dda52f70a71b0e207e8ba0a54cc5bce"
        },
        "date": 1680686397657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9920145.752808988,
            "unit": "ns",
            "range": "± 905586.4330197398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23344159.30645161,
            "unit": "ns",
            "range": "± 1633305.4483686052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57443971.75773196,
            "unit": "ns",
            "range": "± 3377214.55559781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112425080.13157895,
            "unit": "ns",
            "range": "± 3528481.90253607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232819171.0212766,
            "unit": "ns",
            "range": "± 14400489.70151134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72040.5632183908,
            "unit": "ns",
            "range": "± 8400.555786847304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237547.90217391305,
            "unit": "ns",
            "range": "± 26947.31926852012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243046.26923076922,
            "unit": "ns",
            "range": "± 31833.489453745242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234677.68681318683,
            "unit": "ns",
            "range": "± 25173.32371420724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13002732.142857144,
            "unit": "ns",
            "range": "± 517689.9166730988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10304174.484848484,
            "unit": "ns",
            "range": "± 467220.360334261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23202.48979591837,
            "unit": "ns",
            "range": "± 5774.83507417445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69494.30927835051,
            "unit": "ns",
            "range": "± 15014.610200263292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63903.243902439026,
            "unit": "ns",
            "range": "± 3720.509262768348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126568.7741935484,
            "unit": "ns",
            "range": "± 17796.428663547023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7987.840909090909,
            "unit": "ns",
            "range": "± 644.5139821987873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23591.340659340658,
            "unit": "ns",
            "range": "± 2549.399429145705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520318.8736842105,
            "unit": "ns",
            "range": "± 119300.89882998975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860939.9285714286,
            "unit": "ns",
            "range": "± 136919.4547518825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2523763.736842105,
            "unit": "ns",
            "range": "± 188500.7496198318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6684365.016483516,
            "unit": "ns",
            "range": "± 589711.0487763452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544978.6530612246,
            "unit": "ns",
            "range": "± 279960.42710771103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5530101.415730337,
            "unit": "ns",
            "range": "± 621683.7912512241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26966096.605882354,
            "unit": "ns",
            "range": "± 1443963.0520473279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6863917.467391305,
            "unit": "ns",
            "range": "± 560160.2601841267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31895056.415789474,
            "unit": "ns",
            "range": "± 2131507.8607242103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7180992.205277423,
            "unit": "ns",
            "range": "± 460642.0115668412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080947.827845982,
            "unit": "ns",
            "range": "± 88209.41257682082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348019.8233673878,
            "unit": "ns",
            "range": "± 46235.53610438818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3033066.7127094073,
            "unit": "ns",
            "range": "± 294344.0196280804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976749.3975626627,
            "unit": "ns",
            "range": "± 58608.608381580176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854263.3547918146,
            "unit": "ns",
            "range": "± 46652.371028222566"
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
          "id": "d691091fdefe1e5b355fb7249865fb9e9bd40997",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:57:20+09:00",
          "tree_id": "c078d231aa751a9cdf4c606dcffdbdcee9df2826",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d691091fdefe1e5b355fb7249865fb9e9bd40997"
        },
        "date": 1680686484616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9711893.335051546,
            "unit": "ns",
            "range": "± 1071600.2358435013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23765947.474747475,
            "unit": "ns",
            "range": "± 1773005.4539277072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58140046.51111111,
            "unit": "ns",
            "range": "± 3182703.2882057326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116673660.44736843,
            "unit": "ns",
            "range": "± 5861899.714323768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246243529.74725273,
            "unit": "ns",
            "range": "± 13757917.004235163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81801.75555555556,
            "unit": "ns",
            "range": "± 11346.375743249086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280799.85353535356,
            "unit": "ns",
            "range": "± 46118.47713765261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253948.17894736843,
            "unit": "ns",
            "range": "± 34776.33734093652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243491.04639175258,
            "unit": "ns",
            "range": "± 24479.256645942696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15071147.010204082,
            "unit": "ns",
            "range": "± 1231694.5903898492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12176388.536842106,
            "unit": "ns",
            "range": "± 971813.0497007304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29212.83870967742,
            "unit": "ns",
            "range": "± 6147.846012488266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69432.69230769231,
            "unit": "ns",
            "range": "± 8526.656761386359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62183.53370786517,
            "unit": "ns",
            "range": "± 6987.9934326500315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147202,
            "unit": "ns",
            "range": "± 24152.921887231816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10222.760869565218,
            "unit": "ns",
            "range": "± 986.5516296739986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29286.431034482757,
            "unit": "ns",
            "range": "± 3380.0789855677667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675541.494736842,
            "unit": "ns",
            "range": "± 170108.90810457055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954155.0714285714,
            "unit": "ns",
            "range": "± 122020.40501502677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2719085.3157894737,
            "unit": "ns",
            "range": "± 261405.0128725116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6590888.037037037,
            "unit": "ns",
            "range": "± 270765.67540362576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3769477.2258064514,
            "unit": "ns",
            "range": "± 309399.2076006241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5800852,
            "unit": "ns",
            "range": "± 468655.69895649754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29461931.46875,
            "unit": "ns",
            "range": "± 1861611.5993103983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7702413.585106383,
            "unit": "ns",
            "range": "± 889355.4827124148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34431420.42307692,
            "unit": "ns",
            "range": "± 3857450.3524640785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7136866.776654412,
            "unit": "ns",
            "range": "± 340787.0903979848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2208596.778076172,
            "unit": "ns",
            "range": "± 66998.10981378394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397897.2007004311,
            "unit": "ns",
            "range": "± 38161.76202464682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2881593.5695473584,
            "unit": "ns",
            "range": "± 226087.19172067655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 923782.9389160157,
            "unit": "ns",
            "range": "± 60201.774957787624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831248.2599727747,
            "unit": "ns",
            "range": "± 25652.775729961577"
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
          "id": "b8713c10d1151a351bca80e47bab442ec7d4d01d",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T18:04:21+09:00",
          "tree_id": "8bc9dbf1522bd49a074c7a8329402bb202d926f2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b8713c10d1151a351bca80e47bab442ec7d4d01d"
        },
        "date": 1680686771340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9163295.920454545,
            "unit": "ns",
            "range": "± 777583.9832894752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23615060.729166668,
            "unit": "ns",
            "range": "± 3405597.622632868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53514245.5,
            "unit": "ns",
            "range": "± 1321850.6965829455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114830412.17368421,
            "unit": "ns",
            "range": "± 6709886.421925024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232970182.68571427,
            "unit": "ns",
            "range": "± 10980913.658092665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80765.97727272728,
            "unit": "ns",
            "range": "± 12249.351441407405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234071.88333333333,
            "unit": "ns",
            "range": "± 10322.526531964322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236689.59333333332,
            "unit": "ns",
            "range": "± 11932.379638719283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232183.16666666666,
            "unit": "ns",
            "range": "± 19473.38966947206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14049050.319148935,
            "unit": "ns",
            "range": "± 1248850.8277988487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10834559.010869564,
            "unit": "ns",
            "range": "± 631891.4144831242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24640.34736842105,
            "unit": "ns",
            "range": "± 3416.2886848232706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72636.48979591837,
            "unit": "ns",
            "range": "± 10445.93277678994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66576.08139534884,
            "unit": "ns",
            "range": "± 4355.120716136395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132360.30107526883,
            "unit": "ns",
            "range": "± 16445.05018220756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9810.775510204081,
            "unit": "ns",
            "range": "± 1130.4111812856017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26940.565217391304,
            "unit": "ns",
            "range": "± 3285.32900924651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687496.0578947368,
            "unit": "ns",
            "range": "± 294957.22037306824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3185310.765957447,
            "unit": "ns",
            "range": "± 486353.57037158875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2948715.762886598,
            "unit": "ns",
            "range": "± 652827.5537905087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6731514.715053763,
            "unit": "ns",
            "range": "± 737025.3717612153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3449681.4239130435,
            "unit": "ns",
            "range": "± 303320.8619876092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5531142.912087912,
            "unit": "ns",
            "range": "± 617135.1133615293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27084262.80120482,
            "unit": "ns",
            "range": "± 1393411.7167575466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7323515.605263158,
            "unit": "ns",
            "range": "± 966154.7300701173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32584529.066666666,
            "unit": "ns",
            "range": "± 3372305.96733092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7316710.2171223955,
            "unit": "ns",
            "range": "± 189054.99740752619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2155400.4779094825,
            "unit": "ns",
            "range": "± 61897.556539271325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374188.6184395032,
            "unit": "ns",
            "range": "± 47423.43637150768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2843590.9693127647,
            "unit": "ns",
            "range": "± 125648.72501500197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810005.1822684152,
            "unit": "ns",
            "range": "± 9912.035008746827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826386.8816189236,
            "unit": "ns",
            "range": "± 22776.11359998958"
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
          "id": "a9981583bfdeb1c619e0ec777ab5f4f562a25dc5",
          "message": "chore: change property ContextMinInterval to private member",
          "timestamp": "2023-04-05T18:38:32+09:00",
          "tree_id": "4278327d8d63aa06ecce6ab06273d0a7430c92e2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9981583bfdeb1c619e0ec777ab5f4f562a25dc5"
        },
        "date": 1680688807768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7659583.25,
            "unit": "ns",
            "range": "± 37295.19174498845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21076434.784946237,
            "unit": "ns",
            "range": "± 1453073.8211128716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54744068.84375,
            "unit": "ns",
            "range": "± 1642028.3835838742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110232952.27906977,
            "unit": "ns",
            "range": "± 5997450.323522498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229027053.025,
            "unit": "ns",
            "range": "± 7561051.102906318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64940.947916666664,
            "unit": "ns",
            "range": "± 9144.401652745382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232164.07303370786,
            "unit": "ns",
            "range": "± 24965.321003201643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236857.1489361702,
            "unit": "ns",
            "range": "± 29644.743752379545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213975.48837209304,
            "unit": "ns",
            "range": "± 17750.27304031534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15095206.032608695,
            "unit": "ns",
            "range": "± 2629610.1375232707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11821097.845360825,
            "unit": "ns",
            "range": "± 1396782.5875895808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19339.11797752809,
            "unit": "ns",
            "range": "± 2557.931406365921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58584.82417582418,
            "unit": "ns",
            "range": "± 9188.297262875456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61146.14942528736,
            "unit": "ns",
            "range": "± 4473.350618550062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137858.7741935484,
            "unit": "ns",
            "range": "± 22767.73137966798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7910.467391304348,
            "unit": "ns",
            "range": "± 624.7678153528815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17595.608695652172,
            "unit": "ns",
            "range": "± 2911.2337173930555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549322.2577319588,
            "unit": "ns",
            "range": "± 179419.65929881163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800315.9846153846,
            "unit": "ns",
            "range": "± 123133.37640320306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2612791.9166666665,
            "unit": "ns",
            "range": "± 305939.0366874684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6897551.086021505,
            "unit": "ns",
            "range": "± 689784.829346137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3441254.788888889,
            "unit": "ns",
            "range": "± 257241.9554600384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5207566.833333333,
            "unit": "ns",
            "range": "± 197142.81904462978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25717597.319148935,
            "unit": "ns",
            "range": "± 1002066.522341556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6355975.704819277,
            "unit": "ns",
            "range": "± 454599.5101769157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31345336.62371134,
            "unit": "ns",
            "range": "± 2013403.360153639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7049977.926315789,
            "unit": "ns",
            "range": "± 467162.27804281603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166461.7224934897,
            "unit": "ns",
            "range": "± 56237.35678208035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409957.964039522,
            "unit": "ns",
            "range": "± 28092.333482843274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995845.3367745536,
            "unit": "ns",
            "range": "± 51833.02724850972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956824.521484375,
            "unit": "ns",
            "range": "± 23426.11376611223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937645.3188875159,
            "unit": "ns",
            "range": "± 57618.510037246255"
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
          "id": "bd5bdb72ed875f76826ca08e28d14fb4bc37afb1",
          "message": "fix: fix local variable startTime to be assigned safely",
          "timestamp": "2023-04-05T21:56:48+09:00",
          "tree_id": "54ced70a9219ac7cb8ec78d2f7c096ab7c0aae99",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bd5bdb72ed875f76826ca08e28d14fb4bc37afb1"
        },
        "date": 1680700594540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8479968.57142857,
            "unit": "ns",
            "range": "± 212658.89777614546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22646546.459183674,
            "unit": "ns",
            "range": "± 4388605.656289995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51967866.833333336,
            "unit": "ns",
            "range": "± 700728.1775964677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110716929.26470588,
            "unit": "ns",
            "range": "± 10192086.99365596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210196217.17857143,
            "unit": "ns",
            "range": "± 5924333.368833755"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67727.60638297872,
            "unit": "ns",
            "range": "± 9644.241727823397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250084.05319148937,
            "unit": "ns",
            "range": "± 39824.11085308843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246667.51063829788,
            "unit": "ns",
            "range": "± 32118.018557402465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227535.95555555556,
            "unit": "ns",
            "range": "± 17235.542903971193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13400229.955555556,
            "unit": "ns",
            "range": "± 743377.5223641385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10419715.902173912,
            "unit": "ns",
            "range": "± 601925.2408199868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23014.044444444444,
            "unit": "ns",
            "range": "± 5065.43689157183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67466.90659340659,
            "unit": "ns",
            "range": "± 15422.669435302785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59894.526666666665,
            "unit": "ns",
            "range": "± 2854.1266187813108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133685.47826086957,
            "unit": "ns",
            "range": "± 21698.48108295174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8665.148936170213,
            "unit": "ns",
            "range": "± 1098.4628723268606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24787.217391304348,
            "unit": "ns",
            "range": "± 3617.607657142065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503548.469072165,
            "unit": "ns",
            "range": "± 118435.36086234036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792775.5569620254,
            "unit": "ns",
            "range": "± 138261.95597068509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557538.2688172045,
            "unit": "ns",
            "range": "± 183038.8825213838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5806937.974358974,
            "unit": "ns",
            "range": "± 203148.96573133185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3161240.6904761903,
            "unit": "ns",
            "range": "± 114399.19306416076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5161597.317073171,
            "unit": "ns",
            "range": "± 184834.87931386745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22265217.4,
            "unit": "ns",
            "range": "± 651548.5440234354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6246291.4,
            "unit": "ns",
            "range": "± 201794.88453118165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26854603.11764706,
            "unit": "ns",
            "range": "± 549697.5817242471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7331736.608191288,
            "unit": "ns",
            "range": "± 228367.58066570904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2134274.529820884,
            "unit": "ns",
            "range": "± 113130.45000841138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382745.8444695724,
            "unit": "ns",
            "range": "± 29794.466631108782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2949854.5826009116,
            "unit": "ns",
            "range": "± 197932.9674331821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932256.6215122768,
            "unit": "ns",
            "range": "± 21221.838099536588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792851.6056189904,
            "unit": "ns",
            "range": "± 9814.95919820364"
          }
        ]
      }
    ]
  }
}