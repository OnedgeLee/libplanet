window.BENCHMARK_DATA = {
  "lastUpdate": 1701732523864,
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
          "id": "7ac534e31f659ecb30de1ef01da73e3233cf06d0",
          "message": "test: Replace <T> with IActionLoader param",
          "timestamp": "2023-12-05T08:13:56+09:00",
          "tree_id": "44c43ad053606bbc2e73640a0517240d3dcd1890",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7ac534e31f659ecb30de1ef01da73e3233cf06d0"
        },
        "date": 1701732493050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1107607.142857143,
            "unit": "ns",
            "range": "± 163590.5639970288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1845473.8095238095,
            "unit": "ns",
            "range": "± 95040.8601019958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1674567.7083333333,
            "unit": "ns",
            "range": "± 179788.8776460304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9130205.050505051,
            "unit": "ns",
            "range": "± 3158167.505424811"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34690.32258064516,
            "unit": "ns",
            "range": "± 2044.189246967941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5028800,
            "unit": "ns",
            "range": "± 30830.585463140334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13302060,
            "unit": "ns",
            "range": "± 100010.7979884458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33941480,
            "unit": "ns",
            "range": "± 298602.304076844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65628169.23076923,
            "unit": "ns",
            "range": "± 701594.828925042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130837928.57142857,
            "unit": "ns",
            "range": "± 1271295.8600326928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3290318.75,
            "unit": "ns",
            "range": "± 8347.62229012026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057303.2291666667,
            "unit": "ns",
            "range": "± 3248.5031569981606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726969.921875,
            "unit": "ns",
            "range": "± 1344.799240549507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930331.0416666667,
            "unit": "ns",
            "range": "± 3153.2009153675835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627589.0625,
            "unit": "ns",
            "range": "± 1248.1538043405249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566383.0973307291,
            "unit": "ns",
            "range": "± 451.0142051628334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179920,
            "unit": "ns",
            "range": "± 91511.26504223199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244763.6363636362,
            "unit": "ns",
            "range": "± 80797.95244238012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821692.8571428573,
            "unit": "ns",
            "range": "± 59097.12828411014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2866898.901098901,
            "unit": "ns",
            "range": "± 160653.04540773263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9613662.365591398,
            "unit": "ns",
            "range": "± 2452065.7679630215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177651.5625,
            "unit": "ns",
            "range": "± 7101.60930090486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168638.37209302327,
            "unit": "ns",
            "range": "± 9254.991258834034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140617.39130434784,
            "unit": "ns",
            "range": "± 2628.62773980387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2876407.8947368423,
            "unit": "ns",
            "range": "± 60384.32758211239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498590,
            "unit": "ns",
            "range": "± 57323.08160078736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13061.052631578947,
            "unit": "ns",
            "range": "± 2917.78459884988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58667.36842105263,
            "unit": "ns",
            "range": "± 5782.833033620877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45897.5,
            "unit": "ns",
            "range": "± 2405.056645560439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58000,
            "unit": "ns",
            "range": "± 7118.557693547453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2689.1304347826085,
            "unit": "ns",
            "range": "± 451.7259992564126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11221.739130434782,
            "unit": "ns",
            "range": "± 1861.5736039296396"
          }
        ]
      }
    ]
  }
}