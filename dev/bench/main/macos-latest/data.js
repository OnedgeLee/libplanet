window.BENCHMARK_DATA = {
  "lastUpdate": 1686241046797,
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
      }
    ]
  }
}