window.BENCHMARK_DATA = {
  "lastUpdate": 1689321472075,
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
      }
    ]
  }
}