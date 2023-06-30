window.BENCHMARK_DATA = {
  "lastUpdate": 1688102693100,
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
        "date": 1687412200576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574685,
            "unit": "ns",
            "range": "± 35736.06868785594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2825413.1147540985,
            "unit": "ns",
            "range": "± 119892.32179391895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2383359,
            "unit": "ns",
            "range": "± 173709.4480516942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5764045.762711864,
            "unit": "ns",
            "range": "± 246694.19805180965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50458.69565217391,
            "unit": "ns",
            "range": "± 3940.9139391244366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7986371.428571428,
            "unit": "ns",
            "range": "± 181971.61356337188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21185680,
            "unit": "ns",
            "range": "± 243922.2276522932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53618108.333333336,
            "unit": "ns",
            "range": "± 272082.7529809579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107339986.66666667,
            "unit": "ns",
            "range": "± 1115431.8752756496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215007270,
            "unit": "ns",
            "range": "± 1737999.286207317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4962810.104166667,
            "unit": "ns",
            "range": "± 13790.705396698953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1610090.9635416667,
            "unit": "ns",
            "range": "± 3934.3837577121853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227203.7259615385,
            "unit": "ns",
            "range": "± 3861.584297003233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670675.78125,
            "unit": "ns",
            "range": "± 9323.176344372292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846002.0377604166,
            "unit": "ns",
            "range": "± 3289.2303970436415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784203.3723958334,
            "unit": "ns",
            "range": "± 2445.9982748791576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3512974,
            "unit": "ns",
            "range": "± 91655.28389932938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3680852.6315789474,
            "unit": "ns",
            "range": "± 81716.59948614446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4464706.25,
            "unit": "ns",
            "range": "± 70370.77488796989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4502128.846153846,
            "unit": "ns",
            "range": "± 182665.73064366425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7106139.130434782,
            "unit": "ns",
            "range": "± 158003.86283865583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288268.08510638296,
            "unit": "ns",
            "range": "± 11193.828004034356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271437.7358490566,
            "unit": "ns",
            "range": "± 11173.272133070584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259264,
            "unit": "ns",
            "range": "± 18452.6421967263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4327057.142857143,
            "unit": "ns",
            "range": "± 55553.03376449895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840723.076923077,
            "unit": "ns",
            "range": "± 52336.71677777393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24879.787234042553,
            "unit": "ns",
            "range": "± 2341.5177408228124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100722.1052631579,
            "unit": "ns",
            "range": "± 7439.503228487379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92740.206185567,
            "unit": "ns",
            "range": "± 8735.901258048767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108221.11111111111,
            "unit": "ns",
            "range": "± 12482.792600660763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7241.414141414141,
            "unit": "ns",
            "range": "± 1330.6443199926089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23868.367346938776,
            "unit": "ns",
            "range": "± 2640.1966866272337"
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
        "date": 1687487749961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061089.6907216494,
            "unit": "ns",
            "range": "± 92375.72449483152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1934385.8823529412,
            "unit": "ns",
            "range": "± 103287.59566069368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1715403.0612244897,
            "unit": "ns",
            "range": "± 130344.70829390433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3916855.3846153845,
            "unit": "ns",
            "range": "± 180785.0217028927"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34934.831460674155,
            "unit": "ns",
            "range": "± 1951.7533564601663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5051453.846153846,
            "unit": "ns",
            "range": "± 37114.162063032294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13295600,
            "unit": "ns",
            "range": "± 219319.28128383317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33288900,
            "unit": "ns",
            "range": "± 183913.64368456553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68066393.33333333,
            "unit": "ns",
            "range": "± 538336.018893493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133247400,
            "unit": "ns",
            "range": "± 948227.9231733867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3500924.5833333335,
            "unit": "ns",
            "range": "± 8641.427766544199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1108544.8828125,
            "unit": "ns",
            "range": "± 2414.4005847925505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 831065.1106770834,
            "unit": "ns",
            "range": "± 1287.094705026843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912079.296875,
            "unit": "ns",
            "range": "± 4645.215412780118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 592990.0032552084,
            "unit": "ns",
            "range": "± 6501.492242226022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 526724.5833333334,
            "unit": "ns",
            "range": "± 971.8361313418211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2212420,
            "unit": "ns",
            "range": "± 50516.20479973155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488335,
            "unit": "ns",
            "range": "± 56632.56711376182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2930933.870967742,
            "unit": "ns",
            "range": "± 120699.85799161567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2928057.777777778,
            "unit": "ns",
            "range": "± 109066.71329738945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4764221.951219512,
            "unit": "ns",
            "range": "± 170674.23430646336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193860.41666666666,
            "unit": "ns",
            "range": "± 7567.504425301009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189641.66666666666,
            "unit": "ns",
            "range": "± 8489.3411069045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162620.83333333334,
            "unit": "ns",
            "range": "± 10052.60811056322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2865738.4615384615,
            "unit": "ns",
            "range": "± 38946.449099191275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2590546.6666666665,
            "unit": "ns",
            "range": "± 29114.22987050114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16005.050505050505,
            "unit": "ns",
            "range": "± 2277.0986614000158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67147.25274725274,
            "unit": "ns",
            "range": "± 3959.6672323523085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54960.9375,
            "unit": "ns",
            "range": "± 2335.143324346087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78715.46391752578,
            "unit": "ns",
            "range": "± 12806.413922053094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4711.224489795918,
            "unit": "ns",
            "range": "± 723.9471776967556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15458.762886597939,
            "unit": "ns",
            "range": "± 1261.0141898256263"
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
        "date": 1687488146858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689894.680851064,
            "unit": "ns",
            "range": "± 159281.88333422982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3233597.8494623657,
            "unit": "ns",
            "range": "± 184061.08094071393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2630332.2580645164,
            "unit": "ns",
            "range": "± 191800.83769215122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6833781.578947368,
            "unit": "ns",
            "range": "± 346370.63220795774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57196.153846153844,
            "unit": "ns",
            "range": "± 3894.1924763338347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9927192.307692308,
            "unit": "ns",
            "range": "± 115694.95423698233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25056806.666666668,
            "unit": "ns",
            "range": "± 433292.8034525955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64713484.84848485,
            "unit": "ns",
            "range": "± 1818768.079140592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128604266.66666667,
            "unit": "ns",
            "range": "± 1904239.5023799508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264036138.8888889,
            "unit": "ns",
            "range": "± 5339873.79980187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6198197.574013158,
            "unit": "ns",
            "range": "± 134520.09850141755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913812.5279017857,
            "unit": "ns",
            "range": "± 43649.81960745634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447152.5512695312,
            "unit": "ns",
            "range": "± 27195.224177149074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3399878.9925508723,
            "unit": "ns",
            "range": "± 125637.62498840709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024623.6188616072,
            "unit": "ns",
            "range": "± 17185.917010367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 966012.6051682692,
            "unit": "ns",
            "range": "± 10292.946454382361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4196717.391304348,
            "unit": "ns",
            "range": "± 104404.80941627648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4429019.047619048,
            "unit": "ns",
            "range": "± 160750.61466801306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5366562.5,
            "unit": "ns",
            "range": "± 100990.88325190547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5340927.142857143,
            "unit": "ns",
            "range": "± 258936.90626579485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8562239.47368421,
            "unit": "ns",
            "range": "± 292334.8621751411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333230.1886792453,
            "unit": "ns",
            "range": "± 13527.146280800584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316303.3333333333,
            "unit": "ns",
            "range": "± 13422.646770577092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284214.4736842105,
            "unit": "ns",
            "range": "± 13996.577714545016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5057350,
            "unit": "ns",
            "range": "± 75468.27147881419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4661800,
            "unit": "ns",
            "range": "± 89599.52074451659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23987.09677419355,
            "unit": "ns",
            "range": "± 2131.3511639359717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109025.55555555556,
            "unit": "ns",
            "range": "± 8304.669880417981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97657.73195876289,
            "unit": "ns",
            "range": "± 10404.875009776531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114181.05263157895,
            "unit": "ns",
            "range": "± 14885.336885651197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8673.958333333334,
            "unit": "ns",
            "range": "± 1253.8987444780018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27385.393258426968,
            "unit": "ns",
            "range": "± 2528.004538339108"
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
        "date": 1687757780810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1854069.4736842106,
            "unit": "ns",
            "range": "± 198347.5051056477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3624691.5789473685,
            "unit": "ns",
            "range": "± 257488.00536540506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2919983.3333333335,
            "unit": "ns",
            "range": "± 295669.1136590527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7568910.204081632,
            "unit": "ns",
            "range": "± 541904.9864393139"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67379.12087912088,
            "unit": "ns",
            "range": "± 14181.47866043372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9534020.408163264,
            "unit": "ns",
            "range": "± 713971.738006482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27342615.217391305,
            "unit": "ns",
            "range": "± 1017678.5187577964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69631864.86486487,
            "unit": "ns",
            "range": "± 3485151.4076279495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138495283.72093022,
            "unit": "ns",
            "range": "± 5078173.194918211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273002600,
            "unit": "ns",
            "range": "± 6059221.729944496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6533425.050403226,
            "unit": "ns",
            "range": "± 198813.001030468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2050067.2005208333,
            "unit": "ns",
            "range": "± 22928.376319986586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1600897.474888393,
            "unit": "ns",
            "range": "± 15230.793725745203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3342609.0104166665,
            "unit": "ns",
            "range": "± 51977.35050337717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1127902.3092830882,
            "unit": "ns",
            "range": "± 22572.10314459746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1039074.2453835227,
            "unit": "ns",
            "range": "± 25221.67345208485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4292600,
            "unit": "ns",
            "range": "± 260427.85908430387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4539131.632653061,
            "unit": "ns",
            "range": "± 358375.9609703624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5699070.212765957,
            "unit": "ns",
            "range": "± 329878.7195937538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5707921.276595744,
            "unit": "ns",
            "range": "± 373290.8978010962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9344807.692307692,
            "unit": "ns",
            "range": "± 469132.8576446955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356907.77777777775,
            "unit": "ns",
            "range": "± 41145.54115337402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350450,
            "unit": "ns",
            "range": "± 35951.681283310994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304356.04395604396,
            "unit": "ns",
            "range": "± 29893.816561628068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5291285.714285715,
            "unit": "ns",
            "range": "± 269492.0156586451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4841054.347826087,
            "unit": "ns",
            "range": "± 301499.72952552646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30084.042553191488,
            "unit": "ns",
            "range": "± 5919.628424685267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129680.85106382979,
            "unit": "ns",
            "range": "± 13511.771264670013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134830.8510638298,
            "unit": "ns",
            "range": "± 22024.5563176272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143744.5652173913,
            "unit": "ns",
            "range": "± 24000.78004286589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9156.818181818182,
            "unit": "ns",
            "range": "± 2188.359772820229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26904.347826086956,
            "unit": "ns",
            "range": "± 7176.333402821859"
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
        "date": 1688101998818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060411.224489796,
            "unit": "ns",
            "range": "± 125031.31227004579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843705.1282051282,
            "unit": "ns",
            "range": "± 89843.17779740762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1671852.5773195876,
            "unit": "ns",
            "range": "± 180631.83787102211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3811005.3333333335,
            "unit": "ns",
            "range": "± 181431.28242241315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33072.83950617284,
            "unit": "ns",
            "range": "± 1752.3564381768206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4959615.384615385,
            "unit": "ns",
            "range": "± 27895.78361669992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13169413.333333334,
            "unit": "ns",
            "range": "± 242391.2506278896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31798426.666666668,
            "unit": "ns",
            "range": "± 204690.02860306558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64259164.28571428,
            "unit": "ns",
            "range": "± 491532.13504329475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128555286.66666667,
            "unit": "ns",
            "range": "± 916465.4095776778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3590343.8337053573,
            "unit": "ns",
            "range": "± 7908.904700043632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113994.8016826923,
            "unit": "ns",
            "range": "± 1427.1020377502457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 799290.0065104166,
            "unit": "ns",
            "range": "± 1656.0781617661726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935428.6979166667,
            "unit": "ns",
            "range": "± 2553.5684940754445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620914.0169270834,
            "unit": "ns",
            "range": "± 1705.342478268479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580438.9229910715,
            "unit": "ns",
            "range": "± 494.3747689209004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2232736.3636363638,
            "unit": "ns",
            "range": "± 82907.38203424151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293030.909090909,
            "unit": "ns",
            "range": "± 91294.10526734822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2864134.6153846155,
            "unit": "ns",
            "range": "± 75569.51735882767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2914436.6666666665,
            "unit": "ns",
            "range": "± 62411.15330989537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4768262.068965517,
            "unit": "ns",
            "range": "± 207758.18249985794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179608.9552238806,
            "unit": "ns",
            "range": "± 8384.902220988655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171266.66666666666,
            "unit": "ns",
            "range": "± 7216.00889091231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145771.42857142858,
            "unit": "ns",
            "range": "± 2449.624326434431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2727277.777777778,
            "unit": "ns",
            "range": "± 47452.996007263435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2444302.6315789474,
            "unit": "ns",
            "range": "± 52899.10068990936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10822.340425531915,
            "unit": "ns",
            "range": "± 1545.17314722569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55665.9793814433,
            "unit": "ns",
            "range": "± 5888.210088068963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46261.70212765958,
            "unit": "ns",
            "range": "± 1812.9429823271576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58880.232558139534,
            "unit": "ns",
            "range": "± 8005.7746771049315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2732.9896907216494,
            "unit": "ns",
            "range": "± 667.6640949179548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9487.09677419355,
            "unit": "ns",
            "range": "± 1602.4591025407067"
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
        "date": 1688102649745,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615083.8383838383,
            "unit": "ns",
            "range": "± 229833.12566839493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2890887.634408602,
            "unit": "ns",
            "range": "± 282503.7913997133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2369632.9787234045,
            "unit": "ns",
            "range": "± 235985.88275085122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6488248.979591837,
            "unit": "ns",
            "range": "± 705568.0909581508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56855.434782608696,
            "unit": "ns",
            "range": "± 12824.079035376775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7974600,
            "unit": "ns",
            "range": "± 532468.7287933979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21009160.215053763,
            "unit": "ns",
            "range": "± 1196653.9208704976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55984477.083333336,
            "unit": "ns",
            "range": "± 3434283.134619575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109982073.13432837,
            "unit": "ns",
            "range": "± 5211818.08668158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253170113.69863012,
            "unit": "ns",
            "range": "± 12537745.087493857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5622313.240131579,
            "unit": "ns",
            "range": "± 122355.87200856459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834444.6223958333,
            "unit": "ns",
            "range": "± 30382.387097194332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338164.185546875,
            "unit": "ns",
            "range": "± 118594.70848386921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180707.9427083335,
            "unit": "ns",
            "range": "± 38003.28370001335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1052473.0338541667,
            "unit": "ns",
            "range": "± 14030.368649805101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978748.8346354166,
            "unit": "ns",
            "range": "± 12657.391256635929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3698545,
            "unit": "ns",
            "range": "± 274939.71180290164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3871426,
            "unit": "ns",
            "range": "± 340018.508296002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4860821.428571428,
            "unit": "ns",
            "range": "± 433473.19165849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4768275,
            "unit": "ns",
            "range": "± 495039.74564950564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8333204.12371134,
            "unit": "ns",
            "range": "± 616276.8587651856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312491.75257731957,
            "unit": "ns",
            "range": "± 38306.22683852863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304646.90721649484,
            "unit": "ns",
            "range": "± 36384.295643886224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259260.41666666666,
            "unit": "ns",
            "range": "± 40026.55823369139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4655181.443298969,
            "unit": "ns",
            "range": "± 306711.1321918316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056341.836734694,
            "unit": "ns",
            "range": "± 279635.5186366524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17100,
            "unit": "ns",
            "range": "± 1919.4906731850626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91326.59574468085,
            "unit": "ns",
            "range": "± 17337.244237444396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88230.52631578948,
            "unit": "ns",
            "range": "± 19160.19296356109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118860.82474226804,
            "unit": "ns",
            "range": "± 29627.09049129498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5285.106382978724,
            "unit": "ns",
            "range": "± 1056.669290062397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16397.5,
            "unit": "ns",
            "range": "± 2548.813325272882"
          }
        ]
      }
    ]
  }
}