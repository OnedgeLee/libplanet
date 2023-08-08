window.BENCHMARK_DATA = {
  "lastUpdate": 1691504843805,
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
      }
    ]
  }
}