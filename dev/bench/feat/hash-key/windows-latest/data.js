window.BENCHMARK_DATA = {
  "lastUpdate": 1698915136862,
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
        "date": 1698915093181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676600,
            "unit": "ns",
            "range": "± 87929.86950530241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051911.111111111,
            "unit": "ns",
            "range": "± 99132.00370581722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2491098.924731183,
            "unit": "ns",
            "range": "± 141899.04823548175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10731868.235294119,
            "unit": "ns",
            "range": "± 587494.4565517122"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69409.47368421052,
            "unit": "ns",
            "range": "± 7793.41066029789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9989151.612903226,
            "unit": "ns",
            "range": "± 302443.66623771744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25354253.333333332,
            "unit": "ns",
            "range": "± 253958.7392433961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63942385.71428572,
            "unit": "ns",
            "range": "± 399015.45344499144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126829823.07692307,
            "unit": "ns",
            "range": "± 779292.1009414529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258733858.82352942,
            "unit": "ns",
            "range": "± 5133051.923205485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5700822.395833333,
            "unit": "ns",
            "range": "± 56017.39892126847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790807.1223958333,
            "unit": "ns",
            "range": "± 12445.98542122354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360768.4635416667,
            "unit": "ns",
            "range": "± 18476.49754798938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197148.016826923,
            "unit": "ns",
            "range": "± 23224.791069425002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005007.9380580357,
            "unit": "ns",
            "range": "± 7732.128699412929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916629.3033854166,
            "unit": "ns",
            "range": "± 7204.94592588536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4188036.8421052634,
            "unit": "ns",
            "range": "± 92393.4173372295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4373851.219512195,
            "unit": "ns",
            "range": "± 157558.01807897817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5218035,
            "unit": "ns",
            "range": "± 119842.11224949706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4981608.695652174,
            "unit": "ns",
            "range": "± 122249.42428956642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12169616.279069768,
            "unit": "ns",
            "range": "± 367824.7401828579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317161.53846153844,
            "unit": "ns",
            "range": "± 4596.1103956748875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305258.3333333333,
            "unit": "ns",
            "range": "± 11914.818832085466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285856.75675675675,
            "unit": "ns",
            "range": "± 9501.682322987175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5056386.666666667,
            "unit": "ns",
            "range": "± 55202.353296972855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4633600,
            "unit": "ns",
            "range": "± 56890.494226481576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28043.157894736843,
            "unit": "ns",
            "range": "± 2623.731816519516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112310.41666666667,
            "unit": "ns",
            "range": "± 8146.080480389479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102823.4693877551,
            "unit": "ns",
            "range": "± 10117.43214457523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110211.70212765958,
            "unit": "ns",
            "range": "± 14789.816726113897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7873.958333333333,
            "unit": "ns",
            "range": "± 1151.6802180125367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28640,
            "unit": "ns",
            "range": "± 2013.9090811737362"
          }
        ]
      }
    ]
  }
}