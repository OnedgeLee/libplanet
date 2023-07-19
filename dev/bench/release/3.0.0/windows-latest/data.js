window.BENCHMARK_DATA = {
  "lastUpdate": 1689753585638,
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
          "id": "118891154eab9863287035e85aa4bc8e727db0c7",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:41:07+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/118891154eab9863287035e85aa4bc8e727db0c7"
        },
        "date": 1689753541960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1536605.7142857143,
            "unit": "ns",
            "range": "± 50470.14226752488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2625172.340425532,
            "unit": "ns",
            "range": "± 101839.83311858245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1827942.4242424243,
            "unit": "ns",
            "range": "± 128108.96915414064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4917527.777777778,
            "unit": "ns",
            "range": "± 201128.57186730992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48935.051546391755,
            "unit": "ns",
            "range": "± 3926.380893952931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7281635.714285715,
            "unit": "ns",
            "range": "± 109735.81287061042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20399500,
            "unit": "ns",
            "range": "± 143338.96888145944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52106371.428571425,
            "unit": "ns",
            "range": "± 612317.3290284798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105463166.66666667,
            "unit": "ns",
            "range": "± 1378714.394782673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209592885.7142857,
            "unit": "ns",
            "range": "± 1455477.8664686799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863684.095982143,
            "unit": "ns",
            "range": "± 20439.57526019259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567499.0364583333,
            "unit": "ns",
            "range": "± 7724.030528991893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216362.5697544643,
            "unit": "ns",
            "range": "± 4323.284839070164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707037.1875,
            "unit": "ns",
            "range": "± 12458.724154079062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852605.1967075893,
            "unit": "ns",
            "range": "± 2650.720195924757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794047.8645833334,
            "unit": "ns",
            "range": "± 3533.487362211983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3537220,
            "unit": "ns",
            "range": "± 47341.30181081692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3591478.723404255,
            "unit": "ns",
            "range": "± 139776.18279447948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4441256.521739131,
            "unit": "ns",
            "range": "± 106762.30959935319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3961957.1428571427,
            "unit": "ns",
            "range": "± 57071.392055992386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6396872.7272727275,
            "unit": "ns",
            "range": "± 166453.42680598242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272262.5,
            "unit": "ns",
            "range": "± 8471.079833668615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252773.80952380953,
            "unit": "ns",
            "range": "± 9217.244165780485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231138,
            "unit": "ns",
            "range": "± 13752.125859537706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4134778.5714285714,
            "unit": "ns",
            "range": "± 50698.629606292554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3854014.285714286,
            "unit": "ns",
            "range": "± 52801.81898298664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22567.01030927835,
            "unit": "ns",
            "range": "± 2406.922380061852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94475.51020408163,
            "unit": "ns",
            "range": "± 7064.694581567037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76432.63157894737,
            "unit": "ns",
            "range": "± 4811.0122371285515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100016.32653061225,
            "unit": "ns",
            "range": "± 14597.709846351176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5389.7959183673465,
            "unit": "ns",
            "range": "± 841.1442618609004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21822.164948453606,
            "unit": "ns",
            "range": "± 2251.5616001289527"
          }
        ]
      }
    ]
  }
}