window.BENCHMARK_DATA = {
  "lastUpdate": 1687689198932,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c565a178831a711bdf786b79a9e2e6279fa1a65c",
          "message": "Fix maj23",
          "timestamp": "2023-06-25T19:16:18+09:00",
          "tree_id": "39a2af58c0af5ea78020da440b223735127e7419",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c565a178831a711bdf786b79a9e2e6279fa1a65c"
        },
        "date": 1687689173802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066117.3469387756,
            "unit": "ns",
            "range": "± 117918.28555027209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844753.7037037036,
            "unit": "ns",
            "range": "± 60963.05318755195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1687476.530612245,
            "unit": "ns",
            "range": "± 156607.74677750093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3849984.0579710146,
            "unit": "ns",
            "range": "± 183285.34858744196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33524.32432432433,
            "unit": "ns",
            "range": "± 1646.400042168451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4859821.428571428,
            "unit": "ns",
            "range": "± 18509.29822762389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13028792.857142856,
            "unit": "ns",
            "range": "± 72712.46284336167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31788060,
            "unit": "ns",
            "range": "± 279174.40989972046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63616980,
            "unit": "ns",
            "range": "± 407864.17767263093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125899183.33333333,
            "unit": "ns",
            "range": "± 566673.569387548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687513.6160714286,
            "unit": "ns",
            "range": "± 12345.4693499434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1138686.03515625,
            "unit": "ns",
            "range": "± 3994.8758651781345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816509.2564174107,
            "unit": "ns",
            "range": "± 1530.74721014633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1985666.9270833333,
            "unit": "ns",
            "range": "± 4732.562000614227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 650665.9635416666,
            "unit": "ns",
            "range": "± 1041.0831818169952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591598.6653645834,
            "unit": "ns",
            "range": "± 1006.5481660882283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161210.3448275863,
            "unit": "ns",
            "range": "± 62200.04217285885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2256605.4545454546,
            "unit": "ns",
            "range": "± 54086.63290116938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826339.1304347827,
            "unit": "ns",
            "range": "± 68975.62638768222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2829026.3157894737,
            "unit": "ns",
            "range": "± 136911.28452972363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4696388,
            "unit": "ns",
            "range": "± 187201.72317364943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184951.76470588235,
            "unit": "ns",
            "range": "± 9990.91982710284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175730.66666666666,
            "unit": "ns",
            "range": "± 8353.587566143377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153913.7931034483,
            "unit": "ns",
            "range": "± 4307.860269150123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757250,
            "unit": "ns",
            "range": "± 32439.760740842044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2395550,
            "unit": "ns",
            "range": "± 17070.126852757443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10696.703296703297,
            "unit": "ns",
            "range": "± 1497.1417619696056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56533.68421052631,
            "unit": "ns",
            "range": "± 5078.398359642154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46163.15789473684,
            "unit": "ns",
            "range": "± 2332.2288112597735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61002.10526315789,
            "unit": "ns",
            "range": "± 11922.578071086062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2940.816326530612,
            "unit": "ns",
            "range": "± 643.8986817101089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10155.913978494624,
            "unit": "ns",
            "range": "± 1708.1303257981147"
          }
        ]
      }
    ]
  }
}