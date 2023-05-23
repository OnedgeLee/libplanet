window.BENCHMARK_DATA = {
  "lastUpdate": 1684833166501,
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
          "id": "d9bdfe98da1ced3d6978f7673fe9b34580b7745f",
          "message": "feat: Introduce DuplicateVoteEvidence",
          "timestamp": "2023-05-23T17:51:45+09:00",
          "tree_id": "696d37566d51827dd0dbd7c64d5280ec15a2cd5e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9bdfe98da1ced3d6978f7673fe9b34580b7745f"
        },
        "date": 1684833137797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9265543.18,
            "unit": "ns",
            "range": "± 237278.07467921823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21684576.28846154,
            "unit": "ns",
            "range": "± 883429.402973043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53932279.25438596,
            "unit": "ns",
            "range": "± 2157366.8345342837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106839395.26190476,
            "unit": "ns",
            "range": "± 1833102.688918515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215221405.23076922,
            "unit": "ns",
            "range": "± 5657496.243165993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72042.54301075269,
            "unit": "ns",
            "range": "± 6138.867139709045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350249.68947368424,
            "unit": "ns",
            "range": "± 48236.53178146355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379305.6288659794,
            "unit": "ns",
            "range": "± 85449.47352972197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334678.41489361704,
            "unit": "ns",
            "range": "± 44363.965172915356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4273923.346938776,
            "unit": "ns",
            "range": "± 169590.5166240572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3960499.785714286,
            "unit": "ns",
            "range": "± 326281.3012650218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17873.212765957447,
            "unit": "ns",
            "range": "± 2721.446108594807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103295.5425531915,
            "unit": "ns",
            "range": "± 19072.801370726906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102444.0744680851,
            "unit": "ns",
            "range": "± 15240.450518444248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105086.92391304347,
            "unit": "ns",
            "range": "± 15949.186441915537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6350.126373626374,
            "unit": "ns",
            "range": "± 1455.4447174382565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16179.056818181818,
            "unit": "ns",
            "range": "± 2353.6139311629836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1581062.28125,
            "unit": "ns",
            "range": "± 178269.7445046752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3101744.3958333335,
            "unit": "ns",
            "range": "± 207989.60683813933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2556779.0520833335,
            "unit": "ns",
            "range": "± 265689.3433921761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6415926.051282051,
            "unit": "ns",
            "range": "± 211400.63551987687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374304.625,
            "unit": "ns",
            "range": "± 243466.42720710946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4688728.252688172,
            "unit": "ns",
            "range": "± 1765845.6185229346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4577678.707865168,
            "unit": "ns",
            "range": "± 253490.25450490028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4726197.126262627,
            "unit": "ns",
            "range": "± 467819.64729384164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7668168.945945946,
            "unit": "ns",
            "range": "± 250480.54301004723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6827582.283757716,
            "unit": "ns",
            "range": "± 359397.5518719196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2279876.446411133,
            "unit": "ns",
            "range": "± 70421.2862871261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326467.0595703125,
            "unit": "ns",
            "range": "± 20100.33519806421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2860499.7963568238,
            "unit": "ns",
            "range": "± 234373.25944424793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895722.502072704,
            "unit": "ns",
            "range": "± 55359.89301166694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793605.6899108887,
            "unit": "ns",
            "range": "± 22317.05106887747"
          }
        ]
      }
    ]
  }
}