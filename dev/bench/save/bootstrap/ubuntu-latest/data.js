window.BENCHMARK_DATA = {
  "lastUpdate": 1688373534691,
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
          "id": "4967018433c09ad5f61c3bab650786a81057aad3",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T15:02:41+09:00",
          "tree_id": "fc68fc51a13f6b241ea85483bd1fe1b5bde679fd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4967018433c09ad5f61c3bab650786a81057aad3"
        },
        "date": 1688373519348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10273592.857142856,
            "unit": "ns",
            "range": "± 440547.6413188241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28025811.41860465,
            "unit": "ns",
            "range": "± 1014763.601241811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70922560.8,
            "unit": "ns",
            "range": "± 1863448.8678872439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146736633.33333334,
            "unit": "ns",
            "range": "± 4022304.902328237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282267788.8125,
            "unit": "ns",
            "range": "± 5317551.635765921"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55030.48780487805,
            "unit": "ns",
            "range": "± 2849.6106437261033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352996.3076923077,
            "unit": "ns",
            "range": "± 14414.226562450902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343507.23255813954,
            "unit": "ns",
            "range": "± 12662.934271850283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312512.1212121212,
            "unit": "ns",
            "range": "± 9862.635172576774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5654134.0322580645,
            "unit": "ns",
            "range": "± 255049.69184318223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5001647.6875,
            "unit": "ns",
            "range": "± 36827.87547808272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23228.445652173912,
            "unit": "ns",
            "range": "± 1691.0328813494623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115297.55,
            "unit": "ns",
            "range": "± 5986.418567331481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96709.36082474227,
            "unit": "ns",
            "range": "± 7601.342855851148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114966.06593406593,
            "unit": "ns",
            "range": "± 9744.71536076201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7152.268041237114,
            "unit": "ns",
            "range": "± 782.5430701067928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21733.270833333332,
            "unit": "ns",
            "range": "± 2048.3121343099556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1882212.618556701,
            "unit": "ns",
            "range": "± 186054.1640176347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3695453.3636363638,
            "unit": "ns",
            "range": "± 183618.3320419452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413767.7291666665,
            "unit": "ns",
            "range": "± 228401.34653633303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5900867.964285715,
            "unit": "ns",
            "range": "± 166383.9302767308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7426322.702083333,
            "unit": "ns",
            "range": "± 83814.48103813406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2291156.240234375,
            "unit": "ns",
            "range": "± 15933.363670730834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1648804.81640625,
            "unit": "ns",
            "range": "± 14891.117487398196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108997.1002604165,
            "unit": "ns",
            "range": "± 21826.41256238834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989559.4837740385,
            "unit": "ns",
            "range": "± 1952.0463795896517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999157.4379557292,
            "unit": "ns",
            "range": "± 12480.805224314045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4433548.75949367,
            "unit": "ns",
            "range": "± 229100.24549826328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4723279.688172043,
            "unit": "ns",
            "range": "± 258886.43041369962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5744889.266666667,
            "unit": "ns",
            "range": "± 240179.00935187843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5029925.7894736845,
            "unit": "ns",
            "range": "± 314457.45710353105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8666071.768292682,
            "unit": "ns",
            "range": "± 457471.6901964185"
          }
        ]
      }
    ]
  }
}