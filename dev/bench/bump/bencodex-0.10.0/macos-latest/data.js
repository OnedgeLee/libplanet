window.BENCHMARK_DATA = {
  "lastUpdate": 1681977138169,
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
          "id": "20680e31aeee6be1cfcf2a421141eef40ff3b5da",
          "message": "bump: bencodex 0.10.0",
          "timestamp": "2023-04-20T16:32:13+09:00",
          "tree_id": "2098680d696851b4e5c2dbbd2b802a56b919da11",
          "url": "https://github.com/OnedgeLee/libplanet/commit/20680e31aeee6be1cfcf2a421141eef40ff3b5da"
        },
        "date": 1681977110756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8703996.752941176,
            "unit": "ns",
            "range": "± 768010.6560608373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21769587.906976745,
            "unit": "ns",
            "range": "± 3041400.6093329964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52097628.07462686,
            "unit": "ns",
            "range": "± 2350243.9210010273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114138203.99425288,
            "unit": "ns",
            "range": "± 12993998.020617304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225283618.25274727,
            "unit": "ns",
            "range": "± 16950655.578220602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69735.35106382979,
            "unit": "ns",
            "range": "± 9126.35540289469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389812.70408163266,
            "unit": "ns",
            "range": "± 28069.0671641975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340957.42631578946,
            "unit": "ns",
            "range": "± 35501.97698428054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317489.67346938775,
            "unit": "ns",
            "range": "± 33805.55872183407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5507185.4,
            "unit": "ns",
            "range": "± 159946.16561132536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3921073.875,
            "unit": "ns",
            "range": "± 192908.43485165114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19505.275280898877,
            "unit": "ns",
            "range": "± 3913.5034227449664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111693.64285714286,
            "unit": "ns",
            "range": "± 18461.917301248654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125274.46808510639,
            "unit": "ns",
            "range": "± 13378.83596902463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127291.72043010753,
            "unit": "ns",
            "range": "± 15738.085667083828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8145.391304347826,
            "unit": "ns",
            "range": "± 1551.6472031362277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20250.227272727272,
            "unit": "ns",
            "range": "± 4088.0243091683174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1795729.0054945054,
            "unit": "ns",
            "range": "± 229849.62825070237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3207513.6411764706,
            "unit": "ns",
            "range": "± 259614.5691693816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2856981.5224719103,
            "unit": "ns",
            "range": "± 475476.4566122543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10168864.70212766,
            "unit": "ns",
            "range": "± 3726553.575199072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4201770.064705882,
            "unit": "ns",
            "range": "± 292746.71187098336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976872.4891304346,
            "unit": "ns",
            "range": "± 615285.6668275634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4763080.8369565215,
            "unit": "ns",
            "range": "± 334119.3456958544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4536100.222222222,
            "unit": "ns",
            "range": "± 315365.9358644563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8453355.878787879,
            "unit": "ns",
            "range": "± 392989.0360339298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7129521.048883929,
            "unit": "ns",
            "range": "± 229208.64331522104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064600.7621694712,
            "unit": "ns",
            "range": "± 30997.225644007318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367227.2520878233,
            "unit": "ns",
            "range": "± 59811.469537664154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652175.138077446,
            "unit": "ns",
            "range": "± 92021.86114657635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900572.6856219952,
            "unit": "ns",
            "range": "± 13761.862117612489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810574.1142578125,
            "unit": "ns",
            "range": "± 6164.685755548059"
          }
        ]
      }
    ]
  }
}