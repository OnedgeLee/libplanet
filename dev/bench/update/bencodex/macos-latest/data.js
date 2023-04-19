window.BENCHMARK_DATA = {
  "lastUpdate": 1681889400614,
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
          "id": "45ac42e9e3775906656a12287367ce0ceee11123",
          "message": "update: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:30:06+09:00",
          "tree_id": "dc212b25fb943314b7110477bccabe5faf5dfa8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45ac42e9e3775906656a12287367ce0ceee11123"
        },
        "date": 1681887171260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8173745.411764706,
            "unit": "ns",
            "range": "± 163636.60795152886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20569053.98245614,
            "unit": "ns",
            "range": "± 886005.7693059198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50268812.27027027,
            "unit": "ns",
            "range": "± 1352363.9952976098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102491067.625,
            "unit": "ns",
            "range": "± 2580569.156102412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211327617.52,
            "unit": "ns",
            "range": "± 8534125.650719551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68293.4255319149,
            "unit": "ns",
            "range": "± 10489.5796252674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 473064.2291666667,
            "unit": "ns",
            "range": "± 68857.49023591432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359434.81111111114,
            "unit": "ns",
            "range": "± 37164.32081497088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336927.93548387097,
            "unit": "ns",
            "range": "± 10109.019055396304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5751620.255555555,
            "unit": "ns",
            "range": "± 324889.9820466304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3880311.4591836734,
            "unit": "ns",
            "range": "± 275204.6206023153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24391.188235294117,
            "unit": "ns",
            "range": "± 3246.0204334880345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128785.41111111111,
            "unit": "ns",
            "range": "± 23846.921919428845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138814.70652173914,
            "unit": "ns",
            "range": "± 21582.747774700296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157174.3085106383,
            "unit": "ns",
            "range": "± 30046.71984639012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8384.926315789473,
            "unit": "ns",
            "range": "± 1864.7554356908063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21699.563157894736,
            "unit": "ns",
            "range": "± 4942.74888375725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770238.7173913044,
            "unit": "ns",
            "range": "± 268584.43828675064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3490506.7282608696,
            "unit": "ns",
            "range": "± 413574.0151769241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2964039.033707865,
            "unit": "ns",
            "range": "± 369833.36939416657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7815972.9772727275,
            "unit": "ns",
            "range": "± 851220.5435386469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316494.1408450706,
            "unit": "ns",
            "range": "± 162719.1351306465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625927.1208791207,
            "unit": "ns",
            "range": "± 290746.30157035665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4804111.9,
            "unit": "ns",
            "range": "± 341023.79991323745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4697720.2558139535,
            "unit": "ns",
            "range": "± 253892.8618500302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9536591.53125,
            "unit": "ns",
            "range": "± 808769.4288967837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7115115.041852678,
            "unit": "ns",
            "range": "± 233756.87684968908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059201.2564453124,
            "unit": "ns",
            "range": "± 44770.738547954425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1524326.5015980115,
            "unit": "ns",
            "range": "± 90602.5996050309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340843.1232421873,
            "unit": "ns",
            "range": "± 302779.2144258718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802342.6690104167,
            "unit": "ns",
            "range": "± 3782.631931879202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732040.2886117789,
            "unit": "ns",
            "range": "± 2401.6168906532916"
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
          "id": "fa50ed53764ee8f1ed54982ac5334a86225a38e0",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:48:29+09:00",
          "tree_id": "d40ade814e1b84bf940637ba7292b0f175aa7417",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fa50ed53764ee8f1ed54982ac5334a86225a38e0"
        },
        "date": 1681888162955,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8028239.52631579,
            "unit": "ns",
            "range": "± 171720.69406496134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20198715,
            "unit": "ns",
            "range": "± 348756.25021005276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49947519.93333333,
            "unit": "ns",
            "range": "± 905881.3712020597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123784948.79166667,
            "unit": "ns",
            "range": "± 21014675.99689282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213732241.19230768,
            "unit": "ns",
            "range": "± 1087684.344027208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64425.43298969072,
            "unit": "ns",
            "range": "± 10474.118374700263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402744.0797101449,
            "unit": "ns",
            "range": "± 18980.170701679068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328488.71428571426,
            "unit": "ns",
            "range": "± 15830.456175637466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319326.8010752688,
            "unit": "ns",
            "range": "± 21101.41552164366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5600592.428571428,
            "unit": "ns",
            "range": "± 67695.97703132199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846345.4166666665,
            "unit": "ns",
            "range": "± 50820.37563894361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18382.61111111111,
            "unit": "ns",
            "range": "± 2565.100350423025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91424.9255319149,
            "unit": "ns",
            "range": "± 9919.72276157141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101458.69387755102,
            "unit": "ns",
            "range": "± 11181.669877327322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129415.79166666667,
            "unit": "ns",
            "range": "± 14316.72525546086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9190.418367346938,
            "unit": "ns",
            "range": "± 1418.8544669634196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23593.178947368422,
            "unit": "ns",
            "range": "± 3778.3744703046505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1841452.2906976745,
            "unit": "ns",
            "range": "± 333252.5449157535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2995654.977272727,
            "unit": "ns",
            "range": "± 223529.85327609297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617624.0263157897,
            "unit": "ns",
            "range": "± 378972.9007653826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7171415.845360825,
            "unit": "ns",
            "range": "± 663179.4394886706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394971.8846153845,
            "unit": "ns",
            "range": "± 44670.62057911304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3533705.404761905,
            "unit": "ns",
            "range": "± 115865.56542822767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4624650.44680851,
            "unit": "ns",
            "range": "± 152550.4106275819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4642069.153846154,
            "unit": "ns",
            "range": "± 58029.209281255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8525781.21641791,
            "unit": "ns",
            "range": "± 376691.79412146565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6613609.236213235,
            "unit": "ns",
            "range": "± 132737.17904727918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2071591.8040364583,
            "unit": "ns",
            "range": "± 34035.256241920106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296973.856219952,
            "unit": "ns",
            "range": "± 7376.418224958025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2921316.822451637,
            "unit": "ns",
            "range": "± 68935.27143120606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865967.0713641827,
            "unit": "ns",
            "range": "± 2291.8570917165666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738562.2668805803,
            "unit": "ns",
            "range": "± 6885.391288526871"
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
          "id": "57fa7f56adc33391bbcdebc07ea89c0de7e82a81",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:51:08+09:00",
          "tree_id": "518460067ca7959a0ad48c6ba5ca65530d761ac6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/57fa7f56adc33391bbcdebc07ea89c0de7e82a81"
        },
        "date": 1681888384808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8160783.070175438,
            "unit": "ns",
            "range": "± 343424.21173532703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20258653.431034483,
            "unit": "ns",
            "range": "± 847009.7515038784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51994080.071428575,
            "unit": "ns",
            "range": "± 1466142.0770226123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107256960.10909091,
            "unit": "ns",
            "range": "± 4544504.758164433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212683635.07142857,
            "unit": "ns",
            "range": "± 6022781.129329595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69565,
            "unit": "ns",
            "range": "± 10625.911882437824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390547.20238095237,
            "unit": "ns",
            "range": "± 20971.4039947917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333952.08510638296,
            "unit": "ns",
            "range": "± 28774.352918524095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339415.77777777775,
            "unit": "ns",
            "range": "± 6852.2254826705375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5637383.192307692,
            "unit": "ns",
            "range": "± 77285.90152305122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3789883.24,
            "unit": "ns",
            "range": "± 100969.82610301621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25333.375,
            "unit": "ns",
            "range": "± 4156.831747098288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124354.16315789474,
            "unit": "ns",
            "range": "± 9438.342344102552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126711.2957746479,
            "unit": "ns",
            "range": "± 6156.88212234167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131163.24444444446,
            "unit": "ns",
            "range": "± 12628.709093877244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9834.076086956522,
            "unit": "ns",
            "range": "± 1091.2634902424659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25137.0625,
            "unit": "ns",
            "range": "± 3340.0329113175235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660065.030927835,
            "unit": "ns",
            "range": "± 167554.66730887748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3105841.625,
            "unit": "ns",
            "range": "± 132942.42056846368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2666145.443298969,
            "unit": "ns",
            "range": "± 262558.06480471964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7333367.419354838,
            "unit": "ns",
            "range": "± 521100.34206611314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321535.924050633,
            "unit": "ns",
            "range": "± 165676.25809745234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3482361.3516483516,
            "unit": "ns",
            "range": "± 224073.80791532723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4409037.1,
            "unit": "ns",
            "range": "± 182266.8700428372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4492233.59139785,
            "unit": "ns",
            "range": "± 298359.5031547052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8160279.2272727275,
            "unit": "ns",
            "range": "± 125522.68669464148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7135292.4703125,
            "unit": "ns",
            "range": "± 115514.84972079503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016759.1342075893,
            "unit": "ns",
            "range": "± 23212.12860140374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329558.77578125,
            "unit": "ns",
            "range": "± 10212.61730590749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2868754.0615234375,
            "unit": "ns",
            "range": "± 54774.12396112344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801630.8264973959,
            "unit": "ns",
            "range": "± 2286.732961511866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791584.427594866,
            "unit": "ns",
            "range": "± 6018.654372014534"
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
          "id": "d5d9f55a1b818aefbb1ef90f0c4b3c4639e8d306",
          "message": "bump: bencodex 0.9.0",
          "timestamp": "2023-04-19T16:09:49+09:00",
          "tree_id": "626ce8094a832a2fa99f0d4ba78141fe10bd38a0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d5d9f55a1b818aefbb1ef90f0c4b3c4639e8d306"
        },
        "date": 1681889361370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8501308.175675675,
            "unit": "ns",
            "range": "± 422937.202956532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20986794.29661017,
            "unit": "ns",
            "range": "± 916296.4204992381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52871434.8,
            "unit": "ns",
            "range": "± 1063824.5968591024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105261182.56666666,
            "unit": "ns",
            "range": "± 1934978.6866022754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206802217.27419356,
            "unit": "ns",
            "range": "± 6312490.842982489"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70250,
            "unit": "ns",
            "range": "± 9919.04190764367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394419.56842105265,
            "unit": "ns",
            "range": "± 25994.834048838464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319025.41489361704,
            "unit": "ns",
            "range": "± 18571.247553886427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312220.52808988764,
            "unit": "ns",
            "range": "± 19888.913479333314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5647353.230769231,
            "unit": "ns",
            "range": "± 193141.3909289556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3689902.3,
            "unit": "ns",
            "range": "± 81684.188781905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18836.436170212764,
            "unit": "ns",
            "range": "± 2434.8601362252257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101294.64432989691,
            "unit": "ns",
            "range": "± 16972.863338766736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134198.35714285713,
            "unit": "ns",
            "range": "± 18371.98457469139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143876.78494623656,
            "unit": "ns",
            "range": "± 20263.46236984486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9316.317204301075,
            "unit": "ns",
            "range": "± 1165.3719498254302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24004.70408163265,
            "unit": "ns",
            "range": "± 3064.733132658724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1861933.005263158,
            "unit": "ns",
            "range": "± 380884.7748477856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3523534.6739130435,
            "unit": "ns",
            "range": "± 539614.5062134555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2846425.880952381,
            "unit": "ns",
            "range": "± 480186.810244468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8298696.032967033,
            "unit": "ns",
            "range": "± 1680621.0529604324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4043924.86,
            "unit": "ns",
            "range": "± 100423.8421914338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474655.06122449,
            "unit": "ns",
            "range": "± 213795.7369985157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4459274.808510638,
            "unit": "ns",
            "range": "± 140810.56099190091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4706138.340659341,
            "unit": "ns",
            "range": "± 379742.39014328946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8833290.282608695,
            "unit": "ns",
            "range": "± 554683.1525779464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6851828.304129465,
            "unit": "ns",
            "range": "± 106235.10500655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933434.6349158655,
            "unit": "ns",
            "range": "± 13305.57876626085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291220.9868861607,
            "unit": "ns",
            "range": "± 16372.192206020196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2718348.8981584823,
            "unit": "ns",
            "range": "± 31242.894205797656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885508.0868389423,
            "unit": "ns",
            "range": "± 6065.549420299602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723950.869516226,
            "unit": "ns",
            "range": "± 2558.287830873542"
          }
        ]
      }
    ]
  }
}