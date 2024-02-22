window.BENCHMARK_DATA = {
  "lastUpdate": 1708586482993,
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
          "id": "8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:05:30+09:00",
          "tree_id": "3fdd296222640e7db1e6a6370a55aa7a3699a196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2"
        },
        "date": 1708586452792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8340481.076923077,
            "unit": "ns",
            "range": "± 174939.73567744365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20732798,
            "unit": "ns",
            "range": "± 145012.07273494377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49256971.27941176,
            "unit": "ns",
            "range": "± 2177923.671858012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98526972.52380952,
            "unit": "ns",
            "range": "± 3563257.9635554906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201419675.31967214,
            "unit": "ns",
            "range": "± 9039171.283883603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49818.96666666667,
            "unit": "ns",
            "range": "± 10115.1907272337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233921.44736842104,
            "unit": "ns",
            "range": "± 22318.589405003073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231012.06593406593,
            "unit": "ns",
            "range": "± 18301.014151499425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236264.5459770115,
            "unit": "ns",
            "range": "± 18797.584998219947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104495.34375,
            "unit": "ns",
            "range": "± 113299.72252111607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572421.9827586208,
            "unit": "ns",
            "range": "± 92810.37797213225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15969.583333333334,
            "unit": "ns",
            "range": "± 2726.2121424449047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69349.76804123711,
            "unit": "ns",
            "range": "± 9132.98432938209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73357.68681318681,
            "unit": "ns",
            "range": "± 8814.896061544012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78398.92708333333,
            "unit": "ns",
            "range": "± 9248.351678166668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5193.50505050505,
            "unit": "ns",
            "range": "± 1443.3544996669825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15465.863157894737,
            "unit": "ns",
            "range": "± 2514.922817691901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1112020.255319149,
            "unit": "ns",
            "range": "± 99097.66527708712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2407940.953846154,
            "unit": "ns",
            "range": "± 111480.73132587066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892029.670212766,
            "unit": "ns",
            "range": "± 203539.6473756899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12406446.989583334,
            "unit": "ns",
            "range": "± 4891594.4428344965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2958324.6071428573,
            "unit": "ns",
            "range": "± 122920.84023078778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3079427.024390244,
            "unit": "ns",
            "range": "± 162493.11286208566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3799940.5,
            "unit": "ns",
            "range": "± 126081.922482057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3879597.3,
            "unit": "ns",
            "range": "± 115700.02169229073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17045701.466292135,
            "unit": "ns",
            "range": "± 2252670.5146583975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4543619.504464285,
            "unit": "ns",
            "range": "± 75800.55451802898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1389803.8311941964,
            "unit": "ns",
            "range": "± 15171.409583765862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 871474.6241629465,
            "unit": "ns",
            "range": "± 5836.718142199321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944064.6039663462,
            "unit": "ns",
            "range": "± 20701.788289178974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643612.0024088542,
            "unit": "ns",
            "range": "± 7310.154796600883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581118.6489583333,
            "unit": "ns",
            "range": "± 6510.439975818876"
          }
        ]
      }
    ]
  }
}