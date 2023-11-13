window.BENCHMARK_DATA = {
  "lastUpdate": 1699848465060,
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
          "id": "a1e17dedc60ab7f155d177f49a047199e0eaa8f7",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:16:10+09:00",
          "tree_id": "45e06c704a38ef8a513bb4bba98a7669af30e64d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a1e17dedc60ab7f155d177f49a047199e0eaa8f7"
        },
        "date": 1699846310648,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8194070.933333334,
            "unit": "ns",
            "range": "± 93452.43259423989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22611508.733333334,
            "unit": "ns",
            "range": "± 241090.62926076652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57736539.666666664,
            "unit": "ns",
            "range": "± 485435.73330251704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116681922.06666666,
            "unit": "ns",
            "range": "± 784729.7614874878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230952960.26666668,
            "unit": "ns",
            "range": "± 1754035.3173266524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495765.9186046512,
            "unit": "ns",
            "range": "± 78639.90372267088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2880944.763157895,
            "unit": "ns",
            "range": "± 98579.32611791028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2367460.012820513,
            "unit": "ns",
            "range": "± 116485.95207945451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9505139.930232558,
            "unit": "ns",
            "range": "± 351727.05355684645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3666919.5517241377,
            "unit": "ns",
            "range": "± 106981.5206304295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3835586.92,
            "unit": "ns",
            "range": "± 94033.56746392926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4618854,
            "unit": "ns",
            "range": "± 98030.66051466335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4533025.75,
            "unit": "ns",
            "range": "± 186903.57703591077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11143897.53488372,
            "unit": "ns",
            "range": "± 274032.44539803336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51680.94565217391,
            "unit": "ns",
            "range": "± 3676.639738435713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5263135.43984375,
            "unit": "ns",
            "range": "± 12194.701080993114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1636493.6567708333,
            "unit": "ns",
            "range": "± 5922.255694318965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157664.87890625,
            "unit": "ns",
            "range": "± 475.1036308967476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637942.1341145835,
            "unit": "ns",
            "range": "± 4024.3776072224773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841834.9471153846,
            "unit": "ns",
            "range": "± 444.77233494658975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767686.6942545573,
            "unit": "ns",
            "range": "± 374.9633312229801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292970.6842105263,
            "unit": "ns",
            "range": "± 10082.021118978462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272628.71794871794,
            "unit": "ns",
            "range": "± 8993.518148172687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251779.08474576272,
            "unit": "ns",
            "range": "± 11166.089151577205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4455981.4,
            "unit": "ns",
            "range": "± 76475.06573835497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4175036.3333333335,
            "unit": "ns",
            "range": "± 58960.71049032406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22274.936170212764,
            "unit": "ns",
            "range": "± 1959.8935499319202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94617.56666666667,
            "unit": "ns",
            "range": "± 7303.219167146142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81403.63917525773,
            "unit": "ns",
            "range": "± 6203.955197065765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96909.51546391753,
            "unit": "ns",
            "range": "± 12626.218707773487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5992.6736842105265,
            "unit": "ns",
            "range": "± 911.7559915514125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22615.581632653062,
            "unit": "ns",
            "range": "± 2918.469860786463"
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
          "id": "d9eac1d6b471ee70e78ed20376ddde6b5d915677",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:29:51+09:00",
          "tree_id": "c3534bd65f6ceb690ba603890cfc673abc68542c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9eac1d6b471ee70e78ed20376ddde6b5d915677"
        },
        "date": 1699846861771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5394765.333333333,
            "unit": "ns",
            "range": "± 23279.022984121093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14120187.433333334,
            "unit": "ns",
            "range": "± 84150.95925814909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35409937.692307696,
            "unit": "ns",
            "range": "± 186724.05465837577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71546931.57142857,
            "unit": "ns",
            "range": "± 342287.8500813346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145384194.08333334,
            "unit": "ns",
            "range": "± 539647.9831904663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031772.5769230769,
            "unit": "ns",
            "range": "± 90895.31994250075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1912164.6666666667,
            "unit": "ns",
            "range": "± 62031.253683008166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571559.2,
            "unit": "ns",
            "range": "± 82629.8715985932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6540500.24137931,
            "unit": "ns",
            "range": "± 387497.3235844245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2378143.393939394,
            "unit": "ns",
            "range": "± 73870.48824587335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2613930.8157894737,
            "unit": "ns",
            "range": "± 113287.86838059901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3134436.14516129,
            "unit": "ns",
            "range": "± 94659.54131044174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2999551.431372549,
            "unit": "ns",
            "range": "± 101429.76830423204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7541241,
            "unit": "ns",
            "range": "± 210797.18375107532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40348.084210526315,
            "unit": "ns",
            "range": "± 5688.8041121905135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759293.8447916666,
            "unit": "ns",
            "range": "± 55273.004434861985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195980.4130859375,
            "unit": "ns",
            "range": "± 6101.36952282889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778749.9492938702,
            "unit": "ns",
            "range": "± 5933.64501434502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925890.964092548,
            "unit": "ns",
            "range": "± 13698.27559763369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631472.5735426683,
            "unit": "ns",
            "range": "± 1747.7230717124316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568629.5100661058,
            "unit": "ns",
            "range": "± 1330.1848897384757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196123,
            "unit": "ns",
            "range": "± 8669.508218218765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194121.98387096773,
            "unit": "ns",
            "range": "± 6623.647102175796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172255.64285714287,
            "unit": "ns",
            "range": "± 2963.4169624618457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066949.1153846155,
            "unit": "ns",
            "range": "± 23413.471928708273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808903.6428571427,
            "unit": "ns",
            "range": "± 24183.468424038838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15832.484536082475,
            "unit": "ns",
            "range": "± 2433.779297518411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73391.76041666667,
            "unit": "ns",
            "range": "± 8467.27030983955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85047.6530612245,
            "unit": "ns",
            "range": "± 10131.756485755077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63594.03846153846,
            "unit": "ns",
            "range": "± 6577.454396662204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2827.237113402062,
            "unit": "ns",
            "range": "± 610.877541144634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13974.123711340206,
            "unit": "ns",
            "range": "± 3143.0120878762273"
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
          "id": "6fb4b41a576b865cc4572c8490d958c29091fca3",
          "message": "feat: Introduce ISystemAccounts",
          "timestamp": "2023-11-13T12:33:59+09:00",
          "tree_id": "b19686e24caebfd352ee8ff725a9e808ad850ef9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fb4b41a576b865cc4572c8490d958c29091fca3"
        },
        "date": 1699847736095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9802909.258426966,
            "unit": "ns",
            "range": "± 601372.3560727302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26918168.55102041,
            "unit": "ns",
            "range": "± 1072066.2196954663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69934488.64150943,
            "unit": "ns",
            "range": "± 2880293.977839923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138646141.5,
            "unit": "ns",
            "range": "± 2271284.3946056585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292524872.2222222,
            "unit": "ns",
            "range": "± 6207567.759381405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1827197.1458333333,
            "unit": "ns",
            "range": "± 218664.23605802952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3581211.559139785,
            "unit": "ns",
            "range": "± 313623.5774254205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2985264.831578947,
            "unit": "ns",
            "range": "± 253304.56601081783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13632961.326086957,
            "unit": "ns",
            "range": "± 1148061.6485261659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4297779.870967742,
            "unit": "ns",
            "range": "± 365186.89243184327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470569.645161291,
            "unit": "ns",
            "range": "± 365467.4980847387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5893257.505263158,
            "unit": "ns",
            "range": "± 426963.2791263394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5613144.393617021,
            "unit": "ns",
            "range": "± 499735.80727870535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15478495.111111112,
            "unit": "ns",
            "range": "± 1436372.173643369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72877.1914893617,
            "unit": "ns",
            "range": "± 17085.229851576976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6735432.7046875,
            "unit": "ns",
            "range": "± 236714.48360123765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2116885.953500601,
            "unit": "ns",
            "range": "± 86085.32638285229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414349.405078125,
            "unit": "ns",
            "range": "± 31620.509981915737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172443.091796875,
            "unit": "ns",
            "range": "± 90325.59275002441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072417.1802455357,
            "unit": "ns",
            "range": "± 16511.269446090962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 980862.4571572581,
            "unit": "ns",
            "range": "± 29480.700094753076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363342,
            "unit": "ns",
            "range": "± 33968.37137367966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349701.6111111111,
            "unit": "ns",
            "range": "± 34857.04694915514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317007.4791666667,
            "unit": "ns",
            "range": "± 48518.54869938195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5447147.125,
            "unit": "ns",
            "range": "± 385424.69207433343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4984494.817204301,
            "unit": "ns",
            "range": "± 318613.8892735199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22227.101123595505,
            "unit": "ns",
            "range": "± 5492.088984176455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114747.71276595745,
            "unit": "ns",
            "range": "± 21332.346809996918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129089.15053763441,
            "unit": "ns",
            "range": "± 19419.89022712574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126868.43478260869,
            "unit": "ns",
            "range": "± 23315.664086337078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7527.244680851064,
            "unit": "ns",
            "range": "± 1103.0224842576204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25778.86170212766,
            "unit": "ns",
            "range": "± 6613.752705660817"
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
          "id": "dd3a0138cf5d44fde8849a3fcf179a9932b7f211",
          "message": "refactor: Remove WorldExtensions",
          "timestamp": "2023-11-13T12:56:34+09:00",
          "tree_id": "24d7897cae211acb13f8debdd202323fad687f34",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd3a0138cf5d44fde8849a3fcf179a9932b7f211"
        },
        "date": 1699848454125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5557994.357142857,
            "unit": "ns",
            "range": "± 36800.36959180446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14024505.666666666,
            "unit": "ns",
            "range": "± 86169.09494954813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35870371.46666667,
            "unit": "ns",
            "range": "± 221201.09796351977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75194012.1923077,
            "unit": "ns",
            "range": "± 1069455.8303635379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149005266.64285713,
            "unit": "ns",
            "range": "± 975032.6216971574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025035.1881720431,
            "unit": "ns",
            "range": "± 87463.70686213084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1914130.8461538462,
            "unit": "ns",
            "range": "± 60651.97160961548"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1549989.030927835,
            "unit": "ns",
            "range": "± 134305.92784529077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6540726.011494253,
            "unit": "ns",
            "range": "± 355841.6903476553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453561.4210526315,
            "unit": "ns",
            "range": "± 80566.47188355631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2530581.4657534244,
            "unit": "ns",
            "range": "± 125687.21355987937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3230119,
            "unit": "ns",
            "range": "± 71227.72383663098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3099057.7666666666,
            "unit": "ns",
            "range": "± 130645.81100199258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7672024.186046512,
            "unit": "ns",
            "range": "± 220388.99637181094"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39962.489583333336,
            "unit": "ns",
            "range": "± 5125.5324611611495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773810.874441964,
            "unit": "ns",
            "range": "± 47422.28667107252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213230.4647042411,
            "unit": "ns",
            "range": "± 11879.726969542164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753435.0734863281,
            "unit": "ns",
            "range": "± 3460.433123443956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937685.0424107143,
            "unit": "ns",
            "range": "± 2453.8737939130865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 649260.253530649,
            "unit": "ns",
            "range": "± 862.3316789524948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558986.3333333334,
            "unit": "ns",
            "range": "± 948.2575913692269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202224.75,
            "unit": "ns",
            "range": "± 11399.475189987601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195958.95714285714,
            "unit": "ns",
            "range": "± 9511.89495999723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169997.65384615384,
            "unit": "ns",
            "range": "± 2666.9813099630655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3121732.3846153845,
            "unit": "ns",
            "range": "± 23610.004978604808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2856611.6428571427,
            "unit": "ns",
            "range": "± 31998.773199097068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13491.505494505494,
            "unit": "ns",
            "range": "± 1840.004603699714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68145.0625,
            "unit": "ns",
            "range": "± 10211.573490601111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56535.23863636364,
            "unit": "ns",
            "range": "± 8583.582754096398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65991.53608247422,
            "unit": "ns",
            "range": "± 12530.90732786824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3806.325842696629,
            "unit": "ns",
            "range": "± 855.2782877158769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16145.20652173913,
            "unit": "ns",
            "range": "± 3134.895127811229"
          }
        ]
      }
    ]
  }
}