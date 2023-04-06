window.BENCHMARK_DATA = {
  "lastUpdate": 1680751975313,
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
          "id": "f72fd58a9c9a44636e626e85bde13d9cf13d87c4",
          "message": "Revert \"Merge pull request #3063 from OnedgeLee/feature/fixed-interval\"\n\nThis reverts commit 5a6f1997de3b3fb1fab9f50ef160906b3247a8d8, reversing\nchanges made to 6c17ac655f9eb8f0c8736b0d27181c362fd90c54.",
          "timestamp": "2023-04-06T12:11:53+09:00",
          "tree_id": "850e11d88531cbbc0c209aaf41b24521711480e5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f72fd58a9c9a44636e626e85bde13d9cf13d87c4"
        },
        "date": 1680751940481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1448826,
            "unit": "ns",
            "range": "± 145591.91454128895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2617768.8524590163,
            "unit": "ns",
            "range": "± 117488.43565926478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2236112.3711340204,
            "unit": "ns",
            "range": "± 136035.10213186702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5140095,
            "unit": "ns",
            "range": "± 182621.83702661179"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52155.913978494624,
            "unit": "ns",
            "range": "± 3571.154434145892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7126333.333333333,
            "unit": "ns",
            "range": "± 181633.79226551874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19864853.333333332,
            "unit": "ns",
            "range": "± 278276.70932433597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49850185.71428572,
            "unit": "ns",
            "range": "± 637376.3045692659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99908693.75,
            "unit": "ns",
            "range": "± 1890082.0509416163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199299320,
            "unit": "ns",
            "range": "± 2391940.3582507176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4882585.9375,
            "unit": "ns",
            "range": "± 50749.067298381444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551283.9453125,
            "unit": "ns",
            "range": "± 15633.618329305242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187430.95703125,
            "unit": "ns",
            "range": "± 13928.604481500666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630247.1354166665,
            "unit": "ns",
            "range": "± 6924.98986485817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859462.5676081731,
            "unit": "ns",
            "range": "± 7046.186904456072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775940.0615985577,
            "unit": "ns",
            "range": "± 5203.675601172007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3196068.253968254,
            "unit": "ns",
            "range": "± 145576.12112036295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5107618.421052632,
            "unit": "ns",
            "range": "± 175889.52438001742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24321840,
            "unit": "ns",
            "range": "± 344867.08371280006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6296823.684210527,
            "unit": "ns",
            "range": "± 271029.58426177903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27690033.333333332,
            "unit": "ns",
            "range": "± 774562.1155009008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192436.98630136985,
            "unit": "ns",
            "range": "± 8980.588740433988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197396.875,
            "unit": "ns",
            "range": "± 13160.766679994867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182744.3298969072,
            "unit": "ns",
            "range": "± 13203.187502393796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11193292.857142856,
            "unit": "ns",
            "range": "± 184128.6442609151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8982884.615384616,
            "unit": "ns",
            "range": "± 131497.93310260208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24093.478260869564,
            "unit": "ns",
            "range": "± 1896.3124625351627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59477.89473684211,
            "unit": "ns",
            "range": "± 5090.273974722575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45814.43298969072,
            "unit": "ns",
            "range": "± 4421.655744051129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112655.10204081633,
            "unit": "ns",
            "range": "± 18674.340808410227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7908.2474226804125,
            "unit": "ns",
            "range": "± 1291.8551020958182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22658.76288659794,
            "unit": "ns",
            "range": "± 2596.100945702018"
          }
        ]
      }
    ]
  }
}