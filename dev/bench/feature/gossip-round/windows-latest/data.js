window.BENCHMARK_DATA = {
  "lastUpdate": 1688345228912,
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
          "id": "24c399dfad385ac07672c8a54bfe9c2854df7648",
          "message": "Rename MessageBroadcasted to MessagePublished",
          "timestamp": "2023-07-02T20:26:50+09:00",
          "tree_id": "8db7895eccc994ba6df4d92154e2b6c222d8119a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24c399dfad385ac07672c8a54bfe9c2854df7648"
        },
        "date": 1688298026656,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360301,
            "unit": "ns",
            "range": "± 118867.565297679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2441585.1063829786,
            "unit": "ns",
            "range": "± 90303.5941764451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1720177.7777777778,
            "unit": "ns",
            "range": "± 136167.47533044915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4434894.594594595,
            "unit": "ns",
            "range": "± 150161.33350860028"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42767.64705882353,
            "unit": "ns",
            "range": "± 2051.096625249679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6921221.428571428,
            "unit": "ns",
            "range": "± 55660.18019500709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17540433.333333332,
            "unit": "ns",
            "range": "± 136845.0670683908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45054346.666666664,
            "unit": "ns",
            "range": "± 283242.48285742395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88950660,
            "unit": "ns",
            "range": "± 856695.4141183601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179237176.66666666,
            "unit": "ns",
            "range": "± 1969852.0747459573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749891.573660715,
            "unit": "ns",
            "range": "± 7641.613801506674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513322.0424107143,
            "unit": "ns",
            "range": "± 1826.6470192769318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136107.4776785714,
            "unit": "ns",
            "range": "± 1210.0464852276004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568619.7135416665,
            "unit": "ns",
            "range": "± 13105.680970566782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811868.1710379465,
            "unit": "ns",
            "range": "± 2593.5712740986455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748207.9380580357,
            "unit": "ns",
            "range": "± 824.167171279143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2970355.172413793,
            "unit": "ns",
            "range": "± 126790.10064630272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3109253.3333333335,
            "unit": "ns",
            "range": "± 39045.35579968263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3901923.076923077,
            "unit": "ns",
            "range": "± 40013.792493883775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3408135,
            "unit": "ns",
            "range": "± 118823.38660856374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5894847.5,
            "unit": "ns",
            "range": "± 207001.56940752766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255413.33333333334,
            "unit": "ns",
            "range": "± 7588.454630434376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243755.55555555556,
            "unit": "ns",
            "range": "± 6605.298498475922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219631,
            "unit": "ns",
            "range": "± 14394.090362844654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3871440,
            "unit": "ns",
            "range": "± 65974.74408546695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525906.6666666665,
            "unit": "ns",
            "range": "± 46396.327851406924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17025.51020408163,
            "unit": "ns",
            "range": "± 1822.1043246746044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83029.16666666667,
            "unit": "ns",
            "range": "± 5081.0673695627265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68653.84615384616,
            "unit": "ns",
            "range": "± 4040.580477888121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91120.20202020202,
            "unit": "ns",
            "range": "± 14649.782193811563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4491.7525773195875,
            "unit": "ns",
            "range": "± 816.3268982527753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16895.959595959597,
            "unit": "ns",
            "range": "± 1617.3749954484508"
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
          "id": "fb8ab1739d992dc76884310ba0985e848a6a84c2",
          "message": "AddMessage() to get Message instead of MessageContent",
          "timestamp": "2023-07-03T01:10:20+09:00",
          "tree_id": "823271098cbdffd84898da28b4c37744c5d85043",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fb8ab1739d992dc76884310ba0985e848a6a84c2"
        },
        "date": 1688315399072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676263.829787234,
            "unit": "ns",
            "range": "± 193824.98804198616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3272088.888888889,
            "unit": "ns",
            "range": "± 390586.9230621016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091284.375,
            "unit": "ns",
            "range": "± 277927.4541193969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6315667.676767677,
            "unit": "ns",
            "range": "± 727345.793857713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60265.95744680851,
            "unit": "ns",
            "range": "± 14516.29824248718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8996097,
            "unit": "ns",
            "range": "± 1164664.6314404344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25326170.967741936,
            "unit": "ns",
            "range": "± 769290.5451100377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58202405,
            "unit": "ns",
            "range": "± 5961672.718516341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117463377.77777778,
            "unit": "ns",
            "range": "± 10487937.736388328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259486569.23076922,
            "unit": "ns",
            "range": "± 6905196.099678516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6045212.454044118,
            "unit": "ns",
            "range": "± 193616.15562162493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922118.699048913,
            "unit": "ns",
            "range": "± 47539.056758116254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467425.5859375,
            "unit": "ns",
            "range": "± 38574.04213863842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151869.1731770835,
            "unit": "ns",
            "range": "± 79132.41746946354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047543.9223345588,
            "unit": "ns",
            "range": "± 33817.832232121174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 966011.19140625,
            "unit": "ns",
            "range": "± 22167.807822295108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4099436.9565217393,
            "unit": "ns",
            "range": "± 284484.2361137587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4221218.947368421,
            "unit": "ns",
            "range": "± 362112.9576599865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5308312.5,
            "unit": "ns",
            "range": "± 185181.9482085327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4795424.193548387,
            "unit": "ns",
            "range": "± 288995.9450983871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8080407.692307692,
            "unit": "ns",
            "range": "± 405050.6028253146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338478.5714285714,
            "unit": "ns",
            "range": "± 47774.82892015958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326521.05263157893,
            "unit": "ns",
            "range": "± 47876.6720051053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288266.6666666667,
            "unit": "ns",
            "range": "± 36410.30989522976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5035087.5,
            "unit": "ns",
            "range": "± 341532.57693119574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4338837.373737373,
            "unit": "ns",
            "range": "± 395928.9161581599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31554,
            "unit": "ns",
            "range": "± 9215.198469283385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118113.54166666667,
            "unit": "ns",
            "range": "± 23901.08396481177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120868.68686868687,
            "unit": "ns",
            "range": "± 25770.91243727952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142512.7659574468,
            "unit": "ns",
            "range": "± 25251.751707757354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8013.793103448276,
            "unit": "ns",
            "range": "± 2584.3074018765155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27350.50505050505,
            "unit": "ns",
            "range": "± 9882.01183492443"
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
          "id": "d84e655ab96f450d0004de6a7d9057169f893371",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T09:27:03+09:00",
          "tree_id": "3e26906a17a3420a65f7126a71aa411dc7fc8889",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d84e655ab96f450d0004de6a7d9057169f893371"
        },
        "date": 1688345186315,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619668.3673469387,
            "unit": "ns",
            "range": "± 147826.93461378058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2979468.2926829266,
            "unit": "ns",
            "range": "± 105765.3994438266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2056249.4623655914,
            "unit": "ns",
            "range": "± 135351.64959696963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5887185.56701031,
            "unit": "ns",
            "range": "± 379512.1822236877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52731.914893617024,
            "unit": "ns",
            "range": "± 4253.201520675305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8373975.862068965,
            "unit": "ns",
            "range": "± 239420.4440715305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23578154.054054055,
            "unit": "ns",
            "range": "± 778637.3348480146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56810480.39215686,
            "unit": "ns",
            "range": "± 2287662.447042361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112832886.1111111,
            "unit": "ns",
            "range": "± 5561718.007100739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227334351.92307693,
            "unit": "ns",
            "range": "± 9209141.20058701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5408939.583333333,
            "unit": "ns",
            "range": "± 83232.58185525466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1747061.025390625,
            "unit": "ns",
            "range": "± 39851.07266435123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317393.515625,
            "unit": "ns",
            "range": "± 21178.606991636247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3040136.2444196427,
            "unit": "ns",
            "range": "± 39463.934601375906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 936841.1458333334,
            "unit": "ns",
            "range": "± 13575.261289428188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860499.7623697916,
            "unit": "ns",
            "range": "± 11497.56439364349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3529482.795698925,
            "unit": "ns",
            "range": "± 239452.12584222338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748873,
            "unit": "ns",
            "range": "± 297545.07301543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536522.916666667,
            "unit": "ns",
            "range": "± 276102.68969854666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021241.935483871,
            "unit": "ns",
            "range": "± 266409.1256771045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7026244.827586207,
            "unit": "ns",
            "range": "± 381866.9282277503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294682.60869565216,
            "unit": "ns",
            "range": "± 19646.511357096933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288119.3548387097,
            "unit": "ns",
            "range": "± 18945.09376699182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261359.375,
            "unit": "ns",
            "range": "± 18719.641124118523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4569407.2289156625,
            "unit": "ns",
            "range": "± 240356.86516101917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4064892.98245614,
            "unit": "ns",
            "range": "± 176379.04987721465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21669.14893617021,
            "unit": "ns",
            "range": "± 2158.1068264462015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97335.71428571429,
            "unit": "ns",
            "range": "± 9633.064301407498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87151.02040816327,
            "unit": "ns",
            "range": "± 10236.605478943593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105413.04347826086,
            "unit": "ns",
            "range": "± 13417.392496483148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6304.639175257732,
            "unit": "ns",
            "range": "± 838.4038180968124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20896.875,
            "unit": "ns",
            "range": "± 2255.284000087934"
          }
        ]
      }
    ]
  }
}