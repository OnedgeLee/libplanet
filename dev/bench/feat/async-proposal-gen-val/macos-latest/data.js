window.BENCHMARK_DATA = {
  "lastUpdate": 1700450792762,
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
          "id": "95fc6b0769b298364917360c5cec98ffd7e3b245",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:06:59+09:00",
          "tree_id": "c9fc9a8bfa29a6b3372b78366db598670ca40ec6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/95fc6b0769b298364917360c5cec98ffd7e3b245"
        },
        "date": 1700450765272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9276432.88,
            "unit": "ns",
            "range": "± 614648.4171612943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22714587.387323942,
            "unit": "ns",
            "range": "± 1052589.1200111622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54043910.14285714,
            "unit": "ns",
            "range": "± 660740.6044332848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107083494.4516129,
            "unit": "ns",
            "range": "± 4870169.620619197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220529776.2857143,
            "unit": "ns",
            "range": "± 2148212.7704687063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74971.86363636363,
            "unit": "ns",
            "range": "± 4567.357849820581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329578.4175824176,
            "unit": "ns",
            "range": "± 30871.23096349521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336386.5,
            "unit": "ns",
            "range": "± 39101.769118045275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315057.7978723404,
            "unit": "ns",
            "range": "± 23138.619163468644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168083.753968254,
            "unit": "ns",
            "range": "± 190539.74768264685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817523.2916666665,
            "unit": "ns",
            "range": "± 150706.85581250724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23130.01052631579,
            "unit": "ns",
            "range": "± 3581.5030260241206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94732.3125,
            "unit": "ns",
            "range": "± 14454.473175647956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109725.23913043478,
            "unit": "ns",
            "range": "± 11902.548818708905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134877.27083333334,
            "unit": "ns",
            "range": "± 34151.3986306731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8324.84090909091,
            "unit": "ns",
            "range": "± 1011.9111074307331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27428.526315789473,
            "unit": "ns",
            "range": "± 8577.374352555365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569280.6546391752,
            "unit": "ns",
            "range": "± 186774.30807725203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2857701.9420289854,
            "unit": "ns",
            "range": "± 131188.03947005453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504301.163043478,
            "unit": "ns",
            "range": "± 216340.02785365534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13099677.868686868,
            "unit": "ns",
            "range": "± 3270985.106055244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549753.7842105264,
            "unit": "ns",
            "range": "± 275279.6324120398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396611.315217391,
            "unit": "ns",
            "range": "± 208378.73905505397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533788.958762887,
            "unit": "ns",
            "range": "± 368266.02817632945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4523089.979381443,
            "unit": "ns",
            "range": "± 375185.2748916742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16125414.074468086,
            "unit": "ns",
            "range": "± 1693418.2077078915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982650.45859375,
            "unit": "ns",
            "range": "± 84241.38186232916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055997.1424479166,
            "unit": "ns",
            "range": "± 31696.511444059364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154016.7433810765,
            "unit": "ns",
            "range": "± 23524.047910902373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2820196.457782452,
            "unit": "ns",
            "range": "± 75496.04762996236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854408.5402994792,
            "unit": "ns",
            "range": "± 8925.148983105102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780398.4328613281,
            "unit": "ns",
            "range": "± 15272.929560735416"
          }
        ]
      }
    ]
  }
}