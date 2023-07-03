window.BENCHMARK_DATA = {
  "lastUpdate": 1688377764332,
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
        "date": 1688377716599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750102.162162162,
            "unit": "ns",
            "range": "± 235609.9513649523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18899611.57142857,
            "unit": "ns",
            "range": "± 441824.3877149123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46937970.5,
            "unit": "ns",
            "range": "± 609032.6517070602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92394817.5,
            "unit": "ns",
            "range": "± 1403913.5405450417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192232032.53333333,
            "unit": "ns",
            "range": "± 2127417.531440907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56947.63978494624,
            "unit": "ns",
            "range": "± 6472.102201306838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314874.3526315789,
            "unit": "ns",
            "range": "± 19993.61697396086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305349.13684210525,
            "unit": "ns",
            "range": "± 21132.122134984067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278722.2083333333,
            "unit": "ns",
            "range": "± 18920.74429932266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3958455.375,
            "unit": "ns",
            "range": "± 75494.16083987335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3673393.2391304346,
            "unit": "ns",
            "range": "± 90730.40083637266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16040.75,
            "unit": "ns",
            "range": "± 1488.9334395319092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81663.17777777778,
            "unit": "ns",
            "range": "± 6929.486992098184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81872.43478260869,
            "unit": "ns",
            "range": "± 9491.024725884361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93510.98901098901,
            "unit": "ns",
            "range": "± 13459.638001979189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5399.133333333333,
            "unit": "ns",
            "range": "± 759.834431994855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15880.785714285714,
            "unit": "ns",
            "range": "± 2507.431064633651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595294,
            "unit": "ns",
            "range": "± 187811.40233658344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3026967.1612903224,
            "unit": "ns",
            "range": "± 226737.0793414934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2009731.6382978724,
            "unit": "ns",
            "range": "± 168045.51703169118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6040764.457894737,
            "unit": "ns",
            "range": "± 368220.96663066826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3126709.590909091,
            "unit": "ns",
            "range": "± 99179.48164954648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447904.225,
            "unit": "ns",
            "range": "± 122433.24566525045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4470355.322580645,
            "unit": "ns",
            "range": "± 136316.72473211962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3792691.066666667,
            "unit": "ns",
            "range": "± 162235.77448727825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6844761.185714286,
            "unit": "ns",
            "range": "± 222787.47793525396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6285660.254166666,
            "unit": "ns",
            "range": "± 50783.81165321725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833195.39765625,
            "unit": "ns",
            "range": "± 14069.48172187027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236821.871875,
            "unit": "ns",
            "range": "± 9813.92337808983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2426291.8627604167,
            "unit": "ns",
            "range": "± 19849.51273084334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835782.1026785715,
            "unit": "ns",
            "range": "± 4775.134006925448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695840.7481770833,
            "unit": "ns",
            "range": "± 4047.6276912433773"
          }
        ]
      }
    ]
  }
}