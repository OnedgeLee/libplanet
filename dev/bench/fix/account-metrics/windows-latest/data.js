window.BENCHMARK_DATA = {
  "lastUpdate": 1698808290402,
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
          "id": "324184e4815b9ea2ba056265b536e077d0c08411",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-01T11:54:43+09:00",
          "tree_id": "3b0cb04acaab6ec004dd75eb29facea232ce0a7d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324184e4815b9ea2ba056265b536e077d0c08411"
        },
        "date": 1698808246755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339352.1739130435,
            "unit": "ns",
            "range": "± 102474.84760089456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2478777.551020408,
            "unit": "ns",
            "range": "± 95990.46451190287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2036232.4324324324,
            "unit": "ns",
            "range": "± 101488.13022991341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9360238.709677419,
            "unit": "ns",
            "range": "± 552017.7669305695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50952.63157894737,
            "unit": "ns",
            "range": "± 3250.1666767493225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7426026.666666667,
            "unit": "ns",
            "range": "± 115382.13817365238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20795309.523809522,
            "unit": "ns",
            "range": "± 491486.7810071415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54845300,
            "unit": "ns",
            "range": "± 910539.0632555452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103035976.47058824,
            "unit": "ns",
            "range": "± 2077586.6310245078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202766053.84615386,
            "unit": "ns",
            "range": "± 2852945.6115902923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4554975,
            "unit": "ns",
            "range": "± 9215.052730274143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1475595.1822916667,
            "unit": "ns",
            "range": "± 6960.152970023061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105867.4609375,
            "unit": "ns",
            "range": "± 3962.892719902372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661502.762276786,
            "unit": "ns",
            "range": "± 8086.9476858534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840773.6049107143,
            "unit": "ns",
            "range": "± 3113.7846087157113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782952.2600446428,
            "unit": "ns",
            "range": "± 1978.405702068143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230112.1951219514,
            "unit": "ns",
            "range": "± 116355.986513634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3375333.3333333335,
            "unit": "ns",
            "range": "± 79661.67409012052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4069840,
            "unit": "ns",
            "range": "± 112025.99021101586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4040762.2807017546,
            "unit": "ns",
            "range": "± 156682.74824144243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10490293.023255814,
            "unit": "ns",
            "range": "± 584443.0838872965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248883.87096774194,
            "unit": "ns",
            "range": "± 7396.625211279062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257297.0588235294,
            "unit": "ns",
            "range": "± 5093.88329850847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218952.38095238095,
            "unit": "ns",
            "range": "± 11728.838685623048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4037446.6666666665,
            "unit": "ns",
            "range": "± 56406.92544444555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3736360,
            "unit": "ns",
            "range": "± 84005.12766304334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22079.166666666668,
            "unit": "ns",
            "range": "± 1956.5230528006437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84585.26315789473,
            "unit": "ns",
            "range": "± 5513.618891533493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68192.1052631579,
            "unit": "ns",
            "range": "± 2287.7324521027326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89677.31958762887,
            "unit": "ns",
            "range": "± 12115.326941821111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5424.489795918367,
            "unit": "ns",
            "range": "± 849.8709695261139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21155.154639175256,
            "unit": "ns",
            "range": "± 2110.458635681108"
          }
        ]
      }
    ]
  }
}