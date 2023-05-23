window.BENCHMARK_DATA = {
  "lastUpdate": 1684832733557,
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
          "id": "d9bdfe98da1ced3d6978f7673fe9b34580b7745f",
          "message": "feat: Introduce DuplicateVoteEvidence",
          "timestamp": "2023-05-23T17:51:45+09:00",
          "tree_id": "696d37566d51827dd0dbd7c64d5280ec15a2cd5e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9bdfe98da1ced3d6978f7673fe9b34580b7745f"
        },
        "date": 1684832720178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497457.8947368423,
            "unit": "ns",
            "range": "± 73704.9061158337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3711961,
            "unit": "ns",
            "range": "± 98136.91708568868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4490956.5625,
            "unit": "ns",
            "range": "± 84879.31058231545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4701646.6,
            "unit": "ns",
            "range": "± 82066.28129297162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7153422.956521739,
            "unit": "ns",
            "range": "± 172848.84993607938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278459.1891891892,
            "unit": "ns",
            "range": "± 9435.085461068047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268139.875,
            "unit": "ns",
            "range": "± 9179.235983478397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233327.23076923078,
            "unit": "ns",
            "range": "± 2224.863035254311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4352901.076923077,
            "unit": "ns",
            "range": "± 30777.280420416017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4091560.066666667,
            "unit": "ns",
            "range": "± 57775.424773695544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18116.372340425532,
            "unit": "ns",
            "range": "± 1282.7936665943898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86997.25714285714,
            "unit": "ns",
            "range": "± 4209.7833903645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73362.76923076923,
            "unit": "ns",
            "range": "± 766.6486759316109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80449.59493670886,
            "unit": "ns",
            "range": "± 4540.75685976041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4940.229166666667,
            "unit": "ns",
            "range": "± 611.2330846509619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16733.460674157304,
            "unit": "ns",
            "range": "± 956.1326108122405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884446.495192308,
            "unit": "ns",
            "range": "± 24854.700493842123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878137.8009207589,
            "unit": "ns",
            "range": "± 6176.201674003404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362190.973046875,
            "unit": "ns",
            "range": "± 2480.005334398931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638631.1200520834,
            "unit": "ns",
            "range": "± 2777.8958611199855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833280.823828125,
            "unit": "ns",
            "range": "± 826.7050506345656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757510.8456333706,
            "unit": "ns",
            "range": "± 329.53625205131976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8072589.733333333,
            "unit": "ns",
            "range": "± 98168.13217817878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21700933.733333334,
            "unit": "ns",
            "range": "± 198882.6421175013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58004791.15384615,
            "unit": "ns",
            "range": "± 363647.809468366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109421555.33333333,
            "unit": "ns",
            "range": "± 715448.9029570045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219371002.7142857,
            "unit": "ns",
            "range": "± 1325157.337225365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403534,
            "unit": "ns",
            "range": "± 77650.60782665815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661969.5217391304,
            "unit": "ns",
            "range": "± 56917.20341375433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2278977.964285714,
            "unit": "ns",
            "range": "± 120036.34562377159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5780524.282352941,
            "unit": "ns",
            "range": "± 311108.05921670696"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48944.38043478261,
            "unit": "ns",
            "range": "± 2780.69933034243"
          }
        ]
      }
    ]
  }
}