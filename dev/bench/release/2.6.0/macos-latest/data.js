window.BENCHMARK_DATA = {
  "lastUpdate": 1689752654834,
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
          "id": "d4b7fb4ddff53907b8e97d43c7928e32147fd3bf",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:25:42+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d4b7fb4ddff53907b8e97d43c7928e32147fd3bf"
        },
        "date": 1689752627305,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9106559.142857144,
            "unit": "ns",
            "range": "± 544957.2390429543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25645861.56849315,
            "unit": "ns",
            "range": "± 1271531.4469789453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56944498.97727273,
            "unit": "ns",
            "range": "± 2094757.983836047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113670393.16666667,
            "unit": "ns",
            "range": "± 3286951.9662395366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227831208,
            "unit": "ns",
            "range": "± 5231533.763833901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72743.10112359551,
            "unit": "ns",
            "range": "± 8739.780512696663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366233.4574468085,
            "unit": "ns",
            "range": "± 35366.889225100575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318216.26666666666,
            "unit": "ns",
            "range": "± 30043.575309779328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313840.8043478261,
            "unit": "ns",
            "range": "± 11937.788808130936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4300516.066666666,
            "unit": "ns",
            "range": "± 41742.42782737738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3843948.4166666665,
            "unit": "ns",
            "range": "± 59841.87314377836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22630.032608695652,
            "unit": "ns",
            "range": "± 2639.6249918929934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108904.9010989011,
            "unit": "ns",
            "range": "± 8170.06367043726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132720.97916666666,
            "unit": "ns",
            "range": "± 24657.854894954144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145153.45833333334,
            "unit": "ns",
            "range": "± 35611.431122727605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6549.231578947369,
            "unit": "ns",
            "range": "± 618.4765334242009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19069.691489361703,
            "unit": "ns",
            "range": "± 2104.991063381514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606200.2604166667,
            "unit": "ns",
            "range": "± 179800.06775961746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2995807.25,
            "unit": "ns",
            "range": "± 146371.8357382819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2010948.1804123712,
            "unit": "ns",
            "range": "± 148619.07079913697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6091740.236842105,
            "unit": "ns",
            "range": "± 288906.9021317822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3625809.180412371,
            "unit": "ns",
            "range": "± 281898.1477924306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3916237.772727273,
            "unit": "ns",
            "range": "± 407807.32240067556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4599542.22631579,
            "unit": "ns",
            "range": "± 285306.8948796001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4233606.979591837,
            "unit": "ns",
            "range": "± 374350.4582910046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7779620.393258427,
            "unit": "ns",
            "range": "± 516642.71066529356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7185121.1546875,
            "unit": "ns",
            "range": "± 108377.98526254673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041998.300564236,
            "unit": "ns",
            "range": "± 41227.89049245894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1305333.0296875,
            "unit": "ns",
            "range": "± 22047.07750999852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2809593.2781328913,
            "unit": "ns",
            "range": "± 178821.07593088606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943628.7890625,
            "unit": "ns",
            "range": "± 22885.911193024018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824816.8858072917,
            "unit": "ns",
            "range": "± 11999.943023648175"
          }
        ]
      }
    ]
  }
}