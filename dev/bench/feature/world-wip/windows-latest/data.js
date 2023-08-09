window.BENCHMARK_DATA = {
  "lastUpdate": 1691554131474,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f6f3d48aed11a3c3883db57b87cd134dee39353d",
          "message": "fix test",
          "timestamp": "2023-08-09T11:46:58+09:00",
          "tree_id": "85a1d0e44b14a0b54b7bca7e6116d3602dc9bc35",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f6f3d48aed11a3c3883db57b87cd134dee39353d"
        },
        "date": 1691550334228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437047.3684210526,
            "unit": "ns",
            "range": "± 122626.13553130321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596576.595744681,
            "unit": "ns",
            "range": "± 94629.61943871292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1899647.7272727273,
            "unit": "ns",
            "range": "± 99747.347474049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5217687.777777778,
            "unit": "ns",
            "range": "± 195454.045155573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48450.5376344086,
            "unit": "ns",
            "range": "± 3018.6962221661906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7586793.333333333,
            "unit": "ns",
            "range": "± 122300.45243851989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21161957.14285714,
            "unit": "ns",
            "range": "± 186836.17552154209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52498453.333333336,
            "unit": "ns",
            "range": "± 521826.259902479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105072293.33333333,
            "unit": "ns",
            "range": "± 1167310.0276561778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209069526.66666666,
            "unit": "ns",
            "range": "± 1995974.3225755568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4924358.173076923,
            "unit": "ns",
            "range": "± 13168.91900330452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1570550.306919643,
            "unit": "ns",
            "range": "± 4975.482341748137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213126.5625,
            "unit": "ns",
            "range": "± 5701.945158044396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710576.0602678573,
            "unit": "ns",
            "range": "± 6941.46509659866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832158.5221354166,
            "unit": "ns",
            "range": "± 2259.6835093203586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783446.0286458334,
            "unit": "ns",
            "range": "± 1540.1498724222959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372790.909090909,
            "unit": "ns",
            "range": "± 79365.92713255726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3572611.111111111,
            "unit": "ns",
            "range": "± 116423.55377249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267777.5,
            "unit": "ns",
            "range": "± 146053.8300615257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3951975.8620689656,
            "unit": "ns",
            "range": "± 112303.71974240344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6459138.29787234,
            "unit": "ns",
            "range": "± 247839.89445607076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260608.57142857142,
            "unit": "ns",
            "range": "± 8482.55550522127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252530.35714285713,
            "unit": "ns",
            "range": "± 10478.721636862825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229408.1081081081,
            "unit": "ns",
            "range": "± 11470.199706335588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4183320,
            "unit": "ns",
            "range": "± 62740.977723608084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815938.4615384615,
            "unit": "ns",
            "range": "± 41442.84293782499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21127.659574468085,
            "unit": "ns",
            "range": "± 1546.7902426985193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88356.96202531646,
            "unit": "ns",
            "range": "± 4586.286234156822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75843.85964912281,
            "unit": "ns",
            "range": "± 3279.046983927955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98515.30612244898,
            "unit": "ns",
            "range": "± 15711.525430352776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5837.755102040816,
            "unit": "ns",
            "range": "± 959.1142075467501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20720.833333333332,
            "unit": "ns",
            "range": "± 1736.537187482253"
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
          "id": "595b0867bda8bf47eb16023dc4214aae4828c7a6",
          "message": "test: fix",
          "timestamp": "2023-08-09T12:54:45+09:00",
          "tree_id": "29b3b292330f028d9ac0c50fb7bec793d35b7cf9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/595b0867bda8bf47eb16023dc4214aae4828c7a6"
        },
        "date": 1691554105248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1100720.4081632653,
            "unit": "ns",
            "range": "± 120482.63934416791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899703.9215686275,
            "unit": "ns",
            "range": "± 76716.47531211092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532095,
            "unit": "ns",
            "range": "± 170523.3236661232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3825479.7101449277,
            "unit": "ns",
            "range": "± 169962.6088461727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33649.36708860759,
            "unit": "ns",
            "range": "± 1746.7092442736885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5295013.333333333,
            "unit": "ns",
            "range": "± 76037.69616509457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13555160,
            "unit": "ns",
            "range": "± 144700.803630901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32929057.14285714,
            "unit": "ns",
            "range": "± 244775.20523717493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66453446.666666664,
            "unit": "ns",
            "range": "± 740801.7151965128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130471913.33333333,
            "unit": "ns",
            "range": "± 1163609.453914025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3696407.8683035714,
            "unit": "ns",
            "range": "± 14122.056179638035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1133245.5496651786,
            "unit": "ns",
            "range": "± 2111.1933590746685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 807962.75390625,
            "unit": "ns",
            "range": "± 1723.372253676974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960952.8738839286,
            "unit": "ns",
            "range": "± 2026.0921976997095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615525.9895833334,
            "unit": "ns",
            "range": "± 1311.7811301889433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573485.2213541666,
            "unit": "ns",
            "range": "± 473.19059814776364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2267588.679245283,
            "unit": "ns",
            "range": "± 93786.288690293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279303.6363636362,
            "unit": "ns",
            "range": "± 61083.92515595174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2964419.0476190476,
            "unit": "ns",
            "range": "± 69390.32078789965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2690430.769230769,
            "unit": "ns",
            "range": "± 92181.00087912325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4545426.666666667,
            "unit": "ns",
            "range": "± 167409.49169354438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187274.46808510637,
            "unit": "ns",
            "range": "± 7258.891641503524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173607.9365079365,
            "unit": "ns",
            "range": "± 6901.573022829804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141770,
            "unit": "ns",
            "range": "± 3797.744339600221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2832900,
            "unit": "ns",
            "range": "± 30857.495037672776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2601537.5,
            "unit": "ns",
            "range": "± 49964.79927575679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11051.685393258427,
            "unit": "ns",
            "range": "± 1002.2828896109851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57612.3595505618,
            "unit": "ns",
            "range": "± 5146.928038441057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44412.903225806454,
            "unit": "ns",
            "range": "± 2677.4105679235327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67681.81818181818,
            "unit": "ns",
            "range": "± 15551.09001781274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2663.265306122449,
            "unit": "ns",
            "range": "± 639.6499937106456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10094.845360824742,
            "unit": "ns",
            "range": "± 1428.604442426581"
          }
        ]
      }
    ]
  }
}