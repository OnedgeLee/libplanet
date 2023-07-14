window.BENCHMARK_DATA = {
  "lastUpdate": 1689321436859,
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
          "id": "ff3b7c45a49ead28d4346d14c203a589539e6322",
          "message": "refactor: Introduce",
          "timestamp": "2023-07-14T16:38:45+09:00",
          "tree_id": "33a334eb5d869904e6f0a1b0c40899076b872c82",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ff3b7c45a49ead28d4346d14c203a589539e6322"
        },
        "date": 1689321402169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436743.8775510204,
            "unit": "ns",
            "range": "± 109358.2543623513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2566139.705882353,
            "unit": "ns",
            "range": "± 121124.44832486032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790419.587628866,
            "unit": "ns",
            "range": "± 113504.77196207001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4670733.333333333,
            "unit": "ns",
            "range": "± 163100.69594438848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48291.397849462366,
            "unit": "ns",
            "range": "± 2945.433308123615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7110192.307692308,
            "unit": "ns",
            "range": "± 75065.88729840895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20359064.285714287,
            "unit": "ns",
            "range": "± 182778.75910570074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50752892.85714286,
            "unit": "ns",
            "range": "± 609060.0418353182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102415833.33333333,
            "unit": "ns",
            "range": "± 2092970.3086621119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204800393.33333334,
            "unit": "ns",
            "range": "± 2142603.7656041193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4906749.399038462,
            "unit": "ns",
            "range": "± 23143.620549843443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574027.265625,
            "unit": "ns",
            "range": "± 7681.87326788596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206721.568080357,
            "unit": "ns",
            "range": "± 5858.607049892382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672268.777901786,
            "unit": "ns",
            "range": "± 9599.482866522376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856659.5182291666,
            "unit": "ns",
            "range": "± 6914.07982478687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794969.8381696428,
            "unit": "ns",
            "range": "± 5537.957885943364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307304.6511627906,
            "unit": "ns",
            "range": "± 119759.43337630447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473843.137254902,
            "unit": "ns",
            "range": "± 121151.26785123129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4294800,
            "unit": "ns",
            "range": "± 61726.86735811363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3885975.6097560977,
            "unit": "ns",
            "range": "± 136742.6593651151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6384030.555555556,
            "unit": "ns",
            "range": "± 213038.37322945826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270753.488372093,
            "unit": "ns",
            "range": "± 8888.793073496143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262084.0909090909,
            "unit": "ns",
            "range": "± 9770.742829150904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234722.41379310345,
            "unit": "ns",
            "range": "± 12806.636085513803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208866.666666667,
            "unit": "ns",
            "range": "± 70102.56431693154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892781.25,
            "unit": "ns",
            "range": "± 74254.97710591527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21077.083333333332,
            "unit": "ns",
            "range": "± 2051.5195480765847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92173.62637362638,
            "unit": "ns",
            "range": "± 5590.226295654768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80615.38461538461,
            "unit": "ns",
            "range": "± 5601.268171423782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104539.79591836735,
            "unit": "ns",
            "range": "± 17000.41078822011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5802.040816326531,
            "unit": "ns",
            "range": "± 1040.3191017031256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19169.473684210527,
            "unit": "ns",
            "range": "± 1997.768632068998"
          }
        ]
      }
    ]
  }
}