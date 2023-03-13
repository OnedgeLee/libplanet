window.BENCHMARK_DATA = {
  "lastUpdate": 1678696849496,
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
          "id": "e2e3b0918ea906a8252bb4046be907ee1fb5e24c",
          "message": "Merge tag '0.51.1'\n\nLibplanet 0.51.1",
          "timestamp": "2023-03-13T15:38:32+09:00",
          "tree_id": "6d24838bc6e9bee1c1969a025d8f4a1df614b267",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2e3b0918ea906a8252bb4046be907ee1fb5e24c"
        },
        "date": 1678690502603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7979120.121212121,
            "unit": "ns",
            "range": "± 248543.56845138306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19120910.833333332,
            "unit": "ns",
            "range": "± 529087.8454154703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49948314.1,
            "unit": "ns",
            "range": "± 899490.919002823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95385890.9,
            "unit": "ns",
            "range": "± 2507620.976953023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 189467871.8846154,
            "unit": "ns",
            "range": "± 2065664.7647070962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59719.005494505494,
            "unit": "ns",
            "range": "± 6903.659603385289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194492.36781609195,
            "unit": "ns",
            "range": "± 11845.462992821387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191728.52272727274,
            "unit": "ns",
            "range": "± 14308.866298037372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171547.78723404257,
            "unit": "ns",
            "range": "± 12695.948235959291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11655092.1,
            "unit": "ns",
            "range": "± 407391.51255347126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9286305.966666667,
            "unit": "ns",
            "range": "± 345499.65474924207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17456.42528735632,
            "unit": "ns",
            "range": "± 2105.3137954928825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51159.41935483871,
            "unit": "ns",
            "range": "± 5804.272242743459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48401.54945054945,
            "unit": "ns",
            "range": "± 5169.472565539041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104661.91304347826,
            "unit": "ns",
            "range": "± 15273.529453612793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6236.858695652174,
            "unit": "ns",
            "range": "± 794.4710948001855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17620.214285714286,
            "unit": "ns",
            "range": "± 3249.851638616119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1494618.402173913,
            "unit": "ns",
            "range": "± 159422.69025118224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2718293.5,
            "unit": "ns",
            "range": "± 81865.95614916018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2476843.8191489363,
            "unit": "ns",
            "range": "± 196899.7845413481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6058105,
            "unit": "ns",
            "range": "± 279336.7527080178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3116664.0512820515,
            "unit": "ns",
            "range": "± 103556.16624247639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5087579.416666667,
            "unit": "ns",
            "range": "± 78813.9121976667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22851415.9,
            "unit": "ns",
            "range": "± 674832.4055942793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6100276.043956044,
            "unit": "ns",
            "range": "± 399714.3077232902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26949561.39285714,
            "unit": "ns",
            "range": "± 1149460.6727274188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6175610.026227678,
            "unit": "ns",
            "range": "± 57089.285712554556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839697.5337239583,
            "unit": "ns",
            "range": "± 14486.498020711795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1239624.1720052084,
            "unit": "ns",
            "range": "± 13996.406904493875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2412120.0608258927,
            "unit": "ns",
            "range": "± 14721.812077400773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830310.1380440848,
            "unit": "ns",
            "range": "± 5464.766158457049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717126.0258413461,
            "unit": "ns",
            "range": "± 5435.2314014023705"
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
          "id": "e2d2936a43be63f056cf8e71638bc3c9c2c7c75e",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T17:21:45+09:00",
          "tree_id": "1296bb363dfb2f87c79e21d00e3da59a59a1b825",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2d2936a43be63f056cf8e71638bc3c9c2c7c75e"
        },
        "date": 1678696797535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8774412.284090908,
            "unit": "ns",
            "range": "± 783212.0399980353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20136592.2972973,
            "unit": "ns",
            "range": "± 679272.1510610074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47546155.176470585,
            "unit": "ns",
            "range": "± 854964.2552542207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100288632.53846154,
            "unit": "ns",
            "range": "± 909173.5922018795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201774662.36666667,
            "unit": "ns",
            "range": "± 2076201.9446367812"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67774.3829787234,
            "unit": "ns",
            "range": "± 7217.527955417563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207128.27472527474,
            "unit": "ns",
            "range": "± 11533.305239913698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231442.8186813187,
            "unit": "ns",
            "range": "± 26893.863694522137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220453.8735632184,
            "unit": "ns",
            "range": "± 24180.54514254806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12473677.906666666,
            "unit": "ns",
            "range": "± 622147.3364690163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10047968.076923076,
            "unit": "ns",
            "range": "± 348868.640772108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23989.34693877551,
            "unit": "ns",
            "range": "± 3633.675300253305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64821.45054945055,
            "unit": "ns",
            "range": "± 5588.6471991862145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61083.15957446808,
            "unit": "ns",
            "range": "± 3813.694678824517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126010.18556701031,
            "unit": "ns",
            "range": "± 22060.38553953004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7686.364583333333,
            "unit": "ns",
            "range": "± 1040.0870876471597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18973.2688172043,
            "unit": "ns",
            "range": "± 3249.327442583428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599337.5257731958,
            "unit": "ns",
            "range": "± 175913.83712435595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2847684.018181818,
            "unit": "ns",
            "range": "± 121342.5482499686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2487859.59,
            "unit": "ns",
            "range": "± 199516.63991565778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6115231.375,
            "unit": "ns",
            "range": "± 181445.44149506406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3309987.3333333335,
            "unit": "ns",
            "range": "± 159245.42646426088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5107689.675675675,
            "unit": "ns",
            "range": "± 241631.1507758535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24623227.17777778,
            "unit": "ns",
            "range": "± 906247.2488515304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6624148,
            "unit": "ns",
            "range": "± 90512.17718627698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29371734.54761905,
            "unit": "ns",
            "range": "± 1059666.58694995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6282983.962890625,
            "unit": "ns",
            "range": "± 205726.61363978352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2066080.3431490385,
            "unit": "ns",
            "range": "± 19935.84763092468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267487.8059512868,
            "unit": "ns",
            "range": "± 24747.826138432152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2520241.8420410156,
            "unit": "ns",
            "range": "± 48617.31571240091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 777472.0446213942,
            "unit": "ns",
            "range": "± 8940.713691293447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711674.4544503348,
            "unit": "ns",
            "range": "± 6447.8124391932415"
          }
        ]
      }
    ]
  }
}