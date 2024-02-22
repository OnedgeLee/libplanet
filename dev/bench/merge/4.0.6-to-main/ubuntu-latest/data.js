window.BENCHMARK_DATA = {
  "lastUpdate": 1708600643331,
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
          "id": "7038c92385b0f0020dfb0519218f3e88cbd29e6e",
          "message": "Merge tag '4.0.6' into merge/4.0.6-to-main\n\nLibplanet 4.0.6",
          "timestamp": "2024-02-22T20:06:10+09:00",
          "tree_id": "8eefd7e644349c641f03cff56fdc62142c490c8f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7038c92385b0f0020dfb0519218f3e88cbd29e6e"
        },
        "date": 1708600633217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5680792.428571428,
            "unit": "ns",
            "range": "± 26259.480958794196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14827947.5,
            "unit": "ns",
            "range": "± 213792.72762554724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37228348.78571428,
            "unit": "ns",
            "range": "± 128284.69831015496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77588358.86666666,
            "unit": "ns",
            "range": "± 1283864.1303338287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153391224.6,
            "unit": "ns",
            "range": "± 1273712.5831026852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214855.9642857143,
            "unit": "ns",
            "range": "± 5922.262802542703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190863.72857142857,
            "unit": "ns",
            "range": "± 9213.151101285264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166009.95833333334,
            "unit": "ns",
            "range": "± 4207.954449653931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3258399.7333333334,
            "unit": "ns",
            "range": "± 37191.37880605179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2931140.066666667,
            "unit": "ns",
            "range": "± 44025.30878039953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12971.348837209302,
            "unit": "ns",
            "range": "± 921.4641388756951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66892.92631578947,
            "unit": "ns",
            "range": "± 7474.8248470792205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61091.84782608696,
            "unit": "ns",
            "range": "± 5243.224701773892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64328.604166666664,
            "unit": "ns",
            "range": "± 14316.029727825466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4513.575757575758,
            "unit": "ns",
            "range": "± 2042.091765167641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14418.58064516129,
            "unit": "ns",
            "range": "± 1976.0170431549195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41899.73684210526,
            "unit": "ns",
            "range": "± 5627.525931602827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008838.6530612245,
            "unit": "ns",
            "range": "± 99369.05661761246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908038.9032258065,
            "unit": "ns",
            "range": "± 85956.90124544968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1628140.0631578946,
            "unit": "ns",
            "range": "± 130984.85429067422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7750233.98,
            "unit": "ns",
            "range": "± 148548.57700544738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3852138.514423077,
            "unit": "ns",
            "range": "± 8282.065060398972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217852.7540564905,
            "unit": "ns",
            "range": "± 3924.8802327823037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764228.2656947544,
            "unit": "ns",
            "range": "± 1843.2556958078442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970120.9188701923,
            "unit": "ns",
            "range": "± 2993.1789369966505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620280.3194754465,
            "unit": "ns",
            "range": "± 676.6439383544968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567549.6890950521,
            "unit": "ns",
            "range": "± 1111.4508790650764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2426734.214285714,
            "unit": "ns",
            "range": "± 68820.89833245214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2599647.9423076925,
            "unit": "ns",
            "range": "± 107151.6364713428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3099168.9285714286,
            "unit": "ns",
            "range": "± 44824.802831029374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3148964.339285714,
            "unit": "ns",
            "range": "± 109170.26738045098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9036805.732558139,
            "unit": "ns",
            "range": "± 321225.6383914463"
          }
        ]
      }
    ]
  }
}