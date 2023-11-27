window.BENCHMARK_DATA = {
  "lastUpdate": 1701044747182,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "95fc6b0769b298364917360c5cec98ffd7e3b245",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:06:59+09:00",
          "tree_id": "c9fc9a8bfa29a6b3372b78366db598670ca40ec6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/95fc6b0769b298364917360c5cec98ffd7e3b245"
        },
        "date": 1700450765272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9276432.88,
            "unit": "ns",
            "range": "± 614648.4171612943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22714587.387323942,
            "unit": "ns",
            "range": "± 1052589.1200111622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54043910.14285714,
            "unit": "ns",
            "range": "± 660740.6044332848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107083494.4516129,
            "unit": "ns",
            "range": "± 4870169.620619197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220529776.2857143,
            "unit": "ns",
            "range": "± 2148212.7704687063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74971.86363636363,
            "unit": "ns",
            "range": "± 4567.357849820581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329578.4175824176,
            "unit": "ns",
            "range": "± 30871.23096349521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336386.5,
            "unit": "ns",
            "range": "± 39101.769118045275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315057.7978723404,
            "unit": "ns",
            "range": "± 23138.619163468644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168083.753968254,
            "unit": "ns",
            "range": "± 190539.74768264685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817523.2916666665,
            "unit": "ns",
            "range": "± 150706.85581250724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23130.01052631579,
            "unit": "ns",
            "range": "± 3581.5030260241206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94732.3125,
            "unit": "ns",
            "range": "± 14454.473175647956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109725.23913043478,
            "unit": "ns",
            "range": "± 11902.548818708905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134877.27083333334,
            "unit": "ns",
            "range": "± 34151.3986306731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8324.84090909091,
            "unit": "ns",
            "range": "± 1011.9111074307331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27428.526315789473,
            "unit": "ns",
            "range": "± 8577.374352555365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569280.6546391752,
            "unit": "ns",
            "range": "± 186774.30807725203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2857701.9420289854,
            "unit": "ns",
            "range": "± 131188.03947005453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504301.163043478,
            "unit": "ns",
            "range": "± 216340.02785365534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13099677.868686868,
            "unit": "ns",
            "range": "± 3270985.106055244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549753.7842105264,
            "unit": "ns",
            "range": "± 275279.6324120398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396611.315217391,
            "unit": "ns",
            "range": "± 208378.73905505397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533788.958762887,
            "unit": "ns",
            "range": "± 368266.02817632945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4523089.979381443,
            "unit": "ns",
            "range": "± 375185.2748916742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16125414.074468086,
            "unit": "ns",
            "range": "± 1693418.2077078915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982650.45859375,
            "unit": "ns",
            "range": "± 84241.38186232916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055997.1424479166,
            "unit": "ns",
            "range": "± 31696.511444059364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154016.7433810765,
            "unit": "ns",
            "range": "± 23524.047910902373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2820196.457782452,
            "unit": "ns",
            "range": "± 75496.04762996236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854408.5402994792,
            "unit": "ns",
            "range": "± 8925.148983105102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780398.4328613281,
            "unit": "ns",
            "range": "± 15272.929560735416"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "b2d054b77502ba95398e99b7f91b3369a8adf951",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:42:56+09:00",
          "tree_id": "2122fe1694da7bf180ea40e3269d0f3dc25f5d63",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b2d054b77502ba95398e99b7f91b3369a8adf951"
        },
        "date": 1700453017722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9857814.15625,
            "unit": "ns",
            "range": "± 1866836.7209871048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21876825.568181816,
            "unit": "ns",
            "range": "± 1888460.9965315328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69680450.97802198,
            "unit": "ns",
            "range": "± 13479664.618393874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113965663.60227273,
            "unit": "ns",
            "range": "± 8868886.178330392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250543780.8152174,
            "unit": "ns",
            "range": "± 33448621.94315078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58823.322916666664,
            "unit": "ns",
            "range": "± 16588.57667191162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291289.9301075269,
            "unit": "ns",
            "range": "± 60602.23100452689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260095.2659574468,
            "unit": "ns",
            "range": "± 44983.03258665368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257925.6219512195,
            "unit": "ns",
            "range": "± 25364.418187392832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3976882.1011235956,
            "unit": "ns",
            "range": "± 265975.476189238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3575599.6551724137,
            "unit": "ns",
            "range": "± 154252.02941504435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19550.616279069767,
            "unit": "ns",
            "range": "± 4066.3289106821553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79041.21875,
            "unit": "ns",
            "range": "± 19876.57849181087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81433.42391304347,
            "unit": "ns",
            "range": "± 22103.43924371817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85101.57291666667,
            "unit": "ns",
            "range": "± 21272.13686009535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5070.145833333333,
            "unit": "ns",
            "range": "± 1038.1436162605137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16991.967032967033,
            "unit": "ns",
            "range": "± 3177.3513338787548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1816599.8125,
            "unit": "ns",
            "range": "± 577756.9314194574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3260846.8021978023,
            "unit": "ns",
            "range": "± 869688.1986869166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713173.5054945056,
            "unit": "ns",
            "range": "± 985935.9907592421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13383042.927083334,
            "unit": "ns",
            "range": "± 4292019.64074071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3148390,
            "unit": "ns",
            "range": "± 279139.26992052904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3395102.1354166665,
            "unit": "ns",
            "range": "± 299962.87378418294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109227.7976190476,
            "unit": "ns",
            "range": "± 393523.21682489273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4606406.010416667,
            "unit": "ns",
            "range": "± 882426.4381606578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15680948.352631578,
            "unit": "ns",
            "range": "± 4166492.692042155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804832.553125,
            "unit": "ns",
            "range": "± 143606.10592362273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421963.6781914893,
            "unit": "ns",
            "range": "± 53837.362558731715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 942812.6183087385,
            "unit": "ns",
            "range": "± 26124.925692634904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2160190.9638227983,
            "unit": "ns",
            "range": "± 118712.93418479826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 657981.3385275136,
            "unit": "ns",
            "range": "± 16622.73153575427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596826.7840860445,
            "unit": "ns",
            "range": "± 29405.413000238223"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "9e6284a235a84f88bb3b536146a1ca39f02256c6",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-27T09:05:46+09:00",
          "tree_id": "30446fafd3ccea90d584846b5fb459fff2314d71",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9e6284a235a84f88bb3b536146a1ca39f02256c6"
        },
        "date": 1701044719665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8506239.1,
            "unit": "ns",
            "range": "± 425753.89901422017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21581669.541666668,
            "unit": "ns",
            "range": "± 845536.5524689158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51300654.65957447,
            "unit": "ns",
            "range": "± 1971306.7245938482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97746605,
            "unit": "ns",
            "range": "± 699841.7605176627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216648817.8,
            "unit": "ns",
            "range": "± 4731548.170736994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73354.3956043956,
            "unit": "ns",
            "range": "± 7605.296093116984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322572.1666666667,
            "unit": "ns",
            "range": "± 40804.82507607114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279245.08235294116,
            "unit": "ns",
            "range": "± 14949.469335391272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279305.02127659577,
            "unit": "ns",
            "range": "± 26261.33813384588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4437128.661616161,
            "unit": "ns",
            "range": "± 402448.330952082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835047.752631579,
            "unit": "ns",
            "range": "± 234240.79753676325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19667.715789473685,
            "unit": "ns",
            "range": "± 3775.8383531911018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87757.57575757576,
            "unit": "ns",
            "range": "± 17070.549224866492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88434,
            "unit": "ns",
            "range": "± 8265.186390503692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103675.65957446808,
            "unit": "ns",
            "range": "± 14529.64686910624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6707.855670103093,
            "unit": "ns",
            "range": "± 1227.1056392117277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20651.466666666667,
            "unit": "ns",
            "range": "± 4730.5001147822695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1530610.7575757576,
            "unit": "ns",
            "range": "± 183218.2822733745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2840169.644444444,
            "unit": "ns",
            "range": "± 161993.1174073098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2553357.5263157897,
            "unit": "ns",
            "range": "± 279590.60730714764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13789927.673469387,
            "unit": "ns",
            "range": "± 3639030.9436326637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3446449.602040816,
            "unit": "ns",
            "range": "± 256215.78706140383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526915.6649484537,
            "unit": "ns",
            "range": "± 279403.73204258864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4411676.422222222,
            "unit": "ns",
            "range": "± 245615.54550145444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4448747.5360824745,
            "unit": "ns",
            "range": "± 374562.03227105405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15833220.4375,
            "unit": "ns",
            "range": "± 1939999.5659299442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5812940.916666667,
            "unit": "ns",
            "range": "± 150500.80196726022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854659.8997395833,
            "unit": "ns",
            "range": "± 20355.352641667014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121506.8821726833,
            "unit": "ns",
            "range": "± 32331.81278105219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2785863.7282924107,
            "unit": "ns",
            "range": "± 131531.15613187087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827352.0059696321,
            "unit": "ns",
            "range": "± 37264.272338687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766322.8746279762,
            "unit": "ns",
            "range": "± 17642.759542009106"
          }
        ]
      }
    ]
  }
}