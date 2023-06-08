window.BENCHMARK_DATA = {
  "lastUpdate": 1686228422399,
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
      }
    ]
  }
}