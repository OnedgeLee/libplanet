window.BENCHMARK_DATA = {
  "lastUpdate": 1679041975776,
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
          "id": "dd510d3f7d59af4c42af978a98cd17420b6b8125",
          "message": "document: add documentation on ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T17:14:20+09:00",
          "tree_id": "978082313a62ddb74b661108c1afba00320fa31e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd510d3f7d59af4c42af978a98cd17420b6b8125"
        },
        "date": 1679041768440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4139274.6315789474,
            "unit": "ns",
            "range": "± 91507.64568008664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6458270.888888889,
            "unit": "ns",
            "range": "± 130785.2517539339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29387272.266666666,
            "unit": "ns",
            "range": "± 532319.9320602583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7846311.444444444,
            "unit": "ns",
            "range": "± 145047.0469781614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33603182.78571428,
            "unit": "ns",
            "range": "± 394709.1366138983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9577457.045454545,
            "unit": "ns",
            "range": "± 229982.22306982923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 26591979.666666668,
            "unit": "ns",
            "range": "± 201867.9274489234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 67772088.46666667,
            "unit": "ns",
            "range": "± 711262.1517899277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 127381599.14285715,
            "unit": "ns",
            "range": "± 1305348.9659543068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 259205495.93333334,
            "unit": "ns",
            "range": "± 3263632.2702683466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654932.0985915493,
            "unit": "ns",
            "range": "± 77749.14146483364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3129329,
            "unit": "ns",
            "range": "± 60949.33951857067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2645948.935064935,
            "unit": "ns",
            "range": "± 135099.02109528266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6182756.28,
            "unit": "ns",
            "range": "± 163174.20954548343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55553.21428571428,
            "unit": "ns",
            "range": "± 2636.7395923856097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6989556.724479167,
            "unit": "ns",
            "range": "± 29752.77338825185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2227061.197395833,
            "unit": "ns",
            "range": "± 5580.9072703287775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1592358.000279018,
            "unit": "ns",
            "range": "± 5980.615516278291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116115.515364583,
            "unit": "ns",
            "range": "± 7198.4871362896265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010812.2596354167,
            "unit": "ns",
            "range": "± 1692.3733166353575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909940.72890625,
            "unit": "ns",
            "range": "± 1321.583829863942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237523.46666666667,
            "unit": "ns",
            "range": "± 8710.952065699194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233620.15384615384,
            "unit": "ns",
            "range": "± 7330.028999506294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197944.02222222224,
            "unit": "ns",
            "range": "± 7465.046953785503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14429126.466666667,
            "unit": "ns",
            "range": "± 217327.54723552542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11550647,
            "unit": "ns",
            "range": "± 187724.74715467248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22567.202127659573,
            "unit": "ns",
            "range": "± 2115.399505112919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61946.916666666664,
            "unit": "ns",
            "range": "± 3028.2671143516145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49007.508771929824,
            "unit": "ns",
            "range": "± 2129.1674020176374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109308.27083333333,
            "unit": "ns",
            "range": "± 14678.241945839904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6379.208333333333,
            "unit": "ns",
            "range": "± 561.1745561375178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22169.32978723404,
            "unit": "ns",
            "range": "± 1488.7737422665407"
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
          "id": "e795d3fe3a1fa1999c89abfc388edd3fb78b379f",
          "message": "document: add documentation on ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T17:17:12+09:00",
          "tree_id": "978082313a62ddb74b661108c1afba00320fa31e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e795d3fe3a1fa1999c89abfc388edd3fb78b379f"
        },
        "date": 1679041869519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3506123.45,
            "unit": "ns",
            "range": "± 78295.62540880086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5521505.8125,
            "unit": "ns",
            "range": "± 103479.8416589555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25542452.6875,
            "unit": "ns",
            "range": "± 481031.43112825364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6743139.176470588,
            "unit": "ns",
            "range": "± 137682.15394534403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28811671.444444444,
            "unit": "ns",
            "range": "± 615839.0839163809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8075059.090909091,
            "unit": "ns",
            "range": "± 195886.54197529485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21901287.666666668,
            "unit": "ns",
            "range": "± 237897.972074665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55440240.666666664,
            "unit": "ns",
            "range": "± 530504.9551338082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109417368.8,
            "unit": "ns",
            "range": "± 1035021.6154159846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 220654565.46666667,
            "unit": "ns",
            "range": "± 2768922.6428189375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449262.8333333333,
            "unit": "ns",
            "range": "± 80591.83272393905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2704709.875,
            "unit": "ns",
            "range": "± 83608.34292671763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2316919.1710526315,
            "unit": "ns",
            "range": "± 117415.20815662545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5350366.8,
            "unit": "ns",
            "range": "± 121464.45251209573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48313.69662921348,
            "unit": "ns",
            "range": "± 2922.698633907985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5851107.539583334,
            "unit": "ns",
            "range": "± 21803.393046331177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869459.494140625,
            "unit": "ns",
            "range": "± 1904.883119235809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354588.9854266827,
            "unit": "ns",
            "range": "± 1169.3559422800968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636322.741629464,
            "unit": "ns",
            "range": "± 1814.9975578011054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825150.0838541667,
            "unit": "ns",
            "range": "± 432.175417826558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771269.784375,
            "unit": "ns",
            "range": "± 305.79529829572834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204359.31578947368,
            "unit": "ns",
            "range": "± 7006.22230825692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204867.25531914894,
            "unit": "ns",
            "range": "± 7943.535100313759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171495.77777777778,
            "unit": "ns",
            "range": "± 3606.1672264829144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12371630.23076923,
            "unit": "ns",
            "range": "± 156151.12232233761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9771293.333333334,
            "unit": "ns",
            "range": "± 129313.46538418444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21573.827956989247,
            "unit": "ns",
            "range": "± 1799.882282525455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56041.69565217391,
            "unit": "ns",
            "range": "± 4886.7961722821465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44583.125,
            "unit": "ns",
            "range": "± 2076.9773328733854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98306.90625,
            "unit": "ns",
            "range": "± 13462.826904267777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6743.2,
            "unit": "ns",
            "range": "± 850.2271986720382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21531.021276595744,
            "unit": "ns",
            "range": "± 1939.3213477567404"
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
          "id": "1a70e33b7ff5f6b6fe902ca28829ed16136b12f4",
          "message": "document: add documentation on ResolveNetMQAddressAsync",
          "timestamp": "2023-03-17T17:18:18+09:00",
          "tree_id": "be13a186e8a16afc326d2a53fe070fad1092e816",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a70e33b7ff5f6b6fe902ca28829ed16136b12f4"
        },
        "date": 1679041962759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3786049.238095238,
            "unit": "ns",
            "range": "± 89484.19900681057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5769299.884615385,
            "unit": "ns",
            "range": "± 157697.37607235624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26047337.733333334,
            "unit": "ns",
            "range": "± 389267.16199774796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7031751.923076923,
            "unit": "ns",
            "range": "± 47728.49208711979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29636215.095238097,
            "unit": "ns",
            "range": "± 667306.2847981356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8443012.333333334,
            "unit": "ns",
            "range": "± 151658.33391620158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22888626,
            "unit": "ns",
            "range": "± 181756.9728012027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56037543.5,
            "unit": "ns",
            "range": "± 288475.6583909904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113785409,
            "unit": "ns",
            "range": "± 501429.61797815084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224852487.4,
            "unit": "ns",
            "range": "± 460421.075726464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517123.752688172,
            "unit": "ns",
            "range": "± 123366.09680695836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2763127.6470588236,
            "unit": "ns",
            "range": "± 86938.9148289144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2335900.984375,
            "unit": "ns",
            "range": "± 107911.96160531828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5418411.076923077,
            "unit": "ns",
            "range": "± 90327.71564924165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53142.41758241758,
            "unit": "ns",
            "range": "± 3034.845652549489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6097410.239955357,
            "unit": "ns",
            "range": "± 33952.47503456285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885944.458984375,
            "unit": "ns",
            "range": "± 1105.8007063046791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370877.0326021635,
            "unit": "ns",
            "range": "± 2242.1767444839297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626656.8216145835,
            "unit": "ns",
            "range": "± 3484.8266473611498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836611.4823521206,
            "unit": "ns",
            "range": "± 541.5997591135853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764798.64921875,
            "unit": "ns",
            "range": "± 472.33517416429544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208795.29411764705,
            "unit": "ns",
            "range": "± 9348.406190376163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204802.88135593222,
            "unit": "ns",
            "range": "± 8999.279304640026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184120.11764705883,
            "unit": "ns",
            "range": "± 9976.57383384621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12269632.6,
            "unit": "ns",
            "range": "± 191938.36874699427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10187250.285714285,
            "unit": "ns",
            "range": "± 104436.92081268562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26074.808510638297,
            "unit": "ns",
            "range": "± 1973.4288116791795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58132.62637362637,
            "unit": "ns",
            "range": "± 4759.376711406072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50928,
            "unit": "ns",
            "range": "± 4188.457482371362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109243.7052631579,
            "unit": "ns",
            "range": "± 16365.154276286985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7340.288659793814,
            "unit": "ns",
            "range": "± 857.3819155667406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24363.802083333332,
            "unit": "ns",
            "range": "± 2193.1281126079716"
          }
        ]
      }
    ]
  }
}