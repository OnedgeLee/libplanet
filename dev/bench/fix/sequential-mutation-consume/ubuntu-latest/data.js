window.BENCHMARK_DATA = {
  "lastUpdate": 1683194691608,
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
          "id": "c5c6c48adab4418b4b2bf15a8f174aa5b5cb322a",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T18:49:52+09:00",
          "tree_id": "7d6943f3bb101f6ad3e8ebab6f095ec20f25ff6b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c5c6c48adab4418b4b2bf15a8f174aa5b5cb322a"
        },
        "date": 1683194632667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290606.28571428574,
            "unit": "ns",
            "range": "± 11581.55880592073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281801.24590163934,
            "unit": "ns",
            "range": "± 12533.53464331556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234668.47368421053,
            "unit": "ns",
            "range": "± 5160.893854195125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4363495.266666667,
            "unit": "ns",
            "range": "± 36599.8934492334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3820766.25,
            "unit": "ns",
            "range": "± 23939.68070769457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20096.229166666668,
            "unit": "ns",
            "range": "± 2126.440249902054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87938.18681318681,
            "unit": "ns",
            "range": "± 5090.2851348035465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75298.61764705883,
            "unit": "ns",
            "range": "± 2364.99744396948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95856.8,
            "unit": "ns",
            "range": "± 14019.39694851387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5942.959183673469,
            "unit": "ns",
            "range": "± 900.5413711781655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18141,
            "unit": "ns",
            "range": "± 1748.8078947190222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506918.1785714286,
            "unit": "ns",
            "range": "± 99197.60566071533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3616115.28,
            "unit": "ns",
            "range": "± 88598.40064184755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4178260.3076923075,
            "unit": "ns",
            "range": "± 65115.85929503479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4516544.405405405,
            "unit": "ns",
            "range": "± 151351.89564232595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6650772.5,
            "unit": "ns",
            "range": "± 141884.88070480817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5845606.992745535,
            "unit": "ns",
            "range": "± 26637.102821811884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875504.8197916667,
            "unit": "ns",
            "range": "± 10695.321250774075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351802.050502232,
            "unit": "ns",
            "range": "± 3983.961164715632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617092.478385417,
            "unit": "ns",
            "range": "± 6007.287046861572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820079.7621372768,
            "unit": "ns",
            "range": "± 1344.035175091873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753543.5985677083,
            "unit": "ns",
            "range": "± 1874.7705431109246"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49521.98837209302,
            "unit": "ns",
            "range": "± 2713.8341121185895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7913040.65,
            "unit": "ns",
            "range": "± 178200.7860506838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21709175,
            "unit": "ns",
            "range": "± 175868.47132079783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54845876.53333333,
            "unit": "ns",
            "range": "± 330729.425415543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109441846.13333334,
            "unit": "ns",
            "range": "± 1163279.8125010205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214473009.73333332,
            "unit": "ns",
            "range": "± 1731354.600290992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467872.641025641,
            "unit": "ns",
            "range": "± 71322.68298902236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2699517.3703703703,
            "unit": "ns",
            "range": "± 75604.81488948263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2361706.085106383,
            "unit": "ns",
            "range": "± 133775.0903717548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5841314.522222222,
            "unit": "ns",
            "range": "± 325656.3272008356"
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
          "id": "d06efa73150e3187429950d36be92e5a495f1a32",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T18:44:16+09:00",
          "tree_id": "2a7e9d0016859d4fc3797ab3e60f7edb4affeaac",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d06efa73150e3187429950d36be92e5a495f1a32"
        },
        "date": 1683194674935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402237.13684210525,
            "unit": "ns",
            "range": "± 66903.05321525788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355847.09375,
            "unit": "ns",
            "range": "± 51146.548441466985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332796.2315789474,
            "unit": "ns",
            "range": "± 52733.2352955234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5489073.989247312,
            "unit": "ns",
            "range": "± 407387.95238022716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5093099.065217392,
            "unit": "ns",
            "range": "± 456891.5600004251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24301.129032258064,
            "unit": "ns",
            "range": "± 7405.9216072501695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 139042.8842105263,
            "unit": "ns",
            "range": "± 34275.219378804475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96518.54838709677,
            "unit": "ns",
            "range": "± 20578.73618859807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127002.64210526316,
            "unit": "ns",
            "range": "± 28801.861011797293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5525.3218390804595,
            "unit": "ns",
            "range": "± 1433.4525689077425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24910.074468085106,
            "unit": "ns",
            "range": "± 7471.074348386987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4175319.577777778,
            "unit": "ns",
            "range": "± 424157.92170584266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4217353.360824742,
            "unit": "ns",
            "range": "± 496713.402447469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5159724.880434782,
            "unit": "ns",
            "range": "± 419415.2377436435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5404857.042105263,
            "unit": "ns",
            "range": "± 548710.5578645833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9161087.212121213,
            "unit": "ns",
            "range": "± 892296.142110231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7620420.884014423,
            "unit": "ns",
            "range": "± 206680.80644870485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2420449.0368009866,
            "unit": "ns",
            "range": "± 53420.890240296234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1814703.626736111,
            "unit": "ns",
            "range": "± 36949.386008093265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3389143.3979492188,
            "unit": "ns",
            "range": "± 65012.74976071637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103803.650390625,
            "unit": "ns",
            "range": "± 27543.271208517926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1052279.9622395833,
            "unit": "ns",
            "range": "± 22420.135788879033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67842.35789473684,
            "unit": "ns",
            "range": "± 17544.268378429988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9194069.426966293,
            "unit": "ns",
            "range": "± 715482.0002821188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26655647.510638297,
            "unit": "ns",
            "range": "± 1978241.2356112446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70134799.89655173,
            "unit": "ns",
            "range": "± 3078344.9669184983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145571984.9375,
            "unit": "ns",
            "range": "± 5207531.07358955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277820282.8214286,
            "unit": "ns",
            "range": "± 6709534.067090232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1807426.4166666667,
            "unit": "ns",
            "range": "± 209290.619482181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3666855.9565217393,
            "unit": "ns",
            "range": "± 289211.1048893848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2825237.419354839,
            "unit": "ns",
            "range": "± 301540.6574841696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7469545.010526316,
            "unit": "ns",
            "range": "± 631219.9593144585"
          }
        ]
      }
    ]
  }
}