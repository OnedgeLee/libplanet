window.BENCHMARK_DATA = {
  "lastUpdate": 1686243403632,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "477fdd33183a31455006a21bc0237566ee9b861a",
          "message": "docs: change.md",
          "timestamp": "2023-06-09T01:41:56+09:00",
          "tree_id": "6e0b5089ff7d5c730bfbee0ef601896697ada1dd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/477fdd33183a31455006a21bc0237566ee9b861a"
        },
        "date": 1686243391241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3557952.7804878047,
            "unit": "ns",
            "range": "± 117773.26270922279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3928513.1142857145,
            "unit": "ns",
            "range": "± 127044.39838793075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4683031.333333333,
            "unit": "ns",
            "range": "± 58309.09338867758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4824293.6875,
            "unit": "ns",
            "range": "± 131386.37399655912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7465552.84,
            "unit": "ns",
            "range": "± 198540.80489257115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6244616.936383928,
            "unit": "ns",
            "range": "± 33067.32824752443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936416.3126627605,
            "unit": "ns",
            "range": "± 768.1983419453748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399110.3498697917,
            "unit": "ns",
            "range": "± 3645.7812287357606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645691.909598214,
            "unit": "ns",
            "range": "± 4108.608019209835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861837.4486328125,
            "unit": "ns",
            "range": "± 1497.3901286793225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774656.211344401,
            "unit": "ns",
            "range": "± 260.57826385878076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298356.3333333333,
            "unit": "ns",
            "range": "± 12037.060732033657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286099.93548387097,
            "unit": "ns",
            "range": "± 8552.166419239373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273114.3521126761,
            "unit": "ns",
            "range": "± 13416.457519563257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4709038.357142857,
            "unit": "ns",
            "range": "± 25905.870144420172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4325444.566666666,
            "unit": "ns",
            "range": "± 39875.111443582144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22192.797872340427,
            "unit": "ns",
            "range": "± 2276.757615178874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102951.09183673469,
            "unit": "ns",
            "range": "± 8279.748183439504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86342.4574468085,
            "unit": "ns",
            "range": "± 5560.872956272617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103525.07608695653,
            "unit": "ns",
            "range": "± 10766.227356861904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6889.867346938776,
            "unit": "ns",
            "range": "± 1122.9845418307532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23416.440860215054,
            "unit": "ns",
            "range": "± 2164.4858083155113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535765.8777777778,
            "unit": "ns",
            "range": "± 81360.49754714953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011853.754716981,
            "unit": "ns",
            "range": "± 124904.64960811964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2469219.342857143,
            "unit": "ns",
            "range": "± 105867.7953258502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5917642.386363637,
            "unit": "ns",
            "range": "± 219701.285657681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50061.369047619046,
            "unit": "ns",
            "range": "± 2576.111989538666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8668995.761904761,
            "unit": "ns",
            "range": "± 201333.66892124744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22779473.866666667,
            "unit": "ns",
            "range": "± 233555.09565315073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57833680.333333336,
            "unit": "ns",
            "range": "± 394773.5567992775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116044971.13333334,
            "unit": "ns",
            "range": "± 845345.057754851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229605140.2142857,
            "unit": "ns",
            "range": "± 1400062.998640428"
          }
        ]
      }
    ]
  }
}