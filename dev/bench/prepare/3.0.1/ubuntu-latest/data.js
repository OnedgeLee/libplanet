window.BENCHMARK_DATA = {
  "lastUpdate": 1689754168118,
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
          "id": "27ec7be4dd62adb956c0802b1d41c28bd059f8e9",
          "message": "Prepare 3.0.1",
          "timestamp": "2023-07-19T16:56:09+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/OnedgeLee/libplanet/commit/27ec7be4dd62adb956c0802b1d41c28bd059f8e9"
        },
        "date": 1689754154814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278702.14285714284,
            "unit": "ns",
            "range": "± 9296.816010350725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264167.48,
            "unit": "ns",
            "range": "± 5723.728848108256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231333.57142857142,
            "unit": "ns",
            "range": "± 3427.2313049431627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4275416.285714285,
            "unit": "ns",
            "range": "± 26382.541227190293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3861191.785714286,
            "unit": "ns",
            "range": "± 22532.46649812246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17828.61176470588,
            "unit": "ns",
            "range": "± 931.7043662291276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84519.71794871795,
            "unit": "ns",
            "range": "± 4369.310528085924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72406.06666666667,
            "unit": "ns",
            "range": "± 1291.6063346892981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87222.62244897959,
            "unit": "ns",
            "range": "± 10415.61562044668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4284.333333333333,
            "unit": "ns",
            "range": "± 549.3310892476733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16724.24418604651,
            "unit": "ns",
            "range": "± 887.607927966695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386951.4361702127,
            "unit": "ns",
            "range": "± 98075.6967047369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619687.564102564,
            "unit": "ns",
            "range": "± 90488.98253518138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1752609.0204081633,
            "unit": "ns",
            "range": "± 103822.49640910265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4762177.84,
            "unit": "ns",
            "range": "± 124724.50187636215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6366176.943638393,
            "unit": "ns",
            "range": "± 30726.226146741716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000221.274639423,
            "unit": "ns",
            "range": "± 3323.2970407905414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382858.0592447917,
            "unit": "ns",
            "range": "± 1418.069134533339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569050.6221354166,
            "unit": "ns",
            "range": "± 2753.601712538548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812695.0971679688,
            "unit": "ns",
            "range": "± 367.22646444911635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729904.2977213542,
            "unit": "ns",
            "range": "± 628.084313366656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3278647.882352941,
            "unit": "ns",
            "range": "± 66499.16401249188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3512779.8,
            "unit": "ns",
            "range": "± 50689.90498990617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4176046.8,
            "unit": "ns",
            "range": "± 60986.02029294442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3749864.4897959186,
            "unit": "ns",
            "range": "± 141707.02816464362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6140391.916666667,
            "unit": "ns",
            "range": "± 53985.80445140325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7442220.333333333,
            "unit": "ns",
            "range": "± 70531.07265509853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19354467.8,
            "unit": "ns",
            "range": "± 177671.97058270857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49512105.266666666,
            "unit": "ns",
            "range": "± 399247.51568731805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98199729.8,
            "unit": "ns",
            "range": "± 1120933.55277033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198892891.93333334,
            "unit": "ns",
            "range": "± 1655522.8425546873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47513.22988505747,
            "unit": "ns",
            "range": "± 2619.5814981802196"
          }
        ]
      }
    ]
  }
}