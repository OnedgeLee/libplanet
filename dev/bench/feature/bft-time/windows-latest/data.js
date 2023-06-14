window.BENCHMARK_DATA = {
  "lastUpdate": 1681831728352,
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
          "id": "da6ff26ce0559ec68832db40f698016be24c6e7f",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-16T17:37:15+09:00",
          "tree_id": "4ee86cb37cfb63efcf2c2049367b295996ac0623",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da6ff26ce0559ec68832db40f698016be24c6e7f"
        },
        "date": 1681635182215,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1726533.6734693877,
            "unit": "ns",
            "range": "± 99455.0034959887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2835981.4814814813,
            "unit": "ns",
            "range": "± 74201.45673998713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2632041.6666666665,
            "unit": "ns",
            "range": "± 190491.8529362548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5870932.352941177,
            "unit": "ns",
            "range": "± 281193.37396981864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50487.62886597938,
            "unit": "ns",
            "range": "± 3630.5204439801846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7124918.181818182,
            "unit": "ns",
            "range": "± 102592.0568556364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19448595.833333332,
            "unit": "ns",
            "range": "± 449730.6918582224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48961019.23076923,
            "unit": "ns",
            "range": "± 458072.7296412936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99285735.71428572,
            "unit": "ns",
            "range": "± 1171044.7581324338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198806512.5,
            "unit": "ns",
            "range": "± 3886928.8743814183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4861376.40625,
            "unit": "ns",
            "range": "± 29166.15574824217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537615.5338541667,
            "unit": "ns",
            "range": "± 6894.4313770346635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1190143.828125,
            "unit": "ns",
            "range": "± 4744.934583078345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646014.0885416665,
            "unit": "ns",
            "range": "± 12708.805106341837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849176.4322916666,
            "unit": "ns",
            "range": "± 6200.933743479752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764280.7391826923,
            "unit": "ns",
            "range": "± 1705.8466368877725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623507.6923076925,
            "unit": "ns",
            "range": "± 97421.9191889666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3911392.3076923075,
            "unit": "ns",
            "range": "± 134634.7209941254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4382600,
            "unit": "ns",
            "range": "± 124432.81691710562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4900784.615384615,
            "unit": "ns",
            "range": "± 68268.65857470574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7512787.878787879,
            "unit": "ns",
            "range": "± 231367.8439703427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319857.8947368421,
            "unit": "ns",
            "range": "± 10967.017667951517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255412.06896551725,
            "unit": "ns",
            "range": "± 9800.61003447193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218473.95833333334,
            "unit": "ns",
            "range": "± 12567.847404277036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5254481.578947368,
            "unit": "ns",
            "range": "± 114983.74306653372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3630878.5714285714,
            "unit": "ns",
            "range": "± 58504.61097635387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23328.571428571428,
            "unit": "ns",
            "range": "± 2640.6516690228955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96975.25252525252,
            "unit": "ns",
            "range": "± 10120.149061521626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97796.9696969697,
            "unit": "ns",
            "range": "± 12691.00158914997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197927.08333333334,
            "unit": "ns",
            "range": "± 19517.433390186092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8547.422680412372,
            "unit": "ns",
            "range": "± 1430.9883518848926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22882.291666666668,
            "unit": "ns",
            "range": "± 2317.166817776292"
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
          "id": "823c5018d3a611af22cf99ac4137ce9b0b531e09",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-17T09:17:45+09:00",
          "tree_id": "967e97d2b4b7e8aea56d73e65a0351bb482fa642",
          "url": "https://github.com/OnedgeLee/libplanet/commit/823c5018d3a611af22cf99ac4137ce9b0b531e09"
        },
        "date": 1681691849907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2148671.4285714286,
            "unit": "ns",
            "range": "± 278170.1959918501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3549243.4343434344,
            "unit": "ns",
            "range": "± 337576.1640927795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3025455.102040816,
            "unit": "ns",
            "range": "± 248987.2100066521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7401825.510204081,
            "unit": "ns",
            "range": "± 547908.5344526272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54625.8064516129,
            "unit": "ns",
            "range": "± 9046.905587064688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8779641.666666666,
            "unit": "ns",
            "range": "± 577448.1132610721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23880517.391304348,
            "unit": "ns",
            "range": "± 899341.1423689498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59053088,
            "unit": "ns",
            "range": "± 2358438.4603549936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114264466.15384616,
            "unit": "ns",
            "range": "± 5314118.368003204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237678455.55555555,
            "unit": "ns",
            "range": "± 7933130.8067386225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5940436.71875,
            "unit": "ns",
            "range": "± 86778.19097143575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1791581.0813210227,
            "unit": "ns",
            "range": "± 40911.485825136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412431.2760416667,
            "unit": "ns",
            "range": "± 22530.00686930177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2970634.6614583335,
            "unit": "ns",
            "range": "± 46766.25157278636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966697.021484375,
            "unit": "ns",
            "range": "± 19444.032935516992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 895396.015625,
            "unit": "ns",
            "range": "± 16743.85312951138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4395202.083333333,
            "unit": "ns",
            "range": "± 336663.8385780991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4607216.666666667,
            "unit": "ns",
            "range": "± 333086.08359959937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5570647.05882353,
            "unit": "ns",
            "range": "± 213029.80857423795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5514867.469879518,
            "unit": "ns",
            "range": "± 286349.96373976435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9403437.096774194,
            "unit": "ns",
            "range": "± 425248.2600783098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368006.8181818182,
            "unit": "ns",
            "range": "± 19754.835261182187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292034.375,
            "unit": "ns",
            "range": "± 25060.75072645838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248658.51063829788,
            "unit": "ns",
            "range": "± 16184.70278409718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6352302.222222222,
            "unit": "ns",
            "range": "± 241704.6624676195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4561132.432432433,
            "unit": "ns",
            "range": "± 227907.65500022337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22531,
            "unit": "ns",
            "range": "± 5112.980016239517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93066.31578947368,
            "unit": "ns",
            "range": "± 7554.956250155875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87337.75510204081,
            "unit": "ns",
            "range": "± 8919.404484144547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 206380.8510638298,
            "unit": "ns",
            "range": "± 17388.948885827558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10273.737373737375,
            "unit": "ns",
            "range": "± 5902.275345733564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23564,
            "unit": "ns",
            "range": "± 6201.91433463422"
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
          "id": "2fbdbe119910ad6a3ffa96724d4c1abf5b29dd9b",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-17T10:47:23+09:00",
          "tree_id": "e1d8544394be1e50abc1f95fa9cb22f052c2f335",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2fbdbe119910ad6a3ffa96724d4c1abf5b29dd9b"
        },
        "date": 1681696999682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1761582.8282828282,
            "unit": "ns",
            "range": "± 129216.35238053824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928036.5853658537,
            "unit": "ns",
            "range": "± 154105.69606139386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589256.5217391304,
            "unit": "ns",
            "range": "± 145835.76514888232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5986747.474747474,
            "unit": "ns",
            "range": "± 386988.88855625695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49069.89247311828,
            "unit": "ns",
            "range": "± 3293.662720854562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6885914.285714285,
            "unit": "ns",
            "range": "± 81025.56915654994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19205187.5,
            "unit": "ns",
            "range": "± 366742.27440170204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49127096.428571425,
            "unit": "ns",
            "range": "± 1382962.0507051074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96662031.25,
            "unit": "ns",
            "range": "± 1535915.5005918567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193604838.8888889,
            "unit": "ns",
            "range": "± 3740954.566785279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828368.697916667,
            "unit": "ns",
            "range": "± 27683.05488314933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509426.4192708333,
            "unit": "ns",
            "range": "± 5392.075586212584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153383.2552083333,
            "unit": "ns",
            "range": "± 5280.653061766372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652749.4010416665,
            "unit": "ns",
            "range": "± 8900.42600743905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839688.2552083334,
            "unit": "ns",
            "range": "± 3418.9582202327506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762909.296875,
            "unit": "ns",
            "range": "± 3608.8326615515866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3491480.7228915663,
            "unit": "ns",
            "range": "± 183795.04721280947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690587.234042553,
            "unit": "ns",
            "range": "± 134366.70397771665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4316043.58974359,
            "unit": "ns",
            "range": "± 122817.22362255862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4628003.448275862,
            "unit": "ns",
            "range": "± 201057.45095467617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7384057.777777778,
            "unit": "ns",
            "range": "± 262467.1723965848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326553.8461538461,
            "unit": "ns",
            "range": "± 5254.143663911907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262292.5925925926,
            "unit": "ns",
            "range": "± 10981.744746621282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214537.5,
            "unit": "ns",
            "range": "± 7385.387079069878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5366080,
            "unit": "ns",
            "range": "± 92556.40133762456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3616050,
            "unit": "ns",
            "range": "± 48464.16938611157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21546.938775510203,
            "unit": "ns",
            "range": "± 2413.7579923632475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90372.97297297297,
            "unit": "ns",
            "range": "± 4356.519199258292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85832.32323232324,
            "unit": "ns",
            "range": "± 6870.698331896413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197702.04081632654,
            "unit": "ns",
            "range": "± 22765.460271190244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7663.1578947368425,
            "unit": "ns",
            "range": "± 964.4811891196914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21645.833333333332,
            "unit": "ns",
            "range": "± 2266.688596385144"
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
          "id": "15fd07602c7c2c0e6ab5cb37ec490829c8ac2c01",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-19T00:01:03+09:00",
          "tree_id": "511c7f5f65d8fe7027913664618f68f9e9d87dad",
          "url": "https://github.com/OnedgeLee/libplanet/commit/15fd07602c7c2c0e6ab5cb37ec490829c8ac2c01"
        },
        "date": 1681831686592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1778719.191919192,
            "unit": "ns",
            "range": "± 109490.14276456877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984365.11627907,
            "unit": "ns",
            "range": "± 160785.92180649022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2622523.404255319,
            "unit": "ns",
            "range": "± 147575.490013764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5981328.169014084,
            "unit": "ns",
            "range": "± 290277.42896511883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50050.52631578947,
            "unit": "ns",
            "range": "± 4370.4002855819745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6992821.428571428,
            "unit": "ns",
            "range": "± 102735.80889140567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19397057.14285714,
            "unit": "ns",
            "range": "± 227590.27529003387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49655166.666666664,
            "unit": "ns",
            "range": "± 833770.7895601821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98546673.33333333,
            "unit": "ns",
            "range": "± 1001764.9563692692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198445600,
            "unit": "ns",
            "range": "± 2466802.828706479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4824661.197916667,
            "unit": "ns",
            "range": "± 18562.59203495502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542393.9871651786,
            "unit": "ns",
            "range": "± 2746.550839356613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177850,
            "unit": "ns",
            "range": "± 5477.29923968552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648039.4791666665,
            "unit": "ns",
            "range": "± 9633.184990085627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839930.8942522322,
            "unit": "ns",
            "range": "± 2101.664721576781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761076.9596354166,
            "unit": "ns",
            "range": "± 2152.922838119193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673058.620689655,
            "unit": "ns",
            "range": "± 106520.36196106016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3807294.285714286,
            "unit": "ns",
            "range": "± 101636.82734259717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4351320.833333333,
            "unit": "ns",
            "range": "± 112953.77846199118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4897300,
            "unit": "ns",
            "range": "± 82830.83781000704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7245988.235294118,
            "unit": "ns",
            "range": "± 124636.06963050936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315662.22222222225,
            "unit": "ns",
            "range": "± 11833.682453236626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259869.38775510204,
            "unit": "ns",
            "range": "± 10368.244870790826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221281.39534883722,
            "unit": "ns",
            "range": "± 7451.949435389166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5229584.615384615,
            "unit": "ns",
            "range": "± 27332.241222710043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505893.3333333335,
            "unit": "ns",
            "range": "± 65468.361679152935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21611.458333333332,
            "unit": "ns",
            "range": "± 2540.446284525891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94593.75,
            "unit": "ns",
            "range": "± 7206.134995887002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93301.0101010101,
            "unit": "ns",
            "range": "± 10547.293829819571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116390.8163265306,
            "unit": "ns",
            "range": "± 16587.50670559576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7834.693877551021,
            "unit": "ns",
            "range": "± 1209.7841709885697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21531.25,
            "unit": "ns",
            "range": "± 2037.765158722973"
          }
        ]
      }
    ]
  }
}