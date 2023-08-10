window.BENCHMARK_DATA = {
  "lastUpdate": 1691655046391,
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
          "id": "be5f8429f90b0ff18bf05f8583069d0c729de0a6",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>:",
          "timestamp": "2023-08-10T16:54:16+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/be5f8429f90b0ff18bf05f8583069d0c729de0a6"
        },
        "date": 1691655002273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8599761.666666666,
            "unit": "ns",
            "range": "± 201339.56792675736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20514822.657894738,
            "unit": "ns",
            "range": "± 434339.5233364566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50441279.4117647,
            "unit": "ns",
            "range": "± 1605570.5802026424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100885793.15,
            "unit": "ns",
            "range": "± 2247195.3250394324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204953213.42857143,
            "unit": "ns",
            "range": "± 1337322.748325504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70917.96067415731,
            "unit": "ns",
            "range": "± 7563.597308905124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331331.77906976745,
            "unit": "ns",
            "range": "± 18016.44788480542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323535.40449438203,
            "unit": "ns",
            "range": "± 17437.505580787052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327945.4736842105,
            "unit": "ns",
            "range": "± 7051.819248080764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4264502.266666667,
            "unit": "ns",
            "range": "± 58559.204297222226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794210.8571428573,
            "unit": "ns",
            "range": "± 44965.55683709843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25645.989583333332,
            "unit": "ns",
            "range": "± 3357.579303432418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117971,
            "unit": "ns",
            "range": "± 10807.328272136478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119150.88888888889,
            "unit": "ns",
            "range": "± 9407.035560284623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114365.14835164836,
            "unit": "ns",
            "range": "± 14737.142663181676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7135.3125,
            "unit": "ns",
            "range": "± 1315.5098856377044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23757.510416666668,
            "unit": "ns",
            "range": "± 3409.9737828743414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1680793.106060606,
            "unit": "ns",
            "range": "± 165053.37664833365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3150373.290322581,
            "unit": "ns",
            "range": "± 141239.36569658387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2453028.47,
            "unit": "ns",
            "range": "± 265097.26751852233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6536149.781690141,
            "unit": "ns",
            "range": "± 318811.3819942615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333390.0322580645,
            "unit": "ns",
            "range": "± 149433.85031993777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528688.587301587,
            "unit": "ns",
            "range": "± 161522.87458643632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563073.428571428,
            "unit": "ns",
            "range": "± 148100.81660284178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3897887.8295454546,
            "unit": "ns",
            "range": "± 211698.85066998733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7351424.82,
            "unit": "ns",
            "range": "± 285165.59578963724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6771520.503348215,
            "unit": "ns",
            "range": "± 33017.91798785602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009472.5189302885,
            "unit": "ns",
            "range": "± 12208.555202558298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291733.3888113839,
            "unit": "ns",
            "range": "± 5566.556172119006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627082.6864583334,
            "unit": "ns",
            "range": "± 40219.009229112104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857813.4305338542,
            "unit": "ns",
            "range": "± 3463.06944113252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725867.2861328125,
            "unit": "ns",
            "range": "± 3571.845422348857"
          }
        ]
      },
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
          "id": "be5f8429f90b0ff18bf05f8583069d0c729de0a6",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>:",
          "timestamp": "2023-08-10T16:54:16+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/be5f8429f90b0ff18bf05f8583069d0c729de0a6"
        },
        "date": 1691655002273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8599761.666666666,
            "unit": "ns",
            "range": "± 201339.56792675736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20514822.657894738,
            "unit": "ns",
            "range": "± 434339.5233364566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50441279.4117647,
            "unit": "ns",
            "range": "± 1605570.5802026424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100885793.15,
            "unit": "ns",
            "range": "± 2247195.3250394324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204953213.42857143,
            "unit": "ns",
            "range": "± 1337322.748325504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70917.96067415731,
            "unit": "ns",
            "range": "± 7563.597308905124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331331.77906976745,
            "unit": "ns",
            "range": "± 18016.44788480542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323535.40449438203,
            "unit": "ns",
            "range": "± 17437.505580787052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327945.4736842105,
            "unit": "ns",
            "range": "± 7051.819248080764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4264502.266666667,
            "unit": "ns",
            "range": "± 58559.204297222226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794210.8571428573,
            "unit": "ns",
            "range": "± 44965.55683709843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25645.989583333332,
            "unit": "ns",
            "range": "± 3357.579303432418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117971,
            "unit": "ns",
            "range": "± 10807.328272136478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119150.88888888889,
            "unit": "ns",
            "range": "± 9407.035560284623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114365.14835164836,
            "unit": "ns",
            "range": "± 14737.142663181676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7135.3125,
            "unit": "ns",
            "range": "± 1315.5098856377044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23757.510416666668,
            "unit": "ns",
            "range": "± 3409.9737828743414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1680793.106060606,
            "unit": "ns",
            "range": "± 165053.37664833365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3150373.290322581,
            "unit": "ns",
            "range": "± 141239.36569658387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2453028.47,
            "unit": "ns",
            "range": "± 265097.26751852233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6536149.781690141,
            "unit": "ns",
            "range": "± 318811.3819942615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333390.0322580645,
            "unit": "ns",
            "range": "± 149433.85031993777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528688.587301587,
            "unit": "ns",
            "range": "± 161522.87458643632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563073.428571428,
            "unit": "ns",
            "range": "± 148100.81660284178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3897887.8295454546,
            "unit": "ns",
            "range": "± 211698.85066998733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7351424.82,
            "unit": "ns",
            "range": "± 285165.59578963724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6771520.503348215,
            "unit": "ns",
            "range": "± 33017.91798785602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009472.5189302885,
            "unit": "ns",
            "range": "± 12208.555202558298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291733.3888113839,
            "unit": "ns",
            "range": "± 5566.556172119006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627082.6864583334,
            "unit": "ns",
            "range": "± 40219.009229112104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857813.4305338542,
            "unit": "ns",
            "range": "± 3463.06944113252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725867.2861328125,
            "unit": "ns",
            "range": "± 3571.845422348857"
          }
        ]
      }
    ]
  }
}