window.BENCHMARK_DATA = {
  "lastUpdate": 1700813327966,
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
          "id": "ee39a7e185928a19acdb013214687d86ccf89e75",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:25:59+09:00",
          "tree_id": "6d4a6b44d082edda3683cfeee050f02e64ce3c99",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ee39a7e185928a19acdb013214687d86ccf89e75"
        },
        "date": 1700811411577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201735.20634920636,
            "unit": "ns",
            "range": "± 9262.419392638207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191393.44047619047,
            "unit": "ns",
            "range": "± 9956.176449944945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161938.84210526315,
            "unit": "ns",
            "range": "± 3589.2714714697236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3091974.2666666666,
            "unit": "ns",
            "range": "± 47961.89939266773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877341.1428571427,
            "unit": "ns",
            "range": "± 43909.952372146516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14495.585858585859,
            "unit": "ns",
            "range": "± 2284.594940251438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68193.74626865672,
            "unit": "ns",
            "range": "± 3225.1241194968156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60178.38421052632,
            "unit": "ns",
            "range": "± 4715.59459905327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55761.897959183676,
            "unit": "ns",
            "range": "± 10137.881681059955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3458.851063829787,
            "unit": "ns",
            "range": "± 510.2296543323863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13797.747474747475,
            "unit": "ns",
            "range": "± 2495.1445230050967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3647284.2760416665,
            "unit": "ns",
            "range": "± 4906.424200264095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1140184.6854073661,
            "unit": "ns",
            "range": "± 3679.145250777516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732100.5579176683,
            "unit": "ns",
            "range": "± 1066.8133471592014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912161.750390625,
            "unit": "ns",
            "range": "± 4224.63650926842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619033.427358774,
            "unit": "ns",
            "range": "± 1715.4873029958594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 613015.4762369791,
            "unit": "ns",
            "range": "± 4073.8443333849873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39508.135416666664,
            "unit": "ns",
            "range": "± 5782.265463184171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2408872.2156862747,
            "unit": "ns",
            "range": "± 98358.01679727255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532018.2333333334,
            "unit": "ns",
            "range": "± 74619.6467799491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212775.5555555555,
            "unit": "ns",
            "range": "± 68677.61288330916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917819.4,
            "unit": "ns",
            "range": "± 93455.38177518433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6682353.325,
            "unit": "ns",
            "range": "± 234125.6296663963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5662008.538461538,
            "unit": "ns",
            "range": "± 26962.92096137269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14544135.07142857,
            "unit": "ns",
            "range": "± 99722.18464985944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37730993.85,
            "unit": "ns",
            "range": "± 563357.0179950184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76229561.73333333,
            "unit": "ns",
            "range": "± 580516.4383633479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152115949.58333334,
            "unit": "ns",
            "range": "± 1026418.7287124683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952796.8617021276,
            "unit": "ns",
            "range": "± 81413.58008036605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1886335.1153846155,
            "unit": "ns",
            "range": "± 71291.15339382383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1386421.244680851,
            "unit": "ns",
            "range": "± 113749.32009237297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5358780,
            "unit": "ns",
            "range": "± 179001.31426381043"
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
          "id": "0198780b8f9d9739f5eb7f4eb7e7609a6f592887",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:49:46+09:00",
          "tree_id": "a91f114d3e421c26443004f85fcabdf5be4ee2aa",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0198780b8f9d9739f5eb7f4eb7e7609a6f592887"
        },
        "date": 1700812859321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197029.51219512196,
            "unit": "ns",
            "range": "± 7017.326628146759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195339.38356164383,
            "unit": "ns",
            "range": "± 8459.557953433725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168414.92105263157,
            "unit": "ns",
            "range": "± 5275.225458901971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3122488.2352941176,
            "unit": "ns",
            "range": "± 57395.03547948356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2852313,
            "unit": "ns",
            "range": "± 31788.392782465547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13060.45744680851,
            "unit": "ns",
            "range": "± 1891.2078899782518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59654.61827956989,
            "unit": "ns",
            "range": "± 5201.116725509976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56627.27659574468,
            "unit": "ns",
            "range": "± 6838.501499698734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64784.42268041237,
            "unit": "ns",
            "range": "± 18866.903851296418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4895.836734693878,
            "unit": "ns",
            "range": "± 2045.619910548014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14509.447916666666,
            "unit": "ns",
            "range": "± 2993.395694981279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3621354.6729166666,
            "unit": "ns",
            "range": "± 57160.51874031764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187509.737141927,
            "unit": "ns",
            "range": "± 1531.4571369493792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735416.2513521635,
            "unit": "ns",
            "range": "± 1675.3724655542867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927069.4278846155,
            "unit": "ns",
            "range": "± 11122.851184185683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619941.0610351562,
            "unit": "ns",
            "range": "± 2217.6454395446103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572086.2025991586,
            "unit": "ns",
            "range": "± 1383.4352995356219"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40984.864583333336,
            "unit": "ns",
            "range": "± 6993.383477665145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2388526.6363636362,
            "unit": "ns",
            "range": "± 57468.43784659662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546203.9,
            "unit": "ns",
            "range": "± 97064.58276233681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3247375.5,
            "unit": "ns",
            "range": "± 37286.151965885096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3052519.3285714285,
            "unit": "ns",
            "range": "± 144156.41272607297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6844443.051282051,
            "unit": "ns",
            "range": "± 239546.1222192095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5669401.466666667,
            "unit": "ns",
            "range": "± 25579.615915989118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14750094.192307692,
            "unit": "ns",
            "range": "± 106406.18098069978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38463838.083333336,
            "unit": "ns",
            "range": "± 324749.23344481114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76017940.07692307,
            "unit": "ns",
            "range": "± 505861.66418621165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152193091.2857143,
            "unit": "ns",
            "range": "± 676301.6058197508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966177.1703296703,
            "unit": "ns",
            "range": "± 99354.92686772061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1942438.5384615385,
            "unit": "ns",
            "range": "± 108761.18505875437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1434266.412371134,
            "unit": "ns",
            "range": "± 133580.9185011056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5919221.393939394,
            "unit": "ns",
            "range": "± 453342.3191318827"
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
          "id": "d95ed8b5cd27e4226b1aebd1b6b59f55cedfd15d",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:57:39+09:00",
          "tree_id": "1fe858ac0430d230e37b7c4f8a199263253a0fcf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d95ed8b5cd27e4226b1aebd1b6b59f55cedfd15d"
        },
        "date": 1700813317856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198829.5934065934,
            "unit": "ns",
            "range": "± 11609.972133164012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188443.08823529413,
            "unit": "ns",
            "range": "± 6046.887295268167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162550.1875,
            "unit": "ns",
            "range": "± 2407.9349442693283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099089.466666667,
            "unit": "ns",
            "range": "± 43827.05354143499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929778.4,
            "unit": "ns",
            "range": "± 32528.95058647209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12294.032967032967,
            "unit": "ns",
            "range": "± 1038.9730768680458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57956.32941176471,
            "unit": "ns",
            "range": "± 3252.187924299268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51429.666666666664,
            "unit": "ns",
            "range": "± 1231.9972302885249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57492.260416666664,
            "unit": "ns",
            "range": "± 9824.064353728865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6473.88,
            "unit": "ns",
            "range": "± 1950.2053571225504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14038.336734693878,
            "unit": "ns",
            "range": "± 2088.2419031964464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3588614.896484375,
            "unit": "ns",
            "range": "± 36987.257143391245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1155416.4801432292,
            "unit": "ns",
            "range": "± 3060.969539220776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738430.24609375,
            "unit": "ns",
            "range": "± 14359.193544337062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951228.340234375,
            "unit": "ns",
            "range": "± 25889.880677398232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611784.2674967448,
            "unit": "ns",
            "range": "± 1655.0819367141248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581368.5971304086,
            "unit": "ns",
            "range": "± 2364.2438060929594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39151.80612244898,
            "unit": "ns",
            "range": "± 4855.541320875049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437869.066666667,
            "unit": "ns",
            "range": "± 38785.21378505449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2704500.125,
            "unit": "ns",
            "range": "± 69967.0147006011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3161372.8125,
            "unit": "ns",
            "range": "± 89438.73011802549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2967018,
            "unit": "ns",
            "range": "± 131475.24485382365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6598938.466666667,
            "unit": "ns",
            "range": "± 195945.50822679623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5701350.4,
            "unit": "ns",
            "range": "± 35284.26373611896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14914748.388888888,
            "unit": "ns",
            "range": "± 314325.7548761904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37027512.615384616,
            "unit": "ns",
            "range": "± 223158.8541090324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76232967.03333333,
            "unit": "ns",
            "range": "± 796335.5855830117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152737712.2,
            "unit": "ns",
            "range": "± 964847.4202193985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 926593.1685393258,
            "unit": "ns",
            "range": "± 48609.27223025832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868583.5961538462,
            "unit": "ns",
            "range": "± 76334.7698122205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1422892.72,
            "unit": "ns",
            "range": "± 129636.6684366937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5800140.085106383,
            "unit": "ns",
            "range": "± 338900.7833118257"
          }
        ]
      }
    ]
  }
}