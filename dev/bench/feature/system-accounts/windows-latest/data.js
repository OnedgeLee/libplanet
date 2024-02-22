window.BENCHMARK_DATA = {
  "lastUpdate": 1699878415952,
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
          "id": "a1e17dedc60ab7f155d177f49a047199e0eaa8f7",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:16:10+09:00",
          "tree_id": "45e06c704a38ef8a513bb4bba98a7669af30e64d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a1e17dedc60ab7f155d177f49a047199e0eaa8f7"
        },
        "date": 1699846512113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580353.6082474226,
            "unit": "ns",
            "range": "± 140351.14821245056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2943835.3535353537,
            "unit": "ns",
            "range": "± 184295.03814349562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2383662.5,
            "unit": "ns",
            "range": "± 158353.5798874086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10383860.759493671,
            "unit": "ns",
            "range": "± 535012.2007757421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55852.74725274725,
            "unit": "ns",
            "range": "± 5208.547263005741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8241256.701030928,
            "unit": "ns",
            "range": "± 782427.5221901835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22618411.224489797,
            "unit": "ns",
            "range": "± 1404989.867585187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58639511.25,
            "unit": "ns",
            "range": "± 3035492.4841389805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113009556.06060606,
            "unit": "ns",
            "range": "± 5250086.577722132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240170560.6060606,
            "unit": "ns",
            "range": "± 7527251.58199938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5438807.239583333,
            "unit": "ns",
            "range": "± 93956.73651558092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1801205.8984375,
            "unit": "ns",
            "range": "± 17987.06207366406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1272767.857142857,
            "unit": "ns",
            "range": "± 19748.211774644144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3033728.7890625,
            "unit": "ns",
            "range": "± 37158.75841586918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913998.1745793269,
            "unit": "ns",
            "range": "± 13801.07472695576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886525.3395257994,
            "unit": "ns",
            "range": "± 32637.104681799934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3664120.6896551726,
            "unit": "ns",
            "range": "± 158686.22659763743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3651769.0721649486,
            "unit": "ns",
            "range": "± 247986.22540745782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4494920.202020202,
            "unit": "ns",
            "range": "± 316642.5751601329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4415091.666666667,
            "unit": "ns",
            "range": "± 390097.04424646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11533299.45054945,
            "unit": "ns",
            "range": "± 855584.3505884833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278531.5789473684,
            "unit": "ns",
            "range": "± 17090.088350293237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256461.05263157896,
            "unit": "ns",
            "range": "± 21328.032171932504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246410.101010101,
            "unit": "ns",
            "range": "± 19704.451454748745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4656220.408163265,
            "unit": "ns",
            "range": "± 281766.1880599805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4192465.463917526,
            "unit": "ns",
            "range": "± 276666.0589878641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22736.458333333332,
            "unit": "ns",
            "range": "± 2586.447260205505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93920.52631578948,
            "unit": "ns",
            "range": "± 9788.256899177713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77420.21276595745,
            "unit": "ns",
            "range": "± 6608.280562843457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95281.31313131313,
            "unit": "ns",
            "range": "± 13616.898613484933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5781.25,
            "unit": "ns",
            "range": "± 917.0103024158683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23819.14893617021,
            "unit": "ns",
            "range": "± 2670.7606985206103"
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
          "id": "6fb4b41a576b865cc4572c8490d958c29091fca3",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:33:59+09:00",
          "tree_id": "b19686e24caebfd352ee8ff725a9e808ad850ef9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fb4b41a576b865cc4572c8490d958c29091fca3"
        },
        "date": 1699847154119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037588,
            "unit": "ns",
            "range": "± 125656.52501477143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827764.0625,
            "unit": "ns",
            "range": "± 81185.97182598336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1627913.6842105263,
            "unit": "ns",
            "range": "± 158024.07008314872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5878312.7450980395,
            "unit": "ns",
            "range": "± 238980.57825755156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35759.782608695656,
            "unit": "ns",
            "range": "± 2804.5904201414446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4869964.285714285,
            "unit": "ns",
            "range": "± 46585.89431845813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12944292.857142856,
            "unit": "ns",
            "range": "± 89408.13475539886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31968840,
            "unit": "ns",
            "range": "± 499050.76151773235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69509805.55555555,
            "unit": "ns",
            "range": "± 2301697.51220323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128120253.33333333,
            "unit": "ns",
            "range": "± 798072.2039180832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3347275.8370535714,
            "unit": "ns",
            "range": "± 33427.4408946297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075789.5182291667,
            "unit": "ns",
            "range": "± 4307.720439105149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745643.1770833334,
            "unit": "ns",
            "range": "± 2184.46881782291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969243.7220982143,
            "unit": "ns",
            "range": "± 4615.882482825913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622953.1705729166,
            "unit": "ns",
            "range": "± 1870.453601368854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553832.4358258928,
            "unit": "ns",
            "range": "± 1263.943273488541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234977.5862068967,
            "unit": "ns",
            "range": "± 97414.7059093478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2353357.1428571427,
            "unit": "ns",
            "range": "± 93669.2541161008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834950,
            "unit": "ns",
            "range": "± 131747.72162677484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2843959.210526316,
            "unit": "ns",
            "range": "± 143554.76834307902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6788304.651162791,
            "unit": "ns",
            "range": "± 202124.11669387744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174943.8202247191,
            "unit": "ns",
            "range": "± 13170.481414685888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171189.0625,
            "unit": "ns",
            "range": "± 7924.547299423081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145915.09433962265,
            "unit": "ns",
            "range": "± 6053.555732803627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2710021.4285714286,
            "unit": "ns",
            "range": "± 47724.391902019895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2507353.846153846,
            "unit": "ns",
            "range": "± 33127.62229581772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13018.08510638298,
            "unit": "ns",
            "range": "± 1960.6868867689805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59581.05263157895,
            "unit": "ns",
            "range": "± 7257.751464950263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48489.583333333336,
            "unit": "ns",
            "range": "± 5984.7258067898265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65384.69387755102,
            "unit": "ns",
            "range": "± 8632.369578771417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3605.2631578947367,
            "unit": "ns",
            "range": "± 639.7087803275953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14026.530612244898,
            "unit": "ns",
            "range": "± 3794.557986575805"
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
          "id": "d9eac1d6b471ee70e78ed20376ddde6b5d915677",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:29:51+09:00",
          "tree_id": "c3534bd65f6ceb690ba603890cfc673abc68542c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9eac1d6b471ee70e78ed20376ddde6b5d915677"
        },
        "date": 1699847268221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431092.7835051545,
            "unit": "ns",
            "range": "± 138495.20467587697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2639445.6140350876,
            "unit": "ns",
            "range": "± 113081.44042202416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157739.5833333335,
            "unit": "ns",
            "range": "± 130971.26842750194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9358191.111111112,
            "unit": "ns",
            "range": "± 533505.4606555714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55218.181818181816,
            "unit": "ns",
            "range": "± 5158.792052020762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7704884.615384615,
            "unit": "ns",
            "range": "± 188244.436182975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21507794.11764706,
            "unit": "ns",
            "range": "± 420524.02052467264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54524613.333333336,
            "unit": "ns",
            "range": "± 747035.1128357514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108175783.33333333,
            "unit": "ns",
            "range": "± 1286412.0888661426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216351160,
            "unit": "ns",
            "range": "± 1957078.7781793557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4666097.65625,
            "unit": "ns",
            "range": "± 16246.137260358044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505997.6432291667,
            "unit": "ns",
            "range": "± 4162.760891893019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082813.828125,
            "unit": "ns",
            "range": "± 3159.80961010504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662250.2083333335,
            "unit": "ns",
            "range": "± 6815.531948423292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853882.9361979166,
            "unit": "ns",
            "range": "± 3175.344820353611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765170.8463541666,
            "unit": "ns",
            "range": "± 2562.5341687909468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3414730.769230769,
            "unit": "ns",
            "range": "± 80684.50542318901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3576132.2033898304,
            "unit": "ns",
            "range": "± 157415.0109398697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4217892.592592592,
            "unit": "ns",
            "range": "± 110292.06654614801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4283386.363636363,
            "unit": "ns",
            "range": "± 147870.73328827965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10577358.333333334,
            "unit": "ns",
            "range": "± 413089.76296865975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266006.862745098,
            "unit": "ns",
            "range": "± 10832.160539836193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255610.52631578947,
            "unit": "ns",
            "range": "± 10990.802716858414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240750,
            "unit": "ns",
            "range": "± 18103.046788601718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4311521.428571428,
            "unit": "ns",
            "range": "± 62673.31880561209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3976981.25,
            "unit": "ns",
            "range": "± 76068.47107485904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25442.708333333332,
            "unit": "ns",
            "range": "± 3011.4778603716763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97926.26262626263,
            "unit": "ns",
            "range": "± 10185.259315210327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79455.78947368421,
            "unit": "ns",
            "range": "± 6363.086963093308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101675.51020408163,
            "unit": "ns",
            "range": "± 11809.694263738904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6640,
            "unit": "ns",
            "range": "± 1168.2319792946982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24523.958333333332,
            "unit": "ns",
            "range": "± 2582.114384178682"
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
          "id": "dd3a0138cf5d44fde8849a3fcf179a9932b7f211",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T12:56:34+09:00",
          "tree_id": "24d7897cae211acb13f8debdd202323fad687f34",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd3a0138cf5d44fde8849a3fcf179a9932b7f211"
        },
        "date": 1699848996012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637244.3298969073,
            "unit": "ns",
            "range": "± 152657.20242389492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008083.695652174,
            "unit": "ns",
            "range": "± 173137.9290580194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2355517.777777778,
            "unit": "ns",
            "range": "± 132411.2580313064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10451881.318681318,
            "unit": "ns",
            "range": "± 872214.80317027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58394.68085106383,
            "unit": "ns",
            "range": "± 4543.206366719116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9555620,
            "unit": "ns",
            "range": "± 175421.1837671999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25724646.153846152,
            "unit": "ns",
            "range": "± 375956.31974868354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63236814.28571428,
            "unit": "ns",
            "range": "± 1047699.183087282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124969373.33333333,
            "unit": "ns",
            "range": "± 1946417.3577798433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257856696.42857143,
            "unit": "ns",
            "range": "± 7275856.896943589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5570000.811298077,
            "unit": "ns",
            "range": "± 48113.77831789325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1781662.6041666667,
            "unit": "ns",
            "range": "± 28621.499640977796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332939.9639423077,
            "unit": "ns",
            "range": "± 10632.139733031125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3193596.1458333335,
            "unit": "ns",
            "range": "± 54197.38320670508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021653.017578125,
            "unit": "ns",
            "range": "± 23271.72795546194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892533.73046875,
            "unit": "ns",
            "range": "± 10733.072127794392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865092.7710843375,
            "unit": "ns",
            "range": "± 205439.27402753144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4154042.4242424243,
            "unit": "ns",
            "range": "± 130643.92214695406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4999464.102564103,
            "unit": "ns",
            "range": "± 174213.78803246538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4871273.1707317075,
            "unit": "ns",
            "range": "± 173495.25213156448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12364360.37735849,
            "unit": "ns",
            "range": "± 512139.2720508533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303442.85714285716,
            "unit": "ns",
            "range": "± 11857.926322366262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290948.83720930235,
            "unit": "ns",
            "range": "± 10610.111351981168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261981.4814814815,
            "unit": "ns",
            "range": "± 13670.324713691984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4913991.666666667,
            "unit": "ns",
            "range": "± 75165.45940708929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4526716.666666667,
            "unit": "ns",
            "range": "± 83233.48971131638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25463.26530612245,
            "unit": "ns",
            "range": "± 2254.5892603777593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103085.26315789473,
            "unit": "ns",
            "range": "± 7573.652094401516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84924.21052631579,
            "unit": "ns",
            "range": "± 4923.342485730899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98921.11111111111,
            "unit": "ns",
            "range": "± 8615.852836479693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5982.608695652174,
            "unit": "ns",
            "range": "± 825.2350575098801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24211.956521739132,
            "unit": "ns",
            "range": "± 1515.186304237999"
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
          "id": "cddf259f19b015b7c8bf7f9c0e0d7a31e461a3d7",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T20:49:16+09:00",
          "tree_id": "44bd32e411287530b667e6e8e0c88c3488b934a8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/cddf259f19b015b7c8bf7f9c0e0d7a31e461a3d7"
        },
        "date": 1699876878423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976947.9591836735,
            "unit": "ns",
            "range": "± 81684.35632333207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1825114.5161290322,
            "unit": "ns",
            "range": "± 83008.73170893507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1556940,
            "unit": "ns",
            "range": "± 171062.56578848985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5753305.479452055,
            "unit": "ns",
            "range": "± 285880.6005089124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33960,
            "unit": "ns",
            "range": "± 1326.3148612268171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4906821.428571428,
            "unit": "ns",
            "range": "± 36210.754428259796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12735764.285714285,
            "unit": "ns",
            "range": "± 128544.32702764058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31622292.85714286,
            "unit": "ns",
            "range": "± 275089.6146692948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64469846.666666664,
            "unit": "ns",
            "range": "± 609402.8609650441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126524526.66666667,
            "unit": "ns",
            "range": "± 783707.0712478035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294932.2916666665,
            "unit": "ns",
            "range": "± 8064.562907767153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046432.7985491072,
            "unit": "ns",
            "range": "± 1780.1210576656256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731138.9787946428,
            "unit": "ns",
            "range": "± 788.2879168489911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947681.4583333333,
            "unit": "ns",
            "range": "± 4498.494475557265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602205,
            "unit": "ns",
            "range": "± 1275.5780473495915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564813.9299665178,
            "unit": "ns",
            "range": "± 986.6585290438647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140072.727272727,
            "unit": "ns",
            "range": "± 51723.119835728445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2334324,
            "unit": "ns",
            "range": "± 60272.65327935492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803546.6666666665,
            "unit": "ns",
            "range": "± 41773.34876050359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2749707.3170731706,
            "unit": "ns",
            "range": "± 96575.79507890138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6531101.960784313,
            "unit": "ns",
            "range": "± 226048.77570134818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170313.7931034483,
            "unit": "ns",
            "range": "± 10136.741511369617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165593.4065934066,
            "unit": "ns",
            "range": "± 10869.33302868214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143392.59259259258,
            "unit": "ns",
            "range": "± 6055.2753190402545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2693135.714285714,
            "unit": "ns",
            "range": "± 33652.58264504106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2463680,
            "unit": "ns",
            "range": "± 34947.372678684405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10752.631578947368,
            "unit": "ns",
            "range": "± 2107.274235415856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52568.81720430108,
            "unit": "ns",
            "range": "± 4421.463914927402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43961.59420289855,
            "unit": "ns",
            "range": "± 2120.1093362402225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50389.36170212766,
            "unit": "ns",
            "range": "± 7983.241426526974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2379.569892473118,
            "unit": "ns",
            "range": "± 315.7321167041238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9751.136363636364,
            "unit": "ns",
            "range": "± 969.6538448809306"
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
          "id": "5ac8c766158e92eb66ce92b1d186c1e8f2d861cc",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T20:47:09+09:00",
          "tree_id": "24d7897cae211acb13f8debdd202323fad687f34",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5ac8c766158e92eb66ce92b1d186c1e8f2d861cc"
        },
        "date": 1699876944600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325824.4897959183,
            "unit": "ns",
            "range": "± 122840.64109816063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2363280.487804878,
            "unit": "ns",
            "range": "± 68246.83223239082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1965415.4761904762,
            "unit": "ns",
            "range": "± 103731.78747860008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7659302.702702703,
            "unit": "ns",
            "range": "± 222576.4818444893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43364.86486486487,
            "unit": "ns",
            "range": "± 2165.763014169171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6902453.846153846,
            "unit": "ns",
            "range": "± 34813.97265908751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17651540,
            "unit": "ns",
            "range": "± 86433.50706096069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44481650,
            "unit": "ns",
            "range": "± 246429.90577756276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90968833.33333333,
            "unit": "ns",
            "range": "± 1186776.4073120013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180288557.14285713,
            "unit": "ns",
            "range": "± 1291487.5028218643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4537267.020089285,
            "unit": "ns",
            "range": "± 5450.186420478644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1469162.5558035714,
            "unit": "ns",
            "range": "± 2846.384409297161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073287.0638020833,
            "unit": "ns",
            "range": "± 888.2389468262433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568888.671875,
            "unit": "ns",
            "range": "± 2587.600944029564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804624.1861979166,
            "unit": "ns",
            "range": "± 441.31787390044786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722865.3599330357,
            "unit": "ns",
            "range": "± 608.2003296112478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2983579.5454545454,
            "unit": "ns",
            "range": "± 111267.32021858795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3153835.714285714,
            "unit": "ns",
            "range": "± 29197.756951331226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3916640.909090909,
            "unit": "ns",
            "range": "± 91502.1553693105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3671272.727272727,
            "unit": "ns",
            "range": "± 147656.09750807154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9188217.647058824,
            "unit": "ns",
            "range": "± 212542.19042215456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248747.0588235294,
            "unit": "ns",
            "range": "± 4666.652661043409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231263.04347826086,
            "unit": "ns",
            "range": "± 8896.956001181332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205212.28070175438,
            "unit": "ns",
            "range": "± 8815.572061808714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3745814.285714286,
            "unit": "ns",
            "range": "± 25200.42298615876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3421603.3333333335,
            "unit": "ns",
            "range": "± 41436.78260170489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17589.473684210527,
            "unit": "ns",
            "range": "± 1506.1910311021147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78863.15789473684,
            "unit": "ns",
            "range": "± 5228.157248924795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64917.64705882353,
            "unit": "ns",
            "range": "± 1800.457953231545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75053.1914893617,
            "unit": "ns",
            "range": "± 7453.2767150357795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3943.181818181818,
            "unit": "ns",
            "range": "± 346.0102498466702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16086.170212765957,
            "unit": "ns",
            "range": "± 1492.3893711870946"
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
          "id": "4cc7bc88c643ca83f6ee9bcda3edb34b72114d21",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T21:05:11+09:00",
          "tree_id": "f1e405099a0ac4a026172f41bb24687b6225b85b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4cc7bc88c643ca83f6ee9bcda3edb34b72114d21"
        },
        "date": 1699878368863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1720511.5789473683,
            "unit": "ns",
            "range": "± 207832.06695789524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3223518.2795698927,
            "unit": "ns",
            "range": "± 347093.7290235056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2564022.580645161,
            "unit": "ns",
            "range": "± 249785.0358978401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11691655.555555556,
            "unit": "ns",
            "range": "± 1196158.2057919411"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63721.05263157895,
            "unit": "ns",
            "range": "± 16485.847539418322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9076022.448979592,
            "unit": "ns",
            "range": "± 872001.9503111894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25378141.93548387,
            "unit": "ns",
            "range": "± 1469456.5428669453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65836200,
            "unit": "ns",
            "range": "± 3040643.828943593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134154087.5,
            "unit": "ns",
            "range": "± 2602021.139262067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258581100,
            "unit": "ns",
            "range": "± 5761981.150428621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5529874.519230769,
            "unit": "ns",
            "range": "± 72233.94056430591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808496.0416666667,
            "unit": "ns",
            "range": "± 27739.3607420964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329827.2005208333,
            "unit": "ns",
            "range": "± 22144.345738088556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3210746.6927083335,
            "unit": "ns",
            "range": "± 45574.94874064354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028650.0139508928,
            "unit": "ns",
            "range": "± 13560.43936548546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980422.0703125,
            "unit": "ns",
            "range": "± 12904.682254636782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3755536.559139785,
            "unit": "ns",
            "range": "± 324275.1943833811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4039517.8947368423,
            "unit": "ns",
            "range": "± 390404.65776426304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5296766.129032258,
            "unit": "ns",
            "range": "± 401889.6840012093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4836842.929292929,
            "unit": "ns",
            "range": "± 430711.93703518016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13793630.107526882,
            "unit": "ns",
            "range": "± 1310193.4730002205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304193.6170212766,
            "unit": "ns",
            "range": "± 38398.263313412484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307383.3333333333,
            "unit": "ns",
            "range": "± 48670.3728461418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266095.8333333333,
            "unit": "ns",
            "range": "± 42171.282113397014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4620113.043478261,
            "unit": "ns",
            "range": "± 322977.2605262003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4319960.638297873,
            "unit": "ns",
            "range": "± 332837.3722871067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27046.39175257732,
            "unit": "ns",
            "range": "± 10136.485891073457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105332.97872340426,
            "unit": "ns",
            "range": "± 20883.11757458524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110205.37634408602,
            "unit": "ns",
            "range": "± 22830.254362555832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119612.63157894737,
            "unit": "ns",
            "range": "± 22309.740464578797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7643.181818181818,
            "unit": "ns",
            "range": "± 1564.6817056914135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28328.571428571428,
            "unit": "ns",
            "range": "± 9736.984439721644"
          }
        ]
      }
    ]
  }
}