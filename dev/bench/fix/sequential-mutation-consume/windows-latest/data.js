window.BENCHMARK_DATA = {
  "lastUpdate": 1683195056113,
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
          "id": "d06efa73150e3187429950d36be92e5a495f1a32",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T18:44:16+09:00",
          "tree_id": "2a7e9d0016859d4fc3797ab3e60f7edb4affeaac",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d06efa73150e3187429950d36be92e5a495f1a32"
        },
        "date": 1683194629243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1231590.9090909092,
            "unit": "ns",
            "range": "± 117726.3569494686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2302939.7959183673,
            "unit": "ns",
            "range": "± 154622.42721512317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1911817.391304348,
            "unit": "ns",
            "range": "± 107398.19877824873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4734213,
            "unit": "ns",
            "range": "± 322526.0962442975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44461.53846153846,
            "unit": "ns",
            "range": "± 2297.1032446721497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6302232,
            "unit": "ns",
            "range": "± 164210.71503812817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17219621.42857143,
            "unit": "ns",
            "range": "± 292088.8067762201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44351471.428571425,
            "unit": "ns",
            "range": "± 738450.9162153845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89054160,
            "unit": "ns",
            "range": "± 1983495.256359339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176779160,
            "unit": "ns",
            "range": "± 2521157.698303358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4330347.536057692,
            "unit": "ns",
            "range": "± 17072.119907075306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1367261.7317708333,
            "unit": "ns",
            "range": "± 3697.063863249672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1044293.1770833334,
            "unit": "ns",
            "range": "± 6650.269270572863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2343775.2213541665,
            "unit": "ns",
            "range": "± 8517.252811818937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 738625.6068638393,
            "unit": "ns",
            "range": "± 2216.2179752248926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 690453.7039620535,
            "unit": "ns",
            "range": "± 1608.6686292361578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2803255.769230769,
            "unit": "ns",
            "range": "± 115283.00967187024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3024056.4102564105,
            "unit": "ns",
            "range": "± 103044.75469903917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3480426.5306122447,
            "unit": "ns",
            "range": "± 138406.64088039965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3686221.875,
            "unit": "ns",
            "range": "± 168130.2135852985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5620586.666666667,
            "unit": "ns",
            "range": "± 167698.0902433429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234780.64516129033,
            "unit": "ns",
            "range": "± 6346.464598753057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230458.33333333334,
            "unit": "ns",
            "range": "± 10716.93079355292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191994.11764705883,
            "unit": "ns",
            "range": "± 3950.232681158683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3551715.3846153845,
            "unit": "ns",
            "range": "± 50557.341144385195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3215228.5714285714,
            "unit": "ns",
            "range": "± 55576.71660481058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19795.78947368421,
            "unit": "ns",
            "range": "± 2205.742784597268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82974.19354838709,
            "unit": "ns",
            "range": "± 5756.676713887864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76624.7191011236,
            "unit": "ns",
            "range": "± 5486.103951615067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93411.82795698925,
            "unit": "ns",
            "range": "± 13802.82618715052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6442.708333333333,
            "unit": "ns",
            "range": "± 991.9406594801044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18590.526315789473,
            "unit": "ns",
            "range": "± 1699.7542803775536"
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
          "id": "c5c6c48adab4418b4b2bf15a8f174aa5b5cb322a",
          "message": "fix: mutation to be consumed sequentially",
          "timestamp": "2023-05-04T18:49:52+09:00",
          "tree_id": "7d6943f3bb101f6ad3e8ebab6f095ec20f25ff6b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c5c6c48adab4418b4b2bf15a8f174aa5b5cb322a"
        },
        "date": 1683195016783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645947.9166666667,
            "unit": "ns",
            "range": "± 129914.01689228042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3129186.301369863,
            "unit": "ns",
            "range": "± 153911.95473302668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2630318.085106383,
            "unit": "ns",
            "range": "± 160347.06039381863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6100270.588235294,
            "unit": "ns",
            "range": "± 195106.04191972857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63924.46808510638,
            "unit": "ns",
            "range": "± 5300.957230867517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8846948.148148147,
            "unit": "ns",
            "range": "± 221954.8297261099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23555353.846153848,
            "unit": "ns",
            "range": "± 154856.11932470635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59837150,
            "unit": "ns",
            "range": "± 1649335.9409634674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120132670,
            "unit": "ns",
            "range": "± 1561292.0474493462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240671826.66666666,
            "unit": "ns",
            "range": "± 3311650.8547133724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5862344.739583333,
            "unit": "ns",
            "range": "± 44309.78570520629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864101.0184151786,
            "unit": "ns",
            "range": "± 20818.682052054057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422452.6106770833,
            "unit": "ns",
            "range": "± 9472.154045064539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3220233.175223214,
            "unit": "ns",
            "range": "± 25429.431667131095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993673.8671875,
            "unit": "ns",
            "range": "± 8989.41686891272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 940202.3567708334,
            "unit": "ns",
            "range": "± 11131.745567429176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3980206.6666666665,
            "unit": "ns",
            "range": "± 67730.06788154058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4106733.3333333335,
            "unit": "ns",
            "range": "± 71173.24604358686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4819146.666666667,
            "unit": "ns",
            "range": "± 87813.50259553047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5025231.578947368,
            "unit": "ns",
            "range": "± 93510.98006016653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7983533.333333333,
            "unit": "ns",
            "range": "± 251369.32324105632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327407.8947368421,
            "unit": "ns",
            "range": "± 10684.93841636877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307343.1818181818,
            "unit": "ns",
            "range": "± 11549.315850617999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278845.3125,
            "unit": "ns",
            "range": "± 12936.731631197234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4779857.142857143,
            "unit": "ns",
            "range": "± 41699.06315652509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4374491.666666667,
            "unit": "ns",
            "range": "± 44466.72828354278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28231.460674157304,
            "unit": "ns",
            "range": "± 2203.1792887891675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116081.44329896907,
            "unit": "ns",
            "range": "± 9047.701479483929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110512.76595744681,
            "unit": "ns",
            "range": "± 9125.354422842138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124690.12345679013,
            "unit": "ns",
            "range": "± 6812.517980495017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8720.833333333334,
            "unit": "ns",
            "range": "± 1334.0809307626585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26867.74193548387,
            "unit": "ns",
            "range": "± 2793.9827148605787"
          }
        ]
      }
    ]
  }
}