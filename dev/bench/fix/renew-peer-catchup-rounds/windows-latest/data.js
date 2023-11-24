window.BENCHMARK_DATA = {
  "lastUpdate": 1700812918803,
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
      }
    ]
  }
}