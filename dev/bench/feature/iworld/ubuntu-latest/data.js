window.BENCHMARK_DATA = {
  "lastUpdate": 1691661087388,
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
          "id": "58342035f516267808c027e47fa95880240e0206",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-08-10T17:11:49+09:00",
          "tree_id": "b3df59f6b71ffb5fada57ce7b52a255cd5ea73a7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/58342035f516267808c027e47fa95880240e0206"
        },
        "date": 1691656960750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3844417.75,
            "unit": "ns",
            "range": "± 61648.23004055618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4070686.5625,
            "unit": "ns",
            "range": "± 76025.38906616987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4746166.5625,
            "unit": "ns",
            "range": "± 84681.74125588802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4380018.3125,
            "unit": "ns",
            "range": "± 79229.77533370373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6810046.368421053,
            "unit": "ns",
            "range": "± 147766.88092743716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9035731.666666666,
            "unit": "ns",
            "range": "± 143701.97452747557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23461500.533333335,
            "unit": "ns",
            "range": "± 198510.1093801618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58827656.53333333,
            "unit": "ns",
            "range": "± 287322.48390213953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116318810.66666667,
            "unit": "ns",
            "range": "± 216662.73775902973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234895406.15384614,
            "unit": "ns",
            "range": "± 487736.78165872185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59321.489583333336,
            "unit": "ns",
            "range": "± 5080.417647553649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5132407.430889423,
            "unit": "ns",
            "range": "± 28195.4406153847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1595405.6545572917,
            "unit": "ns",
            "range": "± 1160.7079962512325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092360.0122767857,
            "unit": "ns",
            "range": "± 934.1619747745781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611081.912239583,
            "unit": "ns",
            "range": "± 6191.928556318749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844071.4740513393,
            "unit": "ns",
            "range": "± 307.6617950345619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771978.0302734375,
            "unit": "ns",
            "range": "± 309.8824758716574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303068.65,
            "unit": "ns",
            "range": "± 6883.814787524964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290876.7,
            "unit": "ns",
            "range": "± 13000.939249381243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272741.4736842105,
            "unit": "ns",
            "range": "± 11059.993572565403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4678964.6,
            "unit": "ns",
            "range": "± 55483.47170078156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4289271.533333333,
            "unit": "ns",
            "range": "± 35624.79638812323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26896.083333333332,
            "unit": "ns",
            "range": "± 2422.0985927460624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102334.30927835051,
            "unit": "ns",
            "range": "± 6994.385701464461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94048,
            "unit": "ns",
            "range": "± 7084.028816346905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104082.1875,
            "unit": "ns",
            "range": "± 13815.43280714304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8141.9795918367345,
            "unit": "ns",
            "range": "± 1235.0946787832077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26751.287234042553,
            "unit": "ns",
            "range": "± 2517.326550056671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563160.0333333334,
            "unit": "ns",
            "range": "± 85551.25713790115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2995482.6875,
            "unit": "ns",
            "range": "± 86433.2035898382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048925.582278481,
            "unit": "ns",
            "range": "± 98335.04054905764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5274152.68,
            "unit": "ns",
            "range": "± 137610.80601486206"
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
          "id": "003b5b6e75ba7ac7ac519e097ba2d1998c34da81",
          "message": "document: Update changelog",
          "timestamp": "2023-08-10T18:21:41+09:00",
          "tree_id": "27c8d686e27a4f66b4c94facb50e5858ac53224c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/003b5b6e75ba7ac7ac519e097ba2d1998c34da81"
        },
        "date": 1691660446831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3789049.1770833335,
            "unit": "ns",
            "range": "± 320457.70792099676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3838984.5268817204,
            "unit": "ns",
            "range": "± 302042.7466535372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5391466.546391753,
            "unit": "ns",
            "range": "± 483007.1451064634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4304934.578947368,
            "unit": "ns",
            "range": "± 397543.03379017656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8439435.925531914,
            "unit": "ns",
            "range": "± 719329.4145788638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9004935,
            "unit": "ns",
            "range": "± 466213.54760348354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24377925.06122449,
            "unit": "ns",
            "range": "± 1959034.2389730923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67420300.56565657,
            "unit": "ns",
            "range": "± 4522275.729903903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142344811.36842105,
            "unit": "ns",
            "range": "± 6116092.335532452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259459047.3275862,
            "unit": "ns",
            "range": "± 11387321.48712859"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66146.625,
            "unit": "ns",
            "range": "± 18065.16529576073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5692979.592633928,
            "unit": "ns",
            "range": "± 81800.93601861267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891913.44140625,
            "unit": "ns",
            "range": "± 32793.36257789115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1259484.2615885416,
            "unit": "ns",
            "range": "± 22065.92797401594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3038024.65234375,
            "unit": "ns",
            "range": "± 33401.01739620842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018980.7859375,
            "unit": "ns",
            "range": "± 26522.579255163473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926813.5911458334,
            "unit": "ns",
            "range": "± 13012.516900254694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356491.3617021277,
            "unit": "ns",
            "range": "± 52007.07114201866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341446.8229166667,
            "unit": "ns",
            "range": "± 48059.68927555658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280623.8494623656,
            "unit": "ns",
            "range": "± 47225.31146925763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5355077.627659574,
            "unit": "ns",
            "range": "± 348274.52436192706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4312927.282608695,
            "unit": "ns",
            "range": "± 314644.7246654699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26055.94,
            "unit": "ns",
            "range": "± 11401.02958209113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110744.82105263158,
            "unit": "ns",
            "range": "± 24273.60333952622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106800.73684210527,
            "unit": "ns",
            "range": "± 23545.74081248527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113248.26315789473,
            "unit": "ns",
            "range": "± 26427.394019540665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6339.303370786517,
            "unit": "ns",
            "range": "± 1437.526753936762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26871.082474226805,
            "unit": "ns",
            "range": "± 10662.085616869737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587621.8152173914,
            "unit": "ns",
            "range": "± 185311.73868346433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3081670.4680851065,
            "unit": "ns",
            "range": "± 287704.4820326049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2257108.7789473683,
            "unit": "ns",
            "range": "± 225056.84440594396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6142767.09375,
            "unit": "ns",
            "range": "± 526143.9126900355"
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
          "id": "28b0e8ac7d6a2603eac4b6300fea17b0c7e20a87",
          "message": "document: Update changelog",
          "timestamp": "2023-08-10T18:34:06+09:00",
          "tree_id": "98be677852fb1381c4a1c8e2de4434a714feafe2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/28b0e8ac7d6a2603eac4b6300fea17b0c7e20a87"
        },
        "date": 1691661071621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4392457.733333333,
            "unit": "ns",
            "range": "± 80920.19268872852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4580365.928571428,
            "unit": "ns",
            "range": "± 75901.6672964377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5440190.65,
            "unit": "ns",
            "range": "± 119384.20054697136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991012.185185186,
            "unit": "ns",
            "range": "± 134248.35508204048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7814813.391304348,
            "unit": "ns",
            "range": "± 191367.24008962908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10292744.0625,
            "unit": "ns",
            "range": "± 193686.21546734424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28318083.91891892,
            "unit": "ns",
            "range": "± 955537.9377728773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67544296.26666667,
            "unit": "ns",
            "range": "± 288961.49922029075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135344781.69230768,
            "unit": "ns",
            "range": "± 716614.8215305281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268806290.4,
            "unit": "ns",
            "range": "± 1738871.1795884708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56813.83157894737,
            "unit": "ns",
            "range": "± 3672.196361888721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6010334.872209822,
            "unit": "ns",
            "range": "± 22053.171210721026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897069.0443209135,
            "unit": "ns",
            "range": "± 1127.1069949203888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1283395.2087590145,
            "unit": "ns",
            "range": "± 1441.8670493584882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155569.4405691964,
            "unit": "ns",
            "range": "± 5314.922626140516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036070.6416015625,
            "unit": "ns",
            "range": "± 996.7299720941746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923196.6388346354,
            "unit": "ns",
            "range": "± 362.135797808897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322191.5625,
            "unit": "ns",
            "range": "± 6086.896274991057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314943.25,
            "unit": "ns",
            "range": "± 4920.857893487145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284602.97826086957,
            "unit": "ns",
            "range": "± 10945.40918983161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5334035.714285715,
            "unit": "ns",
            "range": "± 34891.90880072687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4862130.4,
            "unit": "ns",
            "range": "± 41924.46715701942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25063.322916666668,
            "unit": "ns",
            "range": "± 1921.926141824184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106905.08219178082,
            "unit": "ns",
            "range": "± 5210.107702430772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91955.92592592593,
            "unit": "ns",
            "range": "± 4821.028878200632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99332.92783505155,
            "unit": "ns",
            "range": "± 11848.51172637959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6837.639175257732,
            "unit": "ns",
            "range": "± 752.6289367051862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25442.255319148935,
            "unit": "ns",
            "range": "± 1911.8248105289874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843749.9361702127,
            "unit": "ns",
            "range": "± 125179.09472954224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3368071.277777778,
            "unit": "ns",
            "range": "± 69529.84396121741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2362964.623529412,
            "unit": "ns",
            "range": "± 126540.65400231174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6269728.218181818,
            "unit": "ns",
            "range": "± 266749.8923456821"
          }
        ]
      }
    ]
  }
}