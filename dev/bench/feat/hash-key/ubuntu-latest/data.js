window.BENCHMARK_DATA = {
  "lastUpdate": 1698915062919,
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
        "date": 1698915048960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55230.90425531915,
            "unit": "ns",
            "range": "± 4694.858086577269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6015956.372395833,
            "unit": "ns",
            "range": "± 88347.64591648178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850331.069921875,
            "unit": "ns",
            "range": "± 26450.56445988367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299330.881966146,
            "unit": "ns",
            "range": "± 24238.154344235118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2879670.0846354165,
            "unit": "ns",
            "range": "± 48658.41627691007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932273.0981445312,
            "unit": "ns",
            "range": "± 10059.425255871429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867974.185686384,
            "unit": "ns",
            "range": "± 6438.537943406783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9601835.341463415,
            "unit": "ns",
            "range": "± 505825.5563889865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26860016.64,
            "unit": "ns",
            "range": "± 656454.091884312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65180048.47058824,
            "unit": "ns",
            "range": "± 1323033.3494125402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129226227.76190476,
            "unit": "ns",
            "range": "± 2999762.432357451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265550523.46666667,
            "unit": "ns",
            "range": "± 3793160.601816886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4012894.060240964,
            "unit": "ns",
            "range": "± 213692.47219597615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4253164.25,
            "unit": "ns",
            "range": "± 227812.33566512988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5031408.47,
            "unit": "ns",
            "range": "± 325515.46991516405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4889883.306122449,
            "unit": "ns",
            "range": "± 283497.60450503085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12552986.46031746,
            "unit": "ns",
            "range": "± 572256.2506282683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315141.2738095238,
            "unit": "ns",
            "range": "± 16385.06097091221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301430.8645833333,
            "unit": "ns",
            "range": "± 17960.64510658309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268825.0101010101,
            "unit": "ns",
            "range": "± 20211.71898570331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5188509.111111111,
            "unit": "ns",
            "range": "± 143315.06750817163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4656211.142857143,
            "unit": "ns",
            "range": "± 66558.93510942838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24623.077777777777,
            "unit": "ns",
            "range": "± 2215.8256899550265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98194.07291666667,
            "unit": "ns",
            "range": "± 8312.69052555035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87193.02083333333,
            "unit": "ns",
            "range": "± 6919.599407296361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99691.40217391304,
            "unit": "ns",
            "range": "± 9830.469864637991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5817.752688172043,
            "unit": "ns",
            "range": "± 763.1780044215849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22758.484536082473,
            "unit": "ns",
            "range": "± 2312.4246524364585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698584.3936170214,
            "unit": "ns",
            "range": "± 138223.29624285933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3263290.095959596,
            "unit": "ns",
            "range": "± 237701.30588957775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2547063.340425532,
            "unit": "ns",
            "range": "± 183914.34867377236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11023086.505494505,
            "unit": "ns",
            "range": "± 625479.7996057705"
          }
        ]
      }
    ]
  }
}