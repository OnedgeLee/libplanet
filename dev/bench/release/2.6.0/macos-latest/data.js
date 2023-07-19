window.BENCHMARK_DATA = {
  "lastUpdate": 1689752192592,
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
          "id": "f040cdf1aecb6f711eff50e1ce4583d091bf5061",
          "message": "Release 2.6.0",
          "timestamp": "2023-07-19T16:17:54+09:00",
          "tree_id": "6b5f9f2c1707a9486cea6187f894f6e0483f6c6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f040cdf1aecb6f711eff50e1ce4583d091bf5061"
        },
        "date": 1689752139852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9031397.5,
            "unit": "ns",
            "range": "± 219268.64471171953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22267233.768292684,
            "unit": "ns",
            "range": "± 1114469.4346291092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54951557.57692308,
            "unit": "ns",
            "range": "± 1475704.5819955475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109881245.63333334,
            "unit": "ns",
            "range": "± 1246665.3816155128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224693506.16666666,
            "unit": "ns",
            "range": "± 2710911.269775713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77957.36046511628,
            "unit": "ns",
            "range": "± 4461.2220138401035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336343.0416666667,
            "unit": "ns",
            "range": "± 16633.887867536825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311934.9456521739,
            "unit": "ns",
            "range": "± 19652.01217914648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317035.39130434784,
            "unit": "ns",
            "range": "± 7854.472048336716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142175.5833333335,
            "unit": "ns",
            "range": "± 29120.014917760705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3746578,
            "unit": "ns",
            "range": "± 46667.64796026105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20624.144444444446,
            "unit": "ns",
            "range": "± 2950.029223093158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105545.101010101,
            "unit": "ns",
            "range": "± 8179.111941583765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112146.29545454546,
            "unit": "ns",
            "range": "± 3995.556244301187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119217.91836734694,
            "unit": "ns",
            "range": "± 13753.048030803839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6948.510204081633,
            "unit": "ns",
            "range": "± 712.6544179912395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20629.28888888889,
            "unit": "ns",
            "range": "± 2336.9603733037516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737366.4793814432,
            "unit": "ns",
            "range": "± 241547.7977450831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3149712.919354839,
            "unit": "ns",
            "range": "± 239774.76357875144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2320576.2391304346,
            "unit": "ns",
            "range": "± 304294.1720465258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6238590.228395062,
            "unit": "ns",
            "range": "± 344967.469268807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3443475.670212766,
            "unit": "ns",
            "range": "± 215622.08528560237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3762977.311827957,
            "unit": "ns",
            "range": "± 226613.36002218182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4540210.261904762,
            "unit": "ns",
            "range": "± 152202.54218399638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4070927,
            "unit": "ns",
            "range": "± 53656.36341971539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7003692.961538462,
            "unit": "ns",
            "range": "± 231346.10126227557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7023506.560546875,
            "unit": "ns",
            "range": "± 45988.031498800505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971297.6590401786,
            "unit": "ns",
            "range": "± 14704.211615309325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288574.8709542411,
            "unit": "ns",
            "range": "± 7862.408876514819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087009.15390625,
            "unit": "ns",
            "range": "± 42222.784908159294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871718.3559194711,
            "unit": "ns",
            "range": "± 1722.6723131197293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717696.6173177083,
            "unit": "ns",
            "range": "± 1382.118568655863"
          }
        ]
      }
    ]
  }
}