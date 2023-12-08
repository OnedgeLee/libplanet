window.BENCHMARK_DATA = {
  "lastUpdate": 1702025606785,
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
          "id": "c440d85a5ce59c88ba6d826ce8d5b8de04a66844",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:33:28+09:00",
          "tree_id": "89f49ba453970fb5696b15c4ec9a17c3c6119325",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c440d85a5ce59c88ba6d826ce8d5b8de04a66844"
        },
        "date": 1702025576741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8857695.823529411,
            "unit": "ns",
            "range": "± 421037.1822047769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21736841.439393938,
            "unit": "ns",
            "range": "± 622027.4008978594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50434075.55555555,
            "unit": "ns",
            "range": "± 1068529.2259741738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106398788.36666666,
            "unit": "ns",
            "range": "± 1959871.5218952808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221804283.54166666,
            "unit": "ns",
            "range": "± 10916909.071507944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48748.163043478264,
            "unit": "ns",
            "range": "± 11325.296464379717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248237.51546391752,
            "unit": "ns",
            "range": "± 39382.039317359246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266503.51136363635,
            "unit": "ns",
            "range": "± 44191.49159122535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257461.32558139536,
            "unit": "ns",
            "range": "± 41438.285731190765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4692814.971910113,
            "unit": "ns",
            "range": "± 402265.8103042432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4462312.395833333,
            "unit": "ns",
            "range": "± 1033322.5851268067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19581.03,
            "unit": "ns",
            "range": "± 7212.955131315018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89523.4387755102,
            "unit": "ns",
            "range": "± 17378.8381647041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87251.57216494845,
            "unit": "ns",
            "range": "± 17856.669079930743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96143.1052631579,
            "unit": "ns",
            "range": "± 13586.105544310416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4967.550505050505,
            "unit": "ns",
            "range": "± 1891.301778085813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17475.255319148935,
            "unit": "ns",
            "range": "± 5000.279651719642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1150070,
            "unit": "ns",
            "range": "± 109759.96221909462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495260.606741573,
            "unit": "ns",
            "range": "± 144503.18495661247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1986518.2967032967,
            "unit": "ns",
            "range": "± 153826.654242906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15941522.38,
            "unit": "ns",
            "range": "± 4995233.466528929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274293,
            "unit": "ns",
            "range": "± 114875.69738741046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585022.712765957,
            "unit": "ns",
            "range": "± 373371.98025626736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4015858.2536231885,
            "unit": "ns",
            "range": "± 173585.784619374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4282301.7,
            "unit": "ns",
            "range": "± 110140.31989542552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19878985.335164834,
            "unit": "ns",
            "range": "± 2795369.5501806326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4901655.464409722,
            "unit": "ns",
            "range": "± 456233.7747247559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523954.5673519736,
            "unit": "ns",
            "range": "± 101089.03255151057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 957492.3025607639,
            "unit": "ns",
            "range": "± 36115.90061570564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2236698.0677688955,
            "unit": "ns",
            "range": "± 81217.42943359437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640013.9915597098,
            "unit": "ns",
            "range": "± 7622.5224395245305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558048.9801199777,
            "unit": "ns",
            "range": "± 3814.5736341980346"
          }
        ]
      }
    ]
  }
}