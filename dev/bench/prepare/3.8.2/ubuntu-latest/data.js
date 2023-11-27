window.BENCHMARK_DATA = {
  "lastUpdate": 1701065210650,
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
          "id": "76374a85970d3ec7b6d29054c86be973386f7b75",
          "message": "Prepare 3.8.2",
          "timestamp": "2023-11-27T14:55:32+09:00",
          "tree_id": "add5ec96ea5930f032392a26f01995535f8902d9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/76374a85970d3ec7b6d29054c86be973386f7b75"
        },
        "date": 1701065200574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199312.83333333334,
            "unit": "ns",
            "range": "± 5951.813272370586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191561.11111111112,
            "unit": "ns",
            "range": "± 10752.825358209107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161588.64285714287,
            "unit": "ns",
            "range": "± 2400.78656524651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080769.3571428573,
            "unit": "ns",
            "range": "± 35136.21033942738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804486.6923076925,
            "unit": "ns",
            "range": "± 22418.140148789535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13424.929292929293,
            "unit": "ns",
            "range": "± 3141.2002491330563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60298.45744680851,
            "unit": "ns",
            "range": "± 4056.2786746403162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60077.316326530614,
            "unit": "ns",
            "range": "± 6898.757102456918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66290.95918367348,
            "unit": "ns",
            "range": "± 14510.994522759423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3251.794736842105,
            "unit": "ns",
            "range": "± 446.2639204261668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15502.541666666666,
            "unit": "ns",
            "range": "± 1588.601781220909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3791762.1557291667,
            "unit": "ns",
            "range": "± 63519.183502055974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214453.0474330357,
            "unit": "ns",
            "range": "± 2941.1544634332154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784215.6110026041,
            "unit": "ns",
            "range": "± 14357.897064164872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945999.2607421875,
            "unit": "ns",
            "range": "± 3638.9525505917677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627287.4323730469,
            "unit": "ns",
            "range": "± 11476.60495196428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575721.3117327009,
            "unit": "ns",
            "range": "± 1641.7003765994082"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41912.68085106383,
            "unit": "ns",
            "range": "± 5987.70488452341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454579.3571428573,
            "unit": "ns",
            "range": "± 25848.892959057088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2493573.777777778,
            "unit": "ns",
            "range": "± 64680.4735873755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3240336.8571428573,
            "unit": "ns",
            "range": "± 46156.066054548755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3034359.8846153845,
            "unit": "ns",
            "range": "± 82006.95157720565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6595456.428571428,
            "unit": "ns",
            "range": "± 216114.00876815076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5574059.692307692,
            "unit": "ns",
            "range": "± 35371.51623454625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14421993.692307692,
            "unit": "ns",
            "range": "± 73612.58265448986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36883451.615384616,
            "unit": "ns",
            "range": "± 242233.21578406572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74851403.6,
            "unit": "ns",
            "range": "± 499434.6504271176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153410443.63333333,
            "unit": "ns",
            "range": "± 1068686.1869738447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959845.1947368421,
            "unit": "ns",
            "range": "± 92571.42931157973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862616.3,
            "unit": "ns",
            "range": "± 82797.99400753129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1432240.0204081633,
            "unit": "ns",
            "range": "± 126515.17413036544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5579343.224137931,
            "unit": "ns",
            "range": "± 243115.5652932596"
          }
        ]
      }
    ]
  }
}