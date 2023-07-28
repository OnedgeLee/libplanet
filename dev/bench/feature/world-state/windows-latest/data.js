window.BENCHMARK_DATA = {
  "lastUpdate": 1690509649464,
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
          "id": "23389e4a9434ef2edc4c6b42aa9702ad76590b28",
          "message": "rename: Rename IAccountStateDelta as IAccount\n\nCo-authored-by: Say Cheong <greymistcube@gmail.com>\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>",
          "timestamp": "2023-07-28T09:21:01+09:00",
          "tree_id": "a6bf1287a592e819b42e563dee9a79f3d2376684",
          "url": "https://github.com/OnedgeLee/libplanet/commit/23389e4a9434ef2edc4c6b42aa9702ad76590b28"
        },
        "date": 1690504714798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356081.25,
            "unit": "ns",
            "range": "± 25532.02482504407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2518768.2926829266,
            "unit": "ns",
            "range": "± 89988.66161640696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1807295.7894736843,
            "unit": "ns",
            "range": "± 113085.62084393106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4832231.578947368,
            "unit": "ns",
            "range": "± 245863.305224957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48687.096774193546,
            "unit": "ns",
            "range": "± 2962.3810123399194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7346073.076923077,
            "unit": "ns",
            "range": "± 177485.7009625109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20298420,
            "unit": "ns",
            "range": "± 147701.3018609808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50260400,
            "unit": "ns",
            "range": "± 847979.0285479604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104084153.33333333,
            "unit": "ns",
            "range": "± 1065324.558772494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203495285.7142857,
            "unit": "ns",
            "range": "± 1774092.607008371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4863280.78125,
            "unit": "ns",
            "range": "± 20545.054954442316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549175.4296875,
            "unit": "ns",
            "range": "± 10101.331463397171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1193574.7916666667,
            "unit": "ns",
            "range": "± 5664.477194576346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667429.5703125,
            "unit": "ns",
            "range": "± 4339.753617506239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857953.4700520834,
            "unit": "ns",
            "range": "± 2181.5055259867004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778768.69140625,
            "unit": "ns",
            "range": "± 2708.483108297215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3275687.1794871795,
            "unit": "ns",
            "range": "± 105767.27973663685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506856.25,
            "unit": "ns",
            "range": "± 67238.02464627686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4183761.290322581,
            "unit": "ns",
            "range": "± 123361.48150164042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3709581.8181818184,
            "unit": "ns",
            "range": "± 119246.8551049934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6225275.862068965,
            "unit": "ns",
            "range": "± 164863.99514918873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265620.45454545453,
            "unit": "ns",
            "range": "± 9785.337382817224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265407.14285714284,
            "unit": "ns",
            "range": "± 10786.470602191806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235933.33333333334,
            "unit": "ns",
            "range": "± 11379.866982922937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179760,
            "unit": "ns",
            "range": "± 71707.90751374635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3785738.4615384615,
            "unit": "ns",
            "range": "± 48133.071417712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21891.489361702126,
            "unit": "ns",
            "range": "± 1884.495858225896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91802.35294117648,
            "unit": "ns",
            "range": "± 4954.218415859844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74246.26865671642,
            "unit": "ns",
            "range": "± 3512.5458417458904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94857.44680851063,
            "unit": "ns",
            "range": "± 13678.957148844935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5384.375,
            "unit": "ns",
            "range": "± 959.9701886818646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18889.583333333332,
            "unit": "ns",
            "range": "± 2031.047392054634"
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
          "id": "e0b6de2278693ccbfdfa4f66f4c6307f32f92f8c",
          "message": "document: Update changelog",
          "timestamp": "2023-07-28T10:42:35+09:00",
          "tree_id": "080ed5e469a3c9a1fcd2a100fe1c98e6805325aa",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e0b6de2278693ccbfdfa4f66f4c6307f32f92f8c"
        },
        "date": 1690509610994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410400,
            "unit": "ns",
            "range": "± 20310.55320341057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2415768.918918919,
            "unit": "ns",
            "range": "± 81022.59574353948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1863055.1724137932,
            "unit": "ns",
            "range": "± 53038.595018876156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4745977.659574468,
            "unit": "ns",
            "range": "± 269627.6046595814"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42656.02409638554,
            "unit": "ns",
            "range": "± 2274.5328867859475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6906293.333333333,
            "unit": "ns",
            "range": "± 30809.633620176723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17713433.333333332,
            "unit": "ns",
            "range": "± 153849.39605557985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45636626.666666664,
            "unit": "ns",
            "range": "± 347209.57126921543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89493320,
            "unit": "ns",
            "range": "± 578537.3653817505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178162680,
            "unit": "ns",
            "range": "± 1908171.616346017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902745.883413462,
            "unit": "ns",
            "range": "± 6094.20499564926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539798.9955357143,
            "unit": "ns",
            "range": "± 2417.733256579994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147859.779575893,
            "unit": "ns",
            "range": "± 1521.144563243277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579455.703125,
            "unit": "ns",
            "range": "± 1664.4111165994984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847038.3037860577,
            "unit": "ns",
            "range": "± 847.512128356683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742985.9793526785,
            "unit": "ns",
            "range": "± 979.7610348048822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2886270.9677419355,
            "unit": "ns",
            "range": "± 78990.9327857672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3101400,
            "unit": "ns",
            "range": "± 31690.98564936994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3836650,
            "unit": "ns",
            "range": "± 47332.66882884947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3433609.375,
            "unit": "ns",
            "range": "± 104148.33050982561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5824291.666666667,
            "unit": "ns",
            "range": "± 151204.04847543704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254469.44444444444,
            "unit": "ns",
            "range": "± 8423.227051923388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238883.63636363635,
            "unit": "ns",
            "range": "± 8764.760325817448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219456.1797752809,
            "unit": "ns",
            "range": "± 12041.263855594265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891213.3333333335,
            "unit": "ns",
            "range": "± 30489.339276603052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3545714.285714286,
            "unit": "ns",
            "range": "± 35051.014626878154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16680.61224489796,
            "unit": "ns",
            "range": "± 1613.5162449873899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81063.2530120482,
            "unit": "ns",
            "range": "± 4332.513805428509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67737.03703703704,
            "unit": "ns",
            "range": "± 1656.9546087622846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86172.44897959183,
            "unit": "ns",
            "range": "± 15265.227520749788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4127.368421052632,
            "unit": "ns",
            "range": "± 819.2422686463647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16960.416666666668,
            "unit": "ns",
            "range": "± 2072.399025115155"
          }
        ]
      }
    ]
  }
}