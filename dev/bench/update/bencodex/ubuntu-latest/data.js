window.BENCHMARK_DATA = {
  "lastUpdate": 1681887703552,
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
      }
    ]
  }
}