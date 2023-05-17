window.BENCHMARK_DATA = {
  "lastUpdate": 1684286123747,
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
      }
    ]
  }
}