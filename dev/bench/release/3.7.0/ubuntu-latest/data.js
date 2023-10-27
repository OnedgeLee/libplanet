window.BENCHMARK_DATA = {
  "lastUpdate": 1698405909893,
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
          "id": "06c8b9b4fd62d1ca86f0bca9a50e6988b55bb4e0",
          "message": "Release 3.7.0",
          "timestamp": "2023-10-27T20:07:09+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/06c8b9b4fd62d1ca86f0bca9a50e6988b55bb4e0"
        },
        "date": 1698405897385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52815.84782608696,
            "unit": "ns",
            "range": "± 5989.031083342945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5232069.14453125,
            "unit": "ns",
            "range": "± 248548.7889923076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568315.1971354166,
            "unit": "ns",
            "range": "± 21881.737155331502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138765.8003645833,
            "unit": "ns",
            "range": "± 56884.50410365441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850795.2804129464,
            "unit": "ns",
            "range": "± 26326.500637949972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798334.5628797743,
            "unit": "ns",
            "range": "± 16631.240838638958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751631.2176649305,
            "unit": "ns",
            "range": "± 31305.919157271383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7829527.791666667,
            "unit": "ns",
            "range": "± 557290.5822976758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20950063.01492537,
            "unit": "ns",
            "range": "± 984970.9730227786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54894235.75,
            "unit": "ns",
            "range": "± 4068729.4566119905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106838364.2236842,
            "unit": "ns",
            "range": "± 5431484.867757397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214174242.05,
            "unit": "ns",
            "range": "± 13421721.873314321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3218610.9595959596,
            "unit": "ns",
            "range": "± 332030.5865806034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3391831.31,
            "unit": "ns",
            "range": "± 378842.869427037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4174466.36,
            "unit": "ns",
            "range": "± 402977.8432942577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452387.18,
            "unit": "ns",
            "range": "± 449104.6647260464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11688425.724489795,
            "unit": "ns",
            "range": "± 1395335.3482943329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279592.10101010103,
            "unit": "ns",
            "range": "± 34408.840750685275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268425.0408163265,
            "unit": "ns",
            "range": "± 35395.918465609706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234671.71,
            "unit": "ns",
            "range": "± 33976.41987082047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4119589.42,
            "unit": "ns",
            "range": "± 403021.3495692879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3912742.64,
            "unit": "ns",
            "range": "± 388677.4216753429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19616.532608695652,
            "unit": "ns",
            "range": "± 1842.3707639593129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89899.69072164949,
            "unit": "ns",
            "range": "± 12000.532512803358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75099.04,
            "unit": "ns",
            "range": "± 12296.315011704546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79797.0306122449,
            "unit": "ns",
            "range": "± 12966.712604277916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4970.15625,
            "unit": "ns",
            "range": "± 638.0804491123935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18322.978260869564,
            "unit": "ns",
            "range": "± 1884.2201346991635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410829.2604166667,
            "unit": "ns",
            "range": "± 208384.57067331034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2632219.19,
            "unit": "ns",
            "range": "± 316180.93004109286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042324.74,
            "unit": "ns",
            "range": "± 256632.5190515021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9373224.56122449,
            "unit": "ns",
            "range": "± 1135433.5481303758"
          }
        ]
      }
    ]
  }
}