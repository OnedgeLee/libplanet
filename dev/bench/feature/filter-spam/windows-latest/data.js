window.BENCHMARK_DATA = {
  "lastUpdate": 1688490192424,
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
      }
    ]
  }
}