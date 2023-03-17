window.BENCHMARK_DATA = {
  "lastUpdate": 1679056270593,
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
        "date": 1679056255572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139600.90322580645,
            "unit": "ns",
            "range": "± 21208.687228537372"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6569265.405390625,
            "unit": "ns",
            "range": "± 456305.298370585"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6911379.623529412,
            "unit": "ns",
            "range": "± 553798.0060812095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34853326.69387755,
            "unit": "ns",
            "range": "± 2242573.9022317496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7750745.457446809,
            "unit": "ns",
            "range": "± 774630.6949241699"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40106813.5,
            "unit": "ns",
            "range": "± 2332209.5414256523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7286603.436458333,
            "unit": "ns",
            "range": "± 88834.605633302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2317194.296614583,
            "unit": "ns",
            "range": "± 43105.07930029967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1699015.3243582589,
            "unit": "ns",
            "range": "± 26542.932188660587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3236469.5309709823,
            "unit": "ns",
            "range": "± 50334.939870692695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1082020.6971842449,
            "unit": "ns",
            "range": "± 27355.34925986238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 996492.068359375,
            "unit": "ns",
            "range": "± 18918.32996797781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124916.1530612245,
            "unit": "ns",
            "range": "± 23856.012515533253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251232.45744680852,
            "unit": "ns",
            "range": "± 39149.750357946956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219665.93548387097,
            "unit": "ns",
            "range": "± 29279.176101650206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4821095.638297873,
            "unit": "ns",
            "range": "± 305517.60036546516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12216980.585106382,
            "unit": "ns",
            "range": "± 720577.5680213158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26957.326530612245,
            "unit": "ns",
            "range": "± 11276.1640574728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66453.11578947368,
            "unit": "ns",
            "range": "± 15414.775318659307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58695.28865979381,
            "unit": "ns",
            "range": "± 16453.78733311293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133656.47422680413,
            "unit": "ns",
            "range": "± 31522.59809680615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6252.372093023256,
            "unit": "ns",
            "range": "± 773.5291172360859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22890.030303030304,
            "unit": "ns",
            "range": "± 8788.719447079904"
          }
        ]
      }
    ]
  }
}