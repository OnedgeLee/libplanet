window.BENCHMARK_DATA = {
  "lastUpdate": 1698916322924,
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
          "id": "bfc838289232e1276f81b5e8d69b9d8c3199ec0d",
          "message": "feat: Add KeyConverters.ToHashKey()",
          "timestamp": "2023-11-02T17:33:18+09:00",
          "tree_id": "31d3ff5ac0e2ba809e1e238bd415e704f6cf5907",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bfc838289232e1276f81b5e8d69b9d8c3199ec0d"
        },
        "date": 1698915093181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676600,
            "unit": "ns",
            "range": "± 87929.86950530241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051911.111111111,
            "unit": "ns",
            "range": "± 99132.00370581722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2491098.924731183,
            "unit": "ns",
            "range": "± 141899.04823548175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10731868.235294119,
            "unit": "ns",
            "range": "± 587494.4565517122"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69409.47368421052,
            "unit": "ns",
            "range": "± 7793.41066029789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9989151.612903226,
            "unit": "ns",
            "range": "± 302443.66623771744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25354253.333333332,
            "unit": "ns",
            "range": "± 253958.7392433961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63942385.71428572,
            "unit": "ns",
            "range": "± 399015.45344499144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126829823.07692307,
            "unit": "ns",
            "range": "± 779292.1009414529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258733858.82352942,
            "unit": "ns",
            "range": "± 5133051.923205485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5700822.395833333,
            "unit": "ns",
            "range": "± 56017.39892126847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790807.1223958333,
            "unit": "ns",
            "range": "± 12445.98542122354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360768.4635416667,
            "unit": "ns",
            "range": "± 18476.49754798938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197148.016826923,
            "unit": "ns",
            "range": "± 23224.791069425002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005007.9380580357,
            "unit": "ns",
            "range": "± 7732.128699412929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916629.3033854166,
            "unit": "ns",
            "range": "± 7204.94592588536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4188036.8421052634,
            "unit": "ns",
            "range": "± 92393.4173372295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4373851.219512195,
            "unit": "ns",
            "range": "± 157558.01807897817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5218035,
            "unit": "ns",
            "range": "± 119842.11224949706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4981608.695652174,
            "unit": "ns",
            "range": "± 122249.42428956642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12169616.279069768,
            "unit": "ns",
            "range": "± 367824.7401828579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317161.53846153844,
            "unit": "ns",
            "range": "± 4596.1103956748875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305258.3333333333,
            "unit": "ns",
            "range": "± 11914.818832085466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285856.75675675675,
            "unit": "ns",
            "range": "± 9501.682322987175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5056386.666666667,
            "unit": "ns",
            "range": "± 55202.353296972855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4633600,
            "unit": "ns",
            "range": "± 56890.494226481576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28043.157894736843,
            "unit": "ns",
            "range": "± 2623.731816519516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112310.41666666667,
            "unit": "ns",
            "range": "± 8146.080480389479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102823.4693877551,
            "unit": "ns",
            "range": "± 10117.43214457523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110211.70212765958,
            "unit": "ns",
            "range": "± 14789.816726113897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7873.958333333333,
            "unit": "ns",
            "range": "± 1151.6802180125367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28640,
            "unit": "ns",
            "range": "± 2013.9090811737362"
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
          "id": "9e66af3720beed66b6f997328251c4e8843388f3",
          "message": "feat: Add KeyConverters.ToHashKey()",
          "timestamp": "2023-11-02T17:57:04+09:00",
          "tree_id": "43efb003686d887e2051792a00e0f6f1f36df4c3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9e66af3720beed66b6f997328251c4e8843388f3"
        },
        "date": 1698916279743,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1341034.0206185568,
            "unit": "ns",
            "range": "± 95534.5671369334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2414365,
            "unit": "ns",
            "range": "± 85572.07053945964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1955255.7894736843,
            "unit": "ns",
            "range": "± 107324.61468951602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7624588.461538462,
            "unit": "ns",
            "range": "± 205210.3434565092"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44551.25,
            "unit": "ns",
            "range": "± 2350.7603806191323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6957092.307692308,
            "unit": "ns",
            "range": "± 61449.32141662837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18004216.666666668,
            "unit": "ns",
            "range": "± 154081.72074151647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45823792.85714286,
            "unit": "ns",
            "range": "± 186714.7905817266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92273730,
            "unit": "ns",
            "range": "± 595706.5315356931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185872760,
            "unit": "ns",
            "range": "± 794071.830863826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4406565.024038462,
            "unit": "ns",
            "range": "± 4228.093568402854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1473165.8138020833,
            "unit": "ns",
            "range": "± 1738.6573079417594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1077862.5,
            "unit": "ns",
            "range": "± 1245.575672764637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610226.328125,
            "unit": "ns",
            "range": "± 2360.336116842823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813081.5579927885,
            "unit": "ns",
            "range": "± 1308.6446686337379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732049.970703125,
            "unit": "ns",
            "range": "± 627.7474827991305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000907.3170731706,
            "unit": "ns",
            "range": "± 106399.71191277706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3104034.6938775512,
            "unit": "ns",
            "range": "± 115934.9306562026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3980351.8518518517,
            "unit": "ns",
            "range": "± 98347.79873321779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3741823.4375,
            "unit": "ns",
            "range": "± 172477.2115080231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9180560,
            "unit": "ns",
            "range": "± 162116.21603035275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244408.82352941178,
            "unit": "ns",
            "range": "± 7003.002284607472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231292.68292682926,
            "unit": "ns",
            "range": "± 8317.613547283332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213298.7012987013,
            "unit": "ns",
            "range": "± 10896.323541095646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3815686.6666666665,
            "unit": "ns",
            "range": "± 44404.325186158334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3458433.3333333335,
            "unit": "ns",
            "range": "± 33027.73005189658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18570.526315789473,
            "unit": "ns",
            "range": "± 1743.5518702637187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81014.73684210527,
            "unit": "ns",
            "range": "± 5434.503019440606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64700,
            "unit": "ns",
            "range": "± 1550.1152030920614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78989.58333333333,
            "unit": "ns",
            "range": "± 9829.884393673326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4120.212765957447,
            "unit": "ns",
            "range": "± 502.59108995906956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18081.720430107525,
            "unit": "ns",
            "range": "± 1841.9593913145823"
          }
        ]
      }
    ]
  }
}