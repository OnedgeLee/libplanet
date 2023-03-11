window.BENCHMARK_DATA = {
  "lastUpdate": 1678518958307,
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "afc9187ac92e7857c73665b877e5e13c6bd5c1d4",
          "message": "fix: ActionExecutionState total count",
          "timestamp": "2023-03-11T15:58:40+09:00",
          "tree_id": "f2b277ea28629d1c15ce8061908f3e006d899d07",
          "url": "https://github.com/OnedgeLee/libplanet/commit/afc9187ac92e7857c73665b877e5e13c6bd5c1d4"
        },
        "date": 1678518921474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8899490.739130436,
            "unit": "ns",
            "range": "± 216846.775201506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22698346.153846152,
            "unit": "ns",
            "range": "± 283122.00932661706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57755332.5,
            "unit": "ns",
            "range": "± 1324570.9783223157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113044273.8,
            "unit": "ns",
            "range": "± 1321298.518887559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 227552829.06666666,
            "unit": "ns",
            "range": "± 3232120.486527503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64673.703296703294,
            "unit": "ns",
            "range": "± 3950.9211794902417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230928.05263157896,
            "unit": "ns",
            "range": "± 11706.891453492668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227335.77272727274,
            "unit": "ns",
            "range": "± 12461.054246581993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194895.19607843139,
            "unit": "ns",
            "range": "± 7890.096970302983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12895969.642857144,
            "unit": "ns",
            "range": "± 144928.45557011763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10327790.133333333,
            "unit": "ns",
            "range": "± 181325.5392404448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19230,
            "unit": "ns",
            "range": "± 1230.067572957906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56053.484210526316,
            "unit": "ns",
            "range": "± 5854.479922871136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46676.73846153846,
            "unit": "ns",
            "range": "± 2135.0024903156077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103549.48936170213,
            "unit": "ns",
            "range": "± 15556.116795414393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5581.105263157895,
            "unit": "ns",
            "range": "± 471.74951597544674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19218.369565217392,
            "unit": "ns",
            "range": "± 1499.4916920237204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1771998.387755102,
            "unit": "ns",
            "range": "± 200548.63295622583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3188592.659574468,
            "unit": "ns",
            "range": "± 123151.40150542808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738505.710526316,
            "unit": "ns",
            "range": "± 166004.23035662563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7129379,
            "unit": "ns",
            "range": "± 251278.65330226521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3774747.777777778,
            "unit": "ns",
            "range": "± 186433.34888570404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6045912.15625,
            "unit": "ns",
            "range": "± 184185.912624176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27341686.25,
            "unit": "ns",
            "range": "± 494771.8106945194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7226809.942028985,
            "unit": "ns",
            "range": "± 347556.52475240215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31004592.222222224,
            "unit": "ns",
            "range": "± 836866.7805918572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7365040.842633928,
            "unit": "ns",
            "range": "± 39379.0031692429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2210265.4963727677,
            "unit": "ns",
            "range": "± 3928.303879557194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1460602.2270507812,
            "unit": "ns",
            "range": "± 3203.4165962732422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911748.0760216345,
            "unit": "ns",
            "range": "± 97361.64181787055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 963970.5652994792,
            "unit": "ns",
            "range": "± 12025.286697242356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909556.9133463542,
            "unit": "ns",
            "range": "± 14378.023680691918"
          }
        ]
      }
    ]
  }
}