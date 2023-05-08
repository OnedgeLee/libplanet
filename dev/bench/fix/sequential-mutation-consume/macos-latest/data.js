window.BENCHMARK_DATA = {
  "lastUpdate": 1683512105280,
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
          "id": "d06efa73150e3187429950d36be92e5a495f1a32",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T18:44:16+09:00",
          "tree_id": "2a7e9d0016859d4fc3797ab3e60f7edb4affeaac",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d06efa73150e3187429950d36be92e5a495f1a32"
        },
        "date": 1683195306905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 18420664.91919192,
            "unit": "ns",
            "range": "± 11122970.785258085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 45255327.15656566,
            "unit": "ns",
            "range": "± 28893304.98775864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 108008826.78282829,
            "unit": "ns",
            "range": "± 67752800.23704085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 210408886.44,
            "unit": "ns",
            "range": "± 121904201.9979103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 371959125.69,
            "unit": "ns",
            "range": "± 204205915.25067666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86850.46987951807,
            "unit": "ns",
            "range": "± 18419.75050434653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367550.2738095238,
            "unit": "ns",
            "range": "± 48066.401753726386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342814.22093023255,
            "unit": "ns",
            "range": "± 34409.2635241463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356274.8333333333,
            "unit": "ns",
            "range": "± 46476.48335750994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5046500.571428572,
            "unit": "ns",
            "range": "± 968229.9093753978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4370437.077777778,
            "unit": "ns",
            "range": "± 447038.69197392516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26478.18131868132,
            "unit": "ns",
            "range": "± 3789.4130881799306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124216.86813186813,
            "unit": "ns",
            "range": "± 19599.793944613462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128922.66666666667,
            "unit": "ns",
            "range": "± 21834.12686474402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128624.31868131868,
            "unit": "ns",
            "range": "± 20143.398402387662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7650.391304347826,
            "unit": "ns",
            "range": "± 1205.8887284563448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24529.57608695652,
            "unit": "ns",
            "range": "± 3534.86807573189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1982297.7472527472,
            "unit": "ns",
            "range": "± 401245.93647104304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3586391.8978494625,
            "unit": "ns",
            "range": "± 563193.0538007901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3110511.893258427,
            "unit": "ns",
            "range": "± 777320.7540206122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7211973.964285715,
            "unit": "ns",
            "range": "± 793200.9080173528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5591398.426315789,
            "unit": "ns",
            "range": "± 3447400.162888143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3786540.6463414636,
            "unit": "ns",
            "range": "± 814571.057983206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6790405.151685393,
            "unit": "ns",
            "range": "± 3359835.774841516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5273048.0696202535,
            "unit": "ns",
            "range": "± 1287664.3046491214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10296597.129411764,
            "unit": "ns",
            "range": "± 3893993.0089177554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 11169030.619436553,
            "unit": "ns",
            "range": "± 3315062.963508288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 3717362.888359375,
            "unit": "ns",
            "range": "± 1664845.83910264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1836410.4236328125,
            "unit": "ns",
            "range": "± 508861.0811391523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3223579.069539388,
            "unit": "ns",
            "range": "± 247192.8734839798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1052955.030836839,
            "unit": "ns",
            "range": "± 42641.98670388302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849334.5978104441,
            "unit": "ns",
            "range": "± 28037.86721091332"
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
          "id": "c5c6c48adab4418b4b2bf15a8f174aa5b5cb322a",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T18:49:52+09:00",
          "tree_id": "7d6943f3bb101f6ad3e8ebab6f095ec20f25ff6b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c5c6c48adab4418b4b2bf15a8f174aa5b5cb322a"
        },
        "date": 1683195353994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10738382.8989899,
            "unit": "ns",
            "range": "± 1914912.11680923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25742740.520202022,
            "unit": "ns",
            "range": "± 3310078.1917032925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79206044.58,
            "unit": "ns",
            "range": "± 6549014.677876266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135809874,
            "unit": "ns",
            "range": "± 14829375.754720865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286500761.76,
            "unit": "ns",
            "range": "± 25149906.66410202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87845.02247191011,
            "unit": "ns",
            "range": "± 16567.168825981713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382370.13684210525,
            "unit": "ns",
            "range": "± 43080.73186215559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 397652.306122449,
            "unit": "ns",
            "range": "± 79108.58858043687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 374794.6630434783,
            "unit": "ns",
            "range": "± 56538.085133240624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5409110.21,
            "unit": "ns",
            "range": "± 1020743.6373460531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5032123.94,
            "unit": "ns",
            "range": "± 942735.2978400041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29325.625,
            "unit": "ns",
            "range": "± 7033.37171408003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130203.68279569893,
            "unit": "ns",
            "range": "± 17713.419438224897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142359.33,
            "unit": "ns",
            "range": "± 19803.442329608282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139664.75280898876,
            "unit": "ns",
            "range": "± 19332.469995909672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9904.510869565218,
            "unit": "ns",
            "range": "± 2098.308971134159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26723.010638297874,
            "unit": "ns",
            "range": "± 5206.11252505567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2090894.5555555555,
            "unit": "ns",
            "range": "± 391608.17005371687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4111724.89,
            "unit": "ns",
            "range": "± 693052.1377216167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3425160.0714285714,
            "unit": "ns",
            "range": "± 559968.7012121495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9235695.885416666,
            "unit": "ns",
            "range": "± 1527852.5173760813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4341356.41,
            "unit": "ns",
            "range": "± 899724.5246355063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4719312.025252526,
            "unit": "ns",
            "range": "± 801672.7741089741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6502552.621212121,
            "unit": "ns",
            "range": "± 1208090.6497612656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5131365.388888889,
            "unit": "ns",
            "range": "± 985782.0826524749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10249087.055555556,
            "unit": "ns",
            "range": "± 1543578.9455689392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8475106.9990625,
            "unit": "ns",
            "range": "± 622096.1958515343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2364996.47768803,
            "unit": "ns",
            "range": "± 104766.54493616789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1527578.6264343262,
            "unit": "ns",
            "range": "± 70222.65880182371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4005189.3544771634,
            "unit": "ns",
            "range": "± 185988.10265912683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012387.001035748,
            "unit": "ns",
            "range": "± 89797.01029975883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1092195.29555963,
            "unit": "ns",
            "range": "± 65731.76983328367"
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
          "id": "2da53d779b3d38beef442d0621124454936a85c9",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T20:54:10+09:00",
          "tree_id": "14c660fa94366ed905d70eb2f37e2efe71a56b19",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2da53d779b3d38beef442d0621124454936a85c9"
        },
        "date": 1683202482928,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8462008.56626506,
            "unit": "ns",
            "range": "± 532812.9171676374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26034121.02173913,
            "unit": "ns",
            "range": "± 6906463.609595844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71700507.4375,
            "unit": "ns",
            "range": "± 29914092.216627005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124107182.22826087,
            "unit": "ns",
            "range": "± 28689792.566613253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271065619.17741936,
            "unit": "ns",
            "range": "± 71824896.98552373"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73085.28888888888,
            "unit": "ns",
            "range": "± 10380.441163412379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352043.3461538461,
            "unit": "ns",
            "range": "± 40051.73092664677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321210.7886597938,
            "unit": "ns",
            "range": "± 32724.112670984796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300243.65789473685,
            "unit": "ns",
            "range": "± 32211.50876208879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333803.20967742,
            "unit": "ns",
            "range": "± 277800.74522244005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4236942.151685393,
            "unit": "ns",
            "range": "± 598563.2527717764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21082.119565217392,
            "unit": "ns",
            "range": "± 3695.948785509278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116582.80337078651,
            "unit": "ns",
            "range": "± 23762.275185395563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129010.05555555556,
            "unit": "ns",
            "range": "± 31767.88695590165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123568.9574468085,
            "unit": "ns",
            "range": "± 24570.792569159516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7481.329896907217,
            "unit": "ns",
            "range": "± 972.9098613785851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21104.791666666668,
            "unit": "ns",
            "range": "± 3772.8488800811815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723183.391304348,
            "unit": "ns",
            "range": "± 270384.9402130822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3232204.5520833335,
            "unit": "ns",
            "range": "± 361753.90672578185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2897938.5384615385,
            "unit": "ns",
            "range": "± 523106.96750648343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8246265.70212766,
            "unit": "ns",
            "range": "± 2139820.7924572914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382522.686813187,
            "unit": "ns",
            "range": "± 275132.32678011956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3458042.7209302327,
            "unit": "ns",
            "range": "± 277850.23272723745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5128615.435483871,
            "unit": "ns",
            "range": "± 904499.2905607908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5284116.960674157,
            "unit": "ns",
            "range": "± 1469215.8605681316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8535534.943181818,
            "unit": "ns",
            "range": "± 1140931.5685035312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8087613.159242021,
            "unit": "ns",
            "range": "± 1109676.8478255067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017660.208875868,
            "unit": "ns",
            "range": "± 64840.323618474045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299202.1057942708,
            "unit": "ns",
            "range": "± 11005.922577918374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576872.539813702,
            "unit": "ns",
            "range": "± 34539.15941933094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 894143.5910456731,
            "unit": "ns",
            "range": "± 7389.406657005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741283.4052734375,
            "unit": "ns",
            "range": "± 3253.478267827857"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c37457bb6483e4a24a5dafa53ed11b8c7da05cd2",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-08T10:53:46+09:00",
          "tree_id": "5b296fcc7d3aca1b479467721a7b40ceb390c43f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c37457bb6483e4a24a5dafa53ed11b8c7da05cd2"
        },
        "date": 1683512074141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9189448,
            "unit": "ns",
            "range": "± 698738.3882305091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22404104.76804124,
            "unit": "ns",
            "range": "± 1373514.4973508387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59305178.51369863,
            "unit": "ns",
            "range": "± 2951899.9490062445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115687528.3235294,
            "unit": "ns",
            "range": "± 2344209.065554554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234283383.91304347,
            "unit": "ns",
            "range": "± 5733922.71805375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72712.26923076923,
            "unit": "ns",
            "range": "± 7384.619516380609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359490.2816091954,
            "unit": "ns",
            "range": "± 28149.252680577625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365423.5869565217,
            "unit": "ns",
            "range": "± 41760.66910400663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 384346.85,
            "unit": "ns",
            "range": "± 61365.82438534028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4739739.31443299,
            "unit": "ns",
            "range": "± 356107.95548404666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4126907.094736842,
            "unit": "ns",
            "range": "± 235338.78417480178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25976,
            "unit": "ns",
            "range": "± 3030.220862102015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129239.1043956044,
            "unit": "ns",
            "range": "± 15168.033394008542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123811.58762886598,
            "unit": "ns",
            "range": "± 18069.30318924461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127948.35416666667,
            "unit": "ns",
            "range": "± 19079.27375975201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8197.061224489797,
            "unit": "ns",
            "range": "± 1525.9645255792543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23063.74226804124,
            "unit": "ns",
            "range": "± 3439.9104647939566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618116.1875,
            "unit": "ns",
            "range": "± 163750.11954575387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2916080.9677419355,
            "unit": "ns",
            "range": "± 86004.18972448721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2651243.946236559,
            "unit": "ns",
            "range": "± 365008.7152568613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6659230.97887324,
            "unit": "ns",
            "range": "± 323197.71375026146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3754145.093023256,
            "unit": "ns",
            "range": "± 403646.3503063521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3884149.4191919193,
            "unit": "ns",
            "range": "± 402257.68507159274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4802408.114583333,
            "unit": "ns",
            "range": "± 364407.4473799427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4872950.734042553,
            "unit": "ns",
            "range": "± 484862.09905698407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8468948.36597938,
            "unit": "ns",
            "range": "± 697615.4714998746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7427620.238627373,
            "unit": "ns",
            "range": "± 381991.29200383957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2262906.202994792,
            "unit": "ns",
            "range": "± 67678.11714247512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1449528.176606514,
            "unit": "ns",
            "range": "± 70300.36571703154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3274834.5380078126,
            "unit": "ns",
            "range": "± 304021.52109020157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031507.7091267904,
            "unit": "ns",
            "range": "± 59402.835843798115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842091.2563698508,
            "unit": "ns",
            "range": "± 29925.097360478878"
          }
        ]
      }
    ]
  }
}