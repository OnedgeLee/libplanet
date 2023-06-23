window.BENCHMARK_DATA = {
  "lastUpdate": 1687488189209,
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
      }
    ]
  }
}