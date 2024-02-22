window.BENCHMARK_DATA = {
  "lastUpdate": 1708591424915,
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
          "id": "81db7a44655ed2a15e057489b234b822ef63d0d6",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:18:21+09:00",
          "tree_id": "a93e129b8f0796ce556626d19290357b89b02fb8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/81db7a44655ed2a15e057489b234b822ef63d0d6"
        },
        "date": 1708590733940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1035084.0206185566,
            "unit": "ns",
            "range": "± 118113.53549886328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844404.6511627906,
            "unit": "ns",
            "range": "± 99247.958825627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1695847.4747474748,
            "unit": "ns",
            "range": "± 194196.66832480932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7059514.705882353,
            "unit": "ns",
            "range": "± 198875.2146178724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35321.348314606745,
            "unit": "ns",
            "range": "± 2155.4619790679108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5297076.923076923,
            "unit": "ns",
            "range": "± 53932.166558961726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13608506.666666666,
            "unit": "ns",
            "range": "± 109426.39056635722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34326838.461538464,
            "unit": "ns",
            "range": "± 247829.68459024953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68614220,
            "unit": "ns",
            "range": "± 445839.7200788642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137490690,
            "unit": "ns",
            "range": "± 1202960.8857196597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311636.0491071427,
            "unit": "ns",
            "range": "± 6874.191803369606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086083.1333705357,
            "unit": "ns",
            "range": "± 1505.679057439166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756067.734375,
            "unit": "ns",
            "range": "± 1733.752476498596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938945.2473958333,
            "unit": "ns",
            "range": "± 2331.4316720545658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625308.5091145834,
            "unit": "ns",
            "range": "± 1067.8138303166975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569748.7955729166,
            "unit": "ns",
            "range": "± 813.60405551939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2245733.9285714286,
            "unit": "ns",
            "range": "± 85903.6590961287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2402146.4285714286,
            "unit": "ns",
            "range": "± 45717.19412457788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2930135.714285714,
            "unit": "ns",
            "range": "± 83800.98211342515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3039132.584269663,
            "unit": "ns",
            "range": "± 167845.93096002226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7947289.189189189,
            "unit": "ns",
            "range": "± 151043.66694543776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184048.4375,
            "unit": "ns",
            "range": "± 8455.166396333223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178621.875,
            "unit": "ns",
            "range": "± 8222.510116688676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148366.66666666666,
            "unit": "ns",
            "range": "± 6779.737362883418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2852369.230769231,
            "unit": "ns",
            "range": "± 37367.30711498544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555135.714285714,
            "unit": "ns",
            "range": "± 30037.99151184936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13833.333333333334,
            "unit": "ns",
            "range": "± 2057.083907597974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64171.27659574468,
            "unit": "ns",
            "range": "± 6944.304115107738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53852.52525252525,
            "unit": "ns",
            "range": "± 6211.532122844678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75487.87878787878,
            "unit": "ns",
            "range": "± 14684.666949363516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3294.8453608247423,
            "unit": "ns",
            "range": "± 621.3847328783477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12041.860465116279,
            "unit": "ns",
            "range": "± 1316.1856758231847"
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
          "id": "1517f9e4ffad728bd619dab1d12b465f2a86c372",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:29:22+09:00",
          "tree_id": "0a81982a46b3799bbc319c503c9772176680a2eb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1517f9e4ffad728bd619dab1d12b465f2a86c372"
        },
        "date": 1708591378029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002536.3636363636,
            "unit": "ns",
            "range": "± 123866.57358604883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1759246.7741935484,
            "unit": "ns",
            "range": "± 80131.38385144847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1585009.0909090908,
            "unit": "ns",
            "range": "± 157365.5669173086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6725361.764705882,
            "unit": "ns",
            "range": "± 194788.261133928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34293.150684931505,
            "unit": "ns",
            "range": "± 1720.3301336212646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5084878.571428572,
            "unit": "ns",
            "range": "± 64086.35014357796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13345946.153846154,
            "unit": "ns",
            "range": "± 79705.77786861519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32951266.666666668,
            "unit": "ns",
            "range": "± 468332.30977688526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66389071.428571425,
            "unit": "ns",
            "range": "± 473832.1699449345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131940566.66666667,
            "unit": "ns",
            "range": "± 1140311.0413182804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369700.09765625,
            "unit": "ns",
            "range": "± 3291.620871075699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056160.951450893,
            "unit": "ns",
            "range": "± 1879.6290443794244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752534.5638020834,
            "unit": "ns",
            "range": "± 1868.1242394840428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965649.0625,
            "unit": "ns",
            "range": "± 10782.186965747465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642933.9564732143,
            "unit": "ns",
            "range": "± 1416.9008420406763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562783.5611979166,
            "unit": "ns",
            "range": "± 1771.0981518284088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184547.3684210526,
            "unit": "ns",
            "range": "± 94643.68725696387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279836.3636363638,
            "unit": "ns",
            "range": "± 48890.62180452301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826938.1818181816,
            "unit": "ns",
            "range": "± 119929.21444800044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2872672.093023256,
            "unit": "ns",
            "range": "± 155421.18157647154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7930732.558139535,
            "unit": "ns",
            "range": "± 257245.01820427767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174816.39344262294,
            "unit": "ns",
            "range": "± 7644.653476512607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169929.16666666666,
            "unit": "ns",
            "range": "± 8066.5792442785405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142860,
            "unit": "ns",
            "range": "± 4245.6955890033805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2943466.6666666665,
            "unit": "ns",
            "range": "± 54821.784860017964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2550260,
            "unit": "ns",
            "range": "± 43956.69622318246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11964.21052631579,
            "unit": "ns",
            "range": "± 1756.6842430201423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56895.26315789474,
            "unit": "ns",
            "range": "± 5122.826854696797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45120.22471910113,
            "unit": "ns",
            "range": "± 2467.248180725059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62758.58585858586,
            "unit": "ns",
            "range": "± 13493.278826512187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2601.0204081632655,
            "unit": "ns",
            "range": "± 558.25480971408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11120.833333333334,
            "unit": "ns",
            "range": "± 1672.1821020618956"
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
          "id": "1c053daff0e28cb063d41dc2188f9a34750c4b18",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:31:28+09:00",
          "tree_id": "a0d9de13a8359f5b9ef681b7ed0e224994becf14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1c053daff0e28cb063d41dc2188f9a34750c4b18"
        },
        "date": 1708591393016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940079,
            "unit": "ns",
            "range": "± 90619.19021572382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1664001.8181818181,
            "unit": "ns",
            "range": "± 52679.70826893087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1502256.25,
            "unit": "ns",
            "range": "± 131388.59424382474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6948325.373134328,
            "unit": "ns",
            "range": "± 330096.8532541135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33704.38596491228,
            "unit": "ns",
            "range": "± 1466.9051697169643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5049386.666666667,
            "unit": "ns",
            "range": "± 55766.5012948335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12789185.714285715,
            "unit": "ns",
            "range": "± 84489.06034914413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32102696.153846152,
            "unit": "ns",
            "range": "± 92438.71497181809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65145486.666666664,
            "unit": "ns",
            "range": "± 1165134.847417528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131248713.33333333,
            "unit": "ns",
            "range": "± 749964.1723506022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3268736.875,
            "unit": "ns",
            "range": "± 7364.434554076065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076169.252232143,
            "unit": "ns",
            "range": "± 1809.059798114324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721095.2799479166,
            "unit": "ns",
            "range": "± 1228.0479735173137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916068.3175223214,
            "unit": "ns",
            "range": "± 1792.8881129261306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620708.8997395834,
            "unit": "ns",
            "range": "± 2162.6843909714967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562680.29296875,
            "unit": "ns",
            "range": "± 1297.47596155648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2065713.3333333333,
            "unit": "ns",
            "range": "± 75898.00452521193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296582.6086956523,
            "unit": "ns",
            "range": "± 87859.0899726446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2747345.945945946,
            "unit": "ns",
            "range": "± 92077.65923572521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2880114.285714286,
            "unit": "ns",
            "range": "± 88276.37130677969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8034064.705882353,
            "unit": "ns",
            "range": "± 322604.2993039798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166581.6091954023,
            "unit": "ns",
            "range": "± 8841.071290653983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161282.92682926828,
            "unit": "ns",
            "range": "± 8329.062681663152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140276.66666666666,
            "unit": "ns",
            "range": "± 4078.1743154414617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763520,
            "unit": "ns",
            "range": "± 36829.43698417651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2453992.3076923075,
            "unit": "ns",
            "range": "± 28320.236037695187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9903.370786516854,
            "unit": "ns",
            "range": "± 1220.6043062019291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49897.77777777778,
            "unit": "ns",
            "range": "± 3269.985320304396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43035.416666666664,
            "unit": "ns",
            "range": "± 1556.9322787351337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49443.47826086957,
            "unit": "ns",
            "range": "± 9172.945221273767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2369.148936170213,
            "unit": "ns",
            "range": "± 354.7758934436619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9723.958333333334,
            "unit": "ns",
            "range": "± 1409.1240124474996"
          }
        ]
      }
    ]
  }
}