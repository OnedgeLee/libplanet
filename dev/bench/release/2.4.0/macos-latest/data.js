window.BENCHMARK_DATA = {
  "lastUpdate": 1688386651930,
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
          "id": "f9b5a2d910a3996793afe793d49a469108a6917f",
          "message": "Release 2.4.0",
          "timestamp": "2023-07-03T20:53:11+09:00",
          "tree_id": "4b06aaf630d84c6c1f4e79ccf2b7e764e850d9c0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f9b5a2d910a3996793afe793d49a469108a6917f"
        },
        "date": 1688386219899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8581713.958333334,
            "unit": "ns",
            "range": "± 217560.10314043437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21320613,
            "unit": "ns",
            "range": "± 465543.89588998054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57037859.07692308,
            "unit": "ns",
            "range": "± 3658330.305927799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106071688.41666667,
            "unit": "ns",
            "range": "± 4141668.9409242542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219897143.26666668,
            "unit": "ns",
            "range": "± 6452833.167167051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69313.625,
            "unit": "ns",
            "range": "± 11219.8759231811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325708.26923076925,
            "unit": "ns",
            "range": "± 22416.500405369516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317539.347826087,
            "unit": "ns",
            "range": "± 23530.22040986926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312854.86559139786,
            "unit": "ns",
            "range": "± 26519.374023608107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4445635.322916667,
            "unit": "ns",
            "range": "± 279205.8005677228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3913294.368686869,
            "unit": "ns",
            "range": "± 242058.9545216099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22203.695652173912,
            "unit": "ns",
            "range": "± 2980.9690906719125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97790.62,
            "unit": "ns",
            "range": "± 13984.553377107608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105529.8469387755,
            "unit": "ns",
            "range": "± 15923.902056441286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105296.3085106383,
            "unit": "ns",
            "range": "± 15009.951871454074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5872.974226804124,
            "unit": "ns",
            "range": "± 1583.4110995778456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19027.98947368421,
            "unit": "ns",
            "range": "± 3697.0048155596164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512532.125,
            "unit": "ns",
            "range": "± 110745.14466422444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937377.6352941175,
            "unit": "ns",
            "range": "± 157927.79907730344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199090.394117647,
            "unit": "ns",
            "range": "± 215491.42277141375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7649099.903225807,
            "unit": "ns",
            "range": "± 1932481.4996938019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373513.034090909,
            "unit": "ns",
            "range": "± 185784.7926246522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564925.5933333333,
            "unit": "ns",
            "range": "± 179918.76314116863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4540124.3,
            "unit": "ns",
            "range": "± 134097.29360081087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931738.1505376343,
            "unit": "ns",
            "range": "± 242747.93201729396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7769254.42,
            "unit": "ns",
            "range": "± 630447.0896539654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6805319.942471591,
            "unit": "ns",
            "range": "± 234722.5937003161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987105.370814732,
            "unit": "ns",
            "range": "± 29348.380093646985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1324382.1381510417,
            "unit": "ns",
            "range": "± 12680.860053905928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583116.5990885417,
            "unit": "ns",
            "range": "± 46247.969887019244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796928.5625751202,
            "unit": "ns",
            "range": "± 7370.9236820086135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765470.2784016927,
            "unit": "ns",
            "range": "± 19161.212390425575"
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
          "id": "75d95740e7c1ce1d7bcfc0df5c34da920f5c453f",
          "message": "Release 2.4.0",
          "timestamp": "2023-07-03T20:58:10+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/75d95740e7c1ce1d7bcfc0df5c34da920f5c453f"
        },
        "date": 1688386625806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9116232.347826088,
            "unit": "ns",
            "range": "± 810491.9183222969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21971945.847368423,
            "unit": "ns",
            "range": "± 1256978.8299139002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54579567.76923077,
            "unit": "ns",
            "range": "± 1872212.3548122148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106575462.57692307,
            "unit": "ns",
            "range": "± 2781990.2437910154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223118701.42307693,
            "unit": "ns",
            "range": "± 3461371.010045645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74175.25842696629,
            "unit": "ns",
            "range": "± 7764.806392142471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334574.9285714286,
            "unit": "ns",
            "range": "± 18197.114373243603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329805.0652173913,
            "unit": "ns",
            "range": "± 34215.32074121579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299650.9024390244,
            "unit": "ns",
            "range": "± 15910.216908345757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4118425.5,
            "unit": "ns",
            "range": "± 64553.469665335055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678365.8571428573,
            "unit": "ns",
            "range": "± 51543.11939734333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17759.872340425532,
            "unit": "ns",
            "range": "± 2249.2100703395945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113040.35227272728,
            "unit": "ns",
            "range": "± 22580.24666875019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115547.88461538461,
            "unit": "ns",
            "range": "± 14829.399998178715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130893.89361702128,
            "unit": "ns",
            "range": "± 26163.22088422884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5138.095744680851,
            "unit": "ns",
            "range": "± 637.0833121722497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17828.73157894737,
            "unit": "ns",
            "range": "± 3829.1926804613195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636364.8585858585,
            "unit": "ns",
            "range": "± 168825.18555546427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984674.4864864866,
            "unit": "ns",
            "range": "± 149025.7035869843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2087186.4787234042,
            "unit": "ns",
            "range": "± 205977.58832370592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5699449.636363637,
            "unit": "ns",
            "range": "± 178050.34492363708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3569320.6530612246,
            "unit": "ns",
            "range": "± 308969.6445486141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3768637.0103092785,
            "unit": "ns",
            "range": "± 407477.57173423294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4785314.6,
            "unit": "ns",
            "range": "± 422507.1938703554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4194633.051020408,
            "unit": "ns",
            "range": "± 378027.2614741929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7784741.632653061,
            "unit": "ns",
            "range": "± 637185.1870972177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6844491.584189967,
            "unit": "ns",
            "range": "± 346477.0876782128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2214956.2721737134,
            "unit": "ns",
            "range": "± 40020.389417201106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318161.3369605655,
            "unit": "ns",
            "range": "± 27171.03459121194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2819333.1860795454,
            "unit": "ns",
            "range": "± 176701.72995978937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919233.9641804246,
            "unit": "ns",
            "range": "± 37777.53114058686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753499.3695913461,
            "unit": "ns",
            "range": "± 8783.80688730593"
          }
        ]
      }
    ]
  }
}