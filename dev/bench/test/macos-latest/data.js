window.BENCHMARK_DATA = {
  "lastUpdate": 1688378040013,
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
          "id": "de7148b69c5ebe792dc5d45c9824d576eb9b7cf6",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:33:37+09:00",
          "tree_id": "6775ed3cb275103fb17539f70b1aeaf076eec7c5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/de7148b69c5ebe792dc5d45c9824d576eb9b7cf6"
        },
        "date": 1688377716599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7750102.162162162,
            "unit": "ns",
            "range": "± 235609.9513649523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18899611.57142857,
            "unit": "ns",
            "range": "± 441824.3877149123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46937970.5,
            "unit": "ns",
            "range": "± 609032.6517070602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92394817.5,
            "unit": "ns",
            "range": "± 1403913.5405450417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192232032.53333333,
            "unit": "ns",
            "range": "± 2127417.531440907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56947.63978494624,
            "unit": "ns",
            "range": "± 6472.102201306838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314874.3526315789,
            "unit": "ns",
            "range": "± 19993.61697396086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305349.13684210525,
            "unit": "ns",
            "range": "± 21132.122134984067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278722.2083333333,
            "unit": "ns",
            "range": "± 18920.74429932266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3958455.375,
            "unit": "ns",
            "range": "± 75494.16083987335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3673393.2391304346,
            "unit": "ns",
            "range": "± 90730.40083637266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16040.75,
            "unit": "ns",
            "range": "± 1488.9334395319092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81663.17777777778,
            "unit": "ns",
            "range": "± 6929.486992098184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81872.43478260869,
            "unit": "ns",
            "range": "± 9491.024725884361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93510.98901098901,
            "unit": "ns",
            "range": "± 13459.638001979189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5399.133333333333,
            "unit": "ns",
            "range": "± 759.834431994855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15880.785714285714,
            "unit": "ns",
            "range": "± 2507.431064633651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595294,
            "unit": "ns",
            "range": "± 187811.40233658344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3026967.1612903224,
            "unit": "ns",
            "range": "± 226737.0793414934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2009731.6382978724,
            "unit": "ns",
            "range": "± 168045.51703169118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6040764.457894737,
            "unit": "ns",
            "range": "± 368220.96663066826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3126709.590909091,
            "unit": "ns",
            "range": "± 99179.48164954648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447904.225,
            "unit": "ns",
            "range": "± 122433.24566525045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4470355.322580645,
            "unit": "ns",
            "range": "± 136316.72473211962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3792691.066666667,
            "unit": "ns",
            "range": "± 162235.77448727825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6844761.185714286,
            "unit": "ns",
            "range": "± 222787.47793525396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6285660.254166666,
            "unit": "ns",
            "range": "± 50783.81165321725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833195.39765625,
            "unit": "ns",
            "range": "± 14069.48172187027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236821.871875,
            "unit": "ns",
            "range": "± 9813.92337808983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2426291.8627604167,
            "unit": "ns",
            "range": "± 19849.51273084334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835782.1026785715,
            "unit": "ns",
            "range": "± 4775.134006925448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695840.7481770833,
            "unit": "ns",
            "range": "± 4047.6276912433773"
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
          "id": "78a31a4dde3a2e76bbd7ba3ab3c499a67b45891d",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:36:24+09:00",
          "tree_id": "54cf3c346e52f96df9253b15b727eb5faafdf044",
          "url": "https://github.com/OnedgeLee/libplanet/commit/78a31a4dde3a2e76bbd7ba3ab3c499a67b45891d"
        },
        "date": 1688378015526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8448486.833333334,
            "unit": "ns",
            "range": "± 92180.72530296641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21376964.4,
            "unit": "ns",
            "range": "± 279555.447827899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52671952.6,
            "unit": "ns",
            "range": "± 591421.2149466499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101805445.85714285,
            "unit": "ns",
            "range": "± 1108780.6857842752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208764322.875,
            "unit": "ns",
            "range": "± 4051197.020925508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75818.30588235294,
            "unit": "ns",
            "range": "± 10916.410623704209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345257.84269662923,
            "unit": "ns",
            "range": "± 41276.51418644827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359015.3229166667,
            "unit": "ns",
            "range": "± 57113.14268260941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341645.0918367347,
            "unit": "ns",
            "range": "± 45080.88752427147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4302681.322033898,
            "unit": "ns",
            "range": "± 189354.60726986692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3904255.882352941,
            "unit": "ns",
            "range": "± 155277.1352013743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22669.893617021276,
            "unit": "ns",
            "range": "± 2773.268509380242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108372.96875,
            "unit": "ns",
            "range": "± 16335.08240338349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110451.5,
            "unit": "ns",
            "range": "± 14842.853164577806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129085.96875,
            "unit": "ns",
            "range": "± 17834.06424438068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6313.271739130435,
            "unit": "ns",
            "range": "± 735.296383440201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18069.17777777778,
            "unit": "ns",
            "range": "± 2744.9765950488163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631080.6894736842,
            "unit": "ns",
            "range": "± 150986.0037683002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3183302.3333333335,
            "unit": "ns",
            "range": "± 158398.5199352559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117109.329787234,
            "unit": "ns",
            "range": "± 165740.82569348067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5820118.646341464,
            "unit": "ns",
            "range": "± 181416.34933855338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236144.942857143,
            "unit": "ns",
            "range": "± 89660.24782475586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3425214.1147540985,
            "unit": "ns",
            "range": "± 146857.88953464484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4419379.411111111,
            "unit": "ns",
            "range": "± 149425.6239039437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3715154.436781609,
            "unit": "ns",
            "range": "± 196817.00870450298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7640701.139534884,
            "unit": "ns",
            "range": "± 626049.986289183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6657734.713260135,
            "unit": "ns",
            "range": "± 211277.94681932274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2137300.7037760415,
            "unit": "ns",
            "range": "± 58102.093095003926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383352.952734375,
            "unit": "ns",
            "range": "± 21965.103548876203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735603.809988839,
            "unit": "ns",
            "range": "± 70992.45193399652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900636.402719351,
            "unit": "ns",
            "range": "± 9823.540979012047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838383.7566784275,
            "unit": "ns",
            "range": "± 25460.397847400003"
          }
        ]
      }
    ]
  }
}