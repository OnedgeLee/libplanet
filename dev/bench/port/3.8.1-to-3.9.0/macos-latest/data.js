window.BENCHMARK_DATA = {
  "lastUpdate": 1701066458243,
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
        "date": 1701066433943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7507677.846153846,
            "unit": "ns",
            "range": "± 56491.3520783582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18911520,
            "unit": "ns",
            "range": "± 271593.2624880615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46253193.2,
            "unit": "ns",
            "range": "± 435936.7484095436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95367613.26666667,
            "unit": "ns",
            "range": "± 1751292.1348527807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191122331.57142857,
            "unit": "ns",
            "range": "± 2601558.403682529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34576.36666666667,
            "unit": "ns",
            "range": "± 2326.4727675608515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217928.1875,
            "unit": "ns",
            "range": "± 15208.854572817285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214419.37368421053,
            "unit": "ns",
            "range": "± 20525.68601918929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201999.17741935485,
            "unit": "ns",
            "range": "± 20015.397199873994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3758398.3333333335,
            "unit": "ns",
            "range": "± 121873.01543546599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3366045.8636363638,
            "unit": "ns",
            "range": "± 82157.81085453222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12330.634146341463,
            "unit": "ns",
            "range": "± 581.5668016191764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57593.663043478264,
            "unit": "ns",
            "range": "± 4401.757546775745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56561.68817204301,
            "unit": "ns",
            "range": "± 8878.640419297577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64786.0206185567,
            "unit": "ns",
            "range": "± 12392.545746653663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3424.5697674418607,
            "unit": "ns",
            "range": "± 475.40629164332995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11780.522727272728,
            "unit": "ns",
            "range": "± 1028.3897800481193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1256690.0425531915,
            "unit": "ns",
            "range": "± 215671.725445597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2356637.7395833335,
            "unit": "ns",
            "range": "± 177041.7877516489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569076.047368421,
            "unit": "ns",
            "range": "± 126705.98684706533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6824117.882978723,
            "unit": "ns",
            "range": "± 545749.8730654591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2814930.539473684,
            "unit": "ns",
            "range": "± 89222.1670890429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2958556.253968254,
            "unit": "ns",
            "range": "± 130500.34219803958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3583891.8333333335,
            "unit": "ns",
            "range": "± 146290.4826287297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3529100.714285714,
            "unit": "ns",
            "range": "± 99219.72593818569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12502657.03125,
            "unit": "ns",
            "range": "± 2143396.028946157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4289927.380859375,
            "unit": "ns",
            "range": "± 66559.2659038664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361051.9842247595,
            "unit": "ns",
            "range": "± 19241.605387206837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888127.9815104167,
            "unit": "ns",
            "range": "± 10928.07266900785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002605.3272058824,
            "unit": "ns",
            "range": "± 35268.57675709307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617376.5702473958,
            "unit": "ns",
            "range": "± 6138.140327446856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572919.6272503397,
            "unit": "ns",
            "range": "± 13939.709244226824"
          }
        ]
      }
    ]
  }
}