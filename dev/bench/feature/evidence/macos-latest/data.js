window.BENCHMARK_DATA = {
  "lastUpdate": 1686289943012,
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
          "id": "da3894c86bfe8ab49f77759f830d0d6516b3d746",
          "message": "Fix with tests",
          "timestamp": "2023-06-08T21:25:50+09:00",
          "tree_id": "74501735b546fe096b55d1dafbef10de0cb2ea72",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da3894c86bfe8ab49f77759f830d0d6516b3d746"
        },
        "date": 1686230062819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10885402.97826087,
            "unit": "ns",
            "range": "± 2769431.675680195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26074691.25,
            "unit": "ns",
            "range": "± 9372928.754981557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71735385.9021739,
            "unit": "ns",
            "range": "± 30464639.75001534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114700279.77272727,
            "unit": "ns",
            "range": "± 18903843.039321482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225680448.01149425,
            "unit": "ns",
            "range": "± 11856253.349143779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76154.08620689655,
            "unit": "ns",
            "range": "± 6928.198716455185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363846.42268041236,
            "unit": "ns",
            "range": "± 56044.36632236759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323915.867816092,
            "unit": "ns",
            "range": "± 32807.69183531223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282449.8298969072,
            "unit": "ns",
            "range": "± 26545.70562991375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4530144.576086956,
            "unit": "ns",
            "range": "± 347433.74358640914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914998.7448979593,
            "unit": "ns",
            "range": "± 155085.4860850313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23923.977777777778,
            "unit": "ns",
            "range": "± 3695.345147334359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114819.8595505618,
            "unit": "ns",
            "range": "± 19248.21283158942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116379.4213483146,
            "unit": "ns",
            "range": "± 12153.590886520964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130559.0425531915,
            "unit": "ns",
            "range": "± 23325.153612496466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7733.031914893617,
            "unit": "ns",
            "range": "± 1594.533461968133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21628.550505050505,
            "unit": "ns",
            "range": "± 4588.415958435688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1717046.3924731184,
            "unit": "ns",
            "range": "± 186989.94581495447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3221043.817647059,
            "unit": "ns",
            "range": "± 433339.6802294503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2695945.191011236,
            "unit": "ns",
            "range": "± 372169.7211302952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7307961.056818182,
            "unit": "ns",
            "range": "± 1019567.2712858719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3502074.4782608696,
            "unit": "ns",
            "range": "± 206009.46495059467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745307.3421052634,
            "unit": "ns",
            "range": "± 307980.3577875082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4482021.703703703,
            "unit": "ns",
            "range": "± 186030.89865057563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4865913.027472528,
            "unit": "ns",
            "range": "± 636593.3447171461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8631847.06122449,
            "unit": "ns",
            "range": "± 825890.2020699797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8531336.080403646,
            "unit": "ns",
            "range": "± 2048842.0017045408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2287836.8143458106,
            "unit": "ns",
            "range": "± 343276.94409607403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367213.9618582588,
            "unit": "ns",
            "range": "± 64675.159238494736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3664322.871875,
            "unit": "ns",
            "range": "± 571314.6915699112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883825.8226254112,
            "unit": "ns",
            "range": "± 18571.41580813127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851399.2894620028,
            "unit": "ns",
            "range": "± 20102.388581939027"
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
          "id": "67e4f7b2512bd31a009e60bea12014204b33d58c",
          "message": "Fix with tests",
          "timestamp": "2023-06-09T01:57:52+09:00",
          "tree_id": "e11af0f39cd18fc1181dc4496b99100d53630ebf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/67e4f7b2512bd31a009e60bea12014204b33d58c"
        },
        "date": 1686245117536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8549220.609756097,
            "unit": "ns",
            "range": "± 435304.7566539442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28015766.97777778,
            "unit": "ns",
            "range": "± 8588172.418868212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 83400139.0638298,
            "unit": "ns",
            "range": "± 28624191.2173567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145705622.32222223,
            "unit": "ns",
            "range": "± 46955278.6307612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 304407441.47959185,
            "unit": "ns",
            "range": "± 100920059.42860427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88801.77777777778,
            "unit": "ns",
            "range": "± 12610.94041239169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397072.9247311828,
            "unit": "ns",
            "range": "± 77620.41749902234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364182.47191011236,
            "unit": "ns",
            "range": "± 46540.28945687076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324649.47777777776,
            "unit": "ns",
            "range": "± 30475.764090476507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4858634.797619048,
            "unit": "ns",
            "range": "± 739863.0551652628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4444393.244444445,
            "unit": "ns",
            "range": "± 584137.4949908176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27143.93181818182,
            "unit": "ns",
            "range": "± 4206.95278585632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128453.40697674418,
            "unit": "ns",
            "range": "± 24610.745169600403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119187.81818181818,
            "unit": "ns",
            "range": "± 15813.986870747407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131613.4157303371,
            "unit": "ns",
            "range": "± 24435.145917681486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8944.768817204302,
            "unit": "ns",
            "range": "± 1263.470661208425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23629.38888888889,
            "unit": "ns",
            "range": "± 5393.482570688867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1942522.2527472528,
            "unit": "ns",
            "range": "± 354678.9489238148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3645324.4,
            "unit": "ns",
            "range": "± 582347.2429048042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3063087.554347826,
            "unit": "ns",
            "range": "± 551785.7963810958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7768004.718390805,
            "unit": "ns",
            "range": "± 1557838.5249573416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4064955.195652174,
            "unit": "ns",
            "range": "± 778913.0876685233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4372318.197674419,
            "unit": "ns",
            "range": "± 753762.014493369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4971877.3965517245,
            "unit": "ns",
            "range": "± 761320.3765382699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4752766.909638554,
            "unit": "ns",
            "range": "± 498300.6845399926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9382674.097826088,
            "unit": "ns",
            "range": "± 1776918.7951451805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7414325.973118279,
            "unit": "ns",
            "range": "± 530210.1798406864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059705.823828125,
            "unit": "ns",
            "range": "± 38996.787954270054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380852.849609375,
            "unit": "ns",
            "range": "± 52174.289593018206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3388736.204059103,
            "unit": "ns",
            "range": "± 548435.1942595303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988095.6969445633,
            "unit": "ns",
            "range": "± 49179.77582299213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 895353.7262803819,
            "unit": "ns",
            "range": "± 33861.657766306125"
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
          "id": "f29f3d037b0c1ff204e651a6b2c87819e289b685",
          "message": "Fix with tests",
          "timestamp": "2023-06-09T13:43:55+09:00",
          "tree_id": "a2bd70bc6f264d097612af64d07db66115453b1e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f29f3d037b0c1ff204e651a6b2c87819e289b685"
        },
        "date": 1686287272311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13394721.947916666,
            "unit": "ns",
            "range": "± 4880974.537206841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30755580.375,
            "unit": "ns",
            "range": "± 7241037.887195376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73833582.66666667,
            "unit": "ns",
            "range": "± 14830430.265009658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151132599.11458334,
            "unit": "ns",
            "range": "± 26995673.22383286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278723672.20526314,
            "unit": "ns",
            "range": "± 60213277.1020346"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66973.2967032967,
            "unit": "ns",
            "range": "± 7426.563963225383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 415165.82352941175,
            "unit": "ns",
            "range": "± 50697.2849397885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379057.1927710843,
            "unit": "ns",
            "range": "± 38414.311437992335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320739.06976744183,
            "unit": "ns",
            "range": "± 11330.582337817603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5000868.991525424,
            "unit": "ns",
            "range": "± 213459.6106476362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4502164.55882353,
            "unit": "ns",
            "range": "± 130048.38921979426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19423.802197802197,
            "unit": "ns",
            "range": "± 1494.6397872975597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97033.47802197802,
            "unit": "ns",
            "range": "± 6309.331318642291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90802.46629213484,
            "unit": "ns",
            "range": "± 8937.276925950298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110086.65625,
            "unit": "ns",
            "range": "± 14232.622653481036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5650.237113402062,
            "unit": "ns",
            "range": "± 765.7439842673142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18318.35632183908,
            "unit": "ns",
            "range": "± 1051.7853147399392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1979217.9759036144,
            "unit": "ns",
            "range": "± 275496.3938680361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3776347.095505618,
            "unit": "ns",
            "range": "± 366694.89243405184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3033318.644444444,
            "unit": "ns",
            "range": "± 333669.7172468393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16623667.303030303,
            "unit": "ns",
            "range": "± 5664426.81551849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4233313.2191011235,
            "unit": "ns",
            "range": "± 784844.8837201844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4471005.217391305,
            "unit": "ns",
            "range": "± 740908.8003927062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6730031.510638298,
            "unit": "ns",
            "range": "± 1431360.0093646462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5935598.010526316,
            "unit": "ns",
            "range": "± 1216027.057528007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11704111.484210527,
            "unit": "ns",
            "range": "± 2700152.1419925066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6949409.324652778,
            "unit": "ns",
            "range": "± 229072.88491860326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2224057.4930889425,
            "unit": "ns",
            "range": "± 27093.338153508314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1498339.9447544643,
            "unit": "ns",
            "range": "± 18667.70086616938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3158563.613839286,
            "unit": "ns",
            "range": "± 28272.025787811297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047527.4881591797,
            "unit": "ns",
            "range": "± 19654.768631709045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861853.8911946615,
            "unit": "ns",
            "range": "± 9183.183461319366"
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
          "id": "1a24fed02fab391c473a200af054df24a9a1d00f",
          "message": "Fix RocksDBStore to dispose new DBs",
          "timestamp": "2023-06-09T14:03:26+09:00",
          "tree_id": "009effa4b298705939aa9464304513c431b83dd1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a24fed02fab391c473a200af054df24a9a1d00f"
        },
        "date": 1686288059125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9007905.961538462,
            "unit": "ns",
            "range": "± 240059.78747357594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23279963.852941178,
            "unit": "ns",
            "range": "± 474697.9901649233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57875839.64285714,
            "unit": "ns",
            "range": "± 990211.6886907495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118628763.80434783,
            "unit": "ns",
            "range": "± 2861990.8198145353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234416257.42857143,
            "unit": "ns",
            "range": "± 2829940.150484559"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68183.92857142857,
            "unit": "ns",
            "range": "± 7803.389349283293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 401139.27368421055,
            "unit": "ns",
            "range": "± 24944.316414187593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371341.7580645161,
            "unit": "ns",
            "range": "± 24744.074860767927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339666.75,
            "unit": "ns",
            "range": "± 17616.441280649684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5203354.04,
            "unit": "ns",
            "range": "± 205638.83987441752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4566263.333333333,
            "unit": "ns",
            "range": "± 142883.70855801462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19961.397849462366,
            "unit": "ns",
            "range": "± 1412.595392237012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101063.33870967742,
            "unit": "ns",
            "range": "± 6703.990932224986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104185.88541666667,
            "unit": "ns",
            "range": "± 13515.502462665285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120696.14736842105,
            "unit": "ns",
            "range": "± 16291.048139006074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6646.357894736842,
            "unit": "ns",
            "range": "± 1028.5188474135427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19165.602150537634,
            "unit": "ns",
            "range": "± 1475.2094555761944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1899954.2878787878,
            "unit": "ns",
            "range": "± 200296.6713067309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3512152.737113402,
            "unit": "ns",
            "range": "± 206426.70529743386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2870272.9886363638,
            "unit": "ns",
            "range": "± 186918.83219298872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7873446.222222222,
            "unit": "ns",
            "range": "± 434481.85950519977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3949848.0425531915,
            "unit": "ns",
            "range": "± 152664.9814887313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4096189.069767442,
            "unit": "ns",
            "range": "± 221359.85601674457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5434587.082352941,
            "unit": "ns",
            "range": "± 290942.87695747206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5310011.057377049,
            "unit": "ns",
            "range": "± 238940.90705594444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9436378.396551725,
            "unit": "ns",
            "range": "± 411484.37927584106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7395733.590959822,
            "unit": "ns",
            "range": "± 90545.33044265093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2329426.227294922,
            "unit": "ns",
            "range": "± 43429.9582642871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493247.5189302885,
            "unit": "ns",
            "range": "± 10919.573116238906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2949341.526785714,
            "unit": "ns",
            "range": "± 28884.348156730375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976010.708984375,
            "unit": "ns",
            "range": "± 13375.914041497203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904783.5124162947,
            "unit": "ns",
            "range": "± 8067.725396018151"
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
          "id": "954d3004ee73427600aac94090ed23c854cc84b8",
          "message": "Fix error on RocksDbStore",
          "timestamp": "2023-06-09T14:08:49+09:00",
          "tree_id": "8eddfa90192bad75e7c94c0eb75771afb4075eee",
          "url": "https://github.com/OnedgeLee/libplanet/commit/954d3004ee73427600aac94090ed23c854cc84b8"
        },
        "date": 1686288802475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8668050.4,
            "unit": "ns",
            "range": "± 384915.71275539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21382569.325842697,
            "unit": "ns",
            "range": "± 1147509.1589264488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53359965.527777776,
            "unit": "ns",
            "range": "± 1763835.8085304631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105374009.46428572,
            "unit": "ns",
            "range": "± 4500228.840109049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228729943.95,
            "unit": "ns",
            "range": "± 5999531.3830238385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71415.41414141415,
            "unit": "ns",
            "range": "± 14022.179678601386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382911.7528089888,
            "unit": "ns",
            "range": "± 52666.39646187227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364860.9367816092,
            "unit": "ns",
            "range": "± 57175.765655930554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324345.6235955056,
            "unit": "ns",
            "range": "± 25846.48518078347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4676308.758241759,
            "unit": "ns",
            "range": "± 646936.0265610734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3960037,
            "unit": "ns",
            "range": "± 73182.7461569096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23732.376404494382,
            "unit": "ns",
            "range": "± 4122.976492172264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110370.13265306123,
            "unit": "ns",
            "range": "± 19595.924567559436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117056.45348837209,
            "unit": "ns",
            "range": "± 11720.90401342528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118744.81182795699,
            "unit": "ns",
            "range": "± 18730.836549007083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8129.260869565217,
            "unit": "ns",
            "range": "± 1528.7562197913976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22314.06842105263,
            "unit": "ns",
            "range": "± 5515.778914637747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779371.3333333333,
            "unit": "ns",
            "range": "± 263177.4271374668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3292155.065217391,
            "unit": "ns",
            "range": "± 418552.4006747412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2667461.5,
            "unit": "ns",
            "range": "± 328274.8050185302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7105128.885057472,
            "unit": "ns",
            "range": "± 764268.1205180371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3447816.784090909,
            "unit": "ns",
            "range": "± 212904.5108537989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3553426.35483871,
            "unit": "ns",
            "range": "± 202591.53166814367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5752230,
            "unit": "ns",
            "range": "± 1602691.8296387657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4989654.02247191,
            "unit": "ns",
            "range": "± 778169.5346197058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11322641.770833334,
            "unit": "ns",
            "range": "± 3279126.8406521603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7440849.666750672,
            "unit": "ns",
            "range": "± 891902.3438303593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2476405.466599368,
            "unit": "ns",
            "range": "± 341569.3943473394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1590808.53966506,
            "unit": "ns",
            "range": "± 187273.2879377838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699415.804387019,
            "unit": "ns",
            "range": "± 28195.127417816173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928353.8065814395,
            "unit": "ns",
            "range": "± 29007.110687749537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907946.4601405353,
            "unit": "ns",
            "range": "± 47183.02124376016"
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
          "id": "d8fa11a9055d3b84fbed3c527ac8f9412bbbaac5",
          "message": "Update changelog",
          "timestamp": "2023-06-09T14:28:45+09:00",
          "tree_id": "404758d824af1449b09717bd64b5f4fc0380ec16",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d8fa11a9055d3b84fbed3c527ac8f9412bbbaac5"
        },
        "date": 1686289916410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8371936.358974359,
            "unit": "ns",
            "range": "± 290162.8259766617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21704044.010526314,
            "unit": "ns",
            "range": "± 1537868.8883936005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54360256.205882356,
            "unit": "ns",
            "range": "± 1742426.783953916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114130386.8367347,
            "unit": "ns",
            "range": "± 6634653.341883489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242200957.989011,
            "unit": "ns",
            "range": "± 13516496.030465947"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72839.38461538461,
            "unit": "ns",
            "range": "± 14737.506504583791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360989.8298969072,
            "unit": "ns",
            "range": "± 49565.001525505555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369696.01020408166,
            "unit": "ns",
            "range": "± 63556.268167070964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332078.6989247312,
            "unit": "ns",
            "range": "± 42582.64609321117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4603681.717391305,
            "unit": "ns",
            "range": "± 312744.6899933205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4273120.979166667,
            "unit": "ns",
            "range": "± 332149.32494451094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19644.021739130436,
            "unit": "ns",
            "range": "± 3765.9960534030683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109318.53125,
            "unit": "ns",
            "range": "± 21802.931639407976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119082.0947368421,
            "unit": "ns",
            "range": "± 19552.675765667274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133238.193877551,
            "unit": "ns",
            "range": "± 30401.058102315692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8057.7052631578945,
            "unit": "ns",
            "range": "± 1130.5847091423414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22528.215909090908,
            "unit": "ns",
            "range": "± 5226.0060043445355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777678.8333333333,
            "unit": "ns",
            "range": "± 309707.57530964783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3512433.375,
            "unit": "ns",
            "range": "± 681760.9678586469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2731855.3470588233,
            "unit": "ns",
            "range": "± 357411.98274958297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7238317.837209302,
            "unit": "ns",
            "range": "± 805351.763739414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3812705.14,
            "unit": "ns",
            "range": "± 423269.93367092387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3805236.090909091,
            "unit": "ns",
            "range": "± 314342.62149185117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5057634.895833333,
            "unit": "ns",
            "range": "± 534976.7655006392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5251034.302083333,
            "unit": "ns",
            "range": "± 652942.1288598508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9128793.226804124,
            "unit": "ns",
            "range": "± 769455.2056796217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7269083.361288265,
            "unit": "ns",
            "range": "± 491899.2929823212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2287452.341857281,
            "unit": "ns",
            "range": "± 154859.8119726149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321485.5315104167,
            "unit": "ns",
            "range": "± 21774.013516769443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2740272.9613217213,
            "unit": "ns",
            "range": "± 121744.84279465118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824370.0932074653,
            "unit": "ns",
            "range": "± 17426.39732656018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775348.689344618,
            "unit": "ns",
            "range": "± 21265.768753344197"
          }
        ]
      }
    ]
  }
}