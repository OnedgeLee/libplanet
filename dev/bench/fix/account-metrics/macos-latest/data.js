window.BENCHMARK_DATA = {
  "lastUpdate": 1700820864322,
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
          "id": "324184e4815b9ea2ba056265b536e077d0c08411",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-01T11:54:43+09:00",
          "tree_id": "3b0cb04acaab6ec004dd75eb29facea232ce0a7d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324184e4815b9ea2ba056265b536e077d0c08411"
        },
        "date": 1698808488925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9052135.08219178,
            "unit": "ns",
            "range": "± 448495.9505621648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22042157.18,
            "unit": "ns",
            "range": "± 878622.5115709548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55203892.39622641,
            "unit": "ns",
            "range": "± 2298567.577386858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107503925.56666666,
            "unit": "ns",
            "range": "± 1901143.6952653925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212386604.1521739,
            "unit": "ns",
            "range": "± 5347298.462131735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73195.85882352942,
            "unit": "ns",
            "range": "± 10152.052120903743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315883.123655914,
            "unit": "ns",
            "range": "± 32165.93438444183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318150.15591397847,
            "unit": "ns",
            "range": "± 32138.200929225557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289149.51086956525,
            "unit": "ns",
            "range": "± 21846.895537998804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4212482.645833333,
            "unit": "ns",
            "range": "± 166138.59332061515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3812902.275862069,
            "unit": "ns",
            "range": "± 111235.36876817826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21988.288659793816,
            "unit": "ns",
            "range": "± 4013.475486197413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100663.92105263157,
            "unit": "ns",
            "range": "± 17140.115258543272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108745.56666666667,
            "unit": "ns",
            "range": "± 12782.456486849554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99487.88043478261,
            "unit": "ns",
            "range": "± 13636.90636007519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6385.478494623656,
            "unit": "ns",
            "range": "± 1005.1977739479347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22001.065217391304,
            "unit": "ns",
            "range": "± 3416.588488068011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1721054.1818181819,
            "unit": "ns",
            "range": "± 267387.42177229567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066729.0465116277,
            "unit": "ns",
            "range": "± 229466.94934759542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2892886.5113636362,
            "unit": "ns",
            "range": "± 426181.67609147367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13650908.267676767,
            "unit": "ns",
            "range": "± 3449994.002538729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216466.593023256,
            "unit": "ns",
            "range": "± 167303.88660535045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3371310.9836065574,
            "unit": "ns",
            "range": "± 129119.79814000792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4370043.955555555,
            "unit": "ns",
            "range": "± 147292.5222691467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4646551.416666667,
            "unit": "ns",
            "range": "± 403703.4094063211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16114637.744680852,
            "unit": "ns",
            "range": "± 2001470.647354869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5953060.6765625,
            "unit": "ns",
            "range": "± 131891.33646191313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1758626.0467601102,
            "unit": "ns",
            "range": "± 35618.99417994991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064203.9453125,
            "unit": "ns",
            "range": "± 5197.717544113675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2865795.3310883623,
            "unit": "ns",
            "range": "± 153976.39533209475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805350.0661621094,
            "unit": "ns",
            "range": "± 17113.50162978567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796763.326547476,
            "unit": "ns",
            "range": "± 32767.843999372722"
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
          "id": "922355cec7ebbfdc2baeda0504f6087f2bd7200c",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T18:55:11+09:00",
          "tree_id": "dd2512e131b5f33a2a42b9eb3dd262f9502b4732",
          "url": "https://github.com/OnedgeLee/libplanet/commit/922355cec7ebbfdc2baeda0504f6087f2bd7200c"
        },
        "date": 1700820837939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8670750.92,
            "unit": "ns",
            "range": "± 804233.0943537713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22060977.19387755,
            "unit": "ns",
            "range": "± 2039466.5531609484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59829698.76404494,
            "unit": "ns",
            "range": "± 4152414.908240677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120882926.75925925,
            "unit": "ns",
            "range": "± 5042854.840160621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243397207.54545453,
            "unit": "ns",
            "range": "± 5895581.673987876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51266.645833333336,
            "unit": "ns",
            "range": "± 15068.483806645594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285043.5268817204,
            "unit": "ns",
            "range": "± 18796.843934665227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277669.15853658534,
            "unit": "ns",
            "range": "± 14690.720687991468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273693.26923076925,
            "unit": "ns",
            "range": "± 7448.609628958642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4600958.269230769,
            "unit": "ns",
            "range": "± 56964.137032513485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4315729.033333333,
            "unit": "ns",
            "range": "± 128365.51488183327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25168.467391304348,
            "unit": "ns",
            "range": "± 5360.223089606771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94933.45054945054,
            "unit": "ns",
            "range": "± 6902.337614112637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98098.98863636363,
            "unit": "ns",
            "range": "± 5908.85574039415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97488.66666666667,
            "unit": "ns",
            "range": "± 18258.322314504992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7079.010869565217,
            "unit": "ns",
            "range": "± 797.0447130530563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21899.239583333332,
            "unit": "ns",
            "range": "± 3602.802206893353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018300.3186813187,
            "unit": "ns",
            "range": "± 76622.67839961383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2260027.196969697,
            "unit": "ns",
            "range": "± 147987.71057177207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489525.5315789473,
            "unit": "ns",
            "range": "± 105808.06899482613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6618103.263736264,
            "unit": "ns",
            "range": "± 467826.00123811077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3754698.095505618,
            "unit": "ns",
            "range": "± 398347.4279274631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3743046.1276595746,
            "unit": "ns",
            "range": "± 235218.73560668644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4538064.745762712,
            "unit": "ns",
            "range": "± 200554.27742724732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256561.94,
            "unit": "ns",
            "range": "± 171168.262960261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15817000.7,
            "unit": "ns",
            "range": "± 3172206.053993332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5849050.994419643,
            "unit": "ns",
            "range": "± 309617.05376688135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1379765.65512483,
            "unit": "ns",
            "range": "± 78142.93190923728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 977792.6054199219,
            "unit": "ns",
            "range": "± 83151.46359984574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982009.3901909722,
            "unit": "ns",
            "range": "± 35396.14051603813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637002.2428927951,
            "unit": "ns",
            "range": "± 12793.732897123436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581393.4453776042,
            "unit": "ns",
            "range": "± 7202.118575362411"
          }
        ]
      }
    ]
  }
}