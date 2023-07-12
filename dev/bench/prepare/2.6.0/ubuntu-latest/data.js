window.BENCHMARK_DATA = {
  "lastUpdate": 1689147657386,
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
          "id": "349386cad10fdedaa0eab83fd5ee11f94d542bc2",
          "message": "Prepare 2.6.0",
          "timestamp": "2023-07-12T16:25:54+09:00",
          "tree_id": "c9cab82e8cbc048cd23f270c87bad81873f04f3b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/349386cad10fdedaa0eab83fd5ee11f94d542bc2"
        },
        "date": 1689147644477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317816.6530612245,
            "unit": "ns",
            "range": "± 12625.115477278845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306359.65,
            "unit": "ns",
            "range": "± 10763.95043188141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302297.10714285716,
            "unit": "ns",
            "range": "± 8436.04849721447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4770283.076923077,
            "unit": "ns",
            "range": "± 28085.81873609746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4356675.2,
            "unit": "ns",
            "range": "± 53166.80550896933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25103.721649484534,
            "unit": "ns",
            "range": "± 2558.5504471211652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114793.86,
            "unit": "ns",
            "range": "± 10708.032139633991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92811.36082474227,
            "unit": "ns",
            "range": "± 7300.247533168492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115415.36363636363,
            "unit": "ns",
            "range": "± 11045.290863397546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8725.568421052632,
            "unit": "ns",
            "range": "± 1004.0965204582756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24065.78947368421,
            "unit": "ns",
            "range": "± 2498.554189989393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638228.35,
            "unit": "ns",
            "range": "± 114917.12836687309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989905.2439024393,
            "unit": "ns",
            "range": "± 105459.8709774909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2056620.892857143,
            "unit": "ns",
            "range": "± 110002.54439050931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5669856.639344262,
            "unit": "ns",
            "range": "± 253345.43088821322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6305640.030989584,
            "unit": "ns",
            "range": "± 44702.30366188807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926983.7364676339,
            "unit": "ns",
            "range": "± 1578.8602614970205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411411.3524739584,
            "unit": "ns",
            "range": "± 3996.6924106283714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666639.077566964,
            "unit": "ns",
            "range": "± 4704.859705068415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833385.4037760417,
            "unit": "ns",
            "range": "± 552.0464257795996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794128.470842634,
            "unit": "ns",
            "range": "± 435.355931676373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3817759.8048780486,
            "unit": "ns",
            "range": "± 135842.7374527655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4058242.275862069,
            "unit": "ns",
            "range": "± 116213.19128649987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4945921.4,
            "unit": "ns",
            "range": "± 91264.24789415467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4433178,
            "unit": "ns",
            "range": "± 97438.57610013116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7171903.826086956,
            "unit": "ns",
            "range": "± 174591.97051401986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9069591.166666666,
            "unit": "ns",
            "range": "± 107959.09242900868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23722819.466666665,
            "unit": "ns",
            "range": "± 198222.34602221916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59185768.4,
            "unit": "ns",
            "range": "± 344691.46195335744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117689614.57142857,
            "unit": "ns",
            "range": "± 552104.9459853226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234491378.33333334,
            "unit": "ns",
            "range": "± 727695.8918911375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54992.836956521736,
            "unit": "ns",
            "range": "± 3577.0399152850227"
          }
        ]
      }
    ]
  }
}