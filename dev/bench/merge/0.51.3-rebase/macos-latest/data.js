window.BENCHMARK_DATA = {
  "lastUpdate": 1679986630753,
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
          "id": "f744e91d159caa20a6a50a25108624fe61221db5",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:37:19+09:00",
          "tree_id": "4ec1541a6ce11138de359316c6b5dcca63b4d153",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f744e91d159caa20a6a50a25108624fe61221db5"
        },
        "date": 1679986605908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8113304.185185186,
            "unit": "ns",
            "range": "± 222772.1985803223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20367866.025641024,
            "unit": "ns",
            "range": "± 709633.4633026919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52556998.298245616,
            "unit": "ns",
            "range": "± 2016935.0352308252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101999114.14285715,
            "unit": "ns",
            "range": "± 1750840.623905419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206722117,
            "unit": "ns",
            "range": "± 2820922.2020058986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67133.9587628866,
            "unit": "ns",
            "range": "± 11894.94679905919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219080.65934065933,
            "unit": "ns",
            "range": "± 20092.11157987675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226639.42268041236,
            "unit": "ns",
            "range": "± 26998.39933404812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195751.70103092783,
            "unit": "ns",
            "range": "± 21308.86441091132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13108810.148351649,
            "unit": "ns",
            "range": "± 733319.5416120131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10091472.477272727,
            "unit": "ns",
            "range": "± 378530.286827791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20490.177083333332,
            "unit": "ns",
            "range": "± 4946.1841219582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57376.09550561798,
            "unit": "ns",
            "range": "± 10626.1819660419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52089.86170212766,
            "unit": "ns",
            "range": "± 5306.874235115686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120833.33684210526,
            "unit": "ns",
            "range": "± 17497.56937686193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7422.052083333333,
            "unit": "ns",
            "range": "± 1198.5643945091513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19632.58064516129,
            "unit": "ns",
            "range": "± 2944.9309777199123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608122.2164948455,
            "unit": "ns",
            "range": "± 137176.4465528967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729029.8604651163,
            "unit": "ns",
            "range": "± 97343.23125062881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2527673.7395833335,
            "unit": "ns",
            "range": "± 242532.04595969297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6297159.959183673,
            "unit": "ns",
            "range": "± 247784.50987769922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3539090.663043478,
            "unit": "ns",
            "range": "± 384104.37991020613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5306282.0375,
            "unit": "ns",
            "range": "± 258187.30487551988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26786445.987951808,
            "unit": "ns",
            "range": "± 1388279.8738595718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6427623.795918368,
            "unit": "ns",
            "range": "± 233398.0449546778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29412276.92253521,
            "unit": "ns",
            "range": "± 1433867.4202317277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7083147.725360577,
            "unit": "ns",
            "range": "± 292232.28970951366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004844.7881610577,
            "unit": "ns",
            "range": "± 25760.56453288042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293033.23046875,
            "unit": "ns",
            "range": "± 13047.187590423111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532578.4884868423,
            "unit": "ns",
            "range": "± 47474.35224274281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886532.994140625,
            "unit": "ns",
            "range": "± 16747.18857225405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823312.4817708334,
            "unit": "ns",
            "range": "± 22675.10599668111"
          }
        ]
      }
    ]
  }
}