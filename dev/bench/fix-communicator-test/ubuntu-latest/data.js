window.BENCHMARK_DATA = {
  "lastUpdate": 1689641570528,
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641557751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300667.925,
            "unit": "ns",
            "range": "± 10617.020689796365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287855.3846153846,
            "unit": "ns",
            "range": "± 11712.260403984326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249560.06896551725,
            "unit": "ns",
            "range": "± 7234.507555217732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4547696.571428572,
            "unit": "ns",
            "range": "± 23006.370511445086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174228.8666666667,
            "unit": "ns",
            "range": "± 63178.27975529324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21441.831578947367,
            "unit": "ns",
            "range": "± 1780.61917065583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97785.62244897959,
            "unit": "ns",
            "range": "± 7210.516109636389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85276.12121212122,
            "unit": "ns",
            "range": "± 5839.005839116735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102237.86734693877,
            "unit": "ns",
            "range": "± 14935.324106898317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5949.072916666667,
            "unit": "ns",
            "range": "± 744.6286852100978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20747.34736842105,
            "unit": "ns",
            "range": "± 1508.3525588804823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542251.3157894737,
            "unit": "ns",
            "range": "± 100507.00029989054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2971409.129032258,
            "unit": "ns",
            "range": "± 88994.43815420599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993695.7395833333,
            "unit": "ns",
            "range": "± 109662.3308262082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5228480.038461538,
            "unit": "ns",
            "range": "± 141599.31151682363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093538.734895834,
            "unit": "ns",
            "range": "± 18737.67435004456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946338.8743024555,
            "unit": "ns",
            "range": "± 1752.0479734521068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394531.438671875,
            "unit": "ns",
            "range": "± 3991.3255893476035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675997.979910714,
            "unit": "ns",
            "range": "± 1580.5549740149077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852332.0388020833,
            "unit": "ns",
            "range": "± 556.3714210372941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768893.7772135417,
            "unit": "ns",
            "range": "± 280.16547605327946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3650306.4516129033,
            "unit": "ns",
            "range": "± 108985.46529785174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3816557.4285714286,
            "unit": "ns",
            "range": "± 87358.84650770717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4483332.952380952,
            "unit": "ns",
            "range": "± 101380.76019268951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4205622.4375,
            "unit": "ns",
            "range": "± 75498.1763152539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6889850.102040816,
            "unit": "ns",
            "range": "± 268468.3625286262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8463253,
            "unit": "ns",
            "range": "± 125114.42714913873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23008582.8,
            "unit": "ns",
            "range": "± 323596.0395299318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56856168.13333333,
            "unit": "ns",
            "range": "± 309255.60086275067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114352569.46666667,
            "unit": "ns",
            "range": "± 1255632.1062380075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224700930.33333334,
            "unit": "ns",
            "range": "± 1884656.3367798715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50292.458823529414,
            "unit": "ns",
            "range": "± 2701.237756645492"
          }
        ]
      }
    ]
  }
}