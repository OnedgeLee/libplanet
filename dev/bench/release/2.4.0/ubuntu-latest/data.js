window.BENCHMARK_DATA = {
  "lastUpdate": 1688386321814,
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
          "id": "f9b5a2d910a3996793afe793d49a469108a6917f",
          "message": "Release 2.4.0",
          "timestamp": "2023-07-03T20:53:11+09:00",
          "tree_id": "4b06aaf630d84c6c1f4e79ccf2b7e764e850d9c0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f9b5a2d910a3996793afe793d49a469108a6917f"
        },
        "date": 1688386049233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8511914.388888888,
            "unit": "ns",
            "range": "± 280088.1490745652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22857207.4,
            "unit": "ns",
            "range": "± 299651.3736331892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57607774.8,
            "unit": "ns",
            "range": "± 402560.06285241817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114892474.26666667,
            "unit": "ns",
            "range": "± 951653.9223305968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230091347.4,
            "unit": "ns",
            "range": "± 1477976.9348200166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50253.01098901099,
            "unit": "ns",
            "range": "± 2743.5720855787245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296758.3783783784,
            "unit": "ns",
            "range": "± 9253.732593305709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282604.2105263158,
            "unit": "ns",
            "range": "± 8527.472979373213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256294.20588235295,
            "unit": "ns",
            "range": "± 8123.504437757598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4607341.214285715,
            "unit": "ns",
            "range": "± 55206.94772494125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4264669.266666667,
            "unit": "ns",
            "range": "± 53155.28417283872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21284.336842105262,
            "unit": "ns",
            "range": "± 1788.0855839537192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95518.17204301075,
            "unit": "ns",
            "range": "± 6186.595607376476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78583.34375,
            "unit": "ns",
            "range": "± 3229.2116105935306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98771.04545454546,
            "unit": "ns",
            "range": "± 8875.460600525097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5827.378947368421,
            "unit": "ns",
            "range": "± 890.4229711980582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21387.701030927834,
            "unit": "ns",
            "range": "± 2184.7524038060756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557101.0222222223,
            "unit": "ns",
            "range": "± 78986.52582560839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949929.5483870967,
            "unit": "ns",
            "range": "± 132826.5976039385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1989222.8488372094,
            "unit": "ns",
            "range": "± 107237.38450301494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5243331.166666667,
            "unit": "ns",
            "range": "± 172360.18862544798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6114373.740104167,
            "unit": "ns",
            "range": "± 30930.074969982357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950393.1709735577,
            "unit": "ns",
            "range": "± 1614.4930389899694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401155.8677083333,
            "unit": "ns",
            "range": "± 3366.1828396791684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673776.6833147323,
            "unit": "ns",
            "range": "± 1429.1264371981529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841848.9292317708,
            "unit": "ns",
            "range": "± 808.6984346662958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768396.797014509,
            "unit": "ns",
            "range": "± 327.0174780227975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3771483.625,
            "unit": "ns",
            "range": "± 70741.0056726884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3841921.533333333,
            "unit": "ns",
            "range": "± 71857.32232483506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4704246.16,
            "unit": "ns",
            "range": "± 124531.23467818559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4454020.318181818,
            "unit": "ns",
            "range": "± 97313.22523753918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6770890.238095238,
            "unit": "ns",
            "range": "± 139883.76394560764"
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
          "id": "75d95740e7c1ce1d7bcfc0df5c34da920f5c453f",
          "message": "Release 2.4.0",
          "timestamp": "2023-07-03T20:58:10+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/75d95740e7c1ce1d7bcfc0df5c34da920f5c453f"
        },
        "date": 1688386309891,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9036987,
            "unit": "ns",
            "range": "± 80570.95097156009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23672352.066666666,
            "unit": "ns",
            "range": "± 185413.45590115493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57991099.4,
            "unit": "ns",
            "range": "± 280600.3076512416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114612930.93333334,
            "unit": "ns",
            "range": "± 479332.79236536793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231601107.64285713,
            "unit": "ns",
            "range": "± 1184407.8391472585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49971.65277777778,
            "unit": "ns",
            "range": "± 2484.6268751513917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298889.74358974356,
            "unit": "ns",
            "range": "± 10226.464285109927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286975.9743589744,
            "unit": "ns",
            "range": "± 10061.90941251416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257000.59615384616,
            "unit": "ns",
            "range": "± 10606.698605329495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4673206.6,
            "unit": "ns",
            "range": "± 36416.5515681302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4263480.2,
            "unit": "ns",
            "range": "± 69365.10457118499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22245.086021505376,
            "unit": "ns",
            "range": "± 2456.716165658301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94684.63829787234,
            "unit": "ns",
            "range": "± 5420.844375070415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84489.02040816327,
            "unit": "ns",
            "range": "± 6585.983524825274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97194.82894736843,
            "unit": "ns",
            "range": "± 4943.940043833211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5998.041237113402,
            "unit": "ns",
            "range": "± 966.6341831919246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18973.925531914894,
            "unit": "ns",
            "range": "± 1420.3722837701396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560895.6262626264,
            "unit": "ns",
            "range": "± 109712.39853702337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2931113.7391304346,
            "unit": "ns",
            "range": "± 111377.00405867447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1979635.2658227847,
            "unit": "ns",
            "range": "± 100109.25509786268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5325221.414634147,
            "unit": "ns",
            "range": "± 178412.16006637213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6044833.4609375,
            "unit": "ns",
            "range": "± 36154.21982282435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910610.6824776786,
            "unit": "ns",
            "range": "± 880.1597062140896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401223.7731770833,
            "unit": "ns",
            "range": "± 2470.3183558434807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674479.840144231,
            "unit": "ns",
            "range": "± 2756.9902505820837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856520.3518229167,
            "unit": "ns",
            "range": "± 363.5054164424959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763761.0551757812,
            "unit": "ns",
            "range": "± 337.6651149142371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3698543.6923076925,
            "unit": "ns",
            "range": "± 50729.27209443054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3860846.3214285714,
            "unit": "ns",
            "range": "± 110431.30489268097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653696.6875,
            "unit": "ns",
            "range": "± 82670.31585014357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4274686.5,
            "unit": "ns",
            "range": "± 95625.43486161872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705519.523809524,
            "unit": "ns",
            "range": "± 155492.07005426963"
          }
        ]
      }
    ]
  }
}