window.BENCHMARK_DATA = {
  "lastUpdate": 1708586730678,
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
          "id": "8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:05:30+09:00",
          "tree_id": "3fdd296222640e7db1e6a6370a55aa7a3699a196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2"
        },
        "date": 1708586392808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044245.918367347,
            "unit": "ns",
            "range": "± 136714.303785146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830570.7692307692,
            "unit": "ns",
            "range": "± 82764.68661791415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684371,
            "unit": "ns",
            "range": "± 154178.55796563812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7216185.593220339,
            "unit": "ns",
            "range": "± 317142.6518813173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36523.913043478264,
            "unit": "ns",
            "range": "± 4091.303281572514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5225671.428571428,
            "unit": "ns",
            "range": "± 51572.375261470064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13522580,
            "unit": "ns",
            "range": "± 75258.33793388895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34100530,
            "unit": "ns",
            "range": "± 404385.548349945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67556584.61538461,
            "unit": "ns",
            "range": "± 283238.0266553024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137757192.85714287,
            "unit": "ns",
            "range": "± 1337109.2461346982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3400436.628605769,
            "unit": "ns",
            "range": "± 4904.077126412089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074423.6979166667,
            "unit": "ns",
            "range": "± 3692.949936266512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756065.9388950893,
            "unit": "ns",
            "range": "± 1219.5545763642915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928983.59375,
            "unit": "ns",
            "range": "± 3828.005497942105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643869.51171875,
            "unit": "ns",
            "range": "± 1099.0926085209796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571572.4158653846,
            "unit": "ns",
            "range": "± 860.1474167792159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2247770.8333333335,
            "unit": "ns",
            "range": "± 80127.75957562978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312223.9583333335,
            "unit": "ns",
            "range": "± 146046.4084459325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2867307.407407407,
            "unit": "ns",
            "range": "± 77783.70368145604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2874698.113207547,
            "unit": "ns",
            "range": "± 119939.43742663505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7932757.5,
            "unit": "ns",
            "range": "± 237754.71187598104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179593.47826086957,
            "unit": "ns",
            "range": "± 10350.492947307845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169296.7741935484,
            "unit": "ns",
            "range": "± 6897.159494727996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149368.8524590164,
            "unit": "ns",
            "range": "± 6540.350168597156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991072.222222222,
            "unit": "ns",
            "range": "± 63956.73910640053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2612271.4285714286,
            "unit": "ns",
            "range": "± 36916.3592790186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13414.893617021276,
            "unit": "ns",
            "range": "± 2040.343500850824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59214.28571428572,
            "unit": "ns",
            "range": "± 5627.246641289572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51548.45360824742,
            "unit": "ns",
            "range": "± 4899.641003049395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61298.79518072289,
            "unit": "ns",
            "range": "± 7315.611338939181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2923.157894736842,
            "unit": "ns",
            "range": "± 543.5213459722033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11800,
            "unit": "ns",
            "range": "± 912.3491395189412"
          }
        ]
      },
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
          "id": "8852513afe358ef7572e74454706f6c1bdfe3fcf",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:13:33+09:00",
          "tree_id": "f1f064ff5f0c00010e42112584f77f6a0c7deed6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8852513afe358ef7572e74454706f6c1bdfe3fcf"
        },
        "date": 1708586704237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055209.2783505155,
            "unit": "ns",
            "range": "± 116952.06290263601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1763178.1818181819,
            "unit": "ns",
            "range": "± 74823.94816404182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1614538.9473684211,
            "unit": "ns",
            "range": "± 157057.39111949858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806319.354838709,
            "unit": "ns",
            "range": "± 203903.57920571972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34614.77272727273,
            "unit": "ns",
            "range": "± 1922.4947736339745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5083006.666666667,
            "unit": "ns",
            "range": "± 37467.51863122179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13746740.74074074,
            "unit": "ns",
            "range": "± 379743.0409138621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33915833.333333336,
            "unit": "ns",
            "range": "± 806476.7320470773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69759776.92307693,
            "unit": "ns",
            "range": "± 373848.0666301177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137271293.33333334,
            "unit": "ns",
            "range": "± 1369365.5780619553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3367341.8526785714,
            "unit": "ns",
            "range": "± 23646.21298987264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075904.140625,
            "unit": "ns",
            "range": "± 4279.6626715153025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740681.0872395834,
            "unit": "ns",
            "range": "± 2760.036834276191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960283.510044643,
            "unit": "ns",
            "range": "± 5646.597632931084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628963.5532924107,
            "unit": "ns",
            "range": "± 3669.7293576023026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561504.2217548077,
            "unit": "ns",
            "range": "± 1026.0785136470286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200293.103448276,
            "unit": "ns",
            "range": "± 58132.91378405722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2402535.714285714,
            "unit": "ns",
            "range": "± 41114.11150487342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2970700,
            "unit": "ns",
            "range": "± 41839.38152212394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3037798.5714285714,
            "unit": "ns",
            "range": "± 146443.73257167346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8027265.116279069,
            "unit": "ns",
            "range": "± 282405.8721260868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177767.74193548388,
            "unit": "ns",
            "range": "± 8107.364071916718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165492.77108433735,
            "unit": "ns",
            "range": "± 8810.81352148445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145808.33333333334,
            "unit": "ns",
            "range": "± 4690.621341723138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2819837.5,
            "unit": "ns",
            "range": "± 52349.35052128154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2517206.6666666665,
            "unit": "ns",
            "range": "± 38703.404550627376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11610.869565217392,
            "unit": "ns",
            "range": "± 1623.8237685018214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56037.5,
            "unit": "ns",
            "range": "± 4910.531110732696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46537.07865168539,
            "unit": "ns",
            "range": "± 2945.3886154489605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50629.166666666664,
            "unit": "ns",
            "range": "± 10759.846571657705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2532.978723404255,
            "unit": "ns",
            "range": "± 355.4153402127824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9938.636363636364,
            "unit": "ns",
            "range": "± 1155.4400881409547"
          }
        ]
      }
    ]
  }
}