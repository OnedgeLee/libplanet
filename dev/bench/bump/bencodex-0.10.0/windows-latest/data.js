window.BENCHMARK_DATA = {
  "lastUpdate": 1681976849398,
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
          "id": "20680e31aeee6be1cfcf2a421141eef40ff3b5da",
          "message": "bump: bencodex 0.10.0",
          "timestamp": "2023-04-20T16:32:13+09:00",
          "tree_id": "2098680d696851b4e5c2dbbd2b802a56b919da11",
          "url": "https://github.com/OnedgeLee/libplanet/commit/20680e31aeee6be1cfcf2a421141eef40ff3b5da"
        },
        "date": 1681976813210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1315075,
            "unit": "ns",
            "range": "± 113827.5457732779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411375,
            "unit": "ns",
            "range": "± 79020.1524117708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2073104.1237113401,
            "unit": "ns",
            "range": "± 128882.07862674781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5021273.076923077,
            "unit": "ns",
            "range": "± 87326.67660087522"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42295.23809523809,
            "unit": "ns",
            "range": "± 1953.4443172153206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6933771.428571428,
            "unit": "ns",
            "range": "± 63063.09939651322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17134953.333333332,
            "unit": "ns",
            "range": "± 98715.66576114789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45090523.333333336,
            "unit": "ns",
            "range": "± 398849.6771371151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91980357.14285715,
            "unit": "ns",
            "range": "± 505722.7223174097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186567020,
            "unit": "ns",
            "range": "± 1929845.874748995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4788074.729567308,
            "unit": "ns",
            "range": "± 7365.9120027308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497866.1458333333,
            "unit": "ns",
            "range": "± 2258.4449029985003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152099.19921875,
            "unit": "ns",
            "range": "± 1095.8915025590845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710648.4375,
            "unit": "ns",
            "range": "± 8549.14463310262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808289.1666666666,
            "unit": "ns",
            "range": "± 1152.1537713372416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727029.8958333334,
            "unit": "ns",
            "range": "± 819.4359611808989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992080.9523809524,
            "unit": "ns",
            "range": "± 70518.59768208397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3179859.523809524,
            "unit": "ns",
            "range": "± 115388.83798476796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3868440,
            "unit": "ns",
            "range": "± 55011.89222081246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3945968.3333333335,
            "unit": "ns",
            "range": "± 162918.4952633373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6709291.666666667,
            "unit": "ns",
            "range": "± 153528.76211674945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295759.5238095238,
            "unit": "ns",
            "range": "± 10785.515569928744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243829.8245614035,
            "unit": "ns",
            "range": "± 10581.536563283247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222018.9189189189,
            "unit": "ns",
            "range": "± 7442.0665378881395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5212920,
            "unit": "ns",
            "range": "± 39475.60186820643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3427683.3333333335,
            "unit": "ns",
            "range": "± 45106.21855554899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16109.473684210527,
            "unit": "ns",
            "range": "± 1551.188541170144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76913.63636363637,
            "unit": "ns",
            "range": "± 4090.64483066136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70784.53608247422,
            "unit": "ns",
            "range": "± 5193.030991269806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89601.0752688172,
            "unit": "ns",
            "range": "± 10847.204554967906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5414.285714285715,
            "unit": "ns",
            "range": "± 713.3484277556398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16308.247422680412,
            "unit": "ns",
            "range": "± 1381.6257108243885"
          }
        ]
      }
    ]
  }
}