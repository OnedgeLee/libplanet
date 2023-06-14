window.BENCHMARK_DATA = {
  "lastUpdate": 1686718402129,
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
          "id": "2af02e0e2a1312db09d4422f84717ac606b9e0b3",
          "message": "Prepare 2.0.1",
          "timestamp": "2023-06-14T13:38:47+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2af02e0e2a1312db09d4422f84717ac606b9e0b3"
        },
        "date": 1686718389143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423894.21875,
            "unit": "ns",
            "range": "± 102913.88431695831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2665467.393939394,
            "unit": "ns",
            "range": "± 75015.47888308593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2281819.625,
            "unit": "ns",
            "range": "± 119422.94628918364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5584790.755555555,
            "unit": "ns",
            "range": "± 211454.01924544384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371877.5555555555,
            "unit": "ns",
            "range": "± 69869.64007789348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447579.9,
            "unit": "ns",
            "range": "± 79675.44820399128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4407302,
            "unit": "ns",
            "range": "± 84764.94316402271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4257441.2,
            "unit": "ns",
            "range": "± 161970.99053458477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6882676.045454546,
            "unit": "ns",
            "range": "± 141927.0638785581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7926384.266666667,
            "unit": "ns",
            "range": "± 51614.04931310116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19858059,
            "unit": "ns",
            "range": "± 88865.99969876859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51317745.2,
            "unit": "ns",
            "range": "± 132621.04115604842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102399834.28571428,
            "unit": "ns",
            "range": "± 362378.70952243154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203532602.8,
            "unit": "ns",
            "range": "± 804489.2052786574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6387735.3484375,
            "unit": "ns",
            "range": "± 12597.652018436029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861632.989107572,
            "unit": "ns",
            "range": "± 3046.241848632261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385821.0110677083,
            "unit": "ns",
            "range": "± 642.8281806528676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2534233.8445870536,
            "unit": "ns",
            "range": "± 1487.3240369642165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818775.4983956473,
            "unit": "ns",
            "range": "± 555.7969108242443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729288.1470102164,
            "unit": "ns",
            "range": "± 214.81998093599873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47689.83544303798,
            "unit": "ns",
            "range": "± 2469.9395063202523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279714.125,
            "unit": "ns",
            "range": "± 7403.152454598355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270031.5918367347,
            "unit": "ns",
            "range": "± 9450.522661733157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233158.76923076922,
            "unit": "ns",
            "range": "± 3015.2114672619055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4263094.333333333,
            "unit": "ns",
            "range": "± 23728.653470515546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3885993.6666666665,
            "unit": "ns",
            "range": "± 20812.764289756236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19113.494736842105,
            "unit": "ns",
            "range": "± 1317.3543673694348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91252.56842105264,
            "unit": "ns",
            "range": "± 7031.290249099184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73193.11764705883,
            "unit": "ns",
            "range": "± 1128.8659066931366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89413.17346938775,
            "unit": "ns",
            "range": "± 10754.071741012112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4611.515789473684,
            "unit": "ns",
            "range": "± 634.4507402228455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20009.340425531915,
            "unit": "ns",
            "range": "± 1531.3056524234157"
          }
        ]
      }
    ]
  }
}