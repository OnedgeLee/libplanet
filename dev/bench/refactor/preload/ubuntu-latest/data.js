window.BENCHMARK_DATA = {
  "lastUpdate": 1684135453475,
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
          "id": "3745ae34c6251c30bce77ecc8a368d960ec585f6",
          "message": "fix: Fix to render on unforked appending",
          "timestamp": "2023-05-12T14:22:39+09:00",
          "tree_id": "6f39115c1bdc5a75bfbd166c2c66fef256bb02a0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3745ae34c6251c30bce77ecc8a368d960ec585f6"
        },
        "date": 1683869818259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635600.6666666665,
            "unit": "ns",
            "range": "± 73970.03051474929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3820103.5789473685,
            "unit": "ns",
            "range": "± 82681.48819974142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4335087.571428572,
            "unit": "ns",
            "range": "± 65291.00139519085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4581549.660714285,
            "unit": "ns",
            "range": "± 195815.6070709266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6942443.633333334,
            "unit": "ns",
            "range": "± 204521.89938479537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299169.25581395347,
            "unit": "ns",
            "range": "± 10932.030879360285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293725.6338028169,
            "unit": "ns",
            "range": "± 14293.4170894351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236611.5357142857,
            "unit": "ns",
            "range": "± 6649.112502639079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4476882.642857143,
            "unit": "ns",
            "range": "± 61455.58499950894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995662.6666666665,
            "unit": "ns",
            "range": "± 52622.21092665647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21953.552083333332,
            "unit": "ns",
            "range": "± 1890.445588631041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98449.43298969071,
            "unit": "ns",
            "range": "± 6593.608309547487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86747.34444444445,
            "unit": "ns",
            "range": "± 4623.426146210531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107979.56701030929,
            "unit": "ns",
            "range": "± 12804.313244556839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6263.98969072165,
            "unit": "ns",
            "range": "± 919.3590554344247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19583.505263157895,
            "unit": "ns",
            "range": "± 1821.5535389290017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5996489.0078125,
            "unit": "ns",
            "range": "± 15342.147381120698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867518.3821614583,
            "unit": "ns",
            "range": "± 11746.009803290606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359754.923828125,
            "unit": "ns",
            "range": "± 3681.0429633823187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2651575.3076923075,
            "unit": "ns",
            "range": "± 4553.308840768385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830794.5111607143,
            "unit": "ns",
            "range": "± 404.30513215982745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758940.8407552083,
            "unit": "ns",
            "range": "± 414.28437339315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8229384.055555556,
            "unit": "ns",
            "range": "± 173152.9705133151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21895537.53846154,
            "unit": "ns",
            "range": "± 351524.1041179622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55043430.733333334,
            "unit": "ns",
            "range": "± 471690.5099015768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111247353.4,
            "unit": "ns",
            "range": "± 447648.59485806496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222835482.2857143,
            "unit": "ns",
            "range": "± 2550857.1691540033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1469823.642857143,
            "unit": "ns",
            "range": "± 93363.76199026166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2676476.3913043477,
            "unit": "ns",
            "range": "± 60760.3502307064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2618774.8571428573,
            "unit": "ns",
            "range": "± 43234.1354858495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5645430.261538462,
            "unit": "ns",
            "range": "± 263408.9293625311"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52227.967741935485,
            "unit": "ns",
            "range": "± 3360.321175292924"
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
          "id": "2c704a9ca704e6642d2dc1926c4d9c1148ad4fb2",
          "message": "fix: Fix to render on unforked appending",
          "timestamp": "2023-05-13T00:29:53+09:00",
          "tree_id": "411b66f387dbe6c860783c08c555afbefd33cddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2c704a9ca704e6642d2dc1926c4d9c1148ad4fb2"
        },
        "date": 1683906265897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3586068.5757575757,
            "unit": "ns",
            "range": "± 111940.02334426412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3770049.407407407,
            "unit": "ns",
            "range": "± 104619.23832247005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4357559.133333334,
            "unit": "ns",
            "range": "± 57507.05714812831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4563706.5121951215,
            "unit": "ns",
            "range": "± 163579.4409973518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7114305.787878788,
            "unit": "ns",
            "range": "± 221160.18459093705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292819.7962962963,
            "unit": "ns",
            "range": "± 12169.001434017424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283149.6034482759,
            "unit": "ns",
            "range": "± 11499.963415562945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236915.9512195122,
            "unit": "ns",
            "range": "± 8411.958662972671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4444626.285714285,
            "unit": "ns",
            "range": "± 44598.10746662234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3982945.7333333334,
            "unit": "ns",
            "range": "± 46990.27611943723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23429.154639175256,
            "unit": "ns",
            "range": "± 1769.075142907812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107575.29,
            "unit": "ns",
            "range": "± 9692.250850623608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92331.35353535354,
            "unit": "ns",
            "range": "± 8050.084672280176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112202.28125,
            "unit": "ns",
            "range": "± 11478.083631267964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8294.787234042553,
            "unit": "ns",
            "range": "± 881.2738565042416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21506.052631578947,
            "unit": "ns",
            "range": "± 1729.4739845276351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5992160.358854166,
            "unit": "ns",
            "range": "± 28411.926314419292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910091.984375,
            "unit": "ns",
            "range": "± 2114.319083915302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370790.82734375,
            "unit": "ns",
            "range": "± 2508.3373255417814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642305.1702008927,
            "unit": "ns",
            "range": "± 5004.7309298304335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814983.4256510417,
            "unit": "ns",
            "range": "± 184.98751636011232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761986.2271902902,
            "unit": "ns",
            "range": "± 490.15184451821074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8306387.444444444,
            "unit": "ns",
            "range": "± 176431.24439523084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21747520.92857143,
            "unit": "ns",
            "range": "± 159738.15553849575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55247692.46666667,
            "unit": "ns",
            "range": "± 312882.21980092186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110588405.86666666,
            "unit": "ns",
            "range": "± 242165.23251074037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221076721.33333334,
            "unit": "ns",
            "range": "± 998814.3901343136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1448904.3012048192,
            "unit": "ns",
            "range": "± 76419.60426642785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678116.065217391,
            "unit": "ns",
            "range": "± 65816.46687626965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2331872.5967741935,
            "unit": "ns",
            "range": "± 103048.47664617385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5815523.75,
            "unit": "ns",
            "range": "± 304268.19753554865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50848.413043478264,
            "unit": "ns",
            "range": "± 3225.2081052275985"
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
          "id": "620aedae81ed0ee369698beb180cc1b34a3f4e40",
          "message": "fix: Fix block pulling and appending to be asynchronous",
          "timestamp": "2023-05-15T14:00:04+09:00",
          "tree_id": "347eb95e41508ecf5d8e3bdad57b63da6f91bec8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/620aedae81ed0ee369698beb180cc1b34a3f4e40"
        },
        "date": 1684127785238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4146525.814814815,
            "unit": "ns",
            "range": "± 115674.14660556578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4382815.714285715,
            "unit": "ns",
            "range": "± 63191.59561746577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5044645.142857143,
            "unit": "ns",
            "range": "± 75948.06712875192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5428865.189189189,
            "unit": "ns",
            "range": "± 170167.12567238745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8286398.392857143,
            "unit": "ns",
            "range": "± 234699.73390465105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348531.4358974359,
            "unit": "ns",
            "range": "± 12139.529737694194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330723.5416666667,
            "unit": "ns",
            "range": "± 12928.16172441755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277574.7121212121,
            "unit": "ns",
            "range": "± 12700.688057394194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5070511.0625,
            "unit": "ns",
            "range": "± 98955.90766900091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4596692.615384615,
            "unit": "ns",
            "range": "± 72717.95867773249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24103.21052631579,
            "unit": "ns",
            "range": "± 1847.193085639046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111341.25263157894,
            "unit": "ns",
            "range": "± 8441.889107389161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98909.88888888889,
            "unit": "ns",
            "range": "± 7757.5893253374525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110702.57142857143,
            "unit": "ns",
            "range": "± 11319.193484365745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7455.257731958763,
            "unit": "ns",
            "range": "± 1192.2251541965425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24719.427083333332,
            "unit": "ns",
            "range": "± 2334.339247183875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7113016.07578125,
            "unit": "ns",
            "range": "± 28608.579240955012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166717.327734375,
            "unit": "ns",
            "range": "± 11027.158835413911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1627664.9457310268,
            "unit": "ns",
            "range": "± 4509.715851133709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124388.8157552085,
            "unit": "ns",
            "range": "± 8718.072802830111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986537.9437779018,
            "unit": "ns",
            "range": "± 2220.6443468651823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897341.4222005209,
            "unit": "ns",
            "range": "± 3645.906893933361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570075.82142857,
            "unit": "ns",
            "range": "± 293625.7468681107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26112657.6,
            "unit": "ns",
            "range": "± 188060.29938324113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64460047.2,
            "unit": "ns",
            "range": "± 413042.0862997931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129159886,
            "unit": "ns",
            "range": "± 1578658.8701569263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258534869.85714287,
            "unit": "ns",
            "range": "± 2479024.9587719846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1714462.7045454546,
            "unit": "ns",
            "range": "± 94439.01370034162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3189248.611111111,
            "unit": "ns",
            "range": "± 104341.40771915947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2726066.8333333335,
            "unit": "ns",
            "range": "± 129405.4387963833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6761460.925925926,
            "unit": "ns",
            "range": "± 283620.94593597465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57824.59782608696,
            "unit": "ns",
            "range": "± 3308.676207045976"
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
          "id": "8e82297fb30e9e473fa1a7bfc5d9da5e866187a5",
          "message": "fix: Fix to render on unforked appending",
          "timestamp": "2023-05-15T14:54:25+09:00",
          "tree_id": "34634d61c14d8ea93f9a1fabed12c152db6fcbe0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8e82297fb30e9e473fa1a7bfc5d9da5e866187a5"
        },
        "date": 1684130868008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217194.6,
            "unit": "ns",
            "range": "± 72360.12133212603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3363493,
            "unit": "ns",
            "range": "± 50707.26185666112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185055.4,
            "unit": "ns",
            "range": "± 68029.83446547552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154145,
            "unit": "ns",
            "range": "± 109095.31909183822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6632500.8,
            "unit": "ns",
            "range": "± 107614.0369589395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286499.9,
            "unit": "ns",
            "range": "± 9297.120044290526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271128.9193548387,
            "unit": "ns",
            "range": "± 12307.708736302302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241143.39130434784,
            "unit": "ns",
            "range": "± 6017.500604215934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4207040.285714285,
            "unit": "ns",
            "range": "± 21354.779999690116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3801868.6428571427,
            "unit": "ns",
            "range": "± 21112.243165472068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17570.526315789473,
            "unit": "ns",
            "range": "± 1817.5780988933345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85870.32098765433,
            "unit": "ns",
            "range": "± 4525.5522531155275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76130.26760563381,
            "unit": "ns",
            "range": "± 3718.9183525695307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82960.21686746988,
            "unit": "ns",
            "range": "± 4942.681752208457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4654.736842105263,
            "unit": "ns",
            "range": "± 764.7511653504132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17785.252631578947,
            "unit": "ns",
            "range": "± 1664.216446952388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5869787.412388393,
            "unit": "ns",
            "range": "± 19590.354309233546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840215.419921875,
            "unit": "ns",
            "range": "± 2111.397925936572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345207.729296875,
            "unit": "ns",
            "range": "± 650.7948728200504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564421.4012276786,
            "unit": "ns",
            "range": "± 1833.5624616758398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809910.153125,
            "unit": "ns",
            "range": "± 416.7330861845358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737052.8194754465,
            "unit": "ns",
            "range": "± 553.1259088457352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7520658.2,
            "unit": "ns",
            "range": "± 14516.193593953714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19231665.133333333,
            "unit": "ns",
            "range": "± 149176.7463982941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50206717.53333333,
            "unit": "ns",
            "range": "± 274136.0632834585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98693142.64285715,
            "unit": "ns",
            "range": "± 786089.1225668624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197954304.6,
            "unit": "ns",
            "range": "± 1103700.2704342075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407454.8383838383,
            "unit": "ns",
            "range": "± 116173.49319503516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534303.24,
            "unit": "ns",
            "range": "± 66968.0222632912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219037.206185567,
            "unit": "ns",
            "range": "± 136506.88224354433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5555746.849315069,
            "unit": "ns",
            "range": "± 276184.0443858482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45292.14444444444,
            "unit": "ns",
            "range": "± 2688.881504073082"
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
          "id": "6b9c666338093c48c0f217946698dd27b0b5961e",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T16:09:57+09:00",
          "tree_id": "abe194f9a683713750aa112ba50b0c0c9a29ee54",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6b9c666338093c48c0f217946698dd27b0b5961e"
        },
        "date": 1684135440896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376945.523809524,
            "unit": "ns",
            "range": "± 78184.88357260569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3654304.24,
            "unit": "ns",
            "range": "± 96678.2564223035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4231198.066666666,
            "unit": "ns",
            "range": "± 126537.11715320402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4487487.369565218,
            "unit": "ns",
            "range": "± 172487.66728414834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7001249.236842105,
            "unit": "ns",
            "range": "± 237625.41530059493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287131.4888888889,
            "unit": "ns",
            "range": "± 10199.69038661607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273841,
            "unit": "ns",
            "range": "± 7379.78965655526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231955.1052631579,
            "unit": "ns",
            "range": "± 5122.276109685971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303358.785714285,
            "unit": "ns",
            "range": "± 39825.70677566587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909978.533333333,
            "unit": "ns",
            "range": "± 51293.20626396926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20276.166666666668,
            "unit": "ns",
            "range": "± 1916.5041676347598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89885.16842105263,
            "unit": "ns",
            "range": "± 5896.26635497239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80326.87878787878,
            "unit": "ns",
            "range": "± 4955.560818512274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100072.0824742268,
            "unit": "ns",
            "range": "± 14232.934333549323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6634.775510204082,
            "unit": "ns",
            "range": "± 1050.5417996425126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20164.082474226805,
            "unit": "ns",
            "range": "± 1739.4104584965417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5906478.334375,
            "unit": "ns",
            "range": "± 36304.0194578894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890251.934375,
            "unit": "ns",
            "range": "± 3407.0880145020365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366456.2630208333,
            "unit": "ns",
            "range": "± 7747.360254107384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613425.962439904,
            "unit": "ns",
            "range": "± 3403.179095087908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839504.3935546875,
            "unit": "ns",
            "range": "± 3854.5329902507196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750816.3239397322,
            "unit": "ns",
            "range": "± 2536.111582174762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7909321.2272727275,
            "unit": "ns",
            "range": "± 193599.26088774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21360795.6,
            "unit": "ns",
            "range": "± 207653.90602146505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54684074.21428572,
            "unit": "ns",
            "range": "± 819473.1889029663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108338634.5,
            "unit": "ns",
            "range": "± 1538896.5948857768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215234187.85714287,
            "unit": "ns",
            "range": "± 1826503.6160748748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430818.8918918918,
            "unit": "ns",
            "range": "± 68349.27714874003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2613275.4285714286,
            "unit": "ns",
            "range": "± 39175.100105344165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2341442.4625,
            "unit": "ns",
            "range": "± 121926.18423445089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5623429.465116279,
            "unit": "ns",
            "range": "± 205851.76906920515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49835.10526315789,
            "unit": "ns",
            "range": "± 3820.788265204603"
          }
        ]
      }
    ]
  }
}