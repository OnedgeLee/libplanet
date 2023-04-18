window.BENCHMARK_DATA = {
  "lastUpdate": 1681790110934,
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
        "date": 1681712715210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10610628.924731182,
            "unit": "ns",
            "range": "± 2803938.805773094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29032792.26595745,
            "unit": "ns",
            "range": "± 9110880.996833956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70388004.31914894,
            "unit": "ns",
            "range": "± 14646279.034758091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146616749.87096775,
            "unit": "ns",
            "range": "± 42999063.50629263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253115738.93333334,
            "unit": "ns",
            "range": "± 42612154.30762823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75478.82558139534,
            "unit": "ns",
            "range": "± 7531.6677243753065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 460169.097826087,
            "unit": "ns",
            "range": "± 67301.82641971826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387908.05263157893,
            "unit": "ns",
            "range": "± 58273.43940905695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 385706.02040816325,
            "unit": "ns",
            "range": "± 73023.79862901491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6112846.051020408,
            "unit": "ns",
            "range": "± 471384.16372737446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4521805.846938776,
            "unit": "ns",
            "range": "± 410285.04669104784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26174.217647058824,
            "unit": "ns",
            "range": "± 2858.261120613973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132534.74731182796,
            "unit": "ns",
            "range": "± 21209.099717305464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127448.0172413793,
            "unit": "ns",
            "range": "± 12877.688979856151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 281176,
            "unit": "ns",
            "range": "± 32443.962188036818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9949.779569892473,
            "unit": "ns",
            "range": "± 1529.5692372121962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25669.52380952381,
            "unit": "ns",
            "range": "± 2534.429419288292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691278.5208333333,
            "unit": "ns",
            "range": "± 215001.9690954617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3497115.788888889,
            "unit": "ns",
            "range": "± 418527.6414163778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2840779.736263736,
            "unit": "ns",
            "range": "± 386252.0815450229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8721396.91111111,
            "unit": "ns",
            "range": "± 1919648.030114402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3578737.5,
            "unit": "ns",
            "range": "± 530222.68604757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815209.9655172415,
            "unit": "ns",
            "range": "± 441497.1259893933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4983486.488764045,
            "unit": "ns",
            "range": "± 516089.0988713377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5177403.543478261,
            "unit": "ns",
            "range": "± 985247.5668306982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9437765.055555556,
            "unit": "ns",
            "range": "± 1036198.138137868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6796459.534539473,
            "unit": "ns",
            "range": "± 224882.76581145826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2130208.3533203127,
            "unit": "ns",
            "range": "± 47574.32746472223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405392.0762992527,
            "unit": "ns",
            "range": "± 50594.66953574984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151824.40807977,
            "unit": "ns",
            "range": "± 219641.19258239426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855708.0243530273,
            "unit": "ns",
            "range": "± 16095.786118255446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814385.7072870163,
            "unit": "ns",
            "range": "± 29413.633020813173"
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
        "date": 1681716718483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8650136.57368421,
            "unit": "ns",
            "range": "± 537488.1039412564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20956702.52,
            "unit": "ns",
            "range": "± 1045062.3470116102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53771793.317073174,
            "unit": "ns",
            "range": "± 1937229.7050710253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104976730.11842105,
            "unit": "ns",
            "range": "± 5257561.236562848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231621937.85106382,
            "unit": "ns",
            "range": "± 27904484.773826502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68300.85263157895,
            "unit": "ns",
            "range": "± 13878.8759799709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379307.0319148936,
            "unit": "ns",
            "range": "± 26854.94331637757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324712.3541666667,
            "unit": "ns",
            "range": "± 25617.13070377512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307349.6956521739,
            "unit": "ns",
            "range": "± 31781.511508304764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5709862.631578947,
            "unit": "ns",
            "range": "± 196917.4266737369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995384.1153846155,
            "unit": "ns",
            "range": "± 53899.76909897738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18756.376288659794,
            "unit": "ns",
            "range": "± 3246.638069660586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92137.39583333333,
            "unit": "ns",
            "range": "± 15346.804565380457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103629.78571428571,
            "unit": "ns",
            "range": "± 14035.339987398085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248317.6326530612,
            "unit": "ns",
            "range": "± 24370.38670978127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8597.170212765957,
            "unit": "ns",
            "range": "± 1509.8376017371238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19955.747368421053,
            "unit": "ns",
            "range": "± 3646.5995088645955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731435.7197802197,
            "unit": "ns",
            "range": "± 159215.28547632202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3334562.8160919542,
            "unit": "ns",
            "range": "± 330354.8370365279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2775461.059139785,
            "unit": "ns",
            "range": "± 210397.4100397741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7406153.478947368,
            "unit": "ns",
            "range": "± 485796.98100180447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188059.5303030303,
            "unit": "ns",
            "range": "± 140724.83523465978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3295063.804347826,
            "unit": "ns",
            "range": "± 159075.99311754268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4377167.341463415,
            "unit": "ns",
            "range": "± 156048.11732853582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4610861.112903226,
            "unit": "ns",
            "range": "± 316177.2145965335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8201894.236363636,
            "unit": "ns",
            "range": "± 334080.51124818774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6792022.911458333,
            "unit": "ns",
            "range": "± 106109.68693592971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032393.3521205357,
            "unit": "ns",
            "range": "± 21301.572626954276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317166.6400240385,
            "unit": "ns",
            "range": "± 13610.437968311537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2967715.693311738,
            "unit": "ns",
            "range": "± 105639.44383324859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885015.4361328125,
            "unit": "ns",
            "range": "± 14947.027797043002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754622.5636858259,
            "unit": "ns",
            "range": "± 10860.508895382576"
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
        "date": 1681718635755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8100584.785714285,
            "unit": "ns",
            "range": "± 49416.203690114206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20702871.533333335,
            "unit": "ns",
            "range": "± 382274.4582693484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52390941.21428572,
            "unit": "ns",
            "range": "± 758117.0557877822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105953498.3,
            "unit": "ns",
            "range": "± 1397067.8789125355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213102855.7142857,
            "unit": "ns",
            "range": "± 2117136.4325027997"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75370.23958333333,
            "unit": "ns",
            "range": "± 5850.1603608156565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407680.5606060606,
            "unit": "ns",
            "range": "± 19153.397300682947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343570.09433962265,
            "unit": "ns",
            "range": "± 14193.717874013235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333145.12903225806,
            "unit": "ns",
            "range": "± 10107.84357398397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5739609.214285715,
            "unit": "ns",
            "range": "± 45769.11215114835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4065162,
            "unit": "ns",
            "range": "± 61355.978110182084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25614.345360824744,
            "unit": "ns",
            "range": "± 3430.364820067145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121317.77,
            "unit": "ns",
            "range": "± 14789.241919812093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127417.5,
            "unit": "ns",
            "range": "± 8236.21232823617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 278158.4285714286,
            "unit": "ns",
            "range": "± 19992.732184755045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10756.96875,
            "unit": "ns",
            "range": "± 1155.9103448490057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25432.020408163266,
            "unit": "ns",
            "range": "± 3590.043979943662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737802.64,
            "unit": "ns",
            "range": "± 199237.61117243243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3098779.2678571427,
            "unit": "ns",
            "range": "± 131712.257235093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2695067.9183673467,
            "unit": "ns",
            "range": "± 261970.02556866483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6969278.642857143,
            "unit": "ns",
            "range": "± 196684.21901244237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339801.566666667,
            "unit": "ns",
            "range": "± 137131.8010241646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3702547.263157895,
            "unit": "ns",
            "range": "± 120697.88653620765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4614023.18627451,
            "unit": "ns",
            "range": "± 186048.58141028543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4912699.470588235,
            "unit": "ns",
            "range": "± 147337.17979338687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8403050.851851853,
            "unit": "ns",
            "range": "± 235217.48193577785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7086431.6796875,
            "unit": "ns",
            "range": "± 62991.32283390515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2010414.466517857,
            "unit": "ns",
            "range": "± 17302.455097902992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308684.5943509615,
            "unit": "ns",
            "range": "± 4336.1396651325595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694805.9158203127,
            "unit": "ns",
            "range": "± 58796.92843535531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860829.0923177083,
            "unit": "ns",
            "range": "± 6203.726963653741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704715.2660807292,
            "unit": "ns",
            "range": "± 7063.579797453016"
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
        "date": 1681789253412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8881607.3,
            "unit": "ns",
            "range": "± 570732.9128587315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21951095.933333334,
            "unit": "ns",
            "range": "± 383558.4039136425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59330344.41860465,
            "unit": "ns",
            "range": "± 2193927.019595393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117976223.86363636,
            "unit": "ns",
            "range": "± 4339745.2628200585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230675171.9,
            "unit": "ns",
            "range": "± 8092574.262732772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72521.51063829787,
            "unit": "ns",
            "range": "± 7661.490590946023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409557.02222222224,
            "unit": "ns",
            "range": "± 44845.64713841852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 383886.7303370786,
            "unit": "ns",
            "range": "± 65271.677762808504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 365473.7752808989,
            "unit": "ns",
            "range": "± 48288.90780635597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5808312.245762712,
            "unit": "ns",
            "range": "± 256622.49553559604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3903607.0833333335,
            "unit": "ns",
            "range": "± 41216.31742506035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19190.115789473683,
            "unit": "ns",
            "range": "± 3014.1920757358666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107119.32323232324,
            "unit": "ns",
            "range": "± 16259.618027637021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103403.86597938144,
            "unit": "ns",
            "range": "± 14035.901858885594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 249763.65625,
            "unit": "ns",
            "range": "± 23695.490377452847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7799.5,
            "unit": "ns",
            "range": "± 1328.0805131701788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18703.81052631579,
            "unit": "ns",
            "range": "± 2808.9708545284248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1715170.4213483145,
            "unit": "ns",
            "range": "± 270894.95009631856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3338148.840909091,
            "unit": "ns",
            "range": "± 410837.96759155067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2739711.0555555555,
            "unit": "ns",
            "range": "± 368658.57717799186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7716579.152173913,
            "unit": "ns",
            "range": "± 963463.704099478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424137.2126436783,
            "unit": "ns",
            "range": "± 184858.03123081435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3561974.7164179105,
            "unit": "ns",
            "range": "± 168163.34639541165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4809273.96875,
            "unit": "ns",
            "range": "± 382360.84475604567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5006053.666666667,
            "unit": "ns",
            "range": "± 478231.9249897139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9464229.163157895,
            "unit": "ns",
            "range": "± 804726.3198383844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6554390.34765625,
            "unit": "ns",
            "range": "± 143472.9944866484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956822.8397042411,
            "unit": "ns",
            "range": "± 14003.9714914492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318439.668719952,
            "unit": "ns",
            "range": "± 13612.252121730276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2976646.947421875,
            "unit": "ns",
            "range": "± 68778.17780663261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887346.3666992188,
            "unit": "ns",
            "range": "± 7375.16052095854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730990.1314603365,
            "unit": "ns",
            "range": "± 4634.083797696178"
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
        "date": 1681790082785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8833373.105263159,
            "unit": "ns",
            "range": "± 696376.6658582408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21758265.543010753,
            "unit": "ns",
            "range": "± 1230842.555031396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53819075.666666664,
            "unit": "ns",
            "range": "± 3372442.895996219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113396715.49484536,
            "unit": "ns",
            "range": "± 9137604.620628074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228687206.02083334,
            "unit": "ns",
            "range": "± 16401780.73263701"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61683.39175257732,
            "unit": "ns",
            "range": "± 12354.052641033679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389557.9111111111,
            "unit": "ns",
            "range": "± 29189.51686173006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301246.36363636365,
            "unit": "ns",
            "range": "± 12761.896544827316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300236.80337078654,
            "unit": "ns",
            "range": "± 28946.51053879948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5700095.205128205,
            "unit": "ns",
            "range": "± 292447.36478819785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3996592.8,
            "unit": "ns",
            "range": "± 150361.57876908063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18077.052631578947,
            "unit": "ns",
            "range": "± 2609.5486337044063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92435.70408163265,
            "unit": "ns",
            "range": "± 13284.559015110835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93004.1914893617,
            "unit": "ns",
            "range": "± 10066.0549736108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 245488.71578947367,
            "unit": "ns",
            "range": "± 22875.920840743922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6723.041666666667,
            "unit": "ns",
            "range": "± 938.9192882375789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17619.23033707865,
            "unit": "ns",
            "range": "± 3032.0046277700835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633856.8265306123,
            "unit": "ns",
            "range": "± 179272.63936515516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3028635.1578947366,
            "unit": "ns",
            "range": "± 217264.1724043305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2634998.4680851065,
            "unit": "ns",
            "range": "± 327265.611594647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7073649.170212766,
            "unit": "ns",
            "range": "± 504461.07196478813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3984746.777777778,
            "unit": "ns",
            "range": "± 921074.120026617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610416.822222222,
            "unit": "ns",
            "range": "± 543787.5537029285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4947044.155172414,
            "unit": "ns",
            "range": "± 427904.181259832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4528114.469072165,
            "unit": "ns",
            "range": "± 413858.0366230534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8479014.97260274,
            "unit": "ns",
            "range": "± 421940.9904111781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6931046.43953125,
            "unit": "ns",
            "range": "± 176914.93706696978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013059.0042067308,
            "unit": "ns",
            "range": "± 31019.454940633612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1243110.1625,
            "unit": "ns",
            "range": "± 14780.779987071637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2443901.705078125,
            "unit": "ns",
            "range": "± 30324.503130499284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845119.7123828125,
            "unit": "ns",
            "range": "± 21365.313759005636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711533.125139509,
            "unit": "ns",
            "range": "± 5418.985271364487"
          }
        ]
      }
    ]
  }
}