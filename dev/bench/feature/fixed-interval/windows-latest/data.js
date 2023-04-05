window.BENCHMARK_DATA = {
  "lastUpdate": 1680685269303,
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
          "id": "a51c482f4e17044007e75869872dba7a252b5f32",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:44:41+09:00",
          "tree_id": "e940990a794e091ec51fad4900f4bc53006d0141",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a51c482f4e17044007e75869872dba7a252b5f32"
        },
        "date": 1680685233317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326403.1914893617,
            "unit": "ns",
            "range": "± 106260.33708311255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2315922.727272727,
            "unit": "ns",
            "range": "± 53369.983821996546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2099454.5454545454,
            "unit": "ns",
            "range": "± 147825.32112551868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4785480,
            "unit": "ns",
            "range": "± 107210.69987023994"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43142.10526315789,
            "unit": "ns",
            "range": "± 1795.3260118211967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6875453.333333333,
            "unit": "ns",
            "range": "± 25122.58138086322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17515306.666666668,
            "unit": "ns",
            "range": "± 81719.0174287712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45409553.333333336,
            "unit": "ns",
            "range": "± 340088.30757963576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90664226.66666667,
            "unit": "ns",
            "range": "± 783471.7193060518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182547560,
            "unit": "ns",
            "range": "± 1213510.3494761444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4819247.734375,
            "unit": "ns",
            "range": "± 26959.76728098753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505616.5234375,
            "unit": "ns",
            "range": "± 1543.2452227440465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1131919.0755208333,
            "unit": "ns",
            "range": "± 1533.9783190618875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571380.1692708335,
            "unit": "ns",
            "range": "± 7169.227289016882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822876.25,
            "unit": "ns",
            "range": "± 4178.157157492956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736671.0221354166,
            "unit": "ns",
            "range": "± 1239.7549876000282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2844906.6666666665,
            "unit": "ns",
            "range": "± 50966.99865973032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4580306.666666667,
            "unit": "ns",
            "range": "± 82341.38402898949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21326773.333333332,
            "unit": "ns",
            "range": "± 242416.5849661831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5715984.615384615,
            "unit": "ns",
            "range": "± 60866.833417358015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25108985.714285713,
            "unit": "ns",
            "range": "± 436513.4888340404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174884.4827586207,
            "unit": "ns",
            "range": "± 6822.3266526778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175413.84615384616,
            "unit": "ns",
            "range": "± 7690.210435252181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154054,
            "unit": "ns",
            "range": "± 10204.89009339061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10216140,
            "unit": "ns",
            "range": "± 102008.28957911776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8238316.666666667,
            "unit": "ns",
            "range": "± 86961.20371971028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18670.526315789473,
            "unit": "ns",
            "range": "± 1728.0461038600997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48232.608695652176,
            "unit": "ns",
            "range": "± 3550.3786733698084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35469.69696969697,
            "unit": "ns",
            "range": "± 1128.1857250927394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85563.54166666667,
            "unit": "ns",
            "range": "± 12659.310031848345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4486.8421052631575,
            "unit": "ns",
            "range": "± 614.549243491823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17266.666666666668,
            "unit": "ns",
            "range": "± 1710.8733790956726"
          }
        ]
      }
    ]
  }
}