window.BENCHMARK_DATA = {
  "lastUpdate": 1698402887999,
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
          "id": "3cee42e6bd68fb9dc30ef5e7bbbd9b2dea3d1f2b",
          "message": "upgrade: Bencodex to 0.16.0",
          "timestamp": "2023-10-27T19:13:54+09:00",
          "tree_id": "c821710e38ec2b1153db4d6d61e6c3e9764c7d3a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3cee42e6bd68fb9dc30ef5e7bbbd9b2dea3d1f2b"
        },
        "date": 1698402858198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9977176.040816326,
            "unit": "ns",
            "range": "± 1767533.475929916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24468398.969387755,
            "unit": "ns",
            "range": "± 4205760.302280257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53465068.79473684,
            "unit": "ns",
            "range": "± 5707491.078900671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115890012.1875,
            "unit": "ns",
            "range": "± 16812743.26726907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264553897.5368421,
            "unit": "ns",
            "range": "± 40659416.691872306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69729.22916666667,
            "unit": "ns",
            "range": "± 18689.556992006423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296865.77659574465,
            "unit": "ns",
            "range": "± 65311.753176369864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331028.1808510638,
            "unit": "ns",
            "range": "± 83964.59754889311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287190.98924731184,
            "unit": "ns",
            "range": "± 79511.37323453286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5593407.963157895,
            "unit": "ns",
            "range": "± 1077603.2387927445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5078871.2,
            "unit": "ns",
            "range": "± 1023515.9180163767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28043.708333333332,
            "unit": "ns",
            "range": "± 5420.638866827543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121980.7052631579,
            "unit": "ns",
            "range": "± 26431.23404227114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107117.9574468085,
            "unit": "ns",
            "range": "± 21219.47466535019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111592.4010989011,
            "unit": "ns",
            "range": "± 17068.75602774128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9400.731182795698,
            "unit": "ns",
            "range": "± 1588.1605242748258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27706.170103092783,
            "unit": "ns",
            "range": "± 4820.4249028691465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1593848.2368421052,
            "unit": "ns",
            "range": "± 554241.0890087647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3178458.2989690723,
            "unit": "ns",
            "range": "± 810984.0521090485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2347113.0154639175,
            "unit": "ns",
            "range": "± 570858.919865771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11021305.252631579,
            "unit": "ns",
            "range": "± 2947294.01556963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4480206.358695652,
            "unit": "ns",
            "range": "± 1005063.2551353719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4632017.294736842,
            "unit": "ns",
            "range": "± 1087127.6606705382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4140163.6263736263,
            "unit": "ns",
            "range": "± 582515.0345356218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4536848.51010101,
            "unit": "ns",
            "range": "± 1031069.4151679634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13126961.697674418,
            "unit": "ns",
            "range": "± 1969876.9265345717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6407848.58727904,
            "unit": "ns",
            "range": "± 956481.4691610871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1506893.4670410156,
            "unit": "ns",
            "range": "± 73707.21318542419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 965320.7469308035,
            "unit": "ns",
            "range": "± 15529.109898027244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2410866.501613451,
            "unit": "ns",
            "range": "± 91520.6132049066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626912.2910853794,
            "unit": "ns",
            "range": "± 6303.03522945683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577598.3205217634,
            "unit": "ns",
            "range": "± 2676.2698645761084"
          }
        ]
      }
    ]
  }
}