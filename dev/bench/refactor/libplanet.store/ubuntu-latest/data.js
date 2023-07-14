window.BENCHMARK_DATA = {
  "lastUpdate": 1689321685363,
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
          "id": "ff3b7c45a49ead28d4346d14c203a589539e6322",
          "message": "refactor: Introduce",
          "timestamp": "2023-07-14T16:38:45+09:00",
          "tree_id": "33a334eb5d869904e6f0a1b0c40899076b872c82",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ff3b7c45a49ead28d4346d14c203a589539e6322"
        },
        "date": 1689321133320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374066.8350515463,
            "unit": "ns",
            "range": "± 83753.59710156737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616207.302325581,
            "unit": "ns",
            "range": "± 95984.16404841524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1747241.6421052632,
            "unit": "ns",
            "range": "± 99690.89758966086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4656586.615384615,
            "unit": "ns",
            "range": "± 53587.376003337544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3279661.533333333,
            "unit": "ns",
            "range": "± 37440.67784388423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3360539.6279069767,
            "unit": "ns",
            "range": "± 116446.83481315029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4263700.571428572,
            "unit": "ns",
            "range": "± 63596.23494384685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3718461.1071428573,
            "unit": "ns",
            "range": "± 152099.07020380182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322521.1,
            "unit": "ns",
            "range": "± 114864.77981701148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7493858.6,
            "unit": "ns",
            "range": "± 18889.398518745907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18898026.933333334,
            "unit": "ns",
            "range": "± 116666.634322186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49617946.06666667,
            "unit": "ns",
            "range": "± 394814.1753632726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97764904.57142857,
            "unit": "ns",
            "range": "± 535047.2617863145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196619930.86666667,
            "unit": "ns",
            "range": "± 1288255.5703668133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6076944.966517857,
            "unit": "ns",
            "range": "± 28683.346726003227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990335.8040865385,
            "unit": "ns",
            "range": "± 1321.9087437619226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343858.9130859375,
            "unit": "ns",
            "range": "± 1074.6002728628566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579594.0830729166,
            "unit": "ns",
            "range": "± 7540.680273980514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807029.529436384,
            "unit": "ns",
            "range": "± 971.3077903998405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743168.3552594866,
            "unit": "ns",
            "range": "± 2187.854787633922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45326.27173913043,
            "unit": "ns",
            "range": "± 3063.971276022582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276855.2,
            "unit": "ns",
            "range": "± 6746.346256438718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269543.78571428574,
            "unit": "ns",
            "range": "± 7714.330927312144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232582.125,
            "unit": "ns",
            "range": "± 3897.051036788373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4224914.285714285,
            "unit": "ns",
            "range": "± 23161.45870731266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3899813,
            "unit": "ns",
            "range": "± 31365.83148292716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16160.021052631579,
            "unit": "ns",
            "range": "± 1248.6919196464632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85142.46987951807,
            "unit": "ns",
            "range": "± 4302.8055491265095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70722,
            "unit": "ns",
            "range": "± 826.2803398363052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84747.11224489796,
            "unit": "ns",
            "range": "± 11724.411153861714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4446.061224489796,
            "unit": "ns",
            "range": "± 742.7039872706779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15802.395833333334,
            "unit": "ns",
            "range": "± 1242.7256925523927"
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
        "date": 1689321237230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285121.0909090909,
            "unit": "ns",
            "range": "± 8405.804755359672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271143.8275862069,
            "unit": "ns",
            "range": "± 7865.340842986698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233505.46153846153,
            "unit": "ns",
            "range": "± 3858.9549884086628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4305220.066666666,
            "unit": "ns",
            "range": "± 66203.54392592878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3922805.5,
            "unit": "ns",
            "range": "± 85526.87465568013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17110.228260869564,
            "unit": "ns",
            "range": "± 1023.0014888676916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85672.18571428572,
            "unit": "ns",
            "range": "± 4173.604063402976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71672.23529411765,
            "unit": "ns",
            "range": "± 1367.5147407528998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95092.10204081633,
            "unit": "ns",
            "range": "± 16114.072045463481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4735.216494845361,
            "unit": "ns",
            "range": "± 607.0704624602918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16185.739583333334,
            "unit": "ns",
            "range": "± 1555.2126559263552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403309.054945055,
            "unit": "ns",
            "range": "± 78191.66310424698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2740806.1304347827,
            "unit": "ns",
            "range": "± 103340.95578393964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1794123.950617284,
            "unit": "ns",
            "range": "± 94422.30412591896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4855439.434782608,
            "unit": "ns",
            "range": "± 121643.29200495343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5941236.386458334,
            "unit": "ns",
            "range": "± 35263.93292261559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921395.7349330357,
            "unit": "ns",
            "range": "± 6132.194995914438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366149.815625,
            "unit": "ns",
            "range": "± 4819.461694607997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619338.629166667,
            "unit": "ns",
            "range": "± 9548.323316418795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822649.2368164062,
            "unit": "ns",
            "range": "± 2472.5870015293685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755519.9495442709,
            "unit": "ns",
            "range": "± 1039.3302686315928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326706.2093023257,
            "unit": "ns",
            "range": "± 122319.37649770982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3465606.6,
            "unit": "ns",
            "range": "± 111873.48357150379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4326381.4,
            "unit": "ns",
            "range": "± 115303.47012883004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868857.0588235296,
            "unit": "ns",
            "range": "± 72197.78621733372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6310367.4,
            "unit": "ns",
            "range": "± 177304.18028613404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7945129,
            "unit": "ns",
            "range": "± 112793.68362001229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20839270.35,
            "unit": "ns",
            "range": "± 475340.3810299659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52587578.266666666,
            "unit": "ns",
            "range": "± 607236.7725835106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102915499.38461539,
            "unit": "ns",
            "range": "± 322558.329243859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205663967,
            "unit": "ns",
            "range": "± 1845644.3931440315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45948.5625,
            "unit": "ns",
            "range": "± 2243.4830055171587"
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
          "id": "bec41914bb80694e2ad5b423371ba9ffd4b34f12",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:42:33+09:00",
          "tree_id": "b0f30e1643a3b6eea8b4b084576d861d1ce465bf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bec41914bb80694e2ad5b423371ba9ffd4b34f12"
        },
        "date": 1689321669426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340082.8488372093,
            "unit": "ns",
            "range": "± 18406.988288989556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327294.36516853934,
            "unit": "ns",
            "range": "± 22574.938763226626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283145.3163265306,
            "unit": "ns",
            "range": "± 20941.790392348266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5140951.3367346935,
            "unit": "ns",
            "range": "± 313507.69536979677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4739472.224489796,
            "unit": "ns",
            "range": "± 304017.4247140169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23530.58064516129,
            "unit": "ns",
            "range": "± 2579.0124387421115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103766.25581395348,
            "unit": "ns",
            "range": "± 8054.85361050904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93092.94505494506,
            "unit": "ns",
            "range": "± 9945.04775851628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108270.64516129032,
            "unit": "ns",
            "range": "± 9729.13673462254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6385.736842105263,
            "unit": "ns",
            "range": "± 784.2784895431815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22279.159574468085,
            "unit": "ns",
            "range": "± 2637.6211353854587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1719928.4337349397,
            "unit": "ns",
            "range": "± 91476.57282741087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3312359.6875,
            "unit": "ns",
            "range": "± 232035.74400484134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2273880.474226804,
            "unit": "ns",
            "range": "± 185505.57966547195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6285234.16,
            "unit": "ns",
            "range": "± 425595.3402640578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6771526.958072917,
            "unit": "ns",
            "range": "± 202703.9390879553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2218867.5515372986,
            "unit": "ns",
            "range": "± 65679.77661539135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1559031.206968246,
            "unit": "ns",
            "range": "± 47322.99321366783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995942.294849537,
            "unit": "ns",
            "range": "± 83081.22633475577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996967.2054924242,
            "unit": "ns",
            "range": "± 31122.971617752613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908428.8488932292,
            "unit": "ns",
            "range": "± 12147.319888771566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4398892.090909091,
            "unit": "ns",
            "range": "± 106802.46475036634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4387613.197368421,
            "unit": "ns",
            "range": "± 223032.8957833811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5361518.9069767445,
            "unit": "ns",
            "range": "± 291611.9444308956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4561604.234693877,
            "unit": "ns",
            "range": "± 337018.1006450667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8085073.883720931,
            "unit": "ns",
            "range": "± 437224.5312001716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9873175.136363637,
            "unit": "ns",
            "range": "± 236904.8122840933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26048902.8,
            "unit": "ns",
            "range": "± 1263307.648232654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66605035.47058824,
            "unit": "ns",
            "range": "± 2130447.820689353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129832525.73333333,
            "unit": "ns",
            "range": "± 2080156.5367603078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287150811.6666667,
            "unit": "ns",
            "range": "± 3641530.148226658"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56086.467741935485,
            "unit": "ns",
            "range": "± 4147.336443433914"
          }
        ]
      }
    ]
  }
}