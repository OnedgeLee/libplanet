window.BENCHMARK_DATA = {
  "lastUpdate": 1702354376767,
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
        "date": 1702354366715,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207382.40425531915,
            "unit": "ns",
            "range": "± 12036.390917045637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197264.87931034484,
            "unit": "ns",
            "range": "± 8631.116501596178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165275.28205128206,
            "unit": "ns",
            "range": "± 5777.439202115678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3243766.6153846155,
            "unit": "ns",
            "range": "± 18485.002567570198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2827045.1333333333,
            "unit": "ns",
            "range": "± 43532.711354085164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15772.21875,
            "unit": "ns",
            "range": "± 2879.895784675568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64607.336956521736,
            "unit": "ns",
            "range": "± 5084.517988062084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58703.90217391304,
            "unit": "ns",
            "range": "± 5545.941842860491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88935.13829787234,
            "unit": "ns",
            "range": "± 8914.806185484576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6539.9157894736845,
            "unit": "ns",
            "range": "± 760.966164472143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13997.744897959185,
            "unit": "ns",
            "range": "± 2315.0917699573415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39383.82978723404,
            "unit": "ns",
            "range": "± 6068.525865955408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015118.5918367347,
            "unit": "ns",
            "range": "± 83903.58900091074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1905711.5957446808,
            "unit": "ns",
            "range": "± 66889.5869336858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663656.6288659794,
            "unit": "ns",
            "range": "± 158762.8545777422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12784636.43298969,
            "unit": "ns",
            "range": "± 1097399.061093167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450915.1627906975,
            "unit": "ns",
            "range": "± 89913.21663002932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2509271.0625,
            "unit": "ns",
            "range": "± 48271.6265763768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3155936.076923077,
            "unit": "ns",
            "range": "± 85414.26940326685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3316991.1470588236,
            "unit": "ns",
            "range": "± 135280.52306105616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13942910.033707865,
            "unit": "ns",
            "range": "± 771503.8269236295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5573950,
            "unit": "ns",
            "range": "± 57067.60586755454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464889.714285715,
            "unit": "ns",
            "range": "± 61553.70757617795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36578131.13333333,
            "unit": "ns",
            "range": "± 269086.87468544603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75805938.16666667,
            "unit": "ns",
            "range": "± 472612.2867269136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151667658.76923078,
            "unit": "ns",
            "range": "± 1396955.0850678268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3777004.4001116073,
            "unit": "ns",
            "range": "± 8376.33007200509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215219.05859375,
            "unit": "ns",
            "range": "± 3993.310769485343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765689.5388371394,
            "unit": "ns",
            "range": "± 1817.0554038703244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959670.9444754464,
            "unit": "ns",
            "range": "± 12130.617101271007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619156.4197716346,
            "unit": "ns",
            "range": "± 998.3549797749507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584034.0122395833,
            "unit": "ns",
            "range": "± 1905.7936933450633"
          }
        ]
      }
    ]
  }
}