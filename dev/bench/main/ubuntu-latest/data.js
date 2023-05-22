window.BENCHMARK_DATA = {
  "lastUpdate": 1684718891457,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "508cdf7ef668ce4bd2268956e50e8059c453464a",
          "message": "Merge pull request #3139 from dahlia/main",
          "timestamp": "2023-05-05T02:32:59+09:00",
          "tree_id": "128924b65b11b0d0687f3552fc28ec882283dc27",
          "url": "https://github.com/OnedgeLee/libplanet/commit/508cdf7ef668ce4bd2268956e50e8059c453464a"
        },
        "date": 1683521557529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343067.8125,
            "unit": "ns",
            "range": "± 10292.130891428185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327999.25641025644,
            "unit": "ns",
            "range": "± 11466.01332937328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278696.4736842105,
            "unit": "ns",
            "range": "± 5450.354752658267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5162123.214285715,
            "unit": "ns",
            "range": "± 41552.33546186261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4560666.933333334,
            "unit": "ns",
            "range": "± 56400.112343437584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22945.64210526316,
            "unit": "ns",
            "range": "± 1814.4517776803648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102991.47727272728,
            "unit": "ns",
            "range": "± 5548.759068015103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94629.65217391304,
            "unit": "ns",
            "range": "± 2387.667549736194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114008.19791666667,
            "unit": "ns",
            "range": "± 14387.313269258619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6816.020833333333,
            "unit": "ns",
            "range": "± 944.3560766794501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21832.936842105264,
            "unit": "ns",
            "range": "± 1976.1970184025458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4180849.2,
            "unit": "ns",
            "range": "± 71602.3428399618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4392749.666666667,
            "unit": "ns",
            "range": "± 79340.31232313957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5067266.344827586,
            "unit": "ns",
            "range": "± 145112.22579494314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5469591.52631579,
            "unit": "ns",
            "range": "± 120314.6261919456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8319132.238095238,
            "unit": "ns",
            "range": "± 189921.8325659019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7027176.141666667,
            "unit": "ns",
            "range": "± 16886.463831094225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2188312.8921875,
            "unit": "ns",
            "range": "± 6010.821427027124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1598276.2837611607,
            "unit": "ns",
            "range": "± 5482.182320052075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3133114.8209635415,
            "unit": "ns",
            "range": "± 6991.49770347925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004382.58046875,
            "unit": "ns",
            "range": "± 4078.417289182367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898061.9370442708,
            "unit": "ns",
            "range": "± 1751.9005701979006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58820.936170212764,
            "unit": "ns",
            "range": "± 3782.745585936881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9467437.19047619,
            "unit": "ns",
            "range": "± 188725.01922787534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28353230.533333335,
            "unit": "ns",
            "range": "± 256729.04055801342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69346853.6,
            "unit": "ns",
            "range": "± 272291.60764565837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137513980.46666667,
            "unit": "ns",
            "range": "± 788386.870508551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274796547.8666667,
            "unit": "ns",
            "range": "± 2001504.8449900628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710513.28125,
            "unit": "ns",
            "range": "± 97118.72927382324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3148907.3333333335,
            "unit": "ns",
            "range": "± 113510.58913334199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2753794.842696629,
            "unit": "ns",
            "range": "± 147772.81091470807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6360610.642857143,
            "unit": "ns",
            "range": "± 181611.5300965659"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684285705561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3439716.727272727,
            "unit": "ns",
            "range": "± 83480.16296854847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587420.933333333,
            "unit": "ns",
            "range": "± 65762.51420774459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4389215.976744186,
            "unit": "ns",
            "range": "± 160806.761998826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4434708.15942029,
            "unit": "ns",
            "range": "± 211927.58235827685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7283783.68,
            "unit": "ns",
            "range": "± 193622.56658030165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297143.8904109589,
            "unit": "ns",
            "range": "± 14652.105440820938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287077.02127659577,
            "unit": "ns",
            "range": "± 10660.415503953342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258500.01162790696,
            "unit": "ns",
            "range": "± 14057.079602563412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426128.928571428,
            "unit": "ns",
            "range": "± 67002.12945348975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4071946,
            "unit": "ns",
            "range": "± 82376.61573315001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19703.510869565216,
            "unit": "ns",
            "range": "± 1778.805899600061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93351.98936170213,
            "unit": "ns",
            "range": "± 8718.187034695266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76613.84057971014,
            "unit": "ns",
            "range": "± 3709.0062035980836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103517.25510204081,
            "unit": "ns",
            "range": "± 13419.279682691367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5443.221052631579,
            "unit": "ns",
            "range": "± 792.6318962521801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19022.041666666668,
            "unit": "ns",
            "range": "± 2016.2042916366477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5947159.623325893,
            "unit": "ns",
            "range": "± 28234.964734896515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868278.2177083334,
            "unit": "ns",
            "range": "± 7780.155886353832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337854.291015625,
            "unit": "ns",
            "range": "± 4592.194973796061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605209.954947917,
            "unit": "ns",
            "range": "± 5644.389439913711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827377.0395182292,
            "unit": "ns",
            "range": "± 1581.0564464458982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755814.7821568081,
            "unit": "ns",
            "range": "± 882.8095090320807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7963946.894736842,
            "unit": "ns",
            "range": "± 172465.68571615592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21982416.35714286,
            "unit": "ns",
            "range": "± 163949.8455089272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54911304.4,
            "unit": "ns",
            "range": "± 606636.3356330192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111474134.13333334,
            "unit": "ns",
            "range": "± 1523851.4686242912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218127293.5,
            "unit": "ns",
            "range": "± 3227914.8923431565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442780.918367347,
            "unit": "ns",
            "range": "± 105297.2139154897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717169,
            "unit": "ns",
            "range": "± 86103.1450862859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291741.2911392404,
            "unit": "ns",
            "range": "± 117903.63115503424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5494646.826086956,
            "unit": "ns",
            "range": "± 137686.61574738618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51102.79518072289,
            "unit": "ns",
            "range": "± 2709.67099415443"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684718878552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3617894.785714286,
            "unit": "ns",
            "range": "± 40414.92153453792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3909654.464285714,
            "unit": "ns",
            "range": "± 110363.85370672175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4569679.238095238,
            "unit": "ns",
            "range": "± 103494.91719157262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4792036.521739131,
            "unit": "ns",
            "range": "± 100882.78588759674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7201646.133333334,
            "unit": "ns",
            "range": "± 132510.0362791258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310041.1,
            "unit": "ns",
            "range": "± 13643.043147656377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274160.86666666664,
            "unit": "ns",
            "range": "± 6414.356719074815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268643.75757575757,
            "unit": "ns",
            "range": "± 8515.193865344108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4249476.266666667,
            "unit": "ns",
            "range": "± 46383.55051010875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923398.5714285714,
            "unit": "ns",
            "range": "± 52155.077917413066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18060.936170212764,
            "unit": "ns",
            "range": "± 1177.8145682458983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85842.63333333333,
            "unit": "ns",
            "range": "± 4651.578138508659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74557.71739130435,
            "unit": "ns",
            "range": "± 2831.0501911877423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97804.77551020408,
            "unit": "ns",
            "range": "± 14135.634536266818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5004.163265306122,
            "unit": "ns",
            "range": "± 914.3118046719202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17228.375,
            "unit": "ns",
            "range": "± 1270.3854802464693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5978234.216517857,
            "unit": "ns",
            "range": "± 35478.56321277211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872337.1708984375,
            "unit": "ns",
            "range": "± 883.7421965832185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374216.1380208333,
            "unit": "ns",
            "range": "± 2919.509832233599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633499.1473214286,
            "unit": "ns",
            "range": "± 7971.805439929033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832862.942578125,
            "unit": "ns",
            "range": "± 1318.6441147385235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761500.9794921875,
            "unit": "ns",
            "range": "± 1233.3151905559057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8457134.7,
            "unit": "ns",
            "range": "± 193313.4982678055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21801530.46153846,
            "unit": "ns",
            "range": "± 215815.16357198483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55047791.78571428,
            "unit": "ns",
            "range": "± 333146.6447497671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112195551.33333333,
            "unit": "ns",
            "range": "± 417952.5474510348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220940212.66666666,
            "unit": "ns",
            "range": "± 1605256.460222285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462465.1515151516,
            "unit": "ns",
            "range": "± 138678.64310482412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2768192.217391304,
            "unit": "ns",
            "range": "± 67087.1646279244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2323727.6506024096,
            "unit": "ns",
            "range": "± 123779.66864036232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5439595.2727272725,
            "unit": "ns",
            "range": "± 126895.9261427898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49017.69014084507,
            "unit": "ns",
            "range": "± 2398.06540832724"
          }
        ]
      }
    ]
  }
}