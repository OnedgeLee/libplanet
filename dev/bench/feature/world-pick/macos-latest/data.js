window.BENCHMARK_DATA = {
  "lastUpdate": 1691652664551,
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
          "id": "c511e899b206f325491b87d5f877fe693538a619",
          "message": "fix: Fix MakeTxExecutions",
          "timestamp": "2023-08-10T16:11:06+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c511e899b206f325491b87d5f877fe693538a619"
        },
        "date": 1691652631400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8919705.19607843,
            "unit": "ns",
            "range": "± 362261.3731633015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20021363.3,
            "unit": "ns",
            "range": "± 805302.8968373468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47865007.14705882,
            "unit": "ns",
            "range": "± 954859.8689735148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101986482.19354838,
            "unit": "ns",
            "range": "± 4628243.988413284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206436848.87931034,
            "unit": "ns",
            "range": "± 5394499.925245968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65460.074468085106,
            "unit": "ns",
            "range": "± 9390.629855648274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327899.5747126437,
            "unit": "ns",
            "range": "± 17879.66704832302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294025.53731343284,
            "unit": "ns",
            "range": "± 13835.93131682467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289529.76470588235,
            "unit": "ns",
            "range": "± 11721.79638722365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4055398.5714285714,
            "unit": "ns",
            "range": "± 49685.35520764534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3618842.8666666667,
            "unit": "ns",
            "range": "± 59963.23231050683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17676.566666666666,
            "unit": "ns",
            "range": "± 1749.4391720931403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84636.13402061856,
            "unit": "ns",
            "range": "± 8206.107972404949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82302.32291666667,
            "unit": "ns",
            "range": "± 7363.048562703662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91689.32967032967,
            "unit": "ns",
            "range": "± 9704.500858484795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4725.977777777778,
            "unit": "ns",
            "range": "± 500.60325356329065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16826.18181818182,
            "unit": "ns",
            "range": "± 2138.859141302271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1614280.1075268816,
            "unit": "ns",
            "range": "± 108720.4826205678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014016.843137255,
            "unit": "ns",
            "range": "± 122013.55128580965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329931.8232323234,
            "unit": "ns",
            "range": "± 219310.71119955278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6280150.5,
            "unit": "ns",
            "range": "± 250238.78654395245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425970.5714285714,
            "unit": "ns",
            "range": "± 26404.306876878094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3599617.2954545454,
            "unit": "ns",
            "range": "± 133607.3021941853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4494907.111111111,
            "unit": "ns",
            "range": "± 95789.99908064141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3938897.430107527,
            "unit": "ns",
            "range": "± 217809.51138843666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7283300.928571428,
            "unit": "ns",
            "range": "± 242880.91610852076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6300091.9546875,
            "unit": "ns",
            "range": "± 55982.54252295112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004040.45078125,
            "unit": "ns",
            "range": "± 16031.061536284735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269114.2795572917,
            "unit": "ns",
            "range": "± 22941.11699185588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666572.903125,
            "unit": "ns",
            "range": "± 26456.484692206977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862502.1982421875,
            "unit": "ns",
            "range": "± 6626.870573795124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726381.5820963542,
            "unit": "ns",
            "range": "± 2995.5116372963494"
          }
        ]
      }
    ]
  }
}