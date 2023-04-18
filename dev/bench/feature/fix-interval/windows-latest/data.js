window.BENCHMARK_DATA = {
  "lastUpdate": 1681790176029,
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
          "id": "d5b33e2cac34af99ca574a14bd6777522fd1cc7e",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-18T12:20:47+09:00",
          "tree_id": "9f1d5eeae45c727448900d4f5bbe30f53ef21681",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d5b33e2cac34af99ca574a14bd6777522fd1cc7e"
        },
        "date": 1681789444690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774071.7171717172,
            "unit": "ns",
            "range": "± 219637.75652168362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3504555.9139784947,
            "unit": "ns",
            "range": "± 240530.5225422073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2917200,
            "unit": "ns",
            "range": "± 312135.92499118566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7664376.041666667,
            "unit": "ns",
            "range": "± 538180.5399960894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67822.91666666667,
            "unit": "ns",
            "range": "± 14282.794059299142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9531878.94736842,
            "unit": "ns",
            "range": "± 781479.6607656333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25090006.976744186,
            "unit": "ns",
            "range": "± 910086.599855135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68028093.61702128,
            "unit": "ns",
            "range": "± 2652241.956173834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147548800,
            "unit": "ns",
            "range": "± 2071220.5090050353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270147213.3333333,
            "unit": "ns",
            "range": "± 4967780.72222348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6208276.5625,
            "unit": "ns",
            "range": "± 124062.66345942032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2047430.6803385417,
            "unit": "ns",
            "range": "± 52767.67377787416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522239.3098958333,
            "unit": "ns",
            "range": "± 24871.338873940644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3345774.796875,
            "unit": "ns",
            "range": "± 86953.14797540069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062643.59375,
            "unit": "ns",
            "range": "± 16681.46990123068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1034360.3459821428,
            "unit": "ns",
            "range": "± 33760.91182632185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4062746.7391304346,
            "unit": "ns",
            "range": "± 286264.30784380686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4282646.808510638,
            "unit": "ns",
            "range": "± 297621.21148758754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5190352.525252526,
            "unit": "ns",
            "range": "± 377335.83329773595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5369038.29787234,
            "unit": "ns",
            "range": "± 453540.4348505031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9655792.47311828,
            "unit": "ns",
            "range": "± 635022.7697452307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408603.09278350516,
            "unit": "ns",
            "range": "± 40141.77596762569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334720.21276595746,
            "unit": "ns",
            "range": "± 38966.02760714936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302821.1111111111,
            "unit": "ns",
            "range": "± 32626.202657912185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6898605.376344086,
            "unit": "ns",
            "range": "± 415963.15795407724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5103823.529411765,
            "unit": "ns",
            "range": "± 241080.53965901662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26932.98969072165,
            "unit": "ns",
            "range": "± 7614.743397535421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106068.47826086957,
            "unit": "ns",
            "range": "± 16472.013757258173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92459.13978494624,
            "unit": "ns",
            "range": "± 15305.64144756933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228160.82474226804,
            "unit": "ns",
            "range": "± 33573.14637691928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6886.021505376344,
            "unit": "ns",
            "range": "± 1209.3468770777508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28176.041666666668,
            "unit": "ns",
            "range": "± 8416.621960103605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6172e2a8bdee02c7ac6a081ca1d5e92fbc30c3bb",
          "message": "Merge branch 'main' into feature/fix-interval",
          "timestamp": "2023-04-18T12:36:20+09:00",
          "tree_id": "38ce6ca9de012e467aed468441c9ce5395a60125",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6172e2a8bdee02c7ac6a081ca1d5e92fbc30c3bb"
        },
        "date": 1681789957243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368516.2162162163,
            "unit": "ns",
            "range": "± 63850.45676674892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2666512.626262626,
            "unit": "ns",
            "range": "± 169806.4826446105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2274880.612244898,
            "unit": "ns",
            "range": "± 162146.12835287643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5513448.148148148,
            "unit": "ns",
            "range": "± 232324.86099047126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48368.085106382976,
            "unit": "ns",
            "range": "± 3994.6257651289066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7248800,
            "unit": "ns",
            "range": "± 202342.11318761788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19705533.333333332,
            "unit": "ns",
            "range": "± 261990.66686393527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49805920,
            "unit": "ns",
            "range": "± 499292.5841342214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99048353.33333333,
            "unit": "ns",
            "range": "± 1121913.9493782595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197143306.66666666,
            "unit": "ns",
            "range": "± 2205687.7756209755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4807099.84375,
            "unit": "ns",
            "range": "± 39946.259798539824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530251.6276041667,
            "unit": "ns",
            "range": "± 6900.730256979108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159859.2838541667,
            "unit": "ns",
            "range": "± 6158.014142972307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627767.34375,
            "unit": "ns",
            "range": "± 8540.23417948458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837088.515625,
            "unit": "ns",
            "range": "± 2720.4564320853106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764425.8203125,
            "unit": "ns",
            "range": "± 2132.2626802084574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3202203.846153846,
            "unit": "ns",
            "range": "± 84304.55020113318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3404386.8421052634,
            "unit": "ns",
            "range": "± 116231.21684012674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3989743.75,
            "unit": "ns",
            "range": "± 73807.6145010346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4361485.454545454,
            "unit": "ns",
            "range": "± 184583.71423906705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7073965.116279069,
            "unit": "ns",
            "range": "± 240416.03611410677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317858.9743589744,
            "unit": "ns",
            "range": "± 11008.243751812786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259784.375,
            "unit": "ns",
            "range": "± 10981.372666243535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215658.69565217392,
            "unit": "ns",
            "range": "± 7513.626911950091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5283021.428571428,
            "unit": "ns",
            "range": "± 60627.52838275858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3665213.3333333335,
            "unit": "ns",
            "range": "± 68345.08934879841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24179,
            "unit": "ns",
            "range": "± 3757.9893345223636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101037.75510204081,
            "unit": "ns",
            "range": "± 9017.27454773911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88373.4693877551,
            "unit": "ns",
            "range": "± 8187.462769512055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182732.63157894736,
            "unit": "ns",
            "range": "± 16237.174592452984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7718.75,
            "unit": "ns",
            "range": "± 1338.2087399127788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20803.125,
            "unit": "ns",
            "range": "± 2092.0628512748394"
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
          "id": "35aece0831a9d387d96ad36fef41e1c053124fc9",
          "message": "feat: fix block interval",
          "timestamp": "2023-04-18T12:37:41+09:00",
          "tree_id": "38ce6ca9de012e467aed468441c9ce5395a60125",
          "url": "https://github.com/OnedgeLee/libplanet/commit/35aece0831a9d387d96ad36fef41e1c053124fc9"
        },
        "date": 1681790141878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394502.0202020202,
            "unit": "ns",
            "range": "± 140441.07340061865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2569597.1428571427,
            "unit": "ns",
            "range": "± 124437.29457672045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291876,
            "unit": "ns",
            "range": "± 186705.89312952317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5531856.25,
            "unit": "ns",
            "range": "± 289150.7577716799"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49822.34042553192,
            "unit": "ns",
            "range": "± 3344.813164987064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7163147.05882353,
            "unit": "ns",
            "range": "± 144032.23214634572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19893906.666666668,
            "unit": "ns",
            "range": "± 338804.0783754079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49380878.571428575,
            "unit": "ns",
            "range": "± 588744.9626484765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100458213.33333333,
            "unit": "ns",
            "range": "± 1190617.748341871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201266140,
            "unit": "ns",
            "range": "± 2021813.6192890918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4847113.723958333,
            "unit": "ns",
            "range": "± 16356.46834165495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514843.75,
            "unit": "ns",
            "range": "± 4051.915075474739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163249.765625,
            "unit": "ns",
            "range": "± 3384.7732502451513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660871.953125,
            "unit": "ns",
            "range": "± 5742.263946967435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832707.8059895834,
            "unit": "ns",
            "range": "± 2526.95316313546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756654.8307291666,
            "unit": "ns",
            "range": "± 1244.7269061097359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3177406.0606060605,
            "unit": "ns",
            "range": "± 98799.45894143962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3358867.5,
            "unit": "ns",
            "range": "± 116816.33269082425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3989742.8571428573,
            "unit": "ns",
            "range": "± 67604.60514907721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4228918.181818182,
            "unit": "ns",
            "range": "± 140562.207155189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6846097.142857143,
            "unit": "ns",
            "range": "± 219481.87448372756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316508.3333333333,
            "unit": "ns",
            "range": "± 11820.606481422707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255180,
            "unit": "ns",
            "range": "± 7573.747762661085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211264.8148148148,
            "unit": "ns",
            "range": "± 5726.168251894354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5259728.571428572,
            "unit": "ns",
            "range": "± 48527.1443242206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3667073.3333333335,
            "unit": "ns",
            "range": "± 37697.46991636492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21270.70707070707,
            "unit": "ns",
            "range": "± 2403.4096751028665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94152.52525252526,
            "unit": "ns",
            "range": "± 6758.174844697248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90483,
            "unit": "ns",
            "range": "± 10586.307670808084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 186293.29896907217,
            "unit": "ns",
            "range": "± 20908.057195017023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6838.541666666667,
            "unit": "ns",
            "range": "± 1186.890656220935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20600,
            "unit": "ns",
            "range": "± 2160.546038313803"
          }
        ]
      }
    ]
  }
}