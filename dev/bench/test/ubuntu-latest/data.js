window.BENCHMARK_DATA = {
  "lastUpdate": 1688377720453,
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
          "id": "de7148b69c5ebe792dc5d45c9824d576eb9b7cf6",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:33:37+09:00",
          "tree_id": "6775ed3cb275103fb17539f70b1aeaf076eec7c5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/de7148b69c5ebe792dc5d45c9824d576eb9b7cf6"
        },
        "date": 1688377708141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9265337.266666668,
            "unit": "ns",
            "range": "± 32209.732800299145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23132851.42857143,
            "unit": "ns",
            "range": "± 222384.9793892475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58655037.4,
            "unit": "ns",
            "range": "± 206374.59810043065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116455189.86666666,
            "unit": "ns",
            "range": "± 257939.94588936694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233819781.5,
            "unit": "ns",
            "range": "± 294110.99507126166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50562.86315789474,
            "unit": "ns",
            "range": "± 4363.443710303815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306627.5294117647,
            "unit": "ns",
            "range": "± 6063.6755985710415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287074.037037037,
            "unit": "ns",
            "range": "± 7916.925318491737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272121.6818181818,
            "unit": "ns",
            "range": "± 14846.321627750363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4679253.733333333,
            "unit": "ns",
            "range": "± 43896.46278048034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4301312.466666667,
            "unit": "ns",
            "range": "± 36103.41274305295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22600.229166666668,
            "unit": "ns",
            "range": "± 2588.5606993652373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100515.40404040404,
            "unit": "ns",
            "range": "± 9424.008574412257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86866.22471910113,
            "unit": "ns",
            "range": "± 7364.08158001453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109363.59183673469,
            "unit": "ns",
            "range": "± 16482.658583372257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7824.591836734694,
            "unit": "ns",
            "range": "± 1525.0091893367528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20828.302083333332,
            "unit": "ns",
            "range": "± 1690.02871429852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571656.0638297873,
            "unit": "ns",
            "range": "± 93137.31650849986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944643.3571428573,
            "unit": "ns",
            "range": "± 107444.62884232259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2007066.366197183,
            "unit": "ns",
            "range": "± 92306.8036305697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5756141.44,
            "unit": "ns",
            "range": "± 375779.75524066464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6177307.429166666,
            "unit": "ns",
            "range": "± 43856.67068595283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1917040.0782552084,
            "unit": "ns",
            "range": "± 1751.7500220389727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391836.8645368305,
            "unit": "ns",
            "range": "± 1615.4474039133254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653462.9342447915,
            "unit": "ns",
            "range": "± 2096.3884505401343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835032.2919921875,
            "unit": "ns",
            "range": "± 700.3899180448261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777310.6835239956,
            "unit": "ns",
            "range": "± 400.93307900693213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3825229.933333333,
            "unit": "ns",
            "range": "± 34374.10920085612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4060207.6153846155,
            "unit": "ns",
            "range": "± 35084.473340635224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4683188.733333333,
            "unit": "ns",
            "range": "± 41857.64812085748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4321218.645833333,
            "unit": "ns",
            "range": "± 162036.38846672676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6787444.5,
            "unit": "ns",
            "range": "± 161505.31481502397"
          }
        ]
      }
    ]
  }
}