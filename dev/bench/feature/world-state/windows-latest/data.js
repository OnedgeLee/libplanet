window.BENCHMARK_DATA = {
  "lastUpdate": 1690503281898,
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
          "id": "3010db94c47f76c3e46996cff77d69f8975f49a6",
          "message": "rename: Rename IAccountStateDelta as IAccount\n\nCo-authored-by: Say Cheong <greymistcube@gmail.com>\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-07-28T08:57:23+09:00",
          "tree_id": "a6bf1287a592e819b42e563dee9a79f3d2376684",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3010db94c47f76c3e46996cff77d69f8975f49a6"
        },
        "date": 1690503244441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318969.696969697,
            "unit": "ns",
            "range": "± 104561.32509206871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2367286.6666666665,
            "unit": "ns",
            "range": "± 66967.64392849231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699939.175257732,
            "unit": "ns",
            "range": "± 128127.50286718062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4509726.785714285,
            "unit": "ns",
            "range": "± 191100.94475868595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42370,
            "unit": "ns",
            "range": "± 2150.2985336421975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6734228.571428572,
            "unit": "ns",
            "range": "± 11516.905872634405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17410496.666666668,
            "unit": "ns",
            "range": "± 216288.80780325268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44804480,
            "unit": "ns",
            "range": "± 354723.48627386615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89022140,
            "unit": "ns",
            "range": "± 850950.9099488978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175486703.33333334,
            "unit": "ns",
            "range": "± 1572132.8510142185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4924899.609375,
            "unit": "ns",
            "range": "± 10238.67263754162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518321.303013393,
            "unit": "ns",
            "range": "± 2274.6490703979953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149232.44140625,
            "unit": "ns",
            "range": "± 1636.204370338899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518715.652901786,
            "unit": "ns",
            "range": "± 2753.094250278341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830458.6844308035,
            "unit": "ns",
            "range": "± 1549.1671496868187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731311.7815290178,
            "unit": "ns",
            "range": "± 596.6326778749374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2874888.888888889,
            "unit": "ns",
            "range": "± 63439.20368433517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3099425,
            "unit": "ns",
            "range": "± 76486.83074737623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3894734.782608696,
            "unit": "ns",
            "range": "± 97328.37859859997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3413730,
            "unit": "ns",
            "range": "± 100728.02712391353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5875575,
            "unit": "ns",
            "range": "± 187053.82475946023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253948,
            "unit": "ns",
            "range": "± 9755.903288757625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239854.9019607843,
            "unit": "ns",
            "range": "± 9660.254939192655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213281.6326530612,
            "unit": "ns",
            "range": "± 8389.767415066495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804335.714285714,
            "unit": "ns",
            "range": "± 31742.24574341212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3418006.6666666665,
            "unit": "ns",
            "range": "± 35860.77177614771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17742.85714285714,
            "unit": "ns",
            "range": "± 1693.2857097505314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80619.40298507463,
            "unit": "ns",
            "range": "± 3805.4681074686005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66303.57142857143,
            "unit": "ns",
            "range": "± 1906.418426508519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82774.22680412371,
            "unit": "ns",
            "range": "± 12449.642551348908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3859.574468085106,
            "unit": "ns",
            "range": "± 626.8746764595562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15968.817204301075,
            "unit": "ns",
            "range": "± 1240.2645663258318"
          }
        ]
      }
    ]
  }
}