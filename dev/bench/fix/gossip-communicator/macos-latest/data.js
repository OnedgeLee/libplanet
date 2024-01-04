window.BENCHMARK_DATA = {
  "lastUpdate": 1704340116714,
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
          "id": "2eff7abe8901207e17ceb653575dd32a3f07c7a7",
          "message": "fix: Fix GossipConsensusMessageCommunicator",
          "timestamp": "2024-01-04T12:29:54+09:00",
          "tree_id": "233a0932b362fbd8924c78581d9802109b20c44d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2eff7abe8901207e17ceb653575dd32a3f07c7a7"
        },
        "date": 1704340082912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8079080.614285714,
            "unit": "ns",
            "range": "± 263752.769465557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20909578.189655174,
            "unit": "ns",
            "range": "± 603722.8988470563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51799172.4117647,
            "unit": "ns",
            "range": "± 1668676.3140323206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104812639.12727273,
            "unit": "ns",
            "range": "± 4436395.684557746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227417114.6818182,
            "unit": "ns",
            "range": "± 7163682.528801159"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73731.97126436782,
            "unit": "ns",
            "range": "± 6908.151908213609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340727.05555555556,
            "unit": "ns",
            "range": "± 36431.68463262489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344926.11855670105,
            "unit": "ns",
            "range": "± 47947.73556358947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324018.93684210523,
            "unit": "ns",
            "range": "± 31740.348916424886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4598482.262626262,
            "unit": "ns",
            "range": "± 287308.9131713916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961404.2474226803,
            "unit": "ns",
            "range": "± 290688.8738948766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21465.887640449437,
            "unit": "ns",
            "range": "± 1687.0306043338817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108022.77659574468,
            "unit": "ns",
            "range": "± 13408.119612219134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105911.23529411765,
            "unit": "ns",
            "range": "± 5724.3982604268185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119505.0625,
            "unit": "ns",
            "range": "± 21412.39815021711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7792.578651685393,
            "unit": "ns",
            "range": "± 1091.532786172303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24449.628865979383,
            "unit": "ns",
            "range": "± 4356.110864156781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532466.2857142857,
            "unit": "ns",
            "range": "± 157187.62860693637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775601.106060606,
            "unit": "ns",
            "range": "± 129078.65263937438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2639995.398989899,
            "unit": "ns",
            "range": "± 280288.00271584705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 29067429.25,
            "unit": "ns",
            "range": "± 3793236.275576364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300850.532608696,
            "unit": "ns",
            "range": "± 222703.8029986822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448185.5674157306,
            "unit": "ns",
            "range": "± 191081.22008691618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4406140.14893617,
            "unit": "ns",
            "range": "± 169474.13964647267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4564140.959183673,
            "unit": "ns",
            "range": "± 316156.69813790475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32036896.21,
            "unit": "ns",
            "range": "± 4310488.9855124615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132522.921415441,
            "unit": "ns",
            "range": "± 121364.01650593354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947321.6102864584,
            "unit": "ns",
            "range": "± 15823.915078129816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121974.4848958333,
            "unit": "ns",
            "range": "± 12099.296924306036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2944219.0920758927,
            "unit": "ns",
            "range": "± 51400.50861462368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907993.7646484375,
            "unit": "ns",
            "range": "± 18787.500617339683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874400.7850260417,
            "unit": "ns",
            "range": "± 14060.253114031932"
          }
        ]
      }
    ]
  }
}