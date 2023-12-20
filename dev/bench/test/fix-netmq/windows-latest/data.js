window.BENCHMARK_DATA = {
  "lastUpdate": 1703031443330,
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
          "id": "4774b2fb92086c01e8c9e8213a65a4d2f01f02c2",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:16:25+09:00",
          "tree_id": "50f73e555180028a42728c81e96951818d4421f5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4774b2fb92086c01e8c9e8213a65a4d2f01f02c2"
        },
        "date": 1703028543623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979442.7083333334,
            "unit": "ns",
            "range": "± 100845.21880980895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701578.2608695652,
            "unit": "ns",
            "range": "± 78982.92233426386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513251.01010101,
            "unit": "ns",
            "range": "± 135790.9388751766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10887770.833333334,
            "unit": "ns",
            "range": "± 932648.108505156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33212.048192771086,
            "unit": "ns",
            "range": "± 1516.0440812145664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5082453.333333333,
            "unit": "ns",
            "range": "± 38085.39027476222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12893960,
            "unit": "ns",
            "range": "± 90042.02828203538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 30958306.666666668,
            "unit": "ns",
            "range": "± 149664.3552690327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63225540,
            "unit": "ns",
            "range": "± 398972.651765936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129119342.85714285,
            "unit": "ns",
            "range": "± 821476.1223312821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3318326.4508928573,
            "unit": "ns",
            "range": "± 7040.276858528805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052349.4791666667,
            "unit": "ns",
            "range": "± 2174.7903277010582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721114.8813100961,
            "unit": "ns",
            "range": "± 1489.204580107827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1878264.760044643,
            "unit": "ns",
            "range": "± 3711.6294622405026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624995.21484375,
            "unit": "ns",
            "range": "± 887.6596920875455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 547870.8458533654,
            "unit": "ns",
            "range": "± 1405.0532608386754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119031.8181818184,
            "unit": "ns",
            "range": "± 29745.321942940496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2234876.8292682925,
            "unit": "ns",
            "range": "± 73394.4072269483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2686159.2592592593,
            "unit": "ns",
            "range": "± 68809.1466374105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2815691.1764705884,
            "unit": "ns",
            "range": "± 64388.339418868614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12359417.777777778,
            "unit": "ns",
            "range": "± 1517998.7595720962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163385.48387096773,
            "unit": "ns",
            "range": "± 7051.190964959447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154192.98245614034,
            "unit": "ns",
            "range": "± 5490.148958723473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145443.18181818182,
            "unit": "ns",
            "range": "± 5196.886264860363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761803.3333333335,
            "unit": "ns",
            "range": "± 28579.58478821319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2445478.5714285714,
            "unit": "ns",
            "range": "± 38792.84586247689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10120.833333333334,
            "unit": "ns",
            "range": "± 1485.5739041062222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47756.962025316454,
            "unit": "ns",
            "range": "± 2371.664110363352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42540,
            "unit": "ns",
            "range": "± 790.8404209627702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47971.42857142857,
            "unit": "ns",
            "range": "± 8926.654168229845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2286.813186813187,
            "unit": "ns",
            "range": "± 327.349215910943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8906.896551724138,
            "unit": "ns",
            "range": "± 677.6829716794206"
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
          "id": "810902c09a8787a1e4af817115fe28417c68d9f9",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T08:23:03+09:00",
          "tree_id": "195d92469a65ed7f608ebe30ce565dfa859ef16c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/810902c09a8787a1e4af817115fe28417c68d9f9"
        },
        "date": 1703028953561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980126.2626262626,
            "unit": "ns",
            "range": "± 108617.34986175805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1696178.3582089553,
            "unit": "ns",
            "range": "± 73799.80866767131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1487586.8686868686,
            "unit": "ns",
            "range": "± 166733.17719287163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10842991.578947369,
            "unit": "ns",
            "range": "± 974976.8826133565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33854.83870967742,
            "unit": "ns",
            "range": "± 1547.9947281812679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4853780,
            "unit": "ns",
            "range": "± 33300.21878950004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13027071.42857143,
            "unit": "ns",
            "range": "± 66247.1297325567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31787353.333333332,
            "unit": "ns",
            "range": "± 371134.0032669499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64227678.571428575,
            "unit": "ns",
            "range": "± 281825.9069233821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128467173.33333333,
            "unit": "ns",
            "range": "± 866992.1168422853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309337.950721154,
            "unit": "ns",
            "range": "± 18888.197442603454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050838.5026041667,
            "unit": "ns",
            "range": "± 3948.6246255571023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 718205.7161458334,
            "unit": "ns",
            "range": "± 1298.647603040896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914598.3854166667,
            "unit": "ns",
            "range": "± 2911.518394572765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616150.7254464285,
            "unit": "ns",
            "range": "± 1112.2557657768562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564113.6067708334,
            "unit": "ns",
            "range": "± 2734.320770265681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2082816.1290322582,
            "unit": "ns",
            "range": "± 61838.94725696308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2242057.1428571427,
            "unit": "ns",
            "range": "± 64598.91314745112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798381.25,
            "unit": "ns",
            "range": "± 48168.37439302541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2863960,
            "unit": "ns",
            "range": "± 81645.9539297781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12373773.626373626,
            "unit": "ns",
            "range": "± 1637166.7333696526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167430.86419753087,
            "unit": "ns",
            "range": "± 8167.858378658823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161970.76923076922,
            "unit": "ns",
            "range": "± 7545.833351031446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144485.7142857143,
            "unit": "ns",
            "range": "± 3799.484788242303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2792028.5714285714,
            "unit": "ns",
            "range": "± 29664.0789915612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2469773.3333333335,
            "unit": "ns",
            "range": "± 39435.9420302029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9938.297872340425,
            "unit": "ns",
            "range": "± 1541.4074271763984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52259.375,
            "unit": "ns",
            "range": "± 4627.323385125176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43413.88888888889,
            "unit": "ns",
            "range": "± 1262.0058360240375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49834.0206185567,
            "unit": "ns",
            "range": "± 9079.359451042626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2407.52688172043,
            "unit": "ns",
            "range": "± 283.31752011533115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9681.91489361702,
            "unit": "ns",
            "range": "± 1314.3511229498192"
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
          "id": "0a6a97d7e49fdc357cd6210a8b52536bcbb68f9c",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:03:12+09:00",
          "tree_id": "f321b807ef7505eab26a2d201a3578da9554b14b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0a6a97d7e49fdc357cd6210a8b52536bcbb68f9c"
        },
        "date": 1703031415459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1071103,
            "unit": "ns",
            "range": "± 148364.4212945294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1803692.857142857,
            "unit": "ns",
            "range": "± 87457.77170896898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1637791.4141414142,
            "unit": "ns",
            "range": "± 192195.2260073611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11140701.075268818,
            "unit": "ns",
            "range": "± 891959.8400121406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37765.93406593407,
            "unit": "ns",
            "range": "± 3588.7856126247184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5387057.142857143,
            "unit": "ns",
            "range": "± 76618.93433676234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13772346.153846154,
            "unit": "ns",
            "range": "± 127052.42104071725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34662128.571428575,
            "unit": "ns",
            "range": "± 220585.44281619668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69062406.66666667,
            "unit": "ns",
            "range": "± 644824.0496076281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140141130.76923078,
            "unit": "ns",
            "range": "± 986385.7227141717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3384964.3229166665,
            "unit": "ns",
            "range": "± 12954.29356063011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041384.4921875,
            "unit": "ns",
            "range": "± 2242.825199416912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755242.9408482143,
            "unit": "ns",
            "range": "± 853.6997496812166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959209.7916666667,
            "unit": "ns",
            "range": "± 14422.332215669792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609490.8333333334,
            "unit": "ns",
            "range": "± 868.506959097663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558515.7017299107,
            "unit": "ns",
            "range": "± 844.5845292602879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2334828.5714285714,
            "unit": "ns",
            "range": "± 66099.88993739286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2458923.3333333335,
            "unit": "ns",
            "range": "± 72868.235752001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2991714.285714286,
            "unit": "ns",
            "range": "± 48862.31609395869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3199421.875,
            "unit": "ns",
            "range": "± 89318.34596208791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12359281.52173913,
            "unit": "ns",
            "range": "± 1341199.3707396318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198027.1739130435,
            "unit": "ns",
            "range": "± 13275.045607511476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184136.81318681317,
            "unit": "ns",
            "range": "± 10244.860053175811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168387.11340206186,
            "unit": "ns",
            "range": "± 13114.959013054115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2955986.6666666665,
            "unit": "ns",
            "range": "± 41157.56945945088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2575907.1428571427,
            "unit": "ns",
            "range": "± 38842.43247325739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15608.510638297872,
            "unit": "ns",
            "range": "± 2486.854020492648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71966.49484536082,
            "unit": "ns",
            "range": "± 8424.031601272873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65905.10204081633,
            "unit": "ns",
            "range": "± 8302.966460930455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78678.02197802198,
            "unit": "ns",
            "range": "± 11647.93546034663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4593.81443298969,
            "unit": "ns",
            "range": "± 1078.9476386149852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14052.577319587628,
            "unit": "ns",
            "range": "± 2489.356207917402"
          }
        ]
      }
    ]
  }
}