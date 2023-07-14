window.BENCHMARK_DATA = {
  "lastUpdate": 1689321146429,
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
      }
    ]
  }
}