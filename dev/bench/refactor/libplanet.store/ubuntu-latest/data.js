window.BENCHMARK_DATA = {
  "lastUpdate": 1689574126766,
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
        "date": 1689323232999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290928.8695652174,
            "unit": "ns",
            "range": "± 5479.3851040583995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282196.0465116279,
            "unit": "ns",
            "range": "± 10437.941046178574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251535.68421052632,
            "unit": "ns",
            "range": "± 10890.007749829812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4319694.785714285,
            "unit": "ns",
            "range": "± 32752.439453898984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3898480.214285714,
            "unit": "ns",
            "range": "± 23824.39538720624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19731.94680851064,
            "unit": "ns",
            "range": "± 2157.752381814527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97749.75789473685,
            "unit": "ns",
            "range": "± 5914.836395852184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75263.81818181818,
            "unit": "ns",
            "range": "± 1812.065426033262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92209.32653061225,
            "unit": "ns",
            "range": "± 11705.858648403468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5356.122448979592,
            "unit": "ns",
            "range": "± 735.9776899535776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20028.463157894737,
            "unit": "ns",
            "range": "± 1597.1032275256664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449887.9897959183,
            "unit": "ns",
            "range": "± 106331.13526222945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2694570.5454545454,
            "unit": "ns",
            "range": "± 63170.43199285961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1847713.7789473685,
            "unit": "ns",
            "range": "± 115454.1484677275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4948578.903225807,
            "unit": "ns",
            "range": "± 137196.44700170017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6220950.588727678,
            "unit": "ns",
            "range": "± 5592.279990926454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865078.3081430288,
            "unit": "ns",
            "range": "± 439.197766815067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365294.0711495536,
            "unit": "ns",
            "range": "± 572.2231887543312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572109.816666667,
            "unit": "ns",
            "range": "± 1492.8972882499172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818968.6444561298,
            "unit": "ns",
            "range": "± 629.4555378971469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724542.2305385044,
            "unit": "ns",
            "range": "± 999.7241319309084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382725.434782609,
            "unit": "ns",
            "range": "± 68812.05186780088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3560100.625,
            "unit": "ns",
            "range": "± 100615.6144339404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4391355.684210527,
            "unit": "ns",
            "range": "± 66972.21148610207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3990038,
            "unit": "ns",
            "range": "± 76435.34012075173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6519376.540540541,
            "unit": "ns",
            "range": "± 218544.61734297778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803959.6,
            "unit": "ns",
            "range": "± 76160.35896317716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19775156.14285714,
            "unit": "ns",
            "range": "± 50152.5942988107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50803202.428571425,
            "unit": "ns",
            "range": "± 220574.27377947018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101425707.33333333,
            "unit": "ns",
            "range": "± 185515.71354418882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203242417.3846154,
            "unit": "ns",
            "range": "± 269207.04002760234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46862.87234042553,
            "unit": "ns",
            "range": "± 3454.7315761282653"
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
        "date": 1689323394462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279429.23076923075,
            "unit": "ns",
            "range": "± 11522.677773979287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267656.47826086957,
            "unit": "ns",
            "range": "± 10248.653554359942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228101.70588235295,
            "unit": "ns",
            "range": "± 3112.5130876171806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4213381.4,
            "unit": "ns",
            "range": "± 66436.53486685084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3860199.7333333334,
            "unit": "ns",
            "range": "± 58138.12125873383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15922.979166666666,
            "unit": "ns",
            "range": "± 1620.6694976502877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82568.12244897959,
            "unit": "ns",
            "range": "± 6528.138531456161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69642,
            "unit": "ns",
            "range": "± 471.7699747662086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89914.22727272728,
            "unit": "ns",
            "range": "± 10085.380701876176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4498.968085106383,
            "unit": "ns",
            "range": "± 637.9899795641393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16258.01052631579,
            "unit": "ns",
            "range": "± 1945.7501834726272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334280.0319148935,
            "unit": "ns",
            "range": "± 86084.42458267439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2575002.275862069,
            "unit": "ns",
            "range": "± 111797.27463988119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1720417.694736842,
            "unit": "ns",
            "range": "± 123429.6646356353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4706060.645161291,
            "unit": "ns",
            "range": "± 142539.8789489099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6024288.936979166,
            "unit": "ns",
            "range": "± 17441.99794118975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962902.9765625,
            "unit": "ns",
            "range": "± 5370.167134918916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360704.8688802083,
            "unit": "ns",
            "range": "± 6959.86533944328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568409.9212740385,
            "unit": "ns",
            "range": "± 5417.662190068212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812836.4995442708,
            "unit": "ns",
            "range": "± 1927.788374415596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731421.5614483173,
            "unit": "ns",
            "range": "± 1729.8716951191366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215730.1875,
            "unit": "ns",
            "range": "± 33773.398804816294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3386139.4615384615,
            "unit": "ns",
            "range": "± 47115.11954885145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4256211.052631579,
            "unit": "ns",
            "range": "± 91307.34258868881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3664641.8529411764,
            "unit": "ns",
            "range": "± 111565.4783374978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6342730.266666667,
            "unit": "ns",
            "range": "± 113865.74014379935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7594257.733333333,
            "unit": "ns",
            "range": "± 81310.61600559624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19081868.866666667,
            "unit": "ns",
            "range": "± 58249.27183219505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49678135.53333333,
            "unit": "ns",
            "range": "± 385693.9876985874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98277009.06666666,
            "unit": "ns",
            "range": "± 1202161.0182195387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193365316.07142857,
            "unit": "ns",
            "range": "± 1614209.2173522597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47070.375,
            "unit": "ns",
            "range": "± 2206.6356221604287"
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
        "date": 1689324050245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308790.5416666667,
            "unit": "ns",
            "range": "± 11247.450264172565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296951.92307692306,
            "unit": "ns",
            "range": "± 9277.81736011285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258372.075,
            "unit": "ns",
            "range": "± 9165.607869073136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4643098.4,
            "unit": "ns",
            "range": "± 48390.12650294922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4177097.933333333,
            "unit": "ns",
            "range": "± 68016.74933475332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21009.315217391304,
            "unit": "ns",
            "range": "± 1659.7149028934957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99794.89690721649,
            "unit": "ns",
            "range": "± 6293.631245957655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83900.08602150538,
            "unit": "ns",
            "range": "± 5200.267231126547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110115.37078651685,
            "unit": "ns",
            "range": "± 9594.801863724799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6467.802083333333,
            "unit": "ns",
            "range": "± 1005.2634388404357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21420.18556701031,
            "unit": "ns",
            "range": "± 2006.6543846344973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567144.5263157894,
            "unit": "ns",
            "range": "± 95821.48842718366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2942779.3846153845,
            "unit": "ns",
            "range": "± 102820.19431221092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2025500.3648648649,
            "unit": "ns",
            "range": "± 98957.347367657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5653519.823529412,
            "unit": "ns",
            "range": "± 304607.5028121543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6113413.281770834,
            "unit": "ns",
            "range": "± 20828.13553252384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907176.228515625,
            "unit": "ns",
            "range": "± 1688.5910991417395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411616.8296875,
            "unit": "ns",
            "range": "± 4608.307358726393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680728.744140625,
            "unit": "ns",
            "range": "± 1204.497448489946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837025.755483774,
            "unit": "ns",
            "range": "± 638.3339008736148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773023.2432291667,
            "unit": "ns",
            "range": "± 396.8793162678603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3665355.0416666665,
            "unit": "ns",
            "range": "± 94608.18061258907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3897197.5476190476,
            "unit": "ns",
            "range": "± 140280.10137407968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4635790.428571428,
            "unit": "ns",
            "range": "± 99613.49352834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4236351.760869565,
            "unit": "ns",
            "range": "± 161750.06655086178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6919858.052631579,
            "unit": "ns",
            "range": "± 148363.88672055746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8265671.866666666,
            "unit": "ns",
            "range": "± 138135.57687796987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22389625.4,
            "unit": "ns",
            "range": "± 168629.34056673362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57069971.666666664,
            "unit": "ns",
            "range": "± 598302.8560934034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114297051,
            "unit": "ns",
            "range": "± 685865.6649220189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229328630.13333333,
            "unit": "ns",
            "range": "± 1464866.425421438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50252.936170212764,
            "unit": "ns",
            "range": "± 3367.039134538884"
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
        "date": 1689324898166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429457.9278350514,
            "unit": "ns",
            "range": "± 101231.16539882938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2663226.789473684,
            "unit": "ns",
            "range": "± 49246.40431609527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1808454.7325581396,
            "unit": "ns",
            "range": "± 93381.3786760791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4970816.46875,
            "unit": "ns",
            "range": "± 137001.63356854767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3422702.35,
            "unit": "ns",
            "range": "± 75238.3881212349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3597774.125,
            "unit": "ns",
            "range": "± 56748.120764039406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4391399.230769231,
            "unit": "ns",
            "range": "± 29044.977170915015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933433.4814814813,
            "unit": "ns",
            "range": "± 73159.93548088291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6556172.59375,
            "unit": "ns",
            "range": "± 199050.5041808136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7847951.066666666,
            "unit": "ns",
            "range": "± 116214.31853167214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19955206.333333332,
            "unit": "ns",
            "range": "± 218436.14980900244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51447843.333333336,
            "unit": "ns",
            "range": "± 255458.30542482625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102394868.53333333,
            "unit": "ns",
            "range": "± 466147.41227271914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203215797,
            "unit": "ns",
            "range": "± 918071.2880051464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6097021.574776785,
            "unit": "ns",
            "range": "± 17411.6013709353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882674.1201171875,
            "unit": "ns",
            "range": "± 6658.745030363916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359987.1673177083,
            "unit": "ns",
            "range": "± 939.3863711751746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595377.4596354165,
            "unit": "ns",
            "range": "± 3699.2901761248677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818770.3201171875,
            "unit": "ns",
            "range": "± 1239.7881787215938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739483.2548177083,
            "unit": "ns",
            "range": "± 1759.7284278756106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48978.60638297872,
            "unit": "ns",
            "range": "± 3834.34365615645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289823.4186046512,
            "unit": "ns",
            "range": "± 10620.848612477697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279680.5333333333,
            "unit": "ns",
            "range": "± 12421.254478891353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262024.63953488372,
            "unit": "ns",
            "range": "± 14127.492375558992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4340397.785714285,
            "unit": "ns",
            "range": "± 35185.809635700876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3966292.7333333334,
            "unit": "ns",
            "range": "± 33147.58115171488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20827,
            "unit": "ns",
            "range": "± 1682.454422625031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98279.84375,
            "unit": "ns",
            "range": "± 7274.56479628362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78340.79487179487,
            "unit": "ns",
            "range": "± 2738.1174110719053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93497.95505617978,
            "unit": "ns",
            "range": "± 7872.810056121974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5845.329896907217,
            "unit": "ns",
            "range": "± 750.8071173972477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19984.270833333332,
            "unit": "ns",
            "range": "± 1932.3191927627531"
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
        "date": 1689325010844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348013.67272727273,
            "unit": "ns",
            "range": "± 14614.680331338259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327610.12328767125,
            "unit": "ns",
            "range": "± 16129.562996030689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296116.68888888886,
            "unit": "ns",
            "range": "± 16432.333632847876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5342555.882352941,
            "unit": "ns",
            "range": "± 104024.19799131014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4834550.642857143,
            "unit": "ns",
            "range": "± 39785.696808714376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23945.822916666668,
            "unit": "ns",
            "range": "± 2159.7176569600683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108068.33695652174,
            "unit": "ns",
            "range": "± 6945.964299508583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97530.37113402062,
            "unit": "ns",
            "range": "± 7453.962315048157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120290.78350515464,
            "unit": "ns",
            "range": "± 13805.383952938737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7173.15625,
            "unit": "ns",
            "range": "± 974.5425196969952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23919.358695652172,
            "unit": "ns",
            "range": "± 2380.1394436088103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759216.2555555555,
            "unit": "ns",
            "range": "± 97000.9087593897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3350453.8571428573,
            "unit": "ns",
            "range": "± 149488.34799342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251992.6774193547,
            "unit": "ns",
            "range": "± 125467.14786012979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6262372.736842105,
            "unit": "ns",
            "range": "± 270839.92244560295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7144539.983333333,
            "unit": "ns",
            "range": "± 71933.87819220567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2279633.2846354167,
            "unit": "ns",
            "range": "± 15606.348209370157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1632142.1479166667,
            "unit": "ns",
            "range": "± 8723.546185607287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3147868.2946428573,
            "unit": "ns",
            "range": "± 12740.609724973689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003778.8555989583,
            "unit": "ns",
            "range": "± 6476.682290974451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916458.7078776042,
            "unit": "ns",
            "range": "± 6364.1857743560795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4331959.75,
            "unit": "ns",
            "range": "± 110080.80460487433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4535658.75,
            "unit": "ns",
            "range": "± 98854.1010920826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5587308.8125,
            "unit": "ns",
            "range": "± 105227.03579037645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4903642.161290322,
            "unit": "ns",
            "range": "± 123183.85464448301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8159244.304347826,
            "unit": "ns",
            "range": "± 199213.0637603036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10240759.666666666,
            "unit": "ns",
            "range": "± 256251.98905996495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26537749.8125,
            "unit": "ns",
            "range": "± 489508.1026904756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66691286,
            "unit": "ns",
            "range": "± 863816.9378567098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132931623.4,
            "unit": "ns",
            "range": "± 1920988.5401428759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265987036.13333333,
            "unit": "ns",
            "range": "± 2850075.5615394246"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56605.5376344086,
            "unit": "ns",
            "range": "± 3364.517400496269"
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
        "date": 1689325285928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308289,
            "unit": "ns",
            "range": "± 11858.412728710553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299198.2653061224,
            "unit": "ns",
            "range": "± 9699.551116708764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244537.02564102566,
            "unit": "ns",
            "range": "± 8474.742155640393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4616562.714285715,
            "unit": "ns",
            "range": "± 167671.61807420984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196038.520833333,
            "unit": "ns",
            "range": "± 165222.8937545819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20734.031578947368,
            "unit": "ns",
            "range": "± 1789.5768217988912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103286.01030927835,
            "unit": "ns",
            "range": "± 15804.85271304806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77897.46428571429,
            "unit": "ns",
            "range": "± 7091.735180206534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133786.43298969071,
            "unit": "ns",
            "range": "± 21341.3206196274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5771.989583333333,
            "unit": "ns",
            "range": "± 937.890639958588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19688.938144329895,
            "unit": "ns",
            "range": "± 2617.72754031062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574510.09,
            "unit": "ns",
            "range": "± 135403.53068842337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2963228.4492753623,
            "unit": "ns",
            "range": "± 142684.8379768725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2000957.5934065934,
            "unit": "ns",
            "range": "± 131897.4700047122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5900382.23,
            "unit": "ns",
            "range": "± 534180.8560226659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6249045.349158654,
            "unit": "ns",
            "range": "± 65824.08134918856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952021.3486979166,
            "unit": "ns",
            "range": "± 35362.21400388216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411778.758984375,
            "unit": "ns",
            "range": "± 12061.4035729987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720114.4899553573,
            "unit": "ns",
            "range": "± 9290.854129754727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855276.4434344952,
            "unit": "ns",
            "range": "± 3819.3037302583457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778305.4089192708,
            "unit": "ns",
            "range": "± 4925.060473460068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3536179.9595959596,
            "unit": "ns",
            "range": "± 228729.48319477608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3700029.144444444,
            "unit": "ns",
            "range": "± 206222.24324380478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4512004.357142857,
            "unit": "ns",
            "range": "± 77785.99730583029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4125328.9684210527,
            "unit": "ns",
            "range": "± 235380.53378294857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7304834.59,
            "unit": "ns",
            "range": "± 512520.6350694198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8193164.217391305,
            "unit": "ns",
            "range": "± 206513.92157209877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23650808.04347826,
            "unit": "ns",
            "range": "± 909625.0196407298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56718847.027027026,
            "unit": "ns",
            "range": "± 1900294.382189207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117182756.91935484,
            "unit": "ns",
            "range": "± 5306534.059991991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227639122.8846154,
            "unit": "ns",
            "range": "± 6202229.489878331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53135.47368421053,
            "unit": "ns",
            "range": "± 5166.415409946232"
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
        "date": 1689325377826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297605.7254901961,
            "unit": "ns",
            "range": "± 12076.754118683433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276214.2,
            "unit": "ns",
            "range": "± 7379.735000453816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249019.17647058822,
            "unit": "ns",
            "range": "± 4984.411904067697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273525.857142857,
            "unit": "ns",
            "range": "± 23265.897462751203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3908337.785714286,
            "unit": "ns",
            "range": "± 33253.30665611969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19090.574468085106,
            "unit": "ns",
            "range": "± 1308.1944504550256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89034.0947368421,
            "unit": "ns",
            "range": "± 6166.271508838763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75362.89583333333,
            "unit": "ns",
            "range": "± 2613.598385527764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89643.89156626505,
            "unit": "ns",
            "range": "± 6120.742169672803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5216.367346938776,
            "unit": "ns",
            "range": "± 581.7672221588765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18253.25,
            "unit": "ns",
            "range": "± 1947.3296101395665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424714.4141414142,
            "unit": "ns",
            "range": "± 89024.60924259158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2629455,
            "unit": "ns",
            "range": "± 82433.93813836628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1812766.6344086023,
            "unit": "ns",
            "range": "± 105292.97900793237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4887488.108108108,
            "unit": "ns",
            "range": "± 158925.55215235977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6197952.463020833,
            "unit": "ns",
            "range": "± 15255.079793388935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009471.437779018,
            "unit": "ns",
            "range": "± 2139.3076162757957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341530.4630208334,
            "unit": "ns",
            "range": "± 746.1550450011978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602348.2882254464,
            "unit": "ns",
            "range": "± 2908.782041652401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825823.8605018029,
            "unit": "ns",
            "range": "± 654.7282980829596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747328.7686197917,
            "unit": "ns",
            "range": "± 2156.377751081215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376032.4,
            "unit": "ns",
            "range": "± 90081.2068298192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3523257,
            "unit": "ns",
            "range": "± 37674.61077538723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4367334.153846154,
            "unit": "ns",
            "range": "± 43268.18378987451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3937331.3,
            "unit": "ns",
            "range": "± 138190.65823452867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6558502.578947368,
            "unit": "ns",
            "range": "± 140225.38211723286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7727173.133333334,
            "unit": "ns",
            "range": "± 80403.46304186039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19734193.583333332,
            "unit": "ns",
            "range": "± 76860.37870114441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51521932.692307696,
            "unit": "ns",
            "range": "± 211516.82275979238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101811029.73333333,
            "unit": "ns",
            "range": "± 470072.43545732496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202528792.7857143,
            "unit": "ns",
            "range": "± 625399.7605436281"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46722.41111111111,
            "unit": "ns",
            "range": "± 2721.2687345644226"
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
        "date": 1689333528230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281833.9756097561,
            "unit": "ns",
            "range": "± 8988.410703477575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272918.488372093,
            "unit": "ns",
            "range": "± 10116.514676912939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234157.76923076922,
            "unit": "ns",
            "range": "± 6405.205497454034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271974,
            "unit": "ns",
            "range": "± 44198.50277845555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3939499.5,
            "unit": "ns",
            "range": "± 10362.697099781417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18096.917525773195,
            "unit": "ns",
            "range": "± 1172.6424901877872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86352.7027027027,
            "unit": "ns",
            "range": "± 4161.342742102946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69884.61538461539,
            "unit": "ns",
            "range": "± 608.0654485691402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85509.12244897959,
            "unit": "ns",
            "range": "± 10983.231666523372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4604.081632653061,
            "unit": "ns",
            "range": "± 574.531340579996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18654.315217391304,
            "unit": "ns",
            "range": "± 1659.0682869806135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362732.8315789474,
            "unit": "ns",
            "range": "± 95010.43938606449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565456.5833333335,
            "unit": "ns",
            "range": "± 84004.33346930043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1743214.2117647058,
            "unit": "ns",
            "range": "± 93659.160481617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4855693.90625,
            "unit": "ns",
            "range": "± 130338.84367600235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6410055.9125,
            "unit": "ns",
            "range": "± 29821.16298042013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925103.500751202,
            "unit": "ns",
            "range": "± 1139.7313960709587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390886.0004185268,
            "unit": "ns",
            "range": "± 2743.619869820467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617361.5460379464,
            "unit": "ns",
            "range": "± 3733.0080256925157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805897.2244466146,
            "unit": "ns",
            "range": "± 568.5855528854011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746210.837109375,
            "unit": "ns",
            "range": "± 245.75561740216742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265992.4444444445,
            "unit": "ns",
            "range": "± 65837.11158182677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3426590.153846154,
            "unit": "ns",
            "range": "± 53661.94104584451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4299970.733333333,
            "unit": "ns",
            "range": "± 43776.448215363256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3766772.65,
            "unit": "ns",
            "range": "± 83134.11085157271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6384432,
            "unit": "ns",
            "range": "± 176827.33330694222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7547765.466666667,
            "unit": "ns",
            "range": "± 26368.429071433857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19337668.6,
            "unit": "ns",
            "range": "± 167461.9847188353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49759076.13333333,
            "unit": "ns",
            "range": "± 231926.6603050772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97738068.5,
            "unit": "ns",
            "range": "± 787881.0467729982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197863230.53333333,
            "unit": "ns",
            "range": "± 1754136.3244553006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46308.725,
            "unit": "ns",
            "range": "± 2412.59488421004"
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
        "date": 1689564419081,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388785.42553191487,
            "unit": "ns",
            "range": "± 44360.75813935889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355972.0315789474,
            "unit": "ns",
            "range": "± 40551.73467639763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333448.58510638296,
            "unit": "ns",
            "range": "± 42582.34564199581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5129897.852631579,
            "unit": "ns",
            "range": "± 457206.2663976002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4912294.234693877,
            "unit": "ns",
            "range": "± 322332.2115233954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31934.83,
            "unit": "ns",
            "range": "± 10258.693531381468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116979.3956043956,
            "unit": "ns",
            "range": "± 14670.066062018279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131203.23958333334,
            "unit": "ns",
            "range": "± 17752.193782738243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146954.21276595743,
            "unit": "ns",
            "range": "± 20241.80786311211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7782.920454545455,
            "unit": "ns",
            "range": "± 1240.435279752621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31749.785714285714,
            "unit": "ns",
            "range": "± 10693.53196765685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1810577.3232323232,
            "unit": "ns",
            "range": "± 189858.64051139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3381165.93,
            "unit": "ns",
            "range": "± 313528.64705668774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2296986.0408163266,
            "unit": "ns",
            "range": "± 284402.1153191708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6569504.173469388,
            "unit": "ns",
            "range": "± 633219.57672043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7469014.912326389,
            "unit": "ns",
            "range": "± 279077.69833514723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2282890.455150463,
            "unit": "ns",
            "range": "± 62138.41164379964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609793.791015625,
            "unit": "ns",
            "range": "± 25646.700703956794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230992.521875,
            "unit": "ns",
            "range": "± 72994.4152934258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027033.0674143145,
            "unit": "ns",
            "range": "± 30887.15565396162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 973122.4525390625,
            "unit": "ns",
            "range": "± 30725.45277726528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4241305.9375,
            "unit": "ns",
            "range": "± 258136.6232746084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4428360.867346939,
            "unit": "ns",
            "range": "± 256775.58112382313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5570484.282828283,
            "unit": "ns",
            "range": "± 386620.95585863123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4795161.6,
            "unit": "ns",
            "range": "± 554383.8676390798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8960056.705263158,
            "unit": "ns",
            "range": "± 537829.8733237726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9066014.595959596,
            "unit": "ns",
            "range": "± 672513.0220048989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24528332.17525773,
            "unit": "ns",
            "range": "± 1903564.1381715215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67712751.48453608,
            "unit": "ns",
            "range": "± 4225152.718692532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129561288.6375,
            "unit": "ns",
            "range": "± 6774134.789312024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269658957.5441176,
            "unit": "ns",
            "range": "± 12818738.398750585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64798.255319148935,
            "unit": "ns",
            "range": "± 12895.117096147616"
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
        "date": 1689564487005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284582.6170212766,
            "unit": "ns",
            "range": "± 10986.358948127232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266821.97222222225,
            "unit": "ns",
            "range": "± 7628.1419362257775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239278.14285714287,
            "unit": "ns",
            "range": "± 3499.7265576073196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4223082,
            "unit": "ns",
            "range": "± 15154.10850612416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3854630.2666666666,
            "unit": "ns",
            "range": "± 36768.673196596246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18169.791666666668,
            "unit": "ns",
            "range": "± 1695.1397887810822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83312.12280701754,
            "unit": "ns",
            "range": "± 3470.7647164266236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70636.73684210527,
            "unit": "ns",
            "range": "± 1124.0393351215894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81086.81967213115,
            "unit": "ns",
            "range": "± 3367.4001024934983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4562.886597938144,
            "unit": "ns",
            "range": "± 556.2747349610746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16942.094736842104,
            "unit": "ns",
            "range": "± 1222.9779844722966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335277.6421052632,
            "unit": "ns",
            "range": "± 80719.4741915739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2570527.9565217393,
            "unit": "ns",
            "range": "± 63921.744618271165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1729810.1794871795,
            "unit": "ns",
            "range": "± 89294.87723119173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4814450.75,
            "unit": "ns",
            "range": "± 160757.57282484614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6258838.4765625,
            "unit": "ns",
            "range": "± 16253.436686631336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883247.6986979167,
            "unit": "ns",
            "range": "± 2585.5778503056586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386503.9792131695,
            "unit": "ns",
            "range": "± 546.7784760679182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640711.871875,
            "unit": "ns",
            "range": "± 3160.4534484786254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812719.6200420673,
            "unit": "ns",
            "range": "± 729.7519572220162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755810.6692940848,
            "unit": "ns",
            "range": "± 1916.0816487997313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232039.6428571427,
            "unit": "ns",
            "range": "± 22172.160203584284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3389153.8571428573,
            "unit": "ns",
            "range": "± 55003.892551565616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300143.263157895,
            "unit": "ns",
            "range": "± 93837.64310993165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3763205.3181818184,
            "unit": "ns",
            "range": "± 90165.20559368277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6286079.714285715,
            "unit": "ns",
            "range": "± 109200.60669909554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7541939.666666667,
            "unit": "ns",
            "range": "± 35102.98861242173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19355788.666666668,
            "unit": "ns",
            "range": "± 156280.62427508258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49456281.78571428,
            "unit": "ns",
            "range": "± 307314.64374760893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98748832.93333334,
            "unit": "ns",
            "range": "± 715843.2474027163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196218584,
            "unit": "ns",
            "range": "± 632860.6996281702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46518.98809523809,
            "unit": "ns",
            "range": "± 2183.2923049864844"
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
        "date": 1689564522550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307282.2207792208,
            "unit": "ns",
            "range": "± 14477.59337882925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289822.60493827163,
            "unit": "ns",
            "range": "± 15202.855030946499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265579.79347826086,
            "unit": "ns",
            "range": "± 14997.92794812336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4711103.142857143,
            "unit": "ns",
            "range": "± 64992.81090049309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4357903.266666667,
            "unit": "ns",
            "range": "± 58834.06346237899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25770.76842105263,
            "unit": "ns",
            "range": "± 2940.9295225215733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99518.3469387755,
            "unit": "ns",
            "range": "± 8294.677288580404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84198.78571428571,
            "unit": "ns",
            "range": "± 6152.982292997286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108813.625,
            "unit": "ns",
            "range": "± 18284.8104100529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6498.978494623656,
            "unit": "ns",
            "range": "± 1295.8156234462042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20628.0412371134,
            "unit": "ns",
            "range": "± 2264.423555774947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542535.7731958763,
            "unit": "ns",
            "range": "± 126855.53428256366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3013913.5316455695,
            "unit": "ns",
            "range": "± 156061.9843539193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026367.8617021276,
            "unit": "ns",
            "range": "± 114672.88481595345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5322599.166666667,
            "unit": "ns",
            "range": "± 157430.5699771048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6245107.243861607,
            "unit": "ns",
            "range": "± 36105.70221159603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921514.3984375,
            "unit": "ns",
            "range": "± 7559.468352525548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396155.1346354166,
            "unit": "ns",
            "range": "± 3726.3209181555017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657322.536979167,
            "unit": "ns",
            "range": "± 6038.7348252152215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853973.2919170673,
            "unit": "ns",
            "range": "± 2126.2511054345596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775747.4518229166,
            "unit": "ns",
            "range": "± 741.0758282076117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3781704.0416666665,
            "unit": "ns",
            "range": "± 96638.52282401094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3893691,
            "unit": "ns",
            "range": "± 137528.9284556302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4662368.954545454,
            "unit": "ns",
            "range": "± 171704.51377306422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4434001.357142857,
            "unit": "ns",
            "range": "± 61071.86211669904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6949826.607142857,
            "unit": "ns",
            "range": "± 197255.8615563082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8586874.24489796,
            "unit": "ns",
            "range": "± 339484.9319190845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22963604.466666665,
            "unit": "ns",
            "range": "± 348770.72718884837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57175974.06666667,
            "unit": "ns",
            "range": "± 491679.4275400046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114407502.46666667,
            "unit": "ns",
            "range": "± 1390201.9235320184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227019004.57142857,
            "unit": "ns",
            "range": "± 1937504.9959064808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50873.95744680851,
            "unit": "ns",
            "range": "± 2968.7677104482023"
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
        "date": 1689573217173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285464.6170212766,
            "unit": "ns",
            "range": "± 10587.414385574879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270388.1875,
            "unit": "ns",
            "range": "± 5078.770050825954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245521.26470588235,
            "unit": "ns",
            "range": "± 7832.493021242181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4269610.533333333,
            "unit": "ns",
            "range": "± 30567.25559405654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826188.0714285714,
            "unit": "ns",
            "range": "± 34550.82129150597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18644.84375,
            "unit": "ns",
            "range": "± 1882.5093909215684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90114.95454545454,
            "unit": "ns",
            "range": "± 4968.258946897532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73397.28571428571,
            "unit": "ns",
            "range": "± 2413.530164953995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81606.51898734177,
            "unit": "ns",
            "range": "± 4605.674952236697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4345.928571428572,
            "unit": "ns",
            "range": "± 601.350511884982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19306.915789473685,
            "unit": "ns",
            "range": "± 1368.62278705956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352676.69,
            "unit": "ns",
            "range": "± 102951.78778758782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510782.5714285714,
            "unit": "ns",
            "range": "± 69677.03243108247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1743138.3125,
            "unit": "ns",
            "range": "± 120923.36063059136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4773782.256410256,
            "unit": "ns",
            "range": "± 166297.94819598852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5971865.694270833,
            "unit": "ns",
            "range": "± 30280.590061007442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865455.2960379464,
            "unit": "ns",
            "range": "± 2913.1065768910307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376138.5569661458,
            "unit": "ns",
            "range": "± 1060.8760168140282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2561686.3466145834,
            "unit": "ns",
            "range": "± 2148.2018846159845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825434.9778645834,
            "unit": "ns",
            "range": "± 934.8589146060872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737810.1847795759,
            "unit": "ns",
            "range": "± 909.085015775843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261172.285714286,
            "unit": "ns",
            "range": "± 92807.10507078134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3398648.4,
            "unit": "ns",
            "range": "± 111139.86240033188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289976.470588235,
            "unit": "ns",
            "range": "± 82640.11259076736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3695857.913043478,
            "unit": "ns",
            "range": "± 91646.49514793888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6424987.92,
            "unit": "ns",
            "range": "± 170048.27283914608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7588272.266666667,
            "unit": "ns",
            "range": "± 35048.02668271612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19398141.35714286,
            "unit": "ns",
            "range": "± 99838.12536347729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49566352.28571428,
            "unit": "ns",
            "range": "± 226886.54348795585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99781141.06666666,
            "unit": "ns",
            "range": "± 626474.3466483646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196807008.13333333,
            "unit": "ns",
            "range": "± 1907371.7104671574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47310.13483146067,
            "unit": "ns",
            "range": "± 2622.701288708973"
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
        "date": 1689574112889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284134.34375,
            "unit": "ns",
            "range": "± 8277.028953518227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271849.02127659577,
            "unit": "ns",
            "range": "± 9501.318511451935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244384,
            "unit": "ns",
            "range": "± 6421.622328768123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4287971.357142857,
            "unit": "ns",
            "range": "± 23825.89204918801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3872465.3846153845,
            "unit": "ns",
            "range": "± 15540.744627904533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20415.463917525773,
            "unit": "ns",
            "range": "± 1382.957293732767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87927.01351351352,
            "unit": "ns",
            "range": "± 4068.9583349208347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73808.5142857143,
            "unit": "ns",
            "range": "± 2414.352091524502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92550.02040816327,
            "unit": "ns",
            "range": "± 11689.872787733564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4979.581632653061,
            "unit": "ns",
            "range": "± 576.373696135855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18469.791666666668,
            "unit": "ns",
            "range": "± 1457.3313600490646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408226.95,
            "unit": "ns",
            "range": "± 103287.37890056548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2614630.9310344825,
            "unit": "ns",
            "range": "± 75483.2923939989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1809160.7422680412,
            "unit": "ns",
            "range": "± 123857.01824224564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4917566.891304348,
            "unit": "ns",
            "range": "± 186844.7676309851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6148292.340745192,
            "unit": "ns",
            "range": "± 21277.399194130263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897335.236328125,
            "unit": "ns",
            "range": "± 3279.2388251299544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351940.901171875,
            "unit": "ns",
            "range": "± 992.8971780131407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595159.325,
            "unit": "ns",
            "range": "± 1380.1521372959285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838647.958577474,
            "unit": "ns",
            "range": "± 230.98259842712918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728465.8068498884,
            "unit": "ns",
            "range": "± 974.7380308870961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3306399.8666666667,
            "unit": "ns",
            "range": "± 39580.10214537218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3523872.923076923,
            "unit": "ns",
            "range": "± 94046.34970945893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4416566.333333333,
            "unit": "ns",
            "range": "± 65443.33797990732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3916066.4,
            "unit": "ns",
            "range": "± 72997.44274855506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6425003.321428572,
            "unit": "ns",
            "range": "± 150637.44934236753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703112.846153846,
            "unit": "ns",
            "range": "± 18046.542008771623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19657360.266666666,
            "unit": "ns",
            "range": "± 97350.75652245975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50575340.71428572,
            "unit": "ns",
            "range": "± 242097.24666798624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100751200.15384616,
            "unit": "ns",
            "range": "± 298286.7387461395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201598607,
            "unit": "ns",
            "range": "± 232270.17764133745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51694.117647058825,
            "unit": "ns",
            "range": "± 985.184366143778"
          }
        ]
      }
    ]
  }
}