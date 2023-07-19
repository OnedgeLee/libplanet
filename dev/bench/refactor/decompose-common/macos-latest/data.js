window.BENCHMARK_DATA = {
  "lastUpdate": 1689750859364,
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
        "date": 1689744024223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8464484.23076923,
            "unit": "ns",
            "range": "± 100574.24258489665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20557051.63157895,
            "unit": "ns",
            "range": "± 448805.725553225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50068401.92307692,
            "unit": "ns",
            "range": "± 775993.9008748138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101543324.92857143,
            "unit": "ns",
            "range": "± 1431916.021671808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206535027.26923078,
            "unit": "ns",
            "range": "± 1508467.5693106097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67598.37096774194,
            "unit": "ns",
            "range": "± 8334.37843490522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329868.3736842105,
            "unit": "ns",
            "range": "± 21802.787398531793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311247.0444444445,
            "unit": "ns",
            "range": "± 20196.180706301824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316127.9322033898,
            "unit": "ns",
            "range": "± 13875.834251234704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4184931.714285714,
            "unit": "ns",
            "range": "± 61986.78094956223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781581.033333333,
            "unit": "ns",
            "range": "± 67675.43562672255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20576.14285714286,
            "unit": "ns",
            "range": "± 3344.3598527584127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95902.37078651685,
            "unit": "ns",
            "range": "± 10544.564969454452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107484.74747474748,
            "unit": "ns",
            "range": "± 14263.686448777875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112694.08602150538,
            "unit": "ns",
            "range": "± 22770.79142552348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6855.6736842105265,
            "unit": "ns",
            "range": "± 1741.7805602442556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21965.545454545456,
            "unit": "ns",
            "range": "± 4976.877482413407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1604670.1958762887,
            "unit": "ns",
            "range": "± 188008.38675822408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2997658.1315789474,
            "unit": "ns",
            "range": "± 139602.7613067251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2112922.5268817204,
            "unit": "ns",
            "range": "± 197681.95441759645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6127322.449438202,
            "unit": "ns",
            "range": "± 332853.1828679402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3414019.4054054054,
            "unit": "ns",
            "range": "± 104817.24918729832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510405.75,
            "unit": "ns",
            "range": "± 143797.07284168978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4502290.106060606,
            "unit": "ns",
            "range": "± 189779.01058037343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4004864.0675675673,
            "unit": "ns",
            "range": "± 194215.9911082145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7252634.188679245,
            "unit": "ns",
            "range": "± 269025.5458685788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6691590.722537879,
            "unit": "ns",
            "range": "± 206808.52972628313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933257.057842548,
            "unit": "ns",
            "range": "± 49696.0779616129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289251.8713541667,
            "unit": "ns",
            "range": "± 18444.79018552983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735506.9132254464,
            "unit": "ns",
            "range": "± 44733.61943375368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 884478.9002604167,
            "unit": "ns",
            "range": "± 8806.615824053353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769404.84765625,
            "unit": "ns",
            "range": "± 8639.940048347233"
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
          "id": "81f2383851c772fbd241407fc92580c3581db6fd",
          "message": "Apply review changes",
          "timestamp": "2023-07-19T14:19:59+09:00",
          "tree_id": "a1f7c152da874b1285ff9e564b6c908a250f906d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/81f2383851c772fbd241407fc92580c3581db6fd"
        },
        "date": 1689744961953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7461127.230769231,
            "unit": "ns",
            "range": "± 54123.56606592277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19258635.94117647,
            "unit": "ns",
            "range": "± 390700.858674746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52843433,
            "unit": "ns",
            "range": "± 969579.0389215312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95411818.625,
            "unit": "ns",
            "range": "± 1868439.2790146496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189495256.73333332,
            "unit": "ns",
            "range": "± 2397251.4836917915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54751.125,
            "unit": "ns",
            "range": "± 5123.239281091782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302680.32584269665,
            "unit": "ns",
            "range": "± 21713.306816943175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288584.69662921346,
            "unit": "ns",
            "range": "± 15760.664397050834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281348.75,
            "unit": "ns",
            "range": "± 9913.891537790643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003201.6363636362,
            "unit": "ns",
            "range": "± 85671.38431199125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3684167.933333333,
            "unit": "ns",
            "range": "± 64713.85824255958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17698.767441860466,
            "unit": "ns",
            "range": "± 1928.6438556019164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84932.29347826086,
            "unit": "ns",
            "range": "± 7659.434536466681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78163.30337078651,
            "unit": "ns",
            "range": "± 4894.413179619127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98232.84946236559,
            "unit": "ns",
            "range": "± 13650.162305091942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5315.397727272727,
            "unit": "ns",
            "range": "± 691.9476184375823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17329.83146067416,
            "unit": "ns",
            "range": "± 2281.944561691923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1554167.2234042552,
            "unit": "ns",
            "range": "± 179814.77568931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2915495.11627907,
            "unit": "ns",
            "range": "± 288950.946359633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001124.1276595744,
            "unit": "ns",
            "range": "± 238371.87381909502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5910670.376344086,
            "unit": "ns",
            "range": "± 474057.2810695595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3257258.619047619,
            "unit": "ns",
            "range": "± 174479.85849547252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3322821.882352941,
            "unit": "ns",
            "range": "± 102569.35174108237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4311114.512345679,
            "unit": "ns",
            "range": "± 225661.400814666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3713673,
            "unit": "ns",
            "range": "± 256302.76206672937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7044987.439393939,
            "unit": "ns",
            "range": "± 329175.183967858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6069614.828125,
            "unit": "ns",
            "range": "± 58223.097404503045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906244.8330078125,
            "unit": "ns",
            "range": "± 11946.547425720368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1241524.2587239584,
            "unit": "ns",
            "range": "± 12893.73054159568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3051806.2709635417,
            "unit": "ns",
            "range": "± 88833.89511901434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793507.5288461539,
            "unit": "ns",
            "range": "± 2541.655571460248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739268.1754557291,
            "unit": "ns",
            "range": "± 8585.638709657655"
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
          "id": "087f88e0f8330e66ee061bd5149c18ab108bb17b",
          "message": "Apply review changes",
          "timestamp": "2023-07-19T15:20:02+09:00",
          "tree_id": "fe4f605f3dbce88474f42611a5073802caf510ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/087f88e0f8330e66ee061bd5149c18ab108bb17b"
        },
        "date": 1689748524596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7835058.923076923,
            "unit": "ns",
            "range": "± 108333.64638580015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18942149.54,
            "unit": "ns",
            "range": "± 492130.09949550603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47563327.12903226,
            "unit": "ns",
            "range": "± 1412281.2669550106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93844751.76470588,
            "unit": "ns",
            "range": "± 1846261.107429605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191950855,
            "unit": "ns",
            "range": "± 2839425.021917516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54367.686046511626,
            "unit": "ns",
            "range": "± 4433.289025388097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302892.7048192771,
            "unit": "ns",
            "range": "± 16057.596209224874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286258.5172413793,
            "unit": "ns",
            "range": "± 16474.471316542542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281869.41818181815,
            "unit": "ns",
            "range": "± 11896.06851441531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3971614.3076923075,
            "unit": "ns",
            "range": "± 65131.301423079996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3603662,
            "unit": "ns",
            "range": "± 61828.99488335318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18256.898876404495,
            "unit": "ns",
            "range": "± 1955.0374446829296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83676.66666666667,
            "unit": "ns",
            "range": "± 7460.7246376808625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77858.91111111111,
            "unit": "ns",
            "range": "± 7142.673428057254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100160.37634408602,
            "unit": "ns",
            "range": "± 12891.350940198134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4922.241379310345,
            "unit": "ns",
            "range": "± 515.8306907539109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17513.75824175824,
            "unit": "ns",
            "range": "± 1979.3831830517263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546195.0376344086,
            "unit": "ns",
            "range": "± 209231.75295868533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2866424.467391304,
            "unit": "ns",
            "range": "± 196738.80308977363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1971444.494736842,
            "unit": "ns",
            "range": "± 186974.0389036229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5804468.266666667,
            "unit": "ns",
            "range": "± 290452.7805674915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3060342.1363636362,
            "unit": "ns",
            "range": "± 102874.50839772697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296353.6224489794,
            "unit": "ns",
            "range": "± 128473.33412175342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4210060.25,
            "unit": "ns",
            "range": "± 156178.21168841657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3660380.091954023,
            "unit": "ns",
            "range": "± 201499.64127924858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7005992.467532467,
            "unit": "ns",
            "range": "± 331661.7521551447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6269682.845833333,
            "unit": "ns",
            "range": "± 48773.08204012748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895213.6600260416,
            "unit": "ns",
            "range": "± 13990.191439771246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231724.869140625,
            "unit": "ns",
            "range": "± 10448.692483328896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2431197.852957589,
            "unit": "ns",
            "range": "± 20388.10470036855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830678.1015625,
            "unit": "ns",
            "range": "± 6042.617208153145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706819.9333984375,
            "unit": "ns",
            "range": "± 4473.525773720724"
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
          "id": "ba850ddc0a780eed5d4d7cacffc17d9b63575575",
          "message": "Apply review changes",
          "timestamp": "2023-07-19T15:54:55+09:00",
          "tree_id": "2d9b18a6b1211c50c93818b28fc7a1ba8aad2f53",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ba850ddc0a780eed5d4d7cacffc17d9b63575575"
        },
        "date": 1689750830494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8675609.787234042,
            "unit": "ns",
            "range": "± 320821.48956308316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20029117.136363637,
            "unit": "ns",
            "range": "± 481309.7223755145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54499131.71052632,
            "unit": "ns",
            "range": "± 1157325.0032825975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109939339.83333333,
            "unit": "ns",
            "range": "± 3658946.7951757177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222555115.33333334,
            "unit": "ns",
            "range": "± 1335155.2621749027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73631.14835164836,
            "unit": "ns",
            "range": "± 9564.53774961751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344453.1666666667,
            "unit": "ns",
            "range": "± 46658.17882737944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305075.20652173914,
            "unit": "ns",
            "range": "± 22813.518732472636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312500.725,
            "unit": "ns",
            "range": "± 11063.14376539137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4231380.6,
            "unit": "ns",
            "range": "± 92923.86431652414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846527.4,
            "unit": "ns",
            "range": "± 99348.21290835248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19322.463917525773,
            "unit": "ns",
            "range": "± 3030.6353090216344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99511.38888888889,
            "unit": "ns",
            "range": "± 14932.599833024473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109974.68181818182,
            "unit": "ns",
            "range": "± 4060.4170382256166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108508.99484536082,
            "unit": "ns",
            "range": "± 17945.822258794495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5619.615384615385,
            "unit": "ns",
            "range": "± 1030.6157789208758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17446.478021978022,
            "unit": "ns",
            "range": "± 2237.5812882963205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1589118.67,
            "unit": "ns",
            "range": "± 162778.46121795708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003054.882022472,
            "unit": "ns",
            "range": "± 160527.92145353812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2207836.8775510206,
            "unit": "ns",
            "range": "± 250152.28282801525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5943316.418918919,
            "unit": "ns",
            "range": "± 297568.5240156451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3533283.5204081633,
            "unit": "ns",
            "range": "± 316275.79056889407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745549.62371134,
            "unit": "ns",
            "range": "± 349086.4231988637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4510719,
            "unit": "ns",
            "range": "± 237597.70215427974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4306246.560606061,
            "unit": "ns",
            "range": "± 480657.04242396296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7466410.166666667,
            "unit": "ns",
            "range": "± 466788.80311637087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6585044.010602678,
            "unit": "ns",
            "range": "± 214557.39940206613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2169863.476779514,
            "unit": "ns",
            "range": "± 44593.47093121609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342872.279672476,
            "unit": "ns",
            "range": "± 35485.96494239015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2867442.573467548,
            "unit": "ns",
            "range": "± 117763.32244661439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864135.5207926432,
            "unit": "ns",
            "range": "± 22029.22708465927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785059.0421605604,
            "unit": "ns",
            "range": "± 23007.72036826444"
          }
        ]
      }
    ]
  }
}