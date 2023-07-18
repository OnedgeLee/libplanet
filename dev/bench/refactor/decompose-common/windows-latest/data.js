window.BENCHMARK_DATA = {
  "lastUpdate": 1689672373240,
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
          "id": "45dee65124543713e956792c50e6e862fe67662c",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T18:09:27+09:00",
          "tree_id": "66f7ec611cd49e0650ce17afce73cb20917c79b2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45dee65124543713e956792c50e6e862fe67662c"
        },
        "date": 1689672339742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1144222,
            "unit": "ns",
            "range": "± 120092.25963500905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2078918.0327868853,
            "unit": "ns",
            "range": "± 91181.57253194808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1469279.1666666667,
            "unit": "ns",
            "range": "± 113262.77589529922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4117344.1860465114,
            "unit": "ns",
            "range": "± 151497.62736209936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33939.56043956044,
            "unit": "ns",
            "range": "± 3771.2915300517147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6985860,
            "unit": "ns",
            "range": "± 97643.41686536199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17354650,
            "unit": "ns",
            "range": "± 332109.4297567194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42212864.28571428,
            "unit": "ns",
            "range": "± 221583.9400149015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 85050573.33333333,
            "unit": "ns",
            "range": "± 716262.9858874329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175576106.66666666,
            "unit": "ns",
            "range": "± 815585.2092355584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4803662.03125,
            "unit": "ns",
            "range": "± 10377.754720482868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508928.1770833333,
            "unit": "ns",
            "range": "± 6135.4950194474195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1024241.9921875,
            "unit": "ns",
            "range": "± 1301.143050793077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549869.2243303573,
            "unit": "ns",
            "range": "± 6690.059478552509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837275.5794270834,
            "unit": "ns",
            "range": "± 2148.0795164121178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745503.828125,
            "unit": "ns",
            "range": "± 1517.2581885941413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2812130,
            "unit": "ns",
            "range": "± 112895.74023525116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2922292.8571428573,
            "unit": "ns",
            "range": "± 30556.516723699286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3547600,
            "unit": "ns",
            "range": "± 93196.60938038465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3236838.596491228,
            "unit": "ns",
            "range": "± 139620.79352198678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5597275,
            "unit": "ns",
            "range": "± 123550.3599645441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206978.125,
            "unit": "ns",
            "range": "± 12666.268533101278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190144.68085106384,
            "unit": "ns",
            "range": "± 7243.462074913646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160913.51351351352,
            "unit": "ns",
            "range": "± 4202.523194605974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3561835.714285714,
            "unit": "ns",
            "range": "± 35759.37977312025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3270433.3333333335,
            "unit": "ns",
            "range": "± 33121.93202324377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10482.105263157895,
            "unit": "ns",
            "range": "± 1135.6860282486703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53016.666666666664,
            "unit": "ns",
            "range": "± 3442.2441726031325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42013.15789473684,
            "unit": "ns",
            "range": "± 1235.383965398214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63904.08163265306,
            "unit": "ns",
            "range": "± 11911.011697726206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2518.3673469387754,
            "unit": "ns",
            "range": "± 657.6037315806267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9704.838709677419,
            "unit": "ns",
            "range": "± 1339.7368438089572"
          }
        ]
      }
    ]
  }
}