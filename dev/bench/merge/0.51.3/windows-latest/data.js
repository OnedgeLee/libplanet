window.BENCHMARK_DATA = {
  "lastUpdate": 1679047249917,
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
          "id": "3f3a8c071c130faeb8b083500deeecf45691de03",
          "message": "Merge tag '0.51.3'\n\nLibplanet 0.51.3",
          "timestamp": "2023-03-17T18:39:53+09:00",
          "tree_id": "4ccc01c42d212fef3385f0dfa0111317b04c5fa8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3f3a8c071c130faeb8b083500deeecf45691de03"
        },
        "date": 1679047210279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1903292,
            "unit": "ns",
            "range": "± 50060.43780604933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007165.625,
            "unit": "ns",
            "range": "± 92964.82029509873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2561707.6086956523,
            "unit": "ns",
            "range": "± 144092.33702672468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5799827.777777778,
            "unit": "ns",
            "range": "± 116150.37315052646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61944.32989690721,
            "unit": "ns",
            "range": "± 4887.334163259933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9245577.777777778,
            "unit": "ns",
            "range": "± 193909.97776577715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24187738.46153846,
            "unit": "ns",
            "range": "± 293932.03732172947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59492753.333333336,
            "unit": "ns",
            "range": "± 440402.6596952687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 121003340,
            "unit": "ns",
            "range": "± 2321223.748914851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 240392886.66666666,
            "unit": "ns",
            "range": "± 2042581.2436601832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5889550.223214285,
            "unit": "ns",
            "range": "± 62214.68935542655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847544.9055989583,
            "unit": "ns",
            "range": "± 2347.5729791886138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382584.095982143,
            "unit": "ns",
            "range": "± 14098.515062387227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3089682.872596154,
            "unit": "ns",
            "range": "± 12509.39498707517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973454.9944196428,
            "unit": "ns",
            "range": "± 5140.300571404193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918158.1730769231,
            "unit": "ns",
            "range": "± 3111.050412066384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979845,
            "unit": "ns",
            "range": "± 84242.2913855905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6192257.142857143,
            "unit": "ns",
            "range": "± 48484.80672867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28476830.769230768,
            "unit": "ns",
            "range": "± 411139.678991247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7677250,
            "unit": "ns",
            "range": "± 79520.36991091799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31848926.666666668,
            "unit": "ns",
            "range": "± 275309.0431462346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225176.7857142857,
            "unit": "ns",
            "range": "± 9611.829663519817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229517.24137931035,
            "unit": "ns",
            "range": "± 10038.68199098629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209372.41379310345,
            "unit": "ns",
            "range": "± 11465.546870345372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14588442.857142856,
            "unit": "ns",
            "range": "± 173105.33349240423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11148628.57142857,
            "unit": "ns",
            "range": "± 91136.08952103888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28101.052631578947,
            "unit": "ns",
            "range": "± 2177.1294167321444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68149.45054945054,
            "unit": "ns",
            "range": "± 4336.803062840277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55490.816326530614,
            "unit": "ns",
            "range": "± 4144.206905203064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128297.91666666667,
            "unit": "ns",
            "range": "± 17050.51923374625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9523.711340206186,
            "unit": "ns",
            "range": "± 1348.670116253128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27076.530612244896,
            "unit": "ns",
            "range": "± 2756.764913392693"
          }
        ]
      }
    ]
  }
}