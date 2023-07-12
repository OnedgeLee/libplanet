window.BENCHMARK_DATA = {
  "lastUpdate": 1689131104290,
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
          "id": "f85b3f410b59d727f72ef1b7b0dd93d4be1a1749",
          "message": "fix: Log empty block demand as success on PullBlocksAsync",
          "timestamp": "2023-07-12T09:05:00+09:00",
          "tree_id": "e0d569d48bd6bda1d7d756a122033e628b597113",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f85b3f410b59d727f72ef1b7b0dd93d4be1a1749"
        },
        "date": 1689121246724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313124.7422680412,
            "unit": "ns",
            "range": "± 102228.33616359327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2425826.470588235,
            "unit": "ns",
            "range": "± 77603.02364002878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1670495.918367347,
            "unit": "ns",
            "range": "± 113498.8168505183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4960787,
            "unit": "ns",
            "range": "± 380277.0243964765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48867.010309278354,
            "unit": "ns",
            "range": "± 5656.37033296465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7107950,
            "unit": "ns",
            "range": "± 17520.74594478039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19371047.05882353,
            "unit": "ns",
            "range": "± 385083.2476842622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48642013.333333336,
            "unit": "ns",
            "range": "± 894163.7089375482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96529338.46153846,
            "unit": "ns",
            "range": "± 1361320.95195467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190944057.14285713,
            "unit": "ns",
            "range": "± 1540785.9859696412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4774379.387019231,
            "unit": "ns",
            "range": "± 23944.924995459343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521215.9598214286,
            "unit": "ns",
            "range": "± 5950.751420013727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187698.28125,
            "unit": "ns",
            "range": "± 19114.15853049539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678639.871651786,
            "unit": "ns",
            "range": "± 12424.24937122027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845860.2799479166,
            "unit": "ns",
            "range": "± 7043.826201897862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780246.3606770834,
            "unit": "ns",
            "range": "± 2722.5724559017926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3044750,
            "unit": "ns",
            "range": "± 62867.86407484617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3217879.5454545454,
            "unit": "ns",
            "range": "± 118692.96834552713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3943307.1428571427,
            "unit": "ns",
            "range": "± 68969.87875749946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3509917.1875,
            "unit": "ns",
            "range": "± 161442.33582037548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6192233.802816901,
            "unit": "ns",
            "range": "± 303708.11642743996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249966.66666666666,
            "unit": "ns",
            "range": "± 9815.140403075009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263848.8888888889,
            "unit": "ns",
            "range": "± 9069.770524866512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211036.66666666666,
            "unit": "ns",
            "range": "± 6261.677825902759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4306305.263157895,
            "unit": "ns",
            "range": "± 90882.42388251005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579669.230769231,
            "unit": "ns",
            "range": "± 39082.591704734405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21327.272727272728,
            "unit": "ns",
            "range": "± 3211.8345632357136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80923.15789473684,
            "unit": "ns",
            "range": "± 5629.376833951855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70969.89247311828,
            "unit": "ns",
            "range": "± 5132.03461953818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92662.24489795919,
            "unit": "ns",
            "range": "± 14865.267865831138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4658.620689655172,
            "unit": "ns",
            "range": "± 721.037966961185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20362.76595744681,
            "unit": "ns",
            "range": "± 2375.5014883134"
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
          "id": "69477477bd1998636750ea57e69c4841cef751eb",
          "message": "fix: Log empty block demand as success on PullBlocksAsync",
          "timestamp": "2023-07-12T11:46:09+09:00",
          "tree_id": "ee9cfc75fdb74b045104b15a920b6d80bf2b000b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/69477477bd1998636750ea57e69c4841cef751eb"
        },
        "date": 1689130868531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364096.9696969697,
            "unit": "ns",
            "range": "± 103949.83528620756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2423575,
            "unit": "ns",
            "range": "± 69160.20328157458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769789.6907216494,
            "unit": "ns",
            "range": "± 107157.68704396192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4735070.37037037,
            "unit": "ns",
            "range": "± 198145.1408472327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44904.30107526882,
            "unit": "ns",
            "range": "± 3531.870854724923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7259800,
            "unit": "ns",
            "range": "± 21561.413345477737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18275170,
            "unit": "ns",
            "range": "± 63186.0653715901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46009664.28571428,
            "unit": "ns",
            "range": "± 211880.1461172833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92680316.66666667,
            "unit": "ns",
            "range": "± 203894.3613885892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184470585.7142857,
            "unit": "ns",
            "range": "± 531462.850365556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4845343.28125,
            "unit": "ns",
            "range": "± 7455.234011092894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529776.088169643,
            "unit": "ns",
            "range": "± 2006.1904700418481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150047.3177083333,
            "unit": "ns",
            "range": "± 1335.6878259853663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574250.9895833335,
            "unit": "ns",
            "range": "± 6618.973934828535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811941.4738581731,
            "unit": "ns",
            "range": "± 1296.773434003696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735825.7486979166,
            "unit": "ns",
            "range": "± 842.5250391670897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3114100,
            "unit": "ns",
            "range": "± 47308.0087544138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3401214.285714286,
            "unit": "ns",
            "range": "± 59020.68551517611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4003521.4285714286,
            "unit": "ns",
            "range": "± 35392.04992370741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3775112.5,
            "unit": "ns",
            "range": "± 69897.50472417929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6055728.205128205,
            "unit": "ns",
            "range": "± 158830.29001308605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269598.4126984127,
            "unit": "ns",
            "range": "± 12353.326469384308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251444.44444444444,
            "unit": "ns",
            "range": "± 8212.097154962286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229569.38775510204,
            "unit": "ns",
            "range": "± 14392.412148640806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3866460,
            "unit": "ns",
            "range": "± 60446.52654560534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3569926.6666666665,
            "unit": "ns",
            "range": "± 40711.80009121024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16575.2688172043,
            "unit": "ns",
            "range": "± 1225.512839765503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82317.0731707317,
            "unit": "ns",
            "range": "± 4372.269656047902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71200,
            "unit": "ns",
            "range": "± 4422.620769191623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82209.75609756098,
            "unit": "ns",
            "range": "± 6036.1178300539905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4428.571428571428,
            "unit": "ns",
            "range": "± 732.8802098991729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16390.625,
            "unit": "ns",
            "range": "± 1565.0847042824703"
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
          "id": "8d70909ccac9a5a979f064b3cdb1359a976b78b2",
          "message": "fix: Log empty block demand as success on PullBlocksAsync\n\n[skip changelog]",
          "timestamp": "2023-07-12T11:46:34+09:00",
          "tree_id": "ee9cfc75fdb74b045104b15a920b6d80bf2b000b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8d70909ccac9a5a979f064b3cdb1359a976b78b2"
        },
        "date": 1689131055838,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654194.8979591837,
            "unit": "ns",
            "range": "± 149251.91972202947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112315.625,
            "unit": "ns",
            "range": "± 143560.58089498233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123184.210526316,
            "unit": "ns",
            "range": "± 153285.6923246412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5707907.843137255,
            "unit": "ns",
            "range": "± 230397.22120124384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54418.47826086957,
            "unit": "ns",
            "range": "± 3547.7567389327996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8751427.777777778,
            "unit": "ns",
            "range": "± 180839.6911324748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24359380,
            "unit": "ns",
            "range": "± 339914.7838587111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61789506.666666664,
            "unit": "ns",
            "range": "± 881715.5173432129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121474631.57894737,
            "unit": "ns",
            "range": "± 4166650.996683668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242068559.25925925,
            "unit": "ns",
            "range": "± 6659873.77168778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5984694.739583333,
            "unit": "ns",
            "range": "± 70354.31277558875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866359.8697916667,
            "unit": "ns",
            "range": "± 13472.461652421132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1470231.2875600962,
            "unit": "ns",
            "range": "± 10936.123462596976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3224831.09375,
            "unit": "ns",
            "range": "± 38995.99671376833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013452.3018973215,
            "unit": "ns",
            "range": "± 14036.865629376383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953033.4114583334,
            "unit": "ns",
            "range": "± 11486.89268775118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3853496.590909091,
            "unit": "ns",
            "range": "± 212110.1928156459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3953064.285714286,
            "unit": "ns",
            "range": "± 229300.54929549672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4813203.571428572,
            "unit": "ns",
            "range": "± 258582.00323442806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4350337.5,
            "unit": "ns",
            "range": "± 276842.970596006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7403911.764705882,
            "unit": "ns",
            "range": "± 144620.32569089718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317893.3333333333,
            "unit": "ns",
            "range": "± 16060.47131122679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300404.4776119403,
            "unit": "ns",
            "range": "± 14105.064992232301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274637.11340206186,
            "unit": "ns",
            "range": "± 18296.039641975967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4977916.666666667,
            "unit": "ns",
            "range": "± 49709.62348144136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4657478.571428572,
            "unit": "ns",
            "range": "± 69906.79705669024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24328.42105263158,
            "unit": "ns",
            "range": "± 2295.30803374293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105473.73737373737,
            "unit": "ns",
            "range": "± 8721.022991137927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93110,
            "unit": "ns",
            "range": "± 12342.678687048334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108963.26530612246,
            "unit": "ns",
            "range": "± 17173.226811661323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6770.408163265306,
            "unit": "ns",
            "range": "± 1093.6517080356866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22782.474226804123,
            "unit": "ns",
            "range": "± 2436.9982521741076"
          }
        ]
      }
    ]
  }
}