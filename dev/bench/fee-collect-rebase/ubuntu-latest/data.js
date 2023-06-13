window.BENCHMARK_DATA = {
  "lastUpdate": 1686661785915,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "602d4a8c43316e1681586047a56bc74bcc9f3cd3",
          "message": "docs: change.md",
          "timestamp": "2023-06-09T01:46:10+09:00",
          "tree_id": "6c0bf379ad0dea93874cdb8bf20460e88b1a27a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/602d4a8c43316e1681586047a56bc74bcc9f3cd3"
        },
        "date": 1686661770322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1939062.9130434783,
            "unit": "ns",
            "range": "± 245571.39574334183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3517181.5760869565,
            "unit": "ns",
            "range": "± 202810.641545327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2988690.5,
            "unit": "ns",
            "range": "± 288240.85681361053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6845896.692307692,
            "unit": "ns",
            "range": "± 234085.1541491004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4226269.543478261,
            "unit": "ns",
            "range": "± 286411.21331643726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4327340.214285715,
            "unit": "ns",
            "range": "± 110464.18444450408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5608395.791666667,
            "unit": "ns",
            "range": "± 272001.08775936894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5651506.276595744,
            "unit": "ns",
            "range": "± 388859.22689879854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8921371.21875,
            "unit": "ns",
            "range": "± 388480.8840893874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10069821.92857143,
            "unit": "ns",
            "range": "± 105888.12014463065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28898241.721649483,
            "unit": "ns",
            "range": "± 1801041.5533250517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71423545.62121212,
            "unit": "ns",
            "range": "± 3300013.5910377824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131184048.4,
            "unit": "ns",
            "range": "± 1113881.7725947527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290404701.516129,
            "unit": "ns",
            "range": "± 8561797.507586757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7067536.7703125,
            "unit": "ns",
            "range": "± 23132.63120079581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203582.319140625,
            "unit": "ns",
            "range": "± 3459.9459024414014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1619015.0657087055,
            "unit": "ns",
            "range": "± 2247.1621686617173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3188245.254250919,
            "unit": "ns",
            "range": "± 95283.2025913483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976197.76953125,
            "unit": "ns",
            "range": "± 1038.1839137071365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924989.6085286458,
            "unit": "ns",
            "range": "± 422.2738810216874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56196.393258426964,
            "unit": "ns",
            "range": "± 3797.4709425484075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341408.5263157895,
            "unit": "ns",
            "range": "± 6672.707757628342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331904.2197802198,
            "unit": "ns",
            "range": "± 21838.68099130643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294031.94736842107,
            "unit": "ns",
            "range": "± 6246.685222968562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5372984.416666667,
            "unit": "ns",
            "range": "± 55528.902599470806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5071683.231884058,
            "unit": "ns",
            "range": "± 225197.6170441357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24927.479166666668,
            "unit": "ns",
            "range": "± 2177.4285460711712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111024.65217391304,
            "unit": "ns",
            "range": "± 9352.755503276088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102717.32978723405,
            "unit": "ns",
            "range": "± 7622.668638320887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109700.67567567568,
            "unit": "ns",
            "range": "± 4668.531373038427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6437.567010309278,
            "unit": "ns",
            "range": "± 772.8461320989734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23040.627659574468,
            "unit": "ns",
            "range": "± 2258.8949909860776"
          }
        ]
      }
    ]
  }
}