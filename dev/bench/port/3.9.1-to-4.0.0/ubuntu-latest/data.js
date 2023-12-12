window.BENCHMARK_DATA = {
  "lastUpdate": 1702364386768,
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
          "id": "a52b5d8aafec4a715a2d72a7e6a0e7ae826b337d",
          "message": "Merge tag '3.9.1' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.1",
          "timestamp": "2023-12-12T13:00:47+09:00",
          "tree_id": "bdc4cf32fcc1981925da19166e015cf11ccac18f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a52b5d8aafec4a715a2d72a7e6a0e7ae826b337d"
        },
        "date": 1702354366715,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207382.40425531915,
            "unit": "ns",
            "range": "± 12036.390917045637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197264.87931034484,
            "unit": "ns",
            "range": "± 8631.116501596178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165275.28205128206,
            "unit": "ns",
            "range": "± 5777.439202115678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3243766.6153846155,
            "unit": "ns",
            "range": "± 18485.002567570198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2827045.1333333333,
            "unit": "ns",
            "range": "± 43532.711354085164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15772.21875,
            "unit": "ns",
            "range": "± 2879.895784675568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64607.336956521736,
            "unit": "ns",
            "range": "± 5084.517988062084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58703.90217391304,
            "unit": "ns",
            "range": "± 5545.941842860491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88935.13829787234,
            "unit": "ns",
            "range": "± 8914.806185484576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6539.9157894736845,
            "unit": "ns",
            "range": "± 760.966164472143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13997.744897959185,
            "unit": "ns",
            "range": "± 2315.0917699573415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39383.82978723404,
            "unit": "ns",
            "range": "± 6068.525865955408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015118.5918367347,
            "unit": "ns",
            "range": "± 83903.58900091074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1905711.5957446808,
            "unit": "ns",
            "range": "± 66889.5869336858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663656.6288659794,
            "unit": "ns",
            "range": "± 158762.8545777422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12784636.43298969,
            "unit": "ns",
            "range": "± 1097399.061093167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450915.1627906975,
            "unit": "ns",
            "range": "± 89913.21663002932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2509271.0625,
            "unit": "ns",
            "range": "± 48271.6265763768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3155936.076923077,
            "unit": "ns",
            "range": "± 85414.26940326685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3316991.1470588236,
            "unit": "ns",
            "range": "± 135280.52306105616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13942910.033707865,
            "unit": "ns",
            "range": "± 771503.8269236295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573950,
            "unit": "ns",
            "range": "± 57067.60586755454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464889.714285715,
            "unit": "ns",
            "range": "± 61553.70757617795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36578131.13333333,
            "unit": "ns",
            "range": "± 269086.87468544603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75805938.16666667,
            "unit": "ns",
            "range": "± 472612.2867269136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151667658.76923078,
            "unit": "ns",
            "range": "± 1396955.0850678268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3777004.4001116073,
            "unit": "ns",
            "range": "± 8376.33007200509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215219.05859375,
            "unit": "ns",
            "range": "± 3993.310769485343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765689.5388371394,
            "unit": "ns",
            "range": "± 1817.0554038703244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959670.9444754464,
            "unit": "ns",
            "range": "± 12130.617101271007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619156.4197716346,
            "unit": "ns",
            "range": "± 998.3549797749507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584034.0122395833,
            "unit": "ns",
            "range": "± 1905.7936933450633"
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
          "id": "6e81f26463650a63ab15fa2bf73a681f6c20867c",
          "message": "Merge tag '3.9.1' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.1",
          "timestamp": "2023-12-12T15:47:51+09:00",
          "tree_id": "bdc4cf32fcc1981925da19166e015cf11ccac18f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6e81f26463650a63ab15fa2bf73a681f6c20867c"
        },
        "date": 1702364376736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202014.92857142858,
            "unit": "ns",
            "range": "± 9782.707749282277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193653.77777777778,
            "unit": "ns",
            "range": "± 6384.622761475357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170762.25,
            "unit": "ns",
            "range": "± 1831.6183666116397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3251187.8571428573,
            "unit": "ns",
            "range": "± 55794.560215762336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879712.9285714286,
            "unit": "ns",
            "range": "± 42330.76347321502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13344.782608695652,
            "unit": "ns",
            "range": "± 1273.516614578038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65780.22164948453,
            "unit": "ns",
            "range": "± 9735.226246881164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63450.13684210526,
            "unit": "ns",
            "range": "± 6888.810615326931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70466.24468085106,
            "unit": "ns",
            "range": "± 15391.06236451223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3003.627659574468,
            "unit": "ns",
            "range": "± 440.57763242641306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13762.30303030303,
            "unit": "ns",
            "range": "± 2733.0331638277935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39544.405263157896,
            "unit": "ns",
            "range": "± 4703.743231145431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976626.5056179776,
            "unit": "ns",
            "range": "± 67771.39163127147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892729.5454545454,
            "unit": "ns",
            "range": "± 58787.00971945828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666017.0957446808,
            "unit": "ns",
            "range": "± 156414.95845814698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12850340.287234042,
            "unit": "ns",
            "range": "± 967420.1763112214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424612.023809524,
            "unit": "ns",
            "range": "± 86578.78046104236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496963.012195122,
            "unit": "ns",
            "range": "± 88332.1281137622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3230407.111111111,
            "unit": "ns",
            "range": "± 65799.63540564902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3368077.7,
            "unit": "ns",
            "range": "± 56856.98887333778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14364057.688172042,
            "unit": "ns",
            "range": "± 1006985.3159514744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5649102.142857143,
            "unit": "ns",
            "range": "± 33399.66070269195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14349293.07142857,
            "unit": "ns",
            "range": "± 62506.262945852424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36077259.428571425,
            "unit": "ns",
            "range": "± 142627.73382451807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73292079.76923077,
            "unit": "ns",
            "range": "± 252427.05292821853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153952890,
            "unit": "ns",
            "range": "± 2516930.775765045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708217.120768229,
            "unit": "ns",
            "range": "± 14535.487801285888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204628.4741908482,
            "unit": "ns",
            "range": "± 5146.173182657178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775190.6321614584,
            "unit": "ns",
            "range": "± 3847.1875548373596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959752.5081380208,
            "unit": "ns",
            "range": "± 4576.12226306305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621450.2076822916,
            "unit": "ns",
            "range": "± 942.6447703388349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575524.0809795673,
            "unit": "ns",
            "range": "± 780.0231870777504"
          }
        ]
      }
    ]
  }
}