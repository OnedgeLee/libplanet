window.BENCHMARK_DATA = {
  "lastUpdate": 1678519003439,
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "afc9187ac92e7857c73665b877e5e13c6bd5c1d4",
          "message": "fix: ActionExecutionState total count",
          "timestamp": "2023-03-11T15:58:40+09:00",
          "tree_id": "f2b277ea28629d1c15ce8061908f3e006d899d07",
          "url": "https://github.com/OnedgeLee/libplanet/commit/afc9187ac92e7857c73665b877e5e13c6bd5c1d4"
        },
        "date": 1678518988084,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219090.56701030929,
            "unit": "ns",
            "range": "± 18016.222257030844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223394.76530612246,
            "unit": "ns",
            "range": "± 23146.3491872245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201945.22680412373,
            "unit": "ns",
            "range": "± 22844.216537189975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13187617.96491228,
            "unit": "ns",
            "range": "± 568075.8527341587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11049191.648936171,
            "unit": "ns",
            "range": "± 850392.886631488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21779.76767676768,
            "unit": "ns",
            "range": "± 6876.8286456029555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63910.395833333336,
            "unit": "ns",
            "range": "± 12480.799159196215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47679.734042553195,
            "unit": "ns",
            "range": "± 8362.740392000098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104869.0412371134,
            "unit": "ns",
            "range": "± 20179.68864297585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9456.99,
            "unit": "ns",
            "range": "± 5540.985230365743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21884.848484848484,
            "unit": "ns",
            "range": "± 7125.512708174754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3851554.97260274,
            "unit": "ns",
            "range": "± 191046.46969941727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6462620.9375,
            "unit": "ns",
            "range": "± 120828.20047514777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27848348.734939758,
            "unit": "ns",
            "range": "± 1414549.996784568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7132113.70967742,
            "unit": "ns",
            "range": "± 430010.9833465475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35089824.01010101,
            "unit": "ns",
            "range": "± 2523061.1702923113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6920219.360532408,
            "unit": "ns",
            "range": "± 194010.10355788335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2261445.9876143294,
            "unit": "ns",
            "range": "± 79861.55291962835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1544635.932421875,
            "unit": "ns",
            "range": "± 27483.384946876675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2901804.5205078125,
            "unit": "ns",
            "range": "± 47920.892128589796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954667.1655680338,
            "unit": "ns",
            "range": "± 24677.237398165187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889833.8365652902,
            "unit": "ns",
            "range": "± 12241.974219171385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8831249.868686868,
            "unit": "ns",
            "range": "± 545190.6052351287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23106109.09090909,
            "unit": "ns",
            "range": "± 722010.2102101969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 63488048.47058824,
            "unit": "ns",
            "range": "± 943210.9260652623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116272416.84848484,
            "unit": "ns",
            "range": "± 3678465.3048536014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235655845.3448276,
            "unit": "ns",
            "range": "± 10250638.126689654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56390.46315789474,
            "unit": "ns",
            "range": "± 9832.4225741584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560067.7083333333,
            "unit": "ns",
            "range": "± 133889.4486942132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3167001.5094339624,
            "unit": "ns",
            "range": "± 131884.1880912397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586452.5212765955,
            "unit": "ns",
            "range": "± 208605.05261990495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6786796.02020202,
            "unit": "ns",
            "range": "± 656661.9754780494"
          }
        ]
      }
    ]
  }
}