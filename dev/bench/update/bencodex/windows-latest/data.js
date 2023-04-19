window.BENCHMARK_DATA = {
  "lastUpdate": 1681886747407,
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
          "id": "45ac42e9e3775906656a12287367ce0ceee11123",
          "message": "update: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:30:06+09:00",
          "tree_id": "dc212b25fb943314b7110477bccabe5faf5dfa8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45ac42e9e3775906656a12287367ce0ceee11123"
        },
        "date": 1681886712824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420511.111111111,
            "unit": "ns",
            "range": "± 131246.72504282583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510892.3076923075,
            "unit": "ns",
            "range": "± 90780.38322723616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2234271.5789473685,
            "unit": "ns",
            "range": "± 141956.99803121225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5694896.96969697,
            "unit": "ns",
            "range": "± 356112.84741323837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51574.21052631579,
            "unit": "ns",
            "range": "± 4407.144001854206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7311740,
            "unit": "ns",
            "range": "± 259211.98907853643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19595840,
            "unit": "ns",
            "range": "± 295144.884033975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49260571.428571425,
            "unit": "ns",
            "range": "± 544144.6731106768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99521753.33333333,
            "unit": "ns",
            "range": "± 1224097.3653306847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201405935.7142857,
            "unit": "ns",
            "range": "± 1548450.6126383946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4791474.098557692,
            "unit": "ns",
            "range": "± 17099.135193983828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536638.1138392857,
            "unit": "ns",
            "range": "± 4399.644209646723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1189487.9752604167,
            "unit": "ns",
            "range": "± 6122.698193529307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606970.5829326925,
            "unit": "ns",
            "range": "± 8664.757819212728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849529.3359375,
            "unit": "ns",
            "range": "± 3772.119579099408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774723.5877403846,
            "unit": "ns",
            "range": "± 1998.2474399469693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3277640,
            "unit": "ns",
            "range": "± 86690.24358792246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3367329.411764706,
            "unit": "ns",
            "range": "± 106786.5260182081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3992221.212121212,
            "unit": "ns",
            "range": "± 113970.92216212366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423955.555555556,
            "unit": "ns",
            "range": "± 93111.0862308295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6953294.736842105,
            "unit": "ns",
            "range": "± 153461.40837242804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322003.5714285714,
            "unit": "ns",
            "range": "± 9077.38264376773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269163.63636363635,
            "unit": "ns",
            "range": "± 12552.188118946695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218363.04347826086,
            "unit": "ns",
            "range": "± 8395.272709372477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5305369.230769231,
            "unit": "ns",
            "range": "± 39570.28313889487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641660.8695652173,
            "unit": "ns",
            "range": "± 90194.69213938576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22536.082474226805,
            "unit": "ns",
            "range": "± 2503.3804464750883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95161.70212765958,
            "unit": "ns",
            "range": "± 6418.238568245975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93462,
            "unit": "ns",
            "range": "± 10735.133295338575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120589.79591836735,
            "unit": "ns",
            "range": "± 16199.474917008492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8396.907216494845,
            "unit": "ns",
            "range": "± 1239.829760512122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21926.041666666668,
            "unit": "ns",
            "range": "± 2346.5201465671703"
          }
        ]
      }
    ]
  }
}