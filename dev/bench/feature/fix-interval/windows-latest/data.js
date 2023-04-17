window.BENCHMARK_DATA = {
  "lastUpdate": 1681718598482,
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
          "id": "62ebfebc569371c237daf2ddd79c573a2c4d6e1c",
          "message": "feature/fixed-interval",
          "timestamp": "2023-04-17T15:03:25+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62ebfebc569371c237daf2ddd79c573a2c4d6e1c"
        },
        "date": 1681712286048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375584.8484848484,
            "unit": "ns",
            "range": "± 143549.29208423485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2470170.1754385964,
            "unit": "ns",
            "range": "± 90909.20502840867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117016.326530612,
            "unit": "ns",
            "range": "± 143603.20883032703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5127392.105263158,
            "unit": "ns",
            "range": "± 167042.53808710887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42038.46153846154,
            "unit": "ns",
            "range": "± 2365.669706952592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6806078.571428572,
            "unit": "ns",
            "range": "± 37249.371261011365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17552586.666666668,
            "unit": "ns",
            "range": "± 178013.1731348099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45403950,
            "unit": "ns",
            "range": "± 255085.6138331117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89474700,
            "unit": "ns",
            "range": "± 598385.2557389046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179234403.33333334,
            "unit": "ns",
            "range": "± 752695.924059137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4859347.135416667,
            "unit": "ns",
            "range": "± 11331.480228432833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511580.2994791667,
            "unit": "ns",
            "range": "± 3547.636403383621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134287.5,
            "unit": "ns",
            "range": "± 1042.582360177212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631142.8385416665,
            "unit": "ns",
            "range": "± 8576.954518585455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794609.3889508928,
            "unit": "ns",
            "range": "± 5181.924465916903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736798.5201322115,
            "unit": "ns",
            "range": "± 782.7127824329633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2976606.25,
            "unit": "ns",
            "range": "± 82098.24931338415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3130419.0476190476,
            "unit": "ns",
            "range": "± 73753.14650269247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3955512.0689655175,
            "unit": "ns",
            "range": "± 113594.335918255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4022462.5,
            "unit": "ns",
            "range": "± 133079.00234591714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6751220,
            "unit": "ns",
            "range": "± 198549.70783851238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295865.71428571426,
            "unit": "ns",
            "range": "± 8466.888547788512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243711.53846153847,
            "unit": "ns",
            "range": "± 10010.203693176472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227561.33333333334,
            "unit": "ns",
            "range": "± 11434.571729217962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5268464.285714285,
            "unit": "ns",
            "range": "± 30986.792649148425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3691292.8571428573,
            "unit": "ns",
            "range": "± 25825.135766586733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17851.020408163266,
            "unit": "ns",
            "range": "± 1904.1595758498981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80381.05263157895,
            "unit": "ns",
            "range": "± 5652.137512007936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69585.10638297872,
            "unit": "ns",
            "range": "± 6052.511385745795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152033.67346938775,
            "unit": "ns",
            "range": "± 17900.14654019122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5057.731958762886,
            "unit": "ns",
            "range": "± 803.4865498182479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15122.105263157895,
            "unit": "ns",
            "range": "± 1430.3829979123375"
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
          "id": "34eb6f7bbf90b0ffa46fa0248fda866d86ecb5bb",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-17T16:10:27+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/34eb6f7bbf90b0ffa46fa0248fda866d86ecb5bb"
        },
        "date": 1681716506966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491961.855670103,
            "unit": "ns",
            "range": "± 212326.7511620253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2783053.06122449,
            "unit": "ns",
            "range": "± 274915.2158727621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2305108.510638298,
            "unit": "ns",
            "range": "± 218186.0987556977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6266427.472527472,
            "unit": "ns",
            "range": "± 576381.188309329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52390.425531914894,
            "unit": "ns",
            "range": "± 8640.916906108161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7451032.291666667,
            "unit": "ns",
            "range": "± 485949.74193131743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20142980.92783505,
            "unit": "ns",
            "range": "± 1721281.4288077664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50488457.14285714,
            "unit": "ns",
            "range": "± 1082766.0303922673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102275884.21052632,
            "unit": "ns",
            "range": "± 2226816.254023059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193919922.58064517,
            "unit": "ns",
            "range": "± 5884048.655005593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5398690.234375,
            "unit": "ns",
            "range": "± 74538.04074185519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1638052.2879464286,
            "unit": "ns",
            "range": "± 24395.934026203086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222032.8171502976,
            "unit": "ns",
            "range": "± 27956.55629796746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2825044.949776786,
            "unit": "ns",
            "range": "± 48816.14800523842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 897555.4268973215,
            "unit": "ns",
            "range": "± 19501.177407189964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829179.4759114584,
            "unit": "ns",
            "range": "± 9407.354250077986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3173301,
            "unit": "ns",
            "range": "± 254263.54874659504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374967.6767676766,
            "unit": "ns",
            "range": "± 277776.78706894035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4215827.551020408,
            "unit": "ns",
            "range": "± 296888.9006618615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4161133.3333333335,
            "unit": "ns",
            "range": "± 294196.11098601937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8008341.052631579,
            "unit": "ns",
            "range": "± 567589.0053916067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339327.6595744681,
            "unit": "ns",
            "range": "± 36877.96907457975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265052.57731958764,
            "unit": "ns",
            "range": "± 23020.21798325471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231232.98969072165,
            "unit": "ns",
            "range": "± 17142.93903264478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5615867.391304348,
            "unit": "ns",
            "range": "± 313581.47655987524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3985286.4583333335,
            "unit": "ns",
            "range": "± 259312.44459137734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21801.010101010103,
            "unit": "ns",
            "range": "± 6907.116929327833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84871.13402061856,
            "unit": "ns",
            "range": "± 12510.844951838175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75390.72164948453,
            "unit": "ns",
            "range": "± 10208.126689822375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 181867.02127659574,
            "unit": "ns",
            "range": "± 26059.25996150846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9832,
            "unit": "ns",
            "range": "± 5838.843804187347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19774.242424242424,
            "unit": "ns",
            "range": "± 6249.050391681415"
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
          "id": "26bdf88f1171fde5e838bceea614625c963d7697",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-17T16:47:59+09:00",
          "tree_id": "2e0bd6d543c40cd08a4ebbe990e282788e198c86",
          "url": "https://github.com/OnedgeLee/libplanet/commit/26bdf88f1171fde5e838bceea614625c963d7697"
        },
        "date": 1681718564666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399079.797979798,
            "unit": "ns",
            "range": "± 151667.94892320203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2446673.529411765,
            "unit": "ns",
            "range": "± 75077.33814086173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2284051.515151515,
            "unit": "ns",
            "range": "± 71461.74729012421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5582083.5051546395,
            "unit": "ns",
            "range": "± 339302.81235952926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48123.15789473684,
            "unit": "ns",
            "range": "± 3497.581311134242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6806738.461538462,
            "unit": "ns",
            "range": "± 85014.68048187852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19064286.666666668,
            "unit": "ns",
            "range": "± 183689.51236361032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47469006.666666664,
            "unit": "ns",
            "range": "± 689295.157043635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97621807.14285715,
            "unit": "ns",
            "range": "± 1631318.999820643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195018783.33333334,
            "unit": "ns",
            "range": "± 4102685.290506838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4765628.984375,
            "unit": "ns",
            "range": "± 27033.19530830584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516123.8802083333,
            "unit": "ns",
            "range": "± 5168.382767269128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171401.4453125,
            "unit": "ns",
            "range": "± 4465.353346424317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642097.03125,
            "unit": "ns",
            "range": "± 8782.547346881554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830377.9361979166,
            "unit": "ns",
            "range": "± 2338.8005384072303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755479.2903645834,
            "unit": "ns",
            "range": "± 2437.223778878687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217973.6842105263,
            "unit": "ns",
            "range": "± 51669.75089832287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256091.304347826,
            "unit": "ns",
            "range": "± 118803.39468791278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3911542.8571428573,
            "unit": "ns",
            "range": "± 89462.64902979664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4156800,
            "unit": "ns",
            "range": "± 144807.38931421973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6843158.333333333,
            "unit": "ns",
            "range": "± 171383.6046053888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307572,
            "unit": "ns",
            "range": "± 12436.927240426932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252937.83783783784,
            "unit": "ns",
            "range": "± 8449.271873670252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209128.57142857142,
            "unit": "ns",
            "range": "± 3478.3790591482234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5244560,
            "unit": "ns",
            "range": "± 69625.62951754394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3597878.5714285714,
            "unit": "ns",
            "range": "± 44962.41470677188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20851.546391752578,
            "unit": "ns",
            "range": "± 2744.3925178618715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91440.206185567,
            "unit": "ns",
            "range": "± 8528.587463566952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84607.14285714286,
            "unit": "ns",
            "range": "± 7715.070938599907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185301.03092783506,
            "unit": "ns",
            "range": "± 20437.325406213262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6931.313131313132,
            "unit": "ns",
            "range": "± 1244.7150698171413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20475.51020408163,
            "unit": "ns",
            "range": "± 2270.0225360836826"
          }
        ]
      }
    ]
  }
}