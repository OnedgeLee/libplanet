window.BENCHMARK_DATA = {
  "lastUpdate": 1689752209438,
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
          "id": "f040cdf1aecb6f711eff50e1ce4583d091bf5061",
          "message": "Release 2.6.0",
          "timestamp": "2023-07-19T16:17:54+09:00",
          "tree_id": "6b5f9f2c1707a9486cea6187f894f6e0483f6c6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f040cdf1aecb6f711eff50e1ce4583d091bf5061"
        },
        "date": 1689752175811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322995.918367347,
            "unit": "ns",
            "range": "± 125313.48560266838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2415182.3529411764,
            "unit": "ns",
            "range": "± 66887.43357353065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1637358.6956521738,
            "unit": "ns",
            "range": "± 92161.10255771471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4488285.365853659,
            "unit": "ns",
            "range": "± 161783.5816159594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48493.10344827586,
            "unit": "ns",
            "range": "± 2663.002026191418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6981623.333333333,
            "unit": "ns",
            "range": "± 22529.360737448707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19244680,
            "unit": "ns",
            "range": "± 354705.0670224892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48866336.36363637,
            "unit": "ns",
            "range": "± 1156533.448982224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94924457.14285715,
            "unit": "ns",
            "range": "± 1676490.881717976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191576607.14285713,
            "unit": "ns",
            "range": "± 3245706.2210567663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789313.958333333,
            "unit": "ns",
            "range": "± 19067.51685819026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508680.9635416667,
            "unit": "ns",
            "range": "± 6736.55300238547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173476.5364583333,
            "unit": "ns",
            "range": "± 8346.174292696482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663443.2942708335,
            "unit": "ns",
            "range": "± 7557.419343499368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847871.54296875,
            "unit": "ns",
            "range": "± 4536.583876621331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774608.2486979166,
            "unit": "ns",
            "range": "± 2332.0124462666104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3102220,
            "unit": "ns",
            "range": "± 92545.66962055676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347920,
            "unit": "ns",
            "range": "± 45240.44018985037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3895081.25,
            "unit": "ns",
            "range": "± 61375.40461509534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3551914.1791044776,
            "unit": "ns",
            "range": "± 153861.91044342576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6045405.555555556,
            "unit": "ns",
            "range": "± 198282.57894003473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256578.26086956522,
            "unit": "ns",
            "range": "± 9018.522003656408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247249.20634920636,
            "unit": "ns",
            "range": "± 11272.845949961878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214125,
            "unit": "ns",
            "range": "± 4760.23827355865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3961900,
            "unit": "ns",
            "range": "± 56247.10590845473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658988.2352941176,
            "unit": "ns",
            "range": "± 73197.8473245025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18411.224489795917,
            "unit": "ns",
            "range": "± 1469.8258998564802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81786.36363636363,
            "unit": "ns",
            "range": "± 4483.947917150685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71495.55555555556,
            "unit": "ns",
            "range": "± 2688.2704439468102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80834.21052631579,
            "unit": "ns",
            "range": "± 3775.3782196959264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4681.632653061224,
            "unit": "ns",
            "range": "± 653.8304169893885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17534.40860215054,
            "unit": "ns",
            "range": "± 1092.2150034852307"
          }
        ]
      }
    ]
  }
}