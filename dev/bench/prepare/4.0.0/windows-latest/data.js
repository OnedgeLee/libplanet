window.BENCHMARK_DATA = {
  "lastUpdate": 1698415174031,
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
      }
    ]
  }
}