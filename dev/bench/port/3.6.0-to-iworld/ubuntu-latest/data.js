window.BENCHMARK_DATA = {
  "lastUpdate": 1699515268562,
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
          "id": "b0df8ad4276cdd5c00172084749d2b1d6e02f68d",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:11:38+09:00",
          "tree_id": "6d6212780ecec18d14e20a872d97f970fede8ab9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b0df8ad4276cdd5c00172084749d2b1d6e02f68d"
        },
        "date": 1699515256564,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5731209.428571428,
            "unit": "ns",
            "range": "± 56929.89618646953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14867375.8,
            "unit": "ns",
            "range": "± 54282.36453319149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36123129.166666664,
            "unit": "ns",
            "range": "± 173438.00414784494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75381702.23076923,
            "unit": "ns",
            "range": "± 322005.7840536807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149676206.75,
            "unit": "ns",
            "range": "± 481456.3602499334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1131460.0408163266,
            "unit": "ns",
            "range": "± 137665.13852016663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2099502.62295082,
            "unit": "ns",
            "range": "± 94095.54031411618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1794619.147368421,
            "unit": "ns",
            "range": "± 161027.94444152596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6861800.630952381,
            "unit": "ns",
            "range": "± 388571.33232253557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2569864.7291666665,
            "unit": "ns",
            "range": "± 99858.46152818574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2693741.7352941176,
            "unit": "ns",
            "range": "± 84566.81402552545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3167816.576923077,
            "unit": "ns",
            "range": "± 39768.950274180694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3112385.829787234,
            "unit": "ns",
            "range": "± 120613.15933150462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7473218.29032258,
            "unit": "ns",
            "range": "± 203960.31603364964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44386,
            "unit": "ns",
            "range": "± 4921.460487100039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728000.99375,
            "unit": "ns",
            "range": "± 65693.19434504048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191013.6338641827,
            "unit": "ns",
            "range": "± 1655.2226400584648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783971.3480143229,
            "unit": "ns",
            "range": "± 10830.676058358215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966447.7087402344,
            "unit": "ns",
            "range": "± 7282.699342904845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623020.523813101,
            "unit": "ns",
            "range": "± 2559.3456393730407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581417.9763997396,
            "unit": "ns",
            "range": "± 901.6868735199263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218229.51020408163,
            "unit": "ns",
            "range": "± 18905.540612760047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205891.97849462365,
            "unit": "ns",
            "range": "± 15164.14406189704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174246.62962962964,
            "unit": "ns",
            "range": "± 4815.804534975265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090894.3571428573,
            "unit": "ns",
            "range": "± 40856.67166233902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862255.466666667,
            "unit": "ns",
            "range": "± 30204.637928793716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12589.43023255814,
            "unit": "ns",
            "range": "± 1472.6186323185343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70440.80645161291,
            "unit": "ns",
            "range": "± 6505.740201608692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77338.08,
            "unit": "ns",
            "range": "± 16493.506385927354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67149.96629213484,
            "unit": "ns",
            "range": "± 8268.126438660034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2915.6063829787236,
            "unit": "ns",
            "range": "± 415.40430410962034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15012.816326530612,
            "unit": "ns",
            "range": "± 3104.0429650381557"
          }
        ]
      }
    ]
  }
}