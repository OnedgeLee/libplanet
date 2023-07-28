window.BENCHMARK_DATA = {
  "lastUpdate": 1690504486574,
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
      }
    ]
  }
}