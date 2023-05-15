window.BENCHMARK_DATA = {
  "lastUpdate": 1684144559433,
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
          "id": "7ad94a2b74f28a908df29d8f6c4b4d8006ded009",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T16:11:04+09:00",
          "tree_id": "3225248cff7bff4585bb36f4f5db0444c3297b76",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7ad94a2b74f28a908df29d8f6c4b4d8006ded009"
        },
        "date": 1684135791246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4280183.166666667,
            "unit": "ns",
            "range": "± 256025.71965995693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4485245.755555555,
            "unit": "ns",
            "range": "± 169734.66793072218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5625658.391304348,
            "unit": "ns",
            "range": "± 391237.8166547685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5439216.69072165,
            "unit": "ns",
            "range": "± 409442.9533258001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8620158.045454545,
            "unit": "ns",
            "range": "± 182813.05343345838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356265.4512195122,
            "unit": "ns",
            "range": "± 18833.109952888586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335072.8023255814,
            "unit": "ns",
            "range": "± 18115.213138535877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286435,
            "unit": "ns",
            "range": "± 9515.295067866862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5200663.531914894,
            "unit": "ns",
            "range": "± 200781.72356575934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4958071.595505618,
            "unit": "ns",
            "range": "± 449511.05447044346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24340.32608695652,
            "unit": "ns",
            "range": "± 2858.6006724596414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112610.18085106384,
            "unit": "ns",
            "range": "± 11999.948438027903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108351.66666666667,
            "unit": "ns",
            "range": "± 11898.985321673157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125583.82105263158,
            "unit": "ns",
            "range": "± 18921.96039165556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7798.989583333333,
            "unit": "ns",
            "range": "± 922.434450614148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27249.13,
            "unit": "ns",
            "range": "± 6367.431048283639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7817767.41038603,
            "unit": "ns",
            "range": "± 135514.32272696396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2325481.8797433036,
            "unit": "ns",
            "range": "± 37537.51038758756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1733147.9292480468,
            "unit": "ns",
            "range": "± 57837.36970685844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3006049.2793817935,
            "unit": "ns",
            "range": "± 71707.96818298697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035645.0734863281,
            "unit": "ns",
            "range": "± 20280.281359113884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 928432.6602864583,
            "unit": "ns",
            "range": "± 16043.26592419356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10476548.290322581,
            "unit": "ns",
            "range": "± 679646.4991109843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26656875,
            "unit": "ns",
            "range": "± 1230272.2244616086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65160953,
            "unit": "ns",
            "range": "± 1154646.1119591177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132483085.30434783,
            "unit": "ns",
            "range": "± 3256244.797043527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273296329.84,
            "unit": "ns",
            "range": "± 5983281.215067752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684617.677419355,
            "unit": "ns",
            "range": "± 120016.37806957135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3305469.0975609757,
            "unit": "ns",
            "range": "± 117503.60230367513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2672771.294736842,
            "unit": "ns",
            "range": "± 218312.83787232867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6949447.837837838,
            "unit": "ns",
            "range": "± 344373.30180731486"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62281.14893617021,
            "unit": "ns",
            "range": "± 11565.605676563227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af441e937a7c45265d6e5b70ceac99262b80279c",
          "message": "Merge branch 'main' into refactor/preload",
          "timestamp": "2023-05-15T18:06:13+09:00",
          "tree_id": "8aaf61eb208203d8c717477447f34b1036726196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/af441e937a7c45265d6e5b70ceac99262b80279c"
        },
        "date": 1684142323764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471052.714285714,
            "unit": "ns",
            "range": "± 80960.44301147497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3663355.8,
            "unit": "ns",
            "range": "± 89671.62401414024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4506258.391304348,
            "unit": "ns",
            "range": "± 112979.32219688341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4590373.314285714,
            "unit": "ns",
            "range": "± 148986.29417317937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7130766.84375,
            "unit": "ns",
            "range": "± 216745.18527779073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286162.5675675676,
            "unit": "ns",
            "range": "± 9382.419749902652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273782.5128205128,
            "unit": "ns",
            "range": "± 9508.64689823729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236404.95238095237,
            "unit": "ns",
            "range": "± 5421.216657505864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4375002.857142857,
            "unit": "ns",
            "range": "± 55499.31858882752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4063475.7333333334,
            "unit": "ns",
            "range": "± 66365.8435411154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19486.864583333332,
            "unit": "ns",
            "range": "± 1444.4422534579087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89938.02127659574,
            "unit": "ns",
            "range": "± 5502.217193327904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71658.62857142858,
            "unit": "ns",
            "range": "± 2292.960968931224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88448.35294117648,
            "unit": "ns",
            "range": "± 7006.615648809349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5374.09375,
            "unit": "ns",
            "range": "± 602.2045827951442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18044.340659340658,
            "unit": "ns",
            "range": "± 1426.1717227114632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5974355.984375,
            "unit": "ns",
            "range": "± 39790.08369872897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1823943.1256975445,
            "unit": "ns",
            "range": "± 6758.411832113949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358608.3421875,
            "unit": "ns",
            "range": "± 7035.263798093996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601892.8486979166,
            "unit": "ns",
            "range": "± 1987.1098366335193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833206.5229166667,
            "unit": "ns",
            "range": "± 547.6021651870354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765782.9617745535,
            "unit": "ns",
            "range": "± 255.5282989445112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7927364.0625,
            "unit": "ns",
            "range": "± 144693.50968695577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21577670.933333334,
            "unit": "ns",
            "range": "± 328010.97555122554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53951334.13333333,
            "unit": "ns",
            "range": "± 548284.861281181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108746984.46153846,
            "unit": "ns",
            "range": "± 782362.3969359954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219873027.64285713,
            "unit": "ns",
            "range": "± 2335279.6497079516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416958.84375,
            "unit": "ns",
            "range": "± 81172.69844036922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2686937.172413793,
            "unit": "ns",
            "range": "± 73175.88143208163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270520.1063829786,
            "unit": "ns",
            "range": "± 129564.00588097004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5516806.55,
            "unit": "ns",
            "range": "± 121453.10031122257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47581.80882352941,
            "unit": "ns",
            "range": "± 2289.9382788876674"
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
          "id": "825da086cb7d483ce4417e2747cb2509d3c0b6b7",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:05:45+09:00",
          "tree_id": "98764457e95d330ec6ad09a10d4cbe895b8f3b54",
          "url": "https://github.com/OnedgeLee/libplanet/commit/825da086cb7d483ce4417e2747cb2509d3c0b6b7"
        },
        "date": 1684142405634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3482745.0454545454,
            "unit": "ns",
            "range": "± 39925.36856552577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690765.7,
            "unit": "ns",
            "range": "± 83238.43940474161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4186296.9411764704,
            "unit": "ns",
            "range": "± 84089.13393571624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4658491.0625,
            "unit": "ns",
            "range": "± 91099.64685366514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6866357.333333333,
            "unit": "ns",
            "range": "± 162860.1392411088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289448.0857142857,
            "unit": "ns",
            "range": "± 8690.222153700804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280475.8292682927,
            "unit": "ns",
            "range": "± 10115.739648939269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234604.5806451613,
            "unit": "ns",
            "range": "± 6137.2621842544395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4395820,
            "unit": "ns",
            "range": "± 51536.061486801926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002708.6666666665,
            "unit": "ns",
            "range": "± 49588.912789722126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20401.252631578947,
            "unit": "ns",
            "range": "± 1771.0949550359069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94200.7625,
            "unit": "ns",
            "range": "± 4912.5058887940995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82283.51515151515,
            "unit": "ns",
            "range": "± 6066.576350765401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96123.86813186813,
            "unit": "ns",
            "range": "± 9991.190469840907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6938.20618556701,
            "unit": "ns",
            "range": "± 933.2046816631423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20926.21875,
            "unit": "ns",
            "range": "± 1875.927909080141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5989904.165104167,
            "unit": "ns",
            "range": "± 24053.2472213908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847777.622767857,
            "unit": "ns",
            "range": "± 3688.2111858350286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375583.4596354167,
            "unit": "ns",
            "range": "± 3423.653568657662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596680.4669471155,
            "unit": "ns",
            "range": "± 2123.119976190175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842652.5107421875,
            "unit": "ns",
            "range": "± 626.0730125429126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755693.6999162947,
            "unit": "ns",
            "range": "± 285.33176904406145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8233538.611111111,
            "unit": "ns",
            "range": "± 172910.19653944776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21753222.14285714,
            "unit": "ns",
            "range": "± 280142.1560084361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54760210.266666666,
            "unit": "ns",
            "range": "± 476226.49696163734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109242925.06666666,
            "unit": "ns",
            "range": "± 575213.8713959812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219754924.92307693,
            "unit": "ns",
            "range": "± 1134108.825882424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435530.0340909092,
            "unit": "ns",
            "range": "± 77985.98502434406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2630691.2,
            "unit": "ns",
            "range": "± 68650.76275408192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2346503.2921348317,
            "unit": "ns",
            "range": "± 129128.13196766669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5455092.645161291,
            "unit": "ns",
            "range": "± 164862.71556450604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49306.5243902439,
            "unit": "ns",
            "range": "± 2619.3617836638678"
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
          "id": "825da086cb7d483ce4417e2747cb2509d3c0b6b7",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:05:45+09:00",
          "tree_id": "98764457e95d330ec6ad09a10d4cbe895b8f3b54",
          "url": "https://github.com/OnedgeLee/libplanet/commit/825da086cb7d483ce4417e2747cb2509d3c0b6b7"
        },
        "date": 1684142554125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4119622.529411765,
            "unit": "ns",
            "range": "± 80828.60807142919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4411637.0625,
            "unit": "ns",
            "range": "± 81110.65002284944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4928356.067567567,
            "unit": "ns",
            "range": "± 244676.35242954773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5072649.666666667,
            "unit": "ns",
            "range": "± 250170.8723019326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8081764.4,
            "unit": "ns",
            "range": "± 148409.681032799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340737.88679245283,
            "unit": "ns",
            "range": "± 13499.164309832691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316721.967032967,
            "unit": "ns",
            "range": "± 17717.472245373145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276480.0684931507,
            "unit": "ns",
            "range": "± 13320.863045873197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5204794.857142857,
            "unit": "ns",
            "range": "± 86647.70109592516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4715704.529411765,
            "unit": "ns",
            "range": "± 85128.8314931534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25727.05319148936,
            "unit": "ns",
            "range": "± 1797.45203993039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113599.4375,
            "unit": "ns",
            "range": "± 5821.260339944554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105562.97959183673,
            "unit": "ns",
            "range": "± 6866.496887404368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121884.79591836735,
            "unit": "ns",
            "range": "± 15920.55916813108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7494.731182795699,
            "unit": "ns",
            "range": "± 942.1981022631963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25292.925531914894,
            "unit": "ns",
            "range": "± 1477.2028583500153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7461756.9484375,
            "unit": "ns",
            "range": "± 49286.49767044342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2240371.33125,
            "unit": "ns",
            "range": "± 11749.485037977378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1597101.9934430805,
            "unit": "ns",
            "range": "± 12131.278568947273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3016166.6184895835,
            "unit": "ns",
            "range": "± 23372.94006993579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965893.0798177083,
            "unit": "ns",
            "range": "± 12417.610302934601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862374.7266845703,
            "unit": "ns",
            "range": "± 16116.442465779655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11051489.4,
            "unit": "ns",
            "range": "± 94092.96703473644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25362123.866666667,
            "unit": "ns",
            "range": "± 337548.15452674235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69037515.4,
            "unit": "ns",
            "range": "± 678038.5040037812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142727958.2,
            "unit": "ns",
            "range": "± 467037.01700525987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252065519.47619048,
            "unit": "ns",
            "range": "± 5955556.833630023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705818.1868131869,
            "unit": "ns",
            "range": "± 94851.14486685759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218552.153846154,
            "unit": "ns",
            "range": "± 129911.47642588141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2770849.8571428573,
            "unit": "ns",
            "range": "± 134496.00806858577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6760327.178571428,
            "unit": "ns",
            "range": "± 362303.8258650627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56545.21052631579,
            "unit": "ns",
            "range": "± 5286.644885624201"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "894e21b039d740071b17e1cb8f4d3418e4c8ea79",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:06:53+09:00",
          "tree_id": "8aaf61eb208203d8c717477447f34b1036726196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/894e21b039d740071b17e1cb8f4d3418e4c8ea79"
        },
        "date": 1684142724001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3446923.525252525,
            "unit": "ns",
            "range": "± 337685.09448350477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3730066.777777778,
            "unit": "ns",
            "range": "± 387624.6088733473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4892657.515151516,
            "unit": "ns",
            "range": "± 425400.6975998944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4855288.734042553,
            "unit": "ns",
            "range": "± 448599.9629968531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8644673.125,
            "unit": "ns",
            "range": "± 641746.8298019128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354142.404040404,
            "unit": "ns",
            "range": "± 48285.12918578707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340058.73195876286,
            "unit": "ns",
            "range": "± 56323.093177797906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285082.77419354836,
            "unit": "ns",
            "range": "± 34327.506562309674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4725791.886597938,
            "unit": "ns",
            "range": "± 474896.4932632442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4280518.197916667,
            "unit": "ns",
            "range": "± 403195.3735997533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31777.81111111111,
            "unit": "ns",
            "range": "± 6375.954735107897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108094.81052631579,
            "unit": "ns",
            "range": "± 15180.19736387742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114825.8762886598,
            "unit": "ns",
            "range": "± 22737.404906461277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121805.52173913043,
            "unit": "ns",
            "range": "± 20295.05797120243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5900,
            "unit": "ns",
            "range": "± 1347.219358530748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31691.362637362636,
            "unit": "ns",
            "range": "± 4990.849654932923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6180516.923095703,
            "unit": "ns",
            "range": "± 186908.5692490082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1947257.5103400736,
            "unit": "ns",
            "range": "± 39381.95371904158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451138.6399536133,
            "unit": "ns",
            "range": "± 67243.23197531824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713877.905539773,
            "unit": "ns",
            "range": "± 63772.27727614751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904332.4601199128,
            "unit": "ns",
            "range": "± 33201.66208383017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853123.324358259,
            "unit": "ns",
            "range": "± 14602.91632509726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8811408.922222223,
            "unit": "ns",
            "range": "± 848827.2344679183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22400126.583333332,
            "unit": "ns",
            "range": "± 2017317.5757708428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59559949.45454545,
            "unit": "ns",
            "range": "± 4190859.4516871762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120036393.29,
            "unit": "ns",
            "range": "± 7769936.971256253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227474330.87755102,
            "unit": "ns",
            "range": "± 17971221.16827952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655595.9795918367,
            "unit": "ns",
            "range": "± 228806.24189777044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3160372.19,
            "unit": "ns",
            "range": "± 498174.2953435926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2517455.2989690723,
            "unit": "ns",
            "range": "± 314727.950536159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6804889.03125,
            "unit": "ns",
            "range": "± 710348.8585979266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64640.044444444444,
            "unit": "ns",
            "range": "± 10356.50524751582"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "0e9c536ea2873e274d1ea61f1365a5056b1e90d4",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:43:41+09:00",
          "tree_id": "f0d7e7cff71394e74b848e0a49ca56bc1e3d8b16",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0e9c536ea2873e274d1ea61f1365a5056b1e90d4"
        },
        "date": 1684144546065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3148567.512195122,
            "unit": "ns",
            "range": "± 102877.32231427924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3386403.717391304,
            "unit": "ns",
            "range": "± 129925.85351562175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258627.6,
            "unit": "ns",
            "range": "± 137777.44440864213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4088604.6,
            "unit": "ns",
            "range": "± 53572.255072405314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6607212.954545454,
            "unit": "ns",
            "range": "± 145845.53609816017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269055.32653061225,
            "unit": "ns",
            "range": "± 10329.479118014122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261398.61538461538,
            "unit": "ns",
            "range": "± 8984.194667406888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223952.84615384616,
            "unit": "ns",
            "range": "± 1859.6995208076783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180255.466666667,
            "unit": "ns",
            "range": "± 33561.17935495173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3748049,
            "unit": "ns",
            "range": "± 41303.75230965273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15801,
            "unit": "ns",
            "range": "± 1589.348128537046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78195.48648648648,
            "unit": "ns",
            "range": "± 3926.494690510787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67073.30769230769,
            "unit": "ns",
            "range": "± 921.5998213808588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79692.46875,
            "unit": "ns",
            "range": "± 11507.654015757582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3836.1052631578946,
            "unit": "ns",
            "range": "± 504.4523989876001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14351.494252873563,
            "unit": "ns",
            "range": "± 798.8711930631378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5962290.064583333,
            "unit": "ns",
            "range": "± 32674.11477392296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893171.3298828125,
            "unit": "ns",
            "range": "± 12496.463450090741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380617.5662760416,
            "unit": "ns",
            "range": "± 3052.536206766648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2527093.798567708,
            "unit": "ns",
            "range": "± 4033.2251430190317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800412.0315104167,
            "unit": "ns",
            "range": "± 875.4020813334646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728864.10546875,
            "unit": "ns",
            "range": "± 577.5418391433758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7522678.4,
            "unit": "ns",
            "range": "± 42472.8520802238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18819150.466666665,
            "unit": "ns",
            "range": "± 77943.2728563048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47725505.8,
            "unit": "ns",
            "range": "± 247032.06648276022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96456619.33333333,
            "unit": "ns",
            "range": "± 1277238.8526891943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191907980.26923078,
            "unit": "ns",
            "range": "± 763356.4053681121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285921.4042553192,
            "unit": "ns",
            "range": "± 78284.48162130563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495899.9814814813,
            "unit": "ns",
            "range": "± 99968.34235717406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047763,
            "unit": "ns",
            "range": "± 92714.82866703457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5057062.833333333,
            "unit": "ns",
            "range": "± 147108.1330340521"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44763.70652173913,
            "unit": "ns",
            "range": "± 2744.929337299994"
          }
        ]
      }
    ]
  }
}