window.BENCHMARK_DATA = {
  "lastUpdate": 1700820746641,
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
          "id": "324184e4815b9ea2ba056265b536e077d0c08411",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-01T11:54:43+09:00",
          "tree_id": "3b0cb04acaab6ec004dd75eb29facea232ce0a7d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324184e4815b9ea2ba056265b536e077d0c08411"
        },
        "date": 1698808246755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339352.1739130435,
            "unit": "ns",
            "range": "± 102474.84760089456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2478777.551020408,
            "unit": "ns",
            "range": "± 95990.46451190287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2036232.4324324324,
            "unit": "ns",
            "range": "± 101488.13022991341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9360238.709677419,
            "unit": "ns",
            "range": "± 552017.7669305695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50952.63157894737,
            "unit": "ns",
            "range": "± 3250.1666767493225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7426026.666666667,
            "unit": "ns",
            "range": "± 115382.13817365238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20795309.523809522,
            "unit": "ns",
            "range": "± 491486.7810071415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54845300,
            "unit": "ns",
            "range": "± 910539.0632555452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103035976.47058824,
            "unit": "ns",
            "range": "± 2077586.6310245078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202766053.84615386,
            "unit": "ns",
            "range": "± 2852945.6115902923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4554975,
            "unit": "ns",
            "range": "± 9215.052730274143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1475595.1822916667,
            "unit": "ns",
            "range": "± 6960.152970023061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105867.4609375,
            "unit": "ns",
            "range": "± 3962.892719902372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661502.762276786,
            "unit": "ns",
            "range": "± 8086.9476858534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840773.6049107143,
            "unit": "ns",
            "range": "± 3113.7846087157113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782952.2600446428,
            "unit": "ns",
            "range": "± 1978.405702068143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230112.1951219514,
            "unit": "ns",
            "range": "± 116355.986513634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3375333.3333333335,
            "unit": "ns",
            "range": "± 79661.67409012052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4069840,
            "unit": "ns",
            "range": "± 112025.99021101586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4040762.2807017546,
            "unit": "ns",
            "range": "± 156682.74824144243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10490293.023255814,
            "unit": "ns",
            "range": "± 584443.0838872965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248883.87096774194,
            "unit": "ns",
            "range": "± 7396.625211279062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257297.0588235294,
            "unit": "ns",
            "range": "± 5093.88329850847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218952.38095238095,
            "unit": "ns",
            "range": "± 11728.838685623048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4037446.6666666665,
            "unit": "ns",
            "range": "± 56406.92544444555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3736360,
            "unit": "ns",
            "range": "± 84005.12766304334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22079.166666666668,
            "unit": "ns",
            "range": "± 1956.5230528006437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84585.26315789473,
            "unit": "ns",
            "range": "± 5513.618891533493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68192.1052631579,
            "unit": "ns",
            "range": "± 2287.7324521027326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89677.31958762887,
            "unit": "ns",
            "range": "± 12115.326941821111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5424.489795918367,
            "unit": "ns",
            "range": "± 849.8709695261139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21155.154639175256,
            "unit": "ns",
            "range": "± 2110.458635681108"
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
          "id": "922355cec7ebbfdc2baeda0504f6087f2bd7200c",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T18:55:11+09:00",
          "tree_id": "dd2512e131b5f33a2a42b9eb3dd262f9502b4732",
          "url": "https://github.com/OnedgeLee/libplanet/commit/922355cec7ebbfdc2baeda0504f6087f2bd7200c"
        },
        "date": 1700820457612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 906365.625,
            "unit": "ns",
            "range": "± 71007.12170083253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733630.8510638298,
            "unit": "ns",
            "range": "± 122399.62227311503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1306622.9166666667,
            "unit": "ns",
            "range": "± 107922.24440642113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4997214.0625,
            "unit": "ns",
            "range": "± 231510.7312588253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32957.608695652176,
            "unit": "ns",
            "range": "± 2550.8987296078144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4942383.333333333,
            "unit": "ns",
            "range": "± 36438.10146117986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12905830.76923077,
            "unit": "ns",
            "range": "± 98958.5046422269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31251953.333333332,
            "unit": "ns",
            "range": "± 159458.5833673553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64267140,
            "unit": "ns",
            "range": "± 497771.4475539954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125418760,
            "unit": "ns",
            "range": "± 769919.9149447762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305128.75,
            "unit": "ns",
            "range": "± 5897.789305532418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059289.564732143,
            "unit": "ns",
            "range": "± 2873.676236385529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 707939.892578125,
            "unit": "ns",
            "range": "± 1407.5879374080187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900481.8359375,
            "unit": "ns",
            "range": "± 2452.6304332023033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594450.537109375,
            "unit": "ns",
            "range": "± 847.4808839789209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561238.4309895834,
            "unit": "ns",
            "range": "± 762.1253304665177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2051763.3333333333,
            "unit": "ns",
            "range": "± 91015.33483507734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212260.465116279,
            "unit": "ns",
            "range": "± 81762.39134145816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2664264.705882353,
            "unit": "ns",
            "range": "± 52688.09093590874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2560934.3283582088,
            "unit": "ns",
            "range": "± 121232.25712385747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5966877.173913044,
            "unit": "ns",
            "range": "± 334681.60040412785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164379.6875,
            "unit": "ns",
            "range": "± 7574.040453396228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154438.23529411765,
            "unit": "ns",
            "range": "± 6112.771787731404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138932.60869565216,
            "unit": "ns",
            "range": "± 3390.4481031157147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2685164.285714286,
            "unit": "ns",
            "range": "± 26602.649004674968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2500211.111111111,
            "unit": "ns",
            "range": "± 51507.90788959884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8879.545454545454,
            "unit": "ns",
            "range": "± 712.4765115562276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49469.47368421053,
            "unit": "ns",
            "range": "± 4048.0379719281855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43522.58064516129,
            "unit": "ns",
            "range": "± 1297.1018149241675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46378.35051546392,
            "unit": "ns",
            "range": "± 8186.4118463173945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1958.888888888889,
            "unit": "ns",
            "range": "± 266.43482431073664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8830.434782608696,
            "unit": "ns",
            "range": "± 877.9019858724854"
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
          "id": "c3042714276fdd755ffc25f04c7052eef26b1369",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T18:59:06+09:00",
          "tree_id": "8976b180dc80a8265dac232ecc28a7e17e593bc1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c3042714276fdd755ffc25f04c7052eef26b1369"
        },
        "date": 1700820718058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980908.0808080808,
            "unit": "ns",
            "range": "± 114590.28138151787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1766966.0377358492,
            "unit": "ns",
            "range": "± 73721.08805751013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1387408.163265306,
            "unit": "ns",
            "range": "± 147088.5718671278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5077323.80952381,
            "unit": "ns",
            "range": "± 232623.5680750408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34422.22222222222,
            "unit": "ns",
            "range": "± 1974.260082008127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5215864.285714285,
            "unit": "ns",
            "range": "± 48041.27403586431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13487260,
            "unit": "ns",
            "range": "± 92588.22665050732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33540492.307692308,
            "unit": "ns",
            "range": "± 524133.4125035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67309427.77777778,
            "unit": "ns",
            "range": "± 1350712.5404134165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133324806.66666667,
            "unit": "ns",
            "range": "± 1876998.3025590417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320377.566964286,
            "unit": "ns",
            "range": "± 9914.149695233898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078388.28125,
            "unit": "ns",
            "range": "± 1709.8723259821127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747215.0530133928,
            "unit": "ns",
            "range": "± 1710.96036385136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917834.2075892857,
            "unit": "ns",
            "range": "± 4926.037009956112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623842.16796875,
            "unit": "ns",
            "range": "± 1883.2938590335625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548271.9866071428,
            "unit": "ns",
            "range": "± 963.6926941043382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156494.285714286,
            "unit": "ns",
            "range": "± 65212.69699022956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323554.5454545454,
            "unit": "ns",
            "range": "± 97555.86019602235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2819920,
            "unit": "ns",
            "range": "± 107305.37900607017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622374.7126436783,
            "unit": "ns",
            "range": "± 144486.55382711245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5806172.413793104,
            "unit": "ns",
            "range": "± 166897.99471651568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183193.6170212766,
            "unit": "ns",
            "range": "± 10768.510529991872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174703.2967032967,
            "unit": "ns",
            "range": "± 12332.202205332638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143233.67346938775,
            "unit": "ns",
            "range": "± 5497.929418531713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2865321.4285714286,
            "unit": "ns",
            "range": "± 27858.13452729129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2584146.6666666665,
            "unit": "ns",
            "range": "± 36464.71614875843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13207.368421052632,
            "unit": "ns",
            "range": "± 2492.4243561906924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63660.204081632655,
            "unit": "ns",
            "range": "± 10156.920750561118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56090.816326530614,
            "unit": "ns",
            "range": "± 12363.557079442708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73275.25773195876,
            "unit": "ns",
            "range": "± 15937.737128483215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3700,
            "unit": "ns",
            "range": "± 1082.339287531102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13246.315789473685,
            "unit": "ns",
            "range": "± 2848.8075342678435"
          }
        ]
      }
    ]
  }
}