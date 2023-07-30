window.BENCHMARK_DATA = {
  "lastUpdate": 1690761420319,
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
          "id": "01cecfb43845f66fe3ef23abba94ddb04521928a",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-29T16:21:32+09:00",
          "tree_id": "cd7bb71e5d56e5632a658659f62b529f7e57f395",
          "url": "https://github.com/OnedgeLee/libplanet/commit/01cecfb43845f66fe3ef23abba94ddb04521928a"
        },
        "date": 1690761394954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8323070.863636363,
            "unit": "ns",
            "range": "± 201171.8456611034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20903694.39473684,
            "unit": "ns",
            "range": "± 458439.40965081565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50310116.5,
            "unit": "ns",
            "range": "± 515013.0747985478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99788670.66666667,
            "unit": "ns",
            "range": "± 1557304.5772069795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211345058.2,
            "unit": "ns",
            "range": "± 3715155.0585870417"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68245.53125,
            "unit": "ns",
            "range": "± 16589.27093791782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316566.6914893617,
            "unit": "ns",
            "range": "± 17134.003410201218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294745.40845070424,
            "unit": "ns",
            "range": "± 12364.161044356575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291417.693877551,
            "unit": "ns",
            "range": "± 11541.618458149766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168407.1612903224,
            "unit": "ns",
            "range": "± 124595.97390662263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3889047.65,
            "unit": "ns",
            "range": "± 81957.43415255906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17651.659574468085,
            "unit": "ns",
            "range": "± 1683.1981690854823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84728.28409090909,
            "unit": "ns",
            "range": "± 5576.494329802435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92241.67346938775,
            "unit": "ns",
            "range": "± 13096.39565963559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114070.74742268042,
            "unit": "ns",
            "range": "± 17989.21186145957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6363.945652173913,
            "unit": "ns",
            "range": "± 1073.7815211930283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17589.083333333332,
            "unit": "ns",
            "range": "± 2068.141238517365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633595.98,
            "unit": "ns",
            "range": "± 208624.70297934953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3020275.340425532,
            "unit": "ns",
            "range": "± 248238.79333583036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2102974.905263158,
            "unit": "ns",
            "range": "± 251949.96606853858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6382738.892473118,
            "unit": "ns",
            "range": "± 501334.60458593536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284047.156862745,
            "unit": "ns",
            "range": "± 132801.18952771058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531453.980769231,
            "unit": "ns",
            "range": "± 145397.76808351045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366080.183673469,
            "unit": "ns",
            "range": "± 143868.76196709528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3853992.6666666665,
            "unit": "ns",
            "range": "± 189751.5123894524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7141880.277777778,
            "unit": "ns",
            "range": "± 209769.7174715456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6608319.283052885,
            "unit": "ns",
            "range": "± 90092.03988596593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928456.0658854167,
            "unit": "ns",
            "range": "± 34395.51209753904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322250.0072380514,
            "unit": "ns",
            "range": "± 26746.787745282407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546130.643136161,
            "unit": "ns",
            "range": "± 37970.48757837604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905605.6172526042,
            "unit": "ns",
            "range": "± 14419.83558968407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753904.0198800223,
            "unit": "ns",
            "range": "± 5011.0547848456945"
          }
        ]
      }
    ]
  }
}