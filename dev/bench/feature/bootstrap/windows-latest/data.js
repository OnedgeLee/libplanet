window.BENCHMARK_DATA = {
  "lastUpdate": 1688113653196,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687707467148,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435498.969072165,
            "unit": "ns",
            "range": "± 145761.76374399237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2633406.5573770492,
            "unit": "ns",
            "range": "± 117389.9056830874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232524.4897959186,
            "unit": "ns",
            "range": "± 129786.63542242355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5477532.7272727275,
            "unit": "ns",
            "range": "± 229928.58476987173"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49864.21052631579,
            "unit": "ns",
            "range": "± 4112.433554775227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6910130,
            "unit": "ns",
            "range": "± 119518.17076435342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20007821.42857143,
            "unit": "ns",
            "range": "± 286898.55665929517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48888390.47619048,
            "unit": "ns",
            "range": "± 1134146.9040229144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97440010.5263158,
            "unit": "ns",
            "range": "± 2082798.145896454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194373850,
            "unit": "ns",
            "range": "± 1807748.9872515737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4757232.786458333,
            "unit": "ns",
            "range": "± 27477.97404953904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514337.5,
            "unit": "ns",
            "range": "± 8386.57347069332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162531.0546875,
            "unit": "ns",
            "range": "± 4679.363739583002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683978.9899553573,
            "unit": "ns",
            "range": "± 6375.772509465673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818642.5260416666,
            "unit": "ns",
            "range": "± 3553.509603403899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758139.8716517857,
            "unit": "ns",
            "range": "± 2181.1062643921946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3127965.714285714,
            "unit": "ns",
            "range": "± 101484.35678600376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3358280,
            "unit": "ns",
            "range": "± 98825.9403332881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4080828,
            "unit": "ns",
            "range": "± 164349.93532343215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119000,
            "unit": "ns",
            "range": "± 178607.9426928782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6610921.739130435,
            "unit": "ns",
            "range": "± 157948.78041061788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270047.54098360654,
            "unit": "ns",
            "range": "± 10828.47490888994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258744,
            "unit": "ns",
            "range": "± 10026.763369775383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237543,
            "unit": "ns",
            "range": "± 15521.976958070409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4063178.5714285714,
            "unit": "ns",
            "range": "± 67542.22814223397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3639415,
            "unit": "ns",
            "range": "± 80503.56170610354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21027.083333333332,
            "unit": "ns",
            "range": "± 2193.842059596848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95478.35051546391,
            "unit": "ns",
            "range": "± 8634.345502170914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72901.38888888889,
            "unit": "ns",
            "range": "± 3602.0140319093684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102093.68421052632,
            "unit": "ns",
            "range": "± 13459.362086353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5386.170212765957,
            "unit": "ns",
            "range": "± 836.8657686882076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20728.865979381444,
            "unit": "ns",
            "range": "± 2382.224046754358"
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
          "id": "6d4e0b50cf276f025278eb8168694289e9de6f70",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T11:45:00+09:00",
          "tree_id": "3afb7d3a4ddd2659a2040eb1755753bbb3201465",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d4e0b50cf276f025278eb8168694289e9de6f70"
        },
        "date": 1687748745825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595644.7916666667,
            "unit": "ns",
            "range": "± 122534.48483013964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2992725.641025641,
            "unit": "ns",
            "range": "± 101382.93668834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2575121.052631579,
            "unit": "ns",
            "range": "± 171643.37775323505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6446438.095238095,
            "unit": "ns",
            "range": "± 344943.9716700509"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52768.131868131866,
            "unit": "ns",
            "range": "± 3144.585438880232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148933.333333333,
            "unit": "ns",
            "range": "± 147374.43888984018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22865776.470588237,
            "unit": "ns",
            "range": "± 389232.7027778687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58269136.36363637,
            "unit": "ns",
            "range": "± 2154816.067917146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117492762.22222222,
            "unit": "ns",
            "range": "± 4263927.858756145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246029564.51612905,
            "unit": "ns",
            "range": "± 7478920.9279391095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873611.376953125,
            "unit": "ns",
            "range": "± 113036.67094707766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851329.6456473214,
            "unit": "ns",
            "range": "± 24632.43552078823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1458701.6845703125,
            "unit": "ns",
            "range": "± 28414.6109909444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3187689.4010416665,
            "unit": "ns",
            "range": "± 36025.661985405626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996633.0775669643,
            "unit": "ns",
            "range": "± 8906.927318063315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956276.9791666666,
            "unit": "ns",
            "range": "± 16299.221634249157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3542559.4594594594,
            "unit": "ns",
            "range": "± 118377.66413629882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3773682.2580645164,
            "unit": "ns",
            "range": "± 114823.2769290756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4868971.428571428,
            "unit": "ns",
            "range": "± 177781.91118404275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5071600,
            "unit": "ns",
            "range": "± 154393.97865577947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7861737.5,
            "unit": "ns",
            "range": "± 234447.10215670703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304092.1568627451,
            "unit": "ns",
            "range": "± 12300.225089603113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294213.5135135135,
            "unit": "ns",
            "range": "± 9988.219788057055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275245.8823529412,
            "unit": "ns",
            "range": "± 14775.01553412427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4860080,
            "unit": "ns",
            "range": "± 106691.05225640502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4334300,
            "unit": "ns",
            "range": "± 119133.34481224745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22288.297872340427,
            "unit": "ns",
            "range": "± 2040.180067057055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94663.15789473684,
            "unit": "ns",
            "range": "± 7940.8592255977865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86125.77319587629,
            "unit": "ns",
            "range": "± 7530.497415378619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107035.05154639175,
            "unit": "ns",
            "range": "± 19081.486671406536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5797.938144329897,
            "unit": "ns",
            "range": "± 1083.491595629928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20638.46153846154,
            "unit": "ns",
            "range": "± 1383.9371558282737"
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
          "id": "358a6f0e875a4941ee9fcf3ba4aa438597d60753",
          "message": "chore: Fix minor log error",
          "timestamp": "2023-06-30T15:35:33+09:00",
          "tree_id": "5139fe988c359cc333559af2640b8aaba2223695",
          "url": "https://github.com/OnedgeLee/libplanet/commit/358a6f0e875a4941ee9fcf3ba4aa438597d60753"
        },
        "date": 1688107964946,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375975.7894736843,
            "unit": "ns",
            "range": "± 94077.95286955078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2694307.9545454546,
            "unit": "ns",
            "range": "± 147274.50265202124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2275041.758241758,
            "unit": "ns",
            "range": "± 139064.6412971193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5646252.173913044,
            "unit": "ns",
            "range": "± 316864.957015182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49570.786516853936,
            "unit": "ns",
            "range": "± 3956.7032376367615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7407641.176470588,
            "unit": "ns",
            "range": "± 73340.26911274195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21104826.666666668,
            "unit": "ns",
            "range": "± 265262.6339166166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52542978.571428575,
            "unit": "ns",
            "range": "± 683504.4777058568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107104007.14285715,
            "unit": "ns",
            "range": "± 1399681.5299666103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214089385.7142857,
            "unit": "ns",
            "range": "± 2754157.1671418245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4965819.681490385,
            "unit": "ns",
            "range": "± 22755.886869235976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1560896.77734375,
            "unit": "ns",
            "range": "± 3794.8901935162444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228147.2526041667,
            "unit": "ns",
            "range": "± 4975.867849521509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694099.90234375,
            "unit": "ns",
            "range": "± 3806.4462299390393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840875.2083333334,
            "unit": "ns",
            "range": "± 3490.055085782067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793082.8822544643,
            "unit": "ns",
            "range": "± 2755.755518293381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3377764.210526316,
            "unit": "ns",
            "range": "± 207768.66529858447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3648928.125,
            "unit": "ns",
            "range": "± 169080.29225245205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4356170,
            "unit": "ns",
            "range": "± 142313.37973388887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4422040,
            "unit": "ns",
            "range": "± 143526.34601354555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7111594.915254237,
            "unit": "ns",
            "range": "± 309815.09859677136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272905.0847457627,
            "unit": "ns",
            "range": "± 11956.176065673506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257808.86075949366,
            "unit": "ns",
            "range": "± 13394.642919536973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246652.57731958764,
            "unit": "ns",
            "range": "± 19301.67896833236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4250193.333333333,
            "unit": "ns",
            "range": "± 78910.86713742888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3903731.25,
            "unit": "ns",
            "range": "± 75552.97231082308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22520.833333333332,
            "unit": "ns",
            "range": "± 2762.9852911838398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92757,
            "unit": "ns",
            "range": "± 9227.6402424696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84101.04166666667,
            "unit": "ns",
            "range": "± 8408.560735366718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106242.85714285714,
            "unit": "ns",
            "range": "± 17649.876609480783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6423.232323232323,
            "unit": "ns",
            "range": "± 1444.8944797873849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21271.875,
            "unit": "ns",
            "range": "± 2817.266428930524"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "e6d31e4900e12712070d8f7991e213da276d37e1",
          "message": "doc: Update changelog",
          "timestamp": "2023-06-30T15:56:46+09:00",
          "tree_id": "a80ff390fc04066eda03f6af8d55884df0abeae9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6d31e4900e12712070d8f7991e213da276d37e1"
        },
        "date": 1688109133236,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349117,
            "unit": "ns",
            "range": "± 105815.93228934208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2515092.0634920634,
            "unit": "ns",
            "range": "± 110664.74698980918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1705595.8762886599,
            "unit": "ns",
            "range": "± 120642.30784078695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5000061.458333333,
            "unit": "ns",
            "range": "± 287605.48504021845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45845.744680851065,
            "unit": "ns",
            "range": "± 2624.805774427134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7160380,
            "unit": "ns",
            "range": "± 61396.48896429548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19963926.666666668,
            "unit": "ns",
            "range": "± 257603.6420180281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50632923.52941176,
            "unit": "ns",
            "range": "± 1038826.1311026812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98858685.18518518,
            "unit": "ns",
            "range": "± 2684413.6640562834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199170852.3809524,
            "unit": "ns",
            "range": "± 4608007.406202712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4836737.916666667,
            "unit": "ns",
            "range": "± 20875.189597342138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529715.9765625,
            "unit": "ns",
            "range": "± 6898.060395004872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1201791.5104166667,
            "unit": "ns",
            "range": "± 6563.066106496367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648209.3619791665,
            "unit": "ns",
            "range": "± 11934.16434099808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853292.2265625,
            "unit": "ns",
            "range": "± 2943.8097677969595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793786.328125,
            "unit": "ns",
            "range": "± 2574.258384573127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3115732.0754716983,
            "unit": "ns",
            "range": "± 128854.80166806851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3351966.037735849,
            "unit": "ns",
            "range": "± 137376.94765665775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4047807.1428571427,
            "unit": "ns",
            "range": "± 113446.44985246117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821516.6666666665,
            "unit": "ns",
            "range": "± 138834.1068601022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6271996,
            "unit": "ns",
            "range": "± 249793.7262982383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276012.34567901236,
            "unit": "ns",
            "range": "± 14221.835172684725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258753.33333333334,
            "unit": "ns",
            "range": "± 13066.465571168148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232716,
            "unit": "ns",
            "range": "± 14517.170050069202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4202420,
            "unit": "ns",
            "range": "± 37589.059958602695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774908.695652174,
            "unit": "ns",
            "range": "± 93319.9282675341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18532.25806451613,
            "unit": "ns",
            "range": "± 1784.5448384685965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82876.92307692308,
            "unit": "ns",
            "range": "± 5196.859669776588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72000,
            "unit": "ns",
            "range": "± 3080.704585113727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98482.29166666667,
            "unit": "ns",
            "range": "± 14996.603087588424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5416.326530612245,
            "unit": "ns",
            "range": "± 1086.4625163782946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18470.833333333332,
            "unit": "ns",
            "range": "± 1859.3669928325307"
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
          "id": "366fb48e48271b3a478d0588c3b9614567a11dcd",
          "message": "doc: Update changelog",
          "timestamp": "2023-06-30T15:56:04+09:00",
          "tree_id": "1bc5be6498024519ddb30f3bf4d09536f7ff40d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/366fb48e48271b3a478d0588c3b9614567a11dcd"
        },
        "date": 1688109138414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1469753.3333333333,
            "unit": "ns",
            "range": "± 24137.518710998644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508122.5490196077,
            "unit": "ns",
            "range": "± 102438.98101490736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279058.695652174,
            "unit": "ns",
            "range": "± 86360.82593420842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5279130.6122448975,
            "unit": "ns",
            "range": "± 209388.9773484603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46553.125,
            "unit": "ns",
            "range": "± 3633.758475448628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7226092.857142857,
            "unit": "ns",
            "range": "± 75961.71570434183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20391950,
            "unit": "ns",
            "range": "± 307497.6991783841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51970507.14285714,
            "unit": "ns",
            "range": "± 629295.1019431745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104539271.42857143,
            "unit": "ns",
            "range": "± 1297850.2476305675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208749353.33333334,
            "unit": "ns",
            "range": "± 3201330.567763229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4942791.71875,
            "unit": "ns",
            "range": "± 30161.69038320732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567632.4869791667,
            "unit": "ns",
            "range": "± 5298.842061819078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1209245.625,
            "unit": "ns",
            "range": "± 4244.267666618714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674901.0677083335,
            "unit": "ns",
            "range": "± 5548.284541863369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833725.6315104166,
            "unit": "ns",
            "range": "± 3171.042642900393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793346.1197916666,
            "unit": "ns",
            "range": "± 2485.6059596250534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3354386.6666666665,
            "unit": "ns",
            "range": "± 51883.28751929203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528374.074074074,
            "unit": "ns",
            "range": "± 93558.25660473468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4177497.8723404254,
            "unit": "ns",
            "range": "± 161199.88603049386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4242404.166666667,
            "unit": "ns",
            "range": "± 109847.33073152293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6859854.347826087,
            "unit": "ns",
            "range": "± 262695.456718757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266043.24324324325,
            "unit": "ns",
            "range": "± 8489.750046724335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259950,
            "unit": "ns",
            "range": "± 9070.89974711562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243915.46391752578,
            "unit": "ns",
            "range": "± 14079.693860649882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4164864.285714286,
            "unit": "ns",
            "range": "± 64737.06116215107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3696780,
            "unit": "ns",
            "range": "± 67208.88759255409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21704.21052631579,
            "unit": "ns",
            "range": "± 2142.8215535891723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91488.17204301075,
            "unit": "ns",
            "range": "± 5652.853251511395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75945.74468085106,
            "unit": "ns",
            "range": "± 5177.466995863032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98450,
            "unit": "ns",
            "range": "± 15026.601412162365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5575.257731958763,
            "unit": "ns",
            "range": "± 848.6546863314328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19077.894736842107,
            "unit": "ns",
            "range": "± 1596.4174617580602"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b2406f5d316d1d8493aec1f6c2afab24f119415",
          "message": "chore: Fix logging message for convention\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-06-30T17:10:41+09:00",
          "tree_id": "753ab2418e73179ecb086c6b2e27e146577fcc70",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4b2406f5d316d1d8493aec1f6c2afab24f119415"
        },
        "date": 1688113620650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372047,
            "unit": "ns",
            "range": "± 122809.12220173058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2514564.9122807016,
            "unit": "ns",
            "range": "± 108647.00622268833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1808375.7575757576,
            "unit": "ns",
            "range": "± 142719.71110158617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4969985.393258427,
            "unit": "ns",
            "range": "± 274254.6682914863"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47861.458333333336,
            "unit": "ns",
            "range": "± 3942.357557862438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7291500,
            "unit": "ns",
            "range": "± 101425.33441669523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19714016.666666668,
            "unit": "ns",
            "range": "± 414897.64187723957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50434500,
            "unit": "ns",
            "range": "± 691004.0004018997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101712188.23529412,
            "unit": "ns",
            "range": "± 2013907.9025250734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189500258.82352942,
            "unit": "ns",
            "range": "± 3728195.4059670116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841808.653846154,
            "unit": "ns",
            "range": "± 34266.53519561158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1495334.0104166667,
            "unit": "ns",
            "range": "± 17944.99494763929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171738.6848958333,
            "unit": "ns",
            "range": "± 8463.677832302372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602167.8385416665,
            "unit": "ns",
            "range": "± 13035.66393694825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828674.8502604166,
            "unit": "ns",
            "range": "± 3214.366538925834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758918.33984375,
            "unit": "ns",
            "range": "± 3891.515701456641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3040261.111111111,
            "unit": "ns",
            "range": "± 100472.95948314446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3267530.9278350514,
            "unit": "ns",
            "range": "± 202508.26596340493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4029333.3333333335,
            "unit": "ns",
            "range": "± 198461.46963473153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4002183.3333333335,
            "unit": "ns",
            "range": "± 100692.27191392797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6251807.692307692,
            "unit": "ns",
            "range": "± 257921.9359374216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272259.0909090909,
            "unit": "ns",
            "range": "± 12835.251665420717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266422.22222222225,
            "unit": "ns",
            "range": "± 12113.181895242891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245974,
            "unit": "ns",
            "range": "± 24180.93672730858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3852000,
            "unit": "ns",
            "range": "± 88379.09374125939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641400,
            "unit": "ns",
            "range": "± 110714.57636352514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20651,
            "unit": "ns",
            "range": "± 4538.065600444686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88089.79591836735,
            "unit": "ns",
            "range": "± 12531.325612536204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76322,
            "unit": "ns",
            "range": "± 10534.067676742057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100265.625,
            "unit": "ns",
            "range": "± 13971.413130690147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5995.918367346939,
            "unit": "ns",
            "range": "± 1125.6080480360347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19227.36842105263,
            "unit": "ns",
            "range": "± 1603.483050966502"
          }
        ]
      }
    ]
  }
}