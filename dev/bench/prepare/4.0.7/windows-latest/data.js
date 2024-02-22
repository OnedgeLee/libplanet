window.BENCHMARK_DATA = {
  "lastUpdate": 1708600130323,
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
          "id": "c391e3e537d974ce9306bfba7b200093d614b44e",
          "message": "Prepare 4.0.7",
          "timestamp": "2024-02-22T19:55:52+09:00",
          "tree_id": "7ecc2e5ec9876c5a41779d840614a8429327d2ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c391e3e537d974ce9306bfba7b200093d614b44e"
        },
        "date": 1708600098927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937213.6842105263,
            "unit": "ns",
            "range": "± 94725.80318727145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1730061.224489796,
            "unit": "ns",
            "range": "± 68721.72999473593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545095.918367347,
            "unit": "ns",
            "range": "± 157503.30640834267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6839724.528301887,
            "unit": "ns",
            "range": "± 283846.72252254817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33598.85057471264,
            "unit": "ns",
            "range": "± 1927.2521861552948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4934215.384615385,
            "unit": "ns",
            "range": "± 26546.65221058474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13079933.333333334,
            "unit": "ns",
            "range": "± 104813.63506356458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32257550,
            "unit": "ns",
            "range": "± 223695.8675385984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65568140,
            "unit": "ns",
            "range": "± 569509.4879430394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134297556.66666666,
            "unit": "ns",
            "range": "± 1294935.2165079075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305656.7608173075,
            "unit": "ns",
            "range": "± 4222.143459966835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046101.8694196428,
            "unit": "ns",
            "range": "± 1580.5760696695327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734910.1041666666,
            "unit": "ns",
            "range": "± 1258.4112590623436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912454.9579326923,
            "unit": "ns",
            "range": "± 1046.2896444464466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622648.095703125,
            "unit": "ns",
            "range": "± 1862.3060082086283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584497.6497395834,
            "unit": "ns",
            "range": "± 1496.3869884569192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226495.1219512196,
            "unit": "ns",
            "range": "± 76024.64387032508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258210.810810811,
            "unit": "ns",
            "range": "± 62489.749309536914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2851847.8260869565,
            "unit": "ns",
            "range": "± 71799.321784371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2874742.1052631577,
            "unit": "ns",
            "range": "± 98804.4550685546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7769151.3513513515,
            "unit": "ns",
            "range": "± 258074.51725510688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163113.51351351352,
            "unit": "ns",
            "range": "± 7657.055557776982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156118.33333333334,
            "unit": "ns",
            "range": "± 6903.92891499303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144616.12903225806,
            "unit": "ns",
            "range": "± 4311.851634289964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2737180,
            "unit": "ns",
            "range": "± 22527.98894074404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2474642.8571428573,
            "unit": "ns",
            "range": "± 30332.50894504276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9128.40909090909,
            "unit": "ns",
            "range": "± 588.7740748205318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47529.333333333336,
            "unit": "ns",
            "range": "± 2000.6602513773903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42965.30612244898,
            "unit": "ns",
            "range": "± 1679.1057913375803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46180.41237113402,
            "unit": "ns",
            "range": "± 7270.712355850149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2195.8762886597938,
            "unit": "ns",
            "range": "± 335.07384937664506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8822.093023255815,
            "unit": "ns",
            "range": "± 632.1580522381851"
          }
        ]
      }
    ]
  }
}