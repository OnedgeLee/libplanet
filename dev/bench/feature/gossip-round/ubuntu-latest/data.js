window.BENCHMARK_DATA = {
  "lastUpdate": 1688136937119,
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
          "id": "71acc5d584de19e5e0622b2b9bc8cd6966cad2bb",
          "message": "feat: Fix gossip to forget only with NewRound",
          "timestamp": "2023-06-30T23:38:10+09:00",
          "tree_id": "eb102d493eedf9889af83dec5cde100aaf559683",
          "url": "https://github.com/OnedgeLee/libplanet/commit/71acc5d584de19e5e0622b2b9bc8cd6966cad2bb"
        },
        "date": 1688136922085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10747621.304347826,
            "unit": "ns",
            "range": "± 261271.42057854403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28387271.6,
            "unit": "ns",
            "range": "± 187131.13266362555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71907806.35714285,
            "unit": "ns",
            "range": "± 216438.24531708707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142987295.6,
            "unit": "ns",
            "range": "± 902651.5936096116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282671717.38461536,
            "unit": "ns",
            "range": "± 1383482.8347032077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58083.494736842105,
            "unit": "ns",
            "range": "± 3550.2195223516665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363792.6666666667,
            "unit": "ns",
            "range": "± 11854.803383318631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344838.44444444444,
            "unit": "ns",
            "range": "± 8478.32640113027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317021.5263157895,
            "unit": "ns",
            "range": "± 13105.643947913191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5709763.533333333,
            "unit": "ns",
            "range": "± 50880.43791627958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5052691.933333334,
            "unit": "ns",
            "range": "± 78987.33351933864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24009.81052631579,
            "unit": "ns",
            "range": "± 1936.2683912275024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110681.92783505155,
            "unit": "ns",
            "range": "± 6388.124363234849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95608.71764705882,
            "unit": "ns",
            "range": "± 5166.2185710720405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111444.9175257732,
            "unit": "ns",
            "range": "± 12085.35218479905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6550.561855670103,
            "unit": "ns",
            "range": "± 1042.1669313505813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21474.42105263158,
            "unit": "ns",
            "range": "± 1664.8109060021086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1833452.0681818181,
            "unit": "ns",
            "range": "± 100161.66291468198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3443674.282608696,
            "unit": "ns",
            "range": "± 131649.255352017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349761.960526316,
            "unit": "ns",
            "range": "± 119633.0787934999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6538613.82278481,
            "unit": "ns",
            "range": "± 337936.4621191523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7528572.880022322,
            "unit": "ns",
            "range": "± 30507.843918859955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2381276.1829427085,
            "unit": "ns",
            "range": "± 5092.878655659518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1701278.8618489583,
            "unit": "ns",
            "range": "± 4542.397754352171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3283956.7547433036,
            "unit": "ns",
            "range": "± 3896.361862053392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050377.747265625,
            "unit": "ns",
            "range": "± 969.3126479571841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957351.5886579241,
            "unit": "ns",
            "range": "± 313.3761299363595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4429964.275,
            "unit": "ns",
            "range": "± 157232.66649222665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4826587.133333334,
            "unit": "ns",
            "range": "± 53815.56087344821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5578149.2,
            "unit": "ns",
            "range": "± 123624.75858295837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5110104.591836735,
            "unit": "ns",
            "range": "± 203482.32975299092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8408056.88235294,
            "unit": "ns",
            "range": "± 264624.2891420308"
          }
        ]
      }
    ]
  }
}