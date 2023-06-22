window.BENCHMARK_DATA = {
  "lastUpdate": 1687412598872,
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
      }
    ]
  }
}