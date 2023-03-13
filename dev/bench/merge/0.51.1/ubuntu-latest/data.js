window.BENCHMARK_DATA = {
  "lastUpdate": 1678697112943,
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
          "id": "e2e3b0918ea906a8252bb4046be907ee1fb5e24c",
          "message": "Merge tag '0.51.1'\n\nLibplanet 0.51.1",
          "timestamp": "2023-03-13T15:38:32+09:00",
          "tree_id": "6d24838bc6e9bee1c1969a025d8f4a1df614b267",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2e3b0918ea906a8252bb4046be907ee1fb5e24c"
        },
        "date": 1678690343283,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183898.88888888888,
            "unit": "ns",
            "range": "± 3803.5277879866903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186637.75,
            "unit": "ns",
            "range": "± 6071.698629708164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157622.15384615384,
            "unit": "ns",
            "range": "± 901.9530518227141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11188655,
            "unit": "ns",
            "range": "± 70785.45344611016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9073525.733333332,
            "unit": "ns",
            "range": "± 74953.18812381371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15922.802083333334,
            "unit": "ns",
            "range": "± 1310.4322197358892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46218.20652173913,
            "unit": "ns",
            "range": "± 3081.0033492676953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36841.416666666664,
            "unit": "ns",
            "range": "± 486.9775911091025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78332.33673469388,
            "unit": "ns",
            "range": "± 10851.544123050551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4423.670103092783,
            "unit": "ns",
            "range": "± 314.8686472711507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15108.608695652174,
            "unit": "ns",
            "range": "± 740.4240878869849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3159744.1764705884,
            "unit": "ns",
            "range": "± 43023.6552625926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4956254.466666667,
            "unit": "ns",
            "range": "± 46893.33691454418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22912938.5,
            "unit": "ns",
            "range": "± 380098.92167368747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6064516.5,
            "unit": "ns",
            "range": "± 128180.13881402358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26327157.07142857,
            "unit": "ns",
            "range": "± 344156.9215563568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956944.922395834,
            "unit": "ns",
            "range": "± 20013.477174940108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959470.5443638393,
            "unit": "ns",
            "range": "± 2442.118597498428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379703.6140625,
            "unit": "ns",
            "range": "± 4134.243445726742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517247.39453125,
            "unit": "ns",
            "range": "± 3926.912237107821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825601.9801432291,
            "unit": "ns",
            "range": "± 1450.784136409424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737548.400530134,
            "unit": "ns",
            "range": "± 1453.826915328545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7783926.642857143,
            "unit": "ns",
            "range": "± 6145.586378821832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19488377.14285714,
            "unit": "ns",
            "range": "± 136833.00189470552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49438890.64285714,
            "unit": "ns",
            "range": "± 216714.1528009817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98467934.6923077,
            "unit": "ns",
            "range": "± 359062.9815678545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 197562564.46666667,
            "unit": "ns",
            "range": "± 921243.7129032894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45047.74025974026,
            "unit": "ns",
            "range": "± 2308.920717351664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1315453.4646464647,
            "unit": "ns",
            "range": "± 77962.97937853464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2459258,
            "unit": "ns",
            "range": "± 80086.2743626779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075972.2112676057,
            "unit": "ns",
            "range": "± 101424.52842270953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5150464.355932203,
            "unit": "ns",
            "range": "± 224860.17635516208"
          }
        ]
      },
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
          "id": "e2d2936a43be63f056cf8e71638bc3c9c2c7c75e",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T17:21:45+09:00",
          "tree_id": "1296bb363dfb2f87c79e21d00e3da59a59a1b825",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2d2936a43be63f056cf8e71638bc3c9c2c7c75e"
        },
        "date": 1678697098065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225209.95652173914,
            "unit": "ns",
            "range": "± 37016.36573695093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231446.88043478262,
            "unit": "ns",
            "range": "± 31189.447877761686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181298.17045454544,
            "unit": "ns",
            "range": "± 20352.979168651862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11861251.842105264,
            "unit": "ns",
            "range": "± 782727.931886818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9237837.072164949,
            "unit": "ns",
            "range": "± 734820.1545592671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24632.755102040817,
            "unit": "ns",
            "range": "± 10822.867860364544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67473.96842105263,
            "unit": "ns",
            "range": "± 16599.51667166953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54324.6914893617,
            "unit": "ns",
            "range": "± 12169.261961546557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122537.57731958762,
            "unit": "ns",
            "range": "± 25032.78972078216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4900.012195121952,
            "unit": "ns",
            "range": "± 466.3967604101125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25930.434343434343,
            "unit": "ns",
            "range": "± 11427.166214647263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065438.551020408,
            "unit": "ns",
            "range": "± 295032.3183516353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5019363.884210526,
            "unit": "ns",
            "range": "± 501736.89796628157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25869092.653061226,
            "unit": "ns",
            "range": "± 2620367.7258860553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5903631.040816327,
            "unit": "ns",
            "range": "± 475762.0334438177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32508355.4,
            "unit": "ns",
            "range": "± 4347596.242063976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6154447.075546875,
            "unit": "ns",
            "range": "± 413754.39311172924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135698.4557291665,
            "unit": "ns",
            "range": "± 116713.87002458704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414899.1962477993,
            "unit": "ns",
            "range": "± 69197.63903226549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2797297.416875,
            "unit": "ns",
            "range": "± 183043.85185495781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878774.6729266827,
            "unit": "ns",
            "range": "± 11968.69557119802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827791.5862103631,
            "unit": "ns",
            "range": "± 38626.91722525969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7653119.173469388,
            "unit": "ns",
            "range": "± 470659.78836770245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20040285.888888888,
            "unit": "ns",
            "range": "± 1684964.064216007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50637105.91044776,
            "unit": "ns",
            "range": "± 2384604.3729985696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104269840.56122449,
            "unit": "ns",
            "range": "± 7665476.414719318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201911779.375,
            "unit": "ns",
            "range": "± 9914768.634181561"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60740.68041237113,
            "unit": "ns",
            "range": "± 14418.491354815285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474397.6105263159,
            "unit": "ns",
            "range": "± 198113.5333095913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2891191.8333333335,
            "unit": "ns",
            "range": "± 319799.5242930422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2379162.4693877553,
            "unit": "ns",
            "range": "± 286229.2357143352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6225031.275510204,
            "unit": "ns",
            "range": "± 833944.4008993754"
          }
        ]
      }
    ]
  }
}