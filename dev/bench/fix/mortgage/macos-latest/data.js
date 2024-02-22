window.BENCHMARK_DATA = {
  "lastUpdate": 1708586817842,
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
          "id": "8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:05:30+09:00",
          "tree_id": "3fdd296222640e7db1e6a6370a55aa7a3699a196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8dccb6e0f63b8980c3f18a7947cfe8957dadb0d2"
        },
        "date": 1708586452792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8340481.076923077,
            "unit": "ns",
            "range": "± 174939.73567744365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20732798,
            "unit": "ns",
            "range": "± 145012.07273494377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49256971.27941176,
            "unit": "ns",
            "range": "± 2177923.671858012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98526972.52380952,
            "unit": "ns",
            "range": "± 3563257.9635554906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201419675.31967214,
            "unit": "ns",
            "range": "± 9039171.283883603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49818.96666666667,
            "unit": "ns",
            "range": "± 10115.1907272337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233921.44736842104,
            "unit": "ns",
            "range": "± 22318.589405003073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231012.06593406593,
            "unit": "ns",
            "range": "± 18301.014151499425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236264.5459770115,
            "unit": "ns",
            "range": "± 18797.584998219947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104495.34375,
            "unit": "ns",
            "range": "± 113299.72252111607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572421.9827586208,
            "unit": "ns",
            "range": "± 92810.37797213225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15969.583333333334,
            "unit": "ns",
            "range": "± 2726.2121424449047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69349.76804123711,
            "unit": "ns",
            "range": "± 9132.98432938209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73357.68681318681,
            "unit": "ns",
            "range": "± 8814.896061544012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78398.92708333333,
            "unit": "ns",
            "range": "± 9248.351678166668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5193.50505050505,
            "unit": "ns",
            "range": "± 1443.3544996669825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15465.863157894737,
            "unit": "ns",
            "range": "± 2514.922817691901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1112020.255319149,
            "unit": "ns",
            "range": "± 99097.66527708712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2407940.953846154,
            "unit": "ns",
            "range": "± 111480.73132587066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892029.670212766,
            "unit": "ns",
            "range": "± 203539.6473756899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12406446.989583334,
            "unit": "ns",
            "range": "± 4891594.4428344965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2958324.6071428573,
            "unit": "ns",
            "range": "± 122920.84023078778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3079427.024390244,
            "unit": "ns",
            "range": "± 162493.11286208566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3799940.5,
            "unit": "ns",
            "range": "± 126081.922482057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3879597.3,
            "unit": "ns",
            "range": "± 115700.02169229073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17045701.466292135,
            "unit": "ns",
            "range": "± 2252670.5146583975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4543619.504464285,
            "unit": "ns",
            "range": "± 75800.55451802898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1389803.8311941964,
            "unit": "ns",
            "range": "± 15171.409583765862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 871474.6241629465,
            "unit": "ns",
            "range": "± 5836.718142199321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944064.6039663462,
            "unit": "ns",
            "range": "± 20701.788289178974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643612.0024088542,
            "unit": "ns",
            "range": "± 7310.154796600883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581118.6489583333,
            "unit": "ns",
            "range": "± 6510.439975818876"
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
          "id": "8852513afe358ef7572e74454706f6c1bdfe3fcf",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets\n\n[no changelog]",
          "timestamp": "2024-02-22T16:13:33+09:00",
          "tree_id": "f1f064ff5f0c00010e42112584f77f6a0c7deed6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8852513afe358ef7572e74454706f6c1bdfe3fcf"
        },
        "date": 1708586794156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7575870.769230769,
            "unit": "ns",
            "range": "± 56844.911417167685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18958626.913043477,
            "unit": "ns",
            "range": "± 466237.62951767934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49039389.78787879,
            "unit": "ns",
            "range": "± 1507702.468950227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97562101.53333333,
            "unit": "ns",
            "range": "± 1184492.4005457761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203993339.3125,
            "unit": "ns",
            "range": "± 3809369.8582714386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39036.583333333336,
            "unit": "ns",
            "range": "± 8691.213981786028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236418.30412371134,
            "unit": "ns",
            "range": "± 27185.663471165877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235187.806122449,
            "unit": "ns",
            "range": "± 32519.721781014694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206104.9375,
            "unit": "ns",
            "range": "± 16550.081061218243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4021463.6428571427,
            "unit": "ns",
            "range": "± 91578.2570795523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572958.6923076925,
            "unit": "ns",
            "range": "± 59508.50915679288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14514.489010989011,
            "unit": "ns",
            "range": "± 2281.8545162238615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64213.333333333336,
            "unit": "ns",
            "range": "± 6721.900510414455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66854.80612244898,
            "unit": "ns",
            "range": "± 12475.86463558029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75007.17346938775,
            "unit": "ns",
            "range": "± 17727.56926824205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4537.670212765957,
            "unit": "ns",
            "range": "± 1253.066695255721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14015.136363636364,
            "unit": "ns",
            "range": "± 2033.1755649089794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1080743.2886597938,
            "unit": "ns",
            "range": "± 102465.50188538647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2195877.1363636362,
            "unit": "ns",
            "range": "± 102561.36955732128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1803451.4742268042,
            "unit": "ns",
            "range": "± 109177.07344618085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12207685.372340426,
            "unit": "ns",
            "range": "± 4447172.662904097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3025677.087628866,
            "unit": "ns",
            "range": "± 192830.53973295612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3107473.4270833335,
            "unit": "ns",
            "range": "± 195076.66599836265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3784549.586956522,
            "unit": "ns",
            "range": "± 212875.84194213952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3785311.625,
            "unit": "ns",
            "range": "± 279087.3182193494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17267873.123595506,
            "unit": "ns",
            "range": "± 1969787.7125953874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4560396.934375,
            "unit": "ns",
            "range": "± 145654.36309608398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1334474.847377232,
            "unit": "ns",
            "range": "± 14391.703794494753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 867162.0168619792,
            "unit": "ns",
            "range": "± 6639.598679277985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2008015.5979166667,
            "unit": "ns",
            "range": "± 29514.631111906507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628871.8207310268,
            "unit": "ns",
            "range": "± 4787.474480873534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568791.7281901041,
            "unit": "ns",
            "range": "± 5897.357507725836"
          }
        ]
      }
    ]
  }
}