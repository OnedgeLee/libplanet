window.BENCHMARK_DATA = {
  "lastUpdate": 1688474934467,
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
          "id": "0b225df110bba031ea1aa7b97806a03648949425",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-04T21:31:23+09:00",
          "tree_id": "7e2b739e9dfc5011a4fcf0809562b554ec8e6f8b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0b225df110bba031ea1aa7b97806a03648949425"
        },
        "date": 1688474890942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8800397.366666667,
            "unit": "ns",
            "range": "± 111195.24278741598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22660877.066666666,
            "unit": "ns",
            "range": "± 196654.2966235298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65502968.7,
            "unit": "ns",
            "range": "± 1404303.1464439316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114553817.9,
            "unit": "ns",
            "range": "± 3379333.1723965933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224982787.1,
            "unit": "ns",
            "range": "± 3681843.504026516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66374.42307692308,
            "unit": "ns",
            "range": "± 5564.660325524059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365497.22463768115,
            "unit": "ns",
            "range": "± 17235.271821508817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351786.83636363636,
            "unit": "ns",
            "range": "± 14754.163518796784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312794.53658536583,
            "unit": "ns",
            "range": "± 11108.190383895933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4760539.166666667,
            "unit": "ns",
            "range": "± 123256.09411044275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4311063.8,
            "unit": "ns",
            "range": "± 60186.72397772974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20455.731958762888,
            "unit": "ns",
            "range": "± 1996.0748436800072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99797.6914893617,
            "unit": "ns",
            "range": "± 7856.428376767755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94831.00515463918,
            "unit": "ns",
            "range": "± 9203.032753214778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113377.63157894737,
            "unit": "ns",
            "range": "± 10575.109875242917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5787.4,
            "unit": "ns",
            "range": "± 703.4220518143594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18850.22105263158,
            "unit": "ns",
            "range": "± 1933.8101745107851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845374.57,
            "unit": "ns",
            "range": "± 207475.02357736797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3328067.796296296,
            "unit": "ns",
            "range": "± 140243.52629156745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2376456.5520833335,
            "unit": "ns",
            "range": "± 182553.48264508648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6852322.444444444,
            "unit": "ns",
            "range": "± 225758.00085508052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3846740.238095238,
            "unit": "ns",
            "range": "± 88500.07916544752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4057449.2258064514,
            "unit": "ns",
            "range": "± 120732.79090501461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5100991.958333333,
            "unit": "ns",
            "range": "± 129302.09062618647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436202.428571428,
            "unit": "ns",
            "range": "± 135535.7335207834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8146888.583333333,
            "unit": "ns",
            "range": "± 255598.69926433786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6869333.176041666,
            "unit": "ns",
            "range": "± 125529.85573844775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2163396.0234375,
            "unit": "ns",
            "range": "± 40971.34691542966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1459577.3178385417,
            "unit": "ns",
            "range": "± 16353.120338787381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2874431.3453125,
            "unit": "ns",
            "range": "± 19256.65190362498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920124.5586588542,
            "unit": "ns",
            "range": "± 13339.048723779233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854700.903125,
            "unit": "ns",
            "range": "± 3881.625181642159"
          }
        ]
      }
    ]
  }
}