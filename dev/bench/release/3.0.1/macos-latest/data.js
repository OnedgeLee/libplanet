window.BENCHMARK_DATA = {
  "lastUpdate": 1689913088433,
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
          "id": "9b20587b8e9f203b2a0b339cda774fa6f75846b6",
          "message": "Release 3.0.1",
          "timestamp": "2023-07-21T12:58:34+09:00",
          "tree_id": "d32e848727b58e4299385bc6aefbdc967485163f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9b20587b8e9f203b2a0b339cda774fa6f75846b6"
        },
        "date": 1689913057799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8757623.193877552,
            "unit": "ns",
            "range": "± 552444.5963605512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21660475.96491228,
            "unit": "ns",
            "range": "± 932206.9800556053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50819084.558823526,
            "unit": "ns",
            "range": "± 994557.6864206062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102115216.33333333,
            "unit": "ns",
            "range": "± 1221353.8451942161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220037810.7352941,
            "unit": "ns",
            "range": "± 7084568.354823765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71285.79347826086,
            "unit": "ns",
            "range": "± 6581.44680566372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343332.55102040817,
            "unit": "ns",
            "range": "± 39182.47520825891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327011.76666666666,
            "unit": "ns",
            "range": "± 28701.851684403282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318873.78571428574,
            "unit": "ns",
            "range": "± 15552.167833552381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4195656.230769231,
            "unit": "ns",
            "range": "± 92399.38814020694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3776129.466666667,
            "unit": "ns",
            "range": "± 40758.94413126079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21196.526315789473,
            "unit": "ns",
            "range": "± 6492.867448113214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104227.36734693877,
            "unit": "ns",
            "range": "± 17323.573400682082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113367.36597938144,
            "unit": "ns",
            "range": "± 19620.75535552683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128165.39130434782,
            "unit": "ns",
            "range": "± 20276.749809429744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7456.045454545455,
            "unit": "ns",
            "range": "± 1223.6298075627747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23073.022222222222,
            "unit": "ns",
            "range": "± 5623.8499887647995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1673654.7040816327,
            "unit": "ns",
            "range": "± 259238.8323709844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2919090,
            "unit": "ns",
            "range": "± 117434.89987461138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2021297.5252525252,
            "unit": "ns",
            "range": "± 177883.87282239136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5916116.423076923,
            "unit": "ns",
            "range": "± 244058.16983479905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3702789.223404255,
            "unit": "ns",
            "range": "± 454442.1197831209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3689657.03125,
            "unit": "ns",
            "range": "± 317658.881899617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4650514.5625,
            "unit": "ns",
            "range": "± 308866.0246900047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4267028.697916667,
            "unit": "ns",
            "range": "± 323879.66235763754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7607796.488764045,
            "unit": "ns",
            "range": "± 421475.55270586663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6588148.589395491,
            "unit": "ns",
            "range": "± 295345.818186576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985750.5583333333,
            "unit": "ns",
            "range": "± 24515.849450221744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1307899.906529018,
            "unit": "ns",
            "range": "± 20789.82898727551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3004567.3719429346,
            "unit": "ns",
            "range": "± 114922.86399713869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873949.5971679688,
            "unit": "ns",
            "range": "± 16549.552589012987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748495.9626116072,
            "unit": "ns",
            "range": "± 8517.828502743723"
          }
        ]
      }
    ]
  }
}