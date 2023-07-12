window.BENCHMARK_DATA = {
  "lastUpdate": 1689147851204,
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
          "id": "12473199c3b5e28d785ce1d541b557c92694602e",
          "message": "Prepare 2.5.1",
          "timestamp": "2023-07-12T16:29:45+09:00",
          "tree_id": "75db858d936a360210595e394dd591c0661c7cff",
          "url": "https://github.com/OnedgeLee/libplanet/commit/12473199c3b5e28d785ce1d541b557c92694602e"
        },
        "date": 1689147838527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297238.70967741933,
            "unit": "ns",
            "range": "± 7763.8059317731895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278625.6451612903,
            "unit": "ns",
            "range": "± 7033.430422150048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258297.75,
            "unit": "ns",
            "range": "± 5941.503680621775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4573570.666666667,
            "unit": "ns",
            "range": "± 34576.12774458013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4088644,
            "unit": "ns",
            "range": "± 24434.231452342974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21571.0625,
            "unit": "ns",
            "range": "± 1500.840584209571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103039.06315789474,
            "unit": "ns",
            "range": "± 7399.862117476971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87451.95959595959,
            "unit": "ns",
            "range": "± 6152.172765214314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104238.6530612245,
            "unit": "ns",
            "range": "± 16829.568686917406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5443.329896907217,
            "unit": "ns",
            "range": "± 644.9958611244706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19250.206521739132,
            "unit": "ns",
            "range": "± 1653.6158019976526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1562629.8125,
            "unit": "ns",
            "range": "± 97441.14007503385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2907581.9444444445,
            "unit": "ns",
            "range": "± 96552.18654324998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1983937.9605263157,
            "unit": "ns",
            "range": "± 97317.92991378868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5120679.947368421,
            "unit": "ns",
            "range": "± 113788.30485426956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032890.54296875,
            "unit": "ns",
            "range": "± 22140.48259933407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913232.9886997768,
            "unit": "ns",
            "range": "± 3422.5671579140608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387009.4802083333,
            "unit": "ns",
            "range": "± 3002.750420562562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654734.4202008927,
            "unit": "ns",
            "range": "± 3025.4985267127504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836042.4714704241,
            "unit": "ns",
            "range": "± 695.390120616504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773079.75078125,
            "unit": "ns",
            "range": "± 703.319681707559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3700944.0476190476,
            "unit": "ns",
            "range": "± 84420.73863244517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3874703.4,
            "unit": "ns",
            "range": "± 59344.998313493714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4756186.94117647,
            "unit": "ns",
            "range": "± 97622.75524466016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4153202.238095238,
            "unit": "ns",
            "range": "± 98377.94087848392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6781284.95,
            "unit": "ns",
            "range": "± 147891.25967429584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8021799.333333333,
            "unit": "ns",
            "range": "± 47581.59078387155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22668336,
            "unit": "ns",
            "range": "± 208390.65953327727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55602977.13333333,
            "unit": "ns",
            "range": "± 500972.2820629995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112429302.53333333,
            "unit": "ns",
            "range": "± 1077997.1143265027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229632127.66666666,
            "unit": "ns",
            "range": "± 2449591.7510579964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49338.684782608696,
            "unit": "ns",
            "range": "± 3135.198575582943"
          }
        ]
      }
    ]
  }
}