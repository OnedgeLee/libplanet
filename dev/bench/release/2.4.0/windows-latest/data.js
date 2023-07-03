window.BENCHMARK_DATA = {
  "lastUpdate": 1688386516866,
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
          "id": "f9b5a2d910a3996793afe793d49a469108a6917f",
          "message": "Release 2.4.0",
          "timestamp": "2023-07-03T20:53:11+09:00",
          "tree_id": "4b06aaf630d84c6c1f4e79ccf2b7e764e850d9c0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f9b5a2d910a3996793afe793d49a469108a6917f"
        },
        "date": 1688386404345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654607.142857143,
            "unit": "ns",
            "range": "± 127322.03447918013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3170215.1515151514,
            "unit": "ns",
            "range": "± 221417.61602559176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2218029.4736842103,
            "unit": "ns",
            "range": "± 202849.29049413846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6183553.535353536,
            "unit": "ns",
            "range": "± 468330.7108847143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56692.63157894737,
            "unit": "ns",
            "range": "± 9728.672714628336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8664270,
            "unit": "ns",
            "range": "± 243339.97240982376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23159234.88372093,
            "unit": "ns",
            "range": "± 1254618.1710002865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59392050,
            "unit": "ns",
            "range": "± 1858990.6978511135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120084322.22222222,
            "unit": "ns",
            "range": "± 4534789.539212321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241702100,
            "unit": "ns",
            "range": "± 4707303.036771692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6106267.578125,
            "unit": "ns",
            "range": "± 52367.47999410326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960552.421875,
            "unit": "ns",
            "range": "± 29927.125038882583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466209.6614583333,
            "unit": "ns",
            "range": "± 13103.509479424738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212761.3802083335,
            "unit": "ns",
            "range": "± 26502.414552595565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1058299.1015625,
            "unit": "ns",
            "range": "± 15368.341470309497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 974120.4166666666,
            "unit": "ns",
            "range": "± 11996.456525846266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3650986.206896552,
            "unit": "ns",
            "range": "± 158477.92081346834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815569.0476190476,
            "unit": "ns",
            "range": "± 191406.1328826904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5004622.580645162,
            "unit": "ns",
            "range": "± 227658.67564516354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4227261.643835616,
            "unit": "ns",
            "range": "± 209258.01566363595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7767381.967213115,
            "unit": "ns",
            "range": "± 349649.0295082564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314757.60869565216,
            "unit": "ns",
            "range": "± 21398.40413940559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294260.9375,
            "unit": "ns",
            "range": "± 13304.380674758555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253545.26315789475,
            "unit": "ns",
            "range": "± 15767.234868826386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4733217.391304348,
            "unit": "ns",
            "range": "± 114811.93575968214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4323512.5,
            "unit": "ns",
            "range": "± 149733.89076916352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19782.558139534885,
            "unit": "ns",
            "range": "± 1720.0678413751496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97700,
            "unit": "ns",
            "range": "± 9842.104514614532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99986.59793814433,
            "unit": "ns",
            "range": "± 18613.66337793501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125468.75,
            "unit": "ns",
            "range": "± 21273.11281753022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5975.824175824176,
            "unit": "ns",
            "range": "± 1089.2750554933987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21694.791666666668,
            "unit": "ns",
            "range": "± 7034.626684318032"
          }
        ]
      },
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
          "id": "75d95740e7c1ce1d7bcfc0df5c34da920f5c453f",
          "message": "Release 2.4.0",
          "timestamp": "2023-07-03T20:58:10+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/75d95740e7c1ce1d7bcfc0df5c34da920f5c453f"
        },
        "date": 1688386483801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1476358,
            "unit": "ns",
            "range": "± 150568.47107149652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2733198,
            "unit": "ns",
            "range": "± 163941.24531414147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1871779,
            "unit": "ns",
            "range": "± 133689.33631914904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4956368.085106383,
            "unit": "ns",
            "range": "± 191116.27249261338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52286.17021276596,
            "unit": "ns",
            "range": "± 4054.032933324485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7423355.555555556,
            "unit": "ns",
            "range": "± 151658.61129222094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20785885.714285713,
            "unit": "ns",
            "range": "± 266768.2078196289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52877006.666666664,
            "unit": "ns",
            "range": "± 516304.11645334255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103933273.33333333,
            "unit": "ns",
            "range": "± 951502.1323200089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206494560,
            "unit": "ns",
            "range": "± 1894134.901969008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4972294.53125,
            "unit": "ns",
            "range": "± 24172.411016759204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567129.31640625,
            "unit": "ns",
            "range": "± 7811.56627260582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230574.3033854167,
            "unit": "ns",
            "range": "± 4258.545440803181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2695097.03125,
            "unit": "ns",
            "range": "± 8891.230995835334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855471.3411458334,
            "unit": "ns",
            "range": "± 2991.5818567799633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785182.24609375,
            "unit": "ns",
            "range": "± 2053.323269150286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266588.3720930233,
            "unit": "ns",
            "range": "± 120905.59522540978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3617984.782608696,
            "unit": "ns",
            "range": "± 121404.1587561358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4310794.444444444,
            "unit": "ns",
            "range": "± 163783.81060459433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4005470,
            "unit": "ns",
            "range": "± 85512.54817122949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6424907.692307692,
            "unit": "ns",
            "range": "± 169509.03438596288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289800,
            "unit": "ns",
            "range": "± 11964.836300272047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264792.9411764706,
            "unit": "ns",
            "range": "± 13666.510930314416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254162.24489795917,
            "unit": "ns",
            "range": "± 20270.004833235897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4231152.94117647,
            "unit": "ns",
            "range": "± 73888.42194186329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858123.076923077,
            "unit": "ns",
            "range": "± 61415.71668889208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24172.448979591838,
            "unit": "ns",
            "range": "± 2447.6279538489644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94348.97959183673,
            "unit": "ns",
            "range": "± 8559.581896740161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79542.85714285714,
            "unit": "ns",
            "range": "± 8050.753950733915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110061.22448979592,
            "unit": "ns",
            "range": "± 16773.2889806214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5998.969072164949,
            "unit": "ns",
            "range": "± 916.7986471685986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21128.571428571428,
            "unit": "ns",
            "range": "± 2563.060348590229"
          }
        ]
      }
    ]
  }
}