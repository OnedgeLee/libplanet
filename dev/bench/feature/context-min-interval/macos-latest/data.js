window.BENCHMARK_DATA = {
  "lastUpdate": 1681950812601,
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
          "id": "23fe38423f0ca0a4e0651562690262ac04658dc4",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T13:54:50+09:00",
          "tree_id": "0501e9e753e591811ca8195fe422f2f2cb826f45",
          "url": "https://github.com/OnedgeLee/libplanet/commit/23fe38423f0ca0a4e0651562690262ac04658dc4"
        },
        "date": 1680153083700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8883188.833333334,
            "unit": "ns",
            "range": "± 113137.96839236765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22688012.35714286,
            "unit": "ns",
            "range": "± 227394.91997289215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57397374.13333333,
            "unit": "ns",
            "range": "± 669409.2682303519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116481983.71428572,
            "unit": "ns",
            "range": "± 1033948.9771703458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230990294,
            "unit": "ns",
            "range": "± 1824746.4548364365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65142.28947368421,
            "unit": "ns",
            "range": "± 6216.66062423463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245786.3431372549,
            "unit": "ns",
            "range": "± 10055.192132172411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242843.35454545455,
            "unit": "ns",
            "range": "± 10314.454839937875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223440.92424242425,
            "unit": "ns",
            "range": "± 13132.281551846096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13390004.233333332,
            "unit": "ns",
            "range": "± 218505.8493671007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10788548.923076924,
            "unit": "ns",
            "range": "± 80486.70247465471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23472.273684210526,
            "unit": "ns",
            "range": "± 2821.0473852510927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63921.044444444444,
            "unit": "ns",
            "range": "± 5304.576086613958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48608.38947368421,
            "unit": "ns",
            "range": "± 3501.7999362477917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104666.04210526316,
            "unit": "ns",
            "range": "± 21173.58781490882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5988.907216494846,
            "unit": "ns",
            "range": "± 542.7635704290403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20339.90860215054,
            "unit": "ns",
            "range": "± 2339.34615185228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749724.7021276595,
            "unit": "ns",
            "range": "± 169632.60198824632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3215078.825,
            "unit": "ns",
            "range": "± 112106.62170426398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2840018.71,
            "unit": "ns",
            "range": "± 208715.39746103808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7300964.58,
            "unit": "ns",
            "range": "± 279602.92572715925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3870390.8666666667,
            "unit": "ns",
            "range": "± 111426.3354074181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5992552.551724138,
            "unit": "ns",
            "range": "± 116906.06763905623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27298271.285714287,
            "unit": "ns",
            "range": "± 397503.13119703915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7527420,
            "unit": "ns",
            "range": "± 237568.12248514665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32733168.035714287,
            "unit": "ns",
            "range": "± 908702.7330710393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7027277.96484375,
            "unit": "ns",
            "range": "± 149748.01572865347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2189319.798063859,
            "unit": "ns",
            "range": "± 47449.53802619599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404003.9788876488,
            "unit": "ns",
            "range": "± 32813.45844573897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2803445.9244791665,
            "unit": "ns",
            "range": "± 57867.71490702831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000345.6786458333,
            "unit": "ns",
            "range": "± 13883.311339741602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831099.2856770833,
            "unit": "ns",
            "range": "± 13049.198557456995"
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
          "id": "b2ec5298ae32ef3401423877301164d08efbfa8e",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T14:37:27+09:00",
          "tree_id": "2b3d6df6add38815a8901dd4f3032bfb80548b4d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b2ec5298ae32ef3401423877301164d08efbfa8e"
        },
        "date": 1680155939176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9444069.057471264,
            "unit": "ns",
            "range": "± 1257842.1841953797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22349367.02173913,
            "unit": "ns",
            "range": "± 1256016.2992547175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56313021.736363634,
            "unit": "ns",
            "range": "± 2397776.0081269136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110796538.21794872,
            "unit": "ns",
            "range": "± 3807751.2635106286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226187181.72727272,
            "unit": "ns",
            "range": "± 5468264.503309169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72962.43258426966,
            "unit": "ns",
            "range": "± 6744.720365855452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237951.6978021978,
            "unit": "ns",
            "range": "± 26085.480778573517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233993.46703296702,
            "unit": "ns",
            "range": "± 21200.204353024816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250660.57692307694,
            "unit": "ns",
            "range": "± 44478.85556711957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13412873.19,
            "unit": "ns",
            "range": "± 1057818.4333934265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10877412.484848484,
            "unit": "ns",
            "range": "± 941230.4291343952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24692.1,
            "unit": "ns",
            "range": "± 4395.420632937129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69223.23076923077,
            "unit": "ns",
            "range": "± 10099.347024081335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62507.86170212766,
            "unit": "ns",
            "range": "± 2402.0956830807763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134371.56451612903,
            "unit": "ns",
            "range": "± 18586.374061571612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8573.147368421052,
            "unit": "ns",
            "range": "± 973.1932957113241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22579.593406593405,
            "unit": "ns",
            "range": "± 4724.385918891758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710296.857142857,
            "unit": "ns",
            "range": "± 25451.16489583424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828746.401639344,
            "unit": "ns",
            "range": "± 125948.26864903767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2406791.069892473,
            "unit": "ns",
            "range": "± 155322.3503606359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6161647.830508474,
            "unit": "ns",
            "range": "± 237578.77467732187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3803453.0430107526,
            "unit": "ns",
            "range": "± 357985.20786980167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5635772.16,
            "unit": "ns",
            "range": "± 574140.078834913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25528677.35365854,
            "unit": "ns",
            "range": "± 1353293.9658860029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6496651.382022472,
            "unit": "ns",
            "range": "± 358146.590043877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30294588.59574468,
            "unit": "ns",
            "range": "± 1853447.993366222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7530088.066852679,
            "unit": "ns",
            "range": "± 243908.9040523289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2127997.4053925304,
            "unit": "ns",
            "range": "± 112330.71717088923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1483131.0513916016,
            "unit": "ns",
            "range": "± 28288.05979047227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3053191.090125644,
            "unit": "ns",
            "range": "± 220707.28801708014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007793.1257496843,
            "unit": "ns",
            "range": "± 83821.84768661641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890937.3310746173,
            "unit": "ns",
            "range": "± 53737.972446031985"
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
          "id": "c20c237da9a315ffb10202910249c40668f954d3",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T15:38:55+09:00",
          "tree_id": "473b44237d5bc6d9231947d00dfe460c9d988801",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c20c237da9a315ffb10202910249c40668f954d3"
        },
        "date": 1680159606025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8405551.047619049,
            "unit": "ns",
            "range": "± 194760.60982510712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23982656.954545453,
            "unit": "ns",
            "range": "± 4064350.8410085198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53761280.928571425,
            "unit": "ns",
            "range": "± 486057.81145305437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105737915.03846154,
            "unit": "ns",
            "range": "± 1111716.4921995336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218735633.5,
            "unit": "ns",
            "range": "± 2676184.4232642115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73917.86666666667,
            "unit": "ns",
            "range": "± 8278.08241711173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242785.31764705884,
            "unit": "ns",
            "range": "± 15346.614090823457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256348.95555555556,
            "unit": "ns",
            "range": "± 37849.179203295425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253130.96666666667,
            "unit": "ns",
            "range": "± 31356.76939304398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 16129539.6,
            "unit": "ns",
            "range": "± 1558680.6684762514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12467553.904040404,
            "unit": "ns",
            "range": "± 1290641.7251424156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23690.98947368421,
            "unit": "ns",
            "range": "± 3330.202768392853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68763.21428571429,
            "unit": "ns",
            "range": "± 9932.91652848773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69731.94047619047,
            "unit": "ns",
            "range": "± 6517.148157349806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154605,
            "unit": "ns",
            "range": "± 28086.416176025436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9570.531914893618,
            "unit": "ns",
            "range": "± 1675.443317691901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24792.744680851065,
            "unit": "ns",
            "range": "± 4874.146065681153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606178.798969072,
            "unit": "ns",
            "range": "± 163545.2292944756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2834712.8448275863,
            "unit": "ns",
            "range": "± 123407.05200463829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500868.474226804,
            "unit": "ns",
            "range": "± 258672.27550533146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5962658.4,
            "unit": "ns",
            "range": "± 225212.14371821636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479151.761904762,
            "unit": "ns",
            "range": "± 124240.42728846347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5687597.119565218,
            "unit": "ns",
            "range": "± 794125.2148875343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26174554.94117647,
            "unit": "ns",
            "range": "± 794192.8477417674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6623241.638297873,
            "unit": "ns",
            "range": "± 398783.79229618376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33785258.38659794,
            "unit": "ns",
            "range": "± 3252508.2566789216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8073987.759703947,
            "unit": "ns",
            "range": "± 502567.2077470783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015025.3500976562,
            "unit": "ns",
            "range": "± 39203.053352861876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427335.1381225586,
            "unit": "ns",
            "range": "± 43578.37568640991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2962941.945678711,
            "unit": "ns",
            "range": "± 182861.80016163294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864710.2840234375,
            "unit": "ns",
            "range": "± 22421.20985375322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882769.3857660061,
            "unit": "ns",
            "range": "± 31743.251578466505"
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
          "id": "521ba16de332ff92e9280c02a8651e8f8fe35401",
          "message": "wip",
          "timestamp": "2023-04-17T11:08:02+09:00",
          "tree_id": "c0e809441d46a2cc676ec1eebd5ba3855d925a65",
          "url": "https://github.com/OnedgeLee/libplanet/commit/521ba16de332ff92e9280c02a8651e8f8fe35401"
        },
        "date": 1681698377363,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8153207.984848484,
            "unit": "ns",
            "range": "± 254613.5277126052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20474843.913043477,
            "unit": "ns",
            "range": "± 499310.1636418821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53817430.65384615,
            "unit": "ns",
            "range": "± 773982.919519637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105873581,
            "unit": "ns",
            "range": "± 1480533.1382113544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220833573.35714287,
            "unit": "ns",
            "range": "± 2595893.06180239"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75582.6978021978,
            "unit": "ns",
            "range": "± 7922.201325978055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394079.10215053766,
            "unit": "ns",
            "range": "± 28166.424447473142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352979.28571428574,
            "unit": "ns",
            "range": "± 16189.25766038919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343155.2,
            "unit": "ns",
            "range": "± 17892.19331100805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5709069.857142857,
            "unit": "ns",
            "range": "± 91594.59714739406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4227944.03125,
            "unit": "ns",
            "range": "± 127064.44744822044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27365.963917525773,
            "unit": "ns",
            "range": "± 4335.3293321217625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127152.97959183673,
            "unit": "ns",
            "range": "± 10512.757181212053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130799.25,
            "unit": "ns",
            "range": "± 3699.8517850694348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 274077.2604166667,
            "unit": "ns",
            "range": "± 23972.73274708264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9720.045454545454,
            "unit": "ns",
            "range": "± 2268.482987987865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23759.29292929293,
            "unit": "ns",
            "range": "± 4394.600372471313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574393.32,
            "unit": "ns",
            "range": "± 119987.28283463202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3047891.287878788,
            "unit": "ns",
            "range": "± 141673.43403179722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2658025.3469387754,
            "unit": "ns",
            "range": "± 265641.4909695351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6670807.107142857,
            "unit": "ns",
            "range": "± 186746.07799785427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315175.2073170734,
            "unit": "ns",
            "range": "± 117156.92575009042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588688.1842105263,
            "unit": "ns",
            "range": "± 153295.41905257845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4434637.596774193,
            "unit": "ns",
            "range": "± 201010.00452358695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4664695.532967033,
            "unit": "ns",
            "range": "± 259969.72845978526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8917507.657894736,
            "unit": "ns",
            "range": "± 305792.72371626546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7068303.354817708,
            "unit": "ns",
            "range": "± 180339.8877098429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930907.376953125,
            "unit": "ns",
            "range": "± 30285.560576572912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275748.585186298,
            "unit": "ns",
            "range": "± 3150.997142672773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2527902.505450581,
            "unit": "ns",
            "range": "± 92134.48183881122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775727.2914341518,
            "unit": "ns",
            "range": "± 6985.399644642848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693655.8817608173,
            "unit": "ns",
            "range": "± 3985.227338181901"
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
          "id": "0851c06b8f158020ff20e4250239d6795d5f40ce",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-19T22:28:06+09:00",
          "tree_id": "c0e809441d46a2cc676ec1eebd5ba3855d925a65",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0851c06b8f158020ff20e4250239d6795d5f40ce"
        },
        "date": 1681950779848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7703446.692307692,
            "unit": "ns",
            "range": "± 74863.41899907304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18744987.042857144,
            "unit": "ns",
            "range": "± 615121.1503700304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45993804.81818182,
            "unit": "ns",
            "range": "± 1117726.21427605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92325978.73684211,
            "unit": "ns",
            "range": "± 2048489.8326252128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185580189.16666666,
            "unit": "ns",
            "range": "± 816792.0706521039"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57029.358695652176,
            "unit": "ns",
            "range": "± 7754.882668331861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355623.7,
            "unit": "ns",
            "range": "± 17225.29885090237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299093.6101694915,
            "unit": "ns",
            "range": "± 13259.704789475245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265721.04761904763,
            "unit": "ns",
            "range": "± 12084.217450911816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5280735.763157895,
            "unit": "ns",
            "range": "± 116151.58414897228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3879690.76,
            "unit": "ns",
            "range": "± 100787.89300030038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17018.917647058825,
            "unit": "ns",
            "range": "± 1286.3166796244661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84852.35051546391,
            "unit": "ns",
            "range": "± 7597.03932468821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84014.59278350516,
            "unit": "ns",
            "range": "± 10205.066214347567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 219911.1505376344,
            "unit": "ns",
            "range": "± 20810.759099116014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5867.735632183908,
            "unit": "ns",
            "range": "± 695.6045799321341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17030.657303370786,
            "unit": "ns",
            "range": "± 1739.1491382208899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526430.9239130435,
            "unit": "ns",
            "range": "± 155747.9861495214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2961317.8698630137,
            "unit": "ns",
            "range": "± 146684.98509954236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465782.216494845,
            "unit": "ns",
            "range": "± 227664.98136325166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6343652.5,
            "unit": "ns",
            "range": "± 99403.2215084937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3090225.5573770492,
            "unit": "ns",
            "range": "± 139271.02809743845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283002.480769231,
            "unit": "ns",
            "range": "± 135551.62730198156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237817.435897436,
            "unit": "ns",
            "range": "± 145727.9868090212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4339999.051282051,
            "unit": "ns",
            "range": "± 222952.78304818805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8576555.58490566,
            "unit": "ns",
            "range": "± 357949.4658850622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089721.565104167,
            "unit": "ns",
            "range": "± 51890.73538392775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1823951.2072916667,
            "unit": "ns",
            "range": "± 9936.785965010773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223893.6997395833,
            "unit": "ns",
            "range": "± 6299.613620882112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592394.228966346,
            "unit": "ns",
            "range": "± 9769.151907065341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819915.4324776785,
            "unit": "ns",
            "range": "± 4135.261704183342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 702358.4511067708,
            "unit": "ns",
            "range": "± 4073.3097004319798"
          }
        ]
      }
    ]
  }
}