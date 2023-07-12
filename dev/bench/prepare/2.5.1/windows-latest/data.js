window.BENCHMARK_DATA = {
  "lastUpdate": 1689148001521,
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
          "id": "12473199c3b5e28d785ce1d541b557c92694602e",
          "message": "Prepare 2.5.1",
          "timestamp": "2023-07-12T16:29:45+09:00",
          "tree_id": "75db858d936a360210595e394dd591c0661c7cff",
          "url": "https://github.com/OnedgeLee/libplanet/commit/12473199c3b5e28d785ce1d541b557c92694602e"
        },
        "date": 1689147966880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354768,
            "unit": "ns",
            "range": "± 105203.3028248283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2584350,
            "unit": "ns",
            "range": "± 100614.3087758137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1826140.8602150537,
            "unit": "ns",
            "range": "± 120434.37075902191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5029908.888888889,
            "unit": "ns",
            "range": "± 278953.2890076577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48108.51063829787,
            "unit": "ns",
            "range": "± 3188.610766174696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7114541.666666667,
            "unit": "ns",
            "range": "± 75256.23451471202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19982175,
            "unit": "ns",
            "range": "± 372569.6096033599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50007535.294117644,
            "unit": "ns",
            "range": "± 990387.0638172082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99142835.29411764,
            "unit": "ns",
            "range": "± 1905953.9291196077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200730860,
            "unit": "ns",
            "range": "± 1895825.8546456362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876687.447916667,
            "unit": "ns",
            "range": "± 20751.31893194098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549270.4036458333,
            "unit": "ns",
            "range": "± 7675.374013297216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190243.4375,
            "unit": "ns",
            "range": "± 7062.697541571542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656564.1145833335,
            "unit": "ns",
            "range": "± 8476.712385096147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826469.7721354166,
            "unit": "ns",
            "range": "± 2797.4340120075976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792991.3541666666,
            "unit": "ns",
            "range": "± 2269.830268910587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3090962.962962963,
            "unit": "ns",
            "range": "± 75216.91783996955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333474.3243243243,
            "unit": "ns",
            "range": "± 112355.66149362332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4121709.5890410957,
            "unit": "ns",
            "range": "± 203555.306546992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3692527.272727273,
            "unit": "ns",
            "range": "± 137814.1677052689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6063867.857142857,
            "unit": "ns",
            "range": "± 173809.65760486262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270803.3898305085,
            "unit": "ns",
            "range": "± 11894.173683836725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255830,
            "unit": "ns",
            "range": "± 8769.533508044653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229763.33333333334,
            "unit": "ns",
            "range": "± 12607.412212529152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4090913.3333333335,
            "unit": "ns",
            "range": "± 59718.82769238175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3758200,
            "unit": "ns",
            "range": "± 94183.59247187957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20703.157894736843,
            "unit": "ns",
            "range": "± 1785.7266612913033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93183.87096774194,
            "unit": "ns",
            "range": "± 5534.914679099293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75160.63829787234,
            "unit": "ns",
            "range": "± 4903.043120987151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97218.88888888889,
            "unit": "ns",
            "range": "± 10579.754828667184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5523.711340206186,
            "unit": "ns",
            "range": "± 856.5645037829278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17940.625,
            "unit": "ns",
            "range": "± 2062.220475476297"
          }
        ]
      }
    ]
  }
}