window.BENCHMARK_DATA = {
  "lastUpdate": 1682052429880,
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
          "id": "d6d87834a170b07dd60f9311efe37295800a4c4e",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-20T11:15:04+09:00",
          "tree_id": "aa4baf5796af7f658859b22d9da95ce319e15ac9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d6d87834a170b07dd60f9311efe37295800a4c4e"
        },
        "date": 1681957926121,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9123758.192982456,
            "unit": "ns",
            "range": "± 396120.93078112963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24332686.96551724,
            "unit": "ns",
            "range": "± 701386.8013351163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62015211.458333336,
            "unit": "ns",
            "range": "± 1574561.8777060818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122478939.64705883,
            "unit": "ns",
            "range": "± 2474858.0764524643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242746593.6956522,
            "unit": "ns",
            "range": "± 6009369.508600999"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56715.586956521736,
            "unit": "ns",
            "range": "± 4764.21121350229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656818.731958763,
            "unit": "ns",
            "range": "± 145686.908089997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218802.2448979593,
            "unit": "ns",
            "range": "± 197580.4748916594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2681201.4787234045,
            "unit": "ns",
            "range": "± 212427.36823381975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6830813.3,
            "unit": "ns",
            "range": "± 538925.6340513846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6977850.5439453125,
            "unit": "ns",
            "range": "± 179531.70102154984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2033607.720625,
            "unit": "ns",
            "range": "± 54287.27673521199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1514311.0033892463,
            "unit": "ns",
            "range": "± 29839.866882601633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3096964.517680921,
            "unit": "ns",
            "range": "± 65305.858223623945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913293.9214477539,
            "unit": "ns",
            "range": "± 16887.871641510654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867346.8771033654,
            "unit": "ns",
            "range": "± 11928.517019806373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383271.3614457831,
            "unit": "ns",
            "range": "± 20360.641829800512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314465.58762886596,
            "unit": "ns",
            "range": "± 19634.759664385474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276316.89,
            "unit": "ns",
            "range": "± 18803.873354423336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6782123.428571428,
            "unit": "ns",
            "range": "± 118127.28328747394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4834821.352941177,
            "unit": "ns",
            "range": "± 98571.59725546018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24408.07608695652,
            "unit": "ns",
            "range": "± 1864.6566500883173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108712.87755102041,
            "unit": "ns",
            "range": "± 9206.120036648532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104413.55,
            "unit": "ns",
            "range": "± 14861.076512779511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131095.8144329897,
            "unit": "ns",
            "range": "± 15724.81876308509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7159.033333333334,
            "unit": "ns",
            "range": "± 667.8421472981959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21903.274725274725,
            "unit": "ns",
            "range": "± 2275.4427460066076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4045118.74,
            "unit": "ns",
            "range": "± 162500.89353585546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4102325.1466666665,
            "unit": "ns",
            "range": "± 205973.42825180755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4939045.483870967,
            "unit": "ns",
            "range": "± 147721.55988680662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5174497.634615385,
            "unit": "ns",
            "range": "± 212273.89215277368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8363883.517857143,
            "unit": "ns",
            "range": "± 357451.20322721184"
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
          "id": "d32015105825cd975599ec4c4e717f0c67127419",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-21T12:49:25+09:00",
          "tree_id": "d423617f2223528602beb3570fe557cbdc632a1d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d32015105825cd975599ec4c4e717f0c67127419"
        },
        "date": 1682050460891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11963012.152173912,
            "unit": "ns",
            "range": "± 952558.1150557073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29597100.35064935,
            "unit": "ns",
            "range": "± 1516165.956916602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78266685.63043478,
            "unit": "ns",
            "range": "± 4397597.37175307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155300466.83870968,
            "unit": "ns",
            "range": "± 6977454.926170339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 312831085.59375,
            "unit": "ns",
            "range": "± 9629102.93096072"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91771.06593406593,
            "unit": "ns",
            "range": "± 11161.164363593967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1931393.8723404256,
            "unit": "ns",
            "range": "± 187752.80415455185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4128624.8936170214,
            "unit": "ns",
            "range": "± 453768.5554960092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3260521.2680412373,
            "unit": "ns",
            "range": "± 374778.5033694767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8768743.505263157,
            "unit": "ns",
            "range": "± 705949.2250322961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8394430.696514424,
            "unit": "ns",
            "range": "± 227686.70103080795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2472849.0103515624,
            "unit": "ns",
            "range": "± 55116.52467041244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1853630.169385723,
            "unit": "ns",
            "range": "± 75082.04389452554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3896886.1886295183,
            "unit": "ns",
            "range": "± 202043.28250867286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1179770.9944458008,
            "unit": "ns",
            "range": "± 35698.30358869838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1126422.7252987132,
            "unit": "ns",
            "range": "± 60489.63412322078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 500287.34444444446,
            "unit": "ns",
            "range": "± 55353.90534402321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 395624.8522727273,
            "unit": "ns",
            "range": "± 24441.57726843197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 403376.1808510638,
            "unit": "ns",
            "range": "± 40386.53743007188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7556167.211111112,
            "unit": "ns",
            "range": "± 427634.81850923557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5801784.835164835,
            "unit": "ns",
            "range": "± 614437.0303655799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 38566.96666666667,
            "unit": "ns",
            "range": "± 8698.29843808417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 163319.04166666666,
            "unit": "ns",
            "range": "± 20214.610918013404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 145894.53260869565,
            "unit": "ns",
            "range": "± 16490.135266540878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 172272.38888888888,
            "unit": "ns",
            "range": "± 21864.72392377266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11086.454545454546,
            "unit": "ns",
            "range": "± 1720.8774219445183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34104.90804597701,
            "unit": "ns",
            "range": "± 4469.495225732038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4636758.126315789,
            "unit": "ns",
            "range": "± 306442.21594149334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4929003.120879121,
            "unit": "ns",
            "range": "± 354408.7497286724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6170704.577777778,
            "unit": "ns",
            "range": "± 460266.99398457306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6092062.844444444,
            "unit": "ns",
            "range": "± 401935.4865991071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10471690.61818182,
            "unit": "ns",
            "range": "± 444831.85739705566"
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
          "id": "3e57e4372fbba82358418691b4a5da0770f3f542",
          "message": "doc: update changelog",
          "timestamp": "2023-04-21T13:33:12+09:00",
          "tree_id": "d3771ead3aa18d58ac72c7b3f027e2785f150300",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3e57e4372fbba82358418691b4a5da0770f3f542"
        },
        "date": 1682052417851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7557676.166666667,
            "unit": "ns",
            "range": "± 39113.54404070593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20871030.9375,
            "unit": "ns",
            "range": "± 386293.350698571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52548555.875,
            "unit": "ns",
            "range": "± 1005188.792728933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107448281.33333333,
            "unit": "ns",
            "range": "± 1394067.622152356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212057496.4,
            "unit": "ns",
            "range": "± 2604042.7114487584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48629.44086021505,
            "unit": "ns",
            "range": "± 3259.078338847822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444209.2857142857,
            "unit": "ns",
            "range": "± 94554.02564955171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2682979.2,
            "unit": "ns",
            "range": "± 66392.81348158098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2331483.735632184,
            "unit": "ns",
            "range": "± 122841.59234440251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5515442.235294118,
            "unit": "ns",
            "range": "± 177861.25927949688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6027515.990384615,
            "unit": "ns",
            "range": "± 19724.83870394299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859037.4055524555,
            "unit": "ns",
            "range": "± 3458.1419425409085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363378.7384114584,
            "unit": "ns",
            "range": "± 4980.951537138235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602905.1881009615,
            "unit": "ns",
            "range": "± 1952.4470728792965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840625.4267578125,
            "unit": "ns",
            "range": "± 555.9924579462695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768355.8110677083,
            "unit": "ns",
            "range": "± 279.64256672471123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336395.46153846156,
            "unit": "ns",
            "range": "± 7997.099790452882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280561.63636363635,
            "unit": "ns",
            "range": "± 8768.870640004696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234102.14285714287,
            "unit": "ns",
            "range": "± 1497.5827115795569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5807200.692307692,
            "unit": "ns",
            "range": "± 33109.12520837877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935396.0714285714,
            "unit": "ns",
            "range": "± 35131.08201373883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20550.173469387755,
            "unit": "ns",
            "range": "± 1669.416572113633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92129.27272727272,
            "unit": "ns",
            "range": "± 5091.1090739568535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81903.91666666667,
            "unit": "ns",
            "range": "± 4987.387464324207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116335.72448979592,
            "unit": "ns",
            "range": "± 14758.96248747915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7806.468085106383,
            "unit": "ns",
            "range": "± 848.4918651389925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20120.252631578947,
            "unit": "ns",
            "range": "± 2082.1778132850754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3402647.382352941,
            "unit": "ns",
            "range": "± 107905.9878572799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3645455.25,
            "unit": "ns",
            "range": "± 82790.85387756498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4213803.071428572,
            "unit": "ns",
            "range": "± 59220.43579641729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498738.368421053,
            "unit": "ns",
            "range": "± 151452.64120784943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7470192.92,
            "unit": "ns",
            "range": "± 184309.70855101477"
          }
        ]
      }
    ]
  }
}