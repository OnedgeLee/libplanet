window.BENCHMARK_DATA = {
  "lastUpdate": 1702343355554,
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
          "id": "7ac534e31f659ecb30de1ef01da73e3233cf06d0",
          "message": "test: Replace <T> with IActionLoader param",
          "timestamp": "2023-12-05T08:13:56+09:00",
          "tree_id": "44c43ad053606bbc2e73640a0517240d3dcd1890",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7ac534e31f659ecb30de1ef01da73e3233cf06d0"
        },
        "date": 1701733451969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 16107754.164705882,
            "unit": "ns",
            "range": "± 2866856.989237488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 37090650.32608695,
            "unit": "ns",
            "range": "± 9032237.61268605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 89105356.47894737,
            "unit": "ns",
            "range": "± 11395434.76341337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 171590752.3372093,
            "unit": "ns",
            "range": "± 20805851.087190762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 363313181.48913044,
            "unit": "ns",
            "range": "± 45319740.816756405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79312.05376344085,
            "unit": "ns",
            "range": "± 19186.31143344106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 427988.26804123714,
            "unit": "ns",
            "range": "± 126189.30184585408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344735.64705882355,
            "unit": "ns",
            "range": "± 53367.50798867761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284906.20652173914,
            "unit": "ns",
            "range": "± 16120.134157090455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5419852.357142857,
            "unit": "ns",
            "range": "± 84264.4601173154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4875234.266666667,
            "unit": "ns",
            "range": "± 57868.92564539609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17452.855555555554,
            "unit": "ns",
            "range": "± 2347.6442043806483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78246.21111111112,
            "unit": "ns",
            "range": "± 6280.907687291674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92282.0459770115,
            "unit": "ns",
            "range": "± 9995.635538164395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88284.6530612245,
            "unit": "ns",
            "range": "± 20937.814875971522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6053.163157894737,
            "unit": "ns",
            "range": "± 996.6494999526558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18813.48947368421,
            "unit": "ns",
            "range": "± 2964.3223024249533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515702.5319148935,
            "unit": "ns",
            "range": "± 154907.4943477247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3252171.9655172415,
            "unit": "ns",
            "range": "± 242262.41341802635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2788393.2011494255,
            "unit": "ns",
            "range": "± 295410.61184565787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19730848.078651685,
            "unit": "ns",
            "range": "± 3812135.525973274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5407277.75257732,
            "unit": "ns",
            "range": "± 1212511.827929672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4988421.8125,
            "unit": "ns",
            "range": "± 904079.1441666958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6527439.257575758,
            "unit": "ns",
            "range": "± 1322058.7833895166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6213523.1736842105,
            "unit": "ns",
            "range": "± 1200145.5058538355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26404886.785714287,
            "unit": "ns",
            "range": "± 6949867.092570643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5217421.758295747,
            "unit": "ns",
            "range": "± 782279.675063024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1369940.7903988487,
            "unit": "ns",
            "range": "± 46166.23386860844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995412.2718359375,
            "unit": "ns",
            "range": "± 93385.32231801112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2969445.9262907607,
            "unit": "ns",
            "range": "± 462735.82063314173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945104.3761935764,
            "unit": "ns",
            "range": "± 73158.22851323397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 712316.9425195312,
            "unit": "ns",
            "range": "± 106734.96025050269"
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
          "id": "c445f1699a916d380b0112db2f87deb56966e171",
          "message": "test: Replace <T> with IActionLoader param",
          "timestamp": "2023-12-12T09:45:09+09:00",
          "tree_id": "daaadc2affc0f5d452ecfc7e371dc42205bab30c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c445f1699a916d380b0112db2f87deb56966e171"
        },
        "date": 1702343299649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7579121.583333333,
            "unit": "ns",
            "range": "± 54738.56460478686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18869315.166666668,
            "unit": "ns",
            "range": "± 147630.46427626055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46511338.733333334,
            "unit": "ns",
            "range": "± 717487.5788123908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94382815.3076923,
            "unit": "ns",
            "range": "± 2249490.1926751984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192730188.34615386,
            "unit": "ns",
            "range": "± 5182940.077498798"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35853.1724137931,
            "unit": "ns",
            "range": "± 3205.6654035051993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278797.44705882354,
            "unit": "ns",
            "range": "± 30376.03470058415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263043.5,
            "unit": "ns",
            "range": "± 39665.1720168159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258777.85714285713,
            "unit": "ns",
            "range": "± 28393.043691646228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4604224.14893617,
            "unit": "ns",
            "range": "± 359688.13841412903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4082587.3469387754,
            "unit": "ns",
            "range": "± 314776.5173258576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20419.863636363636,
            "unit": "ns",
            "range": "± 3158.4627651220594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85175.03157894737,
            "unit": "ns",
            "range": "± 8769.024191148614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87289.54347826086,
            "unit": "ns",
            "range": "± 9544.857246456424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111897.44680851063,
            "unit": "ns",
            "range": "± 23713.197018223782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9033.788888888888,
            "unit": "ns",
            "range": "± 2261.5862857660427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27830.815789473683,
            "unit": "ns",
            "range": "± 7822.702133225676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1298198.4175824176,
            "unit": "ns",
            "range": "± 96393.67400187235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662529.880952381,
            "unit": "ns",
            "range": "± 92000.17331722868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2149613.586956522,
            "unit": "ns",
            "range": "± 179291.070996094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21638467.615384616,
            "unit": "ns",
            "range": "± 2677796.459819092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2832814.277777778,
            "unit": "ns",
            "range": "± 106330.15834095767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3038481.1428571427,
            "unit": "ns",
            "range": "± 46895.065123113956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3840989.53125,
            "unit": "ns",
            "range": "± 320539.00948489393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4196777.376344086,
            "unit": "ns",
            "range": "± 387729.8344778709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30642098.64516129,
            "unit": "ns",
            "range": "± 6692993.221743745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5686949.548867985,
            "unit": "ns",
            "range": "± 811248.2941828592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1743842.6716333763,
            "unit": "ns",
            "range": "± 176481.64727132735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150719.6384114583,
            "unit": "ns",
            "range": "± 13666.894505481065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2165752.8154296875,
            "unit": "ns",
            "range": "± 66325.74352141024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 665725.5856119791,
            "unit": "ns",
            "range": "± 20227.794091508786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727955.853515625,
            "unit": "ns",
            "range": "± 9351.65361377492"
          }
        ]
      }
    ]
  }
}