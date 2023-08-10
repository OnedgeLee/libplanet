window.BENCHMARK_DATA = {
  "lastUpdate": 1691655042280,
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
          "id": "be5f8429f90b0ff18bf05f8583069d0c729de0a6",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>:",
          "timestamp": "2023-08-10T16:54:16+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/be5f8429f90b0ff18bf05f8583069d0c729de0a6"
        },
        "date": 1691655006658,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485056.8421052631,
            "unit": "ns",
            "range": "± 136152.44557748543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2740887.7551020407,
            "unit": "ns",
            "range": "± 109105.9111457247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1972492.3076923077,
            "unit": "ns",
            "range": "± 109773.92245557254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5319430,
            "unit": "ns",
            "range": "± 237081.13629397147"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51919.354838709674,
            "unit": "ns",
            "range": "± 3603.59898798398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7929968.181818182,
            "unit": "ns",
            "range": "± 190317.85789733985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21598330.769230768,
            "unit": "ns",
            "range": "± 107998.93043155092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53556557.14285714,
            "unit": "ns",
            "range": "± 473631.6204268164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107461593.33333333,
            "unit": "ns",
            "range": "± 1172171.3986484758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213486973.33333334,
            "unit": "ns",
            "range": "± 1174367.5990972861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4957175.677083333,
            "unit": "ns",
            "range": "± 25971.078232272692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1598474.4419642857,
            "unit": "ns",
            "range": "± 5395.258138534036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210736.1197916667,
            "unit": "ns",
            "range": "± 3704.6069251173926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2709189.296875,
            "unit": "ns",
            "range": "± 7928.488664546131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860863.8606770834,
            "unit": "ns",
            "range": "± 2672.8959059056797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780985.5817522322,
            "unit": "ns",
            "range": "± 2618.227215266407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448651.470588235,
            "unit": "ns",
            "range": "± 159293.19863739773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3637988.2352941176,
            "unit": "ns",
            "range": "± 148399.201678525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4545389.47368421,
            "unit": "ns",
            "range": "± 99849.63636909719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4030046.6666666665,
            "unit": "ns",
            "range": "± 145720.32771405266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6658577.027027027,
            "unit": "ns",
            "range": "± 223351.95276693872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275761.1111111111,
            "unit": "ns",
            "range": "± 13387.292224876583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270805.8823529412,
            "unit": "ns",
            "range": "± 12897.620772758552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253024.32432432432,
            "unit": "ns",
            "range": "± 12552.310389428354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276746.666666667,
            "unit": "ns",
            "range": "± 39937.05523636389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935564.285714286,
            "unit": "ns",
            "range": "± 43549.78772610736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25168.817204301075,
            "unit": "ns",
            "range": "± 2917.301406922368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99698.97959183673,
            "unit": "ns",
            "range": "± 6894.648976927188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87521.05263157895,
            "unit": "ns",
            "range": "± 8712.022687396486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103836.0824742268,
            "unit": "ns",
            "range": "± 14293.946748879185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7238.144329896907,
            "unit": "ns",
            "range": "± 1377.7580897791495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22903.061224489797,
            "unit": "ns",
            "range": "± 2623.4550321077104"
          }
        ]
      }
    ]
  }
}