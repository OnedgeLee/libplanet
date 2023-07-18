window.BENCHMARK_DATA = {
  "lastUpdate": 1689641383231,
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
          "id": "8ef11111b196a865999fcbb79a1c449d92c74daa",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:31:07+09:00",
          "tree_id": "909aec0cf9c83ce9ea2d91206f536afb3dd729a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ef11111b196a865999fcbb79a1c449d92c74daa"
        },
        "date": 1689641298920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287290.02222222224,
            "unit": "ns",
            "range": "± 9653.790867484717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273775.5,
            "unit": "ns",
            "range": "± 7282.286474887237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238270.85714285713,
            "unit": "ns",
            "range": "± 6785.881507268443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4419644.4,
            "unit": "ns",
            "range": "± 72617.27507949765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010072.8,
            "unit": "ns",
            "range": "± 57359.1113937944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19271.020833333332,
            "unit": "ns",
            "range": "± 1667.638096414817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88505.34065934065,
            "unit": "ns",
            "range": "± 4964.803331048987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73224.23529411765,
            "unit": "ns",
            "range": "± 1489.7362824260106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88195.4623655914,
            "unit": "ns",
            "range": "± 9461.933788193362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4891.80412371134,
            "unit": "ns",
            "range": "± 630.7493004219805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18341.032258064515,
            "unit": "ns",
            "range": "± 1671.958097376513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466713.8539325842,
            "unit": "ns",
            "range": "± 81270.09206659306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2718380.0975609757,
            "unit": "ns",
            "range": "± 96055.07049000716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1873702.0375,
            "unit": "ns",
            "range": "± 97303.45064333461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5307077.04,
            "unit": "ns",
            "range": "± 312746.07066462096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6230297.266927083,
            "unit": "ns",
            "range": "± 15391.681062601632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954602.4557291667,
            "unit": "ns",
            "range": "± 4491.120896377507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402537.1010416667,
            "unit": "ns",
            "range": "± 3344.356630135045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641278.878645833,
            "unit": "ns",
            "range": "± 3427.7077074319614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841555.8215680803,
            "unit": "ns",
            "range": "± 1338.5595566795143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752214.075796274,
            "unit": "ns",
            "range": "± 1009.2068512230464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3641269.4615384615,
            "unit": "ns",
            "range": "± 95715.97211133814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3744058.263157895,
            "unit": "ns",
            "range": "± 81371.68652400067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439838.612903226,
            "unit": "ns",
            "range": "± 132069.43800230682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4072337.7391304346,
            "unit": "ns",
            "range": "± 102206.67575609077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6613675.634146341,
            "unit": "ns",
            "range": "± 238249.25644603345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8053735.578947368,
            "unit": "ns",
            "range": "± 174500.48515510903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21998404.133333333,
            "unit": "ns",
            "range": "± 283915.26332412905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55680643.071428575,
            "unit": "ns",
            "range": "± 380879.9640612541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110501399.6,
            "unit": "ns",
            "range": "± 1086600.907919331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224798898.66666666,
            "unit": "ns",
            "range": "± 2470016.9351233686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46827.52808988764,
            "unit": "ns",
            "range": "± 2490.7985351995035"
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641369853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284755.8333333333,
            "unit": "ns",
            "range": "± 5826.861189656865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264247.3888888889,
            "unit": "ns",
            "range": "± 7929.296060551214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238574.28260869565,
            "unit": "ns",
            "range": "± 9103.627473981136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4296232.4,
            "unit": "ns",
            "range": "± 33371.75318567657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933116.5714285714,
            "unit": "ns",
            "range": "± 29915.762062869097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18330.302083333332,
            "unit": "ns",
            "range": "± 1797.3772126705048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86314.546875,
            "unit": "ns",
            "range": "± 3997.2413182716423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72200.38461538461,
            "unit": "ns",
            "range": "± 955.048126052778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89555.3163265306,
            "unit": "ns",
            "range": "± 11930.899047186835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4803.081632653061,
            "unit": "ns",
            "range": "± 652.7583925470478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17838.572916666668,
            "unit": "ns",
            "range": "± 1351.9855476087687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362771.5684210525,
            "unit": "ns",
            "range": "± 90515.13170296651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2535832.904761905,
            "unit": "ns",
            "range": "± 90971.94881077207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1738711.544117647,
            "unit": "ns",
            "range": "± 80733.3078590472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4856710.851851852,
            "unit": "ns",
            "range": "± 133708.96505634446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6016582.161979167,
            "unit": "ns",
            "range": "± 23593.362604019814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1964441.0131138393,
            "unit": "ns",
            "range": "± 4280.636644952786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351211.65234375,
            "unit": "ns",
            "range": "± 700.8087163249392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634210.566145833,
            "unit": "ns",
            "range": "± 2359.1211647323275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820932.4324869792,
            "unit": "ns",
            "range": "± 362.5830708675668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740693.7511160715,
            "unit": "ns",
            "range": "± 2065.2413245886064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247428.565217391,
            "unit": "ns",
            "range": "± 40789.549102491204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3520009.066666667,
            "unit": "ns",
            "range": "± 59693.654159582235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4404386.4,
            "unit": "ns",
            "range": "± 74058.74871999546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856310.4615384615,
            "unit": "ns",
            "range": "± 54943.86656642606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6444636.928571428,
            "unit": "ns",
            "range": "± 175913.01323243038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7600984.071428572,
            "unit": "ns",
            "range": "± 29842.94334180524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19544374.133333333,
            "unit": "ns",
            "range": "± 105912.51563764898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49269948.733333334,
            "unit": "ns",
            "range": "± 361499.19525467954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100309056.8,
            "unit": "ns",
            "range": "± 909706.5775405826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198723830.8,
            "unit": "ns",
            "range": "± 1241742.6904156688"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46150,
            "unit": "ns",
            "range": "± 2089.4975472586707"
          }
        ]
      }
    ]
  }
}