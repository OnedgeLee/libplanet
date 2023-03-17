window.BENCHMARK_DATA = {
  "lastUpdate": 1679054012173,
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
          "id": "78d78a4f504ff25479946aa32032c2cde8ae7d20",
          "message": "Release 0.50.5",
          "timestamp": "2023-03-17T20:41:11+09:00",
          "tree_id": "3b1dd6f4b8fe0474a0d35e906bd2905a1f02b502",
          "url": "https://github.com/OnedgeLee/libplanet/commit/78d78a4f504ff25479946aa32032c2cde8ae7d20"
        },
        "date": 1679053999654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109514.3953488372,
            "unit": "ns",
            "range": "± 4062.562017926823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4915152.065917969,
            "unit": "ns",
            "range": "± 283122.1968022254"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5626055.936170213,
            "unit": "ns",
            "range": "± 188051.24152872758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27599818.92857143,
            "unit": "ns",
            "range": "± 462841.8864647249"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6711460.461538462,
            "unit": "ns",
            "range": "± 72320.94604563672"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29603333.65,
            "unit": "ns",
            "range": "± 669119.6474221518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5828429.536458333,
            "unit": "ns",
            "range": "± 20585.88349529242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869692.7147042411,
            "unit": "ns",
            "range": "± 8635.758029979566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354536.1997767857,
            "unit": "ns",
            "range": "± 3822.6651710877973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628427.39921875,
            "unit": "ns",
            "range": "± 8014.302111414265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822157.068359375,
            "unit": "ns",
            "range": "± 2007.3397374432354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759588.7317057292,
            "unit": "ns",
            "range": "± 1483.1635716728701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86541.37681159421,
            "unit": "ns",
            "range": "± 3788.7531516529643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199500.62921348316,
            "unit": "ns",
            "range": "± 10516.88486152152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169187.41666666666,
            "unit": "ns",
            "range": "± 1951.2350614806805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3840309.2666666666,
            "unit": "ns",
            "range": "± 70840.06876808256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9437602,
            "unit": "ns",
            "range": "± 71283.35381581572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17324.637362637364,
            "unit": "ns",
            "range": "± 1665.043893425326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48780.2688172043,
            "unit": "ns",
            "range": "± 4512.243913339968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40138.11111111111,
            "unit": "ns",
            "range": "± 890.6828984779183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89784.37894736842,
            "unit": "ns",
            "range": "± 13301.032246919583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5752.21875,
            "unit": "ns",
            "range": "± 851.1456082137644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18047.3125,
            "unit": "ns",
            "range": "± 2085.130183049288"
          }
        ]
      }
    ]
  }
}