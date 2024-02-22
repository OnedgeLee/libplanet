window.BENCHMARK_DATA = {
  "lastUpdate": 1708599727436,
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
          "id": "8bacd4da8cb3e27c89c55455c61f08dc04dcaf8c",
          "message": "Release 4.0.6",
          "timestamp": "2024-02-22T19:49:09+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8bacd4da8cb3e27c89c55455c61f08dc04dcaf8c"
        },
        "date": 1708599716520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5704058.266666667,
            "unit": "ns",
            "range": "± 32366.363552893847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14659364.692307692,
            "unit": "ns",
            "range": "± 76583.85046512158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37793442.5,
            "unit": "ns",
            "range": "± 297870.97526897833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76354063,
            "unit": "ns",
            "range": "± 895047.2756755752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151452077.33333334,
            "unit": "ns",
            "range": "± 1097405.329409048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202809.71568627452,
            "unit": "ns",
            "range": "± 8201.742596091943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196693.80357142858,
            "unit": "ns",
            "range": "± 7866.814518584075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170612.08,
            "unit": "ns",
            "range": "± 4437.090750330296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3240307.9285714286,
            "unit": "ns",
            "range": "± 24409.867530962165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929535.3571428573,
            "unit": "ns",
            "range": "± 25452.815947755756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13492.10465116279,
            "unit": "ns",
            "range": "± 1549.0588568096646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65938.48958333333,
            "unit": "ns",
            "range": "± 5451.190557541279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57127.471264367814,
            "unit": "ns",
            "range": "± 5203.523173280035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76125.30107526881,
            "unit": "ns",
            "range": "± 10046.740739927794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6295.257731958763,
            "unit": "ns",
            "range": "± 533.0989252777597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16363.901098901099,
            "unit": "ns",
            "range": "± 1665.7132543344444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41924.265957446805,
            "unit": "ns",
            "range": "± 5703.244728563066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1035938.1907216494,
            "unit": "ns",
            "range": "± 92121.65425531982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927332.1578947369,
            "unit": "ns",
            "range": "± 97290.05706429991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1723303.6313131314,
            "unit": "ns",
            "range": "± 166442.5241352804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7985962.339285715,
            "unit": "ns",
            "range": "± 339036.952787814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3697944.86640625,
            "unit": "ns",
            "range": "± 48917.93484849823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209130.9494791667,
            "unit": "ns",
            "range": "± 2181.158798836358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770221.3446514423,
            "unit": "ns",
            "range": "± 3941.6564742993714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934721.5893554688,
            "unit": "ns",
            "range": "± 1802.675323242945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629829.9139927456,
            "unit": "ns",
            "range": "± 942.9073691730372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570113.0517578125,
            "unit": "ns",
            "range": "± 765.375547077675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2456805.4146341463,
            "unit": "ns",
            "range": "± 86516.24679705413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2637021.527777778,
            "unit": "ns",
            "range": "± 86306.23061484068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3205703.3333333335,
            "unit": "ns",
            "range": "± 87168.31171978108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3345037.1071428573,
            "unit": "ns",
            "range": "± 143615.16164625247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8935401.8,
            "unit": "ns",
            "range": "± 213593.42401636782"
          }
        ]
      }
    ]
  }
}