window.BENCHMARK_DATA = {
  "lastUpdate": 1700450349696,
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
          "id": "95fc6b0769b298364917360c5cec98ffd7e3b245",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:06:59+09:00",
          "tree_id": "c9fc9a8bfa29a6b3372b78366db598670ca40ec6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/95fc6b0769b298364917360c5cec98ffd7e3b245"
        },
        "date": 1700450339709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577349.428571428,
            "unit": "ns",
            "range": "± 28315.557976040407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14253847.766666668,
            "unit": "ns",
            "range": "± 115929.00299226657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36897744.384615384,
            "unit": "ns",
            "range": "± 239348.70087299356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75143323.11538461,
            "unit": "ns",
            "range": "± 440009.7048769755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150017894.73333332,
            "unit": "ns",
            "range": "± 645550.1552664171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017282.3894736842,
            "unit": "ns",
            "range": "± 82901.18265464122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917439.9838709678,
            "unit": "ns",
            "range": "± 86809.87879296293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631423.0114942528,
            "unit": "ns",
            "range": "± 135345.933523289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6646517.905405405,
            "unit": "ns",
            "range": "± 331497.5504917009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2462433.1666666665,
            "unit": "ns",
            "range": "± 45738.03261223744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2615606,
            "unit": "ns",
            "range": "± 35713.03568926698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3163571,
            "unit": "ns",
            "range": "± 47849.74169657106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3103616.2112676054,
            "unit": "ns",
            "range": "± 148921.7556158665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7410934.904761905,
            "unit": "ns",
            "range": "± 257669.67342380856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41179.38421052632,
            "unit": "ns",
            "range": "± 5564.746026326268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3788605.008072917,
            "unit": "ns",
            "range": "± 53531.20160484534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220736.0609975962,
            "unit": "ns",
            "range": "± 3915.9480469133323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783559.7746394231,
            "unit": "ns",
            "range": "± 3416.512792338722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911800.1647600445,
            "unit": "ns",
            "range": "± 2471.3407227780963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640453.010929988,
            "unit": "ns",
            "range": "± 5129.939101665756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571972.6793619791,
            "unit": "ns",
            "range": "± 2375.69806261867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207243.03125,
            "unit": "ns",
            "range": "± 13372.589607459711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197737.78494623656,
            "unit": "ns",
            "range": "± 11556.261490082432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167634.64705882352,
            "unit": "ns",
            "range": "± 3385.0084184012094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075660.3333333335,
            "unit": "ns",
            "range": "± 26671.30714775144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2935001.3571428573,
            "unit": "ns",
            "range": "± 34091.58456864537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16400.178947368422,
            "unit": "ns",
            "range": "± 1419.6754721979887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66329.02127659574,
            "unit": "ns",
            "range": "± 8506.486194421674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55043.07692307692,
            "unit": "ns",
            "range": "± 5260.917513601129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67929.83516483517,
            "unit": "ns",
            "range": "± 13899.00966517138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2874.1428571428573,
            "unit": "ns",
            "range": "± 541.5908993304093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12334.322916666666,
            "unit": "ns",
            "range": "± 1595.3447045093862"
          }
        ]
      }
    ]
  }
}