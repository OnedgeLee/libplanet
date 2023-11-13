window.BENCHMARK_DATA = {
  "lastUpdate": 1699846322967,
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
        "date": 1699846310648,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8194070.933333334,
            "unit": "ns",
            "range": "± 93452.43259423989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22611508.733333334,
            "unit": "ns",
            "range": "± 241090.62926076652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57736539.666666664,
            "unit": "ns",
            "range": "± 485435.73330251704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116681922.06666666,
            "unit": "ns",
            "range": "± 784729.7614874878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230952960.26666668,
            "unit": "ns",
            "range": "± 1754035.3173266524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495765.9186046512,
            "unit": "ns",
            "range": "± 78639.90372267088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2880944.763157895,
            "unit": "ns",
            "range": "± 98579.32611791028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2367460.012820513,
            "unit": "ns",
            "range": "± 116485.95207945451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9505139.930232558,
            "unit": "ns",
            "range": "± 351727.05355684645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3666919.5517241377,
            "unit": "ns",
            "range": "± 106981.5206304295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3835586.92,
            "unit": "ns",
            "range": "± 94033.56746392926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4618854,
            "unit": "ns",
            "range": "± 98030.66051466335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4533025.75,
            "unit": "ns",
            "range": "± 186903.57703591077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11143897.53488372,
            "unit": "ns",
            "range": "± 274032.44539803336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51680.94565217391,
            "unit": "ns",
            "range": "± 3676.639738435713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5263135.43984375,
            "unit": "ns",
            "range": "± 12194.701080993114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636493.6567708333,
            "unit": "ns",
            "range": "± 5922.255694318965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157664.87890625,
            "unit": "ns",
            "range": "± 475.1036308967476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637942.1341145835,
            "unit": "ns",
            "range": "± 4024.3776072224773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841834.9471153846,
            "unit": "ns",
            "range": "± 444.77233494658975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767686.6942545573,
            "unit": "ns",
            "range": "± 374.9633312229801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292970.6842105263,
            "unit": "ns",
            "range": "± 10082.021118978462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272628.71794871794,
            "unit": "ns",
            "range": "± 8993.518148172687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251779.08474576272,
            "unit": "ns",
            "range": "± 11166.089151577205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4455981.4,
            "unit": "ns",
            "range": "± 76475.06573835497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4175036.3333333335,
            "unit": "ns",
            "range": "± 58960.71049032406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22274.936170212764,
            "unit": "ns",
            "range": "± 1959.8935499319202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94617.56666666667,
            "unit": "ns",
            "range": "± 7303.219167146142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81403.63917525773,
            "unit": "ns",
            "range": "± 6203.955197065765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96909.51546391753,
            "unit": "ns",
            "range": "± 12626.218707773487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5992.6736842105265,
            "unit": "ns",
            "range": "± 911.7559915514125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22615.581632653062,
            "unit": "ns",
            "range": "± 2918.469860786463"
          }
        ]
      }
    ]
  }
}