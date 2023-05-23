window.BENCHMARK_DATA = {
  "lastUpdate": 1684832912856,
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
      }
    ]
  }
}