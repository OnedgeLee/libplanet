window.BENCHMARK_DATA = {
  "lastUpdate": 1679032469731,
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
      }
    ]
  }
}