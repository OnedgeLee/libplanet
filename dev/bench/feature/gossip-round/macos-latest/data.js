window.BENCHMARK_DATA = {
  "lastUpdate": 1688384942335,
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
          "id": "4967018433c09ad5f61c3bab650786a81057aad3",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T15:02:41+09:00",
          "tree_id": "fc68fc51a13f6b241ea85483bd1fe1b5bde679fd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4967018433c09ad5f61c3bab650786a81057aad3"
        },
        "date": 1688365149529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7973175.083333333,
            "unit": "ns",
            "range": "± 105471.87341523661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20880761.542857144,
            "unit": "ns",
            "range": "± 979325.6321225266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52525094.87804878,
            "unit": "ns",
            "range": "± 1702605.3835595052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107016231.05263157,
            "unit": "ns",
            "range": "± 2347952.474503725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212887588.97058824,
            "unit": "ns",
            "range": "± 4223595.257208663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69684.72105263158,
            "unit": "ns",
            "range": "± 11483.483789337524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334415.8764044944,
            "unit": "ns",
            "range": "± 29318.6315974316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302476.5340909091,
            "unit": "ns",
            "range": "± 16638.033636060678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303907.79347826086,
            "unit": "ns",
            "range": "± 23448.472557174642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4274717.28,
            "unit": "ns",
            "range": "± 171597.8311848625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3738810.05,
            "unit": "ns",
            "range": "± 129372.21625969834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17705.120879120877,
            "unit": "ns",
            "range": "± 2705.8753557363725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111589.71111111112,
            "unit": "ns",
            "range": "± 16285.861645414498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124685.86559139784,
            "unit": "ns",
            "range": "± 15057.741999574826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126080.73157894737,
            "unit": "ns",
            "range": "± 18655.11999508197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7934.733333333334,
            "unit": "ns",
            "range": "± 1316.9127055949089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21160.81111111111,
            "unit": "ns",
            "range": "± 4446.3477592856325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583705.02,
            "unit": "ns",
            "range": "± 143458.3987431516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3105012.9479166665,
            "unit": "ns",
            "range": "± 179575.71252616952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157450.510526316,
            "unit": "ns",
            "range": "± 211288.21216928167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5985229.217948718,
            "unit": "ns",
            "range": "± 307385.80167882045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593125.2045454546,
            "unit": "ns",
            "range": "± 351436.08237712074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3756089.173469388,
            "unit": "ns",
            "range": "± 394943.33867142047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4590456.322916667,
            "unit": "ns",
            "range": "± 278134.52764183603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4328919.894736842,
            "unit": "ns",
            "range": "± 419293.8358038626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7617143.12886598,
            "unit": "ns",
            "range": "± 484779.1234264433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6792997.206473215,
            "unit": "ns",
            "range": "± 76681.20979453575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985453.8345424107,
            "unit": "ns",
            "range": "± 20087.2420458048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307452.9526367188,
            "unit": "ns",
            "range": "± 8180.788113629108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2981152.8211616846,
            "unit": "ns",
            "range": "± 75384.4928246451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825592.1751953125,
            "unit": "ns",
            "range": "± 9532.886676996872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775654.1826171875,
            "unit": "ns",
            "range": "± 13254.399834506296"
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
          "id": "0e1dcbfdf7984a805d5f72f17a4aa425825ca6f4",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:17:07+09:00",
          "tree_id": "aaf95b9497298892d219d0a6408b235fe3434e90",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0e1dcbfdf7984a805d5f72f17a4aa425825ca6f4"
        },
        "date": 1688376715602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8563939.233333332,
            "unit": "ns",
            "range": "± 99213.02199629892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21759492.714285713,
            "unit": "ns",
            "range": "± 279121.52215648035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51210971.0945946,
            "unit": "ns",
            "range": "± 1736842.4479914925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96893391.72222222,
            "unit": "ns",
            "range": "± 2016689.965242603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213079367.52857143,
            "unit": "ns",
            "range": "± 6251134.639517188"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59276.27659574468,
            "unit": "ns",
            "range": "± 10008.276098325156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306169.15789473685,
            "unit": "ns",
            "range": "± 14912.692140636562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297552.55555555556,
            "unit": "ns",
            "range": "± 11349.321408800244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294284.5816326531,
            "unit": "ns",
            "range": "± 22351.057381142466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161279.375,
            "unit": "ns",
            "range": "± 104246.90843286329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582880.3333333335,
            "unit": "ns",
            "range": "± 62622.3121643518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16572.571428571428,
            "unit": "ns",
            "range": "± 1755.0537829230136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85423.11956521739,
            "unit": "ns",
            "range": "± 6319.9274874863495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94587.78,
            "unit": "ns",
            "range": "± 14422.226184356125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113948.89795918367,
            "unit": "ns",
            "range": "± 16879.552530920937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5493.462365591397,
            "unit": "ns",
            "range": "± 895.1096065887051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16189.705263157895,
            "unit": "ns",
            "range": "± 1669.4037849820604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559590.3901098901,
            "unit": "ns",
            "range": "± 183214.35837312715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774602.727272727,
            "unit": "ns",
            "range": "± 115433.06930412372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993437.994623656,
            "unit": "ns",
            "range": "± 176801.12087428875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5891295.922222222,
            "unit": "ns",
            "range": "± 426320.82911735435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3130056.782051282,
            "unit": "ns",
            "range": "± 103663.18176721456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3390470.8285714285,
            "unit": "ns",
            "range": "± 109634.08796416585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371532.5,
            "unit": "ns",
            "range": "± 95253.27766870586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3880510.85443038,
            "unit": "ns",
            "range": "± 194137.57968268858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7141972.833333333,
            "unit": "ns",
            "range": "± 260355.12314799777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6298642.411764706,
            "unit": "ns",
            "range": "± 129351.79566285833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863915.4376395089,
            "unit": "ns",
            "range": "± 19328.53769978176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286960.1865234375,
            "unit": "ns",
            "range": "± 28463.761363461435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2497036.458533654,
            "unit": "ns",
            "range": "± 25502.196859436874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887645.4993239183,
            "unit": "ns",
            "range": "± 14796.380959130527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723931.9026227678,
            "unit": "ns",
            "range": "± 7486.12062230336"
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
          "id": "7f48ce9bd8cad8443b1e52ad1a2386a5c4f788cc",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:18:52+09:00",
          "tree_id": "31835b043628d6268ec7456cf50b54108860b770",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f48ce9bd8cad8443b1e52ad1a2386a5c4f788cc"
        },
        "date": 1688376997322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8157061.928571428,
            "unit": "ns",
            "range": "± 111077.71828039645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19654688.066666666,
            "unit": "ns",
            "range": "± 365699.4914687403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49317634.916666664,
            "unit": "ns",
            "range": "± 329920.5729313588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100380274.125,
            "unit": "ns",
            "range": "± 1615453.4738489117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213363808.80769232,
            "unit": "ns",
            "range": "± 5753467.275419664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59641.515789473684,
            "unit": "ns",
            "range": "± 7415.359981596508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332267.97872340423,
            "unit": "ns",
            "range": "± 23764.580422683866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323416.2395833333,
            "unit": "ns",
            "range": "± 27773.05163728428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307534.5106382979,
            "unit": "ns",
            "range": "± 22755.385706710753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4262639.2558139535,
            "unit": "ns",
            "range": "± 149541.7004573343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3904528.6333333333,
            "unit": "ns",
            "range": "± 114868.17714607001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19694.178947368422,
            "unit": "ns",
            "range": "± 3617.1396186529305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100785.97474747474,
            "unit": "ns",
            "range": "± 18835.360216805115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98558.01515151515,
            "unit": "ns",
            "range": "± 14928.836659546556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101212.95959595959,
            "unit": "ns",
            "range": "± 12778.009365518936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7201.723404255319,
            "unit": "ns",
            "range": "± 1449.0330213165282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17564.43157894737,
            "unit": "ns",
            "range": "± 2619.124178173744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596743.62,
            "unit": "ns",
            "range": "± 178324.97739833526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935796.0675675673,
            "unit": "ns",
            "range": "± 139314.97557882863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082113.5102040817,
            "unit": "ns",
            "range": "± 215442.03289675267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500288.8125,
            "unit": "ns",
            "range": "± 163619.80658860572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3390767.636842105,
            "unit": "ns",
            "range": "± 197638.6834366344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3613116.9183673467,
            "unit": "ns",
            "range": "± 237485.41147184605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4577515.9655172415,
            "unit": "ns",
            "range": "± 200920.45631935474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4012117.272727273,
            "unit": "ns",
            "range": "± 249348.20122519674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7385965.402777778,
            "unit": "ns",
            "range": "± 363018.63700516673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6517841.403880635,
            "unit": "ns",
            "range": "± 292367.04005592223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002570.396875,
            "unit": "ns",
            "range": "± 21243.0173303992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253590.4509114583,
            "unit": "ns",
            "range": "± 18929.02741364455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660921.680245536,
            "unit": "ns",
            "range": "± 26814.405337262906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808637.8268229166,
            "unit": "ns",
            "range": "± 8980.064316669428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726086.8130208333,
            "unit": "ns",
            "range": "± 11509.950982169024"
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
          "id": "16250d3d6696c2df83661833457cb6d75deaffd8",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T19:30:19+09:00",
          "tree_id": "34b177607c49e7e3672809c1c23f6d701e7411bd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/16250d3d6696c2df83661833457cb6d75deaffd8"
        },
        "date": 1688381267335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8968240.63,
            "unit": "ns",
            "range": "± 540963.2022092611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22684066.582474228,
            "unit": "ns",
            "range": "± 1483880.686593698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54571015.02272727,
            "unit": "ns",
            "range": "± 2040019.8088467065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109299271.32926829,
            "unit": "ns",
            "range": "± 3649257.9879928594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221301535.35714287,
            "unit": "ns",
            "range": "± 2640914.5822712956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73093.16292134831,
            "unit": "ns",
            "range": "± 4648.04417309978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378435.8608247423,
            "unit": "ns",
            "range": "± 50321.55132706265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370942.22826086957,
            "unit": "ns",
            "range": "± 52666.563745620435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334683.9301075269,
            "unit": "ns",
            "range": "± 26044.132647003928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240543.524390244,
            "unit": "ns",
            "range": "± 144457.78768821844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3787320.5,
            "unit": "ns",
            "range": "± 79964.81805352484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20782.036842105263,
            "unit": "ns",
            "range": "± 1975.776474406887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115664.5625,
            "unit": "ns",
            "range": "± 12043.278003506222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126854.73684210527,
            "unit": "ns",
            "range": "± 12824.413512541207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142728.31818181818,
            "unit": "ns",
            "range": "± 28097.992648311447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8012.872340425532,
            "unit": "ns",
            "range": "± 913.2492974137574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24021.123595505618,
            "unit": "ns",
            "range": "± 3815.866346347435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624627.99,
            "unit": "ns",
            "range": "± 153414.21684331074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2971878.4782608696,
            "unit": "ns",
            "range": "± 114383.46960111153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146426.1767676766,
            "unit": "ns",
            "range": "± 174803.04276287573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5854914.464285715,
            "unit": "ns",
            "range": "± 206432.82005331016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3569732.2976190476,
            "unit": "ns",
            "range": "± 302742.1491466334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3904542.4782608696,
            "unit": "ns",
            "range": "± 354352.23744983296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4727488.195876288,
            "unit": "ns",
            "range": "± 333240.30295814807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4333913.020833333,
            "unit": "ns",
            "range": "± 372287.9294516114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7420728.710843373,
            "unit": "ns",
            "range": "± 392228.474741803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7585251.723090278,
            "unit": "ns",
            "range": "± 202076.36765030253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2287746.0966796875,
            "unit": "ns",
            "range": "± 51088.99454669389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422838.9553444602,
            "unit": "ns",
            "range": "± 34099.93877697509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3001672.6469726562,
            "unit": "ns",
            "range": "± 55000.31313362964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977565.759657118,
            "unit": "ns",
            "range": "± 20674.94784547769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793240.4027235243,
            "unit": "ns",
            "range": "± 14165.172483977409"
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
          "id": "88badca48ecc98f343605bbd33eac933cca14ca0",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T19:50:04+09:00",
          "tree_id": "dec9a06f16737587d978b3e4bba6481e784a6d30",
          "url": "https://github.com/OnedgeLee/libplanet/commit/88badca48ecc98f343605bbd33eac933cca14ca0"
        },
        "date": 1688382231326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7936875.5,
            "unit": "ns",
            "range": "± 161430.43907953595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19726389.166666668,
            "unit": "ns",
            "range": "± 412980.6751162107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47018694.166666664,
            "unit": "ns",
            "range": "± 468424.7991082518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96172851.15384616,
            "unit": "ns",
            "range": "± 726486.6122438007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196900998.57142857,
            "unit": "ns",
            "range": "± 1191585.5130674047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59775.520833333336,
            "unit": "ns",
            "range": "± 7407.831304176705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298888.81944444444,
            "unit": "ns",
            "range": "± 13619.805974012897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293057.4659090909,
            "unit": "ns",
            "range": "± 15861.0566982478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270154.2068965517,
            "unit": "ns",
            "range": "± 14770.14317933619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977153.588235294,
            "unit": "ns",
            "range": "± 77254.05706745991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3552048.2666666666,
            "unit": "ns",
            "range": "± 104327.26861401538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16367.114942528735,
            "unit": "ns",
            "range": "± 1846.860361786163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94217.41489361702,
            "unit": "ns",
            "range": "± 14269.71584111707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94164.5,
            "unit": "ns",
            "range": "± 10937.403604759316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99288.83684210526,
            "unit": "ns",
            "range": "± 18417.0324466416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4297.505747126437,
            "unit": "ns",
            "range": "± 456.0028272444794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16155.710843373494,
            "unit": "ns",
            "range": "± 1344.381420272413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449208.5104166667,
            "unit": "ns",
            "range": "± 120557.89671243525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759416.772727273,
            "unit": "ns",
            "range": "± 129588.37506763726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1971180.3865979381,
            "unit": "ns",
            "range": "± 191028.50801003262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5642835.4215686275,
            "unit": "ns",
            "range": "± 227456.72337830273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3129484.2564102565,
            "unit": "ns",
            "range": "± 108275.6796218066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3383253.7033898304,
            "unit": "ns",
            "range": "± 145871.71605720953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4348167.756410256,
            "unit": "ns",
            "range": "± 150640.03291896632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3862058.727272727,
            "unit": "ns",
            "range": "± 94030.3361839915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6858287.523255814,
            "unit": "ns",
            "range": "± 237807.49559249732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6105907.055889423,
            "unit": "ns",
            "range": "± 30173.856584385223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914274.208984375,
            "unit": "ns",
            "range": "± 25960.933768560262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215633.0880301339,
            "unit": "ns",
            "range": "± 6469.238171904322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2437528.611328125,
            "unit": "ns",
            "range": "± 14246.583573761234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796398.4174479167,
            "unit": "ns",
            "range": "± 2143.47161463889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715964.33359375,
            "unit": "ns",
            "range": "± 9188.57031865515"
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
          "id": "62a1be961306950e971ae328b67694acede0a962",
          "message": "fix: Revive round add on HeightVoteSet",
          "timestamp": "2023-07-03T20:32:40+09:00",
          "tree_id": "be74ad715c46d42912f0ac2fb5aa99117786d0d7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62a1be961306950e971ae328b67694acede0a962"
        },
        "date": 1688384909842,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078315.866666666,
            "unit": "ns",
            "range": "± 131909.25094866584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18557455.5,
            "unit": "ns",
            "range": "± 198343.80766647685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46833321.76923077,
            "unit": "ns",
            "range": "± 574282.0564164085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93781388.23076923,
            "unit": "ns",
            "range": "± 705532.8650865192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190860774.73333332,
            "unit": "ns",
            "range": "± 2705524.6792129"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54082.706896551725,
            "unit": "ns",
            "range": "± 4818.726484605684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328478.75268817204,
            "unit": "ns",
            "range": "± 19785.602850170973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313507.63186813187,
            "unit": "ns",
            "range": "± 23773.592084593358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302761.93333333335,
            "unit": "ns",
            "range": "± 28028.171219128155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4310069.886075949,
            "unit": "ns",
            "range": "± 223842.0139661801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3816347.3846153845,
            "unit": "ns",
            "range": "± 100532.199905633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17522.5,
            "unit": "ns",
            "range": "± 2036.9566208638068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87587.65053763441,
            "unit": "ns",
            "range": "± 7197.139751840788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88746.83333333333,
            "unit": "ns",
            "range": "± 8763.42665575956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115960.33333333333,
            "unit": "ns",
            "range": "± 17088.357965318883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5083.975609756098,
            "unit": "ns",
            "range": "± 567.9848279926766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16446.144329896906,
            "unit": "ns",
            "range": "± 2059.9537716783575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487213.0752688171,
            "unit": "ns",
            "range": "± 153079.52111347628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2844029.1931818184,
            "unit": "ns",
            "range": "± 186857.86847096903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005887.585106383,
            "unit": "ns",
            "range": "± 219954.28318936532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5570134.434782608,
            "unit": "ns",
            "range": "± 212799.8085118606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445589.3263157895,
            "unit": "ns",
            "range": "± 311471.51329224725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580500.9574468085,
            "unit": "ns",
            "range": "± 220810.8715427312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4595485.071428572,
            "unit": "ns",
            "range": "± 273491.9531390256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3903355.0208333335,
            "unit": "ns",
            "range": "± 243081.99336290578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7602286.666666667,
            "unit": "ns",
            "range": "± 462196.9519501552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6132905.857371795,
            "unit": "ns",
            "range": "± 214280.1863480188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870933.8023158482,
            "unit": "ns",
            "range": "± 11586.90001415934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1248056.3041666667,
            "unit": "ns",
            "range": "± 10833.080976079842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2420079.1625,
            "unit": "ns",
            "range": "± 12130.024141795586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848852.9114583334,
            "unit": "ns",
            "range": "± 7893.581132631701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711172.7196614583,
            "unit": "ns",
            "range": "± 5735.689262835108"
          }
        ]
      }
    ]
  }
}