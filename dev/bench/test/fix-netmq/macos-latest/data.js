window.BENCHMARK_DATA = {
  "lastUpdate": 1703029476897,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "4774b2fb92086c01e8c9e8213a65a4d2f01f02c2",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:16:25+09:00",
          "tree_id": "50f73e555180028a42728c81e96951818d4421f5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4774b2fb92086c01e8c9e8213a65a4d2f01f02c2"
        },
        "date": 1703028678063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8800015.227272727,
            "unit": "ns",
            "range": "± 208917.3941218399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21953138.933333334,
            "unit": "ns",
            "range": "± 373686.52656709607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55797290.192307696,
            "unit": "ns",
            "range": "± 493355.7304792666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115893450.23076923,
            "unit": "ns",
            "range": "± 861829.9827364591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196003461,
            "unit": "ns",
            "range": "± 5448999.413476895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59696.91954022989,
            "unit": "ns",
            "range": "± 8147.63465350155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268723.5172413793,
            "unit": "ns",
            "range": "± 14617.156138530765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246838.48969072165,
            "unit": "ns",
            "range": "± 26512.491266105295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211878.68367346938,
            "unit": "ns",
            "range": "± 19765.83121501738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3900733.5625,
            "unit": "ns",
            "range": "± 72516.71348681742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3664627.1931818184,
            "unit": "ns",
            "range": "± 191858.65409257702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14710.217391304348,
            "unit": "ns",
            "range": "± 2482.3377776466245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61397.94680851064,
            "unit": "ns",
            "range": "± 7364.861695796839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53752.34939759036,
            "unit": "ns",
            "range": "± 4158.006849657467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62756.45360824742,
            "unit": "ns",
            "range": "± 9394.814480628638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3604.177777777778,
            "unit": "ns",
            "range": "± 722.9960111127128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12775.89010989011,
            "unit": "ns",
            "range": "± 1561.4859123465235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592831.05,
            "unit": "ns",
            "range": "± 567497.0577031254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2704104.198924731,
            "unit": "ns",
            "range": "± 156934.9903429127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103854.704301075,
            "unit": "ns",
            "range": "± 261249.26823332332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21138273.69767442,
            "unit": "ns",
            "range": "± 3131581.6355137117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2939082.6896551726,
            "unit": "ns",
            "range": "± 125748.08435807901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2913274,
            "unit": "ns",
            "range": "± 103827.92058553557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3524625.5,
            "unit": "ns",
            "range": "± 50160.23868755319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3681591.5555555555,
            "unit": "ns",
            "range": "± 180682.73924926142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23308162.06451613,
            "unit": "ns",
            "range": "± 4099981.878727509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4384309.666666667,
            "unit": "ns",
            "range": "± 51151.4639809424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1332440.7440011161,
            "unit": "ns",
            "range": "± 12725.627364143384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 899765.2620442709,
            "unit": "ns",
            "range": "± 12136.805212074483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988749.471875,
            "unit": "ns",
            "range": "± 23035.037567525655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644654.626953125,
            "unit": "ns",
            "range": "± 7707.3070828663385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 625109.2654296875,
            "unit": "ns",
            "range": "± 18043.637761557828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "810902c09a8787a1e4af817115fe28417c68d9f9",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:23:03+09:00",
          "tree_id": "195d92469a65ed7f608ebe30ce565dfa859ef16c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/810902c09a8787a1e4af817115fe28417c68d9f9"
        },
        "date": 1703029452137,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8268437.653846154,
            "unit": "ns",
            "range": "± 119472.92218242463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21042250.86,
            "unit": "ns",
            "range": "± 517789.332373447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51474500.54545455,
            "unit": "ns",
            "range": "± 1054840.743893586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103433907.1590909,
            "unit": "ns",
            "range": "± 3518583.5462922314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204289456.35714287,
            "unit": "ns",
            "range": "± 2904889.5313194217"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72281.5,
            "unit": "ns",
            "range": "± 8149.643134654561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327188.1382978723,
            "unit": "ns",
            "range": "± 32887.16329919267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322834.4270833333,
            "unit": "ns",
            "range": "± 34898.145573487294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300624.04347826086,
            "unit": "ns",
            "range": "± 25842.0514220792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4800190.191919192,
            "unit": "ns",
            "range": "± 530368.4806505425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4161829.4242424243,
            "unit": "ns",
            "range": "± 381070.2815311988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26284.66853932584,
            "unit": "ns",
            "range": "± 1880.8069486499367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98538.28571428571,
            "unit": "ns",
            "range": "± 15744.532123032295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104684.8125,
            "unit": "ns",
            "range": "± 16073.511852415353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127021.76530612246,
            "unit": "ns",
            "range": "± 19919.825190617594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6534.360824742268,
            "unit": "ns",
            "range": "± 1265.886153595962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22819.092783505155,
            "unit": "ns",
            "range": "± 5139.471801416129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615860.744680851,
            "unit": "ns",
            "range": "± 231844.51044235812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2938556,
            "unit": "ns",
            "range": "± 245310.78342620362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2750679.711111111,
            "unit": "ns",
            "range": "± 460552.8448169349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 31179608.04255319,
            "unit": "ns",
            "range": "± 7357613.8700419525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292118.035714286,
            "unit": "ns",
            "range": "± 92567.47648966858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3375823.8789473684,
            "unit": "ns",
            "range": "± 204946.91765711614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4281961.8513513515,
            "unit": "ns",
            "range": "± 142678.8526918284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4529048.265306123,
            "unit": "ns",
            "range": "± 319799.85780212405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33316187.663265307,
            "unit": "ns",
            "range": "± 5377098.22883544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6202076.612972862,
            "unit": "ns",
            "range": "± 314378.3117948798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832471.0346137153,
            "unit": "ns",
            "range": "± 59528.21919319703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137003.1847098214,
            "unit": "ns",
            "range": "± 36869.03457567779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2866185.383138021,
            "unit": "ns",
            "range": "± 111835.61343775027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825306.5137634277,
            "unit": "ns",
            "range": "± 25419.012648500146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752755.0395250822,
            "unit": "ns",
            "range": "± 16674.103764555595"
          }
        ]
      }
    ]
  }
}