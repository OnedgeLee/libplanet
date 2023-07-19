window.BENCHMARK_DATA = {
  "lastUpdate": 1689729126153,
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
        "date": 1689672431150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8933321,
            "unit": "ns",
            "range": "± 104219.25120998149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23513723.3,
            "unit": "ns",
            "range": "± 226361.35739097724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57872278.2,
            "unit": "ns",
            "range": "± 422132.06195356854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116602064.57142857,
            "unit": "ns",
            "range": "± 676334.0800758969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234041272.15384614,
            "unit": "ns",
            "range": "± 2287446.434370134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68636.20224719102,
            "unit": "ns",
            "range": "± 10279.19974575729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385853.06862745096,
            "unit": "ns",
            "range": "± 13856.123884051993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358281.1403508772,
            "unit": "ns",
            "range": "± 12707.14358489321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343910.64285714284,
            "unit": "ns",
            "range": "± 16765.417622780904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4790982.557142857,
            "unit": "ns",
            "range": "± 153572.74629575445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4549324.4,
            "unit": "ns",
            "range": "± 64354.072234119616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20944.010638297874,
            "unit": "ns",
            "range": "± 1702.465141794508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101573.59375,
            "unit": "ns",
            "range": "± 6281.982807292489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104579.0101010101,
            "unit": "ns",
            "range": "± 8852.2213383052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122531.53684210527,
            "unit": "ns",
            "range": "± 14062.871555988271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6556.215053763441,
            "unit": "ns",
            "range": "± 849.0588632416376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19913.441860465115,
            "unit": "ns",
            "range": "± 2029.896471452503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1724621.1538461538,
            "unit": "ns",
            "range": "± 234377.3011052394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3484453.5,
            "unit": "ns",
            "range": "± 529184.3517475261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276883.727272727,
            "unit": "ns",
            "range": "± 291335.6426447597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6549109.956521739,
            "unit": "ns",
            "range": "± 540748.0516608738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3898712.714285714,
            "unit": "ns",
            "range": "± 56937.439417755246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3979078.2181818183,
            "unit": "ns",
            "range": "± 168401.62173866015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5144689.82,
            "unit": "ns",
            "range": "± 202786.74496257876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4634001.935897436,
            "unit": "ns",
            "range": "± 160858.336849179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8569040.395833334,
            "unit": "ns",
            "range": "± 290928.805071022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6963083.9375,
            "unit": "ns",
            "range": "± 73669.00557546219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198843.5950520835,
            "unit": "ns",
            "range": "± 19473.943122371453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1441081.600390625,
            "unit": "ns",
            "range": "± 7975.151283667136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087396.5807291665,
            "unit": "ns",
            "range": "± 17101.987094870245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026963.0616629465,
            "unit": "ns",
            "range": "± 8624.637347132653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931756.4904597356,
            "unit": "ns",
            "range": "± 5616.546762336627"
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
        "date": 1689682056843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7733353.153846154,
            "unit": "ns",
            "range": "± 82128.16147425331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18609813.583333332,
            "unit": "ns",
            "range": "± 478306.92261867726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47050160.26,
            "unit": "ns",
            "range": "± 1014086.1485187572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91588805.53333333,
            "unit": "ns",
            "range": "± 894297.7452227024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193845545,
            "unit": "ns",
            "range": "± 1754741.9679834086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53933.06989247312,
            "unit": "ns",
            "range": "± 4828.4191813944235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306774.65625,
            "unit": "ns",
            "range": "± 19331.429056456294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290842.6615384615,
            "unit": "ns",
            "range": "± 13536.243783216003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279645.8787878788,
            "unit": "ns",
            "range": "± 8733.406758524903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4035910.1,
            "unit": "ns",
            "range": "± 82952.84026284865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572849.238095238,
            "unit": "ns",
            "range": "± 84480.3856862081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18268.516853932586,
            "unit": "ns",
            "range": "± 1483.9231028867025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99141.5202020202,
            "unit": "ns",
            "range": "± 14824.610399932668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102010.35714285714,
            "unit": "ns",
            "range": "± 17650.45716355455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124368.87634408602,
            "unit": "ns",
            "range": "± 14182.290990431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7165.618556701031,
            "unit": "ns",
            "range": "± 1313.9105709301764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22639.871134020617,
            "unit": "ns",
            "range": "± 4506.344186069762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456714.387755102,
            "unit": "ns",
            "range": "± 127878.6780215886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2785805.801369863,
            "unit": "ns",
            "range": "± 137787.6714089356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030354.5638297873,
            "unit": "ns",
            "range": "± 187434.18375116005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5731590.774193549,
            "unit": "ns",
            "range": "± 246114.99204702835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3101879.710526316,
            "unit": "ns",
            "range": "± 105628.77539861586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3281088.4210526315,
            "unit": "ns",
            "range": "± 112711.17247706973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4201892.35106383,
            "unit": "ns",
            "range": "± 158755.817548178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3711848.804347826,
            "unit": "ns",
            "range": "± 215319.10873941245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6855756.431818182,
            "unit": "ns",
            "range": "± 254312.27161635293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6855731.9765625,
            "unit": "ns",
            "range": "± 183732.09092689157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934353.5850260416,
            "unit": "ns",
            "range": "± 29652.142958161796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263703.610576923,
            "unit": "ns",
            "range": "± 5350.991104118673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2742718.511015625,
            "unit": "ns",
            "range": "± 106577.55203772637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790674.9920372596,
            "unit": "ns",
            "range": "± 1423.648190861919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785456.4606770833,
            "unit": "ns",
            "range": "± 7714.10435857998"
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
        "date": 1689729102452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8861568.805882353,
            "unit": "ns",
            "range": "± 473674.24781089247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22842785.3,
            "unit": "ns",
            "range": "± 1053365.1932554245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58236103.306666665,
            "unit": "ns",
            "range": "± 2922854.6136202514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113354826.85714285,
            "unit": "ns",
            "range": "± 4044402.185031618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223631872.57692307,
            "unit": "ns",
            "range": "± 1946183.931067773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80394.68965517242,
            "unit": "ns",
            "range": "± 3538.9742168119187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389060.387755102,
            "unit": "ns",
            "range": "± 53740.6084668692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368656.43157894735,
            "unit": "ns",
            "range": "± 36670.9966663472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 376693.78571428574,
            "unit": "ns",
            "range": "± 49050.21279087275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4561715.704081632,
            "unit": "ns",
            "range": "± 316973.7355438424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4150794.8470588233,
            "unit": "ns",
            "range": "± 502773.57505080674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20845.59574468085,
            "unit": "ns",
            "range": "± 3444.810268568258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86822.5,
            "unit": "ns",
            "range": "± 7896.2161595474245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92685.87634408602,
            "unit": "ns",
            "range": "± 7549.895670045034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99219.22340425532,
            "unit": "ns",
            "range": "± 14965.802970855158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5093.8,
            "unit": "ns",
            "range": "± 944.3773429924324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19272.24226804124,
            "unit": "ns",
            "range": "± 3629.1621027861192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647807.6804123712,
            "unit": "ns",
            "range": "± 224203.4548730027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3004229.0194805195,
            "unit": "ns",
            "range": "± 153714.1111758081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128176.505050505,
            "unit": "ns",
            "range": "± 195875.65776602496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6054983.49122807,
            "unit": "ns",
            "range": "± 250682.92485742984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3574931.988372093,
            "unit": "ns",
            "range": "± 362832.91148914275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3857430.2386363638,
            "unit": "ns",
            "range": "± 408464.52085672325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4732032.468421052,
            "unit": "ns",
            "range": "± 318526.2067818921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4491476.969072165,
            "unit": "ns",
            "range": "± 532757.6672638956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8052634.5869565215,
            "unit": "ns",
            "range": "± 844726.114889911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6932087.354751276,
            "unit": "ns",
            "range": "± 534531.6835084509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2132900.486328125,
            "unit": "ns",
            "range": "± 62795.415245656324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334042.5850123356,
            "unit": "ns",
            "range": "± 28007.7755240805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634024.197699653,
            "unit": "ns",
            "range": "± 46583.72015573982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908765.6815708706,
            "unit": "ns",
            "range": "± 6888.863465905076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761015.1335286458,
            "unit": "ns",
            "range": "± 12326.67051609163"
          }
        ]
      }
    ]
  }
}