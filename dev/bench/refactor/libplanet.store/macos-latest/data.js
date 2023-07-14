window.BENCHMARK_DATA = {
  "lastUpdate": 1689323741035,
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
      }
    ]
  }
}