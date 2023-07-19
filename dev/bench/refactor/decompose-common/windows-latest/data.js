window.BENCHMARK_DATA = {
  "lastUpdate": 1689744098881,
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
          "id": "45dee65124543713e956792c50e6e862fe67662c",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T18:09:27+09:00",
          "tree_id": "66f7ec611cd49e0650ce17afce73cb20917c79b2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45dee65124543713e956792c50e6e862fe67662c"
        },
        "date": 1689672339742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1144222,
            "unit": "ns",
            "range": "± 120092.25963500905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2078918.0327868853,
            "unit": "ns",
            "range": "± 91181.57253194808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1469279.1666666667,
            "unit": "ns",
            "range": "± 113262.77589529922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4117344.1860465114,
            "unit": "ns",
            "range": "± 151497.62736209936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33939.56043956044,
            "unit": "ns",
            "range": "± 3771.2915300517147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6985860,
            "unit": "ns",
            "range": "± 97643.41686536199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17354650,
            "unit": "ns",
            "range": "± 332109.4297567194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 42212864.28571428,
            "unit": "ns",
            "range": "± 221583.9400149015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 85050573.33333333,
            "unit": "ns",
            "range": "± 716262.9858874329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175576106.66666666,
            "unit": "ns",
            "range": "± 815585.2092355584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4803662.03125,
            "unit": "ns",
            "range": "± 10377.754720482868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508928.1770833333,
            "unit": "ns",
            "range": "± 6135.4950194474195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1024241.9921875,
            "unit": "ns",
            "range": "± 1301.143050793077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549869.2243303573,
            "unit": "ns",
            "range": "± 6690.059478552509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837275.5794270834,
            "unit": "ns",
            "range": "± 2148.0795164121178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745503.828125,
            "unit": "ns",
            "range": "± 1517.2581885941413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2812130,
            "unit": "ns",
            "range": "± 112895.74023525116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2922292.8571428573,
            "unit": "ns",
            "range": "± 30556.516723699286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3547600,
            "unit": "ns",
            "range": "± 93196.60938038465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3236838.596491228,
            "unit": "ns",
            "range": "± 139620.79352198678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5597275,
            "unit": "ns",
            "range": "± 123550.3599645441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206978.125,
            "unit": "ns",
            "range": "± 12666.268533101278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190144.68085106384,
            "unit": "ns",
            "range": "± 7243.462074913646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160913.51351351352,
            "unit": "ns",
            "range": "± 4202.523194605974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3561835.714285714,
            "unit": "ns",
            "range": "± 35759.37977312025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3270433.3333333335,
            "unit": "ns",
            "range": "± 33121.93202324377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10482.105263157895,
            "unit": "ns",
            "range": "± 1135.6860282486703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53016.666666666664,
            "unit": "ns",
            "range": "± 3442.2441726031325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42013.15789473684,
            "unit": "ns",
            "range": "± 1235.383965398214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63904.08163265306,
            "unit": "ns",
            "range": "± 11911.011697726206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2518.3673469387754,
            "unit": "ns",
            "range": "± 657.6037315806267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9704.838709677419,
            "unit": "ns",
            "range": "± 1339.7368438089572"
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
          "id": "abf9c43357a91f1cc5b7a04cd823d992ad43efbb",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T20:52:19+09:00",
          "tree_id": "95a6ef7580cb096f5f752ae0c63048c70adeddc0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/abf9c43357a91f1cc5b7a04cd823d992ad43efbb"
        },
        "date": 1689682010931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1262928.7234042552,
            "unit": "ns",
            "range": "± 85398.88553116885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2341918.4210526315,
            "unit": "ns",
            "range": "± 77882.34319294282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1624491.6666666667,
            "unit": "ns",
            "range": "± 118604.03975250605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4334280.85106383,
            "unit": "ns",
            "range": "± 167607.3188169272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41968.96551724138,
            "unit": "ns",
            "range": "± 1841.2626194755046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6853792.307692308,
            "unit": "ns",
            "range": "± 15470.534441234922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17271935.714285713,
            "unit": "ns",
            "range": "± 138785.1389026209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44029646.666666664,
            "unit": "ns",
            "range": "± 291873.225578373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87971342.85714285,
            "unit": "ns",
            "range": "± 794842.0469253244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174504433.33333334,
            "unit": "ns",
            "range": "± 1282606.8486076465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5004956.71875,
            "unit": "ns",
            "range": "± 15371.772907146162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548863.96484375,
            "unit": "ns",
            "range": "± 2039.5828294627267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154196.50390625,
            "unit": "ns",
            "range": "± 5778.737562251113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564996.953125,
            "unit": "ns",
            "range": "± 3026.7238535839033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794654.8111979166,
            "unit": "ns",
            "range": "± 1210.414389677011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761733.5286458334,
            "unit": "ns",
            "range": "± 1148.5830810726682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2954318.1818181816,
            "unit": "ns",
            "range": "± 71306.61250552424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2989637.5,
            "unit": "ns",
            "range": "± 86210.30830512391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3817827.272727273,
            "unit": "ns",
            "range": "± 76699.4330507275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3351993.1818181816,
            "unit": "ns",
            "range": "± 122435.21380852108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5624236.666666667,
            "unit": "ns",
            "range": "± 97340.70405881944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244412.5,
            "unit": "ns",
            "range": "± 9648.958162258828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237276,
            "unit": "ns",
            "range": "± 7541.735847391948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208093.33333333334,
            "unit": "ns",
            "range": "± 3520.443694979911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3783740,
            "unit": "ns",
            "range": "± 62576.202688059806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3441100,
            "unit": "ns",
            "range": "± 18125.927031995656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15194.68085106383,
            "unit": "ns",
            "range": "± 1072.7682030517299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77870,
            "unit": "ns",
            "range": "± 3728.9968787220764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64878.04878048781,
            "unit": "ns",
            "range": "± 2240.815944597185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77105.88235294117,
            "unit": "ns",
            "range": "± 9597.33783699537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3871.875,
            "unit": "ns",
            "range": "± 450.6610641455972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14893.548387096775,
            "unit": "ns",
            "range": "± 1152.8609452341957"
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
          "id": "005b2c2fb90da6488e7941546569bb8f7559da40",
          "message": "Update projects to reveal hidden refences",
          "timestamp": "2023-07-19T09:55:03+09:00",
          "tree_id": "01b5b1a20f53dbb91b7ecff5e3794df6d6fb50cc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/005b2c2fb90da6488e7941546569bb8f7559da40"
        },
        "date": 1689729310015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642916.8421052631,
            "unit": "ns",
            "range": "± 108495.92859566903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3100058.762886598,
            "unit": "ns",
            "range": "± 202505.12840860835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2023377.6595744682,
            "unit": "ns",
            "range": "± 123962.82147661048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5671133.333333333,
            "unit": "ns",
            "range": "± 330090.96458091546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55811.11111111111,
            "unit": "ns",
            "range": "± 3923.9811371926457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8434610.638297873,
            "unit": "ns",
            "range": "± 322844.1737689256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23582600,
            "unit": "ns",
            "range": "± 595766.4270938518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59235941.666666664,
            "unit": "ns",
            "range": "± 1490183.150668478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119892100,
            "unit": "ns",
            "range": "± 2657740.3385899873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234209565.3846154,
            "unit": "ns",
            "range": "± 2791815.5597645757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5911532.142857143,
            "unit": "ns",
            "range": "± 39420.28475397206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896842.4479166667,
            "unit": "ns",
            "range": "± 16496.59055149873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414710.853794643,
            "unit": "ns",
            "range": "± 12725.8727964881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3147598.9676339286,
            "unit": "ns",
            "range": "± 37557.6946922954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012353.90625,
            "unit": "ns",
            "range": "± 4690.330990357412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938005.859375,
            "unit": "ns",
            "range": "± 8241.802885406647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3830456.3636363638,
            "unit": "ns",
            "range": "± 161039.07596149447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4267635.294117647,
            "unit": "ns",
            "range": "± 85927.28714716059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5079708.571428572,
            "unit": "ns",
            "range": "± 145836.25663016434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4683505,
            "unit": "ns",
            "range": "± 102670.50760359057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7543952.564102564,
            "unit": "ns",
            "range": "± 258562.38531254992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319802.12765957444,
            "unit": "ns",
            "range": "± 12389.292174779173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297691.6666666667,
            "unit": "ns",
            "range": "± 15891.683119464657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278243.8775510204,
            "unit": "ns",
            "range": "± 19767.410784912903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5032286.666666667,
            "unit": "ns",
            "range": "± 93893.56334752259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4845580,
            "unit": "ns",
            "range": "± 80136.14486787915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26266.494845360823,
            "unit": "ns",
            "range": "± 2410.6828394828967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101769.14893617021,
            "unit": "ns",
            "range": "± 7162.056931004937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96155.10204081633,
            "unit": "ns",
            "range": "± 10813.556997488568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120350.51546391753,
            "unit": "ns",
            "range": "± 15795.998462897573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6416.8421052631575,
            "unit": "ns",
            "range": "± 988.6217175117824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22905.263157894737,
            "unit": "ns",
            "range": "± 2700.881196669309"
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
          "id": "ce23b0024edda13862225aad4ae0a2efaaeae850",
          "message": "Update projects to reveal hidden refences",
          "timestamp": "2023-07-19T14:04:00+09:00",
          "tree_id": "19ae7191bae602941c0918da55a80d4682402d09",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ce23b0024edda13862225aad4ae0a2efaaeae850"
        },
        "date": 1689744065672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495306.25,
            "unit": "ns",
            "range": "± 28448.81880969167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2588580.9523809524,
            "unit": "ns",
            "range": "± 93227.12951238835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1847494,
            "unit": "ns",
            "range": "± 186391.1320450909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5010737.209302326,
            "unit": "ns",
            "range": "± 271507.4823133249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45976.19047619047,
            "unit": "ns",
            "range": "± 2483.5661809844914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7341465.853658536,
            "unit": "ns",
            "range": "± 250588.39519195224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20400116.666666668,
            "unit": "ns",
            "range": "± 284059.65587396966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51262426.666666664,
            "unit": "ns",
            "range": "± 787453.246200929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102797018.75,
            "unit": "ns",
            "range": "± 2009003.665242633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203887240,
            "unit": "ns",
            "range": "± 2654399.888271762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4871367.552083333,
            "unit": "ns",
            "range": "± 20260.52089661531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1554618.4895833333,
            "unit": "ns",
            "range": "± 7966.384790628443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197635.9505208333,
            "unit": "ns",
            "range": "± 8889.426476365896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652207.7083333335,
            "unit": "ns",
            "range": "± 6706.1282787637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851930.3255208334,
            "unit": "ns",
            "range": "± 3219.322268606276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782824.0862165178,
            "unit": "ns",
            "range": "± 1788.0819560872787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274979.3103448274,
            "unit": "ns",
            "range": "± 136645.46135268442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3367289.1566265062,
            "unit": "ns",
            "range": "± 168661.71151084604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4215196.774193549,
            "unit": "ns",
            "range": "± 122895.78371902747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821183.3333333335,
            "unit": "ns",
            "range": "± 143441.24801188003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6391121.428571428,
            "unit": "ns",
            "range": "± 146471.77592579788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265757.6923076923,
            "unit": "ns",
            "range": "± 7157.383492697486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262887.5,
            "unit": "ns",
            "range": "± 5148.316877064452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231898.9898989899,
            "unit": "ns",
            "range": "± 14965.521564715964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197612.5,
            "unit": "ns",
            "range": "± 78808.0188390327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3728641.6666666665,
            "unit": "ns",
            "range": "± 35596.232138026106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20248.387096774193,
            "unit": "ns",
            "range": "± 1953.6261103297459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88375.25773195876,
            "unit": "ns",
            "range": "± 5627.53703763606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72390.69767441861,
            "unit": "ns",
            "range": "± 2674.0208669528415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92785.10638297872,
            "unit": "ns",
            "range": "± 13270.955896945346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5485.714285714285,
            "unit": "ns",
            "range": "± 814.6848103445809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18462.105263157893,
            "unit": "ns",
            "range": "± 1466.663527771591"
          }
        ]
      }
    ]
  }
}