window.BENCHMARK_DATA = {
  "lastUpdate": 1678683899750,
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
          "id": "6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T13:44:20+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05"
        },
        "date": 1678683877514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8392055.07142857,
            "unit": "ns",
            "range": "± 299390.6704467521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20992432.852941178,
            "unit": "ns",
            "range": "± 997477.9231447541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51046697.23809524,
            "unit": "ns",
            "range": "± 1132060.2898011177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 119614131.8478261,
            "unit": "ns",
            "range": "± 4566327.4965881435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203945876.46666667,
            "unit": "ns",
            "range": "± 3080223.6724636196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67542.14948453609,
            "unit": "ns",
            "range": "± 12065.646566320394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203721.91578947369,
            "unit": "ns",
            "range": "± 20484.294112580632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201472.71348314607,
            "unit": "ns",
            "range": "± 13436.014907763176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167526.84210526315,
            "unit": "ns",
            "range": "± 3631.1243784070502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12434013.65116279,
            "unit": "ns",
            "range": "± 451211.3921178178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10397349.279069768,
            "unit": "ns",
            "range": "± 885976.7138808665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23098.630434782608,
            "unit": "ns",
            "range": "± 4283.363788593862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61800.717391304344,
            "unit": "ns",
            "range": "± 8274.722091978341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56057.666666666664,
            "unit": "ns",
            "range": "± 4575.208632290499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123973.0306122449,
            "unit": "ns",
            "range": "± 19414.53958514538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6970.278350515464,
            "unit": "ns",
            "range": "± 907.8096893791034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17646.916666666668,
            "unit": "ns",
            "range": "± 2675.4881174594416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762428.5454545454,
            "unit": "ns",
            "range": "± 40251.374373136714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747096.361111111,
            "unit": "ns",
            "range": "± 90460.16252098497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2550275.3711340204,
            "unit": "ns",
            "range": "± 216998.49433383747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5862223.96875,
            "unit": "ns",
            "range": "± 177390.52450664024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228341.34375,
            "unit": "ns",
            "range": "± 147873.25980097172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5083819.095959596,
            "unit": "ns",
            "range": "± 297967.36721044616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24570324.933333334,
            "unit": "ns",
            "range": "± 1238322.6629213637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6185873.74590164,
            "unit": "ns",
            "range": "± 271111.44549991837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27934372.275862068,
            "unit": "ns",
            "range": "± 810310.005495908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6754301.480815972,
            "unit": "ns",
            "range": "± 256575.7751185597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2184606.726953125,
            "unit": "ns",
            "range": "± 49866.37555030613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336481.566343246,
            "unit": "ns",
            "range": "± 40506.66787779476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123082.9709725217,
            "unit": "ns",
            "range": "± 135753.11138864982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012644.7243303572,
            "unit": "ns",
            "range": "± 23972.76596463485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785113.2844551282,
            "unit": "ns",
            "range": "± 40406.47122336573"
          }
        ]
      }
    ]
  }
}