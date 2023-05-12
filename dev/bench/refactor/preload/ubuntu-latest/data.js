window.BENCHMARK_DATA = {
  "lastUpdate": 1683866916262,
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
          "id": "5b59f24820224f9e9cf31723c5d9a81712b9271d",
          "message": "refactor: replace preload logic with blocksync",
          "timestamp": "2023-05-12T11:13:36+09:00",
          "tree_id": "bcf324b7894514c9753fb06dd952fe13075db52f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5b59f24820224f9e9cf31723c5d9a81712b9271d"
        },
        "date": 1683858472438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559979.4782608696,
            "unit": "ns",
            "range": "± 79490.8569956145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720144.214285714,
            "unit": "ns",
            "range": "± 40332.545251806405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4384629,
            "unit": "ns",
            "range": "± 109163.80230644222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4688663.125,
            "unit": "ns",
            "range": "± 119045.44337546884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7136125.958333333,
            "unit": "ns",
            "range": "± 179412.71188846152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297666.1206896552,
            "unit": "ns",
            "range": "± 12942.256084783898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285846.5,
            "unit": "ns",
            "range": "± 12721.746536644367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240426.0909090909,
            "unit": "ns",
            "range": "± 5864.093815506048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4413989.6,
            "unit": "ns",
            "range": "± 25154.438585324402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3924359.533333333,
            "unit": "ns",
            "range": "± 46226.50820821111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22102.684210526317,
            "unit": "ns",
            "range": "± 1574.2366286698812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93401.82022471911,
            "unit": "ns",
            "range": "± 5155.24537719901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86743.51851851853,
            "unit": "ns",
            "range": "± 4427.670395114995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108458.28865979382,
            "unit": "ns",
            "range": "± 13691.456801717906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7053.391304347826,
            "unit": "ns",
            "range": "± 653.2299623102252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23304.64210526316,
            "unit": "ns",
            "range": "± 1670.772511577303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6014817.002790178,
            "unit": "ns",
            "range": "± 36185.657075662486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858669.4963942308,
            "unit": "ns",
            "range": "± 1300.39437433892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361820.9888020833,
            "unit": "ns",
            "range": "± 2374.426427258839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663428.1723958333,
            "unit": "ns",
            "range": "± 3007.890899998232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828175.3122395833,
            "unit": "ns",
            "range": "± 1155.0003319625678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753464.5119441106,
            "unit": "ns",
            "range": "± 271.56814982223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8731783.933333334,
            "unit": "ns",
            "range": "± 100228.84339170085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22011576.933333334,
            "unit": "ns",
            "range": "± 175449.25344972734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55871194.13333333,
            "unit": "ns",
            "range": "± 179703.37510379497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111661541.73333333,
            "unit": "ns",
            "range": "± 576151.3338686618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222463114.6,
            "unit": "ns",
            "range": "± 843744.6868925458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1482973.2117647058,
            "unit": "ns",
            "range": "± 77067.53732759556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683502.5,
            "unit": "ns",
            "range": "± 49755.0028452751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350379.1375,
            "unit": "ns",
            "range": "± 116598.0819299372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5493285.578947368,
            "unit": "ns",
            "range": "± 117749.49526681907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50603.22222222222,
            "unit": "ns",
            "range": "± 3372.7166417545427"
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
          "id": "d5885ccd282f4d5d2dc0ba6c2bc1f07c1f923e79",
          "message": "refactor: Inject progress to preload",
          "timestamp": "2023-05-12T12:24:39+09:00",
          "tree_id": "f98bdf26fb70ba24ec41ccfb0fcce56457451a50",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d5885ccd282f4d5d2dc0ba6c2bc1f07c1f923e79"
        },
        "date": 1683862875642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3631899.69,
            "unit": "ns",
            "range": "± 267029.4937000611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3702031.9,
            "unit": "ns",
            "range": "± 300960.47436282557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4441546.32,
            "unit": "ns",
            "range": "± 304812.0028805595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4608316.83,
            "unit": "ns",
            "range": "± 328988.9414991459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7616284.161616161,
            "unit": "ns",
            "range": "± 504947.8298895011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309961.404040404,
            "unit": "ns",
            "range": "± 22973.34929777403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293261.38383838383,
            "unit": "ns",
            "range": "± 26334.466730382337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256795.0606060606,
            "unit": "ns",
            "range": "± 19623.38416788427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4514563.204081632,
            "unit": "ns",
            "range": "± 308492.97906044265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4029315.12,
            "unit": "ns",
            "range": "± 258137.15280526684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20412.282608695652,
            "unit": "ns",
            "range": "± 1961.9522421744466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93370.36842105263,
            "unit": "ns",
            "range": "± 7954.751399692328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87451.63265306123,
            "unit": "ns",
            "range": "± 8839.725604954123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102240.88775510204,
            "unit": "ns",
            "range": "± 15404.83142171965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5402.252747252747,
            "unit": "ns",
            "range": "± 673.6149838892737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18702.56179775281,
            "unit": "ns",
            "range": "± 1949.3554992907048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6333198.391113281,
            "unit": "ns",
            "range": "± 96622.62770035629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929438.53515625,
            "unit": "ns",
            "range": "± 24679.796342666446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425914.154296875,
            "unit": "ns",
            "range": "± 16777.421217548854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2723402.451286765,
            "unit": "ns",
            "range": "± 53667.449267309574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866196.0081129808,
            "unit": "ns",
            "range": "± 10395.920850001514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811720.2218098958,
            "unit": "ns",
            "range": "± 11325.964763775386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8247442.19,
            "unit": "ns",
            "range": "± 541419.7651371489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22921377.705128204,
            "unit": "ns",
            "range": "± 1181906.8378609722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57797559.595744684,
            "unit": "ns",
            "range": "± 2254155.719736073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118346074.48,
            "unit": "ns",
            "range": "± 3083033.843433893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226798482.1,
            "unit": "ns",
            "range": "± 9020412.468339665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495607.147368421,
            "unit": "ns",
            "range": "± 124218.6725798902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2980075.4242424243,
            "unit": "ns",
            "range": "± 255797.49114672933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2473569.7653061226,
            "unit": "ns",
            "range": "± 183574.4542081232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6220968.64,
            "unit": "ns",
            "range": "± 513902.97789680347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51257.58888888889,
            "unit": "ns",
            "range": "± 3923.3424236113865"
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
          "id": "bdbd850f161b117bf6c2d80f9627ddce58dd9bb2",
          "message": "refactor: Move tables creation to Swarm<T> constructor",
          "timestamp": "2023-05-12T13:31:49+09:00",
          "tree_id": "d572eb8c5e9aad7405974b9c41a8c4311dffdf39",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bdbd850f161b117bf6c2d80f9627ddce58dd9bb2"
        },
        "date": 1683866902011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3992167.4,
            "unit": "ns",
            "range": "± 139540.18538405123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4079814.967032967,
            "unit": "ns",
            "range": "± 226779.07457256236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4847980.578947368,
            "unit": "ns",
            "range": "± 103720.9402479749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5157164.657894737,
            "unit": "ns",
            "range": "± 165424.17082960877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7865457.115384615,
            "unit": "ns",
            "range": "± 210949.47555039366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323273.19736842107,
            "unit": "ns",
            "range": "± 16405.918692975607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313619.54347826086,
            "unit": "ns",
            "range": "± 12005.93418773774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270649.13636363635,
            "unit": "ns",
            "range": "± 12739.732089788246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4979913.625,
            "unit": "ns",
            "range": "± 129029.77814874414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4603552.578947368,
            "unit": "ns",
            "range": "± 157749.6149524802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22974.583333333332,
            "unit": "ns",
            "range": "± 1662.4662824703778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104884.67676767676,
            "unit": "ns",
            "range": "± 8552.028033530496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96577.52688172043,
            "unit": "ns",
            "range": "± 6429.7338754032935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114804.83333333333,
            "unit": "ns",
            "range": "± 12801.536052296442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6864.770833333333,
            "unit": "ns",
            "range": "± 849.5526560201416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21845.239130434784,
            "unit": "ns",
            "range": "± 1608.610719746313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7082988.555208334,
            "unit": "ns",
            "range": "± 48911.29346262511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2218677.6403459823,
            "unit": "ns",
            "range": "± 12459.012964562136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1570167.937779018,
            "unit": "ns",
            "range": "± 19141.808748968582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059578.6830729167,
            "unit": "ns",
            "range": "± 16280.569301596812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 970839.2035807292,
            "unit": "ns",
            "range": "± 6581.592756434242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886421.3052734375,
            "unit": "ns",
            "range": "± 7886.138367415035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9436873.083333334,
            "unit": "ns",
            "range": "± 115638.59373100026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24772664.44,
            "unit": "ns",
            "range": "± 651056.721748003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67843784.14285715,
            "unit": "ns",
            "range": "± 657515.7867932038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133917255.8,
            "unit": "ns",
            "range": "± 2097412.590987361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251039167.4375,
            "unit": "ns",
            "range": "± 4800434.1566274185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666875.28125,
            "unit": "ns",
            "range": "± 123771.55397558275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237498.6565656564,
            "unit": "ns",
            "range": "± 195160.31529777194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2632926,
            "unit": "ns",
            "range": "± 137893.28093676508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6689892.23,
            "unit": "ns",
            "range": "± 406225.77533905354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54521.76136363636,
            "unit": "ns",
            "range": "± 3296.3333792254416"
          }
        ]
      }
    ]
  }
}