window.BENCHMARK_DATA = {
  "lastUpdate": 1688286824509,
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
      },
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
          "id": "61ba1f0b1ede7b6e2ce6f27696e626e11f1d2963",
          "message": "Introduce IConsensusMessageCommunicator",
          "timestamp": "2023-07-02T17:18:59+09:00",
          "tree_id": "0f9f97eec1e8ffa4c180275e6508f115c7d4e614",
          "url": "https://github.com/OnedgeLee/libplanet/commit/61ba1f0b1ede7b6e2ce6f27696e626e11f1d2963"
        },
        "date": 1688286811954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7573949.384615385,
            "unit": "ns",
            "range": "± 51716.26278637836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20903005,
            "unit": "ns",
            "range": "± 369039.675252443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51372420.733333334,
            "unit": "ns",
            "range": "± 812695.2815566824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101798269.76923077,
            "unit": "ns",
            "range": "± 1618189.2540430878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204528343.3529412,
            "unit": "ns",
            "range": "± 4092400.1689661434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47464.08536585366,
            "unit": "ns",
            "range": "± 2533.3506052102225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275750.27419354836,
            "unit": "ns",
            "range": "± 12545.638436366815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271118.90566037735,
            "unit": "ns",
            "range": "± 11312.176258460055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232638.64285714287,
            "unit": "ns",
            "range": "± 3541.8076133987947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4215786.384615385,
            "unit": "ns",
            "range": "± 41101.76862078335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3810185.5,
            "unit": "ns",
            "range": "± 35574.684779942996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17655.7,
            "unit": "ns",
            "range": "± 1200.377229565118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86409.4,
            "unit": "ns",
            "range": "± 3470.966187960652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70894.2,
            "unit": "ns",
            "range": "± 798.7359835568768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93624.35789473684,
            "unit": "ns",
            "range": "± 14061.254365761037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5205.2474226804125,
            "unit": "ns",
            "range": "± 667.4995167121822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17323.36842105263,
            "unit": "ns",
            "range": "± 1707.3842819430556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407195.7878787878,
            "unit": "ns",
            "range": "± 99511.78780100627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2682756.787878788,
            "unit": "ns",
            "range": "± 82767.24306328771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817472.2903225806,
            "unit": "ns",
            "range": "± 101336.82390141142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5027520.536585365,
            "unit": "ns",
            "range": "± 177017.42398180717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5832028.4921875,
            "unit": "ns",
            "range": "± 46812.98990812819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885562.8157087055,
            "unit": "ns",
            "range": "± 7701.409271041011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323915.3931361607,
            "unit": "ns",
            "range": "± 4104.477692367203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570893.2895833333,
            "unit": "ns",
            "range": "± 8684.271511642834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818040.2272786458,
            "unit": "ns",
            "range": "± 3025.9972635821396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758228.8563151042,
            "unit": "ns",
            "range": "± 1708.6312492805014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276579.0263157897,
            "unit": "ns",
            "range": "± 111725.81806477199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3524396.6875,
            "unit": "ns",
            "range": "± 106788.77566952421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4263274,
            "unit": "ns",
            "range": "± 103936.89079940587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3840314.6938775512,
            "unit": "ns",
            "range": "± 153390.7467309393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6335440.2,
            "unit": "ns",
            "range": "± 163652.3727483554"
          }
        ]
      }
    ]
  }
}