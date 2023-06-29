window.BENCHMARK_DATA = {
  "lastUpdate": 1688033309658,
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
          "id": "ba43002dca652c7895c36f90b26990593d2688f4",
          "message": "Fix BlockCompletion.Complete() to ignore empty chunk",
          "timestamp": "2023-06-29T18:47:15+09:00",
          "tree_id": "9ece02ac6488a9cbaa226825dc7af02b965b95d0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ba43002dca652c7895c36f90b26990593d2688f4"
        },
        "date": 1688033102731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8912849.670454545,
            "unit": "ns",
            "range": "± 488621.5903119648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21654733.979166668,
            "unit": "ns",
            "range": "± 839698.2308611341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55416915.05696203,
            "unit": "ns",
            "range": "± 2763467.837797618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106950277.06,
            "unit": "ns",
            "range": "± 2768122.2039291677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227505125.53225806,
            "unit": "ns",
            "range": "± 9997843.727844724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72604.20224719102,
            "unit": "ns",
            "range": "± 8663.11622257857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337091.8791208791,
            "unit": "ns",
            "range": "± 23667.850914424995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324494.7771084337,
            "unit": "ns",
            "range": "± 17301.779692269673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314951.7,
            "unit": "ns",
            "range": "± 7228.924056215166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4260675.423076923,
            "unit": "ns",
            "range": "± 47326.18920228267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3780561.285714286,
            "unit": "ns",
            "range": "± 51588.094053061046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25104.31111111111,
            "unit": "ns",
            "range": "± 3539.343501127897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97836.32291666667,
            "unit": "ns",
            "range": "± 18324.932125382904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113680.0425531915,
            "unit": "ns",
            "range": "± 18699.144752977165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127314.42307692308,
            "unit": "ns",
            "range": "± 21884.325973034152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6799.583333333333,
            "unit": "ns",
            "range": "± 1080.8281490224515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17556.850574712644,
            "unit": "ns",
            "range": "± 2693.6073483675937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526893.855670103,
            "unit": "ns",
            "range": "± 132461.73927284547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906589.304347826,
            "unit": "ns",
            "range": "± 107986.27849533469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2534716.1938775512,
            "unit": "ns",
            "range": "± 234705.5640079762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6460300.62345679,
            "unit": "ns",
            "range": "± 324068.6755768128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3651847.782608696,
            "unit": "ns",
            "range": "± 396562.39467627386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5487748.891752577,
            "unit": "ns",
            "range": "± 2240931.0124744447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4663961.021276596,
            "unit": "ns",
            "range": "± 305527.8971389169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4349627.333333333,
            "unit": "ns",
            "range": "± 221103.38574113385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7527109.104166667,
            "unit": "ns",
            "range": "± 281860.6797132485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7248428.319568452,
            "unit": "ns",
            "range": "± 385800.6486774947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086959.044412364,
            "unit": "ns",
            "range": "± 50979.639398789855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356134.5256990131,
            "unit": "ns",
            "range": "± 28411.210008283957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2779609.22109375,
            "unit": "ns",
            "range": "± 111262.03380721677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848262.4402901785,
            "unit": "ns",
            "range": "± 9000.640767817762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782314.392578125,
            "unit": "ns",
            "range": "± 29548.090543580067"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688033260645,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9316168.413043479,
            "unit": "ns",
            "range": "± 518998.1670437399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22609977.935897436,
            "unit": "ns",
            "range": "± 774273.3015218305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59049620.77419355,
            "unit": "ns",
            "range": "± 1786346.6589652137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112557835.56666666,
            "unit": "ns",
            "range": "± 2023503.80318826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230425731.79411766,
            "unit": "ns",
            "range": "± 4709876.2443996575"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80558.33146067416,
            "unit": "ns",
            "range": "± 9637.192050540396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383966.0714285714,
            "unit": "ns",
            "range": "± 43667.48819402438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363578.96315789473,
            "unit": "ns",
            "range": "± 46047.76285480261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339314.311827957,
            "unit": "ns",
            "range": "± 38523.85820359686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4506181.644329897,
            "unit": "ns",
            "range": "± 267476.1740935221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136941.2959183673,
            "unit": "ns",
            "range": "± 344591.5501730777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25374.133333333335,
            "unit": "ns",
            "range": "± 2700.8887725705686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125421.4,
            "unit": "ns",
            "range": "± 18996.444759984668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125345.26842105263,
            "unit": "ns",
            "range": "± 12318.556925753712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131002.79896907216,
            "unit": "ns",
            "range": "± 17774.27078331025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8864.401098901099,
            "unit": "ns",
            "range": "± 714.0174609589982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23539.68181818182,
            "unit": "ns",
            "range": "± 3360.199937761827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645486.19,
            "unit": "ns",
            "range": "± 174451.2985263486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3103737.6029411764,
            "unit": "ns",
            "range": "± 147214.5500160296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2673665.4897959186,
            "unit": "ns",
            "range": "± 253856.44097652507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6529684.008196721,
            "unit": "ns",
            "range": "± 282462.9998334073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3851334.6,
            "unit": "ns",
            "range": "± 451938.08574811224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3893254.409090909,
            "unit": "ns",
            "range": "± 368220.7780494311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4940140.97979798,
            "unit": "ns",
            "range": "± 422350.0628489715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5023883.353932585,
            "unit": "ns",
            "range": "± 818824.0301144401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8477741.09574468,
            "unit": "ns",
            "range": "± 685716.4286954015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7578404.565364583,
            "unit": "ns",
            "range": "± 190211.68462361913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2235186.5308657787,
            "unit": "ns",
            "range": "± 100206.86122502822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517398.3505045574,
            "unit": "ns",
            "range": "± 58673.85135573206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3645970.8129429766,
            "unit": "ns",
            "range": "± 215566.18755200913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011814.4249267578,
            "unit": "ns",
            "range": "± 19872.100114412042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901222.3217773438,
            "unit": "ns",
            "range": "± 15637.978219299419"
          }
        ]
      }
    ]
  }
}