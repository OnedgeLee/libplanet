window.BENCHMARK_DATA = {
  "lastUpdate": 1678691565573,
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
          "id": "af209bc57925812244e2a6d1ca1fb402fff839c4",
          "message": "Fix typo 0.51.1",
          "timestamp": "2023-03-13T15:12:54+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/OnedgeLee/libplanet/commit/af209bc57925812244e2a6d1ca1fb402fff839c4"
        },
        "date": 1678689006947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8356183.0869565215,
            "unit": "ns",
            "range": "± 210505.15133427214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23235806.720430106,
            "unit": "ns",
            "range": "± 2400522.205127692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 69897303.21111111,
            "unit": "ns",
            "range": "± 24959964.898105573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 105415218.74509804,
            "unit": "ns",
            "range": "± 4226346.83632275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 211824750.8846154,
            "unit": "ns",
            "range": "± 3224764.0279503018"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69722.6875,
            "unit": "ns",
            "range": "± 10741.18216988144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209518.81318681317,
            "unit": "ns",
            "range": "± 16123.548117177412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208981.8152173913,
            "unit": "ns",
            "range": "± 13829.693184625059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189682.193877551,
            "unit": "ns",
            "range": "± 20928.11175481003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12290805.75,
            "unit": "ns",
            "range": "± 279639.37438909366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9943962.375,
            "unit": "ns",
            "range": "± 253610.0635695798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19908.911111111112,
            "unit": "ns",
            "range": "± 2494.7972239521196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55982.18085106383,
            "unit": "ns",
            "range": "± 6168.438925592857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60721.84090909091,
            "unit": "ns",
            "range": "± 5919.468391955875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127126.13157894737,
            "unit": "ns",
            "range": "± 20614.62143312137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7958.739583333333,
            "unit": "ns",
            "range": "± 845.8884304283017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20609.29591836735,
            "unit": "ns",
            "range": "± 3114.0550227517556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1825383.8541666667,
            "unit": "ns",
            "range": "± 364491.2731676988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076159.1764705884,
            "unit": "ns",
            "range": "± 232604.04033465154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3010976.6086956523,
            "unit": "ns",
            "range": "± 74045.46615838575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6896588.813953488,
            "unit": "ns",
            "range": "± 825293.9130547587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396113.3659793814,
            "unit": "ns",
            "range": "± 195600.65282007138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5615028.934782608,
            "unit": "ns",
            "range": "± 497544.46915091516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24714591.25,
            "unit": "ns",
            "range": "± 558503.080569356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6388036.795454546,
            "unit": "ns",
            "range": "± 352320.2699953735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28970496.35714286,
            "unit": "ns",
            "range": "± 1324942.9663714666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6711822.377261513,
            "unit": "ns",
            "range": "± 143971.28477627423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839186.208984375,
            "unit": "ns",
            "range": "± 12675.685609702074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230938.0274939905,
            "unit": "ns",
            "range": "± 7207.751329643849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643088,
            "unit": "ns",
            "range": "± 46607.333772104634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790909.7495117188,
            "unit": "ns",
            "range": "± 6549.553390230419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741729.3557291667,
            "unit": "ns",
            "range": "± 11102.180208813916"
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
          "id": "a9032e0c6ac0973a65ced18b787c816aaa7e026e",
          "message": "Prepare 0.51.2",
          "timestamp": "2023-03-13T15:50:35+09:00",
          "tree_id": "abde72e5843a7fb700dfba7dc6d60d4b3693cbb4",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9032e0c6ac0973a65ced18b787c816aaa7e026e"
        },
        "date": 1678691534477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8871669.55357143,
            "unit": "ns",
            "range": "± 374372.09801656473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21680672.6,
            "unit": "ns",
            "range": "± 854832.3025137677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53770393.01351351,
            "unit": "ns",
            "range": "± 1791091.0867999897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112889793.7254902,
            "unit": "ns",
            "range": "± 4579070.226062842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 221013527.24444443,
            "unit": "ns",
            "range": "± 8262296.4017101955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73777.91397849462,
            "unit": "ns",
            "range": "± 11523.234768761684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234546.43956043955,
            "unit": "ns",
            "range": "± 24435.025307132284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229232.20618556702,
            "unit": "ns",
            "range": "± 25706.64976305504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208331.39130434784,
            "unit": "ns",
            "range": "± 26829.622156582427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14169135.945652174,
            "unit": "ns",
            "range": "± 1204015.8227162943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10902189.5,
            "unit": "ns",
            "range": "± 581420.2077459239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28370.270833333332,
            "unit": "ns",
            "range": "± 4685.50512353997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63187.357142857145,
            "unit": "ns",
            "range": "± 8815.728471281604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61881.15625,
            "unit": "ns",
            "range": "± 7530.862576342101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132841.5404040404,
            "unit": "ns",
            "range": "± 18124.927428943633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7999.061224489796,
            "unit": "ns",
            "range": "± 1787.8950061214302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20764.322916666668,
            "unit": "ns",
            "range": "± 3738.740060768548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780485.3092783506,
            "unit": "ns",
            "range": "± 213420.26862792546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3108596.1063829786,
            "unit": "ns",
            "range": "± 189369.07172447574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2770175,
            "unit": "ns",
            "range": "± 267570.77068516833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6927412.8,
            "unit": "ns",
            "range": "± 477254.8674991645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3574943.5888888887,
            "unit": "ns",
            "range": "± 264499.3389438393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5513950.71875,
            "unit": "ns",
            "range": "± 380052.2185956944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26380711.660714287,
            "unit": "ns",
            "range": "± 1130916.7106846839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6729606.747368421,
            "unit": "ns",
            "range": "± 386700.71753205714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31959821.74226804,
            "unit": "ns",
            "range": "± 2369900.4981890996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7637166.421283144,
            "unit": "ns",
            "range": "± 356991.5814087276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2116628.5606971155,
            "unit": "ns",
            "range": "± 29080.1719252522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337839.5231370192,
            "unit": "ns",
            "range": "± 13527.428723326893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2925845.208276721,
            "unit": "ns",
            "range": "± 140997.00444388026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928271.9085543449,
            "unit": "ns",
            "range": "± 40316.442254016256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792366.4287574405,
            "unit": "ns",
            "range": "± 28583.046744022467"
          }
        ]
      }
    ]
  }
}