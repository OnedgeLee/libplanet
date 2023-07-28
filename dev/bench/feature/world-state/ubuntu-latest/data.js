window.BENCHMARK_DATA = {
  "lastUpdate": 1690503403953,
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
          "id": "3010db94c47f76c3e46996cff77d69f8975f49a6",
          "message": "rename: Rename IAccountStateDelta as IAccount\n\nCo-authored-by: Say Cheong <greymistcube@gmail.com>\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-07-28T08:57:23+09:00",
          "tree_id": "a6bf1287a592e819b42e563dee9a79f3d2376684",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3010db94c47f76c3e46996cff77d69f8975f49a6"
        },
        "date": 1690503390806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288083.34,
            "unit": "ns",
            "range": "± 36440.17489874203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281443.89,
            "unit": "ns",
            "range": "± 37121.79193278404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237981.8,
            "unit": "ns",
            "range": "± 36070.2357988669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4365055.6,
            "unit": "ns",
            "range": "± 495625.1930279778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3735982.62,
            "unit": "ns",
            "range": "± 401912.80394840904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17215.97894736842,
            "unit": "ns",
            "range": "± 2077.772200868278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82764.01020408163,
            "unit": "ns",
            "range": "± 12504.750151871072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73225.22,
            "unit": "ns",
            "range": "± 11919.157400715461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80165.49484536082,
            "unit": "ns",
            "range": "± 13517.957488038297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4601.350515463918,
            "unit": "ns",
            "range": "± 633.7212689285723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17236.309278350516,
            "unit": "ns",
            "range": "± 2439.4989468503263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403062.83,
            "unit": "ns",
            "range": "± 185161.27156666142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656600.242424242,
            "unit": "ns",
            "range": "± 296242.8942832695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1802182.2828282828,
            "unit": "ns",
            "range": "± 222312.34097282393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5223779.979591837,
            "unit": "ns",
            "range": "± 540535.0358322624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5634582.386029412,
            "unit": "ns",
            "range": "± 113823.02585511615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790145.0174479166,
            "unit": "ns",
            "range": "± 17626.90926403301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365379.113042092,
            "unit": "ns",
            "range": "± 96472.38650550834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537396.94609375,
            "unit": "ns",
            "range": "± 31630.141652118746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801135.6016601563,
            "unit": "ns",
            "range": "± 14135.39368523716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727285.307800293,
            "unit": "ns",
            "range": "± 12632.000443100505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3483132.202020202,
            "unit": "ns",
            "range": "± 272234.3073701882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511092.051020408,
            "unit": "ns",
            "range": "± 325564.4730085383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237982.94,
            "unit": "ns",
            "range": "± 351790.11058164627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925902.4343434344,
            "unit": "ns",
            "range": "± 324215.3284674687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6846080.44,
            "unit": "ns",
            "range": "± 557258.8642881726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207803.56,
            "unit": "ns",
            "range": "± 870791.5045303256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22738490.81,
            "unit": "ns",
            "range": "± 1480134.1040560387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58477016.23232323,
            "unit": "ns",
            "range": "± 3514223.4117979454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113267940.2,
            "unit": "ns",
            "range": "± 5289553.368320891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220689914.6956522,
            "unit": "ns",
            "range": "± 7964731.572552946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49292.19387755102,
            "unit": "ns",
            "range": "± 7143.344182990427"
          }
        ]
      }
    ]
  }
}