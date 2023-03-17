window.BENCHMARK_DATA = {
  "lastUpdate": 1679047321127,
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
          "id": "394e00f8b948b886a898d4a09da8f4f768be018a",
          "message": "prepare: 0.51.4",
          "timestamp": "2023-03-17T18:47:08+09:00",
          "tree_id": "04b511c8d3d9638abf78f6ec1d85b047e8def794",
          "url": "https://github.com/OnedgeLee/libplanet/commit/394e00f8b948b886a898d4a09da8f4f768be018a"
        },
        "date": 1679047309024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3345865.5897435895,
            "unit": "ns",
            "range": "± 172558.93364526378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5763822.571428572,
            "unit": "ns",
            "range": "± 67856.1638317113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26491533.466666665,
            "unit": "ns",
            "range": "± 234325.3707551796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6532688.962962963,
            "unit": "ns",
            "range": "± 181329.43036585723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28002966.266666666,
            "unit": "ns",
            "range": "± 506755.97816284414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8855174.866666667,
            "unit": "ns",
            "range": "± 51211.98973715135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21898989.733333334,
            "unit": "ns",
            "range": "± 273228.15745178104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52029270.46666667,
            "unit": "ns",
            "range": "± 570618.119009536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113919255.66666667,
            "unit": "ns",
            "range": "± 244672.7764308505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 222327482.76744187,
            "unit": "ns",
            "range": "± 8153916.277311193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1555221.5531914893,
            "unit": "ns",
            "range": "± 97842.54029022028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815223.3703703703,
            "unit": "ns",
            "range": "± 77994.56374504975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2370909.1325301207,
            "unit": "ns",
            "range": "± 120280.78388400417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549777.4,
            "unit": "ns",
            "range": "± 95659.55756580581"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53795.063829787236,
            "unit": "ns",
            "range": "± 6721.767997084892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6227578.134615385,
            "unit": "ns",
            "range": "± 15311.45102879872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1879481.358984375,
            "unit": "ns",
            "range": "± 7347.505162611887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344699.4016927083,
            "unit": "ns",
            "range": "± 12441.527885454198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606383.4381009615,
            "unit": "ns",
            "range": "± 3884.9634791974026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834099.8641276042,
            "unit": "ns",
            "range": "± 524.9704280802695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759754.9786458333,
            "unit": "ns",
            "range": "± 4213.842067918174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233944.23076923078,
            "unit": "ns",
            "range": "± 8102.978839718334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237050.63636363635,
            "unit": "ns",
            "range": "± 8789.314813337229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209902.95774647887,
            "unit": "ns",
            "range": "± 10254.103449611383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13026085.785714285,
            "unit": "ns",
            "range": "± 82920.93266960222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10268956.357142856,
            "unit": "ns",
            "range": "± 102413.1224784486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24714.895833333332,
            "unit": "ns",
            "range": "± 4586.325130162646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74286.25609756098,
            "unit": "ns",
            "range": "± 3947.441402346887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58436.0505050505,
            "unit": "ns",
            "range": "± 3534.4196832610596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103617.22340425532,
            "unit": "ns",
            "range": "± 17168.49555483009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6247.4315789473685,
            "unit": "ns",
            "range": "± 672.2309578517555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20404.685393258427,
            "unit": "ns",
            "range": "± 1572.0364007720689"
          }
        ]
      }
    ]
  }
}