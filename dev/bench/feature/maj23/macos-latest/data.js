window.BENCHMARK_DATA = {
  "lastUpdate": 1687487940045,
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
      }
    ]
  }
}