window.BENCHMARK_DATA = {
  "lastUpdate": 1680685544847,
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
          "id": "a51c482f4e17044007e75869872dba7a252b5f32",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:44:41+09:00",
          "tree_id": "e940990a794e091ec51fad4900f4bc53006d0141",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a51c482f4e17044007e75869872dba7a252b5f32"
        },
        "date": 1680685504912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8856179.566666666,
            "unit": "ns",
            "range": "± 68990.46358578085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22581529.64285714,
            "unit": "ns",
            "range": "± 189820.83743386393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57811218.071428575,
            "unit": "ns",
            "range": "± 435391.8734580403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113230631.14285715,
            "unit": "ns",
            "range": "± 850748.7049313913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228130959.85714287,
            "unit": "ns",
            "range": "± 2051997.7853338104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67242.6875,
            "unit": "ns",
            "range": "± 5950.744468795037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243302.32258064515,
            "unit": "ns",
            "range": "± 10953.416918446856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252046.5,
            "unit": "ns",
            "range": "± 13079.61859758257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231778.97402597402,
            "unit": "ns",
            "range": "± 11828.865294575435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13307446.92857143,
            "unit": "ns",
            "range": "± 88538.1626839864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10713304.666666666,
            "unit": "ns",
            "range": "± 94912.56768330575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20983.36842105263,
            "unit": "ns",
            "range": "± 1783.5898539398756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62104.56593406593,
            "unit": "ns",
            "range": "± 5598.534434816546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48112.39361702128,
            "unit": "ns",
            "range": "± 3774.976291937475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118128.72164948453,
            "unit": "ns",
            "range": "± 17286.868055901006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5924.308510638298,
            "unit": "ns",
            "range": "± 410.69178529334545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20197.79120879121,
            "unit": "ns",
            "range": "± 1838.6257943032922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1815196.48,
            "unit": "ns",
            "range": "± 197948.04077590615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3182445.783333333,
            "unit": "ns",
            "range": "± 141582.77964212155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2915709,
            "unit": "ns",
            "range": "± 269371.6992969028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7358935.857142857,
            "unit": "ns",
            "range": "± 334463.9426504051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3864689.0434782607,
            "unit": "ns",
            "range": "± 70480.96081307624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5820311.033333333,
            "unit": "ns",
            "range": "± 92990.79796476536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28227691.133333333,
            "unit": "ns",
            "range": "± 359800.7570076342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7379498.347826087,
            "unit": "ns",
            "range": "± 175343.40208019048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32288529.217391305,
            "unit": "ns",
            "range": "± 707126.2005713341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6729908.621744792,
            "unit": "ns",
            "range": "± 25327.381066763373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2263005.6826923075,
            "unit": "ns",
            "range": "± 8652.311940699405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472797.8326322115,
            "unit": "ns",
            "range": "± 6405.3706723353425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2856906.267127404,
            "unit": "ns",
            "range": "± 11885.9981709127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 923703.421875,
            "unit": "ns",
            "range": "± 4200.335147601992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 852231.4256510417,
            "unit": "ns",
            "range": "± 4420.541779939672"
          }
        ]
      }
    ]
  }
}