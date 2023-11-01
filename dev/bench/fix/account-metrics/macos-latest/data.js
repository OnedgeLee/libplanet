window.BENCHMARK_DATA = {
  "lastUpdate": 1698808526961,
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
      }
    ]
  }
}