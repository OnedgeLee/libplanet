window.BENCHMARK_DATA = {
  "lastUpdate": 1683195397441,
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
      }
    ]
  }
}