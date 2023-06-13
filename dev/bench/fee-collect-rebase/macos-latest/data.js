window.BENCHMARK_DATA = {
  "lastUpdate": 1686662319615,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "602d4a8c43316e1681586047a56bc74bcc9f3cd3",
          "message": "docs: change.md",
          "timestamp": "2023-06-09T01:46:10+09:00",
          "tree_id": "6c0bf379ad0dea93874cdb8bf20460e88b1a27a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/602d4a8c43316e1681586047a56bc74bcc9f3cd3"
        },
        "date": 1686662287878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8823861.88372093,
            "unit": "ns",
            "range": "± 1124673.4761291926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28533933.5,
            "unit": "ns",
            "range": "± 7236149.740131448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71109839.3888889,
            "unit": "ns",
            "range": "± 20665197.62234665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155118628.34408602,
            "unit": "ns",
            "range": "± 52614174.869399585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294942185.3473684,
            "unit": "ns",
            "range": "± 81415625.17821951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76041.75294117647,
            "unit": "ns",
            "range": "± 7115.661631228682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374042.86666666664,
            "unit": "ns",
            "range": "± 49213.57952418363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355171.59550561797,
            "unit": "ns",
            "range": "± 45035.20541645955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347609.112244898,
            "unit": "ns",
            "range": "± 51226.85204933228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4484296.427835052,
            "unit": "ns",
            "range": "± 332095.9498537674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4075982.6464646463,
            "unit": "ns",
            "range": "± 366687.9990573734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23077.40425531915,
            "unit": "ns",
            "range": "± 5437.52908842873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111792.6530612245,
            "unit": "ns",
            "range": "± 20460.45590756479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119737.72413793103,
            "unit": "ns",
            "range": "± 13093.537484318276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132010.05789473685,
            "unit": "ns",
            "range": "± 20432.91299554018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8585.360215053763,
            "unit": "ns",
            "range": "± 1292.1614567258146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24834.01111111111,
            "unit": "ns",
            "range": "± 5229.458455848769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1776723.1182795698,
            "unit": "ns",
            "range": "± 340814.623855711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3348377.712765957,
            "unit": "ns",
            "range": "± 317955.2118161049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3246662.4175824174,
            "unit": "ns",
            "range": "± 627921.6695890599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8085700.7191011235,
            "unit": "ns",
            "range": "± 1694017.0924265615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3462884.533707865,
            "unit": "ns",
            "range": "± 272845.8889122313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3750423.335164835,
            "unit": "ns",
            "range": "± 394281.1561869768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5072491.234693877,
            "unit": "ns",
            "range": "± 474326.04537747457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5055717.910526316,
            "unit": "ns",
            "range": "± 715440.0427137743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8295595.139784946,
            "unit": "ns",
            "range": "± 790804.7973941757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8553437.87242445,
            "unit": "ns",
            "range": "± 1412843.4670971618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2614750.587516622,
            "unit": "ns",
            "range": "± 515028.82985313004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1511509.5042279412,
            "unit": "ns",
            "range": "± 145593.37412103612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3479598.2627268145,
            "unit": "ns",
            "range": "± 282942.39162864484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890998.6572477921,
            "unit": "ns",
            "range": "± 50065.84063598225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 823679.3057617188,
            "unit": "ns",
            "range": "± 22308.672781367997"
          }
        ]
      }
    ]
  }
}