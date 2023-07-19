window.BENCHMARK_DATA = {
  "lastUpdate": 1689753782448,
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
      },
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
          "id": "6ac00fec812c500b6a9734071c3d3fac2436c0b1",
          "message": "Release 3.0.0\n\nSince commit d4b7fb4ddff53907b8e97d43c7928e32147fd3bf doesn't update\nproject version, this commit has been added.",
          "timestamp": "2023-07-19T16:42:26+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6ac00fec812c500b6a9734071c3d3fac2436c0b1"
        },
        "date": 1689753745625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587248.4210526317,
            "unit": "ns",
            "range": "± 90857.4577591687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052435.714285714,
            "unit": "ns",
            "range": "± 147867.5729860565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154181.6326530613,
            "unit": "ns",
            "range": "± 188554.1144927692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5660575.903614458,
            "unit": "ns",
            "range": "± 301604.1989543869"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55785.26315789474,
            "unit": "ns",
            "range": "± 6514.582144321889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9467200,
            "unit": "ns",
            "range": "± 75736.44150228192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24677621.42857143,
            "unit": "ns",
            "range": "± 357144.0916462181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60918171.428571425,
            "unit": "ns",
            "range": "± 397659.20745624043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122967173.33333333,
            "unit": "ns",
            "range": "± 948065.5571566065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245484466.66666666,
            "unit": "ns",
            "range": "± 1372347.9596592668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5236938.046875,
            "unit": "ns",
            "range": "± 33693.446783704014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1661294.5963541667,
            "unit": "ns",
            "range": "± 4922.841822418478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270275.64453125,
            "unit": "ns",
            "range": "± 6052.85757881224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2751919.140625,
            "unit": "ns",
            "range": "± 7298.261383963751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 891336.9698660715,
            "unit": "ns",
            "range": "± 2792.840139355986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811440.05859375,
            "unit": "ns",
            "range": "± 2658.1110388504576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4058017.6470588236,
            "unit": "ns",
            "range": "± 57417.92223790101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4228091.176470588,
            "unit": "ns",
            "range": "± 128378.09066273863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4989264.285714285,
            "unit": "ns",
            "range": "± 45246.22563337117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4725966.666666667,
            "unit": "ns",
            "range": "± 85742.32944598327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7201731.25,
            "unit": "ns",
            "range": "± 138181.47352304505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321552.3076923077,
            "unit": "ns",
            "range": "± 14824.463604253819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306611.76470588235,
            "unit": "ns",
            "range": "± 14627.581077629216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282334,
            "unit": "ns",
            "range": "± 21424.632854013926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4795323.076923077,
            "unit": "ns",
            "range": "± 52592.25471882962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4276006.666666667,
            "unit": "ns",
            "range": "± 78023.65453288295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31662.886597938144,
            "unit": "ns",
            "range": "± 2619.5705590973007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121823.15789473684,
            "unit": "ns",
            "range": "± 12263.329288605171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110961,
            "unit": "ns",
            "range": "± 19712.713915110467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120517.20430107527,
            "unit": "ns",
            "range": "± 17306.210393557227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7062.244897959184,
            "unit": "ns",
            "range": "± 1329.6395377061533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24958.510638297874,
            "unit": "ns",
            "range": "± 2452.403235383176"
          }
        ]
      }
    ]
  }
}