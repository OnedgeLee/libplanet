window.BENCHMARK_DATA = {
  "lastUpdate": 1688973910440,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "508cdf7ef668ce4bd2268956e50e8059c453464a",
          "message": "Merge pull request #3139 from dahlia/main",
          "timestamp": "2023-05-05T02:32:59+09:00",
          "tree_id": "128924b65b11b0d0687f3552fc28ec882283dc27",
          "url": "https://github.com/OnedgeLee/libplanet/commit/508cdf7ef668ce4bd2268956e50e8059c453464a"
        },
        "date": 1683521520079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7982172.428571428,
            "unit": "ns",
            "range": "± 97066.55818756077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20441230.57894737,
            "unit": "ns",
            "range": "± 364567.25395693694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52321232.112676054,
            "unit": "ns",
            "range": "± 2539011.5695480146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100288366.77777778,
            "unit": "ns",
            "range": "± 4196095.412118794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206392039.26666668,
            "unit": "ns",
            "range": "± 3425143.149609881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64955.948979591834,
            "unit": "ns",
            "range": "± 10860.405013353371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319934.6382978723,
            "unit": "ns",
            "range": "± 27238.564034041556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299058.8548387097,
            "unit": "ns",
            "range": "± 13436.936177233327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275690.0447761194,
            "unit": "ns",
            "range": "± 13006.123652636159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4043358.5384615385,
            "unit": "ns",
            "range": "± 44218.08245242245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3634978.8,
            "unit": "ns",
            "range": "± 38951.9541912121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17718.875,
            "unit": "ns",
            "range": "± 2485.927440024943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82569.21505376344,
            "unit": "ns",
            "range": "± 8649.77385335124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81666.42391304347,
            "unit": "ns",
            "range": "± 10725.244512424415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96112.08695652174,
            "unit": "ns",
            "range": "± 13310.361538630676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5162.965909090909,
            "unit": "ns",
            "range": "± 866.2810585414354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16859.18888888889,
            "unit": "ns",
            "range": "± 1754.7125562129359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575255.6326530613,
            "unit": "ns",
            "range": "± 118153.70396839576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033728.064102564,
            "unit": "ns",
            "range": "± 104157.73521412883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2712401.0268817204,
            "unit": "ns",
            "range": "± 239264.88344458735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6805554.584337349,
            "unit": "ns",
            "range": "± 355069.0857208827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370189.217391304,
            "unit": "ns",
            "range": "± 81706.92313882729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462391.59375,
            "unit": "ns",
            "range": "± 102068.00232636159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4483777.797297297,
            "unit": "ns",
            "range": "± 223350.29468527556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4342375.489795919,
            "unit": "ns",
            "range": "± 274136.04166590807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7466192.011627907,
            "unit": "ns",
            "range": "± 273527.63081341283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6899780.35546875,
            "unit": "ns",
            "range": "± 167704.94074922477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2026755.4779575893,
            "unit": "ns",
            "range": "± 29742.753551627844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309686.4488002232,
            "unit": "ns",
            "range": "± 11332.173435799295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565642.173697917,
            "unit": "ns",
            "range": "± 37879.75947033097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829485.9422526042,
            "unit": "ns",
            "range": "± 15106.814837000042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 697261.7745535715,
            "unit": "ns",
            "range": "± 5657.398138095509"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684286082227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9052579.25,
            "unit": "ns",
            "range": "± 432650.886963128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22102521,
            "unit": "ns",
            "range": "± 981489.3166491542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56958983.5862069,
            "unit": "ns",
            "range": "± 4736958.070167451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112535934.21212122,
            "unit": "ns",
            "range": "± 5291741.608804806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222192774.07142857,
            "unit": "ns",
            "range": "± 3877311.793708655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75618.64130434782,
            "unit": "ns",
            "range": "± 5373.775482457155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337237.79347826086,
            "unit": "ns",
            "range": "± 33865.81909083469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323346.2021276596,
            "unit": "ns",
            "range": "± 31859.104229616118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299607.2365591398,
            "unit": "ns",
            "range": "± 24088.305558560198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4495399.188888889,
            "unit": "ns",
            "range": "± 401844.4037251932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4138693.3469387754,
            "unit": "ns",
            "range": "± 325916.04890881333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21325.87777777778,
            "unit": "ns",
            "range": "± 3417.7839840016773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113848.8,
            "unit": "ns",
            "range": "± 19003.550130033098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107378.88541666667,
            "unit": "ns",
            "range": "± 15861.286700224942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123558.90860215054,
            "unit": "ns",
            "range": "± 17378.789082144485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7368.91052631579,
            "unit": "ns",
            "range": "± 1466.9345044389509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20181.911111111112,
            "unit": "ns",
            "range": "± 2851.525468521712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637712.25,
            "unit": "ns",
            "range": "± 161571.74258586054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3288814.263157895,
            "unit": "ns",
            "range": "± 390045.2244175002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2999950.8085106383,
            "unit": "ns",
            "range": "± 382085.1383029148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668009.693548387,
            "unit": "ns",
            "range": "± 298318.90615540446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3748779.45,
            "unit": "ns",
            "range": "± 374655.02600611665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3714182.8917525774,
            "unit": "ns",
            "range": "± 301005.9616005538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4751977.579545454,
            "unit": "ns",
            "range": "± 426685.3430491228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4659705.563157895,
            "unit": "ns",
            "range": "± 423848.7867722581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8197528.050561798,
            "unit": "ns",
            "range": "± 665966.4460639653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7520964.107552083,
            "unit": "ns",
            "range": "± 124128.35278688489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2152767.183203125,
            "unit": "ns",
            "range": "± 42039.67968699186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360237.62875,
            "unit": "ns",
            "range": "± 34850.97032292956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532511.538504464,
            "unit": "ns",
            "range": "± 63945.492906261716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858161.4868861607,
            "unit": "ns",
            "range": "± 14538.37003782475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765630.738080193,
            "unit": "ns",
            "range": "± 35854.494421107745"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684719026640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7607705.5,
            "unit": "ns",
            "range": "± 251381.4872079599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19028325.888888888,
            "unit": "ns",
            "range": "± 631615.9757566879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48278314.78947368,
            "unit": "ns",
            "range": "± 1066575.5912571358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95052243.0909091,
            "unit": "ns",
            "range": "± 2293670.042920934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191516211.84615386,
            "unit": "ns",
            "range": "± 3184031.292845043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60101.52127659575,
            "unit": "ns",
            "range": "± 9084.502065853068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308086.84375,
            "unit": "ns",
            "range": "± 14090.33620789046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291470.06097560975,
            "unit": "ns",
            "range": "± 15379.067369937475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283732.0105263158,
            "unit": "ns",
            "range": "± 19420.198612222943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4064361.4,
            "unit": "ns",
            "range": "± 88280.6125210668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3531262.5,
            "unit": "ns",
            "range": "± 76092.86995580539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16860.53846153846,
            "unit": "ns",
            "range": "± 1492.6376304135226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89517.61578947368,
            "unit": "ns",
            "range": "± 14372.12243825063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107445.29797979798,
            "unit": "ns",
            "range": "± 16730.92667266575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113349.65217391304,
            "unit": "ns",
            "range": "± 11974.307195481226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7450.031914893617,
            "unit": "ns",
            "range": "± 743.2592812643115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21615.212765957447,
            "unit": "ns",
            "range": "± 2725.2187191392736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1594593.4387755103,
            "unit": "ns",
            "range": "± 172136.05765775798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991774.947368421,
            "unit": "ns",
            "range": "± 169462.55895068453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3002202.285714286,
            "unit": "ns",
            "range": "± 43368.13905379168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6534520.6728395065,
            "unit": "ns",
            "range": "± 340660.3913439964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174583.6555555556,
            "unit": "ns",
            "range": "± 193513.5114977334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3254384.8636363638,
            "unit": "ns",
            "range": "± 217730.4700677772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4396635.075471698,
            "unit": "ns",
            "range": "± 182247.5892385505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4314525.64,
            "unit": "ns",
            "range": "± 114847.61137513194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7681318.183333334,
            "unit": "ns",
            "range": "± 341915.27421320014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6638568.863802084,
            "unit": "ns",
            "range": "± 89342.66156494536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977815.4760044643,
            "unit": "ns",
            "range": "± 28956.640956204472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310425.1958333333,
            "unit": "ns",
            "range": "± 10820.026510703316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2959706.4358258927,
            "unit": "ns",
            "range": "± 46425.99118912747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857770.9844563802,
            "unit": "ns",
            "range": "± 4015.5460894991515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750464.3069196428,
            "unit": "ns",
            "range": "± 4741.814205455498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c41af682bb608c821a4c96c09d9b9e563cdc09a7",
          "message": "Merge pull request #3204 from greymistcube/prepare/2.0.0\n\n🔧 Prepare 2.0.0",
          "timestamp": "2023-06-07T21:50:07+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c41af682bb608c821a4c96c09d9b9e563cdc09a7"
        },
        "date": 1686240995463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8902794.688888889,
            "unit": "ns",
            "range": "± 569263.8699495824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21743819.75531915,
            "unit": "ns",
            "range": "± 1688697.4443789376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55216162.4939759,
            "unit": "ns",
            "range": "± 3765240.061472748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112357296.68888889,
            "unit": "ns",
            "range": "± 6648300.287591829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266370643.6978022,
            "unit": "ns",
            "range": "± 50876790.13353519"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85367.19892473119,
            "unit": "ns",
            "range": "± 11424.919542847654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373249.1685393258,
            "unit": "ns",
            "range": "± 42554.05561091892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355323.51136363635,
            "unit": "ns",
            "range": "± 37284.70147454377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363422.893258427,
            "unit": "ns",
            "range": "± 40870.993799397744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4651452.390804598,
            "unit": "ns",
            "range": "± 406426.0443507686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3952310.159090909,
            "unit": "ns",
            "range": "± 147649.53185317747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22886.96153846154,
            "unit": "ns",
            "range": "± 4296.6254156480945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129722.58947368422,
            "unit": "ns",
            "range": "± 17587.38659507344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105999.29,
            "unit": "ns",
            "range": "± 19350.158747708378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115000.02127659574,
            "unit": "ns",
            "range": "± 13914.765371876782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7684.739583333333,
            "unit": "ns",
            "range": "± 1353.8113780208714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21273.690721649484,
            "unit": "ns",
            "range": "± 4869.026847843127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1755786.0454545454,
            "unit": "ns",
            "range": "± 162904.01052420863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3657427.211764706,
            "unit": "ns",
            "range": "± 614496.3481131382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3010951.639784946,
            "unit": "ns",
            "range": "± 485419.65660575795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13752252.969696969,
            "unit": "ns",
            "range": "± 5253169.799981627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4235294.708791208,
            "unit": "ns",
            "range": "± 1093807.8734718605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3651480.6219512196,
            "unit": "ns",
            "range": "± 228789.89003734355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5274028.146067415,
            "unit": "ns",
            "range": "± 961189.3365035456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4779713.9662921345,
            "unit": "ns",
            "range": "± 439725.3911192615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8892525.603448275,
            "unit": "ns",
            "range": "± 1033884.7155618445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7049688.956861413,
            "unit": "ns",
            "range": "± 405085.6516534334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2113656.245596591,
            "unit": "ns",
            "range": "± 89527.50241090968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403858.7600192777,
            "unit": "ns",
            "range": "± 71398.42168515948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3079184.991465693,
            "unit": "ns",
            "range": "± 191840.2214012486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866914.1813313802,
            "unit": "ns",
            "range": "± 38775.149236097815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853363.9547172214,
            "unit": "ns",
            "range": "± 32405.177573941983"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c41af682bb608c821a4c96c09d9b9e563cdc09a7",
          "message": "Merge pull request #3204 from greymistcube/prepare/2.0.0\n\n🔧 Prepare 2.0.0",
          "timestamp": "2023-06-07T21:50:07+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c41af682bb608c821a4c96c09d9b9e563cdc09a7"
        },
        "date": 1686241132782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11688885.2,
            "unit": "ns",
            "range": "± 4188908.833590278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28413233.079545453,
            "unit": "ns",
            "range": "± 10022450.035784613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77827117.25,
            "unit": "ns",
            "range": "± 29837633.769051265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 177093450.53092784,
            "unit": "ns",
            "range": "± 67417004.86967878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 362098005.71875,
            "unit": "ns",
            "range": "± 138686736.78886905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83758.9756097561,
            "unit": "ns",
            "range": "± 6412.825240182847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389982.9659090909,
            "unit": "ns",
            "range": "± 49822.681564355735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364974.94680851063,
            "unit": "ns",
            "range": "± 38969.60252524568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 367923.6931818182,
            "unit": "ns",
            "range": "± 40256.94743278395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5078868.782608695,
            "unit": "ns",
            "range": "± 566374.4392015351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4663716.75,
            "unit": "ns",
            "range": "± 689096.9613664823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34683.786516853936,
            "unit": "ns",
            "range": "± 9855.199017260695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 145264.76923076922,
            "unit": "ns",
            "range": "± 23382.877469102103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142164.33720930232,
            "unit": "ns",
            "range": "± 14880.557028323485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157169.07368421054,
            "unit": "ns",
            "range": "± 29159.365759104505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10764.382978723404,
            "unit": "ns",
            "range": "± 1601.3635460409612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28110.70224719101,
            "unit": "ns",
            "range": "± 5823.133378602528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780864.129213483,
            "unit": "ns",
            "range": "± 306262.50861617445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3644815.61627907,
            "unit": "ns",
            "range": "± 712816.4314233927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3248198.6208791207,
            "unit": "ns",
            "range": "± 875732.7048559691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8143410.988372093,
            "unit": "ns",
            "range": "± 1713118.3791529736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3710610.0659340657,
            "unit": "ns",
            "range": "± 539441.7007858898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4101707.8595505618,
            "unit": "ns",
            "range": "± 571444.5673063664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5329588.214285715,
            "unit": "ns",
            "range": "± 956790.3672016065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5808068.646067415,
            "unit": "ns",
            "range": "± 1489426.941563452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10354940.933333334,
            "unit": "ns",
            "range": "± 2451837.9528003666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9454648.963485055,
            "unit": "ns",
            "range": "± 1523693.7479382327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2336816.2620035806,
            "unit": "ns",
            "range": "± 238745.4849374592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439368.6343149038,
            "unit": "ns",
            "range": "± 20021.244558107537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3284450.062618371,
            "unit": "ns",
            "range": "± 348785.6702744124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856483.394140625,
            "unit": "ns",
            "range": "± 11290.75579891545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860645.2022114416,
            "unit": "ns",
            "range": "± 64282.67948338076"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "848022c87ceca17c886bf4d4f4f3c63c26325761",
          "message": "Merge pull request #3201 from riemannulus/fee-collect\n\nintroduce: fee collector",
          "timestamp": "2023-06-14T10:47:05+08:00",
          "tree_id": "b25599c654e1481c16ce4f6b78e1d40792340bc3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/848022c87ceca17c886bf4d4f4f3c63c26325761"
        },
        "date": 1686713174409,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9015888.782352941,
            "unit": "ns",
            "range": "± 809752.9682031135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25300383.601123594,
            "unit": "ns",
            "range": "± 1658286.7595030055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54746352.425,
            "unit": "ns",
            "range": "± 4275916.872081289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133456879.17045455,
            "unit": "ns",
            "range": "± 30167043.753785785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265524863.56179774,
            "unit": "ns",
            "range": "± 39583807.64964869"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79589.46666666666,
            "unit": "ns",
            "range": "± 5412.268187318573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369563.4516129032,
            "unit": "ns",
            "range": "± 51152.001580863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 393112.60752688174,
            "unit": "ns",
            "range": "± 81296.93836171392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 415403.05102040817,
            "unit": "ns",
            "range": "± 98214.28323995229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4887189.073684211,
            "unit": "ns",
            "range": "± 479780.99690482096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4164550.564516129,
            "unit": "ns",
            "range": "± 445377.8395193576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26887.738636363636,
            "unit": "ns",
            "range": "± 3681.5883831381648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128257.18181818182,
            "unit": "ns",
            "range": "± 14104.32173724464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124833.31927710843,
            "unit": "ns",
            "range": "± 7882.978693152547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138627.67582417582,
            "unit": "ns",
            "range": "± 25833.978864878027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9015.231578947369,
            "unit": "ns",
            "range": "± 1199.892889303321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25569.276470588236,
            "unit": "ns",
            "range": "± 3239.481095926992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723550.8764044943,
            "unit": "ns",
            "range": "± 181883.04982065837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258633.0963855423,
            "unit": "ns",
            "range": "± 263936.19974677794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2966448.4540229887,
            "unit": "ns",
            "range": "± 554208.6156485158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7846016.454545454,
            "unit": "ns",
            "range": "± 1593790.62608603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3911765.631868132,
            "unit": "ns",
            "range": "± 684979.3434718907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4103217.6685393257,
            "unit": "ns",
            "range": "± 666232.3877940795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5055278.612903226,
            "unit": "ns",
            "range": "± 584106.9939005189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5566337.79032258,
            "unit": "ns",
            "range": "± 897292.9721117286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8595034.127659574,
            "unit": "ns",
            "range": "± 989579.8633889443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8522944.049652778,
            "unit": "ns",
            "range": "± 564674.0985931997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2348432.2421875,
            "unit": "ns",
            "range": "± 109778.1629016899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365316.8423713236,
            "unit": "ns",
            "range": "± 26579.04769299264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3209171.887907609,
            "unit": "ns",
            "range": "± 79004.17979066218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814016.434765625,
            "unit": "ns",
            "range": "± 15097.251751040281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881459.0573790015,
            "unit": "ns",
            "range": "± 31333.761660371983"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "848022c87ceca17c886bf4d4f4f3c63c26325761",
          "message": "Merge pull request #3201 from riemannulus/fee-collect\n\nintroduce: fee collector",
          "timestamp": "2023-06-14T10:47:05+08:00",
          "tree_id": "b25599c654e1481c16ce4f6b78e1d40792340bc3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/848022c87ceca17c886bf4d4f4f3c63c26325761"
        },
        "date": 1686713158858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9507099.811320756,
            "unit": "ns",
            "range": "± 390136.6289395913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23515646.17647059,
            "unit": "ns",
            "range": "± 469608.5650796357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60340376.23076923,
            "unit": "ns",
            "range": "± 450097.0576670388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119154551.8,
            "unit": "ns",
            "range": "± 1634628.2407811612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235969063.0882353,
            "unit": "ns",
            "range": "± 4721334.530877632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81120.54347826086,
            "unit": "ns",
            "range": "± 8661.52386969762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402090.8,
            "unit": "ns",
            "range": "± 33968.27064933367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 391895.8222222222,
            "unit": "ns",
            "range": "± 44430.505272899136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 372611.1758241758,
            "unit": "ns",
            "range": "± 21304.38801780485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5012019.015151516,
            "unit": "ns",
            "range": "± 154685.21608760828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4754682.24137931,
            "unit": "ns",
            "range": "± 137805.89059684513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20015.420454545456,
            "unit": "ns",
            "range": "± 1476.7899034348613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99846.94680851063,
            "unit": "ns",
            "range": "± 8207.833020329626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112090.15656565657,
            "unit": "ns",
            "range": "± 17898.738623987694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123847.73684210527,
            "unit": "ns",
            "range": "± 15631.28014945872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6497.360824742268,
            "unit": "ns",
            "range": "± 1303.4935924401952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19992.33695652174,
            "unit": "ns",
            "range": "± 1746.5970447876537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2042432.585106383,
            "unit": "ns",
            "range": "± 309734.2786562677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4092825.466292135,
            "unit": "ns",
            "range": "± 671190.4153993764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3892649.1041666665,
            "unit": "ns",
            "range": "± 1049389.3022481666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10359750.021276595,
            "unit": "ns",
            "range": "± 2530248.091588428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3928626.9111111113,
            "unit": "ns",
            "range": "± 220230.9969822363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4185240.2,
            "unit": "ns",
            "range": "± 231980.70228701681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5264744.306666667,
            "unit": "ns",
            "range": "± 263442.180415976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5285357.215909091,
            "unit": "ns",
            "range": "± 341897.91254332283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9548512.47826087,
            "unit": "ns",
            "range": "± 578687.4953269508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7319986.72339527,
            "unit": "ns",
            "range": "± 239256.36001317707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268567.8623046875,
            "unit": "ns",
            "range": "± 42590.79889235923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1529456.9369419643,
            "unit": "ns",
            "range": "± 18083.73641992586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2959288.922175481,
            "unit": "ns",
            "range": "± 41937.38029290734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1042677.4911534926,
            "unit": "ns",
            "range": "± 20401.998322362073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896492.0207375919,
            "unit": "ns",
            "range": "± 17719.591577719115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6570787e9df245ff0db9c317937cc434df793fef",
          "message": "Merge pull request #3213 from OnedgeLee/prepare/2.1.0\n\n🔧 Prepare 2.1.0",
          "timestamp": "2023-06-14T13:59:49+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6570787e9df245ff0db9c317937cc434df793fef"
        },
        "date": 1686893298751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9194043.076470587,
            "unit": "ns",
            "range": "± 1192109.2679068632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26148471.988505747,
            "unit": "ns",
            "range": "± 5151284.503368317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 82381256.00561798,
            "unit": "ns",
            "range": "± 24849147.747586157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 159037969.86597937,
            "unit": "ns",
            "range": "± 51286359.85432536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221030062.91935483,
            "unit": "ns",
            "range": "± 10016671.852432447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82957.28571428571,
            "unit": "ns",
            "range": "± 16252.364790177946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335471.8333333333,
            "unit": "ns",
            "range": "± 28909.777220177428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325537.206185567,
            "unit": "ns",
            "range": "± 32347.532078370547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307268.1685393258,
            "unit": "ns",
            "range": "± 23325.93715365519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4308130.126760564,
            "unit": "ns",
            "range": "± 199025.25703394169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3851582.8541666665,
            "unit": "ns",
            "range": "± 150737.21036702782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18036.894736842107,
            "unit": "ns",
            "range": "± 2255.335595510402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99309.79569892473,
            "unit": "ns",
            "range": "± 12624.61285894511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107520.28651685393,
            "unit": "ns",
            "range": "± 12117.370389118627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124945,
            "unit": "ns",
            "range": "± 16742.16030171082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8689.787234042553,
            "unit": "ns",
            "range": "± 1464.2127586628171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26644.315217391304,
            "unit": "ns",
            "range": "± 4459.439660580609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845452.75,
            "unit": "ns",
            "range": "± 225777.4419810541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3432744.375,
            "unit": "ns",
            "range": "± 422094.31962634047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2803008.340909091,
            "unit": "ns",
            "range": "± 440079.8281050676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9835189.57142857,
            "unit": "ns",
            "range": "± 2917572.6666846504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3347161.311111111,
            "unit": "ns",
            "range": "± 227767.86682471182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3607248.7736842106,
            "unit": "ns",
            "range": "± 289127.7150865311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4607719.6760563385,
            "unit": "ns",
            "range": "± 225662.1935531562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4519273.58974359,
            "unit": "ns",
            "range": "± 157928.65711615313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8100951.5125,
            "unit": "ns",
            "range": "± 422080.6133486342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8200262.9515625,
            "unit": "ns",
            "range": "± 886506.9633614807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2677618.9130859375,
            "unit": "ns",
            "range": "± 570010.3588009517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1587916.5316200657,
            "unit": "ns",
            "range": "± 294455.11293737567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3050004.55859375,
            "unit": "ns",
            "range": "± 223407.39690703366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831389.3952636719,
            "unit": "ns",
            "range": "± 12783.991676983534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769364.3187081473,
            "unit": "ns",
            "range": "± 6167.667609924599"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6570787e9df245ff0db9c317937cc434df793fef",
          "message": "Merge pull request #3213 from OnedgeLee/prepare/2.1.0\n\n🔧 Prepare 2.1.0",
          "timestamp": "2023-06-14T13:59:49+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6570787e9df245ff0db9c317937cc434df793fef"
        },
        "date": 1686893699394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14624007.052083334,
            "unit": "ns",
            "range": "± 6855325.88200361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 36722283.78350516,
            "unit": "ns",
            "range": "± 9530441.164391052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 95765932.14141414,
            "unit": "ns",
            "range": "± 27734303.018780343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 204925892.08762887,
            "unit": "ns",
            "range": "± 60082741.089050874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 400468953.24,
            "unit": "ns",
            "range": "± 147480611.30638838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86976.69540229885,
            "unit": "ns",
            "range": "± 9489.171190361074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 410562.89784946234,
            "unit": "ns",
            "range": "± 32985.47268319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 403225.652173913,
            "unit": "ns",
            "range": "± 35031.565021815506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380990.3289473684,
            "unit": "ns",
            "range": "± 19375.410108959008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5040256.125,
            "unit": "ns",
            "range": "± 195859.21305590315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4695026.582352941,
            "unit": "ns",
            "range": "± 358138.5767066726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23442.86170212766,
            "unit": "ns",
            "range": "± 5906.539753729629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129152.51098901099,
            "unit": "ns",
            "range": "± 24315.0110464455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127449.05494505494,
            "unit": "ns",
            "range": "± 18889.309989375615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136314.58620689655,
            "unit": "ns",
            "range": "± 20629.355635672757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8650.177083333334,
            "unit": "ns",
            "range": "± 1861.9065101454291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27145.9793814433,
            "unit": "ns",
            "range": "± 5860.597823920109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2100170.951807229,
            "unit": "ns",
            "range": "± 411508.53204816626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3850127.6071428573,
            "unit": "ns",
            "range": "± 384814.8551426181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3308684.7252747254,
            "unit": "ns",
            "range": "± 406258.9091614434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16190605.639175259,
            "unit": "ns",
            "range": "± 4285831.600489434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4461850.32183908,
            "unit": "ns",
            "range": "± 777799.4282165624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4389592.734042553,
            "unit": "ns",
            "range": "± 400402.5873154775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5363467.557692308,
            "unit": "ns",
            "range": "± 208415.94114695996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5446832.022988506,
            "unit": "ns",
            "range": "± 420071.3027965437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14532267.636363637,
            "unit": "ns",
            "range": "± 5713735.53397562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 12296127.4403125,
            "unit": "ns",
            "range": "± 4244630.842364014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2623298.3730014535,
            "unit": "ns",
            "range": "± 284075.66936241224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1647422.4757724719,
            "unit": "ns",
            "range": "± 190943.18963133657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3242293.0367986504,
            "unit": "ns",
            "range": "± 322796.1847920719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974476.7743389423,
            "unit": "ns",
            "range": "± 8224.311818040618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909621.7194754464,
            "unit": "ns",
            "range": "± 29601.449472379154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688031242872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7745216.923076923,
            "unit": "ns",
            "range": "± 53141.79987771952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19728936.4375,
            "unit": "ns",
            "range": "± 325007.62455712096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48341118.631578945,
            "unit": "ns",
            "range": "± 1063032.5420859896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95787316.57142857,
            "unit": "ns",
            "range": "± 958067.5883659264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197428086.07142857,
            "unit": "ns",
            "range": "± 2872489.530233111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59584.36170212766,
            "unit": "ns",
            "range": "± 7221.595330332255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315444.9024390244,
            "unit": "ns",
            "range": "± 15578.572647028977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328937.3870967742,
            "unit": "ns",
            "range": "± 34889.6135653554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299765.33684210526,
            "unit": "ns",
            "range": "± 23243.974269076716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4235372.888888889,
            "unit": "ns",
            "range": "± 140213.94276406482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3893903.3653846155,
            "unit": "ns",
            "range": "± 141515.76401900774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17840.065217391304,
            "unit": "ns",
            "range": "± 2066.9796529743207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85984.9,
            "unit": "ns",
            "range": "± 6871.850276401298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90242.79787234042,
            "unit": "ns",
            "range": "± 8844.69138739589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117021.25,
            "unit": "ns",
            "range": "± 18878.621823026228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5925.5842105263155,
            "unit": "ns",
            "range": "± 717.6377718295986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17294.055555555555,
            "unit": "ns",
            "range": "± 1985.912760234176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1603164.9270833333,
            "unit": "ns",
            "range": "± 166883.38832387654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2972903.668421053,
            "unit": "ns",
            "range": "± 212368.6791242327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2458131.815217391,
            "unit": "ns",
            "range": "± 187605.40626157305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6519760.703296703,
            "unit": "ns",
            "range": "± 415640.3217487846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3309741.1333333333,
            "unit": "ns",
            "range": "± 51466.33162267579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388052.2115384615,
            "unit": "ns",
            "range": "± 128917.55910876616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4530768.719298245,
            "unit": "ns",
            "range": "± 195241.49824875806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486568.4772727275,
            "unit": "ns",
            "range": "± 401359.4978285613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7485081.631578947,
            "unit": "ns",
            "range": "± 194526.45229921138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6973407.06640625,
            "unit": "ns",
            "range": "± 132141.43833838077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908415.341796875,
            "unit": "ns",
            "range": "± 20049.754138192337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300784.2654854911,
            "unit": "ns",
            "range": "± 9850.638425447596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496733.90625,
            "unit": "ns",
            "range": "± 27255.29457279655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 877253.3820963542,
            "unit": "ns",
            "range": "± 5980.713073918857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790298.9840959822,
            "unit": "ns",
            "range": "± 4076.497648938697"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688031241074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8252160.52631579,
            "unit": "ns",
            "range": "± 179323.46583830894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20375885.413043477,
            "unit": "ns",
            "range": "± 454825.5329642059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49729336.81818182,
            "unit": "ns",
            "range": "± 1197907.8608895948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102416038.23076923,
            "unit": "ns",
            "range": "± 602742.2265652698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200969217.42307693,
            "unit": "ns",
            "range": "± 2432419.529923736"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65937.58333333333,
            "unit": "ns",
            "range": "± 9462.981271267046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323120.39130434784,
            "unit": "ns",
            "range": "± 17790.148964381064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312967.26923076925,
            "unit": "ns",
            "range": "± 17022.264425077672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313835.50588235294,
            "unit": "ns",
            "range": "± 16813.979578105278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151854.3421052634,
            "unit": "ns",
            "range": "± 86554.85188997729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685510.0384615385,
            "unit": "ns",
            "range": "± 47653.374535310344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19118.494736842105,
            "unit": "ns",
            "range": "± 3310.2484796933945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96707.28571428571,
            "unit": "ns",
            "range": "± 13110.221325205623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107517.52,
            "unit": "ns",
            "range": "± 9926.399269838104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120892.0412371134,
            "unit": "ns",
            "range": "± 13972.25921835651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6665.108695652174,
            "unit": "ns",
            "range": "± 981.088462103701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18482.22340425532,
            "unit": "ns",
            "range": "± 3441.030420205507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558087.618556701,
            "unit": "ns",
            "range": "± 120226.27804862754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3091248.66,
            "unit": "ns",
            "range": "± 183724.8326065847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2649637.357894737,
            "unit": "ns",
            "range": "± 247178.51430580235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6280954.403846154,
            "unit": "ns",
            "range": "± 251301.38359576822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322769.210526316,
            "unit": "ns",
            "range": "± 73539.8616017032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3603724.0714285714,
            "unit": "ns",
            "range": "± 44288.07824558222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4448616.3,
            "unit": "ns",
            "range": "± 130904.86877675186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4502946.043478261,
            "unit": "ns",
            "range": "± 172564.78080406098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7486745.916666667,
            "unit": "ns",
            "range": "± 247019.5863783593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6593144.189732143,
            "unit": "ns",
            "range": "± 60276.293856311924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1975647.666294643,
            "unit": "ns",
            "range": "± 9512.296316876065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280924.9501302084,
            "unit": "ns",
            "range": "± 7867.17451252461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657580.291316106,
            "unit": "ns",
            "range": "± 19288.8979478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779132.8182896206,
            "unit": "ns",
            "range": "± 2371.1220564503283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713151.0753455529,
            "unit": "ns",
            "range": "± 2383.646440934868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d28947e8c972a220e442fddc21270b28a16f367",
          "message": "Merge pull request #3257 from greymistcube/refactor/reroute-delta-access\n\n♻️ Reroute `IAccountDelta` access",
          "timestamp": "2023-06-30T18:06:39+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d28947e8c972a220e442fddc21270b28a16f367"
        },
        "date": 1688129958825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696653.685185186,
            "unit": "ns",
            "range": "± 211315.10910414133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19109131.70588235,
            "unit": "ns",
            "range": "± 392249.50734637084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46778269.5,
            "unit": "ns",
            "range": "± 1046138.3375905834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91526994,
            "unit": "ns",
            "range": "± 505274.21638857736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192402482,
            "unit": "ns",
            "range": "± 1782291.351814608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54619.52808988764,
            "unit": "ns",
            "range": "± 4778.496083520914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310987.67415730335,
            "unit": "ns",
            "range": "± 23096.88618022277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293748.8791208791,
            "unit": "ns",
            "range": "± 17271.411059792914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276385.65263157897,
            "unit": "ns",
            "range": "± 16518.76115130297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956298.6666666665,
            "unit": "ns",
            "range": "± 67106.89996423262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3610198.1333333333,
            "unit": "ns",
            "range": "± 64021.61783543639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16992.90588235294,
            "unit": "ns",
            "range": "± 1652.9453410685496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84023.86170212766,
            "unit": "ns",
            "range": "± 7046.897066865006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81561.88421052632,
            "unit": "ns",
            "range": "± 6913.081193855106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101099.09139784946,
            "unit": "ns",
            "range": "± 15298.086640262196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5159.855555555556,
            "unit": "ns",
            "range": "± 562.7501403592958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17021.93023255814,
            "unit": "ns",
            "range": "± 2878.4645326394893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591384.6923076923,
            "unit": "ns",
            "range": "± 168048.86089935552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944362.842696629,
            "unit": "ns",
            "range": "± 268654.44558551663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059618.3111111112,
            "unit": "ns",
            "range": "± 203649.35723392246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5845602.5625,
            "unit": "ns",
            "range": "± 290444.1903853102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225093.5,
            "unit": "ns",
            "range": "± 95030.28848876101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3345440.769230769,
            "unit": "ns",
            "range": "± 55586.62676722679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198096.303571428,
            "unit": "ns",
            "range": "± 178402.11531755695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3727688.2346938774,
            "unit": "ns",
            "range": "± 147968.34335013118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6850848.634615385,
            "unit": "ns",
            "range": "± 205263.69976796315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6098668.051302084,
            "unit": "ns",
            "range": "± 38468.04190054842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930611.0018229166,
            "unit": "ns",
            "range": "± 12512.198983675211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1254778.9015625,
            "unit": "ns",
            "range": "± 10521.439378322795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616187.3074776786,
            "unit": "ns",
            "range": "± 17855.352202272672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758062.603655134,
            "unit": "ns",
            "range": "± 4121.5225974299565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691619.53671875,
            "unit": "ns",
            "range": "± 6242.327508420079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d28947e8c972a220e442fddc21270b28a16f367",
          "message": "Merge pull request #3257 from greymistcube/refactor/reroute-delta-access\n\n♻️ Reroute `IAccountDelta` access",
          "timestamp": "2023-06-30T18:06:39+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d28947e8c972a220e442fddc21270b28a16f367"
        },
        "date": 1688129990757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8040874.538461538,
            "unit": "ns",
            "range": "± 113473.52528204938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19320630.615384616,
            "unit": "ns",
            "range": "± 233056.93882452077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46999938.9047619,
            "unit": "ns",
            "range": "± 1114393.4982499632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93707842,
            "unit": "ns",
            "range": "± 965422.5391981779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191047986.66666666,
            "unit": "ns",
            "range": "± 2441058.058641775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56891.221052631576,
            "unit": "ns",
            "range": "± 5742.836516837871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304835.4222222222,
            "unit": "ns",
            "range": "± 18725.77044392571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290864.2625,
            "unit": "ns",
            "range": "± 14952.459761019427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273461.3969072165,
            "unit": "ns",
            "range": "± 16515.18237012319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003255.0625,
            "unit": "ns",
            "range": "± 76048.13720661298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3580574.714285714,
            "unit": "ns",
            "range": "± 83261.04962354418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17433.22105263158,
            "unit": "ns",
            "range": "± 2033.625497327829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81896.98958333333,
            "unit": "ns",
            "range": "± 6603.639628815217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77661.02272727272,
            "unit": "ns",
            "range": "± 5320.295916878656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99604.5052631579,
            "unit": "ns",
            "range": "± 12269.503385945904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4785.747252747253,
            "unit": "ns",
            "range": "± 617.2906679534113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16521.53488372093,
            "unit": "ns",
            "range": "± 1423.9005558277083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521610.5425531915,
            "unit": "ns",
            "range": "± 147836.92790729948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808107.462962963,
            "unit": "ns",
            "range": "± 147671.22352810012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2104068.556701031,
            "unit": "ns",
            "range": "± 184925.7759206475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5744726.140845071,
            "unit": "ns",
            "range": "± 278896.5460994092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101025.7741935486,
            "unit": "ns",
            "range": "± 93986.26172929376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374865.0208333335,
            "unit": "ns",
            "range": "± 117066.79141185874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4188207.592592593,
            "unit": "ns",
            "range": "± 144962.7107562257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3713611.802631579,
            "unit": "ns",
            "range": "± 175819.10001893193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6767284.393939394,
            "unit": "ns",
            "range": "± 203737.76052654354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5995673.349479167,
            "unit": "ns",
            "range": "± 33201.001490158815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1796774.6877604167,
            "unit": "ns",
            "range": "± 11523.373638421164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229234.68515625,
            "unit": "ns",
            "range": "± 12108.856143770981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568581.781510417,
            "unit": "ns",
            "range": "± 15710.554317825521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758051.8967633928,
            "unit": "ns",
            "range": "± 2839.1817962975015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722653.2321213942,
            "unit": "ns",
            "range": "± 3437.194280759248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65eed8a84207980727fba3dff62340b64a709f50",
          "message": "Add preEvaluationHash field to BlockType (#3281)\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-10T11:50:06+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/OnedgeLee/libplanet/commit/65eed8a84207980727fba3dff62340b64a709f50"
        },
        "date": 1688973797095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9253789.262626262,
            "unit": "ns",
            "range": "± 691878.0235500195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22189128.474683546,
            "unit": "ns",
            "range": "± 1150548.77159781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53635067.93333333,
            "unit": "ns",
            "range": "± 2034428.1997256668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108375592.65454546,
            "unit": "ns",
            "range": "± 4515372.512941271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238087064.77586207,
            "unit": "ns",
            "range": "± 6402262.941765151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69720.83695652174,
            "unit": "ns",
            "range": "± 11576.783236029076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355905.79347826086,
            "unit": "ns",
            "range": "± 34371.23751733946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318003.42391304346,
            "unit": "ns",
            "range": "± 20776.289117108077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314165.33116883115,
            "unit": "ns",
            "range": "± 16072.513470946373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4127327,
            "unit": "ns",
            "range": "± 51062.12793814442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3779806.8666666667,
            "unit": "ns",
            "range": "± 66940.30246513538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20387.93157894737,
            "unit": "ns",
            "range": "± 4077.4945103544756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108380.19072164949,
            "unit": "ns",
            "range": "± 17351.887631081634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110083.30303030302,
            "unit": "ns",
            "range": "± 9659.670401964166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117846.32989690722,
            "unit": "ns",
            "range": "± 14361.50103482807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7286.98969072165,
            "unit": "ns",
            "range": "± 942.8461289146167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20886.828282828283,
            "unit": "ns",
            "range": "± 3141.541900250362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617660.08,
            "unit": "ns",
            "range": "± 168902.8978326191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964604.404255319,
            "unit": "ns",
            "range": "± 173050.00675380146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117609.6210526316,
            "unit": "ns",
            "range": "± 197339.11843851162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6004735.243243244,
            "unit": "ns",
            "range": "± 283849.49863243586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3724125.9536082475,
            "unit": "ns",
            "range": "± 338952.30912084755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3935019.717171717,
            "unit": "ns",
            "range": "± 416465.65895068145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4831756.030927835,
            "unit": "ns",
            "range": "± 416628.17647980124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4106230.71875,
            "unit": "ns",
            "range": "± 344519.70747510303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7715783.596774193,
            "unit": "ns",
            "range": "± 603687.5856225324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7390706.773836097,
            "unit": "ns",
            "range": "± 517732.712339858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2077478.1583658855,
            "unit": "ns",
            "range": "± 53688.4424530061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326217.143359375,
            "unit": "ns",
            "range": "± 20951.466986292537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730286.616519326,
            "unit": "ns",
            "range": "± 132418.65211028568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826117.0749511719,
            "unit": "ns",
            "range": "± 12286.906413659151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795291.6204176683,
            "unit": "ns",
            "range": "± 7784.126650555131"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65eed8a84207980727fba3dff62340b64a709f50",
          "message": "Add preEvaluationHash field to BlockType (#3281)\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-10T11:50:06+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/OnedgeLee/libplanet/commit/65eed8a84207980727fba3dff62340b64a709f50"
        },
        "date": 1688973884714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8443212.03125,
            "unit": "ns",
            "range": "± 358566.9454353763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21251261.39285714,
            "unit": "ns",
            "range": "± 912197.3675334975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54878627.5,
            "unit": "ns",
            "range": "± 1662946.7353733175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107428319.64285715,
            "unit": "ns",
            "range": "± 1755598.4142614955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221464242.66666666,
            "unit": "ns",
            "range": "± 3094707.077870368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79919.58695652174,
            "unit": "ns",
            "range": "± 17408.972150388854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348791.7315789474,
            "unit": "ns",
            "range": "± 35687.518981461624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331533.5625,
            "unit": "ns",
            "range": "± 36722.75801843134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339823.876344086,
            "unit": "ns",
            "range": "± 40619.98527334575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4476116.96969697,
            "unit": "ns",
            "range": "± 266220.9723524324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4114113.6555555556,
            "unit": "ns",
            "range": "± 226091.82511989004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25166.977528089887,
            "unit": "ns",
            "range": "± 3382.8267059098002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129633.77173913043,
            "unit": "ns",
            "range": "± 17310.02924947425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125927.74418604652,
            "unit": "ns",
            "range": "± 9475.263277032645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136270.6914893617,
            "unit": "ns",
            "range": "± 22720.065880009457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9162.926315789473,
            "unit": "ns",
            "range": "± 792.9820131858492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24618,
            "unit": "ns",
            "range": "± 5423.103070391334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705044.9795918367,
            "unit": "ns",
            "range": "± 186013.02878855655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3343642.887755102,
            "unit": "ns",
            "range": "± 286079.1697130515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2307394.8020833335,
            "unit": "ns",
            "range": "± 270387.47116338223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7074837.28,
            "unit": "ns",
            "range": "± 700264.940283017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433219.2696629213,
            "unit": "ns",
            "range": "± 189064.39588511563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536021.14893617,
            "unit": "ns",
            "range": "± 209144.23165004657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4686349.363636363,
            "unit": "ns",
            "range": "± 299755.97175782616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4060155.5206185565,
            "unit": "ns",
            "range": "± 253922.35214115243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7598271.335051547,
            "unit": "ns",
            "range": "± 443618.25248960487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7693264.618652344,
            "unit": "ns",
            "range": "± 285862.9924819775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2081734.4232177734,
            "unit": "ns",
            "range": "± 88116.50667251913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1430941.2747844828,
            "unit": "ns",
            "range": "± 41389.05489804266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2731383.953333333,
            "unit": "ns",
            "range": "± 137915.96684815505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835399.9686197917,
            "unit": "ns",
            "range": "± 10042.54947660429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787889.9799601237,
            "unit": "ns",
            "range": "± 31070.54320836114"
          }
        ]
      }
    ]
  }
}