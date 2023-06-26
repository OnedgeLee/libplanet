window.BENCHMARK_DATA = {
  "lastUpdate": 1687748784116,
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
      }
    ]
  }
}