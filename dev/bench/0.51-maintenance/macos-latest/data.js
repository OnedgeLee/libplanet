window.BENCHMARK_DATA = {
  "lastUpdate": 1678688894077,
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
          "id": "6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T13:44:20+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05"
        },
        "date": 1678683877514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8392055.07142857,
            "unit": "ns",
            "range": "± 299390.6704467521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20992432.852941178,
            "unit": "ns",
            "range": "± 997477.9231447541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51046697.23809524,
            "unit": "ns",
            "range": "± 1132060.2898011177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 119614131.8478261,
            "unit": "ns",
            "range": "± 4566327.4965881435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203945876.46666667,
            "unit": "ns",
            "range": "± 3080223.6724636196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67542.14948453609,
            "unit": "ns",
            "range": "± 12065.646566320394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203721.91578947369,
            "unit": "ns",
            "range": "± 20484.294112580632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201472.71348314607,
            "unit": "ns",
            "range": "± 13436.014907763176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167526.84210526315,
            "unit": "ns",
            "range": "± 3631.1243784070502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12434013.65116279,
            "unit": "ns",
            "range": "± 451211.3921178178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10397349.279069768,
            "unit": "ns",
            "range": "± 885976.7138808665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23098.630434782608,
            "unit": "ns",
            "range": "± 4283.363788593862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61800.717391304344,
            "unit": "ns",
            "range": "± 8274.722091978341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56057.666666666664,
            "unit": "ns",
            "range": "± 4575.208632290499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123973.0306122449,
            "unit": "ns",
            "range": "± 19414.53958514538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6970.278350515464,
            "unit": "ns",
            "range": "± 907.8096893791034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17646.916666666668,
            "unit": "ns",
            "range": "± 2675.4881174594416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1762428.5454545454,
            "unit": "ns",
            "range": "± 40251.374373136714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747096.361111111,
            "unit": "ns",
            "range": "± 90460.16252098497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2550275.3711340204,
            "unit": "ns",
            "range": "± 216998.49433383747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5862223.96875,
            "unit": "ns",
            "range": "± 177390.52450664024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228341.34375,
            "unit": "ns",
            "range": "± 147873.25980097172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5083819.095959596,
            "unit": "ns",
            "range": "± 297967.36721044616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24570324.933333334,
            "unit": "ns",
            "range": "± 1238322.6629213637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6185873.74590164,
            "unit": "ns",
            "range": "± 271111.44549991837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27934372.275862068,
            "unit": "ns",
            "range": "± 810310.005495908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6754301.480815972,
            "unit": "ns",
            "range": "± 256575.7751185597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2184606.726953125,
            "unit": "ns",
            "range": "± 49866.37555030613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336481.566343246,
            "unit": "ns",
            "range": "± 40506.66787779476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123082.9709725217,
            "unit": "ns",
            "range": "± 135753.11138864982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012644.7243303572,
            "unit": "ns",
            "range": "± 23972.76596463485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785113.2844551282,
            "unit": "ns",
            "range": "± 40406.47122336573"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "9608377c93aab05295d887f047f8ad83a37964f9",
          "message": "Merge pull request #2918 from OnedgeLee/0.51-maintenance\n\n🚀 Release 0.51.1",
          "timestamp": "2023-03-13T15:07:19+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9608377c93aab05295d887f047f8ad83a37964f9"
        },
        "date": 1678688838364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8278226.076923077,
            "unit": "ns",
            "range": "± 119780.69301954965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20909013.42857143,
            "unit": "ns",
            "range": "± 344155.4856270444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55165249.777777776,
            "unit": "ns",
            "range": "± 1171605.5988953821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110221602.09523809,
            "unit": "ns",
            "range": "± 6123346.351399882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 214152294.65384614,
            "unit": "ns",
            "range": "± 5804007.944769917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61088.48901098901,
            "unit": "ns",
            "range": "± 9456.102627397711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214215.4090909091,
            "unit": "ns",
            "range": "± 17365.799493850147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213002.8186813187,
            "unit": "ns",
            "range": "± 16797.090263150483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190134.7474226804,
            "unit": "ns",
            "range": "± 21735.870985074667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12189238.313253012,
            "unit": "ns",
            "range": "± 626312.951115766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10151007.304347826,
            "unit": "ns",
            "range": "± 241206.0472043531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19229.755319148935,
            "unit": "ns",
            "range": "± 3528.8464004518746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57077.58947368421,
            "unit": "ns",
            "range": "± 6740.619236492846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54070.61224489796,
            "unit": "ns",
            "range": "± 7602.5037396230555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115289.81914893616,
            "unit": "ns",
            "range": "± 16661.264066053605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7208.884210526316,
            "unit": "ns",
            "range": "± 721.55577869581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17027.977528089887,
            "unit": "ns",
            "range": "± 1867.7084158834862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577918.957894737,
            "unit": "ns",
            "range": "± 137797.9859579306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823158.3098591547,
            "unit": "ns",
            "range": "± 131266.44408025246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2433296.547368421,
            "unit": "ns",
            "range": "± 186423.11180357166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6123576.3,
            "unit": "ns",
            "range": "± 236078.11700378123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3454438.5263157897,
            "unit": "ns",
            "range": "± 146773.5706898196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5170918.4772727275,
            "unit": "ns",
            "range": "± 190019.56186158635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25089305.7,
            "unit": "ns",
            "range": "± 707982.7962155943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6641610.55,
            "unit": "ns",
            "range": "± 235331.67177258458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29905864.983333334,
            "unit": "ns",
            "range": "± 1155334.8586698482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6904452.407552083,
            "unit": "ns",
            "range": "± 58437.44625767269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910075.5707632212,
            "unit": "ns",
            "range": "± 27259.80246900351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279745.058314732,
            "unit": "ns",
            "range": "± 16677.471809674436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704527.023697917,
            "unit": "ns",
            "range": "± 39970.01407215528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858456.9255371094,
            "unit": "ns",
            "range": "± 2869.3125535132262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718607.3487830529,
            "unit": "ns",
            "range": "± 8599.698625540748"
          }
        ]
      }
    ]
  }
}