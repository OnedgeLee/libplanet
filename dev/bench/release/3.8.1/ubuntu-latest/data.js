window.BENCHMARK_DATA = {
  "lastUpdate": 1701044481002,
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
          "id": "5a15302db7964c549a542c33e2f0b5c45f59b075",
          "message": "Release 3.8.1",
          "timestamp": "2023-11-27T09:09:50+09:00",
          "tree_id": "568343f901d89f890975930aeb723caec806a6c4",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5a15302db7964c549a542c33e2f0b5c45f59b075"
        },
        "date": 1701044469628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206834.16666666666,
            "unit": "ns",
            "range": "± 6379.406441265296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193163.5172413793,
            "unit": "ns",
            "range": "± 8424.576635187886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163543.76923076922,
            "unit": "ns",
            "range": "± 4331.731684282325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3096949.4615384615,
            "unit": "ns",
            "range": "± 38778.95776838986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834693.6,
            "unit": "ns",
            "range": "± 39101.42282358241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14700.65625,
            "unit": "ns",
            "range": "± 2612.0434804478273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66673,
            "unit": "ns",
            "range": "± 7326.392348971206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93339.25,
            "unit": "ns",
            "range": "± 13468.21513748105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81910.8163265306,
            "unit": "ns",
            "range": "± 23786.835447038204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6418.135416666667,
            "unit": "ns",
            "range": "± 543.7673480797826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15791.896907216495,
            "unit": "ns",
            "range": "± 3416.6098404355694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3673340.303485577,
            "unit": "ns",
            "range": "± 14470.69471440119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1230052.424954928,
            "unit": "ns",
            "range": "± 2222.706351060687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779509.5140206473,
            "unit": "ns",
            "range": "± 4060.161412902263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922820.1401041667,
            "unit": "ns",
            "range": "± 5450.119196658551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617070.9558105469,
            "unit": "ns",
            "range": "± 1022.8830816968922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594316.1707356771,
            "unit": "ns",
            "range": "± 2850.6147022312557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40014.13829787234,
            "unit": "ns",
            "range": "± 4856.650716797443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2422845.0476190476,
            "unit": "ns",
            "range": "± 52995.42273109649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528041.95,
            "unit": "ns",
            "range": "± 112441.05194164281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3112784.714285714,
            "unit": "ns",
            "range": "± 38575.69940375691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3204060.255319149,
            "unit": "ns",
            "range": "± 124305.16894294218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6754645.268292683,
            "unit": "ns",
            "range": "± 242682.3089883175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5623479.928571428,
            "unit": "ns",
            "range": "± 14557.671091554794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14428491.7,
            "unit": "ns",
            "range": "± 113963.97249832949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37158855.5,
            "unit": "ns",
            "range": "± 298800.6942662617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74858516.14285715,
            "unit": "ns",
            "range": "± 433019.91419219563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151410755.7142857,
            "unit": "ns",
            "range": "± 756778.2347328025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987724.8241758242,
            "unit": "ns",
            "range": "± 82313.62625802925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1963807.2631578948,
            "unit": "ns",
            "range": "± 60252.05723960429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1437071.168539326,
            "unit": "ns",
            "range": "± 83983.49328740357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5778664.391304348,
            "unit": "ns",
            "range": "± 325255.9308109405"
          }
        ]
      }
    ]
  }
}