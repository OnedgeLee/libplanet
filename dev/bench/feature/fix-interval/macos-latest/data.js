window.BENCHMARK_DATA = {
  "lastUpdate": 1681718677444,
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
      }
    ]
  }
}