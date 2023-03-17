window.BENCHMARK_DATA = {
  "lastUpdate": 1679034860367,
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
      }
    ]
  }
}