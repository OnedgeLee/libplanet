window.BENCHMARK_DATA = {
  "lastUpdate": 1688345006033,
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
          "id": "24c399dfad385ac07672c8a54bfe9c2854df7648",
          "message": "Rename MessageBroadcasted to MessagePublished",
          "timestamp": "2023-07-02T20:26:50+09:00",
          "tree_id": "8db7895eccc994ba6df4d92154e2b6c222d8119a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24c399dfad385ac07672c8a54bfe9c2854df7648"
        },
        "date": 1688298043557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8291055.466666667,
            "unit": "ns",
            "range": "± 117181.71227558545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22878703.214285713,
            "unit": "ns",
            "range": "± 176992.7657501109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56706474.86666667,
            "unit": "ns",
            "range": "± 544845.5700091104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113207481.66666667,
            "unit": "ns",
            "range": "± 1698151.6410733454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226246164.3809524,
            "unit": "ns",
            "range": "± 5116211.58953975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49284.35632183908,
            "unit": "ns",
            "range": "± 2619.8587614025955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287083.7380952381,
            "unit": "ns",
            "range": "± 7251.733606220413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280286.68,
            "unit": "ns",
            "range": "± 6517.706081130078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254224.62962962964,
            "unit": "ns",
            "range": "± 6992.236459367182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4520785.666666667,
            "unit": "ns",
            "range": "± 65921.97057958173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4208257.133333334,
            "unit": "ns",
            "range": "± 70601.15616300049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19882.757894736842,
            "unit": "ns",
            "range": "± 1699.6489607261992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91473.98936170213,
            "unit": "ns",
            "range": "± 5401.538137160325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76819.80434782608,
            "unit": "ns",
            "range": "± 2960.750810329968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93785.78494623656,
            "unit": "ns",
            "range": "± 9827.450828131176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5386.614583333333,
            "unit": "ns",
            "range": "± 889.486041661927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19346.915789473685,
            "unit": "ns",
            "range": "± 1488.7591339066885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1571983.3232323232,
            "unit": "ns",
            "range": "± 119671.13638684538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808109.736842105,
            "unit": "ns",
            "range": "± 95494.12116720297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1981674.358974359,
            "unit": "ns",
            "range": "± 93801.7115818664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5257052.285714285,
            "unit": "ns",
            "range": "± 170606.54236637612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032572.036979167,
            "unit": "ns",
            "range": "± 20597.099370821677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904713.349888393,
            "unit": "ns",
            "range": "± 6436.225350293558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372528.141015625,
            "unit": "ns",
            "range": "± 5029.210534080144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672366.1067708335,
            "unit": "ns",
            "range": "± 6031.179001800463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834539.6914713542,
            "unit": "ns",
            "range": "± 1948.2040476432185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767732.1612723215,
            "unit": "ns",
            "range": "± 2866.109941312976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3516360.9166666665,
            "unit": "ns",
            "range": "± 37990.28390967721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3850765.8666666667,
            "unit": "ns",
            "range": "± 71473.23214909268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4528468.8,
            "unit": "ns",
            "range": "± 101446.16342183932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232105.666666667,
            "unit": "ns",
            "range": "± 105831.06772492235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6475663.555555556,
            "unit": "ns",
            "range": "± 175294.6657605489"
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
          "id": "fb8ab1739d992dc76884310ba0985e848a6a84c2",
          "message": "AddMessage() to get Message instead of MessageContent",
          "timestamp": "2023-07-03T01:10:20+09:00",
          "tree_id": "823271098cbdffd84898da28b4c37744c5d85043",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fb8ab1739d992dc76884310ba0985e848a6a84c2"
        },
        "date": 1688315019882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7959749.153846154,
            "unit": "ns",
            "range": "± 40471.01646414414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21590120.733333334,
            "unit": "ns",
            "range": "± 300257.4872856074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54298331.93333333,
            "unit": "ns",
            "range": "± 987210.3508818216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108741609.4,
            "unit": "ns",
            "range": "± 1626059.8024921997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216531457.6875,
            "unit": "ns",
            "range": "± 4204539.165223234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48655.45333333333,
            "unit": "ns",
            "range": "± 2466.295078317543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290367.5,
            "unit": "ns",
            "range": "± 7137.803770937794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285054.8947368421,
            "unit": "ns",
            "range": "± 12298.10609647479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243189.56756756757,
            "unit": "ns",
            "range": "± 8069.6570336750465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4414185.625,
            "unit": "ns",
            "range": "± 111574.22842325448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4095775.111111111,
            "unit": "ns",
            "range": "± 83235.73948087507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18338.65263157895,
            "unit": "ns",
            "range": "± 1426.1971064905968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91301.05494505494,
            "unit": "ns",
            "range": "± 5130.040301688428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74399.29032258065,
            "unit": "ns",
            "range": "± 2264.8437207829356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101319.28865979382,
            "unit": "ns",
            "range": "± 15240.59589820799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5042.8125,
            "unit": "ns",
            "range": "± 695.7029812771358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16685.425531914894,
            "unit": "ns",
            "range": "± 1175.5788461124732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565476.8602150537,
            "unit": "ns",
            "range": "± 88149.17741503683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2834405.8333333335,
            "unit": "ns",
            "range": "± 72883.91475888017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035164.9294117647,
            "unit": "ns",
            "range": "± 105376.28175809595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5304378.680851064,
            "unit": "ns",
            "range": "± 204461.12324799233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991527.896354167,
            "unit": "ns",
            "range": "± 39827.98248476371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932392.9437779018,
            "unit": "ns",
            "range": "± 6439.28771978598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377265.623046875,
            "unit": "ns",
            "range": "± 7067.746201097112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639596.9361979165,
            "unit": "ns",
            "range": "± 9642.872259326978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848764.9280133928,
            "unit": "ns",
            "range": "± 2509.1386030599724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754839.5784505209,
            "unit": "ns",
            "range": "± 2700.254601422465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393901.5263157897,
            "unit": "ns",
            "range": "± 74782.92018039682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3875917.466666667,
            "unit": "ns",
            "range": "± 145544.32992821996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4438823.16,
            "unit": "ns",
            "range": "± 111806.53149029354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4158039.8518518517,
            "unit": "ns",
            "range": "± 116445.4159281056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6539700.090909091,
            "unit": "ns",
            "range": "± 155088.46845649683"
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
          "id": "d84e655ab96f450d0004de6a7d9057169f893371",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T09:27:03+09:00",
          "tree_id": "3e26906a17a3420a65f7126a71aa411dc7fc8889",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d84e655ab96f450d0004de6a7d9057169f893371"
        },
        "date": 1688344991149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9908785.238095239,
            "unit": "ns",
            "range": "± 206750.69481960748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27889540.076923076,
            "unit": "ns",
            "range": "± 401199.22071635467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68962360.62962963,
            "unit": "ns",
            "range": "± 1898856.8939598522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134100585.8,
            "unit": "ns",
            "range": "± 1375193.6162987172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271210849.06666666,
            "unit": "ns",
            "range": "± 2505322.7686541555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54934.119047619046,
            "unit": "ns",
            "range": "± 2940.300219917564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340462.4137931034,
            "unit": "ns",
            "range": "± 9974.582112683223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327990.85294117645,
            "unit": "ns",
            "range": "± 10373.06312298715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284108.75,
            "unit": "ns",
            "range": "± 9488.264813140795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5441111.133333334,
            "unit": "ns",
            "range": "± 60416.42928738917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4848018.533333333,
            "unit": "ns",
            "range": "± 71259.31504709368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21492.135416666668,
            "unit": "ns",
            "range": "± 2044.5859321879518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104170.51851851853,
            "unit": "ns",
            "range": "± 5492.241177586594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86799.94117647059,
            "unit": "ns",
            "range": "± 2791.4694939814185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107451.29787234042,
            "unit": "ns",
            "range": "± 11794.543501337455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5858.791666666667,
            "unit": "ns",
            "range": "± 624.0599147461583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21086.563829787236,
            "unit": "ns",
            "range": "± 1438.2600491566986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1802463.342857143,
            "unit": "ns",
            "range": "± 87310.87857463666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3287737.35,
            "unit": "ns",
            "range": "± 116306.32134892975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2228589.35483871,
            "unit": "ns",
            "range": "± 97612.73269977604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6166351.071428572,
            "unit": "ns",
            "range": "± 221896.1165601106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7209494.502604167,
            "unit": "ns",
            "range": "± 24043.918057530096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2276412.2309895833,
            "unit": "ns",
            "range": "± 4342.334812590284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1658144.0630580357,
            "unit": "ns",
            "range": "± 4807.533164740791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3131764.838020833,
            "unit": "ns",
            "range": "± 10047.494764051651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016254.3075520833,
            "unit": "ns",
            "range": "± 2307.5861303056977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906580.4774739583,
            "unit": "ns",
            "range": "± 2099.062714600874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4229115.875,
            "unit": "ns",
            "range": "± 78430.28131351224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4383638.0625,
            "unit": "ns",
            "range": "± 136233.82107030295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5276719.363636363,
            "unit": "ns",
            "range": "± 125189.59344227628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4894206.09375,
            "unit": "ns",
            "range": "± 150530.70631395452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8363017.285714285,
            "unit": "ns",
            "range": "± 401932.42494656297"
          }
        ]
      }
    ]
  }
}