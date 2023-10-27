window.BENCHMARK_DATA = {
  "lastUpdate": 1698402481717,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "3cee42e6bd68fb9dc30ef5e7bbbd9b2dea3d1f2b",
          "message": "upgrade: Bencodex to 0.16.0",
          "timestamp": "2023-10-27T19:13:54+09:00",
          "tree_id": "c821710e38ec2b1153db4d6d61e6c3e9764c7d3a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3cee42e6bd68fb9dc30ef5e7bbbd9b2dea3d1f2b"
        },
        "date": 1698402469718,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48991.545454545456,
            "unit": "ns",
            "range": "± 2669.791777618841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5286627.239397322,
            "unit": "ns",
            "range": "± 20564.306498455506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1608407.4154575893,
            "unit": "ns",
            "range": "± 4971.555613670942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144972.1114583334,
            "unit": "ns",
            "range": "± 2087.2839628466472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596127.915625,
            "unit": "ns",
            "range": "± 5673.26286704918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831242.9205729166,
            "unit": "ns",
            "range": "± 1481.5672144133705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756576.8736478365,
            "unit": "ns",
            "range": "± 933.0790594136455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8220936.4,
            "unit": "ns",
            "range": "± 163196.3788370189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22357691.35714286,
            "unit": "ns",
            "range": "± 243417.88702135175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56423277.64285714,
            "unit": "ns",
            "range": "± 772079.5760716745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113758548.93333334,
            "unit": "ns",
            "range": "± 1184650.620745173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223262204.3529412,
            "unit": "ns",
            "range": "± 4460722.547128421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3458204.785714286,
            "unit": "ns",
            "range": "± 96929.51787820121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3520113.7647058824,
            "unit": "ns",
            "range": "± 68152.998758794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253193.242424242,
            "unit": "ns",
            "range": "± 114251.41480552612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4288166.218181818,
            "unit": "ns",
            "range": "± 180053.74348785018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10438492.242424242,
            "unit": "ns",
            "range": "± 328246.80260114785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266495.5,
            "unit": "ns",
            "range": "± 6084.282823922757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258851.97959183675,
            "unit": "ns",
            "range": "± 9926.475178971712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228160.15384615384,
            "unit": "ns",
            "range": "± 2495.271222604664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249793.266666667,
            "unit": "ns",
            "range": "± 67593.6392299777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3910997.2,
            "unit": "ns",
            "range": "± 68518.4921214704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18974.702127659573,
            "unit": "ns",
            "range": "± 1204.5802537553734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83779.95061728395,
            "unit": "ns",
            "range": "± 4427.039241697646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70956.72,
            "unit": "ns",
            "range": "± 1858.0992644814933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80178.4387755102,
            "unit": "ns",
            "range": "± 9121.110908631312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5325.065217391304,
            "unit": "ns",
            "range": "± 542.3616004014868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18520.67948717949,
            "unit": "ns",
            "range": "± 981.8446526367711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340556.2191780822,
            "unit": "ns",
            "range": "± 63257.83636331518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2590872.7333333334,
            "unit": "ns",
            "range": "± 77088.43302155999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2072470.3902439023,
            "unit": "ns",
            "range": "± 109489.44128423854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8592995.205882354,
            "unit": "ns",
            "range": "± 277155.6617449107"
          }
        ]
      }
    ]
  }
}