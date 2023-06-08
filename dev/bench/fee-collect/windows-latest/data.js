window.BENCHMARK_DATA = {
  "lastUpdate": 1686243849807,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "477fdd33183a31455006a21bc0237566ee9b861a",
          "message": "docs: change.md",
          "timestamp": "2023-06-09T01:41:56+09:00",
          "tree_id": "6e0b5089ff7d5c730bfbee0ef601896697ada1dd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/477fdd33183a31455006a21bc0237566ee9b861a"
        },
        "date": 1686243809320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1596768.0412371133,
            "unit": "ns",
            "range": "± 357811.7508860838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3089558.947368421,
            "unit": "ns",
            "range": "± 299919.50746213057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2335874,
            "unit": "ns",
            "range": "± 291616.749882652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6225613.541666667,
            "unit": "ns",
            "range": "± 525563.6111772202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62270.52631578947,
            "unit": "ns",
            "range": "± 12628.015744167347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8717236.363636363,
            "unit": "ns",
            "range": "± 789766.1315489188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23706737.755102042,
            "unit": "ns",
            "range": "± 1800811.5943809235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50533365,
            "unit": "ns",
            "range": "± 4793435.712721612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99596335.71428572,
            "unit": "ns",
            "range": "± 7159891.595724462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212106838,
            "unit": "ns",
            "range": "± 19204824.050773486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5145604.947916667,
            "unit": "ns",
            "range": "± 338101.8843209382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1793566.5857263512,
            "unit": "ns",
            "range": "± 60245.5091494915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208142.9643110796,
            "unit": "ns",
            "range": "± 44792.431281568046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832038.7276785714,
            "unit": "ns",
            "range": "± 80859.26895245678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 940674.7174944197,
            "unit": "ns",
            "range": "± 37959.53301134223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 859333.9692451585,
            "unit": "ns",
            "range": "± 42125.53386761208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3919809,
            "unit": "ns",
            "range": "± 531841.2923243288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3258381.6326530613,
            "unit": "ns",
            "range": "± 281510.335400875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5040791,
            "unit": "ns",
            "range": "± 456057.7437954075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4315548.979591837,
            "unit": "ns",
            "range": "± 579736.0236900037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7142723.958333333,
            "unit": "ns",
            "range": "± 601521.1702526034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287664.2105263158,
            "unit": "ns",
            "range": "± 34759.474189243054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328489.79591836734,
            "unit": "ns",
            "range": "± 53238.38383497363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259709.47368421053,
            "unit": "ns",
            "range": "± 44092.0267643497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132078.5714285714,
            "unit": "ns",
            "range": "± 361163.85499470896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3905638.888888889,
            "unit": "ns",
            "range": "± 591839.0933575644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25665,
            "unit": "ns",
            "range": "± 11495.790841464848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91884.0425531915,
            "unit": "ns",
            "range": "± 16691.27196549522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84433.67346938775,
            "unit": "ns",
            "range": "± 18323.675991198463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112943.68421052632,
            "unit": "ns",
            "range": "± 30296.161580222684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10186.315789473685,
            "unit": "ns",
            "range": "± 7795.560800679349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29579.79797979798,
            "unit": "ns",
            "range": "± 9351.775775907641"
          }
        ]
      }
    ]
  }
}