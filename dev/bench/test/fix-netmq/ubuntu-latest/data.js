window.BENCHMARK_DATA = {
  "lastUpdate": 1703042014283,
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
          "id": "d2be44f0b6d4002e9614ff63efa0f5a88983720a",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:09:37+09:00",
          "tree_id": "43b1b788d59bd89a60a829c1f1f8d8b336564d17",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d2be44f0b6d4002e9614ff63efa0f5a88983720a"
        },
        "date": 1703031663879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746359.463641827,
            "unit": "ns",
            "range": "± 6717.441754591891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210794.0123697917,
            "unit": "ns",
            "range": "± 6216.289090541729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772702.7384314904,
            "unit": "ns",
            "range": "± 2079.724270918442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948472.575390625,
            "unit": "ns",
            "range": "± 24882.947410355056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621852.0542689732,
            "unit": "ns",
            "range": "± 1288.3713436470252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586649.5336914062,
            "unit": "ns",
            "range": "± 1703.2339918057778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2343369.714285714,
            "unit": "ns",
            "range": "± 35744.08856220644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2520492.8372093025,
            "unit": "ns",
            "range": "± 91017.89352673624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3187402.523255814,
            "unit": "ns",
            "range": "± 116290.27882200407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3138126.015625,
            "unit": "ns",
            "range": "± 136410.9139435712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14049365.7,
            "unit": "ns",
            "range": "± 903416.1568422432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41765.036082474224,
            "unit": "ns",
            "range": "± 5397.308173721599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199163.57142857142,
            "unit": "ns",
            "range": "± 8569.400313922773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186518.02380952382,
            "unit": "ns",
            "range": "± 6810.7793087210075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169956.55555555556,
            "unit": "ns",
            "range": "± 3444.161632338588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141054.5714285714,
            "unit": "ns",
            "range": "± 45640.85270804636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845213.785714286,
            "unit": "ns",
            "range": "± 49037.35076202875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14272.641414141413,
            "unit": "ns",
            "range": "± 2233.6230521244297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63811.62105263158,
            "unit": "ns",
            "range": "± 5686.963053314557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62032.739130434784,
            "unit": "ns",
            "range": "± 1574.4908908016557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63925.28571428572,
            "unit": "ns",
            "range": "± 12809.86839868984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3257.4021739130435,
            "unit": "ns",
            "range": "± 435.9854584676215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14647.645833333334,
            "unit": "ns",
            "range": "± 2664.830327290203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5599333.214285715,
            "unit": "ns",
            "range": "± 22458.759963639925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14147221.23076923,
            "unit": "ns",
            "range": "± 156186.8452357378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36772883.571428575,
            "unit": "ns",
            "range": "± 92349.66849027525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74648631.71428572,
            "unit": "ns",
            "range": "± 345462.2334441491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148629280.46153846,
            "unit": "ns",
            "range": "± 560378.3842850614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987910.0638297872,
            "unit": "ns",
            "range": "± 87512.32942686597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851858.9081632653,
            "unit": "ns",
            "range": "± 70299.87199013901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1614442.7,
            "unit": "ns",
            "range": "± 146297.43393879675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13177387.360824741,
            "unit": "ns",
            "range": "± 1134855.6988498233"
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
          "id": "79e3da1f81939b2cbff2072ceaf3e826c9605ae1",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:46:12+09:00",
          "tree_id": "818a89bc250a78dac60ec9541135a29007fc1f48",
          "url": "https://github.com/OnedgeLee/libplanet/commit/79e3da1f81939b2cbff2072ceaf3e826c9605ae1"
        },
        "date": 1703033853814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744998.2798978365,
            "unit": "ns",
            "range": "± 6885.785920890133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198662.1169921875,
            "unit": "ns",
            "range": "± 6011.392291228388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782029.3920572917,
            "unit": "ns",
            "range": "± 13391.075093915159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951375.2173177083,
            "unit": "ns",
            "range": "± 20351.98109931643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621019.6097935268,
            "unit": "ns",
            "range": "± 1311.3100204619554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579376.7389322916,
            "unit": "ns",
            "range": "± 3144.718075154431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2348356.203703704,
            "unit": "ns",
            "range": "± 41866.165335612386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2453992.970588235,
            "unit": "ns",
            "range": "± 49506.80062206042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3026108.933333333,
            "unit": "ns",
            "range": "± 55555.195437210605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3130706.229508197,
            "unit": "ns",
            "range": "± 139541.62032937145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13786068.462365592,
            "unit": "ns",
            "range": "± 950734.910009569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38702.989795918365,
            "unit": "ns",
            "range": "± 3886.632075672635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202170.6607142857,
            "unit": "ns",
            "range": "± 8646.003519812515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190460.20408163266,
            "unit": "ns",
            "range": "± 7514.288597342378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170110.86666666667,
            "unit": "ns",
            "range": "± 2017.8697348111118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166612.0714285714,
            "unit": "ns",
            "range": "± 54538.15982582116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808513.6,
            "unit": "ns",
            "range": "± 37165.591219375405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12394.207317073171,
            "unit": "ns",
            "range": "± 1280.90596543676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61258.043956043955,
            "unit": "ns",
            "range": "± 3914.0933473002056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62096.254237288136,
            "unit": "ns",
            "range": "± 2706.1441432237402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72225.34343434343,
            "unit": "ns",
            "range": "± 19906.507767388386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3244.5108695652175,
            "unit": "ns",
            "range": "± 581.196577260238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11615.709302325582,
            "unit": "ns",
            "range": "± 633.6404596833625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5458130.038461538,
            "unit": "ns",
            "range": "± 20514.90250856429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13938585.73076923,
            "unit": "ns",
            "range": "± 52474.0402852589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36489956.76923077,
            "unit": "ns",
            "range": "± 225566.83988460194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74315986.16666667,
            "unit": "ns",
            "range": "± 825942.440882957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146543240.93333334,
            "unit": "ns",
            "range": "± 1152681.130803154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994597.58,
            "unit": "ns",
            "range": "± 102864.4114845569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943610.1323529412,
            "unit": "ns",
            "range": "± 92024.06421082337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1628639.8617021276,
            "unit": "ns",
            "range": "± 179255.0931349194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12953873.967032967,
            "unit": "ns",
            "range": "± 1150140.559809041"
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
          "id": "a9f38c5e8f9827f6c3367596653dc38ee471a083",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T10:10:26+09:00",
          "tree_id": "e1e2b0830d5e102edfe9c47ff470680fe5c0bdcb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9f38c5e8f9827f6c3367596653dc38ee471a083"
        },
        "date": 1703035315394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698882.007512019,
            "unit": "ns",
            "range": "± 6638.2682887864385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202687.2774939905,
            "unit": "ns",
            "range": "± 6135.141217051639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773078.055078125,
            "unit": "ns",
            "range": "± 11672.342002037887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953428.6639322916,
            "unit": "ns",
            "range": "± 3344.851493441177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615650.068734976,
            "unit": "ns",
            "range": "± 7165.11811366735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566766.3125697544,
            "unit": "ns",
            "range": "± 2535.2222683875707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2448087.2647058824,
            "unit": "ns",
            "range": "± 78816.23795934547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529488.466666667,
            "unit": "ns",
            "range": "± 70738.33768750828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3195620.32,
            "unit": "ns",
            "range": "± 84777.40120049682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3177321.152173913,
            "unit": "ns",
            "range": "± 178595.47120908237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14031070.090361446,
            "unit": "ns",
            "range": "± 744305.0942813678"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41226.64948453608,
            "unit": "ns",
            "range": "± 6016.373329716647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196854.14,
            "unit": "ns",
            "range": "± 7110.099301123489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197069.61333333334,
            "unit": "ns",
            "range": "± 9944.868827547054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175933,
            "unit": "ns",
            "range": "± 2397.8834764572416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3234127,
            "unit": "ns",
            "range": "± 24332.730045240412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844552.269230769,
            "unit": "ns",
            "range": "± 27110.982107975622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12921.893617021276,
            "unit": "ns",
            "range": "± 1211.7889753661877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66387.90816326531,
            "unit": "ns",
            "range": "± 6130.789259976398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62019.557692307695,
            "unit": "ns",
            "range": "± 2355.2587586368822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65166.60824742268,
            "unit": "ns",
            "range": "± 13467.442875131539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3320.063829787234,
            "unit": "ns",
            "range": "± 722.0115949164369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15059.565656565657,
            "unit": "ns",
            "range": "± 3127.515321294357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5587901.766666667,
            "unit": "ns",
            "range": "± 38006.21620108755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14500871.2,
            "unit": "ns",
            "range": "± 195336.89739933927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36350519.78571428,
            "unit": "ns",
            "range": "± 241757.2521117885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75710944.1,
            "unit": "ns",
            "range": "± 957114.3955324255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148637808.2857143,
            "unit": "ns",
            "range": "± 743878.8016350956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974571.89,
            "unit": "ns",
            "range": "± 75464.81406507715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916830.4268292682,
            "unit": "ns",
            "range": "± 100765.28262719768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601189.6896551724,
            "unit": "ns",
            "range": "± 147471.48000981845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12852572.673684211,
            "unit": "ns",
            "range": "± 1056039.49843551"
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
          "id": "29841ffe3333f99c0d030304d681fb4de4a0fcc3",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T12:01:47+09:00",
          "tree_id": "2064cf1d1f036048323a5446513a98801372d083",
          "url": "https://github.com/OnedgeLee/libplanet/commit/29841ffe3333f99c0d030304d681fb4de4a0fcc3"
        },
        "date": 1703042003360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3832176.5690104165,
            "unit": "ns",
            "range": "± 10890.263636822281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192997.6846454327,
            "unit": "ns",
            "range": "± 6668.013753197575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788281.5638020834,
            "unit": "ns",
            "range": "± 5617.95768026507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937933.6947916667,
            "unit": "ns",
            "range": "± 24736.143214539476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619577.1036658654,
            "unit": "ns",
            "range": "± 1116.3847907592287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580447.4604166667,
            "unit": "ns",
            "range": "± 2137.648366895616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383799.7333333334,
            "unit": "ns",
            "range": "± 69165.23564408856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2456494.590909091,
            "unit": "ns",
            "range": "± 115101.4282384123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3099569.785714286,
            "unit": "ns",
            "range": "± 50235.14309444913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3330772.772727273,
            "unit": "ns",
            "range": "± 140458.18105195666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14099018.483516483,
            "unit": "ns",
            "range": "± 984343.0852970292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40817.5,
            "unit": "ns",
            "range": "± 5645.129673167989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199385.18644067796,
            "unit": "ns",
            "range": "± 8214.849746720403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190479.61764705883,
            "unit": "ns",
            "range": "± 9001.57168205345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166270.22727272726,
            "unit": "ns",
            "range": "± 4070.365502855957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162719.1333333333,
            "unit": "ns",
            "range": "± 57874.99110998594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2750524.7333333334,
            "unit": "ns",
            "range": "± 47380.00063991235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12996.713483146068,
            "unit": "ns",
            "range": "± 1489.319738488852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65733.35353535354,
            "unit": "ns",
            "range": "± 8249.269595760177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60219.318681318684,
            "unit": "ns",
            "range": "± 6348.475916626011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57961.701030927834,
            "unit": "ns",
            "range": "± 9964.840046346442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2872.875,
            "unit": "ns",
            "range": "± 272.9235846275968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15009.586021505376,
            "unit": "ns",
            "range": "± 1356.5273491683122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5530625.153846154,
            "unit": "ns",
            "range": "± 23624.294951899814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14642154.57142857,
            "unit": "ns",
            "range": "± 104988.36726822812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36093081.583333336,
            "unit": "ns",
            "range": "± 168965.2710252281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75116045.53846154,
            "unit": "ns",
            "range": "± 293651.24192671577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150750212.07142857,
            "unit": "ns",
            "range": "± 1207760.1500650644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000111.0425531915,
            "unit": "ns",
            "range": "± 90634.0658741507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866568.9166666667,
            "unit": "ns",
            "range": "± 68191.10926476314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610409.1956521738,
            "unit": "ns",
            "range": "± 109594.01083832834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12918665.81443299,
            "unit": "ns",
            "range": "± 1030321.9122824887"
          }
        ]
      }
    ]
  }
}