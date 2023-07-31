window.BENCHMARK_DATA = {
  "lastUpdate": 1690788772543,
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
      },
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
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690788745159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8903603.276595745,
            "unit": "ns",
            "range": "± 505291.38744536333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22113218.73880597,
            "unit": "ns",
            "range": "± 1042084.9282663054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54400346.5,
            "unit": "ns",
            "range": "± 916635.3127088053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108582827.53448276,
            "unit": "ns",
            "range": "± 3125842.10286759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220814166.92307693,
            "unit": "ns",
            "range": "± 2684129.0428576786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74089.33720930232,
            "unit": "ns",
            "range": "± 5634.482941172498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324603.175,
            "unit": "ns",
            "range": "± 16779.23307474398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318523.4166666667,
            "unit": "ns",
            "range": "± 28106.39972325714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303258.7368421053,
            "unit": "ns",
            "range": "± 6596.9708439396245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186744.3,
            "unit": "ns",
            "range": "± 52449.17894795194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828584.0714285714,
            "unit": "ns",
            "range": "± 41250.24025937357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19385.563829787236,
            "unit": "ns",
            "range": "± 2083.1996665515903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107312.09677419355,
            "unit": "ns",
            "range": "± 13738.271452457278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120696.4375,
            "unit": "ns",
            "range": "± 16660.658001040403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135104.1875,
            "unit": "ns",
            "range": "± 27707.580937282357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7423.351648351649,
            "unit": "ns",
            "range": "± 996.6044169370131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23755.204545454544,
            "unit": "ns",
            "range": "± 4171.7881834215195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1671309.0714285714,
            "unit": "ns",
            "range": "± 199568.28714726135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3121467.2684210525,
            "unit": "ns",
            "range": "± 212312.6890663989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242525.2083333335,
            "unit": "ns",
            "range": "± 243042.87598368173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6324279.974226804,
            "unit": "ns",
            "range": "± 445729.6004868987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3545198.887755102,
            "unit": "ns",
            "range": "± 296847.24101059226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526486.395604396,
            "unit": "ns",
            "range": "± 203332.6589481647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646470.216494845,
            "unit": "ns",
            "range": "± 301145.15361388394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3901226.6739130435,
            "unit": "ns",
            "range": "± 270773.78089127503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7139952.472222222,
            "unit": "ns",
            "range": "± 235563.82901025072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7094374.481997282,
            "unit": "ns",
            "range": "± 177768.70679266765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2154982.9151909724,
            "unit": "ns",
            "range": "± 81666.69482972233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400224.5986979166,
            "unit": "ns",
            "range": "± 26145.717914206347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3056520.6786024305,
            "unit": "ns",
            "range": "± 55808.79765075779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811428.4938151041,
            "unit": "ns",
            "range": "± 12116.700012295394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787391.1083333333,
            "unit": "ns",
            "range": "± 13885.35466193927"
          }
        ]
      }
    ]
  }
}