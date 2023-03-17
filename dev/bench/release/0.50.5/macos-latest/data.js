window.BENCHMARK_DATA = {
  "lastUpdate": 1679054422456,
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
        "date": 1679054372117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137817.14130434784,
            "unit": "ns",
            "range": "± 13915.089213331636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112317.95360824742,
            "unit": "ns",
            "range": "± 17959.389941279453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220442.48924731184,
            "unit": "ns",
            "range": "± 17660.405285180736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202029.71212121213,
            "unit": "ns",
            "range": "± 21107.328322256348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3542790.0555555555,
            "unit": "ns",
            "range": "± 71952.16790604078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9899938.5,
            "unit": "ns",
            "range": "± 407118.4111503294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19647.527472527472,
            "unit": "ns",
            "range": "± 2930.609183318032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56098.38383838384,
            "unit": "ns",
            "range": "± 7940.493284819701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52996.67010309279,
            "unit": "ns",
            "range": "± 7322.083975495025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117718.18279569893,
            "unit": "ns",
            "range": "± 18088.742339142176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6825.978494623656,
            "unit": "ns",
            "range": "± 1007.886639356511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17661.733333333334,
            "unit": "ns",
            "range": "± 1978.157500460773"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5429717.846779337,
            "unit": "ns",
            "range": "± 420649.3817740503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5923287.8,
            "unit": "ns",
            "range": "± 213290.9185077764"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28213828.91566265,
            "unit": "ns",
            "range": "± 1432323.576239596"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7899367.720430108,
            "unit": "ns",
            "range": "± 749626.4089117029"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33291930.3,
            "unit": "ns",
            "range": "± 1935914.4299710346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6774270.49115954,
            "unit": "ns",
            "range": "± 149205.26461957858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903805.7794363839,
            "unit": "ns",
            "range": "± 31066.006401609062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269507.2095052083,
            "unit": "ns",
            "range": "± 16923.278447250214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2467598.962332589,
            "unit": "ns",
            "range": "± 26065.22608296113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844119.7808314732,
            "unit": "ns",
            "range": "± 5986.392304553222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717127.2512555803,
            "unit": "ns",
            "range": "± 6696.777189119094"
          }
        ]
      }
    ]
  }
}