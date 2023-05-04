window.BENCHMARK_DATA = {
  "lastUpdate": 1683194644948,
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
      }
    ]
  }
}