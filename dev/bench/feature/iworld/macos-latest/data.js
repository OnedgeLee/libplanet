window.BENCHMARK_DATA = {
  "lastUpdate": 1691657180313,
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
          "id": "58342035f516267808c027e47fa95880240e0206",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-08-10T17:11:49+09:00",
          "tree_id": "b3df59f6b71ffb5fada57ce7b52a255cd5ea73a7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/58342035f516267808c027e47fa95880240e0206"
        },
        "date": 1691657139226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9887705.529411765,
            "unit": "ns",
            "range": "± 313830.4276623628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20471140.752941176,
            "unit": "ns",
            "range": "± 1101083.6078680132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51213571.074074075,
            "unit": "ns",
            "range": "± 2152143.3146803565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106383552.34126984,
            "unit": "ns",
            "range": "± 4856217.934981732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215985144.07692307,
            "unit": "ns",
            "range": "± 5853573.559192653"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64143.51063829787,
            "unit": "ns",
            "range": "± 9333.507306456162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318276.7346938776,
            "unit": "ns",
            "range": "± 28416.74825698838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313562.467032967,
            "unit": "ns",
            "range": "± 25495.880341058393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298673.9623655914,
            "unit": "ns",
            "range": "± 17595.71377807622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4079779.138888889,
            "unit": "ns",
            "range": "± 133408.20281444525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674292.3333333335,
            "unit": "ns",
            "range": "± 68090.6226642812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17330.26842105263,
            "unit": "ns",
            "range": "± 1589.7910504523998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81880.18478260869,
            "unit": "ns",
            "range": "± 6376.616194060866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75092.24468085106,
            "unit": "ns",
            "range": "± 5151.7713848591075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87610.74489795919,
            "unit": "ns",
            "range": "± 12719.61372793452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6048.423913043478,
            "unit": "ns",
            "range": "± 949.7888629885315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16891.582417582416,
            "unit": "ns",
            "range": "± 1780.6310870396114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756956.6397849463,
            "unit": "ns",
            "range": "± 222564.00100750654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3084663.3085106383,
            "unit": "ns",
            "range": "± 212560.86229079665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242733.2680412373,
            "unit": "ns",
            "range": "± 233646.12695794518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6296094.20212766,
            "unit": "ns",
            "range": "± 437413.3631526259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3456014.4426229508,
            "unit": "ns",
            "range": "± 153585.60948794702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3618546.716494845,
            "unit": "ns",
            "range": "± 286261.313809684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4553160.5,
            "unit": "ns",
            "range": "± 195893.9307503094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3928465,
            "unit": "ns",
            "range": "± 259515.6077480951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7304102.32,
            "unit": "ns",
            "range": "± 366295.43149533775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5479370.492745535,
            "unit": "ns",
            "range": "± 92775.11973649678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866451.5826056986,
            "unit": "ns",
            "range": "± 37202.27658062558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1076097.7033797554,
            "unit": "ns",
            "range": "± 26114.065087663912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633858.1170099434,
            "unit": "ns",
            "range": "± 63479.725460992755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831419.5122395833,
            "unit": "ns",
            "range": "± 11104.35207426424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757051.5052849265,
            "unit": "ns",
            "range": "± 12647.62158310153"
          }
        ]
      }
    ]
  }
}