window.BENCHMARK_DATA = {
  "lastUpdate": 1689121444281,
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
          "id": "f85b3f410b59d727f72ef1b7b0dd93d4be1a1749",
          "message": "fix: Log empty block demand as success on PullBlocksAsync",
          "timestamp": "2023-07-12T09:05:00+09:00",
          "tree_id": "e0d569d48bd6bda1d7d756a122033e628b597113",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f85b3f410b59d727f72ef1b7b0dd93d4be1a1749"
        },
        "date": 1689121428669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354121.1182795699,
            "unit": "ns",
            "range": "± 46628.75672704314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354549.86734693876,
            "unit": "ns",
            "range": "± 60489.5707898729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311505.24468085106,
            "unit": "ns",
            "range": "± 58261.12252695427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5295563.852631579,
            "unit": "ns",
            "range": "± 412458.5176659476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4741197.978260869,
            "unit": "ns",
            "range": "± 414179.8360856472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20906.440860215054,
            "unit": "ns",
            "range": "± 6131.337841567916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104564.78021978022,
            "unit": "ns",
            "range": "± 18106.578646571892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113196.83673469388,
            "unit": "ns",
            "range": "± 28431.658307552156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131964.53125,
            "unit": "ns",
            "range": "± 30010.238083537293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5639.887640449439,
            "unit": "ns",
            "range": "± 1092.437323334244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18785.70588235294,
            "unit": "ns",
            "range": "± 2665.0820760323304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656332.34375,
            "unit": "ns",
            "range": "± 215268.10300493604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3144700.2346938774,
            "unit": "ns",
            "range": "± 363681.78273330984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198524.2978723403,
            "unit": "ns",
            "range": "± 311920.1990285277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6415877.422680412,
            "unit": "ns",
            "range": "± 785888.45804422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7525470.89476103,
            "unit": "ns",
            "range": "± 147760.51837422658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2436765.9677083334,
            "unit": "ns",
            "range": "± 31821.1091402223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1717688.563701923,
            "unit": "ns",
            "range": "± 17390.73696041545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3261740.859635417,
            "unit": "ns",
            "range": "± 45819.33156403881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040121.7507324219,
            "unit": "ns",
            "range": "± 19025.493266734513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 983414.2376953125,
            "unit": "ns",
            "range": "± 16212.07452636201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3884969.6736842105,
            "unit": "ns",
            "range": "± 348778.7794344976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4191932.789473684,
            "unit": "ns",
            "range": "± 450427.94152664853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5230237.21978022,
            "unit": "ns",
            "range": "± 491996.38061339885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622292.177083333,
            "unit": "ns",
            "range": "± 479278.0714334073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8408890.559139784,
            "unit": "ns",
            "range": "± 588850.0176280857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10186855.021505376,
            "unit": "ns",
            "range": "± 846086.6356654719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27576325.8,
            "unit": "ns",
            "range": "± 1728886.0532125612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69201449.64444445,
            "unit": "ns",
            "range": "± 3837101.0800052374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138471606.42028984,
            "unit": "ns",
            "range": "± 6435705.558683951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274064981.68292683,
            "unit": "ns",
            "range": "± 9775001.825170027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65368.4,
            "unit": "ns",
            "range": "± 16240.58370086127"
          }
        ]
      }
    ]
  }
}