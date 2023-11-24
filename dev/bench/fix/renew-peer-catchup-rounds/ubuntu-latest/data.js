window.BENCHMARK_DATA = {
  "lastUpdate": 1700815751727,
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
          "id": "ca7e2ee1d6abb17ae427af8e61dcb1c622b666a1",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T17:13:10+09:00",
          "tree_id": "1ebeb6c172976091e9aa4a9c6dfb941b063df094",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ca7e2ee1d6abb17ae427af8e61dcb1c622b666a1"
        },
        "date": 1700814235462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193784.625,
            "unit": "ns",
            "range": "± 7624.846023209883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193773.67741935485,
            "unit": "ns",
            "range": "± 5827.772052205982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169556.96153846153,
            "unit": "ns",
            "range": "± 2268.106244402461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3132079.3333333335,
            "unit": "ns",
            "range": "± 30201.257853811006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798978.923076923,
            "unit": "ns",
            "range": "± 22934.363567441538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12778.01030927835,
            "unit": "ns",
            "range": "± 1656.2170090729692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60764.02127659575,
            "unit": "ns",
            "range": "± 6773.154689740619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50724.375,
            "unit": "ns",
            "range": "± 841.4163357102119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71876.54166666667,
            "unit": "ns",
            "range": "± 18742.305234789957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3147.6458333333335,
            "unit": "ns",
            "range": "± 732.8584982851545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12208.051020408164,
            "unit": "ns",
            "range": "± 1598.3865600374104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3677195.9703125,
            "unit": "ns",
            "range": "± 54167.1575344381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1154934.90625,
            "unit": "ns",
            "range": "± 2558.95325869736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744444.0268880208,
            "unit": "ns",
            "range": "± 10907.285495258679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931112.0852864583,
            "unit": "ns",
            "range": "± 4912.040706788658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608904.3384915865,
            "unit": "ns",
            "range": "± 656.7022896382254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 597637.06640625,
            "unit": "ns",
            "range": "± 3484.8003296848706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40675.61578947368,
            "unit": "ns",
            "range": "± 5962.957432140029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396319.1052631577,
            "unit": "ns",
            "range": "± 43079.15677872632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531467.909090909,
            "unit": "ns",
            "range": "± 80065.78265845047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156308.4166666665,
            "unit": "ns",
            "range": "± 81104.29067399507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3026198.411764706,
            "unit": "ns",
            "range": "± 61531.64033046213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6479018.85,
            "unit": "ns",
            "range": "± 117663.00851037746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5568671.5,
            "unit": "ns",
            "range": "± 61285.56405658133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14762919.966666667,
            "unit": "ns",
            "range": "± 109834.55039601718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36932716.071428575,
            "unit": "ns",
            "range": "± 235751.2603964886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77147025.15384616,
            "unit": "ns",
            "range": "± 898161.8602978202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150823523.46666667,
            "unit": "ns",
            "range": "± 1249012.0792844277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958651.4,
            "unit": "ns",
            "range": "± 92852.07954297695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841784.049180328,
            "unit": "ns",
            "range": "± 82269.45317156022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1398977.9789473685,
            "unit": "ns",
            "range": "± 113803.3997235489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5724256.9,
            "unit": "ns",
            "range": "± 318753.9793943817"
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
          "id": "26e89d54331415af2b3fb7c004fec34ea5cff936",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T17:16:29+09:00",
          "tree_id": "823e0e4b5f0acd4aed41a53028678dc6a8f29620",
          "url": "https://github.com/OnedgeLee/libplanet/commit/26e89d54331415af2b3fb7c004fec34ea5cff936"
        },
        "date": 1700814456254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244217.66666666666,
            "unit": "ns",
            "range": "± 7404.638952544807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237743.47674418605,
            "unit": "ns",
            "range": "± 8794.769234061725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173643.48571428572,
            "unit": "ns",
            "range": "± 5655.9604602340605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3154160.6923076925,
            "unit": "ns",
            "range": "± 16266.284104370689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3075344.5714285714,
            "unit": "ns",
            "range": "± 39198.91496283712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25357.886597938144,
            "unit": "ns",
            "range": "± 3937.418906245056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99553.0101010101,
            "unit": "ns",
            "range": "± 10134.435077330736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91525.5612244898,
            "unit": "ns",
            "range": "± 9515.687905277575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95451.9587628866,
            "unit": "ns",
            "range": "± 12969.000589480613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7704.432989690722,
            "unit": "ns",
            "range": "± 922.0526004881774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20645.840425531915,
            "unit": "ns",
            "range": "± 2162.5051049884005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3705199.494010417,
            "unit": "ns",
            "range": "± 51433.240059675816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1178429.0811941964,
            "unit": "ns",
            "range": "± 19190.059946708367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736012.8416341146,
            "unit": "ns",
            "range": "± 2512.683336183569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976796.6227864583,
            "unit": "ns",
            "range": "± 25487.414064471075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612590.9253255208,
            "unit": "ns",
            "range": "± 9885.608979641489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567317.6377766927,
            "unit": "ns",
            "range": "± 1065.4400393299293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43787.364583333336,
            "unit": "ns",
            "range": "± 6113.1726315862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2737639,
            "unit": "ns",
            "range": "± 40158.169375252015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2750861.6875,
            "unit": "ns",
            "range": "± 49840.82937474556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3266648.785714286,
            "unit": "ns",
            "range": "± 54575.0134249655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3131672.177777778,
            "unit": "ns",
            "range": "± 116988.74527536416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6847166.321428572,
            "unit": "ns",
            "range": "± 191179.32559056493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6160533.642857143,
            "unit": "ns",
            "range": "± 41006.106431954635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15610041.566666666,
            "unit": "ns",
            "range": "± 99568.69069460589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38402553.78571428,
            "unit": "ns",
            "range": "± 220979.78483046763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77430509.21428572,
            "unit": "ns",
            "range": "± 242731.9528793909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154731957.03333333,
            "unit": "ns",
            "range": "± 865384.5872671597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047221.5053763441,
            "unit": "ns",
            "range": "± 116455.61551254135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1998860.6666666667,
            "unit": "ns",
            "range": "± 82711.0939214848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1525816.4787234042,
            "unit": "ns",
            "range": "± 95494.83216527342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5694057.27027027,
            "unit": "ns",
            "range": "± 187874.31439109743"
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
          "id": "c595740c9582df20ee818ea7f7c94482486d496f",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T17:38:12+09:00",
          "tree_id": "eafb805ba61515824adce42098a61fedea96eee1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c595740c9582df20ee818ea7f7c94482486d496f"
        },
        "date": 1700815741499,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193830.36,
            "unit": "ns",
            "range": "± 9556.821225502557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195980.24626865672,
            "unit": "ns",
            "range": "± 9237.761296330313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162099.60714285713,
            "unit": "ns",
            "range": "± 4581.809430210068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3129319.933333333,
            "unit": "ns",
            "range": "± 21144.97745993011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2894781.1333333333,
            "unit": "ns",
            "range": "± 38028.72841280968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12194.410526315789,
            "unit": "ns",
            "range": "± 1587.1118657347702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59329.5,
            "unit": "ns",
            "range": "± 4330.720492383001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57915.71111111111,
            "unit": "ns",
            "range": "± 7920.252093500198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71652.8762886598,
            "unit": "ns",
            "range": "± 18169.538670680922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3793.304347826087,
            "unit": "ns",
            "range": "± 600.359914745843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11933.010416666666,
            "unit": "ns",
            "range": "± 1521.0403468456896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3640264.4149639425,
            "unit": "ns",
            "range": "± 9680.190580037968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1168056.4393136161,
            "unit": "ns",
            "range": "± 2662.125095376671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739954.9295654297,
            "unit": "ns",
            "range": "± 13655.282840704982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934481.1025390625,
            "unit": "ns",
            "range": "± 7489.12474330304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609687.37109375,
            "unit": "ns",
            "range": "± 1153.6227895593977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573684.1355168269,
            "unit": "ns",
            "range": "± 863.5303088599989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41028.536082474224,
            "unit": "ns",
            "range": "± 5330.096166779919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436466.5090909093,
            "unit": "ns",
            "range": "± 102091.10767818248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528730.2702702703,
            "unit": "ns",
            "range": "± 65701.5566565328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3129695.5,
            "unit": "ns",
            "range": "± 45232.79169223062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2962831.011627907,
            "unit": "ns",
            "range": "± 107881.65451756053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6617892.142857143,
            "unit": "ns",
            "range": "± 185406.63509706408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5802496.076923077,
            "unit": "ns",
            "range": "± 50292.370444335356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14523025.766666668,
            "unit": "ns",
            "range": "± 139240.86223748434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 40174415.807692304,
            "unit": "ns",
            "range": "± 436884.11796539073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75260097.93333334,
            "unit": "ns",
            "range": "± 467690.402029784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151354248.23076922,
            "unit": "ns",
            "range": "± 607545.5807221591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955696.7989690722,
            "unit": "ns",
            "range": "± 70339.04102825308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1845125.65625,
            "unit": "ns",
            "range": "± 81463.99707519427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1356707.4333333333,
            "unit": "ns",
            "range": "± 73810.14333585561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5486912.280701755,
            "unit": "ns",
            "range": "± 237765.54403293369"
          }
        ]
      }
    ]
  }
}