window.BENCHMARK_DATA = {
  "lastUpdate": 1681697392090,
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
          "id": "da6ff26ce0559ec68832db40f698016be24c6e7f",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-16T17:37:15+09:00",
          "tree_id": "4ee86cb37cfb63efcf2c2049367b295996ac0623",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da6ff26ce0559ec68832db40f698016be24c6e7f"
        },
        "date": 1681635862526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13067006.074468086,
            "unit": "ns",
            "range": "± 4655631.796430751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26062661.436170213,
            "unit": "ns",
            "range": "± 4478975.062299913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59156034.97752809,
            "unit": "ns",
            "range": "± 7640958.2501906045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127584067.18947369,
            "unit": "ns",
            "range": "± 27249243.101052657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237317984.71578947,
            "unit": "ns",
            "range": "± 28771709.72070988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80488.90659340659,
            "unit": "ns",
            "range": "± 8928.935230757763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 435786.04736842104,
            "unit": "ns",
            "range": "± 58806.291818494065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361226.152173913,
            "unit": "ns",
            "range": "± 35657.781888185076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363963,
            "unit": "ns",
            "range": "± 48810.33656631955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6070935.989361702,
            "unit": "ns",
            "range": "± 533047.1453982675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4618703.716494845,
            "unit": "ns",
            "range": "± 442976.6582161861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29162.80769230769,
            "unit": "ns",
            "range": "± 5270.044795703158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130067.24731182796,
            "unit": "ns",
            "range": "± 19949.970849742193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 155710.0652173913,
            "unit": "ns",
            "range": "± 24910.70813102483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 311004.2419354839,
            "unit": "ns",
            "range": "± 40013.40205369871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11254.75,
            "unit": "ns",
            "range": "± 2046.2558121850502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26183.521276595744,
            "unit": "ns",
            "range": "± 5520.013614169599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2242772.065217391,
            "unit": "ns",
            "range": "± 357845.3654508077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3938895.1,
            "unit": "ns",
            "range": "± 428953.77173951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3703490,
            "unit": "ns",
            "range": "± 727280.2670024593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9602110.977272727,
            "unit": "ns",
            "range": "± 2577069.852030692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4732645.142857143,
            "unit": "ns",
            "range": "± 1371949.738443509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4852992.733333333,
            "unit": "ns",
            "range": "± 982754.7181375148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5646513.649425288,
            "unit": "ns",
            "range": "± 594934.9772693851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5617753.438202247,
            "unit": "ns",
            "range": "± 672847.4330092148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9584507.846938776,
            "unit": "ns",
            "range": "± 774182.3310210074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8223217.593427835,
            "unit": "ns",
            "range": "± 533493.8690368636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2371611.2213273197,
            "unit": "ns",
            "range": "± 137016.3410967919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1512472.8094740317,
            "unit": "ns",
            "range": "± 69553.53918814723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3613641.7890625,
            "unit": "ns",
            "range": "± 361608.0246839864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992149.1477776605,
            "unit": "ns",
            "range": "± 49405.76465439836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752942.6073196766,
            "unit": "ns",
            "range": "± 40675.36860185442"
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
          "id": "823c5018d3a611af22cf99ac4137ce9b0b531e09",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-17T09:17:45+09:00",
          "tree_id": "967e97d2b4b7e8aea56d73e65a0351bb482fa642",
          "url": "https://github.com/OnedgeLee/libplanet/commit/823c5018d3a611af22cf99ac4137ce9b0b531e09"
        },
        "date": 1681692108945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9087241.050847458,
            "unit": "ns",
            "range": "± 383276.85719681776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22274079.73529412,
            "unit": "ns",
            "range": "± 708527.8126468571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56237418.71568628,
            "unit": "ns",
            "range": "± 2162126.9893431175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112138345.07142857,
            "unit": "ns",
            "range": "± 1502191.156078537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229322636.13157895,
            "unit": "ns",
            "range": "± 7905512.632955896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80546.74157303371,
            "unit": "ns",
            "range": "± 11279.575495244098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 434400.806122449,
            "unit": "ns",
            "range": "± 41010.114070185824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369121.7395833333,
            "unit": "ns",
            "range": "± 43967.4194578679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350101.6914893617,
            "unit": "ns",
            "range": "± 30798.96623781026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5920414.361445783,
            "unit": "ns",
            "range": "± 313931.18172756874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4402974.7988505745,
            "unit": "ns",
            "range": "± 240767.50932296508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24760.366666666665,
            "unit": "ns",
            "range": "± 3277.593911269517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124593.09550561798,
            "unit": "ns",
            "range": "± 13122.176570529806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127163.2,
            "unit": "ns",
            "range": "± 11139.753432054333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 276050.2157894737,
            "unit": "ns",
            "range": "± 33257.91908501153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10046.5,
            "unit": "ns",
            "range": "± 1310.1812543899562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25797.325842696628,
            "unit": "ns",
            "range": "± 5280.103295682251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2478477.438202247,
            "unit": "ns",
            "range": "± 544039.9156898065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4092608.8736263737,
            "unit": "ns",
            "range": "± 502220.80689118867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3653506.3298969073,
            "unit": "ns",
            "range": "± 613631.1156174456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8536706.97826087,
            "unit": "ns",
            "range": "± 871290.8156932862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4192942,
            "unit": "ns",
            "range": "± 394179.8961384204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4291991.65625,
            "unit": "ns",
            "range": "± 338374.39084692555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5420941.229166667,
            "unit": "ns",
            "range": "± 346842.6943995302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5334952.5360824745,
            "unit": "ns",
            "range": "± 451982.1989398952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9698055.163265307,
            "unit": "ns",
            "range": "± 736296.2862849047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8066252.566685268,
            "unit": "ns",
            "range": "± 346822.7912227592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2377603.5291748047,
            "unit": "ns",
            "range": "± 108869.91351100887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1480212.8904447115,
            "unit": "ns",
            "range": "± 68671.7283729891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2860896.9045758927,
            "unit": "ns",
            "range": "± 46880.803903185006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047089.9725191887,
            "unit": "ns",
            "range": "± 45512.76892524379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758927.5559692383,
            "unit": "ns",
            "range": "± 14774.44193048833"
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
          "id": "2fbdbe119910ad6a3ffa96724d4c1abf5b29dd9b",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-17T10:47:23+09:00",
          "tree_id": "e1d8544394be1e50abc1f95fa9cb22f052c2f335",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2fbdbe119910ad6a3ffa96724d4c1abf5b29dd9b"
        },
        "date": 1681697364751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8151297.409090909,
            "unit": "ns",
            "range": "± 197338.84859385516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20661283.291666668,
            "unit": "ns",
            "range": "± 535307.6375471422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52656206.93333333,
            "unit": "ns",
            "range": "± 784949.1554073939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102575839.55555555,
            "unit": "ns",
            "range": "± 2066505.9661480386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214589308.57692307,
            "unit": "ns",
            "range": "± 1740538.812680835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78179.93181818182,
            "unit": "ns",
            "range": "± 6120.87752666619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 458906.68888888886,
            "unit": "ns",
            "range": "± 63617.85629389135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 398955.0947368421,
            "unit": "ns",
            "range": "± 60412.99541754835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 385685.0842105263,
            "unit": "ns",
            "range": "± 40718.728092899364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6224930.252631579,
            "unit": "ns",
            "range": "± 602095.4346628004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4524675.835051547,
            "unit": "ns",
            "range": "± 441108.2931859601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27099.18085106383,
            "unit": "ns",
            "range": "± 3325.357230265147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137143.56382978722,
            "unit": "ns",
            "range": "± 27492.882962357795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132114.683908046,
            "unit": "ns",
            "range": "± 8585.283158945484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 295609.18947368424,
            "unit": "ns",
            "range": "± 39413.1820321563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10784.347368421053,
            "unit": "ns",
            "range": "± 1699.5762098079417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22035.65053763441,
            "unit": "ns",
            "range": "± 4475.087091565046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2234739.393258427,
            "unit": "ns",
            "range": "± 376587.2636762602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3725217.681318681,
            "unit": "ns",
            "range": "± 343894.73432248225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3409011.912087912,
            "unit": "ns",
            "range": "± 549917.3018692022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8546977.32022472,
            "unit": "ns",
            "range": "± 1156822.988846604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3838685.5432098764,
            "unit": "ns",
            "range": "± 201996.77134369308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4135371.7555555557,
            "unit": "ns",
            "range": "± 155983.2005551116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5060214.922535211,
            "unit": "ns",
            "range": "± 241723.52903210145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991795.206521739,
            "unit": "ns",
            "range": "± 299049.3753119965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9484088.510416666,
            "unit": "ns",
            "range": "± 768767.8908392037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7664700.187760416,
            "unit": "ns",
            "range": "± 141057.90172352619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034176.8844713185,
            "unit": "ns",
            "range": "± 100363.84067621635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388738.8020368305,
            "unit": "ns",
            "range": "± 34242.76050794709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3114331.040673325,
            "unit": "ns",
            "range": "± 219750.36907091484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820318.3553145559,
            "unit": "ns",
            "range": "± 27839.117790530992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761712.5764322917,
            "unit": "ns",
            "range": "± 22492.4872267363"
          }
        ]
      }
    ]
  }
}