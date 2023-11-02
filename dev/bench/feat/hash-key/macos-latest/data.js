window.BENCHMARK_DATA = {
  "lastUpdate": 1698916657152,
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
        "date": 1698914969515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8246520.594594595,
            "unit": "ns",
            "range": "± 276298.43194205186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21125532.35714286,
            "unit": "ns",
            "range": "± 230437.54503873285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49283008.71428572,
            "unit": "ns",
            "range": "± 571936.5771382722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101854463.73333333,
            "unit": "ns",
            "range": "± 1869552.0519279656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206954039.5,
            "unit": "ns",
            "range": "± 2492503.748585929"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54777.08791208791,
            "unit": "ns",
            "range": "± 5798.953698054986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295059.467032967,
            "unit": "ns",
            "range": "± 18094.088662353886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288120.2842105263,
            "unit": "ns",
            "range": "± 19476.28073010706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273743.5,
            "unit": "ns",
            "range": "± 11955.080310817457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4158143.966666667,
            "unit": "ns",
            "range": "± 124477.81870976143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3554414.1428571427,
            "unit": "ns",
            "range": "± 54937.14633155735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16725.15053763441,
            "unit": "ns",
            "range": "± 1846.517968373685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83227.92857142857,
            "unit": "ns",
            "range": "± 10151.106202733534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76326.6313131313,
            "unit": "ns",
            "range": "± 8924.771262885442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82842.54945054946,
            "unit": "ns",
            "range": "± 8144.126425104354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4179.702127659574,
            "unit": "ns",
            "range": "± 439.77819017609795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17330.516129032258,
            "unit": "ns",
            "range": "± 2079.176392191322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1546754.8535353534,
            "unit": "ns",
            "range": "± 205526.65041930164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2841566.063829787,
            "unit": "ns",
            "range": "± 196741.96266544887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2381424.244680851,
            "unit": "ns",
            "range": "± 223537.9810540821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11564913.451612903,
            "unit": "ns",
            "range": "± 2572732.5730522843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3286188.811764706,
            "unit": "ns",
            "range": "± 200434.38214909128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3508555.3947368423,
            "unit": "ns",
            "range": "± 120143.48384750479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4385136.884615385,
            "unit": "ns",
            "range": "± 204638.3465066094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6172876.601123596,
            "unit": "ns",
            "range": "± 2141122.36884817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15498437.117021276,
            "unit": "ns",
            "range": "± 1722110.8529110125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5449485.653645833,
            "unit": "ns",
            "range": "± 47880.32939900051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1781002.5532552083,
            "unit": "ns",
            "range": "± 31389.404363878846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1066158.3787560095,
            "unit": "ns",
            "range": "± 3095.9885005788155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618312.467247596,
            "unit": "ns",
            "range": "± 10273.76598775347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852581.8309044471,
            "unit": "ns",
            "range": "± 2739.0582899866017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 707543.2288643973,
            "unit": "ns",
            "range": "± 3885.526478826234"
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
        "date": 1698916628213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10528196.733333332,
            "unit": "ns",
            "range": "± 78753.32646531434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25832911,
            "unit": "ns",
            "range": "± 221421.42675207177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63119109.56666667,
            "unit": "ns",
            "range": "± 802362.5649981138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121836833.36734694,
            "unit": "ns",
            "range": "± 7793818.190177065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241482571.625,
            "unit": "ns",
            "range": "± 32010962.240604952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56514.7311827957,
            "unit": "ns",
            "range": "± 9652.128765132122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297690.57608695654,
            "unit": "ns",
            "range": "± 26070.4268258933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248035.54545454544,
            "unit": "ns",
            "range": "± 30494.96621902447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258150.38043478262,
            "unit": "ns",
            "range": "± 20039.390100522814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4554852.344444444,
            "unit": "ns",
            "range": "± 323793.00132876064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5451222.0051546395,
            "unit": "ns",
            "range": "± 1444011.4589102566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17926.775280898877,
            "unit": "ns",
            "range": "± 5470.829295106932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109871.10674157304,
            "unit": "ns",
            "range": "± 31254.678139155854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97119.65882352942,
            "unit": "ns",
            "range": "± 10349.138902013312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101573.98876404495,
            "unit": "ns",
            "range": "± 11491.321642968012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8041.229166666667,
            "unit": "ns",
            "range": "± 1174.2472749465076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17785.682795698925,
            "unit": "ns",
            "range": "± 3898.404667983171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1803252.822580645,
            "unit": "ns",
            "range": "± 388243.9825025754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3236093.2849462368,
            "unit": "ns",
            "range": "± 270976.5909554233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2252379.163043478,
            "unit": "ns",
            "range": "± 132078.78826597513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12380527.918367347,
            "unit": "ns",
            "range": "± 3048335.6995355156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3538422.095744681,
            "unit": "ns",
            "range": "± 232951.66927969208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3330167.89,
            "unit": "ns",
            "range": "± 293150.0420809082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4583447.6344086025,
            "unit": "ns",
            "range": "± 332228.06004518433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4685934.858974359,
            "unit": "ns",
            "range": "± 240514.38116317394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14111436.747252747,
            "unit": "ns",
            "range": "± 1678247.1132657204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5725673.744665659,
            "unit": "ns",
            "range": "± 421080.5585735243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1704975.1389134987,
            "unit": "ns",
            "range": "± 161407.54937464817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1009067.7919335938,
            "unit": "ns",
            "range": "± 124169.2235697818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2061125.4910902388,
            "unit": "ns",
            "range": "± 108576.89698939788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642754.0441151494,
            "unit": "ns",
            "range": "± 15934.657068988516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580851.3368489583,
            "unit": "ns",
            "range": "± 9294.753490214202"
          }
        ]
      }
    ]
  }
}