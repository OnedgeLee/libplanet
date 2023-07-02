window.BENCHMARK_DATA = {
  "lastUpdate": 1688298584502,
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
      }
    ]
  }
}