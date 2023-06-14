window.BENCHMARK_DATA = {
  "lastUpdate": 1686716345670,
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
          "id": "335fd39e76d19f625d79562010f69e99263dfeec",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:00:09+09:00",
          "tree_id": "2a1c21dc2c292847a99ea06984255271aafb7ddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/335fd39e76d19f625d79562010f69e99263dfeec"
        },
        "date": 1686716309573,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664014.7368421052,
            "unit": "ns",
            "range": "± 160376.3028128513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3035933.3333333335,
            "unit": "ns",
            "range": "± 89115.6796967632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2592959.782608696,
            "unit": "ns",
            "range": "± 165004.46950974985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6255797.560975609,
            "unit": "ns",
            "range": "± 215083.0938123739"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54861.79775280899,
            "unit": "ns",
            "range": "± 3189.9880883924634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8586493.333333334,
            "unit": "ns",
            "range": "± 82173.07055118194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23558369.230769232,
            "unit": "ns",
            "range": "± 208885.20525484558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59839460,
            "unit": "ns",
            "range": "± 1336087.106323615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118692492.3076923,
            "unit": "ns",
            "range": "± 1757210.4528966446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237110064.2857143,
            "unit": "ns",
            "range": "± 2614907.0730972574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5721376.742788462,
            "unit": "ns",
            "range": "± 42614.45848483533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905006.2174479167,
            "unit": "ns",
            "range": "± 16946.52753059236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397840.9877232143,
            "unit": "ns",
            "range": "± 11334.379860406178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3111185.1041666665,
            "unit": "ns",
            "range": "± 22410.683403159157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999480.7756696428,
            "unit": "ns",
            "range": "± 7432.415269739904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920897.3493303572,
            "unit": "ns",
            "range": "± 11707.324989756435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3882779.487179487,
            "unit": "ns",
            "range": "± 134125.0303958119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4080944.117647059,
            "unit": "ns",
            "range": "± 130736.47143911058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4882700,
            "unit": "ns",
            "range": "± 140849.98520885024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991742.592592592,
            "unit": "ns",
            "range": "± 181331.27674294668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7952576.923076923,
            "unit": "ns",
            "range": "± 147571.81115021204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306174,
            "unit": "ns",
            "range": "± 11194.510498727599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295188.13559322036,
            "unit": "ns",
            "range": "± 12381.397123908035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288428.26086956525,
            "unit": "ns",
            "range": "± 11095.35764870412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4706626.666666667,
            "unit": "ns",
            "range": "± 71287.31069879593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4274300,
            "unit": "ns",
            "range": "± 65813.9940907845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24140,
            "unit": "ns",
            "range": "± 2251.7794381994595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109479.38144329897,
            "unit": "ns",
            "range": "± 8356.957407657528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95340,
            "unit": "ns",
            "range": "± 7537.909863243456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114765.30612244898,
            "unit": "ns",
            "range": "± 15893.187946450493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7088.541666666667,
            "unit": "ns",
            "range": "± 908.3089888899295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24543.617021276597,
            "unit": "ns",
            "range": "± 1793.2105232745064"
          }
        ]
      }
    ]
  }
}