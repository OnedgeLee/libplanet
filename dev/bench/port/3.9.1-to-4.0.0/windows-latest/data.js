window.BENCHMARK_DATA = {
  "lastUpdate": 1702354476777,
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
          "id": "a52b5d8aafec4a715a2d72a7e6a0e7ae826b337d",
          "message": "Merge tag '3.9.1' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.1",
          "timestamp": "2023-12-12T13:00:47+09:00",
          "tree_id": "bdc4cf32fcc1981925da19166e015cf11ccac18f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a52b5d8aafec4a715a2d72a7e6a0e7ae826b337d"
        },
        "date": 1702354445837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057023.469387755,
            "unit": "ns",
            "range": "± 123696.78241406214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767063.043478261,
            "unit": "ns",
            "range": "± 67934.70838875172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622775.2577319588,
            "unit": "ns",
            "range": "± 153421.31535886173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11273238.709677419,
            "unit": "ns",
            "range": "± 865350.6404207359"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35282.22222222222,
            "unit": "ns",
            "range": "± 2027.5948988044745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5080460,
            "unit": "ns",
            "range": "± 50090.35835367921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13399621.42857143,
            "unit": "ns",
            "range": "± 193946.44057880208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33027142.85714286,
            "unit": "ns",
            "range": "± 455689.6206077886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65578364.28571428,
            "unit": "ns",
            "range": "± 663702.398098544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133101746.66666667,
            "unit": "ns",
            "range": "± 1222229.5142581896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3262940.5729166665,
            "unit": "ns",
            "range": "± 6070.0314375249645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058777.4609375,
            "unit": "ns",
            "range": "± 3739.626556094073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734686.25,
            "unit": "ns",
            "range": "± 2475.678293494653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917242.3828125,
            "unit": "ns",
            "range": "± 12371.648966608383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609604.0248325893,
            "unit": "ns",
            "range": "± 1081.1279134175288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565404.12109375,
            "unit": "ns",
            "range": "± 1168.2816100606037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2274987.0967741935,
            "unit": "ns",
            "range": "± 69239.93906186172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2401657.1428571427,
            "unit": "ns",
            "range": "± 95007.79134716619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2903800,
            "unit": "ns",
            "range": "± 60921.8351660552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2957996.629213483,
            "unit": "ns",
            "range": "± 161275.72765118058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12436847.252747253,
            "unit": "ns",
            "range": "± 1438863.4573734198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177296.25,
            "unit": "ns",
            "range": "± 9280.84243980066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174638.46153846153,
            "unit": "ns",
            "range": "± 6733.153380806953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145012.90322580645,
            "unit": "ns",
            "range": "± 4319.47079594124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2977753.3333333335,
            "unit": "ns",
            "range": "± 39205.190375522376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2617280,
            "unit": "ns",
            "range": "± 48539.250685840394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12520.454545454546,
            "unit": "ns",
            "range": "± 1163.541866918013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61779.8969072165,
            "unit": "ns",
            "range": "± 7328.0875880132935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47192.22222222222,
            "unit": "ns",
            "range": "± 3019.458533860479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63993.81443298969,
            "unit": "ns",
            "range": "± 16143.895998391246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2893.010752688172,
            "unit": "ns",
            "range": "± 571.4964813049969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12113.978494623656,
            "unit": "ns",
            "range": "± 1595.4821676717604"
          }
        ]
      }
    ]
  }
}