window.BENCHMARK_DATA = {
  "lastUpdate": 1689130939412,
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
        "date": 1689121245432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8394673,
            "unit": "ns",
            "range": "± 139449.21685689024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21204624.416666668,
            "unit": "ns",
            "range": "± 694847.971805236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51742339.115384616,
            "unit": "ns",
            "range": "± 1367067.39862552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118977765.46153846,
            "unit": "ns",
            "range": "± 1827875.0637610883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206882660.46666667,
            "unit": "ns",
            "range": "± 3593846.0997330435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64472.03370786517,
            "unit": "ns",
            "range": "± 10058.613400113443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348070.07608695654,
            "unit": "ns",
            "range": "± 26842.403271907853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338867.7078651685,
            "unit": "ns",
            "range": "± 31423.934773007546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309017.3294117647,
            "unit": "ns",
            "range": "± 21852.558936126054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4466350.235294118,
            "unit": "ns",
            "range": "± 140255.13755518827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3939299.725,
            "unit": "ns",
            "range": "± 134002.89237779437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21691.722222222223,
            "unit": "ns",
            "range": "± 7074.518463031267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90524.05555555556,
            "unit": "ns",
            "range": "± 8201.34388564379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87531.81818181818,
            "unit": "ns",
            "range": "± 9320.565513090049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90997.30898876404,
            "unit": "ns",
            "range": "± 12096.13215310468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4781.948051948052,
            "unit": "ns",
            "range": "± 561.8983307574399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16821.9,
            "unit": "ns",
            "range": "± 2177.5992040940146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625629.3915662651,
            "unit": "ns",
            "range": "± 185819.530935195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139200.227272727,
            "unit": "ns",
            "range": "± 249209.8959935122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209813.234042553,
            "unit": "ns",
            "range": "± 217273.00838353267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6703517.872340426,
            "unit": "ns",
            "range": "± 674717.800205676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3536414.205882353,
            "unit": "ns",
            "range": "± 161206.32683915328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3698284.1011235956,
            "unit": "ns",
            "range": "± 213596.56395267078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4720680.123287671,
            "unit": "ns",
            "range": "± 234580.63418932332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057866.74025974,
            "unit": "ns",
            "range": "± 207712.21728349628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8294373.936170213,
            "unit": "ns",
            "range": "± 841844.213402287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6310923.2203125,
            "unit": "ns",
            "range": "± 66846.54317267356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2033836.153125,
            "unit": "ns",
            "range": "± 28536.932147474203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336197.308314732,
            "unit": "ns",
            "range": "± 15100.295973419632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641411.47109375,
            "unit": "ns",
            "range": "± 37134.802111774705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952171.1083333333,
            "unit": "ns",
            "range": "± 10617.864687396594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877399.407421875,
            "unit": "ns",
            "range": "± 13328.77947102136"
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
          "id": "8d70909ccac9a5a979f064b3cdb1359a976b78b2",
          "message": "fix: Log empty block demand as success on PullBlocksAsync\n\n[skip changelog]",
          "timestamp": "2023-07-12T11:46:34+09:00",
          "tree_id": "ee9cfc75fdb74b045104b15a920b6d80bf2b000b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8d70909ccac9a5a979f064b3cdb1359a976b78b2"
        },
        "date": 1689130904750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7983946.761904762,
            "unit": "ns",
            "range": "± 183303.23677172337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19841380.923076924,
            "unit": "ns",
            "range": "± 540637.3574654954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48194633.078947365,
            "unit": "ns",
            "range": "± 1632010.3694948356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97856297.31578948,
            "unit": "ns",
            "range": "± 2076082.4553318648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199335316.69230768,
            "unit": "ns",
            "range": "± 2998048.0039905515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64763.13043478261,
            "unit": "ns",
            "range": "± 11018.895155836964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310824.26744186046,
            "unit": "ns",
            "range": "± 16258.414859732258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296403.1666666667,
            "unit": "ns",
            "range": "± 14018.377548421575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270954.55056179775,
            "unit": "ns",
            "range": "± 16223.335491038853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972757.3125,
            "unit": "ns",
            "range": "± 66263.89111697637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685058.0833333335,
            "unit": "ns",
            "range": "± 91824.7240727476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17182.518072289156,
            "unit": "ns",
            "range": "± 1551.4103289638597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93700.99484536082,
            "unit": "ns",
            "range": "± 10584.547163124676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98012.23,
            "unit": "ns",
            "range": "± 14138.7823571383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108815.5744680851,
            "unit": "ns",
            "range": "± 15963.06824839752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6219.53125,
            "unit": "ns",
            "range": "± 1175.5933324171604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17673.32474226804,
            "unit": "ns",
            "range": "± 2759.347903831889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529624.5,
            "unit": "ns",
            "range": "± 153057.4079539688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2781022.7014925373,
            "unit": "ns",
            "range": "± 131698.31217217803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2036666.046511628,
            "unit": "ns",
            "range": "± 188052.1304012397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5870345.880952381,
            "unit": "ns",
            "range": "± 309318.4169933741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232467.4574468085,
            "unit": "ns",
            "range": "± 125072.12890220022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3361562.9583333335,
            "unit": "ns",
            "range": "± 130591.57681301219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4398326.774193549,
            "unit": "ns",
            "range": "± 129884.8717014956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3831374.564705882,
            "unit": "ns",
            "range": "± 195433.63421976264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7025833.115384615,
            "unit": "ns",
            "range": "± 214493.24384791424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6313242.033854167,
            "unit": "ns",
            "range": "± 55976.92093220456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946505.316127232,
            "unit": "ns",
            "range": "± 11673.749430460863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274400.266376202,
            "unit": "ns",
            "range": "± 13117.72967866448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2693602.041573661,
            "unit": "ns",
            "range": "± 18617.070587305487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797829.8115234375,
            "unit": "ns",
            "range": "± 10068.663164733995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723472.4529947917,
            "unit": "ns",
            "range": "± 4091.1846630669847"
          }
        ]
      }
    ]
  }
}