window.BENCHMARK_DATA = {
  "lastUpdate": 1690508908329,
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
          "id": "fc7dc0d018b91da8c98dc766c36b64f9564b0f06",
          "message": "Prepare 3.2.0",
          "timestamp": "2023-07-28T10:33:58+09:00",
          "tree_id": "caa34c3224c3f99addd0c02b454de2a675696ee0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fc7dc0d018b91da8c98dc766c36b64f9564b0f06"
        },
        "date": 1690508895540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306977.78571428574,
            "unit": "ns",
            "range": "± 5180.684988546345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291173.6595744681,
            "unit": "ns",
            "range": "± 10897.473247773492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251916.83720930232,
            "unit": "ns",
            "range": "± 9196.554978516044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4582111.6,
            "unit": "ns",
            "range": "± 57668.56314541869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4191562,
            "unit": "ns",
            "range": "± 37691.37063042415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22761.774193548386,
            "unit": "ns",
            "range": "± 1816.3237843957145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97926.48936170213,
            "unit": "ns",
            "range": "± 6852.101819832217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84106.37974683545,
            "unit": "ns",
            "range": "± 4382.984202642098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101602.63440860216,
            "unit": "ns",
            "range": "± 11615.707587409148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6298.103092783505,
            "unit": "ns",
            "range": "± 749.7573702613189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21546.666666666668,
            "unit": "ns",
            "range": "± 1528.3235582005289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542212.5208333333,
            "unit": "ns",
            "range": "± 88631.40870297191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2844761.3333333335,
            "unit": "ns",
            "range": "± 99459.27886467257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1932653.9879518072,
            "unit": "ns",
            "range": "± 102924.61257396043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5043787.285714285,
            "unit": "ns",
            "range": "± 118674.38150676953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6247557.094791667,
            "unit": "ns",
            "range": "± 17151.501198080332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925948.8640625,
            "unit": "ns",
            "range": "± 1807.2912043383938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412442.540234375,
            "unit": "ns",
            "range": "± 2915.193992320947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638021.5005208333,
            "unit": "ns",
            "range": "± 1426.1138551506563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848916.8936848958,
            "unit": "ns",
            "range": "± 932.8613689715678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777748.0611328125,
            "unit": "ns",
            "range": "± 333.96633402757186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3725050.6666666665,
            "unit": "ns",
            "range": "± 60387.477393515794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3817937.1785714286,
            "unit": "ns",
            "range": "± 106384.9024348758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533499.285714285,
            "unit": "ns",
            "range": "± 104773.48350233606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4211721.483870967,
            "unit": "ns",
            "range": "± 124669.55935535372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6886660,
            "unit": "ns",
            "range": "± 227489.4250368575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8246878.352941177,
            "unit": "ns",
            "range": "± 162785.55011000714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22480799.666666668,
            "unit": "ns",
            "range": "± 205062.11865002784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56566034.53333333,
            "unit": "ns",
            "range": "± 393501.2143429922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112943708.53333333,
            "unit": "ns",
            "range": "± 694093.9843625405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224893386.8,
            "unit": "ns",
            "range": "± 1843291.4475098306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52465.320512820515,
            "unit": "ns",
            "range": "± 2643.323667813027"
          }
        ]
      }
    ]
  }
}