window.BENCHMARK_DATA = {
  "lastUpdate": 1699877174465,
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
          "id": "6fb4b41a576b865cc4572c8490d958c29091fca3",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:33:59+09:00",
          "tree_id": "b19686e24caebfd352ee8ff725a9e808ad850ef9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fb4b41a576b865cc4572c8490d958c29091fca3"
        },
        "date": 1699847849146,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9472313.147368422,
            "unit": "ns",
            "range": "± 630012.7020079693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23712229.08988764,
            "unit": "ns",
            "range": "± 1242801.3182253614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61418250.82539683,
            "unit": "ns",
            "range": "± 2817447.9694087463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119167616.21428572,
            "unit": "ns",
            "range": "± 2018040.916400175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241548492.20588234,
            "unit": "ns",
            "range": "± 4743262.711118671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46723.221052631576,
            "unit": "ns",
            "range": "± 11482.986198070781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295780.97252747254,
            "unit": "ns",
            "range": "± 25619.409222237326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301430.6411764706,
            "unit": "ns",
            "range": "± 22414.28464711146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296330.2117647059,
            "unit": "ns",
            "range": "± 20326.491696033223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4457415.725806451,
            "unit": "ns",
            "range": "± 529533.5364863513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4834507.764705882,
            "unit": "ns",
            "range": "± 97017.7799977467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17972.202127659573,
            "unit": "ns",
            "range": "± 4935.271834153076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93843.41208791209,
            "unit": "ns",
            "range": "± 20708.62246754469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96449.79347826086,
            "unit": "ns",
            "range": "± 13906.722831922447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97652.84946236559,
            "unit": "ns",
            "range": "± 26828.069101120254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6050.448979591837,
            "unit": "ns",
            "range": "± 2362.1467275168443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25649.166666666668,
            "unit": "ns",
            "range": "± 4061.1908421274397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312469.0531914893,
            "unit": "ns",
            "range": "± 144888.74536368123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2532542.211340206,
            "unit": "ns",
            "range": "± 224321.58601547722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1975883.1063829786,
            "unit": "ns",
            "range": "± 181566.66015165983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10242111.989690721,
            "unit": "ns",
            "range": "± 2195856.496555205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3608937.5604395606,
            "unit": "ns",
            "range": "± 267144.8521720092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3892780.9677419355,
            "unit": "ns",
            "range": "± 259385.00017405098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4308913.688679245,
            "unit": "ns",
            "range": "± 164079.52101039965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4379169.780487805,
            "unit": "ns",
            "range": "± 220475.65498869022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14457624.885057472,
            "unit": "ns",
            "range": "± 1463428.020467374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5933162.876208118,
            "unit": "ns",
            "range": "± 673169.2828316631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1711643.7772833442,
            "unit": "ns",
            "range": "± 158487.03026223584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208427.7257412998,
            "unit": "ns",
            "range": "± 115039.15315091706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2118997.8646634617,
            "unit": "ns",
            "range": "± 97480.28336430818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 698344.1903507734,
            "unit": "ns",
            "range": "± 80107.28037031196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592194.8003345246,
            "unit": "ns",
            "range": "± 23096.683485695015"
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
          "id": "dd3a0138cf5d44fde8849a3fcf179a9932b7f211",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T12:56:34+09:00",
          "tree_id": "24d7897cae211acb13f8debdd202323fad687f34",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd3a0138cf5d44fde8849a3fcf179a9932b7f211"
        },
        "date": 1699849196940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7791140.529411765,
            "unit": "ns",
            "range": "± 314864.97507848364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18449293,
            "unit": "ns",
            "range": "± 302677.2257632118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46884728.31818182,
            "unit": "ns",
            "range": "± 1125495.9923989654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93829297.28461538,
            "unit": "ns",
            "range": "± 3955188.8636767184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193057476.91666666,
            "unit": "ns",
            "range": "± 6381363.532276035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45028.20652173913,
            "unit": "ns",
            "range": "± 10619.800745774706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219091.29787234042,
            "unit": "ns",
            "range": "± 15416.399379197472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217190.91666666666,
            "unit": "ns",
            "range": "± 16789.562919402084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203710.40625,
            "unit": "ns",
            "range": "± 22470.01820043679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3678440.714285714,
            "unit": "ns",
            "range": "± 42188.485274518236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3356363.0476190476,
            "unit": "ns",
            "range": "± 75747.6404526743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13014.453608247422,
            "unit": "ns",
            "range": "± 1333.4637620108842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59515.663043478264,
            "unit": "ns",
            "range": "± 5210.245174204618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52975.72619047619,
            "unit": "ns",
            "range": "± 3152.003705242114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60228.06989247312,
            "unit": "ns",
            "range": "± 9364.398435143989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3413.244680851064,
            "unit": "ns",
            "range": "± 494.963383812872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12611.287234042553,
            "unit": "ns",
            "range": "± 1564.0998828371514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339447.34375,
            "unit": "ns",
            "range": "± 122591.1473183871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2783506,
            "unit": "ns",
            "range": "± 285420.2086873292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265918.35106383,
            "unit": "ns",
            "range": "± 185167.6415753421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12393260.436170213,
            "unit": "ns",
            "range": "± 3019376.1425754135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2939234.519230769,
            "unit": "ns",
            "range": "± 120883.8804248451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3142428.846153846,
            "unit": "ns",
            "range": "± 35828.918801358755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3580602.277777778,
            "unit": "ns",
            "range": "± 116967.94263255237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3487541.4545454546,
            "unit": "ns",
            "range": "± 141070.91665421307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11174810.153846154,
            "unit": "ns",
            "range": "± 1097212.7750262571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4291589.725446428,
            "unit": "ns",
            "range": "± 66245.03328031766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1364498.5336371528,
            "unit": "ns",
            "range": "± 44573.97594744574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095326.679103576,
            "unit": "ns",
            "range": "± 157210.46504863395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2288577.95575574,
            "unit": "ns",
            "range": "± 182973.09937154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 732575.1716077302,
            "unit": "ns",
            "range": "± 57546.44883047202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776643.1635594224,
            "unit": "ns",
            "range": "± 36184.61231875962"
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
          "id": "cddf259f19b015b7c8bf7f9c0e0d7a31e461a3d7",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T20:49:16+09:00",
          "tree_id": "44bd32e411287530b667e6e8e0c88c3488b934a8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/cddf259f19b015b7c8bf7f9c0e0d7a31e461a3d7"
        },
        "date": 1699877139953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9066606.132183908,
            "unit": "ns",
            "range": "± 1478277.1207593053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20622191.126373626,
            "unit": "ns",
            "range": "± 1802785.805833175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50045327.85714286,
            "unit": "ns",
            "range": "± 1830104.5457573286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100445759.57317074,
            "unit": "ns",
            "range": "± 5322236.974940753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195855195.1153846,
            "unit": "ns",
            "range": "± 1748869.0592659938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56817.574468085106,
            "unit": "ns",
            "range": "± 18189.22684725347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234978.47727272726,
            "unit": "ns",
            "range": "± 19246.692964466467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230103.53225806452,
            "unit": "ns",
            "range": "± 24132.825155994844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214116.82183908045,
            "unit": "ns",
            "range": "± 13599.441752816123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3843451.9444444445,
            "unit": "ns",
            "range": "± 76334.63622488135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500967,
            "unit": "ns",
            "range": "± 40157.31474294112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14711.875,
            "unit": "ns",
            "range": "± 3150.982160165971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65420.55670103093,
            "unit": "ns",
            "range": "± 10633.01787864993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68879.86842105263,
            "unit": "ns",
            "range": "± 16766.222724511572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63283.0376344086,
            "unit": "ns",
            "range": "± 8817.592054670595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4395.0204081632655,
            "unit": "ns",
            "range": "± 1216.3746623334614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12861.4,
            "unit": "ns",
            "range": "± 1726.3019902966362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1372861.0384615385,
            "unit": "ns",
            "range": "± 258794.24659487087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3589131.5659340657,
            "unit": "ns",
            "range": "± 979206.6503445623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074604.4222222222,
            "unit": "ns",
            "range": "± 259866.1669212053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10811063.531578947,
            "unit": "ns",
            "range": "± 2852273.627783925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3182808.8333333335,
            "unit": "ns",
            "range": "± 38054.91921452787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3048862,
            "unit": "ns",
            "range": "± 108805.02871894576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3712537.697674419,
            "unit": "ns",
            "range": "± 136944.5073172298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3736117.043956044,
            "unit": "ns",
            "range": "± 215377.6289377908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11548012.738636363,
            "unit": "ns",
            "range": "± 1020208.5494059873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4387303.131138393,
            "unit": "ns",
            "range": "± 65943.08237376892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397685.1569475445,
            "unit": "ns",
            "range": "± 11412.485034937807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 953430.1467048891,
            "unit": "ns",
            "range": "± 86558.59505998676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2130915.2588107637,
            "unit": "ns",
            "range": "± 118236.33950603266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640548.529672476,
            "unit": "ns",
            "range": "± 9899.77964072842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579321.9477213542,
            "unit": "ns",
            "range": "± 9388.390942478592"
          }
        ]
      }
    ]
  }
}