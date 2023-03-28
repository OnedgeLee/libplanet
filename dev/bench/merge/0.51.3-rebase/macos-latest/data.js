window.BENCHMARK_DATA = {
  "lastUpdate": 1679988311480,
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
          "id": "f744e91d159caa20a6a50a25108624fe61221db5",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:37:19+09:00",
          "tree_id": "4ec1541a6ce11138de359316c6b5dcca63b4d153",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f744e91d159caa20a6a50a25108624fe61221db5"
        },
        "date": 1679986605908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8113304.185185186,
            "unit": "ns",
            "range": "± 222772.1985803223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20367866.025641024,
            "unit": "ns",
            "range": "± 709633.4633026919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52556998.298245616,
            "unit": "ns",
            "range": "± 2016935.0352308252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101999114.14285715,
            "unit": "ns",
            "range": "± 1750840.623905419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206722117,
            "unit": "ns",
            "range": "± 2820922.2020058986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67133.9587628866,
            "unit": "ns",
            "range": "± 11894.94679905919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219080.65934065933,
            "unit": "ns",
            "range": "± 20092.11157987675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226639.42268041236,
            "unit": "ns",
            "range": "± 26998.39933404812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195751.70103092783,
            "unit": "ns",
            "range": "± 21308.86441091132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13108810.148351649,
            "unit": "ns",
            "range": "± 733319.5416120131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10091472.477272727,
            "unit": "ns",
            "range": "± 378530.286827791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20490.177083333332,
            "unit": "ns",
            "range": "± 4946.1841219582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57376.09550561798,
            "unit": "ns",
            "range": "± 10626.1819660419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52089.86170212766,
            "unit": "ns",
            "range": "± 5306.874235115686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120833.33684210526,
            "unit": "ns",
            "range": "± 17497.56937686193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7422.052083333333,
            "unit": "ns",
            "range": "± 1198.5643945091513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19632.58064516129,
            "unit": "ns",
            "range": "± 2944.9309777199123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608122.2164948455,
            "unit": "ns",
            "range": "± 137176.4465528967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729029.8604651163,
            "unit": "ns",
            "range": "± 97343.23125062881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2527673.7395833335,
            "unit": "ns",
            "range": "± 242532.04595969297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6297159.959183673,
            "unit": "ns",
            "range": "± 247784.50987769922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3539090.663043478,
            "unit": "ns",
            "range": "± 384104.37991020613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5306282.0375,
            "unit": "ns",
            "range": "± 258187.30487551988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26786445.987951808,
            "unit": "ns",
            "range": "± 1388279.8738595718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6427623.795918368,
            "unit": "ns",
            "range": "± 233398.0449546778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29412276.92253521,
            "unit": "ns",
            "range": "± 1433867.4202317277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7083147.725360577,
            "unit": "ns",
            "range": "± 292232.28970951366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004844.7881610577,
            "unit": "ns",
            "range": "± 25760.56453288042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293033.23046875,
            "unit": "ns",
            "range": "± 13047.187590423111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532578.4884868423,
            "unit": "ns",
            "range": "± 47474.35224274281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886532.994140625,
            "unit": "ns",
            "range": "± 16747.18857225405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823312.4817708334,
            "unit": "ns",
            "range": "± 22675.10599668111"
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
          "id": "e5da38e307c273c3d6360d6e70ab68cd1efda258",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:45:32+09:00",
          "tree_id": "ef4d66ff230df014d09b48e3d48ce239e885d511",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e5da38e307c273c3d6360d6e70ab68cd1efda258"
        },
        "date": 1679986882408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7718773.689655173,
            "unit": "ns",
            "range": "± 191155.1866183045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20356382.084615383,
            "unit": "ns",
            "range": "± 945607.2039445227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48601009.5625,
            "unit": "ns",
            "range": "± 1886655.567615743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99909207.5263158,
            "unit": "ns",
            "range": "± 3307809.443951134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207963158.4,
            "unit": "ns",
            "range": "± 3444417.203598368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57375.22580645161,
            "unit": "ns",
            "range": "± 6606.227901742535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192045.98863636365,
            "unit": "ns",
            "range": "± 11432.84536691446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195102.375,
            "unit": "ns",
            "range": "± 12082.841799891567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183218.16842105263,
            "unit": "ns",
            "range": "± 20300.660043589105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11564528.625,
            "unit": "ns",
            "range": "± 407158.5502999958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9166738.151515152,
            "unit": "ns",
            "range": "± 277571.56527901965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17087.788235294116,
            "unit": "ns",
            "range": "± 1755.9816552770328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51416.10526315789,
            "unit": "ns",
            "range": "± 6636.197514909189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46953.279569892475,
            "unit": "ns",
            "range": "± 5132.993391786274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105557.93406593407,
            "unit": "ns",
            "range": "± 15218.602482051876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5518.714285714285,
            "unit": "ns",
            "range": "± 707.5072747964116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17037.59638554217,
            "unit": "ns",
            "range": "± 2252.858956615218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478148.4680851065,
            "unit": "ns",
            "range": "± 160448.7274556708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2824222.0263157897,
            "unit": "ns",
            "range": "± 202388.8225365226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2398480.863157895,
            "unit": "ns",
            "range": "± 269018.28258303914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5978813.439393939,
            "unit": "ns",
            "range": "± 280339.5489254403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101000.0222222223,
            "unit": "ns",
            "range": "± 200184.48496852064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4865410.736842105,
            "unit": "ns",
            "range": "± 209424.67580096723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22784803.2,
            "unit": "ns",
            "range": "± 826552.2458848014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6085545.120689655,
            "unit": "ns",
            "range": "± 265347.4203625416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27158848.525641024,
            "unit": "ns",
            "range": "± 940178.9548112492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6058679.752083333,
            "unit": "ns",
            "range": "± 48406.778943467354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909670.75546875,
            "unit": "ns",
            "range": "± 13349.037056575255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1250037.7807291667,
            "unit": "ns",
            "range": "± 13008.587456788715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641428.47890625,
            "unit": "ns",
            "range": "± 35298.66799896354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843706.3200520833,
            "unit": "ns",
            "range": "± 8019.80410489515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 707733.0613932292,
            "unit": "ns",
            "range": "± 4509.583092614173"
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
          "id": "ccb0f3331688abc89ce2754f723988effacb7d06",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:57:55+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ccb0f3331688abc89ce2754f723988effacb7d06"
        },
        "date": 1679988265116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10035192.086021505,
            "unit": "ns",
            "range": "± 1667721.1235444953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23413402.555555556,
            "unit": "ns",
            "range": "± 1614710.8537752368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57933948.17415731,
            "unit": "ns",
            "range": "± 4235551.391087156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118509416.67676768,
            "unit": "ns",
            "range": "± 7284253.33227192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269212204.2906977,
            "unit": "ns",
            "range": "± 32614463.58295987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83172.95348837209,
            "unit": "ns",
            "range": "± 9075.45122897897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277324.7173913043,
            "unit": "ns",
            "range": "± 45020.508352470424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298586.02173913043,
            "unit": "ns",
            "range": "± 50885.734137838415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244098.6847826087,
            "unit": "ns",
            "range": "± 30961.07803725859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14957913.6,
            "unit": "ns",
            "range": "± 994099.503769547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11556528.860824741,
            "unit": "ns",
            "range": "± 817356.3167244873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29527.422222222223,
            "unit": "ns",
            "range": "± 4124.327410546873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76577.86516853933,
            "unit": "ns",
            "range": "± 14726.312167334892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72831.92352941177,
            "unit": "ns",
            "range": "± 8324.226312363195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152232.9659090909,
            "unit": "ns",
            "range": "± 25232.15520903986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10711.883720930233,
            "unit": "ns",
            "range": "± 1451.2995022198686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26927.68181818182,
            "unit": "ns",
            "range": "± 3973.5804623412505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671393.1958762887,
            "unit": "ns",
            "range": "± 207484.1217424661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920883.5,
            "unit": "ns",
            "range": "± 151643.17706011728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2735228.305263158,
            "unit": "ns",
            "range": "± 235083.52648245494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6760118.275862069,
            "unit": "ns",
            "range": "± 502241.85040565836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4000080.1842105263,
            "unit": "ns",
            "range": "± 473991.6140637408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6142819.412087912,
            "unit": "ns",
            "range": "± 663760.2048348759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29151594.414893616,
            "unit": "ns",
            "range": "± 2005117.9869702323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7166233.302083333,
            "unit": "ns",
            "range": "± 598494.8321121847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34543073.9,
            "unit": "ns",
            "range": "± 3702985.4006027137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7987733.331636236,
            "unit": "ns",
            "range": "± 442519.3250741551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330035.492373512,
            "unit": "ns",
            "range": "± 125081.20494986557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485178.3773686835,
            "unit": "ns",
            "range": "± 48534.092543232386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3670413.068133224,
            "unit": "ns",
            "range": "± 214721.41709923645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984100.1691894531,
            "unit": "ns",
            "range": "± 74529.52963618423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899911.9168911638,
            "unit": "ns",
            "range": "± 49118.994240493266"
          }
        ]
      }
    ]
  }
}