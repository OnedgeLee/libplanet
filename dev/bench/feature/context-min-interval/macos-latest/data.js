window.BENCHMARK_DATA = {
  "lastUpdate": 1680153122848,
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
          "id": "23fe38423f0ca0a4e0651562690262ac04658dc4",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T13:54:50+09:00",
          "tree_id": "0501e9e753e591811ca8195fe422f2f2cb826f45",
          "url": "https://github.com/OnedgeLee/libplanet/commit/23fe38423f0ca0a4e0651562690262ac04658dc4"
        },
        "date": 1680153083700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8883188.833333334,
            "unit": "ns",
            "range": "± 113137.96839236765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22688012.35714286,
            "unit": "ns",
            "range": "± 227394.91997289215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57397374.13333333,
            "unit": "ns",
            "range": "± 669409.2682303519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116481983.71428572,
            "unit": "ns",
            "range": "± 1033948.9771703458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230990294,
            "unit": "ns",
            "range": "± 1824746.4548364365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65142.28947368421,
            "unit": "ns",
            "range": "± 6216.66062423463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245786.3431372549,
            "unit": "ns",
            "range": "± 10055.192132172411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242843.35454545455,
            "unit": "ns",
            "range": "± 10314.454839937875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223440.92424242425,
            "unit": "ns",
            "range": "± 13132.281551846096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13390004.233333332,
            "unit": "ns",
            "range": "± 218505.8493671007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10788548.923076924,
            "unit": "ns",
            "range": "± 80486.70247465471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23472.273684210526,
            "unit": "ns",
            "range": "± 2821.0473852510927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63921.044444444444,
            "unit": "ns",
            "range": "± 5304.576086613958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48608.38947368421,
            "unit": "ns",
            "range": "± 3501.7999362477917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104666.04210526316,
            "unit": "ns",
            "range": "± 21173.58781490882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5988.907216494846,
            "unit": "ns",
            "range": "± 542.7635704290403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20339.90860215054,
            "unit": "ns",
            "range": "± 2339.34615185228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749724.7021276595,
            "unit": "ns",
            "range": "± 169632.60198824632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3215078.825,
            "unit": "ns",
            "range": "± 112106.62170426398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2840018.71,
            "unit": "ns",
            "range": "± 208715.39746103808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7300964.58,
            "unit": "ns",
            "range": "± 279602.92572715925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3870390.8666666667,
            "unit": "ns",
            "range": "± 111426.3354074181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5992552.551724138,
            "unit": "ns",
            "range": "± 116906.06763905623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27298271.285714287,
            "unit": "ns",
            "range": "± 397503.13119703915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7527420,
            "unit": "ns",
            "range": "± 237568.12248514665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32733168.035714287,
            "unit": "ns",
            "range": "± 908702.7330710393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7027277.96484375,
            "unit": "ns",
            "range": "± 149748.01572865347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2189319.798063859,
            "unit": "ns",
            "range": "± 47449.53802619599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404003.9788876488,
            "unit": "ns",
            "range": "± 32813.45844573897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2803445.9244791665,
            "unit": "ns",
            "range": "± 57867.71490702831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000345.6786458333,
            "unit": "ns",
            "range": "± 13883.311339741602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831099.2856770833,
            "unit": "ns",
            "range": "± 13049.198557456995"
          }
        ]
      }
    ]
  }
}