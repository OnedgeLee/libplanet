window.BENCHMARK_DATA = {
  "lastUpdate": 1688107712966,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687707309713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594670.111111111,
            "unit": "ns",
            "range": "± 75256.73930727666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3883668.1666666665,
            "unit": "ns",
            "range": "± 92298.6706252501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631847.933333334,
            "unit": "ns",
            "range": "± 57740.62957431358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4836963.928571428,
            "unit": "ns",
            "range": "± 63454.19099387221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7327996.736842105,
            "unit": "ns",
            "range": "± 162150.50268597933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8489217.5,
            "unit": "ns",
            "range": "± 155227.60887333585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22483073.2,
            "unit": "ns",
            "range": "± 266788.2818060579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56534264,
            "unit": "ns",
            "range": "± 384770.161311319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112147650.53333333,
            "unit": "ns",
            "range": "± 468259.7836521741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223587372.4,
            "unit": "ns",
            "range": "± 651882.3407677405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298085.34375,
            "unit": "ns",
            "range": "± 9005.989532453907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284786.3076923077,
            "unit": "ns",
            "range": "± 11643.52987131709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251549.37837837837,
            "unit": "ns",
            "range": "± 8482.447613720908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4455716.083333333,
            "unit": "ns",
            "range": "± 27546.45517355705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998258.9285714286,
            "unit": "ns",
            "range": "± 45956.85144779291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21092.926315789475,
            "unit": "ns",
            "range": "± 1716.378778572537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91097.93684210526,
            "unit": "ns",
            "range": "± 5624.270276658547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74649.13793103448,
            "unit": "ns",
            "range": "± 2168.3058186410676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90064.02469135802,
            "unit": "ns",
            "range": "± 4882.671489500673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5178.4639175257735,
            "unit": "ns",
            "range": "± 636.9051319639317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18982.82608695652,
            "unit": "ns",
            "range": "± 1363.8773317330592"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47466.927710843374,
            "unit": "ns",
            "range": "± 2476.5974828929157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5948067.344791667,
            "unit": "ns",
            "range": "± 39287.22795072356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859531.2522135417,
            "unit": "ns",
            "range": "± 5517.456429064454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356770.0875,
            "unit": "ns",
            "range": "± 5121.696612262152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688861.75859375,
            "unit": "ns",
            "range": "± 2985.047772546228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834320.821484375,
            "unit": "ns",
            "range": "± 674.0660173739539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763112.4372907366,
            "unit": "ns",
            "range": "± 431.93133124823527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471119.5656565656,
            "unit": "ns",
            "range": "± 97945.22130618515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764388.6923076925,
            "unit": "ns",
            "range": "± 96150.1240574928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349971.8210526314,
            "unit": "ns",
            "range": "± 133873.15591752777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5657397.136363637,
            "unit": "ns",
            "range": "± 210260.57460159983"
          }
        ]
      },
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
          "id": "6d4e0b50cf276f025278eb8168694289e9de6f70",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T11:45:00+09:00",
          "tree_id": "3afb7d3a4ddd2659a2040eb1755753bbb3201465",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6d4e0b50cf276f025278eb8168694289e9de6f70"
        },
        "date": 1687748615924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3695843.595744681,
            "unit": "ns",
            "range": "± 324465.4734096243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4188588.82,
            "unit": "ns",
            "range": "± 346857.56611080404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5438782.448979592,
            "unit": "ns",
            "range": "± 408543.4893703352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5120635.06185567,
            "unit": "ns",
            "range": "± 388005.17307593167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8989255.431818182,
            "unit": "ns",
            "range": "± 495033.54982093605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9558792.07142857,
            "unit": "ns",
            "range": "± 888085.8128256822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24439188.96,
            "unit": "ns",
            "range": "± 968045.7305047989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64577784.14285714,
            "unit": "ns",
            "range": "± 2116231.5935815517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134839711.14285713,
            "unit": "ns",
            "range": "± 1882638.7997082856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262682907.9047619,
            "unit": "ns",
            "range": "± 9398721.485441782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367530.64285714284,
            "unit": "ns",
            "range": "± 46269.57901685413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363695.39795918367,
            "unit": "ns",
            "range": "± 43546.75640831768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295671.93333333335,
            "unit": "ns",
            "range": "± 30408.516118225165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5105793.835051547,
            "unit": "ns",
            "range": "± 472976.9787239404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4617592.926315789,
            "unit": "ns",
            "range": "± 377702.6394430964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31417.9793814433,
            "unit": "ns",
            "range": "± 9390.413156489467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120360.67346938775,
            "unit": "ns",
            "range": "± 19410.169530734816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121005.8762886598,
            "unit": "ns",
            "range": "± 27491.585225550432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132776.08421052631,
            "unit": "ns",
            "range": "± 26925.081231297747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7108.609756097561,
            "unit": "ns",
            "range": "± 1680.7461875798308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29274.70707070707,
            "unit": "ns",
            "range": "± 10072.79201131011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67202.82291666667,
            "unit": "ns",
            "range": "± 14990.593167572782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6951572.635110294,
            "unit": "ns",
            "range": "± 106072.67719926742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194416.1015625,
            "unit": "ns",
            "range": "± 38530.87598534746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1620556.4677220394,
            "unit": "ns",
            "range": "± 34904.461176315446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3184003.66015625,
            "unit": "ns",
            "range": "± 55892.41523183278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021839.4827223558,
            "unit": "ns",
            "range": "± 12203.155554359153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944945.2804904514,
            "unit": "ns",
            "range": "± 19272.810060026724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1844138.3163265307,
            "unit": "ns",
            "range": "± 245989.5467928097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3501272.2065217393,
            "unit": "ns",
            "range": "± 294845.3713622584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2819668.595744681,
            "unit": "ns",
            "range": "± 222842.80705650803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7216221.51,
            "unit": "ns",
            "range": "± 542907.6273518899"
          }
        ]
      },
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
          "id": "358a6f0e875a4941ee9fcf3ba4aa438597d60753",
          "message": "chore: Fix minor log error",
          "timestamp": "2023-06-30T15:35:33+09:00",
          "tree_id": "5139fe988c359cc333559af2640b8aaba2223695",
          "url": "https://github.com/OnedgeLee/libplanet/commit/358a6f0e875a4941ee9fcf3ba4aa438597d60753"
        },
        "date": 1688107699961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7553517.533333333,
            "unit": "ns",
            "range": "± 21663.513175932694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19450810.2,
            "unit": "ns",
            "range": "± 259128.06024798958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50189803.13333333,
            "unit": "ns",
            "range": "± 428842.48355292185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100992923.46666667,
            "unit": "ns",
            "range": "± 1080665.644247554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203374014.66666666,
            "unit": "ns",
            "range": "± 1650527.7763271302"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45335.07317073171,
            "unit": "ns",
            "range": "± 2319.310118694503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280927.8823529412,
            "unit": "ns",
            "range": "± 8335.10185269686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258763.51351351352,
            "unit": "ns",
            "range": "± 8640.98537854985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233280.2894736842,
            "unit": "ns",
            "range": "± 8013.169410103678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4224612,
            "unit": "ns",
            "range": "± 20275.093587946765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3897235.214285714,
            "unit": "ns",
            "range": "± 32641.72668457582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19004.0625,
            "unit": "ns",
            "range": "± 1383.8513215888324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86327.26595744681,
            "unit": "ns",
            "range": "± 5244.105297318722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72354.6,
            "unit": "ns",
            "range": "± 1589.9252680219713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85956.23333333334,
            "unit": "ns",
            "range": "± 6750.05338480762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4747.3917525773195,
            "unit": "ns",
            "range": "± 670.0586348208179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17756.747368421053,
            "unit": "ns",
            "range": "± 1874.0991706566028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359430.9270833333,
            "unit": "ns",
            "range": "± 84140.29060403505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2610488.257142857,
            "unit": "ns",
            "range": "± 85315.43372007024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138017.455882353,
            "unit": "ns",
            "range": "± 70877.06171945264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5215286.047619048,
            "unit": "ns",
            "range": "± 190369.69827307877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5920046.947544643,
            "unit": "ns",
            "range": "± 24818.009923694113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846560.8801618305,
            "unit": "ns",
            "range": "± 1716.9109247092172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383541.4576822917,
            "unit": "ns",
            "range": "± 743.5431816184687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605440.0574776786,
            "unit": "ns",
            "range": "± 1863.0258952082363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808942.0337239583,
            "unit": "ns",
            "range": "± 415.9719367084983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733181.0475911458,
            "unit": "ns",
            "range": "± 337.3511862276477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222341.8666666667,
            "unit": "ns",
            "range": "± 43876.86116828496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3459833.470588235,
            "unit": "ns",
            "range": "± 111701.13762184457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4295269.066666666,
            "unit": "ns",
            "range": "± 42584.11850421413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4278415.933333334,
            "unit": "ns",
            "range": "± 69303.84759723628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6691008.384615385,
            "unit": "ns",
            "range": "± 77418.6268677619"
          }
        ]
      }
    ]
  }
}