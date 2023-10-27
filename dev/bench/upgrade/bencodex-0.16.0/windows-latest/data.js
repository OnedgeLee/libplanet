window.BENCHMARK_DATA = {
  "lastUpdate": 1698402496985,
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
          "id": "3cee42e6bd68fb9dc30ef5e7bbbd9b2dea3d1f2b",
          "message": "upgrade: Bencodex to 0.16.0",
          "timestamp": "2023-10-27T19:13:54+09:00",
          "tree_id": "c821710e38ec2b1153db4d6d61e6c3e9764c7d3a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3cee42e6bd68fb9dc30ef5e7bbbd9b2dea3d1f2b"
        },
        "date": 1698402457996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1292800,
            "unit": "ns",
            "range": "± 89723.87460129766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2323102.222222222,
            "unit": "ns",
            "range": "± 87610.74417529789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1916200,
            "unit": "ns",
            "range": "± 25734.571724009355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7286829.411764706,
            "unit": "ns",
            "range": "± 214247.52115451795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43766.666666666664,
            "unit": "ns",
            "range": "± 1849.4262241275176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6939800,
            "unit": "ns",
            "range": "± 64323.32391908863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17821586.666666668,
            "unit": "ns",
            "range": "± 178950.18806786375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45784553.333333336,
            "unit": "ns",
            "range": "± 483721.6951729087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92033107.6923077,
            "unit": "ns",
            "range": "± 617851.9907193773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181947733.33333334,
            "unit": "ns",
            "range": "± 1724614.0796739205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517742.912946428,
            "unit": "ns",
            "range": "± 13493.652846048926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1451543.080357143,
            "unit": "ns",
            "range": "± 1039.771205729205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062391.796875,
            "unit": "ns",
            "range": "± 1110.4462920154324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2492753.0208333335,
            "unit": "ns",
            "range": "± 2396.189896272094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814049.0985576923,
            "unit": "ns",
            "range": "± 1508.705341356537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746736.9694010416,
            "unit": "ns",
            "range": "± 852.7160186952041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3045500,
            "unit": "ns",
            "range": "± 65043.731894960714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417146.6666666665,
            "unit": "ns",
            "range": "± 53341.24465132382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3829893.3333333335,
            "unit": "ns",
            "range": "± 42463.52159991758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3666938.4615384615,
            "unit": "ns",
            "range": "± 97451.92076885124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9052474.418604651,
            "unit": "ns",
            "range": "± 260431.49459623758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239170.1754385965,
            "unit": "ns",
            "range": "± 8258.760822654604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234176.31578947368,
            "unit": "ns",
            "range": "± 6192.909380919803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209264.63414634147,
            "unit": "ns",
            "range": "± 6632.969206004568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3779438.888888889,
            "unit": "ns",
            "range": "± 70705.19690433686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3508411.5384615385,
            "unit": "ns",
            "range": "± 40968.75920465777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18482.795698924732,
            "unit": "ns",
            "range": "± 1686.237363759272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77550.5376344086,
            "unit": "ns",
            "range": "± 5851.878621729909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65491.89189189189,
            "unit": "ns",
            "range": "± 2217.6537123698977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72709.375,
            "unit": "ns",
            "range": "± 8698.942199758361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4144.210526315789,
            "unit": "ns",
            "range": "± 459.58255560881844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17879.381443298967,
            "unit": "ns",
            "range": "± 1980.3165858187244"
          }
        ]
      }
    ]
  }
}