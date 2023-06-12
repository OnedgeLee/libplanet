window.BENCHMARK_DATA = {
  "lastUpdate": 1686566753822,
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
          "id": "d61782e90b2eaff77aa6d016026ae6e39039faeb",
          "message": "Update changelog",
          "timestamp": "2023-06-09T14:27:50+09:00",
          "tree_id": "81c7760b1b4e1dd3b8c277b3fbcdb7c6e511e9ca",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d61782e90b2eaff77aa6d016026ae6e39039faeb"
        },
        "date": 1686290153764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9055427.816091955,
            "unit": "ns",
            "range": "± 703523.0262850119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21316350.419753086,
            "unit": "ns",
            "range": "± 1120679.20748891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61063750.5625,
            "unit": "ns",
            "range": "± 4546714.867783651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113620522.7037037,
            "unit": "ns",
            "range": "± 11662012.021869786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 309227974.51578945,
            "unit": "ns",
            "range": "± 94853797.18010525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86731.06741573034,
            "unit": "ns",
            "range": "± 11465.626369320518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383539.9555555555,
            "unit": "ns",
            "range": "± 50117.471917230694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368917.97777777776,
            "unit": "ns",
            "range": "± 52266.92701439019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361735.0543478261,
            "unit": "ns",
            "range": "± 53678.086041148774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4571365.2235294115,
            "unit": "ns",
            "range": "± 387211.99370562524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4398766.989247312,
            "unit": "ns",
            "range": "± 608330.9854323708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28060.967032967033,
            "unit": "ns",
            "range": "± 6613.072707314992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126236.57692307692,
            "unit": "ns",
            "range": "± 21626.806378623303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129043.5,
            "unit": "ns",
            "range": "± 11540.373380921621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162754.46808510637,
            "unit": "ns",
            "range": "± 32315.328413745356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10822.613636363636,
            "unit": "ns",
            "range": "± 1733.9415031550623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31629.093023255813,
            "unit": "ns",
            "range": "± 5221.960753289125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1871172.5795454546,
            "unit": "ns",
            "range": "± 384046.1029072506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3444093.698924731,
            "unit": "ns",
            "range": "± 390037.591600331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2990692.801075269,
            "unit": "ns",
            "range": "± 411903.8904717676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8848548.02247191,
            "unit": "ns",
            "range": "± 2264163.379962403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3663863.339506173,
            "unit": "ns",
            "range": "± 518152.5853645443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4025136.788888889,
            "unit": "ns",
            "range": "± 707214.9082285598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4779447.724719102,
            "unit": "ns",
            "range": "± 339330.20280730154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4646197.2727272725,
            "unit": "ns",
            "range": "± 446120.0086339515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8524655.673684211,
            "unit": "ns",
            "range": "± 940603.7312709758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9037155.415322581,
            "unit": "ns",
            "range": "± 1025417.8593557712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2464905.7848412297,
            "unit": "ns",
            "range": "± 183521.84772880934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1567956.3588917525,
            "unit": "ns",
            "range": "± 99477.30879893902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3289297.247704575,
            "unit": "ns",
            "range": "± 272634.0063835898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1120673.6689749053,
            "unit": "ns",
            "range": "± 83395.91584202618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782946.0926171875,
            "unit": "ns",
            "range": "± 19149.991523375593"
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
          "id": "962db89abe408ca5ba44da1a3965e9e28bf34dfa",
          "message": "Fix error on DefaultStore",
          "timestamp": "2023-06-09T15:44:01+09:00",
          "tree_id": "f67005a3b2dc25392b864388d29a0d5343c3399a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/962db89abe408ca5ba44da1a3965e9e28bf34dfa"
        },
        "date": 1686294554092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8886390.68,
            "unit": "ns",
            "range": "± 234350.5682808557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22656456.47692308,
            "unit": "ns",
            "range": "± 1051202.8564187954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56144953.791666664,
            "unit": "ns",
            "range": "± 2765875.630099307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111627970.58064516,
            "unit": "ns",
            "range": "± 5025699.244402024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229900956.7037037,
            "unit": "ns",
            "range": "± 6424003.863566066"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78879.33720930232,
            "unit": "ns",
            "range": "± 9812.870330948583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384483.3263157895,
            "unit": "ns",
            "range": "± 61723.41483559423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330222.07446808513,
            "unit": "ns",
            "range": "± 42771.99091695138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338980.6373626374,
            "unit": "ns",
            "range": "± 41477.04915425892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5090491.58988764,
            "unit": "ns",
            "range": "± 741999.5391794489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4065418.7558139535,
            "unit": "ns",
            "range": "± 357531.0360647092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23766.644329896906,
            "unit": "ns",
            "range": "± 4702.8768566646395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120698.23333333334,
            "unit": "ns",
            "range": "± 15926.406925874375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111982.45698924731,
            "unit": "ns",
            "range": "± 12385.067769306064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120781.61235955056,
            "unit": "ns",
            "range": "± 14493.39587492289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8812.54255319149,
            "unit": "ns",
            "range": "± 1360.4258497960889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21093.645833333332,
            "unit": "ns",
            "range": "± 4807.643009295156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1739722.0111111111,
            "unit": "ns",
            "range": "± 365420.2015550965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3615759.177777778,
            "unit": "ns",
            "range": "± 563939.0949986189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3021355.0555555555,
            "unit": "ns",
            "range": "± 539141.3124699731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7798792.282608695,
            "unit": "ns",
            "range": "± 1123606.1514498638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3514127.8314606743,
            "unit": "ns",
            "range": "± 268360.06657945237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3879391.994623656,
            "unit": "ns",
            "range": "± 337852.2206567998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4983376.591836735,
            "unit": "ns",
            "range": "± 426889.8216190147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4580634.78125,
            "unit": "ns",
            "range": "± 313281.93893951026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8200980.159574468,
            "unit": "ns",
            "range": "± 571508.4313338976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7183849.214026162,
            "unit": "ns",
            "range": "± 647342.4955587562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171217.787860577,
            "unit": "ns",
            "range": "± 224127.8632947977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1552898.9382726648,
            "unit": "ns",
            "range": "± 208145.94878334686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3730320.5222897874,
            "unit": "ns",
            "range": "± 342956.86343318375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 902391.3947753906,
            "unit": "ns",
            "range": "± 41357.02620582882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939266.0782453981,
            "unit": "ns",
            "range": "± 46572.03702785639"
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
          "id": "3ffab8183fcce416156d0599591df6abfa73a625",
          "message": "Moved UpdateEvidence() to NewHeight()",
          "timestamp": "2023-06-09T16:50:05+09:00",
          "tree_id": "8c260094be9b98339b734e1da4cbbb102d954cf3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3ffab8183fcce416156d0599591df6abfa73a625"
        },
        "date": 1686298059472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8967714.102040816,
            "unit": "ns",
            "range": "± 678208.390255338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22295348.694736842,
            "unit": "ns",
            "range": "± 1272899.239440855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54870387.90789474,
            "unit": "ns",
            "range": "± 2761251.5978101925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109328658.77906977,
            "unit": "ns",
            "range": "± 4043486.1343394746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230102850.24418604,
            "unit": "ns",
            "range": "± 8474919.406102262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76541.22727272728,
            "unit": "ns",
            "range": "± 8822.565246795304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328798.2604166667,
            "unit": "ns",
            "range": "± 31816.198232229475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321484.6263157895,
            "unit": "ns",
            "range": "± 24735.954794178033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301488.36813186813,
            "unit": "ns",
            "range": "± 24580.90079183375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4318003.228571429,
            "unit": "ns",
            "range": "± 141670.78140307547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3905212.222222222,
            "unit": "ns",
            "range": "± 109405.57209032023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17339.005494505494,
            "unit": "ns",
            "range": "± 2332.7918198950965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102607.85869565218,
            "unit": "ns",
            "range": "± 20802.684656406243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113706.77659574468,
            "unit": "ns",
            "range": "± 15294.290826307095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115767.67204301075,
            "unit": "ns",
            "range": "± 16933.196110408626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8983.125,
            "unit": "ns",
            "range": "± 1240.2664045721567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21027.978723404256,
            "unit": "ns",
            "range": "± 5047.615921815574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708507.6326530613,
            "unit": "ns",
            "range": "± 211268.20865969412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3319073.914141414,
            "unit": "ns",
            "range": "± 281993.873298188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2873238.474747475,
            "unit": "ns",
            "range": "± 383090.40087309555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6969400.428571428,
            "unit": "ns",
            "range": "± 544778.5948369112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3459830.1530612246,
            "unit": "ns",
            "range": "± 235864.17571927718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3785958.947368421,
            "unit": "ns",
            "range": "± 297182.42191474617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4592966.692307692,
            "unit": "ns",
            "range": "± 123287.69952789912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4450762.857142857,
            "unit": "ns",
            "range": "± 161578.30120598883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7775889.254545455,
            "unit": "ns",
            "range": "± 319276.55202830373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6524421.698102678,
            "unit": "ns",
            "range": "± 104598.87844762517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2105454.3297991073,
            "unit": "ns",
            "range": "± 48809.39207186201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330440.1788504464,
            "unit": "ns",
            "range": "± 21877.079205886617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2866353.2017911584,
            "unit": "ns",
            "range": "± 101310.60051519828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928914.4407743566,
            "unit": "ns",
            "range": "± 18435.966623765707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789791.3016764323,
            "unit": "ns",
            "range": "± 30652.618289033795"
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
          "id": "04f5e3a8089b6f9315da7e049af2136265739c73",
          "message": "Declare DuplicatedVotesPool as subclass of MessageLog",
          "timestamp": "2023-06-09T17:13:58+09:00",
          "tree_id": "79976ce5e208518860d6c7c36e703ec68729a539",
          "url": "https://github.com/OnedgeLee/libplanet/commit/04f5e3a8089b6f9315da7e049af2136265739c73"
        },
        "date": 1686300011327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10085123.011904761,
            "unit": "ns",
            "range": "± 1595264.449822552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27737287.11956522,
            "unit": "ns",
            "range": "± 7107209.256528876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65635834.244444445,
            "unit": "ns",
            "range": "± 11027875.746971922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129955417.98888889,
            "unit": "ns",
            "range": "± 27242736.14111773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243689689.20114943,
            "unit": "ns",
            "range": "± 23637727.254135508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80858.38461538461,
            "unit": "ns",
            "range": "± 12681.862457654704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355571.06043956045,
            "unit": "ns",
            "range": "± 50940.65880549615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351278.14130434784,
            "unit": "ns",
            "range": "± 46520.378503884174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307495.7659574468,
            "unit": "ns",
            "range": "± 37974.196340728595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4776681.701754386,
            "unit": "ns",
            "range": "± 207117.32637211803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4052615.104651163,
            "unit": "ns",
            "range": "± 219923.51653631925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19267.951612903227,
            "unit": "ns",
            "range": "± 3267.3693863523263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105833.92105263157,
            "unit": "ns",
            "range": "± 18305.763871140014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110153.19892473119,
            "unit": "ns",
            "range": "± 19342.362373020467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122338.37368421053,
            "unit": "ns",
            "range": "± 22067.9815889312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7007.083333333333,
            "unit": "ns",
            "range": "± 1552.8351501395025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17930.0625,
            "unit": "ns",
            "range": "± 2949.662163750818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1715024.611111111,
            "unit": "ns",
            "range": "± 197771.1852033991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3509460.8588235294,
            "unit": "ns",
            "range": "± 562994.862651689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2882714.283950617,
            "unit": "ns",
            "range": "± 522705.7103339611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7282360.936708861,
            "unit": "ns",
            "range": "± 1288970.9023752376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3515679.7209302327,
            "unit": "ns",
            "range": "± 355218.8464609206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3774152.643678161,
            "unit": "ns",
            "range": "± 391932.30715161195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4682388.046511628,
            "unit": "ns",
            "range": "± 314155.81595589704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4483886.80882353,
            "unit": "ns",
            "range": "± 209950.59647637064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8190012.488888889,
            "unit": "ns",
            "range": "± 477803.8264485561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7411482.1653125,
            "unit": "ns",
            "range": "± 487821.0393343093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2076940.2828842474,
            "unit": "ns",
            "range": "± 79429.90410369601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382400.3675271738,
            "unit": "ns",
            "range": "± 34611.933112250765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3248162.3859887943,
            "unit": "ns",
            "range": "± 245881.04975173002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950645.8810221354,
            "unit": "ns",
            "range": "± 31515.921252677017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810825.1865699405,
            "unit": "ns",
            "range": "± 29001.43475642768"
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
          "id": "996635743872ab1896fa936d1a0a01c1d69b9670",
          "message": "Update changelog",
          "timestamp": "2023-06-09T17:40:26+09:00",
          "tree_id": "8a3b0cb08bea3cdbce6cc3903c05134523f2df58",
          "url": "https://github.com/OnedgeLee/libplanet/commit/996635743872ab1896fa936d1a0a01c1d69b9670"
        },
        "date": 1686301500915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8014671.192307692,
            "unit": "ns",
            "range": "± 132915.03234797824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20049277.462962963,
            "unit": "ns",
            "range": "± 462781.23042148293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51304789.047619045,
            "unit": "ns",
            "range": "± 1202194.2961626658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136312988.18556702,
            "unit": "ns",
            "range": "± 40923226.604050614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274514490.8210526,
            "unit": "ns",
            "range": "± 63427072.38363535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66611.55617977527,
            "unit": "ns",
            "range": "± 9193.663748572057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340950.8908045977,
            "unit": "ns",
            "range": "± 39963.200899966425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339960.8448275862,
            "unit": "ns",
            "range": "± 43631.57285270199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304922.3068181818,
            "unit": "ns",
            "range": "± 25099.618946531886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4396257.759259259,
            "unit": "ns",
            "range": "± 244644.22751675427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4031606.595505618,
            "unit": "ns",
            "range": "± 322693.6227060823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24717.844086021505,
            "unit": "ns",
            "range": "± 4775.499050849631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114141.22222222222,
            "unit": "ns",
            "range": "± 17055.94532082995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114748.35555555555,
            "unit": "ns",
            "range": "± 9070.530430039478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109727.95698924731,
            "unit": "ns",
            "range": "± 14436.489183070536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5122.010638297872,
            "unit": "ns",
            "range": "± 729.2813297693324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16064.455555555556,
            "unit": "ns",
            "range": "± 1636.8114671217857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675429.0833333333,
            "unit": "ns",
            "range": "± 194216.44807171455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3184652.3651685393,
            "unit": "ns",
            "range": "± 347951.6481256343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2665221.1685393257,
            "unit": "ns",
            "range": "± 287214.019310404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8938902.772727273,
            "unit": "ns",
            "range": "± 2866837.466260779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3631828.4269662923,
            "unit": "ns",
            "range": "± 447616.92748979735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3799980.879310345,
            "unit": "ns",
            "range": "± 664055.7706359554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4835722.482758621,
            "unit": "ns",
            "range": "± 714461.7777318236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4251095.023809524,
            "unit": "ns",
            "range": "± 209383.07711456355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8238065.17816092,
            "unit": "ns",
            "range": "± 929130.063748299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7004337.805345395,
            "unit": "ns",
            "range": "± 470540.8047514852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963397.2817708333,
            "unit": "ns",
            "range": "± 24080.964082771043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346753.07375,
            "unit": "ns",
            "range": "± 32244.08176780109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2986254.600278253,
            "unit": "ns",
            "range": "± 147852.3809195894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873655.5583089193,
            "unit": "ns",
            "range": "± 22498.192392913206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789030.8444010416,
            "unit": "ns",
            "range": "± 21418.3293659052"
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
          "id": "cffa72f763704253f16675d41037b72d99cc4e5d",
          "message": "Add tests",
          "timestamp": "2023-06-09T19:11:15+09:00",
          "tree_id": "48d7885c3eeffb2dceceefc3467df2bf35003a42",
          "url": "https://github.com/OnedgeLee/libplanet/commit/cffa72f763704253f16675d41037b72d99cc4e5d"
        },
        "date": 1686306993060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12025769.938202247,
            "unit": "ns",
            "range": "± 5731292.120191125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22033722.56451613,
            "unit": "ns",
            "range": "± 667754.8221521097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56345882.571428575,
            "unit": "ns",
            "range": "± 2402912.890584417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111299785.82954545,
            "unit": "ns",
            "range": "± 5971360.152361212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227108943.9512195,
            "unit": "ns",
            "range": "± 7535179.91505525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81820.63483146067,
            "unit": "ns",
            "range": "± 7240.794745730313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370561.6397849462,
            "unit": "ns",
            "range": "± 44139.88675533419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323662.3870967742,
            "unit": "ns",
            "range": "± 30996.87963714786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296994.85714285716,
            "unit": "ns",
            "range": "± 36529.74464120364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4459253.521978022,
            "unit": "ns",
            "range": "± 315394.86871225684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4285295.168539326,
            "unit": "ns",
            "range": "± 625696.0899214976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22549.41489361702,
            "unit": "ns",
            "range": "± 3899.3136407607813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110720.55154639175,
            "unit": "ns",
            "range": "± 17241.49845658913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112926.24468085106,
            "unit": "ns",
            "range": "± 16499.380134290852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118527.20879120879,
            "unit": "ns",
            "range": "± 24605.924137860467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8230.614583333334,
            "unit": "ns",
            "range": "± 1431.3728733359203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25605.902173913044,
            "unit": "ns",
            "range": "± 5246.84352428647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1760933.8404255318,
            "unit": "ns",
            "range": "± 277084.1337765773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3274907.322222222,
            "unit": "ns",
            "range": "± 288228.83247177245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2826662.8651685393,
            "unit": "ns",
            "range": "± 402091.1362973458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9290594.536842106,
            "unit": "ns",
            "range": "± 2590677.688554355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3691750.5425531915,
            "unit": "ns",
            "range": "± 346258.9184173096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3867181.345360825,
            "unit": "ns",
            "range": "± 378115.655144206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4782298.555555556,
            "unit": "ns",
            "range": "± 399469.58678930334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4754992.283505155,
            "unit": "ns",
            "range": "± 451933.46467297286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8192991.316326531,
            "unit": "ns",
            "range": "± 714913.2231361037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9156045.09862231,
            "unit": "ns",
            "range": "± 1622038.7873821356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2443276.788715278,
            "unit": "ns",
            "range": "± 380669.048886637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427451.0329276843,
            "unit": "ns",
            "range": "± 73463.44736284653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145156.8458203124,
            "unit": "ns",
            "range": "± 297792.8403389306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 953749.0551757812,
            "unit": "ns",
            "range": "± 52793.48054599298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880194.3718098958,
            "unit": "ns",
            "range": "± 26163.793290949867"
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
          "id": "1d9dbed3b80dad6b67eff63d421c81c87405bd8a",
          "message": "Fix DeleteCommitEvidence",
          "timestamp": "2023-06-12T19:25:05+09:00",
          "tree_id": "ccf4521a81577cd91f734d5e0790dcb9735eaea8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1d9dbed3b80dad6b67eff63d421c81c87405bd8a"
        },
        "date": 1686566714971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9012804.515463918,
            "unit": "ns",
            "range": "± 683583.1917476607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22777783.030612245,
            "unit": "ns",
            "range": "± 1377373.1770161553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55106765.833333336,
            "unit": "ns",
            "range": "± 2230989.6161354287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120013721.51515152,
            "unit": "ns",
            "range": "± 11368050.14882788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222838405.97311828,
            "unit": "ns",
            "range": "± 14504740.233965978"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83301.17777777778,
            "unit": "ns",
            "range": "± 12619.034100554656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351427.8775510204,
            "unit": "ns",
            "range": "± 34368.30704260166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339727.5425531915,
            "unit": "ns",
            "range": "± 35736.650480160846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321401.0520833333,
            "unit": "ns",
            "range": "± 46214.44992682877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4627409.193548387,
            "unit": "ns",
            "range": "± 375844.31263516715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871896.6756756757,
            "unit": "ns",
            "range": "± 129725.84207475011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19980.615384615383,
            "unit": "ns",
            "range": "± 2894.1472540638165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133997.19565217392,
            "unit": "ns",
            "range": "± 25460.809397819008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115612.65625,
            "unit": "ns",
            "range": "± 14018.660845517476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136101.91578947369,
            "unit": "ns",
            "range": "± 22953.678466926514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7522.326530612245,
            "unit": "ns",
            "range": "± 1325.077899095111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17731.725274725275,
            "unit": "ns",
            "range": "± 2383.2142630673015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796430.3241758242,
            "unit": "ns",
            "range": "± 286806.8233509793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3482676.9111111113,
            "unit": "ns",
            "range": "± 631628.9439914959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3170705.3076923075,
            "unit": "ns",
            "range": "± 796242.7619755128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7281019.733333333,
            "unit": "ns",
            "range": "± 698896.9497859242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412371.9719101125,
            "unit": "ns",
            "range": "± 256000.57619222664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734449.258241758,
            "unit": "ns",
            "range": "± 465884.4585510527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4711814.902061855,
            "unit": "ns",
            "range": "± 324449.5242808919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4858650.798969072,
            "unit": "ns",
            "range": "± 385345.611229716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8345515.896907217,
            "unit": "ns",
            "range": "± 628487.2059082708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6772343.424479167,
            "unit": "ns",
            "range": "± 125900.9712045934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037300.7046875,
            "unit": "ns",
            "range": "± 32973.35924154884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313583.6150948661,
            "unit": "ns",
            "range": "± 18431.142887248334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636470.345572917,
            "unit": "ns",
            "range": "± 48049.41516303105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887268.2315204327,
            "unit": "ns",
            "range": "± 13016.959014079843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792242.4766376202,
            "unit": "ns",
            "range": "± 27245.899900033313"
          }
        ]
      }
    ]
  }
}