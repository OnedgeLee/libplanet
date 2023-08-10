window.BENCHMARK_DATA = {
  "lastUpdate": 1691655093655,
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
          "id": "be5f8429f90b0ff18bf05f8583069d0c729de0a6",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>:",
          "timestamp": "2023-08-10T16:54:16+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/be5f8429f90b0ff18bf05f8583069d0c729de0a6"
        },
        "date": 1691655078854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4435703,
            "unit": "ns",
            "range": "± 108614.12490139226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4585852.7272727275,
            "unit": "ns",
            "range": "± 110590.04935353503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5524726.2,
            "unit": "ns",
            "range": "± 95472.53099803854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4948696.2,
            "unit": "ns",
            "range": "± 118259.02800491244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8032167.764705882,
            "unit": "ns",
            "range": "± 162986.596968328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10094495.833333334,
            "unit": "ns",
            "range": "± 257348.6480603556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26684768.6,
            "unit": "ns",
            "range": "± 314457.9902082766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67232988.73333333,
            "unit": "ns",
            "range": "± 744054.4678242378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133632573.03333333,
            "unit": "ns",
            "range": "± 954604.1032516992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270921278.5,
            "unit": "ns",
            "range": "± 1919582.4305591828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58698.043956043955,
            "unit": "ns",
            "range": "± 4893.818345427872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7256383.2890625,
            "unit": "ns",
            "range": "± 24078.420183700367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330900.0458333334,
            "unit": "ns",
            "range": "± 7120.6623378825425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1669350.9337239584,
            "unit": "ns",
            "range": "± 5404.525558614146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3166339.594010417,
            "unit": "ns",
            "range": "± 10505.788465376449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008458.139453125,
            "unit": "ns",
            "range": "± 2828.374830421342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953892.500390625,
            "unit": "ns",
            "range": "± 1433.358410181927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350074.7450980392,
            "unit": "ns",
            "range": "± 14287.514503010154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334672.2380952381,
            "unit": "ns",
            "range": "± 7782.240358050898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303919.70175438595,
            "unit": "ns",
            "range": "± 13198.604685405347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5418826.666666667,
            "unit": "ns",
            "range": "± 67896.7136535516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4887200.117647059,
            "unit": "ns",
            "range": "± 89579.38446420188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24645.516129032258,
            "unit": "ns",
            "range": "± 1805.4426869697854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109320.49462365592,
            "unit": "ns",
            "range": "± 6994.995193185495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94274.94897959183,
            "unit": "ns",
            "range": "± 6768.605332859145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115077.27551020408,
            "unit": "ns",
            "range": "± 16423.305266351388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6690.09375,
            "unit": "ns",
            "range": "± 797.188666543742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23971.01052631579,
            "unit": "ns",
            "range": "± 2251.705289920059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1811345.925,
            "unit": "ns",
            "range": "± 85614.39046032529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3438947.8333333335,
            "unit": "ns",
            "range": "± 113134.18889707919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2412427.046875,
            "unit": "ns",
            "range": "± 105889.68831857102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6568848.76744186,
            "unit": "ns",
            "range": "± 234831.369872981"
          }
        ]
      }
    ]
  }
}