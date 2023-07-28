window.BENCHMARK_DATA = {
  "lastUpdate": 1690503682796,
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
          "id": "3010db94c47f76c3e46996cff77d69f8975f49a6",
          "message": "rename: Rename IAccountStateDelta as IAccount\n\nCo-authored-by: Say Cheong <greymistcube@gmail.com>\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-07-28T08:57:23+09:00",
          "tree_id": "a6bf1287a592e819b42e563dee9a79f3d2376684",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3010db94c47f76c3e46996cff77d69f8975f49a6"
        },
        "date": 1690503658735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9172517.479591837,
            "unit": "ns",
            "range": "± 531407.6088092796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21518768.106060605,
            "unit": "ns",
            "range": "± 671298.9764806243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56204418.96666667,
            "unit": "ns",
            "range": "± 2481502.830099405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114439838.4,
            "unit": "ns",
            "range": "± 2989458.325905715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226516612.83333334,
            "unit": "ns",
            "range": "± 3498861.8753375392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71143.68085106384,
            "unit": "ns",
            "range": "± 11709.7553781165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337577.05263157893,
            "unit": "ns",
            "range": "± 35970.30634599683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340331.2252747253,
            "unit": "ns",
            "range": "± 33748.054620168994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316467.5,
            "unit": "ns",
            "range": "± 10419.740989377533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276427.666666667,
            "unit": "ns",
            "range": "± 142337.22978937833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3820150.972222222,
            "unit": "ns",
            "range": "± 127451.49892331281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23078.29775280899,
            "unit": "ns",
            "range": "± 2812.8508838889584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113208.5425531915,
            "unit": "ns",
            "range": "± 15020.439726188519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118277.08695652174,
            "unit": "ns",
            "range": "± 11887.441112415518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124057.48958333333,
            "unit": "ns",
            "range": "± 19343.30523952316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8075.152631578947,
            "unit": "ns",
            "range": "± 1036.8360810188733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21481.392473118278,
            "unit": "ns",
            "range": "± 3312.744200883341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718829.9623655914,
            "unit": "ns",
            "range": "± 235225.6471475181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3411463.585106383,
            "unit": "ns",
            "range": "± 380768.72906884353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2454469.6082474226,
            "unit": "ns",
            "range": "± 371997.6276882678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6526773.270833333,
            "unit": "ns",
            "range": "± 724592.28248643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3709234.5454545454,
            "unit": "ns",
            "range": "± 388550.23685066844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4365774.769662921,
            "unit": "ns",
            "range": "± 762612.4961205539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4683880.523809524,
            "unit": "ns",
            "range": "± 214490.5927850583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4178441.287878788,
            "unit": "ns",
            "range": "± 345013.22398679244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7648512.636363637,
            "unit": "ns",
            "range": "± 419373.38201140316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7668645.999914148,
            "unit": "ns",
            "range": "± 429407.07428718056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2024356.5846354167,
            "unit": "ns",
            "range": "± 95369.89593554423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1471422.6550021702,
            "unit": "ns",
            "range": "± 47881.43405462408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3079871.570546875,
            "unit": "ns",
            "range": "± 219516.52637875458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849023.0707720588,
            "unit": "ns",
            "range": "± 16346.82094444354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829197.1385416667,
            "unit": "ns",
            "range": "± 12359.467477198803"
          }
        ]
      }
    ]
  }
}