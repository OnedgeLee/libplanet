window.BENCHMARK_DATA = {
  "lastUpdate": 1686718819126,
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
          "id": "da589f266f89e62b1ae7c00c1bbaa48cf75cc52c",
          "message": "Prepare 2.1.0",
          "timestamp": "2023-06-14T13:44:28+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da589f266f89e62b1ae7c00c1bbaa48cf75cc52c"
        },
        "date": 1686718804961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1769343.1294117647,
            "unit": "ns",
            "range": "± 95181.39418672271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3389361.32,
            "unit": "ns",
            "range": "± 87194.11965824683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2792054.7213114756,
            "unit": "ns",
            "range": "± 118657.37522648014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6687640.263157895,
            "unit": "ns",
            "range": "± 142273.28790349702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4336326.8,
            "unit": "ns",
            "range": "± 55604.68567768624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4506122.733333333,
            "unit": "ns",
            "range": "± 49273.82245091007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5462484.392857143,
            "unit": "ns",
            "range": "± 155104.97721754372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5564076.766666667,
            "unit": "ns",
            "range": "± 149617.57981570612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8632714,
            "unit": "ns",
            "range": "± 247293.73374367756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9888878.066666666,
            "unit": "ns",
            "range": "± 120645.4717949998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27996007.2,
            "unit": "ns",
            "range": "± 267232.6844812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66451890,
            "unit": "ns",
            "range": "± 312586.71842180734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135204078.93333334,
            "unit": "ns",
            "range": "± 804739.9224687853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269409023.2,
            "unit": "ns",
            "range": "± 1262999.1881987099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7003129.797916667,
            "unit": "ns",
            "range": "± 84017.18494381271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2238967.1651041666,
            "unit": "ns",
            "range": "± 20539.441014504395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1529161.0376302083,
            "unit": "ns",
            "range": "± 18164.160797139375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3038042.6723958333,
            "unit": "ns",
            "range": "± 49460.127987357766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996389.1675502232,
            "unit": "ns",
            "range": "± 445.0093146173921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888687.0309895833,
            "unit": "ns",
            "range": "± 9943.012835491581"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53011.62765957447,
            "unit": "ns",
            "range": "± 3697.2131148827666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347402.2962962963,
            "unit": "ns",
            "range": "± 9546.642244244893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323856.4262295082,
            "unit": "ns",
            "range": "± 14503.404033144563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314615.58974358975,
            "unit": "ns",
            "range": "± 10864.558313782309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4997930.48,
            "unit": "ns",
            "range": "± 201542.4312430431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4423478.770833333,
            "unit": "ns",
            "range": "± 172847.18016068285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19677.720430107525,
            "unit": "ns",
            "range": "± 1219.119714184319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95550.67021276595,
            "unit": "ns",
            "range": "± 6604.621189902864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81655.87640449438,
            "unit": "ns",
            "range": "± 5475.445516992253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100857.82653061225,
            "unit": "ns",
            "range": "± 16131.858344592867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5371.459183673469,
            "unit": "ns",
            "range": "± 683.7131364512662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19056.938144329895,
            "unit": "ns",
            "range": "± 1793.396317131461"
          }
        ]
      }
    ]
  }
}