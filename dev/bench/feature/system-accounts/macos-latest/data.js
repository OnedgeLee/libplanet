window.BENCHMARK_DATA = {
  "lastUpdate": 1699846411829,
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
          "id": "a1e17dedc60ab7f155d177f49a047199e0eaa8f7",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:16:10+09:00",
          "tree_id": "45e06c704a38ef8a513bb4bba98a7669af30e64d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a1e17dedc60ab7f155d177f49a047199e0eaa8f7"
        },
        "date": 1699846376281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7807868.766666667,
            "unit": "ns",
            "range": "± 139603.31616991802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19019161.875,
            "unit": "ns",
            "range": "± 362401.1248203432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50700901.28571428,
            "unit": "ns",
            "range": "± 493092.9698416889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93331878.92307693,
            "unit": "ns",
            "range": "± 2022748.7011151568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190109717.04761904,
            "unit": "ns",
            "range": "± 4281203.702581699"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40721.455555555556,
            "unit": "ns",
            "range": "± 7351.343642240995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220903.0744680851,
            "unit": "ns",
            "range": "± 18827.54581922562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215264.24725274724,
            "unit": "ns",
            "range": "± 21148.644463308025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202868.57303370786,
            "unit": "ns",
            "range": "± 19039.32296046529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3714209.433333333,
            "unit": "ns",
            "range": "± 66696.49620425206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3326154,
            "unit": "ns",
            "range": "± 69798.49485251434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12445.59090909091,
            "unit": "ns",
            "range": "± 1000.0159727042025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62109.413043478264,
            "unit": "ns",
            "range": "± 7480.609720040491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57492.085106382976,
            "unit": "ns",
            "range": "± 10116.224909658076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68290.05102040817,
            "unit": "ns",
            "range": "± 14334.906123678998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3649.0344827586205,
            "unit": "ns",
            "range": "± 661.7309656424854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12693.064516129032,
            "unit": "ns",
            "range": "± 1878.6866643346752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307095.597826087,
            "unit": "ns",
            "range": "± 224891.7206115105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565483.4418604653,
            "unit": "ns",
            "range": "± 284098.5682880712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032054.90625,
            "unit": "ns",
            "range": "± 253917.14203388136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10180398.078947369,
            "unit": "ns",
            "range": "± 2387949.3742794795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896388.489361702,
            "unit": "ns",
            "range": "± 165060.05028634926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2996078.7702702703,
            "unit": "ns",
            "range": "± 101312.50485301205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3589713.724137931,
            "unit": "ns",
            "range": "± 155943.1209905504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3779217.681318681,
            "unit": "ns",
            "range": "± 399291.9609145357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11408767.456521738,
            "unit": "ns",
            "range": "± 1038938.3965425817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4302376.631696428,
            "unit": "ns",
            "range": "± 54023.290335574435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1341008.6615084135,
            "unit": "ns",
            "range": "± 18404.893231735336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 928091.2020357572,
            "unit": "ns",
            "range": "± 25226.438606447755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2309800.291888298,
            "unit": "ns",
            "range": "± 140415.5196785043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658678.7407226562,
            "unit": "ns",
            "range": "± 15778.849466217383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594605.2576844263,
            "unit": "ns",
            "range": "± 26383.67786035094"
          }
        ]
      }
    ]
  }
}