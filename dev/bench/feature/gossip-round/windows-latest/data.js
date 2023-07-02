window.BENCHMARK_DATA = {
  "lastUpdate": 1688287077220,
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
          "id": "71acc5d584de19e5e0622b2b9bc8cd6966cad2bb",
          "message": "feat: Fix gossip to forget only with NewRound",
          "timestamp": "2023-06-30T23:38:10+09:00",
          "tree_id": "eb102d493eedf9889af83dec5cde100aaf559683",
          "url": "https://github.com/OnedgeLee/libplanet/commit/71acc5d584de19e5e0622b2b9bc8cd6966cad2bb"
        },
        "date": 1688137122426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1673694.7368421052,
            "unit": "ns",
            "range": "± 113443.97845897429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3309705.3191489363,
            "unit": "ns",
            "range": "± 206731.27243757897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171173.6842105263,
            "unit": "ns",
            "range": "± 198335.18599139096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5921649.315068494,
            "unit": "ns",
            "range": "± 293620.344967257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58654.166666666664,
            "unit": "ns",
            "range": "± 5968.406587438765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9579379.310344828,
            "unit": "ns",
            "range": "± 387101.2301342452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25242206.451612905,
            "unit": "ns",
            "range": "± 1428215.7856545022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62048007.35294118,
            "unit": "ns",
            "range": "± 2950288.2183168405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124656300,
            "unit": "ns",
            "range": "± 4142372.755317899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250521000,
            "unit": "ns",
            "range": "± 8468071.77743421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6167503.571428572,
            "unit": "ns",
            "range": "± 142161.34169572173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961426.9381009615,
            "unit": "ns",
            "range": "± 67650.48172288218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1476121.1741727942,
            "unit": "ns",
            "range": "± 30189.909278106814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3310200.2672697366,
            "unit": "ns",
            "range": "± 68922.69448257844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1042337.0442708334,
            "unit": "ns",
            "range": "± 23533.215123312846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969559.6749441965,
            "unit": "ns",
            "range": "± 14489.125585648284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3872751.4285714286,
            "unit": "ns",
            "range": "± 125587.67120885658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4104125.6756756757,
            "unit": "ns",
            "range": "± 200899.39011397556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110615,
            "unit": "ns",
            "range": "± 181235.94134690127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4506632.258064516,
            "unit": "ns",
            "range": "± 198468.61400643986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8042879.120879121,
            "unit": "ns",
            "range": "± 503940.4077460137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323481.0344827586,
            "unit": "ns",
            "range": "± 12803.953020304256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307120,
            "unit": "ns",
            "range": "± 15336.469518676628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291132.3076923077,
            "unit": "ns",
            "range": "± 13547.913904134693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4911557.692307692,
            "unit": "ns",
            "range": "± 170615.21864713036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4375321.428571428,
            "unit": "ns",
            "range": "± 123226.76584291995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26024.7311827957,
            "unit": "ns",
            "range": "± 2776.7534966755106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114728.72340425532,
            "unit": "ns",
            "range": "± 9799.919051019917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108060.41666666667,
            "unit": "ns",
            "range": "± 12976.809105531433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124259.375,
            "unit": "ns",
            "range": "± 18914.136056483203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8180.412371134021,
            "unit": "ns",
            "range": "± 1428.8427117234985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26791.666666666668,
            "unit": "ns",
            "range": "± 2467.2450720619618"
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
          "id": "61ba1f0b1ede7b6e2ce6f27696e626e11f1d2963",
          "message": "Introduce IConsensusMessageCommunicator",
          "timestamp": "2023-07-02T17:18:59+09:00",
          "tree_id": "0f9f97eec1e8ffa4c180275e6508f115c7d4e614",
          "url": "https://github.com/OnedgeLee/libplanet/commit/61ba1f0b1ede7b6e2ce6f27696e626e11f1d2963"
        },
        "date": 1688287044610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462237.6344086023,
            "unit": "ns",
            "range": "± 115778.63709418343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2780766.6666666665,
            "unit": "ns",
            "range": "± 126838.56527502052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1912874.7474747475,
            "unit": "ns",
            "range": "± 135400.67173697232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5276869.696969697,
            "unit": "ns",
            "range": "± 318771.4780133335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51936.84210526316,
            "unit": "ns",
            "range": "± 3330.071005299428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7307635.714285715,
            "unit": "ns",
            "range": "± 80516.26311729592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21555070,
            "unit": "ns",
            "range": "± 316994.53397721006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52832186.666666664,
            "unit": "ns",
            "range": "± 789250.9974351511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104348243.33333333,
            "unit": "ns",
            "range": "± 1680607.5000541012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215020235.7142857,
            "unit": "ns",
            "range": "± 3204899.6683220817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4994082.083333333,
            "unit": "ns",
            "range": "± 33499.88435245119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1648959.765625,
            "unit": "ns",
            "range": "± 5421.705846303324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234720.0390625,
            "unit": "ns",
            "range": "± 5862.301330174725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2724577.8645833335,
            "unit": "ns",
            "range": "± 6165.586436349498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862700.0065104166,
            "unit": "ns",
            "range": "± 2975.324167371642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801335.9505208334,
            "unit": "ns",
            "range": "± 3053.3798546181033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3311365.3846153845,
            "unit": "ns",
            "range": "± 90646.83090900726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3558149.0196078434,
            "unit": "ns",
            "range": "± 143361.9550264979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4314475.757575758,
            "unit": "ns",
            "range": "± 136736.7316010566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868109.3333333335,
            "unit": "ns",
            "range": "± 188244.61025508828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6468509.836065574,
            "unit": "ns",
            "range": "± 289718.99817174464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281422.85714285716,
            "unit": "ns",
            "range": "± 9234.974623815757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270344.28571428574,
            "unit": "ns",
            "range": "± 12468.867151153961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237207.14285714287,
            "unit": "ns",
            "range": "± 16466.612581126305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4306411.111111111,
            "unit": "ns",
            "range": "± 87035.34703778074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3924093.3333333335,
            "unit": "ns",
            "range": "± 103147.8907579602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23055.31914893617,
            "unit": "ns",
            "range": "± 1908.4203354131985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92528.26086956522,
            "unit": "ns",
            "range": "± 6123.066208961903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75931.81818181818,
            "unit": "ns",
            "range": "± 4121.810378237746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110485.71428571429,
            "unit": "ns",
            "range": "± 18424.356358269204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5882.795698924731,
            "unit": "ns",
            "range": "± 1202.3187430882458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21427.551020408162,
            "unit": "ns",
            "range": "± 2462.786143812245"
          }
        ]
      }
    ]
  }
}