window.BENCHMARK_DATA = {
  "lastUpdate": 1700816086532,
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
          "id": "d95ed8b5cd27e4226b1aebd1b6b59f55cedfd15d",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:57:39+09:00",
          "tree_id": "1fe858ac0430d230e37b7c4f8a199263253a0fcf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d95ed8b5cd27e4226b1aebd1b6b59f55cedfd15d"
        },
        "date": 1700813788771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8728667.45762712,
            "unit": "ns",
            "range": "± 386709.06931796897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22852304.292307694,
            "unit": "ns",
            "range": "± 1053389.226663759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57015640.729166664,
            "unit": "ns",
            "range": "± 2189260.0399178136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109593399.5,
            "unit": "ns",
            "range": "± 3325856.388474784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227215597.14285713,
            "unit": "ns",
            "range": "± 3272433.75488208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69281.98351648351,
            "unit": "ns",
            "range": "± 10461.328500044168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346559,
            "unit": "ns",
            "range": "± 38824.2591581066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344594.3125,
            "unit": "ns",
            "range": "± 43756.040796626614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318208.03684210527,
            "unit": "ns",
            "range": "± 26299.661212853334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4119994.8529411764,
            "unit": "ns",
            "range": "± 132180.18643913232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3653144.9736842103,
            "unit": "ns",
            "range": "± 79430.85671923756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24161.739583333332,
            "unit": "ns",
            "range": "± 4177.383142703455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122859.5,
            "unit": "ns",
            "range": "± 18369.200378044105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122675.875,
            "unit": "ns",
            "range": "± 16421.256571833608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110303.2191011236,
            "unit": "ns",
            "range": "± 12530.031781854748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8094.61052631579,
            "unit": "ns",
            "range": "± 1156.247252277235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23121.548387096773,
            "unit": "ns",
            "range": "± 3097.0231166611015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439435.293814433,
            "unit": "ns",
            "range": "± 159279.29575067825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2885163.74025974,
            "unit": "ns",
            "range": "± 137276.88532587618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133249.936170213,
            "unit": "ns",
            "range": "± 145021.8390357202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8919203.160714285,
            "unit": "ns",
            "range": "± 377147.69315745775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3475240.48989899,
            "unit": "ns",
            "range": "± 289923.9740974503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564361.3484848486,
            "unit": "ns",
            "range": "± 328568.5843199989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4606171.333333333,
            "unit": "ns",
            "range": "± 388345.58047111286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4329418.105263158,
            "unit": "ns",
            "range": "± 318490.42507076217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18204885.05,
            "unit": "ns",
            "range": "± 2421911.158244355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6420550.560344827,
            "unit": "ns",
            "range": "± 187690.72122719674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1751491.1272243923,
            "unit": "ns",
            "range": "± 78053.91313614129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072582.193359375,
            "unit": "ns",
            "range": "± 16684.874820950623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2827186.4651171877,
            "unit": "ns",
            "range": "± 222296.12735192114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790471.9970703125,
            "unit": "ns",
            "range": "± 13570.51252214833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801891.4473230699,
            "unit": "ns",
            "range": "± 13374.143596114603"
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
          "id": "ca7e2ee1d6abb17ae427af8e61dcb1c622b666a1",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T17:13:10+09:00",
          "tree_id": "1ebeb6c172976091e9aa4a9c6dfb941b063df094",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ca7e2ee1d6abb17ae427af8e61dcb1c622b666a1"
        },
        "date": 1700814508163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8036419.461538462,
            "unit": "ns",
            "range": "± 62513.611006744475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20706835.230769232,
            "unit": "ns",
            "range": "± 316052.7091035486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48382226.29591837,
            "unit": "ns",
            "range": "± 1923386.4410485846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101914914.76923077,
            "unit": "ns",
            "range": "± 626397.1465042704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214748550.2111111,
            "unit": "ns",
            "range": "± 17041021.53581966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49693.641304347824,
            "unit": "ns",
            "range": "± 10873.743722391717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247926.85555555555,
            "unit": "ns",
            "range": "± 21761.40634477691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229140.3625,
            "unit": "ns",
            "range": "± 11632.839801252912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219628.85555555555,
            "unit": "ns",
            "range": "± 14837.282169059623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872240.566666667,
            "unit": "ns",
            "range": "± 43593.535511040864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3517255.6153846155,
            "unit": "ns",
            "range": "± 57758.53551718346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15416.661290322581,
            "unit": "ns",
            "range": "± 2645.251809704729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73351.13157894737,
            "unit": "ns",
            "range": "± 10019.411611650308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71550.47894736842,
            "unit": "ns",
            "range": "± 8952.70611648024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75645.93157894736,
            "unit": "ns",
            "range": "± 10820.181342772476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5338.770833333333,
            "unit": "ns",
            "range": "± 1152.9135127937639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13112.67415730337,
            "unit": "ns",
            "range": "± 1455.15687045075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1153613.0210526315,
            "unit": "ns",
            "range": "± 135350.20096456632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2399085.0875,
            "unit": "ns",
            "range": "± 124967.67669389845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612850.1210526316,
            "unit": "ns",
            "range": "± 139397.7386909585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7238969.764044944,
            "unit": "ns",
            "range": "± 798780.5432436175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549267.734042553,
            "unit": "ns",
            "range": "± 674045.9923623664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3205335.336956522,
            "unit": "ns",
            "range": "± 245333.00962485358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3886491.064516129,
            "unit": "ns",
            "range": "± 117332.76815988946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3700014.9777777777,
            "unit": "ns",
            "range": "± 259536.43339374667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14403632.348484848,
            "unit": "ns",
            "range": "± 3168251.910958691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4264642.217633928,
            "unit": "ns",
            "range": "± 32369.079756678788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1318235.4411458333,
            "unit": "ns",
            "range": "± 21779.104848289906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 822408.7847377232,
            "unit": "ns",
            "range": "± 11286.941288882199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969753.29296875,
            "unit": "ns",
            "range": "± 20849.835106601746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619674.1301618303,
            "unit": "ns",
            "range": "± 5951.788451513334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555714.3641826923,
            "unit": "ns",
            "range": "± 8346.971179744178"
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
          "id": "26e89d54331415af2b3fb7c004fec34ea5cff936",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T17:16:29+09:00",
          "tree_id": "823e0e4b5f0acd4aed41a53028678dc6a8f29620",
          "url": "https://github.com/OnedgeLee/libplanet/commit/26e89d54331415af2b3fb7c004fec34ea5cff936"
        },
        "date": 1700814902848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8378443.181818182,
            "unit": "ns",
            "range": "± 200607.0301000456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22257299.777777776,
            "unit": "ns",
            "range": "± 1099853.7150475993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56830562.48571429,
            "unit": "ns",
            "range": "± 1826535.3468691094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105926134.90566038,
            "unit": "ns",
            "range": "± 4364340.930162834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223011511.42857143,
            "unit": "ns",
            "range": "± 3175323.319443155"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67280.57894736843,
            "unit": "ns",
            "range": "± 12222.32178606443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328083.9555555555,
            "unit": "ns",
            "range": "± 31277.773699801273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376329.0894736842,
            "unit": "ns",
            "range": "± 85784.8504476733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308678.71348314604,
            "unit": "ns",
            "range": "± 30827.279665932805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4313895.3,
            "unit": "ns",
            "range": "± 334034.0000933039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3792000.5153846154,
            "unit": "ns",
            "range": "± 176557.11239678334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20902.228260869564,
            "unit": "ns",
            "range": "± 4317.432295779877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112690.08333333333,
            "unit": "ns",
            "range": "± 20258.443618021636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102798.42857142857,
            "unit": "ns",
            "range": "± 22001.020455246275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103981.02127659574,
            "unit": "ns",
            "range": "± 17808.85936632804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8368.637362637362,
            "unit": "ns",
            "range": "± 1275.0155599615555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20805.129213483146,
            "unit": "ns",
            "range": "± 3145.200760979201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353014.7865168538,
            "unit": "ns",
            "range": "± 87269.83287644965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2720117.714285714,
            "unit": "ns",
            "range": "± 124414.3923494836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085213.5113636365,
            "unit": "ns",
            "range": "± 113965.6134167655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8800207.57142857,
            "unit": "ns",
            "range": "± 246288.02521173947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3246949.117647059,
            "unit": "ns",
            "range": "± 131473.99235052493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3405318.263736264,
            "unit": "ns",
            "range": "± 232391.62219671038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4388343.62886598,
            "unit": "ns",
            "range": "± 303458.1449235531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4211033.744680851,
            "unit": "ns",
            "range": "± 317414.1209400571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18088563.106060605,
            "unit": "ns",
            "range": "± 3012267.5367806163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6074721.096011513,
            "unit": "ns",
            "range": "± 129333.5607075207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1680057.0720214844,
            "unit": "ns",
            "range": "± 30400.167843555177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079656.3019386574,
            "unit": "ns",
            "range": "± 29406.19928264129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2472798.01953125,
            "unit": "ns",
            "range": "± 35197.120792995614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845966.3390625,
            "unit": "ns",
            "range": "± 11048.637406363172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752526.4274088541,
            "unit": "ns",
            "range": "± 8332.534994761842"
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
          "id": "c595740c9582df20ee818ea7f7c94482486d496f",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T17:38:12+09:00",
          "tree_id": "eafb805ba61515824adce42098a61fedea96eee1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c595740c9582df20ee818ea7f7c94482486d496f"
        },
        "date": 1700816043771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9046706.597826088,
            "unit": "ns",
            "range": "± 1417586.2873038966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19767464.055555556,
            "unit": "ns",
            "range": "± 422973.979770898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61282360.822222225,
            "unit": "ns",
            "range": "± 7934623.945879095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104911229.65384616,
            "unit": "ns",
            "range": "± 2804594.807251371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219978294.02702704,
            "unit": "ns",
            "range": "± 7398441.707914131"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50512.858695652176,
            "unit": "ns",
            "range": "± 12687.221390288232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266839.0888888889,
            "unit": "ns",
            "range": "± 33369.63634656696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237391.4247311828,
            "unit": "ns",
            "range": "± 20575.899659783783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220573.7789473684,
            "unit": "ns",
            "range": "± 16474.045932520225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3917796.9714285713,
            "unit": "ns",
            "range": "± 108400.36744605775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3626633.25,
            "unit": "ns",
            "range": "± 128257.9638756426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16425.364583333332,
            "unit": "ns",
            "range": "± 2868.8278226840557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79605.02127659574,
            "unit": "ns",
            "range": "± 14359.491874623971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71364.17010309278,
            "unit": "ns",
            "range": "± 13542.776673779561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74569.04347826086,
            "unit": "ns",
            "range": "± 12962.301188754218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5310.397959183673,
            "unit": "ns",
            "range": "± 1480.470465344945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15952.453608247422,
            "unit": "ns",
            "range": "± 3556.58871562291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1099269.6914893617,
            "unit": "ns",
            "range": "± 83076.19244996995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2376956.3387096776,
            "unit": "ns",
            "range": "± 166944.9460526024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561099.2127659575,
            "unit": "ns",
            "range": "± 100571.96398993584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6773745.740740741,
            "unit": "ns",
            "range": "± 280917.38566084846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3151440.3978494625,
            "unit": "ns",
            "range": "± 209302.35163416102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3317510.7802197803,
            "unit": "ns",
            "range": "± 364868.44886271615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3821744.55,
            "unit": "ns",
            "range": "± 197459.41238297653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3790544.875,
            "unit": "ns",
            "range": "± 248443.16737001698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14483343.054347826,
            "unit": "ns",
            "range": "± 3803197.8738027536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517394.192555147,
            "unit": "ns",
            "range": "± 145478.21250518016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1354351.8618607954,
            "unit": "ns",
            "range": "± 28744.42821710045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883432.7682059152,
            "unit": "ns",
            "range": "± 13614.467384875328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2178833.5305859377,
            "unit": "ns",
            "range": "± 141168.79536951098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634593.6411132812,
            "unit": "ns",
            "range": "± 4598.469441123712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590688.9038330078,
            "unit": "ns",
            "range": "± 19381.20797986787"
          }
        ]
      }
    ]
  }
}