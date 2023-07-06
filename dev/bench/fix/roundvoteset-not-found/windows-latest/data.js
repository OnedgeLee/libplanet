window.BENCHMARK_DATA = {
  "lastUpdate": 1688683805042,
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
          "id": "e6ef25fd9741c17342918f27320691c092cd7339",
          "message": "fix: Catch when RoundVoteSet not found\n\n[skip changelog]",
          "timestamp": "2023-07-06T16:45:33+09:00",
          "tree_id": "400c0a03f685ad4839ecb3ca39f1b1f7e21b0268",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6ef25fd9741c17342918f27320691c092cd7339"
        },
        "date": 1688630505145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299504,
            "unit": "ns",
            "range": "± 102571.31829792252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2375267.5,
            "unit": "ns",
            "range": "± 82160.7723089934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672117.2043010753,
            "unit": "ns",
            "range": "± 104303.80128099037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4367382.857142857,
            "unit": "ns",
            "range": "± 137819.40332468832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42574.242424242424,
            "unit": "ns",
            "range": "± 2014.4142577595107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6773946.666666667,
            "unit": "ns",
            "range": "± 44192.9028992967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17235814.285714287,
            "unit": "ns",
            "range": "± 96748.41169153717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43878806.666666664,
            "unit": "ns",
            "range": "± 360156.95480614854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88895060,
            "unit": "ns",
            "range": "± 1067673.3320636982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176014880,
            "unit": "ns",
            "range": "± 1798334.844555612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789019.791666667,
            "unit": "ns",
            "range": "± 12311.319353216773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500067.16796875,
            "unit": "ns",
            "range": "± 3988.7496068523656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145177.94921875,
            "unit": "ns",
            "range": "± 1190.1232086181437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650937.4869791665,
            "unit": "ns",
            "range": "± 21745.62588803802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804858.5379464285,
            "unit": "ns",
            "range": "± 1633.6263299214663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744510.9514508928,
            "unit": "ns",
            "range": "± 597.4082256234359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2920491.4285714286,
            "unit": "ns",
            "range": "± 82969.88600205063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3082109.523809524,
            "unit": "ns",
            "range": "± 72018.73995538872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3850307.6923076925,
            "unit": "ns",
            "range": "± 49323.7850253888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3351420,
            "unit": "ns",
            "range": "± 82339.20338327973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5680857.142857143,
            "unit": "ns",
            "range": "± 113668.02792090911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243882.14285714287,
            "unit": "ns",
            "range": "± 10362.57439307183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230863.46153846153,
            "unit": "ns",
            "range": "± 9545.536455023257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202288.88888888888,
            "unit": "ns",
            "range": "± 4225.676261769357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3744521.4285714286,
            "unit": "ns",
            "range": "± 26195.101672800425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3324219.230769231,
            "unit": "ns",
            "range": "± 19848.819638095385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13885.555555555555,
            "unit": "ns",
            "range": "± 1131.426574013762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73942.85714285714,
            "unit": "ns",
            "range": "± 2917.9485881580645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63957.142857142855,
            "unit": "ns",
            "range": "± 1044.7408848530417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72176.8115942029,
            "unit": "ns",
            "range": "± 2764.807456732706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3825.5102040816328,
            "unit": "ns",
            "range": "± 653.8247857111775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15321.875,
            "unit": "ns",
            "range": "± 1298.5986880601638"
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
          "id": "19d36742b4457f08f39c2567a9e8245aefdd4909",
          "message": "fix: Fix BlockVotes.MappedList()",
          "timestamp": "2023-07-06T21:58:55+09:00",
          "tree_id": "dedec47149216b47c722d4e6fb3b454316a936ba",
          "url": "https://github.com/OnedgeLee/libplanet/commit/19d36742b4457f08f39c2567a9e8245aefdd4909"
        },
        "date": 1688649380488,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470029.6875,
            "unit": "ns",
            "range": "± 68102.21701094286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842334.9206349207,
            "unit": "ns",
            "range": "± 130146.79201024554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1960155.5555555555,
            "unit": "ns",
            "range": "± 148150.09296436998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5189443.2835820895,
            "unit": "ns",
            "range": "± 243772.23113780454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55387.62886597938,
            "unit": "ns",
            "range": "± 5441.148349459398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8025342.857142857,
            "unit": "ns",
            "range": "± 97664.57876351562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21594057.14285714,
            "unit": "ns",
            "range": "± 307986.5124776276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53824286.666666664,
            "unit": "ns",
            "range": "± 679890.0287826667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109568421.42857143,
            "unit": "ns",
            "range": "± 1161813.5506304665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219143657.14285713,
            "unit": "ns",
            "range": "± 1189861.9821153695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4968202.8125,
            "unit": "ns",
            "range": "± 16709.848135993267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1602891.6731770833,
            "unit": "ns",
            "range": "± 6584.8822674286985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223068.1640625,
            "unit": "ns",
            "range": "± 9526.90898381504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2755258.3984375,
            "unit": "ns",
            "range": "± 9606.624043846834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869203.0198317308,
            "unit": "ns",
            "range": "± 2653.4351095635875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770342.63671875,
            "unit": "ns",
            "range": "± 3145.591333277388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3597631.5789473685,
            "unit": "ns",
            "range": "± 112036.10929797917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3766423.214285714,
            "unit": "ns",
            "range": "± 155791.1002138574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4519642.105263158,
            "unit": "ns",
            "range": "± 99733.10113492062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4261064.285714285,
            "unit": "ns",
            "range": "± 75315.02666638471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6692189.47368421,
            "unit": "ns",
            "range": "± 222948.5903527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298501.3698630137,
            "unit": "ns",
            "range": "± 14767.34849019098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289003.6144578313,
            "unit": "ns",
            "range": "± 15428.643347905272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284614.89361702127,
            "unit": "ns",
            "range": "± 16161.802554681764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4421633.333333333,
            "unit": "ns",
            "range": "± 46071.69361311729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4017453.846153846,
            "unit": "ns",
            "range": "± 48554.207084876034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26547.872340425532,
            "unit": "ns",
            "range": "± 2961.354264572544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106198.94736842105,
            "unit": "ns",
            "range": "± 8742.005402346036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102806.06060606061,
            "unit": "ns",
            "range": "± 13265.00550537066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130106.18556701031,
            "unit": "ns",
            "range": "± 21606.918328941298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8480.208333333334,
            "unit": "ns",
            "range": "± 1444.599364724145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25660,
            "unit": "ns",
            "range": "± 2857.4426894347775"
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
          "id": "723f96c265433b88e098eb11ca344fd81285d065",
          "message": "fix: Fix VoteSetBitsResponse to skip null votes",
          "timestamp": "2023-07-07T07:23:40+09:00",
          "tree_id": "fdeacd17dc7ae83e77082aae80f55e65d1f16722",
          "url": "https://github.com/OnedgeLee/libplanet/commit/723f96c265433b88e098eb11ca344fd81285d065"
        },
        "date": 1688683269622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1445572.448979592,
            "unit": "ns",
            "range": "± 117403.7133719726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2641602.380952381,
            "unit": "ns",
            "range": "± 95636.98511047945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1810054.2105263157,
            "unit": "ns",
            "range": "± 111835.85798400723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4804313.157894737,
            "unit": "ns",
            "range": "± 157213.65075702802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48035.10638297872,
            "unit": "ns",
            "range": "± 3667.1370406057204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7770713.953488372,
            "unit": "ns",
            "range": "± 281625.00022733316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20910421.42857143,
            "unit": "ns",
            "range": "± 274601.64764638594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52262050,
            "unit": "ns",
            "range": "± 827337.4864820653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105204046.66666667,
            "unit": "ns",
            "range": "± 1379728.3220499123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212154719.23076922,
            "unit": "ns",
            "range": "± 2124854.0912199966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4958092.578125,
            "unit": "ns",
            "range": "± 39789.66813759714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553986.03515625,
            "unit": "ns",
            "range": "± 5335.0524072037315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211067.0823317308,
            "unit": "ns",
            "range": "± 4700.033674468065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680948.1770833335,
            "unit": "ns",
            "range": "± 10396.249527338081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869031.0546875,
            "unit": "ns",
            "range": "± 2005.238159618417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773858.3635602678,
            "unit": "ns",
            "range": "± 2468.715724274666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3366157.1428571427,
            "unit": "ns",
            "range": "± 49961.93496107757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3578066.6666666665,
            "unit": "ns",
            "range": "± 100051.22534136048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4370234,
            "unit": "ns",
            "range": "± 175528.79362610777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791288,
            "unit": "ns",
            "range": "± 100612.80700454258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6303439.47368421,
            "unit": "ns",
            "range": "± 192820.65541967298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270435.8490566038,
            "unit": "ns",
            "range": "± 9961.697691651501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263460.29411764705,
            "unit": "ns",
            "range": "± 11995.809463655343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237435.29411764705,
            "unit": "ns",
            "range": "± 12744.370427409762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211792.307692308,
            "unit": "ns",
            "range": "± 60674.685297061376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929571.4285714286,
            "unit": "ns",
            "range": "± 49018.15093288527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21513.978494623654,
            "unit": "ns",
            "range": "± 1908.6525749089078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92605,
            "unit": "ns",
            "range": "± 8661.867843915337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80047.91666666667,
            "unit": "ns",
            "range": "± 6532.251633511126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99543.87755102041,
            "unit": "ns",
            "range": "± 15032.569906887853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6432.474226804124,
            "unit": "ns",
            "range": "± 1148.2786310094732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19204.255319148935,
            "unit": "ns",
            "range": "± 1780.7763737344942"
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
          "id": "f499f2827179d356f4303edfbca39637150a0eea",
          "message": "fix: Fix VoteSetBitsResponse to skip null votes\n\n[skip changelog]",
          "timestamp": "2023-07-07T07:30:01+09:00",
          "tree_id": "29d78793d9ad4294304115a7f939cab294208c1d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f499f2827179d356f4303edfbca39637150a0eea"
        },
        "date": 1688683765880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747414.5833333333,
            "unit": "ns",
            "range": "± 158584.43673501318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3248652,
            "unit": "ns",
            "range": "± 162792.76111139054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209481.443298969,
            "unit": "ns",
            "range": "± 184582.9196740457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6174929.591836735,
            "unit": "ns",
            "range": "± 389981.82305226993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61794.444444444445,
            "unit": "ns",
            "range": "± 6043.612304565055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9620746.666666666,
            "unit": "ns",
            "range": "± 149429.03173014784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26107510.63829787,
            "unit": "ns",
            "range": "± 945983.3175369847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65973842.85714286,
            "unit": "ns",
            "range": "± 1490815.9053254793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131752000,
            "unit": "ns",
            "range": "± 4510253.514238718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265073610.7142857,
            "unit": "ns",
            "range": "± 7458767.327178939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6303019.739583333,
            "unit": "ns",
            "range": "± 111141.96594650176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998597.1622242648,
            "unit": "ns",
            "range": "± 40470.028365994425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493433.5239955357,
            "unit": "ns",
            "range": "± 42444.32134377039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3316830.8854166665,
            "unit": "ns",
            "range": "± 57349.9111018472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043245.13671875,
            "unit": "ns",
            "range": "± 23518.67397009279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976287.1354166666,
            "unit": "ns",
            "range": "± 15789.563034512708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4127217.6470588236,
            "unit": "ns",
            "range": "± 189072.26048242318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4329119.298245614,
            "unit": "ns",
            "range": "± 187214.18448111063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5352635.897435897,
            "unit": "ns",
            "range": "± 186982.6511614316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680222.077922078,
            "unit": "ns",
            "range": "± 229770.29698064283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7898937.096774193,
            "unit": "ns",
            "range": "± 350900.0392358134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335996.2962962963,
            "unit": "ns",
            "range": "± 14154.017537040638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318661.76470588235,
            "unit": "ns",
            "range": "± 16528.758572378556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307376.3157894737,
            "unit": "ns",
            "range": "± 10582.275701980028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5143626.666666667,
            "unit": "ns",
            "range": "± 87650.4947966367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4629640,
            "unit": "ns",
            "range": "± 122386.7367541652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28855.31914893617,
            "unit": "ns",
            "range": "± 3041.1732675540356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122423.40425531915,
            "unit": "ns",
            "range": "± 11335.494027415529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116441.05263157895,
            "unit": "ns",
            "range": "± 15145.88979240188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133160,
            "unit": "ns",
            "range": "± 20252.078432868657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9542.857142857143,
            "unit": "ns",
            "range": "± 1486.9882382246867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26572.043010752688,
            "unit": "ns",
            "range": "± 2555.869867723837"
          }
        ]
      }
    ]
  }
}