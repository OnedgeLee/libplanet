window.BENCHMARK_DATA = {
  "lastUpdate": 1689322487876,
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
        "date": 1689322341361,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301130.4761904762,
            "unit": "ns",
            "range": "± 10599.91513826614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277235.34545454546,
            "unit": "ns",
            "range": "± 10400.52641156737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251734.42857142858,
            "unit": "ns",
            "range": "± 10838.352200919142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426489.642857143,
            "unit": "ns",
            "range": "± 39631.10104374543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995052.1875,
            "unit": "ns",
            "range": "± 78465.74010629841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20846.4375,
            "unit": "ns",
            "range": "± 2095.2925675000743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91600.73469387754,
            "unit": "ns",
            "range": "± 7312.386135937569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79454.42,
            "unit": "ns",
            "range": "± 5193.966640072097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98347.89247311828,
            "unit": "ns",
            "range": "± 12446.541085310098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5924.65306122449,
            "unit": "ns",
            "range": "± 891.7922080339791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19463.177083333332,
            "unit": "ns",
            "range": "± 2005.6055549373648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1556996.1340206186,
            "unit": "ns",
            "range": "± 105132.2128435814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2865259.066666667,
            "unit": "ns",
            "range": "± 108145.25709547069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1931167.103448276,
            "unit": "ns",
            "range": "± 103452.29098152628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5154363.904761905,
            "unit": "ns",
            "range": "± 121563.71666862804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6213563.748883928,
            "unit": "ns",
            "range": "± 30482.115340130153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946934.5641927083,
            "unit": "ns",
            "range": "± 7810.84082238957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399105.4611979167,
            "unit": "ns",
            "range": "± 3088.6966772156197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2761502.8940104167,
            "unit": "ns",
            "range": "± 4311.441138372298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838452.8055338542,
            "unit": "ns",
            "range": "± 320.5281638337674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828262.5193359375,
            "unit": "ns",
            "range": "± 817.4260365060622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3417942.0476190476,
            "unit": "ns",
            "range": "± 81215.57324028204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3850222.0689655175,
            "unit": "ns",
            "range": "± 110886.8850370023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4577546,
            "unit": "ns",
            "range": "± 108427.20845890332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128301.8333333335,
            "unit": "ns",
            "range": "± 164016.4367495089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6725079.714285715,
            "unit": "ns",
            "range": "± 191601.598539465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8781554.466666667,
            "unit": "ns",
            "range": "± 132492.22367146504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22670848.333333332,
            "unit": "ns",
            "range": "± 98246.47950556852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56606273.4,
            "unit": "ns",
            "range": "± 692921.9897565051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111700970.42857143,
            "unit": "ns",
            "range": "± 1063400.9428981738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224211562.6,
            "unit": "ns",
            "range": "± 4187441.6049262243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48510.07526881721,
            "unit": "ns",
            "range": "± 2984.151223862779"
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
        "date": 1689322473962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295791.9696969697,
            "unit": "ns",
            "range": "± 7530.112775072033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289812.8653846154,
            "unit": "ns",
            "range": "± 11977.72542489067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269024.46153846156,
            "unit": "ns",
            "range": "± 9358.209072495356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4394436.857142857,
            "unit": "ns",
            "range": "± 39938.249990275166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871048.4615384615,
            "unit": "ns",
            "range": "± 24604.440404174286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20982.74193548387,
            "unit": "ns",
            "range": "± 1706.4384019458023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98466.54545454546,
            "unit": "ns",
            "range": "± 5977.137474855414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81397.51685393258,
            "unit": "ns",
            "range": "± 4375.485708395333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91950.29113924051,
            "unit": "ns",
            "range": "± 4284.325013862471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5564.103092783505,
            "unit": "ns",
            "range": "± 660.045965642673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21251.659574468085,
            "unit": "ns",
            "range": "± 1671.3403194770042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423263.0408163266,
            "unit": "ns",
            "range": "± 84938.2997628058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2688930.9,
            "unit": "ns",
            "range": "± 79112.62420265829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1885923.305263158,
            "unit": "ns",
            "range": "± 133851.93563881278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4956611.529411765,
            "unit": "ns",
            "range": "± 147704.93399572314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6227159.390625,
            "unit": "ns",
            "range": "± 17661.612350903888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895203.1900111607,
            "unit": "ns",
            "range": "± 3049.9565227576163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369993.739127604,
            "unit": "ns",
            "range": "± 635.3944973384854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616497.4692708333,
            "unit": "ns",
            "range": "± 2726.7481346981335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820118.5929129465,
            "unit": "ns",
            "range": "± 634.978843036124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749807.2809570313,
            "unit": "ns",
            "range": "± 1019.4342215817617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3441847.227272727,
            "unit": "ns",
            "range": "± 127933.19982270974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643235.1333333333,
            "unit": "ns",
            "range": "± 62343.120091115416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4409427.6,
            "unit": "ns",
            "range": "± 54248.02238897088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4019868.1666666665,
            "unit": "ns",
            "range": "± 118731.17975757859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6631380.324324325,
            "unit": "ns",
            "range": "± 187002.29204834986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8021394.8,
            "unit": "ns",
            "range": "± 59110.36265712758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19912797.35714286,
            "unit": "ns",
            "range": "± 33488.6471270653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51394462.06666667,
            "unit": "ns",
            "range": "± 194176.9243648198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102240043.33333333,
            "unit": "ns",
            "range": "± 197808.1103648059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203877000.23076922,
            "unit": "ns",
            "range": "± 208199.32739170647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50368.63043478261,
            "unit": "ns",
            "range": "± 3589.9457056636656"
          }
        ]
      }
    ]
  }
}