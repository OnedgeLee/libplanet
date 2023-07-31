window.BENCHMARK_DATA = {
  "lastUpdate": 1690767445200,
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
          "id": "3010db94c47f76c3e46996cff77d69f8975f49a6",
          "message": "rename: Rename IAccountStateDelta as IAccount\n\nCo-authored-by: Say Cheong <greymistcube@gmail.com>\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-07-28T08:57:23+09:00",
          "tree_id": "a6bf1287a592e819b42e563dee9a79f3d2376684",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3010db94c47f76c3e46996cff77d69f8975f49a6"
        },
        "date": 1690503658735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9172517.479591837,
            "unit": "ns",
            "range": "± 531407.6088092796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21518768.106060605,
            "unit": "ns",
            "range": "± 671298.9764806243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56204418.96666667,
            "unit": "ns",
            "range": "± 2481502.830099405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114439838.4,
            "unit": "ns",
            "range": "± 2989458.325905715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226516612.83333334,
            "unit": "ns",
            "range": "± 3498861.8753375392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71143.68085106384,
            "unit": "ns",
            "range": "± 11709.7553781165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337577.05263157893,
            "unit": "ns",
            "range": "± 35970.30634599683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340331.2252747253,
            "unit": "ns",
            "range": "± 33748.054620168994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316467.5,
            "unit": "ns",
            "range": "± 10419.740989377533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276427.666666667,
            "unit": "ns",
            "range": "± 142337.22978937833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3820150.972222222,
            "unit": "ns",
            "range": "± 127451.49892331281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23078.29775280899,
            "unit": "ns",
            "range": "± 2812.8508838889584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113208.5425531915,
            "unit": "ns",
            "range": "± 15020.439726188519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118277.08695652174,
            "unit": "ns",
            "range": "± 11887.441112415518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124057.48958333333,
            "unit": "ns",
            "range": "± 19343.30523952316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8075.152631578947,
            "unit": "ns",
            "range": "± 1036.8360810188733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21481.392473118278,
            "unit": "ns",
            "range": "± 3312.744200883341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718829.9623655914,
            "unit": "ns",
            "range": "± 235225.6471475181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3411463.585106383,
            "unit": "ns",
            "range": "± 380768.72906884353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2454469.6082474226,
            "unit": "ns",
            "range": "± 371997.6276882678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6526773.270833333,
            "unit": "ns",
            "range": "± 724592.28248643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3709234.5454545454,
            "unit": "ns",
            "range": "± 388550.23685066844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4365774.769662921,
            "unit": "ns",
            "range": "± 762612.4961205539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4683880.523809524,
            "unit": "ns",
            "range": "± 214490.5927850583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4178441.287878788,
            "unit": "ns",
            "range": "± 345013.22398679244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7648512.636363637,
            "unit": "ns",
            "range": "± 419373.38201140316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7668645.999914148,
            "unit": "ns",
            "range": "± 429407.07428718056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2024356.5846354167,
            "unit": "ns",
            "range": "± 95369.89593554423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1471422.6550021702,
            "unit": "ns",
            "range": "± 47881.43405462408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3079871.570546875,
            "unit": "ns",
            "range": "± 219516.52637875458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849023.0707720588,
            "unit": "ns",
            "range": "± 16346.82094444354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829197.1385416667,
            "unit": "ns",
            "range": "± 12359.467477198803"
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
          "id": "23389e4a9434ef2edc4c6b42aa9702ad76590b28",
          "message": "rename: Rename IAccountStateDelta as IAccount\n\nCo-authored-by: Say Cheong <greymistcube@gmail.com>\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-07-28T09:21:01+09:00",
          "tree_id": "a6bf1287a592e819b42e563dee9a79f3d2376684",
          "url": "https://github.com/OnedgeLee/libplanet/commit/23389e4a9434ef2edc4c6b42aa9702ad76590b28"
        },
        "date": 1690504646318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8113881.074074074,
            "unit": "ns",
            "range": "± 324873.34030739573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19646859.673913043,
            "unit": "ns",
            "range": "± 742508.7339427673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49312739.52941176,
            "unit": "ns",
            "range": "± 1456653.3175230348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95090030.28571428,
            "unit": "ns",
            "range": "± 1029062.6852580592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204826175.78947368,
            "unit": "ns",
            "range": "± 4399626.393246383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54839.76136363636,
            "unit": "ns",
            "range": "± 4864.260329340271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299245.64864864864,
            "unit": "ns",
            "range": "± 14695.664615967466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285133.4157303371,
            "unit": "ns",
            "range": "± 16442.375639714504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275579.2926829268,
            "unit": "ns",
            "range": "± 9881.441110090933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3978172.75,
            "unit": "ns",
            "range": "± 88839.74966899671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3588310.8095238097,
            "unit": "ns",
            "range": "± 82928.69120251387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17254.86813186813,
            "unit": "ns",
            "range": "± 1304.882303835111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87323.81818181818,
            "unit": "ns",
            "range": "± 9408.297540982961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86966.83333333333,
            "unit": "ns",
            "range": "± 7535.621243787705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108165.28125,
            "unit": "ns",
            "range": "± 14773.572779373113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4724.41011235955,
            "unit": "ns",
            "range": "± 542.7401362206042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16525.011627906977,
            "unit": "ns",
            "range": "± 1843.0825872414434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1644016.081632653,
            "unit": "ns",
            "range": "± 172076.4140163169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895067.9264705884,
            "unit": "ns",
            "range": "± 137195.65284563787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091928.030612245,
            "unit": "ns",
            "range": "± 225477.26096371684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5610708.32,
            "unit": "ns",
            "range": "± 210415.39791549556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188530.2333333334,
            "unit": "ns",
            "range": "± 120491.39916483666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394668.7916666665,
            "unit": "ns",
            "range": "± 131912.09196117197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4176660.5416666665,
            "unit": "ns",
            "range": "± 104615.82193247294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3705769.057142857,
            "unit": "ns",
            "range": "± 119374.35965974063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6939282.8301886795,
            "unit": "ns",
            "range": "± 289238.5369419115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6315333.354736328,
            "unit": "ns",
            "range": "± 193968.40884119633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830878.4407552083,
            "unit": "ns",
            "range": "± 12289.754428688488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230401.9639322916,
            "unit": "ns",
            "range": "± 8911.21642319529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2380475.6432291665,
            "unit": "ns",
            "range": "± 14450.838487917936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831689.5402994792,
            "unit": "ns",
            "range": "± 9672.133151414919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784442.5984235491,
            "unit": "ns",
            "range": "± 2883.734174524595"
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
          "id": "e0b6de2278693ccbfdfa4f66f4c6307f32f92f8c",
          "message": "document: Update changelog",
          "timestamp": "2023-07-28T10:42:35+09:00",
          "tree_id": "080ed5e469a3c9a1fcd2a100fe1c98e6805325aa",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e0b6de2278693ccbfdfa4f66f4c6307f32f92f8c"
        },
        "date": 1690510008688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8693616.45,
            "unit": "ns",
            "range": "± 191204.23918953782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22769999.525316454,
            "unit": "ns",
            "range": "± 1173786.5003734815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56373716.88709678,
            "unit": "ns",
            "range": "± 1689049.7478212155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115442053.0638298,
            "unit": "ns",
            "range": "± 4415147.210552088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242063594.0625,
            "unit": "ns",
            "range": "± 4713939.965826329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82170.07647058823,
            "unit": "ns",
            "range": "± 7993.277232382565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368048.4673913043,
            "unit": "ns",
            "range": "± 42268.20613742495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343643.4791666667,
            "unit": "ns",
            "range": "± 52037.89472358311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349464.9081632653,
            "unit": "ns",
            "range": "± 50882.79873381892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4662149.416666667,
            "unit": "ns",
            "range": "± 302494.85212446755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4127460.4375,
            "unit": "ns",
            "range": "± 80691.29170484157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27183.393617021276,
            "unit": "ns",
            "range": "± 4348.114625948692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113040.08762886598,
            "unit": "ns",
            "range": "± 27311.976829372474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114227.32291666667,
            "unit": "ns",
            "range": "± 23561.581249990206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115560.22448979592,
            "unit": "ns",
            "range": "± 21220.65165955799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5941.344086021505,
            "unit": "ns",
            "range": "± 1084.0243910161364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16945.032608695652,
            "unit": "ns",
            "range": "± 1696.9671942219884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1858812.6956521738,
            "unit": "ns",
            "range": "± 382787.9549217283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3474064.3736263737,
            "unit": "ns",
            "range": "± 427882.7638106973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2459371.8723404254,
            "unit": "ns",
            "range": "± 485450.56774907315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6961839.482758621,
            "unit": "ns",
            "range": "± 916146.9850801954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4357705.068181818,
            "unit": "ns",
            "range": "± 976372.3151117415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4540345.593406593,
            "unit": "ns",
            "range": "± 977327.5352732285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4860355.744680851,
            "unit": "ns",
            "range": "± 545755.809032663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4453626.3877551025,
            "unit": "ns",
            "range": "± 506426.5468030263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7888556.282608695,
            "unit": "ns",
            "range": "± 715747.6914535792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7298417.860416667,
            "unit": "ns",
            "range": "± 216394.7088029797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064833.565625,
            "unit": "ns",
            "range": "± 86716.54308965952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408826.4441964286,
            "unit": "ns",
            "range": "± 48485.39336967872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857114.7849900266,
            "unit": "ns",
            "range": "± 162063.73420602066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828387.3138950893,
            "unit": "ns",
            "range": "± 13739.312150491862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826146.0903033088,
            "unit": "ns",
            "range": "± 39555.98888465886"
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
          "id": "335e20ee398de3d573d4fa6f91d991ef31777b2f",
          "message": "test: Fix tests",
          "timestamp": "2023-07-28T11:52:36+09:00",
          "tree_id": "84be7e6aed06a6ff9bf31ff010c515a4d049fcf8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/335e20ee398de3d573d4fa6f91d991ef31777b2f"
        },
        "date": 1690513792805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8484516.676470589,
            "unit": "ns",
            "range": "± 173052.65428881586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20957512.35483871,
            "unit": "ns",
            "range": "± 626848.6328244136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52524853.928571425,
            "unit": "ns",
            "range": "± 505851.08784802764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105522782.35714285,
            "unit": "ns",
            "range": "± 984979.3840550758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213625610.8,
            "unit": "ns",
            "range": "± 1560710.16129962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73394.0054945055,
            "unit": "ns",
            "range": "± 5407.643272615008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344770.65,
            "unit": "ns",
            "range": "± 12142.3415064383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327337.6111111111,
            "unit": "ns",
            "range": "± 13898.776569634341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318780.75,
            "unit": "ns",
            "range": "± 9011.495808852322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215979.75,
            "unit": "ns",
            "range": "± 77446.51660124338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868201.1428571427,
            "unit": "ns",
            "range": "± 31921.22558522209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23731.895833333332,
            "unit": "ns",
            "range": "± 3251.6744657392064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113457.54736842106,
            "unit": "ns",
            "range": "± 10731.656237078108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118967.36956521739,
            "unit": "ns",
            "range": "± 6722.630642243449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118516.20103092784,
            "unit": "ns",
            "range": "± 18962.462802185528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8255.48969072165,
            "unit": "ns",
            "range": "± 909.4000482786871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23077.29591836735,
            "unit": "ns",
            "range": "± 3870.22761313969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592330.505263158,
            "unit": "ns",
            "range": "± 177819.29372413587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3025826.236263736,
            "unit": "ns",
            "range": "± 222820.08453407904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2039973.2857142857,
            "unit": "ns",
            "range": "± 164250.83354796417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6108733.467391305,
            "unit": "ns",
            "range": "± 425988.2189128185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3570976.8571428573,
            "unit": "ns",
            "range": "± 57140.039524510634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3535210.214285714,
            "unit": "ns",
            "range": "± 110567.01822047419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4458253.471428571,
            "unit": "ns",
            "range": "± 121696.44618826016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4028652.6764705884,
            "unit": "ns",
            "range": "± 128563.08878935208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7164667.217948718,
            "unit": "ns",
            "range": "± 222072.19094675506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6730958.579241072,
            "unit": "ns",
            "range": "± 45277.04594250562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972517.6176382212,
            "unit": "ns",
            "range": "± 7260.484871728708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304484.887890625,
            "unit": "ns",
            "range": "± 9291.505728124104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2803646.228515625,
            "unit": "ns",
            "range": "± 58787.7684894674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865240.2371544471,
            "unit": "ns",
            "range": "± 2152.8599997340402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733282.2122628348,
            "unit": "ns",
            "range": "± 7373.299568489279"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "a831b2b538e4e5e60448e75ea875a02de541b345",
          "message": "test: Fix tests",
          "timestamp": "2023-07-31T10:12:30+09:00",
          "tree_id": "4a8f5d7fe7d07fd998f1d2c4466f334033c5e40e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a831b2b538e4e5e60448e75ea875a02de541b345"
        },
        "date": 1690767385784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8948740.175,
            "unit": "ns",
            "range": "± 464837.8460904071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20927210.5,
            "unit": "ns",
            "range": "± 612370.0616747197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74877900.39361702,
            "unit": "ns",
            "range": "± 18748043.39739179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106952027.14814815,
            "unit": "ns",
            "range": "± 2991590.308761105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256517956.25,
            "unit": "ns",
            "range": "± 7155798.831513365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75768.4623655914,
            "unit": "ns",
            "range": "± 12011.907585318917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352581.56701030926,
            "unit": "ns",
            "range": "± 44649.686139926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379459.20707070705,
            "unit": "ns",
            "range": "± 60695.45331612618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346994.2873563218,
            "unit": "ns",
            "range": "± 27180.000646383294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4517135.268421053,
            "unit": "ns",
            "range": "± 284711.60002728156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4024999.672413793,
            "unit": "ns",
            "range": "± 176019.4585515385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26027.432584269663,
            "unit": "ns",
            "range": "± 3356.117849261367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123948.07608695653,
            "unit": "ns",
            "range": "± 13065.799101432043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117366.32978723405,
            "unit": "ns",
            "range": "± 12300.714386665883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136395.585106383,
            "unit": "ns",
            "range": "± 17696.190722262814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9628.617021276596,
            "unit": "ns",
            "range": "± 1407.2225990041593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30382.42528735632,
            "unit": "ns",
            "range": "± 4181.221579684922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616946.8333333333,
            "unit": "ns",
            "range": "± 150242.7262241209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978430.131868132,
            "unit": "ns",
            "range": "± 166959.07057700687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171692.714285714,
            "unit": "ns",
            "range": "± 248865.99031951182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6262898.39010989,
            "unit": "ns",
            "range": "± 452919.78836300335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3402423.782828283,
            "unit": "ns",
            "range": "± 227673.54870300862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608539.4795918367,
            "unit": "ns",
            "range": "± 228123.71884500483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4790443.83,
            "unit": "ns",
            "range": "± 403849.6995922976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4317071.62371134,
            "unit": "ns",
            "range": "± 421965.74218534166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7792714.775510204,
            "unit": "ns",
            "range": "± 605244.4074323316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7765487.0517045455,
            "unit": "ns",
            "range": "± 330594.2975055349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059617.588107639,
            "unit": "ns",
            "range": "± 33381.93197672293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1438336.5141927083,
            "unit": "ns",
            "range": "± 16690.788249468584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2798432.5691964286,
            "unit": "ns",
            "range": "± 220622.7662993473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898722.606576192,
            "unit": "ns",
            "range": "± 51750.90210498348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815442.1809285482,
            "unit": "ns",
            "range": "± 31556.662893914014"
          }
        ]
      }
    ]
  }
}