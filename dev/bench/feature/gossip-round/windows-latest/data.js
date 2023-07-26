window.BENCHMARK_DATA = {
  "lastUpdate": 1688385029734,
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
          "id": "4967018433c09ad5f61c3bab650786a81057aad3",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T15:02:41+09:00",
          "tree_id": "fc68fc51a13f6b241ea85483bd1fe1b5bde679fd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4967018433c09ad5f61c3bab650786a81057aad3"
        },
        "date": 1688365455150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1828095.8762886599,
            "unit": "ns",
            "range": "± 254688.0423992285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3286641.237113402,
            "unit": "ns",
            "range": "± 260774.33082096156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212445.4545454546,
            "unit": "ns",
            "range": "± 271740.54938140465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6105201.020408163,
            "unit": "ns",
            "range": "± 458314.84479308635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54008.602150537634,
            "unit": "ns",
            "range": "± 10162.822869505884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8637092.13483146,
            "unit": "ns",
            "range": "± 613506.9078341037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20937758.666666668,
            "unit": "ns",
            "range": "± 1047585.319378129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55872671.23287671,
            "unit": "ns",
            "range": "± 2747791.3291344587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112680085.50724638,
            "unit": "ns",
            "range": "± 5250718.607213665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226963376.19047618,
            "unit": "ns",
            "range": "± 8034018.6551393205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6085947.327302632,
            "unit": "ns",
            "range": "± 130876.18377647392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2039643.1361607143,
            "unit": "ns",
            "range": "± 21899.66662894581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1501324.3582589286,
            "unit": "ns",
            "range": "± 16825.537062857555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3362940.1506696427,
            "unit": "ns",
            "range": "± 35534.812850441514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054922.2547743055,
            "unit": "ns",
            "range": "± 21979.28761375209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 998274.0985576923,
            "unit": "ns",
            "range": "± 12572.874538905433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467801,
            "unit": "ns",
            "range": "± 353235.4477032867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3651825,
            "unit": "ns",
            "range": "± 304009.4572628673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4951855,
            "unit": "ns",
            "range": "± 475268.0879559377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379454.545454546,
            "unit": "ns",
            "range": "± 401661.0654323245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7959856.842105263,
            "unit": "ns",
            "range": "± 444327.1555989883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329043.6842105263,
            "unit": "ns",
            "range": "± 52431.86624548397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323095.74468085106,
            "unit": "ns",
            "range": "± 40441.559893799706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266919.3548387097,
            "unit": "ns",
            "range": "± 40838.85686468251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5040695.918367347,
            "unit": "ns",
            "range": "± 357632.8076922023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4531874.698795181,
            "unit": "ns",
            "range": "± 239564.84373138373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26995.876288659794,
            "unit": "ns",
            "range": "± 6799.738314906152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132042.39130434784,
            "unit": "ns",
            "range": "± 9800.260522391063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132225.58139534883,
            "unit": "ns",
            "range": "± 18801.50923883513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140256.25,
            "unit": "ns",
            "range": "± 20132.141426610648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9438.04347826087,
            "unit": "ns",
            "range": "± 1680.7796719918927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25855.555555555555,
            "unit": "ns",
            "range": "± 6664.269977354291"
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
          "id": "7f48ce9bd8cad8443b1e52ad1a2386a5c4f788cc",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:18:52+09:00",
          "tree_id": "31835b043628d6268ec7456cf50b54108860b770",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f48ce9bd8cad8443b1e52ad1a2386a5c4f788cc"
        },
        "date": 1688376972741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461973.469387755,
            "unit": "ns",
            "range": "± 134317.4893625696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2654421.1267605633,
            "unit": "ns",
            "range": "± 129222.46920440618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1809870.1030927836,
            "unit": "ns",
            "range": "± 155932.6785593629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4727485.365853659,
            "unit": "ns",
            "range": "± 167064.91486990263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47163.541666666664,
            "unit": "ns",
            "range": "± 3206.5104755519765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7130505.882352941,
            "unit": "ns",
            "range": "± 128944.1617066678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19539257.14285714,
            "unit": "ns",
            "range": "± 447737.70398686384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48341509.09090909,
            "unit": "ns",
            "range": "± 1150191.728079276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99271935.48387097,
            "unit": "ns",
            "range": "± 2941550.8087343303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194725629.4117647,
            "unit": "ns",
            "range": "± 3889586.1959797065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4847881.09375,
            "unit": "ns",
            "range": "± 30094.16371168072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1541608.2845052083,
            "unit": "ns",
            "range": "± 9677.188200354578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166156.6796875,
            "unit": "ns",
            "range": "± 8270.734808218875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689327.4274553573,
            "unit": "ns",
            "range": "± 20295.59525923557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828836.4908854166,
            "unit": "ns",
            "range": "± 5348.964651799801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769243.6662946428,
            "unit": "ns",
            "range": "± 3074.4142915345296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3051043.6363636362,
            "unit": "ns",
            "range": "± 121237.75503444148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3364752.1739130435,
            "unit": "ns",
            "range": "± 75917.36458188792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4046176.470588235,
            "unit": "ns",
            "range": "± 155238.4831003386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3538345.652173913,
            "unit": "ns",
            "range": "± 134713.56436944564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6263520,
            "unit": "ns",
            "range": "± 234148.1762784956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268361.53846153844,
            "unit": "ns",
            "range": "± 11026.22815792638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252762.71186440677,
            "unit": "ns",
            "range": "± 10799.854697379591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227086.66666666666,
            "unit": "ns",
            "range": "± 12577.37580031987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3975581.25,
            "unit": "ns",
            "range": "± 123310.83315175778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3485277.777777778,
            "unit": "ns",
            "range": "± 96722.57446044544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21570.408163265307,
            "unit": "ns",
            "range": "± 2925.684665086158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88496.875,
            "unit": "ns",
            "range": "± 6649.550093605463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73030.43478260869,
            "unit": "ns",
            "range": "± 3521.041972611236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92922.82608695653,
            "unit": "ns",
            "range": "± 12385.03264766418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5419.780219780219,
            "unit": "ns",
            "range": "± 636.3471764200176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18917.021276595744,
            "unit": "ns",
            "range": "± 1681.1822707545505"
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
          "id": "0e1dcbfdf7984a805d5f72f17a4aa425825ca6f4",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:17:07+09:00",
          "tree_id": "aaf95b9497298892d219d0a6408b235fe3434e90",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0e1dcbfdf7984a805d5f72f17a4aa425825ca6f4"
        },
        "date": 1688377060690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657030.303030303,
            "unit": "ns",
            "range": "± 234564.787819061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3147448.4536082475,
            "unit": "ns",
            "range": "± 294905.29839869856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150561.290322581,
            "unit": "ns",
            "range": "± 175950.03430585066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5997693,
            "unit": "ns",
            "range": "± 482880.7630923461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62798.913043478264,
            "unit": "ns",
            "range": "± 12073.124221835538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8379115,
            "unit": "ns",
            "range": "± 604809.5306446368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21916168.686868686,
            "unit": "ns",
            "range": "± 1482962.7345866612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57953280,
            "unit": "ns",
            "range": "± 3583962.2754176725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104245372,
            "unit": "ns",
            "range": "± 9736140.162178846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210263831,
            "unit": "ns",
            "range": "± 13539451.711215712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5467810.829741379,
            "unit": "ns",
            "range": "± 158214.01476157753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1764913.0013020833,
            "unit": "ns",
            "range": "± 26432.42802540222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348100.83984375,
            "unit": "ns",
            "range": "± 47394.38360331563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2949166.11328125,
            "unit": "ns",
            "range": "± 64096.53576334237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013892.7176339285,
            "unit": "ns",
            "range": "± 9423.754269784757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939348.8098144531,
            "unit": "ns",
            "range": "± 17395.013942240283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373898.9795918367,
            "unit": "ns",
            "range": "± 353766.17809201975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3604822.448979592,
            "unit": "ns",
            "range": "± 376404.06193526037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4831896.9387755105,
            "unit": "ns",
            "range": "± 484922.99132574187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3930970.707070707,
            "unit": "ns",
            "range": "± 441652.357572667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7662118.556701031,
            "unit": "ns",
            "range": "± 536849.7049395934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325659.793814433,
            "unit": "ns",
            "range": "± 52280.97100402509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277555.2083333333,
            "unit": "ns",
            "range": "± 40773.78897434676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256807.29166666666,
            "unit": "ns",
            "range": "± 37214.576218385664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4472023.232323232,
            "unit": "ns",
            "range": "± 411849.705058523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4191251,
            "unit": "ns",
            "range": "± 362906.35392090015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28014.646464646463,
            "unit": "ns",
            "range": "± 11319.932872189669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110542.85714285714,
            "unit": "ns",
            "range": "± 19995.12311674045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120843.75,
            "unit": "ns",
            "range": "± 25559.943219193996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139850.51546391752,
            "unit": "ns",
            "range": "± 31337.976574329045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12042.268041237114,
            "unit": "ns",
            "range": "± 8552.811855509208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27100,
            "unit": "ns",
            "range": "± 10768.003385364274"
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
          "id": "16250d3d6696c2df83661833457cb6d75deaffd8",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T19:30:19+09:00",
          "tree_id": "34b177607c49e7e3672809c1c23f6d701e7411bd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/16250d3d6696c2df83661833457cb6d75deaffd8"
        },
        "date": 1688381106569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1237971.5789473683,
            "unit": "ns",
            "range": "± 101233.56884080674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2253275.5102040814,
            "unit": "ns",
            "range": "± 89501.82151454667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1645085,
            "unit": "ns",
            "range": "± 147739.88086833528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4226982.978723404,
            "unit": "ns",
            "range": "± 163048.33281702874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46045.91836734694,
            "unit": "ns",
            "range": "± 7198.455853422997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7598835.714285715,
            "unit": "ns",
            "range": "± 90588.7886350934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18748400,
            "unit": "ns",
            "range": "± 149440.86558800543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46516107.14285714,
            "unit": "ns",
            "range": "± 245111.32938158693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91978493.33333333,
            "unit": "ns",
            "range": "± 538233.96461638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190545614.2857143,
            "unit": "ns",
            "range": "± 850449.0495814937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4937871.844951923,
            "unit": "ns",
            "range": "± 13935.32544832327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574580.546875,
            "unit": "ns",
            "range": "± 6225.527051017021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047773.046875,
            "unit": "ns",
            "range": "± 3077.0638311176795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594665.848214286,
            "unit": "ns",
            "range": "± 13933.139654170278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831112.9557291666,
            "unit": "ns",
            "range": "± 2335.78362675147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761699.5833333334,
            "unit": "ns",
            "range": "± 2900.687410943107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2920730.1587301586,
            "unit": "ns",
            "range": "± 133982.35997868626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3120785.714285714,
            "unit": "ns",
            "range": "± 43462.21802444504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3921403.5714285714,
            "unit": "ns",
            "range": "± 103501.25596712576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3595175,
            "unit": "ns",
            "range": "± 66229.12249657749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5589480.769230769,
            "unit": "ns",
            "range": "± 137614.02550388756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225365.59139784946,
            "unit": "ns",
            "range": "± 12752.403819635561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214980.8510638298,
            "unit": "ns",
            "range": "± 12887.08845047118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200031,
            "unit": "ns",
            "range": "± 15849.619662135223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841096.6666666665,
            "unit": "ns",
            "range": "± 43042.5182924092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3460406.6666666665,
            "unit": "ns",
            "range": "± 57023.44714071155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13926.881720430107,
            "unit": "ns",
            "range": "± 2476.3726885062383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70426.31578947368,
            "unit": "ns",
            "range": "± 10855.239057966395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59368.0412371134,
            "unit": "ns",
            "range": "± 12406.236220745937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86506.06060606061,
            "unit": "ns",
            "range": "± 16000.776882808917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3794.5054945054944,
            "unit": "ns",
            "range": "± 848.4446734221174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12820.833333333334,
            "unit": "ns",
            "range": "± 2906.831035107934"
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
          "id": "88badca48ecc98f343605bbd33eac933cca14ca0",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T19:50:04+09:00",
          "tree_id": "dec9a06f16737587d978b3e4bba6481e784a6d30",
          "url": "https://github.com/OnedgeLee/libplanet/commit/88badca48ecc98f343605bbd33eac933cca14ca0"
        },
        "date": 1688382506015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566175.2577319588,
            "unit": "ns",
            "range": "± 149372.79916853434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3029892.3076923075,
            "unit": "ns",
            "range": "± 188260.66694333343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2108885.789473684,
            "unit": "ns",
            "range": "± 172118.18732375375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5661493.023255814,
            "unit": "ns",
            "range": "± 307393.4423850656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52043.8202247191,
            "unit": "ns",
            "range": "± 2886.802062686628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8475068.888888888,
            "unit": "ns",
            "range": "± 317803.5941657149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23956162.5,
            "unit": "ns",
            "range": "± 734279.1662795956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60563429.787234046,
            "unit": "ns",
            "range": "± 2330943.097706507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120814861.90476191,
            "unit": "ns",
            "range": "± 4385452.408230514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237220616.66666666,
            "unit": "ns",
            "range": "± 6622038.572622395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5869631.770833333,
            "unit": "ns",
            "range": "± 90694.78850572258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885426.875,
            "unit": "ns",
            "range": "± 43166.46050665569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444026.171875,
            "unit": "ns",
            "range": "± 24592.630147901335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190680.949519231,
            "unit": "ns",
            "range": "± 36535.38487612685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002384.140625,
            "unit": "ns",
            "range": "± 22372.762619323963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920586.171875,
            "unit": "ns",
            "range": "± 10951.88156578427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3648096.7741935486,
            "unit": "ns",
            "range": "± 166185.00451944664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3840512.643678161,
            "unit": "ns",
            "range": "± 206461.01372199968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4757190.217391305,
            "unit": "ns",
            "range": "± 263810.9779767535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274503.50877193,
            "unit": "ns",
            "range": "± 184896.18995235473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7243647.333333333,
            "unit": "ns",
            "range": "± 363980.8923457284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306125.3521126761,
            "unit": "ns",
            "range": "± 14840.87712376923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293007.44680851063,
            "unit": "ns",
            "range": "± 17568.448254079813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263514.1304347826,
            "unit": "ns",
            "range": "± 16420.006434939638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4735386.206896552,
            "unit": "ns",
            "range": "± 136617.99380582006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4345860.655737705,
            "unit": "ns",
            "range": "± 195661.23553963413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22113.043478260868,
            "unit": "ns",
            "range": "± 2437.3114980954338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98506.18556701031,
            "unit": "ns",
            "range": "± 7216.471529785604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83609.41176470589,
            "unit": "ns",
            "range": "± 5226.526287201886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108395.78947368421,
            "unit": "ns",
            "range": "± 15222.616962574133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5812.765957446809,
            "unit": "ns",
            "range": "± 837.7175907424864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21648.936170212764,
            "unit": "ns",
            "range": "± 2637.355496968"
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
          "id": "62a1be961306950e971ae328b67694acede0a962",
          "message": "fix: Revive round add on HeightVoteSet",
          "timestamp": "2023-07-03T20:32:40+09:00",
          "tree_id": "be74ad715c46d42912f0ac2fb5aa99117786d0d7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62a1be961306950e971ae328b67694acede0a962"
        },
        "date": 1688384990274,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672166,
            "unit": "ns",
            "range": "± 44175.34832913036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2518310,
            "unit": "ns",
            "range": "± 88115.7595264495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877119.7916666667,
            "unit": "ns",
            "range": "± 119509.28580508023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5182113.402061855,
            "unit": "ns",
            "range": "± 326864.79608957644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54158.333333333336,
            "unit": "ns",
            "range": "± 6788.731633595664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689311.111111111,
            "unit": "ns",
            "range": "± 252486.86050992584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20636900,
            "unit": "ns",
            "range": "± 214203.18791812068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51599100,
            "unit": "ns",
            "range": "± 360917.248133142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104227464.28571428,
            "unit": "ns",
            "range": "± 1431348.4898499053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206399892.85714287,
            "unit": "ns",
            "range": "± 1174574.4725148405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984932.32421875,
            "unit": "ns",
            "range": "± 129264.9525172558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537159.014423077,
            "unit": "ns",
            "range": "± 4312.3272263907775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168467.0963541667,
            "unit": "ns",
            "range": "± 5361.768350788183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720337.2916666665,
            "unit": "ns",
            "range": "± 24010.409324329798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828006.8659855769,
            "unit": "ns",
            "range": "± 4921.548851612338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763878.5435267857,
            "unit": "ns",
            "range": "± 5265.812685601977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3375868.4210526315,
            "unit": "ns",
            "range": "± 71346.44001577077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3680173.3333333335,
            "unit": "ns",
            "range": "± 37230.392090845555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4124207.272727273,
            "unit": "ns",
            "range": "± 172435.97722756187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3908379.5918367347,
            "unit": "ns",
            "range": "± 148330.75369422417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6420896.666666667,
            "unit": "ns",
            "range": "± 191440.72186581872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282735.56701030926,
            "unit": "ns",
            "range": "± 19498.146224335454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288480.55555555556,
            "unit": "ns",
            "range": "± 9413.571341251172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262175,
            "unit": "ns",
            "range": "± 15098.999618308631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208223.076923077,
            "unit": "ns",
            "range": "± 40599.63369798128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774061.5384615385,
            "unit": "ns",
            "range": "± 52792.40062833442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26940,
            "unit": "ns",
            "range": "± 4450.059584211239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109391,
            "unit": "ns",
            "range": "± 16047.625426155168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113327.27272727272,
            "unit": "ns",
            "range": "± 11512.804036020054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116110,
            "unit": "ns",
            "range": "± 11777.91734894806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8669.69696969697,
            "unit": "ns",
            "range": "± 2436.602458319511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27322.916666666668,
            "unit": "ns",
            "range": "± 2441.5473595185354"
          }
        ]
      }
    ]
  }
}