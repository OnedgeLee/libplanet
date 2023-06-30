window.BENCHMARK_DATA = {
  "lastUpdate": 1688102220962,
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
          "id": "8feecd709e10b3ca3c0133cd3ce2021a798176b7",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T12:36:31+09:00",
          "tree_id": "528ad73d036b4904214184f6c8cd11bb6f601dd3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8feecd709e10b3ca3c0133cd3ce2021a798176b7"
        },
        "date": 1687757406483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3663140.153846154,
            "unit": "ns",
            "range": "± 51080.21210776594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3708447.1463414636,
            "unit": "ns",
            "range": "± 130986.17322003133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4672751.933333334,
            "unit": "ns",
            "range": "± 138411.64331926787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4511450.5,
            "unit": "ns",
            "range": "± 179202.86957435607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7564610.451219512,
            "unit": "ns",
            "range": "± 401034.2975478316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8141148.866666666,
            "unit": "ns",
            "range": "± 75071.12196526577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22582636.2,
            "unit": "ns",
            "range": "± 250950.40857428385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56601909.46666667,
            "unit": "ns",
            "range": "± 560692.211221714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112823951.86666666,
            "unit": "ns",
            "range": "± 1391275.4002009844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224781032.4,
            "unit": "ns",
            "range": "± 2634568.517092174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297562.77966101695,
            "unit": "ns",
            "range": "± 12466.75813716676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288674.54545454547,
            "unit": "ns",
            "range": "± 9019.143872518158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260137.63636363635,
            "unit": "ns",
            "range": "± 8113.377213043676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4625987.6,
            "unit": "ns",
            "range": "± 68427.77422613464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4280848.842105263,
            "unit": "ns",
            "range": "± 90951.41057501415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22062.715909090908,
            "unit": "ns",
            "range": "± 2146.8161132504592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94020.40425531915,
            "unit": "ns",
            "range": "± 5649.364442927536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76756.05,
            "unit": "ns",
            "range": "± 1746.1625738202404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101682.94117647059,
            "unit": "ns",
            "range": "± 7992.587149461476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5869.489795918367,
            "unit": "ns",
            "range": "± 1075.5625930866975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20176.82978723404,
            "unit": "ns",
            "range": "± 1776.1815915004017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51083.90425531915,
            "unit": "ns",
            "range": "± 7618.973737892221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6542984.417708334,
            "unit": "ns",
            "range": "± 88004.46844675667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920738.184765625,
            "unit": "ns",
            "range": "± 9970.363103378546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396086.7618489584,
            "unit": "ns",
            "range": "± 5643.920206683265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2712700.0919471155,
            "unit": "ns",
            "range": "± 7295.859489148339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847849.3775390625,
            "unit": "ns",
            "range": "± 2305.3006902180687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768162.1583984375,
            "unit": "ns",
            "range": "± 1070.6545464628637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1643558.5157894737,
            "unit": "ns",
            "range": "± 97358.28201652828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3169017.419354839,
            "unit": "ns",
            "range": "± 96776.17620805038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2597339.5730337077,
            "unit": "ns",
            "range": "± 143528.49450496264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6085413.315789473,
            "unit": "ns",
            "range": "± 127569.10772076645"
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
          "id": "3fb0b1f7c1b398a57f499c5b1643202c2025ddfb",
          "message": "Reimplement bootstrap",
          "timestamp": "2023-06-30T13:57:27+09:00",
          "tree_id": "81b607613c4a979b84c2741adffad46e2b329ff3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3fb0b1f7c1b398a57f499c5b1643202c2025ddfb"
        },
        "date": 1688102013088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7916805.230769231,
            "unit": "ns",
            "range": "± 17219.221005191874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20259189,
            "unit": "ns",
            "range": "± 75990.56006975002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52160641,
            "unit": "ns",
            "range": "± 228976.1381367063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103085687.23076923,
            "unit": "ns",
            "range": "± 211019.38591953815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204634872.26666668,
            "unit": "ns",
            "range": "± 899192.9410770421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47660.93548387097,
            "unit": "ns",
            "range": "± 2781.76576627169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291512.8510638298,
            "unit": "ns",
            "range": "± 10870.395412948765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282244.61666666664,
            "unit": "ns",
            "range": "± 12013.411021686918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238298.15,
            "unit": "ns",
            "range": "± 5237.853128655711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4315269.214285715,
            "unit": "ns",
            "range": "± 32845.53874677555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3889386.5714285714,
            "unit": "ns",
            "range": "± 33842.56972356717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18573.854166666668,
            "unit": "ns",
            "range": "± 1685.687690242498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92274.16842105263,
            "unit": "ns",
            "range": "± 5951.245947953647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77588.31746031746,
            "unit": "ns",
            "range": "± 3539.6086845199334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92304.6914893617,
            "unit": "ns",
            "range": "± 9936.021785669713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5188.6082474226805,
            "unit": "ns",
            "range": "± 708.5799848508786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18478.979166666668,
            "unit": "ns",
            "range": "± 2127.5545585393115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442941.1649484537,
            "unit": "ns",
            "range": "± 100425.13824244494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2646560.588235294,
            "unit": "ns",
            "range": "± 53586.90133915519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2483605.5384615385,
            "unit": "ns",
            "range": "± 35423.11581113709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5527573.021276596,
            "unit": "ns",
            "range": "± 191567.09231828453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5992194.216947115,
            "unit": "ns",
            "range": "± 12981.629217400376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939955.9241286058,
            "unit": "ns",
            "range": "± 3410.483075812162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341724.376674107,
            "unit": "ns",
            "range": "± 848.1673330053289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601795.160456731,
            "unit": "ns",
            "range": "± 1963.966024359022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806615.9636579241,
            "unit": "ns",
            "range": "± 475.0912845792948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728754.3085186298,
            "unit": "ns",
            "range": "± 401.9671585915221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3391711.5714285714,
            "unit": "ns",
            "range": "± 38842.597242865064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510264.5789473685,
            "unit": "ns",
            "range": "± 76445.12568743947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4412277.521739131,
            "unit": "ns",
            "range": "± 111230.92366492233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4348891.416666667,
            "unit": "ns",
            "range": "± 96976.29525386235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6960700.692307692,
            "unit": "ns",
            "range": "± 184666.5508466044"
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
          "id": "94ebd880e808f7ef1fa9095af2f0d7f6a995352b",
          "message": "Reimplement bootstrap",
          "timestamp": "2023-06-30T14:03:14+09:00",
          "tree_id": "757a5ff44e0ee1b09d1bf804e2c22aa0733c6208",
          "url": "https://github.com/OnedgeLee/libplanet/commit/94ebd880e808f7ef1fa9095af2f0d7f6a995352b"
        },
        "date": 1688102207752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7841102.4,
            "unit": "ns",
            "range": "± 72981.51096270891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20029302.92857143,
            "unit": "ns",
            "range": "± 73197.3678009975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51088550,
            "unit": "ns",
            "range": "± 319149.65591888526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105642379.26666667,
            "unit": "ns",
            "range": "± 434556.09491237754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206190058.58333334,
            "unit": "ns",
            "range": "± 350611.80259511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49712.978494623654,
            "unit": "ns",
            "range": "± 3811.355376225145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288804.6551724138,
            "unit": "ns",
            "range": "± 12462.965796326785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280183.6666666667,
            "unit": "ns",
            "range": "± 11722.815579844617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253228,
            "unit": "ns",
            "range": "± 8597.635055964842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4290971,
            "unit": "ns",
            "range": "± 33649.99540437243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909777.6923076925,
            "unit": "ns",
            "range": "± 17403.8964142354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20950.612903225807,
            "unit": "ns",
            "range": "± 1879.8565280144796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96350.9587628866,
            "unit": "ns",
            "range": "± 6120.38733952205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79256.525,
            "unit": "ns",
            "range": "± 4133.981156451821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98557.9898989899,
            "unit": "ns",
            "range": "± 13419.885306616969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5567.367346938776,
            "unit": "ns",
            "range": "± 853.3514448381286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20019.01052631579,
            "unit": "ns",
            "range": "± 1745.5245903832747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435727.8723404256,
            "unit": "ns",
            "range": "± 96875.18336157287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2692160.090909091,
            "unit": "ns",
            "range": "± 83066.27814483581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324465.252631579,
            "unit": "ns",
            "range": "± 135915.85618471768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5539317.592592592,
            "unit": "ns",
            "range": "± 129560.0676862516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6427468.189732143,
            "unit": "ns",
            "range": "± 11341.215888267381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881835.3565104166,
            "unit": "ns",
            "range": "± 9044.634746822536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381981.1294642857,
            "unit": "ns",
            "range": "± 420.7619676242627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567659.4067708333,
            "unit": "ns",
            "range": "± 1703.5378896719862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799522.2632533482,
            "unit": "ns",
            "range": "± 564.0686557999084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744635.7919224331,
            "unit": "ns",
            "range": "± 582.3430952037357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3349803.1785714286,
            "unit": "ns",
            "range": "± 89178.75717118154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503164.5625,
            "unit": "ns",
            "range": "± 58705.90538377861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4415160,
            "unit": "ns",
            "range": "± 37192.21595565808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402267.071428572,
            "unit": "ns",
            "range": "± 126251.47624804046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6991585.285714285,
            "unit": "ns",
            "range": "± 150080.53649495755"
          }
        ]
      }
    ]
  }
}