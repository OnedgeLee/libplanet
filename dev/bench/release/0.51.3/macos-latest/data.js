window.BENCHMARK_DATA = {
  "lastUpdate": 1679043956642,
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
          "id": "679a8a98e6576a4515f5b449340f31ab85047b7d",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-17T17:42:57+09:00",
          "tree_id": "0e5ef6e39328e71b5e04266b0f2f1b9e4003d975",
          "url": "https://github.com/OnedgeLee/libplanet/commit/679a8a98e6576a4515f5b449340f31ab85047b7d"
        },
        "date": 1679043923512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 12271805.372340426,
            "unit": "ns",
            "range": "± 3764281.624045834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20573035.192307692,
            "unit": "ns",
            "range": "± 277701.7245746428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53113323.071428575,
            "unit": "ns",
            "range": "± 1492332.6161952321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106373467.02564102,
            "unit": "ns",
            "range": "± 3671716.307686189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 210993668.93333334,
            "unit": "ns",
            "range": "± 2511104.2936446583"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75112.21111111112,
            "unit": "ns",
            "range": "± 9895.258698373698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 228531.88888888888,
            "unit": "ns",
            "range": "± 30582.311083845325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226706.15217391305,
            "unit": "ns",
            "range": "± 29046.974928055657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249492.38775510204,
            "unit": "ns",
            "range": "± 43353.52711572461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14411362.663043479,
            "unit": "ns",
            "range": "± 1426109.415809507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11255757.194444444,
            "unit": "ns",
            "range": "± 549167.1264048537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27288.82222222222,
            "unit": "ns",
            "range": "± 3054.805173462824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63610.88144329897,
            "unit": "ns",
            "range": "± 10263.50446205236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72988.96666666666,
            "unit": "ns",
            "range": "± 12843.199391554894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147457.42222222223,
            "unit": "ns",
            "range": "± 26649.884685534937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7863.741935483871,
            "unit": "ns",
            "range": "± 1434.029552961088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20252.55681818182,
            "unit": "ns",
            "range": "± 1814.958977136566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744356.6326530613,
            "unit": "ns",
            "range": "± 224549.6668033549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3087517.0425531915,
            "unit": "ns",
            "range": "± 232315.77949730196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2655811.3061224488,
            "unit": "ns",
            "range": "± 269972.80445983895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6870377.385416667,
            "unit": "ns",
            "range": "± 674551.58169476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3481514.620689655,
            "unit": "ns",
            "range": "± 184653.61696060418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5554701.021739131,
            "unit": "ns",
            "range": "± 473036.7280027398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26596992.14893617,
            "unit": "ns",
            "range": "± 2125435.294986977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7028079.670212766,
            "unit": "ns",
            "range": "± 690766.3435987044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32312402.677419353,
            "unit": "ns",
            "range": "± 2143438.32101448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7443306.001233553,
            "unit": "ns",
            "range": "± 164425.27044623854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2164347.562800481,
            "unit": "ns",
            "range": "± 110721.75387331858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371776.8600260417,
            "unit": "ns",
            "range": "± 31186.55371029177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3217464.7915707235,
            "unit": "ns",
            "range": "± 210472.48459535235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992355.6779813218,
            "unit": "ns",
            "range": "± 54258.92911839949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814914.5581054688,
            "unit": "ns",
            "range": "± 32727.01708792312"
          }
        ]
      }
    ]
  }
}