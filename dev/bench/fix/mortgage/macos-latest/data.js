window.BENCHMARK_DATA = {
  "lastUpdate": 1708592567286,
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
          "id": "81db7a44655ed2a15e057489b234b822ef63d0d6",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:18:21+09:00",
          "tree_id": "a93e129b8f0796ce556626d19290357b89b02fb8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/81db7a44655ed2a15e057489b234b822ef63d0d6"
        },
        "date": 1708590846245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8414401.446808511,
            "unit": "ns",
            "range": "± 629560.3025845387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19170388.94736842,
            "unit": "ns",
            "range": "± 655146.3882170315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46136881.875,
            "unit": "ns",
            "range": "± 873337.4396418126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95134721.43103448,
            "unit": "ns",
            "range": "± 2690305.9286167882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193829211.64285713,
            "unit": "ns",
            "range": "± 6960008.089652757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45456.69072164949,
            "unit": "ns",
            "range": "± 9839.415307367124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216993.89784946237,
            "unit": "ns",
            "range": "± 13927.247636994514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216972.3510638298,
            "unit": "ns",
            "range": "± 14821.92431436638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200313.46774193548,
            "unit": "ns",
            "range": "± 22525.705418887846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4022411.8,
            "unit": "ns",
            "range": "± 63371.95469290812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3399935.727272727,
            "unit": "ns",
            "range": "± 82140.56219454773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12313.744186046511,
            "unit": "ns",
            "range": "± 712.0853086045984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59456.27419354839,
            "unit": "ns",
            "range": "± 7127.927470488471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51318.950617283954,
            "unit": "ns",
            "range": "± 2707.8614112488963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62310.802083333336,
            "unit": "ns",
            "range": "± 11565.08920130324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3173.412087912088,
            "unit": "ns",
            "range": "± 315.57142696848445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11770.044444444444,
            "unit": "ns",
            "range": "± 1041.000978543411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1244699.7173913044,
            "unit": "ns",
            "range": "± 178694.91459165607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2804721.4574468085,
            "unit": "ns",
            "range": "± 338969.7566299968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2229756.163043478,
            "unit": "ns",
            "range": "± 161064.8522887514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13938996.385416666,
            "unit": "ns",
            "range": "± 4789469.616771419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180755.966666667,
            "unit": "ns",
            "range": "± 57914.834318366215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2979338.6428571427,
            "unit": "ns",
            "range": "± 126501.50818539367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3553027.3488372094,
            "unit": "ns",
            "range": "± 129513.812495201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3650529.160714286,
            "unit": "ns",
            "range": "± 132025.52437571602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16176787.879120879,
            "unit": "ns",
            "range": "± 1810846.8076373478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4326698.472098215,
            "unit": "ns",
            "range": "± 99433.81051877284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321710.3717041016,
            "unit": "ns",
            "range": "± 25099.920837835303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 884332.2447916666,
            "unit": "ns",
            "range": "± 14193.181291327115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949222.6875,
            "unit": "ns",
            "range": "± 32702.25821094819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632146.1535528274,
            "unit": "ns",
            "range": "± 14547.28819598012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572036.418071546,
            "unit": "ns",
            "range": "± 12398.560112612191"
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
          "id": "1c053daff0e28cb063d41dc2188f9a34750c4b18",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:31:28+09:00",
          "tree_id": "a0d9de13a8359f5b9ef681b7ed0e224994becf14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1c053daff0e28cb063d41dc2188f9a34750c4b18"
        },
        "date": 1708591963599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7549276.266666667,
            "unit": "ns",
            "range": "± 116442.30011129772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19005416.214285713,
            "unit": "ns",
            "range": "± 307686.7138596007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46992523.666666664,
            "unit": "ns",
            "range": "± 730103.2568020565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93363730.76470588,
            "unit": "ns",
            "range": "± 1788045.1268103013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192140876.85185185,
            "unit": "ns",
            "range": "± 5236367.660526968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44250.87755102041,
            "unit": "ns",
            "range": "± 13384.236551723094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226884.10638297873,
            "unit": "ns",
            "range": "± 20786.152580539387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235655.42,
            "unit": "ns",
            "range": "± 28450.71793742913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285975.8764044944,
            "unit": "ns",
            "range": "± 29349.255633204513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5305277.071428572,
            "unit": "ns",
            "range": "± 425461.4280846709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4647752.9186046515,
            "unit": "ns",
            "range": "± 467334.0020309248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24456.260869565216,
            "unit": "ns",
            "range": "± 2786.632046390134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92304.81578947368,
            "unit": "ns",
            "range": "± 19918.734251347698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93621.02127659574,
            "unit": "ns",
            "range": "± 15939.351252282147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93838.99462365592,
            "unit": "ns",
            "range": "± 19206.295393768374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8086.315217391304,
            "unit": "ns",
            "range": "± 1263.1423917135821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22506.876288659794,
            "unit": "ns",
            "range": "± 3145.7674847117073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433631.4239130435,
            "unit": "ns",
            "range": "± 135393.98340271064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828607.533333333,
            "unit": "ns",
            "range": "± 142945.70439622639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2192549.4340659343,
            "unit": "ns",
            "range": "± 144001.08285663856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16097366.591836736,
            "unit": "ns",
            "range": "± 6823449.964466763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2958892.7162162163,
            "unit": "ns",
            "range": "± 146858.32734580894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3026382.0675675673,
            "unit": "ns",
            "range": "± 151853.25001969276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3565045.888888889,
            "unit": "ns",
            "range": "± 118245.21116350374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3752553.68,
            "unit": "ns",
            "range": "± 98916.656641134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16679397.755555555,
            "unit": "ns",
            "range": "± 2109542.800426464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6108951.625651042,
            "unit": "ns",
            "range": "± 385840.9337445293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1674576.8228710936,
            "unit": "ns",
            "range": "± 208812.89712774998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 929599.8811677631,
            "unit": "ns",
            "range": "± 40100.419374556484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2101129.5470081675,
            "unit": "ns",
            "range": "± 112565.33406643958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 667455.1097005209,
            "unit": "ns",
            "range": "± 24004.2187447145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 671718.2258496094,
            "unit": "ns",
            "range": "± 67216.95689482818"
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
          "id": "1517f9e4ffad728bd619dab1d12b465f2a86c372",
          "message": "fix: Fix Mortage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:29:22+09:00",
          "tree_id": "0a81982a46b3799bbc319c503c9772176680a2eb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1517f9e4ffad728bd619dab1d12b465f2a86c372"
        },
        "date": 1708592076547,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8284669.864197531,
            "unit": "ns",
            "range": "± 435532.38775941654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22586331.552083332,
            "unit": "ns",
            "range": "± 1817180.2729190856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53887794.64285714,
            "unit": "ns",
            "range": "± 883899.719180389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107728630.35714285,
            "unit": "ns",
            "range": "± 2493276.3913315805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205979255.26804122,
            "unit": "ns",
            "range": "± 13122328.567093007"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51624.90425531915,
            "unit": "ns",
            "range": "± 10661.092161031309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305935.81176470587,
            "unit": "ns",
            "range": "± 19692.664484821875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258159.63541666666,
            "unit": "ns",
            "range": "± 25975.022841637205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194630.45679012345,
            "unit": "ns",
            "range": "± 9701.318123133296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3942079.9411764704,
            "unit": "ns",
            "range": "± 75728.41587085275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3499832.8571428573,
            "unit": "ns",
            "range": "± 59457.40605723516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14631.75,
            "unit": "ns",
            "range": "± 2055.1695025145577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66946.67021276595,
            "unit": "ns",
            "range": "± 10636.478176173798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58873.397849462366,
            "unit": "ns",
            "range": "± 10034.149912153025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66406.53125,
            "unit": "ns",
            "range": "± 12843.743287730349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3895.3626373626375,
            "unit": "ns",
            "range": "± 842.9405609265633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13059.758426966293,
            "unit": "ns",
            "range": "± 1452.5193906395402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504377.2666666666,
            "unit": "ns",
            "range": "± 187223.4334236635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3041636.2535211267,
            "unit": "ns",
            "range": "± 148348.1454054923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291136.8125,
            "unit": "ns",
            "range": "± 170421.99734759424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15079706.28125,
            "unit": "ns",
            "range": "± 5612572.198156382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2951420.48,
            "unit": "ns",
            "range": "± 77237.10445878112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2979603.390625,
            "unit": "ns",
            "range": "± 132224.82616105487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3597710.1739130435,
            "unit": "ns",
            "range": "± 137776.40246949313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4081037.7011494255,
            "unit": "ns",
            "range": "± 412230.59646950924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21871920.097938143,
            "unit": "ns",
            "range": "± 4612823.672228024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4566716.286830357,
            "unit": "ns",
            "range": "± 77144.50252731763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1433340.6864483173,
            "unit": "ns",
            "range": "± 49809.425914624655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1053096.4323046876,
            "unit": "ns",
            "range": "± 93536.61666328747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694129.272042411,
            "unit": "ns",
            "range": "± 195679.05511130465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794614.4404000947,
            "unit": "ns",
            "range": "± 69199.2506384086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739405.516137942,
            "unit": "ns",
            "range": "± 57518.606875971636"
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
          "id": "9bfdbffecda9f37bc2c9388bcda7e23659c0e337",
          "message": "fix: Fix Mortgage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T17:43:57+09:00",
          "tree_id": "a0d9de13a8359f5b9ef681b7ed0e224994becf14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9bfdbffecda9f37bc2c9388bcda7e23659c0e337"
        },
        "date": 1708592531184,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7572674.5,
            "unit": "ns",
            "range": "± 80517.02588479863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19185950.32142857,
            "unit": "ns",
            "range": "± 550220.5730836029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46738112.307692304,
            "unit": "ns",
            "range": "± 434570.41194156796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94688932.45454545,
            "unit": "ns",
            "range": "± 2154371.8798712036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195131939.7,
            "unit": "ns",
            "range": "± 4449270.5053577935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38318.79120879121,
            "unit": "ns",
            "range": "± 7213.594068788123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216340.54545454544,
            "unit": "ns",
            "range": "± 11885.771393985924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215478.38043478262,
            "unit": "ns",
            "range": "± 15489.832168616957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199488.0612244898,
            "unit": "ns",
            "range": "± 18513.823055774916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3943098.846153846,
            "unit": "ns",
            "range": "± 56355.56719740318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3478501.6666666665,
            "unit": "ns",
            "range": "± 46273.65055118661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13768.315217391304,
            "unit": "ns",
            "range": "± 2235.7292338828543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61981.494736842105,
            "unit": "ns",
            "range": "± 6963.425824267708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54492.186046511626,
            "unit": "ns",
            "range": "± 4522.826217575825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66500.51020408163,
            "unit": "ns",
            "range": "± 14112.701437383257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4206.275510204082,
            "unit": "ns",
            "range": "± 1423.0460181256772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15883.845360824742,
            "unit": "ns",
            "range": "± 3445.9983868376416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1230499.0786516855,
            "unit": "ns",
            "range": "± 125969.14894160908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564520.747368421,
            "unit": "ns",
            "range": "± 226965.62179058426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2175430.7011494255,
            "unit": "ns",
            "range": "± 282038.3393033284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13322549.1,
            "unit": "ns",
            "range": "± 4964025.674675027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2894172.3076923075,
            "unit": "ns",
            "range": "± 33705.299018068894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3006693.214285714,
            "unit": "ns",
            "range": "± 109450.7254018983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3607623.3870967743,
            "unit": "ns",
            "range": "± 107746.06450776673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3704901.942857143,
            "unit": "ns",
            "range": "± 178700.34611132764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16522607.15730337,
            "unit": "ns",
            "range": "± 2023621.5725324997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4727136.923943015,
            "unit": "ns",
            "range": "± 76845.52317614027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403918.3415039063,
            "unit": "ns",
            "range": "± 62118.85204227072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 967651.3854370117,
            "unit": "ns",
            "range": "± 50028.623668820124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2316006.928982764,
            "unit": "ns",
            "range": "± 206029.7580263797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 678667.1228305479,
            "unit": "ns",
            "range": "± 35102.24601690058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 617436.2061264935,
            "unit": "ns",
            "range": "± 29482.07163275274"
          }
        ]
      }
    ]
  }
}