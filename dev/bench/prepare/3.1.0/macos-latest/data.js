window.BENCHMARK_DATA = {
  "lastUpdate": 1689754314335,
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
          "id": "b987ed1de9341a5044f28330d58cc1a9e599e3c3",
          "message": "Prepare 3.1.0",
          "timestamp": "2023-07-19T16:52:32+09:00",
          "tree_id": "5dcf9daa64bd3ed48090b97e0fc1337876f861db",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b987ed1de9341a5044f28330d58cc1a9e599e3c3"
        },
        "date": 1689754280088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8629689.209302325,
            "unit": "ns",
            "range": "± 313980.64551804995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21680651.75,
            "unit": "ns",
            "range": "± 852949.8178085748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57290377.98214286,
            "unit": "ns",
            "range": "± 2429592.1611130536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108300087.53333333,
            "unit": "ns",
            "range": "± 2018018.7155975844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216805023.33333334,
            "unit": "ns",
            "range": "± 4620797.86492528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77068.73255813954,
            "unit": "ns",
            "range": "± 7048.023306822681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353736.34408602153,
            "unit": "ns",
            "range": "± 38948.9043811121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361358.8789473684,
            "unit": "ns",
            "range": "± 43564.07799966911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 338668.2083333333,
            "unit": "ns",
            "range": "± 46976.38410967045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333932.617021277,
            "unit": "ns",
            "range": "± 257473.97566644705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923487.7959183673,
            "unit": "ns",
            "range": "± 271265.42265706987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18807.145833333332,
            "unit": "ns",
            "range": "± 4037.597229669533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105941.1875,
            "unit": "ns",
            "range": "± 18395.939431420014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120775.70212765958,
            "unit": "ns",
            "range": "± 16349.255364865608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136934.16304347827,
            "unit": "ns",
            "range": "± 24145.906632946524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7613.831578947368,
            "unit": "ns",
            "range": "± 1425.3523614570922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22458.968085106382,
            "unit": "ns",
            "range": "± 4732.218726373424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731250.4329896907,
            "unit": "ns",
            "range": "± 271375.3356915591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3024790.524590164,
            "unit": "ns",
            "range": "± 134430.50553682706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2377103.7444444443,
            "unit": "ns",
            "range": "± 228307.72684082793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6280598.25,
            "unit": "ns",
            "range": "± 394947.89702447044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261412.775862069,
            "unit": "ns",
            "range": "± 141313.96281839992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3581868,
            "unit": "ns",
            "range": "± 63044.25309134968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4456017.645833333,
            "unit": "ns",
            "range": "± 175274.85971370546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5328129.433333334,
            "unit": "ns",
            "range": "± 1429863.7188573552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7558371.4,
            "unit": "ns",
            "range": "± 417003.727256853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6834602.55390625,
            "unit": "ns",
            "range": "± 121485.17433524293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2113761.308143029,
            "unit": "ns",
            "range": "± 56057.96409857477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363276.6470052083,
            "unit": "ns",
            "range": "± 15222.91363469433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2788017.4109375,
            "unit": "ns",
            "range": "± 118726.84335934349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908513.6530412947,
            "unit": "ns",
            "range": "± 14113.877948530162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886258.893639606,
            "unit": "ns",
            "range": "± 22140.41764570933"
          }
        ]
      }
    ]
  }
}