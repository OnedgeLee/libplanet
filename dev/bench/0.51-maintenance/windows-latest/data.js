window.BENCHMARK_DATA = {
  "lastUpdate": 1678689145837,
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
          "id": "6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T13:44:20+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05"
        },
        "date": 1678684029632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708723.1578947369,
            "unit": "ns",
            "range": "± 155434.0274998214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3282530.9278350514,
            "unit": "ns",
            "range": "± 299593.43505018903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2620281.25,
            "unit": "ns",
            "range": "± 275411.2164946312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6915878.125,
            "unit": "ns",
            "range": "± 505786.76892709493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54220.65217391304,
            "unit": "ns",
            "range": "± 7080.86010240108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8712338.144329896,
            "unit": "ns",
            "range": "± 578332.1159527231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23605670,
            "unit": "ns",
            "range": "± 1314565.908737835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61796918.18181818,
            "unit": "ns",
            "range": "± 2890615.901254854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 125758990.69767442,
            "unit": "ns",
            "range": "± 4640152.316917745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 266862651.72413793,
            "unit": "ns",
            "range": "± 7627095.888888543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998335.271139706,
            "unit": "ns",
            "range": "± 118742.94644287848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2072553.984375,
            "unit": "ns",
            "range": "± 45983.847781696546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522815.557391827,
            "unit": "ns",
            "range": "± 41058.893070488084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3192623.3816964286,
            "unit": "ns",
            "range": "± 44645.9881756483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062893.6458333333,
            "unit": "ns",
            "range": "± 9109.984203474676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1002402.5282118055,
            "unit": "ns",
            "range": "± 20879.410895964156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3770766.326530612,
            "unit": "ns",
            "range": "± 326744.04622120614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5758806.701030928,
            "unit": "ns",
            "range": "± 461741.6151348465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30208059.793814432,
            "unit": "ns",
            "range": "± 2004123.2801953056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7154737.755102041,
            "unit": "ns",
            "range": "± 504451.84039857215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36811287.5,
            "unit": "ns",
            "range": "± 2106146.5237802374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219516.12903225806,
            "unit": "ns",
            "range": "± 33681.530515940234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211082.60869565216,
            "unit": "ns",
            "range": "± 23933.70242568505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181929.16666666666,
            "unit": "ns",
            "range": "± 22713.63567582335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13444653.260869564,
            "unit": "ns",
            "range": "± 764145.1604590494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10545730.337078651,
            "unit": "ns",
            "range": "± 581575.9856952358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22090,
            "unit": "ns",
            "range": "± 5406.07336367933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58443.023255813954,
            "unit": "ns",
            "range": "± 10897.33416615571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39811.17647058824,
            "unit": "ns",
            "range": "± 3407.20853896723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116948.93617021276,
            "unit": "ns",
            "range": "± 24625.717585443726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5687.234042553191,
            "unit": "ns",
            "range": "± 822.4320140615724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20312.650602409638,
            "unit": "ns",
            "range": "± 3428.564047121338"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "9608377c93aab05295d887f047f8ad83a37964f9",
          "message": "Merge pull request #2918 from OnedgeLee/0.51-maintenance\n\n🚀 Release 0.51.1",
          "timestamp": "2023-03-13T15:07:19+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9608377c93aab05295d887f047f8ad83a37964f9"
        },
        "date": 1678688796634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1304112.6315789474,
            "unit": "ns",
            "range": "± 116907.35852393413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2318051.724137931,
            "unit": "ns",
            "range": "± 67917.17445688459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2049672.5274725275,
            "unit": "ns",
            "range": "± 114751.52389782993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4762490.697674419,
            "unit": "ns",
            "range": "± 165652.30484929154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41716.666666666664,
            "unit": "ns",
            "range": "± 2017.3193760009178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6924046.666666667,
            "unit": "ns",
            "range": "± 36811.25345532777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17514826.666666668,
            "unit": "ns",
            "range": "± 137097.7464994888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44678080,
            "unit": "ns",
            "range": "± 340745.16913041373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91495820,
            "unit": "ns",
            "range": "± 697333.7694389968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 177975100,
            "unit": "ns",
            "range": "± 2017428.699749121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863685.260416667,
            "unit": "ns",
            "range": "± 16602.96655792363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502151.7252604167,
            "unit": "ns",
            "range": "± 3466.965084628558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161209.2354910714,
            "unit": "ns",
            "range": "± 1393.8896757744872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669873.203125,
            "unit": "ns",
            "range": "± 14009.28176614976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812441.0416666666,
            "unit": "ns",
            "range": "± 7623.507219249187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720861.9401041666,
            "unit": "ns",
            "range": "± 755.286154880629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2936982.6086956523,
            "unit": "ns",
            "range": "± 74143.7832382822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4532542.105263158,
            "unit": "ns",
            "range": "± 47315.223246616864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20986973.333333332,
            "unit": "ns",
            "range": "± 239881.03738152812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5658080,
            "unit": "ns",
            "range": "± 59814.51328900035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23780460,
            "unit": "ns",
            "range": "± 316342.488000404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172662.5,
            "unit": "ns",
            "range": "± 5732.216088220269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170075,
            "unit": "ns",
            "range": "± 3450.9293014314653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147153.33333333334,
            "unit": "ns",
            "range": "± 2718.42040968823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10211633.333333334,
            "unit": "ns",
            "range": "± 115661.0606573403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8210566.666666667,
            "unit": "ns",
            "range": "± 75758.07044860131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16085.106382978724,
            "unit": "ns",
            "range": "± 1470.4221796512836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45995.604395604394,
            "unit": "ns",
            "range": "± 3652.1199958353595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34923.333333333336,
            "unit": "ns",
            "range": "± 1547.5915313875942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81170.20202020202,
            "unit": "ns",
            "range": "± 12947.350054283661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4062.2448979591836,
            "unit": "ns",
            "range": "± 552.3175737682881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14819.354838709678,
            "unit": "ns",
            "range": "± 1160.9832849521515"
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
          "id": "af209bc57925812244e2a6d1ca1fb402fff839c4",
          "message": "Fix typo 0.51.1",
          "timestamp": "2023-03-13T15:12:54+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/OnedgeLee/libplanet/commit/af209bc57925812244e2a6d1ca1fb402fff839c4"
        },
        "date": 1678689104672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323354.081632653,
            "unit": "ns",
            "range": "± 83646.28419396275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2325081.25,
            "unit": "ns",
            "range": "± 71255.16817702056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104060,
            "unit": "ns",
            "range": "± 131539.02673942648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4797846.875,
            "unit": "ns",
            "range": "± 114267.60324435652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41432.43243243243,
            "unit": "ns",
            "range": "± 1889.3434467443037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6939771.428571428,
            "unit": "ns",
            "range": "± 14413.051167467765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17641666.666666668,
            "unit": "ns",
            "range": "± 118024.39618671258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45336793.333333336,
            "unit": "ns",
            "range": "± 593788.3527061841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89094100,
            "unit": "ns",
            "range": "± 1416083.3480312622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 182363953.33333334,
            "unit": "ns",
            "range": "± 930948.4494448709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4903695.479910715,
            "unit": "ns",
            "range": "± 6816.194878242563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511397.2395833333,
            "unit": "ns",
            "range": "± 2429.4178805219717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144688.28125,
            "unit": "ns",
            "range": "± 1020.8906679948074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562188.4765625,
            "unit": "ns",
            "range": "± 4996.570485572158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801485.8723958334,
            "unit": "ns",
            "range": "± 2138.604110702604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739600.5022321428,
            "unit": "ns",
            "range": "± 990.9864432160708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2949518.1818181816,
            "unit": "ns",
            "range": "± 39880.68677303811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4517680,
            "unit": "ns",
            "range": "± 50135.31974281491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21234171.42857143,
            "unit": "ns",
            "range": "± 321173.15825332847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5676806.666666667,
            "unit": "ns",
            "range": "± 65850.83215296596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24481436.666666668,
            "unit": "ns",
            "range": "± 345950.3285292902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176297.36842105264,
            "unit": "ns",
            "range": "± 5804.7737503739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168550,
            "unit": "ns",
            "range": "± 3935.3017673362738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148177.35849056602,
            "unit": "ns",
            "range": "± 6106.290624915927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10218713.333333334,
            "unit": "ns",
            "range": "± 87003.75908682392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8319450,
            "unit": "ns",
            "range": "± 47933.60391849735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18314.893617021276,
            "unit": "ns",
            "range": "± 1666.2982891910349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48419.14893617021,
            "unit": "ns",
            "range": "± 4552.732290714318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34623.880597014926,
            "unit": "ns",
            "range": "± 1563.1252254299386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73081.70731707317,
            "unit": "ns",
            "range": "± 4378.965660856241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4025.531914893617,
            "unit": "ns",
            "range": "± 306.536731547284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14632.222222222223,
            "unit": "ns",
            "range": "± 1199.609278878975"
          }
        ]
      }
    ]
  }
}