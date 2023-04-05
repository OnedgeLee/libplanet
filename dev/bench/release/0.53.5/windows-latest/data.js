window.BENCHMARK_DATA = {
  "lastUpdate": 1680704799427,
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
          "id": "695d8a7538fa374d9ce0e065713598a897591162",
          "message": "Release 0.53.5",
          "timestamp": "2023-04-05T22:21:46+09:00",
          "tree_id": "7b45ecadf4c2594c5db3e5de0410033bfa7919bc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/695d8a7538fa374d9ce0e065713598a897591162"
        },
        "date": 1680702049422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1555184.5360824743,
            "unit": "ns",
            "range": "± 138494.6759959011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953219.14893617,
            "unit": "ns",
            "range": "± 181897.43197309764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2412462.5,
            "unit": "ns",
            "range": "± 138825.68945491168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6010569.565217392,
            "unit": "ns",
            "range": "± 289374.9848453041"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54055.95238095238,
            "unit": "ns",
            "range": "± 2911.230898967428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8173100,
            "unit": "ns",
            "range": "± 120218.07268460096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22585820,
            "unit": "ns",
            "range": "± 421563.01037245395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57906068.571428575,
            "unit": "ns",
            "range": "± 1856435.9620094677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119283725.64102565,
            "unit": "ns",
            "range": "± 4170335.4088078835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238662155.2631579,
            "unit": "ns",
            "range": "± 7863925.31592404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5850506.380208333,
            "unit": "ns",
            "range": "± 58922.67401905329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862296.7643229167,
            "unit": "ns",
            "range": "± 21360.141710964814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451598.0078125,
            "unit": "ns",
            "range": "± 19822.286496371486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3213434.8958333335,
            "unit": "ns",
            "range": "± 34934.43692712945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010494.296875,
            "unit": "ns",
            "range": "± 13869.274819169927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931599.7837611607,
            "unit": "ns",
            "range": "± 10514.403734353773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760177.777777778,
            "unit": "ns",
            "range": "± 104126.53298652975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6182411.538461538,
            "unit": "ns",
            "range": "± 73730.73238098138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28981578.57142857,
            "unit": "ns",
            "range": "± 407845.8837479053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7650575,
            "unit": "ns",
            "range": "± 89630.54598030334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34042017.10526316,
            "unit": "ns",
            "range": "± 1713791.12460363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222346.20253164557,
            "unit": "ns",
            "range": "± 11425.920184432376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211674.60317460317,
            "unit": "ns",
            "range": "± 9664.350323674087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186497.42268041236,
            "unit": "ns",
            "range": "± 13268.486261184064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12527694.736842105,
            "unit": "ns",
            "range": "± 270885.6964225239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10720214.705882354,
            "unit": "ns",
            "range": "± 344960.00921701314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23034.736842105263,
            "unit": "ns",
            "range": "± 1881.6452975403943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61279.78723404255,
            "unit": "ns",
            "range": "± 6024.9406330405645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46763.18681318681,
            "unit": "ns",
            "range": "± 4022.3323469297648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110895.78947368421,
            "unit": "ns",
            "range": "± 18559.86241115932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6991.578947368421,
            "unit": "ns",
            "range": "± 1135.5627677729099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21622.105263157893,
            "unit": "ns",
            "range": "± 1945.9274957174089"
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
          "id": "01ba017610312d2da3894b59f5ecc1716a8c7ade",
          "message": "Release 0.53.5",
          "timestamp": "2023-04-05T23:09:24+09:00",
          "tree_id": "4a38dfbb6f68312d8bd131928d8568059d1d68ed",
          "url": "https://github.com/OnedgeLee/libplanet/commit/01ba017610312d2da3894b59f5ecc1716a8c7ade"
        },
        "date": 1680704765945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394128.5714285714,
            "unit": "ns",
            "range": "± 117760.05921530334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2514291.4285714286,
            "unit": "ns",
            "range": "± 81645.00406684802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224932.9896907215,
            "unit": "ns",
            "range": "± 139808.41110966934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5358279.452054795,
            "unit": "ns",
            "range": "± 266416.1583557366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52205.37634408602,
            "unit": "ns",
            "range": "± 3642.8120286930584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7810838.095238095,
            "unit": "ns",
            "range": "± 183222.74552082905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19910880,
            "unit": "ns",
            "range": "± 264964.94431204617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50635607.692307696,
            "unit": "ns",
            "range": "± 423387.8805963834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100332076.92307693,
            "unit": "ns",
            "range": "± 763287.2647894393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203124607.14285713,
            "unit": "ns",
            "range": "± 2896839.3164498564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4817936.495535715,
            "unit": "ns",
            "range": "± 26105.55111420468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520702.4693080357,
            "unit": "ns",
            "range": "± 8351.172360811832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169771.4518229167,
            "unit": "ns",
            "range": "± 3635.8006680678955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662159.8214285714,
            "unit": "ns",
            "range": "± 13715.286675856005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849133.9322916666,
            "unit": "ns",
            "range": "± 4987.33566809263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765466.943359375,
            "unit": "ns",
            "range": "± 9155.779734938878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258370.588235294,
            "unit": "ns",
            "range": "± 103603.44421972151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5133437.5,
            "unit": "ns",
            "range": "± 129886.20039999564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24231626.666666668,
            "unit": "ns",
            "range": "± 308449.3463084259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6298386.363636363,
            "unit": "ns",
            "range": "± 146679.75335161304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27416358.82352941,
            "unit": "ns",
            "range": "± 535495.1015868675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194168.04123711342,
            "unit": "ns",
            "range": "± 11357.253064229415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193018.9189189189,
            "unit": "ns",
            "range": "± 6448.420902215684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180696.875,
            "unit": "ns",
            "range": "± 12184.592973138357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11387293.333333334,
            "unit": "ns",
            "range": "± 191559.48522835507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9239207.692307692,
            "unit": "ns",
            "range": "± 88606.12715399974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23083.333333333332,
            "unit": "ns",
            "range": "± 2579.1743544935443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54961.11111111111,
            "unit": "ns",
            "range": "± 4125.167873858663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45229.12087912088,
            "unit": "ns",
            "range": "± 3555.5126676290056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106348.91304347826,
            "unit": "ns",
            "range": "± 16439.074962379393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7078.350515463918,
            "unit": "ns",
            "range": "± 973.5273926256209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22372.680412371134,
            "unit": "ns",
            "range": "± 2291.401734139279"
          }
        ]
      }
    ]
  }
}