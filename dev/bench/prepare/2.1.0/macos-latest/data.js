window.BENCHMARK_DATA = {
  "lastUpdate": 1686719159397,
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
          "id": "da589f266f89e62b1ae7c00c1bbaa48cf75cc52c",
          "message": "Prepare 2.1.0",
          "timestamp": "2023-06-14T13:44:28+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da589f266f89e62b1ae7c00c1bbaa48cf75cc52c"
        },
        "date": 1686719122062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8932335.48275862,
            "unit": "ns",
            "range": "± 253116.79278202512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22671844.214285713,
            "unit": "ns",
            "range": "± 343172.50590004993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62939292.7,
            "unit": "ns",
            "range": "± 1008902.7910149435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117169218.26923077,
            "unit": "ns",
            "range": "± 3128525.6374065443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228584046.26923078,
            "unit": "ns",
            "range": "± 2379059.534337051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78361.44736842105,
            "unit": "ns",
            "range": "± 10939.676236378064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385436.06315789477,
            "unit": "ns",
            "range": "± 25940.772543332336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372590.28125,
            "unit": "ns",
            "range": "± 30117.466784576452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339407.91489361704,
            "unit": "ns",
            "range": "± 22642.85120855795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5043472.037037037,
            "unit": "ns",
            "range": "± 140558.56840518105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4354631.4375,
            "unit": "ns",
            "range": "± 79728.99843592565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20013.0625,
            "unit": "ns",
            "range": "± 1507.496249886232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100258.28888888888,
            "unit": "ns",
            "range": "± 7486.727798517097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94627.67032967033,
            "unit": "ns",
            "range": "± 8705.07125767624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111673.16304347826,
            "unit": "ns",
            "range": "± 13576.024871985654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5658.595744680851,
            "unit": "ns",
            "range": "± 771.2098067343303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19694.684782608696,
            "unit": "ns",
            "range": "± 2029.0034956254735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1921333.4545454546,
            "unit": "ns",
            "range": "± 173510.6857669339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3623971.4066666667,
            "unit": "ns",
            "range": "± 181498.92264881454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3144764.41,
            "unit": "ns",
            "range": "± 330061.13667738833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8271824.232876712,
            "unit": "ns",
            "range": "± 411797.9610782561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3799524.62,
            "unit": "ns",
            "range": "± 152581.81685178424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4285525.628205128,
            "unit": "ns",
            "range": "± 148986.46728693528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5283117.369565218,
            "unit": "ns",
            "range": "± 199962.2456104439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5244042.925925926,
            "unit": "ns",
            "range": "± 214337.60419759346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9282915.2,
            "unit": "ns",
            "range": "± 370402.60533708456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7232659.646634615,
            "unit": "ns",
            "range": "± 64828.33677524276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2282817.569754464,
            "unit": "ns",
            "range": "± 21636.819394923456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1487234.0797776442,
            "unit": "ns",
            "range": "± 12243.995698346293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2942965.9314903845,
            "unit": "ns",
            "range": "± 12901.569196630686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1066286.3352399555,
            "unit": "ns",
            "range": "± 5767.640441403434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906033.6328125,
            "unit": "ns",
            "range": "± 5657.87570609738"
          }
        ]
      }
    ]
  }
}