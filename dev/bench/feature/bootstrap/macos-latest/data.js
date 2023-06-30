window.BENCHMARK_DATA = {
  "lastUpdate": 1688108031686,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687707675761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10091844.632653061,
            "unit": "ns",
            "range": "± 830008.68441648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28239508.31632653,
            "unit": "ns",
            "range": "± 2898027.6906200233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52530390.96666667,
            "unit": "ns",
            "range": "± 965480.1909514002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109334137.9,
            "unit": "ns",
            "range": "± 2495369.4887195597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228892164.18333334,
            "unit": "ns",
            "range": "± 10221892.45133379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71581.91111111111,
            "unit": "ns",
            "range": "± 13581.164415042418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334123.8617021277,
            "unit": "ns",
            "range": "± 30580.666805532393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338764.57954545453,
            "unit": "ns",
            "range": "± 34095.09241920396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321488.8333333333,
            "unit": "ns",
            "range": "± 35851.162880000345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4405528.023809524,
            "unit": "ns",
            "range": "± 159353.0744410935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4029149.761904762,
            "unit": "ns",
            "range": "± 144788.5225730305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18583.267441860466,
            "unit": "ns",
            "range": "± 2830.1154431844343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95253.10215053764,
            "unit": "ns",
            "range": "± 18082.353918127752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106487.375,
            "unit": "ns",
            "range": "± 24514.573369732545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113983.97894736842,
            "unit": "ns",
            "range": "± 20712.934819832168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6664.369565217391,
            "unit": "ns",
            "range": "± 1855.6460011815045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18902.793478260868,
            "unit": "ns",
            "range": "± 4213.2324374836835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1821244.4263157896,
            "unit": "ns",
            "range": "± 312365.68796116504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3412593.763157895,
            "unit": "ns",
            "range": "± 365401.4596000618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2908931.159574468,
            "unit": "ns",
            "range": "± 314736.16633906716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7159792.530612245,
            "unit": "ns",
            "range": "± 593211.3153779017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3402451.882352941,
            "unit": "ns",
            "range": "± 163007.54791841394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3589852.1938775512,
            "unit": "ns",
            "range": "± 328219.75966085284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4855185.04040404,
            "unit": "ns",
            "range": "± 410625.1505627138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4651716.773195877,
            "unit": "ns",
            "range": "± 363912.0960038376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8308960.193548387,
            "unit": "ns",
            "range": "± 624777.0414848571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8168276.663667929,
            "unit": "ns",
            "range": "± 596822.0154500594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213651.135945638,
            "unit": "ns",
            "range": "± 137463.5228160107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366618.09296875,
            "unit": "ns",
            "range": "± 23103.6347188891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688189.2978515625,
            "unit": "ns",
            "range": "± 49857.50923401976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851548.9121744792,
            "unit": "ns",
            "range": "± 15817.1214450191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843789.2746394231,
            "unit": "ns",
            "range": "± 9978.413342929765"
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
          "id": "6d4e0b50cf276f025278eb8168694289e9de6f70",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T11:45:00+09:00",
          "tree_id": "3afb7d3a4ddd2659a2040eb1755753bbb3201465",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d4e0b50cf276f025278eb8168694289e9de6f70"
        },
        "date": 1687749080168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9516188.75510204,
            "unit": "ns",
            "range": "± 678591.1229685615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23035457.217391305,
            "unit": "ns",
            "range": "± 1277793.279727605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62130364.24226804,
            "unit": "ns",
            "range": "± 4946705.951201418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117576105.11538461,
            "unit": "ns",
            "range": "± 6903882.03427675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240734774.97272727,
            "unit": "ns",
            "range": "± 10082580.765909486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87578.89772727272,
            "unit": "ns",
            "range": "± 10099.35348794553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374011.2117647059,
            "unit": "ns",
            "range": "± 46382.59992509869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 403957.1853932584,
            "unit": "ns",
            "range": "± 77558.66250408541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 399886.7840909091,
            "unit": "ns",
            "range": "± 67481.1240647694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5150474.322222223,
            "unit": "ns",
            "range": "± 959111.5136860333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4262343.434782608,
            "unit": "ns",
            "range": "± 552167.778806193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30874.970588235294,
            "unit": "ns",
            "range": "± 4002.56608044031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134853.7380952381,
            "unit": "ns",
            "range": "± 21919.677962203827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129362.5294117647,
            "unit": "ns",
            "range": "± 14127.59825709967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148822.3260869565,
            "unit": "ns",
            "range": "± 27297.064823336263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10423.686813186812,
            "unit": "ns",
            "range": "± 1608.161102433376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29760.5989010989,
            "unit": "ns",
            "range": "± 6015.74151161387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1813554.393258427,
            "unit": "ns",
            "range": "± 316077.46386342106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3598453.3804347827,
            "unit": "ns",
            "range": "± 497852.2780899784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2983672.75,
            "unit": "ns",
            "range": "± 560259.4055969063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9423894.457446808,
            "unit": "ns",
            "range": "± 3039271.2312114215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3667947.776595745,
            "unit": "ns",
            "range": "± 391567.00149678864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3757445.3917525774,
            "unit": "ns",
            "range": "± 361493.04842545494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4849913.080645162,
            "unit": "ns",
            "range": "± 444481.02927533275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4555790.630952381,
            "unit": "ns",
            "range": "± 282025.41344186506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10349160.631868131,
            "unit": "ns",
            "range": "± 2878336.0833073347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9111688.309303977,
            "unit": "ns",
            "range": "± 1459244.7038178851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203894.024049322,
            "unit": "ns",
            "range": "± 128546.52542275052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1508268.724609375,
            "unit": "ns",
            "range": "± 27501.458329253663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174762.584662829,
            "unit": "ns",
            "range": "± 256534.9330209476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941662.1113666735,
            "unit": "ns",
            "range": "± 47707.7082752036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862145.9668176529,
            "unit": "ns",
            "range": "± 33020.909141673605"
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
          "id": "358a6f0e875a4941ee9fcf3ba4aa438597d60753",
          "message": "chore: Fix minor log error",
          "timestamp": "2023-06-30T15:35:33+09:00",
          "tree_id": "5139fe988c359cc333559af2640b8aaba2223695",
          "url": "https://github.com/OnedgeLee/libplanet/commit/358a6f0e875a4941ee9fcf3ba4aa438597d60753"
        },
        "date": 1688108006308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9037934.293814434,
            "unit": "ns",
            "range": "± 575617.6148299128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22031880.476190478,
            "unit": "ns",
            "range": "± 1006248.854411159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53236161.38235294,
            "unit": "ns",
            "range": "± 1050896.9836239826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108287411.33333333,
            "unit": "ns",
            "range": "± 1954403.6465488346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222610828.46666667,
            "unit": "ns",
            "range": "± 3602017.389495084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64728.17894736842,
            "unit": "ns",
            "range": "± 10243.631215975796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342436.688172043,
            "unit": "ns",
            "range": "± 35645.27889252123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345408.6222222222,
            "unit": "ns",
            "range": "± 33497.00465548208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328190.10869565216,
            "unit": "ns",
            "range": "± 22474.27955816126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4326907.984848484,
            "unit": "ns",
            "range": "± 120125.67421119881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3952536.694915254,
            "unit": "ns",
            "range": "± 175024.78473350214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24928.98901098901,
            "unit": "ns",
            "range": "± 3331.7885770408843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118118.24725274726,
            "unit": "ns",
            "range": "± 15227.925043297853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82156.94565217392,
            "unit": "ns",
            "range": "± 7091.836409305739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106338.25531914894,
            "unit": "ns",
            "range": "± 13349.405731959636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5750.333333333333,
            "unit": "ns",
            "range": "± 768.4805354290589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18481.191489361703,
            "unit": "ns",
            "range": "± 4342.547164616181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532977.875,
            "unit": "ns",
            "range": "± 120359.02010824028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2909353.9431818184,
            "unit": "ns",
            "range": "± 160276.99419032785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2546880.556701031,
            "unit": "ns",
            "range": "± 257948.6235875829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6347378.4655172415,
            "unit": "ns",
            "range": "± 278427.8929301852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530925.803030303,
            "unit": "ns",
            "range": "± 296234.6701233171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3749242.87628866,
            "unit": "ns",
            "range": "± 344502.82537560735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4736577.765306123,
            "unit": "ns",
            "range": "± 337018.27244673314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782106.951612903,
            "unit": "ns",
            "range": "± 325165.0441967064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7946699.370967742,
            "unit": "ns",
            "range": "± 361071.9692086958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7021260.381855868,
            "unit": "ns",
            "range": "± 276415.200395241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064736.005112592,
            "unit": "ns",
            "range": "± 65459.849638834625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296596.5696614583,
            "unit": "ns",
            "range": "± 19438.481621991483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506727.381610577,
            "unit": "ns",
            "range": "± 28446.172662633453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865852.3689313616,
            "unit": "ns",
            "range": "± 7086.160836833656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750172.1396875,
            "unit": "ns",
            "range": "± 17683.134673609457"
          }
        ]
      }
    ]
  }
}