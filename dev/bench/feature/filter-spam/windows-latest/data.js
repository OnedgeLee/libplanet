window.BENCHMARK_DATA = {
  "lastUpdate": 1688538062489,
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
          "id": "0b225df110bba031ea1aa7b97806a03648949425",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-04T21:31:23+09:00",
          "tree_id": "7e2b739e9dfc5011a4fcf0809562b554ec8e6f8b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0b225df110bba031ea1aa7b97806a03648949425"
        },
        "date": 1688475489820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742580,
            "unit": "ns",
            "range": "± 291474.0447928062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3123809.375,
            "unit": "ns",
            "range": "± 357007.7513763016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101129.8969072164,
            "unit": "ns",
            "range": "± 222778.72671337117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6458416.4948453605,
            "unit": "ns",
            "range": "± 678935.725922137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66256.45161290323,
            "unit": "ns",
            "range": "± 12790.585927120237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10282614.43298969,
            "unit": "ns",
            "range": "± 922921.3493473784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26443601.408450704,
            "unit": "ns",
            "range": "± 1282711.97496253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66201649.31506849,
            "unit": "ns",
            "range": "± 3255627.222472025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136183700,
            "unit": "ns",
            "range": "± 1238114.1627491384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266851581.4814815,
            "unit": "ns",
            "range": "± 11076948.205970984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6191211.71875,
            "unit": "ns",
            "range": "± 218029.77935629367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958934.939453125,
            "unit": "ns",
            "range": "± 122631.48864806771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357495.9336577868,
            "unit": "ns",
            "range": "± 60649.81201711445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3420824.0675403224,
            "unit": "ns",
            "range": "± 103667.73239247083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1075477.621299342,
            "unit": "ns",
            "range": "± 46429.34793084455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 992173.9420572916,
            "unit": "ns",
            "range": "± 32967.45397163453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4015617.3469387754,
            "unit": "ns",
            "range": "± 393722.23947972496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4305397.916666667,
            "unit": "ns",
            "range": "± 385940.31471450336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5575291.8367346935,
            "unit": "ns",
            "range": "± 535298.2592204337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4896732.989690722,
            "unit": "ns",
            "range": "± 519873.24110499315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8530677.659574468,
            "unit": "ns",
            "range": "± 658655.7514801677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340523.40425531915,
            "unit": "ns",
            "range": "± 39502.70557096334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311373.9130434783,
            "unit": "ns",
            "range": "± 37796.49925520086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298151.02040816325,
            "unit": "ns",
            "range": "± 51844.454603890255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5328267.391304348,
            "unit": "ns",
            "range": "± 381303.46718830557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4554144.2105263155,
            "unit": "ns",
            "range": "± 312210.9664939785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25431.25,
            "unit": "ns",
            "range": "± 9541.061537541716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104432.29166666667,
            "unit": "ns",
            "range": "± 18882.659796987606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110750.52631578948,
            "unit": "ns",
            "range": "± 33165.75994453872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147784.84848484848,
            "unit": "ns",
            "range": "± 32644.418104710894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7742.696629213483,
            "unit": "ns",
            "range": "± 1878.7016576039855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25179.381443298967,
            "unit": "ns",
            "range": "± 7706.516968129554"
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
          "id": "f2fa70cc1b37e089a54e82e4e43816dfd9e453fe",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-05T01:46:41+09:00",
          "tree_id": "ab0df906e3b2f33a4f75add01687f353a4f68186",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f2fa70cc1b37e089a54e82e4e43816dfd9e453fe"
        },
        "date": 1688490160783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393890.625,
            "unit": "ns",
            "range": "± 108570.92183950059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2618714.6341463416,
            "unit": "ns",
            "range": "± 137861.31528581044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1834873.1958762887,
            "unit": "ns",
            "range": "± 149344.4114534866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5044458,
            "unit": "ns",
            "range": "± 321146.7319944375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47344.32989690721,
            "unit": "ns",
            "range": "± 3647.00131021378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7197907.142857143,
            "unit": "ns",
            "range": "± 84954.67990265538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20730515.384615384,
            "unit": "ns",
            "range": "± 156720.80720266982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51362047.82608695,
            "unit": "ns",
            "range": "± 1289688.771430592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100950204.54545455,
            "unit": "ns",
            "range": "± 2400478.7611219143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202861400,
            "unit": "ns",
            "range": "± 2587386.4741601064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857052.421875,
            "unit": "ns",
            "range": "± 29649.221159709603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546214.4661458333,
            "unit": "ns",
            "range": "± 9029.789589549404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1198002.5130208333,
            "unit": "ns",
            "range": "± 5981.028740899884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665374.6614583335,
            "unit": "ns",
            "range": "± 9386.654097132709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846553.8932291666,
            "unit": "ns",
            "range": "± 2581.1468672802316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775236.6861979166,
            "unit": "ns",
            "range": "± 2323.019160620876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3198978.723404255,
            "unit": "ns",
            "range": "± 124107.07672806997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3358882.8571428573,
            "unit": "ns",
            "range": "± 104264.4135492696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4224204.166666667,
            "unit": "ns",
            "range": "± 165883.20418016412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3799214.285714286,
            "unit": "ns",
            "range": "± 174345.55866119673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6181223.076923077,
            "unit": "ns",
            "range": "± 164307.91169677087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273522.7272727273,
            "unit": "ns",
            "range": "± 9656.131047557868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257040.81632653062,
            "unit": "ns",
            "range": "± 9606.788363082702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229633.68421052632,
            "unit": "ns",
            "range": "± 13171.347129977445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197452.94117647,
            "unit": "ns",
            "range": "± 85477.92929791189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3853837.5,
            "unit": "ns",
            "range": "± 74762.18183903766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22021.428571428572,
            "unit": "ns",
            "range": "± 1972.2952247592775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95988.88888888889,
            "unit": "ns",
            "range": "± 8775.079380871124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78481.44329896907,
            "unit": "ns",
            "range": "± 7342.929278917849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96388.77551020408,
            "unit": "ns",
            "range": "± 14386.956310743044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6091.836734693878,
            "unit": "ns",
            "range": "± 1129.4258617516032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19686.021505376346,
            "unit": "ns",
            "range": "± 1814.1108372884146"
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
          "id": "20387f84b688506c9887dc9837718efd25e6e4c5",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-05T01:47:24+09:00",
          "tree_id": "6ba9c34ff5f586450514be5cbef3dbac166ad4ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/20387f84b688506c9887dc9837718efd25e6e4c5"
        },
        "date": 1688490363190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466406.1224489796,
            "unit": "ns",
            "range": "± 138709.9035154419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2668443.4782608696,
            "unit": "ns",
            "range": "± 150521.6017532439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1853718.5567010308,
            "unit": "ns",
            "range": "± 136078.05230355306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4965803.389830508,
            "unit": "ns",
            "range": "± 217349.32868073485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50041.48936170213,
            "unit": "ns",
            "range": "± 3875.825533276974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7546155,
            "unit": "ns",
            "range": "± 164668.7919015494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21274473.333333332,
            "unit": "ns",
            "range": "± 322069.83596433746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53383107.14285714,
            "unit": "ns",
            "range": "± 355661.7374465751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105303200,
            "unit": "ns",
            "range": "± 1818225.2453579956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213853693.33333334,
            "unit": "ns",
            "range": "± 2687126.834814641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4912292.1875,
            "unit": "ns",
            "range": "± 15760.152173929355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1554930.0390625,
            "unit": "ns",
            "range": "± 7813.969416848377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1209276.8229166667,
            "unit": "ns",
            "range": "± 6669.516246141303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713733.9006696427,
            "unit": "ns",
            "range": "± 6222.882610756993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858462.3502604166,
            "unit": "ns",
            "range": "± 3472.0803520482514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774863.9423076923,
            "unit": "ns",
            "range": "± 998.5044104961876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3359870.588235294,
            "unit": "ns",
            "range": "± 136154.61254635136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480141.463414634,
            "unit": "ns",
            "range": "± 122684.69540983862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287770.588235294,
            "unit": "ns",
            "range": "± 130408.5945518041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3957541.6666666665,
            "unit": "ns",
            "range": "± 99378.5206285485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6354785.714285715,
            "unit": "ns",
            "range": "± 208454.86483233946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275204.347826087,
            "unit": "ns",
            "range": "± 10081.312888965274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261592.42424242425,
            "unit": "ns",
            "range": "± 12228.080050643342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239028.57142857142,
            "unit": "ns",
            "range": "± 17531.86789114546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4163764.705882353,
            "unit": "ns",
            "range": "± 81485.45070422442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3831700,
            "unit": "ns",
            "range": "± 72629.14015737761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21168.75,
            "unit": "ns",
            "range": "± 2404.570757186361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88318.55670103093,
            "unit": "ns",
            "range": "± 6311.981495155781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74715.9420289855,
            "unit": "ns",
            "range": "± 3264.948571273448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105477.55102040817,
            "unit": "ns",
            "range": "± 18363.772777991453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5829.292929292929,
            "unit": "ns",
            "range": "± 1045.4227272366736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21252.083333333332,
            "unit": "ns",
            "range": "± 2726.4003322934477"
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
          "id": "f064f6d554009f1fdadd492b7c51b33e4dd59aa2",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T09:14:02+09:00",
          "tree_id": "236986b6058ee227e77bd34ee31b4f64fe5e269d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f064f6d554009f1fdadd492b7c51b33e4dd59aa2"
        },
        "date": 1688516965702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301822.9166666667,
            "unit": "ns",
            "range": "± 90087.31376213409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481905.3571428573,
            "unit": "ns",
            "range": "± 105384.33111002078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636958.3333333333,
            "unit": "ns",
            "range": "± 118811.99803552241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4562478.125,
            "unit": "ns",
            "range": "± 209335.68884688534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42917.07317073171,
            "unit": "ns",
            "range": "± 2286.1258877907094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6890214.285714285,
            "unit": "ns",
            "range": "± 36723.24472723922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17580900,
            "unit": "ns",
            "range": "± 152476.16207132183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45375213.333333336,
            "unit": "ns",
            "range": "± 321958.08925711934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88965846.66666667,
            "unit": "ns",
            "range": "± 1152992.0894702412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177165813.33333334,
            "unit": "ns",
            "range": "± 2216553.905717698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4845108.112980769,
            "unit": "ns",
            "range": "± 7473.442226879934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520586.8098958333,
            "unit": "ns",
            "range": "± 2033.6722790225904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154851.2630208333,
            "unit": "ns",
            "range": "± 1889.1707618074918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546289.1183035714,
            "unit": "ns",
            "range": "± 6321.857149844787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845351.0532924107,
            "unit": "ns",
            "range": "± 3451.351249328895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741270.7356770834,
            "unit": "ns",
            "range": "± 883.2343918363198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2968233.3333333335,
            "unit": "ns",
            "range": "± 35110.6753539365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089483.3333333335,
            "unit": "ns",
            "range": "± 78255.19383605692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3953112.5,
            "unit": "ns",
            "range": "± 73533.15692030817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3537721.4285714286,
            "unit": "ns",
            "range": "± 127585.03722905235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5823906.060606061,
            "unit": "ns",
            "range": "± 172657.63076713757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255264.70588235295,
            "unit": "ns",
            "range": "± 5228.520485815106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239551.02040816325,
            "unit": "ns",
            "range": "± 8541.128985897678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205091.11111111112,
            "unit": "ns",
            "range": "± 7063.923138101808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3863283.3333333335,
            "unit": "ns",
            "range": "± 35512.06367794846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3389342.8571428573,
            "unit": "ns",
            "range": "± 31066.596314907216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16055.208333333334,
            "unit": "ns",
            "range": "± 1236.1544607682297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81225.77319587629,
            "unit": "ns",
            "range": "± 5570.145089943713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66300,
            "unit": "ns",
            "range": "± 2021.502062387099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84006.06060606061,
            "unit": "ns",
            "range": "± 14526.378667099483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4236.734693877551,
            "unit": "ns",
            "range": "± 715.712859992877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15811.340206185567,
            "unit": "ns",
            "range": "± 1473.6488365519076"
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
          "id": "1d55738fa0f34a63d8bf637893a33d40283b213e",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T14:54:45+09:00",
          "tree_id": "d47a05494fea83ea76b63ec519a1fcd951e25149",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1d55738fa0f34a63d8bf637893a33d40283b213e"
        },
        "date": 1688537363958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402977.2727272727,
            "unit": "ns",
            "range": "± 108457.73447281608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2608558.73015873,
            "unit": "ns",
            "range": "± 118314.43839973785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1773524.4897959183,
            "unit": "ns",
            "range": "± 126769.39780092503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4978443.661971831,
            "unit": "ns",
            "range": "± 240554.38870147694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48096.31578947369,
            "unit": "ns",
            "range": "± 3819.764126791406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6960068.75,
            "unit": "ns",
            "range": "± 125348.62168501627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20022192.85714286,
            "unit": "ns",
            "range": "± 227113.34586089797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49577921.05263158,
            "unit": "ns",
            "range": "± 1077973.6033559283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100645260,
            "unit": "ns",
            "range": "± 1841034.962731561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202499053.33333334,
            "unit": "ns",
            "range": "± 2581144.8926692163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4839598.828125,
            "unit": "ns",
            "range": "± 22599.714157283757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509314.1927083333,
            "unit": "ns",
            "range": "± 6325.597516927185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185362.7994791667,
            "unit": "ns",
            "range": "± 5917.440601279226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634267.578125,
            "unit": "ns",
            "range": "± 8423.43428593726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850277.40234375,
            "unit": "ns",
            "range": "± 2618.2156466800493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758675.0826322115,
            "unit": "ns",
            "range": "± 1407.7596508984007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201310,
            "unit": "ns",
            "range": "± 92913.26081073013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3308004.6511627906,
            "unit": "ns",
            "range": "± 116734.94999048133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4095916,
            "unit": "ns",
            "range": "± 156759.58631624674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3694302.4691358022,
            "unit": "ns",
            "range": "± 191872.26413379074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6210327.5,
            "unit": "ns",
            "range": "± 213148.46395387757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265616.27906976745,
            "unit": "ns",
            "range": "± 8458.890229827184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260311.42857142858,
            "unit": "ns",
            "range": "± 12325.754148161115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240593.9393939394,
            "unit": "ns",
            "range": "± 15680.520986384752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4091187.5,
            "unit": "ns",
            "range": "± 78286.06410679575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739207.1428571427,
            "unit": "ns",
            "range": "± 55535.885339477216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20778.350515463917,
            "unit": "ns",
            "range": "± 1907.8361872880419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93282.79569892473,
            "unit": "ns",
            "range": "± 6078.787487361525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82778.49462365592,
            "unit": "ns",
            "range": "± 7182.464295865579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102652.57731958762,
            "unit": "ns",
            "range": "± 15965.790856178413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5991.489361702128,
            "unit": "ns",
            "range": "± 1021.8746818847253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19954.166666666668,
            "unit": "ns",
            "range": "± 2226.770929379541"
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
          "id": "3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T15:03:14+09:00",
          "tree_id": "7c78d60a3f56f7f87efc4a16806afa2ac67e9d10",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79"
        },
        "date": 1688538017617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506354.7368421052,
            "unit": "ns",
            "range": "± 114229.30164797122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794786.6666666665,
            "unit": "ns",
            "range": "± 80950.37531949939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937651.0638297873,
            "unit": "ns",
            "range": "± 181952.05131394017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5260435.7894736845,
            "unit": "ns",
            "range": "± 345394.0810996602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53715.95744680851,
            "unit": "ns",
            "range": "± 6015.290609475933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8113340,
            "unit": "ns",
            "range": "± 141604.17064075882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21197735.714285713,
            "unit": "ns",
            "range": "± 281511.7666816429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54205607.14285714,
            "unit": "ns",
            "range": "± 701429.4344290924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110327906.66666667,
            "unit": "ns",
            "range": "± 2033402.6860225718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217276046.66666666,
            "unit": "ns",
            "range": "± 1468404.462025105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5000508.489583333,
            "unit": "ns",
            "range": "± 57266.93963853707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1589673.4224759615,
            "unit": "ns",
            "range": "± 11997.420274343223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229524.5492788462,
            "unit": "ns",
            "range": "± 9510.9091309884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2730480.0537109375,
            "unit": "ns",
            "range": "± 53186.31655497769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855958.3919270834,
            "unit": "ns",
            "range": "± 13145.41988704141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796376.6861979166,
            "unit": "ns",
            "range": "± 10800.787662960332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522792.8571428573,
            "unit": "ns",
            "range": "± 57040.86880724832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3693654.347826087,
            "unit": "ns",
            "range": "± 142124.86326626354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4462984.615384615,
            "unit": "ns",
            "range": "± 72513.12348067126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4082295.652173913,
            "unit": "ns",
            "range": "± 103161.78149903838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6669043.243243244,
            "unit": "ns",
            "range": "± 225881.017770837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294286.2068965517,
            "unit": "ns",
            "range": "± 12830.233596154101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277278.26086956525,
            "unit": "ns",
            "range": "± 10665.138703968141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260689.898989899,
            "unit": "ns",
            "range": "± 21842.2474685983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4330486.666666667,
            "unit": "ns",
            "range": "± 62725.42053228803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3960906.25,
            "unit": "ns",
            "range": "± 73933.60506788055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25523.157894736843,
            "unit": "ns",
            "range": "± 3244.5191963108437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105922,
            "unit": "ns",
            "range": "± 10686.398227218891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88490.625,
            "unit": "ns",
            "range": "± 8787.492045365869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118387.5,
            "unit": "ns",
            "range": "± 18325.893386709762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7153.684210526316,
            "unit": "ns",
            "range": "± 1156.646889450579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24520.833333333332,
            "unit": "ns",
            "range": "± 2913.9561340001655"
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
          "id": "485c7dc0aebcde157c895f822742c6b832cbd55f",
          "message": "dummy commit for upstrem refresh error",
          "timestamp": "2023-07-05T15:06:02+09:00",
          "tree_id": "8d083881b10d5cddcec3791ee5f0b4021cff4f2f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/485c7dc0aebcde157c895f822742c6b832cbd55f"
        },
        "date": 1688538027021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413642.4242424243,
            "unit": "ns",
            "range": "± 125133.95523696498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529982.0512820515,
            "unit": "ns",
            "range": "± 87029.48342461418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1756801.111111111,
            "unit": "ns",
            "range": "± 97780.00817524797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4588022.7272727275,
            "unit": "ns",
            "range": "± 139455.3639743779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46023.655913978495,
            "unit": "ns",
            "range": "± 3277.140782207085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7074878.571428572,
            "unit": "ns",
            "range": "± 49406.386671725384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17763440,
            "unit": "ns",
            "range": "± 71749.17421127576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46153853.333333336,
            "unit": "ns",
            "range": "± 233982.12955775263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91904560,
            "unit": "ns",
            "range": "± 239199.15133628715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182859371.42857143,
            "unit": "ns",
            "range": "± 301900.15014792664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876577.734375,
            "unit": "ns",
            "range": "± 17743.938758654982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498900.7393973214,
            "unit": "ns",
            "range": "± 1282.83614337901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158358.314732143,
            "unit": "ns",
            "range": "± 1103.0622139702373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565220.8463541665,
            "unit": "ns",
            "range": "± 21566.732568980577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821166.1393229166,
            "unit": "ns",
            "range": "± 2868.9906151397445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737559.3599759615,
            "unit": "ns",
            "range": "± 832.9485915973529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3036000,
            "unit": "ns",
            "range": "± 28963.745811420376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3263886.6666666665,
            "unit": "ns",
            "range": "± 53217.610762210046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4052228.5714285714,
            "unit": "ns",
            "range": "± 22187.84069541862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3619631.25,
            "unit": "ns",
            "range": "± 110710.46643850915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6006800,
            "unit": "ns",
            "range": "± 183379.39870925454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265321.27659574465,
            "unit": "ns",
            "range": "± 10268.67198920248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245764,
            "unit": "ns",
            "range": "± 9139.815565503965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233893.58974358975,
            "unit": "ns",
            "range": "± 11805.868447663213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3906121.4285714286,
            "unit": "ns",
            "range": "± 39005.33353217281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3560006.6666666665,
            "unit": "ns",
            "range": "± 31745.021356936915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19912.90322580645,
            "unit": "ns",
            "range": "± 1634.361050955628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89745.74468085106,
            "unit": "ns",
            "range": "± 6050.716031450406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71642.39130434782,
            "unit": "ns",
            "range": "± 4834.519503964098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91733.33333333333,
            "unit": "ns",
            "range": "± 13675.025650089738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4883.505154639175,
            "unit": "ns",
            "range": "± 896.135268385296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19889.247311827956,
            "unit": "ns",
            "range": "± 1690.2188156252969"
          }
        ]
      }
    ]
  }
}