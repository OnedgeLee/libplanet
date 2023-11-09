window.BENCHMARK_DATA = {
  "lastUpdate": 1699517041371,
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
          "id": "b0df8ad4276cdd5c00172084749d2b1d6e02f68d",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:11:38+09:00",
          "tree_id": "6d6212780ecec18d14e20a872d97f970fede8ab9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b0df8ad4276cdd5c00172084749d2b1d6e02f68d"
        },
        "date": 1699515878514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9917369.416666666,
            "unit": "ns",
            "range": "± 52290.44368013291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23992986.192307692,
            "unit": "ns",
            "range": "± 164082.0643140624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58372517.64285714,
            "unit": "ns",
            "range": "± 778244.7345463091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123695808.42105263,
            "unit": "ns",
            "range": "± 2706306.04871635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249733131.75,
            "unit": "ns",
            "range": "± 1962554.8619819349"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57028.90217391304,
            "unit": "ns",
            "range": "± 5506.078034317641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273392.26373626373,
            "unit": "ns",
            "range": "± 24523.25106770451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291288.652173913,
            "unit": "ns",
            "range": "± 9731.110490397716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272234.67142857146,
            "unit": "ns",
            "range": "± 8924.358123188713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5014844.538461538,
            "unit": "ns",
            "range": "± 77037.81581320455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4417421.947368421,
            "unit": "ns",
            "range": "± 97361.95802632207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22821.664948453606,
            "unit": "ns",
            "range": "± 3024.4389792447882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100903.61956521739,
            "unit": "ns",
            "range": "± 10362.191699139854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95906.98837209302,
            "unit": "ns",
            "range": "± 6286.363263154126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96912.44210526315,
            "unit": "ns",
            "range": "± 12325.58491099746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7338.005154639175,
            "unit": "ns",
            "range": "± 975.3709029957029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20582.494623655915,
            "unit": "ns",
            "range": "± 2374.714969732322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529999.5773195876,
            "unit": "ns",
            "range": "± 180077.78433185912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3083087.605882353,
            "unit": "ns",
            "range": "± 200017.03235290357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2331823.3068181816,
            "unit": "ns",
            "range": "± 178265.8407653212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12575564.510309279,
            "unit": "ns",
            "range": "± 3596269.5742798774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3653383.5,
            "unit": "ns",
            "range": "± 89449.13560763112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3832325.4838709678,
            "unit": "ns",
            "range": "± 105485.1246438318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4614925.381818182,
            "unit": "ns",
            "range": "± 193617.42805695088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4399737.95,
            "unit": "ns",
            "range": "± 216250.2677548002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15078386.836956521,
            "unit": "ns",
            "range": "± 2030554.9680208513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5724649.073660715,
            "unit": "ns",
            "range": "± 208792.10239638254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1445517.73828125,
            "unit": "ns",
            "range": "± 57739.985653801115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 919130.7256433824,
            "unit": "ns",
            "range": "± 18671.837064122185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2085402.480263158,
            "unit": "ns",
            "range": "± 45086.27350813904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648622.2530691965,
            "unit": "ns",
            "range": "± 6649.402840324077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599232.0451594172,
            "unit": "ns",
            "range": "± 20035.891463746724"
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
          "id": "c0c0284961da43f5dbc0c1157b201f6dd3d5d6aa",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:45:26+09:00",
          "tree_id": "18021ed76e529c45a6fd98c79688e08bfe466b3d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c0c0284961da43f5dbc0c1157b201f6dd3d5d6aa"
        },
        "date": 1699517016143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7478089.846153846,
            "unit": "ns",
            "range": "± 54475.86309985698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19755859.671428572,
            "unit": "ns",
            "range": "± 611344.1742859595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47239953.538461536,
            "unit": "ns",
            "range": "± 1238111.6474343736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98121676.01123595,
            "unit": "ns",
            "range": "± 5426664.092160892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189754489.2777778,
            "unit": "ns",
            "range": "± 3926062.277033411"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43795.44565217391,
            "unit": "ns",
            "range": "± 10811.909956575748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215210.5054945055,
            "unit": "ns",
            "range": "± 12356.4860362426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212693.63043478262,
            "unit": "ns",
            "range": "± 12608.896968530578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200413.07216494845,
            "unit": "ns",
            "range": "± 21182.21919010505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3741454.9285714286,
            "unit": "ns",
            "range": "± 60813.50970538383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3428566.5,
            "unit": "ns",
            "range": "± 52810.83912891368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14004.038461538461,
            "unit": "ns",
            "range": "± 1997.2632125413363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58553.104651162794,
            "unit": "ns",
            "range": "± 4203.984933171271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61910.76804123711,
            "unit": "ns",
            "range": "± 12456.802446785405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63036.25,
            "unit": "ns",
            "range": "± 11919.153466938038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3651.697802197802,
            "unit": "ns",
            "range": "± 645.4734562023311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12428.927835051547,
            "unit": "ns",
            "range": "± 1290.225983495904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632324.4516129033,
            "unit": "ns",
            "range": "± 364550.47008209495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4186902.087628866,
            "unit": "ns",
            "range": "± 1061088.609562464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3116828.275510204,
            "unit": "ns",
            "range": "± 923961.2023659414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14712336.0625,
            "unit": "ns",
            "range": "± 4180646.698469426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2918618.8666666667,
            "unit": "ns",
            "range": "± 53743.97046163367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3020801.64893617,
            "unit": "ns",
            "range": "± 168160.6374001089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3622176.8421052634,
            "unit": "ns",
            "range": "± 152666.5929465941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3750051.663265306,
            "unit": "ns",
            "range": "± 292481.2429346483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11165192.65934066,
            "unit": "ns",
            "range": "± 1015903.33365152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4241677.347055288,
            "unit": "ns",
            "range": "± 55372.19093218706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1359658.2064887153,
            "unit": "ns",
            "range": "± 28867.175131278094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 890018.4321899414,
            "unit": "ns",
            "range": "± 17341.266126760514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2036711.0425037201,
            "unit": "ns",
            "range": "± 73469.67230821801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629101.6830767463,
            "unit": "ns",
            "range": "± 16543.469657268128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560455.4318847656,
            "unit": "ns",
            "range": "± 7773.0671170502355"
          }
        ]
      }
    ]
  }
}