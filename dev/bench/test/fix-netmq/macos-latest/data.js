window.BENCHMARK_DATA = {
  "lastUpdate": 1703579686391,
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
          "id": "0a6a97d7e49fdc357cd6210a8b52536bcbb68f9c",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:03:12+09:00",
          "tree_id": "f321b807ef7505eab26a2d201a3578da9554b14b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0a6a97d7e49fdc357cd6210a8b52536bcbb68f9c"
        },
        "date": 1703031833628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10038305.284210525,
            "unit": "ns",
            "range": "± 1747806.4972544364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26703139.652173914,
            "unit": "ns",
            "range": "± 6781729.066245868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63181530.572916664,
            "unit": "ns",
            "range": "± 8726265.162447149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128710936.38172042,
            "unit": "ns",
            "range": "± 24949198.862817034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221867919.24390244,
            "unit": "ns",
            "range": "± 7868548.42594533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74900.60112359551,
            "unit": "ns",
            "range": "± 8604.844594821074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341336.30337078654,
            "unit": "ns",
            "range": "± 47862.06247132684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319976.8222222222,
            "unit": "ns",
            "range": "± 35541.13889875857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300752.24731182796,
            "unit": "ns",
            "range": "± 25974.06312477721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294285.538461538,
            "unit": "ns",
            "range": "± 95826.267522629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3731813.1,
            "unit": "ns",
            "range": "± 103397.95775024132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18507.166666666668,
            "unit": "ns",
            "range": "± 2145.130057541527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118377.875,
            "unit": "ns",
            "range": "± 18611.63322202251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113816.62765957447,
            "unit": "ns",
            "range": "± 16706.603426913953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111088.8894736842,
            "unit": "ns",
            "range": "± 17727.51867427296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5291.285714285715,
            "unit": "ns",
            "range": "± 1471.0839681123284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19131.73404255319,
            "unit": "ns",
            "range": "± 2734.031829877925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508024.6914893617,
            "unit": "ns",
            "range": "± 198188.88360372782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2883834.75,
            "unit": "ns",
            "range": "± 225203.00821701242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2706394.9418604653,
            "unit": "ns",
            "range": "± 264910.4198658307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 29605471.159574468,
            "unit": "ns",
            "range": "± 7154393.263811822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3481385.2157894736,
            "unit": "ns",
            "range": "± 364161.8022343465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545713.688888889,
            "unit": "ns",
            "range": "± 363023.8925630859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5110674.8369565215,
            "unit": "ns",
            "range": "± 1096183.09896481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4804880.313186813,
            "unit": "ns",
            "range": "± 578721.9626634751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35127354.582474224,
            "unit": "ns",
            "range": "± 5490216.032811105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5981108.2734375,
            "unit": "ns",
            "range": "± 153718.7606317246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1764117.7729867788,
            "unit": "ns",
            "range": "± 22562.91421970018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139950.4461550245,
            "unit": "ns",
            "range": "± 44816.96183245872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2895449.0435803346,
            "unit": "ns",
            "range": "± 216090.33860528385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883977.8154947917,
            "unit": "ns",
            "range": "± 16098.27704254069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777506.2971622243,
            "unit": "ns",
            "range": "± 12601.487336839813"
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
          "id": "d2be44f0b6d4002e9614ff63efa0f5a88983720a",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:09:37+09:00",
          "tree_id": "43b1b788d59bd89a60a829c1f1f8d8b336564d17",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d2be44f0b6d4002e9614ff63efa0f5a88983720a"
        },
        "date": 1703032532947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11366439.510204082,
            "unit": "ns",
            "range": "± 1865793.8172529377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29494031.43877551,
            "unit": "ns",
            "range": "± 4158223.354553374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 82748250.03846154,
            "unit": "ns",
            "range": "± 7162328.641444596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144206597.66842106,
            "unit": "ns",
            "range": "± 22252432.039270677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 324420405.67021275,
            "unit": "ns",
            "range": "± 33048638.047794677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80696.86082474227,
            "unit": "ns",
            "range": "± 16337.204298003357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400885.8125,
            "unit": "ns",
            "range": "± 101905.46914276278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 402744.57731958764,
            "unit": "ns",
            "range": "± 106910.04409469625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361102.17,
            "unit": "ns",
            "range": "± 85815.74690998318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6316174.12,
            "unit": "ns",
            "range": "± 1222890.2390702313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6109010.479591837,
            "unit": "ns",
            "range": "± 1208694.7330194623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29928.762626262625,
            "unit": "ns",
            "range": "± 5046.698445085635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125225.05555555556,
            "unit": "ns",
            "range": "± 24528.804363742212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123162.78494623656,
            "unit": "ns",
            "range": "± 21871.986924836197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120847.14835164836,
            "unit": "ns",
            "range": "± 19628.489711173304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9358.635416666666,
            "unit": "ns",
            "range": "± 1555.6336879043802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31304.994845360823,
            "unit": "ns",
            "range": "± 5695.533195195804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1877099.8402061856,
            "unit": "ns",
            "range": "± 470083.78816010663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4129141.4646464647,
            "unit": "ns",
            "range": "± 894186.0802157334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2781976.59375,
            "unit": "ns",
            "range": "± 763563.2516195029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 29122525.2,
            "unit": "ns",
            "range": "± 5959124.554566998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4612622.448979592,
            "unit": "ns",
            "range": "± 1048147.4632314178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4380051.769230769,
            "unit": "ns",
            "range": "± 962221.1403832983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5541151.97,
            "unit": "ns",
            "range": "± 1249323.3363475504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6006554.479591837,
            "unit": "ns",
            "range": "± 1283755.2048103204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37615746.1368421,
            "unit": "ns",
            "range": "± 7064680.468798125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5566895.936941965,
            "unit": "ns",
            "range": "± 91153.03492143274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1690182.3800223214,
            "unit": "ns",
            "range": "± 29036.82651996377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1101158.1201171875,
            "unit": "ns",
            "range": "± 23937.984545709725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554687.748799887,
            "unit": "ns",
            "range": "± 135931.9989687755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795648.9126209078,
            "unit": "ns",
            "range": "± 18747.043988066227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 687865.7149188702,
            "unit": "ns",
            "range": "± 7633.021333899517"
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
          "id": "79e3da1f81939b2cbff2072ceaf3e826c9605ae1",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:46:12+09:00",
          "tree_id": "818a89bc250a78dac60ec9541135a29007fc1f48",
          "url": "https://github.com/OnedgeLee/libplanet/commit/79e3da1f81939b2cbff2072ceaf3e826c9605ae1"
        },
        "date": 1703034782436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11911201.907216495,
            "unit": "ns",
            "range": "± 2175345.14389571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32648932.764367815,
            "unit": "ns",
            "range": "± 5135936.117378792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77611528.63829787,
            "unit": "ns",
            "range": "± 9725241.546035247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139466218.12222221,
            "unit": "ns",
            "range": "± 17152106.272648133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 324900130.4347826,
            "unit": "ns",
            "range": "± 44795930.34900742"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76878.33695652174,
            "unit": "ns",
            "range": "± 18594.540751638193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387529.23,
            "unit": "ns",
            "range": "± 109082.63583839369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364017.75,
            "unit": "ns",
            "range": "± 85149.04242586704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341581.58247422683,
            "unit": "ns",
            "range": "± 81247.69204717837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6361205.71,
            "unit": "ns",
            "range": "± 1345592.4156916216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5786913.928571428,
            "unit": "ns",
            "range": "± 1227449.1604126636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29748.884210526317,
            "unit": "ns",
            "range": "± 5402.122338770746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124836.17894736842,
            "unit": "ns",
            "range": "± 23807.098085100475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115573.27659574468,
            "unit": "ns",
            "range": "± 21795.811756180225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115438.74489795919,
            "unit": "ns",
            "range": "± 31070.15858805406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7576.55376344086,
            "unit": "ns",
            "range": "± 1611.9923222764041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22003.87634408602,
            "unit": "ns",
            "range": "± 3703.4416423281145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759497.8775510204,
            "unit": "ns",
            "range": "± 533901.7784858135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3853436.0505050505,
            "unit": "ns",
            "range": "± 944470.3153445576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3513628.051020408,
            "unit": "ns",
            "range": "± 918198.0967631843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33617647.84269663,
            "unit": "ns",
            "range": "± 7931969.828076848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4816853.12,
            "unit": "ns",
            "range": "± 1028111.6535758657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5035844.235632184,
            "unit": "ns",
            "range": "± 1166598.7673554649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5710868.885416667,
            "unit": "ns",
            "range": "± 1134216.925724179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6660832.275862069,
            "unit": "ns",
            "range": "± 1222383.7546914718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38209480.6,
            "unit": "ns",
            "range": "± 7233371.499376816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5558089.203515625,
            "unit": "ns",
            "range": "± 304466.6865060817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1744855.3407118055,
            "unit": "ns",
            "range": "± 99555.8740988797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064191.2387695312,
            "unit": "ns",
            "range": "± 19897.789792012114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637048.5087890625,
            "unit": "ns",
            "range": "± 107271.45287999962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776156.6997767857,
            "unit": "ns",
            "range": "± 14796.716935596036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706180.8530344203,
            "unit": "ns",
            "range": "± 33811.83348230173"
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
          "id": "a9f38c5e8f9827f6c3367596653dc38ee471a083",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T10:10:26+09:00",
          "tree_id": "e1e2b0830d5e102edfe9c47ff470680fe5c0bdcb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9f38c5e8f9827f6c3367596653dc38ee471a083"
        },
        "date": 1703035918065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10531350.989361702,
            "unit": "ns",
            "range": "± 2587549.3571674093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21139615.75862069,
            "unit": "ns",
            "range": "± 478898.8678072474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52359757.5,
            "unit": "ns",
            "range": "± 737068.8743927374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105500629.98,
            "unit": "ns",
            "range": "± 1529204.5789572303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212534280.85714287,
            "unit": "ns",
            "range": "± 3208374.935923238"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81859.51111111112,
            "unit": "ns",
            "range": "± 7496.3243266275185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347816.1443298969,
            "unit": "ns",
            "range": "± 49715.219278571545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359467.71649484534,
            "unit": "ns",
            "range": "± 66335.06794427359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359000.4052631579,
            "unit": "ns",
            "range": "± 66199.91011227967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4831394.489583333,
            "unit": "ns",
            "range": "± 434623.75806148036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3881145.3969072164,
            "unit": "ns",
            "range": "± 273008.54337755643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23518.106382978724,
            "unit": "ns",
            "range": "± 4150.81214612658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112303.91666666667,
            "unit": "ns",
            "range": "± 23631.29704201019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113606.9587628866,
            "unit": "ns",
            "range": "± 16924.268118664644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121463.76262626263,
            "unit": "ns",
            "range": "± 21503.254472519166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7570.715789473684,
            "unit": "ns",
            "range": "± 1456.1882452482248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20813.295454545456,
            "unit": "ns",
            "range": "± 2574.7760583755044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570467.6304347827,
            "unit": "ns",
            "range": "± 159608.03213426954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3074691.436170213,
            "unit": "ns",
            "range": "± 334278.61962214264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3004495.4505494507,
            "unit": "ns",
            "range": "± 522593.10963732185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28678546.366666667,
            "unit": "ns",
            "range": "± 4720481.091137128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370635.153846154,
            "unit": "ns",
            "range": "± 84327.48457754082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625849.066666667,
            "unit": "ns",
            "range": "± 463680.84951738524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4482021.215189873,
            "unit": "ns",
            "range": "± 230579.549514366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4629116.483146068,
            "unit": "ns",
            "range": "± 333590.28744731814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34616899.24226804,
            "unit": "ns",
            "range": "± 5175670.722704247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5851782.358072917,
            "unit": "ns",
            "range": "± 100372.71986761807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1782596.618774414,
            "unit": "ns",
            "range": "± 55384.66631170046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082768.6374162945,
            "unit": "ns",
            "range": "± 8230.163724861433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911016.304163491,
            "unit": "ns",
            "range": "± 153466.9955227612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 951224.0056280838,
            "unit": "ns",
            "range": "± 48357.874460331026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770129.3166140292,
            "unit": "ns",
            "range": "± 29528.86513642064"
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
          "id": "29841ffe3333f99c0d030304d681fb4de4a0fcc3",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T12:01:47+09:00",
          "tree_id": "2064cf1d1f036048323a5446513a98801372d083",
          "url": "https://github.com/OnedgeLee/libplanet/commit/29841ffe3333f99c0d030304d681fb4de4a0fcc3"
        },
        "date": 1703042222820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7544462.346153846,
            "unit": "ns",
            "range": "± 43673.76678252471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19034813.066666666,
            "unit": "ns",
            "range": "± 250306.0055045386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46342040.538461536,
            "unit": "ns",
            "range": "± 679528.9305829953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94170398.16666667,
            "unit": "ns",
            "range": "± 1203250.7058443609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192576406.15,
            "unit": "ns",
            "range": "± 4327675.675135707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36276.06896551724,
            "unit": "ns",
            "range": "± 4758.447772592526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218824.7105263158,
            "unit": "ns",
            "range": "± 13709.801671435687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227975.64583333334,
            "unit": "ns",
            "range": "± 17973.905166264707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217527.95876288658,
            "unit": "ns",
            "range": "± 13592.456642624069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3940349.769230769,
            "unit": "ns",
            "range": "± 39896.174992418026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3619491.088235294,
            "unit": "ns",
            "range": "± 72585.75381493501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16281.90625,
            "unit": "ns",
            "range": "± 2860.4620645443574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74391.11111111111,
            "unit": "ns",
            "range": "± 10168.858147213019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76345.43814432989,
            "unit": "ns",
            "range": "± 8688.295506521059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80810.9375,
            "unit": "ns",
            "range": "± 13000.720556397107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6941.382978723404,
            "unit": "ns",
            "range": "± 1035.8141580562324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16763.949494949495,
            "unit": "ns",
            "range": "± 4709.3747979131085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1115013.3144329898,
            "unit": "ns",
            "range": "± 107948.25207423171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2343831.5568181816,
            "unit": "ns",
            "range": "± 125347.04363365688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1804136.5625,
            "unit": "ns",
            "range": "± 134835.7986708912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18853894.015789475,
            "unit": "ns",
            "range": "± 2340505.5993748256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2854402.64,
            "unit": "ns",
            "range": "± 108478.51262840875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2954069.1,
            "unit": "ns",
            "range": "± 71453.29324007203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3536389.5714285714,
            "unit": "ns",
            "range": "± 53362.60221636683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3681154.2467532465,
            "unit": "ns",
            "range": "± 186596.03667415903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21730195.152631577,
            "unit": "ns",
            "range": "± 2379978.946673799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4623872.011135727,
            "unit": "ns",
            "range": "± 218551.82572891974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400067.5622702206,
            "unit": "ns",
            "range": "± 27969.603112747343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 918813.8318256579,
            "unit": "ns",
            "range": "± 19952.679561737288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2161390.550899621,
            "unit": "ns",
            "range": "± 150473.97196280846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648694.5374348959,
            "unit": "ns",
            "range": "± 8207.188449147783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 628140.5742076527,
            "unit": "ns",
            "range": "± 35753.40124240467"
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
          "id": "dcf9af1d7b33ed3fae96166a9477049cf99232c0",
          "message": "test: Move GossipConsensusMessageCommunicatorTest port number to avoid collision",
          "timestamp": "2023-12-20T12:52:35+09:00",
          "tree_id": "f017054cfa0654b669128d937a55937cce1d598c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dcf9af1d7b33ed3fae96166a9477049cf99232c0"
        },
        "date": 1703045521627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8131877.214285715,
            "unit": "ns",
            "range": "± 454105.76379589236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21885991.454545453,
            "unit": "ns",
            "range": "± 2422744.653312889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47605853.6097561,
            "unit": "ns",
            "range": "± 1532097.9783222394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96359819.02325581,
            "unit": "ns",
            "range": "± 3570732.4660403356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197771067.45333335,
            "unit": "ns",
            "range": "± 9915421.588020617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35035.13333333333,
            "unit": "ns",
            "range": "± 3175.732884360551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223925.28494623656,
            "unit": "ns",
            "range": "± 18923.873927126304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216116.01546391752,
            "unit": "ns",
            "range": "± 14945.019543252389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193436.93956043955,
            "unit": "ns",
            "range": "± 13800.644898948094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3877562.425925926,
            "unit": "ns",
            "range": "± 102558.21926253397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3467148.617647059,
            "unit": "ns",
            "range": "± 89246.19660956773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12868.488372093023,
            "unit": "ns",
            "range": "± 1095.0093283963229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62255.608695652176,
            "unit": "ns",
            "range": "± 9537.151252917323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59954.03296703297,
            "unit": "ns",
            "range": "± 11194.172174693349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63244.18041237113,
            "unit": "ns",
            "range": "± 11857.88730352291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3734.846153846154,
            "unit": "ns",
            "range": "± 603.2340603977295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13653.432989690722,
            "unit": "ns",
            "range": "± 1703.941270183241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1195474.731958763,
            "unit": "ns",
            "range": "± 146587.16223160506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2271224.326530612,
            "unit": "ns",
            "range": "± 137240.9576005238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1812130.494949495,
            "unit": "ns",
            "range": "± 195599.7091309956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19227230.829787236,
            "unit": "ns",
            "range": "± 2199008.285725057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2914319.9285714286,
            "unit": "ns",
            "range": "± 81796.98859300137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3025343.212121212,
            "unit": "ns",
            "range": "± 93800.24494096402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3774082.227272727,
            "unit": "ns",
            "range": "± 176443.7475295255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931037.5306122447,
            "unit": "ns",
            "range": "± 368644.6669917145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23023303.958333332,
            "unit": "ns",
            "range": "± 3603465.73569113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4417131.29765625,
            "unit": "ns",
            "range": "± 132175.22954346903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1380344.4146984012,
            "unit": "ns",
            "range": "± 50476.470499018265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915404.2577148437,
            "unit": "ns",
            "range": "± 39434.92890871502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2423055.5048940373,
            "unit": "ns",
            "range": "± 218080.27496262194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905436.9344880179,
            "unit": "ns",
            "range": "± 87045.34315333467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751692.8662712191,
            "unit": "ns",
            "range": "± 39305.193551839584"
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
          "id": "484bd89379abe12ffe00c621c9599ec1dcc46b21",
          "message": "test: Add missing collection",
          "timestamp": "2023-12-20T18:02:15+09:00",
          "tree_id": "394e27468b5a33b7680bf7949241538ab06bfb9b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/484bd89379abe12ffe00c621c9599ec1dcc46b21"
        },
        "date": 1703063730725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7741892.347826087,
            "unit": "ns",
            "range": "± 193060.6624595701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18673592.57142857,
            "unit": "ns",
            "range": "± 427141.410625986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46354871,
            "unit": "ns",
            "range": "± 564569.3501457549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93172077.6875,
            "unit": "ns",
            "range": "± 1797699.0191187817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182527357.53846154,
            "unit": "ns",
            "range": "± 2023843.7929731475"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43548.114583333336,
            "unit": "ns",
            "range": "± 13580.161069015956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218649.91578947369,
            "unit": "ns",
            "range": "± 20846.393637118254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217517.44210526315,
            "unit": "ns",
            "range": "± 25962.640938150238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204430.28421052633,
            "unit": "ns",
            "range": "± 26292.424733267475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3850444.3,
            "unit": "ns",
            "range": "± 77096.41900353364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3450574.8103448274,
            "unit": "ns",
            "range": "± 98489.83860027077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12168.849315068494,
            "unit": "ns",
            "range": "± 617.8463192420209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56517.306818181816,
            "unit": "ns",
            "range": "± 3635.276951481959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51270.9,
            "unit": "ns",
            "range": "± 2248.525563601511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59536.94565217391,
            "unit": "ns",
            "range": "± 11064.242924959139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3178.303370786517,
            "unit": "ns",
            "range": "± 347.44448230467447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11651.95061728395,
            "unit": "ns",
            "range": "± 615.9340447895896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1075197.2422680412,
            "unit": "ns",
            "range": "± 112257.04910905357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2223149.0434782607,
            "unit": "ns",
            "range": "± 99638.45525012136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1758727.9895833333,
            "unit": "ns",
            "range": "± 140390.03314896792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19376656.102272727,
            "unit": "ns",
            "range": "± 2343397.7433901033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2849932,
            "unit": "ns",
            "range": "± 116970.29043065326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2957145.5454545454,
            "unit": "ns",
            "range": "± 134432.89103594594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3523916.720588235,
            "unit": "ns",
            "range": "± 161579.2767562413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3631018.5584415584,
            "unit": "ns",
            "range": "± 184845.89423280008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22094063.436170213,
            "unit": "ns",
            "range": "± 2824766.499126205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4167241.2161458335,
            "unit": "ns",
            "range": "± 69159.19113288666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1468515.3992069128,
            "unit": "ns",
            "range": "± 46093.10613781056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 929347.0305338542,
            "unit": "ns",
            "range": "± 16197.024746871173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2044582.8763020833,
            "unit": "ns",
            "range": "± 38101.95011502891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624961.4249441965,
            "unit": "ns",
            "range": "± 6493.411566105033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563866.49609375,
            "unit": "ns",
            "range": "± 5247.073131657399"
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
          "id": "2e49acb146b21689f7bfa37b00b7f9c4a3cda3e2",
          "message": "test: Remove Transport dispose",
          "timestamp": "2023-12-20T17:56:45+09:00",
          "tree_id": "ec14eccfd23772f125e712e59e96453e0e0bbe2d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2e49acb146b21689f7bfa37b00b7f9c4a3cda3e2"
        },
        "date": 1703064021422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10717673.5,
            "unit": "ns",
            "range": "± 272287.2196245421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26643888.14285714,
            "unit": "ns",
            "range": "± 210456.9244998595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57377593.309278354,
            "unit": "ns",
            "range": "± 5277337.103465371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114620529.28571428,
            "unit": "ns",
            "range": "± 1982976.196632386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245186400.3,
            "unit": "ns",
            "range": "± 11458820.011092125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55916.92391304348,
            "unit": "ns",
            "range": "± 12851.650126430035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273875.13157894736,
            "unit": "ns",
            "range": "± 13959.440630476189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269882.85714285716,
            "unit": "ns",
            "range": "± 17110.679557627434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249022.1170212766,
            "unit": "ns",
            "range": "± 16113.206526202386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4908601.236842105,
            "unit": "ns",
            "range": "± 248335.34515842987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257748.806451613,
            "unit": "ns",
            "range": "± 193712.13838195868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18489.63440860215,
            "unit": "ns",
            "range": "± 3486.9475868710424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84358.13829787234,
            "unit": "ns",
            "range": "± 7964.066000832382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64422.52525252525,
            "unit": "ns",
            "range": "± 14196.488648457562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60459.62365591398,
            "unit": "ns",
            "range": "± 9032.825363174483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5099.871134020618,
            "unit": "ns",
            "range": "± 1632.020573550287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20485.541666666668,
            "unit": "ns",
            "range": "± 6805.260036667714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1233276.108695652,
            "unit": "ns",
            "range": "± 174572.81790516726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2980387.188888889,
            "unit": "ns",
            "range": "± 294354.92560199316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2342585.4646464647,
            "unit": "ns",
            "range": "± 296303.2870104381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 24397473.90425532,
            "unit": "ns",
            "range": "± 3754371.517800226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436192.4938271604,
            "unit": "ns",
            "range": "± 163681.67029932854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720007.7804878047,
            "unit": "ns",
            "range": "± 193871.201600955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4004989.8157894737,
            "unit": "ns",
            "range": "± 352005.1060608948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4143621.4583333335,
            "unit": "ns",
            "range": "± 535112.5452284224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28444225.71111111,
            "unit": "ns",
            "range": "± 4207870.013919435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5602187.190133427,
            "unit": "ns",
            "range": "± 647768.2786348911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1800588.0810441868,
            "unit": "ns",
            "range": "± 188470.08657416102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151328.7610987104,
            "unit": "ns",
            "range": "± 50575.510650615826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2502648.6515786084,
            "unit": "ns",
            "range": "± 299876.0544596857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 752907.8217673788,
            "unit": "ns",
            "range": "± 68640.50521252981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726580.5237210181,
            "unit": "ns",
            "range": "± 97942.52845847984"
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
          "id": "ada552213e6e7433859daf1ccdcc957d7b2eb1f1",
          "message": "tmp: ignore socket colliding tests",
          "timestamp": "2023-12-20T18:41:50+09:00",
          "tree_id": "de87cd28c42fefaef5cc162251cd3e3640256264",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ada552213e6e7433859daf1ccdcc957d7b2eb1f1"
        },
        "date": 1703066437376,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8497183.782051282,
            "unit": "ns",
            "range": "± 286059.5398427571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21545542.329545453,
            "unit": "ns",
            "range": "± 2292098.9451199463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52127965.625,
            "unit": "ns",
            "range": "± 3284405.479914892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105951114.47619048,
            "unit": "ns",
            "range": "± 7676811.893850847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213580244.61363637,
            "unit": "ns",
            "range": "± 7645950.430756961"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58065.934782608696,
            "unit": "ns",
            "range": "± 13508.875732093713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268683.3829787234,
            "unit": "ns",
            "range": "± 30944.70711768108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301133.3229166667,
            "unit": "ns",
            "range": "± 81293.16280578775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258310.5,
            "unit": "ns",
            "range": "± 35037.77748849566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4230891.456521739,
            "unit": "ns",
            "range": "± 247029.45666631588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3861679.131868132,
            "unit": "ns",
            "range": "± 241529.01828808198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26302.252525252527,
            "unit": "ns",
            "range": "± 11252.983756105405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92237.16304347826,
            "unit": "ns",
            "range": "± 13730.43127091107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82527.3762886598,
            "unit": "ns",
            "range": "± 16607.18677025209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78524.3125,
            "unit": "ns",
            "range": "± 15761.43936808905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5332.5,
            "unit": "ns",
            "range": "± 945.4246497849803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15173.139175257733,
            "unit": "ns",
            "range": "± 2231.6834508279426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1221683.8068181819,
            "unit": "ns",
            "range": "± 163534.50314366387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2587750.2921348317,
            "unit": "ns",
            "range": "± 342928.2836032525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2003900.7777777778,
            "unit": "ns",
            "range": "± 304522.4348338207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 45196808.109195404,
            "unit": "ns",
            "range": "± 29181745.3171039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3117180.494736842,
            "unit": "ns",
            "range": "± 190042.3347502247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3190741.3333333335,
            "unit": "ns",
            "range": "± 204880.53179505502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3836207.415492958,
            "unit": "ns",
            "range": "± 186714.0677318241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933932.663043478,
            "unit": "ns",
            "range": "± 275727.520066152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24600631.873626374,
            "unit": "ns",
            "range": "± 4136624.276851198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4658075.292299107,
            "unit": "ns",
            "range": "± 147683.47728871962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1372741.9866898148,
            "unit": "ns",
            "range": "± 37864.42446224128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889638.8354116586,
            "unit": "ns",
            "range": "± 11837.833938927217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998783.1469350962,
            "unit": "ns",
            "range": "± 28773.596781247586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636795.5940403293,
            "unit": "ns",
            "range": "± 21137.007630638887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563049.3152669271,
            "unit": "ns",
            "range": "± 5236.946447712133"
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
          "id": "2c202144fbcc5fffef6be1361b4428546023eb86",
          "message": "tmp: ignore socket colliding tests",
          "timestamp": "2023-12-20T18:53:40+09:00",
          "tree_id": "a8d146ea77a8f06fa1f43d666b5bb164bff62a9a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2c202144fbcc5fffef6be1361b4428546023eb86"
        },
        "date": 1703066992629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8317760.48,
            "unit": "ns",
            "range": "± 580822.8497804998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19680370.57894737,
            "unit": "ns",
            "range": "± 421466.5034941575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51699205.34210526,
            "unit": "ns",
            "range": "± 2600902.5561825912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103603117.95454545,
            "unit": "ns",
            "range": "± 6503452.292837179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211628644.3908046,
            "unit": "ns",
            "range": "± 11547015.178174648"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39107.739130434784,
            "unit": "ns",
            "range": "± 3590.8785094543055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243931.85869565216,
            "unit": "ns",
            "range": "± 18645.3639010289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232704.37894736842,
            "unit": "ns",
            "range": "± 18588.04366468949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224919.797979798,
            "unit": "ns",
            "range": "± 17132.11918815471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240891.928571428,
            "unit": "ns",
            "range": "± 35031.09595875397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3562261.706896552,
            "unit": "ns",
            "range": "± 86677.92384428497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14358.208791208792,
            "unit": "ns",
            "range": "± 1502.9837621395611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68557.22043010753,
            "unit": "ns",
            "range": "± 8237.87580176704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63427.47752808989,
            "unit": "ns",
            "range": "± 4609.124736910291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68435.5612244898,
            "unit": "ns",
            "range": "± 10424.879533103396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4110.163043478261,
            "unit": "ns",
            "range": "± 550.8709443240998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13401.951612903225,
            "unit": "ns",
            "range": "± 1380.9536994106097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1223473.551020408,
            "unit": "ns",
            "range": "± 140472.1222885521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508895.085858586,
            "unit": "ns",
            "range": "± 188442.32011208287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1886071.1326530613,
            "unit": "ns",
            "range": "± 156289.64552787764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20055607.989583332,
            "unit": "ns",
            "range": "± 2285085.4956611576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264092.9693877553,
            "unit": "ns",
            "range": "± 255043.43254496605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296743.636842105,
            "unit": "ns",
            "range": "± 207107.09411828307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3924627.1,
            "unit": "ns",
            "range": "± 105793.19008935668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4075487.9787234045,
            "unit": "ns",
            "range": "± 231811.64631754628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24268737.541666668,
            "unit": "ns",
            "range": "± 3466943.0196050387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4537710.065625,
            "unit": "ns",
            "range": "± 74954.275333404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1461839.824584961,
            "unit": "ns",
            "range": "± 27732.068892742664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 953996.7908630371,
            "unit": "ns",
            "range": "± 29167.462629895766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570236.6814350327,
            "unit": "ns",
            "range": "± 54341.64813738813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828652.4916318696,
            "unit": "ns",
            "range": "± 35769.385759417026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746293.8080193015,
            "unit": "ns",
            "range": "± 14768.673191699801"
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
          "id": "f4bacf20b29df602f3791750c9abc5b0d4b228c4",
          "message": "tmp: Exclude Net Tests",
          "timestamp": "2023-12-21T02:30:30+09:00",
          "tree_id": "4b2b0f390fd4449d9e3320ac2311dac09de570de",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f4bacf20b29df602f3791750c9abc5b0d4b228c4"
        },
        "date": 1703094252311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7471232.066666666,
            "unit": "ns",
            "range": "± 22994.766800503192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18675695.333333332,
            "unit": "ns",
            "range": "± 387809.80124297744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48308331.13333333,
            "unit": "ns",
            "range": "± 1440998.318305337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91255691.06666666,
            "unit": "ns",
            "range": "± 1143385.7132862948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189728495.16666666,
            "unit": "ns",
            "range": "± 3848409.922814494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41109.94680851064,
            "unit": "ns",
            "range": "± 9744.173848325343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219484.06493506493,
            "unit": "ns",
            "range": "± 11047.450075324195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229808,
            "unit": "ns",
            "range": "± 11199.997488030256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238081.2068965517,
            "unit": "ns",
            "range": "± 10216.219963489812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4035768.5,
            "unit": "ns",
            "range": "± 84524.72040213339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3547721.6739130435,
            "unit": "ns",
            "range": "± 89495.96992076955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12645.259036144578,
            "unit": "ns",
            "range": "± 814.7544234286922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58923.311111111114,
            "unit": "ns",
            "range": "± 3999.344695323221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73190.43478260869,
            "unit": "ns",
            "range": "± 7868.974774815901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70927.39583333333,
            "unit": "ns",
            "range": "± 13035.422619663912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4224.90625,
            "unit": "ns",
            "range": "± 1176.7704786998497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13170.094736842106,
            "unit": "ns",
            "range": "± 1893.0365793955098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1106503.5625,
            "unit": "ns",
            "range": "± 101035.29894310387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2438416.0222222223,
            "unit": "ns",
            "range": "± 150554.15332183486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855128.4536082475,
            "unit": "ns",
            "range": "± 160282.08455199777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20107366.71111111,
            "unit": "ns",
            "range": "± 2779695.4700321644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2816874.964285714,
            "unit": "ns",
            "range": "± 79363.7568972798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2996664.603773585,
            "unit": "ns",
            "range": "± 125001.73754674521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3503498.3333333335,
            "unit": "ns",
            "range": "± 105793.6394826228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3620078.6086956523,
            "unit": "ns",
            "range": "± 172409.483997462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21621077.532608695,
            "unit": "ns",
            "range": "± 2808027.2323591993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4561235.295200893,
            "unit": "ns",
            "range": "± 56226.815703234344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381727.4021484375,
            "unit": "ns",
            "range": "± 12413.199567191603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897556.8990652902,
            "unit": "ns",
            "range": "± 10257.064841348087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987825.822544643,
            "unit": "ns",
            "range": "± 22107.961201162867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632878.5263020833,
            "unit": "ns",
            "range": "± 8624.91172722698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569224.8779994419,
            "unit": "ns",
            "range": "± 4936.92132235033"
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
          "id": "7633ed612a637d035a72d432079de825cab93a63",
          "message": "tmp: build artifact",
          "timestamp": "2023-12-21T09:32:17+09:00",
          "tree_id": "0a31c83828b067f824f5ac1db77e75077c36dd29",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7633ed612a637d035a72d432079de825cab93a63"
        },
        "date": 1703120717015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12825800.43478261,
            "unit": "ns",
            "range": "± 315065.3569947939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32296791.815789472,
            "unit": "ns",
            "range": "± 583245.7833549584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77979288.94117647,
            "unit": "ns",
            "range": "± 2496986.752016493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 168399348.61578947,
            "unit": "ns",
            "range": "± 15425600.751351397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 333321994.9782609,
            "unit": "ns",
            "range": "± 8307030.588292168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103676.57894736843,
            "unit": "ns",
            "range": "± 37061.084819690834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364006.29069767444,
            "unit": "ns",
            "range": "± 28428.955749114124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358719.8076923077,
            "unit": "ns",
            "range": "± 46972.47592904033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330643.80337078654,
            "unit": "ns",
            "range": "± 18417.945482108484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6279559.5,
            "unit": "ns",
            "range": "± 328630.4568095827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5534543.53125,
            "unit": "ns",
            "range": "± 172134.8893629615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24676.336734693876,
            "unit": "ns",
            "range": "± 4847.899967695392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97105.92696629213,
            "unit": "ns",
            "range": "± 11596.637030041826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99292.95604395604,
            "unit": "ns",
            "range": "± 16362.080944069086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100949.03191489361,
            "unit": "ns",
            "range": "± 13334.870191563632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7388.3125,
            "unit": "ns",
            "range": "± 1430.577846536147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20395.226315789474,
            "unit": "ns",
            "range": "± 2511.5126807517236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2764281.8958333335,
            "unit": "ns",
            "range": "± 736243.327074033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5730797.86,
            "unit": "ns",
            "range": "± 1309992.3897487444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4645804.153061224,
            "unit": "ns",
            "range": "± 1181661.994584016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 52619336.212765954,
            "unit": "ns",
            "range": "± 10711228.189250434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5230537.5,
            "unit": "ns",
            "range": "± 462363.85829135415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5248757.293478261,
            "unit": "ns",
            "range": "± 581460.1013443626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5922955.994505495,
            "unit": "ns",
            "range": "± 324347.12118967617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6097688.734177215,
            "unit": "ns",
            "range": "± 432113.50645892014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35736687.37777778,
            "unit": "ns",
            "range": "± 4251707.214874617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7130897.077752976,
            "unit": "ns",
            "range": "± 162500.25529192644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017450.3524305555,
            "unit": "ns",
            "range": "± 42237.26021777563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387355.2289341518,
            "unit": "ns",
            "range": "± 35353.47366704301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2736809.1943359375,
            "unit": "ns",
            "range": "± 20796.11065735645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 699802.8054097494,
            "unit": "ns",
            "range": "± 62650.839404321894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803333.4247265625,
            "unit": "ns",
            "range": "± 170913.92750719588"
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
          "id": "26291e671333a0dd3b6ded350ad733010f6ffbde",
          "message": "test: NetMQTransport.Dispose() called once after tests done",
          "timestamp": "2023-12-21T13:47:28+09:00",
          "tree_id": "8129edb9e70a230bfd687148b8a1411e0b5bf54a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/26291e671333a0dd3b6ded350ad733010f6ffbde"
        },
        "date": 1703134929500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8256589.544943821,
            "unit": "ns",
            "range": "± 719830.0396561094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19075118.833333332,
            "unit": "ns",
            "range": "± 307061.1694320081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46118041.666666664,
            "unit": "ns",
            "range": "± 354217.9010853818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93725045.09375,
            "unit": "ns",
            "range": "± 2833944.4961602874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191822423.52380952,
            "unit": "ns",
            "range": "± 4416461.398401957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36284.6,
            "unit": "ns",
            "range": "± 3816.9114523173657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227447.1326530612,
            "unit": "ns",
            "range": "± 22852.368281086026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216866.24468085106,
            "unit": "ns",
            "range": "± 19094.512225585546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202996.41666666666,
            "unit": "ns",
            "range": "± 18683.217273189137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3856949.714285714,
            "unit": "ns",
            "range": "± 57380.69196090343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3366351.2,
            "unit": "ns",
            "range": "± 88065.82172206952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12642.739130434782,
            "unit": "ns",
            "range": "± 986.5444395460528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58269.13043478261,
            "unit": "ns",
            "range": "± 5239.357336685591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54565.37234042553,
            "unit": "ns",
            "range": "± 4582.145731535956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60066.9381443299,
            "unit": "ns",
            "range": "± 9544.823945048298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3560.4285714285716,
            "unit": "ns",
            "range": "± 571.033354598041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12632.884210526316,
            "unit": "ns",
            "range": "± 1158.6678783877694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1101411.3,
            "unit": "ns",
            "range": "± 113144.14765026537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2334899.8333333335,
            "unit": "ns",
            "range": "± 174878.7989335933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709371.857142857,
            "unit": "ns",
            "range": "± 95321.82738475094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18776486.106382977,
            "unit": "ns",
            "range": "± 2149378.685485891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896955.2333333334,
            "unit": "ns",
            "range": "± 77836.83926968901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2912466.525,
            "unit": "ns",
            "range": "± 86960.09908425214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3553779.45,
            "unit": "ns",
            "range": "± 70911.77247484148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3620896.2291666665,
            "unit": "ns",
            "range": "± 125547.03777439389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21806906.347826086,
            "unit": "ns",
            "range": "± 2934560.9186746883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423519.319824219,
            "unit": "ns",
            "range": "± 86521.84042438772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1363114.0469447544,
            "unit": "ns",
            "range": "± 38626.152059111395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 889446.2181693412,
            "unit": "ns",
            "range": "± 30051.415093698146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987088.6643229167,
            "unit": "ns",
            "range": "± 35852.34662739774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646417.0075094289,
            "unit": "ns",
            "range": "± 18894.758900966757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584217.7095788043,
            "unit": "ns",
            "range": "± 14760.356029419812"
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
          "id": "825dbb9ab3c6534a1e002610c35c8d31b1b12c12",
          "message": "test: Move ports",
          "timestamp": "2023-12-21T14:04:38+09:00",
          "tree_id": "2ce7730151c412527689761891b7298cbfe2cf6f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/825dbb9ab3c6534a1e002610c35c8d31b1b12c12"
        },
        "date": 1703135839252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7905896.090909091,
            "unit": "ns",
            "range": "± 192160.92486740404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20189192.318181816,
            "unit": "ns",
            "range": "± 473573.49027395004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49828881.05555555,
            "unit": "ns",
            "range": "± 1032538.8653375788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102193466.8478261,
            "unit": "ns",
            "range": "± 3913783.33735986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211350111.67391303,
            "unit": "ns",
            "range": "± 4734682.415871203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41674,
            "unit": "ns",
            "range": "± 8832.416724524051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229937.2564102564,
            "unit": "ns",
            "range": "± 11473.864445339386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218859.37234042553,
            "unit": "ns",
            "range": "± 16873.389665886967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198805.96842105262,
            "unit": "ns",
            "range": "± 21526.211239033746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854680.5833333335,
            "unit": "ns",
            "range": "± 47418.6105380162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3340090.9615384615,
            "unit": "ns",
            "range": "± 33527.199372587485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13034.544943820225,
            "unit": "ns",
            "range": "± 1460.1247449051643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65765.46875,
            "unit": "ns",
            "range": "± 8687.113763867812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59736.09793814433,
            "unit": "ns",
            "range": "± 10561.182367183723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67467.27551020408,
            "unit": "ns",
            "range": "± 12702.106299708123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3729.7083333333335,
            "unit": "ns",
            "range": "± 863.1471901882229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13616.104166666666,
            "unit": "ns",
            "range": "± 2542.712726614574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1096831.393939394,
            "unit": "ns",
            "range": "± 124165.52486966562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2226733.244680851,
            "unit": "ns",
            "range": "± 86682.70666869867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1806549.308080808,
            "unit": "ns",
            "range": "± 173008.91002038703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18377510.5989011,
            "unit": "ns",
            "range": "± 1788015.991594688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3051534.488888889,
            "unit": "ns",
            "range": "± 179869.1443309502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3096183.28,
            "unit": "ns",
            "range": "± 156356.04772074847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3617384.6071428573,
            "unit": "ns",
            "range": "± 102754.17224703472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3887938.285714286,
            "unit": "ns",
            "range": "± 63048.46233277599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22486297.416666668,
            "unit": "ns",
            "range": "± 3203669.0992466905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4339207.040104167,
            "unit": "ns",
            "range": "± 40079.0182258429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361871.1734375,
            "unit": "ns",
            "range": "± 18606.415359853574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880308.4085286459,
            "unit": "ns",
            "range": "± 11473.32471229067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010415.4774816176,
            "unit": "ns",
            "range": "± 39325.788515835535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638039.6520647322,
            "unit": "ns",
            "range": "± 5265.919873641669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585174.1356026785,
            "unit": "ns",
            "range": "± 4519.266689446022"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f65e3c4a30957a21e3ae8378545a9fc14cc7a7c8",
          "message": "fix: scale parallelism",
          "timestamp": "2023-12-26T16:56:17+09:00",
          "tree_id": "5b86bbc19b99862f769e33d27e6787161b5dd2b3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f65e3c4a30957a21e3ae8378545a9fc14cc7a7c8"
        },
        "date": 1703578216909,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591331,
            "unit": "ns",
            "range": "± 79278.09618467554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18640870.57142857,
            "unit": "ns",
            "range": "± 252111.00174250608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46362962.071428575,
            "unit": "ns",
            "range": "± 599068.3379725124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92575524.65384616,
            "unit": "ns",
            "range": "± 1168051.0784039544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191026624.56666666,
            "unit": "ns",
            "range": "± 5558034.301944893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34791.117021276594,
            "unit": "ns",
            "range": "± 3124.7531166353315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222466.13829787233,
            "unit": "ns",
            "range": "± 16105.122804745604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254028.1590909091,
            "unit": "ns",
            "range": "± 40959.6210226514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246002.47826086957,
            "unit": "ns",
            "range": "± 18717.602921912287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3919917.3620689656,
            "unit": "ns",
            "range": "± 114780.99780971839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835592.8139534886,
            "unit": "ns",
            "range": "± 231815.37827718505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16151.453608247422,
            "unit": "ns",
            "range": "± 4135.336682737721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77974.04081632652,
            "unit": "ns",
            "range": "± 17483.988566961973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91407.75342465754,
            "unit": "ns",
            "range": "± 4553.918205423709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60168.5376344086,
            "unit": "ns",
            "range": "± 10913.927265653794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3346.5164835164837,
            "unit": "ns",
            "range": "± 392.90118527683444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12099.977272727272,
            "unit": "ns",
            "range": "± 693.6930650100599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1081842.611111111,
            "unit": "ns",
            "range": "± 98636.78665048059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2268319.3488372094,
            "unit": "ns",
            "range": "± 123269.01952804807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682547.940860215,
            "unit": "ns",
            "range": "± 113629.63443167134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18559510.952631578,
            "unit": "ns",
            "range": "± 1960429.4412796055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2864214.923076923,
            "unit": "ns",
            "range": "± 133817.8846610791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2991564.840425532,
            "unit": "ns",
            "range": "± 193324.16671683657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3528045.3870967743,
            "unit": "ns",
            "range": "± 82020.49779279869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3650596.75,
            "unit": "ns",
            "range": "± 96242.83899058538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21992810.35483871,
            "unit": "ns",
            "range": "± 2646220.8692018352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4823263.88046875,
            "unit": "ns",
            "range": "± 372212.45913973433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1371899.20703125,
            "unit": "ns",
            "range": "± 16095.924844438638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 877873.5954938616,
            "unit": "ns",
            "range": "± 8518.537107297718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2006315.815234375,
            "unit": "ns",
            "range": "± 18287.061912610676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633083.9978966346,
            "unit": "ns",
            "range": "± 5324.649841963768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565657.6151692708,
            "unit": "ns",
            "range": "± 6101.022822310219"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "9a68e63c24b34dca76ff7b938611af74e8a60cc2",
          "message": "scale timeout",
          "timestamp": "2023-12-26T17:21:19+09:00",
          "tree_id": "f77f0ef7bbaf5d161e3f60fab58495d263b9df09",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9a68e63c24b34dca76ff7b938611af74e8a60cc2"
        },
        "date": 1703579660724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7636495.076923077,
            "unit": "ns",
            "range": "± 127485.74901432548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18485146.846153848,
            "unit": "ns",
            "range": "± 167938.11472972526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45886434.2,
            "unit": "ns",
            "range": "± 467519.9248800908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91706332.2,
            "unit": "ns",
            "range": "± 916145.3200806861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187548110.46153846,
            "unit": "ns",
            "range": "± 1713542.833898753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34028.123529411765,
            "unit": "ns",
            "range": "± 2070.448053513277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214843.64383561644,
            "unit": "ns",
            "range": "± 10285.198271423656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225900.98969072165,
            "unit": "ns",
            "range": "± 27336.627338797836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192092.78125,
            "unit": "ns",
            "range": "± 19482.707585096625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3812412.785714286,
            "unit": "ns",
            "range": "± 56753.60521002313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3425058.9,
            "unit": "ns",
            "range": "± 47337.52176324522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12720.148351648351,
            "unit": "ns",
            "range": "± 749.3341544127527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58673.73684210526,
            "unit": "ns",
            "range": "± 5184.298527018409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51428.693181818184,
            "unit": "ns",
            "range": "± 3036.0014476014394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66117.6170212766,
            "unit": "ns",
            "range": "± 14387.593461562328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3315.755319148936,
            "unit": "ns",
            "range": "± 383.8170959499399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12275.369565217392,
            "unit": "ns",
            "range": "± 977.4660188286057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066499.4444444445,
            "unit": "ns",
            "range": "± 92383.94034184821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2214817.966101695,
            "unit": "ns",
            "range": "± 93801.7919362264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702285.2978723405,
            "unit": "ns",
            "range": "± 104820.44838547915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18732048.36956522,
            "unit": "ns",
            "range": "± 2423145.110282047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2868465.356321839,
            "unit": "ns",
            "range": "± 155344.02333440576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3244214.5833333335,
            "unit": "ns",
            "range": "± 42082.96513157256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3536341.64,
            "unit": "ns",
            "range": "± 140695.0164107341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3651078.5918367347,
            "unit": "ns",
            "range": "± 145330.908622059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22360691.663265307,
            "unit": "ns",
            "range": "± 2980023.402948905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4332284.230989584,
            "unit": "ns",
            "range": "± 61673.05876619391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1302379.833984375,
            "unit": "ns",
            "range": "± 14189.039210496945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880784.1588541666,
            "unit": "ns",
            "range": "± 11363.602632407541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955264.2600097656,
            "unit": "ns",
            "range": "± 33602.60179369395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616032.9655949519,
            "unit": "ns",
            "range": "± 5728.314403815147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586642.162178147,
            "unit": "ns",
            "range": "± 26750.67601104409"
          }
        ]
      }
    ]
  }
}