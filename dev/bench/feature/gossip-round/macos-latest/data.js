window.BENCHMARK_DATA = {
  "lastUpdate": 1688345182807,
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
          "id": "71acc5d584de19e5e0622b2b9bc8cd6966cad2bb",
          "message": "feat: Fix gossip to forget only with NewRound",
          "timestamp": "2023-06-30T23:38:10+09:00",
          "tree_id": "eb102d493eedf9889af83dec5cde100aaf559683",
          "url": "https://github.com/OnedgeLee/libplanet/commit/71acc5d584de19e5e0622b2b9bc8cd6966cad2bb"
        },
        "date": 1688136897017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9086467.75609756,
            "unit": "ns",
            "range": "± 480085.26129717764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20653369.85714286,
            "unit": "ns",
            "range": "± 578575.2657196887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53157280.666666664,
            "unit": "ns",
            "range": "± 1573701.2376361687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107313576.93333334,
            "unit": "ns",
            "range": "± 1792217.2027525594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213885966.93333334,
            "unit": "ns",
            "range": "± 1995577.0208896429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69046.5617977528,
            "unit": "ns",
            "range": "± 6063.189471487789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351450.39361702127,
            "unit": "ns",
            "range": "± 36381.708882472674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331622.9896907217,
            "unit": "ns",
            "range": "± 34521.00411569951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332415.58904109587,
            "unit": "ns",
            "range": "± 14814.633472080925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259104.023809524,
            "unit": "ns",
            "range": "± 150451.83978290326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3819537.1666666665,
            "unit": "ns",
            "range": "± 45600.52082983681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24479.132183908045,
            "unit": "ns",
            "range": "± 3749.724483258404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129933.49438202247,
            "unit": "ns",
            "range": "± 19363.26020757985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138189.41304347827,
            "unit": "ns",
            "range": "± 17935.252180345142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132965.5625,
            "unit": "ns",
            "range": "± 28621.54247960515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7373.873684210526,
            "unit": "ns",
            "range": "± 543.3562414762307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18623.08988764045,
            "unit": "ns",
            "range": "± 1903.8027175321874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616895.4175257732,
            "unit": "ns",
            "range": "± 167993.62535987972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104349.2209302327,
            "unit": "ns",
            "range": "± 154946.04819495388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131451.6789473686,
            "unit": "ns",
            "range": "± 189758.7961544854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6078043.078947368,
            "unit": "ns",
            "range": "± 294929.3190609693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430918.080645161,
            "unit": "ns",
            "range": "± 213034.94618745998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639758.9278350514,
            "unit": "ns",
            "range": "± 277363.4645990726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4668274.757731959,
            "unit": "ns",
            "range": "± 297531.07107540313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4055620.595744681,
            "unit": "ns",
            "range": "± 253956.08812891933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7673130.673913044,
            "unit": "ns",
            "range": "± 587851.1316588264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7030946.670833333,
            "unit": "ns",
            "range": "± 103594.21876059513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172030.6012834823,
            "unit": "ns",
            "range": "± 30604.219047401377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355395.4775390625,
            "unit": "ns",
            "range": "± 13767.076720015446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2729349.0986328125,
            "unit": "ns",
            "range": "± 52419.122463931286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836937.5600911458,
            "unit": "ns",
            "range": "± 9955.740581208278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801929.9366418087,
            "unit": "ns",
            "range": "± 25031.44290086491"
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
          "id": "61ba1f0b1ede7b6e2ce6f27696e626e11f1d2963",
          "message": "Introduce IConsensusMessageCommunicator",
          "timestamp": "2023-07-02T17:18:59+09:00",
          "tree_id": "0f9f97eec1e8ffa4c180275e6508f115c7d4e614",
          "url": "https://github.com/OnedgeLee/libplanet/commit/61ba1f0b1ede7b6e2ce6f27696e626e11f1d2963"
        },
        "date": 1688286926264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8319662.26744186,
            "unit": "ns",
            "range": "± 305611.31324849284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21872713.04761905,
            "unit": "ns",
            "range": "± 789967.2836660652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52928135.73809524,
            "unit": "ns",
            "range": "± 2821526.2472930443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108671428.16666667,
            "unit": "ns",
            "range": "± 2768782.521903628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217306478.5,
            "unit": "ns",
            "range": "± 9602521.77248517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68054.93548387097,
            "unit": "ns",
            "range": "± 10989.487573414293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298594.609375,
            "unit": "ns",
            "range": "± 11574.531518672196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292321.0481927711,
            "unit": "ns",
            "range": "± 15328.296627800633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275384.4895833333,
            "unit": "ns",
            "range": "± 17085.316739971593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132467.3214285714,
            "unit": "ns",
            "range": "± 116457.6016280901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741097.55,
            "unit": "ns",
            "range": "± 84127.97743380399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15094.838709677419,
            "unit": "ns",
            "range": "± 1378.6535357111125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94353.64948453609,
            "unit": "ns",
            "range": "± 16621.635805630736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85059.72549019608,
            "unit": "ns",
            "range": "± 3459.5645973355163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101253.18947368421,
            "unit": "ns",
            "range": "± 12189.99663160788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5388.34375,
            "unit": "ns",
            "range": "± 755.0592981680313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15226.935483870968,
            "unit": "ns",
            "range": "± 1204.5188630505543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601593.1368421053,
            "unit": "ns",
            "range": "± 159254.71102805724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3046735.202247191,
            "unit": "ns",
            "range": "± 169585.24755388714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093824.3402061856,
            "unit": "ns",
            "range": "± 175938.68625301015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5919135.611111111,
            "unit": "ns",
            "range": "± 228818.96200639827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295539.0285714287,
            "unit": "ns",
            "range": "± 103325.22055953053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3495849.8157894737,
            "unit": "ns",
            "range": "± 119157.86236976861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4450018.347826087,
            "unit": "ns",
            "range": "± 212692.48068264205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3953278.7191011235,
            "unit": "ns",
            "range": "± 218111.04138446986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6998007.364864865,
            "unit": "ns",
            "range": "± 235444.02288974976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6327465.385416667,
            "unit": "ns",
            "range": "± 52337.13191267172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881190.6416766827,
            "unit": "ns",
            "range": "± 14822.28696436871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323691.5389322916,
            "unit": "ns",
            "range": "± 12241.229940774223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2495475.3275240385,
            "unit": "ns",
            "range": "± 36517.06582154468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 897481.9340494792,
            "unit": "ns",
            "range": "± 12074.693505222713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861929.3589564732,
            "unit": "ns",
            "range": "± 10730.841524904457"
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
          "id": "24c399dfad385ac07672c8a54bfe9c2854df7648",
          "message": "Rename MessageBroadcasted to MessagePublished",
          "timestamp": "2023-07-02T20:26:50+09:00",
          "tree_id": "8db7895eccc994ba6df4d92154e2b6c222d8119a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24c399dfad385ac07672c8a54bfe9c2854df7648"
        },
        "date": 1688298555285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8971329.53896104,
            "unit": "ns",
            "range": "± 453838.15161057265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23049615.263157893,
            "unit": "ns",
            "range": "± 1378956.0732614829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53868439.11764706,
            "unit": "ns",
            "range": "± 1541275.0568574565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139111659.24157304,
            "unit": "ns",
            "range": "± 22170650.559215758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227011415.93023255,
            "unit": "ns",
            "range": "± 8218325.2774505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82281.20238095238,
            "unit": "ns",
            "range": "± 6865.63662099594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366899.6129032258,
            "unit": "ns",
            "range": "± 32084.136584120934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362447.48421052634,
            "unit": "ns",
            "range": "± 33722.2143779183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 370103.5103092783,
            "unit": "ns",
            "range": "± 41568.028591819326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572012.131578947,
            "unit": "ns",
            "range": "± 343112.1699257092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4299424.136363637,
            "unit": "ns",
            "range": "± 438010.8429388584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26428.477777777778,
            "unit": "ns",
            "range": "± 5061.232398611928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131424.68279569893,
            "unit": "ns",
            "range": "± 13997.239661840656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 140495.9793814433,
            "unit": "ns",
            "range": "± 16750.02150059527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149063.8105263158,
            "unit": "ns",
            "range": "± 23159.838719119627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10004.244680851063,
            "unit": "ns",
            "range": "± 1169.1339565271107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28490.097826086956,
            "unit": "ns",
            "range": "± 5687.513047075547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657639.7525252525,
            "unit": "ns",
            "range": "± 188964.05785915707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3100569.0681818184,
            "unit": "ns",
            "range": "± 170635.93084227334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2292445.452631579,
            "unit": "ns",
            "range": "± 289999.9612952934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6480772.652173913,
            "unit": "ns",
            "range": "± 512905.0620959038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437963.3924731184,
            "unit": "ns",
            "range": "± 205461.43124332002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4281577.137931035,
            "unit": "ns",
            "range": "± 732136.599732673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4865319.625,
            "unit": "ns",
            "range": "± 374476.46687103825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4849922.736263736,
            "unit": "ns",
            "range": "± 708779.9069069925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7935128.968421052,
            "unit": "ns",
            "range": "± 674992.528948953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7945040.078409091,
            "unit": "ns",
            "range": "± 338579.2228047525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2177089.6869791667,
            "unit": "ns",
            "range": "± 64570.46787348533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451172.5696765988,
            "unit": "ns",
            "range": "± 53611.22785812766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3445036.940139358,
            "unit": "ns",
            "range": "± 114998.99424384943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 891335.5259641617,
            "unit": "ns",
            "range": "± 35891.88469243168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955658.1266692405,
            "unit": "ns",
            "range": "± 51446.658573797766"
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
          "id": "fb8ab1739d992dc76884310ba0985e848a6a84c2",
          "message": "AddMessage() to get Message instead of MessageContent",
          "timestamp": "2023-07-03T01:10:20+09:00",
          "tree_id": "823271098cbdffd84898da28b4c37744c5d85043",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fb8ab1739d992dc76884310ba0985e848a6a84c2"
        },
        "date": 1688315261506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9741352.693181818,
            "unit": "ns",
            "range": "± 1663191.6760970708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22369833.8,
            "unit": "ns",
            "range": "± 1635632.8044265197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55173672.90384615,
            "unit": "ns",
            "range": "± 2250163.0205135094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109447799.02173913,
            "unit": "ns",
            "range": "± 4214397.319115101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225091714.41666666,
            "unit": "ns",
            "range": "± 2284798.1671196194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80456.02747252748,
            "unit": "ns",
            "range": "± 9856.028569516517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367068.8617021277,
            "unit": "ns",
            "range": "± 42941.39092304067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357283.14210526313,
            "unit": "ns",
            "range": "± 46978.93488120688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344431.7340425532,
            "unit": "ns",
            "range": "± 34183.842004627324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4596708.516129033,
            "unit": "ns",
            "range": "± 447479.44854653755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4201516.211340206,
            "unit": "ns",
            "range": "± 328081.42928194924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21429,
            "unit": "ns",
            "range": "± 3979.7198766625893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100650.35051546391,
            "unit": "ns",
            "range": "± 20066.459857932736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104159.22631578948,
            "unit": "ns",
            "range": "± 14653.93076120149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117404.79787234042,
            "unit": "ns",
            "range": "± 14950.995569274592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6788.760869565217,
            "unit": "ns",
            "range": "± 904.3708440163956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18374.804347826088,
            "unit": "ns",
            "range": "± 2296.1806235148542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759304.930107527,
            "unit": "ns",
            "range": "± 212399.6128312302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3125349.5434782607,
            "unit": "ns",
            "range": "± 150385.5524306299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255062.7653061226,
            "unit": "ns",
            "range": "± 228894.12590782947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6026904.490566038,
            "unit": "ns",
            "range": "± 206719.67822788263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3700328.4183673467,
            "unit": "ns",
            "range": "± 287065.0398414777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882869.474226804,
            "unit": "ns",
            "range": "± 342577.15779460093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5022612.402061855,
            "unit": "ns",
            "range": "± 528894.3436933564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4192922.06185567,
            "unit": "ns",
            "range": "± 385882.5641098278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7990649.905263158,
            "unit": "ns",
            "range": "± 662033.6043015423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6878674.7626953125,
            "unit": "ns",
            "range": "± 125132.39812451645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2047794.80859375,
            "unit": "ns",
            "range": "± 26398.354271972647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340027.5682198661,
            "unit": "ns",
            "range": "± 16167.82955580829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2853643.0177556816,
            "unit": "ns",
            "range": "± 68268.96695472616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 912843.8143833706,
            "unit": "ns",
            "range": "± 7939.2740407123665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860719.1622395833,
            "unit": "ns",
            "range": "± 6755.947313550441"
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
          "id": "d84e655ab96f450d0004de6a7d9057169f893371",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T09:27:03+09:00",
          "tree_id": "3e26906a17a3420a65f7126a71aa411dc7fc8889",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d84e655ab96f450d0004de6a7d9057169f893371"
        },
        "date": 1688345158850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8657210.741935484,
            "unit": "ns",
            "range": "± 263863.35670001217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22179029.26804124,
            "unit": "ns",
            "range": "± 1534028.2002342076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56633339.04347826,
            "unit": "ns",
            "range": "± 2164824.3686456797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102982186.5,
            "unit": "ns",
            "range": "± 1813406.8382738777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215984804.12068966,
            "unit": "ns",
            "range": "± 6155140.0784144765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63707.0206185567,
            "unit": "ns",
            "range": "± 8781.521706329551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361211.1153846154,
            "unit": "ns",
            "range": "± 37102.906545555226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323075.44680851063,
            "unit": "ns",
            "range": "± 31024.39422181316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307044.7912087912,
            "unit": "ns",
            "range": "± 18802.32787509538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4300798.01948052,
            "unit": "ns",
            "range": "± 220202.89062150999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4200361.534090909,
            "unit": "ns",
            "range": "± 314119.3419847644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20461.41489361702,
            "unit": "ns",
            "range": "± 4469.602429721887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101562.36559139784,
            "unit": "ns",
            "range": "± 17999.714961985264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105727.43617021276,
            "unit": "ns",
            "range": "± 14378.989767076419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122175.47872340426,
            "unit": "ns",
            "range": "± 19746.649535177705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7122.085106382979,
            "unit": "ns",
            "range": "± 1437.9108550559117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17974.2,
            "unit": "ns",
            "range": "± 2960.095040883625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597220.587628866,
            "unit": "ns",
            "range": "± 222082.03357879908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966933.5604395606,
            "unit": "ns",
            "range": "± 215815.9288068427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090382.574468085,
            "unit": "ns",
            "range": "± 176436.89989296027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5942654.841269841,
            "unit": "ns",
            "range": "± 250222.4340861035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3527367.5,
            "unit": "ns",
            "range": "± 205458.04712146719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3617085.7978723403,
            "unit": "ns",
            "range": "± 292342.3895121502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4775776.84375,
            "unit": "ns",
            "range": "± 416520.9928163304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4214581.206185567,
            "unit": "ns",
            "range": "± 349437.6316415998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7872579.90625,
            "unit": "ns",
            "range": "± 696386.8617434987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6962341.322916667,
            "unit": "ns",
            "range": "± 119147.51013060349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2060006.3861083984,
            "unit": "ns",
            "range": "± 63517.813491453024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332115.9979073661,
            "unit": "ns",
            "range": "± 23113.537627582195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3088593.043402778,
            "unit": "ns",
            "range": "± 181902.73473375532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934754.4668337264,
            "unit": "ns",
            "range": "± 38589.40512680683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782393.3526436941,
            "unit": "ns",
            "range": "± 22156.937670673127"
          }
        ]
      }
    ]
  }
}