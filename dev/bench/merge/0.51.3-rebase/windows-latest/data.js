window.BENCHMARK_DATA = {
  "lastUpdate": 1679987087602,
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
          "id": "f744e91d159caa20a6a50a25108624fe61221db5",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:37:19+09:00",
          "tree_id": "4ec1541a6ce11138de359316c6b5dcca63b4d153",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f744e91d159caa20a6a50a25108624fe61221db5"
        },
        "date": 1679986706279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284322.3404255318,
            "unit": "ns",
            "range": "± 96713.37561278944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2418412,
            "unit": "ns",
            "range": "± 97398.262231491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012597.435897436,
            "unit": "ns",
            "range": "± 103140.88331753713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5167884,
            "unit": "ns",
            "range": "± 308757.7903061678"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46964.705882352944,
            "unit": "ns",
            "range": "± 2559.376127587539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6845336.666666667,
            "unit": "ns",
            "range": "± 66684.21173889736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18877540,
            "unit": "ns",
            "range": "± 309820.7726135501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48124460.86956522,
            "unit": "ns",
            "range": "± 1203418.3938564078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95087765.2173913,
            "unit": "ns",
            "range": "± 2285534.885596943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187129486.36363637,
            "unit": "ns",
            "range": "± 4565919.657563961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4635796.540178572,
            "unit": "ns",
            "range": "± 22025.998032947795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1478683.7109375,
            "unit": "ns",
            "range": "± 10644.674978756055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130984.1927083333,
            "unit": "ns",
            "range": "± 5577.691947410764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699050.0520833335,
            "unit": "ns",
            "range": "± 10502.320492121093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809556.4973958334,
            "unit": "ns",
            "range": "± 3232.239282341403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748094.3359375,
            "unit": "ns",
            "range": "± 1907.878234666307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3022962.2641509436,
            "unit": "ns",
            "range": "± 121415.38083153775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4827879.310344827,
            "unit": "ns",
            "range": "± 120303.21032205709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22221403.125,
            "unit": "ns",
            "range": "± 683905.5723748734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5913455.263157895,
            "unit": "ns",
            "range": "± 203215.1219332885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24884976.923076924,
            "unit": "ns",
            "range": "± 655758.1098592329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166645,
            "unit": "ns",
            "range": "± 5880.168757389929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169585.9649122807,
            "unit": "ns",
            "range": "± 6915.005386747494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152261.53846153847,
            "unit": "ns",
            "range": "± 5180.206020319604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10324794.11764706,
            "unit": "ns",
            "range": "± 206988.73903726088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8331400,
            "unit": "ns",
            "range": "± 126126.83431107487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17614.583333333332,
            "unit": "ns",
            "range": "± 1522.8767214623542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48391.48936170213,
            "unit": "ns",
            "range": "± 3772.179130470706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39572.72727272727,
            "unit": "ns",
            "range": "± 1251.3174875088473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92749.49494949495,
            "unit": "ns",
            "range": "± 17207.93228182255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4911.340206185567,
            "unit": "ns",
            "range": "± 543.4987520416128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16339.78494623656,
            "unit": "ns",
            "range": "± 1517.6597963960855"
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
          "id": "e5da38e307c273c3d6360d6e70ab68cd1efda258",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:45:32+09:00",
          "tree_id": "ef4d66ff230df014d09b48e3d48ce239e885d511",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e5da38e307c273c3d6360d6e70ab68cd1efda258"
        },
        "date": 1679987052755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344785.2631578948,
            "unit": "ns",
            "range": "± 95162.72510074636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2500104.8780487804,
            "unit": "ns",
            "range": "± 89885.62441019007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138675.5102040814,
            "unit": "ns",
            "range": "± 135455.0741981476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5010220,
            "unit": "ns",
            "range": "± 148779.90316641188"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50646.31578947369,
            "unit": "ns",
            "range": "± 3068.7793167578543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6971350,
            "unit": "ns",
            "range": "± 111401.77978139101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20194093.333333332,
            "unit": "ns",
            "range": "± 290272.58486431255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49304780,
            "unit": "ns",
            "range": "± 406247.7537520318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98852578.57142857,
            "unit": "ns",
            "range": "± 1210584.0161982665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193348625,
            "unit": "ns",
            "range": "± 1771191.010758272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773253.75,
            "unit": "ns",
            "range": "± 20998.42110273761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547496.3802083333,
            "unit": "ns",
            "range": "± 5083.5647959010485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155682.1814903845,
            "unit": "ns",
            "range": "± 2855.757548471258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617459.3191964286,
            "unit": "ns",
            "range": "± 3686.993880713196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823015.6380208334,
            "unit": "ns",
            "range": "± 2600.0068504292153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752614.2447916666,
            "unit": "ns",
            "range": "± 1943.8682127229408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3198615.625,
            "unit": "ns",
            "range": "± 97424.04190718151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5086471.428571428,
            "unit": "ns",
            "range": "± 117392.18092725403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23876100,
            "unit": "ns",
            "range": "± 359882.7864735962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6009080.555555556,
            "unit": "ns",
            "range": "± 199493.52129751616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26272071.42857143,
            "unit": "ns",
            "range": "± 608966.8481476288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187515.09433962265,
            "unit": "ns",
            "range": "± 7768.536052228568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185403.44827586206,
            "unit": "ns",
            "range": "± 8025.419386040776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167785.7142857143,
            "unit": "ns",
            "range": "± 9813.960180935608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10887112.5,
            "unit": "ns",
            "range": "± 279762.40899936936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9824241.176470589,
            "unit": "ns",
            "range": "± 188271.90463138523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21052.63157894737,
            "unit": "ns",
            "range": "± 1983.5408971033403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53896.77419354839,
            "unit": "ns",
            "range": "± 4447.5799871318195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42381.05263157895,
            "unit": "ns",
            "range": "± 3023.5351556788582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104389.79591836735,
            "unit": "ns",
            "range": "± 16932.628721549376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7285.714285714285,
            "unit": "ns",
            "range": "± 976.21190871739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20898.947368421053,
            "unit": "ns",
            "range": "± 2260.554193811309"
          }
        ]
      }
    ]
  }
}