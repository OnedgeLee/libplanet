window.BENCHMARK_DATA = {
  "lastUpdate": 1701044502290,
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
          "id": "5a15302db7964c549a542c33e2f0b5c45f59b075",
          "message": "Release 3.8.1",
          "timestamp": "2023-11-27T09:09:50+09:00",
          "tree_id": "568343f901d89f890975930aeb723caec806a6c4",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5a15302db7964c549a542c33e2f0b5c45f59b075"
        },
        "date": 1701044475536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7907428.525641026,
            "unit": "ns",
            "range": "± 270556.27913143445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18832728.833333332,
            "unit": "ns",
            "range": "± 341905.6460375888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47532409.1875,
            "unit": "ns",
            "range": "± 1438020.212403451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111198313.14130434,
            "unit": "ns",
            "range": "± 14767804.043476412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191696308.24074075,
            "unit": "ns",
            "range": "± 5310697.636774451"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34258.12222222222,
            "unit": "ns",
            "range": "± 2872.103353973376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213516.35074626867,
            "unit": "ns",
            "range": "± 9361.792277339444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211318.21505376344,
            "unit": "ns",
            "range": "± 14836.119661334063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193914.71276595743,
            "unit": "ns",
            "range": "± 18373.160018547354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3689060.619047619,
            "unit": "ns",
            "range": "± 72152.31935321011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3427178.6842105263,
            "unit": "ns",
            "range": "± 74803.02419395492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12166.366666666667,
            "unit": "ns",
            "range": "± 940.9163140855618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57825.22826086957,
            "unit": "ns",
            "range": "± 5311.977463590941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51988.011494252874,
            "unit": "ns",
            "range": "± 3372.8447812597306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58844.55434782609,
            "unit": "ns",
            "range": "± 9473.69243187244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3119.3595505617977,
            "unit": "ns",
            "range": "± 397.7997511080341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11962.877777777778,
            "unit": "ns",
            "range": "± 1051.5750073721977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052476.4166666667,
            "unit": "ns",
            "range": "± 89304.25757619335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2180785.076923077,
            "unit": "ns",
            "range": "± 100368.62790846732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515860.6391752576,
            "unit": "ns",
            "range": "± 99952.82807823498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6482787.317460317,
            "unit": "ns",
            "range": "± 267690.32308354933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2870508.470588235,
            "unit": "ns",
            "range": "± 132126.23550282652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3121829.8421052634,
            "unit": "ns",
            "range": "± 69170.4885010485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3579182,
            "unit": "ns",
            "range": "± 149364.171558347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3452957.203703704,
            "unit": "ns",
            "range": "± 94071.32021659655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12524120.041666666,
            "unit": "ns",
            "range": "± 2111677.846159558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4255060.790104167,
            "unit": "ns",
            "range": "± 45461.641971129975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1318184.872265625,
            "unit": "ns",
            "range": "± 22000.6642385726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 855778.81796875,
            "unit": "ns",
            "range": "± 10421.080948227349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917500.7225260416,
            "unit": "ns",
            "range": "± 25893.68788939824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619074.8672572544,
            "unit": "ns",
            "range": "± 2698.5293160506435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573036.956655649,
            "unit": "ns",
            "range": "± 5209.933057507423"
          }
        ]
      }
    ]
  }
}