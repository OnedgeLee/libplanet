window.BENCHMARK_DATA = {
  "lastUpdate": 1689148082991,
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
          "id": "12473199c3b5e28d785ce1d541b557c92694602e",
          "message": "Prepare 2.5.1",
          "timestamp": "2023-07-12T16:29:45+09:00",
          "tree_id": "75db858d936a360210595e394dd591c0661c7cff",
          "url": "https://github.com/OnedgeLee/libplanet/commit/12473199c3b5e28d785ce1d541b557c92694602e"
        },
        "date": 1689148055368,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7975770.52,
            "unit": "ns",
            "range": "± 210924.7195117095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21742036.976190478,
            "unit": "ns",
            "range": "± 1167021.6792089227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51875446.78571428,
            "unit": "ns",
            "range": "± 759690.1547589019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101284055.14,
            "unit": "ns",
            "range": "± 2554667.6018143874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213314550.7857143,
            "unit": "ns",
            "range": "± 3691629.1322641773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67046.5376344086,
            "unit": "ns",
            "range": "± 10434.185435759104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318313.8210526316,
            "unit": "ns",
            "range": "± 24974.484523881463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314073.8563218391,
            "unit": "ns",
            "range": "± 21815.56646812195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302205.8157894737,
            "unit": "ns",
            "range": "± 22264.231118623244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161563.5384615385,
            "unit": "ns",
            "range": "± 54701.72114540118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3706604.6,
            "unit": "ns",
            "range": "± 97745.35334181706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16854.729166666668,
            "unit": "ns",
            "range": "± 2852.8125308900876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91331.59375,
            "unit": "ns",
            "range": "± 13971.990311128773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102353.78787878787,
            "unit": "ns",
            "range": "± 19954.827409023943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123912.47311827957,
            "unit": "ns",
            "range": "± 19104.290593426227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7179.549450549451,
            "unit": "ns",
            "range": "± 1119.07244590962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20396.96153846154,
            "unit": "ns",
            "range": "± 3255.3465263835747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1562610.8,
            "unit": "ns",
            "range": "± 162464.0039888116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2875955.434782609,
            "unit": "ns",
            "range": "± 162197.9911961016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2031658.5,
            "unit": "ns",
            "range": "± 206743.35908346102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6218797.064516129,
            "unit": "ns",
            "range": "± 438711.9958983394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373382.4029850746,
            "unit": "ns",
            "range": "± 154004.9690482332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3428013.7,
            "unit": "ns",
            "range": "± 190311.93314888066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4555622.715686275,
            "unit": "ns",
            "range": "± 182983.53702039027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3951480.727272727,
            "unit": "ns",
            "range": "± 268834.3599509199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8814806.870967742,
            "unit": "ns",
            "range": "± 1790872.056732826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6804271.271233974,
            "unit": "ns",
            "range": "± 350882.8341170751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2110189.912109375,
            "unit": "ns",
            "range": "± 27709.505433129227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365641.0397135417,
            "unit": "ns",
            "range": "± 14334.179458660068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2863537.691536458,
            "unit": "ns",
            "range": "± 72000.47996629705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821722.9654541016,
            "unit": "ns",
            "range": "± 20657.706181383543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840358.1108940972,
            "unit": "ns",
            "range": "± 23237.14219931948"
          }
        ]
      }
    ]
  }
}