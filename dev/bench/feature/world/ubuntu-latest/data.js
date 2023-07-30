window.BENCHMARK_DATA = {
  "lastUpdate": 1690761299335,
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
          "id": "01cecfb43845f66fe3ef23abba94ddb04521928a",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-29T16:21:32+09:00",
          "tree_id": "cd7bb71e5d56e5632a658659f62b529f7e57f395",
          "url": "https://github.com/OnedgeLee/libplanet/commit/01cecfb43845f66fe3ef23abba94ddb04521928a"
        },
        "date": 1690761286948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297248.58974358975,
            "unit": "ns",
            "range": "± 10396.240341984843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284042.0857142857,
            "unit": "ns",
            "range": "± 9262.404189776536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243424.4,
            "unit": "ns",
            "range": "± 4086.2920985027135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4399625,
            "unit": "ns",
            "range": "± 69742.15665885714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4106123.533333333,
            "unit": "ns",
            "range": "± 63535.17104145283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19865.6,
            "unit": "ns",
            "range": "± 1442.3894655094941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89922.75,
            "unit": "ns",
            "range": "± 4417.158815724575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76571.94117647059,
            "unit": "ns",
            "range": "± 1528.901790117184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96697.52083333333,
            "unit": "ns",
            "range": "± 13867.25993196255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5170.489795918367,
            "unit": "ns",
            "range": "± 945.8616564226928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20946.873684210525,
            "unit": "ns",
            "range": "± 1368.990816702218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485257.6621621621,
            "unit": "ns",
            "range": "± 74181.57686459072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762638.925925926,
            "unit": "ns",
            "range": "± 76178.88640961934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877722.0824742268,
            "unit": "ns",
            "range": "± 112861.97793411853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310455.84,
            "unit": "ns",
            "range": "± 315837.161856086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6021351.368303572,
            "unit": "ns",
            "range": "± 20000.49562569032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924064.226953125,
            "unit": "ns",
            "range": "± 4442.952300075552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389691.8427083334,
            "unit": "ns",
            "range": "± 4852.389582961751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642280.179427083,
            "unit": "ns",
            "range": "± 2470.822519803387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846708.9009114583,
            "unit": "ns",
            "range": "± 1686.471555326489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789437.6123697917,
            "unit": "ns",
            "range": "± 767.7623659613876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486184.1666666665,
            "unit": "ns",
            "range": "± 87408.6657860235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734170.1875,
            "unit": "ns",
            "range": "± 107476.25002355172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4403651.65,
            "unit": "ns",
            "range": "± 99912.68483150411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4098705.4468085105,
            "unit": "ns",
            "range": "± 158832.37118268246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6618663.219512195,
            "unit": "ns",
            "range": "± 236645.77932381473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7914266.923076923,
            "unit": "ns",
            "range": "± 35618.12269866175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22338184.4,
            "unit": "ns",
            "range": "± 312899.91014695325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54227279.733333334,
            "unit": "ns",
            "range": "± 925310.7291309126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109119250.27777778,
            "unit": "ns",
            "range": "± 2278209.105477443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219533071.42857143,
            "unit": "ns",
            "range": "± 4934358.2250748845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48865.06493506493,
            "unit": "ns",
            "range": "± 2437.6778873694657"
          }
        ]
      }
    ]
  }
}