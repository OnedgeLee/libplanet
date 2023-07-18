window.BENCHMARK_DATA = {
  "lastUpdate": 1689576818192,
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
          "id": "bec41914bb80694e2ad5b423371ba9ffd4b34f12",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:42:33+09:00",
          "tree_id": "b0f30e1643a3b6eea8b4b084576d861d1ce465bf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bec41914bb80694e2ad5b423371ba9ffd4b34f12"
        },
        "date": 1689321433585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7908502,
            "unit": "ns",
            "range": "± 118349.17109311992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19199639.45652174,
            "unit": "ns",
            "range": "± 483218.1702827483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48677365.102564104,
            "unit": "ns",
            "range": "± 1692654.4268561823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96006904.65,
            "unit": "ns",
            "range": "± 1812475.7161276245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200683684.45652175,
            "unit": "ns",
            "range": "± 7574002.265445959"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57398.62637362637,
            "unit": "ns",
            "range": "± 8006.340037257073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302570.36842105264,
            "unit": "ns",
            "range": "± 12980.794535355793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302996.4623655914,
            "unit": "ns",
            "range": "± 19075.637989535433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284374.85714285716,
            "unit": "ns",
            "range": "± 21585.51738894515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233831.461538462,
            "unit": "ns",
            "range": "± 42644.0653385974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3629548.0625,
            "unit": "ns",
            "range": "± 69115.41041327783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19137.536842105263,
            "unit": "ns",
            "range": "± 3727.115939974392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89775.22222222222,
            "unit": "ns",
            "range": "± 10511.383314036415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88388.62121212122,
            "unit": "ns",
            "range": "± 10042.041475993112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106752.625,
            "unit": "ns",
            "range": "± 14025.29315070305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5741.322580645161,
            "unit": "ns",
            "range": "± 716.8529981088283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16454.537634408603,
            "unit": "ns",
            "range": "± 1870.5126509523009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577192.3402061856,
            "unit": "ns",
            "range": "± 170350.19022943874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935291,
            "unit": "ns",
            "range": "± 218652.12135604813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105647.8736842107,
            "unit": "ns",
            "range": "± 245913.02580441267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6043023.579545454,
            "unit": "ns",
            "range": "± 325248.35113306146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250362.3255813955,
            "unit": "ns",
            "range": "± 74249.0778655969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448938.6,
            "unit": "ns",
            "range": "± 129066.29878977283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4339875.94117647,
            "unit": "ns",
            "range": "± 84035.08055677595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4004672.3333333335,
            "unit": "ns",
            "range": "± 103244.79799703845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7292607,
            "unit": "ns",
            "range": "± 327329.02237792057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6635910.528125,
            "unit": "ns",
            "range": "± 65337.85520108082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2096398.181640625,
            "unit": "ns",
            "range": "± 31986.953013532886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234653.0419921875,
            "unit": "ns",
            "range": "± 9947.649848263758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2424908.177604167,
            "unit": "ns",
            "range": "± 31751.339519932953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758690.2473307292,
            "unit": "ns",
            "range": "± 7020.2946923181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 697599.8951590402,
            "unit": "ns",
            "range": "± 5230.869486176142"
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
          "id": "ff3b7c45a49ead28d4346d14c203a589539e6322",
          "message": "refactor: Introduce",
          "timestamp": "2023-07-14T16:38:45+09:00",
          "tree_id": "33a334eb5d869904e6f0a1b0c40899076b872c82",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ff3b7c45a49ead28d4346d14c203a589539e6322"
        },
        "date": 1689321441004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8372505.733333333,
            "unit": "ns",
            "range": "± 151052.6564061433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20716693.111111112,
            "unit": "ns",
            "range": "± 736129.596745623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53333588.17391305,
            "unit": "ns",
            "range": "± 2038550.0956867612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108087416.8076923,
            "unit": "ns",
            "range": "± 1803155.4475180162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223914410.5,
            "unit": "ns",
            "range": "± 11469029.90828424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63960.142105263156,
            "unit": "ns",
            "range": "± 8098.276488445839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343620.5842696629,
            "unit": "ns",
            "range": "± 27709.119087162766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327557.77659574465,
            "unit": "ns",
            "range": "± 24272.214437214272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340585.1914893617,
            "unit": "ns",
            "range": "± 37264.4125187311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4901960.316326531,
            "unit": "ns",
            "range": "± 553959.3347381168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4117458.1565656564,
            "unit": "ns",
            "range": "± 253682.8981479398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23152.58510638298,
            "unit": "ns",
            "range": "± 3849.185043363772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121009.13684210526,
            "unit": "ns",
            "range": "± 16820.80915756188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119200.5,
            "unit": "ns",
            "range": "± 10039.604272753402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128042,
            "unit": "ns",
            "range": "± 19215.74544901369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8159.926315789474,
            "unit": "ns",
            "range": "± 863.7835160490067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21997.20879120879,
            "unit": "ns",
            "range": "± 2809.5658206146913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607582.2157894736,
            "unit": "ns",
            "range": "± 152181.61351047768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815151.286516854,
            "unit": "ns",
            "range": "± 161843.54621070367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050780.52,
            "unit": "ns",
            "range": "± 174928.85408142942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6595875.350515464,
            "unit": "ns",
            "range": "± 504828.74473645847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3406570.111111111,
            "unit": "ns",
            "range": "± 158696.49030336874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748578.443298969,
            "unit": "ns",
            "range": "± 294421.4120453018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4862153.854166667,
            "unit": "ns",
            "range": "± 415751.93487308675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4224841.216494845,
            "unit": "ns",
            "range": "± 289082.0167776506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7840146.284210526,
            "unit": "ns",
            "range": "± 599912.2206806534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6560676.279017857,
            "unit": "ns",
            "range": "± 116308.94936687013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143292.0915178573,
            "unit": "ns",
            "range": "± 21411.020228887068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1306235.6998197115,
            "unit": "ns",
            "range": "± 10760.739318105358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2776802.49078125,
            "unit": "ns",
            "range": "± 215161.5035655181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821721.1071965144,
            "unit": "ns",
            "range": "± 5545.849928772983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 813991.493765024,
            "unit": "ns",
            "range": "± 13089.823490476421"
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
          "id": "d1a40d16c45df73e718f3c2f49218e80b26485b4",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:40:21+09:00",
          "tree_id": "33a334eb5d869904e6f0a1b0c40899076b872c82",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d1a40d16c45df73e718f3c2f49218e80b26485b4"
        },
        "date": 1689321625497,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8971290.352272727,
            "unit": "ns",
            "range": "± 802413.3164612952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21469024.25490196,
            "unit": "ns",
            "range": "± 866868.5946224801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53256754,
            "unit": "ns",
            "range": "± 1517221.4267813286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107699581.07894737,
            "unit": "ns",
            "range": "± 3693343.01168043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212381922.83333334,
            "unit": "ns",
            "range": "± 3685347.7883099774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68163.5744680851,
            "unit": "ns",
            "range": "± 10477.126112652093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364666.9767441861,
            "unit": "ns",
            "range": "± 62747.89976611389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326970.97826086957,
            "unit": "ns",
            "range": "± 29470.513168353813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315473.4555555555,
            "unit": "ns",
            "range": "± 20643.467735846218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4405695.767123288,
            "unit": "ns",
            "range": "± 203123.89907657352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958871.4,
            "unit": "ns",
            "range": "± 217249.90954559346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24980.18085106383,
            "unit": "ns",
            "range": "± 5042.118446576477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106012.6182795699,
            "unit": "ns",
            "range": "± 11873.592072920426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116467.36585365854,
            "unit": "ns",
            "range": "± 7533.6812694350765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115533.28723404255,
            "unit": "ns",
            "range": "± 24854.079198684045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5742.31914893617,
            "unit": "ns",
            "range": "± 761.9048033099639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17876.135416666668,
            "unit": "ns",
            "range": "± 3379.553566343502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669365.888888889,
            "unit": "ns",
            "range": "± 169129.97109865007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3146600.130952381,
            "unit": "ns",
            "range": "± 288205.11318423355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198857.415789474,
            "unit": "ns",
            "range": "± 287373.6461894263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6316979.655555556,
            "unit": "ns",
            "range": "± 478391.9292056746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388260.7083333335,
            "unit": "ns",
            "range": "± 220093.2540056083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3653871.7258064514,
            "unit": "ns",
            "range": "± 228965.65724091392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4650100.294117647,
            "unit": "ns",
            "range": "± 220892.2282740666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4120074.652631579,
            "unit": "ns",
            "range": "± 355133.3098124957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7596785.956989247,
            "unit": "ns",
            "range": "± 459740.29980716365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6906314.54671875,
            "unit": "ns",
            "range": "± 409202.98382822995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2192892.022245763,
            "unit": "ns",
            "range": "± 96723.5328061795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408354.35421875,
            "unit": "ns",
            "range": "± 37418.107997210514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576505.6633391203,
            "unit": "ns",
            "range": "± 72059.26692941495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874572.3660762393,
            "unit": "ns",
            "range": "± 25626.87424695795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853028.1193704044,
            "unit": "ns",
            "range": "± 17516.515998309515"
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
          "id": "96a4ac52b7e642589aee9c900d7d36fc0017a642",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T17:00:45+09:00",
          "tree_id": "b17ae73be2cd65028593973a4117e8aa6a6ccee3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/96a4ac52b7e642589aee9c900d7d36fc0017a642"
        },
        "date": 1689322510489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7886031.653846154,
            "unit": "ns",
            "range": "± 170692.98374448606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19170093.44117647,
            "unit": "ns",
            "range": "± 373431.04568923946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46838936.78571428,
            "unit": "ns",
            "range": "± 494258.722903638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91625379,
            "unit": "ns",
            "range": "± 730708.3833530993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186651695.41666666,
            "unit": "ns",
            "range": "± 785125.3199151722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53333.760869565216,
            "unit": "ns",
            "range": "± 4979.779645307071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310875.14444444445,
            "unit": "ns",
            "range": "± 17954.56003957926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291280.1397849462,
            "unit": "ns",
            "range": "± 20355.107056307173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279798.2826086957,
            "unit": "ns",
            "range": "± 17160.819833528207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985646,
            "unit": "ns",
            "range": "± 76718.42835199376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3843328.6,
            "unit": "ns",
            "range": "± 38462.950705470175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20340.144329896906,
            "unit": "ns",
            "range": "± 3361.258822938992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89809.37234042553,
            "unit": "ns",
            "range": "± 7402.440412740448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104365.46464646465,
            "unit": "ns",
            "range": "± 13913.498102755115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111922.37096774194,
            "unit": "ns",
            "range": "± 11749.652840593802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7016.494845360825,
            "unit": "ns",
            "range": "± 1035.4910683232954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16564.689655172413,
            "unit": "ns",
            "range": "± 1519.5809115516704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495241.21875,
            "unit": "ns",
            "range": "± 119030.5479277619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2755530.1746031744,
            "unit": "ns",
            "range": "± 124349.8970602243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030620.0326086956,
            "unit": "ns",
            "range": "± 238674.52622321903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5527412.833333333,
            "unit": "ns",
            "range": "± 162040.76028650682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3178852.35,
            "unit": "ns",
            "range": "± 72095.70626186673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3291217.4523809524,
            "unit": "ns",
            "range": "± 106190.74978735256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303546.652173913,
            "unit": "ns",
            "range": "± 164624.39556507175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3781235,
            "unit": "ns",
            "range": "± 145002.5671404935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6995062.681818182,
            "unit": "ns",
            "range": "± 225350.83475810668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6382942.192447917,
            "unit": "ns",
            "range": "± 107720.50395100967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968026.9606770833,
            "unit": "ns",
            "range": "± 19868.79514922268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313687.88671875,
            "unit": "ns",
            "range": "± 28014.764690085936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532189.67578125,
            "unit": "ns",
            "range": "± 21841.389567529182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776758.0807291666,
            "unit": "ns",
            "range": "± 18466.388864066426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727673.8078264509,
            "unit": "ns",
            "range": "± 7020.715791711663"
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
          "id": "6004a41ceb9f088bbbe389539e24532a1e0011ce",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:57:57+09:00",
          "tree_id": "9a514237711eb8abbcfc90aab8e7df35c35f516b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6004a41ceb9f088bbbe389539e24532a1e0011ce"
        },
        "date": 1689322523926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9028400.322580645,
            "unit": "ns",
            "range": "± 275045.2171096463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23727752.454545453,
            "unit": "ns",
            "range": "± 573217.6479819634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55723706,
            "unit": "ns",
            "range": "± 1188747.5074483177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115773753.53333333,
            "unit": "ns",
            "range": "± 1352035.4271849783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228794291.92857143,
            "unit": "ns",
            "range": "± 3192747.406578673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63563.666666666664,
            "unit": "ns",
            "range": "± 4759.721000988018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368029.04285714286,
            "unit": "ns",
            "range": "± 10348.137378129393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354299.27692307695,
            "unit": "ns",
            "range": "± 16318.64986421565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328871.4666666667,
            "unit": "ns",
            "range": "± 6159.040102236093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4834501.615384615,
            "unit": "ns",
            "range": "± 49534.30244544088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4355681.578947368,
            "unit": "ns",
            "range": "± 96200.60610649659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19512.244444444445,
            "unit": "ns",
            "range": "± 1986.4569968286974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98170.15463917526,
            "unit": "ns",
            "range": "± 7461.94528694904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92733.57894736843,
            "unit": "ns",
            "range": "± 11200.858478287093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111040.09782608696,
            "unit": "ns",
            "range": "± 11437.956128474978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4824.575,
            "unit": "ns",
            "range": "± 862.8535052481315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19115.531914893618,
            "unit": "ns",
            "range": "± 1537.996278517581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687712.8617021276,
            "unit": "ns",
            "range": "± 147383.09769255694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3421838.1785714286,
            "unit": "ns",
            "range": "± 146145.71063529307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366664.0918367347,
            "unit": "ns",
            "range": "± 158974.9653900408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7191719.101694915,
            "unit": "ns",
            "range": "± 314349.3783132949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3821680.210526316,
            "unit": "ns",
            "range": "± 80687.29729405913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3964710.870967742,
            "unit": "ns",
            "range": "± 121086.7817756455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5223515.6,
            "unit": "ns",
            "range": "± 127522.82851938055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4394971.23880597,
            "unit": "ns",
            "range": "± 208400.86238683964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8330212.051282051,
            "unit": "ns",
            "range": "± 242387.09843781404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7256566.236607143,
            "unit": "ns",
            "range": "± 119743.3064107571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2297873.493389423,
            "unit": "ns",
            "range": "± 11234.67381324899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1438932.3231847426,
            "unit": "ns",
            "range": "± 28669.90246791391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2785291.25703125,
            "unit": "ns",
            "range": "± 39809.54559704392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 936300.9373697917,
            "unit": "ns",
            "range": "± 10063.584699608362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875521.3835797991,
            "unit": "ns",
            "range": "± 6414.754979906026"
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
          "id": "b7fa95f54808588a2aaeb628df61d0d9548023d7",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T17:13:41+09:00",
          "tree_id": "2cdd327e4937b0398dab7adaf7fce6b43e92404c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b7fa95f54808588a2aaeb628df61d0d9548023d7"
        },
        "date": 1689323440157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8770562,
            "unit": "ns",
            "range": "± 408034.3049599583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22054737.151162792,
            "unit": "ns",
            "range": "± 1192249.1490616382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53567537.94871795,
            "unit": "ns",
            "range": "± 1872813.723503094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108788927.2735849,
            "unit": "ns",
            "range": "± 4481292.875458186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231805271.13793105,
            "unit": "ns",
            "range": "± 9291421.703034185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72551.78947368421,
            "unit": "ns",
            "range": "± 10225.365186107032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380409.26804123714,
            "unit": "ns",
            "range": "± 71094.5187430255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325048.6477272727,
            "unit": "ns",
            "range": "± 40234.308436708896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305349.097826087,
            "unit": "ns",
            "range": "± 24009.45511968506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4439216.714285715,
            "unit": "ns",
            "range": "± 125421.85506502597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3732055.8333333335,
            "unit": "ns",
            "range": "± 103148.5568302041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19347.561224489797,
            "unit": "ns",
            "range": "± 4391.033870852718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85429.60416666667,
            "unit": "ns",
            "range": "± 7025.313593269125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101681.48484848485,
            "unit": "ns",
            "range": "± 12190.64148448881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114124.84210526316,
            "unit": "ns",
            "range": "± 15873.39339721942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5521.872340425532,
            "unit": "ns",
            "range": "± 1313.1798903379579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16521.73404255319,
            "unit": "ns",
            "range": "± 2506.827782408796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619358.06185567,
            "unit": "ns",
            "range": "± 163693.26420891954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3119530.9787234045,
            "unit": "ns",
            "range": "± 180796.99042966473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131541.8,
            "unit": "ns",
            "range": "± 155258.61028486385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5936807.944444444,
            "unit": "ns",
            "range": "± 269291.57757445966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3573756.6363636362,
            "unit": "ns",
            "range": "± 248578.0520256721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3673931.1914893617,
            "unit": "ns",
            "range": "± 238266.90836335797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4735191.436170213,
            "unit": "ns",
            "range": "± 352162.0168710095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4184346.553763441,
            "unit": "ns",
            "range": "± 274760.50236339687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7338648.5930232555,
            "unit": "ns",
            "range": "± 396319.1262479794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6461873.237591912,
            "unit": "ns",
            "range": "± 129162.06220887009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2023201.5240384615,
            "unit": "ns",
            "range": "± 21815.037652771578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320412.6937040442,
            "unit": "ns",
            "range": "± 25411.755802805943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584641.407645089,
            "unit": "ns",
            "range": "± 21395.22495192256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785931.5931222098,
            "unit": "ns",
            "range": "± 11172.71908512635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730780.6755859375,
            "unit": "ns",
            "range": "± 3869.9020945747657"
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
          "id": "07a1f0fe0f1dd4fccc5acb3c5483136b1311fd7b",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T17:17:17+09:00",
          "tree_id": "c46bbe3752b63ab9c50f5a635bbf4b725ef40268",
          "url": "https://github.com/OnedgeLee/libplanet/commit/07a1f0fe0f1dd4fccc5acb3c5483136b1311fd7b"
        },
        "date": 1689323710661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9223042.051020408,
            "unit": "ns",
            "range": "± 727252.9913743042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22029547.315789472,
            "unit": "ns",
            "range": "± 753089.1956835184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55174255.45454545,
            "unit": "ns",
            "range": "± 1161329.9396146142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110926102.89583333,
            "unit": "ns",
            "range": "± 4343789.034055258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224608376.35,
            "unit": "ns",
            "range": "± 4994661.502162139"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74738.23809523809,
            "unit": "ns",
            "range": "± 4888.455939532249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385107.40625,
            "unit": "ns",
            "range": "± 67936.17570548003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 445284.4673913043,
            "unit": "ns",
            "range": "± 156082.07427817245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344003.4479166667,
            "unit": "ns",
            "range": "± 46383.763006686044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4408907.076923077,
            "unit": "ns",
            "range": "± 226201.40567557132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3910579.6025641025,
            "unit": "ns",
            "range": "± 134246.1355019195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20430.064516129034,
            "unit": "ns",
            "range": "± 3579.038976567931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96380.37894736842,
            "unit": "ns",
            "range": "± 11710.018689393073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106637.64130434782,
            "unit": "ns",
            "range": "± 7023.424061755223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111592.51612903226,
            "unit": "ns",
            "range": "± 12730.124746317384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.413043478261,
            "unit": "ns",
            "range": "± 1085.0863605897405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21048.89010989011,
            "unit": "ns",
            "range": "± 2775.4904369440305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626250.5808080807,
            "unit": "ns",
            "range": "± 195858.41797832688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949515.4918032787,
            "unit": "ns",
            "range": "± 125119.34489686543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245151.9226804124,
            "unit": "ns",
            "range": "± 279719.49250241584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6063782.577464789,
            "unit": "ns",
            "range": "± 291221.2006868251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3473245,
            "unit": "ns",
            "range": "± 209718.54949923517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3833714.8571428573,
            "unit": "ns",
            "range": "± 406389.01751798723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4849886.021276596,
            "unit": "ns",
            "range": "± 444427.7932920068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283245.803030303,
            "unit": "ns",
            "range": "± 491144.8548404784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7880556.6,
            "unit": "ns",
            "range": "± 743340.8092772131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7069321.05625,
            "unit": "ns",
            "range": "± 125622.23321842105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2281948.669510691,
            "unit": "ns",
            "range": "± 47593.192486543834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404328.8778320313,
            "unit": "ns",
            "range": "± 31139.53337480214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2775204.157645089,
            "unit": "ns",
            "range": "± 35868.928925866014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859127.8454718338,
            "unit": "ns",
            "range": "± 29315.904908270873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798804.2842447917,
            "unit": "ns",
            "range": "± 5404.960568357964"
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
          "id": "a56d8ee1bb8ff0d73437b4b179f075c4d445fc17",
          "message": "document: Update changelog",
          "timestamp": "2023-07-14T17:26:03+09:00",
          "tree_id": "fd96d33c1568a1be5f60d113fe0c91a6b9db71e6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a56d8ee1bb8ff0d73437b4b179f075c4d445fc17"
        },
        "date": 1689324094785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8190003.608695652,
            "unit": "ns",
            "range": "± 312636.86814401625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19885943,
            "unit": "ns",
            "range": "± 376808.5910661038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50878820.74545454,
            "unit": "ns",
            "range": "± 2153757.1819120357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99823393.5,
            "unit": "ns",
            "range": "± 1243643.0624922398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203156461.14285713,
            "unit": "ns",
            "range": "± 2199788.520613773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57014.234042553195,
            "unit": "ns",
            "range": "± 6580.893631796686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330043.4791666667,
            "unit": "ns",
            "range": "± 25421.40979029049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309454.1098901099,
            "unit": "ns",
            "range": "± 21872.297348447446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298679.9898989899,
            "unit": "ns",
            "range": "± 25289.616655891365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241505,
            "unit": "ns",
            "range": "± 81418.86746448884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3616144.9615384615,
            "unit": "ns",
            "range": "± 167057.98669231564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15962.269662921348,
            "unit": "ns",
            "range": "± 1617.0489027015524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82546.45360824742,
            "unit": "ns",
            "range": "± 7760.609834312606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85849.18085106384,
            "unit": "ns",
            "range": "± 14101.636708913155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108749.12886597938,
            "unit": "ns",
            "range": "± 16481.397854424387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5056.505617977528,
            "unit": "ns",
            "range": "± 667.5653547099255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15852.368421052632,
            "unit": "ns",
            "range": "± 2005.8283005612886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1568488.9591836734,
            "unit": "ns",
            "range": "± 179862.95322640252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2824816.847826087,
            "unit": "ns",
            "range": "± 175576.7677644567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1983125.085106383,
            "unit": "ns",
            "range": "± 169177.88570999607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5980401.4303797465,
            "unit": "ns",
            "range": "± 309862.16052103083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290104.7419354836,
            "unit": "ns",
            "range": "± 226751.2498734501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3522576.3777777776,
            "unit": "ns",
            "range": "± 132740.85816995063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457302.921052632,
            "unit": "ns",
            "range": "± 172532.63279272988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925883.214285714,
            "unit": "ns",
            "range": "± 190565.31142107522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7435062.745614035,
            "unit": "ns",
            "range": "± 321369.8551699806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6128806.663504465,
            "unit": "ns",
            "range": "± 27477.179121838893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893190.198828125,
            "unit": "ns",
            "range": "± 14015.49021145294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232658.6518229167,
            "unit": "ns",
            "range": "± 9741.82279604049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2462468.1411458333,
            "unit": "ns",
            "range": "± 37633.158883191354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791790.7057059152,
            "unit": "ns",
            "range": "± 5890.037836372443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758972.9175130208,
            "unit": "ns",
            "range": "± 3798.133853048791"
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
          "id": "00cdaec85ad04e3ea7fc8a6a2324f3da56d761d7",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:41:21+09:00",
          "tree_id": "7b8c075edf91e440c17939764416819d36db4710",
          "url": "https://github.com/OnedgeLee/libplanet/commit/00cdaec85ad04e3ea7fc8a6a2324f3da56d761d7"
        },
        "date": 1689325077437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8601668.689655172,
            "unit": "ns",
            "range": "± 249563.5050780954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21748134.36,
            "unit": "ns",
            "range": "± 864594.7190428685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490774,
            "unit": "ns",
            "range": "± 1555993.3104726782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109552399.2413793,
            "unit": "ns",
            "range": "± 3206247.9098631414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223698648.83333334,
            "unit": "ns",
            "range": "± 3028203.3034758368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69748.36956521739,
            "unit": "ns",
            "range": "± 8487.575071725989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328108.86666666664,
            "unit": "ns",
            "range": "± 22734.056447679817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339216.1914893617,
            "unit": "ns",
            "range": "± 40758.187606520405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297240.14285714284,
            "unit": "ns",
            "range": "± 21385.3887115954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4411436.833333333,
            "unit": "ns",
            "range": "± 160674.08405362561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785448.035714286,
            "unit": "ns",
            "range": "± 161771.12659893796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18558.056701030928,
            "unit": "ns",
            "range": "± 3058.3286113805693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84683.64210526316,
            "unit": "ns",
            "range": "± 6248.0860625488185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84767.3085106383,
            "unit": "ns",
            "range": "± 7181.305137956675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104788.26595744681,
            "unit": "ns",
            "range": "± 11115.193249400427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5826.166666666667,
            "unit": "ns",
            "range": "± 1107.554724005395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17835.895833333332,
            "unit": "ns",
            "range": "± 2927.782395851191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565852.76,
            "unit": "ns",
            "range": "± 151758.21222057886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2998999.7578947367,
            "unit": "ns",
            "range": "± 215024.37169092963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2098955.8585858587,
            "unit": "ns",
            "range": "± 197531.4914040451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5744728,
            "unit": "ns",
            "range": "± 192274.07241691666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3560306.96875,
            "unit": "ns",
            "range": "± 290329.79409370606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3885519.3,
            "unit": "ns",
            "range": "± 406620.4485533993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4966273.036842105,
            "unit": "ns",
            "range": "± 466242.06070070807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4006569.923076923,
            "unit": "ns",
            "range": "± 197999.0606825758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7625794.386363637,
            "unit": "ns",
            "range": "± 412028.1727202987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6225413.841666667,
            "unit": "ns",
            "range": "± 79338.482160168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956420.045200893,
            "unit": "ns",
            "range": "± 30920.803521727466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279604.5184795673,
            "unit": "ns",
            "range": "± 17134.963225799504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622458.750404095,
            "unit": "ns",
            "range": "± 115032.48324829327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802876.3263671875,
            "unit": "ns",
            "range": "± 5376.684196174361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786764.382672991,
            "unit": "ns",
            "range": "± 9862.694638386594"
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
          "id": "c1c142d888a793a83047be3b91bd99f778649bb7",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:39:35+09:00",
          "tree_id": "fd96d33c1568a1be5f60d113fe0c91a6b9db71e6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c1c142d888a793a83047be3b91bd99f778649bb7"
        },
        "date": 1689325136865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8224350.791666667,
            "unit": "ns",
            "range": "± 205163.08265652624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20097727.185185187,
            "unit": "ns",
            "range": "± 546344.4747509815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50480385.166666664,
            "unit": "ns",
            "range": "± 529422.5530408035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99725090.92857143,
            "unit": "ns",
            "range": "± 1273966.388016196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204138199.7857143,
            "unit": "ns",
            "range": "± 1732487.828678622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63356.336842105266,
            "unit": "ns",
            "range": "± 11945.688283484606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313846.95238095237,
            "unit": "ns",
            "range": "± 15968.693153600569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320778.5257731959,
            "unit": "ns",
            "range": "± 32242.88204074815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316987.8064516129,
            "unit": "ns",
            "range": "± 32535.690692068583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4437786.597826087,
            "unit": "ns",
            "range": "± 267102.82730760373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3738663.95,
            "unit": "ns",
            "range": "± 86103.26080167685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16198.074468085106,
            "unit": "ns",
            "range": "± 2299.397668859427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78436.64772727272,
            "unit": "ns",
            "range": "± 6518.841613195232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76409.04444444444,
            "unit": "ns",
            "range": "± 7713.814758784007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112542.44791666667,
            "unit": "ns",
            "range": "± 16899.49349248438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5805.186868686868,
            "unit": "ns",
            "range": "± 918.6263330232636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18593.953608247422,
            "unit": "ns",
            "range": "± 2970.7916874849298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526275.945054945,
            "unit": "ns",
            "range": "± 117128.77859294329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877826.3780487804,
            "unit": "ns",
            "range": "± 148778.82837969362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131509.702020202,
            "unit": "ns",
            "range": "± 218949.46875617633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6025047.5,
            "unit": "ns",
            "range": "± 253472.96857388003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307608.5102040814,
            "unit": "ns",
            "range": "± 205489.94795474352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588573.907216495,
            "unit": "ns",
            "range": "± 289399.2841827375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4436220.569767442,
            "unit": "ns",
            "range": "± 142125.1976919336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3938921.4383561644,
            "unit": "ns",
            "range": "± 188329.56985435772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7364877.203703703,
            "unit": "ns",
            "range": "± 308858.8328522956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6887336.714397321,
            "unit": "ns",
            "range": "± 332748.80374689156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976494.148046875,
            "unit": "ns",
            "range": "± 25349.04966177345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295051.998046875,
            "unit": "ns",
            "range": "± 7430.684125814001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2481480.5901988638,
            "unit": "ns",
            "range": "± 58053.64926214263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786574.6477213542,
            "unit": "ns",
            "range": "± 10083.941117803002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714102.2435128348,
            "unit": "ns",
            "range": "± 6134.093951693657"
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
          "id": "fee9e292264be5ee4d81ab25cd5584bcdabda1f6",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:49:42+09:00",
          "tree_id": "90aa36b0a64cd978722f7cd0ae29f622eb42dadb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fee9e292264be5ee4d81ab25cd5584bcdabda1f6"
        },
        "date": 1689325518351,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7913713.545454546,
            "unit": "ns",
            "range": "± 185487.9077433293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20678962.07142857,
            "unit": "ns",
            "range": "± 585551.5907236165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50417390.928571425,
            "unit": "ns",
            "range": "± 883738.7944952715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100220080.88461539,
            "unit": "ns",
            "range": "± 1528202.7182614733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210242332.4516129,
            "unit": "ns",
            "range": "± 6381041.179764688"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59429.71875,
            "unit": "ns",
            "range": "± 9810.647854784724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327693.14130434784,
            "unit": "ns",
            "range": "± 23062.95266047637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302797.0340909091,
            "unit": "ns",
            "range": "± 16608.425585350098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297444.8541666667,
            "unit": "ns",
            "range": "± 22267.26939276767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4187904.8545454545,
            "unit": "ns",
            "range": "± 166715.67788041593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3943822.177777778,
            "unit": "ns",
            "range": "± 125679.46464216184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16803.64210526316,
            "unit": "ns",
            "range": "± 1939.1014475112438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87499.15263157895,
            "unit": "ns",
            "range": "± 9881.442308765241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94562.87373737374,
            "unit": "ns",
            "range": "± 12873.203023862749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114593.83157894737,
            "unit": "ns",
            "range": "± 16039.980959592769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5417.6720430107525,
            "unit": "ns",
            "range": "± 720.1683019426463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15639.842105263158,
            "unit": "ns",
            "range": "± 1653.9587732891657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1492953.744680851,
            "unit": "ns",
            "range": "± 136854.5499760966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917167.6021505375,
            "unit": "ns",
            "range": "± 176794.74550130893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1960566.706521739,
            "unit": "ns",
            "range": "± 161041.62742906206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5692066.538461538,
            "unit": "ns",
            "range": "± 177370.7901681859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232819.6825396824,
            "unit": "ns",
            "range": "± 134689.0058364831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3595573.8666666667,
            "unit": "ns",
            "range": "± 61110.12991414606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4341768.145161291,
            "unit": "ns",
            "range": "± 63887.0302850004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3898852.7528089886,
            "unit": "ns",
            "range": "± 230583.2134879688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7381464.51369863,
            "unit": "ns",
            "range": "± 367304.76679188554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6273896.364397322,
            "unit": "ns",
            "range": "± 53089.17594704999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910383.615513393,
            "unit": "ns",
            "range": "± 20077.62584665799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1258648.09109375,
            "unit": "ns",
            "range": "± 33402.97056570822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2521289.87890625,
            "unit": "ns",
            "range": "± 33802.129889786425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783557.6108111213,
            "unit": "ns",
            "range": "± 15854.729048771234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778560.586313101,
            "unit": "ns",
            "range": "± 1824.8947189862095"
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
          "id": "91f1c570470d5b675fb99cb136578e5011230f97",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:45:57+09:00",
          "tree_id": "57576fbd3c68142de48cab4199837291db56c680",
          "url": "https://github.com/OnedgeLee/libplanet/commit/91f1c570470d5b675fb99cb136578e5011230f97"
        },
        "date": 1689325530591,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8943428.217391305,
            "unit": "ns",
            "range": "± 344343.31438905647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23745642.74226804,
            "unit": "ns",
            "range": "± 1785800.1819067418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59100306.443298966,
            "unit": "ns",
            "range": "± 4117893.1179250046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115310296.8076923,
            "unit": "ns",
            "range": "± 1637417.7817982894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234272358.2638889,
            "unit": "ns",
            "range": "± 11577141.167482708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68288.88764044944,
            "unit": "ns",
            "range": "± 11443.600827376089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314109.0319148936,
            "unit": "ns",
            "range": "± 23005.405893315048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327588.69696969696,
            "unit": "ns",
            "range": "± 36464.28820328928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307150.0888888889,
            "unit": "ns",
            "range": "± 34981.61403007748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4669276.489473684,
            "unit": "ns",
            "range": "± 267359.72673863056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4054580.6914893617,
            "unit": "ns",
            "range": "± 324536.66585577064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20695.572164948455,
            "unit": "ns",
            "range": "± 4675.300772961526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88114.16304347826,
            "unit": "ns",
            "range": "± 9680.824406676578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95576.34343434343,
            "unit": "ns",
            "range": "± 12255.359089453948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109449.32258064517,
            "unit": "ns",
            "range": "± 15458.28196565172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7396.666666666667,
            "unit": "ns",
            "range": "± 1586.4169316921132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20118.236559139787,
            "unit": "ns",
            "range": "± 3616.249818220436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1712604.2113402062,
            "unit": "ns",
            "range": "± 209764.34291202028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2985384.911764706,
            "unit": "ns",
            "range": "± 142171.75760569886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2230648.345360825,
            "unit": "ns",
            "range": "± 267767.7045523142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5782591.606060606,
            "unit": "ns",
            "range": "± 260635.57060344028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3680385.5303030303,
            "unit": "ns",
            "range": "± 334467.635428042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3780659.9166666665,
            "unit": "ns",
            "range": "± 370874.90452464076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4816166.4639175255,
            "unit": "ns",
            "range": "± 295820.2439985395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4216725.159574468,
            "unit": "ns",
            "range": "± 309287.1664249389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7383093.2894736845,
            "unit": "ns",
            "range": "± 361262.05955812987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6774850.743399785,
            "unit": "ns",
            "range": "± 293413.26406817796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018884.7927734375,
            "unit": "ns",
            "range": "± 46035.951598698615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314539.2973257212,
            "unit": "ns",
            "range": "± 8266.872661430996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687581.4798828126,
            "unit": "ns",
            "range": "± 58346.73531658168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861604.546875,
            "unit": "ns",
            "range": "± 24074.484159426433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853541.5759887695,
            "unit": "ns",
            "range": "± 16625.818337340716"
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
          "id": "9058dcd3a7c286e831e220c4388218f81eded753",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T20:05:42+09:00",
          "tree_id": "e58e15e7738000db75b8fd2428d1202a9d50f77d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9058dcd3a7c286e831e220c4388218f81eded753"
        },
        "date": 1689333864118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7820281.233333333,
            "unit": "ns",
            "range": "± 210981.14739832238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19746306.970588237,
            "unit": "ns",
            "range": "± 400389.0948009382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51483596.35897436,
            "unit": "ns",
            "range": "± 1792485.2847790394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98184890.33333333,
            "unit": "ns",
            "range": "± 746026.304688923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209694865.07692307,
            "unit": "ns",
            "range": "± 5678295.207358898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75084.18681318681,
            "unit": "ns",
            "range": "± 12626.84829323092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368745.612244898,
            "unit": "ns",
            "range": "± 46207.96346034111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339434.93298969074,
            "unit": "ns",
            "range": "± 40479.28787044143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289743.0153846154,
            "unit": "ns",
            "range": "± 13447.917201062572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4879433.866666666,
            "unit": "ns",
            "range": "± 218021.9036179674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3987284.1222222224,
            "unit": "ns",
            "range": "± 222049.4788088896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18307.684782608696,
            "unit": "ns",
            "range": "± 3093.6003347902324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103193.4387755102,
            "unit": "ns",
            "range": "± 19254.724411055526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107736.71739130435,
            "unit": "ns",
            "range": "± 11078.920247628854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113334.44623655915,
            "unit": "ns",
            "range": "± 19413.89409807898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5193.99494949495,
            "unit": "ns",
            "range": "± 1088.628610925348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15986.563829787234,
            "unit": "ns",
            "range": "± 1700.2160935302174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595653.9,
            "unit": "ns",
            "range": "± 119098.65682952081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041857.533333333,
            "unit": "ns",
            "range": "± 129680.69645714061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2111579.3191489363,
            "unit": "ns",
            "range": "± 156818.7922812943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5968750.754545455,
            "unit": "ns",
            "range": "± 248796.91026969932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318228.7528089886,
            "unit": "ns",
            "range": "± 183839.61674546657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3581205.9444444445,
            "unit": "ns",
            "range": "± 60586.04993140625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4592202.457446809,
            "unit": "ns",
            "range": "± 259559.39713720506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4151402.8020833335,
            "unit": "ns",
            "range": "± 366063.0763682852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7785652.081632653,
            "unit": "ns",
            "range": "± 501263.75534033513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6588560.551339285,
            "unit": "ns",
            "range": "± 104478.4195304046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118426.084375,
            "unit": "ns",
            "range": "± 33011.141848262756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371378.7856770833,
            "unit": "ns",
            "range": "± 18729.67993572031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606154.4046875,
            "unit": "ns",
            "range": "± 42048.6872316883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835941.3460286459,
            "unit": "ns",
            "range": "± 9087.724498787573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783490.8102463942,
            "unit": "ns",
            "range": "± 9979.402011273702"
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
          "id": "454b685bc4335e157611f678debbfbb26b483e22",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-17T12:06:42+09:00",
          "tree_id": "4bd5eb9901baca5b47c81f22eeefe0accca60c8d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/454b685bc4335e157611f678debbfbb26b483e22"
        },
        "date": 1689564453608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9503764.106060605,
            "unit": "ns",
            "range": "± 648131.4213055462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21189624.763157893,
            "unit": "ns",
            "range": "± 302884.8899013254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53864392.57575758,
            "unit": "ns",
            "range": "± 1694979.8947358497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105937376.73333333,
            "unit": "ns",
            "range": "± 1391375.0949957725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219646098.66666666,
            "unit": "ns",
            "range": "± 4555678.269416932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70968.14606741573,
            "unit": "ns",
            "range": "± 10354.430363321602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360300.623655914,
            "unit": "ns",
            "range": "± 35486.06058474534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355688.70967741933,
            "unit": "ns",
            "range": "± 41680.796916560736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304170.0975609756,
            "unit": "ns",
            "range": "± 16051.631186376379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4401662.761904762,
            "unit": "ns",
            "range": "± 156832.252054942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4375154.6632653065,
            "unit": "ns",
            "range": "± 589853.7841575516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21808.80681818182,
            "unit": "ns",
            "range": "± 3397.5967735761474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117766.91935483871,
            "unit": "ns",
            "range": "± 22853.23278355136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109907.24193548386,
            "unit": "ns",
            "range": "± 14886.830796044878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109132.71111111112,
            "unit": "ns",
            "range": "± 13064.664078030679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6245.037634408603,
            "unit": "ns",
            "range": "± 879.3374674835767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18992.37777777778,
            "unit": "ns",
            "range": "± 2193.295394410218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523210.83,
            "unit": "ns",
            "range": "± 200735.6119089629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007289.9787234045,
            "unit": "ns",
            "range": "± 201003.3007122118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117117.75,
            "unit": "ns",
            "range": "± 215934.81689594747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5784647.535211268,
            "unit": "ns",
            "range": "± 282199.59593834745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3621674.9897959186,
            "unit": "ns",
            "range": "± 317417.5480792601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3737966.0204081633,
            "unit": "ns",
            "range": "± 277944.96129612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4856573.221052632,
            "unit": "ns",
            "range": "± 447981.96542217454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4362168.0360824745,
            "unit": "ns",
            "range": "± 477427.9706818581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7908371.443298969,
            "unit": "ns",
            "range": "± 645830.5205420891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6999446.018157624,
            "unit": "ns",
            "range": "± 390475.7318182645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221235.431525735,
            "unit": "ns",
            "range": "± 42321.07792668055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408660.0029947916,
            "unit": "ns",
            "range": "± 20548.458829939424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894573.6314019095,
            "unit": "ns",
            "range": "± 142064.3681553387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862207.1033854167,
            "unit": "ns",
            "range": "± 14660.558259239422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894729.2870605469,
            "unit": "ns",
            "range": "± 54872.315872234714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "0d5e95a141301e952a51f890115a1dcb07f7b656",
          "message": "docs: using global stylecop config on `Store`",
          "timestamp": "2023-07-17T12:13:45+09:00",
          "tree_id": "a975dd476816e1fc9392b9e0b9dde75235c09500",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0d5e95a141301e952a51f890115a1dcb07f7b656"
        },
        "date": 1689564692709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9308280.372340426,
            "unit": "ns",
            "range": "± 592742.7839980761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21141850.563829787,
            "unit": "ns",
            "range": "± 1260112.7644876044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52368338.96491228,
            "unit": "ns",
            "range": "± 2141061.615750984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104868620.44736843,
            "unit": "ns",
            "range": "± 3570731.145847258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214355857.58333334,
            "unit": "ns",
            "range": "± 5317095.35292176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76942.30337078651,
            "unit": "ns",
            "range": "± 7799.716306619013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317023.9673913043,
            "unit": "ns",
            "range": "± 23640.534074985982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327078.9606741573,
            "unit": "ns",
            "range": "± 26569.71693020602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313471.73333333334,
            "unit": "ns",
            "range": "± 30899.717296277773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4246199.986842105,
            "unit": "ns",
            "range": "± 215174.65136931557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840853.933333333,
            "unit": "ns",
            "range": "± 59499.47700666508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17359.920454545456,
            "unit": "ns",
            "range": "± 1556.1861885294786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88156.19,
            "unit": "ns",
            "range": "± 10532.841950271253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120462.73333333334,
            "unit": "ns",
            "range": "± 8470.079766680628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111211.52083333333,
            "unit": "ns",
            "range": "± 18511.573284657512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5551.787234042553,
            "unit": "ns",
            "range": "± 1563.737581265183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17317.91489361702,
            "unit": "ns",
            "range": "± 3076.4373602250866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564737.0957446808,
            "unit": "ns",
            "range": "± 149158.21391237015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876444.2627118644,
            "unit": "ns",
            "range": "± 126817.06026403421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2029999.108695652,
            "unit": "ns",
            "range": "± 193403.6151979208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5953263.19047619,
            "unit": "ns",
            "range": "± 255688.40076393998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3345961.9793814435,
            "unit": "ns",
            "range": "± 225902.22181145925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3571337.7916666665,
            "unit": "ns",
            "range": "± 299314.7843536148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4638431.36923077,
            "unit": "ns",
            "range": "± 216465.3266889389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4166554.1875,
            "unit": "ns",
            "range": "± 336461.3036376761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7759508.957446809,
            "unit": "ns",
            "range": "± 473661.8155120204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6783893.105769231,
            "unit": "ns",
            "range": "± 92293.0155651729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2189383.8701171875,
            "unit": "ns",
            "range": "± 40026.906630928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310667.6607572115,
            "unit": "ns",
            "range": "± 11806.565068562906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2702240.6171283145,
            "unit": "ns",
            "range": "± 84388.0306823417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794393.8309849331,
            "unit": "ns",
            "range": "± 6255.295457816426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733328.7815104167,
            "unit": "ns",
            "range": "± 7596.169879109258"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "87e4f8142eeb927fe2986cc4969b0322bab14c6a",
          "message": "docs: using global stylecop config on `Common`",
          "timestamp": "2023-07-17T12:15:19+09:00",
          "tree_id": "78daeecc0181a8f68a8e9c7414664652dbe8623c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/87e4f8142eeb927fe2986cc4969b0322bab14c6a"
        },
        "date": 1689564914745,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8629280.245762711,
            "unit": "ns",
            "range": "± 378156.637567647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21313518.625,
            "unit": "ns",
            "range": "± 617313.8601016478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53796998.10810811,
            "unit": "ns",
            "range": "± 1782831.475891382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103276303.92307693,
            "unit": "ns",
            "range": "± 2813092.667218528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223949424.84285715,
            "unit": "ns",
            "range": "± 7297113.82726999"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66981.71348314607,
            "unit": "ns",
            "range": "± 8652.472458614871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347288.2978723404,
            "unit": "ns",
            "range": "± 39260.48382850053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344313.5232558139,
            "unit": "ns",
            "range": "± 39570.48450460096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332621.76373626373,
            "unit": "ns",
            "range": "± 21973.417888103475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4133960.880952381,
            "unit": "ns",
            "range": "± 136389.7500436645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3761205.1666666665,
            "unit": "ns",
            "range": "± 85886.47438062255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17780.793478260868,
            "unit": "ns",
            "range": "± 2313.5001860225193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91182.78421052631,
            "unit": "ns",
            "range": "± 8554.647944884597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108258.57575757576,
            "unit": "ns",
            "range": "± 15900.294199621225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111459.91304347826,
            "unit": "ns",
            "range": "± 11258.8371646475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6620.41052631579,
            "unit": "ns",
            "range": "± 1292.746980351208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18238.98888888889,
            "unit": "ns",
            "range": "± 2640.6615126884885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658971.3978494625,
            "unit": "ns",
            "range": "± 186849.24237633863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2907970.475609756,
            "unit": "ns",
            "range": "± 103085.01461160294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133322.237373737,
            "unit": "ns",
            "range": "± 213781.36223237592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5899610.784090909,
            "unit": "ns",
            "range": "± 308326.56419921946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3513545.193548387,
            "unit": "ns",
            "range": "± 237920.04507507844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625061.324175824,
            "unit": "ns",
            "range": "± 217887.13659928483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4732152.531578948,
            "unit": "ns",
            "range": "± 297784.12924310367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4210744.075268817,
            "unit": "ns",
            "range": "± 362373.8121391584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7726805.552631579,
            "unit": "ns",
            "range": "± 439952.21646447916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6889510.798389669,
            "unit": "ns",
            "range": "± 437233.69974924775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2001778.404017857,
            "unit": "ns",
            "range": "± 15728.596021961106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308065.8209635417,
            "unit": "ns",
            "range": "± 6745.355965404609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556767.2325846353,
            "unit": "ns",
            "range": "± 98859.25407216298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797872.3728515625,
            "unit": "ns",
            "range": "± 10251.81359029885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746371.0461077009,
            "unit": "ns",
            "range": "± 9619.720593989523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7bcb60131b0e49eb22e13216c3e4f0a5fb7562c8",
          "message": "docs: using global stylecop config on `Common`",
          "timestamp": "2023-07-17T14:28:44+09:00",
          "tree_id": "6a2c9b63f9bc714feb8734623b5ed1e26b65d868",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7bcb60131b0e49eb22e13216c3e4f0a5fb7562c8"
        },
        "date": 1689573306722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7690569.75,
            "unit": "ns",
            "range": "± 301670.30892254796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18985226.84,
            "unit": "ns",
            "range": "± 464984.92213956785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48707339.733333334,
            "unit": "ns",
            "range": "± 852225.6213270945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93573015.73333333,
            "unit": "ns",
            "range": "± 1713146.3435006058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192449847.05555555,
            "unit": "ns",
            "range": "± 4042541.7266956344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54998.104651162794,
            "unit": "ns",
            "range": "± 5464.95261704677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303768.40425531915,
            "unit": "ns",
            "range": "± 17717.827532741754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292618.8010752688,
            "unit": "ns",
            "range": "± 20723.383688368194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278529.40625,
            "unit": "ns",
            "range": "± 12723.737206458169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155733.2181818183,
            "unit": "ns",
            "range": "± 176081.72622695015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3627287.546875,
            "unit": "ns",
            "range": "± 142735.83032711994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17370.527472527472,
            "unit": "ns",
            "range": "± 1771.9835109632827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83652.20652173914,
            "unit": "ns",
            "range": "± 8183.262147485103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76658.94318181818,
            "unit": "ns",
            "range": "± 6451.5597541294155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96752.31868131868,
            "unit": "ns",
            "range": "± 12441.052828687878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4891.613636363636,
            "unit": "ns",
            "range": "± 630.6718809500766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17330.621052631577,
            "unit": "ns",
            "range": "± 1955.8010612128815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531305.9831460675,
            "unit": "ns",
            "range": "± 169575.0086000502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2930458.010526316,
            "unit": "ns",
            "range": "± 318432.6942743793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005609.4680851065,
            "unit": "ns",
            "range": "± 200636.74056162426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6012527.010416667,
            "unit": "ns",
            "range": "± 446268.8736778004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105724.6413043477,
            "unit": "ns",
            "range": "± 212742.44067486515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3304733.565217391,
            "unit": "ns",
            "range": "± 125267.30089118356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4238367.96969697,
            "unit": "ns",
            "range": "± 119158.63829877296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3833354.7065217393,
            "unit": "ns",
            "range": "± 425140.02867837466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7057956.805084745,
            "unit": "ns",
            "range": "± 270241.03458230064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6153278.9859375,
            "unit": "ns",
            "range": "± 81573.30354981215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803853.714453125,
            "unit": "ns",
            "range": "± 17592.500127616902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1257954.4739583333,
            "unit": "ns",
            "range": "± 18192.794296701253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2448248.459375,
            "unit": "ns",
            "range": "± 42279.2029727301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 759286.7563100961,
            "unit": "ns",
            "range": "± 7510.002208076303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726593.0945963542,
            "unit": "ns",
            "range": "± 11657.690603747436"
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
          "id": "264659769ec8e4644cf9860cd1e02b794ad8121b",
          "message": "Add Libplanet.Store project to solution",
          "timestamp": "2023-07-17T14:48:55+09:00",
          "tree_id": "dd545c09e16b1caa70d4c12f1f62c163f30e6be3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/264659769ec8e4644cf9860cd1e02b794ad8121b"
        },
        "date": 1689574229846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8865714.836842105,
            "unit": "ns",
            "range": "± 532245.7698509656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20643945.055555556,
            "unit": "ns",
            "range": "± 499852.6927018933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51334008.809523806,
            "unit": "ns",
            "range": "± 1104147.322477468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102872877.58823529,
            "unit": "ns",
            "range": "± 1790961.7592770532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211981490.13333333,
            "unit": "ns",
            "range": "± 9367748.136521595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66375.89247311828,
            "unit": "ns",
            "range": "± 9282.322003190851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346393.7303370786,
            "unit": "ns",
            "range": "± 28768.128518365294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302941.10869565216,
            "unit": "ns",
            "range": "± 17696.15081661317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312735.21875,
            "unit": "ns",
            "range": "± 9180.078249137217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4152466.4615384615,
            "unit": "ns",
            "range": "± 35115.0111980033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756319,
            "unit": "ns",
            "range": "± 68790.12812273907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20256.543478260868,
            "unit": "ns",
            "range": "± 2498.8053163617765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98674.14,
            "unit": "ns",
            "range": "± 10698.741072470048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106473.66304347826,
            "unit": "ns",
            "range": "± 10989.478361843767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128753.13978494624,
            "unit": "ns",
            "range": "± 24876.914275301162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5293.092783505154,
            "unit": "ns",
            "range": "± 1696.6313135794155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16000.050561797752,
            "unit": "ns",
            "range": "± 1558.2518760926528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1734670.96875,
            "unit": "ns",
            "range": "± 196257.5935552131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2915553.0531914895,
            "unit": "ns",
            "range": "± 107878.75612581256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035427.1391752576,
            "unit": "ns",
            "range": "± 183030.53120797823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5783022.410714285,
            "unit": "ns",
            "range": "± 246806.193029472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3314757.6627906975,
            "unit": "ns",
            "range": "± 181809.99734853196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426027.71875,
            "unit": "ns",
            "range": "± 229023.49288516247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4588290.291666667,
            "unit": "ns",
            "range": "± 293938.1492400244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3972939.09375,
            "unit": "ns",
            "range": "± 360504.28852427134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7848942.168421052,
            "unit": "ns",
            "range": "± 655974.8972430378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7003718.08171875,
            "unit": "ns",
            "range": "± 480289.1998753485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171274.699563419,
            "unit": "ns",
            "range": "± 103774.01664511685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375554.6711819556,
            "unit": "ns",
            "range": "± 41786.81366644813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683702.2140066964,
            "unit": "ns",
            "range": "± 95993.90491057337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862600.5205277423,
            "unit": "ns",
            "range": "± 50226.936275827655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837009.1610026042,
            "unit": "ns",
            "range": "± 36086.217861074205"
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
          "id": "6bd69693c90f120f7945486b68a3123b60cef526",
          "message": "Add Libplanet.Store project to solution",
          "timestamp": "2023-07-17T14:57:20+09:00",
          "tree_id": "6426e56214ee1ebdf31142b3a8e13e60a0e00157",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6bd69693c90f120f7945486b68a3123b60cef526"
        },
        "date": 1689574531067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8777767.975,
            "unit": "ns",
            "range": "± 454822.0701978552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21407348.45,
            "unit": "ns",
            "range": "± 392984.31456517515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54880693.09259259,
            "unit": "ns",
            "range": "± 1260695.9843769222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105281014.96666667,
            "unit": "ns",
            "range": "± 882294.9447614982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214444323.03333333,
            "unit": "ns",
            "range": "± 1087212.5213099432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80777.10975609756,
            "unit": "ns",
            "range": "± 4287.749983371657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352783.62,
            "unit": "ns",
            "range": "± 14120.276302277269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328109.670212766,
            "unit": "ns",
            "range": "± 48734.42155779493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295845.9111111111,
            "unit": "ns",
            "range": "± 16504.5426846055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168324.294117647,
            "unit": "ns",
            "range": "± 82360.68871036466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3852790.769230769,
            "unit": "ns",
            "range": "± 60755.66794979412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20012.694736842106,
            "unit": "ns",
            "range": "± 4671.620214347445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124569.35416666667,
            "unit": "ns",
            "range": "± 25095.600144029926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118141.25,
            "unit": "ns",
            "range": "± 9804.042084831613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121757.58510638298,
            "unit": "ns",
            "range": "± 23902.789537417983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6747.41052631579,
            "unit": "ns",
            "range": "± 1441.892605959979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20135.337078651686,
            "unit": "ns",
            "range": "± 2965.1316923989466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566727.5463917525,
            "unit": "ns",
            "range": "± 124400.61290201213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982550.525423729,
            "unit": "ns",
            "range": "± 129843.22478365658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090922.1145833333,
            "unit": "ns",
            "range": "± 156867.70162712337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5988998.042553191,
            "unit": "ns",
            "range": "± 231498.5210261666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361424.8333333335,
            "unit": "ns",
            "range": "± 132593.5151428194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3819592.697674419,
            "unit": "ns",
            "range": "± 468551.48741036595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4437766.214285715,
            "unit": "ns",
            "range": "± 192572.32706856274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4088552.8333333335,
            "unit": "ns",
            "range": "± 104803.63509322386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7156463.4772727275,
            "unit": "ns",
            "range": "± 241169.28134350703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7094526.877421875,
            "unit": "ns",
            "range": "± 440743.56645315705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2222626.06109375,
            "unit": "ns",
            "range": "± 59111.494306012406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414031.9598632813,
            "unit": "ns",
            "range": "± 32557.24492940082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2815595.1696428573,
            "unit": "ns",
            "range": "± 102792.95527781716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850196.1580729167,
            "unit": "ns",
            "range": "± 12047.368726984156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875181.2866753472,
            "unit": "ns",
            "range": "± 18033.12532998295"
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
          "id": "17906009b9b705092e3b4789092e5c3263f00fc2",
          "message": "Add Libplanet.Store project to solution",
          "timestamp": "2023-07-17T15:39:13+09:00",
          "tree_id": "163c115b6db70e87d2d5048617ae9ecfe10b7d8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/17906009b9b705092e3b4789092e5c3263f00fc2"
        },
        "date": 1689576787628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7585990.769230769,
            "unit": "ns",
            "range": "± 70425.96254596484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18735154.64285714,
            "unit": "ns",
            "range": "± 324955.88877039135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47584152.28,
            "unit": "ns",
            "range": "± 1236688.0011957516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92046857.73333333,
            "unit": "ns",
            "range": "± 941436.5539020268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189535816.85714287,
            "unit": "ns",
            "range": "± 1284761.2228524056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55060.25274725275,
            "unit": "ns",
            "range": "± 4805.30251930882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305441.74675324676,
            "unit": "ns",
            "range": "± 14499.377539412406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303147.28571428574,
            "unit": "ns",
            "range": "± 31473.023061977918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283532.33898305084,
            "unit": "ns",
            "range": "± 12427.533754850028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4098392.4615384615,
            "unit": "ns",
            "range": "± 61144.95635320953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3555592.0833333335,
            "unit": "ns",
            "range": "± 42067.76053303945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17394.272727272728,
            "unit": "ns",
            "range": "± 1915.21913591056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83687.24725274726,
            "unit": "ns",
            "range": "± 7007.384149109197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80856.44210526315,
            "unit": "ns",
            "range": "± 6211.405707751941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100448.81443298969,
            "unit": "ns",
            "range": "± 13654.101756531118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4743.647727272727,
            "unit": "ns",
            "range": "± 516.8975206859935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17215.777777777777,
            "unit": "ns",
            "range": "± 1583.0707734204202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546620.8829787234,
            "unit": "ns",
            "range": "± 187990.86181158802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2780854.2916666665,
            "unit": "ns",
            "range": "± 108135.16034071952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2086232.8333333333,
            "unit": "ns",
            "range": "± 204028.91371132806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5869968.5,
            "unit": "ns",
            "range": "± 301241.3320905619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207129.9285714286,
            "unit": "ns",
            "range": "± 171835.21586362456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3475622.875,
            "unit": "ns",
            "range": "± 66380.14339331203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4199371.6632653065,
            "unit": "ns",
            "range": "± 166035.33942210753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3730192,
            "unit": "ns",
            "range": "± 109236.02024679013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6974142.87254902,
            "unit": "ns",
            "range": "± 280222.8071884914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6042252.3796875,
            "unit": "ns",
            "range": "± 34680.85328724709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939701.2091145834,
            "unit": "ns",
            "range": "± 18454.72686075193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224831.0182756695,
            "unit": "ns",
            "range": "± 7567.879472914738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2360008.53125,
            "unit": "ns",
            "range": "± 10523.767620306913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 746287.0094168527,
            "unit": "ns",
            "range": "± 4294.9572109139335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700170.1116536459,
            "unit": "ns",
            "range": "± 3439.7247731442576"
          }
        ]
      }
    ]
  }
}