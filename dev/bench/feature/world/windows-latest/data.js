window.BENCHMARK_DATA = {
  "lastUpdate": 1690761726597,
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
          "id": "01cecfb43845f66fe3ef23abba94ddb04521928a",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-29T16:21:32+09:00",
          "tree_id": "cd7bb71e5d56e5632a658659f62b529f7e57f395",
          "url": "https://github.com/OnedgeLee/libplanet/commit/01cecfb43845f66fe3ef23abba94ddb04521928a"
        },
        "date": 1690761676549,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1828416.3265306123,
            "unit": "ns",
            "range": "± 216294.5961137633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3346385.714285714,
            "unit": "ns",
            "range": "± 262807.47882782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2333387.5,
            "unit": "ns",
            "range": "± 160588.4627500402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6294828.125,
            "unit": "ns",
            "range": "± 459414.58508642454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59710.416666666664,
            "unit": "ns",
            "range": "± 11524.449790877487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8937888.524590164,
            "unit": "ns",
            "range": "± 398778.2575560678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22668497,
            "unit": "ns",
            "range": "± 1587828.2156184723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64311228.23529412,
            "unit": "ns",
            "range": "± 3554746.5944984094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118350604.22535211,
            "unit": "ns",
            "range": "± 5745056.2258205125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266119649.01960784,
            "unit": "ns",
            "range": "± 10840618.138249729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5819807.8125,
            "unit": "ns",
            "range": "± 110213.74822853992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863195.0651041667,
            "unit": "ns",
            "range": "± 26586.573202412364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385687.2135416667,
            "unit": "ns",
            "range": "± 16576.82707433393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118416.4322916665,
            "unit": "ns",
            "range": "± 46182.56991503078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1017431.0611979166,
            "unit": "ns",
            "range": "± 14010.444996756773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978096.9193892046,
            "unit": "ns",
            "range": "± 23203.36048707233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4010025,
            "unit": "ns",
            "range": "± 294871.1823886775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3887906.741573034,
            "unit": "ns",
            "range": "± 207313.87479208296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5144636.559139785,
            "unit": "ns",
            "range": "± 313099.4548843888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4509701.041666667,
            "unit": "ns",
            "range": "± 360810.3241301495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8011934.831460674,
            "unit": "ns",
            "range": "± 443676.36677208036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320049.4736842105,
            "unit": "ns",
            "range": "± 44152.282111771885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307586.59793814435,
            "unit": "ns",
            "range": "± 40485.02199596471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272048.48484848486,
            "unit": "ns",
            "range": "± 45890.075765935915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4727209.47368421,
            "unit": "ns",
            "range": "± 295733.24346828717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4275115.151515151,
            "unit": "ns",
            "range": "± 326907.2696214545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19424.050632911392,
            "unit": "ns",
            "range": "± 2109.515389109693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91194.38202247191,
            "unit": "ns",
            "range": "± 11684.443421903894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112883.67346938775,
            "unit": "ns",
            "range": "± 25131.09009691559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131562.36559139786,
            "unit": "ns",
            "range": "± 31356.643821277423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5641.304347826087,
            "unit": "ns",
            "range": "± 1006.2608594909801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16961.904761904763,
            "unit": "ns",
            "range": "± 1689.5786001965437"
          }
        ]
      }
    ]
  }
}