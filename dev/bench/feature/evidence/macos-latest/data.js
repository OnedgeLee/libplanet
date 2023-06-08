window.BENCHMARK_DATA = {
  "lastUpdate": 1686228609973,
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
      },
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
          "id": "258929fa4177d2fada72bcdf61eef2359d73ee5c",
          "message": "Fix with tests",
          "timestamp": "2023-06-08T21:24:03+09:00",
          "tree_id": "e17fd7c8033940cc937ed35eca5e77fa252e0202",
          "url": "https://github.com/OnedgeLee/libplanet/commit/258929fa4177d2fada72bcdf61eef2359d73ee5c"
        },
        "date": 1686228557036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11249693.311764706,
            "unit": "ns",
            "range": "± 4798491.4041054305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25124208.337209303,
            "unit": "ns",
            "range": "± 9171475.197074601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61567604.29069767,
            "unit": "ns",
            "range": "± 16288545.129244965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134641373.89473686,
            "unit": "ns",
            "range": "± 31146190.083020527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 323303868.9347826,
            "unit": "ns",
            "range": "± 75527764.86294958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80231.55617977527,
            "unit": "ns",
            "range": "± 9721.06937902451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339975.0348837209,
            "unit": "ns",
            "range": "± 24867.11083324491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336136.4195402299,
            "unit": "ns",
            "range": "± 38625.210982254626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317968.0316455696,
            "unit": "ns",
            "range": "± 22238.14692625555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4482049.056818182,
            "unit": "ns",
            "range": "± 363809.79051713715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3994021.7021276597,
            "unit": "ns",
            "range": "± 243819.9196013311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21361.18181818182,
            "unit": "ns",
            "range": "± 3620.239090172146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103185.59793814433,
            "unit": "ns",
            "range": "± 15395.56652474706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102429.4255319149,
            "unit": "ns",
            "range": "± 14842.204267422687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109905.48958333333,
            "unit": "ns",
            "range": "± 20915.057064227447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7305.015463917526,
            "unit": "ns",
            "range": "± 1242.2009542323963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21457.084210526315,
            "unit": "ns",
            "range": "± 4240.984243608466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1840450.9047619049,
            "unit": "ns",
            "range": "± 238062.4614342534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3484810.1566265062,
            "unit": "ns",
            "range": "± 450771.553528286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2834534.522727273,
            "unit": "ns",
            "range": "± 380518.0837628196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10084863.627659574,
            "unit": "ns",
            "range": "± 4386569.847589997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3935852.6413043477,
            "unit": "ns",
            "range": "± 842560.6778507791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4139136.6263157893,
            "unit": "ns",
            "range": "± 1048192.0607027825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5163743.277777778,
            "unit": "ns",
            "range": "± 1043067.6322377698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4816008.833333333,
            "unit": "ns",
            "range": "± 546893.3867084973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8669987.758823529,
            "unit": "ns",
            "range": "± 1429413.926376839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6933732.06171875,
            "unit": "ns",
            "range": "± 362734.43362920615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2236929.0197832664,
            "unit": "ns",
            "range": "± 67471.91289947092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448454.9376775569,
            "unit": "ns",
            "range": "± 34548.026073422356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230639.451041667,
            "unit": "ns",
            "range": "± 95204.51558000354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906371.5205829327,
            "unit": "ns",
            "range": "± 12297.797252451981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776924.4273828125,
            "unit": "ns",
            "range": "± 20586.03562624382"
          }
        ]
      }
    ]
  }
}