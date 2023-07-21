window.BENCHMARK_DATA = {
  "lastUpdate": 1689920403895,
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
        "date": 1689920378245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8805234.826086957,
            "unit": "ns",
            "range": "± 336530.56515602826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20848401.81372549,
            "unit": "ns",
            "range": "± 799759.6643782302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52942005.125,
            "unit": "ns",
            "range": "± 1374117.7078249096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105069117.07692307,
            "unit": "ns",
            "range": "± 3422929.684327958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217678085.1724138,
            "unit": "ns",
            "range": "± 6377826.135511036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69361.36516853933,
            "unit": "ns",
            "range": "± 7750.087848755786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345454.1666666667,
            "unit": "ns",
            "range": "± 42477.393125152725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300635,
            "unit": "ns",
            "range": "± 20430.181012525205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297479.8888888889,
            "unit": "ns",
            "range": "± 12482.074908650295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4263028.722222222,
            "unit": "ns",
            "range": "± 85524.0770616195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3707260.9285714286,
            "unit": "ns",
            "range": "± 46847.258466234685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18019.35789473684,
            "unit": "ns",
            "range": "± 2321.2530269726226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91315.6836734694,
            "unit": "ns",
            "range": "± 11052.787867141004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99330.65979381443,
            "unit": "ns",
            "range": "± 13181.705060808237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113678.81958762887,
            "unit": "ns",
            "range": "± 16689.332168800218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6698.1082474226805,
            "unit": "ns",
            "range": "± 1118.851238963997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17832.222222222223,
            "unit": "ns",
            "range": "± 2618.272163893533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571725.0202020202,
            "unit": "ns",
            "range": "± 151356.5381512885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2923824.5895522386,
            "unit": "ns",
            "range": "± 129098.96247379387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2122605.618556701,
            "unit": "ns",
            "range": "± 237030.40307005114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5894460.54,
            "unit": "ns",
            "range": "± 217152.65243557238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3456299.8969072164,
            "unit": "ns",
            "range": "± 247834.21744373307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567662.6744186045,
            "unit": "ns",
            "range": "± 131919.21239905397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4534312.014705882,
            "unit": "ns",
            "range": "± 196587.75443540473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4054600.5306122447,
            "unit": "ns",
            "range": "± 288241.91888595204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7337230.797101449,
            "unit": "ns",
            "range": "± 348810.933553112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6784947.21875,
            "unit": "ns",
            "range": "± 81687.86877238884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2142023.8984375,
            "unit": "ns",
            "range": "± 38821.7314987706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344038.7809895833,
            "unit": "ns",
            "range": "± 15534.55807994783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628244.7533052885,
            "unit": "ns",
            "range": "± 22773.48746692988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825943.7532552084,
            "unit": "ns",
            "range": "± 11640.731777232682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 807357.1691545759,
            "unit": "ns",
            "range": "± 7555.690594354003"
          }
        ]
      }
    ]
  }
}