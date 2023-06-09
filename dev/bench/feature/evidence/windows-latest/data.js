window.BENCHMARK_DATA = {
  "lastUpdate": 1686286931019,
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
      }
    ]
  }
}