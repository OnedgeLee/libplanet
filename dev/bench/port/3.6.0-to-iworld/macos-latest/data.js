window.BENCHMARK_DATA = {
  "lastUpdate": 1699515907828,
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
          "id": "b0df8ad4276cdd5c00172084749d2b1d6e02f68d",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:11:38+09:00",
          "tree_id": "6d6212780ecec18d14e20a872d97f970fede8ab9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b0df8ad4276cdd5c00172084749d2b1d6e02f68d"
        },
        "date": 1699515878514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9917369.416666666,
            "unit": "ns",
            "range": "± 52290.44368013291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23992986.192307692,
            "unit": "ns",
            "range": "± 164082.0643140624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58372517.64285714,
            "unit": "ns",
            "range": "± 778244.7345463091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123695808.42105263,
            "unit": "ns",
            "range": "± 2706306.04871635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249733131.75,
            "unit": "ns",
            "range": "± 1962554.8619819349"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57028.90217391304,
            "unit": "ns",
            "range": "± 5506.078034317641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273392.26373626373,
            "unit": "ns",
            "range": "± 24523.25106770451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291288.652173913,
            "unit": "ns",
            "range": "± 9731.110490397716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272234.67142857146,
            "unit": "ns",
            "range": "± 8924.358123188713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5014844.538461538,
            "unit": "ns",
            "range": "± 77037.81581320455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4417421.947368421,
            "unit": "ns",
            "range": "± 97361.95802632207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22821.664948453606,
            "unit": "ns",
            "range": "± 3024.4389792447882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100903.61956521739,
            "unit": "ns",
            "range": "± 10362.191699139854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95906.98837209302,
            "unit": "ns",
            "range": "± 6286.363263154126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96912.44210526315,
            "unit": "ns",
            "range": "± 12325.58491099746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7338.005154639175,
            "unit": "ns",
            "range": "± 975.3709029957029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20582.494623655915,
            "unit": "ns",
            "range": "± 2374.714969732322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529999.5773195876,
            "unit": "ns",
            "range": "± 180077.78433185912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3083087.605882353,
            "unit": "ns",
            "range": "± 200017.03235290357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2331823.3068181816,
            "unit": "ns",
            "range": "± 178265.8407653212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12575564.510309279,
            "unit": "ns",
            "range": "± 3596269.5742798774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3653383.5,
            "unit": "ns",
            "range": "± 89449.13560763112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3832325.4838709678,
            "unit": "ns",
            "range": "± 105485.1246438318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4614925.381818182,
            "unit": "ns",
            "range": "± 193617.42805695088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4399737.95,
            "unit": "ns",
            "range": "± 216250.2677548002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15078386.836956521,
            "unit": "ns",
            "range": "± 2030554.9680208513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5724649.073660715,
            "unit": "ns",
            "range": "± 208792.10239638254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1445517.73828125,
            "unit": "ns",
            "range": "± 57739.985653801115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 919130.7256433824,
            "unit": "ns",
            "range": "± 18671.837064122185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2085402.480263158,
            "unit": "ns",
            "range": "± 45086.27350813904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648622.2530691965,
            "unit": "ns",
            "range": "± 6649.402840324077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599232.0451594172,
            "unit": "ns",
            "range": "± 20035.891463746724"
          }
        ]
      }
    ]
  }
}