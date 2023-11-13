window.BENCHMARK_DATA = {
  "lastUpdate": 1699847178692,
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
      }
    ]
  }
}