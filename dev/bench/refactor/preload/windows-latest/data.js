window.BENCHMARK_DATA = {
  "lastUpdate": 1683859025207,
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
          "id": "5b59f24820224f9e9cf31723c5d9a81712b9271d",
          "message": "refactor: replace preload logic with blocksync",
          "timestamp": "2023-05-12T11:13:36+09:00",
          "tree_id": "bcf324b7894514c9753fb06dd952fe13075db52f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5b59f24820224f9e9cf31723c5d9a81712b9271d"
        },
        "date": 1683858973936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814317.0212765958,
            "unit": "ns",
            "range": "± 191867.02700372163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3460896.7741935486,
            "unit": "ns",
            "range": "± 199865.82317167128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2838806.3829787234,
            "unit": "ns",
            "range": "± 191120.48601307304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7207113.684210527,
            "unit": "ns",
            "range": "± 448658.642833807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85402.12765957447,
            "unit": "ns",
            "range": "± 12720.443107209076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10099619.696969697,
            "unit": "ns",
            "range": "± 279163.8166973476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25418720.689655174,
            "unit": "ns",
            "range": "± 721563.7667986456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65682053.333333336,
            "unit": "ns",
            "range": "± 812596.3352706177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130776800,
            "unit": "ns",
            "range": "± 2501964.965282288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265145607.14285713,
            "unit": "ns",
            "range": "± 2738642.5816351166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6225357.533482143,
            "unit": "ns",
            "range": "± 71139.07599890186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970098.158482143,
            "unit": "ns",
            "range": "± 22202.93877062089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482469.8958333333,
            "unit": "ns",
            "range": "± 18476.649131282546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3315114.1536458335,
            "unit": "ns",
            "range": "± 49319.23066378753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1077403.203125,
            "unit": "ns",
            "range": "± 14493.868484872855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1011802.6822916666,
            "unit": "ns",
            "range": "± 12901.827059587175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4145751.5463917525,
            "unit": "ns",
            "range": "± 288962.3433199537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4409513.978494624,
            "unit": "ns",
            "range": "± 281165.37590326736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5472552.459016394,
            "unit": "ns",
            "range": "± 243589.39605174208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5449174.074074074,
            "unit": "ns",
            "range": "± 285555.4284100452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8884466.279069768,
            "unit": "ns",
            "range": "± 479367.7960693071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365534.7826086957,
            "unit": "ns",
            "range": "± 30089.808558266042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348336.84210526315,
            "unit": "ns",
            "range": "± 33190.66471109258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331106.5934065934,
            "unit": "ns",
            "range": "± 22329.83456274389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5221888,
            "unit": "ns",
            "range": "± 134889.28892490562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4810133.783783784,
            "unit": "ns",
            "range": "± 237086.2632888742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34030.769230769234,
            "unit": "ns",
            "range": "± 5767.277276105873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141139.69072164947,
            "unit": "ns",
            "range": "± 18581.641278737567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125875,
            "unit": "ns",
            "range": "± 16064.893298845676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147129.5918367347,
            "unit": "ns",
            "range": "± 29514.931427182288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8531.111111111111,
            "unit": "ns",
            "range": "± 1226.9350178707116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32597,
            "unit": "ns",
            "range": "± 8107.07952248147"
          }
        ]
      }
    ]
  }
}