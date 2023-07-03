window.BENCHMARK_DATA = {
  "lastUpdate": 1688386247170,
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
      }
    ]
  }
}