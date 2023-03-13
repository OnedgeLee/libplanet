window.BENCHMARK_DATA = {
  "lastUpdate": 1678690356017,
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
          "id": "e2e3b0918ea906a8252bb4046be907ee1fb5e24c",
          "message": "Merge tag '0.51.1'\n\nLibplanet 0.51.1",
          "timestamp": "2023-03-13T15:38:32+09:00",
          "tree_id": "6d24838bc6e9bee1c1969a025d8f4a1df614b267",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2e3b0918ea906a8252bb4046be907ee1fb5e24c"
        },
        "date": 1678690343283,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183898.88888888888,
            "unit": "ns",
            "range": "± 3803.5277879866903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186637.75,
            "unit": "ns",
            "range": "± 6071.698629708164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157622.15384615384,
            "unit": "ns",
            "range": "± 901.9530518227141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11188655,
            "unit": "ns",
            "range": "± 70785.45344611016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9073525.733333332,
            "unit": "ns",
            "range": "± 74953.18812381371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15922.802083333334,
            "unit": "ns",
            "range": "± 1310.4322197358892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46218.20652173913,
            "unit": "ns",
            "range": "± 3081.0033492676953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36841.416666666664,
            "unit": "ns",
            "range": "± 486.9775911091025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78332.33673469388,
            "unit": "ns",
            "range": "± 10851.544123050551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4423.670103092783,
            "unit": "ns",
            "range": "± 314.8686472711507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15108.608695652174,
            "unit": "ns",
            "range": "± 740.4240878869849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3159744.1764705884,
            "unit": "ns",
            "range": "± 43023.6552625926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4956254.466666667,
            "unit": "ns",
            "range": "± 46893.33691454418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22912938.5,
            "unit": "ns",
            "range": "± 380098.92167368747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6064516.5,
            "unit": "ns",
            "range": "± 128180.13881402358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26327157.07142857,
            "unit": "ns",
            "range": "± 344156.9215563568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956944.922395834,
            "unit": "ns",
            "range": "± 20013.477174940108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959470.5443638393,
            "unit": "ns",
            "range": "± 2442.118597498428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379703.6140625,
            "unit": "ns",
            "range": "± 4134.243445726742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517247.39453125,
            "unit": "ns",
            "range": "± 3926.912237107821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825601.9801432291,
            "unit": "ns",
            "range": "± 1450.784136409424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737548.400530134,
            "unit": "ns",
            "range": "± 1453.826915328545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7783926.642857143,
            "unit": "ns",
            "range": "± 6145.586378821832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19488377.14285714,
            "unit": "ns",
            "range": "± 136833.00189470552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49438890.64285714,
            "unit": "ns",
            "range": "± 216714.1528009817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98467934.6923077,
            "unit": "ns",
            "range": "± 359062.9815678545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 197562564.46666667,
            "unit": "ns",
            "range": "± 921243.7129032894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45047.74025974026,
            "unit": "ns",
            "range": "± 2308.920717351664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1315453.4646464647,
            "unit": "ns",
            "range": "± 77962.97937853464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2459258,
            "unit": "ns",
            "range": "± 80086.2743626779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075972.2112676057,
            "unit": "ns",
            "range": "± 101424.52842270953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5150464.355932203,
            "unit": "ns",
            "range": "± 224860.17635516208"
          }
        ]
      }
    ]
  }
}