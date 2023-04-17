window.BENCHMARK_DATA = {
  "lastUpdate": 1681712588904,
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
          "id": "62ebfebc569371c237daf2ddd79c573a2c4d6e1c",
          "message": "feature/fixed-interval",
          "timestamp": "2023-04-17T15:03:25+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62ebfebc569371c237daf2ddd79c573a2c4d6e1c"
        },
        "date": 1681712571778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8523000.627659574,
            "unit": "ns",
            "range": "± 693087.4034384699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21717264.845360823,
            "unit": "ns",
            "range": "± 2301438.020782434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58643785.5,
            "unit": "ns",
            "range": "± 4728467.794869837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120969072.2,
            "unit": "ns",
            "range": "± 7842658.103359351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235525275.1,
            "unit": "ns",
            "range": "± 9402553.372435682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74524.01063829787,
            "unit": "ns",
            "range": "± 16843.23215763574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796869.0606060605,
            "unit": "ns",
            "range": "± 207891.21518834334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3967525.1914893617,
            "unit": "ns",
            "range": "± 398729.1183525471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3012244.3333333335,
            "unit": "ns",
            "range": "± 273139.0833463601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8248299.052083333,
            "unit": "ns",
            "range": "± 610178.9072519523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7043631.305729167,
            "unit": "ns",
            "range": "± 91943.89008759077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2274290.0024414062,
            "unit": "ns",
            "range": "± 51261.37282970089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1694834.7098357372,
            "unit": "ns",
            "range": "± 58867.088406386465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3157707.363839286,
            "unit": "ns",
            "range": "± 45685.884245165435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021891.945703125,
            "unit": "ns",
            "range": "± 13058.062487909498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939593.0408854167,
            "unit": "ns",
            "range": "± 11279.740447400061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 407465.07446808513,
            "unit": "ns",
            "range": "± 64990.65384043539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333407.5714285714,
            "unit": "ns",
            "range": "± 53370.75883958745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297923.33684210526,
            "unit": "ns",
            "range": "± 38670.88747464712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6564961.085106383,
            "unit": "ns",
            "range": "± 563480.9138423175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5001063.589473684,
            "unit": "ns",
            "range": "± 633430.6090451154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34465.875,
            "unit": "ns",
            "range": "± 9853.997014570174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132159.8350515464,
            "unit": "ns",
            "range": "± 26076.963502166847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102503.83673469388,
            "unit": "ns",
            "range": "± 22760.803175858775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271896.09375,
            "unit": "ns",
            "range": "± 50434.48634794045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5410.05,
            "unit": "ns",
            "range": "± 645.2526126853079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27346.104166666668,
            "unit": "ns",
            "range": "± 10121.594407871526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3611842.3163265307,
            "unit": "ns",
            "range": "± 471278.2563869083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608417.6210526316,
            "unit": "ns",
            "range": "± 408740.74148877186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439572.21978022,
            "unit": "ns",
            "range": "± 403979.60949150234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5009167.85106383,
            "unit": "ns",
            "range": "± 530557.5840194321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9070577.93814433,
            "unit": "ns",
            "range": "± 859139.0170840467"
          }
        ]
      }
    ]
  }
}