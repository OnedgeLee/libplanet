window.BENCHMARK_DATA = {
  "lastUpdate": 1703028569027,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "4774b2fb92086c01e8c9e8213a65a4d2f01f02c2",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:16:25+09:00",
          "tree_id": "50f73e555180028a42728c81e96951818d4421f5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4774b2fb92086c01e8c9e8213a65a4d2f01f02c2"
        },
        "date": 1703028543623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979442.7083333334,
            "unit": "ns",
            "range": "± 100845.21880980895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701578.2608695652,
            "unit": "ns",
            "range": "± 78982.92233426386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513251.01010101,
            "unit": "ns",
            "range": "± 135790.9388751766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10887770.833333334,
            "unit": "ns",
            "range": "± 932648.108505156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33212.048192771086,
            "unit": "ns",
            "range": "± 1516.0440812145664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5082453.333333333,
            "unit": "ns",
            "range": "± 38085.39027476222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12893960,
            "unit": "ns",
            "range": "± 90042.02828203538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 30958306.666666668,
            "unit": "ns",
            "range": "± 149664.3552690327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63225540,
            "unit": "ns",
            "range": "± 398972.651765936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129119342.85714285,
            "unit": "ns",
            "range": "± 821476.1223312821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3318326.4508928573,
            "unit": "ns",
            "range": "± 7040.276858528805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052349.4791666667,
            "unit": "ns",
            "range": "± 2174.7903277010582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721114.8813100961,
            "unit": "ns",
            "range": "± 1489.204580107827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1878264.760044643,
            "unit": "ns",
            "range": "± 3711.6294622405026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624995.21484375,
            "unit": "ns",
            "range": "± 887.6596920875455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 547870.8458533654,
            "unit": "ns",
            "range": "± 1405.0532608386754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119031.8181818184,
            "unit": "ns",
            "range": "± 29745.321942940496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2234876.8292682925,
            "unit": "ns",
            "range": "± 73394.4072269483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2686159.2592592593,
            "unit": "ns",
            "range": "± 68809.1466374105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2815691.1764705884,
            "unit": "ns",
            "range": "± 64388.339418868614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12359417.777777778,
            "unit": "ns",
            "range": "± 1517998.7595720962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163385.48387096773,
            "unit": "ns",
            "range": "± 7051.190964959447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154192.98245614034,
            "unit": "ns",
            "range": "± 5490.148958723473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145443.18181818182,
            "unit": "ns",
            "range": "± 5196.886264860363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761803.3333333335,
            "unit": "ns",
            "range": "± 28579.58478821319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2445478.5714285714,
            "unit": "ns",
            "range": "± 38792.84586247689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10120.833333333334,
            "unit": "ns",
            "range": "± 1485.5739041062222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47756.962025316454,
            "unit": "ns",
            "range": "± 2371.664110363352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42540,
            "unit": "ns",
            "range": "± 790.8404209627702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47971.42857142857,
            "unit": "ns",
            "range": "± 8926.654168229845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2286.813186813187,
            "unit": "ns",
            "range": "± 327.349215910943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8906.896551724138,
            "unit": "ns",
            "range": "± 677.6829716794206"
          }
        ]
      }
    ]
  }
}