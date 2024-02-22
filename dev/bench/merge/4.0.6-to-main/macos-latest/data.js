window.BENCHMARK_DATA = {
  "lastUpdate": 1708600784878,
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
          "id": "7038c92385b0f0020dfb0519218f3e88cbd29e6e",
          "message": "Merge tag '4.0.6' into merge/4.0.6-to-main\n\nLibplanet 4.0.6",
          "timestamp": "2024-02-22T20:06:10+09:00",
          "tree_id": "8eefd7e644349c641f03cff56fdc62142c490c8f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7038c92385b0f0020dfb0519218f3e88cbd29e6e"
        },
        "date": 1708600762882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7989661.4375,
            "unit": "ns",
            "range": "± 151399.29930043433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19573573.833333332,
            "unit": "ns",
            "range": "± 248124.8923246018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48511334.344827585,
            "unit": "ns",
            "range": "± 1420829.8671673555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97930462.08,
            "unit": "ns",
            "range": "± 2546839.2097316086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199866769.03846154,
            "unit": "ns",
            "range": "± 5284755.730724956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40809.532608695656,
            "unit": "ns",
            "range": "± 5591.025936346835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227798.6325301205,
            "unit": "ns",
            "range": "± 12045.325528684465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221747.89156626505,
            "unit": "ns",
            "range": "± 11488.188116296486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198798.306122449,
            "unit": "ns",
            "range": "± 17135.29674334946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3907561.6666666665,
            "unit": "ns",
            "range": "± 63664.11379898038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3457309.6923076925,
            "unit": "ns",
            "range": "± 28697.85642222724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13623.336842105264,
            "unit": "ns",
            "range": "± 2012.0092826365023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61271.27,
            "unit": "ns",
            "range": "± 8565.873296424834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52077.4012345679,
            "unit": "ns",
            "range": "± 2876.6049850689365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62897.37628865979,
            "unit": "ns",
            "range": "± 10380.641697266892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3086.1813186813188,
            "unit": "ns",
            "range": "± 322.126816956748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11851.31182795699,
            "unit": "ns",
            "range": "± 954.4557973514065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050649.448979592,
            "unit": "ns",
            "range": "± 80905.64253640985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2262450.3852459015,
            "unit": "ns",
            "range": "± 101760.50735855213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1814912.3513513512,
            "unit": "ns",
            "range": "± 61242.96934352556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12652663.595959596,
            "unit": "ns",
            "range": "± 5304509.852309087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3076539.3488372094,
            "unit": "ns",
            "range": "± 112964.5496758636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3077838.7843137253,
            "unit": "ns",
            "range": "± 121042.28610156267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3733433.608108108,
            "unit": "ns",
            "range": "± 126150.4786190735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3822793.769230769,
            "unit": "ns",
            "range": "± 156802.96583224705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16641232.082417583,
            "unit": "ns",
            "range": "± 2058140.9091402746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4345809.961458334,
            "unit": "ns",
            "range": "± 30157.230513131726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1352536.775390625,
            "unit": "ns",
            "range": "± 11039.725076758565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 868346.6279994419,
            "unit": "ns",
            "range": "± 4496.97835657285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956028.4676983173,
            "unit": "ns",
            "range": "± 30107.389254458336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619536.8053385416,
            "unit": "ns",
            "range": "± 6901.007186312874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570806.1953822544,
            "unit": "ns",
            "range": "± 5708.519973398223"
          }
        ]
      }
    ]
  }
}