window.BENCHMARK_DATA = {
  "lastUpdate": 1689146709230,
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
          "id": "c5b47f3d0cdd1dd4c8c188e8ca8f2e75fcd9376b",
          "message": "Release 2.5.0",
          "timestamp": "2023-07-12T16:08:03+09:00",
          "tree_id": "de4825b452f7edcc131ba1b3671a91c396a9b554",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c5b47f3d0cdd1dd4c8c188e8ca8f2e75fcd9376b"
        },
        "date": 1689146676261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505527.7777777778,
            "unit": "ns",
            "range": "± 32218.277705374847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532061.111111111,
            "unit": "ns",
            "range": "± 82213.72766073204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1980446.1538461538,
            "unit": "ns",
            "range": "± 68926.50107619919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5059155.263157895,
            "unit": "ns",
            "range": "± 256839.2095688075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44972.04301075269,
            "unit": "ns",
            "range": "± 2561.350085208879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7195678.571428572,
            "unit": "ns",
            "range": "± 80179.30078720613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20215271.42857143,
            "unit": "ns",
            "range": "± 249370.47255522775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50892900,
            "unit": "ns",
            "range": "± 810516.460571371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100925652.63157895,
            "unit": "ns",
            "range": "± 1909325.8197502363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200342926.66666666,
            "unit": "ns",
            "range": "± 3500486.355895352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4889706.432291667,
            "unit": "ns",
            "range": "± 31934.719470747135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1560156.9270833333,
            "unit": "ns",
            "range": "± 5536.184090156763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217072.5651041667,
            "unit": "ns",
            "range": "± 8079.23242323225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2698115.3459821427,
            "unit": "ns",
            "range": "± 9922.005922899949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858019.31640625,
            "unit": "ns",
            "range": "± 2423.7965242792243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775652.5669642857,
            "unit": "ns",
            "range": "± 2928.386911188945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3148643.2835820895,
            "unit": "ns",
            "range": "± 146667.47715741684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284414.6341463416,
            "unit": "ns",
            "range": "± 118212.54705185826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4243091.891891892,
            "unit": "ns",
            "range": "± 143136.27224583025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3836800,
            "unit": "ns",
            "range": "± 87565.92103276131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6236861.29032258,
            "unit": "ns",
            "range": "± 158402.02161466534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264127.868852459,
            "unit": "ns",
            "range": "± 11896.289773812408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246533.33333333334,
            "unit": "ns",
            "range": "± 7655.417471742913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214011.62790697673,
            "unit": "ns",
            "range": "± 7920.233561440855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4021453.846153846,
            "unit": "ns",
            "range": "± 60078.124351888895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3697671.4285714286,
            "unit": "ns",
            "range": "± 50354.14853540147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17184.782608695652,
            "unit": "ns",
            "range": "± 1497.3188332768098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82548.35164835164,
            "unit": "ns",
            "range": "± 4682.908940139252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73345.61403508772,
            "unit": "ns",
            "range": "± 3191.230739712379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92343.29896907216,
            "unit": "ns",
            "range": "± 13903.948084510737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5269.89247311828,
            "unit": "ns",
            "range": "± 694.6667869086837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19034.40860215054,
            "unit": "ns",
            "range": "± 1448.4245281816525"
          }
        ]
      }
    ]
  }
}