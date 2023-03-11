window.BENCHMARK_DATA = {
  "lastUpdate": 1678518907022,
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "afc9187ac92e7857c73665b877e5e13c6bd5c1d4",
          "message": "fix: ActionExecutionState total count",
          "timestamp": "2023-03-11T15:58:40+09:00",
          "tree_id": "f2b277ea28629d1c15ce8061908f3e006d899d07",
          "url": "https://github.com/OnedgeLee/libplanet/commit/afc9187ac92e7857c73665b877e5e13c6bd5c1d4"
        },
        "date": 1678518873745,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377291.5789473683,
            "unit": "ns",
            "range": "± 117261.14397266587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2431735.714285714,
            "unit": "ns",
            "range": "± 41128.83336621566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2160806.0606060605,
            "unit": "ns",
            "range": "± 135882.41752142063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4962341.666666667,
            "unit": "ns",
            "range": "± 123639.01142005115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48320.51282051282,
            "unit": "ns",
            "range": "± 2487.8592985624987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7108006.666666667,
            "unit": "ns",
            "range": "± 132171.68200416278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19595000,
            "unit": "ns",
            "range": "± 185966.97863560924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49070293.333333336,
            "unit": "ns",
            "range": "± 699626.8469351222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97097660,
            "unit": "ns",
            "range": "± 1487622.930238516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 192223126.66666666,
            "unit": "ns",
            "range": "± 2259623.274374567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4766350.729166667,
            "unit": "ns",
            "range": "± 13169.176576125532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513216.9921875,
            "unit": "ns",
            "range": "± 4316.184283693673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153055.9765625,
            "unit": "ns",
            "range": "± 2342.405046579075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2733534.5442708335,
            "unit": "ns",
            "range": "± 6351.774833959237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833099.5182291666,
            "unit": "ns",
            "range": "± 1815.0665142607768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752862.7994791666,
            "unit": "ns",
            "range": "± 1194.4622995922643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3069450,
            "unit": "ns",
            "range": "± 97800.97205618734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4905323.80952381,
            "unit": "ns",
            "range": "± 115236.18747928925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23002629.411764707,
            "unit": "ns",
            "range": "± 442078.7666874336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5936715.384615385,
            "unit": "ns",
            "range": "± 87490.15988625851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26496014.814814813,
            "unit": "ns",
            "range": "± 737235.8357163515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185371.42857142858,
            "unit": "ns",
            "range": "± 6687.795061711778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189513.46153846153,
            "unit": "ns",
            "range": "± 7767.681382324795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160748.38709677418,
            "unit": "ns",
            "range": "± 4649.7219248568645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10807243.333333334,
            "unit": "ns",
            "range": "± 142443.74060693308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8684771.42857143,
            "unit": "ns",
            "range": "± 95987.39844031954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21568.817204301075,
            "unit": "ns",
            "range": "± 1754.3101266795331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54960.43956043956,
            "unit": "ns",
            "range": "± 4753.639053302664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41456.41025641026,
            "unit": "ns",
            "range": "± 1317.8520945272776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97988.88888888889,
            "unit": "ns",
            "range": "± 7317.496156473197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6202.1505376344085,
            "unit": "ns",
            "range": "± 696.1038301212616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20480.645161290322,
            "unit": "ns",
            "range": "± 1597.2298073550676"
          }
        ]
      }
    ]
  }
}