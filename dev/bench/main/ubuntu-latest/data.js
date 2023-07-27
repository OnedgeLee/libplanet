window.BENCHMARK_DATA = {
  "lastUpdate": 1690502028787,
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
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c41af682bb608c821a4c96c09d9b9e563cdc09a7",
          "message": "Merge pull request #3204 from greymistcube/prepare/2.0.0\n\n🔧 Prepare 2.0.0",
          "timestamp": "2023-06-07T21:50:07+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c41af682bb608c821a4c96c09d9b9e563cdc09a7"
        },
        "date": 1686240221244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3711726.1666666665,
            "unit": "ns",
            "range": "± 55676.14554780715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3895442.5,
            "unit": "ns",
            "range": "± 59977.632786987924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4726425.458333333,
            "unit": "ns",
            "range": "± 122512.81723504588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4896085.083333333,
            "unit": "ns",
            "range": "± 43873.033609306454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7405396.266666667,
            "unit": "ns",
            "range": "± 217429.83242906968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6119765.547916667,
            "unit": "ns",
            "range": "± 50937.737680557584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893686.1675180288,
            "unit": "ns",
            "range": "± 1521.7678844098384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396620.969140625,
            "unit": "ns",
            "range": "± 3528.9816399366177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660930.630859375,
            "unit": "ns",
            "range": "± 1845.870266620699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860906.2876674107,
            "unit": "ns",
            "range": "± 386.9849310050226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767112.5524739583,
            "unit": "ns",
            "range": "± 717.132450504809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298524.9117647059,
            "unit": "ns",
            "range": "± 8751.265748684576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284673.16279069765,
            "unit": "ns",
            "range": "± 10133.52785589508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268323.04545454547,
            "unit": "ns",
            "range": "± 9906.06777394905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4586644.866666666,
            "unit": "ns",
            "range": "± 33628.55364730282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173115.8666666667,
            "unit": "ns",
            "range": "± 52421.11715012059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22131.635416666668,
            "unit": "ns",
            "range": "± 2206.0342132184514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95402.95505617978,
            "unit": "ns",
            "range": "± 5261.104202520159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82719.29166666667,
            "unit": "ns",
            "range": "± 5874.416912460634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99579.51685393258,
            "unit": "ns",
            "range": "± 11794.641904765253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6491.68085106383,
            "unit": "ns",
            "range": "± 657.2761684139012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20717.494623655915,
            "unit": "ns",
            "range": "± 1574.6875578546003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507797.3229166667,
            "unit": "ns",
            "range": "± 87711.31551791992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877165.2592592593,
            "unit": "ns",
            "range": "± 79900.5086724891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2417637.43902439,
            "unit": "ns",
            "range": "± 119920.45735682081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5929720.466666667,
            "unit": "ns",
            "range": "± 221169.62203276966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51402.05434782609,
            "unit": "ns",
            "range": "± 3101.9768718508153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8615953.92857143,
            "unit": "ns",
            "range": "± 98718.12253580648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23343946.466666665,
            "unit": "ns",
            "range": "± 237834.96762457144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57251140.06666667,
            "unit": "ns",
            "range": "± 281481.6057635197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114540306.26666667,
            "unit": "ns",
            "range": "± 625569.753824631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229529800.33333334,
            "unit": "ns",
            "range": "± 1905364.0120417061"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c41af682bb608c821a4c96c09d9b9e563cdc09a7",
          "message": "Merge pull request #3204 from greymistcube/prepare/2.0.0\n\n🔧 Prepare 2.0.0",
          "timestamp": "2023-06-07T21:50:07+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c41af682bb608c821a4c96c09d9b9e563cdc09a7"
        },
        "date": 1686240555178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3608557.707070707,
            "unit": "ns",
            "range": "± 328183.62185617647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695052.8842105265,
            "unit": "ns",
            "range": "± 345345.0744180149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4997885.6,
            "unit": "ns",
            "range": "± 381059.2196453817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4817297.083333333,
            "unit": "ns",
            "range": "± 585402.5001130269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9320584.47368421,
            "unit": "ns",
            "range": "± 677844.2253712625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7492762.245192308,
            "unit": "ns",
            "range": "± 66544.75916468023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2428649.4997209823,
            "unit": "ns",
            "range": "± 67799.0083446831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1745296.1359863281,
            "unit": "ns",
            "range": "± 32733.631106562025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3380934.282986111,
            "unit": "ns",
            "range": "± 69233.23863038514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1092750.1164981618,
            "unit": "ns",
            "range": "± 21617.879867502637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003522.5889485677,
            "unit": "ns",
            "range": "± 25645.514567193757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 385556.47959183675,
            "unit": "ns",
            "range": "± 51617.900875654144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385496.8854166667,
            "unit": "ns",
            "range": "± 43781.73475149072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361797.5806451613,
            "unit": "ns",
            "range": "± 46173.300106729905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5344257.757575758,
            "unit": "ns",
            "range": "± 460737.31412516086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5012506.752688172,
            "unit": "ns",
            "range": "± 383400.81346120004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29297.663157894738,
            "unit": "ns",
            "range": "± 11100.006087414975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125080.39361702128,
            "unit": "ns",
            "range": "± 19022.073523790066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133352.898989899,
            "unit": "ns",
            "range": "± 29416.10874892307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143060.93333333332,
            "unit": "ns",
            "range": "± 23277.572663330448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7584.571428571428,
            "unit": "ns",
            "range": "± 1951.5900704744852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26508.297872340427,
            "unit": "ns",
            "range": "± 7085.6577446105075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770782.6344086023,
            "unit": "ns",
            "range": "± 162186.90581553453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3496573.8865979384,
            "unit": "ns",
            "range": "± 271672.1541249933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2771161.8229166665,
            "unit": "ns",
            "range": "± 254090.2150641111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7329372.708333333,
            "unit": "ns",
            "range": "± 654466.4208761036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71169.71875,
            "unit": "ns",
            "range": "± 16815.87532736042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9849792.078125,
            "unit": "ns",
            "range": "± 454182.43788572337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26432236.197916668,
            "unit": "ns",
            "range": "± 1794334.1617745482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65183389.29292929,
            "unit": "ns",
            "range": "± 4112170.717163725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125497607.64935064,
            "unit": "ns",
            "range": "± 6426465.269292836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249832796.70588234,
            "unit": "ns",
            "range": "± 11853286.538985608"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "848022c87ceca17c886bf4d4f4f3c63c26325761",
          "message": "Merge pull request #3201 from riemannulus/fee-collect\n\nintroduce: fee collector",
          "timestamp": "2023-06-14T10:47:05+08:00",
          "tree_id": "b25599c654e1481c16ce4f6b78e1d40792340bc3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/848022c87ceca17c886bf4d4f4f3c63c26325761"
        },
        "date": 1686712573825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371506.808080808,
            "unit": "ns",
            "range": "± 123114.13980088464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2540163.65,
            "unit": "ns",
            "range": "± 55955.07092139569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138303.3066666666,
            "unit": "ns",
            "range": "± 107262.65107782169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5409458.074074074,
            "unit": "ns",
            "range": "± 147335.5336622254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250835.4,
            "unit": "ns",
            "range": "± 40256.2688672744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338892.7714285715,
            "unit": "ns",
            "range": "± 108358.27959545775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4221457,
            "unit": "ns",
            "range": "± 65232.37846455437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4166808.534883721,
            "unit": "ns",
            "range": "± 152493.29496475274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6876734.52,
            "unit": "ns",
            "range": "± 173175.17555742027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7602265.357142857,
            "unit": "ns",
            "range": "± 13024.358673755778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19410322.714285713,
            "unit": "ns",
            "range": "± 75723.38997493907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50361436.6,
            "unit": "ns",
            "range": "± 345644.83535762544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100302886.8,
            "unit": "ns",
            "range": "± 425637.83276332135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200020249.13333333,
            "unit": "ns",
            "range": "± 1116185.9951089735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6112350.606971154,
            "unit": "ns",
            "range": "± 22800.418354068825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869794.1212239584,
            "unit": "ns",
            "range": "± 5330.23962283455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388377.0804036458,
            "unit": "ns",
            "range": "± 1612.4463027224117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559655.142578125,
            "unit": "ns",
            "range": "± 1452.1949209829097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798125.9520786831,
            "unit": "ns",
            "range": "± 464.1772176432948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730648.7343098958,
            "unit": "ns",
            "range": "± 460.7599962213974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45773.06172839506,
            "unit": "ns",
            "range": "± 2353.0098775062497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287327.84444444446,
            "unit": "ns",
            "range": "± 10812.446720742206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265851,
            "unit": "ns",
            "range": "± 9961.442178674219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228366.3076923077,
            "unit": "ns",
            "range": "± 1660.169538762803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4185935.066666667,
            "unit": "ns",
            "range": "± 26473.696904303946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3807230.846153846,
            "unit": "ns",
            "range": "± 28677.913600441003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17238.635416666668,
            "unit": "ns",
            "range": "± 1062.6754232377393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81401.4875,
            "unit": "ns",
            "range": "± 4079.7403770516535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70418.17647058824,
            "unit": "ns",
            "range": "± 1047.2282604149702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89612.5306122449,
            "unit": "ns",
            "range": "± 12926.786398875243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4251.081632653061,
            "unit": "ns",
            "range": "± 633.2089063181329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17518.58762886598,
            "unit": "ns",
            "range": "± 1433.4155360578548"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "848022c87ceca17c886bf4d4f4f3c63c26325761",
          "message": "Merge pull request #3201 from riemannulus/fee-collect\n\nintroduce: fee collector",
          "timestamp": "2023-06-14T10:47:05+08:00",
          "tree_id": "b25599c654e1481c16ce4f6b78e1d40792340bc3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/848022c87ceca17c886bf4d4f4f3c63c26325761"
        },
        "date": 1686712858321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597624.7978723405,
            "unit": "ns",
            "range": "± 231590.97847990814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3075185.7708333335,
            "unit": "ns",
            "range": "± 481069.074913659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2443439.3125,
            "unit": "ns",
            "range": "± 322418.3674260024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6402853.34375,
            "unit": "ns",
            "range": "± 769004.4428166203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3323772.659574468,
            "unit": "ns",
            "range": "± 320379.80909876706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787585.4516129033,
            "unit": "ns",
            "range": "± 343911.4425860212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5174068.333333333,
            "unit": "ns",
            "range": "± 608857.0559595093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4502005.551020408,
            "unit": "ns",
            "range": "± 504482.8163101587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8051259.474747474,
            "unit": "ns",
            "range": "± 731510.4910245279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8975440.260416666,
            "unit": "ns",
            "range": "± 839194.1101417822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23971211.44897959,
            "unit": "ns",
            "range": "± 2027494.141238234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67120550.15,
            "unit": "ns",
            "range": "± 2982900.4049120434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130945249.7979798,
            "unit": "ns",
            "range": "± 8648833.04246267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230106064.3,
            "unit": "ns",
            "range": "± 8083999.17512583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6657249.645582933,
            "unit": "ns",
            "range": "± 258563.02444662637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1997248.2804129464,
            "unit": "ns",
            "range": "± 20111.521579094988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1475757.5147879464,
            "unit": "ns",
            "range": "± 18441.266643425864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2875540.269270833,
            "unit": "ns",
            "range": "± 49610.97741442177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924905.0729758523,
            "unit": "ns",
            "range": "± 22620.481594414367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866311.3725585938,
            "unit": "ns",
            "range": "± 10612.91448696604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56861.52222222222,
            "unit": "ns",
            "range": "± 11830.983978214115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335012.8969072165,
            "unit": "ns",
            "range": "± 55465.308407689336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318351.03225806454,
            "unit": "ns",
            "range": "± 41552.78618489029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273091.6170212766,
            "unit": "ns",
            "range": "± 34660.20046356239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4567343.422680412,
            "unit": "ns",
            "range": "± 482359.836284806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4047092.4175824174,
            "unit": "ns",
            "range": "± 379087.0555869153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29501.646464646463,
            "unit": "ns",
            "range": "± 10504.929816775075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109188.31313131313,
            "unit": "ns",
            "range": "± 20917.24494123355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93487.50537634408,
            "unit": "ns",
            "range": "± 18161.30086536351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121998.5,
            "unit": "ns",
            "range": "± 28397.303474653698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5232.123456790124,
            "unit": "ns",
            "range": "± 898.0368781781187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28135.464646464647,
            "unit": "ns",
            "range": "± 11405.655460155642"
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
          "id": "6570787e9df245ff0db9c317937cc434df793fef",
          "message": "Merge pull request #3213 from OnedgeLee/prepare/2.1.0\n\n🔧 Prepare 2.1.0",
          "timestamp": "2023-06-14T13:59:49+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6570787e9df245ff0db9c317937cc434df793fef"
        },
        "date": 1686892602786,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3111731.2666666666,
            "unit": "ns",
            "range": "± 30308.793868792476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3327983.714285714,
            "unit": "ns",
            "range": "± 78316.83705190274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4143391.2666666666,
            "unit": "ns",
            "range": "± 58634.20754433696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4034297.861111111,
            "unit": "ns",
            "range": "± 86440.94849818501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6561357.851851852,
            "unit": "ns",
            "range": "± 145933.56574606756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6197045.384895833,
            "unit": "ns",
            "range": "± 38344.22598652544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972328.6,
            "unit": "ns",
            "range": "± 3663.716162738125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365643.9291294643,
            "unit": "ns",
            "range": "± 3080.2175439878415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607707.40625,
            "unit": "ns",
            "range": "± 4756.658588272518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821944.7654947917,
            "unit": "ns",
            "range": "± 1150.5674815437626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737816.1258370535,
            "unit": "ns",
            "range": "± 938.6374656097677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271185.5238095238,
            "unit": "ns",
            "range": "± 6170.069704784928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258031.84,
            "unit": "ns",
            "range": "± 10397.269184958604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228366.58333333334,
            "unit": "ns",
            "range": "± 3398.1010862574767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4125811.4,
            "unit": "ns",
            "range": "± 50650.920248021444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833491.1333333333,
            "unit": "ns",
            "range": "± 46743.20706624755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15394.76119402985,
            "unit": "ns",
            "range": "± 744.7122911924431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81584.55769230769,
            "unit": "ns",
            "range": "± 3360.538013727024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69647.05882352941,
            "unit": "ns",
            "range": "± 980.5085715196626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75149.98611111111,
            "unit": "ns",
            "range": "± 3369.83783825608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4222.90625,
            "unit": "ns",
            "range": "± 460.55607300477425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15307.291666666666,
            "unit": "ns",
            "range": "± 975.5154957539836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318374.6153846155,
            "unit": "ns",
            "range": "± 67432.90722573872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547795.375,
            "unit": "ns",
            "range": "± 89030.79647664636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2272943,
            "unit": "ns",
            "range": "± 51579.64179178081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5161670.535714285,
            "unit": "ns",
            "range": "± 144715.32062754108"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44809.98888888889,
            "unit": "ns",
            "range": "± 2272.663192960893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7612941.153846154,
            "unit": "ns",
            "range": "± 5751.320918510139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21432078.42857143,
            "unit": "ns",
            "range": "± 129978.94699451215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48391567.85714286,
            "unit": "ns",
            "range": "± 271681.87748537445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96795164.14285715,
            "unit": "ns",
            "range": "± 488894.3069289276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192196758.2857143,
            "unit": "ns",
            "range": "± 926219.7372023867"
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
          "id": "6570787e9df245ff0db9c317937cc434df793fef",
          "message": "Merge pull request #3213 from OnedgeLee/prepare/2.1.0\n\n🔧 Prepare 2.1.0",
          "timestamp": "2023-06-14T13:59:49+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6570787e9df245ff0db9c317937cc434df793fef"
        },
        "date": 1686892699904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3362595.9411764704,
            "unit": "ns",
            "range": "± 106724.98046762349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3747136.789473684,
            "unit": "ns",
            "range": "± 81507.24875165599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4387795.551020408,
            "unit": "ns",
            "range": "± 173794.54019246658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4518495.228571429,
            "unit": "ns",
            "range": "± 146376.93467211645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7003619.090909091,
            "unit": "ns",
            "range": "± 169690.66016919733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6026133.690104167,
            "unit": "ns",
            "range": "± 23530.800546353406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924472.904296875,
            "unit": "ns",
            "range": "± 4018.703518360635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344162.8015625,
            "unit": "ns",
            "range": "± 2930.8220955994084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622643.74921875,
            "unit": "ns",
            "range": "± 2195.1814317142757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824526.874860491,
            "unit": "ns",
            "range": "± 266.77820555987404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762768.4033900669,
            "unit": "ns",
            "range": "± 2658.2883506242138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282043.94736842107,
            "unit": "ns",
            "range": "± 9653.95028780018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271125.6060606061,
            "unit": "ns",
            "range": "± 8433.563540770421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241290.0285714286,
            "unit": "ns",
            "range": "± 7927.350976155885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4406567.571428572,
            "unit": "ns",
            "range": "± 52776.392188341015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953238.8421052634,
            "unit": "ns",
            "range": "± 82255.11514878785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19581.82608695652,
            "unit": "ns",
            "range": "± 1526.2344714130836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86703.88311688312,
            "unit": "ns",
            "range": "± 4420.947716253019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73974.18309859154,
            "unit": "ns",
            "range": "± 3635.17294660244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93333.05102040817,
            "unit": "ns",
            "range": "± 11012.21812948648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5356.183673469388,
            "unit": "ns",
            "range": "± 830.9903338718381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18886.436170212764,
            "unit": "ns",
            "range": "± 1795.0701041122732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526191.33,
            "unit": "ns",
            "range": "± 109393.9225520058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2878363.1333333333,
            "unit": "ns",
            "range": "± 84658.42043164761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371772.8571428573,
            "unit": "ns",
            "range": "± 131468.00882526275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5600853.533333333,
            "unit": "ns",
            "range": "± 164614.77839839904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46189.75,
            "unit": "ns",
            "range": "± 3162.9559363820586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7808192.692307692,
            "unit": "ns",
            "range": "± 111412.56411149254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21850104.8,
            "unit": "ns",
            "range": "± 278274.02555964765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55033154.46666667,
            "unit": "ns",
            "range": "± 659569.4877890173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110623500,
            "unit": "ns",
            "range": "± 2062715.224928993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216409402.2,
            "unit": "ns",
            "range": "± 2212334.304817302"
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
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688031189791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8177414.274193549,
            "unit": "ns",
            "range": "± 247192.8537816455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22074846.785714287,
            "unit": "ns",
            "range": "± 362055.633964467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57512651.666666664,
            "unit": "ns",
            "range": "± 801228.3907358097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113924676.33333333,
            "unit": "ns",
            "range": "± 1508736.0031904506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231290697.66666666,
            "unit": "ns",
            "range": "± 3334976.772835836"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49264.134020618556,
            "unit": "ns",
            "range": "± 4124.7962970634135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301993.85714285716,
            "unit": "ns",
            "range": "± 13846.343040972764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291348.52173913043,
            "unit": "ns",
            "range": "± 11082.997798909284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259260.97,
            "unit": "ns",
            "range": "± 17824.78458336973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4610487.2,
            "unit": "ns",
            "range": "± 78805.41706924177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078038,
            "unit": "ns",
            "range": "± 48630.74445833036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20192.40206185567,
            "unit": "ns",
            "range": "± 2099.3825067335956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93097.87096774194,
            "unit": "ns",
            "range": "± 6411.423426411247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81626.71875,
            "unit": "ns",
            "range": "± 8090.795933395877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99441.25882352941,
            "unit": "ns",
            "range": "± 7807.364383880713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6157.9473684210525,
            "unit": "ns",
            "range": "± 1173.7682848680784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20975.670103092783,
            "unit": "ns",
            "range": "± 2615.2577578576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616119.63,
            "unit": "ns",
            "range": "± 120582.99373734131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2960159.0208333335,
            "unit": "ns",
            "range": "± 116417.60867751513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2470917.381818182,
            "unit": "ns",
            "range": "± 104454.19225678872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5803198.21875,
            "unit": "ns",
            "range": "± 177810.46841868784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6162372.0546875,
            "unit": "ns",
            "range": "± 31907.503921506326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921344.9282552083,
            "unit": "ns",
            "range": "± 3635.667071290189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444933.9153645833,
            "unit": "ns",
            "range": "± 4972.151442255523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675166.447395833,
            "unit": "ns",
            "range": "± 10372.059173781385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840925.8520883414,
            "unit": "ns",
            "range": "± 675.7647627012399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783047.8026646206,
            "unit": "ns",
            "range": "± 628.904518384737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683833.9375,
            "unit": "ns",
            "range": "± 68578.59695509356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3940648.8125,
            "unit": "ns",
            "range": "± 75687.53241251715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4562772.29032258,
            "unit": "ns",
            "range": "± 138889.1946467143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4728790.642857143,
            "unit": "ns",
            "range": "± 78021.79541306406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7302396.323529412,
            "unit": "ns",
            "range": "± 233784.25456840388"
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
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688031262478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9836573.142857144,
            "unit": "ns",
            "range": "± 135305.91303916706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26866350.5,
            "unit": "ns",
            "range": "± 354652.87913354696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68692401.6,
            "unit": "ns",
            "range": "± 442087.8562449518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137424098.06666666,
            "unit": "ns",
            "range": "± 653116.5064546257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275472532.3333333,
            "unit": "ns",
            "range": "± 2462207.0782106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57196.32530120482,
            "unit": "ns",
            "range": "± 2945.7322337389437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346479.95454545453,
            "unit": "ns",
            "range": "± 8479.71877749814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332183.1666666667,
            "unit": "ns",
            "range": "± 8575.359699220464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303506.8,
            "unit": "ns",
            "range": "± 7970.816274594048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5404634.933333334,
            "unit": "ns",
            "range": "± 42828.27328073738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5019561.285714285,
            "unit": "ns",
            "range": "± 57686.56499824464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24207.680412371134,
            "unit": "ns",
            "range": "± 1683.7647521402237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107147.1978021978,
            "unit": "ns",
            "range": "± 6239.0309133885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98311.61111111111,
            "unit": "ns",
            "range": "± 3268.354205999254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110017.92222222222,
            "unit": "ns",
            "range": "± 10990.326663135269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6794.329896907217,
            "unit": "ns",
            "range": "± 898.6351424249059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22971.515463917527,
            "unit": "ns",
            "range": "± 1972.1010217183457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1807877.9166666667,
            "unit": "ns",
            "range": "± 103760.4036173486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3403077.057142857,
            "unit": "ns",
            "range": "± 109146.24019687662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2869449.472972973,
            "unit": "ns",
            "range": "± 143520.47422754447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6764813.897435897,
            "unit": "ns",
            "range": "± 231561.94273566527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7337420.891666667,
            "unit": "ns",
            "range": "± 25740.41171872575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2335136.5206473214,
            "unit": "ns",
            "range": "± 1012.1555180080098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1667826.6549479167,
            "unit": "ns",
            "range": "± 3454.5921691024687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3160305.479073661,
            "unit": "ns",
            "range": "± 2037.8962473512197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1017292.2061941965,
            "unit": "ns",
            "range": "± 397.4261091969424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921375.3773716518,
            "unit": "ns",
            "range": "± 280.3107854302036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4321814.4,
            "unit": "ns",
            "range": "± 56073.92727819232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4462876.65,
            "unit": "ns",
            "range": "± 101380.26421364736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5394355.285714285,
            "unit": "ns",
            "range": "± 88583.28235006923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5613419,
            "unit": "ns",
            "range": "± 159116.4469095232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8884237.92857143,
            "unit": "ns",
            "range": "± 319343.1396687309"
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
          "id": "6d28947e8c972a220e442fddc21270b28a16f367",
          "message": "Merge pull request #3257 from greymistcube/refactor/reroute-delta-access\n\n♻️ Reroute `IAccountDelta` access",
          "timestamp": "2023-06-30T18:06:39+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d28947e8c972a220e442fddc21270b28a16f367"
        },
        "date": 1688129926043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8002127.222222222,
            "unit": "ns",
            "range": "± 164172.70267386668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22048511.333333332,
            "unit": "ns",
            "range": "± 192523.10041419766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54744800.0625,
            "unit": "ns",
            "range": "± 1059094.173630118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111319609.46666667,
            "unit": "ns",
            "range": "± 899415.6553388162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221110651,
            "unit": "ns",
            "range": "± 2141814.095556115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47996.96296296296,
            "unit": "ns",
            "range": "± 2413.56610353044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282199,
            "unit": "ns",
            "range": "± 9241.925934260616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275680.35294117645,
            "unit": "ns",
            "range": "± 5501.866137288971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245343.97619047618,
            "unit": "ns",
            "range": "± 8859.111750024338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4474605.866666666,
            "unit": "ns",
            "range": "± 52914.180416253344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4151916.8666666667,
            "unit": "ns",
            "range": "± 37185.608817441855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20840.284210526315,
            "unit": "ns",
            "range": "± 1466.919116707123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92953.12658227848,
            "unit": "ns",
            "range": "± 4710.305614689083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77904.67272727273,
            "unit": "ns",
            "range": "± 3328.380932472999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98753.47916666667,
            "unit": "ns",
            "range": "± 12241.850070001816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6375.873684210526,
            "unit": "ns",
            "range": "± 731.9509814145543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20569.340425531915,
            "unit": "ns",
            "range": "± 1379.182620275007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478814.17,
            "unit": "ns",
            "range": "± 123020.33934995825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2812384.150943396,
            "unit": "ns",
            "range": "± 116939.31429318969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1882057.712643678,
            "unit": "ns",
            "range": "± 100294.91600657185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5255574.214285715,
            "unit": "ns",
            "range": "± 224775.63508640943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5983944.903645833,
            "unit": "ns",
            "range": "± 21872.14525731613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876721.097935268,
            "unit": "ns",
            "range": "± 5358.819000081803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366386.7446614583,
            "unit": "ns",
            "range": "± 8311.48688602279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584685.263802083,
            "unit": "ns",
            "range": "± 2198.4563360493958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835615.8809895833,
            "unit": "ns",
            "range": "± 1501.4528413368575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770039.2646484375,
            "unit": "ns",
            "range": "± 2004.9169165426863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3618789.95,
            "unit": "ns",
            "range": "± 78533.57515535365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3798229.3846153845,
            "unit": "ns",
            "range": "± 38149.15569082856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4471162.043478261,
            "unit": "ns",
            "range": "± 111092.09538424261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4054916.9696969697,
            "unit": "ns",
            "range": "± 128048.36610961815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6599186.58974359,
            "unit": "ns",
            "range": "± 228448.6573915136"
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
          "id": "6d28947e8c972a220e442fddc21270b28a16f367",
          "message": "Merge pull request #3257 from greymistcube/refactor/reroute-delta-access\n\n♻️ Reroute `IAccountDelta` access",
          "timestamp": "2023-06-30T18:06:39+09:00",
          "tree_id": "06a6a38a48bbd4aec72573ab5b68bc1937e05a4f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d28947e8c972a220e442fddc21270b28a16f367"
        },
        "date": 1688130244132,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11067069.72,
            "unit": "ns",
            "range": "± 557536.3631583379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28940416.28125,
            "unit": "ns",
            "range": "± 1338316.5712500738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74134227.86666666,
            "unit": "ns",
            "range": "± 1368138.8963342484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148531156.7419355,
            "unit": "ns",
            "range": "± 4531673.657322895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292133667.71428573,
            "unit": "ns",
            "range": "± 3293094.334258713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82934.14444444445,
            "unit": "ns",
            "range": "± 9972.997254453065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 410744.2272727273,
            "unit": "ns",
            "range": "± 22637.696263791095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 396879.6153846154,
            "unit": "ns",
            "range": "± 20350.039695695526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369195.3214285714,
            "unit": "ns",
            "range": "± 10242.19128772445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5794700.555555556,
            "unit": "ns",
            "range": "± 111922.68955279813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5269040.52,
            "unit": "ns",
            "range": "± 140560.3669042593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31987.287356321838,
            "unit": "ns",
            "range": "± 2985.838174200453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 157225.1157894737,
            "unit": "ns",
            "range": "± 11412.009113082957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 146353.34831460673,
            "unit": "ns",
            "range": "± 11432.303888842518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151508.13978494622,
            "unit": "ns",
            "range": "± 21031.14633346963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10552.677419354839,
            "unit": "ns",
            "range": "± 1724.1057364508808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32018.298850574713,
            "unit": "ns",
            "range": "± 2415.7691158878847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1897779.4772727273,
            "unit": "ns",
            "range": "± 136008.88114308042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3876631.431578947,
            "unit": "ns",
            "range": "± 235362.89127559942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2521244.6304347827,
            "unit": "ns",
            "range": "± 221571.34606587634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7268447.639175258,
            "unit": "ns",
            "range": "± 497389.5062941573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8190933.8,
            "unit": "ns",
            "range": "± 122736.63495347484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2460603.31875,
            "unit": "ns",
            "range": "± 38484.544162234444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1764469.4875,
            "unit": "ns",
            "range": "± 19899.033491315113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3635796.105530754,
            "unit": "ns",
            "range": "± 158537.71993957696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1126297.451171875,
            "unit": "ns",
            "range": "± 11524.430231596365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1011602.3770833333,
            "unit": "ns",
            "range": "± 18184.521177502396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4638476.048780488,
            "unit": "ns",
            "range": "± 166130.89450489802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4935670.0322580645,
            "unit": "ns",
            "range": "± 305357.6269480004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6067854.05,
            "unit": "ns",
            "range": "± 193235.27030990238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5548058.09375,
            "unit": "ns",
            "range": "± 254697.7391961109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8875322.954545455,
            "unit": "ns",
            "range": "± 214713.1049203137"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65eed8a84207980727fba3dff62340b64a709f50",
          "message": "Add preEvaluationHash field to BlockType (#3281)\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-10T11:50:06+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/OnedgeLee/libplanet/commit/65eed8a84207980727fba3dff62340b64a709f50"
        },
        "date": 1688973497968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272497.9574468085,
            "unit": "ns",
            "range": "± 10215.684879799654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275205.2631578947,
            "unit": "ns",
            "range": "± 5937.776771019279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224250.1,
            "unit": "ns",
            "range": "± 3357.4787047175114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173800.8571428573,
            "unit": "ns",
            "range": "± 20293.47148092836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867228.8,
            "unit": "ns",
            "range": "± 41825.3347970547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16652.083333333332,
            "unit": "ns",
            "range": "± 1457.8267290490403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80723.13186813187,
            "unit": "ns",
            "range": "± 4383.4777066434135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70376.92307692308,
            "unit": "ns",
            "range": "± 643.1094336034449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83343.89795918367,
            "unit": "ns",
            "range": "± 11860.307167741974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4279.166666666667,
            "unit": "ns",
            "range": "± 434.29717370450305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15297.64705882353,
            "unit": "ns",
            "range": "± 845.7141910818328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336273.40625,
            "unit": "ns",
            "range": "± 96354.07852265006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2533540.225,
            "unit": "ns",
            "range": "± 89916.37048732975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731747.148148148,
            "unit": "ns",
            "range": "± 88709.18267971349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4758628.552631579,
            "unit": "ns",
            "range": "± 153158.55249834745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6413790.10546875,
            "unit": "ns",
            "range": "± 21369.278317610817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891620.3801618305,
            "unit": "ns",
            "range": "± 2374.0829055085915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356521.5295572917,
            "unit": "ns",
            "range": "± 953.451668359002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604496.922135417,
            "unit": "ns",
            "range": "± 2414.1438199015465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807846.6345052083,
            "unit": "ns",
            "range": "± 528.694551612749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759489.0760904948,
            "unit": "ns",
            "range": "± 224.94228808622796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260274.1842105263,
            "unit": "ns",
            "range": "± 111746.20405835555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3397555.0454545454,
            "unit": "ns",
            "range": "± 74772.51887302502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241887.266666667,
            "unit": "ns",
            "range": "± 48703.749325410055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3675580.9677419355,
            "unit": "ns",
            "range": "± 94526.9231462599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6280268.157894737,
            "unit": "ns",
            "range": "± 123679.87012636165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7732827.333333333,
            "unit": "ns",
            "range": "± 36419.745432676384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19598354,
            "unit": "ns",
            "range": "± 118086.30840860184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49759027.06666667,
            "unit": "ns",
            "range": "± 260841.0345129404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99451150.07692307,
            "unit": "ns",
            "range": "± 666993.6142442272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200737329.5,
            "unit": "ns",
            "range": "± 1374140.8465600912"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45008.67391304348,
            "unit": "ns",
            "range": "± 2546.9772737812455"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65eed8a84207980727fba3dff62340b64a709f50",
          "message": "Add preEvaluationHash field to BlockType (#3281)\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-10T11:50:06+09:00",
          "tree_id": "998915f22ff709665c6d91d0eab8ad88cecf6434",
          "url": "https://github.com/OnedgeLee/libplanet/commit/65eed8a84207980727fba3dff62340b64a709f50"
        },
        "date": 1688973898189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380116.4948453608,
            "unit": "ns",
            "range": "± 56115.37505074622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352889.5714285714,
            "unit": "ns",
            "range": "± 60456.21203967022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327905.68686868687,
            "unit": "ns",
            "range": "± 54419.91636708888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5243208.04040404,
            "unit": "ns",
            "range": "± 484656.35729305126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5071855.389473684,
            "unit": "ns",
            "range": "± 436854.24845387257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27554.173469387755,
            "unit": "ns",
            "range": "± 10186.153884022151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115390.11340206186,
            "unit": "ns",
            "range": "± 16703.705102883298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117671.62765957447,
            "unit": "ns",
            "range": "± 24619.51323382785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136224.95744680852,
            "unit": "ns",
            "range": "± 28699.010716123845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7009.535714285715,
            "unit": "ns",
            "range": "± 1430.2791154549914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27881.949494949495,
            "unit": "ns",
            "range": "± 9726.337984002812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1785637.0204081633,
            "unit": "ns",
            "range": "± 223158.58023429246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3506067.2395833335,
            "unit": "ns",
            "range": "± 275423.6221983088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200412.224489796,
            "unit": "ns",
            "range": "± 227158.20079005713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6765424.4948453605,
            "unit": "ns",
            "range": "± 665698.9722720352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7312043.758969908,
            "unit": "ns",
            "range": "± 199167.53624127878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2278340.0150390626,
            "unit": "ns",
            "range": "± 52420.264367243704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1834711.0768694195,
            "unit": "ns",
            "range": "± 22029.463172831405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3276783.011140046,
            "unit": "ns",
            "range": "± 89043.32472592729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062532.2259114583,
            "unit": "ns",
            "range": "± 19110.579418943064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937996.0787760416,
            "unit": "ns",
            "range": "± 8676.833215976996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3965442.1515151514,
            "unit": "ns",
            "range": "± 387476.59858166345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4334308.020408163,
            "unit": "ns",
            "range": "± 463809.56521537784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5711443.410526316,
            "unit": "ns",
            "range": "± 370825.8487603873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4808955.340206185,
            "unit": "ns",
            "range": "± 331023.41855168407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9106637.831578948,
            "unit": "ns",
            "range": "± 557115.4724901551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10142754.463157894,
            "unit": "ns",
            "range": "± 643239.4589338457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27541393.76190476,
            "unit": "ns",
            "range": "± 619350.6982302438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66714607.49019608,
            "unit": "ns",
            "range": "± 2704417.757386993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138830386.85714287,
            "unit": "ns",
            "range": "± 3293311.340203934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281029648.0869565,
            "unit": "ns",
            "range": "± 13373537.364129964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65241.9375,
            "unit": "ns",
            "range": "± 15799.969015834044"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4820bf17b18ecdc0a149eb5dbf08c01e700d657e",
          "message": "Merge pull request #3288 from limebell/chore/fix-test\n\nAdd `Context.VoteSetModified` event handler",
          "timestamp": "2023-07-10T18:49:37+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4820bf17b18ecdc0a149eb5dbf08c01e700d657e"
        },
        "date": 1689117741044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293134.26829268294,
            "unit": "ns",
            "range": "± 8814.036932712474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276858.6956521739,
            "unit": "ns",
            "range": "± 4662.142859193152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244235.4375,
            "unit": "ns",
            "range": "± 4698.565567897646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4234088.153846154,
            "unit": "ns",
            "range": "± 13324.24179109987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3875968.1428571427,
            "unit": "ns",
            "range": "± 25365.49685894402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18791.5,
            "unit": "ns",
            "range": "± 1527.542505223065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88758.38554216867,
            "unit": "ns",
            "range": "± 4550.566726515649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75699.32258064517,
            "unit": "ns",
            "range": "± 2291.906097365201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87952.9375,
            "unit": "ns",
            "range": "± 4785.67532195651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4488.755102040816,
            "unit": "ns",
            "range": "± 716.7783746568828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17351.483870967742,
            "unit": "ns",
            "range": "± 1447.9960185876625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434199.4432989692,
            "unit": "ns",
            "range": "± 126579.72202726375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615662.730769231,
            "unit": "ns",
            "range": "± 68895.63305496667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1857101.5806451612,
            "unit": "ns",
            "range": "± 105782.29176785304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4964981.939393939,
            "unit": "ns",
            "range": "± 141675.57238589582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6129614.521354167,
            "unit": "ns",
            "range": "± 30069.288551924372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921894.8639322917,
            "unit": "ns",
            "range": "± 10289.779944625836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381164.7887620192,
            "unit": "ns",
            "range": "± 754.4493216331792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583806.4347098214,
            "unit": "ns",
            "range": "± 2141.144643418306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821111.9451171875,
            "unit": "ns",
            "range": "± 693.6162953643568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748708.1189903846,
            "unit": "ns",
            "range": "± 1448.6102067103802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344401.882352941,
            "unit": "ns",
            "range": "± 65348.1800787925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3486167.090909091,
            "unit": "ns",
            "range": "± 84837.87246378718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353164.230769231,
            "unit": "ns",
            "range": "± 47542.312561467894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3943039.76,
            "unit": "ns",
            "range": "± 86752.36833380016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6528477.8125,
            "unit": "ns",
            "range": "± 201277.9788529411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7960984.071428572,
            "unit": "ns",
            "range": "± 33011.798707698166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19721343.266666666,
            "unit": "ns",
            "range": "± 146071.00426918932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51312960.071428575,
            "unit": "ns",
            "range": "± 451679.12607078865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101488144.5,
            "unit": "ns",
            "range": "± 646871.0110652485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202892442.4,
            "unit": "ns",
            "range": "± 950474.7049444594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47187.530303030304,
            "unit": "ns",
            "range": "± 2210.174933693968"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4820bf17b18ecdc0a149eb5dbf08c01e700d657e",
          "message": "Merge pull request #3288 from limebell/chore/fix-test\n\nAdd `Context.VoteSetModified` event handler",
          "timestamp": "2023-07-10T18:49:37+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4820bf17b18ecdc0a149eb5dbf08c01e700d657e"
        },
        "date": 1689118017639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319052.9789473684,
            "unit": "ns",
            "range": "± 38806.949717576754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313756.96907216497,
            "unit": "ns",
            "range": "± 32986.58990769759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273548.12765957444,
            "unit": "ns",
            "range": "± 26821.396443256333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4685940.237113402,
            "unit": "ns",
            "range": "± 313318.83046955185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4421816.24742268,
            "unit": "ns",
            "range": "± 323138.4872916665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21675.0202020202,
            "unit": "ns",
            "range": "± 8061.54176521097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85357.02040816327,
            "unit": "ns",
            "range": "± 9276.110578442709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86610.72164948453,
            "unit": "ns",
            "range": "± 13401.637821816053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92958.5,
            "unit": "ns",
            "range": "± 15637.344957759196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4695.111111111111,
            "unit": "ns",
            "range": "± 484.7327614263348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19982.867346938776,
            "unit": "ns",
            "range": "± 7325.967270343165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701486.4166666667,
            "unit": "ns",
            "range": "± 158075.53548842046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3092881.0795454546,
            "unit": "ns",
            "range": "± 168941.20575848728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2072633.224489796,
            "unit": "ns",
            "range": "± 291076.8050905859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5696610.92,
            "unit": "ns",
            "range": "± 502005.07711649773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6207991.454799107,
            "unit": "ns",
            "range": "± 93030.66558430708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2179897.22890625,
            "unit": "ns",
            "range": "± 56920.056669260266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411191.6555304276,
            "unit": "ns",
            "range": "± 30253.99857298482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666926.4609375,
            "unit": "ns",
            "range": "± 46664.44703341528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 909808.7837239583,
            "unit": "ns",
            "range": "± 14334.896858540948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903224.935546875,
            "unit": "ns",
            "range": "± 20504.28608135826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342513.012820513,
            "unit": "ns",
            "range": "± 171184.04968083242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567596.4270833335,
            "unit": "ns",
            "range": "± 240597.70496865525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433653.028985507,
            "unit": "ns",
            "range": "± 211902.04123749447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4204856.5051546395,
            "unit": "ns",
            "range": "± 388564.13396324526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7067066.807692308,
            "unit": "ns",
            "range": "± 362504.2438773543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7969532.647058823,
            "unit": "ns",
            "range": "± 161504.87118309358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22075114.566666666,
            "unit": "ns",
            "range": "± 1220540.0246447097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57995730.55555555,
            "unit": "ns",
            "range": "± 2084064.2619709184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119635287.15,
            "unit": "ns",
            "range": "± 7832463.714920669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237502219.77083334,
            "unit": "ns",
            "range": "± 9353590.825989604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64721.97872340425,
            "unit": "ns",
            "range": "± 9312.808302153584"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d715abb2338f0127016299c566534770829eeb70",
          "message": "Merge pull request #3284 from riemannulus/fix/currency/backward-compability\n\nFix `Currency` backward compability broken bug",
          "timestamp": "2023-07-12T15:23:10+09:00",
          "tree_id": "e2435a1e15e4c6a5892adedd6a459739ba907255",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d715abb2338f0127016299c566534770829eeb70"
        },
        "date": 1689144881598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297045.71428571426,
            "unit": "ns",
            "range": "± 10280.312997716093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280697.6153846154,
            "unit": "ns",
            "range": "± 9633.456210452428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255049.1443298969,
            "unit": "ns",
            "range": "± 14827.709138348104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4592923.076923077,
            "unit": "ns",
            "range": "± 54975.75037908614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4220171.882352941,
            "unit": "ns",
            "range": "± 83089.81031005122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20756.680412371134,
            "unit": "ns",
            "range": "± 2345.23358176746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94896.0808080808,
            "unit": "ns",
            "range": "± 6763.9736625514115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82788.793814433,
            "unit": "ns",
            "range": "± 6314.085965683765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98359.72164948453,
            "unit": "ns",
            "range": "± 11782.65218069757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5973.19587628866,
            "unit": "ns",
            "range": "± 933.1304240652273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20258.20408163265,
            "unit": "ns",
            "range": "± 2313.1609290523884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534924.3555555556,
            "unit": "ns",
            "range": "± 79235.08940273037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947265,
            "unit": "ns",
            "range": "± 109794.51734119534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2003024.2127659575,
            "unit": "ns",
            "range": "± 131996.74403159908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376641.98245614,
            "unit": "ns",
            "range": "± 233230.15591696813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6078859.799665178,
            "unit": "ns",
            "range": "± 30086.54704310035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899964.6420572917,
            "unit": "ns",
            "range": "± 1775.346126231008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403598.076953125,
            "unit": "ns",
            "range": "± 3538.1547600021486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670207.7880208334,
            "unit": "ns",
            "range": "± 2639.034269209385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857405.2429036458,
            "unit": "ns",
            "range": "± 412.75570405682146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770584.9987630208,
            "unit": "ns",
            "range": "± 384.18374906953557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760504.8666666667,
            "unit": "ns",
            "range": "± 68173.3919626656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3895633.411764706,
            "unit": "ns",
            "range": "± 78986.14722378446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4842548.791666667,
            "unit": "ns",
            "range": "± 124382.98484186694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4225285.5,
            "unit": "ns",
            "range": "± 102521.93996954529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7033032.342857143,
            "unit": "ns",
            "range": "± 229617.96506370456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8475011.11764706,
            "unit": "ns",
            "range": "± 165809.44613429083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23381640.666666668,
            "unit": "ns",
            "range": "± 423782.47103836294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57811133.86666667,
            "unit": "ns",
            "range": "± 698137.4303268731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114771989.86666666,
            "unit": "ns",
            "range": "± 1215145.891640404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227840694.25,
            "unit": "ns",
            "range": "± 968496.9969640517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49585.56626506024,
            "unit": "ns",
            "range": "± 2514.970577303387"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d715abb2338f0127016299c566534770829eeb70",
          "message": "Merge pull request #3284 from riemannulus/fix/currency/backward-compability\n\nFix `Currency` backward compability broken bug",
          "timestamp": "2023-07-12T15:23:10+09:00",
          "tree_id": "e2435a1e15e4c6a5892adedd6a459739ba907255",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d715abb2338f0127016299c566534770829eeb70"
        },
        "date": 1689145191824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311769.51,
            "unit": "ns",
            "range": "± 24096.70638523159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305135.2551020408,
            "unit": "ns",
            "range": "± 20637.456043930903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260039.76,
            "unit": "ns",
            "range": "± 25382.492945009046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4774530.95,
            "unit": "ns",
            "range": "± 412087.73708346765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4124634.07,
            "unit": "ns",
            "range": "± 356694.32462326856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18727.010638297874,
            "unit": "ns",
            "range": "± 2247.630649710939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91320.4574468085,
            "unit": "ns",
            "range": "± 9238.915149116714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81446.88421052632,
            "unit": "ns",
            "range": "± 9039.587791702505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100601.14285714286,
            "unit": "ns",
            "range": "± 15220.236522946447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4627.225806451613,
            "unit": "ns",
            "range": "± 575.895297870539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17161.85106382979,
            "unit": "ns",
            "range": "± 1511.0508766328978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517447.393939394,
            "unit": "ns",
            "range": "± 185011.8892934588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023058.595959596,
            "unit": "ns",
            "range": "± 304841.12852311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055779.2708333333,
            "unit": "ns",
            "range": "± 167651.1356343397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5831749.21,
            "unit": "ns",
            "range": "± 499047.78675292805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6351637.038411458,
            "unit": "ns",
            "range": "± 70631.13191778459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993238.4095052083,
            "unit": "ns",
            "range": "± 50234.102891725306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451736.65546875,
            "unit": "ns",
            "range": "± 75189.95101362765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2851452.889544548,
            "unit": "ns",
            "range": "± 110823.64923216823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855956.5190813729,
            "unit": "ns",
            "range": "± 47010.463931449594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804882.8444181744,
            "unit": "ns",
            "range": "± 40699.789563725375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3761330.25,
            "unit": "ns",
            "range": "± 276485.5682409531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3879172.15,
            "unit": "ns",
            "range": "± 319316.33024288836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4733285.73,
            "unit": "ns",
            "range": "± 456565.44178082765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4278515.05,
            "unit": "ns",
            "range": "± 378802.13799825363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387068.74,
            "unit": "ns",
            "range": "± 620598.6958656078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8497586.01,
            "unit": "ns",
            "range": "± 657210.6821341559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24572482.685714286,
            "unit": "ns",
            "range": "± 798273.631457939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57598776.46,
            "unit": "ns",
            "range": "± 3468207.5192680783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109485796.38,
            "unit": "ns",
            "range": "± 8317608.343493611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230662302.52,
            "unit": "ns",
            "range": "± 16401167.759389553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53627.073684210525,
            "unit": "ns",
            "range": "± 5927.803456058729"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdcd4c147295b620044fba1a30cc2a49e625d67b",
          "message": "Merge pull request #3295 from OnedgeLee/prepare/2.6.0\n\n🔧 Prepare 2.6.0",
          "timestamp": "2023-07-12T16:44:21+09:00",
          "tree_id": "c9cab82e8cbc048cd23f270c87bad81873f04f3b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fdcd4c147295b620044fba1a30cc2a49e625d67b"
        },
        "date": 1689155741485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297125.4666666667,
            "unit": "ns",
            "range": "± 11228.89795774521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286446.3076923077,
            "unit": "ns",
            "range": "± 9716.69868171567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246981.96078431373,
            "unit": "ns",
            "range": "± 10085.684462565312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4643053.8,
            "unit": "ns",
            "range": "± 59686.10240870865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4277050.833333333,
            "unit": "ns",
            "range": "± 91316.86332973966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20610.546391752578,
            "unit": "ns",
            "range": "± 2345.627212764826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93378.17021276595,
            "unit": "ns",
            "range": "± 6770.02379347846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75808.98461538462,
            "unit": "ns",
            "range": "± 3423.2625040499915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102038.39784946236,
            "unit": "ns",
            "range": "± 10983.186961402675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5991.886597938144,
            "unit": "ns",
            "range": "± 1028.2460174601604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20873.77659574468,
            "unit": "ns",
            "range": "± 2076.7318056418917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576914.9494949495,
            "unit": "ns",
            "range": "± 114275.98710152556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2854654.025,
            "unit": "ns",
            "range": "± 100492.05211881505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1987808.392857143,
            "unit": "ns",
            "range": "± 101280.65801916776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5504091.306818182,
            "unit": "ns",
            "range": "± 303078.3643162374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149960.370535715,
            "unit": "ns",
            "range": "± 37757.26822139488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1937439.4649832589,
            "unit": "ns",
            "range": "± 2652.3146349693084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402941.6458333333,
            "unit": "ns",
            "range": "± 3604.408502324271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653139.6049479167,
            "unit": "ns",
            "range": "± 2311.7854121389105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853638.2707682292,
            "unit": "ns",
            "range": "± 795.7389385747953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772203.2962239584,
            "unit": "ns",
            "range": "± 329.5061309436883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623867.7,
            "unit": "ns",
            "range": "± 82034.07015515598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772608.9210526315,
            "unit": "ns",
            "range": "± 129559.21130372108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4514267.740740741,
            "unit": "ns",
            "range": "± 124375.71382882672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4292594.142857143,
            "unit": "ns",
            "range": "± 120757.5853455896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6823851.264705882,
            "unit": "ns",
            "range": "± 174995.0376851954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8136923.928571428,
            "unit": "ns",
            "range": "± 100924.49890538074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27548468.2,
            "unit": "ns",
            "range": "± 207302.28117868293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56514096.35714286,
            "unit": "ns",
            "range": "± 311923.11680496554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112334651.28571428,
            "unit": "ns",
            "range": "± 1431130.351726668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227587417.06666666,
            "unit": "ns",
            "range": "± 2033450.421194459"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48039.50602409639,
            "unit": "ns",
            "range": "± 2563.8056334642024"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdcd4c147295b620044fba1a30cc2a49e625d67b",
          "message": "Merge pull request #3295 from OnedgeLee/prepare/2.6.0\n\n🔧 Prepare 2.6.0",
          "timestamp": "2023-07-12T16:44:21+09:00",
          "tree_id": "c9cab82e8cbc048cd23f270c87bad81873f04f3b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fdcd4c147295b620044fba1a30cc2a49e625d67b"
        },
        "date": 1689155810861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314678.43157894735,
            "unit": "ns",
            "range": "± 17998.04626669631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301229.41538461536,
            "unit": "ns",
            "range": "± 13903.588712644825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296721.32,
            "unit": "ns",
            "range": "± 21831.65334127804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4840373.533333333,
            "unit": "ns",
            "range": "± 70182.52992210146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4289325.75,
            "unit": "ns",
            "range": "± 82947.46147733115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26585.030612244896,
            "unit": "ns",
            "range": "± 4148.084482666895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124705.48484848485,
            "unit": "ns",
            "range": "± 13247.548965724105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100197.07,
            "unit": "ns",
            "range": "± 13471.768485479692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120227.35416666667,
            "unit": "ns",
            "range": "± 20995.603839089326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8933.46875,
            "unit": "ns",
            "range": "± 1712.378702292746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27849.21875,
            "unit": "ns",
            "range": "± 3404.333254770965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705917.8762886599,
            "unit": "ns",
            "range": "± 145358.95607800953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3055987.9166666665,
            "unit": "ns",
            "range": "± 136606.73748407795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138990.292929293,
            "unit": "ns",
            "range": "± 149986.65725060093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5777429.8367346935,
            "unit": "ns",
            "range": "± 334576.08351719496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6427292.691145834,
            "unit": "ns",
            "range": "± 35436.2031570203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900281.0962611607,
            "unit": "ns",
            "range": "± 2517.6451148253554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412118.4602864583,
            "unit": "ns",
            "range": "± 3332.784580918851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645182.560677083,
            "unit": "ns",
            "range": "± 5060.84525917469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850177.445703125,
            "unit": "ns",
            "range": "± 600.8723571227208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772604.0558894231,
            "unit": "ns",
            "range": "± 727.7446888618949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3796394.846153846,
            "unit": "ns",
            "range": "± 101757.01844047607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4014828.407407407,
            "unit": "ns",
            "range": "± 109806.17946820916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4813537.238095238,
            "unit": "ns",
            "range": "± 111671.70336298482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4405777.481481481,
            "unit": "ns",
            "range": "± 121781.91269117428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7171847,
            "unit": "ns",
            "range": "± 200341.80378466274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8573384.35,
            "unit": "ns",
            "range": "± 188039.37700505712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22839919.23529412,
            "unit": "ns",
            "range": "± 448741.8912750025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57775312.35714286,
            "unit": "ns",
            "range": "± 511719.7281058341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117301808.53333333,
            "unit": "ns",
            "range": "± 1018275.2984981072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229323840.86666667,
            "unit": "ns",
            "range": "± 4243320.063902537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60381.63157894737,
            "unit": "ns",
            "range": "± 9316.781588688908"
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
          "id": "1d75fde041ada2264ae9d234d86685de54820cd1",
          "message": "Merge pull request #3328 from greymistcube/refactor/keybytes-usage\n\n🧹 Refactor to use `KeyBytes` instead of `string`s in general",
          "timestamp": "2023-07-21T16:26:01+09:00",
          "tree_id": "77a8faa1ebc3e13f4309edf118475025bff5107f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1d75fde041ada2264ae9d234d86685de54820cd1"
        },
        "date": 1690348242474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295776.26785714284,
            "unit": "ns",
            "range": "± 12638.09744670465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278918.61904761905,
            "unit": "ns",
            "range": "± 10162.438321181755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250842.83783783784,
            "unit": "ns",
            "range": "± 8507.911215495302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378483.2,
            "unit": "ns",
            "range": "± 29897.749273147634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995558.214285714,
            "unit": "ns",
            "range": "± 26056.509112012598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21753.114583333332,
            "unit": "ns",
            "range": "± 1953.8360911148566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97374.58585858585,
            "unit": "ns",
            "range": "± 6651.84497501518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78734.81395348837,
            "unit": "ns",
            "range": "± 2847.865894848063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95522.6875,
            "unit": "ns",
            "range": "± 12539.81474245134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5290.614583333333,
            "unit": "ns",
            "range": "± 608.0299918120674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20737.612903225807,
            "unit": "ns",
            "range": "± 1252.1504635266313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411446.5729166667,
            "unit": "ns",
            "range": "± 125217.40389130755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2597903.923076923,
            "unit": "ns",
            "range": "± 64854.25382312132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783694.3775510204,
            "unit": "ns",
            "range": "± 123446.9447198691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4794584.621621622,
            "unit": "ns",
            "range": "± 149813.44098936877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6078319.23125,
            "unit": "ns",
            "range": "± 26412.93245485423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910706.85546875,
            "unit": "ns",
            "range": "± 4543.433587272692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382027.9919270833,
            "unit": "ns",
            "range": "± 676.3734025333284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621492.705528846,
            "unit": "ns",
            "range": "± 1711.171100615693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811489.3051060268,
            "unit": "ns",
            "range": "± 3402.3726201644695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741965.5442708334,
            "unit": "ns",
            "range": "± 6518.400236550007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3309716.8571428573,
            "unit": "ns",
            "range": "± 52409.536212201136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473599.9655172415,
            "unit": "ns",
            "range": "± 152195.37969229883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4291832.307692308,
            "unit": "ns",
            "range": "± 25072.931162193672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925379.090909091,
            "unit": "ns",
            "range": "± 123111.94969832427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6474240.7272727275,
            "unit": "ns",
            "range": "± 137205.5439328968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7735581.666666667,
            "unit": "ns",
            "range": "± 50333.37617705524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19819195.2,
            "unit": "ns",
            "range": "± 73705.36669857513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50356118,
            "unit": "ns",
            "range": "± 193010.32767889465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100907172.42857143,
            "unit": "ns",
            "range": "± 343996.92930286773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202914783.26666668,
            "unit": "ns",
            "range": "± 742851.890180815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48472.74074074074,
            "unit": "ns",
            "range": "± 2571.8675596625203"
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
          "id": "1d75fde041ada2264ae9d234d86685de54820cd1",
          "message": "Merge pull request #3328 from greymistcube/refactor/keybytes-usage\n\n🧹 Refactor to use `KeyBytes` instead of `string`s in general",
          "timestamp": "2023-07-21T16:26:01+09:00",
          "tree_id": "77a8faa1ebc3e13f4309edf118475025bff5107f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1d75fde041ada2264ae9d234d86685de54820cd1"
        },
        "date": 1690348378204,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347057.77419354836,
            "unit": "ns",
            "range": "± 28527.676800490433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331575.8369565217,
            "unit": "ns",
            "range": "± 30306.59601809306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290392.612244898,
            "unit": "ns",
            "range": "± 27772.672690689644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4626066.149425288,
            "unit": "ns",
            "range": "± 242753.6084219403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4388385.375,
            "unit": "ns",
            "range": "± 291705.42841829325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31279.21212121212,
            "unit": "ns",
            "range": "± 10326.636679365005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116981.96875,
            "unit": "ns",
            "range": "± 13724.384335115385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124800.9255319149,
            "unit": "ns",
            "range": "± 16056.080118068536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145832.1030927835,
            "unit": "ns",
            "range": "± 19381.675174033877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7118.539473684211,
            "unit": "ns",
            "range": "± 1128.1388028168576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34223.70930232558,
            "unit": "ns",
            "range": "± 5754.59478384581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485400.0520833333,
            "unit": "ns",
            "range": "± 137297.2360725651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2896268.8469387754,
            "unit": "ns",
            "range": "± 239439.3468673754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2027856.3608247424,
            "unit": "ns",
            "range": "± 188847.94325231313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6020611.742268041,
            "unit": "ns",
            "range": "± 477580.9243837041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6630248.309375,
            "unit": "ns",
            "range": "± 119365.33916337806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2195495.9620682565,
            "unit": "ns",
            "range": "± 74380.79521639265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1523050.6311197917,
            "unit": "ns",
            "range": "± 27638.6923915854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2934806.4633789062,
            "unit": "ns",
            "range": "± 54756.11015237072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960347.6464146206,
            "unit": "ns",
            "range": "± 15867.623902107427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902148.8114483173,
            "unit": "ns",
            "range": "± 13265.912548881992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3608937,
            "unit": "ns",
            "range": "± 236769.33486588448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3704677.907216495,
            "unit": "ns",
            "range": "± 278682.03632537933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4603200.4421052635,
            "unit": "ns",
            "range": "± 292832.4098808241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4018307.1052631577,
            "unit": "ns",
            "range": "± 328638.88070489705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7339153.475,
            "unit": "ns",
            "range": "± 378087.84381377045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8121366.571428572,
            "unit": "ns",
            "range": "± 258842.1220067514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27720332.96,
            "unit": "ns",
            "range": "± 1959231.8799435124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59880243.071428575,
            "unit": "ns",
            "range": "± 1696627.4514248453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121460496.02272727,
            "unit": "ns",
            "range": "± 4559884.245899682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242454727.2352941,
            "unit": "ns",
            "range": "± 4864338.821949194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66380.51136363637,
            "unit": "ns",
            "range": "± 8212.514049386073"
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
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690502015906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276035.3125,
            "unit": "ns",
            "range": "± 7454.417916902614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276908.8378378378,
            "unit": "ns",
            "range": "± 9338.564809176793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231000.73333333334,
            "unit": "ns",
            "range": "± 3865.00418529928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4234755.6,
            "unit": "ns",
            "range": "± 28321.822063056403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3856412.2666666666,
            "unit": "ns",
            "range": "± 47649.82834396703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17756.755555555555,
            "unit": "ns",
            "range": "± 1000.7654408828364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87005.26829268293,
            "unit": "ns",
            "range": "± 4446.330927546198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74336.07142857143,
            "unit": "ns",
            "range": "± 1215.1191435275116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86106.6875,
            "unit": "ns",
            "range": "± 10422.889865263907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4559.473684210527,
            "unit": "ns",
            "range": "± 365.5580648381283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17264.936170212764,
            "unit": "ns",
            "range": "± 1239.4780102193959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329319.1445783132,
            "unit": "ns",
            "range": "± 70395.89932332576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527735.4285714286,
            "unit": "ns",
            "range": "± 58945.180732245986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732018.0208333333,
            "unit": "ns",
            "range": "± 117264.471471248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4682030.256410256,
            "unit": "ns",
            "range": "± 162960.36686515916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6048816.767708333,
            "unit": "ns",
            "range": "± 9233.833739639114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852340.2454427083,
            "unit": "ns",
            "range": "± 1276.34314574792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372857.868001302,
            "unit": "ns",
            "range": "± 849.7728935880967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589374.2671875,
            "unit": "ns",
            "range": "± 4829.879762429994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809128.6696428572,
            "unit": "ns",
            "range": "± 2588.666980697867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749968.7524789664,
            "unit": "ns",
            "range": "± 1398.63709353014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3211520.285714286,
            "unit": "ns",
            "range": "± 109845.4928720638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3398274.230769231,
            "unit": "ns",
            "range": "± 76949.3598082831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253656.916666667,
            "unit": "ns",
            "range": "± 99635.26025979072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3680122.685185185,
            "unit": "ns",
            "range": "± 155092.2933216443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6239658.482758621,
            "unit": "ns",
            "range": "± 177785.75343827682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7531433.285714285,
            "unit": "ns",
            "range": "± 46512.75850018684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19281335.4,
            "unit": "ns",
            "range": "± 102509.09542558373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49530691.333333336,
            "unit": "ns",
            "range": "± 454203.32676467183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98604726,
            "unit": "ns",
            "range": "± 618514.699057462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196420669.93333334,
            "unit": "ns",
            "range": "± 1001168.0004334557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47704.16216216216,
            "unit": "ns",
            "range": "± 2393.787982434964"
          }
        ]
      }
    ]
  }
}