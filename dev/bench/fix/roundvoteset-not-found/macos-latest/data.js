window.BENCHMARK_DATA = {
  "lastUpdate": 1688630637146,
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
        "date": 1688630611095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8274593.5,
            "unit": "ns",
            "range": "± 323226.15618014237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20153376.588235293,
            "unit": "ns",
            "range": "± 342757.8398226397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50578120.190476194,
            "unit": "ns",
            "range": "± 1132485.646185267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99880035.64285715,
            "unit": "ns",
            "range": "± 1696820.1814395182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208601402.53333333,
            "unit": "ns",
            "range": "± 1617309.633954482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56195.684782608696,
            "unit": "ns",
            "range": "± 6036.8555400667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296580.42045454547,
            "unit": "ns",
            "range": "± 16224.10417817897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290548.4534883721,
            "unit": "ns",
            "range": "± 15523.045687286238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275462.1701030928,
            "unit": "ns",
            "range": "± 22439.6164552977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4049977.588235294,
            "unit": "ns",
            "range": "± 81787.96479545358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3707570.46,
            "unit": "ns",
            "range": "± 98650.33072950135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16661.615384615383,
            "unit": "ns",
            "range": "± 1660.908625282698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85908.54736842106,
            "unit": "ns",
            "range": "± 8176.77557367859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90912.95833333333,
            "unit": "ns",
            "range": "± 13682.645556683277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102198.24468085106,
            "unit": "ns",
            "range": "± 14121.501067015648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5202.631578947368,
            "unit": "ns",
            "range": "± 774.409837789075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15557.04945054945,
            "unit": "ns",
            "range": "± 1417.9342976765433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537950.202020202,
            "unit": "ns",
            "range": "± 161325.70818378445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2832231.697368421,
            "unit": "ns",
            "range": "± 143093.9824230234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2045355.293478261,
            "unit": "ns",
            "range": "± 159742.16373072722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5959471.15,
            "unit": "ns",
            "range": "± 311197.01257051405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324699.9215686275,
            "unit": "ns",
            "range": "± 134917.00679244898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374947.37704918,
            "unit": "ns",
            "range": "± 146447.5622395452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4461719.65625,
            "unit": "ns",
            "range": "± 206252.13348524008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821240.094117647,
            "unit": "ns",
            "range": "± 204574.8909918428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6672707.047619048,
            "unit": "ns",
            "range": "± 157900.5713420557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6382113.8,
            "unit": "ns",
            "range": "± 42112.56633531755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990007.130580357,
            "unit": "ns",
            "range": "± 26958.121351386548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293244.8604910714,
            "unit": "ns",
            "range": "± 11187.049470889608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2789512.939453125,
            "unit": "ns",
            "range": "± 18950.01024883774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908229.4229817708,
            "unit": "ns",
            "range": "± 6744.68943407862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760732.2822265625,
            "unit": "ns",
            "range": "± 8552.221220648691"
          }
        ]
      }
    ]
  }
}