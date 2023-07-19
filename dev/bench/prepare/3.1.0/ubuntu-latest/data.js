window.BENCHMARK_DATA = {
  "lastUpdate": 1689754345408,
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
          "id": "b987ed1de9341a5044f28330d58cc1a9e599e3c3",
          "message": "Prepare 3.1.0",
          "timestamp": "2023-07-19T16:52:32+09:00",
          "tree_id": "5dcf9daa64bd3ed48090b97e0fc1337876f861db",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b987ed1de9341a5044f28330d58cc1a9e599e3c3"
        },
        "date": 1689754330994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558661.06,
            "unit": "ns",
            "range": "± 248152.97211207647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2913966.1428571427,
            "unit": "ns",
            "range": "± 403020.9180716806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1957985.8350515463,
            "unit": "ns",
            "range": "± 218738.589711016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6090242.9,
            "unit": "ns",
            "range": "± 760379.0269460118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3408575.2959183673,
            "unit": "ns",
            "range": "± 388868.2605127746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508097.8229166665,
            "unit": "ns",
            "range": "± 399611.06608356326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4762838.958762887,
            "unit": "ns",
            "range": "± 589357.3210808024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128624.2736842106,
            "unit": "ns",
            "range": "± 430929.78288158635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7796404.755102041,
            "unit": "ns",
            "range": "± 926891.7184047111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8069706.547368421,
            "unit": "ns",
            "range": "± 815968.985170259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23044639.474747475,
            "unit": "ns",
            "range": "± 2821057.720369022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60632177.34,
            "unit": "ns",
            "range": "± 4770740.900355464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122647108.35353535,
            "unit": "ns",
            "range": "± 10332934.122296622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260788307.36,
            "unit": "ns",
            "range": "± 20437106.73112128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6376769.513139204,
            "unit": "ns",
            "range": "± 154973.58432416682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2103717.5015625,
            "unit": "ns",
            "range": "± 110014.93405425982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1491547.1389382102,
            "unit": "ns",
            "range": "± 34364.34633286525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2888580.705078125,
            "unit": "ns",
            "range": "± 92175.07678005821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 927400.490266927,
            "unit": "ns",
            "range": "± 27356.235558293316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 872167.2680921053,
            "unit": "ns",
            "range": "± 19150.504242147963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58645.47872340425,
            "unit": "ns",
            "range": "± 11308.157987463515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362277.7113402062,
            "unit": "ns",
            "range": "± 58608.62378843358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311575.22340425535,
            "unit": "ns",
            "range": "± 46262.13539069013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283753.36842105264,
            "unit": "ns",
            "range": "± 46171.24153420212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4728751.525252526,
            "unit": "ns",
            "range": "± 505391.4349311252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4065995.1836734693,
            "unit": "ns",
            "range": "± 488094.0704801095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30587.305263157894,
            "unit": "ns",
            "range": "± 10429.229541598697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106409.26315789473,
            "unit": "ns",
            "range": "± 21244.98791165063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101120.125,
            "unit": "ns",
            "range": "± 21481.703596684074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117384.3440860215,
            "unit": "ns",
            "range": "± 21246.213795943186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4856.287356321839,
            "unit": "ns",
            "range": "± 780.089170634104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26753.41414141414,
            "unit": "ns",
            "range": "± 9484.358529415258"
          }
        ]
      }
    ]
  }
}