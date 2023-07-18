window.BENCHMARK_DATA = {
  "lastUpdate": 1679987837184,
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
          "id": "f744e91d159caa20a6a50a25108624fe61221db5",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:37:19+09:00",
          "tree_id": "4ec1541a6ce11138de359316c6b5dcca63b4d153",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f744e91d159caa20a6a50a25108624fe61221db5"
        },
        "date": 1679986256776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3167787.6,
            "unit": "ns",
            "range": "± 34371.96698681728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5006492.933333334,
            "unit": "ns",
            "range": "± 39412.74462017632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23439766.6,
            "unit": "ns",
            "range": "± 310507.32965533313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5996384.95,
            "unit": "ns",
            "range": "± 113323.01512164476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26438335.933333334,
            "unit": "ns",
            "range": "± 476181.5182218506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7503608.8,
            "unit": "ns",
            "range": "± 14557.766023672726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19112366.2,
            "unit": "ns",
            "range": "± 131327.6923240922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49007907.583333336,
            "unit": "ns",
            "range": "± 429130.2664939567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98825141.73333333,
            "unit": "ns",
            "range": "± 999918.5080103468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196671543.53333333,
            "unit": "ns",
            "range": "± 2445444.6098726643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299032.957894737,
            "unit": "ns",
            "range": "± 91560.3082199849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2437443.8857142855,
            "unit": "ns",
            "range": "± 78012.75368838981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2066783.3333333333,
            "unit": "ns",
            "range": "± 91820.2660796507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4968569.151515151,
            "unit": "ns",
            "range": "± 145452.22069358404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45314.20338983051,
            "unit": "ns",
            "range": "± 1945.1377735058632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5781933.028385417,
            "unit": "ns",
            "range": "± 16389.34394842962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962749.0973958333,
            "unit": "ns",
            "range": "± 2997.2527006477076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331220.7291165865,
            "unit": "ns",
            "range": "± 1233.1117606328346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2498449.2466145833,
            "unit": "ns",
            "range": "± 4609.333649859422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802217.2181919643,
            "unit": "ns",
            "range": "± 598.9212857991229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727771.560171274,
            "unit": "ns",
            "range": "± 491.72706521956667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190383.59375,
            "unit": "ns",
            "range": "± 5902.821549817675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193801.94736842104,
            "unit": "ns",
            "range": "± 4266.636737833627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156814.86956521738,
            "unit": "ns",
            "range": "± 2435.485714191652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11273180.333333334,
            "unit": "ns",
            "range": "± 72106.78011776967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9107420.333333334,
            "unit": "ns",
            "range": "± 43820.72955098937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17204.360824742267,
            "unit": "ns",
            "range": "± 1736.8091503384337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49899.31707317073,
            "unit": "ns",
            "range": "± 2633.7810349759025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38017,
            "unit": "ns",
            "range": "± 566.8843075812014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83548.75531914894,
            "unit": "ns",
            "range": "± 10857.602386560711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4287.421052631579,
            "unit": "ns",
            "range": "± 436.16038868569296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15696.902173913044,
            "unit": "ns",
            "range": "± 1251.2680694134583"
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
          "id": "e5da38e307c273c3d6360d6e70ab68cd1efda258",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:45:32+09:00",
          "tree_id": "ef4d66ff230df014d09b48e3d48ce239e885d511",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e5da38e307c273c3d6360d6e70ab68cd1efda258"
        },
        "date": 1679986814882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3616942.652173913,
            "unit": "ns",
            "range": "± 136909.001301224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5630069.846153846,
            "unit": "ns",
            "range": "± 41350.73982176972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26112343.52631579,
            "unit": "ns",
            "range": "± 546782.2836974277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6841637.8,
            "unit": "ns",
            "range": "± 112059.07638907002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29173290.733333334,
            "unit": "ns",
            "range": "± 542338.7656542286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8251543.4,
            "unit": "ns",
            "range": "± 93983.26109609702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21775998,
            "unit": "ns",
            "range": "± 192113.30414627717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55654778.733333334,
            "unit": "ns",
            "range": "± 322545.1242248277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112860076.71428572,
            "unit": "ns",
            "range": "± 645274.4351108328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226666450.13333333,
            "unit": "ns",
            "range": "± 632344.5863846554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467426.1595744682,
            "unit": "ns",
            "range": "± 99844.01580188659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2701055.64,
            "unit": "ns",
            "range": "± 71870.08421211614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2356883,
            "unit": "ns",
            "range": "± 124277.89980384414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5454743.5,
            "unit": "ns",
            "range": "± 165119.8019927623"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54228.18965517241,
            "unit": "ns",
            "range": "± 2364.335687693614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6013964.924665178,
            "unit": "ns",
            "range": "± 21046.854281458327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888026.196986607,
            "unit": "ns",
            "range": "± 3267.637758943596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373599.29296875,
            "unit": "ns",
            "range": "± 3143.615912485307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690915.9484375,
            "unit": "ns",
            "range": "± 1943.4120341288408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830538.5332728794,
            "unit": "ns",
            "range": "± 910.6137197289341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793926.6226283482,
            "unit": "ns",
            "range": "± 566.9997060836987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202709.41666666666,
            "unit": "ns",
            "range": "± 8008.13048502884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207815.25,
            "unit": "ns",
            "range": "± 8831.487067718139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172413.33333333334,
            "unit": "ns",
            "range": "± 3695.3459760018336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12174017.533333333,
            "unit": "ns",
            "range": "± 155351.33965667567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9729798.538461538,
            "unit": "ns",
            "range": "± 46384.75310669694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21973.72340425532,
            "unit": "ns",
            "range": "± 1542.919752784432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58745.434782608696,
            "unit": "ns",
            "range": "± 4852.104519734218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44252.65217391304,
            "unit": "ns",
            "range": "± 870.2520329137495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103708.82978723405,
            "unit": "ns",
            "range": "± 14480.978577874723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6262.397959183673,
            "unit": "ns",
            "range": "± 705.6374721184015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20683.484210526316,
            "unit": "ns",
            "range": "± 1364.1797384474646"
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
          "id": "ccb0f3331688abc89ce2754f723988effacb7d06",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:57:55+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ccb0f3331688abc89ce2754f723988effacb7d06"
        },
        "date": 1679987821489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3977332.010638298,
            "unit": "ns",
            "range": "± 339813.0211538855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6390262.177083333,
            "unit": "ns",
            "range": "± 530462.1481048785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33148944.4375,
            "unit": "ns",
            "range": "± 2081414.2872591459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7767582.701030928,
            "unit": "ns",
            "range": "± 605865.8688013717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37644491.3877551,
            "unit": "ns",
            "range": "± 3319784.7398653543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8939273.767441861,
            "unit": "ns",
            "range": "± 484692.7752849507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25673962.917525772,
            "unit": "ns",
            "range": "± 1849891.2039428416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63948118.27380952,
            "unit": "ns",
            "range": "± 3414525.013366148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129371637.31481482,
            "unit": "ns",
            "range": "± 5367453.903874482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257635908.59375,
            "unit": "ns",
            "range": "± 7938117.615902472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742691.1157894738,
            "unit": "ns",
            "range": "± 146222.5929723252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3318073.0824742266,
            "unit": "ns",
            "range": "± 236525.5927373254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2707957.85106383,
            "unit": "ns",
            "range": "± 176413.8369479808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7109986.14,
            "unit": "ns",
            "range": "± 479454.6441731612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75843.26041666667,
            "unit": "ns",
            "range": "± 19618.219510522566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6829709.880729167,
            "unit": "ns",
            "range": "± 115255.4209112679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2171838.7268415177,
            "unit": "ns",
            "range": "± 24378.251846212017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1605478.0061197917,
            "unit": "ns",
            "range": "± 20913.246871898693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3162818.693498884,
            "unit": "ns",
            "range": "± 87468.13841299033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994095.8158482143,
            "unit": "ns",
            "range": "± 13899.015823873795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918642.7242606027,
            "unit": "ns",
            "range": "± 10708.557851342208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243529.8686868687,
            "unit": "ns",
            "range": "± 32790.4033608038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250235.34736842106,
            "unit": "ns",
            "range": "± 39577.5051883168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206908.79787234042,
            "unit": "ns",
            "range": "± 23432.254105027456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14277682.484210527,
            "unit": "ns",
            "range": "± 860837.2613166352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11321595.927835051,
            "unit": "ns",
            "range": "± 769642.2324752484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32136.52525252525,
            "unit": "ns",
            "range": "± 11140.081403673772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79082.86458333333,
            "unit": "ns",
            "range": "± 17706.485183397934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55871.67346938775,
            "unit": "ns",
            "range": "± 14993.867127551526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125492.69892473119,
            "unit": "ns",
            "range": "± 32041.17395795636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5006.619565217391,
            "unit": "ns",
            "range": "± 582.1084986738987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31102.23232323232,
            "unit": "ns",
            "range": "± 11394.490401360634"
          }
        ]
      }
    ]
  }
}