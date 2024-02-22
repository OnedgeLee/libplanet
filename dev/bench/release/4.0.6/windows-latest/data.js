window.BENCHMARK_DATA = {
  "lastUpdate": 1708599729721,
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
          "id": "8bacd4da8cb3e27c89c55455c61f08dc04dcaf8c",
          "message": "Release 4.0.6",
          "timestamp": "2024-02-22T19:49:09+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8bacd4da8cb3e27c89c55455c61f08dc04dcaf8c"
        },
        "date": 1708599695656,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997977.8350515463,
            "unit": "ns",
            "range": "± 113881.26285583232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1803393.6170212766,
            "unit": "ns",
            "range": "± 108174.8681966247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1549668.686868687,
            "unit": "ns",
            "range": "± 163712.11893758384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6879565.7894736845,
            "unit": "ns",
            "range": "± 231412.29910354136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34584.94623655914,
            "unit": "ns",
            "range": "± 2481.406781775873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5070350,
            "unit": "ns",
            "range": "± 34739.6636536572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13879160,
            "unit": "ns",
            "range": "± 108835.75305411886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33508264.285714287,
            "unit": "ns",
            "range": "± 583576.6980205151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64614900,
            "unit": "ns",
            "range": "± 684551.2690807022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131534171.42857143,
            "unit": "ns",
            "range": "± 1048941.8744830221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3322709.2912946427,
            "unit": "ns",
            "range": "± 10719.168457490412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043499.4419642857,
            "unit": "ns",
            "range": "± 1445.4678460099794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753040.3515625,
            "unit": "ns",
            "range": "± 10232.505043992236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2006165.9375,
            "unit": "ns",
            "range": "± 4415.50838854495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618888.4765625,
            "unit": "ns",
            "range": "± 2165.5688106912207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573984.78515625,
            "unit": "ns",
            "range": "± 1758.7810096172082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134204.1666666665,
            "unit": "ns",
            "range": "± 53792.350184815296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2300284.8484848486,
            "unit": "ns",
            "range": "± 71282.21693211832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2858436,
            "unit": "ns",
            "range": "± 75130.4747311857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2794578.0821917807,
            "unit": "ns",
            "range": "± 137786.21347598135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7836126.415094339,
            "unit": "ns",
            "range": "± 326896.2598033813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169355.88235294117,
            "unit": "ns",
            "range": "± 8085.889355693643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163868.5185185185,
            "unit": "ns",
            "range": "± 6439.854506562111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143160.37735849057,
            "unit": "ns",
            "range": "± 5904.083971893508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2774092.8571428573,
            "unit": "ns",
            "range": "± 21836.36572628028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2492033.3333333335,
            "unit": "ns",
            "range": "± 29113.194521352263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9805.494505494506,
            "unit": "ns",
            "range": "± 1193.4415814369836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50712.5,
            "unit": "ns",
            "range": "± 3012.152111834259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44408.771929824565,
            "unit": "ns",
            "range": "± 1892.6814596675858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49245.833333333336,
            "unit": "ns",
            "range": "± 9379.023814837996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2361.0526315789475,
            "unit": "ns",
            "range": "± 360.64208013819655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9901.041666666666,
            "unit": "ns",
            "range": "± 1669.4149489955528"
          }
        ]
      }
    ]
  }
}