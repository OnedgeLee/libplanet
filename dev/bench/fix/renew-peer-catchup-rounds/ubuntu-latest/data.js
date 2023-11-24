window.BENCHMARK_DATA = {
  "lastUpdate": 1700811421555,
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
          "id": "ee39a7e185928a19acdb013214687d86ccf89e75",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:25:59+09:00",
          "tree_id": "6d4a6b44d082edda3683cfeee050f02e64ce3c99",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ee39a7e185928a19acdb013214687d86ccf89e75"
        },
        "date": 1700811411577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201735.20634920636,
            "unit": "ns",
            "range": "± 9262.419392638207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191393.44047619047,
            "unit": "ns",
            "range": "± 9956.176449944945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161938.84210526315,
            "unit": "ns",
            "range": "± 3589.2714714697236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3091974.2666666666,
            "unit": "ns",
            "range": "± 47961.89939266773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877341.1428571427,
            "unit": "ns",
            "range": "± 43909.952372146516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14495.585858585859,
            "unit": "ns",
            "range": "± 2284.594940251438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68193.74626865672,
            "unit": "ns",
            "range": "± 3225.1241194968156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60178.38421052632,
            "unit": "ns",
            "range": "± 4715.59459905327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55761.897959183676,
            "unit": "ns",
            "range": "± 10137.881681059955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3458.851063829787,
            "unit": "ns",
            "range": "± 510.2296543323863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13797.747474747475,
            "unit": "ns",
            "range": "± 2495.1445230050967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3647284.2760416665,
            "unit": "ns",
            "range": "± 4906.424200264095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1140184.6854073661,
            "unit": "ns",
            "range": "± 3679.145250777516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732100.5579176683,
            "unit": "ns",
            "range": "± 1066.8133471592014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912161.750390625,
            "unit": "ns",
            "range": "± 4224.63650926842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619033.427358774,
            "unit": "ns",
            "range": "± 1715.4873029958594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 613015.4762369791,
            "unit": "ns",
            "range": "± 4073.8443333849873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39508.135416666664,
            "unit": "ns",
            "range": "± 5782.265463184171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2408872.2156862747,
            "unit": "ns",
            "range": "± 98358.01679727255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532018.2333333334,
            "unit": "ns",
            "range": "± 74619.6467799491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212775.5555555555,
            "unit": "ns",
            "range": "± 68677.61288330916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2917819.4,
            "unit": "ns",
            "range": "± 93455.38177518433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6682353.325,
            "unit": "ns",
            "range": "± 234125.6296663963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5662008.538461538,
            "unit": "ns",
            "range": "± 26962.92096137269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14544135.07142857,
            "unit": "ns",
            "range": "± 99722.18464985944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37730993.85,
            "unit": "ns",
            "range": "± 563357.0179950184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76229561.73333333,
            "unit": "ns",
            "range": "± 580516.4383633479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152115949.58333334,
            "unit": "ns",
            "range": "± 1026418.7287124683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952796.8617021276,
            "unit": "ns",
            "range": "± 81413.58008036605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1886335.1153846155,
            "unit": "ns",
            "range": "± 71291.15339382383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1386421.244680851,
            "unit": "ns",
            "range": "± 113749.32009237297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5358780,
            "unit": "ns",
            "range": "± 179001.31426381043"
          }
        ]
      }
    ]
  }
}