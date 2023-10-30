window.BENCHMARK_DATA = {
  "lastUpdate": 1698646508278,
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
          "id": "8bb8d9f5d0ee7a07379bf438468f71b5c0cbb152",
          "message": "Prepare 3.7.1",
          "timestamp": "2023-10-27T22:36:50+09:00",
          "tree_id": "906c251257e5839a835901c66606efc8b56c15ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8bb8d9f5d0ee7a07379bf438468f71b5c0cbb152"
        },
        "date": 1698414819676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1289814.7368421052,
            "unit": "ns",
            "range": "± 87200.8820085457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2494690.12345679,
            "unit": "ns",
            "range": "± 129413.85513628193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1943353.125,
            "unit": "ns",
            "range": "± 127463.46510863416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8884494.505494505,
            "unit": "ns",
            "range": "± 516559.14501904655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52980.208333333336,
            "unit": "ns",
            "range": "± 3787.9204068686463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7652376.19047619,
            "unit": "ns",
            "range": "± 177441.7789156824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21143856.25,
            "unit": "ns",
            "range": "± 400753.5268611702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52777840,
            "unit": "ns",
            "range": "± 903331.7416257282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104468205.55555555,
            "unit": "ns",
            "range": "± 2189024.8122830517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207065730.76923078,
            "unit": "ns",
            "range": "± 1994400.568418414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4567085.246394231,
            "unit": "ns",
            "range": "± 12894.138305708324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490250.4817708333,
            "unit": "ns",
            "range": "± 5734.145936526083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1085305.4947916667,
            "unit": "ns",
            "range": "± 3136.023747295388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2693796.7447916665,
            "unit": "ns",
            "range": "± 5962.6613007516535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832214.6419270834,
            "unit": "ns",
            "range": "± 3182.4737078442836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766847.2591145834,
            "unit": "ns",
            "range": "± 1871.5667166762983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3150125.4237288134,
            "unit": "ns",
            "range": "± 139505.59449073687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3356878.048780488,
            "unit": "ns",
            "range": "± 111931.35287352494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4072796.4285714286,
            "unit": "ns",
            "range": "± 116724.86320607188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3975641.26984127,
            "unit": "ns",
            "range": "± 182602.5576923304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10220147.368421054,
            "unit": "ns",
            "range": "± 443574.8318673699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256621.42857142858,
            "unit": "ns",
            "range": "± 9289.320795205478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251034.54545454544,
            "unit": "ns",
            "range": "± 9227.459386743825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226416.1616161616,
            "unit": "ns",
            "range": "± 15967.535348840502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4089014.285714286,
            "unit": "ns",
            "range": "± 42025.81362673435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3847385.714285714,
            "unit": "ns",
            "range": "± 50664.79368043768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21302.04081632653,
            "unit": "ns",
            "range": "± 2036.0148862111873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86593.15789473684,
            "unit": "ns",
            "range": "± 5182.7999627158515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71501.04166666667,
            "unit": "ns",
            "range": "± 4461.495967938313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86085.22727272728,
            "unit": "ns",
            "range": "± 7787.103098097333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5667.708333333333,
            "unit": "ns",
            "range": "± 853.3518792529617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21159.574468085106,
            "unit": "ns",
            "range": "± 1736.0391916774336"
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
          "id": "2eb7e615207b1247d57e79d0ade71206b88f242a",
          "message": "Prepare 3.7.1",
          "timestamp": "2023-10-30T14:59:41+09:00",
          "tree_id": "128822e516289030ef4a4d75fb9f83ebcd06916b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2eb7e615207b1247d57e79d0ade71206b88f242a"
        },
        "date": 1698646472321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1239177.3195876288,
            "unit": "ns",
            "range": "± 81836.31084003737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2316378.2608695654,
            "unit": "ns",
            "range": "± 88934.10210323267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1853740.8163265307,
            "unit": "ns",
            "range": "± 120739.115397437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7298536.206896552,
            "unit": "ns",
            "range": "± 211542.95363241737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43155.1724137931,
            "unit": "ns",
            "range": "± 2355.190142952945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7070415.384615385,
            "unit": "ns",
            "range": "± 36009.601639790606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18219550,
            "unit": "ns",
            "range": "± 62528.5750062137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46144830,
            "unit": "ns",
            "range": "± 323238.2319148349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92926073.33333333,
            "unit": "ns",
            "range": "± 326504.9408216549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186287857.14285713,
            "unit": "ns",
            "range": "± 525074.9011980405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4460569.642857143,
            "unit": "ns",
            "range": "± 5304.948684882439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1453170.1869419643,
            "unit": "ns",
            "range": "± 1176.0116283153818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086396.9661458333,
            "unit": "ns",
            "range": "± 953.7338245369832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2530402.1484375,
            "unit": "ns",
            "range": "± 4527.703319683636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811658.5042317709,
            "unit": "ns",
            "range": "± 533.5211600339321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729936.0491071428,
            "unit": "ns",
            "range": "± 523.6875216550251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3056021.153846154,
            "unit": "ns",
            "range": "± 125853.35122406874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3150183.7837837837,
            "unit": "ns",
            "range": "± 88778.00814238699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959653.3333333335,
            "unit": "ns",
            "range": "± 67563.02736457765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3611323.8095238097,
            "unit": "ns",
            "range": "± 159589.03846491678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9177612.5,
            "unit": "ns",
            "range": "± 262517.9321713823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251131.57894736843,
            "unit": "ns",
            "range": "± 8607.102826222446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233321.9512195122,
            "unit": "ns",
            "range": "± 8320.502154170803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210622.64150943398,
            "unit": "ns",
            "range": "± 8762.521623136581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3793885.714285714,
            "unit": "ns",
            "range": "± 43536.64870221157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3573726.6666666665,
            "unit": "ns",
            "range": "± 23897.68269299846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18921.428571428572,
            "unit": "ns",
            "range": "± 2016.7341160513354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80778.02197802198,
            "unit": "ns",
            "range": "± 4626.945289348331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64573.529411764706,
            "unit": "ns",
            "range": "± 1917.4333892313016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77171.875,
            "unit": "ns",
            "range": "± 8719.750154858675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4114.893617021276,
            "unit": "ns",
            "range": "± 474.501990616061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18037.113402061856,
            "unit": "ns",
            "range": "± 1791.026218146833"
          }
        ]
      }
    ]
  }
}