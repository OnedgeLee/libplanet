window.BENCHMARK_DATA = {
  "lastUpdate": 1678691166463,
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
        "date": 1678683479344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202307.23529411765,
            "unit": "ns",
            "range": "± 8260.205124785305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206461.4,
            "unit": "ns",
            "range": "± 7745.7555104245785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188905.72,
            "unit": "ns",
            "range": "± 11785.072736973572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12178185.166666666,
            "unit": "ns",
            "range": "± 249248.45059976273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10105359.4,
            "unit": "ns",
            "range": "± 155086.2279921353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22201.236559139787,
            "unit": "ns",
            "range": "± 1976.7146458853392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56668.07526881721,
            "unit": "ns",
            "range": "± 4372.320852313719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42207.882352941175,
            "unit": "ns",
            "range": "± 1736.9676640289977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100865.45054945054,
            "unit": "ns",
            "range": "± 12389.613765178687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6842.288659793814,
            "unit": "ns",
            "range": "± 780.8711342517153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21918.701030927834,
            "unit": "ns",
            "range": "± 2199.0364611809173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3476722.52,
            "unit": "ns",
            "range": "± 92385.46057421589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5546331.8,
            "unit": "ns",
            "range": "± 145829.33086602757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25317479,
            "unit": "ns",
            "range": "± 674845.8559421181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6713894.023255814,
            "unit": "ns",
            "range": "± 243940.59084388017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28985745.666666668,
            "unit": "ns",
            "range": "± 466071.9716425882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6105307.572115385,
            "unit": "ns",
            "range": "± 21399.39113004159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875952.9927083333,
            "unit": "ns",
            "range": "± 5236.1849223915615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364913.621372768,
            "unit": "ns",
            "range": "± 5119.776291095709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667218.1622596155,
            "unit": "ns",
            "range": "± 2914.1351281620286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838840.4559244792,
            "unit": "ns",
            "range": "± 956.8458971377216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766067.0342447917,
            "unit": "ns",
            "range": "± 711.4167756491698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7932428.347826087,
            "unit": "ns",
            "range": "± 200370.92323071245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22199477.153846152,
            "unit": "ns",
            "range": "± 176249.03304692017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55297477.733333334,
            "unit": "ns",
            "range": "± 820299.7986088872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110189653.6,
            "unit": "ns",
            "range": "± 1623517.2990340975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 216889319.26666668,
            "unit": "ns",
            "range": "± 3179321.378934313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49836.617021276594,
            "unit": "ns",
            "range": "± 1939.0428112993802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454262.4105263157,
            "unit": "ns",
            "range": "± 83258.30468430248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2750151.533333333,
            "unit": "ns",
            "range": "± 82144.96477138421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2281314.85483871,
            "unit": "ns",
            "range": "± 103565.5491362674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5493643.511111111,
            "unit": "ns",
            "range": "± 207338.52531029168"
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
        "date": 1678688788882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221041.87234042553,
            "unit": "ns",
            "range": "± 21107.816069156324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225449.03125,
            "unit": "ns",
            "range": "± 23878.022229856884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213666.98958333334,
            "unit": "ns",
            "range": "± 30180.70903931317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13354524.93877551,
            "unit": "ns",
            "range": "± 911421.2886019626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10872637.408163264,
            "unit": "ns",
            "range": "± 880149.4813806667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26564.336734693876,
            "unit": "ns",
            "range": "± 7499.18164737234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65897.01020408163,
            "unit": "ns",
            "range": "± 10447.570590683628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48379.45360824742,
            "unit": "ns",
            "range": "± 8559.074167490093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113460.13684210526,
            "unit": "ns",
            "range": "± 18669.67163246461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10852.01,
            "unit": "ns",
            "range": "± 5954.713858894749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24234.775510204083,
            "unit": "ns",
            "range": "± 7378.982617173501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3643781.3673469387,
            "unit": "ns",
            "range": "± 342930.5239062066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5953262.358695652,
            "unit": "ns",
            "range": "± 493998.926804048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29736404.94,
            "unit": "ns",
            "range": "± 2004400.5035664276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7203798.547368421,
            "unit": "ns",
            "range": "± 563941.5115647466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33969769.84848485,
            "unit": "ns",
            "range": "± 2366706.7750807684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6666100.41015625,
            "unit": "ns",
            "range": "± 129831.83714712682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171391.0883657094,
            "unit": "ns",
            "range": "± 72695.33446312963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543601.311226223,
            "unit": "ns",
            "range": "± 35689.781057037086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2993872.6985294116,
            "unit": "ns",
            "range": "± 61297.49809260256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976051.4194661458,
            "unit": "ns",
            "range": "± 16569.893919963222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897227.8506610577,
            "unit": "ns",
            "range": "± 8860.862522792722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9072646.634408602,
            "unit": "ns",
            "range": "± 521212.80508427776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23932575.35714286,
            "unit": "ns",
            "range": "± 1603640.7225003317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59895241.21212121,
            "unit": "ns",
            "range": "± 4060186.3118655896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115448689.77777778,
            "unit": "ns",
            "range": "± 3803568.7206913843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 237885569.1973684,
            "unit": "ns",
            "range": "± 12068071.528370416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62107.375,
            "unit": "ns",
            "range": "± 10558.630786682224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1620319.8602150537,
            "unit": "ns",
            "range": "± 164988.8995342856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3197161.0315789473,
            "unit": "ns",
            "range": "± 237812.16167380314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2519835.0515463916,
            "unit": "ns",
            "range": "± 247019.84546001776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6520922.030927835,
            "unit": "ns",
            "range": "± 527136.8650800926"
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
        "date": 1678688900334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212838.546875,
            "unit": "ns",
            "range": "± 9414.272646258198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223248.21739130435,
            "unit": "ns",
            "range": "± 7854.829183836296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186047.75,
            "unit": "ns",
            "range": "± 8880.435718392846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12368263.555555556,
            "unit": "ns",
            "range": "± 336541.749970117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9765419.551724138,
            "unit": "ns",
            "range": "± 274050.25666193134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21713.894736842107,
            "unit": "ns",
            "range": "± 2138.3237592656756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69018.66326530612,
            "unit": "ns",
            "range": "± 8679.833891581151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46824.385416666664,
            "unit": "ns",
            "range": "± 4037.4214735587752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123096.17525773196,
            "unit": "ns",
            "range": "± 17095.00791350255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8811.53125,
            "unit": "ns",
            "range": "± 1657.5379392538168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22697.1875,
            "unit": "ns",
            "range": "± 2756.5238800554202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3416268.769230769,
            "unit": "ns",
            "range": "± 47141.506037945386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5662159.891304348,
            "unit": "ns",
            "range": "± 217167.14556347593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25496662.9,
            "unit": "ns",
            "range": "± 564062.6074112415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6830962.407407408,
            "unit": "ns",
            "range": "± 191225.33039509243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29915349.5,
            "unit": "ns",
            "range": "± 688131.5447856648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6043311.252232143,
            "unit": "ns",
            "range": "± 34452.36568416542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905016.7864583333,
            "unit": "ns",
            "range": "± 5125.598950531044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359343.4509114583,
            "unit": "ns",
            "range": "± 8506.750659649115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635630.4938616073,
            "unit": "ns",
            "range": "± 5451.160308618129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841305.6667317708,
            "unit": "ns",
            "range": "± 2288.3602807805514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778833.5076822917,
            "unit": "ns",
            "range": "± 1381.1228471341135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8064234.130434782,
            "unit": "ns",
            "range": "± 200995.8831584966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22194457.6,
            "unit": "ns",
            "range": "± 287570.7333086691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55648475.06666667,
            "unit": "ns",
            "range": "± 830744.2199083101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109522263.61538461,
            "unit": "ns",
            "range": "± 1266445.8688954127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 220160269.94117647,
            "unit": "ns",
            "range": "± 4517521.64387331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53573.709677419356,
            "unit": "ns",
            "range": "± 3109.711955697076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446465.8,
            "unit": "ns",
            "range": "± 80294.5354170954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2829072.714285714,
            "unit": "ns",
            "range": "± 80038.41010084408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336078.3636363638,
            "unit": "ns",
            "range": "± 136991.75847499186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5835789.11,
            "unit": "ns",
            "range": "± 416990.6143895419"
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
        "date": 1678691153083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199074.88235294117,
            "unit": "ns",
            "range": "± 8106.107627331527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204306.89130434784,
            "unit": "ns",
            "range": "± 7829.22932557012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167511.82352941178,
            "unit": "ns",
            "range": "± 3296.9799103743053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11567713.466666667,
            "unit": "ns",
            "range": "± 97737.46830950954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9398468.666666666,
            "unit": "ns",
            "range": "± 41039.415203412624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19422.62365591398,
            "unit": "ns",
            "range": "± 1266.6328344316682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52134.51612903226,
            "unit": "ns",
            "range": "± 4187.779858559755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40406.901960784315,
            "unit": "ns",
            "range": "± 1658.7035450001542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92756.29591836735,
            "unit": "ns",
            "range": "± 13451.88900712399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4838.154639175258,
            "unit": "ns",
            "range": "± 479.2571365362881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17443.489130434784,
            "unit": "ns",
            "range": "± 1358.284312876295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3363867.433333333,
            "unit": "ns",
            "range": "± 80886.73043369985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5214620.6,
            "unit": "ns",
            "range": "± 54072.453776391536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24218378.6,
            "unit": "ns",
            "range": "± 148225.39782796046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6327820.666666667,
            "unit": "ns",
            "range": "± 114770.18139847169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27481517.5,
            "unit": "ns",
            "range": "± 276854.2296635125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991361.55078125,
            "unit": "ns",
            "range": "± 18993.823940406703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866722.1089564732,
            "unit": "ns",
            "range": "± 2308.004485676107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399702.4767020089,
            "unit": "ns",
            "range": "± 1659.7084141420828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576790.706705729,
            "unit": "ns",
            "range": "± 998.9135166015562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797867.0845102164,
            "unit": "ns",
            "range": "± 491.0544372898819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726338.9284104567,
            "unit": "ns",
            "range": "± 830.2636484418172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7992664.2272727275,
            "unit": "ns",
            "range": "± 132152.64242603697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20106902.333333332,
            "unit": "ns",
            "range": "± 109996.81716282695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51915045.666666664,
            "unit": "ns",
            "range": "± 374326.31219349377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104036598.73333333,
            "unit": "ns",
            "range": "± 527339.8558527328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206236740,
            "unit": "ns",
            "range": "± 1133766.1420480101"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46003.106060606064,
            "unit": "ns",
            "range": "± 2155.5851187004205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349299.8953488371,
            "unit": "ns",
            "range": "± 72804.54196093716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529893,
            "unit": "ns",
            "range": "± 77913.85921564276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130215.472222222,
            "unit": "ns",
            "range": "± 101968.9943450738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5049570.037037037,
            "unit": "ns",
            "range": "± 137194.38406634846"
          }
        ]
      }
    ]
  }
}