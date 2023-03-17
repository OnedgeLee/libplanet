window.BENCHMARK_DATA = {
  "lastUpdate": 1679047203517,
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
      }
    ]
  }
}