window.BENCHMARK_DATA = {
  "lastUpdate": 1681887900769,
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
          "id": "45ac42e9e3775906656a12287367ce0ceee11123",
          "message": "update: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:30:06+09:00",
          "tree_id": "dc212b25fb943314b7110477bccabe5faf5dfa8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45ac42e9e3775906656a12287367ce0ceee11123"
        },
        "date": 1681886767612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9831897.066666666,
            "unit": "ns",
            "range": "± 173803.89416748105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25685161.333333332,
            "unit": "ns",
            "range": "± 204887.12617915354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65388852.46666667,
            "unit": "ns",
            "range": "± 646758.9806227076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138189896.92857143,
            "unit": "ns",
            "range": "± 666229.7502897544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279310024.53333336,
            "unit": "ns",
            "range": "± 2104939.8297483427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57933.454545454544,
            "unit": "ns",
            "range": "± 3196.9280402382938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1715853.0897435897,
            "unit": "ns",
            "range": "± 88310.54703011455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3209279.787878788,
            "unit": "ns",
            "range": "± 100559.0866060713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2767538.8857142855,
            "unit": "ns",
            "range": "± 132387.5614210083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6656634.588235294,
            "unit": "ns",
            "range": "± 130722.96246884996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7070688.068229167,
            "unit": "ns",
            "range": "± 34600.59531902026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2214037,
            "unit": "ns",
            "range": "± 2188.553891153146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1587160.7552083333,
            "unit": "ns",
            "range": "± 3310.4296635247406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115848.713448661,
            "unit": "ns",
            "range": "± 4202.133489455149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993779.2614583333,
            "unit": "ns",
            "range": "± 1315.892820935219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901951.4235677083,
            "unit": "ns",
            "range": "± 755.942023037171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 404683.55555555556,
            "unit": "ns",
            "range": "± 13490.693292455771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323051.20408163266,
            "unit": "ns",
            "range": "± 12916.31089291687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276279.85185185185,
            "unit": "ns",
            "range": "± 7626.139151747978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6869843.133333334,
            "unit": "ns",
            "range": "± 45054.81481146314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4759036.588235294,
            "unit": "ns",
            "range": "± 94240.68001801214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24376.9793814433,
            "unit": "ns",
            "range": "± 2032.146094544004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115159.20833333333,
            "unit": "ns",
            "range": "± 7374.190116340222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106647.79787234042,
            "unit": "ns",
            "range": "± 6252.2586432025355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121322.40963855422,
            "unit": "ns",
            "range": "± 6627.052736812295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7792.886597938144,
            "unit": "ns",
            "range": "± 650.6959555655369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22078.67391304348,
            "unit": "ns",
            "range": "± 1761.0286586125878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4180159.2,
            "unit": "ns",
            "range": "± 60438.38262017654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4423721.4375,
            "unit": "ns",
            "range": "± 83243.68480068522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5064821.64,
            "unit": "ns",
            "range": "± 132703.46590986237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5536348.166666667,
            "unit": "ns",
            "range": "± 163628.3783978476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8811648.545454545,
            "unit": "ns",
            "range": "± 214282.42998162768"
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
          "id": "fa50ed53764ee8f1ed54982ac5334a86225a38e0",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:48:29+09:00",
          "tree_id": "d40ade814e1b84bf940637ba7292b0f175aa7417",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fa50ed53764ee8f1ed54982ac5334a86225a38e0"
        },
        "date": 1681887690725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7700253.071428572,
            "unit": "ns",
            "range": "± 27427.32860169351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19669360.666666668,
            "unit": "ns",
            "range": "± 91967.53975310035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49917468.071428575,
            "unit": "ns",
            "range": "± 231445.76716087683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100265764.13333334,
            "unit": "ns",
            "range": "± 366347.1536975095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200254492.26666668,
            "unit": "ns",
            "range": "± 826470.6250453937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45033.44705882353,
            "unit": "ns",
            "range": "± 2343.8998003220145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367857.3636363635,
            "unit": "ns",
            "range": "± 91721.43923787077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577734.466666667,
            "unit": "ns",
            "range": "± 70550.70376966769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191543.21875,
            "unit": "ns",
            "range": "± 90572.14999901157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5491047.620689655,
            "unit": "ns",
            "range": "± 160365.22271552827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5904215.808035715,
            "unit": "ns",
            "range": "± 16224.575425256493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923721.011783854,
            "unit": "ns",
            "range": "± 3026.2890385398478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384512.824969952,
            "unit": "ns",
            "range": "± 549.5862005228125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523748.95859375,
            "unit": "ns",
            "range": "± 1520.497497048887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811763.044921875,
            "unit": "ns",
            "range": "± 601.6679346745761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732951.101702009,
            "unit": "ns",
            "range": "± 845.9486491628867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330865.45,
            "unit": "ns",
            "range": "± 7538.7544166966445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271129.6666666667,
            "unit": "ns",
            "range": "± 4489.261817567189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242777.38461538462,
            "unit": "ns",
            "range": "± 6611.32121789237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5732379.4,
            "unit": "ns",
            "range": "± 25464.39335284804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3865448,
            "unit": "ns",
            "range": "± 25043.717471039134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18028.44680851064,
            "unit": "ns",
            "range": "± 1480.8075362807397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85484.52857142857,
            "unit": "ns",
            "range": "± 4144.732213588744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76012.79310344828,
            "unit": "ns",
            "range": "± 2213.065769136147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101320.0612244898,
            "unit": "ns",
            "range": "± 12743.485000382581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5453.556701030928,
            "unit": "ns",
            "range": "± 712.4808326233556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17738.938144329895,
            "unit": "ns",
            "range": "± 1552.392486980667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3200727.6,
            "unit": "ns",
            "range": "± 69773.1108434972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3412655.0588235296,
            "unit": "ns",
            "range": "± 69781.58174392312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4242308.428571428,
            "unit": "ns",
            "range": "± 57313.52645515084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4252169.346153846,
            "unit": "ns",
            "range": "± 113379.83277988808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7150510.571428572,
            "unit": "ns",
            "range": "± 107182.11985911877"
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
          "id": "57fa7f56adc33391bbcdebc07ea89c0de7e82a81",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:51:08+09:00",
          "tree_id": "518460067ca7959a0ad48c6ba5ca65530d761ac6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/57fa7f56adc33391bbcdebc07ea89c0de7e82a81"
        },
        "date": 1681887888814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7888688.333333333,
            "unit": "ns",
            "range": "± 108016.07579738615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21177960.333333332,
            "unit": "ns",
            "range": "± 277922.5473320288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53294069.78571428,
            "unit": "ns",
            "range": "± 585784.2655413967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106343208.15789473,
            "unit": "ns",
            "range": "± 2325737.8337352374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213312034.4,
            "unit": "ns",
            "range": "± 3594835.022387552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49277.135802469136,
            "unit": "ns",
            "range": "± 2598.7533153085465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402897.588888889,
            "unit": "ns",
            "range": "± 77755.67321285403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2720735.4482758623,
            "unit": "ns",
            "range": "± 77591.06053147498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2352049.84057971,
            "unit": "ns",
            "range": "± 109304.00288787435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5614152.451612903,
            "unit": "ns",
            "range": "± 166360.0115371958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5933630.027604166,
            "unit": "ns",
            "range": "± 35801.857056606386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841490.7014723558,
            "unit": "ns",
            "range": "± 3816.0608925863394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365723.0046037945,
            "unit": "ns",
            "range": "± 5608.203710560775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626281.076302083,
            "unit": "ns",
            "range": "± 6914.671302501356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829676.5783203125,
            "unit": "ns",
            "range": "± 1596.9528051786497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773108.5368489583,
            "unit": "ns",
            "range": "± 989.0570603438567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338423.6153846154,
            "unit": "ns",
            "range": "± 8593.555273933707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284949.3243243243,
            "unit": "ns",
            "range": "± 9548.280857638005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237141.09523809524,
            "unit": "ns",
            "range": "± 5365.932005763416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5911612.066666666,
            "unit": "ns",
            "range": "± 66132.92325144075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953872,
            "unit": "ns",
            "range": "± 56648.18889552302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21036.02105263158,
            "unit": "ns",
            "range": "± 1977.9678964917684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99597.22222222222,
            "unit": "ns",
            "range": "± 9945.693054677915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81973.84782608696,
            "unit": "ns",
            "range": "± 5253.371055723754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120964.65263157895,
            "unit": "ns",
            "range": "± 14857.058691874247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7344.381443298969,
            "unit": "ns",
            "range": "± 1296.270864853765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21390.94845360825,
            "unit": "ns",
            "range": "± 2007.1125475581316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444162.8076923075,
            "unit": "ns",
            "range": "± 91394.90385005905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3750276.8529411764,
            "unit": "ns",
            "range": "± 118290.55006984371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218435.94117647,
            "unit": "ns",
            "range": "± 84856.02368016558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4839819,
            "unit": "ns",
            "range": "± 74690.82599108655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7518445.852941177,
            "unit": "ns",
            "range": "± 235468.6679413391"
          }
        ]
      }
    ]
  }
}