window.BENCHMARK_DATA = {
  "lastUpdate": 1690766848581,
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
        "date": 1690503390806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288083.34,
            "unit": "ns",
            "range": "± 36440.17489874203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281443.89,
            "unit": "ns",
            "range": "± 37121.79193278404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237981.8,
            "unit": "ns",
            "range": "± 36070.2357988669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4365055.6,
            "unit": "ns",
            "range": "± 495625.1930279778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3735982.62,
            "unit": "ns",
            "range": "± 401912.80394840904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17215.97894736842,
            "unit": "ns",
            "range": "± 2077.772200868278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82764.01020408163,
            "unit": "ns",
            "range": "± 12504.750151871072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73225.22,
            "unit": "ns",
            "range": "± 11919.157400715461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80165.49484536082,
            "unit": "ns",
            "range": "± 13517.957488038297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4601.350515463918,
            "unit": "ns",
            "range": "± 633.7212689285723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17236.309278350516,
            "unit": "ns",
            "range": "± 2439.4989468503263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403062.83,
            "unit": "ns",
            "range": "± 185161.27156666142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656600.242424242,
            "unit": "ns",
            "range": "± 296242.8942832695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1802182.2828282828,
            "unit": "ns",
            "range": "± 222312.34097282393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5223779.979591837,
            "unit": "ns",
            "range": "± 540535.0358322624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5634582.386029412,
            "unit": "ns",
            "range": "± 113823.02585511615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790145.0174479166,
            "unit": "ns",
            "range": "± 17626.90926403301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365379.113042092,
            "unit": "ns",
            "range": "± 96472.38650550834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537396.94609375,
            "unit": "ns",
            "range": "± 31630.141652118746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801135.6016601563,
            "unit": "ns",
            "range": "± 14135.39368523716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727285.307800293,
            "unit": "ns",
            "range": "± 12632.000443100505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3483132.202020202,
            "unit": "ns",
            "range": "± 272234.3073701882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511092.051020408,
            "unit": "ns",
            "range": "± 325564.4730085383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237982.94,
            "unit": "ns",
            "range": "± 351790.11058164627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925902.4343434344,
            "unit": "ns",
            "range": "± 324215.3284674687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6846080.44,
            "unit": "ns",
            "range": "± 557258.8642881726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207803.56,
            "unit": "ns",
            "range": "± 870791.5045303256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22738490.81,
            "unit": "ns",
            "range": "± 1480134.1040560387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58477016.23232323,
            "unit": "ns",
            "range": "± 3514223.4117979454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113267940.2,
            "unit": "ns",
            "range": "± 5289553.368320891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220689914.6956522,
            "unit": "ns",
            "range": "± 7964731.572552946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49292.19387755102,
            "unit": "ns",
            "range": "± 7143.344182990427"
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
        "date": 1690504473337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276314.4651162791,
            "unit": "ns",
            "range": "± 7190.727635043146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267831.4285714286,
            "unit": "ns",
            "range": "± 8269.14555400238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248651.34,
            "unit": "ns",
            "range": "± 19652.67868097827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4225582.066666666,
            "unit": "ns",
            "range": "± 26571.939841189796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3990584.8,
            "unit": "ns",
            "range": "± 64750.24149673663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20396.714285714286,
            "unit": "ns",
            "range": "± 2715.6445647510386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89624.34020618557,
            "unit": "ns",
            "range": "± 7352.646650592614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73560.76923076923,
            "unit": "ns",
            "range": "± 892.1604072742144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81293.94805194806,
            "unit": "ns",
            "range": "± 3154.7534013899854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4819.445652173913,
            "unit": "ns",
            "range": "± 566.2390161296571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18958.15625,
            "unit": "ns",
            "range": "± 3806.6157516345284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354821.105882353,
            "unit": "ns",
            "range": "± 69586.71702922421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2574633.6071428573,
            "unit": "ns",
            "range": "± 72519.82583957928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1777749.9550561798,
            "unit": "ns",
            "range": "± 97674.96712914611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4804878.862068965,
            "unit": "ns",
            "range": "± 135344.8998328567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6087789.110416667,
            "unit": "ns",
            "range": "± 31240.93111063595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901130.4813802084,
            "unit": "ns",
            "range": "± 4714.195194025475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363507.4438802083,
            "unit": "ns",
            "range": "± 794.3381412579373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578578.562760417,
            "unit": "ns",
            "range": "± 5181.681796593109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816724.2633928572,
            "unit": "ns",
            "range": "± 762.7727812215682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755835.8092447916,
            "unit": "ns",
            "range": "± 5599.405738894231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3242652.533333333,
            "unit": "ns",
            "range": "± 39029.204528452916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3344168.72,
            "unit": "ns",
            "range": "± 53691.27771615547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289382.68,
            "unit": "ns",
            "range": "± 112117.94238015608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3732565.8157894737,
            "unit": "ns",
            "range": "± 126066.99281920967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6227993.545454546,
            "unit": "ns",
            "range": "± 94169.93570932199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7734352.133333334,
            "unit": "ns",
            "range": "± 87250.11704852294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19324835.615384616,
            "unit": "ns",
            "range": "± 95691.73467837444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49704335.733333334,
            "unit": "ns",
            "range": "± 340996.8884647455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99423684.53333333,
            "unit": "ns",
            "range": "± 879899.1337715823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197711378.73333332,
            "unit": "ns",
            "range": "± 1812269.810985836"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48087.1975308642,
            "unit": "ns",
            "range": "± 2528.9225987550167"
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
        "date": 1690509575694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322522.71428571426,
            "unit": "ns",
            "range": "± 11683.369951712195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309220.9322033898,
            "unit": "ns",
            "range": "± 13559.053006888062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287589.29411764705,
            "unit": "ns",
            "range": "± 11615.810109147133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4763359.733333333,
            "unit": "ns",
            "range": "± 44149.488965601966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4284687.894117647,
            "unit": "ns",
            "range": "± 235320.45631001343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23790.96875,
            "unit": "ns",
            "range": "± 2008.6937439310889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101683.77659574468,
            "unit": "ns",
            "range": "± 6449.2031668407135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87185.31313131313,
            "unit": "ns",
            "range": "± 12846.61921908375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113071.13402061856,
            "unit": "ns",
            "range": "± 11262.60340188277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8059.642105263158,
            "unit": "ns",
            "range": "± 1067.1994760177415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25265.694736842106,
            "unit": "ns",
            "range": "± 1984.8507102533633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471747.7096774194,
            "unit": "ns",
            "range": "± 83279.33606929787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773286.935483871,
            "unit": "ns",
            "range": "± 82130.22942333129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1881192.8494623655,
            "unit": "ns",
            "range": "± 107376.64796254698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5057594.47368421,
            "unit": "ns",
            "range": "± 172825.55758801242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6215281.074479166,
            "unit": "ns",
            "range": "± 38723.21915502322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959140.4005208334,
            "unit": "ns",
            "range": "± 8363.504130943817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409217.3134114584,
            "unit": "ns",
            "range": "± 3856.3370458153463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2756084.184988839,
            "unit": "ns",
            "range": "± 20121.65276580983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843977.1031901041,
            "unit": "ns",
            "range": "± 464.89500393213757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776756.5555338542,
            "unit": "ns",
            "range": "± 552.6480315670433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3799374.769230769,
            "unit": "ns",
            "range": "± 59102.78859066049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3953441.909090909,
            "unit": "ns",
            "range": "± 147218.9598530845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4763002.923076923,
            "unit": "ns",
            "range": "± 47710.503493223834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4306879.214285715,
            "unit": "ns",
            "range": "± 57325.03146522478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6998047.6,
            "unit": "ns",
            "range": "± 228201.70820714472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9080911.642857144,
            "unit": "ns",
            "range": "± 89494.82175961755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22991640.6,
            "unit": "ns",
            "range": "± 238813.99810904838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57879608.6,
            "unit": "ns",
            "range": "± 385234.54835051927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116528093.78571428,
            "unit": "ns",
            "range": "± 305563.73480834975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232583892.66666666,
            "unit": "ns",
            "range": "± 733336.2015444667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53785.01063829787,
            "unit": "ns",
            "range": "± 4917.745788981664"
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
        "date": 1690513549137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282147.5,
            "unit": "ns",
            "range": "± 3783.903744211069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265050.34210526315,
            "unit": "ns",
            "range": "± 8715.438775068242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233243,
            "unit": "ns",
            "range": "± 5064.892059950278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4327163.4,
            "unit": "ns",
            "range": "± 53243.10391671127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859889.5,
            "unit": "ns",
            "range": "± 36058.8859543557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20172.684782608696,
            "unit": "ns",
            "range": "± 1911.170660917151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90127.41666666667,
            "unit": "ns",
            "range": "± 6266.025439944774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72630.11538461539,
            "unit": "ns",
            "range": "± 1982.4130412590223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83675.13513513513,
            "unit": "ns",
            "range": "± 2566.3082824685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4755.628865979382,
            "unit": "ns",
            "range": "± 518.584116440855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19105.663157894738,
            "unit": "ns",
            "range": "± 1793.150280340033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392848.1894736842,
            "unit": "ns",
            "range": "± 92820.8019618235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578420.926829268,
            "unit": "ns",
            "range": "± 91205.77923256569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1751219.0824742268,
            "unit": "ns",
            "range": "± 100717.4692584482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4812852.660377358,
            "unit": "ns",
            "range": "± 200502.57480918593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6076575.994791667,
            "unit": "ns",
            "range": "± 18184.684349073344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970997.7433035714,
            "unit": "ns",
            "range": "± 1951.0619649664388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380928.4826822917,
            "unit": "ns",
            "range": "± 1622.6976671612051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582163.189453125,
            "unit": "ns",
            "range": "± 4893.289865957946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814445.3895182292,
            "unit": "ns",
            "range": "± 580.3441879965646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732129.647265625,
            "unit": "ns",
            "range": "± 2229.6597019594274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3312504.6666666665,
            "unit": "ns",
            "range": "± 38985.39965288593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480441.214285714,
            "unit": "ns",
            "range": "± 30978.56355903738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4270629.666666667,
            "unit": "ns",
            "range": "± 57343.40735512007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3929860.85,
            "unit": "ns",
            "range": "± 88781.77441183048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6262389.6,
            "unit": "ns",
            "range": "± 83833.25247503439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7574462.4,
            "unit": "ns",
            "range": "± 37331.752543530936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18942239.64285714,
            "unit": "ns",
            "range": "± 67896.19879991826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50566275.266666666,
            "unit": "ns",
            "range": "± 410142.4748578173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101343630.4,
            "unit": "ns",
            "range": "± 373244.7244489484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200661574.53333333,
            "unit": "ns",
            "range": "± 839201.2854400704"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46280.8021978022,
            "unit": "ns",
            "range": "± 2607.5929906494234"
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
        "date": 1690766835562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281544.13636363635,
            "unit": "ns",
            "range": "± 6886.435205362956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281450.95652173914,
            "unit": "ns",
            "range": "± 10572.505047331282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243708.02597402598,
            "unit": "ns",
            "range": "± 12443.959500574887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215761,
            "unit": "ns",
            "range": "± 44376.76676563344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3994382.066666667,
            "unit": "ns",
            "range": "± 35053.73711576203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21738.05154639175,
            "unit": "ns",
            "range": "± 2077.066643385641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93843.42857142857,
            "unit": "ns",
            "range": "± 6021.192480447536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73398.1884057971,
            "unit": "ns",
            "range": "± 3201.9768676616122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85244.02469135802,
            "unit": "ns",
            "range": "± 6099.842868827255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4722.569892473119,
            "unit": "ns",
            "range": "± 472.778866358246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17154.083333333332,
            "unit": "ns",
            "range": "± 1633.317603218203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395457.2577319588,
            "unit": "ns",
            "range": "± 132943.72681516717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2605821.2916666665,
            "unit": "ns",
            "range": "± 64748.327561063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732764.030927835,
            "unit": "ns",
            "range": "± 117547.52188693493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4815780.529411765,
            "unit": "ns",
            "range": "± 143809.8959597484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6338934.935416667,
            "unit": "ns",
            "range": "± 26771.69108232435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927138.278515625,
            "unit": "ns",
            "range": "± 7384.892794417375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376459.63359375,
            "unit": "ns",
            "range": "± 1250.1093423686211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592362.3640625,
            "unit": "ns",
            "range": "± 6491.018347617999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814184.0331333706,
            "unit": "ns",
            "range": "± 1381.3310494484058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740220.875,
            "unit": "ns",
            "range": "± 418.33490633361964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3366941,
            "unit": "ns",
            "range": "± 64397.49116645254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3436972.6447368423,
            "unit": "ns",
            "range": "± 167768.05739597385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4379993.8,
            "unit": "ns",
            "range": "± 76003.48899435003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3823716.2,
            "unit": "ns",
            "range": "± 64946.961366509335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6472837.5,
            "unit": "ns",
            "range": "± 135920.7747637658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7831564.4,
            "unit": "ns",
            "range": "± 97668.26286816876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19922180.785714287,
            "unit": "ns",
            "range": "± 44155.72761902961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51622500.35714286,
            "unit": "ns",
            "range": "± 177992.80632940333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101317710.2,
            "unit": "ns",
            "range": "± 1316591.6431395446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198557941.13333333,
            "unit": "ns",
            "range": "± 2489121.4286059667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48617.5,
            "unit": "ns",
            "range": "± 3065.0045419387657"
          }
        ]
      }
    ]
  }
}