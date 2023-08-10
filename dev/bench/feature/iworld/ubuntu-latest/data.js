window.BENCHMARK_DATA = {
  "lastUpdate": 1691656973630,
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
          "id": "58342035f516267808c027e47fa95880240e0206",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-08-10T17:11:49+09:00",
          "tree_id": "b3df59f6b71ffb5fada57ce7b52a255cd5ea73a7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/58342035f516267808c027e47fa95880240e0206"
        },
        "date": 1691656960750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3844417.75,
            "unit": "ns",
            "range": "± 61648.23004055618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4070686.5625,
            "unit": "ns",
            "range": "± 76025.38906616987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4746166.5625,
            "unit": "ns",
            "range": "± 84681.74125588802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4380018.3125,
            "unit": "ns",
            "range": "± 79229.77533370373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6810046.368421053,
            "unit": "ns",
            "range": "± 147766.88092743716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9035731.666666666,
            "unit": "ns",
            "range": "± 143701.97452747557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23461500.533333335,
            "unit": "ns",
            "range": "± 198510.1093801618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58827656.53333333,
            "unit": "ns",
            "range": "± 287322.48390213953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116318810.66666667,
            "unit": "ns",
            "range": "± 216662.73775902973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234895406.15384614,
            "unit": "ns",
            "range": "± 487736.78165872185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59321.489583333336,
            "unit": "ns",
            "range": "± 5080.417647553649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5132407.430889423,
            "unit": "ns",
            "range": "± 28195.4406153847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1595405.6545572917,
            "unit": "ns",
            "range": "± 1160.7079962512325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092360.0122767857,
            "unit": "ns",
            "range": "± 934.1619747745781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611081.912239583,
            "unit": "ns",
            "range": "± 6191.928556318749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844071.4740513393,
            "unit": "ns",
            "range": "± 307.6617950345619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771978.0302734375,
            "unit": "ns",
            "range": "± 309.8824758716574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303068.65,
            "unit": "ns",
            "range": "± 6883.814787524964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290876.7,
            "unit": "ns",
            "range": "± 13000.939249381243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272741.4736842105,
            "unit": "ns",
            "range": "± 11059.993572565403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4678964.6,
            "unit": "ns",
            "range": "± 55483.47170078156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4289271.533333333,
            "unit": "ns",
            "range": "± 35624.79638812323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26896.083333333332,
            "unit": "ns",
            "range": "± 2422.0985927460624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102334.30927835051,
            "unit": "ns",
            "range": "± 6994.385701464461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94048,
            "unit": "ns",
            "range": "± 7084.028816346905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104082.1875,
            "unit": "ns",
            "range": "± 13815.43280714304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8141.9795918367345,
            "unit": "ns",
            "range": "± 1235.0946787832077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26751.287234042553,
            "unit": "ns",
            "range": "± 2517.326550056671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563160.0333333334,
            "unit": "ns",
            "range": "± 85551.25713790115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2995482.6875,
            "unit": "ns",
            "range": "± 86433.2035898382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048925.582278481,
            "unit": "ns",
            "range": "± 98335.04054905764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5274152.68,
            "unit": "ns",
            "range": "± 137610.80601486206"
          }
        ]
      }
    ]
  }
}