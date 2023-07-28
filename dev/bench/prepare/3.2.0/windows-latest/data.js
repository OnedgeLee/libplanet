window.BENCHMARK_DATA = {
  "lastUpdate": 1690508967630,
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
          "id": "fc7dc0d018b91da8c98dc766c36b64f9564b0f06",
          "message": "Prepare 3.2.0",
          "timestamp": "2023-07-28T10:33:58+09:00",
          "tree_id": "caa34c3224c3f99addd0c02b454de2a675696ee0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fc7dc0d018b91da8c98dc766c36b64f9564b0f06"
        },
        "date": 1690508929757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480384.6153846155,
            "unit": "ns",
            "range": "± 40258.37246891824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416275.4385964912,
            "unit": "ns",
            "range": "± 93347.16362800471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1792545.3488372094,
            "unit": "ns",
            "range": "± 65358.41824122171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4676182.142857143,
            "unit": "ns",
            "range": "± 198807.41078847033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44251.38888888889,
            "unit": "ns",
            "range": "± 2099.7647792849343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6837120,
            "unit": "ns",
            "range": "± 47409.661462617514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17848080,
            "unit": "ns",
            "range": "± 121793.3566098156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45991540,
            "unit": "ns",
            "range": "± 232411.94277157346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91561616.66666667,
            "unit": "ns",
            "range": "± 440473.85955625214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181189903.33333334,
            "unit": "ns",
            "range": "± 550552.428886097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4947995.072115385,
            "unit": "ns",
            "range": "± 8113.050115221794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548426.0677083333,
            "unit": "ns",
            "range": "± 2661.4760047241325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158542.2154017857,
            "unit": "ns",
            "range": "± 1320.121749512039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537942.7734375,
            "unit": "ns",
            "range": "± 3263.802211100992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795220.6961495535,
            "unit": "ns",
            "range": "± 1176.0069666737263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752330.9440104166,
            "unit": "ns",
            "range": "± 835.9786320113415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015132.5,
            "unit": "ns",
            "range": "± 106684.56112921557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3142533.3333333335,
            "unit": "ns",
            "range": "± 45150.61566842799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3995285.714285714,
            "unit": "ns",
            "range": "± 66565.16595548546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3482372.340425532,
            "unit": "ns",
            "range": "± 127602.47152800568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5977563.043478261,
            "unit": "ns",
            "range": "± 225307.92298412474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255692.5,
            "unit": "ns",
            "range": "± 6866.506875163431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241559.0909090909,
            "unit": "ns",
            "range": "± 3386.198752486627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222145.58823529413,
            "unit": "ns",
            "range": "± 10644.225311624874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3909946.6666666665,
            "unit": "ns",
            "range": "± 64792.32611821807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3511434.6153846155,
            "unit": "ns",
            "range": "± 31514.14619272447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18331.57894736842,
            "unit": "ns",
            "range": "± 2048.2614920897195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83139.50617283951,
            "unit": "ns",
            "range": "± 4064.4396604066374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68984.72222222222,
            "unit": "ns",
            "range": "± 3144.665042832367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84666.31578947368,
            "unit": "ns",
            "range": "± 11649.268176505866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4303.1578947368425,
            "unit": "ns",
            "range": "± 684.3932911211878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18621.21212121212,
            "unit": "ns",
            "range": "± 2097.339068637012"
          }
        ]
      }
    ]
  }
}