window.BENCHMARK_DATA = {
  "lastUpdate": 1692089581706,
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
          "id": "02910f703c47ed35e32a74edd1399f470264284e",
          "message": "document: Update changelog",
          "timestamp": "2023-08-11T11:10:35+09:00",
          "tree_id": "a45e1b654be30cd142e26ab7a9052f418b2e524a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/02910f703c47ed35e32a74edd1399f470264284e"
        },
        "date": 1691720667344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3599265.710526316,
            "unit": "ns",
            "range": "± 123330.16877031322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631911.573770492,
            "unit": "ns",
            "range": "± 163530.0088364476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4367798.90625,
            "unit": "ns",
            "range": "± 133019.2615175274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4081773.810810811,
            "unit": "ns",
            "range": "± 136475.60429428765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6196486.75,
            "unit": "ns",
            "range": "± 137041.04872662097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8224946.411764706,
            "unit": "ns",
            "range": "± 142679.57490959368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22131119.4,
            "unit": "ns",
            "range": "± 274255.97628018976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56073101.5,
            "unit": "ns",
            "range": "± 689460.3750664216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110479623.26666667,
            "unit": "ns",
            "range": "± 1898063.4309332038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225115379.33333334,
            "unit": "ns",
            "range": "± 4205721.078228809"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49290.425287356324,
            "unit": "ns",
            "range": "± 2629.353747783098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4990837.621651785,
            "unit": "ns",
            "range": "± 24524.15351152072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1580463.994419643,
            "unit": "ns",
            "range": "± 2946.5278447000096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086210.2010416666,
            "unit": "ns",
            "range": "± 2994.3121808807955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684187.068489583,
            "unit": "ns",
            "range": "± 11904.784122647134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823642.5339192708,
            "unit": "ns",
            "range": "± 1430.0033903079122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744422.8397739956,
            "unit": "ns",
            "range": "± 760.6216937739789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276289.1212121212,
            "unit": "ns",
            "range": "± 8027.12842396635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263394.28571428574,
            "unit": "ns",
            "range": "± 9421.151685813576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230674.85714285713,
            "unit": "ns",
            "range": "± 3972.802902372442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4309996.933333334,
            "unit": "ns",
            "range": "± 75824.27436181133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000864.736842105,
            "unit": "ns",
            "range": "± 84552.57937115691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21086.468085106382,
            "unit": "ns",
            "range": "± 1707.825805766342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87069.88571428572,
            "unit": "ns",
            "range": "± 4176.159485067649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72608.4074074074,
            "unit": "ns",
            "range": "± 2034.8740134741145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79524.72448979592,
            "unit": "ns",
            "range": "± 11966.300303098287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5456.8247422680415,
            "unit": "ns",
            "range": "± 548.0913285041493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18570.44680851064,
            "unit": "ns",
            "range": "± 1329.1703420613594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437764.1967213114,
            "unit": "ns",
            "range": "± 64561.14154835959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2714059.1904761903,
            "unit": "ns",
            "range": "± 97314.30847898638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1905043.494117647,
            "unit": "ns",
            "range": "± 102893.74931297582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4967596.129032258,
            "unit": "ns",
            "range": "± 145956.83062438745"
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
          "id": "3ed0c3ceb031fa6c23e13402e54d7222342264a1",
          "message": "test: Fix tests to apply IWorldState, IAccountState explorer query",
          "timestamp": "2023-08-15T16:36:27+09:00",
          "tree_id": "8045c18b8adcd2cd93e8299bbf118291eea98b14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3ed0c3ceb031fa6c23e13402e54d7222342264a1"
        },
        "date": 1692086295781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4700613.413333333,
            "unit": "ns",
            "range": "± 234428.17966064258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4964394.276595744,
            "unit": "ns",
            "range": "± 395497.0197268298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6178384.848101266,
            "unit": "ns",
            "range": "± 320959.97108690185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5512931.212765957,
            "unit": "ns",
            "range": "± 369005.72274779284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9057669.652173912,
            "unit": "ns",
            "range": "± 434015.6505425212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11058275.75,
            "unit": "ns",
            "range": "± 946328.0289703932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28120361.583333332,
            "unit": "ns",
            "range": "± 301254.2129191522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73350018.22222222,
            "unit": "ns",
            "range": "± 1543204.8960990454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 154132606.85,
            "unit": "ns",
            "range": "± 5455432.764468183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 304675123,
            "unit": "ns",
            "range": "± 5063873.8178838175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84407.9,
            "unit": "ns",
            "range": "± 21556.646275252653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6640836.0751953125,
            "unit": "ns",
            "range": "± 171248.07450513035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2039846.1192708334,
            "unit": "ns",
            "range": "± 37846.46682299906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1416671.0356702302,
            "unit": "ns",
            "range": "± 29977.619762447022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3506168.9991179435,
            "unit": "ns",
            "range": "± 107073.85825925937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1122330.2149135044,
            "unit": "ns",
            "range": "± 31961.70602980757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1022267.5957919034,
            "unit": "ns",
            "range": "± 24335.760904516803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385688.1182795699,
            "unit": "ns",
            "range": "± 35658.94140380791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379931.25,
            "unit": "ns",
            "range": "± 45276.27750576396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336283.8131868132,
            "unit": "ns",
            "range": "± 40325.53532989352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5741110.023809524,
            "unit": "ns",
            "range": "± 308255.88736855116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5232510.855421687,
            "unit": "ns",
            "range": "± 278396.9777272407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26131.4,
            "unit": "ns",
            "range": "± 5177.169945751349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130587.82291666667,
            "unit": "ns",
            "range": "± 19642.453423238676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 151453.2365591398,
            "unit": "ns",
            "range": "± 21759.756455637296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151331.86315789472,
            "unit": "ns",
            "range": "± 24880.459807789575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9904.647727272728,
            "unit": "ns",
            "range": "± 1404.5930734784868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25019.918604651164,
            "unit": "ns",
            "range": "± 3972.081529330659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2030469.2127659575,
            "unit": "ns",
            "range": "± 233645.91996740838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3850800.808988764,
            "unit": "ns",
            "range": "± 256439.0031174291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2633566.03125,
            "unit": "ns",
            "range": "± 203181.1034144275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7123749.084210526,
            "unit": "ns",
            "range": "± 534752.7137681862"
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
          "id": "bf39a4e73e6bd8149a0503295427d1fb7dfcb1f1",
          "message": "test: Fix tests to apply IWorldState, IAccountState explorer query",
          "timestamp": "2023-08-15T17:35:56+09:00",
          "tree_id": "df6dd5cf3d99e3a5dc2c35d7528a0b6dff483622",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bf39a4e73e6bd8149a0503295427d1fb7dfcb1f1"
        },
        "date": 1692089567226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4128175.6551724137,
            "unit": "ns",
            "range": "± 117726.86210894989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4397120.945945946,
            "unit": "ns",
            "range": "± 146890.53927555602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5475079,
            "unit": "ns",
            "range": "± 73422.73668172097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4838946.862745098,
            "unit": "ns",
            "range": "± 196248.40352910082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7725468.578947368,
            "unit": "ns",
            "range": "± 165524.07058334307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10059670.333333334,
            "unit": "ns",
            "range": "± 169534.96187203508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26592336.266666666,
            "unit": "ns",
            "range": "± 245829.9076781885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66193715.8,
            "unit": "ns",
            "range": "± 1084908.1000928935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129298861.55555555,
            "unit": "ns",
            "range": "± 2756655.29267502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264331162.93333334,
            "unit": "ns",
            "range": "± 3731759.1389317317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56758.53191489362,
            "unit": "ns",
            "range": "± 3623.266626589545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5953894.206770834,
            "unit": "ns",
            "range": "± 31925.297537409686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888452.7838541667,
            "unit": "ns",
            "range": "± 3260.178703811822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1281721.471842448,
            "unit": "ns",
            "range": "± 2721.270992413352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3188481.9302083333,
            "unit": "ns",
            "range": "± 29711.017954257008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008536.46953125,
            "unit": "ns",
            "range": "± 5712.02184735865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 878578.0760416667,
            "unit": "ns",
            "range": "± 12878.167837693807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331036.48484848486,
            "unit": "ns",
            "range": "± 10396.418163606915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314329.9090909091,
            "unit": "ns",
            "range": "± 9715.632620175964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279652.1323529412,
            "unit": "ns",
            "range": "± 13373.609655625036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5245374.142857143,
            "unit": "ns",
            "range": "± 60281.05527999928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4773778.615384615,
            "unit": "ns",
            "range": "± 54181.09733959877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23445.032608695652,
            "unit": "ns",
            "range": "± 1979.8564519564443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98840.66666666667,
            "unit": "ns",
            "range": "± 3671.200708420807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86293.36470588236,
            "unit": "ns",
            "range": "± 4693.750525577445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86932.51546391753,
            "unit": "ns",
            "range": "± 14957.185953520664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5237.645833333333,
            "unit": "ns",
            "range": "± 600.052295601092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21083.979591836734,
            "unit": "ns",
            "range": "± 1764.619867826986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731475.3444444444,
            "unit": "ns",
            "range": "± 92362.40935346294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3376382.214285714,
            "unit": "ns",
            "range": "± 144146.6528140023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2286991.2602739725,
            "unit": "ns",
            "range": "± 110021.3828299132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6216190.375,
            "unit": "ns",
            "range": "± 324210.1589005008"
          }
        ]
      }
    ]
  }
}