window.BENCHMARK_DATA = {
  "lastUpdate": 1679048025895,
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
          "id": "394e00f8b948b886a898d4a09da8f4f768be018a",
          "message": "prepare: 0.51.4",
          "timestamp": "2023-03-17T18:47:08+09:00",
          "tree_id": "04b511c8d3d9638abf78f6ec1d85b047e8def794",
          "url": "https://github.com/OnedgeLee/libplanet/commit/394e00f8b948b886a898d4a09da8f4f768be018a"
        },
        "date": 1679047974146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9575890.09574468,
            "unit": "ns",
            "range": "± 664375.7235255582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24228254.752688173,
            "unit": "ns",
            "range": "± 1369227.1399982853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 62313182.94444445,
            "unit": "ns",
            "range": "± 1293502.6849487799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 127503166.24736843,
            "unit": "ns",
            "range": "± 7495481.4621671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 249069328.14285713,
            "unit": "ns",
            "range": "± 12044878.16741651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109138.30208333333,
            "unit": "ns",
            "range": "± 29663.38820201722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276426.03684210527,
            "unit": "ns",
            "range": "± 46732.82308217652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295138.13157894736,
            "unit": "ns",
            "range": "± 67497.60514869865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237769.54761904763,
            "unit": "ns",
            "range": "± 7853.044049229607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13780658.92,
            "unit": "ns",
            "range": "± 553728.4825439653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11376838.905405406,
            "unit": "ns",
            "range": "± 570275.4425014732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32945.30459770115,
            "unit": "ns",
            "range": "± 2682.1496708280097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77056.77659574468,
            "unit": "ns",
            "range": "± 8905.632899576929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71644.64835164836,
            "unit": "ns",
            "range": "± 4625.676842662839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150508.4255319149,
            "unit": "ns",
            "range": "± 19247.355613503754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11511.021978021978,
            "unit": "ns",
            "range": "± 1395.315471919618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32159.636363636364,
            "unit": "ns",
            "range": "± 2891.862062424101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2221060,
            "unit": "ns",
            "range": "± 615433.0128277015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3437138.6117647057,
            "unit": "ns",
            "range": "± 475837.6727372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3695296.175824176,
            "unit": "ns",
            "range": "± 1043168.5927977276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10373431.586956521,
            "unit": "ns",
            "range": "± 3885529.6457812134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3763126.5,
            "unit": "ns",
            "range": "± 291764.1590568801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6310321.97752809,
            "unit": "ns",
            "range": "± 1209239.341045962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30190977.65934066,
            "unit": "ns",
            "range": "± 2596351.514182774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7879824.436170213,
            "unit": "ns",
            "range": "± 841196.5426241151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33878461.302083336,
            "unit": "ns",
            "range": "± 2247493.2120610974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7904526.297991072,
            "unit": "ns",
            "range": "± 107989.33375494622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2300582.027107008,
            "unit": "ns",
            "range": "± 146973.61117436225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522383.99296875,
            "unit": "ns",
            "range": "± 102448.01473352281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3533591.7253289474,
            "unit": "ns",
            "range": "± 223868.5588041872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044277.6210275424,
            "unit": "ns",
            "range": "± 45938.60768435114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843736.3635253906,
            "unit": "ns",
            "range": "± 33079.76419338743"
          }
        ]
      }
    ]
  }
}