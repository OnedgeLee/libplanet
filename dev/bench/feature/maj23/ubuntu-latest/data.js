window.BENCHMARK_DATA = {
  "lastUpdate": 1687487976928,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a1c360c93a287f9a71a45026cb78a3dfecc5b1c0",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T14:15:49+09:00",
          "tree_id": "865718399b7119b0a6f7a9ed2dde5147e509ab27",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a1c360c93a287f9a71a45026cb78a3dfecc5b1c0"
        },
        "date": 1687411923309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281282.575,
            "unit": "ns",
            "range": "± 115704.83340742679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3458837.8666666667,
            "unit": "ns",
            "range": "± 131375.54154003083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4328982.785714285,
            "unit": "ns",
            "range": "± 56163.868830659034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4277923.076923077,
            "unit": "ns",
            "range": "± 68219.19011717736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6965090.303030303,
            "unit": "ns",
            "range": "± 213847.5351828501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6404609.420200893,
            "unit": "ns",
            "range": "± 11959.511058671687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008885.8328683036,
            "unit": "ns",
            "range": "± 2842.6415473176917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353799.318359375,
            "unit": "ns",
            "range": "± 866.288482559185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567895.350167411,
            "unit": "ns",
            "range": "± 903.4968327146663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824952.1220052083,
            "unit": "ns",
            "range": "± 507.06817445835395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742040.1028180803,
            "unit": "ns",
            "range": "± 314.65454919674113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278403.64705882355,
            "unit": "ns",
            "range": "± 7189.675939434405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268306.375,
            "unit": "ns",
            "range": "± 9071.771315049404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231027.25,
            "unit": "ns",
            "range": "± 6003.983708302781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193366.6153846155,
            "unit": "ns",
            "range": "± 20073.75858153484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3841934,
            "unit": "ns",
            "range": "± 21246.80801365774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17001.915789473685,
            "unit": "ns",
            "range": "± 1225.662952725671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86331.56989247311,
            "unit": "ns",
            "range": "± 5053.780305693364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71416.16666666667,
            "unit": "ns",
            "range": "± 1060.9973724012816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89528.89795918367,
            "unit": "ns",
            "range": "± 10315.620838730425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4547.918367346939,
            "unit": "ns",
            "range": "± 699.783319534224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16568.978723404256,
            "unit": "ns",
            "range": "± 1541.406835264624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360138.3578947368,
            "unit": "ns",
            "range": "± 89151.23033493284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604605.413043478,
            "unit": "ns",
            "range": "± 94060.99079771499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2126493.674698795,
            "unit": "ns",
            "range": "± 111052.227734116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5342072.3125,
            "unit": "ns",
            "range": "± 162793.43251166938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45672.986666666664,
            "unit": "ns",
            "range": "± 2297.7612399977584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7706072.142857143,
            "unit": "ns",
            "range": "± 71623.47934737724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19706181.866666667,
            "unit": "ns",
            "range": "± 156581.7005376639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51045215.53333333,
            "unit": "ns",
            "range": "± 365342.9175871948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100651683.93333334,
            "unit": "ns",
            "range": "± 981813.5244841898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202875587.5,
            "unit": "ns",
            "range": "± 1561099.1423162152"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "a603f8292ce12f811b6776bdffc93849a807132d",
          "message": "2",
          "timestamp": "2023-06-22T22:24:05+09:00",
          "tree_id": "3cfbe3d5a388b793eb9f93dea953cd8ff984640a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a603f8292ce12f811b6776bdffc93849a807132d"
        },
        "date": 1687487619404,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3125629.9655172415,
            "unit": "ns",
            "range": "± 89266.10999041123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3271983.095238095,
            "unit": "ns",
            "range": "± 70227.43505063014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4142808.875,
            "unit": "ns",
            "range": "± 88168.17579603815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4092045.5714285714,
            "unit": "ns",
            "range": "± 59404.27203973994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6623318.19047619,
            "unit": "ns",
            "range": "± 152809.15924859315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7397648.333333333,
            "unit": "ns",
            "range": "± 5443.671610784453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19146423.214285713,
            "unit": "ns",
            "range": "± 56030.20213198011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49292264.14285714,
            "unit": "ns",
            "range": "± 223516.78089604786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96817422.3076923,
            "unit": "ns",
            "range": "± 976223.9822597394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193106661.4,
            "unit": "ns",
            "range": "± 859409.0051453798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269324.6964285714,
            "unit": "ns",
            "range": "± 11157.576385446704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256594.56666666668,
            "unit": "ns",
            "range": "± 7010.099732102461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223848.33333333334,
            "unit": "ns",
            "range": "± 915.0361476549173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4087653.923076923,
            "unit": "ns",
            "range": "± 33330.86870920493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762089.7333333334,
            "unit": "ns",
            "range": "± 39758.87426810103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14623.116279069767,
            "unit": "ns",
            "range": "± 781.023889347742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81230.44594594595,
            "unit": "ns",
            "range": "± 4006.9368827035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69316.25,
            "unit": "ns",
            "range": "± 983.3817463685754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77986.39130434782,
            "unit": "ns",
            "range": "± 6983.953518337388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4024.9791666666665,
            "unit": "ns",
            "range": "± 437.92936174364127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14274.515789473684,
            "unit": "ns",
            "range": "± 962.8974654673049"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44659.329268292684,
            "unit": "ns",
            "range": "± 1993.311030810933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6205929.301897322,
            "unit": "ns",
            "range": "± 16934.54350765959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007214.71875,
            "unit": "ns",
            "range": "± 6663.852580208014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354429.753515625,
            "unit": "ns",
            "range": "± 4021.940759553831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588496.9739583335,
            "unit": "ns",
            "range": "± 6062.603484903702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800601.9935546875,
            "unit": "ns",
            "range": "± 1302.4021854509251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738214.2701822916,
            "unit": "ns",
            "range": "± 1238.1754398652843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300130.6804123712,
            "unit": "ns",
            "range": "± 88208.52936986716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495363.6296296297,
            "unit": "ns",
            "range": "± 69814.45973829388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096949.2164948455,
            "unit": "ns",
            "range": "± 122350.65627269389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5088757.619047619,
            "unit": "ns",
            "range": "± 119927.49510036311"
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
          "id": "8308179dec6423a57f5569be95d024754ad2d009",
          "message": "fix",
          "timestamp": "2023-06-23T11:23:25+09:00",
          "tree_id": "864be44eb230aa65148abf73ba580c64de5e2e4d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8308179dec6423a57f5569be95d024754ad2d009"
        },
        "date": 1687487962749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4361857.56,
            "unit": "ns",
            "range": "± 81553.57639566356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4614825.266666667,
            "unit": "ns",
            "range": "± 58535.8356240818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5700310,
            "unit": "ns",
            "range": "± 75862.70833928505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5663072.263157895,
            "unit": "ns",
            "range": "± 183551.60552673572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8809296.142857144,
            "unit": "ns",
            "range": "± 269656.0443936097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10822018.779661017,
            "unit": "ns",
            "range": "± 478983.1649260995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27392210.866666667,
            "unit": "ns",
            "range": "± 195198.88959537313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69251662.46666667,
            "unit": "ns",
            "range": "± 374390.4817038082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139476612.13333333,
            "unit": "ns",
            "range": "± 787185.1907780448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273434655,
            "unit": "ns",
            "range": "± 1416306.2126144073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352450.4318181818,
            "unit": "ns",
            "range": "± 13121.387994500423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341702.3023255814,
            "unit": "ns",
            "range": "± 11368.648308343607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302361.4285714286,
            "unit": "ns",
            "range": "± 7009.372821953677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5510539.571428572,
            "unit": "ns",
            "range": "± 92195.59127680196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5052460.6,
            "unit": "ns",
            "range": "± 37649.81339699536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25438.263157894737,
            "unit": "ns",
            "range": "± 1840.8761455357846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113132.86046511628,
            "unit": "ns",
            "range": "± 6143.083669341991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99809.8,
            "unit": "ns",
            "range": "± 5888.75964904795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119654.26804123711,
            "unit": "ns",
            "range": "± 13725.327649030416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7567.103092783505,
            "unit": "ns",
            "range": "± 926.905891084869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23930.074468085106,
            "unit": "ns",
            "range": "± 2176.720445445552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57037.75,
            "unit": "ns",
            "range": "± 3061.3167214904615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7254072.765024038,
            "unit": "ns",
            "range": "± 15960.154099773086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2301153.1393229165,
            "unit": "ns",
            "range": "± 1626.4992080630036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1670602.8,
            "unit": "ns",
            "range": "± 4215.818186288693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3153118.5889423075,
            "unit": "ns",
            "range": "± 3178.385218142621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010991.08359375,
            "unit": "ns",
            "range": "± 1212.0821986944231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929996.4354817708,
            "unit": "ns",
            "range": "± 514.1600869223338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792669.4065934066,
            "unit": "ns",
            "range": "± 97890.96002423398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3453480.4444444445,
            "unit": "ns",
            "range": "± 71972.4474595679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2864517.6470588236,
            "unit": "ns",
            "range": "± 137219.57501884046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6908243.653846154,
            "unit": "ns",
            "range": "± 183242.83999675236"
          }
        ]
      }
    ]
  }
}