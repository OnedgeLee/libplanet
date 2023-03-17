window.BENCHMARK_DATA = {
  "lastUpdate": 1679043428680,
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
          "id": "679a8a98e6576a4515f5b449340f31ab85047b7d",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-17T17:42:57+09:00",
          "tree_id": "0e5ef6e39328e71b5e04266b0f2f1b9e4003d975",
          "url": "https://github.com/OnedgeLee/libplanet/commit/679a8a98e6576a4515f5b449340f31ab85047b7d"
        },
        "date": 1679043416974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3477580.878787879,
            "unit": "ns",
            "range": "± 107911.97224467194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5385335.8,
            "unit": "ns",
            "range": "± 187166.777675406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24786492.89473684,
            "unit": "ns",
            "range": "± 525716.0911518576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6578451.25,
            "unit": "ns",
            "range": "± 324547.0736997383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28375903.6,
            "unit": "ns",
            "range": "± 482691.16273951874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7901162.066666666,
            "unit": "ns",
            "range": "± 135341.07825071688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22090066.933333334,
            "unit": "ns",
            "range": "± 288926.8404928997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53428824.733333334,
            "unit": "ns",
            "range": "± 935978.3772698924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108427228.73333333,
            "unit": "ns",
            "range": "± 1392254.8099259431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 216013146.92857143,
            "unit": "ns",
            "range": "± 2134208.4888391644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466550.4444444445,
            "unit": "ns",
            "range": "± 91782.48315393573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2676411.875,
            "unit": "ns",
            "range": "± 81225.94711081174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2311328.129411765,
            "unit": "ns",
            "range": "± 124118.67318616871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5456837.666666667,
            "unit": "ns",
            "range": "± 169025.84584089252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49752.294117647056,
            "unit": "ns",
            "range": "± 2381.0680474383853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902325.5359375,
            "unit": "ns",
            "range": "± 31411.06271563968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898196.5001395089,
            "unit": "ns",
            "range": "± 4438.109140598559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368644.6654947917,
            "unit": "ns",
            "range": "± 3766.096356142388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604892.66640625,
            "unit": "ns",
            "range": "± 2161.586612352044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854378.3668619791,
            "unit": "ns",
            "range": "± 646.641967404359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753713.38828125,
            "unit": "ns",
            "range": "± 485.8818458613774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197747.25,
            "unit": "ns",
            "range": "± 6145.041951089119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201814.6888888889,
            "unit": "ns",
            "range": "± 7582.683438485536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164252.88888888888,
            "unit": "ns",
            "range": "± 3312.306835902042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12107089.0625,
            "unit": "ns",
            "range": "± 235363.0060887419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9996150.666666666,
            "unit": "ns",
            "range": "± 169181.8925487623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21301.483870967742,
            "unit": "ns",
            "range": "± 1669.794419869803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55719.75268817204,
            "unit": "ns",
            "range": "± 4435.765711694161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42143.07692307692,
            "unit": "ns",
            "range": "± 1078.594897932562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94170.81914893616,
            "unit": "ns",
            "range": "± 11832.5528926005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5847.041666666667,
            "unit": "ns",
            "range": "± 579.6239782310174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19150.821052631578,
            "unit": "ns",
            "range": "± 1503.8697033514757"
          }
        ]
      }
    ]
  }
}