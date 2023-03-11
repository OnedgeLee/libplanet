window.BENCHMARK_DATA = {
  "lastUpdate": 1678519359898,
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
          "id": "6ca115644a09dae06fb5003352db39f25305bbf8",
          "message": "fix: ActionExecutionState total count",
          "timestamp": "2023-03-11T16:02:59+09:00",
          "tree_id": "a307135d2d9e360060cf6e08395ba431cb14e229",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6ca115644a09dae06fb5003352db39f25305bbf8"
        },
        "date": 1678519325622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422561.855670103,
            "unit": "ns",
            "range": "± 87088.59167931978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606234.210526316,
            "unit": "ns",
            "range": "± 87813.69183495367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204697.9166666665,
            "unit": "ns",
            "range": "± 126524.02058537232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5208851.515151516,
            "unit": "ns",
            "range": "± 162017.40284845198"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50779.78723404255,
            "unit": "ns",
            "range": "± 3272.1890928887688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7195673.333333333,
            "unit": "ns",
            "range": "± 132619.0272206533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19994742.85714286,
            "unit": "ns",
            "range": "± 221628.68015699563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51262466.666666664,
            "unit": "ns",
            "range": "± 504648.12163196114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100588320,
            "unit": "ns",
            "range": "± 1356458.9858472368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201928500,
            "unit": "ns",
            "range": "± 1966589.268250999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4790224.729567308,
            "unit": "ns",
            "range": "± 15417.4781297501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542051.0323660714,
            "unit": "ns",
            "range": "± 3282.242479563912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180117.578125,
            "unit": "ns",
            "range": "± 5266.209475820002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674421.709735577,
            "unit": "ns",
            "range": "± 4699.62123254079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825516.7643229166,
            "unit": "ns",
            "range": "± 1428.4890355918524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761557.4288504465,
            "unit": "ns",
            "range": "± 2111.91976214547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262520,
            "unit": "ns",
            "range": "± 115468.271144179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5168194.117647059,
            "unit": "ns",
            "range": "± 102857.56213441622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23906526.666666668,
            "unit": "ns",
            "range": "± 376712.703086406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6411320,
            "unit": "ns",
            "range": "± 118248.69796927394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27283885.29411765,
            "unit": "ns",
            "range": "± 532997.8001141004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195840.54054054053,
            "unit": "ns",
            "range": "± 9759.030505954071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192176.7123287671,
            "unit": "ns",
            "range": "± 9567.995269937184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178902.04081632654,
            "unit": "ns",
            "range": "± 11253.681913794859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11403881.25,
            "unit": "ns",
            "range": "± 206536.33810623575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9269480.952380951,
            "unit": "ns",
            "range": "± 210628.32814948616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26773.737373737375,
            "unit": "ns",
            "range": "± 3716.114545877017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63155.294117647056,
            "unit": "ns",
            "range": "± 4615.360118084811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49337.755102040814,
            "unit": "ns",
            "range": "± 3664.3030112100973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112329.06976744186,
            "unit": "ns",
            "range": "± 10954.342316865728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7944.318181818182,
            "unit": "ns",
            "range": "± 1098.9397141325837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24011.956521739132,
            "unit": "ns",
            "range": "± 2304.026212806108"
          }
        ]
      }
    ]
  }
}