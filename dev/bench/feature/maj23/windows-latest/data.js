window.BENCHMARK_DATA = {
  "lastUpdate": 1687412234441,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a1c360c93a287f9a71a45026cb78a3dfecc5b1c0",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T14:15:49+09:00",
          "tree_id": "865718399b7119b0a6f7a9ed2dde5147e509ab27",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a1c360c93a287f9a71a45026cb78a3dfecc5b1c0"
        },
        "date": 1687412200576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574685,
            "unit": "ns",
            "range": "± 35736.06868785594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2825413.1147540985,
            "unit": "ns",
            "range": "± 119892.32179391895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2383359,
            "unit": "ns",
            "range": "± 173709.4480516942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5764045.762711864,
            "unit": "ns",
            "range": "± 246694.19805180965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50458.69565217391,
            "unit": "ns",
            "range": "± 3940.9139391244366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7986371.428571428,
            "unit": "ns",
            "range": "± 181971.61356337188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21185680,
            "unit": "ns",
            "range": "± 243922.2276522932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53618108.333333336,
            "unit": "ns",
            "range": "± 272082.7529809579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107339986.66666667,
            "unit": "ns",
            "range": "± 1115431.8752756496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215007270,
            "unit": "ns",
            "range": "± 1737999.286207317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4962810.104166667,
            "unit": "ns",
            "range": "± 13790.705396698953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1610090.9635416667,
            "unit": "ns",
            "range": "± 3934.3837577121853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227203.7259615385,
            "unit": "ns",
            "range": "± 3861.584297003233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670675.78125,
            "unit": "ns",
            "range": "± 9323.176344372292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846002.0377604166,
            "unit": "ns",
            "range": "± 3289.2303970436415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784203.3723958334,
            "unit": "ns",
            "range": "± 2445.9982748791576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3512974,
            "unit": "ns",
            "range": "± 91655.28389932938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3680852.6315789474,
            "unit": "ns",
            "range": "± 81716.59948614446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4464706.25,
            "unit": "ns",
            "range": "± 70370.77488796989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4502128.846153846,
            "unit": "ns",
            "range": "± 182665.73064366425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7106139.130434782,
            "unit": "ns",
            "range": "± 158003.86283865583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288268.08510638296,
            "unit": "ns",
            "range": "± 11193.828004034356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271437.7358490566,
            "unit": "ns",
            "range": "± 11173.272133070584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259264,
            "unit": "ns",
            "range": "± 18452.6421967263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4327057.142857143,
            "unit": "ns",
            "range": "± 55553.03376449895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3840723.076923077,
            "unit": "ns",
            "range": "± 52336.71677777393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24879.787234042553,
            "unit": "ns",
            "range": "± 2341.5177408228124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100722.1052631579,
            "unit": "ns",
            "range": "± 7439.503228487379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92740.206185567,
            "unit": "ns",
            "range": "± 8735.901258048767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108221.11111111111,
            "unit": "ns",
            "range": "± 12482.792600660763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7241.414141414141,
            "unit": "ns",
            "range": "± 1330.6443199926089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23868.367346938776,
            "unit": "ns",
            "range": "± 2640.1966866272337"
          }
        ]
      }
    ]
  }
}