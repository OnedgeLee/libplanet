window.BENCHMARK_DATA = {
  "lastUpdate": 1692089755411,
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
          "id": "28b0e8ac7d6a2603eac4b6300fea17b0c7e20a87",
          "message": "document: Update changelog",
          "timestamp": "2023-08-10T18:34:06+09:00",
          "tree_id": "98be677852fb1381c4a1c8e2de4434a714feafe2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/28b0e8ac7d6a2603eac4b6300fea17b0c7e20a87"
        },
        "date": 1691661249052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8517899.875,
            "unit": "ns",
            "range": "± 158755.93647267704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20159103.236842107,
            "unit": "ns",
            "range": "± 687073.8957397989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51724818.5882353,
            "unit": "ns",
            "range": "± 957236.9890093218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103239480.42307693,
            "unit": "ns",
            "range": "± 1285585.546749772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221038474.8,
            "unit": "ns",
            "range": "± 4000757.767480095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65145.875,
            "unit": "ns",
            "range": "± 10519.67250665953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320661.1875,
            "unit": "ns",
            "range": "± 31983.05513707713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322728.75263157894,
            "unit": "ns",
            "range": "± 32069.876640942755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311859.48924731184,
            "unit": "ns",
            "range": "± 18748.636474766015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4153812.382352941,
            "unit": "ns",
            "range": "± 85123.81416346012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3843769.203703704,
            "unit": "ns",
            "range": "± 107285.94814678661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23507.104166666668,
            "unit": "ns",
            "range": "± 4008.8476030930096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99119.42929292929,
            "unit": "ns",
            "range": "± 14965.320816741978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85034.21505376344,
            "unit": "ns",
            "range": "± 8989.534572090724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94602.03157894737,
            "unit": "ns",
            "range": "± 12668.984896490436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6445.020618556701,
            "unit": "ns",
            "range": "± 1077.8654154100657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22774.13829787234,
            "unit": "ns",
            "range": "± 3228.9880662958385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1564553.9677419355,
            "unit": "ns",
            "range": "± 158909.25818983803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2951412.8842105265,
            "unit": "ns",
            "range": "± 191327.27569010406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2100803.474747475,
            "unit": "ns",
            "range": "± 154234.4411033281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5723086.268656717,
            "unit": "ns",
            "range": "± 238513.26927184765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346533.794117647,
            "unit": "ns",
            "range": "± 176044.6420913378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3507111.8412698414,
            "unit": "ns",
            "range": "± 159129.24228135732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4592574.974358974,
            "unit": "ns",
            "range": "± 234126.4788617482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4009178.0212765955,
            "unit": "ns",
            "range": "± 298500.4572339567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7239324.683098592,
            "unit": "ns",
            "range": "± 349025.8743922375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902091.705357143,
            "unit": "ns",
            "range": "± 64183.72405059096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1647166.5816865808,
            "unit": "ns",
            "range": "± 33623.029747482986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004999.7375837053,
            "unit": "ns",
            "range": "± 3710.679219664189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578244.142317708,
            "unit": "ns",
            "range": "± 39288.434625560985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929986.7235201322,
            "unit": "ns",
            "range": "± 32504.93403998959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746142.2839543269,
            "unit": "ns",
            "range": "± 25819.516059453283"
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
          "id": "02910f703c47ed35e32a74edd1399f470264284e",
          "message": "document: Update changelog",
          "timestamp": "2023-08-11T11:10:35+09:00",
          "tree_id": "a45e1b654be30cd142e26ab7a9052f418b2e524a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/02910f703c47ed35e32a74edd1399f470264284e"
        },
        "date": 1691721222281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8706982.06521739,
            "unit": "ns",
            "range": "± 214639.19012947922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23002286.59770115,
            "unit": "ns",
            "range": "± 3052699.579976844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69878832.24444444,
            "unit": "ns",
            "range": "± 25851222.13449835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105985411.57894737,
            "unit": "ns",
            "range": "± 3587967.6182669103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213368369.68421054,
            "unit": "ns",
            "range": "± 4734543.276841132"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70156.94565217392,
            "unit": "ns",
            "range": "± 10901.049553627405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337368.86363636365,
            "unit": "ns",
            "range": "± 32922.79882663217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365770.1907216495,
            "unit": "ns",
            "range": "± 67381.6994406309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312306.2,
            "unit": "ns",
            "range": "± 22044.456746958847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4338913.931578947,
            "unit": "ns",
            "range": "± 267308.04495155474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4172700.2083333335,
            "unit": "ns",
            "range": "± 410236.6352344748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17672.655913978495,
            "unit": "ns",
            "range": "± 2195.148442512654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85569.04210526316,
            "unit": "ns",
            "range": "± 9451.971324178989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104689.40816326531,
            "unit": "ns",
            "range": "± 23675.65190203481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102312,
            "unit": "ns",
            "range": "± 19484.940978441104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7559.6752577319585,
            "unit": "ns",
            "range": "± 1571.6440039699755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21753.962365591397,
            "unit": "ns",
            "range": "± 4735.732674959278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586829.4731182796,
            "unit": "ns",
            "range": "± 223936.355673184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2880722.05,
            "unit": "ns",
            "range": "± 150111.16922475418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117135.234042553,
            "unit": "ns",
            "range": "± 174048.84091587536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500987.409090909,
            "unit": "ns",
            "range": "± 195360.81314152316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3696009.5,
            "unit": "ns",
            "range": "± 415529.08559360565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3864964.7978723403,
            "unit": "ns",
            "range": "± 424338.91350258637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4781588.267676768,
            "unit": "ns",
            "range": "± 489562.95155322645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232104.7,
            "unit": "ns",
            "range": "± 447128.44313183095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7599057.408163265,
            "unit": "ns",
            "range": "± 649401.1189001444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6515104.26469494,
            "unit": "ns",
            "range": "± 237476.57122900712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939053.9237045094,
            "unit": "ns",
            "range": "± 99874.60053958223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1116381.4879872312,
            "unit": "ns",
            "range": "± 67919.78736579914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2927561.619835805,
            "unit": "ns",
            "range": "± 128323.69235956724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815596.2150691106,
            "unit": "ns",
            "range": "± 9526.307428427348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908258.7893125953,
            "unit": "ns",
            "range": "± 47664.61503822794"
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
          "id": "3ed0c3ceb031fa6c23e13402e54d7222342264a1",
          "message": "test: Fix tests to apply IWorldState, IAccountState explorer query",
          "timestamp": "2023-08-15T16:36:27+09:00",
          "tree_id": "8045c18b8adcd2cd93e8299bbf118291eea98b14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3ed0c3ceb031fa6c23e13402e54d7222342264a1"
        },
        "date": 1692086291779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8099860.225352113,
            "unit": "ns",
            "range": "± 393939.6497668573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19773337.166666668,
            "unit": "ns",
            "range": "± 498724.0648676831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51905200.55555555,
            "unit": "ns",
            "range": "± 1573452.849412172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98898399.29508197,
            "unit": "ns",
            "range": "± 4407535.525240062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221354120.97959185,
            "unit": "ns",
            "range": "± 14618673.16013364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56590.433333333334,
            "unit": "ns",
            "range": "± 4029.332821930654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310672.5789473684,
            "unit": "ns",
            "range": "± 30239.39310525296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295237.9270833333,
            "unit": "ns",
            "range": "± 23163.23653153159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279750.72857142857,
            "unit": "ns",
            "range": "± 9023.742496996512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4320920.887096774,
            "unit": "ns",
            "range": "± 670834.2478390009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4036710.5104166665,
            "unit": "ns",
            "range": "± 648600.8668866352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19351.022222222222,
            "unit": "ns",
            "range": "± 2096.269002260374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90864.52083333333,
            "unit": "ns",
            "range": "± 10879.88329947007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95750.07142857143,
            "unit": "ns",
            "range": "± 16651.64032800979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107376.5824742268,
            "unit": "ns",
            "range": "± 16418.300874881275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6488.1122448979595,
            "unit": "ns",
            "range": "± 1398.0133760598758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22363.416666666668,
            "unit": "ns",
            "range": "± 4990.015312004072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1888394.1666666667,
            "unit": "ns",
            "range": "± 332987.3155233835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3272494.2422680412,
            "unit": "ns",
            "range": "± 509206.374306141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366972.0757575757,
            "unit": "ns",
            "range": "± 413464.17182365176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5957198.602150538,
            "unit": "ns",
            "range": "± 515840.90053544653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3719825.706185567,
            "unit": "ns",
            "range": "± 837286.8074745697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448549.125,
            "unit": "ns",
            "range": "± 317090.288017768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4393215.790697674,
            "unit": "ns",
            "range": "± 324015.8199930391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3776129.6853932585,
            "unit": "ns",
            "range": "± 274006.2694457587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7195680.028089887,
            "unit": "ns",
            "range": "± 502675.58169911883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6091847.819196428,
            "unit": "ns",
            "range": "± 222148.42131089297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825644.7276586415,
            "unit": "ns",
            "range": "± 111018.0299396172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175137.8003320312,
            "unit": "ns",
            "range": "± 102271.1666313411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3025858.3103475766,
            "unit": "ns",
            "range": "± 252670.4856474838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890313.2838541666,
            "unit": "ns",
            "range": "± 23698.93977586693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815717.9424734213,
            "unit": "ns",
            "range": "± 58933.68351876007"
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
          "id": "bf39a4e73e6bd8149a0503295427d1fb7dfcb1f1",
          "message": "test: Fix tests to apply IWorldState, IAccountState explorer query",
          "timestamp": "2023-08-15T17:35:56+09:00",
          "tree_id": "df6dd5cf3d99e3a5dc2c35d7528a0b6dff483622",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bf39a4e73e6bd8149a0503295427d1fb7dfcb1f1"
        },
        "date": 1692089730072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8087285.176470588,
            "unit": "ns",
            "range": "± 163253.30113976076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20067275.045454547,
            "unit": "ns",
            "range": "± 848658.8009400659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49792514.89473684,
            "unit": "ns",
            "range": "± 1588529.9352152827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103471047.89393939,
            "unit": "ns",
            "range": "± 3231706.6868461687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209185393.4642857,
            "unit": "ns",
            "range": "± 5975804.769849637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69502.18421052632,
            "unit": "ns",
            "range": "± 9098.186172123562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347777.3541666667,
            "unit": "ns",
            "range": "± 53579.31331065813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322418.3350515464,
            "unit": "ns",
            "range": "± 35786.80406084309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310819.6703296703,
            "unit": "ns",
            "range": "± 27087.991246657602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080521.777777778,
            "unit": "ns",
            "range": "± 74822.3636249103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783854.5,
            "unit": "ns",
            "range": "± 66958.85087901719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21621.279569892475,
            "unit": "ns",
            "range": "± 2768.919736638756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104011.70212765958,
            "unit": "ns",
            "range": "± 10898.419976811461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111765.38823529411,
            "unit": "ns",
            "range": "± 14722.356690627028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105274.62631578947,
            "unit": "ns",
            "range": "± 11526.857581634242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7979.08947368421,
            "unit": "ns",
            "range": "± 832.0902990934725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24198.219101123595,
            "unit": "ns",
            "range": "± 4967.5316533483065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611637.45,
            "unit": "ns",
            "range": "± 174772.93553864528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2801671.9384615384,
            "unit": "ns",
            "range": "± 130767.17119988929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2128231.8913043477,
            "unit": "ns",
            "range": "± 219821.6855338778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5695377.337209302,
            "unit": "ns",
            "range": "± 301520.21304858057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3833341.0222222223,
            "unit": "ns",
            "range": "± 431986.0278757784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3662151.3061224488,
            "unit": "ns",
            "range": "± 287493.91627902613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4561722.034883721,
            "unit": "ns",
            "range": "± 240899.84310949876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4047041.4591836734,
            "unit": "ns",
            "range": "± 368997.4679316617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7251601.7710843375,
            "unit": "ns",
            "range": "± 385414.770183776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6575579.76875,
            "unit": "ns",
            "range": "± 210097.82314377895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870555.6731770833,
            "unit": "ns",
            "range": "± 22794.921732703053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138001.4107333096,
            "unit": "ns",
            "range": "± 39535.46476404779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3219724.4678125,
            "unit": "ns",
            "range": "± 286124.02060933755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 948573.8375418527,
            "unit": "ns",
            "range": "± 7328.7014572431935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911584.8747395833,
            "unit": "ns",
            "range": "± 16791.14388352517"
          }
        ]
      }
    ]
  }
}