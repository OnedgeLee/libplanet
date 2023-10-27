window.BENCHMARK_DATA = {
  "lastUpdate": 1698406012973,
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
          "id": "06c8b9b4fd62d1ca86f0bca9a50e6988b55bb4e0",
          "message": "Release 3.7.0",
          "timestamp": "2023-10-27T20:07:09+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/06c8b9b4fd62d1ca86f0bca9a50e6988b55bb4e0"
        },
        "date": 1698405969182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7500243.214285715,
            "unit": "ns",
            "range": "± 56715.02650319615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19382785.44736842,
            "unit": "ns",
            "range": "± 428719.94854611787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45611269.35714286,
            "unit": "ns",
            "range": "± 491599.54454047355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95242995.2,
            "unit": "ns",
            "range": "± 975166.113755512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192309172.35416666,
            "unit": "ns",
            "range": "± 7530543.978858308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35904.11235955056,
            "unit": "ns",
            "range": "± 3735.5668257921907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224589.98958333334,
            "unit": "ns",
            "range": "± 17114.581135452765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207400.1935483871,
            "unit": "ns",
            "range": "± 7610.195255220502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201830.2525773196,
            "unit": "ns",
            "range": "± 24432.846581681344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3791048.170212766,
            "unit": "ns",
            "range": "± 147325.282870536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3513797.911764706,
            "unit": "ns",
            "range": "± 67281.52274590218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13001.977777777778,
            "unit": "ns",
            "range": "± 2170.8464614180307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61575.5824742268,
            "unit": "ns",
            "range": "± 9070.104598659662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57951.43939393939,
            "unit": "ns",
            "range": "± 9687.386450492588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62945.63265306123,
            "unit": "ns",
            "range": "± 11760.65717239269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4252.604166666667,
            "unit": "ns",
            "range": "± 1422.639877345646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17965.177083333332,
            "unit": "ns",
            "range": "± 4035.1970877185745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1098628.8469387756,
            "unit": "ns",
            "range": "± 91510.24251718303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2209097.6363636362,
            "unit": "ns",
            "range": "± 93461.66152242314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660091.6979166667,
            "unit": "ns",
            "range": "± 93995.27678252547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7467361.8125,
            "unit": "ns",
            "range": "± 289345.42672123923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2918312.036585366,
            "unit": "ns",
            "range": "± 154241.3773769562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3106080.5,
            "unit": "ns",
            "range": "± 32809.74164376747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3554409.75,
            "unit": "ns",
            "range": "± 123498.94619808892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3541800.3181818184,
            "unit": "ns",
            "range": "± 130402.14032267114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11315721.215053763,
            "unit": "ns",
            "range": "± 983970.8032648374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5801131.6143002715,
            "unit": "ns",
            "range": "± 1034977.0893095298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558826.4814663138,
            "unit": "ns",
            "range": "± 130022.58867574616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080233.0305637668,
            "unit": "ns",
            "range": "± 36344.483882468296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2370591.196011513,
            "unit": "ns",
            "range": "± 291428.1106750417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 751140.3985385237,
            "unit": "ns",
            "range": "± 49329.96988206505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586600.851595052,
            "unit": "ns",
            "range": "± 17224.366082158722"
          }
        ]
      }
    ]
  }
}