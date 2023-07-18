window.BENCHMARK_DATA = {
  "lastUpdate": 1689672485525,
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
          "id": "45dee65124543713e956792c50e6e862fe67662c",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T18:09:27+09:00",
          "tree_id": "66f7ec611cd49e0650ce17afce73cb20917c79b2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45dee65124543713e956792c50e6e862fe67662c"
        },
        "date": 1689672431150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8933321,
            "unit": "ns",
            "range": "± 104219.25120998149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23513723.3,
            "unit": "ns",
            "range": "± 226361.35739097724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57872278.2,
            "unit": "ns",
            "range": "± 422132.06195356854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116602064.57142857,
            "unit": "ns",
            "range": "± 676334.0800758969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234041272.15384614,
            "unit": "ns",
            "range": "± 2287446.434370134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68636.20224719102,
            "unit": "ns",
            "range": "± 10279.19974575729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385853.06862745096,
            "unit": "ns",
            "range": "± 13856.123884051993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358281.1403508772,
            "unit": "ns",
            "range": "± 12707.14358489321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343910.64285714284,
            "unit": "ns",
            "range": "± 16765.417622780904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4790982.557142857,
            "unit": "ns",
            "range": "± 153572.74629575445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4549324.4,
            "unit": "ns",
            "range": "± 64354.072234119616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20944.010638297874,
            "unit": "ns",
            "range": "± 1702.465141794508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101573.59375,
            "unit": "ns",
            "range": "± 6281.982807292489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104579.0101010101,
            "unit": "ns",
            "range": "± 8852.2213383052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122531.53684210527,
            "unit": "ns",
            "range": "± 14062.871555988271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6556.215053763441,
            "unit": "ns",
            "range": "± 849.0588632416376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19913.441860465115,
            "unit": "ns",
            "range": "± 2029.896471452503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1724621.1538461538,
            "unit": "ns",
            "range": "± 234377.3011052394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3484453.5,
            "unit": "ns",
            "range": "± 529184.3517475261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276883.727272727,
            "unit": "ns",
            "range": "± 291335.6426447597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6549109.956521739,
            "unit": "ns",
            "range": "± 540748.0516608738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3898712.714285714,
            "unit": "ns",
            "range": "± 56937.439417755246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3979078.2181818183,
            "unit": "ns",
            "range": "± 168401.62173866015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5144689.82,
            "unit": "ns",
            "range": "± 202786.74496257876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4634001.935897436,
            "unit": "ns",
            "range": "± 160858.336849179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8569040.395833334,
            "unit": "ns",
            "range": "± 290928.805071022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6963083.9375,
            "unit": "ns",
            "range": "± 73669.00557546219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198843.5950520835,
            "unit": "ns",
            "range": "± 19473.943122371453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1441081.600390625,
            "unit": "ns",
            "range": "± 7975.151283667136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087396.5807291665,
            "unit": "ns",
            "range": "± 17101.987094870245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026963.0616629465,
            "unit": "ns",
            "range": "± 8624.637347132653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931756.4904597356,
            "unit": "ns",
            "range": "± 5616.546762336627"
          }
        ]
      }
    ]
  }
}