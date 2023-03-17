window.BENCHMARK_DATA = {
  "lastUpdate": 1679054356040,
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
        "date": 1679054322280,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104548.48484848485,
            "unit": "ns",
            "range": "± 7213.555318561837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831189.375,
            "unit": "ns",
            "range": "± 27138.098509515974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537059.7526041667,
            "unit": "ns",
            "range": "± 4103.384396505102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168593.1640625,
            "unit": "ns",
            "range": "± 3521.245790400993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641099.3229166665,
            "unit": "ns",
            "range": "± 12132.054594717143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826934.58984375,
            "unit": "ns",
            "range": "± 2000.7554334637985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760326.7252604166,
            "unit": "ns",
            "range": "± 1326.8450513168457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4678283.255208333,
            "unit": "ns",
            "range": "± 55538.82773611337"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5306812,
            "unit": "ns",
            "range": "± 488946.9573760253"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25066587.5,
            "unit": "ns",
            "range": "± 762892.9349268416"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6164550,
            "unit": "ns",
            "range": "± 70664.23042486532"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28264144.444444444,
            "unit": "ns",
            "range": "± 791110.9230468902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100100,
            "unit": "ns",
            "range": "± 15782.320788925059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202194.44444444444,
            "unit": "ns",
            "range": "± 13044.43022137225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167902.04081632654,
            "unit": "ns",
            "range": "± 13622.631106594572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3492557.1428571427,
            "unit": "ns",
            "range": "± 42703.246395880175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9097078.57142857,
            "unit": "ns",
            "range": "± 260648.35664186685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20180.80808080808,
            "unit": "ns",
            "range": "± 3355.5216987756826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52090.816326530614,
            "unit": "ns",
            "range": "± 5991.886038286541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39947.31182795699,
            "unit": "ns",
            "range": "± 3331.7834171300697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106173.59550561798,
            "unit": "ns",
            "range": "± 16160.62852113622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6370.103092783505,
            "unit": "ns",
            "range": "± 829.0512836536924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18831.9587628866,
            "unit": "ns",
            "range": "± 2420.853258312405"
          }
        ]
      }
    ]
  }
}