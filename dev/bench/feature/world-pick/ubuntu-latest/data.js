window.BENCHMARK_DATA = {
  "lastUpdate": 1691653054803,
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
          "id": "c511e899b206f325491b87d5f877fe693538a619",
          "message": "fix: Fix MakeTxExecutions",
          "timestamp": "2023-08-10T16:11:06+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c511e899b206f325491b87d5f877fe693538a619"
        },
        "date": 1691653039715,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3601526.1818181816,
            "unit": "ns",
            "range": "± 433988.4344138058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3902917.4285714286,
            "unit": "ns",
            "range": "± 411172.440864429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4720725.183673469,
            "unit": "ns",
            "range": "± 451790.055601195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4322764.969387755,
            "unit": "ns",
            "range": "± 621407.2271784894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8398189.424242424,
            "unit": "ns",
            "range": "± 804114.0261996693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9120214.56701031,
            "unit": "ns",
            "range": "± 581171.0624484109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29123976.87878788,
            "unit": "ns",
            "range": "± 2422512.248045688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62069195.01136363,
            "unit": "ns",
            "range": "± 3405828.745273398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113855189.77777778,
            "unit": "ns",
            "range": "± 8513578.261542348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234242066.85,
            "unit": "ns",
            "range": "± 22634390.82213747"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63396.5918367347,
            "unit": "ns",
            "range": "± 15871.817248176729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6776710.97667739,
            "unit": "ns",
            "range": "± 321734.0188202887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2102554.3618164062,
            "unit": "ns",
            "range": "± 96942.28339292406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1523226.519729873,
            "unit": "ns",
            "range": "± 67125.6109094415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2885920.353548729,
            "unit": "ns",
            "range": "± 127692.33077514434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975655.3180954392,
            "unit": "ns",
            "range": "± 31313.350264087425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896595.0187413832,
            "unit": "ns",
            "range": "± 42431.10174958437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363536.13265306124,
            "unit": "ns",
            "range": "± 51764.274198442115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372641.05102040817,
            "unit": "ns",
            "range": "± 55303.35731650251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291036.6736842105,
            "unit": "ns",
            "range": "± 47020.78090938681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4751953.54,
            "unit": "ns",
            "range": "± 527103.01094812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4372898.66,
            "unit": "ns",
            "range": "± 439133.05645399855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29880.680412371134,
            "unit": "ns",
            "range": "± 9716.394125551404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119454.78787878787,
            "unit": "ns",
            "range": "± 21496.331820100186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120953.70707070707,
            "unit": "ns",
            "range": "± 22758.971498251296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123289.48387096774,
            "unit": "ns",
            "range": "± 21246.581540185678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5693.735632183908,
            "unit": "ns",
            "range": "± 1202.6733347951188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30450.38,
            "unit": "ns",
            "range": "± 10584.724663286037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718959.224489796,
            "unit": "ns",
            "range": "± 268358.88221933506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3049751.5154639175,
            "unit": "ns",
            "range": "± 378007.635912185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042078.8659793814,
            "unit": "ns",
            "range": "± 267053.50717219844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6442750.635416667,
            "unit": "ns",
            "range": "± 756225.7108468569"
          }
        ]
      }
    ]
  }
}