window.BENCHMARK_DATA = {
  "lastUpdate": 1700813242541,
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
          "id": "ee39a7e185928a19acdb013214687d86ccf89e75",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:25:59+09:00",
          "tree_id": "6d4a6b44d082edda3683cfeee050f02e64ce3c99",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ee39a7e185928a19acdb013214687d86ccf89e75"
        },
        "date": 1700811827068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7841349.25,
            "unit": "ns",
            "range": "± 176719.82018672652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18918827.92857143,
            "unit": "ns",
            "range": "± 226575.81318146174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48084015.63333333,
            "unit": "ns",
            "range": "± 683157.8352856124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94805346.21052632,
            "unit": "ns",
            "range": "± 1732603.2633148555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209266049.03703704,
            "unit": "ns",
            "range": "± 5735699.44852025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35120.023255813954,
            "unit": "ns",
            "range": "± 2821.7896823146675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215330.20289855072,
            "unit": "ns",
            "range": "± 8352.13185990772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214838.5744680851,
            "unit": "ns",
            "range": "± 13353.433787775426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193926.725,
            "unit": "ns",
            "range": "± 6860.610417962187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3750287.6333333333,
            "unit": "ns",
            "range": "± 69680.97850291576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3523684.230769231,
            "unit": "ns",
            "range": "± 37266.18039445829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13557.236559139785,
            "unit": "ns",
            "range": "± 1730.893080601742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59520.2311827957,
            "unit": "ns",
            "range": "± 4787.245629840829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68145.37373737374,
            "unit": "ns",
            "range": "± 18207.036517419583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60325.10752688172,
            "unit": "ns",
            "range": "± 10657.152161058997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4018.574468085106,
            "unit": "ns",
            "range": "± 1432.6364484123692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12812.244444444445,
            "unit": "ns",
            "range": "± 1988.3012768857286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1090445.4574468085,
            "unit": "ns",
            "range": "± 188158.29234117077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2288336.0808080807,
            "unit": "ns",
            "range": "± 157309.22392326634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474473.91954023,
            "unit": "ns",
            "range": "± 77002.4468219239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6705323.625,
            "unit": "ns",
            "range": "± 390080.63033408206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2963969.2592592593,
            "unit": "ns",
            "range": "± 123800.53268028407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3124364.875,
            "unit": "ns",
            "range": "± 59718.87356816101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3621467.4411764704,
            "unit": "ns",
            "range": "± 99097.73232252155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3438703.807017544,
            "unit": "ns",
            "range": "± 140047.8544947658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12870266.90425532,
            "unit": "ns",
            "range": "± 2064521.527312936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834211.861328125,
            "unit": "ns",
            "range": "± 528438.8868387368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1303221.0149739583,
            "unit": "ns",
            "range": "± 27291.27264510559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 854489.2496744791,
            "unit": "ns",
            "range": "± 10802.092488438671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980732.885967548,
            "unit": "ns",
            "range": "± 40425.034082012804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808776.3349911404,
            "unit": "ns",
            "range": "± 150646.6230650039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 678588.4927472371,
            "unit": "ns",
            "range": "± 35717.42057428382"
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
          "id": "0198780b8f9d9739f5eb7f4eb7e7609a6f592887",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:49:46+09:00",
          "tree_id": "a91f114d3e421c26443004f85fcabdf5be4ee2aa",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0198780b8f9d9739f5eb7f4eb7e7609a6f592887"
        },
        "date": 1700813213808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9086777.331578948,
            "unit": "ns",
            "range": "± 521214.7585591422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22767904.30379747,
            "unit": "ns",
            "range": "± 1182424.1540788834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55669643.277777776,
            "unit": "ns",
            "range": "± 2328627.852522276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113988265.91666667,
            "unit": "ns",
            "range": "± 1701947.9342894375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230212200.6111111,
            "unit": "ns",
            "range": "± 4759208.849630406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77511.28494623656,
            "unit": "ns",
            "range": "± 11863.258597954646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340186.65789473685,
            "unit": "ns",
            "range": "± 36340.25310639026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301895.875,
            "unit": "ns",
            "range": "± 12876.413864910313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299469.4761904762,
            "unit": "ns",
            "range": "± 6769.410215218514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3998393.0714285714,
            "unit": "ns",
            "range": "± 53819.4548448997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3574358.576923077,
            "unit": "ns",
            "range": "± 23227.927068730358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19709.704301075268,
            "unit": "ns",
            "range": "± 2902.057461897544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93358.04301075269,
            "unit": "ns",
            "range": "± 10039.567784644805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102356.51063829787,
            "unit": "ns",
            "range": "± 7229.576516836159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105567.43684210526,
            "unit": "ns",
            "range": "± 18601.986153857575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7417.466666666666,
            "unit": "ns",
            "range": "± 875.265256102015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23709.23076923077,
            "unit": "ns",
            "range": "± 5037.533799339433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392147.706185567,
            "unit": "ns",
            "range": "± 135693.11277620005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2825146.1971830986,
            "unit": "ns",
            "range": "± 137117.715188355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244155.19,
            "unit": "ns",
            "range": "± 225039.13471919842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8589715.528571429,
            "unit": "ns",
            "range": "± 273915.1686883331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505884.5306122447,
            "unit": "ns",
            "range": "± 341245.9729032787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3618258.1,
            "unit": "ns",
            "range": "± 402366.1626292648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4555354.4387755105,
            "unit": "ns",
            "range": "± 364022.9590800322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4815396.265957447,
            "unit": "ns",
            "range": "± 523310.786502879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19144581.48979592,
            "unit": "ns",
            "range": "± 2958795.855632345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6164504.00625,
            "unit": "ns",
            "range": "± 136141.36528866854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863400.4844777961,
            "unit": "ns",
            "range": "± 41218.182150418994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082774.032852564,
            "unit": "ns",
            "range": "± 37487.684288622186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3213647.850341797,
            "unit": "ns",
            "range": "± 61427.06692752033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 877558.4034016927,
            "unit": "ns",
            "range": "± 12222.662439668391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797587.2553074049,
            "unit": "ns",
            "range": "± 20171.903230969794"
          }
        ]
      }
    ]
  }
}