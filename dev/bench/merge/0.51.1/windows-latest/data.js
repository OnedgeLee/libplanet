window.BENCHMARK_DATA = {
  "lastUpdate": 1678691077911,
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
        "date": 1678691039445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472370.4545454546,
            "unit": "ns",
            "range": "± 192224.8044318721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922778.350515464,
            "unit": "ns",
            "range": "± 261560.64554372642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2492343.835616438,
            "unit": "ns",
            "range": "± 121666.39153656262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6227644.329896907,
            "unit": "ns",
            "range": "± 380908.1675113965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51920.43010752688,
            "unit": "ns",
            "range": "± 6622.910813160908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9545601.388888888,
            "unit": "ns",
            "range": "± 469790.89039940864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24475953.44827586,
            "unit": "ns",
            "range": "± 1067191.2898812597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59803560.97560976,
            "unit": "ns",
            "range": "± 1992943.3598170883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 117569813.51351352,
            "unit": "ns",
            "range": "± 3934778.7230712906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223723861,
            "unit": "ns",
            "range": "± 15820589.138635553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5743960.074869792,
            "unit": "ns",
            "range": "± 329959.49337052816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876494.9765625,
            "unit": "ns",
            "range": "± 48086.50778603037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370168.1803385417,
            "unit": "ns",
            "range": "± 53255.84423362025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252250.9635416665,
            "unit": "ns",
            "range": "± 31843.441378422547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1111135.8333333333,
            "unit": "ns",
            "range": "± 12337.742613877152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937656.1848958334,
            "unit": "ns",
            "range": "± 7676.59135402853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3654852.0833333335,
            "unit": "ns",
            "range": "± 243451.85452014586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5610513.636363637,
            "unit": "ns",
            "range": "± 135536.20600610058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26589145,
            "unit": "ns",
            "range": "± 610102.2386064746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6955830.303030303,
            "unit": "ns",
            "range": "± 207675.3874512584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31910098.4375,
            "unit": "ns",
            "range": "± 1463228.348765987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201887.03703703705,
            "unit": "ns",
            "range": "± 8522.357860829146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212205.37634408602,
            "unit": "ns",
            "range": "± 21142.43808485774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171107.14285714287,
            "unit": "ns",
            "range": "± 2157.0864558524254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11477982.653061224,
            "unit": "ns",
            "range": "± 1096581.070759261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10128263.265306123,
            "unit": "ns",
            "range": "± 589432.092813678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21923.595505617977,
            "unit": "ns",
            "range": "± 2122.0713761403304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58065.9793814433,
            "unit": "ns",
            "range": "± 7715.594147001066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49663.04347826087,
            "unit": "ns",
            "range": "± 4822.719067795684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119504.1237113402,
            "unit": "ns",
            "range": "± 19798.536969968332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7682.828282828283,
            "unit": "ns",
            "range": "± 1490.037693266578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24303.061224489797,
            "unit": "ns",
            "range": "± 4484.669282514877"
          }
        ]
      }
    ]
  }
}