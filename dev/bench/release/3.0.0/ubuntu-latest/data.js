window.BENCHMARK_DATA = {
  "lastUpdate": 1689753684550,
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
          "id": "6ac00fec812c500b6a9734071c3d3fac2436c0b1",
          "message": "Release 3.0.0\n\nSince commit d4b7fb4ddff53907b8e97d43c7928e32147fd3bf doesn't update\nproject version, this commit has been added.",
          "timestamp": "2023-07-19T16:42:26+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6ac00fec812c500b6a9734071c3d3fac2436c0b1"
        },
        "date": 1689753663726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314517.58585858584,
            "unit": "ns",
            "range": "± 22053.207127591468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304124.91752577317,
            "unit": "ns",
            "range": "± 20164.32254609926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266740.26,
            "unit": "ns",
            "range": "± 21785.209942406982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4778089.7,
            "unit": "ns",
            "range": "± 265340.023693003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4475891.419354838,
            "unit": "ns",
            "range": "± 253459.66908680755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20929.821052631578,
            "unit": "ns",
            "range": "± 1501.4827776125057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100889.55102040817,
            "unit": "ns",
            "range": "± 7167.151179035033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89350.24210526315,
            "unit": "ns",
            "range": "± 6710.4533818288055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106481.27835051547,
            "unit": "ns",
            "range": "± 14203.464721637369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5857.385416666667,
            "unit": "ns",
            "range": "± 691.4308028671478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20889.144444444446,
            "unit": "ns",
            "range": "± 1472.5656625722215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518857.824742268,
            "unit": "ns",
            "range": "± 126640.82380257975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920580.95,
            "unit": "ns",
            "range": "± 253905.27236056447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1956917.1836734693,
            "unit": "ns",
            "range": "± 151307.95155816764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5700003.61,
            "unit": "ns",
            "range": "± 543885.7096217787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7172391.4171875,
            "unit": "ns",
            "range": "± 64722.1875320365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2346077.0942708333,
            "unit": "ns",
            "range": "± 12976.471793251749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1672182.0390625,
            "unit": "ns",
            "range": "± 3452.628173553527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3215353.4171875,
            "unit": "ns",
            "range": "± 10382.824283647213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988255.1438802084,
            "unit": "ns",
            "range": "± 5311.9839531055595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918917.467578125,
            "unit": "ns",
            "range": "± 10282.355620336319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4022278.2156862747,
            "unit": "ns",
            "range": "± 162730.48056099555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4208255.093333334,
            "unit": "ns",
            "range": "± 210949.5149807159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4989040.443181818,
            "unit": "ns",
            "range": "± 272805.5442461205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4358572.352112676,
            "unit": "ns",
            "range": "± 213507.66978228194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7474433.42,
            "unit": "ns",
            "range": "± 498806.38267352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8991452.388888888,
            "unit": "ns",
            "range": "± 372799.6617026877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23890410.2972973,
            "unit": "ns",
            "range": "± 1184855.9085784222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61131957.6,
            "unit": "ns",
            "range": "± 1964733.2125437043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123417480.33333333,
            "unit": "ns",
            "range": "± 4295081.195237239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248118690.05,
            "unit": "ns",
            "range": "± 5574838.682874193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51592.7294117647,
            "unit": "ns",
            "range": "± 3216.3099767258987"
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
          "id": "118891154eab9863287035e85aa4bc8e727db0c7",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:41:07+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/118891154eab9863287035e85aa4bc8e727db0c7"
        },
        "date": 1689753667320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397212.6836734694,
            "unit": "ns",
            "range": "± 40083.45503648347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 377467.4270833333,
            "unit": "ns",
            "range": "± 32305.19240544037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 357211.4210526316,
            "unit": "ns",
            "range": "± 37504.83496393356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5633266.363636363,
            "unit": "ns",
            "range": "± 207765.79768923976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5183314.837209302,
            "unit": "ns",
            "range": "± 188738.42088834287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26977.478260869564,
            "unit": "ns",
            "range": "± 5829.2603746964105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123746.88541666667,
            "unit": "ns",
            "range": "± 13252.658315951709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139056.06451612903,
            "unit": "ns",
            "range": "± 12472.89602263422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147396.08421052631,
            "unit": "ns",
            "range": "± 19956.67347917822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9476,
            "unit": "ns",
            "range": "± 1167.5540921685533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27268.65263157895,
            "unit": "ns",
            "range": "± 6797.199571613988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1870209.9484536082,
            "unit": "ns",
            "range": "± 138044.01254448792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3645133.4142857143,
            "unit": "ns",
            "range": "± 176683.38204269033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2375616.551020408,
            "unit": "ns",
            "range": "± 184865.72202899458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6855131.478723404,
            "unit": "ns",
            "range": "± 460129.9195514739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7546611.269791666,
            "unit": "ns",
            "range": "± 101797.05530836036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2389500.3447916666,
            "unit": "ns",
            "range": "± 32511.316857023572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1730550.0946614584,
            "unit": "ns",
            "range": "± 17188.87583316795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3314768.5872395835,
            "unit": "ns",
            "range": "± 47391.81525292366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063594.2002604166,
            "unit": "ns",
            "range": "± 15603.92402007911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999867.9122314453,
            "unit": "ns",
            "range": "± 18652.489059189535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4433349.560606061,
            "unit": "ns",
            "range": "± 197568.3423044467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4644529,
            "unit": "ns",
            "range": "± 211335.9954954025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5853443.5625,
            "unit": "ns",
            "range": "± 107178.02622053257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5146980.394736842,
            "unit": "ns",
            "range": "± 247376.11637025265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8595733.64516129,
            "unit": "ns",
            "range": "± 255081.11355626318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10478254.851851853,
            "unit": "ns",
            "range": "± 283525.91347267653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27159254.277777776,
            "unit": "ns",
            "range": "± 543566.8163143283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71077497.86666666,
            "unit": "ns",
            "range": "± 1318510.811107574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142575380.53333333,
            "unit": "ns",
            "range": "± 2456139.0546440063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285220891.5,
            "unit": "ns",
            "range": "± 5214340.76502584"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72737.44210526315,
            "unit": "ns",
            "range": "± 12930.979984349799"
          }
        ]
      }
    ]
  }
}