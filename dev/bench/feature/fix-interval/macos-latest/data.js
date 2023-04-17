window.BENCHMARK_DATA = {
  "lastUpdate": 1681712747516,
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
          "id": "62ebfebc569371c237daf2ddd79c573a2c4d6e1c",
          "message": "feature/fixed-interval",
          "timestamp": "2023-04-17T15:03:25+09:00",
          "tree_id": "dd788e0f80205133e5d4af9559213fecb9d884ec",
          "url": "https://github.com/OnedgeLee/libplanet/commit/62ebfebc569371c237daf2ddd79c573a2c4d6e1c"
        },
        "date": 1681712715210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10610628.924731182,
            "unit": "ns",
            "range": "± 2803938.805773094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29032792.26595745,
            "unit": "ns",
            "range": "± 9110880.996833956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70388004.31914894,
            "unit": "ns",
            "range": "± 14646279.034758091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146616749.87096775,
            "unit": "ns",
            "range": "± 42999063.50629263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253115738.93333334,
            "unit": "ns",
            "range": "± 42612154.30762823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75478.82558139534,
            "unit": "ns",
            "range": "± 7531.6677243753065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 460169.097826087,
            "unit": "ns",
            "range": "± 67301.82641971826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387908.05263157893,
            "unit": "ns",
            "range": "± 58273.43940905695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 385706.02040816325,
            "unit": "ns",
            "range": "± 73023.79862901491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6112846.051020408,
            "unit": "ns",
            "range": "± 471384.16372737446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4521805.846938776,
            "unit": "ns",
            "range": "± 410285.04669104784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26174.217647058824,
            "unit": "ns",
            "range": "± 2858.261120613973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132534.74731182796,
            "unit": "ns",
            "range": "± 21209.099717305464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127448.0172413793,
            "unit": "ns",
            "range": "± 12877.688979856151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 281176,
            "unit": "ns",
            "range": "± 32443.962188036818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9949.779569892473,
            "unit": "ns",
            "range": "± 1529.5692372121962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25669.52380952381,
            "unit": "ns",
            "range": "± 2534.429419288292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691278.5208333333,
            "unit": "ns",
            "range": "± 215001.9690954617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3497115.788888889,
            "unit": "ns",
            "range": "± 418527.6414163778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2840779.736263736,
            "unit": "ns",
            "range": "± 386252.0815450229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8721396.91111111,
            "unit": "ns",
            "range": "± 1919648.030114402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3578737.5,
            "unit": "ns",
            "range": "± 530222.68604757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3815209.9655172415,
            "unit": "ns",
            "range": "± 441497.1259893933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4983486.488764045,
            "unit": "ns",
            "range": "± 516089.0988713377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5177403.543478261,
            "unit": "ns",
            "range": "± 985247.5668306982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9437765.055555556,
            "unit": "ns",
            "range": "± 1036198.138137868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6796459.534539473,
            "unit": "ns",
            "range": "± 224882.76581145826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2130208.3533203127,
            "unit": "ns",
            "range": "± 47574.32746472223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405392.0762992527,
            "unit": "ns",
            "range": "± 50594.66953574984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151824.40807977,
            "unit": "ns",
            "range": "± 219641.19258239426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855708.0243530273,
            "unit": "ns",
            "range": "± 16095.786118255446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814385.7072870163,
            "unit": "ns",
            "range": "± 29413.633020813173"
          }
        ]
      }
    ]
  }
}