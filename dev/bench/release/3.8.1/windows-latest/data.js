window.BENCHMARK_DATA = {
  "lastUpdate": 1701044618218,
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
          "id": "5a15302db7964c549a542c33e2f0b5c45f59b075",
          "message": "Release 3.8.1",
          "timestamp": "2023-11-27T09:09:50+09:00",
          "tree_id": "568343f901d89f890975930aeb723caec806a6c4",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5a15302db7964c549a542c33e2f0b5c45f59b075"
        },
        "date": 1701044581737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952380.612244898,
            "unit": "ns",
            "range": "± 91264.64368664438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1736464.3835616438,
            "unit": "ns",
            "range": "± 85698.4804251754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1309378.021978022,
            "unit": "ns",
            "range": "± 101828.0345617582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4878152.083333333,
            "unit": "ns",
            "range": "± 191203.64101133877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34404.819277108436,
            "unit": "ns",
            "range": "± 1768.0707147359203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5096780,
            "unit": "ns",
            "range": "± 43505.01120560711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13372033.333333334,
            "unit": "ns",
            "range": "± 164327.9980781758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33810547.368421055,
            "unit": "ns",
            "range": "± 749963.119366117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66895953.333333336,
            "unit": "ns",
            "range": "± 888924.9139644285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132767800,
            "unit": "ns",
            "range": "± 2486115.5497415373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329139.140625,
            "unit": "ns",
            "range": "± 8673.336799905444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082089.174107143,
            "unit": "ns",
            "range": "± 3126.5199989083885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741747.4400111607,
            "unit": "ns",
            "range": "± 1883.525193078187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964744.6707589286,
            "unit": "ns",
            "range": "± 4715.5970441718955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615670.6119791666,
            "unit": "ns",
            "range": "± 811.7770174470214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553445.8528645834,
            "unit": "ns",
            "range": "± 1133.2893048343976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125076.923076923,
            "unit": "ns",
            "range": "± 56594.15734997603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2281747.9166666665,
            "unit": "ns",
            "range": "± 66845.63032420081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759703.846153846,
            "unit": "ns",
            "range": "± 40000.4086517587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2676835.714285714,
            "unit": "ns",
            "range": "± 77906.36522236344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5692371.428571428,
            "unit": "ns",
            "range": "± 161545.583194761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174231.4606741573,
            "unit": "ns",
            "range": "± 9627.949317973096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167023.63636363635,
            "unit": "ns",
            "range": "± 6653.040620269013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 136714.2857142857,
            "unit": "ns",
            "range": "± 1519.5430197960798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815600,
            "unit": "ns",
            "range": "± 50546.73933245207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2526764.705882353,
            "unit": "ns",
            "range": "± 51186.30116027714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11165.168539325843,
            "unit": "ns",
            "range": "± 1263.3920002405057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54175.58139534884,
            "unit": "ns",
            "range": "± 3825.362298766781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43822.36842105263,
            "unit": "ns",
            "range": "± 2202.277529238646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61948.48484848485,
            "unit": "ns",
            "range": "± 15054.624102400034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2594.8453608247423,
            "unit": "ns",
            "range": "± 569.7900077405378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10927.173913043478,
            "unit": "ns",
            "range": "± 1480.800441465311"
          }
        ]
      }
    ]
  }
}