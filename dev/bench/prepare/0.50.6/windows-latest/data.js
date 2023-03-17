window.BENCHMARK_DATA = {
  "lastUpdate": 1679056252174,
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
          "id": "9de4545ec0182112f97bf5e0417c02a75aaf09f8",
          "message": "prepare: 0.50.6",
          "timestamp": "2023-03-17T21:12:55+09:00",
          "tree_id": "91fc0766ea67f93c0e75924a192b075e4ce0f897",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9de4545ec0182112f97bf5e0417c02a75aaf09f8"
        },
        "date": 1679056217880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105074.74747474748,
            "unit": "ns",
            "range": "± 7979.327159941257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4850376.382211538,
            "unit": "ns",
            "range": "± 9518.732672111897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521948.6778846155,
            "unit": "ns",
            "range": "± 4330.537796477654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179780.0130208333,
            "unit": "ns",
            "range": "± 4976.979979748447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624852.2786458335,
            "unit": "ns",
            "range": "± 12583.710257792573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829487.5846354166,
            "unit": "ns",
            "range": "± 2370.922374172264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761189.8088727678,
            "unit": "ns",
            "range": "± 946.8205111962619"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4716151.204427083,
            "unit": "ns",
            "range": "± 14683.630514425997"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5459558,
            "unit": "ns",
            "range": "± 320256.8335419293"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26516492.85714286,
            "unit": "ns",
            "range": "± 455922.87044105254"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6151869,
            "unit": "ns",
            "range": "± 493837.08978924935"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29479013.333333332,
            "unit": "ns",
            "range": "± 427494.04986112576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103086.36363636363,
            "unit": "ns",
            "range": "± 9576.397972052033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201778.08219178082,
            "unit": "ns",
            "range": "± 9946.876206675564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190813.1313131313,
            "unit": "ns",
            "range": "± 13691.25034513624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3700192.8571428573,
            "unit": "ns",
            "range": "± 41417.56342953506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9361835.714285715,
            "unit": "ns",
            "range": "± 75717.87317853903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23791.666666666668,
            "unit": "ns",
            "range": "± 3189.7423313413387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61145.16129032258,
            "unit": "ns",
            "range": "± 6165.745417205418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49037.37373737374,
            "unit": "ns",
            "range": "± 4854.002889654334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113115.90909090909,
            "unit": "ns",
            "range": "± 18661.866499174725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7771.875,
            "unit": "ns",
            "range": "± 1643.2767729848733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21732.291666666668,
            "unit": "ns",
            "range": "± 3109.560632076725"
          }
        ]
      }
    ]
  }
}