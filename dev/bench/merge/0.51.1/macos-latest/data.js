window.BENCHMARK_DATA = {
  "lastUpdate": 1678690596476,
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
      }
    ]
  }
}