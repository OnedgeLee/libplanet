window.BENCHMARK_DATA = {
  "lastUpdate": 1700722246240,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "e3734cae06101ddaca27d12357dcbfa159aa28bd",
          "message": "Revert \"Merge pull request #3494 from limebell/feature/system-accounts\"\n\nThis reverts commit 11b9f54d0f2e41374e5693ebfc45ddfb4edf90cb, reversing\nchanges made to eabf0b3951d20c3629082390e8d7cb9d7dae8b9b.",
          "timestamp": "2023-11-23T15:38:15+09:00",
          "tree_id": "56764ebd85f0dd721d7386e4de37a4a5041d7a86",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e3734cae06101ddaca27d12357dcbfa159aa28bd"
        },
        "date": 1700722234748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198929.70588235295,
            "unit": "ns",
            "range": "± 9523.82121833305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191618.04098360657,
            "unit": "ns",
            "range": "± 8495.987183319294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171202.88888888888,
            "unit": "ns",
            "range": "± 4802.934914702863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3110346.3333333335,
            "unit": "ns",
            "range": "± 33422.721962475654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2894249.3571428573,
            "unit": "ns",
            "range": "± 19821.535281130444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13778.452631578948,
            "unit": "ns",
            "range": "± 2700.169981916509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69803.69387755102,
            "unit": "ns",
            "range": "± 7900.5321031921885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59221.38947368421,
            "unit": "ns",
            "range": "± 8228.918584486102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59039.354838709674,
            "unit": "ns",
            "range": "± 10280.975793906666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3176.455056179775,
            "unit": "ns",
            "range": "± 910.628715255569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14079.887755102041,
            "unit": "ns",
            "range": "± 2756.5350276035347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800229.972330729,
            "unit": "ns",
            "range": "± 16080.74060110348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194589.0112680288,
            "unit": "ns",
            "range": "± 2080.855767218549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770241.2173227164,
            "unit": "ns",
            "range": "± 3099.9473807959134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922671.332845052,
            "unit": "ns",
            "range": "± 4263.77381055753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620924.0446213942,
            "unit": "ns",
            "range": "± 1674.8025047860772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577343.1909179688,
            "unit": "ns",
            "range": "± 1184.6973580825788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40366.010204081635,
            "unit": "ns",
            "range": "± 5894.253200678541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463901.36,
            "unit": "ns",
            "range": "± 55811.234153528625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2573728.75,
            "unit": "ns",
            "range": "± 66673.83467510031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3176820.5,
            "unit": "ns",
            "range": "± 53861.89007330908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3080701.7868852457,
            "unit": "ns",
            "range": "± 136258.86824327128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7506646.023255814,
            "unit": "ns",
            "range": "± 176153.67483298812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5490086.666666667,
            "unit": "ns",
            "range": "± 31075.79555138557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14342342,
            "unit": "ns",
            "range": "± 110418.79723957028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36464029.461538464,
            "unit": "ns",
            "range": "± 246849.08242170134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75657482.1923077,
            "unit": "ns",
            "range": "± 511934.2256397764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155540810.92857143,
            "unit": "ns",
            "range": "± 1043334.2074783216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033274.969072165,
            "unit": "ns",
            "range": "± 102251.57660372258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1926930.8157894737,
            "unit": "ns",
            "range": "± 83174.76103601679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586042.2272727273,
            "unit": "ns",
            "range": "± 104698.07463584753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6498032.951219512,
            "unit": "ns",
            "range": "± 201227.89885686222"
          }
        ]
      }
    ]
  }
}