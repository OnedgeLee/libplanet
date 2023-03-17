window.BENCHMARK_DATA = {
  "lastUpdate": 1679038080756,
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
          "id": "1a6649c745a66cf73de53be150868d3aa8b5ccd1",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T14:30:41+09:00",
          "tree_id": "502b7a16d11fe8216d54cf7bbc8270eebd4d60e1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a6649c745a66cf73de53be150868d3aa8b5ccd1"
        },
        "date": 1679032047070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368986.966666667,
            "unit": "ns",
            "range": "± 98825.55576175396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5384493.105263158,
            "unit": "ns",
            "range": "± 181174.8012179591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24498950.125,
            "unit": "ns",
            "range": "± 479363.8021480658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6446643.666666667,
            "unit": "ns",
            "range": "± 163540.8228498493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28237799.708333332,
            "unit": "ns",
            "range": "± 729382.2187338901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7636867.142857143,
            "unit": "ns",
            "range": "± 84502.94412245431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21527795.6,
            "unit": "ns",
            "range": "± 259336.0391050301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53751432,
            "unit": "ns",
            "range": "± 816632.7341016191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108274054,
            "unit": "ns",
            "range": "± 1971591.6818456436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 213473618.93333334,
            "unit": "ns",
            "range": "± 2771763.7878018976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428689.3737373736,
            "unit": "ns",
            "range": "± 95585.73483235105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2891345.714285714,
            "unit": "ns",
            "range": "± 121601.43097180073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248881.327272727,
            "unit": "ns",
            "range": "± 87630.9015277007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5442632.184210527,
            "unit": "ns",
            "range": "± 184805.8489597175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49277.78571428572,
            "unit": "ns",
            "range": "± 2634.9554399260473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877473.801339285,
            "unit": "ns",
            "range": "± 17847.346331625173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894717.4639322916,
            "unit": "ns",
            "range": "± 3347.174727793031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349185.734375,
            "unit": "ns",
            "range": "± 2636.762586998753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648163.0243389425,
            "unit": "ns",
            "range": "± 2722.7598281546857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822042.7118489583,
            "unit": "ns",
            "range": "± 970.7455059246888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765854.9082728794,
            "unit": "ns",
            "range": "± 427.87286374987616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195418.3,
            "unit": "ns",
            "range": "± 5831.096307580236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199542.54545454544,
            "unit": "ns",
            "range": "± 4494.895737201441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168167.70833333334,
            "unit": "ns",
            "range": "± 4368.4332131004185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11963666.166666666,
            "unit": "ns",
            "range": "± 247707.67916668844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10722192.466666667,
            "unit": "ns",
            "range": "± 168190.42178175252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19856.706521739132,
            "unit": "ns",
            "range": "± 1392.5846752564805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53492.760869565216,
            "unit": "ns",
            "range": "± 3370.48992548452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41282.22,
            "unit": "ns",
            "range": "± 1676.6804216446649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95503.77894736842,
            "unit": "ns",
            "range": "± 12876.53841350406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5320.670103092783,
            "unit": "ns",
            "range": "± 542.9564270740617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17773.1797752809,
            "unit": "ns",
            "range": "± 1220.7746847596197"
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
          "id": "d33c37d48523e9fc935874e118df09e84cd92bbd",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T15:19:04+09:00",
          "tree_id": "1c7139d35f264bdff18297a8083d91c9bd672ab1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d33c37d48523e9fc935874e118df09e84cd92bbd"
        },
        "date": 1679034765367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3588124.066666667,
            "unit": "ns",
            "range": "± 49076.53610355777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5621990,
            "unit": "ns",
            "range": "± 80600.23255017852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25320484.8,
            "unit": "ns",
            "range": "± 347738.06995007035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6792953.482758621,
            "unit": "ns",
            "range": "± 193829.10306976622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29032631.933333334,
            "unit": "ns",
            "range": "± 531375.8650758112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8371296.214285715,
            "unit": "ns",
            "range": "± 238164.19049958527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22281125.133333333,
            "unit": "ns",
            "range": "± 286679.9279098722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55958905.53333333,
            "unit": "ns",
            "range": "± 323109.4121078729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112258361.2,
            "unit": "ns",
            "range": "± 346262.8320032136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224571526.57142857,
            "unit": "ns",
            "range": "± 1085779.483483549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481392.8,
            "unit": "ns",
            "range": "± 79448.12545779254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2766054.0625,
            "unit": "ns",
            "range": "± 85370.74135108982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2319063.7558139535,
            "unit": "ns",
            "range": "± 124237.20074371359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5446204,
            "unit": "ns",
            "range": "± 105377.59780965466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50159.69642857143,
            "unit": "ns",
            "range": "± 2057.7714240025684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6084474.3953125,
            "unit": "ns",
            "range": "± 25150.66010974854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843698.3416573661,
            "unit": "ns",
            "range": "± 792.9166815628721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350265.4286458334,
            "unit": "ns",
            "range": "± 3455.3275659179494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612642.0557291666,
            "unit": "ns",
            "range": "± 1521.2892286658655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829735.0190429688,
            "unit": "ns",
            "range": "± 323.3074255002792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770240.6475260417,
            "unit": "ns",
            "range": "± 285.5223453612103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203746.87179487178,
            "unit": "ns",
            "range": "± 6965.718586800598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205501.5806451613,
            "unit": "ns",
            "range": "± 9292.040562828952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174978.5915492958,
            "unit": "ns",
            "range": "± 8559.739760025193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12402635.285714285,
            "unit": "ns",
            "range": "± 144766.96696743547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9958208.42857143,
            "unit": "ns",
            "range": "± 120907.25375625369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22866.610526315788,
            "unit": "ns",
            "range": "± 1877.8867609954705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57852.51685393258,
            "unit": "ns",
            "range": "± 3278.625010137494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44130.74285714285,
            "unit": "ns",
            "range": "± 2127.946187382923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106201.72448979592,
            "unit": "ns",
            "range": "± 15802.663296204488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6738.489361702128,
            "unit": "ns",
            "range": "± 741.442676018243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20856.76595744681,
            "unit": "ns",
            "range": "± 2106.0162996312524"
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
          "id": "9508ac52f6edc8faa78fb35afed507a8d85e9157",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T15:48:01+09:00",
          "tree_id": "8f1efeb07beb327e89b2786e5fda1e992fc61bda",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9508ac52f6edc8faa78fb35afed507a8d85e9157"
        },
        "date": 1679036466480,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234699,
            "unit": "ns",
            "range": "± 46540.35110023702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5124079,
            "unit": "ns",
            "range": "± 32097.873919526915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23794003.733333334,
            "unit": "ns",
            "range": "± 258109.20956543807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6285394.153846154,
            "unit": "ns",
            "range": "± 74212.19751254524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27394981.5,
            "unit": "ns",
            "range": "± 229736.9764721755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7780944.214285715,
            "unit": "ns",
            "range": "± 54875.378728924115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19935610.4,
            "unit": "ns",
            "range": "± 120098.1537860952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50522606.8,
            "unit": "ns",
            "range": "± 311608.0403119094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101187532.46666667,
            "unit": "ns",
            "range": "± 355933.2875565843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202967646.13333333,
            "unit": "ns",
            "range": "± 480257.83362419973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1405590.6444444444,
            "unit": "ns",
            "range": "± 78233.30052230785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539948.95,
            "unit": "ns",
            "range": "± 56180.76696041561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2216874.6944444445,
            "unit": "ns",
            "range": "± 109203.55458018559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5199550.757575758,
            "unit": "ns",
            "range": "± 164765.7047894127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46334.17283950617,
            "unit": "ns",
            "range": "± 2430.6193695749826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5954529.911458333,
            "unit": "ns",
            "range": "± 22545.81432228852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830536.6982421875,
            "unit": "ns",
            "range": "± 6289.507347508624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353850.7473493305,
            "unit": "ns",
            "range": "± 450.9462152282688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683316.787109375,
            "unit": "ns",
            "range": "± 2794.633835987401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793980.4250300481,
            "unit": "ns",
            "range": "± 1549.15329350659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730272.0571986607,
            "unit": "ns",
            "range": "± 1242.2531589196844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200934.11904761905,
            "unit": "ns",
            "range": "± 7318.4328330472135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201375.8,
            "unit": "ns",
            "range": "± 7154.331480532149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171698.46666666667,
            "unit": "ns",
            "range": "± 5099.1263872004265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11546178.4,
            "unit": "ns",
            "range": "± 80679.65365549996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9326917.933333334,
            "unit": "ns",
            "range": "± 40497.07772255507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21437.021276595744,
            "unit": "ns",
            "range": "± 1568.8595472866057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57594.346153846156,
            "unit": "ns",
            "range": "± 2972.1869766345326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40248.045454545456,
            "unit": "ns",
            "range": "± 1890.6811017914492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98192.07142857143,
            "unit": "ns",
            "range": "± 12293.393547445357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5643.84693877551,
            "unit": "ns",
            "range": "± 745.8447967686179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20347.043010752688,
            "unit": "ns",
            "range": "± 1585.9869092747383"
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
          "id": "f282ad1da6a375279f3121c3dded446f9c304b73",
          "message": "chore: better expression for ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T16:14:30+09:00",
          "tree_id": "13f32faaa8d73b42ac61b36f930ec2cc1d42bbdc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f282ad1da6a375279f3121c3dded446f9c304b73"
        },
        "date": 1679038067242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3286411.347826087,
            "unit": "ns",
            "range": "± 80324.98483185138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5076544.571428572,
            "unit": "ns",
            "range": "± 50463.649596233416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23303246.533333335,
            "unit": "ns",
            "range": "± 241244.65866296296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6128781,
            "unit": "ns",
            "range": "± 95713.32901579443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26427625.733333334,
            "unit": "ns",
            "range": "± 373887.2575847023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7664441.133333334,
            "unit": "ns",
            "range": "± 12501.387927898626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19626827.57142857,
            "unit": "ns",
            "range": "± 107696.67452812823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49064908.666666664,
            "unit": "ns",
            "range": "± 326132.9570923637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97795943.93333334,
            "unit": "ns",
            "range": "± 1022879.780721669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 195918031.35714287,
            "unit": "ns",
            "range": "± 1906874.7523687351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1342564.34375,
            "unit": "ns",
            "range": "± 86239.49234359275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2492774.1379310344,
            "unit": "ns",
            "range": "± 70819.00352897828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123472.3243243243,
            "unit": "ns",
            "range": "± 102765.57764435669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5161616.217391305,
            "unit": "ns",
            "range": "± 246713.01268071812"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45278.12087912088,
            "unit": "ns",
            "range": "± 2415.6208304154434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876159.272916666,
            "unit": "ns",
            "range": "± 18089.078811220512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866393.94921875,
            "unit": "ns",
            "range": "± 3212.8112438522876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374581.8551682692,
            "unit": "ns",
            "range": "± 334.79497879708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612467.295052083,
            "unit": "ns",
            "range": "± 1890.0005632878986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810505.6278599331,
            "unit": "ns",
            "range": "± 558.7759524942408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726483.1604567308,
            "unit": "ns",
            "range": "± 890.11591728843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189226.83870967742,
            "unit": "ns",
            "range": "± 8576.378398401936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189873.63636363635,
            "unit": "ns",
            "range": "± 4488.631168433621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162411.07142857142,
            "unit": "ns",
            "range": "± 2472.131296746119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11126013.866666667,
            "unit": "ns",
            "range": "± 94658.76422397202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8842485.785714285,
            "unit": "ns",
            "range": "± 47206.23545706089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16395.526315789473,
            "unit": "ns",
            "range": "± 1292.673806924478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49526.967741935485,
            "unit": "ns",
            "range": "± 4167.4552511919355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37424.0625,
            "unit": "ns",
            "range": "± 688.5323007431581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82676.92857142857,
            "unit": "ns",
            "range": "± 10992.648023195123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4582.571428571428,
            "unit": "ns",
            "range": "± 416.9407483430541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15044.014285714286,
            "unit": "ns",
            "range": "± 745.428686950799"
          }
        ]
      }
    ]
  }
}