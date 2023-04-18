window.BENCHMARK_DATA = {
  "lastUpdate": 1681789862310,
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
          "id": "62ebfebc569371c237daf2ddd79c573a2c4d6e1c",
          "message": "feature/fixed-interval",
          "timestamp": "2023-04-17T15:03:25+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62ebfebc569371c237daf2ddd79c573a2c4d6e1c"
        },
        "date": 1681712571778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8523000.627659574,
            "unit": "ns",
            "range": "± 693087.4034384699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21717264.845360823,
            "unit": "ns",
            "range": "± 2301438.020782434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58643785.5,
            "unit": "ns",
            "range": "± 4728467.794869837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120969072.2,
            "unit": "ns",
            "range": "± 7842658.103359351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235525275.1,
            "unit": "ns",
            "range": "± 9402553.372435682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74524.01063829787,
            "unit": "ns",
            "range": "± 16843.23215763574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796869.0606060605,
            "unit": "ns",
            "range": "± 207891.21518834334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3967525.1914893617,
            "unit": "ns",
            "range": "± 398729.1183525471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3012244.3333333335,
            "unit": "ns",
            "range": "± 273139.0833463601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8248299.052083333,
            "unit": "ns",
            "range": "± 610178.9072519523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7043631.305729167,
            "unit": "ns",
            "range": "± 91943.89008759077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2274290.0024414062,
            "unit": "ns",
            "range": "± 51261.37282970089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1694834.7098357372,
            "unit": "ns",
            "range": "± 58867.088406386465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3157707.363839286,
            "unit": "ns",
            "range": "± 45685.884245165435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021891.945703125,
            "unit": "ns",
            "range": "± 13058.062487909498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939593.0408854167,
            "unit": "ns",
            "range": "± 11279.740447400061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407465.07446808513,
            "unit": "ns",
            "range": "± 64990.65384043539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333407.5714285714,
            "unit": "ns",
            "range": "± 53370.75883958745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297923.33684210526,
            "unit": "ns",
            "range": "± 38670.88747464712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6564961.085106383,
            "unit": "ns",
            "range": "± 563480.9138423175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5001063.589473684,
            "unit": "ns",
            "range": "± 633430.6090451154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34465.875,
            "unit": "ns",
            "range": "± 9853.997014570174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132159.8350515464,
            "unit": "ns",
            "range": "± 26076.963502166847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102503.83673469388,
            "unit": "ns",
            "range": "± 22760.803175858775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271896.09375,
            "unit": "ns",
            "range": "± 50434.48634794045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5410.05,
            "unit": "ns",
            "range": "± 645.2526126853079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27346.104166666668,
            "unit": "ns",
            "range": "± 10121.594407871526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611842.3163265307,
            "unit": "ns",
            "range": "± 471278.2563869083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608417.6210526316,
            "unit": "ns",
            "range": "± 408740.74148877186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439572.21978022,
            "unit": "ns",
            "range": "± 403979.60949150234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5009167.85106383,
            "unit": "ns",
            "range": "± 530557.5840194321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9070577.93814433,
            "unit": "ns",
            "range": "± 859139.0170840467"
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
          "id": "34eb6f7bbf90b0ffa46fa0248fda866d86ecb5bb",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-17T16:10:27+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/34eb6f7bbf90b0ffa46fa0248fda866d86ecb5bb"
        },
        "date": 1681716228627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7500212.692307692,
            "unit": "ns",
            "range": "± 27452.43207921846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19372586.333333332,
            "unit": "ns",
            "range": "± 187694.2043300625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49203906.78571428,
            "unit": "ns",
            "range": "± 283968.8874253057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98026708.5,
            "unit": "ns",
            "range": "± 772588.6929847004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196156616.07142857,
            "unit": "ns",
            "range": "± 973470.6110832728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46550.28571428572,
            "unit": "ns",
            "range": "± 2604.823979063607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365848.612244898,
            "unit": "ns",
            "range": "± 111111.89472961386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2575297.4,
            "unit": "ns",
            "range": "± 68257.86937843381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168731.184782609,
            "unit": "ns",
            "range": "± 121946.86390571101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5462376.576923077,
            "unit": "ns",
            "range": "± 128963.9072485548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5931773.420758928,
            "unit": "ns",
            "range": "± 13493.013229015709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979750.1333333333,
            "unit": "ns",
            "range": "± 3244.683228421321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363756.323828125,
            "unit": "ns",
            "range": "± 900.7252766808398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566942.7958333334,
            "unit": "ns",
            "range": "± 1240.9295103930313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810724.3099190848,
            "unit": "ns",
            "range": "± 721.5888129589499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727912.974609375,
            "unit": "ns",
            "range": "± 880.1945789585842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330028.92307692306,
            "unit": "ns",
            "range": "± 4124.517859935035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267019.28301886795,
            "unit": "ns",
            "range": "± 11011.852723276368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240020,
            "unit": "ns",
            "range": "± 3837.048465041447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5649175.666666667,
            "unit": "ns",
            "range": "± 39279.79245411177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3986658.066666667,
            "unit": "ns",
            "range": "± 31453.758852064242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17456.27659574468,
            "unit": "ns",
            "range": "± 1351.8800402041097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84332.025,
            "unit": "ns",
            "range": "± 4387.683841508863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71674.625,
            "unit": "ns",
            "range": "± 1365.0422154644157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 176877.49484536084,
            "unit": "ns",
            "range": "± 14783.939937848458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4882.073684210526,
            "unit": "ns",
            "range": "± 480.6785372939025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16353.074468085106,
            "unit": "ns",
            "range": "± 1398.1409410960928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171632.5,
            "unit": "ns",
            "range": "± 29087.00146311724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3332081.5,
            "unit": "ns",
            "range": "± 55271.398049700365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258852.80952381,
            "unit": "ns",
            "range": "± 99245.0818235438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4221206.566666666,
            "unit": "ns",
            "range": "± 125443.40368295326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7187394.514285714,
            "unit": "ns",
            "range": "± 198902.09098572202"
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
          "id": "26bdf88f1171fde5e838bceea614625c963d7697",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-17T16:47:59+09:00",
          "tree_id": "2e0bd6d543c40cd08a4ebbe990e282788e198c86",
          "url": "https://github.com/OnedgeLee/libplanet/commit/26bdf88f1171fde5e838bceea614625c963d7697"
        },
        "date": 1681718467003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7475872.066666666,
            "unit": "ns",
            "range": "± 44569.0648455801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19876353.5,
            "unit": "ns",
            "range": "± 102429.07514639656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50332535.71428572,
            "unit": "ns",
            "range": "± 149881.87363460526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102194622.86666666,
            "unit": "ns",
            "range": "± 256453.95589764722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202338106.66666666,
            "unit": "ns",
            "range": "± 432901.12399676983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46446.07058823529,
            "unit": "ns",
            "range": "± 2522.1046662141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393787.4897959183,
            "unit": "ns",
            "range": "± 117686.03555575227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2631190.1621621624,
            "unit": "ns",
            "range": "± 89056.62079776786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248854.6868686867,
            "unit": "ns",
            "range": "± 170944.0982612144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5463843.875,
            "unit": "ns",
            "range": "± 138903.3927902262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6218331.109375,
            "unit": "ns",
            "range": "± 16004.755279906996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830092.0619419643,
            "unit": "ns",
            "range": "± 1828.9638052016235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332535.6180245536,
            "unit": "ns",
            "range": "± 732.3123373541848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548614.0903645833,
            "unit": "ns",
            "range": "± 2725.578313413811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804867.9584960938,
            "unit": "ns",
            "range": "± 541.1412354814619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749766.709765625,
            "unit": "ns",
            "range": "± 641.1720516063036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334213.5625,
            "unit": "ns",
            "range": "± 10308.935916858889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288812.9285714286,
            "unit": "ns",
            "range": "± 10449.164075313503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273036.5593220339,
            "unit": "ns",
            "range": "± 11772.299747890334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5680703.923076923,
            "unit": "ns",
            "range": "± 20376.79654436036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4072521.3571428573,
            "unit": "ns",
            "range": "± 39420.651601778365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22354.25,
            "unit": "ns",
            "range": "± 2144.504540987449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90663.25925925926,
            "unit": "ns",
            "range": "± 3805.6415975827613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77459.8125,
            "unit": "ns",
            "range": "± 2218.716083793479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 189039.54081632654,
            "unit": "ns",
            "range": "± 15257.563361671819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6322.126315789474,
            "unit": "ns",
            "range": "± 593.6193751874887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19508.278350515466,
            "unit": "ns",
            "range": "± 1898.6221854186576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241111.3333333335,
            "unit": "ns",
            "range": "± 41276.59091277952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3412486.95,
            "unit": "ns",
            "range": "± 77843.4666680005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4249280.266666667,
            "unit": "ns",
            "range": "± 52394.4444553137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4316225.23255814,
            "unit": "ns",
            "range": "± 150535.52064606786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7264738.666666667,
            "unit": "ns",
            "range": "± 102730.68230062713"
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
          "id": "d5b33e2cac34af99ca574a14bd6777522fd1cc7e",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-18T12:20:47+09:00",
          "tree_id": "9f1d5eeae45c727448900d4f5bbe30f53ef21681",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d5b33e2cac34af99ca574a14bd6777522fd1cc7e"
        },
        "date": 1681788924613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8598046.055555556,
            "unit": "ns",
            "range": "± 182351.1845092812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22679479.615384616,
            "unit": "ns",
            "range": "± 219227.11409196112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58664436.733333334,
            "unit": "ns",
            "range": "± 723081.2188812408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111348853.46666667,
            "unit": "ns",
            "range": "± 1093405.9344667578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224327177.6,
            "unit": "ns",
            "range": "± 1530663.8136058953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64780,
            "unit": "ns",
            "range": "± 9586.722730335603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533098.0537634408,
            "unit": "ns",
            "range": "± 136048.25064950506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2825844.4615384615,
            "unit": "ns",
            "range": "± 96871.53032098102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465229.835164835,
            "unit": "ns",
            "range": "± 137239.66134129206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6151423.440677966,
            "unit": "ns",
            "range": "± 272513.8883410045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5934432.501116072,
            "unit": "ns",
            "range": "± 15174.317581856645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890036.0729166667,
            "unit": "ns",
            "range": "± 3333.453378396564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343915.3178385417,
            "unit": "ns",
            "range": "± 4006.8220392561743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606577.26015625,
            "unit": "ns",
            "range": "± 3858.0194990677123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821061.84765625,
            "unit": "ns",
            "range": "± 2061.09655378983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750293.3745442708,
            "unit": "ns",
            "range": "± 609.0831965101139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379912.80555555556,
            "unit": "ns",
            "range": "± 18665.70769223068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318288.28571428574,
            "unit": "ns",
            "range": "± 17031.005619143914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284251.22,
            "unit": "ns",
            "range": "± 27300.965603813456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6039769.5,
            "unit": "ns",
            "range": "± 143076.69403959543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4401080.055555556,
            "unit": "ns",
            "range": "± 145594.1685435325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31190,
            "unit": "ns",
            "range": "± 3966.9041376746172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90514.4,
            "unit": "ns",
            "range": "± 4742.7451101389415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76002.3606557377,
            "unit": "ns",
            "range": "± 3418.9079739627728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 206477.412371134,
            "unit": "ns",
            "range": "± 18081.10500676545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7515.831578947368,
            "unit": "ns",
            "range": "± 957.9887692300388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30966.202127659573,
            "unit": "ns",
            "range": "± 5428.1102745111475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3846947.8666666667,
            "unit": "ns",
            "range": "± 71817.30388767904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4006498.8947368423,
            "unit": "ns",
            "range": "± 87276.05495456787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4656705.24,
            "unit": "ns",
            "range": "± 187159.45677346134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5044586.214285715,
            "unit": "ns",
            "range": "± 77956.42705549198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7811188.296296297,
            "unit": "ns",
            "range": "± 214401.8370721409"
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
          "id": "6172e2a8bdee02c7ac6a081ca1d5e92fbc30c3bb",
          "message": "Merge branch 'main' into feature/fix-interval",
          "timestamp": "2023-04-18T12:36:20+09:00",
          "tree_id": "38ce6ca9de012e467aed468441c9ce5395a60125",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6172e2a8bdee02c7ac6a081ca1d5e92fbc30c3bb"
        },
        "date": 1681789731676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7553199.666666667,
            "unit": "ns",
            "range": "± 61360.882375927264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19565152.6,
            "unit": "ns",
            "range": "± 114460.1712105257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50292076.8,
            "unit": "ns",
            "range": "± 337164.9216702202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101947017.2,
            "unit": "ns",
            "range": "± 794606.2073483047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203024849.66666666,
            "unit": "ns",
            "range": "± 780274.7751170433"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45846.42857142857,
            "unit": "ns",
            "range": "± 2473.5928909214654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380357.6421052632,
            "unit": "ns",
            "range": "± 103299.64270559985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628871.5625,
            "unit": "ns",
            "range": "± 80952.90927683245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199284.7710843375,
            "unit": "ns",
            "range": "± 113147.1844852304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5607815.175,
            "unit": "ns",
            "range": "± 196136.1547886475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6047783.275,
            "unit": "ns",
            "range": "± 17371.588930006066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963534.6997395833,
            "unit": "ns",
            "range": "± 6178.677065151181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399134.5545572916,
            "unit": "ns",
            "range": "± 2198.2122805029585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552463.5403645835,
            "unit": "ns",
            "range": "± 1336.4366027600806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798215.4109375,
            "unit": "ns",
            "range": "± 853.4799478714979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725966.5197265625,
            "unit": "ns",
            "range": "± 664.8992042575387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327253.73170731706,
            "unit": "ns",
            "range": "± 10266.834750847971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273691.04545454547,
            "unit": "ns",
            "range": "± 10268.687420830525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248653.21276595743,
            "unit": "ns",
            "range": "± 9661.632002604247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5654850.466666667,
            "unit": "ns",
            "range": "± 12749.59107392786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4081369,
            "unit": "ns",
            "range": "± 20667.989863554703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19121.885416666668,
            "unit": "ns",
            "range": "± 1510.3597331677515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89656.6888888889,
            "unit": "ns",
            "range": "± 5008.8788304447335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77795.23809523809,
            "unit": "ns",
            "range": "± 2671.525770403121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 208800.25,
            "unit": "ns",
            "range": "± 2949.588603825656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5313.917525773196,
            "unit": "ns",
            "range": "± 636.7537408295934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18039.484210526316,
            "unit": "ns",
            "range": "± 1451.2133431378143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3267653.466666667,
            "unit": "ns",
            "range": "± 60327.888908230576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448051.1153846155,
            "unit": "ns",
            "range": "± 82538.85498179724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4308055.407407408,
            "unit": "ns",
            "range": "± 120604.83729591359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4345812.352941177,
            "unit": "ns",
            "range": "± 162087.1466370882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7232293.130434782,
            "unit": "ns",
            "range": "± 159091.43394381859"
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
          "id": "35aece0831a9d387d96ad36fef41e1c053124fc9",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-18T12:37:41+09:00",
          "tree_id": "38ce6ca9de012e467aed468441c9ce5395a60125",
          "url": "https://github.com/OnedgeLee/libplanet/commit/35aece0831a9d387d96ad36fef41e1c053124fc9"
        },
        "date": 1681789848505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7618117.666666667,
            "unit": "ns",
            "range": "± 21273.08382059581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19655438.266666666,
            "unit": "ns",
            "range": "± 239369.69377616548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49757270.93333333,
            "unit": "ns",
            "range": "± 524792.1134176393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100272616.375,
            "unit": "ns",
            "range": "± 1929997.6916441421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194817408.46666667,
            "unit": "ns",
            "range": "± 2768291.931765813"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45132.307692307695,
            "unit": "ns",
            "range": "± 2737.2194435323017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362219.6530612244,
            "unit": "ns",
            "range": "± 102501.83513952896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600378.0512820515,
            "unit": "ns",
            "range": "± 89859.78796229647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137866.3698630137,
            "unit": "ns",
            "range": "± 100945.73480966927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5444300.459459459,
            "unit": "ns",
            "range": "± 182485.5251493472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940642.815104167,
            "unit": "ns",
            "range": "± 34619.89977917454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881808.8974609375,
            "unit": "ns",
            "range": "± 7733.565773616946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387601.8197916667,
            "unit": "ns",
            "range": "± 1791.4571836957523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568425.4743303573,
            "unit": "ns",
            "range": "± 3133.1585261462874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825217.8866373698,
            "unit": "ns",
            "range": "± 417.05177518999335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729815.2616489956,
            "unit": "ns",
            "range": "± 1129.594520349188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321365.8484848485,
            "unit": "ns",
            "range": "± 10205.673266378644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260743.38235294117,
            "unit": "ns",
            "range": "± 6608.482235387844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233799.35714285713,
            "unit": "ns",
            "range": "± 4059.0241647875996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5613686.2,
            "unit": "ns",
            "range": "± 101789.57363263826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3970617.769230769,
            "unit": "ns",
            "range": "± 32294.84090158944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17934.760869565216,
            "unit": "ns",
            "range": "± 2275.1283908684136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85070,
            "unit": "ns",
            "range": "± 6793.866952777557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71416.66666666667,
            "unit": "ns",
            "range": "± 936.9518599580172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 176126.41836734695,
            "unit": "ns",
            "range": "± 16821.96043769852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5153.409090909091,
            "unit": "ns",
            "range": "± 704.6559221719758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16529.977777777778,
            "unit": "ns",
            "range": "± 1728.8865090856534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3187367.108108108,
            "unit": "ns",
            "range": "± 159900.07585231846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3413110.84,
            "unit": "ns",
            "range": "± 90218.234154595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4165325.909090909,
            "unit": "ns",
            "range": "± 100623.93676263312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4202793.285714285,
            "unit": "ns",
            "range": "± 112552.96746597499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7123532.346153846,
            "unit": "ns",
            "range": "± 179152.89404415266"
          }
        ]
      }
    ]
  }
}