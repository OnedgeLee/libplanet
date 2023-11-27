window.BENCHMARK_DATA = {
  "lastUpdate": 1701065789612,
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
          "id": "76374a85970d3ec7b6d29054c86be973386f7b75",
          "message": "Prepare 3.8.2",
          "timestamp": "2023-11-27T14:55:32+09:00",
          "tree_id": "add5ec96ea5930f032392a26f01995535f8902d9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/76374a85970d3ec7b6d29054c86be973386f7b75"
        },
        "date": 1701065765213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8612531.510638298,
            "unit": "ns",
            "range": "± 763627.2879372346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19430236.924242426,
            "unit": "ns",
            "range": "± 604507.3225612134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48449866.53448276,
            "unit": "ns",
            "range": "± 2111076.148842511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94058584.3,
            "unit": "ns",
            "range": "± 2124242.9706604234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193064542.12121212,
            "unit": "ns",
            "range": "± 5565055.251994615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47986.91052631579,
            "unit": "ns",
            "range": "± 14278.323035729862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221618.48863636365,
            "unit": "ns",
            "range": "± 18632.967892800178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218446.8105263158,
            "unit": "ns",
            "range": "± 16764.74668114215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201229.41397849462,
            "unit": "ns",
            "range": "± 21617.469164531638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3763064.6086956523,
            "unit": "ns",
            "range": "± 91904.15826171558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3507804.7333333334,
            "unit": "ns",
            "range": "± 104027.62713583658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13386.872340425532,
            "unit": "ns",
            "range": "± 2012.016760838087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59113.38636363636,
            "unit": "ns",
            "range": "± 5503.6012670322125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52405.44047619047,
            "unit": "ns",
            "range": "± 3389.5758747772647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61372.382978723406,
            "unit": "ns",
            "range": "± 11145.593356618794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3542.945054945055,
            "unit": "ns",
            "range": "± 853.6236792851905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12907.344444444445,
            "unit": "ns",
            "range": "± 1521.6365960986764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1522090.2311827957,
            "unit": "ns",
            "range": "± 383608.3962500929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3528643.1326530613,
            "unit": "ns",
            "range": "± 909944.1992948938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488118.5476190476,
            "unit": "ns",
            "range": "± 1005311.5534024542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9714842.483870968,
            "unit": "ns",
            "range": "± 2629451.53788992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2854666.761904762,
            "unit": "ns",
            "range": "± 104221.87876524086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2979380.44,
            "unit": "ns",
            "range": "± 120198.40446751837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3574518.244680851,
            "unit": "ns",
            "range": "± 126473.87872264687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3409343.515151515,
            "unit": "ns",
            "range": "± 159964.2777268862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12599564.077319589,
            "unit": "ns",
            "range": "± 1935851.72777521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5215395.031901042,
            "unit": "ns",
            "range": "± 550714.6718746679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518813.5744870363,
            "unit": "ns",
            "range": "± 96620.05066964542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 933171.0272243924,
            "unit": "ns",
            "range": "± 51750.003278239936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010551.6593191964,
            "unit": "ns",
            "range": "± 16192.349106602132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629987.1331129808,
            "unit": "ns",
            "range": "± 7355.379737245245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558627.4049729567,
            "unit": "ns",
            "range": "± 4082.719698229179"
          }
        ]
      }
    ]
  }
}