window.BENCHMARK_DATA = {
  "lastUpdate": 1689920251509,
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
          "id": "cd6f6a152a017c7e70ee1412eda4e1b6853c583d",
          "message": "Prepare 3.0.2",
          "timestamp": "2023-07-21T15:03:55+09:00",
          "tree_id": "8f0ca409e45d6626d43d9b9df922d6e7dee4e64a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/cd6f6a152a017c7e70ee1412eda4e1b6853c583d"
        },
        "date": 1689920238141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278792.46153846156,
            "unit": "ns",
            "range": "± 8903.284550174532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265399.13333333336,
            "unit": "ns",
            "range": "± 7587.924089077934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228138.9655172414,
            "unit": "ns",
            "range": "± 6379.378079197055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271055.142857143,
            "unit": "ns",
            "range": "± 34860.83690433048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909643.8666666667,
            "unit": "ns",
            "range": "± 44471.198162192035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19116.708333333332,
            "unit": "ns",
            "range": "± 1681.5437889139512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87600.27777777778,
            "unit": "ns",
            "range": "± 4633.17373697865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71068.64,
            "unit": "ns",
            "range": "± 1622.1543001001269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89761.97959183673,
            "unit": "ns",
            "range": "± 13106.780495149555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4461.744680851064,
            "unit": "ns",
            "range": "± 645.2526209662968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17622.363636363636,
            "unit": "ns",
            "range": "± 2171.0716363337174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1311147.2043010753,
            "unit": "ns",
            "range": "± 80758.14827425199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2543112,
            "unit": "ns",
            "range": "± 66324.9864939049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732812.9139784947,
            "unit": "ns",
            "range": "± 97838.11094994316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4834021.857142857,
            "unit": "ns",
            "range": "± 133611.2794688838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6427073.159895834,
            "unit": "ns",
            "range": "± 26826.39814550143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873415.9603794643,
            "unit": "ns",
            "range": "± 795.0421937064575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361931.2977864584,
            "unit": "ns",
            "range": "± 751.4436909554736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607239.0998883927,
            "unit": "ns",
            "range": "± 1573.8904847951596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816729.4865373884,
            "unit": "ns",
            "range": "± 2740.4682293565834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733861.1440104167,
            "unit": "ns",
            "range": "± 351.311426364891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264792.25,
            "unit": "ns",
            "range": "± 73226.8900903393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455234.5625,
            "unit": "ns",
            "range": "± 66656.29933118974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4290692.6,
            "unit": "ns",
            "range": "± 52473.586548444946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791093.4857142856,
            "unit": "ns",
            "range": "± 124166.21321613064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6397682.84,
            "unit": "ns",
            "range": "± 163828.11856426438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7654243.6,
            "unit": "ns",
            "range": "± 118788.63265890145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19450581.933333334,
            "unit": "ns",
            "range": "± 121503.92676221661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50300741.2,
            "unit": "ns",
            "range": "± 316421.4028699251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100583231,
            "unit": "ns",
            "range": "± 667328.4476793589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199018161.35714287,
            "unit": "ns",
            "range": "± 1001181.931669657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45766.130952380954,
            "unit": "ns",
            "range": "± 2463.8875384079474"
          }
        ]
      }
    ]
  }
}