window.BENCHMARK_DATA = {
  "lastUpdate": 1680686378739,
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
          "id": "8e9373623dda52f70a71b0e207e8ba0a54cc5bce",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:55:41+09:00",
          "tree_id": "5620cd033e9926b29098aaba821eedbdffb8880b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8e9373623dda52f70a71b0e207e8ba0a54cc5bce"
        },
        "date": 1680686335338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759571.2765957448,
            "unit": "ns",
            "range": "± 185405.15566385924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3233847.8873239434,
            "unit": "ns",
            "range": "± 156928.87092943455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764661.855670103,
            "unit": "ns",
            "range": "± 178568.14551412564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6239738.461538462,
            "unit": "ns",
            "range": "± 169524.1058420261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71362.1052631579,
            "unit": "ns",
            "range": "± 9630.869903346465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9632217.24137931,
            "unit": "ns",
            "range": "± 277435.8832865269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24425792.85714286,
            "unit": "ns",
            "range": "± 374758.24302380026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62919808.333333336,
            "unit": "ns",
            "range": "± 629211.7080606542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127605428.57142857,
            "unit": "ns",
            "range": "± 1326894.450864975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256180473.33333334,
            "unit": "ns",
            "range": "± 2739457.1361250877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5949278.958333333,
            "unit": "ns",
            "range": "± 95776.96802727679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935559.5703125,
            "unit": "ns",
            "range": "± 9427.889586870719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1455502.83203125,
            "unit": "ns",
            "range": "± 19304.459438301525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201070.342548077,
            "unit": "ns",
            "range": "± 39708.62397514947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045756.0697115385,
            "unit": "ns",
            "range": "± 5391.797900557697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 960501.9391741072,
            "unit": "ns",
            "range": "± 8940.236212293355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3938956.1224489794,
            "unit": "ns",
            "range": "± 264717.5304763752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6368310.169491526,
            "unit": "ns",
            "range": "± 279024.6211450581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32150056.25,
            "unit": "ns",
            "range": "± 389856.5188523422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8071785.714285715,
            "unit": "ns",
            "range": "± 141747.90654887643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34546169.23076923,
            "unit": "ns",
            "range": "± 466032.47630863555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237261.95652173914,
            "unit": "ns",
            "range": "± 14381.970110587254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237301.57894736843,
            "unit": "ns",
            "range": "± 17764.923981715987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216743.15789473685,
            "unit": "ns",
            "range": "± 17368.243536369293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15290922.222222222,
            "unit": "ns",
            "range": "± 287459.48370377667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12214838.235294119,
            "unit": "ns",
            "range": "± 392834.62710323394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29070.408163265307,
            "unit": "ns",
            "range": "± 5521.620283334842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70886.31578947368,
            "unit": "ns",
            "range": "± 8521.494855954981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49003.260869565216,
            "unit": "ns",
            "range": "± 6775.918105537985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132226.5306122449,
            "unit": "ns",
            "range": "± 19973.810435246873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7004.166666666667,
            "unit": "ns",
            "range": "± 1494.404769142245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28007.291666666668,
            "unit": "ns",
            "range": "± 4502.168946107892"
          }
        ]
      }
    ]
  }
}