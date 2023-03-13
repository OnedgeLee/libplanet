window.BENCHMARK_DATA = {
  "lastUpdate": 1678683491114,
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
          "id": "6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T13:44:20+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05"
        },
        "date": 1678683479344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202307.23529411765,
            "unit": "ns",
            "range": "± 8260.205124785305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206461.4,
            "unit": "ns",
            "range": "± 7745.7555104245785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188905.72,
            "unit": "ns",
            "range": "± 11785.072736973572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12178185.166666666,
            "unit": "ns",
            "range": "± 249248.45059976273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10105359.4,
            "unit": "ns",
            "range": "± 155086.2279921353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22201.236559139787,
            "unit": "ns",
            "range": "± 1976.7146458853392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56668.07526881721,
            "unit": "ns",
            "range": "± 4372.320852313719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42207.882352941175,
            "unit": "ns",
            "range": "± 1736.9676640289977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100865.45054945054,
            "unit": "ns",
            "range": "± 12389.613765178687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6842.288659793814,
            "unit": "ns",
            "range": "± 780.8711342517153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21918.701030927834,
            "unit": "ns",
            "range": "± 2199.0364611809173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3476722.52,
            "unit": "ns",
            "range": "± 92385.46057421589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5546331.8,
            "unit": "ns",
            "range": "± 145829.33086602757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25317479,
            "unit": "ns",
            "range": "± 674845.8559421181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6713894.023255814,
            "unit": "ns",
            "range": "± 243940.59084388017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28985745.666666668,
            "unit": "ns",
            "range": "± 466071.9716425882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6105307.572115385,
            "unit": "ns",
            "range": "± 21399.39113004159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875952.9927083333,
            "unit": "ns",
            "range": "± 5236.1849223915615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364913.621372768,
            "unit": "ns",
            "range": "± 5119.776291095709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667218.1622596155,
            "unit": "ns",
            "range": "± 2914.1351281620286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838840.4559244792,
            "unit": "ns",
            "range": "± 956.8458971377216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766067.0342447917,
            "unit": "ns",
            "range": "± 711.4167756491698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7932428.347826087,
            "unit": "ns",
            "range": "± 200370.92323071245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22199477.153846152,
            "unit": "ns",
            "range": "± 176249.03304692017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55297477.733333334,
            "unit": "ns",
            "range": "± 820299.7986088872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110189653.6,
            "unit": "ns",
            "range": "± 1623517.2990340975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 216889319.26666668,
            "unit": "ns",
            "range": "± 3179321.378934313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49836.617021276594,
            "unit": "ns",
            "range": "± 1939.0428112993802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454262.4105263157,
            "unit": "ns",
            "range": "± 83258.30468430248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2750151.533333333,
            "unit": "ns",
            "range": "± 82144.96477138421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2281314.85483871,
            "unit": "ns",
            "range": "± 103565.5491362674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5493643.511111111,
            "unit": "ns",
            "range": "± 207338.52531029168"
          }
        ]
      }
    ]
  }
}