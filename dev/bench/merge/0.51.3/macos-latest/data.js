window.BENCHMARK_DATA = {
  "lastUpdate": 1679988133904,
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
          "id": "3f3a8c071c130faeb8b083500deeecf45691de03",
          "message": "Merge tag '0.51.3'\n\nLibplanet 0.51.3",
          "timestamp": "2023-03-17T18:39:53+09:00",
          "tree_id": "4ccc01c42d212fef3385f0dfa0111317b04c5fa8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3f3a8c071c130faeb8b083500deeecf45691de03"
        },
        "date": 1679047175436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8871008.847826088,
            "unit": "ns",
            "range": "± 217526.34785899735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20658478.523809522,
            "unit": "ns",
            "range": "± 483599.2635327952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55411339,
            "unit": "ns",
            "range": "± 680930.3171771972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107517573.66666667,
            "unit": "ns",
            "range": "± 3404019.096405827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 218044565.7857143,
            "unit": "ns",
            "range": "± 3421965.2585399426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75319.73333333334,
            "unit": "ns",
            "range": "± 5720.740986420192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223743.93617021278,
            "unit": "ns",
            "range": "± 18268.93914430303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244559.0823529412,
            "unit": "ns",
            "range": "± 13247.915936021755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218727.5340909091,
            "unit": "ns",
            "range": "± 18332.481428973326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13052464.444444444,
            "unit": "ns",
            "range": "± 263568.99085538526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10268544.205882354,
            "unit": "ns",
            "range": "± 326381.98199764936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26213.139175257733,
            "unit": "ns",
            "range": "± 3239.590509699128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65052.5,
            "unit": "ns",
            "range": "± 6976.856099388818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61815.12365591398,
            "unit": "ns",
            "range": "± 5110.58287731997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122469.10227272728,
            "unit": "ns",
            "range": "± 10073.81216983413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8864.634020618556,
            "unit": "ns",
            "range": "± 1095.7529149408522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26806.24193548387,
            "unit": "ns",
            "range": "± 2807.7247283289953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647622.8684210526,
            "unit": "ns",
            "range": "± 242556.31113927023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2878265.828767123,
            "unit": "ns",
            "range": "± 137495.89356939343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2603349.4183673467,
            "unit": "ns",
            "range": "± 195194.98761357155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6140550.918918919,
            "unit": "ns",
            "range": "± 208240.30235288516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3480347.1428571427,
            "unit": "ns",
            "range": "± 55167.818211773185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5274393.4,
            "unit": "ns",
            "range": "± 287289.3019345099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25091022.71212121,
            "unit": "ns",
            "range": "± 794611.1164382454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6776560.166666667,
            "unit": "ns",
            "range": "± 175977.29188527525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31921569.60824742,
            "unit": "ns",
            "range": "± 2399454.2114313575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6732570.43359375,
            "unit": "ns",
            "range": "± 159610.47148864044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088098.8680889423,
            "unit": "ns",
            "range": "± 17936.561256829133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284585.3851725261,
            "unit": "ns",
            "range": "± 32668.045102851556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641227.056206597,
            "unit": "ns",
            "range": "± 52088.56521488783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807242.7076590402,
            "unit": "ns",
            "range": "± 9381.400731456613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805323.0136021206,
            "unit": "ns",
            "range": "± 9869.393490917748"
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
          "id": "ccb0f3331688abc89ce2754f723988effacb7d06",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:57:55+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ccb0f3331688abc89ce2754f723988effacb7d06"
        },
        "date": 1679988097373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8661358.75308642,
            "unit": "ns",
            "range": "± 442062.2554449919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29528964.86956522,
            "unit": "ns",
            "range": "± 8575095.852170836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54303741.205882356,
            "unit": "ns",
            "range": "± 1051281.443955231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108143083.21348314,
            "unit": "ns",
            "range": "± 6313179.014465428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222315461.93209878,
            "unit": "ns",
            "range": "± 11678826.36717566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76438.36666666667,
            "unit": "ns",
            "range": "± 8274.473860798264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243447.8,
            "unit": "ns",
            "range": "± 30002.50622385336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225639.83146067415,
            "unit": "ns",
            "range": "± 21951.65071875211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217759.21505376344,
            "unit": "ns",
            "range": "± 18428.136984354085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12709599.233333332,
            "unit": "ns",
            "range": "± 229515.10750787708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10032975.192307692,
            "unit": "ns",
            "range": "± 123267.89515143065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23000.391304347828,
            "unit": "ns",
            "range": "± 2489.084212883255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70351.12105263158,
            "unit": "ns",
            "range": "± 16744.888128301707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57802.8021978022,
            "unit": "ns",
            "range": "± 7195.572554193433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124073.64835164836,
            "unit": "ns",
            "range": "± 16175.086853535406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8751.420454545454,
            "unit": "ns",
            "range": "± 1068.204156534027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27073.488636363636,
            "unit": "ns",
            "range": "± 2951.5378847182114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684424.881443299,
            "unit": "ns",
            "range": "± 195182.459835526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2914748.021978022,
            "unit": "ns",
            "range": "± 161901.67970976693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647716.2010309277,
            "unit": "ns",
            "range": "± 250526.00122459704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6179602.285714285,
            "unit": "ns",
            "range": "± 174800.8046442742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316571.6839080458,
            "unit": "ns",
            "range": "± 170759.3567606608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5075176.378378378,
            "unit": "ns",
            "range": "± 168214.73813408718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26109375.587912086,
            "unit": "ns",
            "range": "± 1484233.7429922074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6632168.670454546,
            "unit": "ns",
            "range": "± 534382.1574245512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33896758.583333336,
            "unit": "ns",
            "range": "± 3247196.744145933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7695959.674479167,
            "unit": "ns",
            "range": "± 321838.42282796145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165307.525,
            "unit": "ns",
            "range": "± 48937.30910491418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414980.4941597732,
            "unit": "ns",
            "range": "± 56991.30440147613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3530487.607979911,
            "unit": "ns",
            "range": "± 299909.0027326066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051597.5888671875,
            "unit": "ns",
            "range": "± 87391.44238996437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 883604.6634347098,
            "unit": "ns",
            "range": "± 32156.229445543355"
          }
        ]
      }
    ]
  }
}