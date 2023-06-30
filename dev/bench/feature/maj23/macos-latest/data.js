window.BENCHMARK_DATA = {
  "lastUpdate": 1688102099513,
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
        "date": 1687412558658,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8179522.0625,
            "unit": "ns",
            "range": "± 158140.73921583005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20317109.948717948,
            "unit": "ns",
            "range": "± 702589.0955710639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52557504.175,
            "unit": "ns",
            "range": "± 2740121.0344052636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102298418.24193548,
            "unit": "ns",
            "range": "± 4347314.176567194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211668054.64130434,
            "unit": "ns",
            "range": "± 11557994.045464199"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70029.9,
            "unit": "ns",
            "range": "± 14492.114393386883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343181.76666666666,
            "unit": "ns",
            "range": "± 40409.74716653051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344647.875,
            "unit": "ns",
            "range": "± 52015.710526572744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313165.56666666665,
            "unit": "ns",
            "range": "± 31287.80181162254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4532488.5,
            "unit": "ns",
            "range": "± 472808.8939718873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046857.3854166665,
            "unit": "ns",
            "range": "± 314240.0358228477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19684.531914893618,
            "unit": "ns",
            "range": "± 3338.238385001814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107064.64432989691,
            "unit": "ns",
            "range": "± 21215.424386413262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103412.25,
            "unit": "ns",
            "range": "± 12248.299357784113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117188.11458333333,
            "unit": "ns",
            "range": "± 20279.91903200373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6282.223404255319,
            "unit": "ns",
            "range": "± 1166.1646368787583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17591.114583333332,
            "unit": "ns",
            "range": "± 2748.0591883221746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740000.6875,
            "unit": "ns",
            "range": "± 291804.5607889064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3134709.684782609,
            "unit": "ns",
            "range": "± 208272.2281663138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2799092.6839080458,
            "unit": "ns",
            "range": "± 334649.4472531312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9491648.994623655,
            "unit": "ns",
            "range": "± 3341016.7038986366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304072.411764706,
            "unit": "ns",
            "range": "± 132416.9500058322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3425785.1894736844,
            "unit": "ns",
            "range": "± 219686.16193795085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4551044.164948453,
            "unit": "ns",
            "range": "± 281852.072315377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782779.0813953485,
            "unit": "ns",
            "range": "± 540829.815468659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8211403.9421052635,
            "unit": "ns",
            "range": "± 645159.5073096054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6699636.973958333,
            "unit": "ns",
            "range": "± 72442.05893932254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2091704.7154447115,
            "unit": "ns",
            "range": "± 14653.91752393697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454878.4172028187,
            "unit": "ns",
            "range": "± 57769.01041825931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3125821.0546875,
            "unit": "ns",
            "range": "± 315397.2366015843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870191.4911684783,
            "unit": "ns",
            "range": "± 21915.092053276283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 855138.5415537308,
            "unit": "ns",
            "range": "± 34066.781462161714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "a603f8292ce12f811b6776bdffc93849a807132d",
          "message": "2",
          "timestamp": "2023-06-22T22:24:05+09:00",
          "tree_id": "3cfbe3d5a388b793eb9f93dea953cd8ff984640a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a603f8292ce12f811b6776bdffc93849a807132d"
        },
        "date": 1687487900331,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8628379.42857143,
            "unit": "ns",
            "range": "± 99649.6401133756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22349146.198113207,
            "unit": "ns",
            "range": "± 868684.39614382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55153152.36734694,
            "unit": "ns",
            "range": "± 2184230.283372294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108609158.47777778,
            "unit": "ns",
            "range": "± 4089327.8741937615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217791677.94871795,
            "unit": "ns",
            "range": "± 7482346.860856154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66695.0425531915,
            "unit": "ns",
            "range": "± 6722.361137798754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371041.33684210526,
            "unit": "ns",
            "range": "± 26110.074075862605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345673.4137931034,
            "unit": "ns",
            "range": "± 26385.992947083276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328924.9130434783,
            "unit": "ns",
            "range": "± 15891.55073758595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4802334.214285715,
            "unit": "ns",
            "range": "± 77933.78004254495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4229824.705882353,
            "unit": "ns",
            "range": "± 85842.27059246853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19796.543010752688,
            "unit": "ns",
            "range": "± 2092.223198220842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100368.35051546391,
            "unit": "ns",
            "range": "± 8635.705800195243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92124.72222222222,
            "unit": "ns",
            "range": "± 8965.632249934952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110420.6875,
            "unit": "ns",
            "range": "± 18909.771844381914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6490.257731958763,
            "unit": "ns",
            "range": "± 1031.1756870027707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19816.061855670105,
            "unit": "ns",
            "range": "± 1740.9381080710539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786479.78125,
            "unit": "ns",
            "range": "± 212439.58553419632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3375871.9305555555,
            "unit": "ns",
            "range": "± 148002.93203589064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2899387.2608695654,
            "unit": "ns",
            "range": "± 258461.98301737115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7676514.458333333,
            "unit": "ns",
            "range": "± 232792.76921988378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3719959.227272727,
            "unit": "ns",
            "range": "± 222060.43861560442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3851880.034090909,
            "unit": "ns",
            "range": "± 258274.2878427225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4935638.450549451,
            "unit": "ns",
            "range": "± 293436.4323426139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4766380.252631579,
            "unit": "ns",
            "range": "± 288304.198504715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8762295.569892474,
            "unit": "ns",
            "range": "± 540075.9256058838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7373027.737723215,
            "unit": "ns",
            "range": "± 33812.20838900267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2281495.623604911,
            "unit": "ns",
            "range": "± 37696.91026926606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1474963.1005208334,
            "unit": "ns",
            "range": "± 7913.6343729215205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2922108.221153846,
            "unit": "ns",
            "range": "± 5187.7343949123815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962788.7429387019,
            "unit": "ns",
            "range": "± 3254.294619465207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863383.6810825893,
            "unit": "ns",
            "range": "± 5598.77476152634"
          }
        ]
      },
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
          "id": "8308179dec6423a57f5569be95d024754ad2d009",
          "message": "fix",
          "timestamp": "2023-06-23T11:23:25+09:00",
          "tree_id": "864be44eb230aa65148abf73ba580c64de5e2e4d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8308179dec6423a57f5569be95d024754ad2d009"
        },
        "date": 1687488280547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9432492.385714285,
            "unit": "ns",
            "range": "± 432574.9282242793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23077829.12121212,
            "unit": "ns",
            "range": "± 717710.8758090615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57282901.40322581,
            "unit": "ns",
            "range": "± 1714447.8653107218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113350453.50632912,
            "unit": "ns",
            "range": "± 5856000.005155021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249733069.1931818,
            "unit": "ns",
            "range": "± 31707896.03900339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80430.58241758242,
            "unit": "ns",
            "range": "± 10715.592026021328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342052.3333333333,
            "unit": "ns",
            "range": "± 38486.43425069843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323195.4673913043,
            "unit": "ns",
            "range": "± 18970.959326511558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310832.96428571426,
            "unit": "ns",
            "range": "± 13290.505325866397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189694.3076923075,
            "unit": "ns",
            "range": "± 56900.50376224657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824907.5714285714,
            "unit": "ns",
            "range": "± 40235.868505819315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18581.85393258427,
            "unit": "ns",
            "range": "± 2293.4420615715358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100013.54210526316,
            "unit": "ns",
            "range": "± 12364.114535765491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109807.95918367348,
            "unit": "ns",
            "range": "± 10986.344901147817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118177.83870967742,
            "unit": "ns",
            "range": "± 12737.269038986684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7228.192307692308,
            "unit": "ns",
            "range": "± 918.5997156579344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21863.938144329895,
            "unit": "ns",
            "range": "± 4716.446576463474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751451.652173913,
            "unit": "ns",
            "range": "± 283616.7961383243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3342133.6839080458,
            "unit": "ns",
            "range": "± 343412.7974527371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2743651.711764706,
            "unit": "ns",
            "range": "± 307396.70365747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7819156.735955056,
            "unit": "ns",
            "range": "± 1147441.7116612466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3338113.7118644067,
            "unit": "ns",
            "range": "± 139037.34312432297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3522445.9838709678,
            "unit": "ns",
            "range": "± 153317.81688840332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480306.66,
            "unit": "ns",
            "range": "± 93696.70848215533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452439.352631579,
            "unit": "ns",
            "range": "± 255234.0944957872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7742405.887096774,
            "unit": "ns",
            "range": "± 350238.1839535216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6553195.735839844,
            "unit": "ns",
            "range": "± 123523.95983702618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2124427.5241765203,
            "unit": "ns",
            "range": "± 67363.74988719664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332189.3588362068,
            "unit": "ns",
            "range": "± 37757.87225445571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603360.6898657572,
            "unit": "ns",
            "range": "± 117794.23095875693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874223.5167518029,
            "unit": "ns",
            "range": "± 9430.915962764357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764537.9005681818,
            "unit": "ns",
            "range": "± 17829.9106961873"
          }
        ]
      },
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
          "id": "8feecd709e10b3ca3c0133cd3ce2021a798176b7",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T12:36:31+09:00",
          "tree_id": "528ad73d036b4904214184f6c8cd11bb6f601dd3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8feecd709e10b3ca3c0133cd3ce2021a798176b7"
        },
        "date": 1687757560491,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8251028.619047619,
            "unit": "ns",
            "range": "± 193555.8054922342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21715205.27631579,
            "unit": "ns",
            "range": "± 1105114.7229327047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54354487.347222224,
            "unit": "ns",
            "range": "± 2659890.76679542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108195251.46666667,
            "unit": "ns",
            "range": "± 1992290.8520204597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226482530.2142857,
            "unit": "ns",
            "range": "± 1754666.5526228219"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68093.33695652174,
            "unit": "ns",
            "range": "± 7031.473778703667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352312.94444444444,
            "unit": "ns",
            "range": "± 29323.982374887655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357903.64,
            "unit": "ns",
            "range": "± 17368.123082120175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314237.4382022472,
            "unit": "ns",
            "range": "± 24971.5834909289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4477470.082278481,
            "unit": "ns",
            "range": "± 232661.61397599094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4192116.317647059,
            "unit": "ns",
            "range": "± 244062.7433340028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18977.53488372093,
            "unit": "ns",
            "range": "± 3839.0897471932203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91312.09574468085,
            "unit": "ns",
            "range": "± 10117.248425358142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93036.52747252748,
            "unit": "ns",
            "range": "± 10942.350311560285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98437.25,
            "unit": "ns",
            "range": "± 14386.166082844547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5329.670731707317,
            "unit": "ns",
            "range": "± 691.2844513751472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18524.037037037036,
            "unit": "ns",
            "range": "± 1962.8983636732469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732888.1333333333,
            "unit": "ns",
            "range": "± 127741.47052309744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3419417.0344827585,
            "unit": "ns",
            "range": "± 147936.3683167044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2852488.3484848486,
            "unit": "ns",
            "range": "± 184182.64297820246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7770990.757894737,
            "unit": "ns",
            "range": "± 494343.90809150814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3605129.681318681,
            "unit": "ns",
            "range": "± 236506.54790084585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3804996.45,
            "unit": "ns",
            "range": "± 162965.98639681103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5085615.672413793,
            "unit": "ns",
            "range": "± 528426.4340897154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4628183.649425288,
            "unit": "ns",
            "range": "± 262023.3073611977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8552826.704545455,
            "unit": "ns",
            "range": "± 544787.2650141427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6458953.479910715,
            "unit": "ns",
            "range": "± 81930.48962148571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2127486.7427083333,
            "unit": "ns",
            "range": "± 29238.85495217104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343416.01953125,
            "unit": "ns",
            "range": "± 12546.430001118613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690258.14140625,
            "unit": "ns",
            "range": "± 38285.846813451855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 948567.453125,
            "unit": "ns",
            "range": "± 6421.367076368879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829439.8524693081,
            "unit": "ns",
            "range": "± 5798.356111457854"
          }
        ]
      },
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
          "id": "3fb0b1f7c1b398a57f499c5b1643202c2025ddfb",
          "message": "Reimplement bootstrap",
          "timestamp": "2023-06-30T13:57:27+09:00",
          "tree_id": "81b607613c4a979b84c2741adffad46e2b329ff3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3fb0b1f7c1b398a57f499c5b1643202c2025ddfb"
        },
        "date": 1688102070949,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8150788.452380952,
            "unit": "ns",
            "range": "± 294735.09772668924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20144273.92857143,
            "unit": "ns",
            "range": "± 208854.39040944815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50022793.307692304,
            "unit": "ns",
            "range": "± 1366698.1358424695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99991349.07142857,
            "unit": "ns",
            "range": "± 1161788.4495525698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199196211.6,
            "unit": "ns",
            "range": "± 3499227.0530554275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58030.89361702128,
            "unit": "ns",
            "range": "± 7292.882604069053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308366.8358208955,
            "unit": "ns",
            "range": "± 14485.258409842383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297502.2688172043,
            "unit": "ns",
            "range": "± 18216.039846758435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272034.05294117646,
            "unit": "ns",
            "range": "± 14196.921024767074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4020283.28,
            "unit": "ns",
            "range": "± 96323.46158755924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3610837,
            "unit": "ns",
            "range": "± 55660.2367538982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17546.613636363636,
            "unit": "ns",
            "range": "± 1885.1024145587237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84749.5,
            "unit": "ns",
            "range": "± 7558.027672265883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96343.43,
            "unit": "ns",
            "range": "± 12363.545489699087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102923.43814432989,
            "unit": "ns",
            "range": "± 14185.177684980452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5070.580459770115,
            "unit": "ns",
            "range": "± 537.5003346324713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17386.768292682926,
            "unit": "ns",
            "range": "± 2266.876146631619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1674620.2424242424,
            "unit": "ns",
            "range": "± 213261.53499008768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012457.9615384615,
            "unit": "ns",
            "range": "± 119290.4731559197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2525152.5425531915,
            "unit": "ns",
            "range": "± 177474.00825616388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6522095.870967742,
            "unit": "ns",
            "range": "± 288042.01581693726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222917.141025641,
            "unit": "ns",
            "range": "± 96428.43020261935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3357477.717647059,
            "unit": "ns",
            "range": "± 180516.81092772094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4200898.674418605,
            "unit": "ns",
            "range": "± 154362.56505996356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4168039.596491228,
            "unit": "ns",
            "range": "± 179181.4407830848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7647304.144927536,
            "unit": "ns",
            "range": "± 365384.80399743415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6075456.475260417,
            "unit": "ns",
            "range": "± 14297.388029194395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1797777.3364583333,
            "unit": "ns",
            "range": "± 11781.111574818298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220954.913671875,
            "unit": "ns",
            "range": "± 7842.008713544081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574566.6199776786,
            "unit": "ns",
            "range": "± 14645.523876441834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813921.1169921875,
            "unit": "ns",
            "range": "± 2959.67178022062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704030.8858072917,
            "unit": "ns",
            "range": "± 4247.520530538217"
          }
        ]
      }
    ]
  }
}