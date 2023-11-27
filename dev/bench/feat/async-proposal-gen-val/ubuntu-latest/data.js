window.BENCHMARK_DATA = {
  "lastUpdate": 1701044225676,
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
      },
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
          "id": "b2d054b77502ba95398e99b7f91b3369a8adf951",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-20T12:42:56+09:00",
          "tree_id": "2122fe1694da7bf180ea40e3269d0f3dc25f5d63",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b2d054b77502ba95398e99b7f91b3369a8adf951"
        },
        "date": 1700452449735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5569687.642857143,
            "unit": "ns",
            "range": "± 38154.558388031626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14278781.25,
            "unit": "ns",
            "range": "± 147834.07954689363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36588680.428571425,
            "unit": "ns",
            "range": "± 144393.0427403003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76389025.28571428,
            "unit": "ns",
            "range": "± 336670.9033970434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149145313.2142857,
            "unit": "ns",
            "range": "± 460913.22216012364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034212.7373737374,
            "unit": "ns",
            "range": "± 106110.70869746023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922080.5192307692,
            "unit": "ns",
            "range": "± 79344.54014463961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589041.2043010753,
            "unit": "ns",
            "range": "± 104499.92069172768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6585707.694117647,
            "unit": "ns",
            "range": "± 353318.3961754282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2414832.6666666665,
            "unit": "ns",
            "range": "± 84248.50540899299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644830.3396226414,
            "unit": "ns",
            "range": "± 106305.39552736067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3142234.3529411764,
            "unit": "ns",
            "range": "± 63204.549003553904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3057495.861111111,
            "unit": "ns",
            "range": "± 149246.28756477585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7430680.525,
            "unit": "ns",
            "range": "± 215288.68309723795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41994.1030927835,
            "unit": "ns",
            "range": "± 5411.477406256801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3664700.4153645835,
            "unit": "ns",
            "range": "± 41965.40002258231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195176.2300502232,
            "unit": "ns",
            "range": "± 2427.8808332614217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769829.3389423077,
            "unit": "ns",
            "range": "± 2577.6600093654192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941798.530859375,
            "unit": "ns",
            "range": "± 22105.465093303676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617426.9503455529,
            "unit": "ns",
            "range": "± 2419.2157073023122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575084.4260602678,
            "unit": "ns",
            "range": "± 1495.3612932512472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199661.79545454544,
            "unit": "ns",
            "range": "± 10905.558584943472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196491.85820895524,
            "unit": "ns",
            "range": "± 8344.103489983832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167903.7962962963,
            "unit": "ns",
            "range": "± 4705.96366992756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115375.4,
            "unit": "ns",
            "range": "± 33965.957663098925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853587.9,
            "unit": "ns",
            "range": "± 33439.31168293647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14324.284210526315,
            "unit": "ns",
            "range": "± 2812.1298003665734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68014.4693877551,
            "unit": "ns",
            "range": "± 7537.8863282768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58636,
            "unit": "ns",
            "range": "± 6151.015657682285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58517.48936170213,
            "unit": "ns",
            "range": "± 8898.759815422249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2737.7368421052633,
            "unit": "ns",
            "range": "± 447.8204952530032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14544.631578947368,
            "unit": "ns",
            "range": "± 3080.1926060688993"
          }
        ]
      },
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
          "id": "9e6284a235a84f88bb3b536146a1ca39f02256c6",
          "message": "fix: Proposal Validation to be async",
          "timestamp": "2023-11-27T09:05:46+09:00",
          "tree_id": "30446fafd3ccea90d584846b5fb459fff2314d71",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9e6284a235a84f88bb3b536146a1ca39f02256c6"
        },
        "date": 1701044213484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205863,
            "unit": "ns",
            "range": "± 8287.23606714887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197536,
            "unit": "ns",
            "range": "± 8139.322160849467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167241.85714285713,
            "unit": "ns",
            "range": "± 1943.0223426856996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145490.2333333334,
            "unit": "ns",
            "range": "± 32196.033084098744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848484.966666667,
            "unit": "ns",
            "range": "± 44227.59057722528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15867.90625,
            "unit": "ns",
            "range": "± 2429.9165291192294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61657.89361702128,
            "unit": "ns",
            "range": "± 5191.082310891771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56341.19892473118,
            "unit": "ns",
            "range": "± 5922.417883118469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64342.71134020619,
            "unit": "ns",
            "range": "± 9138.433147699569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5363.464646464647,
            "unit": "ns",
            "range": "± 1626.5588712040137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23414.45,
            "unit": "ns",
            "range": "± 6655.401546484591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3834530.1705729165,
            "unit": "ns",
            "range": "± 63844.62267587312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205472.2513950893,
            "unit": "ns",
            "range": "± 9502.842576767865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762553.5238932292,
            "unit": "ns",
            "range": "± 13422.303497645416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958274.14765625,
            "unit": "ns",
            "range": "± 24581.5918983751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623482.7390485491,
            "unit": "ns",
            "range": "± 1828.0243456252283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572241.1194196428,
            "unit": "ns",
            "range": "± 9847.866247401482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41800.221649484534,
            "unit": "ns",
            "range": "± 6614.834648888103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2486407.2391304346,
            "unit": "ns",
            "range": "± 60730.446566040264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2582476.1333333333,
            "unit": "ns",
            "range": "± 35024.8443330214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203337.1333333333,
            "unit": "ns",
            "range": "± 93852.03135548306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3090255.9814814813,
            "unit": "ns",
            "range": "± 129334.01206058802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7430929.805555556,
            "unit": "ns",
            "range": "± 233884.42620024586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5597239,
            "unit": "ns",
            "range": "± 30617.449359568054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14351301.5,
            "unit": "ns",
            "range": "± 94553.45050836835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37588994.85714286,
            "unit": "ns",
            "range": "± 193792.88027233418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73875394.5,
            "unit": "ns",
            "range": "± 935164.9249599691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150074393.46153846,
            "unit": "ns",
            "range": "± 1001184.3292183691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058237.0104166667,
            "unit": "ns",
            "range": "± 123951.94802566753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1986910.1274509805,
            "unit": "ns",
            "range": "± 80879.92757785105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1639279.8402061856,
            "unit": "ns",
            "range": "± 141628.36161712738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6722375.764044944,
            "unit": "ns",
            "range": "± 471932.66705320904"
          }
        ]
      }
    ]
  }
}