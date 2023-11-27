window.BENCHMARK_DATA = {
  "lastUpdate": 1701065270459,
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
          "id": "76374a85970d3ec7b6d29054c86be973386f7b75",
          "message": "Prepare 3.8.2",
          "timestamp": "2023-11-27T14:55:32+09:00",
          "tree_id": "add5ec96ea5930f032392a26f01995535f8902d9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/76374a85970d3ec7b6d29054c86be973386f7b75"
        },
        "date": 1701065237927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929585.2631578947,
            "unit": "ns",
            "range": "± 97502.991736338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1619836.4864864864,
            "unit": "ns",
            "range": "± 54702.80899837148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1251700,
            "unit": "ns",
            "range": "± 95902.38659752968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5038464.705882353,
            "unit": "ns",
            "range": "± 270575.9103529088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34432,
            "unit": "ns",
            "range": "± 1344.4428327795292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5132621.428571428,
            "unit": "ns",
            "range": "± 45315.54629775235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12987707.142857144,
            "unit": "ns",
            "range": "± 104652.64496849137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33232769.230769232,
            "unit": "ns",
            "range": "± 327341.5147940944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65496433.333333336,
            "unit": "ns",
            "range": "± 732584.9006542973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130753764.28571428,
            "unit": "ns",
            "range": "± 873831.3546209482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266957.722355769,
            "unit": "ns",
            "range": "± 6107.5968358379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068760.9244791667,
            "unit": "ns",
            "range": "± 3909.550476120453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723709.4935825893,
            "unit": "ns",
            "range": "± 1655.494119788759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893749.0234375,
            "unit": "ns",
            "range": "± 11834.870578330587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604464.8763020834,
            "unit": "ns",
            "range": "± 3655.0935160636386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560750.927734375,
            "unit": "ns",
            "range": "± 3444.5106261209453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134486.274509804,
            "unit": "ns",
            "range": "± 82919.64307595119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2198885.714285714,
            "unit": "ns",
            "range": "± 22254.67477746079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2771054.285714286,
            "unit": "ns",
            "range": "± 88654.99336607891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2580122.0588235296,
            "unit": "ns",
            "range": "± 122096.86495368699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5883732.5,
            "unit": "ns",
            "range": "± 199170.1796332177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177867.44186046513,
            "unit": "ns",
            "range": "± 12618.608498473852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162874.2857142857,
            "unit": "ns",
            "range": "± 7628.221547330366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140152.04081632654,
            "unit": "ns",
            "range": "± 5392.490526800456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2703186.6666666665,
            "unit": "ns",
            "range": "± 45580.93064095158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2474960,
            "unit": "ns",
            "range": "± 44130.46890431015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9707.777777777777,
            "unit": "ns",
            "range": "± 635.5087810066665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48650.60240963855,
            "unit": "ns",
            "range": "± 2555.3088445848643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43669.69696969697,
            "unit": "ns",
            "range": "± 1387.5528927947325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48184.69387755102,
            "unit": "ns",
            "range": "± 9465.415638221706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2861.2244897959185,
            "unit": "ns",
            "range": "± 491.9208412267588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9672.448979591836,
            "unit": "ns",
            "range": "± 1306.9032108479655"
          }
        ]
      }
    ]
  }
}