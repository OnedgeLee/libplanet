window.BENCHMARK_DATA = {
  "lastUpdate": 1703578059409,
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
          "id": "dcf9af1d7b33ed3fae96166a9477049cf99232c0",
          "message": "test: Move GossipConsensusMessageCommunicatorTest port number to avoid collision",
          "timestamp": "2023-12-20T12:52:35+09:00",
          "tree_id": "f017054cfa0654b669128d937a55937cce1d598c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dcf9af1d7b33ed3fae96166a9477049cf99232c0"
        },
        "date": 1703045018970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3676569.3013020833,
            "unit": "ns",
            "range": "± 45803.99948465082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209582.8212890625,
            "unit": "ns",
            "range": "± 1499.97437336491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774491.1983235677,
            "unit": "ns",
            "range": "± 2464.3339632912002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935149.7596153845,
            "unit": "ns",
            "range": "± 2837.7844101457254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620117.5522085336,
            "unit": "ns",
            "range": "± 862.716409491058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580171.8888346354,
            "unit": "ns",
            "range": "± 905.3003920155478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2368750.153846154,
            "unit": "ns",
            "range": "± 39014.16455136552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489442.98,
            "unit": "ns",
            "range": "± 98705.40792960947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3125149.966666667,
            "unit": "ns",
            "range": "± 32324.61919976048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3285139.3333333335,
            "unit": "ns",
            "range": "± 68295.82659306066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14086036.258064516,
            "unit": "ns",
            "range": "± 958870.5641765519"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40075.541666666664,
            "unit": "ns",
            "range": "± 5565.634312772334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201013.171875,
            "unit": "ns",
            "range": "± 9087.152933141795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188136.36956521738,
            "unit": "ns",
            "range": "± 7175.856094056561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168167.85714285713,
            "unit": "ns",
            "range": "± 3964.855486467499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3252241.4285714286,
            "unit": "ns",
            "range": "± 31420.95243798141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799567.1333333333,
            "unit": "ns",
            "range": "± 35017.856601753236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15839.489583333334,
            "unit": "ns",
            "range": "± 2799.547519810982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63695.35051546392,
            "unit": "ns",
            "range": "± 7804.393822607819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52747.48648648649,
            "unit": "ns",
            "range": "± 1593.408290106142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61397.75257731959,
            "unit": "ns",
            "range": "± 12184.40478134424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3408.771739130435,
            "unit": "ns",
            "range": "± 474.8292718802252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12643.979797979799,
            "unit": "ns",
            "range": "± 1719.1041448417845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5656734.076923077,
            "unit": "ns",
            "range": "± 28519.681682017243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14221188.7,
            "unit": "ns",
            "range": "± 100652.03324835803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36111671.666666664,
            "unit": "ns",
            "range": "± 631947.3186636963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74256176.16666667,
            "unit": "ns",
            "range": "± 377024.3065040751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147203511.64285713,
            "unit": "ns",
            "range": "± 672739.2141318275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988558.5631578948,
            "unit": "ns",
            "range": "± 89625.80627914853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1869931.421875,
            "unit": "ns",
            "range": "± 85897.18013329041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1599655.0795454546,
            "unit": "ns",
            "range": "± 113951.6577435837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12727220.42631579,
            "unit": "ns",
            "range": "± 1029886.4567840355"
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
          "id": "2e49acb146b21689f7bfa37b00b7f9c4a3cda3e2",
          "message": "test: Remove Transport dispose",
          "timestamp": "2023-12-20T17:56:45+09:00",
          "tree_id": "ec14eccfd23772f125e712e59e96453e0e0bbe2d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2e49acb146b21689f7bfa37b00b7f9c4a3cda3e2"
        },
        "date": 1703063285333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3692300.4134615385,
            "unit": "ns",
            "range": "± 6174.191059925439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201963.55078125,
            "unit": "ns",
            "range": "± 6303.159981936852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759920.4397321428,
            "unit": "ns",
            "range": "± 1142.650544631125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964833.9010416667,
            "unit": "ns",
            "range": "± 6068.564430842162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604192.7785644531,
            "unit": "ns",
            "range": "± 3645.964315719449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566133.1584821428,
            "unit": "ns",
            "range": "± 1983.9866091683791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2392556.625,
            "unit": "ns",
            "range": "± 90389.27153261502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511699.033333333,
            "unit": "ns",
            "range": "± 84507.67536808821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3173929.111111111,
            "unit": "ns",
            "range": "± 65419.78416003641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3453016.1086956523,
            "unit": "ns",
            "range": "± 86855.48285919294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14231486.048387097,
            "unit": "ns",
            "range": "± 1110021.5155351476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39532.895833333336,
            "unit": "ns",
            "range": "± 4543.988599131284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199625.62686567163,
            "unit": "ns",
            "range": "± 9378.041326217164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200494.39743589744,
            "unit": "ns",
            "range": "± 10263.949800896242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168982.47872340426,
            "unit": "ns",
            "range": "± 6286.2908518020795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3172847.230769231,
            "unit": "ns",
            "range": "± 34816.30064867568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851615.476190476,
            "unit": "ns",
            "range": "± 51268.87945003191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13389.875,
            "unit": "ns",
            "range": "± 2070.886757685677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64830.21276595745,
            "unit": "ns",
            "range": "± 6563.591132634209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60716.555555555555,
            "unit": "ns",
            "range": "± 5811.1737314701195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70229.42857142857,
            "unit": "ns",
            "range": "± 21713.608161869746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6120.13,
            "unit": "ns",
            "range": "± 1950.6587318082572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14556.873737373737,
            "unit": "ns",
            "range": "± 3035.1978067733926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5665684.576923077,
            "unit": "ns",
            "range": "± 47217.62238024687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14334139.785714285,
            "unit": "ns",
            "range": "± 233402.5068414511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37257797.21428572,
            "unit": "ns",
            "range": "± 159052.71152740458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75850295.4,
            "unit": "ns",
            "range": "± 486214.5942795218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155103987.42857143,
            "unit": "ns",
            "range": "± 1593123.4436463637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012780.696969697,
            "unit": "ns",
            "range": "± 97232.52451615552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957616.3440860214,
            "unit": "ns",
            "range": "± 112430.52977317135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665882.7391304348,
            "unit": "ns",
            "range": "± 131795.93073304024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12925287.604166666,
            "unit": "ns",
            "range": "± 959711.5857281563"
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
          "id": "484bd89379abe12ffe00c621c9599ec1dcc46b21",
          "message": "test: Add missing collection",
          "timestamp": "2023-12-20T18:02:15+09:00",
          "tree_id": "394e27468b5a33b7680bf7949241538ab06bfb9b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/484bd89379abe12ffe00c621c9599ec1dcc46b21"
        },
        "date": 1703063628981,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3692135.6334134615,
            "unit": "ns",
            "range": "± 15432.890196866532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202360.7889229911,
            "unit": "ns",
            "range": "± 6862.145566602682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780060.9774639423,
            "unit": "ns",
            "range": "± 4216.562917970371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968089.5260416667,
            "unit": "ns",
            "range": "± 22996.27060409189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629143.4585336539,
            "unit": "ns",
            "range": "± 1118.7368223374365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582249.3119140625,
            "unit": "ns",
            "range": "± 2740.274151765466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2375412.3095238097,
            "unit": "ns",
            "range": "± 74015.53776873165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492674.7352941176,
            "unit": "ns",
            "range": "± 54044.886463074334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3132066.1333333333,
            "unit": "ns",
            "range": "± 41175.490148642464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173263.282352941,
            "unit": "ns",
            "range": "± 164113.8777480886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13905845.75,
            "unit": "ns",
            "range": "± 972849.8343724355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40612.67525773196,
            "unit": "ns",
            "range": "± 5272.000667856696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201435.16129032258,
            "unit": "ns",
            "range": "± 6034.437245768514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187556.28431372548,
            "unit": "ns",
            "range": "± 6735.747894075982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175416.5,
            "unit": "ns",
            "range": "± 3725.1765207988615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3151088.0714285714,
            "unit": "ns",
            "range": "± 40500.22485163467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2864980.1666666665,
            "unit": "ns",
            "range": "± 48996.31153999053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14395.474747474747,
            "unit": "ns",
            "range": "± 2317.330969744157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60482.41208791209,
            "unit": "ns",
            "range": "± 5570.60148687006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57852.05434782609,
            "unit": "ns",
            "range": "± 5599.134829879317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65098.42473118279,
            "unit": "ns",
            "range": "± 7813.311183955016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.438775510204,
            "unit": "ns",
            "range": "± 634.7470811572593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12074.260416666666,
            "unit": "ns",
            "range": "± 1307.9362469960606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5461104.214285715,
            "unit": "ns",
            "range": "± 26366.975855380944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14236908.266666668,
            "unit": "ns",
            "range": "± 68874.64425157456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37188256.84615385,
            "unit": "ns",
            "range": "± 356983.53992932837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75435720.26923077,
            "unit": "ns",
            "range": "± 589258.459869854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150902110.83333334,
            "unit": "ns",
            "range": "± 924259.7156773373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001518.1734693878,
            "unit": "ns",
            "range": "± 87565.1616456945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892035.9672131147,
            "unit": "ns",
            "range": "± 84955.81648322994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1617976.3406593406,
            "unit": "ns",
            "range": "± 124496.5983323971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12824871.234693877,
            "unit": "ns",
            "range": "± 1145045.0854559937"
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
          "id": "ada552213e6e7433859daf1ccdcc957d7b2eb1f1",
          "message": "tmp: ignore socket colliding tests",
          "timestamp": "2023-12-20T18:41:50+09:00",
          "tree_id": "de87cd28c42fefaef5cc162251cd3e3640256264",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ada552213e6e7433859daf1ccdcc957d7b2eb1f1"
        },
        "date": 1703066008844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738557.440204327,
            "unit": "ns",
            "range": "± 15969.576426892716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1224713.4911358173,
            "unit": "ns",
            "range": "± 3084.5104199346097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780413.7438964844,
            "unit": "ns",
            "range": "± 4962.107299588862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2015874.1559244792,
            "unit": "ns",
            "range": "± 9319.47075013925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626624.3166155134,
            "unit": "ns",
            "range": "± 2002.6613339738199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576495.3819010417,
            "unit": "ns",
            "range": "± 1501.794480306769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2572194.015873016,
            "unit": "ns",
            "range": "± 115933.129312867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2655742.8372093025,
            "unit": "ns",
            "range": "± 92752.6225330507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3296633.6470588236,
            "unit": "ns",
            "range": "± 101335.90857589408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3391339.1875,
            "unit": "ns",
            "range": "± 147126.81569387089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14439016.89361702,
            "unit": "ns",
            "range": "± 980637.622090506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48639.333333333336,
            "unit": "ns",
            "range": "± 8393.578234098366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235516.2087912088,
            "unit": "ns",
            "range": "± 17566.195526582986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233115.92857142858,
            "unit": "ns",
            "range": "± 8431.414886884262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178907.0744680851,
            "unit": "ns",
            "range": "± 14732.242716827372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3319217.8,
            "unit": "ns",
            "range": "± 53449.00147563898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2895046.35,
            "unit": "ns",
            "range": "± 65195.76349351721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20490.47894736842,
            "unit": "ns",
            "range": "± 3427.9697296850773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83358.398989899,
            "unit": "ns",
            "range": "± 11505.835188175084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101046.42307692308,
            "unit": "ns",
            "range": "± 1105.9830063144777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100518.39583333333,
            "unit": "ns",
            "range": "± 10399.203195669586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8032.1894736842105,
            "unit": "ns",
            "range": "± 782.1792020651899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19421.928571428572,
            "unit": "ns",
            "range": "± 4172.95679802036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6024470.071428572,
            "unit": "ns",
            "range": "± 84436.55468476297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15219897.5,
            "unit": "ns",
            "range": "± 95648.4425805821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36923144.384615384,
            "unit": "ns",
            "range": "± 187865.52096270816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76761241.3,
            "unit": "ns",
            "range": "± 972755.0424652653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150834872.19230768,
            "unit": "ns",
            "range": "± 417137.5354824802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1165246.3333333333,
            "unit": "ns",
            "range": "± 157502.3855523905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2121175.1126760566,
            "unit": "ns",
            "range": "± 99704.62404716804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746916.6279069767,
            "unit": "ns",
            "range": "± 94443.21563377728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13092432.59574468,
            "unit": "ns",
            "range": "± 1003690.9702709507"
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
          "id": "2c202144fbcc5fffef6be1361b4428546023eb86",
          "message": "tmp: ignore socket colliding tests",
          "timestamp": "2023-12-20T18:53:40+09:00",
          "tree_id": "a8d146ea77a8f06fa1f43d666b5bb164bff62a9a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2c202144fbcc5fffef6be1361b4428546023eb86"
        },
        "date": 1703066722043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3784466.900948661,
            "unit": "ns",
            "range": "± 46514.99870765191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215154.3928385417,
            "unit": "ns",
            "range": "± 2088.0313437997797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769013.4056919643,
            "unit": "ns",
            "range": "± 5067.876412963626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982311.4921875,
            "unit": "ns",
            "range": "± 19462.5160597037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622324.8111165365,
            "unit": "ns",
            "range": "± 607.1841681858923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575374.654296875,
            "unit": "ns",
            "range": "± 786.4344259862547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2428138.2291666665,
            "unit": "ns",
            "range": "± 94008.24681100206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580637.433333333,
            "unit": "ns",
            "range": "± 62151.250939741454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3200658.423076923,
            "unit": "ns",
            "range": "± 41651.36480849405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3384435.7924528304,
            "unit": "ns",
            "range": "± 140000.5190830155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14385585.226315789,
            "unit": "ns",
            "range": "± 1216646.0001684385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42797.2,
            "unit": "ns",
            "range": "± 6326.8284374239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235844,
            "unit": "ns",
            "range": "± 19327.153046297324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224957.05913978495,
            "unit": "ns",
            "range": "± 22404.97154964688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177595.61458333334,
            "unit": "ns",
            "range": "± 12592.791477558054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3260105.4,
            "unit": "ns",
            "range": "± 42771.10864457121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811349.2,
            "unit": "ns",
            "range": "± 38907.733765189376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16909.173469387755,
            "unit": "ns",
            "range": "± 4204.27089680504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86973.77272727272,
            "unit": "ns",
            "range": "± 15020.636944576594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100201.32857142857,
            "unit": "ns",
            "range": "± 3267.762280627077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92832.8469387755,
            "unit": "ns",
            "range": "± 22145.238989547295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6339.595959595959,
            "unit": "ns",
            "range": "± 1797.706480543359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24656.35,
            "unit": "ns",
            "range": "± 4177.7480120299515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5721491.55882353,
            "unit": "ns",
            "range": "± 110512.80015990828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16221152.833333334,
            "unit": "ns",
            "range": "± 80954.1062901841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37037432.6,
            "unit": "ns",
            "range": "± 398949.12829597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75962560.07142857,
            "unit": "ns",
            "range": "± 808569.1185773758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151602745.91666666,
            "unit": "ns",
            "range": "± 837960.9495885569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1117160.7121212122,
            "unit": "ns",
            "range": "± 136932.19549204223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2053022.40625,
            "unit": "ns",
            "range": "± 63477.39476754538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1778670.1559139786,
            "unit": "ns",
            "range": "± 125058.80034342581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12927744.042553192,
            "unit": "ns",
            "range": "± 1081458.6847427504"
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
          "id": "f4bacf20b29df602f3791750c9abc5b0d4b228c4",
          "message": "tmp: Exclude Net Tests",
          "timestamp": "2023-12-21T02:30:30+09:00",
          "tree_id": "4b2b0f390fd4449d9e3320ac2311dac09de570de",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f4bacf20b29df602f3791750c9abc5b0d4b228c4"
        },
        "date": 1703094117220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3886743.7376077585,
            "unit": "ns",
            "range": "± 113191.5550275636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193226.1216947115,
            "unit": "ns",
            "range": "± 7164.392768679573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772753.4750976562,
            "unit": "ns",
            "range": "± 2399.5889561567797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2012138.6395089286,
            "unit": "ns",
            "range": "± 3306.677872811413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623042.6421595982,
            "unit": "ns",
            "range": "± 1603.2491806355301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561859.7211914062,
            "unit": "ns",
            "range": "± 936.684113993967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385061.2045454546,
            "unit": "ns",
            "range": "± 88711.67242397988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2447413.290909091,
            "unit": "ns",
            "range": "± 73817.69333213255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3173629.285714286,
            "unit": "ns",
            "range": "± 55799.8182950289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168731.6219512196,
            "unit": "ns",
            "range": "± 167037.0116078285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13852779.870967742,
            "unit": "ns",
            "range": "± 789860.3341157606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40318.39175257732,
            "unit": "ns",
            "range": "± 5452.793025820003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199415.4516129032,
            "unit": "ns",
            "range": "± 11444.035730188405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191521.63235294117,
            "unit": "ns",
            "range": "± 9100.257660620602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166918.63888888888,
            "unit": "ns",
            "range": "± 5478.332833746193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3242542.466666667,
            "unit": "ns",
            "range": "± 54042.85099789751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762647.4285714286,
            "unit": "ns",
            "range": "± 35765.679121651905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17341.57894736842,
            "unit": "ns",
            "range": "± 1849.3396439542973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67995.06060606061,
            "unit": "ns",
            "range": "± 11747.095661740623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57780.14736842105,
            "unit": "ns",
            "range": "± 7225.01842001395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74305.56842105264,
            "unit": "ns",
            "range": "± 15194.315459052601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3509.0652173913045,
            "unit": "ns",
            "range": "± 631.8919490390678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14464.369565217392,
            "unit": "ns",
            "range": "± 2220.465698196156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5503487.428571428,
            "unit": "ns",
            "range": "± 36039.814618886936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14331036.666666666,
            "unit": "ns",
            "range": "± 178623.16793128915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36711330.21428572,
            "unit": "ns",
            "range": "± 249283.54849306986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74443249.6923077,
            "unit": "ns",
            "range": "± 425587.41914742277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148596036.7142857,
            "unit": "ns",
            "range": "± 1185534.548922548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977085.3539325843,
            "unit": "ns",
            "range": "± 98271.56412804063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933496.0232558139,
            "unit": "ns",
            "range": "± 103984.5670225637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574218.3315789474,
            "unit": "ns",
            "range": "± 110595.96941211456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12745098.15934066,
            "unit": "ns",
            "range": "± 945438.4184603366"
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
          "id": "7633ed612a637d035a72d432079de825cab93a63",
          "message": "tmp: build artifact",
          "timestamp": "2023-12-21T09:32:17+09:00",
          "tree_id": "0a31c83828b067f824f5ac1db77e75077c36dd29",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7633ed612a637d035a72d432079de825cab93a63"
        },
        "date": 1703119437896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662129.571814904,
            "unit": "ns",
            "range": "± 10616.18861567133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219491.9540364584,
            "unit": "ns",
            "range": "± 22650.786268478565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772863.4736328125,
            "unit": "ns",
            "range": "± 3398.716623950984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937082.2124023438,
            "unit": "ns",
            "range": "± 5936.291639131521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621612.8547712053,
            "unit": "ns",
            "range": "± 1385.5845737211787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575339.3022085336,
            "unit": "ns",
            "range": "± 903.3938674917054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407251.75,
            "unit": "ns",
            "range": "± 61647.65853817265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541671.32,
            "unit": "ns",
            "range": "± 61508.960493383944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3152118.6,
            "unit": "ns",
            "range": "± 92777.37984369934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3158399.194029851,
            "unit": "ns",
            "range": "± 125163.950887001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13820892.90425532,
            "unit": "ns",
            "range": "± 1042702.6604934993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41615.1875,
            "unit": "ns",
            "range": "± 6226.102488399354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201043.85454545455,
            "unit": "ns",
            "range": "± 8487.027247332819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198820.34375,
            "unit": "ns",
            "range": "± 12660.81539224001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165249.44444444444,
            "unit": "ns",
            "range": "± 3458.3446094784276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3253163.5384615385,
            "unit": "ns",
            "range": "± 51497.25651044494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2789488.466666667,
            "unit": "ns",
            "range": "± 47647.3501479758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15807.42857142857,
            "unit": "ns",
            "range": "± 2700.0657723947643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67192.93684210526,
            "unit": "ns",
            "range": "± 7691.198199282703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65984.23595505618,
            "unit": "ns",
            "range": "± 6832.264661852732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73116.5,
            "unit": "ns",
            "range": "± 19735.720910593176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3392.9690721649486,
            "unit": "ns",
            "range": "± 734.8041611773201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17542.20618556701,
            "unit": "ns",
            "range": "± 1735.267930429767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5527565.3125,
            "unit": "ns",
            "range": "± 15868.765894963813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14317831.133333333,
            "unit": "ns",
            "range": "± 182513.50471554804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37060653.4,
            "unit": "ns",
            "range": "± 227330.00945566836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73113718.07142857,
            "unit": "ns",
            "range": "± 417687.4304474145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150574691.6,
            "unit": "ns",
            "range": "± 1330358.5912176783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986935.3936170213,
            "unit": "ns",
            "range": "± 93483.57145086504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1902337.6714285715,
            "unit": "ns",
            "range": "± 87184.98439387395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1585650.6276595744,
            "unit": "ns",
            "range": "± 111082.57046950508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12614204.37368421,
            "unit": "ns",
            "range": "± 1081817.6568939595"
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
          "id": "26291e671333a0dd3b6ded350ad733010f6ffbde",
          "message": "test: NetMQTransport.Dispose() called once after tests done",
          "timestamp": "2023-12-21T13:47:28+09:00",
          "tree_id": "8129edb9e70a230bfd687148b8a1411e0b5bf54a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/26291e671333a0dd3b6ded350ad733010f6ffbde"
        },
        "date": 1703134783318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3770237.186104911,
            "unit": "ns",
            "range": "± 48801.392591736876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196791.6873604911,
            "unit": "ns",
            "range": "± 7383.362763230159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778938.7931640625,
            "unit": "ns",
            "range": "± 14541.93573557731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923411.1881009615,
            "unit": "ns",
            "range": "± 3532.9460935106576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609518.8759765625,
            "unit": "ns",
            "range": "± 1239.6469151243377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585686.3240559896,
            "unit": "ns",
            "range": "± 897.6222603238932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411069.4210526315,
            "unit": "ns",
            "range": "± 56986.59959201958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522987.1785714286,
            "unit": "ns",
            "range": "± 49068.0095151795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126454.933333333,
            "unit": "ns",
            "range": "± 53142.28008101952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3123208.588235294,
            "unit": "ns",
            "range": "± 148066.51071925138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13863283.6875,
            "unit": "ns",
            "range": "± 1006158.4457151148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38597.71875,
            "unit": "ns",
            "range": "± 3904.6829973173844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204580.36363636365,
            "unit": "ns",
            "range": "± 9538.840230481761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206927.36666666667,
            "unit": "ns",
            "range": "± 15065.395905365158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173622.87671232875,
            "unit": "ns",
            "range": "± 8481.398403999592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3276681.6153846155,
            "unit": "ns",
            "range": "± 31256.04612321287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2960530.4,
            "unit": "ns",
            "range": "± 55059.40073204056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16050.255319148937,
            "unit": "ns",
            "range": "± 2115.2392474365947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63208.21428571428,
            "unit": "ns",
            "range": "± 7726.749290480323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52226.5625,
            "unit": "ns",
            "range": "± 652.0913503234548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56896.242268041235,
            "unit": "ns",
            "range": "± 8588.802264526312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3317.536842105263,
            "unit": "ns",
            "range": "± 559.0653258089224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12122.054945054944,
            "unit": "ns",
            "range": "± 925.2392286759302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5470936.4,
            "unit": "ns",
            "range": "± 24195.4824614608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14637152.214285715,
            "unit": "ns",
            "range": "± 77243.69772467732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36749577.666666664,
            "unit": "ns",
            "range": "± 199965.12198940618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73270997.21428572,
            "unit": "ns",
            "range": "± 383304.1253612971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149982265.83333334,
            "unit": "ns",
            "range": "± 544815.9089696484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961074.8842105264,
            "unit": "ns",
            "range": "± 72187.04850769567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1874822.046875,
            "unit": "ns",
            "range": "± 81365.02598186467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623145.5684210525,
            "unit": "ns",
            "range": "± 127187.15344172786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12892238.354166666,
            "unit": "ns",
            "range": "± 947313.2721485205"
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
          "id": "825dbb9ab3c6534a1e002610c35c8d31b1b12c12",
          "message": "test: Move ports",
          "timestamp": "2023-12-21T14:04:38+09:00",
          "tree_id": "2ce7730151c412527689761891b7298cbfe2cf6f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/825dbb9ab3c6534a1e002610c35c8d31b1b12c12"
        },
        "date": 1703135750642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783775.967354911,
            "unit": "ns",
            "range": "± 55611.62973282611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216264.0087890625,
            "unit": "ns",
            "range": "± 3056.206256702855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772907.9536830357,
            "unit": "ns",
            "range": "± 1951.2239292379622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961982.890625,
            "unit": "ns",
            "range": "± 18713.45992499191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618894.9756673177,
            "unit": "ns",
            "range": "± 1009.0069316656727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571875.3427036831,
            "unit": "ns",
            "range": "± 1858.29876028615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2469463,
            "unit": "ns",
            "range": "± 50115.055191264924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2584784.4411764704,
            "unit": "ns",
            "range": "± 51431.403211547935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3183538.214285714,
            "unit": "ns",
            "range": "± 51563.46632314629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3348590.75,
            "unit": "ns",
            "range": "± 132206.66426216354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14386551.138297873,
            "unit": "ns",
            "range": "± 1001575.444369762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41011.34042553192,
            "unit": "ns",
            "range": "± 5716.501036291177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209406.5172413793,
            "unit": "ns",
            "range": "± 5496.128102197359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208820.58163265305,
            "unit": "ns",
            "range": "± 21649.065840622727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166708.47619047618,
            "unit": "ns",
            "range": "± 3962.8672273878624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3267479.714285714,
            "unit": "ns",
            "range": "± 38483.48903186838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2885181.7666666666,
            "unit": "ns",
            "range": "± 21136.441609784026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14770.813186813188,
            "unit": "ns",
            "range": "± 1306.6666404089103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64953.51063829787,
            "unit": "ns",
            "range": "± 8139.112279861158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52183.24074074074,
            "unit": "ns",
            "range": "± 2149.3227273337534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66235.77835051547,
            "unit": "ns",
            "range": "± 14231.937133713174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3423.532608695652,
            "unit": "ns",
            "range": "± 681.615235008225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14511.59793814433,
            "unit": "ns",
            "range": "± 2361.998344709914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5428520.2,
            "unit": "ns",
            "range": "± 26533.3867317601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14180778.785714285,
            "unit": "ns",
            "range": "± 72195.17943120854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36916831.85714286,
            "unit": "ns",
            "range": "± 260538.46454443215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74966362.07692307,
            "unit": "ns",
            "range": "± 306725.5898313837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151326500,
            "unit": "ns",
            "range": "± 839508.8396405762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994735.088888889,
            "unit": "ns",
            "range": "± 97953.52818999639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2000270.5833333333,
            "unit": "ns",
            "range": "± 143029.76932620973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1689847.8979591837,
            "unit": "ns",
            "range": "± 198074.92713584658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13048736.45263158,
            "unit": "ns",
            "range": "± 1130213.6997868256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f65e3c4a30957a21e3ae8378545a9fc14cc7a7c8",
          "message": "fix: scale parallelism",
          "timestamp": "2023-12-26T16:56:17+09:00",
          "tree_id": "5b86bbc19b99862f769e33d27e6787161b5dd2b3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f65e3c4a30957a21e3ae8378545a9fc14cc7a7c8"
        },
        "date": 1703578048357,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3655966.8563701925,
            "unit": "ns",
            "range": "± 9814.414508597089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228585.6666666667,
            "unit": "ns",
            "range": "± 19250.27172278104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 791330.4338541667,
            "unit": "ns",
            "range": "± 12569.744768641725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952211.0245535714,
            "unit": "ns",
            "range": "± 3811.176400379931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621239.0508563702,
            "unit": "ns",
            "range": "± 1448.9284759389589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585418.296875,
            "unit": "ns",
            "range": "± 1485.2302895272446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2431368.25,
            "unit": "ns",
            "range": "± 99277.45716274658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2484004.411764706,
            "unit": "ns",
            "range": "± 50753.442714581965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3165975.4375,
            "unit": "ns",
            "range": "± 57397.06079521117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3276524.4615384615,
            "unit": "ns",
            "range": "± 80408.7786826691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14135591.760869564,
            "unit": "ns",
            "range": "± 835715.7234496388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36896.82558139535,
            "unit": "ns",
            "range": "± 3479.7532517047325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203988.79545454544,
            "unit": "ns",
            "range": "± 7573.637050089639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195065.85294117648,
            "unit": "ns",
            "range": "± 6307.457764219696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169292.4375,
            "unit": "ns",
            "range": "± 3202.9913095677716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3238013.8,
            "unit": "ns",
            "range": "± 48274.10749518983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811298.285714286,
            "unit": "ns",
            "range": "± 26257.140732580716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15802.372340425532,
            "unit": "ns",
            "range": "± 3474.7527365701844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65889.60204081633,
            "unit": "ns",
            "range": "± 7818.701002783238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55803.0412371134,
            "unit": "ns",
            "range": "± 6314.862758995516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65492.56989247312,
            "unit": "ns",
            "range": "± 8470.762382143408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2912.6666666666665,
            "unit": "ns",
            "range": "± 394.851659909558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12439.627906976744,
            "unit": "ns",
            "range": "± 1529.9417678000352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5620665.307692308,
            "unit": "ns",
            "range": "± 21039.621785988355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14405530.333333334,
            "unit": "ns",
            "range": "± 109068.65036209775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35993562.5,
            "unit": "ns",
            "range": "± 233565.65871086114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73684616.21428572,
            "unit": "ns",
            "range": "± 695175.8957191979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150235330.84615386,
            "unit": "ns",
            "range": "± 518322.0260836639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987170.3157894737,
            "unit": "ns",
            "range": "± 90110.65985884848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887315.388888889,
            "unit": "ns",
            "range": "± 79093.8519594874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590752.6958762887,
            "unit": "ns",
            "range": "± 141688.66657567388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12727994.06122449,
            "unit": "ns",
            "range": "± 1025908.5054629947"
          }
        ]
      }
    ]
  }
}