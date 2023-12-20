window.BENCHMARK_DATA = {
  "lastUpdate": 1703032570432,
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
      }
    ]
  }
}