window.BENCHMARK_DATA = {
  "lastUpdate": 1689641527880,
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
          "id": "8ef11111b196a865999fcbb79a1c449d92c74daa",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:31:07+09:00",
          "tree_id": "909aec0cf9c83ce9ea2d91206f536afb3dd729a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ef11111b196a865999fcbb79a1c449d92c74daa"
        },
        "date": 1689641505585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8437419.287878787,
            "unit": "ns",
            "range": "± 264057.6125401848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21566218.486111112,
            "unit": "ns",
            "range": "± 996085.7516357657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56241963.12264151,
            "unit": "ns",
            "range": "± 2338181.0599725326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107637509.22307692,
            "unit": "ns",
            "range": "± 5022938.074965042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216568553.2972973,
            "unit": "ns",
            "range": "± 10840214.300984077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72980.83673469388,
            "unit": "ns",
            "range": "± 8644.020496815026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349893.3695652174,
            "unit": "ns",
            "range": "± 30726.78953871403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334383.76804123714,
            "unit": "ns",
            "range": "± 49902.260319447516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325470.34444444446,
            "unit": "ns",
            "range": "± 24864.02090875109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283190.108695652,
            "unit": "ns",
            "range": "± 159337.1221195597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4191376.9318181816,
            "unit": "ns",
            "range": "± 448280.8652890954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24343.940476190477,
            "unit": "ns",
            "range": "± 2977.6274348871357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119701.98913043478,
            "unit": "ns",
            "range": "± 16868.593903304616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106989.60638297872,
            "unit": "ns",
            "range": "± 17704.015057776593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114253.05319148937,
            "unit": "ns",
            "range": "± 14448.493898045961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6088.425531914893,
            "unit": "ns",
            "range": "± 1083.1807451450286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21433.934065934067,
            "unit": "ns",
            "range": "± 4400.446620772836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630707.142857143,
            "unit": "ns",
            "range": "± 175452.41234539807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991546.0217391304,
            "unit": "ns",
            "range": "± 183044.6120612346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163282.457894737,
            "unit": "ns",
            "range": "± 197354.62510522458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6027930.242424242,
            "unit": "ns",
            "range": "± 280280.37715232227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298951.598901099,
            "unit": "ns",
            "range": "± 177822.8002535767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506477.0764705883,
            "unit": "ns",
            "range": "± 271209.73032219463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4482555.347826087,
            "unit": "ns",
            "range": "± 168482.7179940908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3888040.805263158,
            "unit": "ns",
            "range": "± 249711.7769028105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7784246.222222222,
            "unit": "ns",
            "range": "± 549994.2560631151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7708084.3121875,
            "unit": "ns",
            "range": "± 204685.6638938305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2043062.1372395833,
            "unit": "ns",
            "range": "± 28489.884496622126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364225.9022135416,
            "unit": "ns",
            "range": "± 18035.14873033194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645647.67265625,
            "unit": "ns",
            "range": "± 25314.51593231896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857383.0401785715,
            "unit": "ns",
            "range": "± 7163.547146270873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755766.7130208333,
            "unit": "ns",
            "range": "± 9730.228096350193"
          }
        ]
      }
    ]
  }
}