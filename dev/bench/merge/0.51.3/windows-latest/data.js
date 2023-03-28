window.BENCHMARK_DATA = {
  "lastUpdate": 1679987901485,
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
      },
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
          "id": "ccb0f3331688abc89ce2754f723988effacb7d06",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:57:55+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ccb0f3331688abc89ce2754f723988effacb7d06"
        },
        "date": 1679987865673,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375560.6382978724,
            "unit": "ns",
            "range": "± 86505.63561489263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2537670,
            "unit": "ns",
            "range": "± 75303.45117337379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224365,
            "unit": "ns",
            "range": "± 161078.66976584875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5233686.666666667,
            "unit": "ns",
            "range": "± 188456.5293497295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50530.645161290326,
            "unit": "ns",
            "range": "± 3623.181944828274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6928335.714285715,
            "unit": "ns",
            "range": "± 105098.17100906442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19372800,
            "unit": "ns",
            "range": "± 219940.0582676317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49192226.666666664,
            "unit": "ns",
            "range": "± 751820.90901896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99487026.66666667,
            "unit": "ns",
            "range": "± 1572226.0181332827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201542742.85714287,
            "unit": "ns",
            "range": "± 966040.1470509835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4891474.497767857,
            "unit": "ns",
            "range": "± 19044.339329640017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533459.7493489583,
            "unit": "ns",
            "range": "± 2169.819678269764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171980.2734375,
            "unit": "ns",
            "range": "± 6456.557390072424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647222.0145089286,
            "unit": "ns",
            "range": "± 4984.316911282353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824335.3255208334,
            "unit": "ns",
            "range": "± 1883.3052292779307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754902.4135044643,
            "unit": "ns",
            "range": "± 1094.1412635808333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344035,
            "unit": "ns",
            "range": "± 76728.66255770875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5215886.363636363,
            "unit": "ns",
            "range": "± 128116.48083809382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24208314.285714287,
            "unit": "ns",
            "range": "± 416684.2354684325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6373615,
            "unit": "ns",
            "range": "± 129174.77460687455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27321872.222222224,
            "unit": "ns",
            "range": "± 563059.5525974511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199396.38554216866,
            "unit": "ns",
            "range": "± 10590.578484201527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196087.5,
            "unit": "ns",
            "range": "± 8421.575376269087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179677,
            "unit": "ns",
            "range": "± 11821.559272632509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11613560,
            "unit": "ns",
            "range": "± 197707.4924514207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9163980,
            "unit": "ns",
            "range": "± 135089.58509078337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24034.0206185567,
            "unit": "ns",
            "range": "± 2545.538850859895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63144.565217391304,
            "unit": "ns",
            "range": "± 4826.765215571336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49426.5306122449,
            "unit": "ns",
            "range": "± 4861.961570548066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129006.12244897959,
            "unit": "ns",
            "range": "± 19214.63583236536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8910.416666666666,
            "unit": "ns",
            "range": "± 1438.8942513842587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28119.78021978022,
            "unit": "ns",
            "range": "± 2787.7198878980244"
          }
        ]
      }
    ]
  }
}