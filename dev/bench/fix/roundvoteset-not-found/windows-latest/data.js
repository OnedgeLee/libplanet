window.BENCHMARK_DATA = {
  "lastUpdate": 1688630539748,
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
          "id": "e6ef25fd9741c17342918f27320691c092cd7339",
          "message": "fix: Catch when RoundVoteSet not found\n\n[skip changelog]",
          "timestamp": "2023-07-06T16:45:33+09:00",
          "tree_id": "400c0a03f685ad4839ecb3ca39f1b1f7e21b0268",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6ef25fd9741c17342918f27320691c092cd7339"
        },
        "date": 1688630505145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299504,
            "unit": "ns",
            "range": "± 102571.31829792252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2375267.5,
            "unit": "ns",
            "range": "± 82160.7723089934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672117.2043010753,
            "unit": "ns",
            "range": "± 104303.80128099037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4367382.857142857,
            "unit": "ns",
            "range": "± 137819.40332468832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42574.242424242424,
            "unit": "ns",
            "range": "± 2014.4142577595107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6773946.666666667,
            "unit": "ns",
            "range": "± 44192.9028992967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17235814.285714287,
            "unit": "ns",
            "range": "± 96748.41169153717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43878806.666666664,
            "unit": "ns",
            "range": "± 360156.95480614854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88895060,
            "unit": "ns",
            "range": "± 1067673.3320636982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176014880,
            "unit": "ns",
            "range": "± 1798334.844555612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789019.791666667,
            "unit": "ns",
            "range": "± 12311.319353216773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500067.16796875,
            "unit": "ns",
            "range": "± 3988.7496068523656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145177.94921875,
            "unit": "ns",
            "range": "± 1190.1232086181437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650937.4869791665,
            "unit": "ns",
            "range": "± 21745.62588803802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804858.5379464285,
            "unit": "ns",
            "range": "± 1633.6263299214663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744510.9514508928,
            "unit": "ns",
            "range": "± 597.4082256234359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2920491.4285714286,
            "unit": "ns",
            "range": "± 82969.88600205063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3082109.523809524,
            "unit": "ns",
            "range": "± 72018.73995538872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3850307.6923076925,
            "unit": "ns",
            "range": "± 49323.7850253888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3351420,
            "unit": "ns",
            "range": "± 82339.20338327973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5680857.142857143,
            "unit": "ns",
            "range": "± 113668.02792090911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243882.14285714287,
            "unit": "ns",
            "range": "± 10362.57439307183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230863.46153846153,
            "unit": "ns",
            "range": "± 9545.536455023257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202288.88888888888,
            "unit": "ns",
            "range": "± 4225.676261769357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3744521.4285714286,
            "unit": "ns",
            "range": "± 26195.101672800425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3324219.230769231,
            "unit": "ns",
            "range": "± 19848.819638095385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13885.555555555555,
            "unit": "ns",
            "range": "± 1131.426574013762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73942.85714285714,
            "unit": "ns",
            "range": "± 2917.9485881580645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63957.142857142855,
            "unit": "ns",
            "range": "± 1044.7408848530417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72176.8115942029,
            "unit": "ns",
            "range": "± 2764.807456732706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3825.5102040816328,
            "unit": "ns",
            "range": "± 653.8247857111775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15321.875,
            "unit": "ns",
            "range": "± 1298.5986880601638"
          }
        ]
      }
    ]
  }
}