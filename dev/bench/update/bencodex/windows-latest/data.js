window.BENCHMARK_DATA = {
  "lastUpdate": 1681889512634,
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
          "id": "45ac42e9e3775906656a12287367ce0ceee11123",
          "message": "update: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:30:06+09:00",
          "tree_id": "dc212b25fb943314b7110477bccabe5faf5dfa8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45ac42e9e3775906656a12287367ce0ceee11123"
        },
        "date": 1681886712824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420511.111111111,
            "unit": "ns",
            "range": "± 131246.72504282583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510892.3076923075,
            "unit": "ns",
            "range": "± 90780.38322723616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2234271.5789473685,
            "unit": "ns",
            "range": "± 141956.99803121225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5694896.96969697,
            "unit": "ns",
            "range": "± 356112.84741323837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51574.21052631579,
            "unit": "ns",
            "range": "± 4407.144001854206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7311740,
            "unit": "ns",
            "range": "± 259211.98907853643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19595840,
            "unit": "ns",
            "range": "± 295144.884033975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49260571.428571425,
            "unit": "ns",
            "range": "± 544144.6731106768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99521753.33333333,
            "unit": "ns",
            "range": "± 1224097.3653306847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201405935.7142857,
            "unit": "ns",
            "range": "± 1548450.6126383946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4791474.098557692,
            "unit": "ns",
            "range": "± 17099.135193983828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536638.1138392857,
            "unit": "ns",
            "range": "± 4399.644209646723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1189487.9752604167,
            "unit": "ns",
            "range": "± 6122.698193529307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606970.5829326925,
            "unit": "ns",
            "range": "± 8664.757819212728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849529.3359375,
            "unit": "ns",
            "range": "± 3772.119579099408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774723.5877403846,
            "unit": "ns",
            "range": "± 1998.2474399469693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3277640,
            "unit": "ns",
            "range": "± 86690.24358792246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3367329.411764706,
            "unit": "ns",
            "range": "± 106786.5260182081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3992221.212121212,
            "unit": "ns",
            "range": "± 113970.92216212366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423955.555555556,
            "unit": "ns",
            "range": "± 93111.0862308295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6953294.736842105,
            "unit": "ns",
            "range": "± 153461.40837242804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322003.5714285714,
            "unit": "ns",
            "range": "± 9077.38264376773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269163.63636363635,
            "unit": "ns",
            "range": "± 12552.188118946695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218363.04347826086,
            "unit": "ns",
            "range": "± 8395.272709372477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5305369.230769231,
            "unit": "ns",
            "range": "± 39570.28313889487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3641660.8695652173,
            "unit": "ns",
            "range": "± 90194.69213938576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22536.082474226805,
            "unit": "ns",
            "range": "± 2503.3804464750883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95161.70212765958,
            "unit": "ns",
            "range": "± 6418.238568245975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93462,
            "unit": "ns",
            "range": "± 10735.133295338575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120589.79591836735,
            "unit": "ns",
            "range": "± 16199.474917008492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8396.907216494845,
            "unit": "ns",
            "range": "± 1239.829760512122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21926.041666666668,
            "unit": "ns",
            "range": "± 2346.5201465671703"
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
          "id": "fa50ed53764ee8f1ed54982ac5334a86225a38e0",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:48:29+09:00",
          "tree_id": "d40ade814e1b84bf940637ba7292b0f175aa7417",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fa50ed53764ee8f1ed54982ac5334a86225a38e0"
        },
        "date": 1681887889913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1327658.5858585858,
            "unit": "ns",
            "range": "± 95054.3142372962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2431621.875,
            "unit": "ns",
            "range": "± 73318.93094611136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142358.585858586,
            "unit": "ns",
            "range": "± 132865.11881596234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5125081.081081081,
            "unit": "ns",
            "range": "± 168233.2224387684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42844.57831325301,
            "unit": "ns",
            "range": "± 2209.196576842746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6892550,
            "unit": "ns",
            "range": "± 21716.62780168512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17512623.076923076,
            "unit": "ns",
            "range": "± 136240.31558148854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46476060,
            "unit": "ns",
            "range": "± 272764.99251710647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92975257.14285715,
            "unit": "ns",
            "range": "± 436084.8889031473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184582278.57142857,
            "unit": "ns",
            "range": "± 1237848.907257183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4801238.216145833,
            "unit": "ns",
            "range": "± 6193.220625661672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507649.4290865385,
            "unit": "ns",
            "range": "± 2180.4285952497885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145148.521205357,
            "unit": "ns",
            "range": "± 845.9917956441419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613697.205528846,
            "unit": "ns",
            "range": "± 4414.4573300270795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887345.3190104166,
            "unit": "ns",
            "range": "± 11989.87232429039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744630.9114583334,
            "unit": "ns",
            "range": "± 6190.449708601793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3007588,
            "unit": "ns",
            "range": "± 78940.72311973502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3164512.5,
            "unit": "ns",
            "range": "± 60429.682276179476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3925021.4285714286,
            "unit": "ns",
            "range": "± 46452.85746897565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4161152.9411764704,
            "unit": "ns",
            "range": "± 84893.82425747367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6709715.384615385,
            "unit": "ns",
            "range": "± 181059.82810619852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298119.51219512196,
            "unit": "ns",
            "range": "± 9966.599708832373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244732.35294117648,
            "unit": "ns",
            "range": "± 7610.229184150377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223214.63414634147,
            "unit": "ns",
            "range": "± 11845.821495427646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5251292.857142857,
            "unit": "ns",
            "range": "± 20355.814300198745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3457142.8571428573,
            "unit": "ns",
            "range": "± 22372.191333325954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17189.79591836735,
            "unit": "ns",
            "range": "± 1990.4664425586884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83732.29166666667,
            "unit": "ns",
            "range": "± 6130.879473129046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75291.48936170213,
            "unit": "ns",
            "range": "± 6931.440905523708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94933.67346938775,
            "unit": "ns",
            "range": "± 14067.282681335742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5265.306122448979,
            "unit": "ns",
            "range": "± 855.9195984034957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17608.163265306124,
            "unit": "ns",
            "range": "± 1536.4756478280447"
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
          "id": "57fa7f56adc33391bbcdebc07ea89c0de7e82a81",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:51:08+09:00",
          "tree_id": "518460067ca7959a0ad48c6ba5ca65530d761ac6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/57fa7f56adc33391bbcdebc07ea89c0de7e82a81"
        },
        "date": 1681888098514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1494775.7894736843,
            "unit": "ns",
            "range": "± 108836.68002219235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799589.361702128,
            "unit": "ns",
            "range": "± 158929.0735619009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2446348.9795918367,
            "unit": "ns",
            "range": "± 229237.479728665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5988769,
            "unit": "ns",
            "range": "± 378883.7157221117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63008.163265306124,
            "unit": "ns",
            "range": "± 8335.536562663656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8021035.714285715,
            "unit": "ns",
            "range": "± 107684.08644051114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20642480,
            "unit": "ns",
            "range": "± 185022.51291589974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52168433.333333336,
            "unit": "ns",
            "range": "± 205948.77268315284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103786496.15384616,
            "unit": "ns",
            "range": "± 565295.1435833978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207552260,
            "unit": "ns",
            "range": "± 1567503.6576854114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5027229.427083333,
            "unit": "ns",
            "range": "± 69414.08991293641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562437.6727764423,
            "unit": "ns",
            "range": "± 13460.259029031607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1205691.5885416667,
            "unit": "ns",
            "range": "± 13490.004719063416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2784085.2678571427,
            "unit": "ns",
            "range": "± 65413.77881540143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841380.8384486607,
            "unit": "ns",
            "range": "± 3559.4954753451916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772067.24609375,
            "unit": "ns",
            "range": "± 1919.531988426238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308870,
            "unit": "ns",
            "range": "± 113885.05271004282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3805993.3333333335,
            "unit": "ns",
            "range": "± 60213.0084031049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4312846.153846154,
            "unit": "ns",
            "range": "± 177073.7748782211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4662010,
            "unit": "ns",
            "range": "± 75918.74227469412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7354128.125,
            "unit": "ns",
            "range": "± 208687.51795737492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359652.8301886792,
            "unit": "ns",
            "range": "± 14937.930602400993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301368.0412371134,
            "unit": "ns",
            "range": "± 20569.853276861628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270159.1836734694,
            "unit": "ns",
            "range": "± 18282.0969647859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5600969.230769231,
            "unit": "ns",
            "range": "± 37434.88534810332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3866600,
            "unit": "ns",
            "range": "± 86930.13528721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31441.23711340206,
            "unit": "ns",
            "range": "± 3060.594733099257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 136599,
            "unit": "ns",
            "range": "± 13466.130314851616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126899,
            "unit": "ns",
            "range": "± 13090.219149186822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152063.44086021505,
            "unit": "ns",
            "range": "± 13718.297721642311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12572.727272727272,
            "unit": "ns",
            "range": "± 2060.949760342734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30702.04081632653,
            "unit": "ns",
            "range": "± 3947.2286922386843"
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
          "id": "d5d9f55a1b818aefbb1ef90f0c4b3c4639e8d306",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T16:09:49+09:00",
          "tree_id": "626ce8094a832a2fa99f0d4ba78141fe10bd38a0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d5d9f55a1b818aefbb1ef90f0c4b3c4639e8d306"
        },
        "date": 1681889470874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1789710.4166666667,
            "unit": "ns",
            "range": "± 228256.87444731238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3475376.8421052634,
            "unit": "ns",
            "range": "± 255124.9328719174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2853104.12371134,
            "unit": "ns",
            "range": "± 262759.49987485615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7477743.010752688,
            "unit": "ns",
            "range": "± 468922.1835410689"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75726.84210526316,
            "unit": "ns",
            "range": "± 16897.018827022755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8988223.958333334,
            "unit": "ns",
            "range": "± 752910.2396693139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24909188.679245282,
            "unit": "ns",
            "range": "± 1033457.6288550037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63522573.684210524,
            "unit": "ns",
            "range": "± 1374647.40765773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130900059.57446809,
            "unit": "ns",
            "range": "± 5105298.154205125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264243331.25,
            "unit": "ns",
            "range": "± 5189730.207530863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5927921.71875,
            "unit": "ns",
            "range": "± 104571.99289450447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000504.6875,
            "unit": "ns",
            "range": "± 46647.593853994746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1582379.6940104167,
            "unit": "ns",
            "range": "± 25679.845068619412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3242771.6666666665,
            "unit": "ns",
            "range": "± 45726.46352741719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049040.234375,
            "unit": "ns",
            "range": "± 14975.672935870312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972793.7924592391,
            "unit": "ns",
            "range": "± 24566.597759694047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3795112.121212121,
            "unit": "ns",
            "range": "± 485384.4929270258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3995423.6559139783,
            "unit": "ns",
            "range": "± 354676.6035841204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5152975.7894736845,
            "unit": "ns",
            "range": "± 434110.14601792005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5249564.2105263155,
            "unit": "ns",
            "range": "± 554403.5362855406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8874532.631578946,
            "unit": "ns",
            "range": "± 771637.412845292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 405579.1666666667,
            "unit": "ns",
            "range": "± 45392.44527142482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339382.97872340423,
            "unit": "ns",
            "range": "± 39805.793705655175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306352.12765957444,
            "unit": "ns",
            "range": "± 37459.37650171858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6577511.956521739,
            "unit": "ns",
            "range": "± 479474.1941152867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4797688.421052632,
            "unit": "ns",
            "range": "± 354455.7457787439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29931.9587628866,
            "unit": "ns",
            "range": "± 11008.799003446371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119762.88659793814,
            "unit": "ns",
            "range": "± 25062.348584694853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107945.91836734694,
            "unit": "ns",
            "range": "± 23639.19150311834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149351.54639175258,
            "unit": "ns",
            "range": "± 26282.393161432163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7591.111111111111,
            "unit": "ns",
            "range": "± 1536.2031440780079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29033.333333333332,
            "unit": "ns",
            "range": "± 10702.519788562007"
          }
        ]
      }
    ]
  }
}