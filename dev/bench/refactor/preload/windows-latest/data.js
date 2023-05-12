window.BENCHMARK_DATA = {
  "lastUpdate": 1683866839456,
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
      }
    ]
  }
}