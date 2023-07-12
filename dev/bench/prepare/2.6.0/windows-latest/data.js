window.BENCHMARK_DATA = {
  "lastUpdate": 1689147568049,
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
          "id": "349386cad10fdedaa0eab83fd5ee11f94d542bc2",
          "message": "Prepare 2.6.0",
          "timestamp": "2023-07-12T16:25:54+09:00",
          "tree_id": "c9cab82e8cbc048cd23f270c87bad81873f04f3b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/349386cad10fdedaa0eab83fd5ee11f94d542bc2"
        },
        "date": 1689147542797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037408.1632653062,
            "unit": "ns",
            "range": "± 110225.24892094555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1869789.4736842106,
            "unit": "ns",
            "range": "± 80039.2262853715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1347287.5,
            "unit": "ns",
            "range": "± 99507.0939021038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3523535.4838709678,
            "unit": "ns",
            "range": "± 160021.46587231968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34381.395348837206,
            "unit": "ns",
            "range": "± 1886.641063022851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5051957.142857143,
            "unit": "ns",
            "range": "± 15202.616894454732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12938453.333333334,
            "unit": "ns",
            "range": "± 100785.15244013352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33076113.333333332,
            "unit": "ns",
            "range": "± 378636.3877062506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65820486.666666664,
            "unit": "ns",
            "range": "± 1167803.1884493127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133172583.33333333,
            "unit": "ns",
            "range": "± 1070226.3068523349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3530641.856971154,
            "unit": "ns",
            "range": "± 8863.115053265536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1105199.188701923,
            "unit": "ns",
            "range": "± 1629.4736890213826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 836637.5901442308,
            "unit": "ns",
            "range": "± 2895.2161504834444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1889812.7650669643,
            "unit": "ns",
            "range": "± 5028.0319981341745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 585391.4192708334,
            "unit": "ns",
            "range": "± 1289.6852177801961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 534817.6307091346,
            "unit": "ns",
            "range": "± 1187.6722382335633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2246811.904761905,
            "unit": "ns",
            "range": "± 53468.93935913145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2341754.1666666665,
            "unit": "ns",
            "range": "± 162126.36716408766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2916411.320754717,
            "unit": "ns",
            "range": "± 120389.65209233877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2597485.714285714,
            "unit": "ns",
            "range": "± 73578.87032790159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4446015.7894736845,
            "unit": "ns",
            "range": "± 190828.44650690994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197012.8205128205,
            "unit": "ns",
            "range": "± 9766.459420062607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195110.14492753622,
            "unit": "ns",
            "range": "± 9209.093091446215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161349.27536231885,
            "unit": "ns",
            "range": "± 7753.739575737286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2787171.4285714286,
            "unit": "ns",
            "range": "± 65812.59106627805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2434628.5714285714,
            "unit": "ns",
            "range": "± 32187.01191884292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14076.344086021505,
            "unit": "ns",
            "range": "± 1442.7026155239494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63770.51282051282,
            "unit": "ns",
            "range": "± 3269.0643235919288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54528.070175438595,
            "unit": "ns",
            "range": "± 2364.9791894255727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67889.24731182796,
            "unit": "ns",
            "range": "± 9936.706898792974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4228.571428571428,
            "unit": "ns",
            "range": "± 534.191749039863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14201.063829787234,
            "unit": "ns",
            "range": "± 1206.9239921236422"
          }
        ]
      }
    ]
  }
}