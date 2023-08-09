window.BENCHMARK_DATA = {
  "lastUpdate": 1691549933514,
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
          "id": "324bd13c01474b989b9dae721079349d289b93c3",
          "message": "wip: test fix",
          "timestamp": "2023-08-08T23:12:37+09:00",
          "tree_id": "539ccc7cb1c6bf65f3aa7baec9e5c1c2e3a31e88",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324bd13c01474b989b9dae721079349d289b93c3"
        },
        "date": 1691504801071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383383,
            "unit": "ns",
            "range": "± 122901.20780447188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2399314.285714286,
            "unit": "ns",
            "range": "± 64841.70591060066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1830809.7826086956,
            "unit": "ns",
            "range": "± 102723.23967429664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4935952.083333333,
            "unit": "ns",
            "range": "± 192293.14942222022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43005.1724137931,
            "unit": "ns",
            "range": "± 1893.05493509719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7049873.333333333,
            "unit": "ns",
            "range": "± 64878.42990290892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18003857.14285714,
            "unit": "ns",
            "range": "± 72572.40113564802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45989673.333333336,
            "unit": "ns",
            "range": "± 204707.25601860494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92188273.33333333,
            "unit": "ns",
            "range": "± 513650.01907450374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182811653.33333334,
            "unit": "ns",
            "range": "± 790249.2209664588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890251.618303572,
            "unit": "ns",
            "range": "± 9755.96487338664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558240.234375,
            "unit": "ns",
            "range": "± 2122.7190765218284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168458.6783854167,
            "unit": "ns",
            "range": "± 1344.5095746016373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560384.1947115385,
            "unit": "ns",
            "range": "± 1280.3397329344932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811766.8196614584,
            "unit": "ns",
            "range": "± 789.7307630299589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734597.3828125,
            "unit": "ns",
            "range": "± 596.2598487609552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3094064.285714286,
            "unit": "ns",
            "range": "± 88715.89366263403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3179890.697674419,
            "unit": "ns",
            "range": "± 108486.77736843037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4007553.3333333335,
            "unit": "ns",
            "range": "± 48390.1977480485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3560935.294117647,
            "unit": "ns",
            "range": "± 112991.92752703403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6127465.217391305,
            "unit": "ns",
            "range": "± 154756.55547488315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255100,
            "unit": "ns",
            "range": "± 12105.79625759095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243075,
            "unit": "ns",
            "range": "± 10414.941190424457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220877,
            "unit": "ns",
            "range": "± 14720.094525113716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3826086.6666666665,
            "unit": "ns",
            "range": "± 38432.62874669065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3486506.6666666665,
            "unit": "ns",
            "range": "± 43998.23805996045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17883.333333333332,
            "unit": "ns",
            "range": "± 2043.7152271841985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82950.52631578948,
            "unit": "ns",
            "range": "± 5560.171313835009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66944.23076923077,
            "unit": "ns",
            "range": "± 2739.429843465604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84085.26315789473,
            "unit": "ns",
            "range": "± 12268.953799066496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4698.958333333333,
            "unit": "ns",
            "range": "± 685.1038786646908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17489.583333333332,
            "unit": "ns",
            "range": "± 1932.137031572018"
          }
        ]
      },
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
          "id": "0acaa8512421a414931248c6895a8d7b9bf79651",
          "message": "fix test",
          "timestamp": "2023-08-09T11:42:28+09:00",
          "tree_id": "7fa0e4a5bd26f8b3b447b7de0732f1d1eae06668",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0acaa8512421a414931248c6895a8d7b9bf79651"
        },
        "date": 1691549895249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374190.2173913044,
            "unit": "ns",
            "range": "± 93546.87966179158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476052.9411764704,
            "unit": "ns",
            "range": "± 72016.6751956716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1832693.4782608696,
            "unit": "ns",
            "range": "± 116817.5136503986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5081277.108433735,
            "unit": "ns",
            "range": "± 269548.45952177374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41937.80487804878,
            "unit": "ns",
            "range": "± 2235.7720374476244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6877669.230769231,
            "unit": "ns",
            "range": "± 11973.121607402183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17843885.714285713,
            "unit": "ns",
            "range": "± 135316.42607176397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44954506.666666664,
            "unit": "ns",
            "range": "± 281280.16909090756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90603693.33333333,
            "unit": "ns",
            "range": "± 1252562.3061016432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181051793.33333334,
            "unit": "ns",
            "range": "± 2072659.8754349677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4956871.666666667,
            "unit": "ns",
            "range": "± 28931.68946103886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536622.4158653845,
            "unit": "ns",
            "range": "± 4263.40233892388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155268.5396634615,
            "unit": "ns",
            "range": "± 6621.809381102694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563113.4765625,
            "unit": "ns",
            "range": "± 27846.471608136668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815097.734375,
            "unit": "ns",
            "range": "± 4722.67440418467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746101.2094350961,
            "unit": "ns",
            "range": "± 1827.5315478561433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2970233.3333333335,
            "unit": "ns",
            "range": "± 62491.10054286789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3156431.8181818184,
            "unit": "ns",
            "range": "± 77025.65674200251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4035726.923076923,
            "unit": "ns",
            "range": "± 55203.655583154905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3386540,
            "unit": "ns",
            "range": "± 126619.82993723113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6108847.368421053,
            "unit": "ns",
            "range": "± 209299.15288479556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250826,
            "unit": "ns",
            "range": "± 9597.040572754813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238780,
            "unit": "ns",
            "range": "± 5377.203342767844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207526.5625,
            "unit": "ns",
            "range": "± 9496.252263058874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3766014.285714286,
            "unit": "ns",
            "range": "± 30760.6106056945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3484742.8571428573,
            "unit": "ns",
            "range": "± 42391.63042005261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17364,
            "unit": "ns",
            "range": "± 2355.3944103446515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79104.34782608696,
            "unit": "ns",
            "range": "± 4710.449292480303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64006.25,
            "unit": "ns",
            "range": "± 2469.077375277329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84600,
            "unit": "ns",
            "range": "± 13571.156496768941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4268.75,
            "unit": "ns",
            "range": "± 868.187767709267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16171.739130434782,
            "unit": "ns",
            "range": "± 1256.2219730147015"
          }
        ]
      }
    ]
  }
}