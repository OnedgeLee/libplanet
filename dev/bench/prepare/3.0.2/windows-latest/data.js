window.BENCHMARK_DATA = {
  "lastUpdate": 1689920391026,
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
          "id": "cd6f6a152a017c7e70ee1412eda4e1b6853c583d",
          "message": "Prepare 3.0.2",
          "timestamp": "2023-07-21T15:03:55+09:00",
          "tree_id": "8f0ca409e45d6626d43d9b9df922d6e7dee4e64a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/cd6f6a152a017c7e70ee1412eda4e1b6853c583d"
        },
        "date": 1689920347856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356600,
            "unit": "ns",
            "range": "± 145945.4517892188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2451734.9206349207,
            "unit": "ns",
            "range": "± 95958.41027662024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1642560.2272727273,
            "unit": "ns",
            "range": "± 87478.57345510877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4952816.4948453605,
            "unit": "ns",
            "range": "± 291044.7329880511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46800,
            "unit": "ns",
            "range": "± 2535.0401518375547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7080733.333333333,
            "unit": "ns",
            "range": "± 11625.937564017115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19405109.375,
            "unit": "ns",
            "range": "± 592824.3363596352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47207893.333333336,
            "unit": "ns",
            "range": "± 810630.8570372537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97680355.26315789,
            "unit": "ns",
            "range": "± 3292994.1040891865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188451186.66666666,
            "unit": "ns",
            "range": "± 2752537.8253185777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4810796.651785715,
            "unit": "ns",
            "range": "± 25059.565028688634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532916.2806919643,
            "unit": "ns",
            "range": "± 6943.500710927944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179845.8984375,
            "unit": "ns",
            "range": "± 7772.09649426372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642730.46875,
            "unit": "ns",
            "range": "± 11667.377241747747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837734.21875,
            "unit": "ns",
            "range": "± 4205.347335697548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786972.1549479166,
            "unit": "ns",
            "range": "± 3460.160568282679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3118578.5714285714,
            "unit": "ns",
            "range": "± 39312.85126679664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3247100,
            "unit": "ns",
            "range": "± 89934.96827440658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3969273.913043478,
            "unit": "ns",
            "range": "± 97476.97265317825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3534153.3333333335,
            "unit": "ns",
            "range": "± 157642.45477669587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6028675.609756097,
            "unit": "ns",
            "range": "± 214877.19723191642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259819.04761904763,
            "unit": "ns",
            "range": "± 9494.677278971807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248810.44776119402,
            "unit": "ns",
            "range": "± 11726.519211887866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218327.27272727274,
            "unit": "ns",
            "range": "± 10976.789344167086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4015257.1428571427,
            "unit": "ns",
            "range": "± 70102.07628095688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3593442.3076923075,
            "unit": "ns",
            "range": "± 58752.04197215137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18786.458333333332,
            "unit": "ns",
            "range": "± 2386.7449664946857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82032.96703296703,
            "unit": "ns",
            "range": "± 6565.483056528877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69830.95238095238,
            "unit": "ns",
            "range": "± 2526.8787355190957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92390.625,
            "unit": "ns",
            "range": "± 14739.828450940598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4560,
            "unit": "ns",
            "range": "± 707.1669579264707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17567.021276595744,
            "unit": "ns",
            "range": "± 2011.493228995595"
          }
        ]
      }
    ]
  }
}