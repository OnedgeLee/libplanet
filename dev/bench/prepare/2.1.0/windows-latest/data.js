window.BENCHMARK_DATA = {
  "lastUpdate": 1686718782433,
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
          "id": "da589f266f89e62b1ae7c00c1bbaa48cf75cc52c",
          "message": "Prepare 2.1.0",
          "timestamp": "2023-06-14T13:44:28+09:00",
          "tree_id": "278a0718bc280a588f24604dc4ffff3971f0455a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da589f266f89e62b1ae7c00c1bbaa48cf75cc52c"
        },
        "date": 1686718745849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1366075.7575757576,
            "unit": "ns",
            "range": "± 139028.575899029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2389987.0967741935,
            "unit": "ns",
            "range": "± 72716.83318157487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107328.7671232875,
            "unit": "ns",
            "range": "± 104577.22622202331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5085073.9130434785,
            "unit": "ns",
            "range": "± 172607.98157775853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42996.153846153844,
            "unit": "ns",
            "range": "± 2225.323108463788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6842236.666666667,
            "unit": "ns",
            "range": "± 50705.393720796135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17642086.666666668,
            "unit": "ns",
            "range": "± 190247.9842831706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44873821.428571425,
            "unit": "ns",
            "range": "± 171067.0591793281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91025140,
            "unit": "ns",
            "range": "± 593278.3613111133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179485873.33333334,
            "unit": "ns",
            "range": "± 1521332.9721317545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749746.458333333,
            "unit": "ns",
            "range": "± 8459.848780424436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496289.4252232143,
            "unit": "ns",
            "range": "± 1427.4336212794738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165719.84375,
            "unit": "ns",
            "range": "± 1300.8437128898938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557860.486778846,
            "unit": "ns",
            "range": "± 13305.892605401676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823122.4739583334,
            "unit": "ns",
            "range": "± 9585.856942981281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775357.0540364584,
            "unit": "ns",
            "range": "± 622.7260546687871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2913741.6666666665,
            "unit": "ns",
            "range": "± 59865.60249691672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3086629.6296296297,
            "unit": "ns",
            "range": "± 62455.63850147383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3963253.3333333335,
            "unit": "ns",
            "range": "± 73357.42115215909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3984056.0606060605,
            "unit": "ns",
            "range": "± 171681.8758668646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6400945.454545454,
            "unit": "ns",
            "range": "± 226096.04715031592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253806.3829787234,
            "unit": "ns",
            "range": "± 8707.702843268165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246469.69696969696,
            "unit": "ns",
            "range": "± 7695.513500105307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215418.3908045977,
            "unit": "ns",
            "range": "± 11752.293479638023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3880226.6666666665,
            "unit": "ns",
            "range": "± 20301.986766488313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3447178.5714285714,
            "unit": "ns",
            "range": "± 38611.06215683688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17180,
            "unit": "ns",
            "range": "± 1712.6935361985138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81714.66666666667,
            "unit": "ns",
            "range": "± 4130.463403533304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66373.21428571429,
            "unit": "ns",
            "range": "± 2837.572014075579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81970.21276595745,
            "unit": "ns",
            "range": "± 10525.032421856266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4303.125,
            "unit": "ns",
            "range": "± 697.431849151246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17125.263157894737,
            "unit": "ns",
            "range": "± 1398.3248656915166"
          }
        ]
      }
    ]
  }
}