window.BENCHMARK_DATA = {
  "lastUpdate": 1701066309264,
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
          "id": "83fe34f9ad4e05510621bad88a9a0fa635d5197b",
          "message": "Merge tag '3.8.1' into port/3.8.1-to-3.9.0\n\nLibplanet 3.8.1",
          "timestamp": "2023-11-27T15:10:57+09:00",
          "tree_id": "32706cbfdb86b43bfbbc5bdf131a3105cb792706",
          "url": "https://github.com/OnedgeLee/libplanet/commit/83fe34f9ad4e05510621bad88a9a0fa635d5197b"
        },
        "date": 1701066282321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 911952.0833333334,
            "unit": "ns",
            "range": "± 76746.87030020959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1662553.75,
            "unit": "ns",
            "range": "± 79800.4781619347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1266538.144329897,
            "unit": "ns",
            "range": "± 115403.24992110903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4906430.645161291,
            "unit": "ns",
            "range": "± 220682.9968779932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34362.71186440678,
            "unit": "ns",
            "range": "± 1522.916700813091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5284000,
            "unit": "ns",
            "range": "± 71985.05186709038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12921500,
            "unit": "ns",
            "range": "± 64527.084355211766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32042721.42857143,
            "unit": "ns",
            "range": "± 220214.06867853846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64050964.28571428,
            "unit": "ns",
            "range": "± 953964.6168306428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127652378.57142857,
            "unit": "ns",
            "range": "± 771220.1293839735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3264847.566105769,
            "unit": "ns",
            "range": "± 3495.848801190618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038416.9471153846,
            "unit": "ns",
            "range": "± 1681.9532172210334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727152.8245192308,
            "unit": "ns",
            "range": "± 1153.20663677416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1882781.1147836538,
            "unit": "ns",
            "range": "± 2421.0918492693154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622706.4871651785,
            "unit": "ns",
            "range": "± 885.1628807694685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566467.4088541666,
            "unit": "ns",
            "range": "± 1435.0427134100034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2046325.8064516129,
            "unit": "ns",
            "range": "± 24522.383893658403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2191641.0714285714,
            "unit": "ns",
            "range": "± 80744.75108588842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2670635,
            "unit": "ns",
            "range": "± 61330.50477363996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598710,
            "unit": "ns",
            "range": "± 70941.61927125421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6006803.896103896,
            "unit": "ns",
            "range": "± 307172.37036589015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163465.5737704918,
            "unit": "ns",
            "range": "± 6629.401311478577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154661.01694915254,
            "unit": "ns",
            "range": "± 5665.564979257632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141614.2857142857,
            "unit": "ns",
            "range": "± 3310.179106073524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2666585.714285714,
            "unit": "ns",
            "range": "± 41601.97586178324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2569240,
            "unit": "ns",
            "range": "± 37584.586506401036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9515.384615384615,
            "unit": "ns",
            "range": "± 1008.6209591894466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49797.84946236559,
            "unit": "ns",
            "range": "± 4685.847760860532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42948.57142857143,
            "unit": "ns",
            "range": "± 1391.6497675889045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53566.666666666664,
            "unit": "ns",
            "range": "± 10947.453342849996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2115.5555555555557,
            "unit": "ns",
            "range": "± 247.19146521352025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9035.955056179775,
            "unit": "ns",
            "range": "± 692.0403284050122"
          }
        ]
      }
    ]
  }
}