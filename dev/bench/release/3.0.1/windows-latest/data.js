window.BENCHMARK_DATA = {
  "lastUpdate": 1689913017557,
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
          "id": "9b20587b8e9f203b2a0b339cda774fa6f75846b6",
          "message": "Release 3.0.1",
          "timestamp": "2023-07-21T12:58:34+09:00",
          "tree_id": "d32e848727b58e4299385bc6aefbdc967485163f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9b20587b8e9f203b2a0b339cda774fa6f75846b6"
        },
        "date": 1689912976069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490260.824742268,
            "unit": "ns",
            "range": "± 134222.83908726583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679604.255319149,
            "unit": "ns",
            "range": "± 100626.13533239461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1833943.4782608696,
            "unit": "ns",
            "range": "± 99178.05644433877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5148010.714285715,
            "unit": "ns",
            "range": "± 274313.0240893163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49798.936170212764,
            "unit": "ns",
            "range": "± 3331.165790344826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8594892.592592593,
            "unit": "ns",
            "range": "± 237256.02517424396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21070880,
            "unit": "ns",
            "range": "± 237549.1564166998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57768693.333333336,
            "unit": "ns",
            "range": "± 672265.2075171638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104379042.85714285,
            "unit": "ns",
            "range": "± 995984.8444277002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211039685.7142857,
            "unit": "ns",
            "range": "± 2092409.0484257771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4937499.699519231,
            "unit": "ns",
            "range": "± 16427.424234549326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616052.6627604167,
            "unit": "ns",
            "range": "± 5298.906391793418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1232526.3932291667,
            "unit": "ns",
            "range": "± 4676.898314941997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685787.1844951925,
            "unit": "ns",
            "range": "± 7933.999980920127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838618.8932291666,
            "unit": "ns",
            "range": "± 2256.5270027387746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776564.58984375,
            "unit": "ns",
            "range": "± 1806.278107028923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479473.3333333335,
            "unit": "ns",
            "range": "± 63692.09938296526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3573971.4285714286,
            "unit": "ns",
            "range": "± 135412.49019200556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4365932.258064516,
            "unit": "ns",
            "range": "± 130837.1160058612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3943955.882352941,
            "unit": "ns",
            "range": "± 121062.91925645454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6539770,
            "unit": "ns",
            "range": "± 192002.03554955457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267598.2456140351,
            "unit": "ns",
            "range": "± 10312.847244856259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258501.75438596492,
            "unit": "ns",
            "range": "± 10257.253378325406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246071.71717171717,
            "unit": "ns",
            "range": "± 15962.258039359916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271537.5,
            "unit": "ns",
            "range": "± 82621.45705969284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892030.769230769,
            "unit": "ns",
            "range": "± 50375.7280280789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23056.043956043955,
            "unit": "ns",
            "range": "± 2116.297017129936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96022.68041237113,
            "unit": "ns",
            "range": "± 7367.870920911718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84029.59183673469,
            "unit": "ns",
            "range": "± 6460.0909505530335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104747.42268041238,
            "unit": "ns",
            "range": "± 17011.620371476383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6682.291666666667,
            "unit": "ns",
            "range": "± 1232.7115846284535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21813.541666666668,
            "unit": "ns",
            "range": "± 2394.230776005507"
          }
        ]
      }
    ]
  }
}