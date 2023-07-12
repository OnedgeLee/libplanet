window.BENCHMARK_DATA = {
  "lastUpdate": 1689121286509,
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
          "id": "f85b3f410b59d727f72ef1b7b0dd93d4be1a1749",
          "message": "fix: Log empty block demand as success on PullBlocksAsync",
          "timestamp": "2023-07-12T09:05:00+09:00",
          "tree_id": "e0d569d48bd6bda1d7d756a122033e628b597113",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f85b3f410b59d727f72ef1b7b0dd93d4be1a1749"
        },
        "date": 1689121245432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8394673,
            "unit": "ns",
            "range": "± 139449.21685689024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21204624.416666668,
            "unit": "ns",
            "range": "± 694847.971805236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51742339.115384616,
            "unit": "ns",
            "range": "± 1367067.39862552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118977765.46153846,
            "unit": "ns",
            "range": "± 1827875.0637610883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206882660.46666667,
            "unit": "ns",
            "range": "± 3593846.0997330435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64472.03370786517,
            "unit": "ns",
            "range": "± 10058.613400113443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348070.07608695654,
            "unit": "ns",
            "range": "± 26842.403271907853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338867.7078651685,
            "unit": "ns",
            "range": "± 31423.934773007546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309017.3294117647,
            "unit": "ns",
            "range": "± 21852.558936126054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4466350.235294118,
            "unit": "ns",
            "range": "± 140255.13755518827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3939299.725,
            "unit": "ns",
            "range": "± 134002.89237779437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21691.722222222223,
            "unit": "ns",
            "range": "± 7074.518463031267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90524.05555555556,
            "unit": "ns",
            "range": "± 8201.34388564379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87531.81818181818,
            "unit": "ns",
            "range": "± 9320.565513090049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90997.30898876404,
            "unit": "ns",
            "range": "± 12096.13215310468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4781.948051948052,
            "unit": "ns",
            "range": "± 561.8983307574399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16821.9,
            "unit": "ns",
            "range": "± 2177.5992040940146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625629.3915662651,
            "unit": "ns",
            "range": "± 185819.530935195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139200.227272727,
            "unit": "ns",
            "range": "± 249209.8959935122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209813.234042553,
            "unit": "ns",
            "range": "± 217273.00838353267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6703517.872340426,
            "unit": "ns",
            "range": "± 674717.800205676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3536414.205882353,
            "unit": "ns",
            "range": "± 161206.32683915328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3698284.1011235956,
            "unit": "ns",
            "range": "± 213596.56395267078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4720680.123287671,
            "unit": "ns",
            "range": "± 234580.63418932332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057866.74025974,
            "unit": "ns",
            "range": "± 207712.21728349628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8294373.936170213,
            "unit": "ns",
            "range": "± 841844.213402287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6310923.2203125,
            "unit": "ns",
            "range": "± 66846.54317267356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2033836.153125,
            "unit": "ns",
            "range": "± 28536.932147474203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336197.308314732,
            "unit": "ns",
            "range": "± 15100.295973419632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641411.47109375,
            "unit": "ns",
            "range": "± 37134.802111774705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952171.1083333333,
            "unit": "ns",
            "range": "± 10617.864687396594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877399.407421875,
            "unit": "ns",
            "range": "± 13328.77947102136"
          }
        ]
      }
    ]
  }
}