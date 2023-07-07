window.BENCHMARK_DATA = {
  "lastUpdate": 1688739099674,
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
          "id": "efc27e150171b0d54ca29d905eb0afc5d4542eee",
          "message": "fix: Fix flaky test\n\n[skip changelog]",
          "timestamp": "2023-07-07T22:55:31+09:00",
          "tree_id": "a2c35e0829542a513e93e235985027669bce69c8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/efc27e150171b0d54ca29d905eb0afc5d4542eee"
        },
        "date": 1688739065973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424700,
            "unit": "ns",
            "range": "± 109894.80576138862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553737.878787879,
            "unit": "ns",
            "range": "± 119528.09874367362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1833960.2040816327,
            "unit": "ns",
            "range": "± 115065.92708189362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5053040,
            "unit": "ns",
            "range": "± 235986.15412244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46191.11111111111,
            "unit": "ns",
            "range": "± 2567.412217220597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7250207.142857143,
            "unit": "ns",
            "range": "± 119399.39739756269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20815423.076923076,
            "unit": "ns",
            "range": "± 213924.3291207047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52059453.333333336,
            "unit": "ns",
            "range": "± 719710.8187783943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104591046.66666667,
            "unit": "ns",
            "range": "± 1420413.956194595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206963671.42857143,
            "unit": "ns",
            "range": "± 1959448.2333353127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4939780.989583333,
            "unit": "ns",
            "range": "± 22459.60459101449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569466.5364583333,
            "unit": "ns",
            "range": "± 4436.174966972252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212548.5677083333,
            "unit": "ns",
            "range": "± 4078.4894205043233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659878.8912259615,
            "unit": "ns",
            "range": "± 4365.73191030965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829344.5247395834,
            "unit": "ns",
            "range": "± 2875.14983159146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770989.21875,
            "unit": "ns",
            "range": "± 2604.179255666186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3259192.3076923075,
            "unit": "ns",
            "range": "± 111784.82239650704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3410383.076923077,
            "unit": "ns",
            "range": "± 159022.48226393844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4172036.206896552,
            "unit": "ns",
            "range": "± 121532.25828131255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3770884.090909091,
            "unit": "ns",
            "range": "± 141229.56068324452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6390893.478260869,
            "unit": "ns",
            "range": "± 228883.11660677998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277450,
            "unit": "ns",
            "range": "± 5565.360302273129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255647.0588235294,
            "unit": "ns",
            "range": "± 10451.552094137529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235214.86486486485,
            "unit": "ns",
            "range": "± 11760.319658692912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142473.3333333335,
            "unit": "ns",
            "range": "± 70727.15650064455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3740621.4285714286,
            "unit": "ns",
            "range": "± 63426.349518057665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20082.291666666668,
            "unit": "ns",
            "range": "± 1952.1105874447883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89521.50537634408,
            "unit": "ns",
            "range": "± 6258.608844282541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74759.34065934065,
            "unit": "ns",
            "range": "± 4181.732177565178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98380.41237113402,
            "unit": "ns",
            "range": "± 15542.392560183433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5845.263157894737,
            "unit": "ns",
            "range": "± 887.354233885305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18385.416666666668,
            "unit": "ns",
            "range": "± 1452.3287409983407"
          }
        ]
      }
    ]
  }
}