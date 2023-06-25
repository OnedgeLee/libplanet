window.BENCHMARK_DATA = {
  "lastUpdate": 1687707710709,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687707675761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10091844.632653061,
            "unit": "ns",
            "range": "± 830008.68441648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28239508.31632653,
            "unit": "ns",
            "range": "± 2898027.6906200233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52530390.96666667,
            "unit": "ns",
            "range": "± 965480.1909514002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109334137.9,
            "unit": "ns",
            "range": "± 2495369.4887195597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228892164.18333334,
            "unit": "ns",
            "range": "± 10221892.45133379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71581.91111111111,
            "unit": "ns",
            "range": "± 13581.164415042418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334123.8617021277,
            "unit": "ns",
            "range": "± 30580.666805532393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338764.57954545453,
            "unit": "ns",
            "range": "± 34095.09241920396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321488.8333333333,
            "unit": "ns",
            "range": "± 35851.162880000345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4405528.023809524,
            "unit": "ns",
            "range": "± 159353.0744410935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4029149.761904762,
            "unit": "ns",
            "range": "± 144788.5225730305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18583.267441860466,
            "unit": "ns",
            "range": "± 2830.1154431844343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95253.10215053764,
            "unit": "ns",
            "range": "± 18082.353918127752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106487.375,
            "unit": "ns",
            "range": "± 24514.573369732545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113983.97894736842,
            "unit": "ns",
            "range": "± 20712.934819832168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6664.369565217391,
            "unit": "ns",
            "range": "± 1855.6460011815045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18902.793478260868,
            "unit": "ns",
            "range": "± 4213.2324374836835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1821244.4263157896,
            "unit": "ns",
            "range": "± 312365.68796116504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3412593.763157895,
            "unit": "ns",
            "range": "± 365401.4596000618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2908931.159574468,
            "unit": "ns",
            "range": "± 314736.16633906716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7159792.530612245,
            "unit": "ns",
            "range": "± 593211.3153779017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3402451.882352941,
            "unit": "ns",
            "range": "± 163007.54791841394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3589852.1938775512,
            "unit": "ns",
            "range": "± 328219.75966085284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4855185.04040404,
            "unit": "ns",
            "range": "± 410625.1505627138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4651716.773195877,
            "unit": "ns",
            "range": "± 363912.0960038376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8308960.193548387,
            "unit": "ns",
            "range": "± 624777.0414848571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8168276.663667929,
            "unit": "ns",
            "range": "± 596822.0154500594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213651.135945638,
            "unit": "ns",
            "range": "± 137463.5228160107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366618.09296875,
            "unit": "ns",
            "range": "± 23103.6347188891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688189.2978515625,
            "unit": "ns",
            "range": "± 49857.50923401976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851548.9121744792,
            "unit": "ns",
            "range": "± 15817.1214450191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843789.2746394231,
            "unit": "ns",
            "range": "± 9978.413342929765"
          }
        ]
      }
    ]
  }
}