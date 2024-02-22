window.BENCHMARK_DATA = {
  "lastUpdate": 1708600558743,
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
        "date": 1708600528485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13272621.92857143,
            "unit": "ns",
            "range": "± 3480113.5956977042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29112945.056818184,
            "unit": "ns",
            "range": "± 6435411.320965823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69160688.43902439,
            "unit": "ns",
            "range": "± 8278077.877334957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128166683.78421053,
            "unit": "ns",
            "range": "± 16827275.348382913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235839418.4456522,
            "unit": "ns",
            "range": "± 21459040.281111322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70622.26041666667,
            "unit": "ns",
            "range": "± 21984.177912041912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269298.8626373626,
            "unit": "ns",
            "range": "± 38073.97222907489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305666.1595744681,
            "unit": "ns",
            "range": "± 77609.39534722864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271898.7021276596,
            "unit": "ns",
            "range": "± 56719.28274525451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4524411.211111112,
            "unit": "ns",
            "range": "± 574695.8577897793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4388946.308510638,
            "unit": "ns",
            "range": "± 883955.1973572216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18641.851648351647,
            "unit": "ns",
            "range": "± 4515.654844534674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84785.67368421053,
            "unit": "ns",
            "range": "± 25427.572139373104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76290.75789473685,
            "unit": "ns",
            "range": "± 15657.384601791615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84004.65979381443,
            "unit": "ns",
            "range": "± 19455.826234215056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6516.770833333333,
            "unit": "ns",
            "range": "± 1856.8231754328585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17053.28125,
            "unit": "ns",
            "range": "± 4726.315270467604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560878.682795699,
            "unit": "ns",
            "range": "± 428575.3615050365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817651.586956522,
            "unit": "ns",
            "range": "± 546237.0505204275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2382256.68556701,
            "unit": "ns",
            "range": "± 591901.9511276116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13969522.139784947,
            "unit": "ns",
            "range": "± 4617297.407168216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3286456.8076923075,
            "unit": "ns",
            "range": "± 352160.40606268845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4314756.428571428,
            "unit": "ns",
            "range": "± 1123379.403157753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267546.425531914,
            "unit": "ns",
            "range": "± 642308.9740291308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4248862.028089887,
            "unit": "ns",
            "range": "± 552055.5608152155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19098811.347826086,
            "unit": "ns",
            "range": "± 3358142.44055919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4622097.5859375,
            "unit": "ns",
            "range": "± 148740.63348374885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1440180.941171875,
            "unit": "ns",
            "range": "± 35967.114875479136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 903358.8473772322,
            "unit": "ns",
            "range": "± 11029.357504111495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2171504.5484946645,
            "unit": "ns",
            "range": "± 114115.81824839997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638331.6991489956,
            "unit": "ns",
            "range": "± 9151.940663167079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580789.5977313702,
            "unit": "ns",
            "range": "± 2047.4974029286789"
          }
        ]
      }
    ]
  }
}