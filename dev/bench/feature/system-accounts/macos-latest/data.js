window.BENCHMARK_DATA = {
  "lastUpdate": 1699847155952,
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
          "id": "a1e17dedc60ab7f155d177f49a047199e0eaa8f7",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:16:10+09:00",
          "tree_id": "45e06c704a38ef8a513bb4bba98a7669af30e64d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a1e17dedc60ab7f155d177f49a047199e0eaa8f7"
        },
        "date": 1699846376281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7807868.766666667,
            "unit": "ns",
            "range": "± 139603.31616991802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19019161.875,
            "unit": "ns",
            "range": "± 362401.1248203432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50700901.28571428,
            "unit": "ns",
            "range": "± 493092.9698416889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93331878.92307693,
            "unit": "ns",
            "range": "± 2022748.7011151568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190109717.04761904,
            "unit": "ns",
            "range": "± 4281203.702581699"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40721.455555555556,
            "unit": "ns",
            "range": "± 7351.343642240995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220903.0744680851,
            "unit": "ns",
            "range": "± 18827.54581922562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215264.24725274724,
            "unit": "ns",
            "range": "± 21148.644463308025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202868.57303370786,
            "unit": "ns",
            "range": "± 19039.32296046529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3714209.433333333,
            "unit": "ns",
            "range": "± 66696.49620425206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3326154,
            "unit": "ns",
            "range": "± 69798.49485251434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12445.59090909091,
            "unit": "ns",
            "range": "± 1000.0159727042025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62109.413043478264,
            "unit": "ns",
            "range": "± 7480.609720040491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57492.085106382976,
            "unit": "ns",
            "range": "± 10116.224909658076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68290.05102040817,
            "unit": "ns",
            "range": "± 14334.906123678998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3649.0344827586205,
            "unit": "ns",
            "range": "± 661.7309656424854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12693.064516129032,
            "unit": "ns",
            "range": "± 1878.6866643346752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307095.597826087,
            "unit": "ns",
            "range": "± 224891.7206115105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565483.4418604653,
            "unit": "ns",
            "range": "± 284098.5682880712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032054.90625,
            "unit": "ns",
            "range": "± 253917.14203388136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10180398.078947369,
            "unit": "ns",
            "range": "± 2387949.3742794795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2896388.489361702,
            "unit": "ns",
            "range": "± 165060.05028634926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2996078.7702702703,
            "unit": "ns",
            "range": "± 101312.50485301205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3589713.724137931,
            "unit": "ns",
            "range": "± 155943.1209905504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3779217.681318681,
            "unit": "ns",
            "range": "± 399291.9609145357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11408767.456521738,
            "unit": "ns",
            "range": "± 1038938.3965425817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4302376.631696428,
            "unit": "ns",
            "range": "± 54023.290335574435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1341008.6615084135,
            "unit": "ns",
            "range": "± 18404.893231735336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 928091.2020357572,
            "unit": "ns",
            "range": "± 25226.438606447755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2309800.291888298,
            "unit": "ns",
            "range": "± 140415.5196785043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658678.7407226562,
            "unit": "ns",
            "range": "± 15778.849466217383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594605.2576844263,
            "unit": "ns",
            "range": "± 26383.67786035094"
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
          "id": "d9eac1d6b471ee70e78ed20376ddde6b5d915677",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:29:51+09:00",
          "tree_id": "c3534bd65f6ceb690ba603890cfc673abc68542c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9eac1d6b471ee70e78ed20376ddde6b5d915677"
        },
        "date": 1699847124118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7688985.214285715,
            "unit": "ns",
            "range": "± 45749.55130915505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18993359.184210528,
            "unit": "ns",
            "range": "± 415902.71407212695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47017222.041666664,
            "unit": "ns",
            "range": "± 1089831.8775612966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93153440.8,
            "unit": "ns",
            "range": "± 1891927.8928347582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193356537.34210527,
            "unit": "ns",
            "range": "± 4259472.954709046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47552.12222222222,
            "unit": "ns",
            "range": "± 12767.511085641265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219231.35393258426,
            "unit": "ns",
            "range": "± 16824.467232920146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215181.72727272726,
            "unit": "ns",
            "range": "± 14503.578794759567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200556.0612244898,
            "unit": "ns",
            "range": "± 19286.055874976297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3741266.7333333334,
            "unit": "ns",
            "range": "± 68677.41706336399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3429263.1666666665,
            "unit": "ns",
            "range": "± 59662.6813231409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13472.829545454546,
            "unit": "ns",
            "range": "± 2358.826314039821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61669.88172043011,
            "unit": "ns",
            "range": "± 8427.661145776554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53619.142857142855,
            "unit": "ns",
            "range": "± 4110.496725305051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63884.145833333336,
            "unit": "ns",
            "range": "± 11263.871504181825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4260.551546391753,
            "unit": "ns",
            "range": "± 1181.8250396732274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13301.89175257732,
            "unit": "ns",
            "range": "± 2127.7767081936186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630840.5,
            "unit": "ns",
            "range": "± 575590.5958799324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3292050.112244898,
            "unit": "ns",
            "range": "± 776632.4076346973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2518583.5604395606,
            "unit": "ns",
            "range": "± 732070.7331236543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13252834.226315789,
            "unit": "ns",
            "range": "± 4056144.660646731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2959954.111111111,
            "unit": "ns",
            "range": "± 60756.64636713457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2985077.923076923,
            "unit": "ns",
            "range": "± 138304.3312835533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3619775.714285714,
            "unit": "ns",
            "range": "± 153872.32042641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3568300.602040816,
            "unit": "ns",
            "range": "± 142355.33234776818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11390335.655555556,
            "unit": "ns",
            "range": "± 892721.1063379672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4392383.6328125,
            "unit": "ns",
            "range": "± 72694.64178550754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361570.767578125,
            "unit": "ns",
            "range": "± 9901.724716919241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 899534.8525390625,
            "unit": "ns",
            "range": "± 5255.817838323311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2094256.27609375,
            "unit": "ns",
            "range": "± 50766.187550484385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640675.7233723958,
            "unit": "ns",
            "range": "± 9890.63867468637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579247.318581321,
            "unit": "ns",
            "range": "± 13159.682570157325"
          }
        ]
      }
    ]
  }
}