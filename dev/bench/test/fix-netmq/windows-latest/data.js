window.BENCHMARK_DATA = {
  "lastUpdate": 1703035417880,
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
      }
    ]
  }
}