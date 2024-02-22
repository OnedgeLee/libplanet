window.BENCHMARK_DATA = {
  "lastUpdate": 1708600700411,
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
          "id": "7038c92385b0f0020dfb0519218f3e88cbd29e6e",
          "message": "Merge tag '4.0.6' into merge/4.0.6-to-main\n\nLibplanet 4.0.6",
          "timestamp": "2024-02-22T20:06:10+09:00",
          "tree_id": "8eefd7e644349c641f03cff56fdc62142c490c8f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7038c92385b0f0020dfb0519218f3e88cbd29e6e"
        },
        "date": 1708600672077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974285.7142857143,
            "unit": "ns",
            "range": "± 105243.15782055019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732059.0163934426,
            "unit": "ns",
            "range": "± 72222.01967324827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530753.5353535353,
            "unit": "ns",
            "range": "± 136535.92882396455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7241113.888888889,
            "unit": "ns",
            "range": "± 357139.8531863383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34442.64705882353,
            "unit": "ns",
            "range": "± 1659.555431970341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5011964.285714285,
            "unit": "ns",
            "range": "± 37820.743334493396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13335971.42857143,
            "unit": "ns",
            "range": "± 112361.62381122171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32701933.333333332,
            "unit": "ns",
            "range": "± 285954.09888068866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66058129.4117647,
            "unit": "ns",
            "range": "± 1303980.2058336171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130567740,
            "unit": "ns",
            "range": "± 1315920.7894094537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334507.2265625,
            "unit": "ns",
            "range": "± 12633.031369401966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1091481.7708333333,
            "unit": "ns",
            "range": "± 3875.7811267357088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762773.2491629465,
            "unit": "ns",
            "range": "± 2182.8229985406288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976512.2767857143,
            "unit": "ns",
            "range": "± 6176.679538002223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624612.7253605769,
            "unit": "ns",
            "range": "± 1851.2437627682632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573664.8646763393,
            "unit": "ns",
            "range": "± 1090.861286317491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147100,
            "unit": "ns",
            "range": "± 77389.98485655338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251418.918918919,
            "unit": "ns",
            "range": "± 60000.55480223976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2845533.3333333335,
            "unit": "ns",
            "range": "± 107113.81584769794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2750744.4444444445,
            "unit": "ns",
            "range": "± 86389.86946491982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8207805.681818182,
            "unit": "ns",
            "range": "± 463581.37014870974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174155.69620253163,
            "unit": "ns",
            "range": "± 9016.050457669468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167846.47887323942,
            "unit": "ns",
            "range": "± 8230.341617383387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141040,
            "unit": "ns",
            "range": "± 4612.527697987935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2840940,
            "unit": "ns",
            "range": "± 37121.09142484133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2549500,
            "unit": "ns",
            "range": "± 46536.19175284053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11560.416666666666,
            "unit": "ns",
            "range": "± 1736.753121059171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54494.68085106383,
            "unit": "ns",
            "range": "± 4936.856494530337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44621.42857142857,
            "unit": "ns",
            "range": "± 2393.8209326278125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58965.30612244898,
            "unit": "ns",
            "range": "± 12936.347753685814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2693.877551020408,
            "unit": "ns",
            "range": "± 547.687985244856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10944.565217391304,
            "unit": "ns",
            "range": "± 1619.209149685496"
          }
        ]
      }
    ]
  }
}