window.BENCHMARK_DATA = {
  "lastUpdate": 1688475533992,
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
          "id": "0b225df110bba031ea1aa7b97806a03648949425",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-04T21:31:23+09:00",
          "tree_id": "7e2b739e9dfc5011a4fcf0809562b554ec8e6f8b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0b225df110bba031ea1aa7b97806a03648949425"
        },
        "date": 1688475489820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742580,
            "unit": "ns",
            "range": "± 291474.0447928062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3123809.375,
            "unit": "ns",
            "range": "± 357007.7513763016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101129.8969072164,
            "unit": "ns",
            "range": "± 222778.72671337117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6458416.4948453605,
            "unit": "ns",
            "range": "± 678935.725922137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66256.45161290323,
            "unit": "ns",
            "range": "± 12790.585927120237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10282614.43298969,
            "unit": "ns",
            "range": "± 922921.3493473784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26443601.408450704,
            "unit": "ns",
            "range": "± 1282711.97496253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66201649.31506849,
            "unit": "ns",
            "range": "± 3255627.222472025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136183700,
            "unit": "ns",
            "range": "± 1238114.1627491384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266851581.4814815,
            "unit": "ns",
            "range": "± 11076948.205970984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6191211.71875,
            "unit": "ns",
            "range": "± 218029.77935629367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958934.939453125,
            "unit": "ns",
            "range": "± 122631.48864806771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357495.9336577868,
            "unit": "ns",
            "range": "± 60649.81201711445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3420824.0675403224,
            "unit": "ns",
            "range": "± 103667.73239247083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1075477.621299342,
            "unit": "ns",
            "range": "± 46429.34793084455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 992173.9420572916,
            "unit": "ns",
            "range": "± 32967.45397163453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4015617.3469387754,
            "unit": "ns",
            "range": "± 393722.23947972496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4305397.916666667,
            "unit": "ns",
            "range": "± 385940.31471450336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5575291.8367346935,
            "unit": "ns",
            "range": "± 535298.2592204337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4896732.989690722,
            "unit": "ns",
            "range": "± 519873.24110499315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8530677.659574468,
            "unit": "ns",
            "range": "± 658655.7514801677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340523.40425531915,
            "unit": "ns",
            "range": "± 39502.70557096334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311373.9130434783,
            "unit": "ns",
            "range": "± 37796.49925520086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298151.02040816325,
            "unit": "ns",
            "range": "± 51844.454603890255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5328267.391304348,
            "unit": "ns",
            "range": "± 381303.46718830557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4554144.2105263155,
            "unit": "ns",
            "range": "± 312210.9664939785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25431.25,
            "unit": "ns",
            "range": "± 9541.061537541716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104432.29166666667,
            "unit": "ns",
            "range": "± 18882.659796987606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110750.52631578948,
            "unit": "ns",
            "range": "± 33165.75994453872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147784.84848484848,
            "unit": "ns",
            "range": "± 32644.418104710894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7742.696629213483,
            "unit": "ns",
            "range": "± 1878.7016576039855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25179.381443298967,
            "unit": "ns",
            "range": "± 7706.516968129554"
          }
        ]
      }
    ]
  }
}