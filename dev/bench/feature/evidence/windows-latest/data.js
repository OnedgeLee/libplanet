window.BENCHMARK_DATA = {
  "lastUpdate": 1686301022690,
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
          "id": "d9bdfe98da1ced3d6978f7673fe9b34580b7745f",
          "message": "feat: Introduce DuplicateVoteEvidence",
          "timestamp": "2023-05-23T17:51:45+09:00",
          "tree_id": "696d37566d51827dd0dbd7c64d5280ec15a2cd5e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9bdfe98da1ced3d6978f7673fe9b34580b7745f"
        },
        "date": 1684832876932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399990.8163265307,
            "unit": "ns",
            "range": "± 117408.48692232005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2677605.5555555555,
            "unit": "ns",
            "range": "± 109573.00386546235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2446557.6923076925,
            "unit": "ns",
            "range": "± 65270.527334023725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5588489.189189189,
            "unit": "ns",
            "range": "± 279966.6866520908"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51893.75,
            "unit": "ns",
            "range": "± 4615.393294526252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7359525,
            "unit": "ns",
            "range": "± 208408.00550664857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20482713.333333332,
            "unit": "ns",
            "range": "± 513351.42613286234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50871714.28571428,
            "unit": "ns",
            "range": "± 223195.90862373268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101317573.33333333,
            "unit": "ns",
            "range": "± 1109522.8179374274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205575650,
            "unit": "ns",
            "range": "± 2715654.173845241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831620.643028846,
            "unit": "ns",
            "range": "± 33388.205024341616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534640.5552455357,
            "unit": "ns",
            "range": "± 5324.592688606793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171777.5390625,
            "unit": "ns",
            "range": "± 6803.218528223539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659982.6302083335,
            "unit": "ns",
            "range": "± 13245.053868515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828351.171875,
            "unit": "ns",
            "range": "± 5011.651125091571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768119.7716346154,
            "unit": "ns",
            "range": "± 2125.9435233049503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248546.6666666665,
            "unit": "ns",
            "range": "± 107091.22831407895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503889.5833333335,
            "unit": "ns",
            "range": "± 134668.36845990407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4306956.25,
            "unit": "ns",
            "range": "± 84538.91387008312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4352570,
            "unit": "ns",
            "range": "± 97030.01760171681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6901077.2727272725,
            "unit": "ns",
            "range": "± 214461.05455409508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288660.31746031746,
            "unit": "ns",
            "range": "± 13157.992048040733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271411.62790697673,
            "unit": "ns",
            "range": "± 9247.630566601669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258127.47252747254,
            "unit": "ns",
            "range": "± 14459.56097331117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144205.882352941,
            "unit": "ns",
            "range": "± 83272.23780009334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3683200,
            "unit": "ns",
            "range": "± 60969.99261932053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22377.894736842107,
            "unit": "ns",
            "range": "± 2225.394009931744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99007.14285714286,
            "unit": "ns",
            "range": "± 8653.683441945519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79654.25531914894,
            "unit": "ns",
            "range": "± 6263.6631711170385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106190.65934065935,
            "unit": "ns",
            "range": "± 10807.671946065579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6233.333333333333,
            "unit": "ns",
            "range": "± 1491.990310866427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20745.263157894737,
            "unit": "ns",
            "range": "± 2893.5279365115694"
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
          "id": "258929fa4177d2fada72bcdf61eef2359d73ee5c",
          "message": "Fix with tests",
          "timestamp": "2023-06-08T21:24:03+09:00",
          "tree_id": "e17fd7c8033940cc937ed35eca5e77fa252e0202",
          "url": "https://github.com/OnedgeLee/libplanet/commit/258929fa4177d2fada72bcdf61eef2359d73ee5c"
        },
        "date": 1686228380850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756898.9795918367,
            "unit": "ns",
            "range": "± 154152.46067763132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3142261.052631579,
            "unit": "ns",
            "range": "± 237158.3124604595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2741727.0833333335,
            "unit": "ns",
            "range": "± 215675.35860965555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6951996.9387755105,
            "unit": "ns",
            "range": "± 544192.6549124265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68859.793814433,
            "unit": "ns",
            "range": "± 13610.379462884614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9413064,
            "unit": "ns",
            "range": "± 678317.6440029085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24778511.855670102,
            "unit": "ns",
            "range": "± 1565606.8401770033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64830523.52941176,
            "unit": "ns",
            "range": "± 1118557.435678546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130484735.71428572,
            "unit": "ns",
            "range": "± 1498234.5464975375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261077169.23076922,
            "unit": "ns",
            "range": "± 2693457.222104649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5805210.15625,
            "unit": "ns",
            "range": "± 40876.55925410463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942036.11328125,
            "unit": "ns",
            "range": "± 42870.77661161978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467464.375,
            "unit": "ns",
            "range": "± 24501.607599793897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3260878.90625,
            "unit": "ns",
            "range": "± 36679.57329440984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1097153.125,
            "unit": "ns",
            "range": "± 28941.457241097698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 994997.3567708334,
            "unit": "ns",
            "range": "± 13851.482843726697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3674006.0606060605,
            "unit": "ns",
            "range": "± 385368.9938117307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3969881.8181818184,
            "unit": "ns",
            "range": "± 398163.71808684693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5013842.857142857,
            "unit": "ns",
            "range": "± 360295.56223321497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4873686.458333333,
            "unit": "ns",
            "range": "± 356498.3485958035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8522863,
            "unit": "ns",
            "range": "± 560975.1917766853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328959.1836734694,
            "unit": "ns",
            "range": "± 41867.31332555192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323013.9784946237,
            "unit": "ns",
            "range": "± 32858.889973702404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306722.9166666667,
            "unit": "ns",
            "range": "± 29899.67955880629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5079926.530612245,
            "unit": "ns",
            "range": "± 369616.0681647528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4458436,
            "unit": "ns",
            "range": "± 307168.0751114555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25056.701030927834,
            "unit": "ns",
            "range": "± 8509.136109897981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103964.58333333333,
            "unit": "ns",
            "range": "± 20998.796853587726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103372.63157894737,
            "unit": "ns",
            "range": "± 20961.08573861443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123859.78260869565,
            "unit": "ns",
            "range": "± 23252.148948461785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6829.166666666667,
            "unit": "ns",
            "range": "± 1472.4785168063202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21260.21505376344,
            "unit": "ns",
            "range": "± 6914.181076110835"
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
          "id": "da3894c86bfe8ab49f77759f830d0d6516b3d746",
          "message": "Fix with tests",
          "timestamp": "2023-06-08T21:25:50+09:00",
          "tree_id": "74501735b546fe096b55d1dafbef10de0cb2ea72",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da3894c86bfe8ab49f77759f830d0d6516b3d746"
        },
        "date": 1686229645731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297532.2916666667,
            "unit": "ns",
            "range": "± 107549.64043081802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424267.5,
            "unit": "ns",
            "range": "± 85233.10536405441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2084673.076923077,
            "unit": "ns",
            "range": "± 107134.08963461705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4819095.833333333,
            "unit": "ns",
            "range": "± 112702.43035521024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43785.18518518518,
            "unit": "ns",
            "range": "± 1854.9685861559587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6775006.666666667,
            "unit": "ns",
            "range": "± 60541.502490519044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17621060,
            "unit": "ns",
            "range": "± 118914.77019877965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45332166.666666664,
            "unit": "ns",
            "range": "± 224787.4000874943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91291438.46153846,
            "unit": "ns",
            "range": "± 213074.5508754371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181703669.23076922,
            "unit": "ns",
            "range": "± 635992.6131444916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4872201.729910715,
            "unit": "ns",
            "range": "± 19112.559074591467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564724.0792410714,
            "unit": "ns",
            "range": "± 2575.6979274158807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146772.4759615385,
            "unit": "ns",
            "range": "± 2135.138960672787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2615745.9244791665,
            "unit": "ns",
            "range": "± 16038.767166098212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864342.734375,
            "unit": "ns",
            "range": "± 4072.9566353586065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727902.3193359375,
            "unit": "ns",
            "range": "± 1497.193469162337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3082535,
            "unit": "ns",
            "range": "± 109030.79205153292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3235300,
            "unit": "ns",
            "range": "± 100405.34621416878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4076740,
            "unit": "ns",
            "range": "± 59406.55086532365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4035110.3448275863,
            "unit": "ns",
            "range": "± 115412.30543709546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6419618.9655172415,
            "unit": "ns",
            "range": "± 184042.21003316503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263184.7826086957,
            "unit": "ns",
            "range": "± 9391.674028776868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250772.72727272726,
            "unit": "ns",
            "range": "± 8522.647356919193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232285.7142857143,
            "unit": "ns",
            "range": "± 13722.612837677216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4023093.3333333335,
            "unit": "ns",
            "range": "± 73384.80250089413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582796.6666666665,
            "unit": "ns",
            "range": "± 38624.41616140656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18393.81443298969,
            "unit": "ns",
            "range": "± 2040.1089857013815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80559.34065934065,
            "unit": "ns",
            "range": "± 4535.244156651278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67579.16666666667,
            "unit": "ns",
            "range": "± 2673.666566309535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82318.98734177215,
            "unit": "ns",
            "range": "± 4496.696107638708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4497.916666666667,
            "unit": "ns",
            "range": "± 748.0471652265708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15835.106382978724,
            "unit": "ns",
            "range": "± 1756.2611464037523"
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
          "id": "67e4f7b2512bd31a009e60bea12014204b33d58c",
          "message": "Fix with tests",
          "timestamp": "2023-06-09T01:57:52+09:00",
          "tree_id": "e11af0f39cd18fc1181dc4496b99100d53630ebf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/67e4f7b2512bd31a009e60bea12014204b33d58c"
        },
        "date": 1686244679242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796980.8510638298,
            "unit": "ns",
            "range": "± 165430.0471183832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3337109.574468085,
            "unit": "ns",
            "range": "± 214096.34906167226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2789543.75,
            "unit": "ns",
            "range": "± 254466.1577385302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6866813.483146068,
            "unit": "ns",
            "range": "± 378179.54045154125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65443.75,
            "unit": "ns",
            "range": "± 13809.41564753251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9154747.191011235,
            "unit": "ns",
            "range": "± 502405.5662261062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24711871.21212121,
            "unit": "ns",
            "range": "± 1066107.8499007719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65784670.37037037,
            "unit": "ns",
            "range": "± 1837678.3523730768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132935923.52941176,
            "unit": "ns",
            "range": "± 2486881.0349334693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266494330.76923078,
            "unit": "ns",
            "range": "± 7019244.633649364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6305048.5721982755,
            "unit": "ns",
            "range": "± 180680.82824837495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1983727.05078125,
            "unit": "ns",
            "range": "± 37189.836752426316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1490508.5815429688,
            "unit": "ns",
            "range": "± 25305.378652943793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3314327.901785714,
            "unit": "ns",
            "range": "± 77822.42002515696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1078184.6354166667,
            "unit": "ns",
            "range": "± 16505.622039843794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991874.2947048611,
            "unit": "ns",
            "range": "± 20443.03094607014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3934632.0224719103,
            "unit": "ns",
            "range": "± 264958.0097786499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4050226.262626263,
            "unit": "ns",
            "range": "± 317851.4579221502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5444247.826086956,
            "unit": "ns",
            "range": "± 309742.83323827677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5143693.684210527,
            "unit": "ns",
            "range": "± 352563.5415223053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8834354.545454545,
            "unit": "ns",
            "range": "± 447868.55876809923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344363.63636363635,
            "unit": "ns",
            "range": "± 29916.29772186876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335392.4731182796,
            "unit": "ns",
            "range": "± 42111.28950293274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298216.4948453608,
            "unit": "ns",
            "range": "± 33052.20202073144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5210319.230769231,
            "unit": "ns",
            "range": "± 268248.2703773494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4597901.052631579,
            "unit": "ns",
            "range": "± 282992.7596603079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21294.04761904762,
            "unit": "ns",
            "range": "± 4195.159321485284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120304.08163265306,
            "unit": "ns",
            "range": "± 21243.026355383907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125243.15789473684,
            "unit": "ns",
            "range": "± 28601.49398207581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151096.8085106383,
            "unit": "ns",
            "range": "± 28951.707852117037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9098.91304347826,
            "unit": "ns",
            "range": "± 2087.1398256216885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27130.526315789473,
            "unit": "ns",
            "range": "± 8108.703935110645"
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
          "id": "f29f3d037b0c1ff204e651a6b2c87819e289b685",
          "message": "Fix with tests",
          "timestamp": "2023-06-09T13:43:55+09:00",
          "tree_id": "a2bd70bc6f264d097612af64d07db66115453b1e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f29f3d037b0c1ff204e651a6b2c87819e289b685"
        },
        "date": 1686286887031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299841.836734694,
            "unit": "ns",
            "range": "± 94284.60197607828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2503445.054945055,
            "unit": "ns",
            "range": "± 139371.7987285458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2084253.3333333333,
            "unit": "ns",
            "range": "± 114203.91303632721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5370090.909090909,
            "unit": "ns",
            "range": "± 352024.517957262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46189.01098901099,
            "unit": "ns",
            "range": "± 2577.7014114409308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7189785.714285715,
            "unit": "ns",
            "range": "± 87934.56358297046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19489481.48148148,
            "unit": "ns",
            "range": "± 542157.6474088277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49149100,
            "unit": "ns",
            "range": "± 924150.9378883949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97725360.86956522,
            "unit": "ns",
            "range": "± 2389057.361794535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195404980,
            "unit": "ns",
            "range": "± 3280688.5340471705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4812915.833333333,
            "unit": "ns",
            "range": "± 20223.023951914787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584708.3723958333,
            "unit": "ns",
            "range": "± 6227.815827392178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168445.1953125,
            "unit": "ns",
            "range": "± 6055.714212973679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653590.9895833335,
            "unit": "ns",
            "range": "± 7127.991348255643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824377.0442708334,
            "unit": "ns",
            "range": "± 2810.7126105176535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767822.8580729166,
            "unit": "ns",
            "range": "± 3017.255331134275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047654.054054054,
            "unit": "ns",
            "range": "± 99100.64915863903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3240107.6923076925,
            "unit": "ns",
            "range": "± 149537.42456707568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3992781.8181818184,
            "unit": "ns",
            "range": "± 114241.28920443304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3971052.564102564,
            "unit": "ns",
            "range": "± 189249.87997687623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6500981.818181818,
            "unit": "ns",
            "range": "± 241355.84293227203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257244.87179487178,
            "unit": "ns",
            "range": "± 13161.601937749278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244814,
            "unit": "ns",
            "range": "± 9221.027655332575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220472.54901960783,
            "unit": "ns",
            "range": "± 9019.491746908416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4111571.4285714286,
            "unit": "ns",
            "range": "± 55647.67503017297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3615893.3333333335,
            "unit": "ns",
            "range": "± 51579.958270999945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17212.76595744681,
            "unit": "ns",
            "range": "± 1121.5613198115652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79493.40659340659,
            "unit": "ns",
            "range": "± 4422.940253767904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68518.75,
            "unit": "ns",
            "range": "± 2132.3071708756556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89164.28571428571,
            "unit": "ns",
            "range": "± 14021.906645652061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4576.8421052631575,
            "unit": "ns",
            "range": "± 714.5081080758699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16135.051546391753,
            "unit": "ns",
            "range": "± 1585.2865958763707"
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
          "id": "1a24fed02fab391c473a200af054df24a9a1d00f",
          "message": "Fix RocksDBStore to dispose new DBs",
          "timestamp": "2023-06-09T14:03:26+09:00",
          "tree_id": "009effa4b298705939aa9464304513c431b83dd1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a24fed02fab391c473a200af054df24a9a1d00f"
        },
        "date": 1686287999808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340839,
            "unit": "ns",
            "range": "± 139220.0626252328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2446415.5555555555,
            "unit": "ns",
            "range": "± 92650.73211592106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096492.268041237,
            "unit": "ns",
            "range": "± 131143.4447108804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5336373.737373738,
            "unit": "ns",
            "range": "± 331164.0651984249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48517.02127659575,
            "unit": "ns",
            "range": "± 3163.625193529385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6781900,
            "unit": "ns",
            "range": "± 42499.12604143425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19098450,
            "unit": "ns",
            "range": "± 438222.82183718745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47340782.60869565,
            "unit": "ns",
            "range": "± 1189726.8103729351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93718900,
            "unit": "ns",
            "range": "± 1884927.6570998686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186519152.94117647,
            "unit": "ns",
            "range": "± 3632371.008225489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4816765.052083333,
            "unit": "ns",
            "range": "± 46232.88874394683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529063.6783854167,
            "unit": "ns",
            "range": "± 8738.613878563938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151216.484375,
            "unit": "ns",
            "range": "± 6905.866944967009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637518.6197916665,
            "unit": "ns",
            "range": "± 10424.512857048454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829645.6575520834,
            "unit": "ns",
            "range": "± 3398.555879054706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752896.2565104166,
            "unit": "ns",
            "range": "± 2480.8324719012335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2968656.603773585,
            "unit": "ns",
            "range": "± 116107.45273474707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3114524.3902439023,
            "unit": "ns",
            "range": "± 109728.92458346569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3946622.3880597013,
            "unit": "ns",
            "range": "± 185431.8994662604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3979966.6666666665,
            "unit": "ns",
            "range": "± 148170.35343267437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6349489.130434782,
            "unit": "ns",
            "range": "± 241739.36490752542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267828.5714285714,
            "unit": "ns",
            "range": "± 9028.850390433008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246524.63768115942,
            "unit": "ns",
            "range": "± 10636.361134129382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222801.5873015873,
            "unit": "ns",
            "range": "± 9573.425787606226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3951756.25,
            "unit": "ns",
            "range": "± 74072.97274759982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3485165.217391304,
            "unit": "ns",
            "range": "± 86193.50644543754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18591.23711340206,
            "unit": "ns",
            "range": "± 2272.973116194202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84635.71428571429,
            "unit": "ns",
            "range": "± 5840.407590634601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68450,
            "unit": "ns",
            "range": "± 2197.784432162629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98836.73469387754,
            "unit": "ns",
            "range": "± 17149.334318811667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5670.408163265306,
            "unit": "ns",
            "range": "± 863.2483824656613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19708.24742268041,
            "unit": "ns",
            "range": "± 2274.4353742143703"
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
          "id": "954d3004ee73427600aac94090ed23c854cc84b8",
          "message": "Fix error on RocksDbStore",
          "timestamp": "2023-06-09T14:08:49+09:00",
          "tree_id": "8eddfa90192bad75e7c94c0eb75771afb4075eee",
          "url": "https://github.com/OnedgeLee/libplanet/commit/954d3004ee73427600aac94090ed23c854cc84b8"
        },
        "date": 1686288288311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335348.4536082475,
            "unit": "ns",
            "range": "± 131164.78274277272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519479.1666666665,
            "unit": "ns",
            "range": "± 123411.70868904333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2094651.6483516484,
            "unit": "ns",
            "range": "± 117406.66019593547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5047680.952380952,
            "unit": "ns",
            "range": "± 184361.19802077717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48650,
            "unit": "ns",
            "range": "± 3043.078978654624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6960976.470588235,
            "unit": "ns",
            "range": "± 121047.30753620545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19743778.57142857,
            "unit": "ns",
            "range": "± 249301.36050901999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49116444.44444445,
            "unit": "ns",
            "range": "± 1045653.1026797515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101532807.14285715,
            "unit": "ns",
            "range": "± 1563202.1988726985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193118595.6521739,
            "unit": "ns",
            "range": "± 7441100.868851672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4802496.25,
            "unit": "ns",
            "range": "± 42259.58395874822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518789.2578125,
            "unit": "ns",
            "range": "± 11735.254121314025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177273.451450893,
            "unit": "ns",
            "range": "± 9285.155335241521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668525.4557291665,
            "unit": "ns",
            "range": "± 10620.533377697046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834241.7838541666,
            "unit": "ns",
            "range": "± 5335.063456790709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781763.8102213541,
            "unit": "ns",
            "range": "± 836.9013169087189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2979062.5,
            "unit": "ns",
            "range": "± 146681.0580794118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3180615.0943396227,
            "unit": "ns",
            "range": "± 132208.9828733085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4008075,
            "unit": "ns",
            "range": "± 197263.87114511093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4004705.5555555555,
            "unit": "ns",
            "range": "± 130588.44828466576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6589177.551020408,
            "unit": "ns",
            "range": "± 261050.58997675314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263678.8888888889,
            "unit": "ns",
            "range": "± 14711.750974275246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249532.5,
            "unit": "ns",
            "range": "± 7853.347726468026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235283.8383838384,
            "unit": "ns",
            "range": "± 18147.4780789694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4038462.8571428573,
            "unit": "ns",
            "range": "± 129913.54157944537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3686773.3333333335,
            "unit": "ns",
            "range": "± 53898.4689242742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20472.448979591838,
            "unit": "ns",
            "range": "± 2499.887857783584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95177,
            "unit": "ns",
            "range": "± 13153.889888239113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76864.21052631579,
            "unit": "ns",
            "range": "± 7621.552806958024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99054.08163265306,
            "unit": "ns",
            "range": "± 17941.963530602596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5396.875,
            "unit": "ns",
            "range": "± 1018.3012815468711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18097.82608695652,
            "unit": "ns",
            "range": "± 1873.175493903426"
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
          "id": "d8fa11a9055d3b84fbed3c527ac8f9412bbbaac5",
          "message": "Update changelog",
          "timestamp": "2023-06-09T14:28:45+09:00",
          "tree_id": "404758d824af1449b09717bd64b5f4fc0380ec16",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d8fa11a9055d3b84fbed3c527ac8f9412bbbaac5"
        },
        "date": 1686289541254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1361073.1182795698,
            "unit": "ns",
            "range": "± 112977.26795185967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2584519.565217391,
            "unit": "ns",
            "range": "± 94664.28311451232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2182765,
            "unit": "ns",
            "range": "± 151204.42672625746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5033720,
            "unit": "ns",
            "range": "± 146782.32393816925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50121.50537634409,
            "unit": "ns",
            "range": "± 2735.7873623179503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7264965.217391305,
            "unit": "ns",
            "range": "± 177123.75901585066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19819307.692307692,
            "unit": "ns",
            "range": "± 125795.4256026987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50511160,
            "unit": "ns",
            "range": "± 510201.59573027043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100506773.33333333,
            "unit": "ns",
            "range": "± 1206356.522441892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203059246.66666666,
            "unit": "ns",
            "range": "± 2075152.1427413002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4802152.395833333,
            "unit": "ns",
            "range": "± 19926.449593969104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518460.625,
            "unit": "ns",
            "range": "± 4501.026179943598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181559.8697916667,
            "unit": "ns",
            "range": "± 4637.96671735279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628514.090401786,
            "unit": "ns",
            "range": "± 4207.521070604046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829244.5442708334,
            "unit": "ns",
            "range": "± 2519.8243479339417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769316.6080729166,
            "unit": "ns",
            "range": "± 2805.168757826696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216716,
            "unit": "ns",
            "range": "± 85668.0058909587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3397152.6315789474,
            "unit": "ns",
            "range": "± 50782.010905230476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4096580,
            "unit": "ns",
            "range": "± 94265.47618295894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407135.714285715,
            "unit": "ns",
            "range": "± 75005.04195506671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6835769.696969697,
            "unit": "ns",
            "range": "± 213248.52649673878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273661.90476190473,
            "unit": "ns",
            "range": "± 6416.889915720559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254620.4081632653,
            "unit": "ns",
            "range": "± 8412.04443025586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237496.66666666666,
            "unit": "ns",
            "range": "± 13197.41590300366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4128042.8571428573,
            "unit": "ns",
            "range": "± 62444.802878969895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3708507.1428571427,
            "unit": "ns",
            "range": "± 58467.26190173193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21079.347826086956,
            "unit": "ns",
            "range": "± 2127.0388044155957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91258.94736842105,
            "unit": "ns",
            "range": "± 6793.433856381485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75340.98360655738,
            "unit": "ns",
            "range": "± 3394.180168522798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102285.56701030929,
            "unit": "ns",
            "range": "± 13548.508448739552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6132.5842696629215,
            "unit": "ns",
            "range": "± 626.6388116006619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20057.291666666668,
            "unit": "ns",
            "range": "± 2244.7949052567515"
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
          "id": "d61782e90b2eaff77aa6d016026ae6e39039faeb",
          "message": "Update changelog",
          "timestamp": "2023-06-09T14:27:50+09:00",
          "tree_id": "81c7760b1b4e1dd3b8c277b3fbcdb7c6e511e9ca",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d61782e90b2eaff77aa6d016026ae6e39039faeb"
        },
        "date": 1686289613301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707646.4646464647,
            "unit": "ns",
            "range": "± 192328.61085574413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3192809.210526316,
            "unit": "ns",
            "range": "± 154616.8211440843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2717148.4536082475,
            "unit": "ns",
            "range": "± 264663.6623911414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6116077.5,
            "unit": "ns",
            "range": "± 215441.0723019531"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56014.444444444445,
            "unit": "ns",
            "range": "± 4395.389850181796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9413278.57142857,
            "unit": "ns",
            "range": "± 444312.821610186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24511086.666666668,
            "unit": "ns",
            "range": "± 452156.60824647074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61014830.666666664,
            "unit": "ns",
            "range": "± 3050371.5930027603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124283719.23076923,
            "unit": "ns",
            "range": "± 5069926.682033139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238244559.0909091,
            "unit": "ns",
            "range": "± 5491494.118106578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5952424.34375,
            "unit": "ns",
            "range": "± 152798.5095406917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900994.2749023438,
            "unit": "ns",
            "range": "± 37226.49210762235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425333.1260279606,
            "unit": "ns",
            "range": "± 49089.327647277925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174529.9072265625,
            "unit": "ns",
            "range": "± 62339.9607996623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012079.8095703125,
            "unit": "ns",
            "range": "± 31509.498917361903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910758.8099888393,
            "unit": "ns",
            "range": "± 13116.108893342667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3867706.4516129033,
            "unit": "ns",
            "range": "± 116877.75646798345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941172.033898305,
            "unit": "ns",
            "range": "± 172292.3928792789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4843425,
            "unit": "ns",
            "range": "± 223751.57558021098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4964159.649122807,
            "unit": "ns",
            "range": "± 208280.4804135598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7925795,
            "unit": "ns",
            "range": "± 247850.21836502332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325052.38095238095,
            "unit": "ns",
            "range": "± 14772.23700646301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317105.3333333333,
            "unit": "ns",
            "range": "± 15844.33476496076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295150,
            "unit": "ns",
            "range": "± 18005.50009602247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4965891.666666667,
            "unit": "ns",
            "range": "± 68413.70753575543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4461264.444444444,
            "unit": "ns",
            "range": "± 168265.50199496082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25131.57894736842,
            "unit": "ns",
            "range": "± 2659.0777139665875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113342.26804123711,
            "unit": "ns",
            "range": "± 11652.72531652598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102955.67010309278,
            "unit": "ns",
            "range": "± 10864.199321166487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121726.59574468085,
            "unit": "ns",
            "range": "± 17466.842169757176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8164.285714285715,
            "unit": "ns",
            "range": "± 1180.1843294784048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24016.842105263157,
            "unit": "ns",
            "range": "± 2907.461151442003"
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
          "id": "962db89abe408ca5ba44da1a3965e9e28bf34dfa",
          "message": "Fix error on DefaultStore",
          "timestamp": "2023-06-09T15:44:01+09:00",
          "tree_id": "f67005a3b2dc25392b864388d29a0d5343c3399a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/962db89abe408ca5ba44da1a3965e9e28bf34dfa"
        },
        "date": 1686293977596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1245974.2268041237,
            "unit": "ns",
            "range": "± 136666.47531364945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2285934.426229508,
            "unit": "ns",
            "range": "± 102384.17176700362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984022.3404255318,
            "unit": "ns",
            "range": "± 128009.28070711001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4979738.3838383835,
            "unit": "ns",
            "range": "± 325891.3972435624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46484.21052631579,
            "unit": "ns",
            "range": "± 3076.863413582973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6342133.333333333,
            "unit": "ns",
            "range": "± 96438.30183389825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17385800,
            "unit": "ns",
            "range": "± 181871.26137541828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44117788.23529412,
            "unit": "ns",
            "range": "± 848470.643188638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91318588.46153846,
            "unit": "ns",
            "range": "± 2403414.6394373025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175672453.57142857,
            "unit": "ns",
            "range": "± 5004300.310324381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4362195.729166667,
            "unit": "ns",
            "range": "± 35957.31575053636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361818.5286458333,
            "unit": "ns",
            "range": "± 5322.3704486045835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1040961.640625,
            "unit": "ns",
            "range": "± 8921.037148400637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2352504.324776786,
            "unit": "ns",
            "range": "± 12232.029221907485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 747893.7575120192,
            "unit": "ns",
            "range": "± 4121.826551510118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 681590.0260416666,
            "unit": "ns",
            "range": "± 2919.319067685401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912050.9433962265,
            "unit": "ns",
            "range": "± 119648.0811229356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3176509.090909091,
            "unit": "ns",
            "range": "± 118280.27183825325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3869888,
            "unit": "ns",
            "range": "± 99527.81152354686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3705748.4210526315,
            "unit": "ns",
            "range": "± 218256.53989039417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6116115.584415585,
            "unit": "ns",
            "range": "± 312213.16818082676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244000,
            "unit": "ns",
            "range": "± 10761.166844929354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230461.76470588235,
            "unit": "ns",
            "range": "± 10973.061035149845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214418,
            "unit": "ns",
            "range": "± 19283.41717066189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3704406.896551724,
            "unit": "ns",
            "range": "± 106861.08783648077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3290834.4827586208,
            "unit": "ns",
            "range": "± 93999.95545539245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19866.666666666668,
            "unit": "ns",
            "range": "± 2505.6847647601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83661.45833333333,
            "unit": "ns",
            "range": "± 6889.708110716824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66178.40909090909,
            "unit": "ns",
            "range": "± 3644.771057365066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96425.51020408163,
            "unit": "ns",
            "range": "± 15173.031632217271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6633.333333333333,
            "unit": "ns",
            "range": "± 935.9112268593663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18660,
            "unit": "ns",
            "range": "± 2221.050163725987"
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
          "id": "3ffab8183fcce416156d0599591df6abfa73a625",
          "message": "Moved UpdateEvidence() to NewHeight()",
          "timestamp": "2023-06-09T16:50:05+09:00",
          "tree_id": "8c260094be9b98339b734e1da4cbbb102d954cf3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3ffab8183fcce416156d0599591df6abfa73a625"
        },
        "date": 1686298104165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442236.3636363635,
            "unit": "ns",
            "range": "± 127367.8398316334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2690977.419354839,
            "unit": "ns",
            "range": "± 121002.4676883646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2542778.5714285714,
            "unit": "ns",
            "range": "± 39609.17101595827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5417384.31372549,
            "unit": "ns",
            "range": "± 219174.8802874536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53023.958333333336,
            "unit": "ns",
            "range": "± 5575.854804265047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7298485.714285715,
            "unit": "ns",
            "range": "± 173252.5419314657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19992214.285714287,
            "unit": "ns",
            "range": "± 213174.64078198295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50673553.333333336,
            "unit": "ns",
            "range": "± 726547.8372478469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102742820,
            "unit": "ns",
            "range": "± 1382502.6045958416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205243007.14285713,
            "unit": "ns",
            "range": "± 1228891.8394317613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4851122.716346154,
            "unit": "ns",
            "range": "± 49053.17562965308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513029.2057291667,
            "unit": "ns",
            "range": "± 9704.081769499064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214366.69921875,
            "unit": "ns",
            "range": "± 13160.805493581842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638984.1238839286,
            "unit": "ns",
            "range": "± 22674.849151198665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809620.7697088068,
            "unit": "ns",
            "range": "± 25233.248826569077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765721.8619791666,
            "unit": "ns",
            "range": "± 3034.457471290923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300614.285714286,
            "unit": "ns",
            "range": "± 49994.35132927684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3476884,
            "unit": "ns",
            "range": "± 85716.06558866313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4195808.333333333,
            "unit": "ns",
            "range": "± 95900.87235703637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4333693.1034482755,
            "unit": "ns",
            "range": "± 188600.41102638788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6858867.5,
            "unit": "ns",
            "range": "± 242543.85528637804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281907.8431372549,
            "unit": "ns",
            "range": "± 11482.331525213072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254343.15789473685,
            "unit": "ns",
            "range": "± 18592.704200736393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259734.693877551,
            "unit": "ns",
            "range": "± 20820.138457014174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4221835.714285715,
            "unit": "ns",
            "range": "± 64325.46878232551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3810100,
            "unit": "ns",
            "range": "± 56769.496336375174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21604.040404040403,
            "unit": "ns",
            "range": "± 3323.384038557478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92971.13402061856,
            "unit": "ns",
            "range": "± 9186.810731093501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84432.32323232324,
            "unit": "ns",
            "range": "± 10174.556383879371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109363.9175257732,
            "unit": "ns",
            "range": "± 15335.804956369058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6531.958762886598,
            "unit": "ns",
            "range": "± 1093.3079003411856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24088.541666666668,
            "unit": "ns",
            "range": "± 2855.2765481940037"
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
          "id": "04f5e3a8089b6f9315da7e049af2136265739c73",
          "message": "Declare DuplicatedVotesPool as subclass of MessageLog",
          "timestamp": "2023-06-09T17:13:58+09:00",
          "tree_id": "79976ce5e208518860d6c7c36e703ec68729a539",
          "url": "https://github.com/OnedgeLee/libplanet/commit/04f5e3a8089b6f9315da7e049af2136265739c73"
        },
        "date": 1686299623385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1370569.7674418604,
            "unit": "ns",
            "range": "± 74258.82727447676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2710562.6666666665,
            "unit": "ns",
            "range": "± 136927.09025918445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2251087.6288659796,
            "unit": "ns",
            "range": "± 156925.84252982095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5299724.444444444,
            "unit": "ns",
            "range": "± 196398.2724830935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50971.57894736842,
            "unit": "ns",
            "range": "± 4359.7692491615935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7357846.153846154,
            "unit": "ns",
            "range": "± 92720.247837106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20771384.615384616,
            "unit": "ns",
            "range": "± 281617.75170774135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51943480,
            "unit": "ns",
            "range": "± 802260.4281475116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103557186.66666667,
            "unit": "ns",
            "range": "± 1906336.674232495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207564206.66666666,
            "unit": "ns",
            "range": "± 3740751.913045341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894239.302884615,
            "unit": "ns",
            "range": "± 17436.23684119811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558764.4270833333,
            "unit": "ns",
            "range": "± 9159.106198580168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231656.640625,
            "unit": "ns",
            "range": "± 5927.176165343474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710844.1964285714,
            "unit": "ns",
            "range": "± 10825.694952083433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870289.66796875,
            "unit": "ns",
            "range": "± 4375.171308814756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789463.49609375,
            "unit": "ns",
            "range": "± 4061.7814557806823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3193826.3157894737,
            "unit": "ns",
            "range": "± 109225.68424859263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3392100,
            "unit": "ns",
            "range": "± 140057.35089048892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4194596,
            "unit": "ns",
            "range": "± 111003.22998303548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4353564.285714285,
            "unit": "ns",
            "range": "± 121204.5568581256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6922645.652173913,
            "unit": "ns",
            "range": "± 260667.75337072863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278167.2131147541,
            "unit": "ns",
            "range": "± 12550.122460378296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264598.14814814815,
            "unit": "ns",
            "range": "± 11174.558211532169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238845.9595959596,
            "unit": "ns",
            "range": "± 15974.571114244827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299600,
            "unit": "ns",
            "range": "± 64401.85138284816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826863.1578947366,
            "unit": "ns",
            "range": "± 82319.08925723334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22253.061224489797,
            "unit": "ns",
            "range": "± 3186.8028150138075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91082.29166666667,
            "unit": "ns",
            "range": "± 6738.2645710764855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81641.48936170213,
            "unit": "ns",
            "range": "± 7494.749553936388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101978.35051546391,
            "unit": "ns",
            "range": "± 16908.49901432785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5819.587628865979,
            "unit": "ns",
            "range": "± 1183.6243047713074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20036.842105263157,
            "unit": "ns",
            "range": "± 2175.592491154993"
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
          "id": "996635743872ab1896fa936d1a0a01c1d69b9670",
          "message": "Update changelog",
          "timestamp": "2023-06-09T17:40:26+09:00",
          "tree_id": "8a3b0cb08bea3cdbce6cc3903c05134523f2df58",
          "url": "https://github.com/OnedgeLee/libplanet/commit/996635743872ab1896fa936d1a0a01c1d69b9670"
        },
        "date": 1686300989145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373881.8181818181,
            "unit": "ns",
            "range": "± 135993.90094640153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498424.3243243243,
            "unit": "ns",
            "range": "± 82537.06038099695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119580.85106383,
            "unit": "ns",
            "range": "± 124042.09680553235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5299181.25,
            "unit": "ns",
            "range": "± 243509.35112907182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48744.8275862069,
            "unit": "ns",
            "range": "± 2590.6252554381294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7213133.333333333,
            "unit": "ns",
            "range": "± 184434.94591687963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20156073.333333332,
            "unit": "ns",
            "range": "± 362535.89076840115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49824283.333333336,
            "unit": "ns",
            "range": "± 842736.7032189715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101092950,
            "unit": "ns",
            "range": "± 1933743.3638757067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196918881.25,
            "unit": "ns",
            "range": "± 3698590.491023799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4803830.915178572,
            "unit": "ns",
            "range": "± 5975.888173011978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521479.6875,
            "unit": "ns",
            "range": "± 3877.7552963641288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170230.703125,
            "unit": "ns",
            "range": "± 4581.069168450366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647793.6458333335,
            "unit": "ns",
            "range": "± 8872.261228949501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830770.05859375,
            "unit": "ns",
            "range": "± 3044.940260950573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761039.4205729166,
            "unit": "ns",
            "range": "± 2065.609479859198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3108566,
            "unit": "ns",
            "range": "± 124169.5066086218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3259082.1428571427,
            "unit": "ns",
            "range": "± 92304.68490004912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4025425.925925926,
            "unit": "ns",
            "range": "± 111255.97855186374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4110538,
            "unit": "ns",
            "range": "± 144345.04705102724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6610769.047619048,
            "unit": "ns",
            "range": "± 239406.6450654824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274275,
            "unit": "ns",
            "range": "± 13834.853253900528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256056.25,
            "unit": "ns",
            "range": "± 11038.430343325288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228711.90476190476,
            "unit": "ns",
            "range": "± 12281.422985348127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4105546.153846154,
            "unit": "ns",
            "range": "± 24148.76171375444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617684.6153846155,
            "unit": "ns",
            "range": "± 58417.18990950417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19047.31182795699,
            "unit": "ns",
            "range": "± 1967.7062014398045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86853.125,
            "unit": "ns",
            "range": "± 5914.735445878949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73844.89795918367,
            "unit": "ns",
            "range": "± 2929.7369922123407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97114.43298969071,
            "unit": "ns",
            "range": "± 13456.411031632233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5559.574468085107,
            "unit": "ns",
            "range": "± 843.3572374022448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19338.947368421053,
            "unit": "ns",
            "range": "± 1866.1768140923216"
          }
        ]
      }
    ]
  }
}