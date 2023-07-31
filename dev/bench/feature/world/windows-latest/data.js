window.BENCHMARK_DATA = {
  "lastUpdate": 1690788663222,
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
      },
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
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690788623190,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1304758.5858585858,
            "unit": "ns",
            "range": "± 86194.77114935686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2494343.2989690723,
            "unit": "ns",
            "range": "± 153153.51088805235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732409.1836734693,
            "unit": "ns",
            "range": "± 133138.92913371781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4829101.19047619,
            "unit": "ns",
            "range": "± 257763.5665947108"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47230.15873015873,
            "unit": "ns",
            "range": "± 2179.2744368648378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7100420,
            "unit": "ns",
            "range": "± 73072.17762498352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19954029.032258064,
            "unit": "ns",
            "range": "± 589479.4817992952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48755200,
            "unit": "ns",
            "range": "± 961213.4485898541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97614105.88235295,
            "unit": "ns",
            "range": "± 1949938.507835115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194617440,
            "unit": "ns",
            "range": "± 3566065.2124876073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4774735,
            "unit": "ns",
            "range": "± 13353.05191253171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540135.2120535714,
            "unit": "ns",
            "range": "± 6400.33522490376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176404.9609375,
            "unit": "ns",
            "range": "± 5912.162207398942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617989.543269231,
            "unit": "ns",
            "range": "± 9964.980774256672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849212.0186941965,
            "unit": "ns",
            "range": "± 3817.191610096308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769656.5290178572,
            "unit": "ns",
            "range": "± 3012.900515092544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3177377.272727273,
            "unit": "ns",
            "range": "± 70314.09756241857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3286247.5,
            "unit": "ns",
            "range": "± 114621.28273199618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3983344.4444444445,
            "unit": "ns",
            "range": "± 83958.14939404753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3596252.272727273,
            "unit": "ns",
            "range": "± 197583.7887023977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6063856.41025641,
            "unit": "ns",
            "range": "± 209934.36918647218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253060,
            "unit": "ns",
            "range": "± 9931.173313855243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244679.3103448276,
            "unit": "ns",
            "range": "± 6987.968195934292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219042.85714285713,
            "unit": "ns",
            "range": "± 8728.807669626667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3996771.4285714286,
            "unit": "ns",
            "range": "± 65884.86961325828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3732125,
            "unit": "ns",
            "range": "± 81791.66651026445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19983.673469387755,
            "unit": "ns",
            "range": "± 2343.435396866931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87127.8350515464,
            "unit": "ns",
            "range": "± 7274.824486256827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71957.14285714286,
            "unit": "ns",
            "range": "± 2622.8957054242746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82065.33333333333,
            "unit": "ns",
            "range": "± 3468.7599362734077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4602.127659574468,
            "unit": "ns",
            "range": "± 719.7638088408199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16556.25,
            "unit": "ns",
            "range": "± 1179.0105128766597"
          }
        ]
      }
    ]
  }
}