window.BENCHMARK_DATA = {
  "lastUpdate": 1689672216921,
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
          "id": "45dee65124543713e956792c50e6e862fe67662c",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T18:09:27+09:00",
          "tree_id": "66f7ec611cd49e0650ce17afce73cb20917c79b2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45dee65124543713e956792c50e6e862fe67662c"
        },
        "date": 1689672203505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282207.01960784313,
            "unit": "ns",
            "range": "± 11367.743249194533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268670.2545454545,
            "unit": "ns",
            "range": "± 10527.668635408776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244383.65625,
            "unit": "ns",
            "range": "± 7466.051932492122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4295166.571428572,
            "unit": "ns",
            "range": "± 27868.12843406572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941882.3333333335,
            "unit": "ns",
            "range": "± 24170.68669355704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18657.989247311827,
            "unit": "ns",
            "range": "± 1705.6806335877081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90634.40816326531,
            "unit": "ns",
            "range": "± 5969.802880298762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74093.72,
            "unit": "ns",
            "range": "± 1913.0105096418054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92457.05208333333,
            "unit": "ns",
            "range": "± 9527.04844597715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4668.020618556701,
            "unit": "ns",
            "range": "± 767.2108708847788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18267.305263157894,
            "unit": "ns",
            "range": "± 1901.1078968881022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423478.4842105263,
            "unit": "ns",
            "range": "± 118745.15202178966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626801.275862069,
            "unit": "ns",
            "range": "± 76206.20389157328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1837136.7731958763,
            "unit": "ns",
            "range": "± 119814.38069229081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4797404.074074074,
            "unit": "ns",
            "range": "± 133932.23074517542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6324075.2125,
            "unit": "ns",
            "range": "± 25453.70578726941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1997271.628627232,
            "unit": "ns",
            "range": "± 4874.616632456476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367541.1396484375,
            "unit": "ns",
            "range": "± 529.6507822607524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558778.7912946427,
            "unit": "ns",
            "range": "± 2657.6265887330796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808441.7493722098,
            "unit": "ns",
            "range": "± 393.2413122054414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737475.2611979167,
            "unit": "ns",
            "range": "± 628.1321233142261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281854.2666666666,
            "unit": "ns",
            "range": "± 52246.318640601254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3599703.466666667,
            "unit": "ns",
            "range": "± 51163.28209184321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287214.733333333,
            "unit": "ns",
            "range": "± 38289.13020029625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3876824.588235294,
            "unit": "ns",
            "range": "± 78411.78326394799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6395001.428571428,
            "unit": "ns",
            "range": "± 108968.96679402418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7675638.733333333,
            "unit": "ns",
            "range": "± 55771.97970495152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19524845.666666668,
            "unit": "ns",
            "range": "± 167861.74421727742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50240240.4,
            "unit": "ns",
            "range": "± 301582.68331416417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100381754.53333333,
            "unit": "ns",
            "range": "± 513037.7052115129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200639063.7857143,
            "unit": "ns",
            "range": "± 733202.301583443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45833.58947368421,
            "unit": "ns",
            "range": "± 2658.260959664279"
          }
        ]
      }
    ]
  }
}