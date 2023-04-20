window.BENCHMARK_DATA = {
  "lastUpdate": 1681957939944,
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
          "id": "d6d87834a170b07dd60f9311efe37295800a4c4e",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-20T11:15:04+09:00",
          "tree_id": "aa4baf5796af7f658859b22d9da95ce319e15ac9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d6d87834a170b07dd60f9311efe37295800a4c4e"
        },
        "date": 1681957926121,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9123758.192982456,
            "unit": "ns",
            "range": "± 396120.93078112963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24332686.96551724,
            "unit": "ns",
            "range": "± 701386.8013351163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62015211.458333336,
            "unit": "ns",
            "range": "± 1574561.8777060818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122478939.64705883,
            "unit": "ns",
            "range": "± 2474858.0764524643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242746593.6956522,
            "unit": "ns",
            "range": "± 6009369.508600999"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56715.586956521736,
            "unit": "ns",
            "range": "± 4764.21121350229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656818.731958763,
            "unit": "ns",
            "range": "± 145686.908089997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218802.2448979593,
            "unit": "ns",
            "range": "± 197580.4748916594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2681201.4787234045,
            "unit": "ns",
            "range": "± 212427.36823381975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6830813.3,
            "unit": "ns",
            "range": "± 538925.6340513846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6977850.5439453125,
            "unit": "ns",
            "range": "± 179531.70102154984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2033607.720625,
            "unit": "ns",
            "range": "± 54287.27673521199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1514311.0033892463,
            "unit": "ns",
            "range": "± 29839.866882601633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3096964.517680921,
            "unit": "ns",
            "range": "± 65305.858223623945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913293.9214477539,
            "unit": "ns",
            "range": "± 16887.871641510654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867346.8771033654,
            "unit": "ns",
            "range": "± 11928.517019806373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383271.3614457831,
            "unit": "ns",
            "range": "± 20360.641829800512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314465.58762886596,
            "unit": "ns",
            "range": "± 19634.759664385474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276316.89,
            "unit": "ns",
            "range": "± 18803.873354423336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6782123.428571428,
            "unit": "ns",
            "range": "± 118127.28328747394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4834821.352941177,
            "unit": "ns",
            "range": "± 98571.59725546018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24408.07608695652,
            "unit": "ns",
            "range": "± 1864.6566500883173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108712.87755102041,
            "unit": "ns",
            "range": "± 9206.120036648532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104413.55,
            "unit": "ns",
            "range": "± 14861.076512779511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131095.8144329897,
            "unit": "ns",
            "range": "± 15724.81876308509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7159.033333333334,
            "unit": "ns",
            "range": "± 667.8421472981959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21903.274725274725,
            "unit": "ns",
            "range": "± 2275.4427460066076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4045118.74,
            "unit": "ns",
            "range": "± 162500.89353585546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4102325.1466666665,
            "unit": "ns",
            "range": "± 205973.42825180755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4939045.483870967,
            "unit": "ns",
            "range": "± 147721.55988680662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5174497.634615385,
            "unit": "ns",
            "range": "± 212273.89215277368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8363883.517857143,
            "unit": "ns",
            "range": "± 357451.20322721184"
          }
        ]
      }
    ]
  }
}