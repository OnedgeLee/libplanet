window.BENCHMARK_DATA = {
  "lastUpdate": 1700820636886,
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
          "id": "324184e4815b9ea2ba056265b536e077d0c08411",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-01T11:54:43+09:00",
          "tree_id": "3b0cb04acaab6ec004dd75eb29facea232ce0a7d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324184e4815b9ea2ba056265b536e077d0c08411"
        },
        "date": 1698808189978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50966.663043478264,
            "unit": "ns",
            "range": "± 2701.337419176949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5325359.502232143,
            "unit": "ns",
            "range": "± 10180.743029072979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1654269.0579427083,
            "unit": "ns",
            "range": "± 5482.450684210416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160299.284877232,
            "unit": "ns",
            "range": "± 2877.5537732514267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675494.7158854166,
            "unit": "ns",
            "range": "± 2592.4603168719495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845499.0553152902,
            "unit": "ns",
            "range": "± 1348.6585062046277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746585.0516075721,
            "unit": "ns",
            "range": "± 502.6362218384149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8751754.666666666,
            "unit": "ns",
            "range": "± 135093.89736489984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23218513.53846154,
            "unit": "ns",
            "range": "± 178993.0549377151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58440572.666666664,
            "unit": "ns",
            "range": "± 312710.74104643345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118351703.73333333,
            "unit": "ns",
            "range": "± 436248.4005333702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240142167,
            "unit": "ns",
            "range": "± 937465.9074756494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3727149.066666667,
            "unit": "ns",
            "range": "± 63629.04188729576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3890553.3333333335,
            "unit": "ns",
            "range": "± 147661.10166957555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4659610.580645162,
            "unit": "ns",
            "range": "± 140804.23031826236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4564770.870967742,
            "unit": "ns",
            "range": "± 131081.8823030709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11218969.590909092,
            "unit": "ns",
            "range": "± 365200.57021080056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283825.06976744183,
            "unit": "ns",
            "range": "± 8106.495048490875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276895.1,
            "unit": "ns",
            "range": "± 9703.700348386797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252970.19642857142,
            "unit": "ns",
            "range": "± 10907.574206477131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4544941.133333334,
            "unit": "ns",
            "range": "± 48039.54512670735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209468.733333333,
            "unit": "ns",
            "range": "± 37740.90969731589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23425.625,
            "unit": "ns",
            "range": "± 2126.4886364739014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95646.06451612903,
            "unit": "ns",
            "range": "± 6905.467178425668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85036.38541666667,
            "unit": "ns",
            "range": "± 5080.128368394252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98520.51515151515,
            "unit": "ns",
            "range": "± 11288.904926342173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6750.7052631578945,
            "unit": "ns",
            "range": "± 1079.397831276075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22084.673684210527,
            "unit": "ns",
            "range": "± 1935.8381792430393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1458517.5157894737,
            "unit": "ns",
            "range": "± 98514.33715701714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794097.4716981133,
            "unit": "ns",
            "range": "± 116564.12098128055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274536.236842105,
            "unit": "ns",
            "range": "± 98816.60617755412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10005207.912087912,
            "unit": "ns",
            "range": "± 630578.5823194027"
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
          "id": "922355cec7ebbfdc2baeda0504f6087f2bd7200c",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T18:55:11+09:00",
          "tree_id": "dd2512e131b5f33a2a42b9eb3dd262f9502b4732",
          "url": "https://github.com/OnedgeLee/libplanet/commit/922355cec7ebbfdc2baeda0504f6087f2bd7200c"
        },
        "date": 1700820382930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200308.72857142857,
            "unit": "ns",
            "range": "± 8906.748805685362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186248.33333333334,
            "unit": "ns",
            "range": "± 7733.733332738126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160106.08333333334,
            "unit": "ns",
            "range": "± 2024.4217337453692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059381.033333333,
            "unit": "ns",
            "range": "± 29235.254009174478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857757.769230769,
            "unit": "ns",
            "range": "± 35647.95377754018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16411.114583333332,
            "unit": "ns",
            "range": "± 2571.771782744715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59344.10344827586,
            "unit": "ns",
            "range": "± 5050.335805170581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67225.15,
            "unit": "ns",
            "range": "± 21262.008117755362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59571.31958762887,
            "unit": "ns",
            "range": "± 12078.613235751991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2910.805263157895,
            "unit": "ns",
            "range": "± 521.2024369581875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14897.15,
            "unit": "ns",
            "range": "± 3242.600594220072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3656291.072591146,
            "unit": "ns",
            "range": "± 12925.859506906958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1250807.3916766827,
            "unit": "ns",
            "range": "± 4849.042348059585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769864.853922526,
            "unit": "ns",
            "range": "± 2941.8386745254165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950817.234654018,
            "unit": "ns",
            "range": "± 2788.615204630141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623575.6934814453,
            "unit": "ns",
            "range": "± 12024.473577165683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577312.0940755209,
            "unit": "ns",
            "range": "± 2257.4786524469014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37121.02747252747,
            "unit": "ns",
            "range": "± 2837.1435531011716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2386105.0384615385,
            "unit": "ns",
            "range": "± 29724.829118139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2558286.6052631577,
            "unit": "ns",
            "range": "± 56569.62845604495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3125585.3846153845,
            "unit": "ns",
            "range": "± 38113.91863335157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2994102.9523809524,
            "unit": "ns",
            "range": "± 71031.0873346848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6474538.083333333,
            "unit": "ns",
            "range": "± 164366.80545761232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5590058.866666666,
            "unit": "ns",
            "range": "± 96909.30095555967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14146946.5,
            "unit": "ns",
            "range": "± 58080.60721200653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36003478.461538464,
            "unit": "ns",
            "range": "± 181083.0083721346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73915086.11538461,
            "unit": "ns",
            "range": "± 180839.7034565596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151774729.92307693,
            "unit": "ns",
            "range": "± 1239972.5079187213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941366.2032967033,
            "unit": "ns",
            "range": "± 70068.08885069413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847007.6454545455,
            "unit": "ns",
            "range": "± 78277.31440311194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1372308.7857142857,
            "unit": "ns",
            "range": "± 100375.55115502609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5651349.231343283,
            "unit": "ns",
            "range": "± 265231.18662499415"
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
          "id": "c3042714276fdd755ffc25f04c7052eef26b1369",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T18:59:06+09:00",
          "tree_id": "8976b180dc80a8265dac232ecc28a7e17e593bc1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c3042714276fdd755ffc25f04c7052eef26b1369"
        },
        "date": 1700820625911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199887.5989010989,
            "unit": "ns",
            "range": "± 11266.680247580518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190897.62666666668,
            "unit": "ns",
            "range": "± 9361.162963056508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172048.76,
            "unit": "ns",
            "range": "± 4515.385580434965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3056730.9615384615,
            "unit": "ns",
            "range": "± 75592.02699516968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819234.3333333335,
            "unit": "ns",
            "range": "± 57485.02619148133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14131.418367346938,
            "unit": "ns",
            "range": "± 2538.246186761169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64033.19387755102,
            "unit": "ns",
            "range": "± 7744.727492371578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52797.27472527473,
            "unit": "ns",
            "range": "± 4287.0357670693475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59941.770833333336,
            "unit": "ns",
            "range": "± 14612.414113369974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3471.1717171717173,
            "unit": "ns",
            "range": "± 1445.930334226659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13247.515463917525,
            "unit": "ns",
            "range": "± 3057.8486143358828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729745.273137019,
            "unit": "ns",
            "range": "± 8542.12690548441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1185388.30859375,
            "unit": "ns",
            "range": "± 7853.464702286481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772953.2598353794,
            "unit": "ns",
            "range": "± 2455.734918434802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941080.900390625,
            "unit": "ns",
            "range": "± 23894.043058666186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613775.3477260044,
            "unit": "ns",
            "range": "± 1186.3089287639132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583447.0672325721,
            "unit": "ns",
            "range": "± 2806.998046191902"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40840.5206185567,
            "unit": "ns",
            "range": "± 5579.596184573197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2330426.3720930233,
            "unit": "ns",
            "range": "± 85464.93225322726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516133.0945945946,
            "unit": "ns",
            "range": "± 71992.71914130525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3103916.785714286,
            "unit": "ns",
            "range": "± 50084.21559453417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2880969.2763157897,
            "unit": "ns",
            "range": "± 129815.72334121408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6539962.878787879,
            "unit": "ns",
            "range": "± 202944.87368675967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5633136.269230769,
            "unit": "ns",
            "range": "± 35475.01725899004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14474146.285714285,
            "unit": "ns",
            "range": "± 77103.89512602068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36666714.307692304,
            "unit": "ns",
            "range": "± 253579.59038415816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74675945.5,
            "unit": "ns",
            "range": "± 516017.644621217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147601478.85714287,
            "unit": "ns",
            "range": "± 1009411.5432297753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972132.7424242424,
            "unit": "ns",
            "range": "± 82339.05094815383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839943.3272727274,
            "unit": "ns",
            "range": "± 77335.50146028106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393369.4795918367,
            "unit": "ns",
            "range": "± 122465.53610103963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5747600.260416667,
            "unit": "ns",
            "range": "± 361671.13566714583"
          }
        ]
      }
    ]
  }
}