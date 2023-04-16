window.BENCHMARK_DATA = {
  "lastUpdate": 1681635215506,
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
          "id": "da6ff26ce0559ec68832db40f698016be24c6e7f",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-16T17:37:15+09:00",
          "tree_id": "4ee86cb37cfb63efcf2c2049367b295996ac0623",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da6ff26ce0559ec68832db40f698016be24c6e7f"
        },
        "date": 1681635182215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1726533.6734693877,
            "unit": "ns",
            "range": "± 99455.0034959887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2835981.4814814813,
            "unit": "ns",
            "range": "± 74201.45673998713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2632041.6666666665,
            "unit": "ns",
            "range": "± 190491.8529362548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5870932.352941177,
            "unit": "ns",
            "range": "± 281193.37396981864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50487.62886597938,
            "unit": "ns",
            "range": "± 3630.5204439801846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7124918.181818182,
            "unit": "ns",
            "range": "± 102592.0568556364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19448595.833333332,
            "unit": "ns",
            "range": "± 449730.6918582224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48961019.23076923,
            "unit": "ns",
            "range": "± 458072.7296412936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99285735.71428572,
            "unit": "ns",
            "range": "± 1171044.7581324338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198806512.5,
            "unit": "ns",
            "range": "± 3886928.8743814183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4861376.40625,
            "unit": "ns",
            "range": "± 29166.15574824217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537615.5338541667,
            "unit": "ns",
            "range": "± 6894.4313770346635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190143.828125,
            "unit": "ns",
            "range": "± 4744.934583078345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646014.0885416665,
            "unit": "ns",
            "range": "± 12708.805106341837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849176.4322916666,
            "unit": "ns",
            "range": "± 6200.933743479752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764280.7391826923,
            "unit": "ns",
            "range": "± 1705.8466368877725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623507.6923076925,
            "unit": "ns",
            "range": "± 97421.9191889666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3911392.3076923075,
            "unit": "ns",
            "range": "± 134634.7209941254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4382600,
            "unit": "ns",
            "range": "± 124432.81691710562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4900784.615384615,
            "unit": "ns",
            "range": "± 68268.65857470574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7512787.878787879,
            "unit": "ns",
            "range": "± 231367.8439703427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319857.8947368421,
            "unit": "ns",
            "range": "± 10967.017667951517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255412.06896551725,
            "unit": "ns",
            "range": "± 9800.61003447193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218473.95833333334,
            "unit": "ns",
            "range": "± 12567.847404277036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5254481.578947368,
            "unit": "ns",
            "range": "± 114983.74306653372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3630878.5714285714,
            "unit": "ns",
            "range": "± 58504.61097635387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23328.571428571428,
            "unit": "ns",
            "range": "± 2640.6516690228955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96975.25252525252,
            "unit": "ns",
            "range": "± 10120.149061521626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97796.9696969697,
            "unit": "ns",
            "range": "± 12691.00158914997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197927.08333333334,
            "unit": "ns",
            "range": "± 19517.433390186092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8547.422680412372,
            "unit": "ns",
            "range": "± 1430.9883518848926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22882.291666666668,
            "unit": "ns",
            "range": "± 2317.166817776292"
          }
        ]
      }
    ]
  }
}