window.BENCHMARK_DATA = {
  "lastUpdate": 1681712322059,
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
          "id": "62ebfebc569371c237daf2ddd79c573a2c4d6e1c",
          "message": "feature/fixed-interval",
          "timestamp": "2023-04-17T15:03:25+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62ebfebc569371c237daf2ddd79c573a2c4d6e1c"
        },
        "date": 1681712286048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375584.8484848484,
            "unit": "ns",
            "range": "± 143549.29208423485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2470170.1754385964,
            "unit": "ns",
            "range": "± 90909.20502840867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117016.326530612,
            "unit": "ns",
            "range": "± 143603.20883032703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5127392.105263158,
            "unit": "ns",
            "range": "± 167042.53808710887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42038.46153846154,
            "unit": "ns",
            "range": "± 2365.669706952592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6806078.571428572,
            "unit": "ns",
            "range": "± 37249.371261011365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17552586.666666668,
            "unit": "ns",
            "range": "± 178013.1731348099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45403950,
            "unit": "ns",
            "range": "± 255085.6138331117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89474700,
            "unit": "ns",
            "range": "± 598385.2557389046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179234403.33333334,
            "unit": "ns",
            "range": "± 752695.924059137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4859347.135416667,
            "unit": "ns",
            "range": "± 11331.480228432833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511580.2994791667,
            "unit": "ns",
            "range": "± 3547.636403383621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134287.5,
            "unit": "ns",
            "range": "± 1042.582360177212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631142.8385416665,
            "unit": "ns",
            "range": "± 8576.954518585455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794609.3889508928,
            "unit": "ns",
            "range": "± 5181.924465916903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736798.5201322115,
            "unit": "ns",
            "range": "± 782.7127824329633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2976606.25,
            "unit": "ns",
            "range": "± 82098.24931338415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3130419.0476190476,
            "unit": "ns",
            "range": "± 73753.14650269247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3955512.0689655175,
            "unit": "ns",
            "range": "± 113594.335918255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4022462.5,
            "unit": "ns",
            "range": "± 133079.00234591714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6751220,
            "unit": "ns",
            "range": "± 198549.70783851238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295865.71428571426,
            "unit": "ns",
            "range": "± 8466.888547788512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243711.53846153847,
            "unit": "ns",
            "range": "± 10010.203693176472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227561.33333333334,
            "unit": "ns",
            "range": "± 11434.571729217962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5268464.285714285,
            "unit": "ns",
            "range": "± 30986.792649148425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3691292.8571428573,
            "unit": "ns",
            "range": "± 25825.135766586733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17851.020408163266,
            "unit": "ns",
            "range": "± 1904.1595758498981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80381.05263157895,
            "unit": "ns",
            "range": "± 5652.137512007936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69585.10638297872,
            "unit": "ns",
            "range": "± 6052.511385745795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152033.67346938775,
            "unit": "ns",
            "range": "± 17900.14654019122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5057.731958762886,
            "unit": "ns",
            "range": "± 803.4865498182479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15122.105263157895,
            "unit": "ns",
            "range": "± 1430.3829979123375"
          }
        ]
      }
    ]
  }
}