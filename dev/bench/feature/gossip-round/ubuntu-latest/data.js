window.BENCHMARK_DATA = {
  "lastUpdate": 1688384692797,
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
          "id": "4967018433c09ad5f61c3bab650786a81057aad3",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T15:02:41+09:00",
          "tree_id": "fc68fc51a13f6b241ea85483bd1fe1b5bde679fd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4967018433c09ad5f61c3bab650786a81057aad3"
        },
        "date": 1688365034455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7295955.5869565215,
            "unit": "ns",
            "range": "± 411076.946427526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17808982.38028169,
            "unit": "ns",
            "range": "± 869419.8782160166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47864743.208333336,
            "unit": "ns",
            "range": "± 3667530.3521578396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91348113.70833333,
            "unit": "ns",
            "range": "± 2307702.7499974286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184278836.20588234,
            "unit": "ns",
            "range": "± 5922512.999400722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49960.62244897959,
            "unit": "ns",
            "range": "± 10979.253060349878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264990.0315789474,
            "unit": "ns",
            "range": "± 28932.411889683714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270669.8494623656,
            "unit": "ns",
            "range": "± 38040.14673997501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230114.9010989011,
            "unit": "ns",
            "range": "± 22558.61936380906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4136187.948979592,
            "unit": "ns",
            "range": "± 444379.0106637605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3544906.2688172045,
            "unit": "ns",
            "range": "± 298700.90026611177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21508.19,
            "unit": "ns",
            "range": "± 9970.929518785391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83244.42857142857,
            "unit": "ns",
            "range": "± 14764.417804756204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75955.206185567,
            "unit": "ns",
            "range": "± 13307.925123883062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85448,
            "unit": "ns",
            "range": "± 17846.85268754869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3948.9347826086955,
            "unit": "ns",
            "range": "± 485.3037749098088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19516.14,
            "unit": "ns",
            "range": "± 8482.073648238467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1268509.2551020407,
            "unit": "ns",
            "range": "± 152432.3931576192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2446100.845360825,
            "unit": "ns",
            "range": "± 220288.3230648784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1638975.7653061224,
            "unit": "ns",
            "range": "± 166686.30340715547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5081185.6122448975,
            "unit": "ns",
            "range": "± 620855.4378578333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5843495.014508928,
            "unit": "ns",
            "range": "± 84131.75031688574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1708429.6196614583,
            "unit": "ns",
            "range": "± 29599.09291268149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256941.7877604167,
            "unit": "ns",
            "range": "± 22185.11272120529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2411263.1319754464,
            "unit": "ns",
            "range": "± 29191.261798614934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787222.2920673077,
            "unit": "ns",
            "range": "± 6192.277701166613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751234.8699840199,
            "unit": "ns",
            "range": "± 17912.6557010324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2995632.1919191917,
            "unit": "ns",
            "range": "± 218628.7523582104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3044401.946236559,
            "unit": "ns",
            "range": "± 192210.37845878358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3922285.8804347827,
            "unit": "ns",
            "range": "± 240145.20096125556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3440246,
            "unit": "ns",
            "range": "± 300396.4953168481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6165091.46875,
            "unit": "ns",
            "range": "± 407825.7921332781"
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
          "id": "0e1dcbfdf7984a805d5f72f17a4aa425825ca6f4",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:17:07+09:00",
          "tree_id": "aaf95b9497298892d219d0a6408b235fe3434e90",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0e1dcbfdf7984a805d5f72f17a4aa425825ca6f4"
        },
        "date": 1688376780430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9804267.133333333,
            "unit": "ns",
            "range": "± 115930.37254001501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26338673.866666667,
            "unit": "ns",
            "range": "± 258342.54624124445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66429324.733333334,
            "unit": "ns",
            "range": "± 531214.6314746808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133227100.06666666,
            "unit": "ns",
            "range": "± 1286444.092121461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268569871.1333333,
            "unit": "ns",
            "range": "± 3061603.5923152817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53541.166666666664,
            "unit": "ns",
            "range": "± 2412.831920275842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344613.375,
            "unit": "ns",
            "range": "± 10388.730229932944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342550.73333333334,
            "unit": "ns",
            "range": "± 6064.720232231499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286273.70588235295,
            "unit": "ns",
            "range": "± 5692.086686408442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5451308.714285715,
            "unit": "ns",
            "range": "± 26372.613129849367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4961559.785714285,
            "unit": "ns",
            "range": "± 66251.6807637925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21757.236559139787,
            "unit": "ns",
            "range": "± 1517.2735587649188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103089.54430379746,
            "unit": "ns",
            "range": "± 5345.90191905353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88197.73333333334,
            "unit": "ns",
            "range": "± 2458.160805790874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108035.3085106383,
            "unit": "ns",
            "range": "± 9939.495768378003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5755.193877551021,
            "unit": "ns",
            "range": "± 651.7673460401274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20749.747368421053,
            "unit": "ns",
            "range": "± 1592.181428561383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1760050.1304347827,
            "unit": "ns",
            "range": "± 98719.66297075636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3382854.073170732,
            "unit": "ns",
            "range": "± 120941.75784574785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285330.804597701,
            "unit": "ns",
            "range": "± 114602.42200318568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6473177.99,
            "unit": "ns",
            "range": "± 386414.06957773445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7169978.228645833,
            "unit": "ns",
            "range": "± 27708.414826804215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2286115.7122395835,
            "unit": "ns",
            "range": "± 2170.675680814689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1659143.6583333334,
            "unit": "ns",
            "range": "± 4506.525957754111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3221301.9441964286,
            "unit": "ns",
            "range": "± 4980.917502907975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025978.6919642857,
            "unit": "ns",
            "range": "± 978.6627568213961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923717.9891880581,
            "unit": "ns",
            "range": "± 685.8522250153471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4147241.466666667,
            "unit": "ns",
            "range": "± 70953.8796753282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4369318.678571428,
            "unit": "ns",
            "range": "± 121528.95972628135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5313791,
            "unit": "ns",
            "range": "± 135725.08734042212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4813951.791666667,
            "unit": "ns",
            "range": "± 123536.50378099977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7799184.78125,
            "unit": "ns",
            "range": "± 241127.39877991873"
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
          "id": "7f48ce9bd8cad8443b1e52ad1a2386a5c4f788cc",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:18:52+09:00",
          "tree_id": "31835b043628d6268ec7456cf50b54108860b770",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f48ce9bd8cad8443b1e52ad1a2386a5c4f788cc"
        },
        "date": 1688376968359,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10035812.6,
            "unit": "ns",
            "range": "± 164678.8289289185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26618928.2,
            "unit": "ns",
            "range": "± 196551.13796748742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65985221.71428572,
            "unit": "ns",
            "range": "± 236396.70496611236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133007924.13333334,
            "unit": "ns",
            "range": "± 906100.4589838232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267942176.06666666,
            "unit": "ns",
            "range": "± 956156.5934589724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57301.02222222222,
            "unit": "ns",
            "range": "± 3361.908847756616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337803.0256410256,
            "unit": "ns",
            "range": "± 11060.679101372381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322931.20588235295,
            "unit": "ns",
            "range": "± 9052.008154160858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286810.21875,
            "unit": "ns",
            "range": "± 8863.355647704859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5284912.571428572,
            "unit": "ns",
            "range": "± 43719.64859404537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4662044.333333333,
            "unit": "ns",
            "range": "± 38356.08845070226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23789.03125,
            "unit": "ns",
            "range": "± 1949.994053719004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106049,
            "unit": "ns",
            "range": "± 5791.941998251632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95968.94,
            "unit": "ns",
            "range": "± 5910.977561599887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113266.9693877551,
            "unit": "ns",
            "range": "± 13737.358391494807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6921.571428571428,
            "unit": "ns",
            "range": "± 1015.2101605594245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22428.76842105263,
            "unit": "ns",
            "range": "± 1962.617143556952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737436.5520833333,
            "unit": "ns",
            "range": "± 113185.3528854674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3322330.7,
            "unit": "ns",
            "range": "± 96688.66325770601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223935.513888889,
            "unit": "ns",
            "range": "± 105292.99354965502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6300252.281690141,
            "unit": "ns",
            "range": "± 307748.6092860388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7109166.0703125,
            "unit": "ns",
            "range": "± 29682.629110981114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2248946.1796875,
            "unit": "ns",
            "range": "± 2402.0605119597385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1608171.598828125,
            "unit": "ns",
            "range": "± 2995.8250435196373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116494.8303571427,
            "unit": "ns",
            "range": "± 2948.8106495003362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984803.9680989584,
            "unit": "ns",
            "range": "± 782.7247759612435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905519.1620442708,
            "unit": "ns",
            "range": "± 442.87001099380524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4149805.588235294,
            "unit": "ns",
            "range": "± 80739.33427631388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4410650.071428572,
            "unit": "ns",
            "range": "± 75095.16568734561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5359112.714285715,
            "unit": "ns",
            "range": "± 85861.39504809129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4828652.25,
            "unit": "ns",
            "range": "± 149996.08733606696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8019506.975609756,
            "unit": "ns",
            "range": "± 287628.84404023946"
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
          "id": "16250d3d6696c2df83661833457cb6d75deaffd8",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T19:30:19+09:00",
          "tree_id": "34b177607c49e7e3672809c1c23f6d701e7411bd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/16250d3d6696c2df83661833457cb6d75deaffd8"
        },
        "date": 1688380970235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7643930.357142857,
            "unit": "ns",
            "range": "± 7285.374195628503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19598643.14285714,
            "unit": "ns",
            "range": "± 81636.04026866598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49770831.53333333,
            "unit": "ns",
            "range": "± 189999.26059813518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100280968.66666667,
            "unit": "ns",
            "range": "± 988113.6682908693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198667940.46666667,
            "unit": "ns",
            "range": "± 1613595.1557070964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49489.63829787234,
            "unit": "ns",
            "range": "± 4544.855455905792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281929.0909090909,
            "unit": "ns",
            "range": "± 6823.691424588941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276010.86363636365,
            "unit": "ns",
            "range": "± 6637.713592979457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233916.6923076923,
            "unit": "ns",
            "range": "± 1793.8738986067456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4212870.666666667,
            "unit": "ns",
            "range": "± 39814.38948181328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894265.4,
            "unit": "ns",
            "range": "± 38248.481900406376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15871.569892473119,
            "unit": "ns",
            "range": "± 1189.4981440657475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82865.42105263157,
            "unit": "ns",
            "range": "± 3582.7410543334013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69806.17647058824,
            "unit": "ns",
            "range": "± 1175.8974357535458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85021.06185567011,
            "unit": "ns",
            "range": "± 10532.427809324592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4181.95744680851,
            "unit": "ns",
            "range": "± 560.8864319696143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14891.380434782608,
            "unit": "ns",
            "range": "± 1115.6064318664478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381472.130952381,
            "unit": "ns",
            "range": "± 74188.09149280017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549746.111111111,
            "unit": "ns",
            "range": "± 70039.44877618465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1749423.3414634147,
            "unit": "ns",
            "range": "± 89189.24343938215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4734389.028571429,
            "unit": "ns",
            "range": "± 137953.57627509115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982798.23828125,
            "unit": "ns",
            "range": "± 31090.270294502694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041116.4328125,
            "unit": "ns",
            "range": "± 4438.105743486442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391689.5055989583,
            "unit": "ns",
            "range": "± 1277.3075564083342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628489.3772321427,
            "unit": "ns",
            "range": "± 2051.1756978229473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809272.5094168527,
            "unit": "ns",
            "range": "± 388.2731607090348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740389.5393229167,
            "unit": "ns",
            "range": "± 574.9672668897666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231192.3333333335,
            "unit": "ns",
            "range": "± 58766.14971790025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437653.2,
            "unit": "ns",
            "range": "± 54293.969456232306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4270818.066666666,
            "unit": "ns",
            "range": "± 58929.74660131535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3735788.358974359,
            "unit": "ns",
            "range": "± 119989.96439318694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6428374.625,
            "unit": "ns",
            "range": "± 160064.37803307184"
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
          "id": "88badca48ecc98f343605bbd33eac933cca14ca0",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T19:50:04+09:00",
          "tree_id": "dec9a06f16737587d978b3e4bba6481e784a6d30",
          "url": "https://github.com/OnedgeLee/libplanet/commit/88badca48ecc98f343605bbd33eac933cca14ca0"
        },
        "date": 1688382190445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7972422.785714285,
            "unit": "ns",
            "range": "± 27674.20328970249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20347811.266666666,
            "unit": "ns",
            "range": "± 62211.436916450686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51645733.266666666,
            "unit": "ns",
            "range": "± 155020.5151900256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103863706.23076923,
            "unit": "ns",
            "range": "± 191827.32995594144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206553420.86666667,
            "unit": "ns",
            "range": "± 470997.5802115376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48227,
            "unit": "ns",
            "range": "± 2748.37443272781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289001.8695652174,
            "unit": "ns",
            "range": "± 11051.800662956233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277367,
            "unit": "ns",
            "range": "± 6741.37169074123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254621.675,
            "unit": "ns",
            "range": "± 8981.04118339408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298512.714285715,
            "unit": "ns",
            "range": "± 21674.119878958696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3804024,
            "unit": "ns",
            "range": "± 29008.80502934875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19353.863157894735,
            "unit": "ns",
            "range": "± 1446.4203768638436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95442.98913043478,
            "unit": "ns",
            "range": "± 5509.537019089329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76486.78787878787,
            "unit": "ns",
            "range": "± 2405.5856453987426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96898.47959183673,
            "unit": "ns",
            "range": "± 11746.025791800437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5213.59375,
            "unit": "ns",
            "range": "± 470.76494476934477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19892.76842105263,
            "unit": "ns",
            "range": "± 1598.1733086633865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454256.5104166667,
            "unit": "ns",
            "range": "± 115731.44059789047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2733155.794871795,
            "unit": "ns",
            "range": "± 95585.83370022643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1878295.9393939395,
            "unit": "ns",
            "range": "± 151309.31860365512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4917680.76,
            "unit": "ns",
            "range": "± 126864.74034750555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6341237.759486607,
            "unit": "ns",
            "range": "± 14271.584622026345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901513.0628004808,
            "unit": "ns",
            "range": "± 3165.3131224052613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360591.193080357,
            "unit": "ns",
            "range": "± 1003.0173234450275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606276.4275841345,
            "unit": "ns",
            "range": "± 1728.5999801248925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816380.8294503348,
            "unit": "ns",
            "range": "± 433.8137638601882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724910.7884347098,
            "unit": "ns",
            "range": "± 337.29783620541735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3375350.4166666665,
            "unit": "ns",
            "range": "± 86962.76405596606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3527641.0625,
            "unit": "ns",
            "range": "± 57008.900820215495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371887.6,
            "unit": "ns",
            "range": "± 51884.71404648689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3914232,
            "unit": "ns",
            "range": "± 36329.954284415115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6422001.652173913,
            "unit": "ns",
            "range": "± 146870.50613801656"
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
          "id": "62a1be961306950e971ae328b67694acede0a962",
          "message": "fix: Revive round add on HeightVoteSet",
          "timestamp": "2023-07-03T20:32:40+09:00",
          "tree_id": "be74ad715c46d42912f0ac2fb5aa99117786d0d7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62a1be961306950e971ae328b67694acede0a962"
        },
        "date": 1688384680264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7717387.733333333,
            "unit": "ns",
            "range": "± 22361.70572802233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19704397.8,
            "unit": "ns",
            "range": "± 224689.29764937944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50081104.666666664,
            "unit": "ns",
            "range": "± 363389.32919561374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100220142.8,
            "unit": "ns",
            "range": "± 661673.0477825779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201502338.66666666,
            "unit": "ns",
            "range": "± 1565259.61716856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45459.74285714285,
            "unit": "ns",
            "range": "± 2221.6059388226367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282427.4761904762,
            "unit": "ns",
            "range": "± 6536.974733154838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265177.2702702703,
            "unit": "ns",
            "range": "± 8812.40056413136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238467.47368421053,
            "unit": "ns",
            "range": "± 4838.8779503841015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4218983.4,
            "unit": "ns",
            "range": "± 34585.350948879255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3887321.933333333,
            "unit": "ns",
            "range": "± 36710.892354929725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16744.729166666668,
            "unit": "ns",
            "range": "± 1646.027239521149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85879.54761904762,
            "unit": "ns",
            "range": "± 4617.861447369626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71458.96296296296,
            "unit": "ns",
            "range": "± 2002.0329952226348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86850.21649484536,
            "unit": "ns",
            "range": "± 10811.390609972048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4246.897959183673,
            "unit": "ns",
            "range": "± 582.2039620252117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15611.741935483871,
            "unit": "ns",
            "range": "± 1632.2756381095007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372693.191919192,
            "unit": "ns",
            "range": "± 97641.00292185266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600625.177777778,
            "unit": "ns",
            "range": "± 97516.15924793018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1754214.7575757576,
            "unit": "ns",
            "range": "± 125046.31512576636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4789027.97368421,
            "unit": "ns",
            "range": "± 162301.10100698753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6368976.465401785,
            "unit": "ns",
            "range": "± 19418.88359711553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999151.3334263393,
            "unit": "ns",
            "range": "± 1005.6449755792021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352062.7689732143,
            "unit": "ns",
            "range": "± 466.00490151162694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604006.4846540177,
            "unit": "ns",
            "range": "± 2308.510197019102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814924.6798177083,
            "unit": "ns",
            "range": "± 1916.025307444641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749772.2511067708,
            "unit": "ns",
            "range": "± 3253.0095519182364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266682.769230769,
            "unit": "ns",
            "range": "± 26191.178178138045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3383781.1219512196,
            "unit": "ns",
            "range": "± 67891.75351844844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4276649.875,
            "unit": "ns",
            "range": "± 78831.58774744635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3789951,
            "unit": "ns",
            "range": "± 89951.98967782759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6221607.5,
            "unit": "ns",
            "range": "± 98681.22606075049"
          }
        ]
      }
    ]
  }
}