window.BENCHMARK_DATA = {
  "lastUpdate": 1688630594304,
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
          "id": "e6ef25fd9741c17342918f27320691c092cd7339",
          "message": "fix: Catch when RoundVoteSet not found\n\n[skip changelog]",
          "timestamp": "2023-07-06T16:45:33+09:00",
          "tree_id": "400c0a03f685ad4839ecb3ca39f1b1f7e21b0268",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6ef25fd9741c17342918f27320691c092cd7339"
        },
        "date": 1688630582132,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8934010.266666668,
            "unit": "ns",
            "range": "± 65278.004304082475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23218209.066666666,
            "unit": "ns",
            "range": "± 248558.78817278583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56997448.53333333,
            "unit": "ns",
            "range": "± 474177.88860042003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114696740.13333334,
            "unit": "ns",
            "range": "± 856002.4914074948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227152226.4,
            "unit": "ns",
            "range": "± 2848355.6375269224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48327.75555555556,
            "unit": "ns",
            "range": "± 2618.2552399209067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295788.875,
            "unit": "ns",
            "range": "± 3476.536147278399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286678.1632653061,
            "unit": "ns",
            "range": "± 11235.559521646253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256012.2340425532,
            "unit": "ns",
            "range": "± 9857.074689989588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4590596.928571428,
            "unit": "ns",
            "range": "± 55280.38290731279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4169211.3571428573,
            "unit": "ns",
            "range": "± 43881.6317409375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21253.59375,
            "unit": "ns",
            "range": "± 1863.9519565647552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96064.35227272728,
            "unit": "ns",
            "range": "± 5252.72253882497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81997.46391752578,
            "unit": "ns",
            "range": "± 6552.403700268219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96105.44680851063,
            "unit": "ns",
            "range": "± 10687.323868753809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5667.4795918367345,
            "unit": "ns",
            "range": "± 854.3096957662625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19151.354166666668,
            "unit": "ns",
            "range": "± 2078.733556654485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563799.698630137,
            "unit": "ns",
            "range": "± 76155.37692217086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964088.5945945946,
            "unit": "ns",
            "range": "± 92195.72879792796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1962705.2528735632,
            "unit": "ns",
            "range": "± 106059.24202935964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5316601.2,
            "unit": "ns",
            "range": "± 157512.04851592385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199582.055803572,
            "unit": "ns",
            "range": "± 30643.611440962835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882233.720703125,
            "unit": "ns",
            "range": "± 4281.0806219451615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398293.201923077,
            "unit": "ns",
            "range": "± 1699.0878991203522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666378.221875,
            "unit": "ns",
            "range": "± 3505.174322879631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834254.7129603794,
            "unit": "ns",
            "range": "± 579.1966639192227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766906.0288411458,
            "unit": "ns",
            "range": "± 756.5787838754976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3580944.275,
            "unit": "ns",
            "range": "± 127187.40019760212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3816239.8571428573,
            "unit": "ns",
            "range": "± 90236.96897906407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4752565.857142857,
            "unit": "ns",
            "range": "± 67124.93986229323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173669.8387096776,
            "unit": "ns",
            "range": "± 123547.65998245285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6738334.2,
            "unit": "ns",
            "range": "± 176125.1551343059"
          }
        ]
      }
    ]
  }
}