window.BENCHMARK_DATA = {
  "lastUpdate": 1700450408240,
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
          "id": "95fc6b0769b298364917360c5cec98ffd7e3b245",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:06:59+09:00",
          "tree_id": "c9fc9a8bfa29a6b3372b78366db598670ca40ec6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/95fc6b0769b298364917360c5cec98ffd7e3b245"
        },
        "date": 1700450381562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005167.0103092784,
            "unit": "ns",
            "range": "± 98313.26707864497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1714524.2424242424,
            "unit": "ns",
            "range": "± 73446.78881938127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545859,
            "unit": "ns",
            "range": "± 171514.08287733264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5754883.695652174,
            "unit": "ns",
            "range": "± 352571.28849001694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33453.333333333336,
            "unit": "ns",
            "range": "± 1683.0902509351042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4966046.153846154,
            "unit": "ns",
            "range": "± 13351.817316044495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12818464.285714285,
            "unit": "ns",
            "range": "± 110876.58840865757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31557300,
            "unit": "ns",
            "range": "± 225071.57408597483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64405307.14285714,
            "unit": "ns",
            "range": "± 599444.1238659051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126226328.57142857,
            "unit": "ns",
            "range": "± 443572.7369519378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3332159.765625,
            "unit": "ns",
            "range": "± 9241.939675516718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1021316.748046875,
            "unit": "ns",
            "range": "± 1576.7618255583066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719772.8450520834,
            "unit": "ns",
            "range": "± 1540.2000482150402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903476.674107143,
            "unit": "ns",
            "range": "± 3835.7428012021905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613658.4244791666,
            "unit": "ns",
            "range": "± 1682.8261624066802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555769.6484375,
            "unit": "ns",
            "range": "± 2346.2399975921808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156071.4285714286,
            "unit": "ns",
            "range": "± 78278.70559180778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259564.285714286,
            "unit": "ns",
            "range": "± 28959.69632073187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2715944,
            "unit": "ns",
            "range": "± 70265.2775795651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2710490.425531915,
            "unit": "ns",
            "range": "± 163854.705550374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6385837.037037037,
            "unit": "ns",
            "range": "± 174114.53159906017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164259.55056179775,
            "unit": "ns",
            "range": "± 8797.581267561345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155548.5294117647,
            "unit": "ns",
            "range": "± 5603.103954460882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137784,
            "unit": "ns",
            "range": "± 2796.6765991083057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2570160,
            "unit": "ns",
            "range": "± 30611.05775929439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2421506.6666666665,
            "unit": "ns",
            "range": "± 31991.16991266422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9551.578947368422,
            "unit": "ns",
            "range": "± 1394.355121124956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50388.76404494382,
            "unit": "ns",
            "range": "± 3682.527485617576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42812.5,
            "unit": "ns",
            "range": "± 1272.982274412233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46195.555555555555,
            "unit": "ns",
            "range": "± 5257.8653999788385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2176.530612244898,
            "unit": "ns",
            "range": "± 355.16832669924673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9221.59090909091,
            "unit": "ns",
            "range": "± 1090.7604500790426"
          }
        ]
      }
    ]
  }
}