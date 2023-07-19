window.BENCHMARK_DATA = {
  "lastUpdate": 1689754327609,
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
        "date": 1689754291583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606797.93814433,
            "unit": "ns",
            "range": "± 158499.13181898234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949054.2168674697,
            "unit": "ns",
            "range": "± 157447.25349919635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075739.1304347827,
            "unit": "ns",
            "range": "± 173900.42240754122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5581215.217391305,
            "unit": "ns",
            "range": "± 312813.0438860038"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68882.32323232324,
            "unit": "ns",
            "range": "± 10848.74513840786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8587025,
            "unit": "ns",
            "range": "± 74584.023697499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21945310.169491526,
            "unit": "ns",
            "range": "± 960665.3487602181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53622570,
            "unit": "ns",
            "range": "± 811315.052597589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110020133.33333333,
            "unit": "ns",
            "range": "± 2843291.7825259706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219718081.4814815,
            "unit": "ns",
            "range": "± 5192964.1396232555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5385755.859375,
            "unit": "ns",
            "range": "± 138307.92199204073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1630699.4401041667,
            "unit": "ns",
            "range": "± 19195.992948965482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240136.7057291667,
            "unit": "ns",
            "range": "± 16152.759469021534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2855204.995013298,
            "unit": "ns",
            "range": "± 109912.24332567866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863224.7786458334,
            "unit": "ns",
            "range": "± 4016.3830065516886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789090.8052884615,
            "unit": "ns",
            "range": "± 2615.93873732878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3724990.1639344264,
            "unit": "ns",
            "range": "± 165769.9798967614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748928.3333333335,
            "unit": "ns",
            "range": "± 167384.48593811903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4623402,
            "unit": "ns",
            "range": "± 185728.29561441825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137198.3870967743,
            "unit": "ns",
            "range": "± 186693.56038481664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6907688.095238095,
            "unit": "ns",
            "range": "± 315649.9191011641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323712.22222222225,
            "unit": "ns",
            "range": "± 20656.058924372315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308468,
            "unit": "ns",
            "range": "± 30733.493984987334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292530.76923076925,
            "unit": "ns",
            "range": "± 23138.499386221087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4464518,
            "unit": "ns",
            "range": "± 115340.58883729238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4044129.411764706,
            "unit": "ns",
            "range": "± 83030.7455457456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35904.444444444445,
            "unit": "ns",
            "range": "± 4866.144474575399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142523.4693877551,
            "unit": "ns",
            "range": "± 17373.903887522447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120114.64646464646,
            "unit": "ns",
            "range": "± 27793.16944837314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137595.55555555556,
            "unit": "ns",
            "range": "± 18940.734956678054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11675.510204081633,
            "unit": "ns",
            "range": "± 2820.399226858474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 35133.67346938775,
            "unit": "ns",
            "range": "± 5665.97629693535"
          }
        ]
      }
    ]
  }
}