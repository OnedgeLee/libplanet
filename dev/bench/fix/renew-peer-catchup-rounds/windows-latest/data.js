window.BENCHMARK_DATA = {
  "lastUpdate": 1700814509237,
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
        "date": 1700811475621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 898719.3548387097,
            "unit": "ns",
            "range": "± 94440.27933275508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1586973.611111111,
            "unit": "ns",
            "range": "± 77864.96435560833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1229138.5416666667,
            "unit": "ns",
            "range": "± 102679.6452639718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4984941.052631579,
            "unit": "ns",
            "range": "± 324345.46118354966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31335.714285714286,
            "unit": "ns",
            "range": "± 1691.4129587128903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5091014.285714285,
            "unit": "ns",
            "range": "± 27520.869204264636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12720761.904761905,
            "unit": "ns",
            "range": "± 302474.45921298955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31105688.888888888,
            "unit": "ns",
            "range": "± 657881.1879939567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62022056.25,
            "unit": "ns",
            "range": "± 1146649.1081807315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 124985286.66666667,
            "unit": "ns",
            "range": "± 1877719.1996320076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3027845.926339286,
            "unit": "ns",
            "range": "± 23280.07591726981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 946745.0911458334,
            "unit": "ns",
            "range": "± 8722.950396263399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 649170.60546875,
            "unit": "ns",
            "range": "± 6156.684244697516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1880044.140625,
            "unit": "ns",
            "range": "± 15802.230145030198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 590763.9508928572,
            "unit": "ns",
            "range": "± 4710.999322524894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 519565.55739182694,
            "unit": "ns",
            "range": "± 5629.687957577963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2014765.7894736843,
            "unit": "ns",
            "range": "± 68798.09286449965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2155188.0597014925,
            "unit": "ns",
            "range": "± 101758.18263931893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2660806.25,
            "unit": "ns",
            "range": "± 51515.60888054545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2453105.0632911394,
            "unit": "ns",
            "range": "± 125941.60622749978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5777874.712643678,
            "unit": "ns",
            "range": "± 314001.63242739293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 161394.44444444444,
            "unit": "ns",
            "range": "± 6738.663902805106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154053.125,
            "unit": "ns",
            "range": "± 12787.081911671226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 135595.3125,
            "unit": "ns",
            "range": "± 6196.47697364564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2602620,
            "unit": "ns",
            "range": "± 68669.84418214446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2350222.727272727,
            "unit": "ns",
            "range": "± 87407.68382922068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8674.157303370786,
            "unit": "ns",
            "range": "± 881.6987851311446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47404.945054945056,
            "unit": "ns",
            "range": "± 4306.874704373198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42020.21276595745,
            "unit": "ns",
            "range": "± 3072.408595532143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 40179.06976744186,
            "unit": "ns",
            "range": "± 4596.369827926735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2060.2150537634407,
            "unit": "ns",
            "range": "± 265.0429763946565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8975.555555555555,
            "unit": "ns",
            "range": "± 1064.2622713749463"
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
        "date": 1700812885084,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 913828.125,
            "unit": "ns",
            "range": "± 71338.15499823801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1658138,
            "unit": "ns",
            "range": "± 63729.418094097215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1241169.6629213484,
            "unit": "ns",
            "range": "± 68753.42868226214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4759002.631578947,
            "unit": "ns",
            "range": "± 164030.33253909965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34291.666666666664,
            "unit": "ns",
            "range": "± 1541.437988842343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5064150,
            "unit": "ns",
            "range": "± 24307.92051986348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13125800,
            "unit": "ns",
            "range": "± 133280.0925754596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32352046.153846152,
            "unit": "ns",
            "range": "± 358166.58278745244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65515371.428571425,
            "unit": "ns",
            "range": "± 237549.65935429302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128321900,
            "unit": "ns",
            "range": "± 372732.6965493141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3138586.1478365385,
            "unit": "ns",
            "range": "± 7084.06930180004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 985729.4791666666,
            "unit": "ns",
            "range": "± 1648.7144308331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734707.1428571428,
            "unit": "ns",
            "range": "± 1628.3196758466238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915598.3119419643,
            "unit": "ns",
            "range": "± 2422.978905721936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606649.375,
            "unit": "ns",
            "range": "± 1342.7032042306075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554209.1120793269,
            "unit": "ns",
            "range": "± 1031.4891733458858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097631.25,
            "unit": "ns",
            "range": "± 63799.98704368359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2228475,
            "unit": "ns",
            "range": "± 79213.4369267209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2736707.1428571427,
            "unit": "ns",
            "range": "± 85170.04543062931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2597408.3333333335,
            "unit": "ns",
            "range": "± 111129.10539085497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5996170.422535211,
            "unit": "ns",
            "range": "± 293641.8296371892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165598.2142857143,
            "unit": "ns",
            "range": "± 6604.419761766389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160701.23456790124,
            "unit": "ns",
            "range": "± 8411.606473010379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141700,
            "unit": "ns",
            "range": "± 2981.9062201689635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2680472.222222222,
            "unit": "ns",
            "range": "± 53444.04226473491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460606.6666666665,
            "unit": "ns",
            "range": "± 35617.50104867523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9877.011494252874,
            "unit": "ns",
            "range": "± 755.0914236076852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48378.260869565216,
            "unit": "ns",
            "range": "± 2289.1604912010216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43832.72727272727,
            "unit": "ns",
            "range": "± 1758.2666701901856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48695.91836734694,
            "unit": "ns",
            "range": "± 11529.763531228686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2251.6129032258063,
            "unit": "ns",
            "range": "± 357.71402934218116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9376.08695652174,
            "unit": "ns",
            "range": "± 1111.7128221572677"
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
        "date": 1700813364314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943494.7368421053,
            "unit": "ns",
            "range": "± 102020.21219056904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1695106.6666666667,
            "unit": "ns",
            "range": "± 60897.44508747322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327700,
            "unit": "ns",
            "range": "± 110979.3337754941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4906833.333333333,
            "unit": "ns",
            "range": "± 247823.05279270426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34469.86301369863,
            "unit": "ns",
            "range": "± 1726.5641001958882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5017596.153846154,
            "unit": "ns",
            "range": "± 21490.952180883603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13179033.333333334,
            "unit": "ns",
            "range": "± 126044.70673232611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32774878.57142857,
            "unit": "ns",
            "range": "± 279227.6991400262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64640307.14285714,
            "unit": "ns",
            "range": "± 723425.1401538333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133517714.28571428,
            "unit": "ns",
            "range": "± 1153750.8282234834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3121953.348214286,
            "unit": "ns",
            "range": "± 9044.61342271325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 991622.5911458334,
            "unit": "ns",
            "range": "± 2489.0139195335546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 691230.1692708334,
            "unit": "ns",
            "range": "± 2668.3244818310895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931742.9129464286,
            "unit": "ns",
            "range": "± 5079.051299131921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612522.6841517857,
            "unit": "ns",
            "range": "± 1325.0449342837903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553892.5911458334,
            "unit": "ns",
            "range": "± 1262.1512188170434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166033.3333333335,
            "unit": "ns",
            "range": "± 37618.56811026526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244040,
            "unit": "ns",
            "range": "± 33447.481220564274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767971.4285714286,
            "unit": "ns",
            "range": "± 48917.393926612946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588860.9375,
            "unit": "ns",
            "range": "± 118183.04825289131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6040069.047619048,
            "unit": "ns",
            "range": "± 323675.18895656796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169312.06896551725,
            "unit": "ns",
            "range": "± 6533.075834154188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167446.39175257733,
            "unit": "ns",
            "range": "± 12632.341610060446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142190,
            "unit": "ns",
            "range": "± 3237.429129482382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2740906.6666666665,
            "unit": "ns",
            "range": "± 36506.99476356095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515426.6666666665,
            "unit": "ns",
            "range": "± 34579.09084706427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10644.565217391304,
            "unit": "ns",
            "range": "± 1648.9333302374853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53212.765957446805,
            "unit": "ns",
            "range": "± 5331.993797690841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44067.74193548387,
            "unit": "ns",
            "range": "± 1308.7875042125042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49477.90697674418,
            "unit": "ns",
            "range": "± 7747.202928462264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2415.3061224489797,
            "unit": "ns",
            "range": "± 410.77047063994024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10240.20618556701,
            "unit": "ns",
            "range": "± 1787.6695603619464"
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
        "date": 1700814248205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 911480.2083333334,
            "unit": "ns",
            "range": "± 87721.66703457339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1627763.888888889,
            "unit": "ns",
            "range": "± 53804.51469521217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1292012.2448979593,
            "unit": "ns",
            "range": "± 126323.3237235229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4930232.7272727275,
            "unit": "ns",
            "range": "± 209125.77914184445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33082.25806451613,
            "unit": "ns",
            "range": "± 1508.9377648573138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4968646.666666667,
            "unit": "ns",
            "range": "± 39581.61309545248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12965364.285714285,
            "unit": "ns",
            "range": "± 78839.15082810509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32080006.666666668,
            "unit": "ns",
            "range": "± 307912.4283360604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63656307.692307696,
            "unit": "ns",
            "range": "± 232646.8190968822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128547578.57142857,
            "unit": "ns",
            "range": "± 563412.5748556687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3103265.3385416665,
            "unit": "ns",
            "range": "± 7104.749188737461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1007001.0184151785,
            "unit": "ns",
            "range": "± 1286.0822811794678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 674906.3701923077,
            "unit": "ns",
            "range": "± 1253.0848211465654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1886942.3978365385,
            "unit": "ns",
            "range": "± 2621.7072273218537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603917.4107142857,
            "unit": "ns",
            "range": "± 1661.5973561862322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546475.5634014423,
            "unit": "ns",
            "range": "± 1129.0994827022396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2072077.142857143,
            "unit": "ns",
            "range": "± 37480.94485056049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2177638.095238095,
            "unit": "ns",
            "range": "± 106776.844094974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2705052,
            "unit": "ns",
            "range": "± 69720.92655723961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2673095,
            "unit": "ns",
            "range": "± 53637.02055189317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5955555,
            "unit": "ns",
            "range": "± 311167.96103500685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164973.1343283582,
            "unit": "ns",
            "range": "± 7491.987277116157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158801.75438596492,
            "unit": "ns",
            "range": "± 6179.357665071848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139371.42857142858,
            "unit": "ns",
            "range": "± 3475.1879397999783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2674440,
            "unit": "ns",
            "range": "± 30901.70591684913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2358546.153846154,
            "unit": "ns",
            "range": "± 18517.046893093553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9009.302325581395,
            "unit": "ns",
            "range": "± 782.5490635964651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49402.17391304348,
            "unit": "ns",
            "range": "± 3485.7631406506357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42905.1282051282,
            "unit": "ns",
            "range": "± 1396.6027800474149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44890.816326530614,
            "unit": "ns",
            "range": "± 9091.117640053817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2187.912087912088,
            "unit": "ns",
            "range": "± 266.59797650110005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9083.870967741936,
            "unit": "ns",
            "range": "± 879.759147200385"
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
        "date": 1700814482223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965005.1020408163,
            "unit": "ns",
            "range": "± 100534.43696036664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1695698.4126984128,
            "unit": "ns",
            "range": "± 70482.36451139572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1333812.2448979593,
            "unit": "ns",
            "range": "± 122892.70927458075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5007688.541666667,
            "unit": "ns",
            "range": "± 296685.0514637726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33814.28571428572,
            "unit": "ns",
            "range": "± 1249.6441051797067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5145414.285714285,
            "unit": "ns",
            "range": "± 58062.23262278895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13558193.333333334,
            "unit": "ns",
            "range": "± 230254.9222885262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32496935.714285713,
            "unit": "ns",
            "range": "± 306459.49062739825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65135800,
            "unit": "ns",
            "range": "± 273777.25645832263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131655053.33333333,
            "unit": "ns",
            "range": "± 1289734.4072475138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3181573.465401786,
            "unit": "ns",
            "range": "± 5675.845054683915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1011634.1378348215,
            "unit": "ns",
            "range": "± 2295.014714236303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 705252.2809709822,
            "unit": "ns",
            "range": "± 1582.9848182354428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947541.9320913462,
            "unit": "ns",
            "range": "± 2325.071568067265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619633.1612723215,
            "unit": "ns",
            "range": "± 1206.4037729540444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555947.16796875,
            "unit": "ns",
            "range": "± 361.90240086323973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2138580.9523809524,
            "unit": "ns",
            "range": "± 50881.87908330056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296907.8947368423,
            "unit": "ns",
            "range": "± 66133.74402036211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810114.814814815,
            "unit": "ns",
            "range": "± 74131.60181369608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2662492.1052631577,
            "unit": "ns",
            "range": "± 87569.41457164742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5862590,
            "unit": "ns",
            "range": "± 205765.68177145527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172458.20895522388,
            "unit": "ns",
            "range": "± 7846.638910903216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166197.67441860464,
            "unit": "ns",
            "range": "± 8549.371861951386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137408.33333333334,
            "unit": "ns",
            "range": "± 3529.1231410829996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2734100,
            "unit": "ns",
            "range": "± 39444.28258406316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2529713.3333333335,
            "unit": "ns",
            "range": "± 35653.58861254195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11313.978494623656,
            "unit": "ns",
            "range": "± 1821.4656901523172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56469.38775510204,
            "unit": "ns",
            "range": "± 7079.9325549129735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43846.34146341463,
            "unit": "ns",
            "range": "± 2327.516300453521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49030.864197530864,
            "unit": "ns",
            "range": "± 4716.265524101369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2589.5833333333335,
            "unit": "ns",
            "range": "± 453.86739697304506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10345.054945054944,
            "unit": "ns",
            "range": "± 1385.2608046673004"
          }
        ]
      }
    ]
  }
}