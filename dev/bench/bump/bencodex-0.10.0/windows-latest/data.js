window.BENCHMARK_DATA = {
  "lastUpdate": 1681976867789,
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
      },
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
          "id": "0ba58523a304018327bc4ba1fd68ef209f9a0a67",
          "message": "bump: bencodex 0.10.0",
          "timestamp": "2023-04-20T16:30:40+09:00",
          "tree_id": "b543dcdad7d8051aefddb2ac30429cfdfe34709c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0ba58523a304018327bc4ba1fd68ef209f9a0a67"
        },
        "date": 1681976832738,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395860.606060606,
            "unit": "ns",
            "range": "± 153486.22208868625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2558578,
            "unit": "ns",
            "range": "± 163023.62788407344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2152363.6363636362,
            "unit": "ns",
            "range": "± 102488.58846501028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549047.97979798,
            "unit": "ns",
            "range": "± 376768.6108453385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48661.11111111111,
            "unit": "ns",
            "range": "± 3329.1931216810167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7197215.384615385,
            "unit": "ns",
            "range": "± 115386.81211584108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19580290,
            "unit": "ns",
            "range": "± 285740.95861211675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49515546.666666664,
            "unit": "ns",
            "range": "± 459545.7693149161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98093223.91304348,
            "unit": "ns",
            "range": "± 2388659.3518726225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201755726.66666666,
            "unit": "ns",
            "range": "± 2981354.935371947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4778000.729166667,
            "unit": "ns",
            "range": "± 37365.15047115929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508388.4207589286,
            "unit": "ns",
            "range": "± 12773.027893675842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157158.3203125,
            "unit": "ns",
            "range": "± 8720.058792661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622061.9791666665,
            "unit": "ns",
            "range": "± 12686.082754671193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830278.5221354166,
            "unit": "ns",
            "range": "± 2525.2497368689774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766035.7747395834,
            "unit": "ns",
            "range": "± 2398.7244715189217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3299958.8235294116,
            "unit": "ns",
            "range": "± 64697.69179444822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564690.909090909,
            "unit": "ns",
            "range": "± 87127.88580499636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3983279.411764706,
            "unit": "ns",
            "range": "± 127311.51672394994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4464495.833333333,
            "unit": "ns",
            "range": "± 96758.37893912618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127603.703703703,
            "unit": "ns",
            "range": "± 194397.91760811218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329128.26086956525,
            "unit": "ns",
            "range": "± 12568.526176188914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272601.6393442623,
            "unit": "ns",
            "range": "± 11129.053445872785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233212.28070175438,
            "unit": "ns",
            "range": "± 10102.829698643816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5319183.333333333,
            "unit": "ns",
            "range": "± 77427.46556773265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3655194.736842105,
            "unit": "ns",
            "range": "± 77687.94754003001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25091.75257731959,
            "unit": "ns",
            "range": "± 2398.770088637994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97750,
            "unit": "ns",
            "range": "± 7952.424324165489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101418.36734693877,
            "unit": "ns",
            "range": "± 9726.21441216983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123644.32989690722,
            "unit": "ns",
            "range": "± 14853.618870723087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9475.510204081633,
            "unit": "ns",
            "range": "± 1241.5538339416523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24483.870967741936,
            "unit": "ns",
            "range": "± 2489.730661292181"
          }
        ]
      }
    ]
  }
}