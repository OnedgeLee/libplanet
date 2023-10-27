window.BENCHMARK_DATA = {
  "lastUpdate": 1698405828036,
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
        "date": 1698405792145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438260,
            "unit": "ns",
            "range": "± 23012.878382083614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2415748.275862069,
            "unit": "ns",
            "range": "± 129306.24084479212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1838107.2164948455,
            "unit": "ns",
            "range": "± 114072.09091862214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8612777.173913043,
            "unit": "ns",
            "range": "± 650280.2917395642"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49511.290322580644,
            "unit": "ns",
            "range": "± 2994.7066437612784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7328333.333333333,
            "unit": "ns",
            "range": "± 63133.60738111185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20351660,
            "unit": "ns",
            "range": "± 284174.0130875547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50450876.47058824,
            "unit": "ns",
            "range": "± 991912.0131905675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104570053.33333333,
            "unit": "ns",
            "range": "± 1920939.6710489176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202622050,
            "unit": "ns",
            "range": "± 3653084.025860889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4516412.526041667,
            "unit": "ns",
            "range": "± 15981.704332893334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1456690.1302083333,
            "unit": "ns",
            "range": "± 5220.802682103712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085300.390625,
            "unit": "ns",
            "range": "± 4932.015014630003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630674.8883928573,
            "unit": "ns",
            "range": "± 6719.83953778428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825380.078125,
            "unit": "ns",
            "range": "± 2907.204400570955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764162.7473958334,
            "unit": "ns",
            "range": "± 3002.8217505342727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3108325,
            "unit": "ns",
            "range": "± 108415.97419909328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3225886.274509804,
            "unit": "ns",
            "range": "± 131192.55317220994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3987305.263157895,
            "unit": "ns",
            "range": "± 88363.94107254012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3894540.697674419,
            "unit": "ns",
            "range": "± 205331.62982494035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10326422.988505747,
            "unit": "ns",
            "range": "± 706838.6401338808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247950,
            "unit": "ns",
            "range": "± 8399.914020723994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241078.431372549,
            "unit": "ns",
            "range": "± 9375.592007451907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207813.20754716982,
            "unit": "ns",
            "range": "± 8485.803478023412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3994268.1818181816,
            "unit": "ns",
            "range": "± 96043.47421555479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3664625,
            "unit": "ns",
            "range": "± 111587.64239593859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18174.1935483871,
            "unit": "ns",
            "range": "± 1398.7496921401882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80128.42105263157,
            "unit": "ns",
            "range": "± 5538.024518319643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67941.66666666667,
            "unit": "ns",
            "range": "± 2247.7131235356273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79273.95833333333,
            "unit": "ns",
            "range": "± 10623.055807675231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4907.291666666667,
            "unit": "ns",
            "range": "± 726.5266745081904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17964.285714285714,
            "unit": "ns",
            "range": "± 1285.6102250657664"
          }
        ]
      }
    ]
  }
}