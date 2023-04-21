window.BENCHMARK_DATA = {
  "lastUpdate": 1682052280464,
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
          "id": "d6d87834a170b07dd60f9311efe37295800a4c4e",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-20T11:15:04+09:00",
          "tree_id": "aa4baf5796af7f658859b22d9da95ce319e15ac9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d6d87834a170b07dd60f9311efe37295800a4c4e"
        },
        "date": 1681957811935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344596,
            "unit": "ns",
            "range": "± 102259.82545961197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2428294,
            "unit": "ns",
            "range": "± 48639.19955481724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2065733.7837837837,
            "unit": "ns",
            "range": "± 102214.37487977021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5024167.647058823,
            "unit": "ns",
            "range": "± 160492.99941418806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42935,
            "unit": "ns",
            "range": "± 2247.6485603031697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6929176.923076923,
            "unit": "ns",
            "range": "± 25113.646816228353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17781333.333333332,
            "unit": "ns",
            "range": "± 92027.53987387741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47410675,
            "unit": "ns",
            "range": "± 413024.6638574329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92002906.66666667,
            "unit": "ns",
            "range": "± 842730.465694414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183398880,
            "unit": "ns",
            "range": "± 1820488.8775114384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4715324.322916667,
            "unit": "ns",
            "range": "± 17358.074190271196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499944.4921875,
            "unit": "ns",
            "range": "± 3150.842593896698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143134.849330357,
            "unit": "ns",
            "range": "± 1186.995875333519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552666.2890625,
            "unit": "ns",
            "range": "± 8721.004493072971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821200.6184895834,
            "unit": "ns",
            "range": "± 2366.7285018201096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722677.7278645834,
            "unit": "ns",
            "range": "± 805.2582949599432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2984535.294117647,
            "unit": "ns",
            "range": "± 60007.13437976011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182962.2641509436,
            "unit": "ns",
            "range": "± 131526.9762128595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912384.6153846155,
            "unit": "ns",
            "range": "± 41428.59009093934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3922895.744680851,
            "unit": "ns",
            "range": "± 152409.7137687222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6798214.814814814,
            "unit": "ns",
            "range": "± 172108.88481893734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293847.7272727273,
            "unit": "ns",
            "range": "± 10831.44622258391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241789.2857142857,
            "unit": "ns",
            "range": "± 6498.623175304379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224789.156626506,
            "unit": "ns",
            "range": "± 11902.838481395662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5191326.666666667,
            "unit": "ns",
            "range": "± 67686.22424379241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3467935.714285714,
            "unit": "ns",
            "range": "± 39421.36490520098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15573.684210526315,
            "unit": "ns",
            "range": "± 1321.6857809144517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79290.4255319149,
            "unit": "ns",
            "range": "± 4594.832748753596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68892.70833333333,
            "unit": "ns",
            "range": "± 5832.634951928343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91276.04166666667,
            "unit": "ns",
            "range": "± 14256.313429064305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4662.886597938144,
            "unit": "ns",
            "range": "± 659.7536768289715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15825.263157894737,
            "unit": "ns",
            "range": "± 1632.4481302927527"
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
          "id": "d32015105825cd975599ec4c4e717f0c67127419",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-21T12:49:25+09:00",
          "tree_id": "d423617f2223528602beb3570fe557cbdc632a1d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d32015105825cd975599ec4c4e717f0c67127419"
        },
        "date": 1682050015565,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440505.0505050505,
            "unit": "ns",
            "range": "± 135288.48569626026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2644957.5757575757,
            "unit": "ns",
            "range": "± 164684.3288896007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255245.9183673467,
            "unit": "ns",
            "range": "± 134665.9350219404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5702281.25,
            "unit": "ns",
            "range": "± 377728.48625560047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52863.15789473684,
            "unit": "ns",
            "range": "± 5110.9197371814025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7073742.857142857,
            "unit": "ns",
            "range": "± 95131.05708430882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19680364.285714287,
            "unit": "ns",
            "range": "± 192921.05442838074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50008716.666666664,
            "unit": "ns",
            "range": "± 906171.0345235736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102661492.3076923,
            "unit": "ns",
            "range": "± 722710.7298930632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200666913.33333334,
            "unit": "ns",
            "range": "± 3382328.680883011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4765652.708333333,
            "unit": "ns",
            "range": "± 47229.12120847786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503174.6614583333,
            "unit": "ns",
            "range": "± 7250.019832439889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159190.9505208333,
            "unit": "ns",
            "range": "± 11327.134044621267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611528.5677083335,
            "unit": "ns",
            "range": "± 7596.416682510899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835741.1979166666,
            "unit": "ns",
            "range": "± 3608.2777424877054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761791.97265625,
            "unit": "ns",
            "range": "± 2329.629069143163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260642.1052631577,
            "unit": "ns",
            "range": "± 112106.71709166093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3706992.8571428573,
            "unit": "ns",
            "range": "± 59655.98125000627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3958972.5490196077,
            "unit": "ns",
            "range": "± 160151.1611927074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4352650,
            "unit": "ns",
            "range": "± 172020.8691169903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7080420.754716981,
            "unit": "ns",
            "range": "± 275363.05011502584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318165.1515151515,
            "unit": "ns",
            "range": "± 14782.166932065787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263123.6842105263,
            "unit": "ns",
            "range": "± 13288.198959187335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211751.16279069768,
            "unit": "ns",
            "range": "± 7683.543704165455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5277106.666666667,
            "unit": "ns",
            "range": "± 56742.544716926306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551624,
            "unit": "ns",
            "range": "± 91432.00697786306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23258.42105263158,
            "unit": "ns",
            "range": "± 3924.355568668479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91125.80645161291,
            "unit": "ns",
            "range": "± 6724.4508944371855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86420.40816326531,
            "unit": "ns",
            "range": "± 10919.961474042471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114462.88659793814,
            "unit": "ns",
            "range": "± 17679.056109252255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7239.1752577319585,
            "unit": "ns",
            "range": "± 1536.9447982002403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20748.96907216495,
            "unit": "ns",
            "range": "± 2708.9548586340165"
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
          "id": "4b9110e1deed3f401fdb6a961798f4bb984d8103",
          "message": "doc: update changelog",
          "timestamp": "2023-04-21T13:27:24+09:00",
          "tree_id": "b995b8dde84b1e31c1acde9d2eb4eb1410ea9f0e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4b9110e1deed3f401fdb6a961798f4bb984d8103"
        },
        "date": 1682052246480,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447616,
            "unit": "ns",
            "range": "± 143855.1752930212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2659388.6597938146,
            "unit": "ns",
            "range": "± 153399.02139809585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2319830,
            "unit": "ns",
            "range": "± 169462.87844751478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5693547.252747253,
            "unit": "ns",
            "range": "± 319070.74149113405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53933.68421052631,
            "unit": "ns",
            "range": "± 4237.035558589051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7221347.368421053,
            "unit": "ns",
            "range": "± 157265.9331918075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20119578.57142857,
            "unit": "ns",
            "range": "± 304236.67704492935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50108284.21052632,
            "unit": "ns",
            "range": "± 1075794.0551896011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100113283.33333333,
            "unit": "ns",
            "range": "± 2532364.7691551014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201765250,
            "unit": "ns",
            "range": "± 3222861.5394851062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900996.930803572,
            "unit": "ns",
            "range": "± 18622.138557220682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542438.6979166667,
            "unit": "ns",
            "range": "± 6443.605437945655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179562.9324776786,
            "unit": "ns",
            "range": "± 3157.553727262899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635115.4947916665,
            "unit": "ns",
            "range": "± 5810.287482330384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831485.625,
            "unit": "ns",
            "range": "± 2587.8472400444375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769531.9270833334,
            "unit": "ns",
            "range": "± 2772.2828747198278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3220292.8571428573,
            "unit": "ns",
            "range": "± 101590.45023934057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3492752.6315789474,
            "unit": "ns",
            "range": "± 75670.70010116973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3940302.5,
            "unit": "ns",
            "range": "± 138361.9732246378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4356538.636363637,
            "unit": "ns",
            "range": "± 239154.4840175599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7009250,
            "unit": "ns",
            "range": "± 226015.78283586545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329900,
            "unit": "ns",
            "range": "± 9351.569486019545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268640.8602150538,
            "unit": "ns",
            "range": "± 15263.221186601384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215311.90476190476,
            "unit": "ns",
            "range": "± 4851.028364220951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5300430.769230769,
            "unit": "ns",
            "range": "± 49248.50902337695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3594540,
            "unit": "ns",
            "range": "± 55744.61921502892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23777.319587628866,
            "unit": "ns",
            "range": "± 3685.11943368866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103133,
            "unit": "ns",
            "range": "± 10176.096520967183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103583.33333333333,
            "unit": "ns",
            "range": "± 13455.732410161754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135079.5918367347,
            "unit": "ns",
            "range": "± 20395.55722383825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9469.072164948453,
            "unit": "ns",
            "range": "± 1411.807413148587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23329.032258064515,
            "unit": "ns",
            "range": "± 2569.747942518593"
          }
        ]
      }
    ]
  }
}