window.BENCHMARK_DATA = {
  "lastUpdate": 1687707505489,
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
      }
    ]
  }
}