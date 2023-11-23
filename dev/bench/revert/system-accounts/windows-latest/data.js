window.BENCHMARK_DATA = {
  "lastUpdate": 1700722352896,
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
        "date": 1700722323704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029880,
            "unit": "ns",
            "range": "± 127298.25552059172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801033.7837837837,
            "unit": "ns",
            "range": "± 89302.17177715777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1598331.0344827587,
            "unit": "ns",
            "range": "± 142921.56680578244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5991422.222222222,
            "unit": "ns",
            "range": "± 324621.83883713064"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35623.80952380953,
            "unit": "ns",
            "range": "± 1917.114991593499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5055871.428571428,
            "unit": "ns",
            "range": "± 75186.28586662319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13563903.333333334,
            "unit": "ns",
            "range": "± 152578.9578577347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32878094.736842107,
            "unit": "ns",
            "range": "± 722231.6275680878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66897081.25,
            "unit": "ns",
            "range": "± 1227532.2106941498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129732400,
            "unit": "ns",
            "range": "± 1697105.7724423492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369627.890625,
            "unit": "ns",
            "range": "± 7592.340079430802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048230.3850446428,
            "unit": "ns",
            "range": "± 2287.50324893868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730798.49609375,
            "unit": "ns",
            "range": "± 1478.9595569448447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966010.5729166667,
            "unit": "ns",
            "range": "± 6177.529421766393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612419.765625,
            "unit": "ns",
            "range": "± 1926.0575462185188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564808.8191105769,
            "unit": "ns",
            "range": "± 1968.705337818954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196750,
            "unit": "ns",
            "range": "± 76758.80305316027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288054.1666666665,
            "unit": "ns",
            "range": "± 89659.45965526314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2834426.6666666665,
            "unit": "ns",
            "range": "± 96876.0416952791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2759107,
            "unit": "ns",
            "range": "± 188307.83375509197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6421514.705882353,
            "unit": "ns",
            "range": "± 204678.53454736364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174636.50793650793,
            "unit": "ns",
            "range": "± 7959.27743493254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166369.69696969696,
            "unit": "ns",
            "range": "± 7385.437223596379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144791.30434782608,
            "unit": "ns",
            "range": "± 3322.911243237589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730355.5555555555,
            "unit": "ns",
            "range": "± 57914.77737079282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457606.6666666665,
            "unit": "ns",
            "range": "± 38084.313731258866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12373.333333333334,
            "unit": "ns",
            "range": "± 1986.3466549693346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61821.42857142857,
            "unit": "ns",
            "range": "± 8737.783813953138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47193.75,
            "unit": "ns",
            "range": "± 3568.452782811886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61933.51648351648,
            "unit": "ns",
            "range": "± 7971.21576864413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3202.0408163265306,
            "unit": "ns",
            "range": "± 760.7619067285268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11648.863636363636,
            "unit": "ns",
            "range": "± 1519.2250231109263"
          }
        ]
      }
    ]
  }
}