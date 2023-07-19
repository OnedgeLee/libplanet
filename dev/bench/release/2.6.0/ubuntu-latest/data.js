window.BENCHMARK_DATA = {
  "lastUpdate": 1689752151420,
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
        "date": 1689752135616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342705.9692307692,
            "unit": "ns",
            "range": "± 15658.120988972098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335792.77777777775,
            "unit": "ns",
            "range": "± 13636.098164350342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319543.5,
            "unit": "ns",
            "range": "± 21011.48366123784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5376258.055555556,
            "unit": "ns",
            "range": "± 113402.96484166139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4740535.736842105,
            "unit": "ns",
            "range": "± 104773.95020595641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24936.444444444445,
            "unit": "ns",
            "range": "± 1533.983681491152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111008.3373493976,
            "unit": "ns",
            "range": "± 5772.628215895586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106070.44,
            "unit": "ns",
            "range": "± 10617.825136661808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119869.01041666667,
            "unit": "ns",
            "range": "± 14065.972390653524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7987.104166666667,
            "unit": "ns",
            "range": "± 812.6842913802014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25196.873684210525,
            "unit": "ns",
            "range": "± 1818.0300318313055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1746775.90625,
            "unit": "ns",
            "range": "± 76047.46663255237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3323173.033333333,
            "unit": "ns",
            "range": "± 148446.32816462047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2331894.1134020616,
            "unit": "ns",
            "range": "± 154283.74842220344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6294962.573770491,
            "unit": "ns",
            "range": "± 279921.840799562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7274453.127864583,
            "unit": "ns",
            "range": "± 44800.953302569396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2263025.61796875,
            "unit": "ns",
            "range": "± 11623.768384474883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1655116.7940104166,
            "unit": "ns",
            "range": "± 7460.526797127961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161744.0245535714,
            "unit": "ns",
            "range": "± 6091.985547268175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997578.8498046875,
            "unit": "ns",
            "range": "± 4367.1950463524845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904100.54609375,
            "unit": "ns",
            "range": "± 5837.960243326758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4303799.583333333,
            "unit": "ns",
            "range": "± 141033.10986742997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4580678.8125,
            "unit": "ns",
            "range": "± 87786.46551887046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5435726.476190476,
            "unit": "ns",
            "range": "± 116034.55694258456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4926125.23255814,
            "unit": "ns",
            "range": "± 168342.34425629978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8050914.934782608,
            "unit": "ns",
            "range": "± 307962.6011218752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10231739.96875,
            "unit": "ns",
            "range": "± 305084.22346100665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26424616.588235293,
            "unit": "ns",
            "range": "± 528547.4247580649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66000432.46666667,
            "unit": "ns",
            "range": "± 687351.8054132381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132573145,
            "unit": "ns",
            "range": "± 1502732.1763430154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264067051.57142857,
            "unit": "ns",
            "range": "± 1511712.9104632097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56454.45744680851,
            "unit": "ns",
            "range": "± 4222.43308971196"
          }
        ]
      }
    ]
  }
}