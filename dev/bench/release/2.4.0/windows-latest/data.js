window.BENCHMARK_DATA = {
  "lastUpdate": 1688386447208,
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
      }
    ]
  }
}