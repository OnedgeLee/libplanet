window.BENCHMARK_DATA = {
  "lastUpdate": 1698916336870,
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
          "id": "bfc838289232e1276f81b5e8d69b9d8c3199ec0d",
          "message": "feat: Add KeyConverters.ToHashKey()",
          "timestamp": "2023-11-02T17:33:18+09:00",
          "tree_id": "31d3ff5ac0e2ba809e1e238bd415e704f6cf5907",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bfc838289232e1276f81b5e8d69b9d8c3199ec0d"
        },
        "date": 1698915048960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55230.90425531915,
            "unit": "ns",
            "range": "± 4694.858086577269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6015956.372395833,
            "unit": "ns",
            "range": "± 88347.64591648178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850331.069921875,
            "unit": "ns",
            "range": "± 26450.56445988367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299330.881966146,
            "unit": "ns",
            "range": "± 24238.154344235118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2879670.0846354165,
            "unit": "ns",
            "range": "± 48658.41627691007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932273.0981445312,
            "unit": "ns",
            "range": "± 10059.425255871429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867974.185686384,
            "unit": "ns",
            "range": "± 6438.537943406783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9601835.341463415,
            "unit": "ns",
            "range": "± 505825.5563889865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26860016.64,
            "unit": "ns",
            "range": "± 656454.091884312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65180048.47058824,
            "unit": "ns",
            "range": "± 1323033.3494125402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129226227.76190476,
            "unit": "ns",
            "range": "± 2999762.432357451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265550523.46666667,
            "unit": "ns",
            "range": "± 3793160.601816886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4012894.060240964,
            "unit": "ns",
            "range": "± 213692.47219597615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4253164.25,
            "unit": "ns",
            "range": "± 227812.33566512988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5031408.47,
            "unit": "ns",
            "range": "± 325515.46991516405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4889883.306122449,
            "unit": "ns",
            "range": "± 283497.60450503085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12552986.46031746,
            "unit": "ns",
            "range": "± 572256.2506282683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315141.2738095238,
            "unit": "ns",
            "range": "± 16385.06097091221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301430.8645833333,
            "unit": "ns",
            "range": "± 17960.64510658309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268825.0101010101,
            "unit": "ns",
            "range": "± 20211.71898570331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5188509.111111111,
            "unit": "ns",
            "range": "± 143315.06750817163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4656211.142857143,
            "unit": "ns",
            "range": "± 66558.93510942838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24623.077777777777,
            "unit": "ns",
            "range": "± 2215.8256899550265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98194.07291666667,
            "unit": "ns",
            "range": "± 8312.69052555035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87193.02083333333,
            "unit": "ns",
            "range": "± 6919.599407296361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99691.40217391304,
            "unit": "ns",
            "range": "± 9830.469864637991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5817.752688172043,
            "unit": "ns",
            "range": "± 763.1780044215849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22758.484536082473,
            "unit": "ns",
            "range": "± 2312.4246524364585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698584.3936170214,
            "unit": "ns",
            "range": "± 138223.29624285933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3263290.095959596,
            "unit": "ns",
            "range": "± 237701.30588957775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2547063.340425532,
            "unit": "ns",
            "range": "± 183914.34867377236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11023086.505494505,
            "unit": "ns",
            "range": "± 625479.7996057705"
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
          "id": "9e66af3720beed66b6f997328251c4e8843388f3",
          "message": "feat: Add KeyConverters.ToHashKey()",
          "timestamp": "2023-11-02T17:57:04+09:00",
          "tree_id": "43efb003686d887e2051792a00e0f6f1f36df4c3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9e66af3720beed66b6f997328251c4e8843388f3"
        },
        "date": 1698916323135,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54313.44680851064,
            "unit": "ns",
            "range": "± 4011.385314614084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5363461.792668269,
            "unit": "ns",
            "range": "± 11910.188972800745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1633327.6337139423,
            "unit": "ns",
            "range": "± 6862.2002926836285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156342.1658653845,
            "unit": "ns",
            "range": "± 1452.5773392812646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592872.4104352677,
            "unit": "ns",
            "range": "± 1585.2330655487103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826257.6142578125,
            "unit": "ns",
            "range": "± 307.9339623367214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756189.8420973558,
            "unit": "ns",
            "range": "± 911.7051981746623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8598375.23076923,
            "unit": "ns",
            "range": "± 234422.09997307128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22943184.666666668,
            "unit": "ns",
            "range": "± 218418.01876077199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58136696.53333333,
            "unit": "ns",
            "range": "± 560351.4798105187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115762494.4,
            "unit": "ns",
            "range": "± 717867.5173952762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231449667.93333334,
            "unit": "ns",
            "range": "± 1039541.2252423434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3809776.933333333,
            "unit": "ns",
            "range": "± 59879.6836324626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3940404.4444444445,
            "unit": "ns",
            "range": "± 131646.83855060194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4571322.1875,
            "unit": "ns",
            "range": "± 112683.50188640333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4674438.757575758,
            "unit": "ns",
            "range": "± 144850.8226883848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11024173,
            "unit": "ns",
            "range": "± 247193.25046034635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282962.48148148146,
            "unit": "ns",
            "range": "± 11914.224857391302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272341.0869565217,
            "unit": "ns",
            "range": "± 9731.156678595904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250339.3417721519,
            "unit": "ns",
            "range": "± 12905.412116415138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4538615.4,
            "unit": "ns",
            "range": "± 63047.13068898763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096612.1333333333,
            "unit": "ns",
            "range": "± 45022.20733604166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23357.389473684212,
            "unit": "ns",
            "range": "± 2546.365295678716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95802.63917525773,
            "unit": "ns",
            "range": "± 7552.762206065142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80588.9574468085,
            "unit": "ns",
            "range": "± 5071.910146661135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97362.1888888889,
            "unit": "ns",
            "range": "± 7445.303736447899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7369.768421052631,
            "unit": "ns",
            "range": "± 921.8021370355057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23126.561855670105,
            "unit": "ns",
            "range": "± 3314.1669353399634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557115.8636363635,
            "unit": "ns",
            "range": "± 77522.27896149267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876107.6,
            "unit": "ns",
            "range": "± 68978.3485673826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2314842.95,
            "unit": "ns",
            "range": "± 120746.95389914198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9391007.892857144,
            "unit": "ns",
            "range": "± 263575.8319698863"
          }
        ]
      }
    ]
  }
}