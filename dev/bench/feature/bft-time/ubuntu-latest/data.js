window.BENCHMARK_DATA = {
  "lastUpdate": 1681635102678,
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
          "id": "da6ff26ce0559ec68832db40f698016be24c6e7f",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-16T17:37:15+09:00",
          "tree_id": "4ee86cb37cfb63efcf2c2049367b295996ac0623",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da6ff26ce0559ec68832db40f698016be24c6e7f"
        },
        "date": 1681635090742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8428274.4,
            "unit": "ns",
            "range": "± 152772.77627144736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22312241,
            "unit": "ns",
            "range": "± 263116.4502320489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56009624.733333334,
            "unit": "ns",
            "range": "± 240880.1071741075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112216677.86666666,
            "unit": "ns",
            "range": "± 455996.6398571166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223651240.8,
            "unit": "ns",
            "range": "± 515303.7653635822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52572.30588235294,
            "unit": "ns",
            "range": "± 2851.2095471067364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1908532.963414634,
            "unit": "ns",
            "range": "± 99822.27005594544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3148158.5,
            "unit": "ns",
            "range": "± 97566.46618554699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790034.3924050634,
            "unit": "ns",
            "range": "± 134324.02274966208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6233459.381818182,
            "unit": "ns",
            "range": "± 264833.5646165336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6030584.8359375,
            "unit": "ns",
            "range": "± 16864.728331675517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906069.37421875,
            "unit": "ns",
            "range": "± 2154.242323900541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366875.9170572916,
            "unit": "ns",
            "range": "± 2955.3752314623325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609942.6247209823,
            "unit": "ns",
            "range": "± 2225.986672210639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812890.9107840402,
            "unit": "ns",
            "range": "± 676.8874671483807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763477.5772235577,
            "unit": "ns",
            "range": "± 388.3920536141004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346092.7931034483,
            "unit": "ns",
            "range": "± 9701.691646965897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294518.1923076923,
            "unit": "ns",
            "range": "± 14362.336663755552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243471.2,
            "unit": "ns",
            "range": "± 7681.631298103288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5854792.533333333,
            "unit": "ns",
            "range": "± 48937.98382189831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257795,
            "unit": "ns",
            "range": "± 67229.55869577438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23285.536842105263,
            "unit": "ns",
            "range": "± 2118.995028814097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100748.79787234042,
            "unit": "ns",
            "range": "± 6142.266097147492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91633.88,
            "unit": "ns",
            "range": "± 7315.55068907628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211050.2142857143,
            "unit": "ns",
            "range": "± 17619.060710333935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8109.234693877551,
            "unit": "ns",
            "range": "± 860.3778096155033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22206.489583333332,
            "unit": "ns",
            "range": "± 1821.5406434334163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4168484.04,
            "unit": "ns",
            "range": "± 84030.03286051957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4361641.733333333,
            "unit": "ns",
            "range": "± 52572.373112102294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5074570.071428572,
            "unit": "ns",
            "range": "± 88263.38320701485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5345744.428571428,
            "unit": "ns",
            "range": "± 92065.00688661772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8069007.05882353,
            "unit": "ns",
            "range": "± 158370.5536240365"
          }
        ]
      }
    ]
  }
}