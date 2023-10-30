window.BENCHMARK_DATA = {
  "lastUpdate": 1698645960331,
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
          "id": "a3909c3940c3e1b6b96ec3f62fe4241d07b6fb63",
          "message": "Prepare 4.0.0",
          "timestamp": "2023-10-27T22:39:57+09:00",
          "tree_id": "3448a2d8fe8d9b10d878a6891c06cb8d50ab01fb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a3909c3940c3e1b6b96ec3f62fe4241d07b6fb63"
        },
        "date": 1698415132073,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354552.0833333333,
            "unit": "ns",
            "range": "± 146686.28750835048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2479198.795180723,
            "unit": "ns",
            "range": "± 131586.2283308386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2100292.5531914895,
            "unit": "ns",
            "range": "± 193257.08502326813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9801731.868131869,
            "unit": "ns",
            "range": "± 1048368.7949359042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53719.791666666664,
            "unit": "ns",
            "range": "± 9200.16727298353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7431785.185185186,
            "unit": "ns",
            "range": "± 375487.4295869008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20709925.25252525,
            "unit": "ns",
            "range": "± 2182095.2330245483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47232216.666666664,
            "unit": "ns",
            "range": "± 1007677.8326487909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117440105.33333333,
            "unit": "ns",
            "range": "± 5923560.177567919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207260332.32323232,
            "unit": "ns",
            "range": "± 16730708.482606614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4860567.39430147,
            "unit": "ns",
            "range": "± 155156.49431874152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564121.0559895833,
            "unit": "ns",
            "range": "± 78676.47617852633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1115163.8997395833,
            "unit": "ns",
            "range": "± 17363.12342226163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692900.413602941,
            "unit": "ns",
            "range": "± 52869.59965454736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857018.9871651785,
            "unit": "ns",
            "range": "± 9941.272192516775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826035.9802246094,
            "unit": "ns",
            "range": "± 16097.226163458494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3090907.1428571427,
            "unit": "ns",
            "range": "± 201342.6357202142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347809.1836734693,
            "unit": "ns",
            "range": "± 251487.4881955649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4386616.666666667,
            "unit": "ns",
            "range": "± 318319.23389369145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4094445,
            "unit": "ns",
            "range": "± 330128.7022901183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11188340.909090908,
            "unit": "ns",
            "range": "± 812907.0369488772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270690.32258064515,
            "unit": "ns",
            "range": "± 29148.86851602264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256038.70967741936,
            "unit": "ns",
            "range": "± 22398.89861547964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247872.3404255319,
            "unit": "ns",
            "range": "± 26171.54493636137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3931111.7647058824,
            "unit": "ns",
            "range": "± 157909.9447749366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3639835.5555555555,
            "unit": "ns",
            "range": "± 202115.99256846323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21683,
            "unit": "ns",
            "range": "± 6737.098482254505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89775.51020408163,
            "unit": "ns",
            "range": "± 10092.51086252594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92180.64516129032,
            "unit": "ns",
            "range": "± 9584.31982645427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99065.30612244898,
            "unit": "ns",
            "range": "± 21109.865295447074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5183.544303797468,
            "unit": "ns",
            "range": "± 1021.1143208991551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21140.20618556701,
            "unit": "ns",
            "range": "± 6611.7581466942665"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "b99343a7dadaeb286c126889b58fd81343c0e4f9",
          "message": "Prepare 4.0.0",
          "timestamp": "2023-10-30T14:43:30+09:00",
          "tree_id": "36a091534bd95b64bbd71255b59a5ba272bccca5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b99343a7dadaeb286c126889b58fd81343c0e4f9"
        },
        "date": 1698645913068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1614842.268041237,
            "unit": "ns",
            "range": "± 203720.97433082928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2916915.3061224488,
            "unit": "ns",
            "range": "± 327982.1758898671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2308150,
            "unit": "ns",
            "range": "± 247717.37481150805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10884051.72413793,
            "unit": "ns",
            "range": "± 1146350.4484517802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67608.16326530612,
            "unit": "ns",
            "range": "± 16650.70304988783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8326443.617021277,
            "unit": "ns",
            "range": "± 547764.6199142358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21269502.020202022,
            "unit": "ns",
            "range": "± 2224313.022723444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61546063.684210524,
            "unit": "ns",
            "range": "± 3729033.1139903124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122195201.04166667,
            "unit": "ns",
            "range": "± 6936022.655710204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245903281.1111111,
            "unit": "ns",
            "range": "± 13703709.655603793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5203587.015086207,
            "unit": "ns",
            "range": "± 150976.91706802842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1805751.1610243055,
            "unit": "ns",
            "range": "± 38535.18576112294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256808.8812934028,
            "unit": "ns",
            "range": "± 40996.39283774717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2979215.4947916665,
            "unit": "ns",
            "range": "± 88047.22605278729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976227.4076021635,
            "unit": "ns",
            "range": "± 25961.73611551742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946723.1982421875,
            "unit": "ns",
            "range": "± 33491.51051468354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3409591.7525773197,
            "unit": "ns",
            "range": "± 347031.4505050008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3675288.6597938146,
            "unit": "ns",
            "range": "± 413485.3259378058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4783452.040816327,
            "unit": "ns",
            "range": "± 419343.09378487495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4435585.263157895,
            "unit": "ns",
            "range": "± 450618.9011080585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12526014.285714285,
            "unit": "ns",
            "range": "± 879791.2972866982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313174.7126436782,
            "unit": "ns",
            "range": "± 33756.13714533412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289456.7010309278,
            "unit": "ns",
            "range": "± 35236.74073090145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252733.33333333334,
            "unit": "ns",
            "range": "± 36848.46255927724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4596347.872340426,
            "unit": "ns",
            "range": "± 334438.1164058634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4083705.789473684,
            "unit": "ns",
            "range": "± 298328.91483879223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32263.26530612245,
            "unit": "ns",
            "range": "± 10637.255941741936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99615.625,
            "unit": "ns",
            "range": "± 17527.562223538105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110620.40816326531,
            "unit": "ns",
            "range": "± 23473.19137300565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129337.11340206186,
            "unit": "ns",
            "range": "± 23215.99807418919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7110.3448275862065,
            "unit": "ns",
            "range": "± 1358.0966916598218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29912.244897959183,
            "unit": "ns",
            "range": "± 11199.093439986607"
          }
        ]
      }
    ]
  }
}