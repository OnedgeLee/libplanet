window.BENCHMARK_DATA = {
  "lastUpdate": 1680688539588,
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
          "id": "d691091fdefe1e5b355fb7249865fb9e9bd40997",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:57:20+09:00",
          "tree_id": "c078d231aa751a9cdf4c606dcffdbdcee9df2826",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d691091fdefe1e5b355fb7249865fb9e9bd40997"
        },
        "date": 1680686462545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412470,
            "unit": "ns",
            "range": "± 215744.43190726824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2690244.6808510637,
            "unit": "ns",
            "range": "± 234004.6771966258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107015.6565656564,
            "unit": "ns",
            "range": "± 249453.63978168333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5613625,
            "unit": "ns",
            "range": "± 484779.63675316056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55856.52173913043,
            "unit": "ns",
            "range": "± 12971.382739952416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7373923.711340206,
            "unit": "ns",
            "range": "± 577945.7590201832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18139085.714285713,
            "unit": "ns",
            "range": "± 1342626.3792383957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47970247.368421055,
            "unit": "ns",
            "range": "± 3930075.079728991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102558971,
            "unit": "ns",
            "range": "± 8736941.181647886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201182958.58585858,
            "unit": "ns",
            "range": "± 13295261.697273267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5096143.787650603,
            "unit": "ns",
            "range": "± 270684.8286129685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1605604.5619419643,
            "unit": "ns",
            "range": "± 26014.30455198044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187943.1770833333,
            "unit": "ns",
            "range": "± 35516.33684413087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665347.8966346155,
            "unit": "ns",
            "range": "± 42209.33788228764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868449.3033854166,
            "unit": "ns",
            "range": "± 13879.321848987247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828526.2971297555,
            "unit": "ns",
            "range": "± 20856.762839050298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3036078.350515464,
            "unit": "ns",
            "range": "± 300860.9743396179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4911575.510204081,
            "unit": "ns",
            "range": "± 419210.71911740623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24417248.979591835,
            "unit": "ns",
            "range": "± 2531631.8681278676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6077170.707070707,
            "unit": "ns",
            "range": "± 503226.070682751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31609482.82828283,
            "unit": "ns",
            "range": "± 2767962.4014654923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196706.3829787234,
            "unit": "ns",
            "range": "± 34562.730280041396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189798.94736842104,
            "unit": "ns",
            "range": "± 39095.60157754279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162211.57894736843,
            "unit": "ns",
            "range": "± 25298.838856366572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11182435.353535354,
            "unit": "ns",
            "range": "± 906377.5754328754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8667308.421052631,
            "unit": "ns",
            "range": "± 606234.921929304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28822.222222222223,
            "unit": "ns",
            "range": "± 10084.009928387997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59746.875,
            "unit": "ns",
            "range": "± 17417.47430554185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45311.22448979592,
            "unit": "ns",
            "range": "± 11288.347085754684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114034,
            "unit": "ns",
            "range": "± 29977.699522926516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4818.390804597701,
            "unit": "ns",
            "range": "± 542.0736961036614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23540.40404040404,
            "unit": "ns",
            "range": "± 10911.732304079946"
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
          "id": "b8713c10d1151a351bca80e47bab442ec7d4d01d",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T18:04:21+09:00",
          "tree_id": "8bc9dbf1522bd49a074c7a8329402bb202d926f2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b8713c10d1151a351bca80e47bab442ec7d4d01d"
        },
        "date": 1680686501534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307433.8383838383,
            "unit": "ns",
            "range": "± 142329.14906972635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510239,
            "unit": "ns",
            "range": "± 150510.74856412524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2079174.1935483871,
            "unit": "ns",
            "range": "± 129007.48706215684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5270282.474226804,
            "unit": "ns",
            "range": "± 333897.00508112943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47792.94117647059,
            "unit": "ns",
            "range": "± 2605.2505699477133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6739800,
            "unit": "ns",
            "range": "± 23325.41532320486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18865067.272727273,
            "unit": "ns",
            "range": "± 766277.0659964017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46022940,
            "unit": "ns",
            "range": "± 1349631.259819792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93192377.77777778,
            "unit": "ns",
            "range": "± 1948410.9801867825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182147823.07692307,
            "unit": "ns",
            "range": "± 4959094.974795921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4691038.100961538,
            "unit": "ns",
            "range": "± 29523.10964151045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1475811.6436298077,
            "unit": "ns",
            "range": "± 9374.940596850396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152234.681919643,
            "unit": "ns",
            "range": "± 8073.1561362892935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604324.1350446427,
            "unit": "ns",
            "range": "± 11663.475660613427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829196.8619791666,
            "unit": "ns",
            "range": "± 8647.1555669041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760616.0574776785,
            "unit": "ns",
            "range": "± 4060.4484704593533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2965525,
            "unit": "ns",
            "range": "± 68153.22423542566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4716002.325581395,
            "unit": "ns",
            "range": "± 173478.8946795108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21946152.63157895,
            "unit": "ns",
            "range": "± 462336.9530841489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5525375,
            "unit": "ns",
            "range": "± 71957.18581843714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24752427.777777776,
            "unit": "ns",
            "range": "± 513705.3021123109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169158.33333333334,
            "unit": "ns",
            "range": "± 6691.780710544404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174810,
            "unit": "ns",
            "range": "± 7040.241473131444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151840.4255319149,
            "unit": "ns",
            "range": "± 8632.450892946106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10197528.57142857,
            "unit": "ns",
            "range": "± 167978.7918324647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8232900,
            "unit": "ns",
            "range": "± 91624.45584608353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18268.08510638298,
            "unit": "ns",
            "range": "± 1435.2859492518837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46823.655913978495,
            "unit": "ns",
            "range": "± 3681.57568610124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38458.86075949367,
            "unit": "ns",
            "range": "± 1915.8040337540092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90630.20833333333,
            "unit": "ns",
            "range": "± 17104.60153410043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5434.736842105263,
            "unit": "ns",
            "range": "± 567.3320205140548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18721.875,
            "unit": "ns",
            "range": "± 2200.0575650363526"
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
          "id": "a9981583bfdeb1c619e0ec777ab5f4f562a25dc5",
          "message": "chore: change property ContextMinInterval to private member",
          "timestamp": "2023-04-05T18:38:32+09:00",
          "tree_id": "4278327d8d63aa06ecce6ab06273d0a7430c92e2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9981583bfdeb1c619e0ec777ab5f4f562a25dc5"
        },
        "date": 1680688504471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356649.494949495,
            "unit": "ns",
            "range": "± 124715.92894821333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2370493.75,
            "unit": "ns",
            "range": "± 73758.8395467982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139359.1836734693,
            "unit": "ns",
            "range": "± 159885.86704834472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4764027.2727272725,
            "unit": "ns",
            "range": "± 116865.18965933593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44082.8125,
            "unit": "ns",
            "range": "± 2037.6265906725582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6935056.666666667,
            "unit": "ns",
            "range": "± 82430.98816297067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17956926.666666668,
            "unit": "ns",
            "range": "± 105643.93341156257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45409186.666666664,
            "unit": "ns",
            "range": "± 239826.4844979942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91085234.61538461,
            "unit": "ns",
            "range": "± 445840.58781540935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184487107.14285713,
            "unit": "ns",
            "range": "± 382769.69469359005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869485.044642857,
            "unit": "ns",
            "range": "± 5979.793594658196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515189.5182291667,
            "unit": "ns",
            "range": "± 1576.567119181329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159347.94921875,
            "unit": "ns",
            "range": "± 1033.6576764342626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602295.7942708335,
            "unit": "ns",
            "range": "± 7982.490497213836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893057.5325520834,
            "unit": "ns",
            "range": "± 1113.983803855316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736646.3671875,
            "unit": "ns",
            "range": "± 916.7757821307989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016747.0588235296,
            "unit": "ns",
            "range": "± 121639.66023126041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4733381.25,
            "unit": "ns",
            "range": "± 85761.63259290252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21729193.333333332,
            "unit": "ns",
            "range": "± 229172.9118456401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5911914.285714285,
            "unit": "ns",
            "range": "± 139393.21821994887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24872014.285714287,
            "unit": "ns",
            "range": "± 287812.0483316068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182846.55172413794,
            "unit": "ns",
            "range": "± 7609.256032916138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180901.7857142857,
            "unit": "ns",
            "range": "± 7665.234173530835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171289,
            "unit": "ns",
            "range": "± 10463.026726661281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10435476.666666666,
            "unit": "ns",
            "range": "± 106991.61827429464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8341600,
            "unit": "ns",
            "range": "± 45391.17283601043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19168.0412371134,
            "unit": "ns",
            "range": "± 1678.016338303987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49995.054945054944,
            "unit": "ns",
            "range": "± 3421.8988794807983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37961.85567010309,
            "unit": "ns",
            "range": "± 2752.553484909098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90951.04166666667,
            "unit": "ns",
            "range": "± 13591.870595025903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.7959183673465,
            "unit": "ns",
            "range": "± 814.272149332792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17795.833333333332,
            "unit": "ns",
            "range": "± 1588.3070541446364"
          }
        ]
      }
    ]
  }
}