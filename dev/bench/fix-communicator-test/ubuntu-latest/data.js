window.BENCHMARK_DATA = {
  "lastUpdate": 1689642026240,
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
          "id": "587fb1dcd9648be70849a7da85466ff3b2879854",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:43:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/587fb1dcd9648be70849a7da85466ff3b2879854"
        },
        "date": 1689642010907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326493.5060240964,
            "unit": "ns",
            "range": "± 17432.225586171102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321066.1746031746,
            "unit": "ns",
            "range": "± 14708.047324991287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292634.3505154639,
            "unit": "ns",
            "range": "± 17080.737249921593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5073421.847457627,
            "unit": "ns",
            "range": "± 220836.23697857116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4496667.35,
            "unit": "ns",
            "range": "± 198059.30508530873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22235,
            "unit": "ns",
            "range": "± 1781.039171920397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98382.55208333333,
            "unit": "ns",
            "range": "± 8674.282714310451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86811.47422680413,
            "unit": "ns",
            "range": "± 8848.25499521043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105545.42857142857,
            "unit": "ns",
            "range": "± 14560.328044480542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5744.787234042553,
            "unit": "ns",
            "range": "± 602.420348946253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21443.882978723403,
            "unit": "ns",
            "range": "± 1741.8986295479826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684263.707070707,
            "unit": "ns",
            "range": "± 122869.34893204548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3231752.425287356,
            "unit": "ns",
            "range": "± 176741.1549728988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153084.894117647,
            "unit": "ns",
            "range": "± 116406.58455327046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6246663.65,
            "unit": "ns",
            "range": "± 389549.1760475444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6996171.96875,
            "unit": "ns",
            "range": "± 98643.6264741663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2220277.4578993055,
            "unit": "ns",
            "range": "± 46969.46977983485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1597326.8255208333,
            "unit": "ns",
            "range": "± 28088.11788858971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2999747.1791666667,
            "unit": "ns",
            "range": "± 36319.94075574007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975415.8291666667,
            "unit": "ns",
            "range": "± 12958.927402012936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899975.7055989583,
            "unit": "ns",
            "range": "± 16085.350642519366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3960784.160714286,
            "unit": "ns",
            "range": "± 168621.86909594515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4300578.604651162,
            "unit": "ns",
            "range": "± 158443.00463395414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5081164.839506173,
            "unit": "ns",
            "range": "± 267535.1552987222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4538188.655172414,
            "unit": "ns",
            "range": "± 248176.06865310823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7576500.642857143,
            "unit": "ns",
            "range": "± 323112.31399389333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9747719.628571428,
            "unit": "ns",
            "range": "± 315360.2433779769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25946901.15,
            "unit": "ns",
            "range": "± 920587.2335785861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66709558.95555556,
            "unit": "ns",
            "range": "± 2491222.175849655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125315244.6,
            "unit": "ns",
            "range": "± 3412550.4174635317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256831496.45714286,
            "unit": "ns",
            "range": "± 8347865.985095541"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52889.8021978022,
            "unit": "ns",
            "range": "± 3714.4842747151624"
          }
        ]
      }
    ]
  }
}