window.BENCHMARK_DATA = {
  "lastUpdate": 1690788508506,
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
          "id": "01cecfb43845f66fe3ef23abba94ddb04521928a",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-29T16:21:32+09:00",
          "tree_id": "cd7bb71e5d56e5632a658659f62b529f7e57f395",
          "url": "https://github.com/OnedgeLee/libplanet/commit/01cecfb43845f66fe3ef23abba94ddb04521928a"
        },
        "date": 1690761286948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297248.58974358975,
            "unit": "ns",
            "range": "± 10396.240341984843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284042.0857142857,
            "unit": "ns",
            "range": "± 9262.404189776536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243424.4,
            "unit": "ns",
            "range": "± 4086.2920985027135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4399625,
            "unit": "ns",
            "range": "± 69742.15665885714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4106123.533333333,
            "unit": "ns",
            "range": "± 63535.17104145283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19865.6,
            "unit": "ns",
            "range": "± 1442.3894655094941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89922.75,
            "unit": "ns",
            "range": "± 4417.158815724575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76571.94117647059,
            "unit": "ns",
            "range": "± 1528.901790117184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96697.52083333333,
            "unit": "ns",
            "range": "± 13867.25993196255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5170.489795918367,
            "unit": "ns",
            "range": "± 945.8616564226928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20946.873684210525,
            "unit": "ns",
            "range": "± 1368.990816702218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485257.6621621621,
            "unit": "ns",
            "range": "± 74181.57686459072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762638.925925926,
            "unit": "ns",
            "range": "± 76178.88640961934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877722.0824742268,
            "unit": "ns",
            "range": "± 112861.97793411853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310455.84,
            "unit": "ns",
            "range": "± 315837.161856086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6021351.368303572,
            "unit": "ns",
            "range": "± 20000.49562569032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924064.226953125,
            "unit": "ns",
            "range": "± 4442.952300075552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389691.8427083334,
            "unit": "ns",
            "range": "± 4852.389582961751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642280.179427083,
            "unit": "ns",
            "range": "± 2470.822519803387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846708.9009114583,
            "unit": "ns",
            "range": "± 1686.471555326489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789437.6123697917,
            "unit": "ns",
            "range": "± 767.7623659613876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486184.1666666665,
            "unit": "ns",
            "range": "± 87408.6657860235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734170.1875,
            "unit": "ns",
            "range": "± 107476.25002355172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4403651.65,
            "unit": "ns",
            "range": "± 99912.68483150411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4098705.4468085105,
            "unit": "ns",
            "range": "± 158832.37118268246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6618663.219512195,
            "unit": "ns",
            "range": "± 236645.77932381473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7914266.923076923,
            "unit": "ns",
            "range": "± 35618.12269866175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22338184.4,
            "unit": "ns",
            "range": "± 312899.91014695325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54227279.733333334,
            "unit": "ns",
            "range": "± 925310.7291309126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109119250.27777778,
            "unit": "ns",
            "range": "± 2278209.105477443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219533071.42857143,
            "unit": "ns",
            "range": "± 4934358.2250748845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48865.06493506493,
            "unit": "ns",
            "range": "± 2437.6778873694657"
          }
        ]
      },
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
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690788495086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280618.4285714286,
            "unit": "ns",
            "range": "± 6494.624150568135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267083.85365853657,
            "unit": "ns",
            "range": "± 9533.487721083442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241568.44444444444,
            "unit": "ns",
            "range": "± 12668.254905471393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301341.4,
            "unit": "ns",
            "range": "± 43614.79142086678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937601.6428571427,
            "unit": "ns",
            "range": "± 28151.680842309444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19985.340206185567,
            "unit": "ns",
            "range": "± 1294.6306413944703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91942.97802197802,
            "unit": "ns",
            "range": "± 6346.462536944888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71383.36,
            "unit": "ns",
            "range": "± 1833.8631101220906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94213.26530612246,
            "unit": "ns",
            "range": "± 15451.668402594341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4515.583333333333,
            "unit": "ns",
            "range": "± 573.8594301865529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16459.404494382023,
            "unit": "ns",
            "range": "± 987.5620891769646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1387959.585106383,
            "unit": "ns",
            "range": "± 93708.23328207358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2608034.6744186045,
            "unit": "ns",
            "range": "± 92765.49478394713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775658.663265306,
            "unit": "ns",
            "range": "± 116252.5738394101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4910790.018518519,
            "unit": "ns",
            "range": "± 204986.01862727135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6336012.9703125,
            "unit": "ns",
            "range": "± 28351.600331294234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900304.6982421875,
            "unit": "ns",
            "range": "± 7983.08576739986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350303.264423077,
            "unit": "ns",
            "range": "± 1699.7622438396559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631976.367745536,
            "unit": "ns",
            "range": "± 3081.6602373405785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814511.6102764423,
            "unit": "ns",
            "range": "± 799.9635396329423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736973.0348958333,
            "unit": "ns",
            "range": "± 1977.6886205216792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308200.9285714286,
            "unit": "ns",
            "range": "± 56648.70664212268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3433470.2666666666,
            "unit": "ns",
            "range": "± 55227.53248344093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4276668.857142857,
            "unit": "ns",
            "range": "± 39133.214809962104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3879653.9,
            "unit": "ns",
            "range": "± 84507.56344095075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6224717.444444444,
            "unit": "ns",
            "range": "± 132244.63981185522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7670672.666666667,
            "unit": "ns",
            "range": "± 111211.00890756317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19621356.57142857,
            "unit": "ns",
            "range": "± 68130.10959436848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50319553.93333333,
            "unit": "ns",
            "range": "± 247592.37790179782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100888417.53333333,
            "unit": "ns",
            "range": "± 725582.4480304345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199438123.93333334,
            "unit": "ns",
            "range": "± 1067780.6277956339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47766.24444444444,
            "unit": "ns",
            "range": "± 3280.009743446446"
          }
        ]
      }
    ]
  }
}