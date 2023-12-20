window.BENCHMARK_DATA = {
  "lastUpdate": 1703094224088,
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
          "id": "d2be44f0b6d4002e9614ff63efa0f5a88983720a",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:09:37+09:00",
          "tree_id": "43b1b788d59bd89a60a829c1f1f8d8b336564d17",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d2be44f0b6d4002e9614ff63efa0f5a88983720a"
        },
        "date": 1703031728673,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993253.6082474227,
            "unit": "ns",
            "range": "± 107261.99919458863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1750745.7142857143,
            "unit": "ns",
            "range": "± 85228.79299438368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535452.5773195876,
            "unit": "ns",
            "range": "± 148352.969505152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10846068.085106382,
            "unit": "ns",
            "range": "± 1037881.1405846239"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34161.03896103896,
            "unit": "ns",
            "range": "± 1763.0084816463022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5049973.333333333,
            "unit": "ns",
            "range": "± 36617.12063788637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13287246.666666666,
            "unit": "ns",
            "range": "± 156230.9090813369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32439628.57142857,
            "unit": "ns",
            "range": "± 342561.0634584763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67452800,
            "unit": "ns",
            "range": "± 482793.22844109096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134596226.66666666,
            "unit": "ns",
            "range": "± 1044159.8998146559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3259557.0052083335,
            "unit": "ns",
            "range": "± 6014.287912821209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039323.5807291666,
            "unit": "ns",
            "range": "± 3179.854225480213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734681.9185697115,
            "unit": "ns",
            "range": "± 3665.571882822148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936592.6199776786,
            "unit": "ns",
            "range": "± 2771.985597009861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 593910.3580729166,
            "unit": "ns",
            "range": "± 2165.33950671688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554546.8524639423,
            "unit": "ns",
            "range": "± 899.7225776714926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2203569.565217391,
            "unit": "ns",
            "range": "± 83964.30887139612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223087.654320988,
            "unit": "ns",
            "range": "± 107158.99796880808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2728561.290322581,
            "unit": "ns",
            "range": "± 59648.57459833305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2738089.3333333335,
            "unit": "ns",
            "range": "± 120924.34039886635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12434371.42857143,
            "unit": "ns",
            "range": "± 1457514.4281569612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171570.27027027027,
            "unit": "ns",
            "range": "± 8251.653711047818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165797.4358974359,
            "unit": "ns",
            "range": "± 8557.976067911992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139531.57894736843,
            "unit": "ns",
            "range": "± 4566.926061998489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2907846.6666666665,
            "unit": "ns",
            "range": "± 38120.29580657727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2526940,
            "unit": "ns",
            "range": "± 38313.79460641894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10419.565217391304,
            "unit": "ns",
            "range": "± 1379.3005976062996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52218.681318681316,
            "unit": "ns",
            "range": "± 4370.149046222872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43477.19298245614,
            "unit": "ns",
            "range": "± 1833.6164055786087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59501.0101010101,
            "unit": "ns",
            "range": "± 13169.448990917832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2580.9278350515465,
            "unit": "ns",
            "range": "± 468.67739987611867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9968.539325842698,
            "unit": "ns",
            "range": "± 935.9724531710294"
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
          "id": "79e3da1f81939b2cbff2072ceaf3e826c9605ae1",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T09:46:12+09:00",
          "tree_id": "818a89bc250a78dac60ec9541135a29007fc1f48",
          "url": "https://github.com/OnedgeLee/libplanet/commit/79e3da1f81939b2cbff2072ceaf3e826c9605ae1"
        },
        "date": 1703033907031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979760.6060606061,
            "unit": "ns",
            "range": "± 103488.75500204762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1714683.0188679246,
            "unit": "ns",
            "range": "± 70987.62009037766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555872,
            "unit": "ns",
            "range": "± 200096.14208366856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10836780,
            "unit": "ns",
            "range": "± 989288.2809078317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33637.80487804878,
            "unit": "ns",
            "range": "± 1792.6213817333307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4965450,
            "unit": "ns",
            "range": "± 39366.83004373489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13077814.285714285,
            "unit": "ns",
            "range": "± 112533.78882084094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32281420,
            "unit": "ns",
            "range": "± 511902.1993645717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66886220,
            "unit": "ns",
            "range": "± 680805.5189049429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130889433.33333333,
            "unit": "ns",
            "range": "± 802480.3581634227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3359413.1975446427,
            "unit": "ns",
            "range": "± 17391.782936297765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050870.0892857143,
            "unit": "ns",
            "range": "± 3132.738470945659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747110.68359375,
            "unit": "ns",
            "range": "± 1968.7926690631054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982238.9229910714,
            "unit": "ns",
            "range": "± 2925.3070762189554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611062.6302083334,
            "unit": "ns",
            "range": "± 1460.8489243768079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552492.6548549107,
            "unit": "ns",
            "range": "± 1201.6160092333498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2110525.925925926,
            "unit": "ns",
            "range": "± 59070.54187476967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2203045.714285714,
            "unit": "ns",
            "range": "± 70605.58361046802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2850284.6153846155,
            "unit": "ns",
            "range": "± 37397.25582966942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2855323.188405797,
            "unit": "ns",
            "range": "± 136665.12544615756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12436379.787234042,
            "unit": "ns",
            "range": "± 1590693.627265669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172176.82926829267,
            "unit": "ns",
            "range": "± 8661.968794828897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167409.375,
            "unit": "ns",
            "range": "± 9717.592057435671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143295.45454545456,
            "unit": "ns",
            "range": "± 3350.405415799176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2834642.8571428573,
            "unit": "ns",
            "range": "± 41887.022302410536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2437064.285714286,
            "unit": "ns",
            "range": "± 34342.67601111474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10347.252747252747,
            "unit": "ns",
            "range": "± 1354.6086486378974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54607.608695652176,
            "unit": "ns",
            "range": "± 4774.065323529847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44876.74418604651,
            "unit": "ns",
            "range": "± 2440.5242647288933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58079.38144329897,
            "unit": "ns",
            "range": "± 15385.104661546355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2348.936170212766,
            "unit": "ns",
            "range": "± 370.0464024524096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9892.045454545454,
            "unit": "ns",
            "range": "± 1364.3424243142554"
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
          "id": "a9f38c5e8f9827f6c3367596653dc38ee471a083",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T10:10:26+09:00",
          "tree_id": "e1e2b0830d5e102edfe9c47ff470680fe5c0bdcb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9f38c5e8f9827f6c3367596653dc38ee471a083"
        },
        "date": 1703035377724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004008.1632653062,
            "unit": "ns",
            "range": "± 134701.29969254072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1736016,
            "unit": "ns",
            "range": "± 83886.045677809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1547537,
            "unit": "ns",
            "range": "± 171111.18935423897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10972533.333333334,
            "unit": "ns",
            "range": "± 900471.994993801"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35364.93506493507,
            "unit": "ns",
            "range": "± 1743.4664678953031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5168560,
            "unit": "ns",
            "range": "± 53466.235005976305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13828826.666666666,
            "unit": "ns",
            "range": "± 143608.15469616652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32813080,
            "unit": "ns",
            "range": "± 273759.05516660865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65826650,
            "unit": "ns",
            "range": "± 679632.3448974226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135123560,
            "unit": "ns",
            "range": "± 1201162.5991989118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3345217.215401786,
            "unit": "ns",
            "range": "± 3874.4775930969395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058829.6424278845,
            "unit": "ns",
            "range": "± 4214.518000233905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744146.3309151785,
            "unit": "ns",
            "range": "± 2007.9673792629108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990878.013392857,
            "unit": "ns",
            "range": "± 3040.298821239951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610578.02734375,
            "unit": "ns",
            "range": "± 845.099354006192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558931.2875600961,
            "unit": "ns",
            "range": "± 1005.1113063691338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140912,
            "unit": "ns",
            "range": "± 35819.22575005402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307112.676056338,
            "unit": "ns",
            "range": "± 107953.2212575395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2950393.75,
            "unit": "ns",
            "range": "± 90456.35531980015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2902576.3157894737,
            "unit": "ns",
            "range": "± 146761.84505828578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12714126.041666666,
            "unit": "ns",
            "range": "± 1679197.7164075638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181241.46341463414,
            "unit": "ns",
            "range": "± 9415.825281578502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174010.52631578947,
            "unit": "ns",
            "range": "± 5898.638847738139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144278.125,
            "unit": "ns",
            "range": "± 4493.34521372189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2865820,
            "unit": "ns",
            "range": "± 40907.47748622145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535178.5714285714,
            "unit": "ns",
            "range": "± 40393.014982056724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12434.444444444445,
            "unit": "ns",
            "range": "± 1489.6014934332109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60064.444444444445,
            "unit": "ns",
            "range": "± 5716.903992627815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46674.73684210526,
            "unit": "ns",
            "range": "± 3345.4309400572074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68220.20202020202,
            "unit": "ns",
            "range": "± 16592.978474422514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2603.191489361702,
            "unit": "ns",
            "range": "± 567.2897512402936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11152.631578947368,
            "unit": "ns",
            "range": "± 1845.3992305917864"
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
          "id": "29841ffe3333f99c0d030304d681fb4de4a0fcc3",
          "message": "test: Use NetMQConfigFixture to cleanup NetMQTransport on tests",
          "timestamp": "2023-12-20T12:01:47+09:00",
          "tree_id": "2064cf1d1f036048323a5446513a98801372d083",
          "url": "https://github.com/OnedgeLee/libplanet/commit/29841ffe3333f99c0d030304d681fb4de4a0fcc3"
        },
        "date": 1703042047611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1053919,
            "unit": "ns",
            "range": "± 160540.7539404172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1840593.8775510204,
            "unit": "ns",
            "range": "± 72970.08636010623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683730.612244898,
            "unit": "ns",
            "range": "± 164281.81934295595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10899041.304347826,
            "unit": "ns",
            "range": "± 833160.3777055768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34371.25,
            "unit": "ns",
            "range": "± 1714.6571233435889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5254266.666666667,
            "unit": "ns",
            "range": "± 52616.70927792895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13133884.615384616,
            "unit": "ns",
            "range": "± 135723.00128173956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31825166.666666668,
            "unit": "ns",
            "range": "± 373362.71270454314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64609257.14285714,
            "unit": "ns",
            "range": "± 214729.2238155756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130326385.71428572,
            "unit": "ns",
            "range": "± 887493.735498708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355831.417410714,
            "unit": "ns",
            "range": "± 13903.230157499493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053416.6927083333,
            "unit": "ns",
            "range": "± 7788.795828689076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741851.0286458334,
            "unit": "ns",
            "range": "± 2927.959930765776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954424.453125,
            "unit": "ns",
            "range": "± 5413.354231060083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603056.7452566965,
            "unit": "ns",
            "range": "± 731.9811148388967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567349.8828125,
            "unit": "ns",
            "range": "± 2128.1783577831993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2140343.2835820895,
            "unit": "ns",
            "range": "± 93750.62056179358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284306.6666666665,
            "unit": "ns",
            "range": "± 37209.78110018667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2702753.846153846,
            "unit": "ns",
            "range": "± 36082.16584834802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2915233.3333333335,
            "unit": "ns",
            "range": "± 85596.83499358805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12330016.129032258,
            "unit": "ns",
            "range": "± 1611742.5194416621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168425.67567567568,
            "unit": "ns",
            "range": "± 8397.750201174005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157405.7471264368,
            "unit": "ns",
            "range": "± 8600.788989251916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138948,
            "unit": "ns",
            "range": "± 3259.872185633459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2773254.8387096776,
            "unit": "ns",
            "range": "± 77858.57194815771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2451235.714285714,
            "unit": "ns",
            "range": "± 36833.04551293908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9986.95652173913,
            "unit": "ns",
            "range": "± 1030.1197403251476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56022.10526315789,
            "unit": "ns",
            "range": "± 6427.950584144688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46364.86486486487,
            "unit": "ns",
            "range": "± 2341.257853730067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51923.655913978495,
            "unit": "ns",
            "range": "± 9746.308084173323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2246.808510638298,
            "unit": "ns",
            "range": "± 287.63108378076544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10544.565217391304,
            "unit": "ns",
            "range": "± 1535.8974990435017"
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
          "id": "dcf9af1d7b33ed3fae96166a9477049cf99232c0",
          "message": "test: Move GossipConsensusMessageCommunicatorTest port number to avoid collision",
          "timestamp": "2023-12-20T12:52:35+09:00",
          "tree_id": "f017054cfa0654b669128d937a55937cce1d598c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dcf9af1d7b33ed3fae96166a9477049cf99232c0"
        },
        "date": 1703045002324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970911,
            "unit": "ns",
            "range": "± 112383.94857798776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1688177.6119402985,
            "unit": "ns",
            "range": "± 79112.32486614153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499068.75,
            "unit": "ns",
            "range": "± 172058.81632835846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10921709.677419355,
            "unit": "ns",
            "range": "± 892746.5102344364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33777.86885245902,
            "unit": "ns",
            "range": "± 1530.4826196923398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5152806.666666667,
            "unit": "ns",
            "range": "± 36556.40390775146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12701680,
            "unit": "ns",
            "range": "± 85667.80692218718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31659093.333333332,
            "unit": "ns",
            "range": "± 276230.6760317405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64008773.333333336,
            "unit": "ns",
            "range": "± 313288.5353487299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127966092.85714285,
            "unit": "ns",
            "range": "± 582445.3522920356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3351048.858173077,
            "unit": "ns",
            "range": "± 5925.765268904448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076632.8515625,
            "unit": "ns",
            "range": "± 2435.111856037116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745661.4908854166,
            "unit": "ns",
            "range": "± 1033.7766308082607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913031.8098958333,
            "unit": "ns",
            "range": "± 5377.951871003648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642867.5641741072,
            "unit": "ns",
            "range": "± 1668.320349268221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558543.73046875,
            "unit": "ns",
            "range": "± 3019.543377190825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186088.2352941176,
            "unit": "ns",
            "range": "± 64465.2914116693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2188703.2258064514,
            "unit": "ns",
            "range": "± 55809.83475978028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2726662.5,
            "unit": "ns",
            "range": "± 68451.16197762429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2779514.285714286,
            "unit": "ns",
            "range": "± 41979.03977248384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12313253.76344086,
            "unit": "ns",
            "range": "± 1557265.4350243418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166308.62068965516,
            "unit": "ns",
            "range": "± 7219.279365376707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160403.75,
            "unit": "ns",
            "range": "± 8394.836323522584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141746.15384615384,
            "unit": "ns",
            "range": "± 3865.874366218413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2751828.5714285714,
            "unit": "ns",
            "range": "± 32116.19358065165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458614.285714286,
            "unit": "ns",
            "range": "± 27179.598036956864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10103.191489361701,
            "unit": "ns",
            "range": "± 1082.5549356702388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53497.82608695652,
            "unit": "ns",
            "range": "± 6143.413846039318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43318.75,
            "unit": "ns",
            "range": "± 2004.8255277767682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55074.74747474748,
            "unit": "ns",
            "range": "± 15371.039184090503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2638.7755102040815,
            "unit": "ns",
            "range": "± 565.6640387676166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13047.422680412372,
            "unit": "ns",
            "range": "± 1942.4046943321503"
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
          "id": "2e49acb146b21689f7bfa37b00b7f9c4a3cda3e2",
          "message": "test: Remove Transport dispose",
          "timestamp": "2023-12-20T17:56:45+09:00",
          "tree_id": "ec14eccfd23772f125e712e59e96453e0e0bbe2d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2e49acb146b21689f7bfa37b00b7f9c4a3cda3e2"
        },
        "date": 1703063317279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 939327.2727272727,
            "unit": "ns",
            "range": "± 79428.20634317666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1682315.6862745099,
            "unit": "ns",
            "range": "± 67728.39101159577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1491470,
            "unit": "ns",
            "range": "± 149546.8181141973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10853249.47368421,
            "unit": "ns",
            "range": "± 986501.4177420967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33506.779661016946,
            "unit": "ns",
            "range": "± 1496.18646343706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4932300,
            "unit": "ns",
            "range": "± 24895.581937363906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12907842.857142856,
            "unit": "ns",
            "range": "± 174587.2350355622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31627464.285714287,
            "unit": "ns",
            "range": "± 115830.51017720715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63680385.71428572,
            "unit": "ns",
            "range": "± 379803.08026689274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125986966.66666667,
            "unit": "ns",
            "range": "± 619689.0402989766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254319.396033654,
            "unit": "ns",
            "range": "± 4592.560459974985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041960.5919471154,
            "unit": "ns",
            "range": "± 3012.9148481535385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733514.7686298077,
            "unit": "ns",
            "range": "± 1112.3494801180377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1899804.3619791667,
            "unit": "ns",
            "range": "± 1795.9995461330957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604109.2982700893,
            "unit": "ns",
            "range": "± 1641.3817084584568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 545018.6104910715,
            "unit": "ns",
            "range": "± 856.3990285718972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165876.470588235,
            "unit": "ns",
            "range": "± 68547.86453727294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2182127.272727273,
            "unit": "ns",
            "range": "± 34185.37952341868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2709261.290322581,
            "unit": "ns",
            "range": "± 80301.09039284317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2887303,
            "unit": "ns",
            "range": "± 358418.260959021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12358573.40425532,
            "unit": "ns",
            "range": "± 1672249.4457630874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163976.2711864407,
            "unit": "ns",
            "range": "± 7212.951449638706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156330.18867924527,
            "unit": "ns",
            "range": "± 5424.325016699539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137200,
            "unit": "ns",
            "range": "± 1898.6837546047525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2816680,
            "unit": "ns",
            "range": "± 33044.67106379311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2457660.5263157897,
            "unit": "ns",
            "range": "± 47284.551091554466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9709.09090909091,
            "unit": "ns",
            "range": "± 830.1275852135606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49595.348837209305,
            "unit": "ns",
            "range": "± 2770.9801611255853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44319.230769230766,
            "unit": "ns",
            "range": "± 1163.3638229786006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48920.4081632653,
            "unit": "ns",
            "range": "± 9106.05280952343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2233.673469387755,
            "unit": "ns",
            "range": "± 340.69180000087954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9142.045454545454,
            "unit": "ns",
            "range": "± 919.9852061415613"
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
          "id": "484bd89379abe12ffe00c621c9599ec1dcc46b21",
          "message": "test: Add missing collection",
          "timestamp": "2023-12-20T18:02:15+09:00",
          "tree_id": "394e27468b5a33b7680bf7949241538ab06bfb9b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/484bd89379abe12ffe00c621c9599ec1dcc46b21"
        },
        "date": 1703063680747,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981045.6521739131,
            "unit": "ns",
            "range": "± 98274.37249141296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1712782.0895522388,
            "unit": "ns",
            "range": "± 80592.15114308991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524107.4468085107,
            "unit": "ns",
            "range": "± 138059.42793910703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11001396.93877551,
            "unit": "ns",
            "range": "± 966555.5220508685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34642.1686746988,
            "unit": "ns",
            "range": "± 1734.0296001304907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4956993.333333333,
            "unit": "ns",
            "range": "± 46750.6526565087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13117050,
            "unit": "ns",
            "range": "± 95172.99835239307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31680321.42857143,
            "unit": "ns",
            "range": "± 321565.67262875993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63189260,
            "unit": "ns",
            "range": "± 480429.689816463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125639653.84615384,
            "unit": "ns",
            "range": "± 723688.4626865631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254034.933035714,
            "unit": "ns",
            "range": "± 10868.520369870479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074930.4537259615,
            "unit": "ns",
            "range": "± 1676.2512988769643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740288.0013020834,
            "unit": "ns",
            "range": "± 2912.393889109015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914737.3046875,
            "unit": "ns",
            "range": "± 9972.902679437637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600699.2112379808,
            "unit": "ns",
            "range": "± 2411.4334830627063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570586.0652043269,
            "unit": "ns",
            "range": "± 1274.3670503036394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2070592.3076923077,
            "unit": "ns",
            "range": "± 27500.923061431396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2186410.2040816327,
            "unit": "ns",
            "range": "± 77286.5481096645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2773421.7391304346,
            "unit": "ns",
            "range": "± 105104.76025385018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2700482.6923076925,
            "unit": "ns",
            "range": "± 110195.90170870088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12357028.260869564,
            "unit": "ns",
            "range": "± 1446212.656328389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169770,
            "unit": "ns",
            "range": "± 7289.427523694052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160562.06896551725,
            "unit": "ns",
            "range": "± 6609.026989621565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139162.5,
            "unit": "ns",
            "range": "± 2706.9971062661543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2793921.4285714286,
            "unit": "ns",
            "range": "± 37026.02366675942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2440400,
            "unit": "ns",
            "range": "± 30845.235797908426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9525.842696629214,
            "unit": "ns",
            "range": "± 943.9433835448502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53229.5918367347,
            "unit": "ns",
            "range": "± 6095.430250177427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43843.75,
            "unit": "ns",
            "range": "± 1332.6997822755955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51517.17171717172,
            "unit": "ns",
            "range": "± 9632.735856570407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2479.591836734694,
            "unit": "ns",
            "range": "± 347.8828999787464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9791.208791208792,
            "unit": "ns",
            "range": "± 905.3726490786175"
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
          "id": "ada552213e6e7433859daf1ccdcc957d7b2eb1f1",
          "message": "tmp: ignore socket colliding tests",
          "timestamp": "2023-12-20T18:41:50+09:00",
          "tree_id": "de87cd28c42fefaef5cc162251cd3e3640256264",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ada552213e6e7433859daf1ccdcc957d7b2eb1f1"
        },
        "date": 1703065982348,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951379.5918367347,
            "unit": "ns",
            "range": "± 93624.98450490137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1680503.2258064516,
            "unit": "ns",
            "range": "± 50552.4973591544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532120.2127659575,
            "unit": "ns",
            "range": "± 181930.2883032531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10764033.333333334,
            "unit": "ns",
            "range": "± 1094459.610606988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34548.61111111111,
            "unit": "ns",
            "range": "± 1567.7195293456373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5121392.857142857,
            "unit": "ns",
            "range": "± 51409.80846680336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13540161.538461538,
            "unit": "ns",
            "range": "± 109123.22192871032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32292857.14285714,
            "unit": "ns",
            "range": "± 386037.48067191156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65450978.571428575,
            "unit": "ns",
            "range": "± 556026.9088377364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132122860,
            "unit": "ns",
            "range": "± 1025692.9175649295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3234657.8645833335,
            "unit": "ns",
            "range": "± 23541.39046240945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047793.0078125,
            "unit": "ns",
            "range": "± 7074.362920801565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730811.30859375,
            "unit": "ns",
            "range": "± 824.4194334605754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1992983.2552083333,
            "unit": "ns",
            "range": "± 3341.493470048208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618394.453125,
            "unit": "ns",
            "range": "± 933.3486828060845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568373.3468191965,
            "unit": "ns",
            "range": "± 705.7725246287587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137421.875,
            "unit": "ns",
            "range": "± 59534.49384735953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260331.914893617,
            "unit": "ns",
            "range": "± 87684.86584597928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2777458.9743589745,
            "unit": "ns",
            "range": "± 88920.0845169376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2788597.311827957,
            "unit": "ns",
            "range": "± 166825.8761543056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12411480,
            "unit": "ns",
            "range": "± 1463071.6889985043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178561.29032258064,
            "unit": "ns",
            "range": "± 5373.681383642243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168727.4193548387,
            "unit": "ns",
            "range": "± 6704.663641270162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144575,
            "unit": "ns",
            "range": "± 3155.6680339891172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3010666.6666666665,
            "unit": "ns",
            "range": "± 61966.17673233947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506892.8571428573,
            "unit": "ns",
            "range": "± 31128.6774604955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11887.09677419355,
            "unit": "ns",
            "range": "± 1462.742050311794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57127.27272727273,
            "unit": "ns",
            "range": "± 8612.48285069017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43622.97297297297,
            "unit": "ns",
            "range": "± 1468.6820714596563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58018.36734693877,
            "unit": "ns",
            "range": "± 11909.134906204587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2212.7659574468084,
            "unit": "ns",
            "range": "± 321.7004692985744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9633.720930232557,
            "unit": "ns",
            "range": "± 982.1477623485088"
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
          "id": "2c202144fbcc5fffef6be1361b4428546023eb86",
          "message": "tmp: ignore socket colliding tests",
          "timestamp": "2023-12-20T18:53:40+09:00",
          "tree_id": "a8d146ea77a8f06fa1f43d666b5bb164bff62a9a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2c202144fbcc5fffef6be1361b4428546023eb86"
        },
        "date": 1703066773559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995784,
            "unit": "ns",
            "range": "± 130994.556691598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1715395.652173913,
            "unit": "ns",
            "range": "± 65795.77817094934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1469221.0526315789,
            "unit": "ns",
            "range": "± 118099.96747683341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10951378.94736842,
            "unit": "ns",
            "range": "± 921764.3128740892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33857.5,
            "unit": "ns",
            "range": "± 1777.7652733385833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4935060,
            "unit": "ns",
            "range": "± 28069.60226701781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13067566.666666666,
            "unit": "ns",
            "range": "± 114127.08246678767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32164053.333333332,
            "unit": "ns",
            "range": "± 255064.96894115504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65005566.666666664,
            "unit": "ns",
            "range": "± 669004.1839145987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134604091.3043478,
            "unit": "ns",
            "range": "± 3280487.9018930104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3261455.8072916665,
            "unit": "ns",
            "range": "± 18527.937014274983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076758.7890625,
            "unit": "ns",
            "range": "± 6621.4164451868755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733351.4778645834,
            "unit": "ns",
            "range": "± 4143.460050484414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959375.8072916667,
            "unit": "ns",
            "range": "± 13631.755007063253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609685.37109375,
            "unit": "ns",
            "range": "± 2161.0895839054356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572135.791015625,
            "unit": "ns",
            "range": "± 939.9574904187034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2192617.8571428573,
            "unit": "ns",
            "range": "± 61933.57285907173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273550.819672131,
            "unit": "ns",
            "range": "± 102574.5885083156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2845060,
            "unit": "ns",
            "range": "± 86861.6075823771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2998312.121212121,
            "unit": "ns",
            "range": "± 368816.9587142793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12675770.52631579,
            "unit": "ns",
            "range": "± 1433995.1071813086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175282.75862068965,
            "unit": "ns",
            "range": "± 10978.088185494797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168836.61971830987,
            "unit": "ns",
            "range": "± 7409.361635055628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142754.2857142857,
            "unit": "ns",
            "range": "± 3608.6776832863225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2829807.1428571427,
            "unit": "ns",
            "range": "± 40886.549683911275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2497984,
            "unit": "ns",
            "range": "± 65408.560092187734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11379.12087912088,
            "unit": "ns",
            "range": "± 1305.6727923876795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55355.67010309279,
            "unit": "ns",
            "range": "± 7063.771553263952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45013.51351351351,
            "unit": "ns",
            "range": "± 1519.3496712157553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55888.541666666664,
            "unit": "ns",
            "range": "± 11739.926206095228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2336.3636363636365,
            "unit": "ns",
            "range": "± 292.8974628090149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10720.652173913044,
            "unit": "ns",
            "range": "± 1496.1149720377982"
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
          "id": "f4bacf20b29df602f3791750c9abc5b0d4b228c4",
          "message": "tmp: Exclude Net Tests",
          "timestamp": "2023-12-21T02:30:30+09:00",
          "tree_id": "4b2b0f390fd4449d9e3320ac2311dac09de570de",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f4bacf20b29df602f3791750c9abc5b0d4b228c4"
        },
        "date": 1703094196810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965909.1836734693,
            "unit": "ns",
            "range": "± 104397.81279726369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701875,
            "unit": "ns",
            "range": "± 65234.2178201224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1490368.4210526317,
            "unit": "ns",
            "range": "± 120444.53235884133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10868207.52688172,
            "unit": "ns",
            "range": "± 828838.2444640258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33525.8064516129,
            "unit": "ns",
            "range": "± 1529.6989400436967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5081621.428571428,
            "unit": "ns",
            "range": "± 18612.162217689336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12994223.333333334,
            "unit": "ns",
            "range": "± 100984.45754999464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33331273.333333332,
            "unit": "ns",
            "range": "± 220832.617501086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63807693.333333336,
            "unit": "ns",
            "range": "± 437640.7079307125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128317542.85714285,
            "unit": "ns",
            "range": "± 878819.1270232903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284522.237723214,
            "unit": "ns",
            "range": "± 8129.16249420586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058082.3660714286,
            "unit": "ns",
            "range": "± 2218.7903733352264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733246.4317908654,
            "unit": "ns",
            "range": "± 1552.4455787220807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967089.375,
            "unit": "ns",
            "range": "± 3660.1781104031593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609295.3543526785,
            "unit": "ns",
            "range": "± 969.6105578156772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559478.80859375,
            "unit": "ns",
            "range": "± 597.2206353257657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2049479.6296296297,
            "unit": "ns",
            "range": "± 57783.324550311685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208904,
            "unit": "ns",
            "range": "± 77513.76694049982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727866.6666666665,
            "unit": "ns",
            "range": "± 79488.58227848625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2885287.1428571427,
            "unit": "ns",
            "range": "± 93955.85035071553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12405577.659574468,
            "unit": "ns",
            "range": "± 1510099.3706642236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167875.75757575757,
            "unit": "ns",
            "range": "± 6773.638054559196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162494.02985074627,
            "unit": "ns",
            "range": "± 7140.662064988664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141662.5,
            "unit": "ns",
            "range": "± 3649.2777725009596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2833600,
            "unit": "ns",
            "range": "± 23869.855466675956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2454918.75,
            "unit": "ns",
            "range": "± 43174.20863972687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10286.021505376344,
            "unit": "ns",
            "range": "± 1215.3538935178562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52464.36781609195,
            "unit": "ns",
            "range": "± 3497.8058574807396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44136.95652173913,
            "unit": "ns",
            "range": "± 1574.9932903775493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56305.154639175256,
            "unit": "ns",
            "range": "± 10161.48130538002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2610.4166666666665,
            "unit": "ns",
            "range": "± 593.2034649908859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10235.106382978724,
            "unit": "ns",
            "range": "± 1286.2972989356474"
          }
        ]
      }
    ]
  }
}