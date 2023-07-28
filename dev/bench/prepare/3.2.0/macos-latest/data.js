window.BENCHMARK_DATA = {
  "lastUpdate": 1690509043254,
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
          "id": "fc7dc0d018b91da8c98dc766c36b64f9564b0f06",
          "message": "Prepare 3.2.0",
          "timestamp": "2023-07-28T10:33:58+09:00",
          "tree_id": "caa34c3224c3f99addd0c02b454de2a675696ee0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fc7dc0d018b91da8c98dc766c36b64f9564b0f06"
        },
        "date": 1690509015285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8675887.25,
            "unit": "ns",
            "range": "± 71546.82821141435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20095390.03448276,
            "unit": "ns",
            "range": "± 577439.5015336166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50211952.13043478,
            "unit": "ns",
            "range": "± 1916607.6099981603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101613186.96296297,
            "unit": "ns",
            "range": "± 2759557.94231043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215258102.73333332,
            "unit": "ns",
            "range": "± 3598857.5559465983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65277.554945054944,
            "unit": "ns",
            "range": "± 8697.504310449107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347624.538961039,
            "unit": "ns",
            "range": "± 17722.25181905324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320292.81111111114,
            "unit": "ns",
            "range": "± 24494.284107666143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308838.1443298969,
            "unit": "ns",
            "range": "± 20184.853418358496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4287382.684210527,
            "unit": "ns",
            "range": "± 92287.81578064032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894765.933333333,
            "unit": "ns",
            "range": "± 55875.32735789904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24175.303030303032,
            "unit": "ns",
            "range": "± 3890.2548404393956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115291.76530612246,
            "unit": "ns",
            "range": "± 12611.289309890284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114090.58762886598,
            "unit": "ns",
            "range": "± 15919.05714842576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118424.74489795919,
            "unit": "ns",
            "range": "± 21217.713841651526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8124.531578947369,
            "unit": "ns",
            "range": "± 1439.2993083414447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22557.030612244896,
            "unit": "ns",
            "range": "± 5811.918316672369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657391.112244898,
            "unit": "ns",
            "range": "± 241953.9109847091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3212331.4623655914,
            "unit": "ns",
            "range": "± 233526.5657539592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209714.775510204,
            "unit": "ns",
            "range": "± 252529.65347629235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5986623.5,
            "unit": "ns",
            "range": "± 349251.44781210885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228223,
            "unit": "ns",
            "range": "± 67496.53049354957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631295.574468085,
            "unit": "ns",
            "range": "± 267625.3167708115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4406113.023255814,
            "unit": "ns",
            "range": "± 233352.98005360775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3936793.7183908047,
            "unit": "ns",
            "range": "± 204397.4748663271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6999633.084745763,
            "unit": "ns",
            "range": "± 286290.2298287941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6696615.512462798,
            "unit": "ns",
            "range": "± 153827.42696927933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915178.8690185547,
            "unit": "ns",
            "range": "± 37432.55288349935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310134.488671875,
            "unit": "ns",
            "range": "± 15887.515049868158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2490965.154854911,
            "unit": "ns",
            "range": "± 23904.3632114518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854896.2083984375,
            "unit": "ns",
            "range": "± 5996.9540826493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774959.0961914062,
            "unit": "ns",
            "range": "± 2139.614510472445"
          }
        ]
      }
    ]
  }
}