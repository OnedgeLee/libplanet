window.BENCHMARK_DATA = {
  "lastUpdate": 1680704967508,
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
          "id": "695d8a7538fa374d9ce0e065713598a897591162",
          "message": "Release 0.53.5",
          "timestamp": "2023-04-05T22:21:46+09:00",
          "tree_id": "7b45ecadf4c2594c5db3e5de0410033bfa7919bc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/695d8a7538fa374d9ce0e065713598a897591162"
        },
        "date": 1680702135868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4514799.204081632,
            "unit": "ns",
            "range": "± 453751.93223376514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6178940.775,
            "unit": "ns",
            "range": "± 323275.240831333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 35581696.943298966,
            "unit": "ns",
            "range": "± 2291496.525663419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8476237.3125,
            "unit": "ns",
            "range": "± 570917.7222718066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38283982.969387755,
            "unit": "ns",
            "range": "± 2609318.6579351644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9874332.607594937,
            "unit": "ns",
            "range": "± 507201.5225684756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25936549.506849315,
            "unit": "ns",
            "range": "± 1282651.9148742524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69688771.37333333,
            "unit": "ns",
            "range": "± 3494958.481542461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143781107.57,
            "unit": "ns",
            "range": "± 9729458.12126922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292272999.04545456,
            "unit": "ns",
            "range": "± 7074389.048598643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742115.7142857143,
            "unit": "ns",
            "range": "± 190716.32332800614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3389852.5208333335,
            "unit": "ns",
            "range": "± 266323.11116117577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2801705.2474226803,
            "unit": "ns",
            "range": "± 253500.09689273417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7392392.864583333,
            "unit": "ns",
            "range": "± 859076.1915946639"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58475.32258064516,
            "unit": "ns",
            "range": "± 7104.798619000386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8382958.048611111,
            "unit": "ns",
            "range": "± 341723.84835572494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2490607.0912760417,
            "unit": "ns",
            "range": "± 72908.8258895316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1774723.0236002605,
            "unit": "ns",
            "range": "± 23429.036953252475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3706331.2877604165,
            "unit": "ns",
            "range": "± 37396.05925879011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1078621.0263020834,
            "unit": "ns",
            "range": "± 15371.33438853361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999412.1850585938,
            "unit": "ns",
            "range": "± 19434.966541777805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241306.86666666667,
            "unit": "ns",
            "range": "± 25290.075214677494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256117.33695652173,
            "unit": "ns",
            "range": "± 50034.48028566541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224657.83870967742,
            "unit": "ns",
            "range": "± 44638.23342871833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 16327218.066666666,
            "unit": "ns",
            "range": "± 804619.3451534527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12230410.315068493,
            "unit": "ns",
            "range": "± 608303.3100533922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24226.854166666668,
            "unit": "ns",
            "range": "± 7421.957365574362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66725.30526315789,
            "unit": "ns",
            "range": "± 13210.954524498837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48221.36046511628,
            "unit": "ns",
            "range": "± 5924.012751530922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130655.1875,
            "unit": "ns",
            "range": "± 37470.1577284651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5764.586206896552,
            "unit": "ns",
            "range": "± 584.7769312673182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20796.149425287356,
            "unit": "ns",
            "range": "± 3762.1981066514195"
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
          "id": "01ba017610312d2da3894b59f5ecc1716a8c7ade",
          "message": "Release 0.53.5",
          "timestamp": "2023-04-05T23:09:24+09:00",
          "tree_id": "4a38dfbb6f68312d8bd131928d8568059d1d68ed",
          "url": "https://github.com/OnedgeLee/libplanet/commit/01ba017610312d2da3894b59f5ecc1716a8c7ade"
        },
        "date": 1680704952957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3848271.25,
            "unit": "ns",
            "range": "± 303776.23441112495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6417201.395604395,
            "unit": "ns",
            "range": "± 386452.8604367874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31060491.68041237,
            "unit": "ns",
            "range": "± 1850687.93327646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7512615.063829787,
            "unit": "ns",
            "range": "± 477139.9830845796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 41112854.01010101,
            "unit": "ns",
            "range": "± 3043250.68749905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9001723.010416666,
            "unit": "ns",
            "range": "± 736297.0443035169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24655468.81,
            "unit": "ns",
            "range": "± 2004078.7729926812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65540905.216216214,
            "unit": "ns",
            "range": "± 2221967.202910909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122498130.38,
            "unit": "ns",
            "range": "± 7386897.748939047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254378253.0952381,
            "unit": "ns",
            "range": "± 13596619.644750608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634190.6451612904,
            "unit": "ns",
            "range": "± 179997.62657158932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3207949.0212765955,
            "unit": "ns",
            "range": "± 267564.31540786027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2631776.1836734693,
            "unit": "ns",
            "range": "± 336550.04869943904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6844917.263157895,
            "unit": "ns",
            "range": "± 605475.0210467989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61900.81318681319,
            "unit": "ns",
            "range": "± 7314.673524896664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7013158.219512195,
            "unit": "ns",
            "range": "± 249266.3532317824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234891.4831814235,
            "unit": "ns",
            "range": "± 73931.25967715317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1600280.9819335938,
            "unit": "ns",
            "range": "± 44778.72976076325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2985129.978385417,
            "unit": "ns",
            "range": "± 37853.00808154963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011152.4677408854,
            "unit": "ns",
            "range": "± 14421.180013884035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927730.5806640625,
            "unit": "ns",
            "range": "± 24376.545547160313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229637.53125,
            "unit": "ns",
            "range": "± 20814.66814934685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227873.40625,
            "unit": "ns",
            "range": "± 22418.41778518543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210514.90425531915,
            "unit": "ns",
            "range": "± 24379.868899798857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14652920.170212766,
            "unit": "ns",
            "range": "± 965244.5918422113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11485274.0625,
            "unit": "ns",
            "range": "± 965957.2176369724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26396.632653061224,
            "unit": "ns",
            "range": "± 6412.430710845694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68984.42708333333,
            "unit": "ns",
            "range": "± 9065.680058381886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49969.33,
            "unit": "ns",
            "range": "± 9875.707325190848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119627.9255319149,
            "unit": "ns",
            "range": "± 20010.602868640362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12027.888888888889,
            "unit": "ns",
            "range": "± 5963.260187092035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26171.536082474227,
            "unit": "ns",
            "range": "± 6925.930621978198"
          }
        ]
      }
    ]
  }
}