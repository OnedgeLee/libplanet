window.BENCHMARK_DATA = {
  "lastUpdate": 1684131290786,
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
        "date": 1683858973936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814317.0212765958,
            "unit": "ns",
            "range": "± 191867.02700372163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3460896.7741935486,
            "unit": "ns",
            "range": "± 199865.82317167128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2838806.3829787234,
            "unit": "ns",
            "range": "± 191120.48601307304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7207113.684210527,
            "unit": "ns",
            "range": "± 448658.642833807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85402.12765957447,
            "unit": "ns",
            "range": "± 12720.443107209076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10099619.696969697,
            "unit": "ns",
            "range": "± 279163.8166973476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25418720.689655174,
            "unit": "ns",
            "range": "± 721563.7667986456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65682053.333333336,
            "unit": "ns",
            "range": "± 812596.3352706177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130776800,
            "unit": "ns",
            "range": "± 2501964.965282288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265145607.14285713,
            "unit": "ns",
            "range": "± 2738642.5816351166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6225357.533482143,
            "unit": "ns",
            "range": "± 71139.07599890186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970098.158482143,
            "unit": "ns",
            "range": "± 22202.93877062089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482469.8958333333,
            "unit": "ns",
            "range": "± 18476.649131282546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3315114.1536458335,
            "unit": "ns",
            "range": "± 49319.23066378753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1077403.203125,
            "unit": "ns",
            "range": "± 14493.868484872855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1011802.6822916666,
            "unit": "ns",
            "range": "± 12901.827059587175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4145751.5463917525,
            "unit": "ns",
            "range": "± 288962.3433199537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4409513.978494624,
            "unit": "ns",
            "range": "± 281165.37590326736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5472552.459016394,
            "unit": "ns",
            "range": "± 243589.39605174208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5449174.074074074,
            "unit": "ns",
            "range": "± 285555.4284100452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8884466.279069768,
            "unit": "ns",
            "range": "± 479367.7960693071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365534.7826086957,
            "unit": "ns",
            "range": "± 30089.808558266042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348336.84210526315,
            "unit": "ns",
            "range": "± 33190.66471109258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331106.5934065934,
            "unit": "ns",
            "range": "± 22329.83456274389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5221888,
            "unit": "ns",
            "range": "± 134889.28892490562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4810133.783783784,
            "unit": "ns",
            "range": "± 237086.2632888742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34030.769230769234,
            "unit": "ns",
            "range": "± 5767.277276105873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141139.69072164947,
            "unit": "ns",
            "range": "± 18581.641278737567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125875,
            "unit": "ns",
            "range": "± 16064.893298845676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147129.5918367347,
            "unit": "ns",
            "range": "± 29514.931427182288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8531.111111111111,
            "unit": "ns",
            "range": "± 1226.9350178707116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32597,
            "unit": "ns",
            "range": "± 8107.07952248147"
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
        "date": 1683863018195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427615.4639175257,
            "unit": "ns",
            "range": "± 118217.50640609997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542733.3333333335,
            "unit": "ns",
            "range": "± 96376.49421079623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2270713.402061856,
            "unit": "ns",
            "range": "± 147356.8999549973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5596205,
            "unit": "ns",
            "range": "± 370861.44146112876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54949.47368421053,
            "unit": "ns",
            "range": "± 5161.062765456448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591263.636363637,
            "unit": "ns",
            "range": "± 179136.93231570232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20147333.333333332,
            "unit": "ns",
            "range": "± 261897.1010056268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50459707.692307696,
            "unit": "ns",
            "range": "± 314822.5914742526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100911966.66666667,
            "unit": "ns",
            "range": "± 1218320.8225531837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202372280,
            "unit": "ns",
            "range": "± 2176524.777253868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857248.359375,
            "unit": "ns",
            "range": "± 16247.926541823179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1535656.6666666667,
            "unit": "ns",
            "range": "± 5483.065876822735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175579.3294270833,
            "unit": "ns",
            "range": "± 4981.211170301146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658387.34375,
            "unit": "ns",
            "range": "± 6665.090364058842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851964.1392299107,
            "unit": "ns",
            "range": "± 1842.3586912103492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784196.7912946428,
            "unit": "ns",
            "range": "± 2040.686714337285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3280964.5833333335,
            "unit": "ns",
            "range": "± 127949.03571441336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3476016.6666666665,
            "unit": "ns",
            "range": "± 78810.12772406892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3956090,
            "unit": "ns",
            "range": "± 72932.37376403666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4315822,
            "unit": "ns",
            "range": "± 172732.81631656754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6607205.555555556,
            "unit": "ns",
            "range": "± 179382.02751354937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283174.28571428574,
            "unit": "ns",
            "range": "± 13724.121214328808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272334.28571428574,
            "unit": "ns",
            "range": "± 13228.295164557774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235344.79166666666,
            "unit": "ns",
            "range": "± 14192.665784178937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4081521.052631579,
            "unit": "ns",
            "range": "± 90509.6838216612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3602541.1764705884,
            "unit": "ns",
            "range": "± 70596.79577381266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25413.684210526317,
            "unit": "ns",
            "range": "± 2747.285334239377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103645.83333333333,
            "unit": "ns",
            "range": "± 9465.915772048089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102494,
            "unit": "ns",
            "range": "± 12852.7662392187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116445.55555555556,
            "unit": "ns",
            "range": "± 12030.748630456812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8483.673469387755,
            "unit": "ns",
            "range": "± 1519.4066854478808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22897.894736842107,
            "unit": "ns",
            "range": "± 2221.029996222685"
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
        "date": 1683866807063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427696,
            "unit": "ns",
            "range": "± 37578.42333041662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2434843.9393939395,
            "unit": "ns",
            "range": "± 114296.80543188742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2041855.5555555555,
            "unit": "ns",
            "range": "± 139176.0375679182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5152293.478260869,
            "unit": "ns",
            "range": "± 290473.63683002844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46052.808988764045,
            "unit": "ns",
            "range": "± 2562.6730490411614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6752085.714285715,
            "unit": "ns",
            "range": "± 39990.86159348171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18751085.714285713,
            "unit": "ns",
            "range": "± 127345.37445704258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47409665.384615384,
            "unit": "ns",
            "range": "± 1292307.004992949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93333628,
            "unit": "ns",
            "range": "± 2399321.953788889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184359720,
            "unit": "ns",
            "range": "± 2842280.9975189194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4705055.989583333,
            "unit": "ns",
            "range": "± 27202.756300751455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1488169.3229166667,
            "unit": "ns",
            "range": "± 9215.918017154565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136342.03125,
            "unit": "ns",
            "range": "± 6218.5869442607645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579455.7291666665,
            "unit": "ns",
            "range": "± 11793.837284863812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819549.0690104166,
            "unit": "ns",
            "range": "± 3032.255135606141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762880.0065104166,
            "unit": "ns",
            "range": "± 3153.6992939794054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2994750.704225352,
            "unit": "ns",
            "range": "± 142207.25204859022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3098347.0588235296,
            "unit": "ns",
            "range": "± 98039.03438842417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3777430.769230769,
            "unit": "ns",
            "range": "± 42943.59448965943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3940489.4736842103,
            "unit": "ns",
            "range": "± 134775.85353843172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6345852.777777778,
            "unit": "ns",
            "range": "± 195031.36082781458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259261.11111111112,
            "unit": "ns",
            "range": "± 10333.174577802598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242066.66666666666,
            "unit": "ns",
            "range": "± 10375.513978718387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205970.58823529413,
            "unit": "ns",
            "range": "± 4088.0564920696656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3830180,
            "unit": "ns",
            "range": "± 65112.542131736365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445293.3333333335,
            "unit": "ns",
            "range": "± 56158.73506240614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18236.559139784946,
            "unit": "ns",
            "range": "± 1513.761866448054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83381.52173913043,
            "unit": "ns",
            "range": "± 6940.752870266713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75279.16666666667,
            "unit": "ns",
            "range": "± 4783.082394542504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92619.38775510204,
            "unit": "ns",
            "range": "± 15144.306937294374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4955.208333333333,
            "unit": "ns",
            "range": "± 613.5092830193178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17470.833333333332,
            "unit": "ns",
            "range": "± 1525.0136611409966"
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
        "date": 1683869780211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1056450.505050505,
            "unit": "ns",
            "range": "± 117329.09444295366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801490.6976744186,
            "unit": "ns",
            "range": "± 65786.16446651946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1628533.3333333333,
            "unit": "ns",
            "range": "± 135746.5747685867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3778966.037735849,
            "unit": "ns",
            "range": "± 156166.93354252513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32562.5,
            "unit": "ns",
            "range": "± 1545.9567892946418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5026533.333333333,
            "unit": "ns",
            "range": "± 16502.910670728983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13000820,
            "unit": "ns",
            "range": "± 109806.73411563999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32187593.333333332,
            "unit": "ns",
            "range": "± 331216.6715668303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64628040,
            "unit": "ns",
            "range": "± 888540.7417301054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136445726.98412699,
            "unit": "ns",
            "range": "± 4881246.680101514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3580492.8125,
            "unit": "ns",
            "range": "± 8841.85764336426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1147022.8385416667,
            "unit": "ns",
            "range": "± 2700.0329307956513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816762.0182291666,
            "unit": "ns",
            "range": "± 2935.1211215535923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921630.6380208333,
            "unit": "ns",
            "range": "± 2628.6857118206995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617092.2921316965,
            "unit": "ns",
            "range": "± 810.5435167260981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586803.7527901785,
            "unit": "ns",
            "range": "± 863.1822766294013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2197652.6315789474,
            "unit": "ns",
            "range": "± 42655.927924902804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293075,
            "unit": "ns",
            "range": "± 34311.32951859099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2815559.523809524,
            "unit": "ns",
            "range": "± 52752.695710853535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2924550,
            "unit": "ns",
            "range": "± 67105.85631955643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4577172,
            "unit": "ns",
            "range": "± 181499.5058631605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174810.9375,
            "unit": "ns",
            "range": "± 8081.472386424375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168939.7435897436,
            "unit": "ns",
            "range": "± 8212.175625547014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146200,
            "unit": "ns",
            "range": "± 3289.3768406797053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2703528.5714285714,
            "unit": "ns",
            "range": "± 33236.082768614564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2435426.6666666665,
            "unit": "ns",
            "range": "± 44146.11237804795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9634.408602150537,
            "unit": "ns",
            "range": "± 1273.602782904015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52715.38461538462,
            "unit": "ns",
            "range": "± 3701.678990732091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44406.52173913043,
            "unit": "ns",
            "range": "± 1505.7522555428777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59560.43956043956,
            "unit": "ns",
            "range": "± 9790.107014746844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2364.5833333333335,
            "unit": "ns",
            "range": "± 655.660240427306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9475.531914893618,
            "unit": "ns",
            "range": "± 983.0483826477725"
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
        "date": 1683906500770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399105.0505050505,
            "unit": "ns",
            "range": "± 109459.52506425991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2629277.5862068967,
            "unit": "ns",
            "range": "± 112967.64952713418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2293830,
            "unit": "ns",
            "range": "± 195697.3232398244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5467943.617021277,
            "unit": "ns",
            "range": "± 311576.1936046865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55984.21052631579,
            "unit": "ns",
            "range": "± 5203.0333989848505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7806133.333333333,
            "unit": "ns",
            "range": "± 118229.82864299677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20666608.82352941,
            "unit": "ns",
            "range": "± 401599.3573494975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51441760,
            "unit": "ns",
            "range": "± 515468.7281632958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101988866.66666667,
            "unit": "ns",
            "range": "± 833487.5186885067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206902693.33333334,
            "unit": "ns",
            "range": "± 1557630.222699427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4900032.979910715,
            "unit": "ns",
            "range": "± 16758.38883371771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536024.0755208333,
            "unit": "ns",
            "range": "± 6399.2840611125475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186196.40625,
            "unit": "ns",
            "range": "± 4415.217484550247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692852.6171875,
            "unit": "ns",
            "range": "± 18199.68490399686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834135.0716145834,
            "unit": "ns",
            "range": "± 3063.734177756097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759020.5013020834,
            "unit": "ns",
            "range": "± 3086.4407719603787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3364743.75,
            "unit": "ns",
            "range": "± 54735.41167897311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3566700,
            "unit": "ns",
            "range": "± 70067.85996446588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4066082.3529411764,
            "unit": "ns",
            "range": "± 130502.70976076304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4399837.5,
            "unit": "ns",
            "range": "± 113556.32508755865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6758930.434782608,
            "unit": "ns",
            "range": "± 167220.4626310119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283134.2105263158,
            "unit": "ns",
            "range": "± 9579.969991370634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270591.4893617021,
            "unit": "ns",
            "range": "± 10507.323114758005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241331.81818181818,
            "unit": "ns",
            "range": "± 13299.896684885605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124900,
            "unit": "ns",
            "range": "± 50467.81152378217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751000,
            "unit": "ns",
            "range": "± 48611.99146595122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25217.708333333332,
            "unit": "ns",
            "range": "± 2428.211158409532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109162,
            "unit": "ns",
            "range": "± 11406.331575050763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104901,
            "unit": "ns",
            "range": "± 10585.329041134759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115650,
            "unit": "ns",
            "range": "± 13882.399702694644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8491.752577319588,
            "unit": "ns",
            "range": "± 1399.6777979750655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24788.541666666668,
            "unit": "ns",
            "range": "± 3049.7927381404184"
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
        "date": 1684127820371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1361895.9595959596,
            "unit": "ns",
            "range": "± 106855.43249126978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2506298.214285714,
            "unit": "ns",
            "range": "± 107530.70595893051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142113.2653061226,
            "unit": "ns",
            "range": "± 134066.89485642736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5288227,
            "unit": "ns",
            "range": "± 357304.834869628"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49569.230769230766,
            "unit": "ns",
            "range": "± 3196.202340545636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7042161.111111111,
            "unit": "ns",
            "range": "± 128815.61441199537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19843046.153846152,
            "unit": "ns",
            "range": "± 135965.31184695978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48283405.88235294,
            "unit": "ns",
            "range": "± 951831.2747479121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96611453.33333333,
            "unit": "ns",
            "range": "± 975240.4354580365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194324250,
            "unit": "ns",
            "range": "± 2298751.64675559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4740456.25,
            "unit": "ns",
            "range": "± 17143.274549216385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516120.5338541667,
            "unit": "ns",
            "range": "± 7082.659535512628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173514.3489583333,
            "unit": "ns",
            "range": "± 6985.375045858893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592575.4947916665,
            "unit": "ns",
            "range": "± 8722.594962652283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824453.9127604166,
            "unit": "ns",
            "range": "± 5618.8898941083635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771878.6328125,
            "unit": "ns",
            "range": "± 1805.4431322573228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3124866.6666666665,
            "unit": "ns",
            "range": "± 108118.92169306062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3250709.375,
            "unit": "ns",
            "range": "± 100120.69606351094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3855544.736842105,
            "unit": "ns",
            "range": "± 84156.35232961859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4122095.8333333335,
            "unit": "ns",
            "range": "± 105133.17632647058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6482708.695652174,
            "unit": "ns",
            "range": "± 246069.35050111107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266177.14285714284,
            "unit": "ns",
            "range": "± 7491.724285710816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250702.04081632654,
            "unit": "ns",
            "range": "± 9829.85439439293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207525,
            "unit": "ns",
            "range": "± 3053.202491572653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3868771.4285714286,
            "unit": "ns",
            "range": "± 59842.63245664131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582893.3333333335,
            "unit": "ns",
            "range": "± 54406.89907232967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20091.75257731959,
            "unit": "ns",
            "range": "± 2149.9840165633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88268.75,
            "unit": "ns",
            "range": "± 5268.002967269275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81881.05263157895,
            "unit": "ns",
            "range": "± 7010.33120194975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96794.5054945055,
            "unit": "ns",
            "range": "± 13421.817749365833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6465.306122448979,
            "unit": "ns",
            "range": "± 1063.9453943836452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18746.236559139787,
            "unit": "ns",
            "range": "± 1620.0885066929104"
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
        "date": 1684131241023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1600674.7368421052,
            "unit": "ns",
            "range": "± 130014.7004523204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2902182.222222222,
            "unit": "ns",
            "range": "± 108726.5466640735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559850.5376344086,
            "unit": "ns",
            "range": "± 171992.4679996797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6366563.541666667,
            "unit": "ns",
            "range": "± 443782.64051810245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54955.05617977528,
            "unit": "ns",
            "range": "± 3055.3236413882814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8918911.764705881,
            "unit": "ns",
            "range": "± 175648.79334325407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23315678.57142857,
            "unit": "ns",
            "range": "± 260333.91923737962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59158919.047619045,
            "unit": "ns",
            "range": "± 1349575.8532290978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121680576.59574468,
            "unit": "ns",
            "range": "± 4687429.394585367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235430605.88235295,
            "unit": "ns",
            "range": "± 4778391.71171517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5837699.869791667,
            "unit": "ns",
            "range": "± 106938.40804951434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869177.0638020833,
            "unit": "ns",
            "range": "± 34349.63117465863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1443756.1732700893,
            "unit": "ns",
            "range": "± 40660.89591775383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3327153.4705528845,
            "unit": "ns",
            "range": "± 88190.27497470372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1039919.9848790322,
            "unit": "ns",
            "range": "± 31476.31782745858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943118.9104352678,
            "unit": "ns",
            "range": "± 26704.12033309318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3764070.6666666665,
            "unit": "ns",
            "range": "± 188369.7562611203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4196264.893617021,
            "unit": "ns",
            "range": "± 321028.26616829366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4643237.037037037,
            "unit": "ns",
            "range": "± 130033.36302109355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4944683.116883117,
            "unit": "ns",
            "range": "± 247370.82402666428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7940525,
            "unit": "ns",
            "range": "± 215438.56184205145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312777.1929824561,
            "unit": "ns",
            "range": "± 13589.242299174159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299054.25531914894,
            "unit": "ns",
            "range": "± 11533.99432013356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265638.8888888889,
            "unit": "ns",
            "range": "± 14245.367427117599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4663823.076923077,
            "unit": "ns",
            "range": "± 68243.09676744055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4381135.714285715,
            "unit": "ns",
            "range": "± 123399.86408025924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24009.278350515466,
            "unit": "ns",
            "range": "± 2312.10953794666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106388.29787234042,
            "unit": "ns",
            "range": "± 8541.887384083275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100281.63265306123,
            "unit": "ns",
            "range": "± 10033.53497582421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116952.12765957447,
            "unit": "ns",
            "range": "± 18769.700639356368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7726.80412371134,
            "unit": "ns",
            "range": "± 1070.194244821698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23654.301075268817,
            "unit": "ns",
            "range": "± 2504.9478853597725"
          }
        ]
      }
    ]
  }
}