window.BENCHMARK_DATA = {
  "lastUpdate": 1688373609853,
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
          "id": "4967018433c09ad5f61c3bab650786a81057aad3",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T15:02:41+09:00",
          "tree_id": "fc68fc51a13f6b241ea85483bd1fe1b5bde679fd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4967018433c09ad5f61c3bab650786a81057aad3"
        },
        "date": 1688373585018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8621758.108108109,
            "unit": "ns",
            "range": "± 291646.0765335828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21312290.81632653,
            "unit": "ns",
            "range": "± 796830.7439541526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53536082.06666667,
            "unit": "ns",
            "range": "± 794422.1218610479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103621299.70588236,
            "unit": "ns",
            "range": "± 3994105.727989184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214785760.66666666,
            "unit": "ns",
            "range": "± 3328149.1060897587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68365.68947368421,
            "unit": "ns",
            "range": "± 7994.151721787111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329160.3020833333,
            "unit": "ns",
            "range": "± 29352.148867849806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307511.2068965517,
            "unit": "ns",
            "range": "± 18907.104246286683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298145.9069767442,
            "unit": "ns",
            "range": "± 26507.308982897044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4191241.2884615385,
            "unit": "ns",
            "range": "± 171903.90956034377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4075263.933333333,
            "unit": "ns",
            "range": "± 181348.26246847378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19677.955056179777,
            "unit": "ns",
            "range": "± 3487.2198939651325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102427.64948453609,
            "unit": "ns",
            "range": "± 20094.446026328413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90668.12087912088,
            "unit": "ns",
            "range": "± 9314.20099493858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104863.27083333333,
            "unit": "ns",
            "range": "± 14695.04665666859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5774.010416666667,
            "unit": "ns",
            "range": "± 873.7895627039446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15979.731182795698,
            "unit": "ns",
            "range": "± 1525.002937558004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549312.4239130435,
            "unit": "ns",
            "range": "± 131857.19775710686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112508.6276595746,
            "unit": "ns",
            "range": "± 183789.60437911874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2122929.836734694,
            "unit": "ns",
            "range": "± 217893.11413194632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5987610.285714285,
            "unit": "ns",
            "range": "± 183331.84724916637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3381573.484848485,
            "unit": "ns",
            "range": "± 106843.65159811825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3612901.2216494847,
            "unit": "ns",
            "range": "± 208092.020461739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4717986.788235294,
            "unit": "ns",
            "range": "± 408340.4500646516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3954385.1808510637,
            "unit": "ns",
            "range": "± 238144.17558310155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7488705.066666666,
            "unit": "ns",
            "range": "± 429310.1084860898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6655188.063648897,
            "unit": "ns",
            "range": "± 211763.0433828269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110561.774456522,
            "unit": "ns",
            "range": "± 52003.97169742213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313637.5590820312,
            "unit": "ns",
            "range": "± 23969.098427547546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3013944.435688065,
            "unit": "ns",
            "range": "± 157827.9579072405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892592.7371651785,
            "unit": "ns",
            "range": "± 10030.54813712315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822777.7598958333,
            "unit": "ns",
            "range": "± 13321.680350493503"
          }
        ]
      }
    ]
  }
}