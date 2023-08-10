window.BENCHMARK_DATA = {
  "lastUpdate": 1691660381729,
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
      },
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
          "id": "003b5b6e75ba7ac7ac519e097ba2d1998c34da81",
          "message": "document: Update changelog",
          "timestamp": "2023-08-10T18:21:41+09:00",
          "tree_id": "27c8d686e27a4f66b4c94facb50e5858ac53224c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/003b5b6e75ba7ac7ac519e097ba2d1998c34da81"
        },
        "date": 1691660347987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9216720.836734693,
            "unit": "ns",
            "range": "± 658383.7983239588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22179450.5,
            "unit": "ns",
            "range": "± 1036452.073591264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54431702.5625,
            "unit": "ns",
            "range": "± 1660599.6270863179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111880247.58,
            "unit": "ns",
            "range": "± 2961981.2043684954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222750467.03333333,
            "unit": "ns",
            "range": "± 3575562.494007838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78996.45061728395,
            "unit": "ns",
            "range": "± 4919.561555416383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366709.5918367347,
            "unit": "ns",
            "range": "± 51525.192635501124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364435.2755102041,
            "unit": "ns",
            "range": "± 39875.033227282955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332392.39361702127,
            "unit": "ns",
            "range": "± 21567.636748454664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4395267.105882353,
            "unit": "ns",
            "range": "± 237602.6246198945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4004850.1,
            "unit": "ns",
            "range": "± 208991.6490580183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29167.7816091954,
            "unit": "ns",
            "range": "± 4191.571868740966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122581.09782608696,
            "unit": "ns",
            "range": "± 18271.621463417327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119572.27528089887,
            "unit": "ns",
            "range": "± 8535.305813811894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130946.3829787234,
            "unit": "ns",
            "range": "± 23851.495642157937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10012.20652173913,
            "unit": "ns",
            "range": "± 991.8125768759476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27944.13186813187,
            "unit": "ns",
            "range": "± 3570.6031740956632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1831474.7373737374,
            "unit": "ns",
            "range": "± 254443.57131169314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3374490.28125,
            "unit": "ns",
            "range": "± 328613.4556524205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2376914.850515464,
            "unit": "ns",
            "range": "± 306762.17273772805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6850732.161616161,
            "unit": "ns",
            "range": "± 678921.0195985755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3606542.81443299,
            "unit": "ns",
            "range": "± 265941.7536649367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3676764.8131313133,
            "unit": "ns",
            "range": "± 261445.42686325012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4663231.041237113,
            "unit": "ns",
            "range": "± 322745.83334306703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4155053.6224489794,
            "unit": "ns",
            "range": "± 322870.2409940437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7577229.589473684,
            "unit": "ns",
            "range": "± 523093.63472624763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6361846.506944444,
            "unit": "ns",
            "range": "± 132555.1746697477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1726602.0390625,
            "unit": "ns",
            "range": "± 24773.463739273382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079965.191015625,
            "unit": "ns",
            "range": "± 17741.703849568712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2893085.09609375,
            "unit": "ns",
            "range": "± 42113.858818406814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826894.2133091518,
            "unit": "ns",
            "range": "± 11057.075197963188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831556.1606119792,
            "unit": "ns",
            "range": "± 12265.771263198312"
          }
        ]
      }
    ]
  }
}