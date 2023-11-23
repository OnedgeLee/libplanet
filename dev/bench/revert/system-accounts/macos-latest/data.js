window.BENCHMARK_DATA = {
  "lastUpdate": 1700722431948,
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
          "id": "e3734cae06101ddaca27d12357dcbfa159aa28bd",
          "message": "Revert \"Merge pull request #3494 from limebell/feature/system-accounts\"\n\nThis reverts commit 11b9f54d0f2e41374e5693ebfc45ddfb4edf90cb, reversing\nchanges made to eabf0b3951d20c3629082390e8d7cb9d7dae8b9b.",
          "timestamp": "2023-11-23T15:38:15+09:00",
          "tree_id": "56764ebd85f0dd721d7386e4de37a4a5041d7a86",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e3734cae06101ddaca27d12357dcbfa159aa28bd"
        },
        "date": 1700722405879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7796534.333333333,
            "unit": "ns",
            "range": "± 141304.43475583725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19818597.239583332,
            "unit": "ns",
            "range": "± 1252296.2557375003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48970304.770833336,
            "unit": "ns",
            "range": "± 1920085.545639887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96858661.58,
            "unit": "ns",
            "range": "± 2579116.241421854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195589526.43333334,
            "unit": "ns",
            "range": "± 2009502.1031203037"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49309.757894736846,
            "unit": "ns",
            "range": "± 9813.25593560989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216244.91304347827,
            "unit": "ns",
            "range": "± 17466.22122536682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213629.33333333334,
            "unit": "ns",
            "range": "± 16353.71831694111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192674.25806451612,
            "unit": "ns",
            "range": "± 18692.096588911598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3673100.0625,
            "unit": "ns",
            "range": "± 69363.3139154205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445956.2666666666,
            "unit": "ns",
            "range": "± 63694.841520741546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12213.157894736842,
            "unit": "ns",
            "range": "± 1716.532491377011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59648.81720430108,
            "unit": "ns",
            "range": "± 6683.491281974006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52820.01685393258,
            "unit": "ns",
            "range": "± 5590.932470430784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61355.55319148936,
            "unit": "ns",
            "range": "± 10576.26072239655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3197.2183908045977,
            "unit": "ns",
            "range": "± 562.0145745293684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11919.79569892473,
            "unit": "ns",
            "range": "± 1041.115743044971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1308744.0105263158,
            "unit": "ns",
            "range": "± 139959.34286628998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670474.7195121953,
            "unit": "ns",
            "range": "± 141154.99141513914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1952000.5894736843,
            "unit": "ns",
            "range": "± 170101.84603126612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10327940.69072165,
            "unit": "ns",
            "range": "± 2679986.0625589755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000022.6666666665,
            "unit": "ns",
            "range": "± 150349.13700588513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3047385.109589041,
            "unit": "ns",
            "range": "± 143418.45653217423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3667700.8571428573,
            "unit": "ns",
            "range": "± 104680.98035909771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3655906.375,
            "unit": "ns",
            "range": "± 222915.17254357447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10940107.40860215,
            "unit": "ns",
            "range": "± 1028957.6666944401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4280682.493303572,
            "unit": "ns",
            "range": "± 69985.97649537795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1348480.7654947916,
            "unit": "ns",
            "range": "± 22286.901461294467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 867809.6164713542,
            "unit": "ns",
            "range": "± 11697.697661860713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961590.1169270833,
            "unit": "ns",
            "range": "± 32020.123424411704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630645.728483073,
            "unit": "ns",
            "range": "± 9339.07026137149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571053.7083984375,
            "unit": "ns",
            "range": "± 8684.503130429006"
          }
        ]
      }
    ]
  }
}