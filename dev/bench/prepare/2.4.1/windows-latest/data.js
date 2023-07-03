window.BENCHMARK_DATA = {
  "lastUpdate": 1688387708727,
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
          "id": "74e6be3177341482c0d7e87c787851d2b6a44ba5",
          "message": "Prepare 2.4.1",
          "timestamp": "2023-07-03T21:16:51+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/OnedgeLee/libplanet/commit/74e6be3177341482c0d7e87c787851d2b6a44ba5"
        },
        "date": 1688387670218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560802.1276595744,
            "unit": "ns",
            "range": "± 108869.16877336247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912652.6315789474,
            "unit": "ns",
            "range": "± 125137.70144647965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2086208.3333333333,
            "unit": "ns",
            "range": "± 136784.82423262778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805980,
            "unit": "ns",
            "range": "± 384229.4571705503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53521.875,
            "unit": "ns",
            "range": "± 4816.948217655962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599590.476190476,
            "unit": "ns",
            "range": "± 164718.18935613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23662633.333333332,
            "unit": "ns",
            "range": "± 327226.23381269124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59380321.428571425,
            "unit": "ns",
            "range": "± 693176.3214236458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120327733.33333333,
            "unit": "ns",
            "range": "± 1603081.37600536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242325856.66666666,
            "unit": "ns",
            "range": "± 2660243.200339469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5159761.354166667,
            "unit": "ns",
            "range": "± 34160.45648002034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1650783.18359375,
            "unit": "ns",
            "range": "± 8636.92834835895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1260476.4229910714,
            "unit": "ns",
            "range": "± 5596.445622676965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2772929.659598214,
            "unit": "ns",
            "range": "± 11000.685488238087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871247.3795572916,
            "unit": "ns",
            "range": "± 3223.5899149447646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799155.3485576923,
            "unit": "ns",
            "range": "± 2696.9575869029286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3763298.3870967743,
            "unit": "ns",
            "range": "± 171375.0632164372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3853653.3333333335,
            "unit": "ns",
            "range": "± 146201.98294887049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4715107.01754386,
            "unit": "ns",
            "range": "± 202495.51834515916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4329887.179487179,
            "unit": "ns",
            "range": "± 140468.99110795945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6935644.444444444,
            "unit": "ns",
            "range": "± 186576.38842562237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300300,
            "unit": "ns",
            "range": "± 13935.157376618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291007.6923076923,
            "unit": "ns",
            "range": "± 14784.396559155924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262763,
            "unit": "ns",
            "range": "± 21861.989776086186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4598392.307692308,
            "unit": "ns",
            "range": "± 124059.86272143597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4172778.947368421,
            "unit": "ns",
            "range": "± 90813.7690181112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23490.20618556701,
            "unit": "ns",
            "range": "± 2834.7787903781855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106422,
            "unit": "ns",
            "range": "± 10757.004577239311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92482.82828282828,
            "unit": "ns",
            "range": "± 13581.25238735323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124377.31958762887,
            "unit": "ns",
            "range": "± 21351.64174578971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5995.789473684211,
            "unit": "ns",
            "range": "± 1048.2930187116135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23488.775510204083,
            "unit": "ns",
            "range": "± 3181.3448706794093"
          }
        ]
      }
    ]
  }
}