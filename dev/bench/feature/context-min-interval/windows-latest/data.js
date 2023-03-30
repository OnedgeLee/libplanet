window.BENCHMARK_DATA = {
  "lastUpdate": 1680153369386,
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
          "id": "23fe38423f0ca0a4e0651562690262ac04658dc4",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T13:54:50+09:00",
          "tree_id": "0501e9e753e591811ca8195fe422f2f2cb826f45",
          "url": "https://github.com/OnedgeLee/libplanet/commit/23fe38423f0ca0a4e0651562690262ac04658dc4"
        },
        "date": 1680153320414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628856.9892473118,
            "unit": "ns",
            "range": "± 149507.61969665147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945204.1666666665,
            "unit": "ns",
            "range": "± 74118.65035003096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559293.6842105263,
            "unit": "ns",
            "range": "± 172214.18122502454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5849976.923076923,
            "unit": "ns",
            "range": "± 92434.55481083319"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58546.23655913978,
            "unit": "ns",
            "range": "± 4673.1555101122385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8717759.45945946,
            "unit": "ns",
            "range": "± 288643.10090438626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23217337.037037037,
            "unit": "ns",
            "range": "± 626478.5189688029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59751291.666666664,
            "unit": "ns",
            "range": "± 1488093.5743475587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118240992.85714285,
            "unit": "ns",
            "range": "± 1693622.1549658615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239325763.63636363,
            "unit": "ns",
            "range": "± 5849029.609426512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5843412.109375,
            "unit": "ns",
            "range": "± 86298.82718700492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880612.1223958333,
            "unit": "ns",
            "range": "± 21589.655753197425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442755.2083333333,
            "unit": "ns",
            "range": "± 13043.729364566521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3262074.6223958335,
            "unit": "ns",
            "range": "± 44626.82736636575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038097.9910714285,
            "unit": "ns",
            "range": "± 17341.866045411367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933469.5638020834,
            "unit": "ns",
            "range": "± 11314.217786707739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3849966.6666666665,
            "unit": "ns",
            "range": "± 99299.37022728912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5942553.333333333,
            "unit": "ns",
            "range": "± 166790.3696329583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28328832.258064516,
            "unit": "ns",
            "range": "± 852943.4195330492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7394023.529411765,
            "unit": "ns",
            "range": "± 149003.71442271062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31249561.53846154,
            "unit": "ns",
            "range": "± 438807.9810472563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215728.57142857142,
            "unit": "ns",
            "range": "± 10456.12146976479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218098.50746268657,
            "unit": "ns",
            "range": "± 10332.978867879017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198681.39534883722,
            "unit": "ns",
            "range": "± 10787.79824483533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13517860,
            "unit": "ns",
            "range": "± 242950.62637734207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10801306.666666666,
            "unit": "ns",
            "range": "± 162912.5245850259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25222.340425531915,
            "unit": "ns",
            "range": "± 2022.1969451601076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67219.56521739131,
            "unit": "ns",
            "range": "± 5228.687544237119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53954.255319148935,
            "unit": "ns",
            "range": "± 3498.7836563434644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124246.8085106383,
            "unit": "ns",
            "range": "± 18926.681980213594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8539.583333333334,
            "unit": "ns",
            "range": "± 1104.581765734426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24728.125,
            "unit": "ns",
            "range": "± 2135.006625159202"
          }
        ]
      }
    ]
  }
}