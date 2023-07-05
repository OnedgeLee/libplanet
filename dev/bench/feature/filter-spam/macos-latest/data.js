window.BENCHMARK_DATA = {
  "lastUpdate": 1688538155143,
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
          "id": "0b225df110bba031ea1aa7b97806a03648949425",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-04T21:31:23+09:00",
          "tree_id": "7e2b739e9dfc5011a4fcf0809562b554ec8e6f8b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0b225df110bba031ea1aa7b97806a03648949425"
        },
        "date": 1688474890942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8800397.366666667,
            "unit": "ns",
            "range": "± 111195.24278741598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22660877.066666666,
            "unit": "ns",
            "range": "± 196654.2966235298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65502968.7,
            "unit": "ns",
            "range": "± 1404303.1464439316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114553817.9,
            "unit": "ns",
            "range": "± 3379333.1723965933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224982787.1,
            "unit": "ns",
            "range": "± 3681843.504026516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66374.42307692308,
            "unit": "ns",
            "range": "± 5564.660325524059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365497.22463768115,
            "unit": "ns",
            "range": "± 17235.271821508817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351786.83636363636,
            "unit": "ns",
            "range": "± 14754.163518796784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312794.53658536583,
            "unit": "ns",
            "range": "± 11108.190383895933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4760539.166666667,
            "unit": "ns",
            "range": "± 123256.09411044275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4311063.8,
            "unit": "ns",
            "range": "± 60186.72397772974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20455.731958762888,
            "unit": "ns",
            "range": "± 1996.0748436800072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99797.6914893617,
            "unit": "ns",
            "range": "± 7856.428376767755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94831.00515463918,
            "unit": "ns",
            "range": "± 9203.032753214778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113377.63157894737,
            "unit": "ns",
            "range": "± 10575.109875242917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5787.4,
            "unit": "ns",
            "range": "± 703.4220518143594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18850.22105263158,
            "unit": "ns",
            "range": "± 1933.8101745107851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845374.57,
            "unit": "ns",
            "range": "± 207475.02357736797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3328067.796296296,
            "unit": "ns",
            "range": "± 140243.52629156745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2376456.5520833335,
            "unit": "ns",
            "range": "± 182553.48264508648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6852322.444444444,
            "unit": "ns",
            "range": "± 225758.00085508052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3846740.238095238,
            "unit": "ns",
            "range": "± 88500.07916544752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4057449.2258064514,
            "unit": "ns",
            "range": "± 120732.79090501461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5100991.958333333,
            "unit": "ns",
            "range": "± 129302.09062618647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436202.428571428,
            "unit": "ns",
            "range": "± 135535.7335207834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8146888.583333333,
            "unit": "ns",
            "range": "± 255598.69926433786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6869333.176041666,
            "unit": "ns",
            "range": "± 125529.85573844775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2163396.0234375,
            "unit": "ns",
            "range": "± 40971.34691542966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1459577.3178385417,
            "unit": "ns",
            "range": "± 16353.120338787381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2874431.3453125,
            "unit": "ns",
            "range": "± 19256.65190362498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920124.5586588542,
            "unit": "ns",
            "range": "± 13339.048723779233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854700.903125,
            "unit": "ns",
            "range": "± 3881.625181642159"
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
          "id": "f2fa70cc1b37e089a54e82e4e43816dfd9e453fe",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-05T01:46:41+09:00",
          "tree_id": "ab0df906e3b2f33a4f75add01687f353a4f68186",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f2fa70cc1b37e089a54e82e4e43816dfd9e453fe"
        },
        "date": 1688490051161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8223110.061643835,
            "unit": "ns",
            "range": "± 388907.91812330025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19660146.57894737,
            "unit": "ns",
            "range": "± 426343.53041184414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49685730.15384615,
            "unit": "ns",
            "range": "± 1303193.9559958586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98965846.57142857,
            "unit": "ns",
            "range": "± 1572606.5679362114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203910429.13333333,
            "unit": "ns",
            "range": "± 2962494.642413573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54514.83870967742,
            "unit": "ns",
            "range": "± 5376.010330303389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300907.8611111111,
            "unit": "ns",
            "range": "± 13430.096427983875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288258.9213483146,
            "unit": "ns",
            "range": "± 16316.682604305715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275894.94736842107,
            "unit": "ns",
            "range": "± 15903.617843031829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4042224.095238095,
            "unit": "ns",
            "range": "± 94255.58562117408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3778603.619047619,
            "unit": "ns",
            "range": "± 87362.17755612332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16292.577777777778,
            "unit": "ns",
            "range": "± 1660.5806008998459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81109.34042553192,
            "unit": "ns",
            "range": "± 6359.234532540343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78687.84269662922,
            "unit": "ns",
            "range": "± 5118.125377915762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98826.94623655915,
            "unit": "ns",
            "range": "± 15201.680279242011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4518.988095238095,
            "unit": "ns",
            "range": "± 560.854822914709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15331.852272727272,
            "unit": "ns",
            "range": "± 1622.4921553023803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503593.1630434783,
            "unit": "ns",
            "range": "± 166414.29850465764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800104.8260869565,
            "unit": "ns",
            "range": "± 107388.00661760333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2074846.7142857143,
            "unit": "ns",
            "range": "± 231150.1564292305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6052759.708333333,
            "unit": "ns",
            "range": "± 459504.8798549865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3277831.5784313725,
            "unit": "ns",
            "range": "± 133350.91141073513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3452865.5094339624,
            "unit": "ns",
            "range": "± 144019.6695765791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4403422.55319149,
            "unit": "ns",
            "range": "± 251079.55260158094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3930611.6438356163,
            "unit": "ns",
            "range": "± 195586.11034318604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6899692.174603174,
            "unit": "ns",
            "range": "± 315277.76776608557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5806692.448660715,
            "unit": "ns",
            "range": "± 46281.815977456106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889889.7975260417,
            "unit": "ns",
            "range": "± 10694.972754667317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223415.7415364583,
            "unit": "ns",
            "range": "± 12314.044188615324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2379337.9375,
            "unit": "ns",
            "range": "± 13159.495079657429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873406.97109375,
            "unit": "ns",
            "range": "± 7121.62811777201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691339.8714192709,
            "unit": "ns",
            "range": "± 5557.893562887497"
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
          "id": "20387f84b688506c9887dc9837718efd25e6e4c5",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-05T01:47:24+09:00",
          "tree_id": "6ba9c34ff5f586450514be5cbef3dbac166ad4ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/20387f84b688506c9887dc9837718efd25e6e4c5"
        },
        "date": 1688490195175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8303816.280701755,
            "unit": "ns",
            "range": "± 359681.4778356854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20405194.318181816,
            "unit": "ns",
            "range": "± 641346.879972943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49155561,
            "unit": "ns",
            "range": "± 1091841.165437007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101400946.77272727,
            "unit": "ns",
            "range": "± 2396739.47412692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210889512.7368421,
            "unit": "ns",
            "range": "± 4600878.087457966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55533.425531914894,
            "unit": "ns",
            "range": "± 5619.608189551323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335481.8064516129,
            "unit": "ns",
            "range": "± 37618.771950883325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294124.82954545453,
            "unit": "ns",
            "range": "± 16848.935516170823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293347.35869565216,
            "unit": "ns",
            "range": "± 20593.142975689174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4127878.45,
            "unit": "ns",
            "range": "± 91410.15766398865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781336.9545454546,
            "unit": "ns",
            "range": "± 92107.87067629804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17257.666666666668,
            "unit": "ns",
            "range": "± 1901.6993114890245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82756.03260869565,
            "unit": "ns",
            "range": "± 7668.3546402755055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77905.02197802198,
            "unit": "ns",
            "range": "± 7160.032555757802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96752.33707865169,
            "unit": "ns",
            "range": "± 12843.044190908644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4470.898876404494,
            "unit": "ns",
            "range": "± 788.4506101575508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15797.931818181818,
            "unit": "ns",
            "range": "± 1199.0782743180214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558311.3260869565,
            "unit": "ns",
            "range": "± 122060.74328613123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2884953.556701031,
            "unit": "ns",
            "range": "± 221255.03918969323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2041484.3265306123,
            "unit": "ns",
            "range": "± 175541.67130742085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5563570.451612903,
            "unit": "ns",
            "range": "± 168570.16449179032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3267157.157534247,
            "unit": "ns",
            "range": "± 161323.95197278424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3449681.9468085105,
            "unit": "ns",
            "range": "± 211848.56205214528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4486567.616666666,
            "unit": "ns",
            "range": "± 198928.44258772043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3935734,
            "unit": "ns",
            "range": "± 205913.2423162726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7365909.641025641,
            "unit": "ns",
            "range": "± 377595.3373567843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6274737.905649038,
            "unit": "ns",
            "range": "± 80170.07003086443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2045401.9213541667,
            "unit": "ns",
            "range": "± 37380.807525935204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236109.1834542411,
            "unit": "ns",
            "range": "± 16252.332781409343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579568.6174665177,
            "unit": "ns",
            "range": "± 20123.663477584705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818265.8418619792,
            "unit": "ns",
            "range": "± 4010.743031282597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691128.3174479167,
            "unit": "ns",
            "range": "± 5485.3870082104795"
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
          "id": "f064f6d554009f1fdadd492b7c51b33e4dd59aa2",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T09:14:02+09:00",
          "tree_id": "236986b6058ee227e77bd34ee31b4f64fe5e269d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f064f6d554009f1fdadd492b7c51b33e4dd59aa2"
        },
        "date": 1688516904804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8080534.129032258,
            "unit": "ns",
            "range": "± 245612.20581840552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18949841.6,
            "unit": "ns",
            "range": "± 292275.23186710745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47007636.777777776,
            "unit": "ns",
            "range": "± 969129.7078650184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93517908.57142857,
            "unit": "ns",
            "range": "± 926437.315434423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189332055.33333334,
            "unit": "ns",
            "range": "± 1461518.0970004962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54754.815217391304,
            "unit": "ns",
            "range": "± 4794.302655704077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312590.77368421055,
            "unit": "ns",
            "range": "± 20131.4581515418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293152.44705882354,
            "unit": "ns",
            "range": "± 15680.547259875455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277726.2368421053,
            "unit": "ns",
            "range": "± 16951.241723932875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3979318.6785714286,
            "unit": "ns",
            "range": "± 111804.35546212082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919681.6842105263,
            "unit": "ns",
            "range": "± 70543.41255177758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17032.32967032967,
            "unit": "ns",
            "range": "± 1824.7992465227205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84659.93684210526,
            "unit": "ns",
            "range": "± 7799.817631270301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80348.85263157895,
            "unit": "ns",
            "range": "± 6615.009194069648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102476.11340206186,
            "unit": "ns",
            "range": "± 11785.834362590655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4913.25,
            "unit": "ns",
            "range": "± 513.0826208926483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16958.088888888888,
            "unit": "ns",
            "range": "± 1708.4812800100617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1555926.9494949495,
            "unit": "ns",
            "range": "± 155371.96026798993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3001189.757575758,
            "unit": "ns",
            "range": "± 132749.844408318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1944746.5789473683,
            "unit": "ns",
            "range": "± 145098.71214559482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5800367,
            "unit": "ns",
            "range": "± 298473.29176116706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3090164.914893617,
            "unit": "ns",
            "range": "± 120322.60425944581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3259081.566037736,
            "unit": "ns",
            "range": "± 134557.33428021127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218588.7894736845,
            "unit": "ns",
            "range": "± 88990.87967475403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3769800.7717391304,
            "unit": "ns",
            "range": "± 290199.479334251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6970957.44,
            "unit": "ns",
            "range": "± 279414.6039602286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6129728.5859375,
            "unit": "ns",
            "range": "± 41811.58421234506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856411.8673270089,
            "unit": "ns",
            "range": "± 5879.224811908481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216836.5897135416,
            "unit": "ns",
            "range": "± 4137.370307904487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2402830.794471154,
            "unit": "ns",
            "range": "± 13918.894932015179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814917.1583333333,
            "unit": "ns",
            "range": "± 5076.607785510174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693121.7391927083,
            "unit": "ns",
            "range": "± 3734.12116326192"
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
          "id": "1d55738fa0f34a63d8bf637893a33d40283b213e",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T14:54:45+09:00",
          "tree_id": "d47a05494fea83ea76b63ec519a1fcd951e25149",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1d55738fa0f34a63d8bf637893a33d40283b213e"
        },
        "date": 1688537518594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8221073.6,
            "unit": "ns",
            "range": "± 140845.71335573448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21230305.782608695,
            "unit": "ns",
            "range": "± 1023315.7972284174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50486869,
            "unit": "ns",
            "range": "± 1263107.4739052386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117209833.38461539,
            "unit": "ns",
            "range": "± 1570676.0047996074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222823735.86585367,
            "unit": "ns",
            "range": "± 7935388.236577256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69173.60869565218,
            "unit": "ns",
            "range": "± 9845.05803838983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329214.1473684211,
            "unit": "ns",
            "range": "± 26946.689076202678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332986.1923076923,
            "unit": "ns",
            "range": "± 36630.85695442279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314097.2727272727,
            "unit": "ns",
            "range": "± 14775.62203042613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4168935.5625,
            "unit": "ns",
            "range": "± 81185.09329835435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3776558.966666667,
            "unit": "ns",
            "range": "± 69166.23999453022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21538.959595959597,
            "unit": "ns",
            "range": "± 4626.92687035974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91193.66842105263,
            "unit": "ns",
            "range": "± 11689.110089029886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108231.22988505747,
            "unit": "ns",
            "range": "± 11669.258874955358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121627.75789473685,
            "unit": "ns",
            "range": "± 25102.78897352388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7936.747252747253,
            "unit": "ns",
            "range": "± 1049.917389273044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23708.731958762888,
            "unit": "ns",
            "range": "± 5469.789945912503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539091.4226804124,
            "unit": "ns",
            "range": "± 149093.87057165778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2928772.672839506,
            "unit": "ns",
            "range": "± 146878.4140199633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2060534.6666666667,
            "unit": "ns",
            "range": "± 196706.6391901132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5686736.957142857,
            "unit": "ns",
            "range": "± 177412.31703499635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3570148.3131313133,
            "unit": "ns",
            "range": "± 298390.41537948186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3847080.2040816327,
            "unit": "ns",
            "range": "± 330278.5479796493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4832116.556701031,
            "unit": "ns",
            "range": "± 360019.8374468693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4029034.129032258,
            "unit": "ns",
            "range": "± 270287.79976597347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7751951.020408163,
            "unit": "ns",
            "range": "± 602683.905869557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7362215.635881697,
            "unit": "ns",
            "range": "± 209467.04085575932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2087931.126953125,
            "unit": "ns",
            "range": "± 36555.97279108104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398629.1454427084,
            "unit": "ns",
            "range": "± 11119.585721911779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2971675.31109375,
            "unit": "ns",
            "range": "± 178204.38982709675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807854.6613581731,
            "unit": "ns",
            "range": "± 8475.805667228258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749375.0637369792,
            "unit": "ns",
            "range": "± 6200.930284206011"
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
          "id": "3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T15:03:14+09:00",
          "tree_id": "7c78d60a3f56f7f87efc4a16806afa2ac67e9d10",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79"
        },
        "date": 1688537979513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8327138.533333333,
            "unit": "ns",
            "range": "± 247616.89786504715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21356999.891304348,
            "unit": "ns",
            "range": "± 820759.1671234417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52694374.4117647,
            "unit": "ns",
            "range": "± 1654874.0165214697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106093966.88235295,
            "unit": "ns",
            "range": "± 3423387.9342564694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206965573.9,
            "unit": "ns",
            "range": "± 3570174.1142702955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64616.34782608696,
            "unit": "ns",
            "range": "± 9289.336504340574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348794.74418604653,
            "unit": "ns",
            "range": "± 34791.51644766159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333696.15882352943,
            "unit": "ns",
            "range": "± 29933.032843392954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305426.988372093,
            "unit": "ns",
            "range": "± 22919.886609792502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4447816.736842105,
            "unit": "ns",
            "range": "± 192930.19979243109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4285203.866666666,
            "unit": "ns",
            "range": "± 677490.03514362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17534.39285714286,
            "unit": "ns",
            "range": "± 2347.8255411155724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94160.62365591398,
            "unit": "ns",
            "range": "± 10754.848412120704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86420.12637362638,
            "unit": "ns",
            "range": "± 8392.595523102957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94871.3275862069,
            "unit": "ns",
            "range": "± 16747.03158022333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4854.922077922078,
            "unit": "ns",
            "range": "± 626.7414846530419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17227.690476190477,
            "unit": "ns",
            "range": "± 2808.654424119328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1798023.9042553192,
            "unit": "ns",
            "range": "± 198746.02814112403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3326202.1296296297,
            "unit": "ns",
            "range": "± 140125.04117950634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265236.4565217393,
            "unit": "ns",
            "range": "± 181040.9776994775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6688426.6707317075,
            "unit": "ns",
            "range": "± 236746.04535048758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461613.8970588236,
            "unit": "ns",
            "range": "± 165531.65335377405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3717535.411764706,
            "unit": "ns",
            "range": "± 151240.1423302923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5117589.431034483,
            "unit": "ns",
            "range": "± 906020.2368521742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4170933.152173913,
            "unit": "ns",
            "range": "± 270134.9280747986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7772586.292134832,
            "unit": "ns",
            "range": "± 460889.35243101185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6520122.892708333,
            "unit": "ns",
            "range": "± 79829.33384521068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2084707.5080422794,
            "unit": "ns",
            "range": "± 42105.88386345016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351607.472265625,
            "unit": "ns",
            "range": "± 14972.771540556232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3025788.334201389,
            "unit": "ns",
            "range": "± 100081.05023678903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943569.156389509,
            "unit": "ns",
            "range": "± 2805.890738559507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 847161.3129625822,
            "unit": "ns",
            "range": "± 18715.266557764102"
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
          "id": "3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T15:03:14+09:00",
          "tree_id": "7c78d60a3f56f7f87efc4a16806afa2ac67e9d10",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79"
        },
        "date": 1688538008143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7761764.666666667,
            "unit": "ns",
            "range": "± 92659.34440092658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18838134.78787879,
            "unit": "ns",
            "range": "± 532223.2993288483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45757792.07692308,
            "unit": "ns",
            "range": "± 382482.56447788165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93469238.85714285,
            "unit": "ns",
            "range": "± 929366.5683423519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187561676.13333333,
            "unit": "ns",
            "range": "± 1652081.0259176525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52639.55319148936,
            "unit": "ns",
            "range": "± 5418.614784731637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301480.1875,
            "unit": "ns",
            "range": "± 18579.77636107689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290879.28571428574,
            "unit": "ns",
            "range": "± 14158.882408187173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270408.5,
            "unit": "ns",
            "range": "± 17248.225112217755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3961513.423076923,
            "unit": "ns",
            "range": "± 106527.61090503178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3639231.033333333,
            "unit": "ns",
            "range": "± 65436.838592500426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16205.564705882352,
            "unit": "ns",
            "range": "± 1992.4600757609676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83758.17894736842,
            "unit": "ns",
            "range": "± 7122.202327900553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79517.90697674418,
            "unit": "ns",
            "range": "± 5007.306547619499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96346.37113402062,
            "unit": "ns",
            "range": "± 12228.549930490182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5147.365168539326,
            "unit": "ns",
            "range": "± 516.0217840497547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16253.662790697674,
            "unit": "ns",
            "range": "± 1508.9357574947444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633460,
            "unit": "ns",
            "range": "± 30559.291898428102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2882211.402173913,
            "unit": "ns",
            "range": "± 241531.94081419922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1934571.2872340425,
            "unit": "ns",
            "range": "± 145066.2499832643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5542075.215686275,
            "unit": "ns",
            "range": "± 204422.93953128782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065928.2439024393,
            "unit": "ns",
            "range": "± 162140.04400036338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3276659.5476190476,
            "unit": "ns",
            "range": "± 108714.59359167266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109752.1666666665,
            "unit": "ns",
            "range": "± 134526.6040559583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3688708.4266666668,
            "unit": "ns",
            "range": "± 180113.63561510597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6952860.835820896,
            "unit": "ns",
            "range": "± 323407.63732467295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053653.779575893,
            "unit": "ns",
            "range": "± 39265.59385215029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867560.6586216518,
            "unit": "ns",
            "range": "± 9697.305974551276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228849.26640625,
            "unit": "ns",
            "range": "± 8175.8893051175055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2358206.688058036,
            "unit": "ns",
            "range": "± 15893.026834913566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750714.0295061384,
            "unit": "ns",
            "range": "± 3179.1551664931712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 690099.8766043527,
            "unit": "ns",
            "range": "± 4754.653350607473"
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
          "id": "485c7dc0aebcde157c895f822742c6b832cbd55f",
          "message": "dummy commit for upstrem refresh error",
          "timestamp": "2023-07-05T15:06:02+09:00",
          "tree_id": "8d083881b10d5cddcec3791ee5f0b4021cff4f2f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/485c7dc0aebcde157c895f822742c6b832cbd55f"
        },
        "date": 1688538127476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7961895.5,
            "unit": "ns",
            "range": "± 38116.68377495608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20365860.80612245,
            "unit": "ns",
            "range": "± 807403.1059593983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50064132.217391305,
            "unit": "ns",
            "range": "± 1908417.7513328204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99750758.09433962,
            "unit": "ns",
            "range": "± 3866960.4877812145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203555439.85714287,
            "unit": "ns",
            "range": "± 1622471.8186814575"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57783.94623655914,
            "unit": "ns",
            "range": "± 7657.909990394973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332142.22580645164,
            "unit": "ns",
            "range": "± 30868.09034709984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315119.9555555555,
            "unit": "ns",
            "range": "± 25797.22615310863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292267.8367346939,
            "unit": "ns",
            "range": "± 22349.37512396784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4204149.290909091,
            "unit": "ns",
            "range": "± 176923.03027385715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3947791.14516129,
            "unit": "ns",
            "range": "± 177604.23540639467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16222.186046511628,
            "unit": "ns",
            "range": "± 1132.9727919647592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97288.97311827957,
            "unit": "ns",
            "range": "± 16866.20875132557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101480.27173913043,
            "unit": "ns",
            "range": "± 13055.123210687272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122798.0425531915,
            "unit": "ns",
            "range": "± 21626.735151303383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6821.494736842105,
            "unit": "ns",
            "range": "± 1010.6201053375249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20964.456521739132,
            "unit": "ns",
            "range": "± 4353.550131253988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1687278.9191919193,
            "unit": "ns",
            "range": "± 195052.49631932823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011896.419354839,
            "unit": "ns",
            "range": "± 171953.25649357776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096994.797979798,
            "unit": "ns",
            "range": "± 208158.87412684257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5914655.414634147,
            "unit": "ns",
            "range": "± 312124.43921429524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212741.861111111,
            "unit": "ns",
            "range": "± 152549.69890482337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3450933.1134020616,
            "unit": "ns",
            "range": "± 207733.0775013573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4497819.518867925,
            "unit": "ns",
            "range": "± 185653.2318226946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3855856.4625,
            "unit": "ns",
            "range": "± 201529.36841002954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7562228.360824742,
            "unit": "ns",
            "range": "± 491960.84501271934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8094950.618790064,
            "unit": "ns",
            "range": "± 413149.9109681741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2159165.0147879464,
            "unit": "ns",
            "range": "± 36177.883300611116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295212.470982143,
            "unit": "ns",
            "range": "± 6362.566344172574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2923455.155029297,
            "unit": "ns",
            "range": "± 90895.8534512241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796839.2503487723,
            "unit": "ns",
            "range": "± 3238.2574194374893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752943.1209635417,
            "unit": "ns",
            "range": "± 2544.4446883238384"
          }
        ]
      }
    ]
  }
}