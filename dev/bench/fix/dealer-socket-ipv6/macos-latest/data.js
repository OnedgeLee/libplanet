window.BENCHMARK_DATA = {
  "lastUpdate": 1679042163166,
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
          "id": "1a6649c745a66cf73de53be150868d3aa8b5ccd1",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T14:30:41+09:00",
          "tree_id": "502b7a16d11fe8216d54cf7bbc8270eebd4d60e1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a6649c745a66cf73de53be150868d3aa8b5ccd1"
        },
        "date": 1679032439921,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8929789.184210526,
            "unit": "ns",
            "range": "± 173511.08357683045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24348850.578125,
            "unit": "ns",
            "range": "± 1120825.0287728223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56777888.621212125,
            "unit": "ns",
            "range": "± 1788344.590514171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115191079.26530612,
            "unit": "ns",
            "range": "± 4048654.8722177404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234910515.6216216,
            "unit": "ns",
            "range": "± 7958539.694657248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81758.21176470588,
            "unit": "ns",
            "range": "± 6381.758591213445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236071.62790697673,
            "unit": "ns",
            "range": "± 17100.68798550412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251194.97826086957,
            "unit": "ns",
            "range": "± 31059.196191023504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231273.3,
            "unit": "ns",
            "range": "± 21425.374867356266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13843004.987179488,
            "unit": "ns",
            "range": "± 709999.6658361522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10897806.418604651,
            "unit": "ns",
            "range": "± 564511.3312594087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27261.433333333334,
            "unit": "ns",
            "range": "± 3893.1514913796336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68158.6888888889,
            "unit": "ns",
            "range": "± 8397.796746758948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66230.88202247191,
            "unit": "ns",
            "range": "± 6051.100064348964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143075.48936170212,
            "unit": "ns",
            "range": "± 18330.029643192498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10683.53409090909,
            "unit": "ns",
            "range": "± 1265.6628034977502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27518.68817204301,
            "unit": "ns",
            "range": "± 3723.2401357189074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634516.63,
            "unit": "ns",
            "range": "± 166212.08596331332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861068.2954545454,
            "unit": "ns",
            "range": "± 106088.0618092609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2689721.510638298,
            "unit": "ns",
            "range": "± 255379.80604508167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6202395.614285714,
            "unit": "ns",
            "range": "± 201260.01825700526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3679113.388888889,
            "unit": "ns",
            "range": "± 333520.5234048092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5944066.55050505,
            "unit": "ns",
            "range": "± 653178.918754278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28155733.279569894,
            "unit": "ns",
            "range": "± 1612147.232828852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6796945.370588236,
            "unit": "ns",
            "range": "± 487527.1560902259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30740335.728070177,
            "unit": "ns",
            "range": "± 1321032.819545766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7295785.103693182,
            "unit": "ns",
            "range": "± 178451.11044661503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2201838.8504464286,
            "unit": "ns",
            "range": "± 36920.945962577025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408360.1397094727,
            "unit": "ns",
            "range": "± 42782.019371163886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3039057.6747359154,
            "unit": "ns",
            "range": "± 148776.88973182955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981109.3033447266,
            "unit": "ns",
            "range": "± 38175.91779204731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792429.9412520559,
            "unit": "ns",
            "range": "± 26602.124326404966"
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
          "id": "d33c37d48523e9fc935874e118df09e84cd92bbd",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T15:19:04+09:00",
          "tree_id": "1c7139d35f264bdff18297a8083d91c9bd672ab1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d33c37d48523e9fc935874e118df09e84cd92bbd"
        },
        "date": 1679034831212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7785506.533333333,
            "unit": "ns",
            "range": "± 100861.88173145257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19376170.14285714,
            "unit": "ns",
            "range": "± 317722.64221459604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48450211.27272727,
            "unit": "ns",
            "range": "± 1171268.6042567338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92868076.33333333,
            "unit": "ns",
            "range": "± 1383143.8376246167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203105967.33333334,
            "unit": "ns",
            "range": "± 5481908.363437618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56823.257894736846,
            "unit": "ns",
            "range": "± 5800.8543716216045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227554.57954545456,
            "unit": "ns",
            "range": "± 12431.115135913411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235240.5,
            "unit": "ns",
            "range": "± 9390.876084948472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204253.73157894737,
            "unit": "ns",
            "range": "± 17706.92460619942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12858351.837209303,
            "unit": "ns",
            "range": "± 472949.1641003659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10187226.1,
            "unit": "ns",
            "range": "± 172525.42837167098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27029.426315789475,
            "unit": "ns",
            "range": "± 3123.0415829052663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68024.44943820225,
            "unit": "ns",
            "range": "± 4300.2988638508805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64076.558139534885,
            "unit": "ns",
            "range": "± 2376.6894472526633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123676.3469387755,
            "unit": "ns",
            "range": "± 24523.897706704538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8549.45744680851,
            "unit": "ns",
            "range": "± 1333.3953076851785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20757.968085106382,
            "unit": "ns",
            "range": "± 3375.212126195915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1490356.4105263157,
            "unit": "ns",
            "range": "± 149286.10413262056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2728534.826530612,
            "unit": "ns",
            "range": "± 102523.49120290834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350628.2708333335,
            "unit": "ns",
            "range": "± 166663.82488650485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5875094.987179487,
            "unit": "ns",
            "range": "± 205071.82000317427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471360,
            "unit": "ns",
            "range": "± 97218.40339534867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5154757.384615385,
            "unit": "ns",
            "range": "± 135304.07392302033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25108929.46875,
            "unit": "ns",
            "range": "± 770499.7756459019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6036404.009090909,
            "unit": "ns",
            "range": "± 255160.19494259567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29139444.4375,
            "unit": "ns",
            "range": "± 1340087.7129375816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6811456.4821875,
            "unit": "ns",
            "range": "± 179900.24869537726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924138.6447753906,
            "unit": "ns",
            "range": "± 37681.363859914316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1272916.2234933036,
            "unit": "ns",
            "range": "± 6297.447235625887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2499931.31796875,
            "unit": "ns",
            "range": "± 64135.19903969465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 765927.3118489584,
            "unit": "ns",
            "range": "± 5694.1420007544075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715273.0987723215,
            "unit": "ns",
            "range": "± 4003.113736561054"
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
          "id": "9508ac52f6edc8faa78fb35afed507a8d85e9157",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T15:48:01+09:00",
          "tree_id": "8f1efeb07beb327e89b2786e5fda1e992fc61bda",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9508ac52f6edc8faa78fb35afed507a8d85e9157"
        },
        "date": 1679037032481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9468693.472727273,
            "unit": "ns",
            "range": "± 396688.0970344919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23380659.236263737,
            "unit": "ns",
            "range": "± 1308093.3613824092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57952619.59090909,
            "unit": "ns",
            "range": "± 1700341.3979778506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116158565.39130434,
            "unit": "ns",
            "range": "± 4237860.364839158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234872958.64814815,
            "unit": "ns",
            "range": "± 5321123.23161892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92237.27173913043,
            "unit": "ns",
            "range": "± 17078.938756118205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253523.75806451612,
            "unit": "ns",
            "range": "± 25379.107996412095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263452.847826087,
            "unit": "ns",
            "range": "± 35616.55312188815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250346.87894736842,
            "unit": "ns",
            "range": "± 33638.63353101007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14095882.135416666,
            "unit": "ns",
            "range": "± 943287.2102980547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11025983.315384615,
            "unit": "ns",
            "range": "± 484535.4362768493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28290.1797752809,
            "unit": "ns",
            "range": "± 3882.5950862377113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74785.87777777777,
            "unit": "ns",
            "range": "± 11227.942448684054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68708.84117647058,
            "unit": "ns",
            "range": "± 7383.6181035370155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139030.91758241758,
            "unit": "ns",
            "range": "± 18755.953765888098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10429.07142857143,
            "unit": "ns",
            "range": "± 1014.3392720042732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26299.3125,
            "unit": "ns",
            "range": "± 4868.428911849986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598189.3368421053,
            "unit": "ns",
            "range": "± 203224.59225890998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876089.2280701753,
            "unit": "ns",
            "range": "± 109836.75355889654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2565051.7448979593,
            "unit": "ns",
            "range": "± 273372.41433936456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6107199.916666667,
            "unit": "ns",
            "range": "± 202349.8315826014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594674.7333333334,
            "unit": "ns",
            "range": "± 244909.52386864938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5378017.028571429,
            "unit": "ns",
            "range": "± 171175.37583485845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27663339.47826087,
            "unit": "ns",
            "range": "± 1327926.9860198684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6800015.765957447,
            "unit": "ns",
            "range": "± 483025.82835630444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32124136.57216495,
            "unit": "ns",
            "range": "± 1897200.1644470687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7235814.02890625,
            "unit": "ns",
            "range": "± 124218.33215600434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2266610.7782226563,
            "unit": "ns",
            "range": "± 79952.43896699323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1594176.0944356716,
            "unit": "ns",
            "range": "± 61658.734586272054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3394208.613588483,
            "unit": "ns",
            "range": "± 187740.3963787771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043028.4143880209,
            "unit": "ns",
            "range": "± 55686.07364083924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 869304.3224826389,
            "unit": "ns",
            "range": "± 18071.952981861385"
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
          "id": "f282ad1da6a375279f3121c3dded446f9c304b73",
          "message": "chore: better expression for ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T16:14:30+09:00",
          "tree_id": "13f32faaa8d73b42ac61b36f930ec2cc1d42bbdc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f282ad1da6a375279f3121c3dded446f9c304b73"
        },
        "date": 1679038298531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9207126.86597938,
            "unit": "ns",
            "range": "± 888910.8915412143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21874874.670212764,
            "unit": "ns",
            "range": "± 1239163.0543048051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54390878.375,
            "unit": "ns",
            "range": "± 1671621.146147959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101761793.05555555,
            "unit": "ns",
            "range": "± 2147817.62403793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205775420.7142857,
            "unit": "ns",
            "range": "± 3346534.891986369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77620.22352941177,
            "unit": "ns",
            "range": "± 6828.16694773249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229081.3021978022,
            "unit": "ns",
            "range": "± 28964.83471814276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234966.1976744186,
            "unit": "ns",
            "range": "± 36230.27494036697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224252.32417582418,
            "unit": "ns",
            "range": "± 30728.734678940855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13920406.664556962,
            "unit": "ns",
            "range": "± 715706.4035568766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11015004.662650602,
            "unit": "ns",
            "range": "± 582287.6127225519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20912.69230769231,
            "unit": "ns",
            "range": "± 2789.2601993770786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54113.484210526316,
            "unit": "ns",
            "range": "± 5871.122169483731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55380.80337078652,
            "unit": "ns",
            "range": "± 5565.996768946271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113304.13541666667,
            "unit": "ns",
            "range": "± 17111.5880828844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6840.694736842105,
            "unit": "ns",
            "range": "± 695.1975392570272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17287.434782608696,
            "unit": "ns",
            "range": "± 2762.2412038465113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659962.6530612244,
            "unit": "ns",
            "range": "± 173780.84694686325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2879871.7739726026,
            "unit": "ns",
            "range": "± 142365.0778413899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2602143.3181818184,
            "unit": "ns",
            "range": "± 248277.22079720275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5999024.805555556,
            "unit": "ns",
            "range": "± 160906.13244014914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520610,
            "unit": "ns",
            "range": "± 46634.84678864079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5429469.02631579,
            "unit": "ns",
            "range": "± 404885.5813748784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25465579.26984127,
            "unit": "ns",
            "range": "± 1165453.9406814456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7689426.542553191,
            "unit": "ns",
            "range": "± 685371.544684987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32456393.232323233,
            "unit": "ns",
            "range": "± 2290375.0099575967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6806501.996995192,
            "unit": "ns",
            "range": "± 73268.65553038128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084238.40015625,
            "unit": "ns",
            "range": "± 50682.72293836945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323504.9183872768,
            "unit": "ns",
            "range": "± 17299.44897274296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578124.592122396,
            "unit": "ns",
            "range": "± 25852.734634229277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881064.0831580529,
            "unit": "ns",
            "range": "± 4531.173482276103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751651.5778245192,
            "unit": "ns",
            "range": "± 10636.200386420292"
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
          "id": "dd510d3f7d59af4c42af978a98cd17420b6b8125",
          "message": "document: add documentation on ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T17:14:20+09:00",
          "tree_id": "978082313a62ddb74b661108c1afba00320fa31e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd510d3f7d59af4c42af978a98cd17420b6b8125"
        },
        "date": 1679041855015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9020666.264705881,
            "unit": "ns",
            "range": "± 168976.94502709882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23164704.76470588,
            "unit": "ns",
            "range": "± 389648.62052632263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58027482.03333333,
            "unit": "ns",
            "range": "± 550661.2472776794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113516116.14285715,
            "unit": "ns",
            "range": "± 719639.8213354166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 230944822.35714287,
            "unit": "ns",
            "range": "± 2153081.5742401765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72476.15957446808,
            "unit": "ns",
            "range": "± 9441.821450736903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233456.43548387097,
            "unit": "ns",
            "range": "± 10553.481892396769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232063.7142857143,
            "unit": "ns",
            "range": "± 12185.789426273548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207606.4375,
            "unit": "ns",
            "range": "± 10856.023405737375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13262058.142857144,
            "unit": "ns",
            "range": "± 186678.66521207674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10353276.066666666,
            "unit": "ns",
            "range": "± 154791.02376359215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20237.84946236559,
            "unit": "ns",
            "range": "± 2054.7238571803296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59398.62087912088,
            "unit": "ns",
            "range": "± 4936.855782637287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46779.44736842105,
            "unit": "ns",
            "range": "± 2903.7727453736657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111784.79166666667,
            "unit": "ns",
            "range": "± 19290.367095858557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5699.844086021505,
            "unit": "ns",
            "range": "± 621.8206699164132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19349.476744186046,
            "unit": "ns",
            "range": "± 1836.5683326871547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1865959.8,
            "unit": "ns",
            "range": "± 195554.023369451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3320420.919354839,
            "unit": "ns",
            "range": "± 101087.01665719299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2887184.1875,
            "unit": "ns",
            "range": "± 173149.16635538408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7133121.236842105,
            "unit": "ns",
            "range": "± 239260.8263635004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3790790.2,
            "unit": "ns",
            "range": "± 143411.4899754612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6240361.304347826,
            "unit": "ns",
            "range": "± 137197.75329376827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27841764.11764706,
            "unit": "ns",
            "range": "± 891105.727289621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7676061.38,
            "unit": "ns",
            "range": "± 199831.80656102602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32825612.62962963,
            "unit": "ns",
            "range": "± 908804.6084254832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6782305.5263671875,
            "unit": "ns",
            "range": "± 129663.00540147825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1996844.636439732,
            "unit": "ns",
            "range": "± 32094.380369544604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473697.8486979166,
            "unit": "ns",
            "range": "± 18414.05658696628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3027876.4703125,
            "unit": "ns",
            "range": "± 17926.821220316546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957003.4522786458,
            "unit": "ns",
            "range": "± 9653.556879680169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876664.2819260817,
            "unit": "ns",
            "range": "± 6496.21918051876"
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
          "id": "e795d3fe3a1fa1999c89abfc388edd3fb78b379f",
          "message": "document: add documentation on ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T17:17:12+09:00",
          "tree_id": "978082313a62ddb74b661108c1afba00320fa31e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e795d3fe3a1fa1999c89abfc388edd3fb78b379f"
        },
        "date": 1679042032988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8675117.1,
            "unit": "ns",
            "range": "± 182841.5124680964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19745410.92857143,
            "unit": "ns",
            "range": "± 960885.9987610214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48588541.29310345,
            "unit": "ns",
            "range": "± 1419300.1909471941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101942476.4,
            "unit": "ns",
            "range": "± 1847467.394131792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205097023.07142857,
            "unit": "ns",
            "range": "± 2186282.600451505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69644.5412371134,
            "unit": "ns",
            "range": "± 12897.652467210786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206102.44565217392,
            "unit": "ns",
            "range": "± 16919.434853630442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196515.13978494622,
            "unit": "ns",
            "range": "± 11653.249078178751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189203.70833333334,
            "unit": "ns",
            "range": "± 24293.43159002651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12634965.884615384,
            "unit": "ns",
            "range": "± 185823.3222869412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10222697.94117647,
            "unit": "ns",
            "range": "± 197090.53789390504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19405.697916666668,
            "unit": "ns",
            "range": "± 3106.2455154932504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52104.8021978022,
            "unit": "ns",
            "range": "± 5402.952816582552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46478.5,
            "unit": "ns",
            "range": "± 4397.121547228243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105604.09677419355,
            "unit": "ns",
            "range": "± 14796.299229628565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6084.712643678161,
            "unit": "ns",
            "range": "± 1001.6301237673907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16297.574712643678,
            "unit": "ns",
            "range": "± 2142.012890718512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564729.5416666667,
            "unit": "ns",
            "range": "± 153482.47277303218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905660.2711864407,
            "unit": "ns",
            "range": "± 126476.29875577349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2568327.3846153845,
            "unit": "ns",
            "range": "± 199952.68034489057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6498891.552631579,
            "unit": "ns",
            "range": "± 400500.5408386491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3253714.423076923,
            "unit": "ns",
            "range": "± 37792.89689315868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5118493.318181818,
            "unit": "ns",
            "range": "± 159538.7234201415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26703318.5375,
            "unit": "ns",
            "range": "± 1385678.862315667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6558260.307692308,
            "unit": "ns",
            "range": "± 84541.55340165038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29781742.07843137,
            "unit": "ns",
            "range": "± 1207246.3356128582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6571126.114955357,
            "unit": "ns",
            "range": "± 32913.94338521712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998877.532924107,
            "unit": "ns",
            "range": "± 10257.893218749452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279882.5112680288,
            "unit": "ns",
            "range": "± 14756.845439733734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726081.4157366073,
            "unit": "ns",
            "range": "± 20766.377807502115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798559.7163411458,
            "unit": "ns",
            "range": "± 2620.8190804526316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694931.8494591346,
            "unit": "ns",
            "range": "± 2831.004082800066"
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
          "id": "1a70e33b7ff5f6b6fe902ca28829ed16136b12f4",
          "message": "document: add documentation on ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T17:18:18+09:00",
          "tree_id": "be13a186e8a16afc326d2a53fe070fad1092e816",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a70e33b7ff5f6b6fe902ca28829ed16136b12f4"
        },
        "date": 1679042121279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9041455.733333332,
            "unit": "ns",
            "range": "± 56727.638902877305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23682268.85714286,
            "unit": "ns",
            "range": "± 189324.5247423088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60042121.35714286,
            "unit": "ns",
            "range": "± 536943.3296872868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 119431308.93333334,
            "unit": "ns",
            "range": "± 1448056.6855630768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235975089.13333333,
            "unit": "ns",
            "range": "± 3237067.848186112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71694.78494623656,
            "unit": "ns",
            "range": "± 5829.717792501256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240611.0285714286,
            "unit": "ns",
            "range": "± 11074.521975447928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241614.29411764705,
            "unit": "ns",
            "range": "± 11305.763555325226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225239.65573770492,
            "unit": "ns",
            "range": "± 10175.638947809362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13732615.923076924,
            "unit": "ns",
            "range": "± 207916.14292604505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10375025.344444444,
            "unit": "ns",
            "range": "± 692607.4389777422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20708.5,
            "unit": "ns",
            "range": "± 2014.594656260226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59293.709677419356,
            "unit": "ns",
            "range": "± 5930.121471335696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45973.26436781609,
            "unit": "ns",
            "range": "± 2511.9670993798363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116675.80412371134,
            "unit": "ns",
            "range": "± 21070.644916585163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5817.384210526316,
            "unit": "ns",
            "range": "± 434.14150705996263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19996.782608695652,
            "unit": "ns",
            "range": "± 1480.1066847952338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1727617.688172043,
            "unit": "ns",
            "range": "± 189000.0622891534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3211271.0217391304,
            "unit": "ns",
            "range": "± 123375.46488620988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790994.904255319,
            "unit": "ns",
            "range": "± 193517.36372033984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7203076.424242424,
            "unit": "ns",
            "range": "± 447312.30341839604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4098092.285714286,
            "unit": "ns",
            "range": "± 71236.20286000714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6115669.730769231,
            "unit": "ns",
            "range": "± 163943.9739402599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27580940.733333334,
            "unit": "ns",
            "range": "± 226543.92742955952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7649417.305555556,
            "unit": "ns",
            "range": "± 254296.61846173927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32127536.5,
            "unit": "ns",
            "range": "± 612945.6774730802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7046065.5986328125,
            "unit": "ns",
            "range": "± 133873.84270705548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207989.97890625,
            "unit": "ns",
            "range": "± 35373.96452607677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1430632.0016276042,
            "unit": "ns",
            "range": "± 17869.913202627213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2979063.1255208333,
            "unit": "ns",
            "range": "± 27886.42187470112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919385.5902944711,
            "unit": "ns",
            "range": "± 5767.5926203308445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892042.3071289062,
            "unit": "ns",
            "range": "± 11637.69516369117"
          }
        ]
      }
    ]
  }
}