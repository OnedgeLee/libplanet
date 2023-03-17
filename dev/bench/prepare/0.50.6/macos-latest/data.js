window.BENCHMARK_DATA = {
  "lastUpdate": 1679056292377,
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
        "date": 1679056255678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127080.3125,
            "unit": "ns",
            "range": "± 13480.162279448388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 136501.41379310345,
            "unit": "ns",
            "range": "± 29248.045630415672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243724.52083333334,
            "unit": "ns",
            "range": "± 26987.03835858952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209993.85416666666,
            "unit": "ns",
            "range": "± 34686.791680613795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3688911.5,
            "unit": "ns",
            "range": "± 105129.32306168154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10555094.6875,
            "unit": "ns",
            "range": "± 206579.158915969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22968.848484848484,
            "unit": "ns",
            "range": "± 4006.013197945687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60283.82417582418,
            "unit": "ns",
            "range": "± 6975.366783814479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55720.68556701031,
            "unit": "ns",
            "range": "± 7533.626156730427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126117.625,
            "unit": "ns",
            "range": "± 19168.257033714002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6306.309278350515,
            "unit": "ns",
            "range": "± 1014.9403241983485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19861.905263157896,
            "unit": "ns",
            "range": "± 3220.494966826526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5598102.463877688,
            "unit": "ns",
            "range": "± 467031.6802737905"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6641427.072164948,
            "unit": "ns",
            "range": "± 827116.2674228486"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29589481.887096774,
            "unit": "ns",
            "range": "± 1757048.1490497193"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6977734.281690141,
            "unit": "ns",
            "range": "± 339034.2821606765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33999190.81081081,
            "unit": "ns",
            "range": "± 1705917.9632996933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6844927.887122845,
            "unit": "ns",
            "range": "± 300476.5248886823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000064.9566089527,
            "unit": "ns",
            "range": "± 67647.75809223161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331740.6128305288,
            "unit": "ns",
            "range": "± 19456.214168855244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698711.447215545,
            "unit": "ns",
            "range": "± 94184.03491241026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885118.6973230699,
            "unit": "ns",
            "range": "± 17844.979480042246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746565.297014509,
            "unit": "ns",
            "range": "± 10808.462016238667"
          }
        ]
      }
    ]
  }
}