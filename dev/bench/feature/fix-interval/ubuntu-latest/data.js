window.BENCHMARK_DATA = {
  "lastUpdate": 1681718480312,
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
      }
    ]
  }
}