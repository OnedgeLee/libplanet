window.BENCHMARK_DATA = {
  "lastUpdate": 1703031306126,
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
          "id": "4774b2fb92086c01e8c9e8213a65a4d2f01f02c2",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:16:25+09:00",
          "tree_id": "50f73e555180028a42728c81e96951818d4421f5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4774b2fb92086c01e8c9e8213a65a4d2f01f02c2"
        },
        "date": 1703028495937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3841364.816706731,
            "unit": "ns",
            "range": "± 46811.691736861896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221141.6346153845,
            "unit": "ns",
            "range": "± 2548.2573857502402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778766.2287946428,
            "unit": "ns",
            "range": "± 2156.8207663700964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921211.7306082589,
            "unit": "ns",
            "range": "± 2648.4274052405117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624683.5268554688,
            "unit": "ns",
            "range": "± 5371.721820055734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573826.0270647322,
            "unit": "ns",
            "range": "± 3113.730714107666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2382254.608108108,
            "unit": "ns",
            "range": "± 80592.42716002258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2571470.970588235,
            "unit": "ns",
            "range": "± 81743.61103956068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3206030.4,
            "unit": "ns",
            "range": "± 58346.352835949765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3160119.8125,
            "unit": "ns",
            "range": "± 124577.8206748347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13944668.829787234,
            "unit": "ns",
            "range": "± 1160740.4923546214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41195.44736842105,
            "unit": "ns",
            "range": "± 5587.731158278863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198737.83333333334,
            "unit": "ns",
            "range": "± 7780.55031460585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192241.22916666666,
            "unit": "ns",
            "range": "± 7570.0761800590335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174259,
            "unit": "ns",
            "range": "± 5958.791695719274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3227266.533333333,
            "unit": "ns",
            "range": "± 40255.712423148565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2750739.3076923075,
            "unit": "ns",
            "range": "± 43531.80376151176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14875.622448979591,
            "unit": "ns",
            "range": "± 2315.2062076240086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67810.55102040817,
            "unit": "ns",
            "range": "± 9867.405628511291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52617.34482758621,
            "unit": "ns",
            "range": "± 1526.632645396445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63861.57142857143,
            "unit": "ns",
            "range": "± 11497.755526376874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3141.967032967033,
            "unit": "ns",
            "range": "± 391.51430938939444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14189.15306122449,
            "unit": "ns",
            "range": "± 2320.219289991859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5503750.642857143,
            "unit": "ns",
            "range": "± 24643.336739002454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14279826.066666666,
            "unit": "ns",
            "range": "± 62876.45394566199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36827355.35714286,
            "unit": "ns",
            "range": "± 220472.40851010644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75076977.15384616,
            "unit": "ns",
            "range": "± 507932.0209299413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147966191.53846154,
            "unit": "ns",
            "range": "± 849133.7937944581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986155.3510638297,
            "unit": "ns",
            "range": "± 103509.931002821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1878790.4528301887,
            "unit": "ns",
            "range": "± 77950.73272058202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1632700.9569892474,
            "unit": "ns",
            "range": "± 130072.97232113461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12897892.298969071,
            "unit": "ns",
            "range": "± 1031304.8414874634"
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
          "id": "810902c09a8787a1e4af817115fe28417c68d9f9",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:23:03+09:00",
          "tree_id": "195d92469a65ed7f608ebe30ce565dfa859ef16c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/810902c09a8787a1e4af817115fe28417c68d9f9"
        },
        "date": 1703028864520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3771579.9286458334,
            "unit": "ns",
            "range": "± 60663.51635848196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208929.388671875,
            "unit": "ns",
            "range": "± 6104.135374021014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775137.0393229167,
            "unit": "ns",
            "range": "± 3153.4024695094554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938398.3963448661,
            "unit": "ns",
            "range": "± 13561.988918083149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623613.4268391927,
            "unit": "ns",
            "range": "± 1087.9982555571492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565605.0147786458,
            "unit": "ns",
            "range": "± 2415.310303064196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444950.1363636362,
            "unit": "ns",
            "range": "± 103882.2147023152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496516.842857143,
            "unit": "ns",
            "range": "± 121000.27225920212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3277590.037037037,
            "unit": "ns",
            "range": "± 89597.86556973564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3239992.8055555555,
            "unit": "ns",
            "range": "± 105678.13264485689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14145236.076086957,
            "unit": "ns",
            "range": "± 951271.5875794216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40537.52577319588,
            "unit": "ns",
            "range": "± 6523.851358177901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246225.2372881356,
            "unit": "ns",
            "range": "± 10584.666458900432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207398.82142857142,
            "unit": "ns",
            "range": "± 8858.193930649013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165297.26315789475,
            "unit": "ns",
            "range": "± 3675.1058313122126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3217081.9285714286,
            "unit": "ns",
            "range": "± 49600.54318322964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814796.076923077,
            "unit": "ns",
            "range": "± 25844.73441683863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16800.236559139787,
            "unit": "ns",
            "range": "± 2761.0606515780087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96650.90243902439,
            "unit": "ns",
            "range": "± 5559.831820020059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97518.06666666667,
            "unit": "ns",
            "range": "± 1804.2193193680619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101092.6914893617,
            "unit": "ns",
            "range": "± 10979.028985431158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7845.635416666667,
            "unit": "ns",
            "range": "± 795.8431625414864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24322.3,
            "unit": "ns",
            "range": "± 3779.3218126585043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5534135.428571428,
            "unit": "ns",
            "range": "± 26302.22385074132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14581922.76923077,
            "unit": "ns",
            "range": "± 46019.9103543851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36689652.76923077,
            "unit": "ns",
            "range": "± 145938.53389078676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75916915.11538461,
            "unit": "ns",
            "range": "± 233339.8091062826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148508839.86666667,
            "unit": "ns",
            "range": "± 1084245.4174334377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983986.84375,
            "unit": "ns",
            "range": "± 95421.75226692873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1885689.1692307692,
            "unit": "ns",
            "range": "± 88129.38819669656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598112.131868132,
            "unit": "ns",
            "range": "± 106575.42450794688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12947068.541666666,
            "unit": "ns",
            "range": "± 1125375.5949158245"
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
          "id": "0a6a97d7e49fdc357cd6210a8b52536bcbb68f9c",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:03:12+09:00",
          "tree_id": "f321b807ef7505eab26a2d201a3578da9554b14b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0a6a97d7e49fdc357cd6210a8b52536bcbb68f9c"
        },
        "date": 1703031295513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3747577.2158854166,
            "unit": "ns",
            "range": "± 45733.85477002971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224594.2833333334,
            "unit": "ns",
            "range": "± 3412.9682085366735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776401.7545823317,
            "unit": "ns",
            "range": "± 3535.195818877126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2001279.350360577,
            "unit": "ns",
            "range": "± 15458.949083601863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615309.0814732143,
            "unit": "ns",
            "range": "± 1119.3925838296198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594158.1508789062,
            "unit": "ns",
            "range": "± 567.4584295963084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415946.660714286,
            "unit": "ns",
            "range": "± 103059.57518212053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2521048.238095238,
            "unit": "ns",
            "range": "± 57154.02451788042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191309.1666666665,
            "unit": "ns",
            "range": "± 68234.17333259305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3181393.8720930233,
            "unit": "ns",
            "range": "± 172305.07881892283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14099606.55670103,
            "unit": "ns",
            "range": "± 907980.4881684427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40474.583333333336,
            "unit": "ns",
            "range": "± 6013.33848718027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200359.79166666666,
            "unit": "ns",
            "range": "± 9247.680045481222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200090.85454545455,
            "unit": "ns",
            "range": "± 8139.43399710729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171658.35294117648,
            "unit": "ns",
            "range": "± 3322.537131868816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3260934.4615384615,
            "unit": "ns",
            "range": "± 39704.84925592713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2821705.1428571427,
            "unit": "ns",
            "range": "± 40017.570611799136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16677.18556701031,
            "unit": "ns",
            "range": "± 3318.846427757621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70676.94623655915,
            "unit": "ns",
            "range": "± 10462.853257623197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60249.09574468085,
            "unit": "ns",
            "range": "± 10069.395731054761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74730.53608247422,
            "unit": "ns",
            "range": "± 22651.894291216693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7028.438775510204,
            "unit": "ns",
            "range": "± 1403.2507330923643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21522.102040816328,
            "unit": "ns",
            "range": "± 5084.128557630232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5799136.785714285,
            "unit": "ns",
            "range": "± 61731.601366384806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14811814.166666666,
            "unit": "ns",
            "range": "± 158215.1237098521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36440697.083333336,
            "unit": "ns",
            "range": "± 179638.68224120344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75150322.38461539,
            "unit": "ns",
            "range": "± 855289.3229159883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154888558.57142857,
            "unit": "ns",
            "range": "± 1354066.4734622075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993537.3229166666,
            "unit": "ns",
            "range": "± 86621.68906038241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2030161.025974026,
            "unit": "ns",
            "range": "± 103791.5922948703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737040.1444444444,
            "unit": "ns",
            "range": "± 159994.04522757174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13017344.82795699,
            "unit": "ns",
            "range": "± 1197858.3042343115"
          }
        ]
      }
    ]
  }
}