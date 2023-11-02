window.BENCHMARK_DATA = {
  "lastUpdate": 1698914993738,
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
          "id": "bfc838289232e1276f81b5e8d69b9d8c3199ec0d",
          "message": "feat: Add KeyConverters.ToHashKey()",
          "timestamp": "2023-11-02T17:33:18+09:00",
          "tree_id": "31d3ff5ac0e2ba809e1e238bd415e704f6cf5907",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bfc838289232e1276f81b5e8d69b9d8c3199ec0d"
        },
        "date": 1698914969515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8246520.594594595,
            "unit": "ns",
            "range": "± 276298.43194205186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21125532.35714286,
            "unit": "ns",
            "range": "± 230437.54503873285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49283008.71428572,
            "unit": "ns",
            "range": "± 571936.5771382722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101854463.73333333,
            "unit": "ns",
            "range": "± 1869552.0519279656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206954039.5,
            "unit": "ns",
            "range": "± 2492503.748585929"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54777.08791208791,
            "unit": "ns",
            "range": "± 5798.953698054986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295059.467032967,
            "unit": "ns",
            "range": "± 18094.088662353886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288120.2842105263,
            "unit": "ns",
            "range": "± 19476.28073010706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273743.5,
            "unit": "ns",
            "range": "± 11955.080310817457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4158143.966666667,
            "unit": "ns",
            "range": "± 124477.81870976143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3554414.1428571427,
            "unit": "ns",
            "range": "± 54937.14633155735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16725.15053763441,
            "unit": "ns",
            "range": "± 1846.517968373685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83227.92857142857,
            "unit": "ns",
            "range": "± 10151.106202733534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76326.6313131313,
            "unit": "ns",
            "range": "± 8924.771262885442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82842.54945054946,
            "unit": "ns",
            "range": "± 8144.126425104354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4179.702127659574,
            "unit": "ns",
            "range": "± 439.77819017609795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17330.516129032258,
            "unit": "ns",
            "range": "± 2079.176392191322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546754.8535353534,
            "unit": "ns",
            "range": "± 205526.65041930164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2841566.063829787,
            "unit": "ns",
            "range": "± 196741.96266544887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2381424.244680851,
            "unit": "ns",
            "range": "± 223537.9810540821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11564913.451612903,
            "unit": "ns",
            "range": "± 2572732.5730522843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3286188.811764706,
            "unit": "ns",
            "range": "± 200434.38214909128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508555.3947368423,
            "unit": "ns",
            "range": "± 120143.48384750479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4385136.884615385,
            "unit": "ns",
            "range": "± 204638.3465066094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6172876.601123596,
            "unit": "ns",
            "range": "± 2141122.36884817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15498437.117021276,
            "unit": "ns",
            "range": "± 1722110.8529110125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5449485.653645833,
            "unit": "ns",
            "range": "± 47880.32939900051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1781002.5532552083,
            "unit": "ns",
            "range": "± 31389.404363878846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1066158.3787560095,
            "unit": "ns",
            "range": "± 3095.9885005788155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618312.467247596,
            "unit": "ns",
            "range": "± 10273.76598775347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852581.8309044471,
            "unit": "ns",
            "range": "± 2739.0582899866017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 707543.2288643973,
            "unit": "ns",
            "range": "± 3885.526478826234"
          }
        ]
      }
    ]
  }
}