window.BENCHMARK_DATA = {
  "lastUpdate": 1679041955921,
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
        "date": 1679032199852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368321.4285714286,
            "unit": "ns",
            "range": "± 90268.53095299807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547603.125,
            "unit": "ns",
            "range": "± 79101.2192898767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176681.25,
            "unit": "ns",
            "range": "± 132377.90188658657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5071414.285714285,
            "unit": "ns",
            "range": "± 179927.83996874638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49222.63157894737,
            "unit": "ns",
            "range": "± 2838.2809490606587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7304692.307692308,
            "unit": "ns",
            "range": "± 84603.31417403676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19941869.230769232,
            "unit": "ns",
            "range": "± 236282.886192996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50410060,
            "unit": "ns",
            "range": "± 308690.93605093105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97905860,
            "unit": "ns",
            "range": "± 1173026.698514817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194130186.66666666,
            "unit": "ns",
            "range": "± 3383568.821075224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862596.205357143,
            "unit": "ns",
            "range": "± 10389.219612235036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503332.6450892857,
            "unit": "ns",
            "range": "± 3187.366618230458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172136.9921875,
            "unit": "ns",
            "range": "± 5122.122604701236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607535.4166666665,
            "unit": "ns",
            "range": "± 9299.10007660109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831187.0638020834,
            "unit": "ns",
            "range": "± 2118.597076680168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759164.3484933035,
            "unit": "ns",
            "range": "± 1519.8924601039396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188118.604651163,
            "unit": "ns",
            "range": "± 117245.30705566886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5151343.902439024,
            "unit": "ns",
            "range": "± 184535.8963031048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22994757.14285714,
            "unit": "ns",
            "range": "± 405265.8609135218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6169131.25,
            "unit": "ns",
            "range": "± 189173.38597085327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27252137.5,
            "unit": "ns",
            "range": "± 1058993.169492568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184233.33333333334,
            "unit": "ns",
            "range": "± 8592.046113136057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181437.5,
            "unit": "ns",
            "range": "± 5829.1349360401755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158898.18181818182,
            "unit": "ns",
            "range": "± 6780.4864599080665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10796007.692307692,
            "unit": "ns",
            "range": "± 159050.40323504613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9088360,
            "unit": "ns",
            "range": "± 163066.85657817076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21893.877551020407,
            "unit": "ns",
            "range": "± 2997.140091340362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52569.47368421053,
            "unit": "ns",
            "range": "± 5349.469523993001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41262.765957446805,
            "unit": "ns",
            "range": "± 2399.9544817615956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104426.80412371134,
            "unit": "ns",
            "range": "± 14786.490987440173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7403.061224489796,
            "unit": "ns",
            "range": "± 961.46945972616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20512.63157894737,
            "unit": "ns",
            "range": "± 1935.7906793636832"
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
        "date": 1679035124333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414303.5353535353,
            "unit": "ns",
            "range": "± 139897.59324061507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2488378.2608695654,
            "unit": "ns",
            "range": "± 62022.49560017968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173918,
            "unit": "ns",
            "range": "± 141379.01875969625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5144311.111111111,
            "unit": "ns",
            "range": "± 194253.63600460635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47761.17647058824,
            "unit": "ns",
            "range": "± 2580.8403078605756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7439266.666666667,
            "unit": "ns",
            "range": "± 104931.17926027697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19979146.666666668,
            "unit": "ns",
            "range": "± 201476.4072209614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50206100,
            "unit": "ns",
            "range": "± 617060.06769427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99414650,
            "unit": "ns",
            "range": "± 1433679.7854847827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200882013.33333334,
            "unit": "ns",
            "range": "± 1708647.876817333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4805870.3125,
            "unit": "ns",
            "range": "± 12215.827586467307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526814.94140625,
            "unit": "ns",
            "range": "± 2941.3397172485284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170572.6302083333,
            "unit": "ns",
            "range": "± 5435.384844151552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625086.328125,
            "unit": "ns",
            "range": "± 6422.878199592753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825691.3020833334,
            "unit": "ns",
            "range": "± 3168.569065638397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768952.91015625,
            "unit": "ns",
            "range": "± 1511.8424244728335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3160380.5555555555,
            "unit": "ns",
            "range": "± 104767.66900267452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5043014.285714285,
            "unit": "ns",
            "range": "± 116403.09396968057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23298019.04761905,
            "unit": "ns",
            "range": "± 540516.6497149257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6334476.470588235,
            "unit": "ns",
            "range": "± 124828.06439965616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26314933.333333332,
            "unit": "ns",
            "range": "± 437186.8408467068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187750,
            "unit": "ns",
            "range": "± 5033.189843429313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187235.61643835617,
            "unit": "ns",
            "range": "± 9293.701120517262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167551.0752688172,
            "unit": "ns",
            "range": "± 9337.575965858914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11518833.333333334,
            "unit": "ns",
            "range": "± 146994.85251758533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8846796.666666666,
            "unit": "ns",
            "range": "± 161712.85339261364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20435.164835164836,
            "unit": "ns",
            "range": "± 1901.1910668124524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54595.65217391304,
            "unit": "ns",
            "range": "± 3864.2888273812814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43572.916666666664,
            "unit": "ns",
            "range": "± 2828.8915131164813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104645.91836734694,
            "unit": "ns",
            "range": "± 16574.904446039174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6746.875,
            "unit": "ns",
            "range": "± 896.0677987741776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20625,
            "unit": "ns",
            "range": "± 2285.819880802625"
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
        "date": 1679036889532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666948.969072165,
            "unit": "ns",
            "range": "± 166349.50374064673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2969122.5,
            "unit": "ns",
            "range": "± 105168.40338482286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589760.2150537632,
            "unit": "ns",
            "range": "± 155063.2487643173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6242382.53968254,
            "unit": "ns",
            "range": "± 286225.0116095121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57468.47826086957,
            "unit": "ns",
            "range": "± 3249.5791561108203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8984407.462686567,
            "unit": "ns",
            "range": "± 424851.54851641745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24330207.692307692,
            "unit": "ns",
            "range": "± 273285.0113634069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59965692.307692304,
            "unit": "ns",
            "range": "± 225959.76950753297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 122817334.61538461,
            "unit": "ns",
            "range": "± 3298786.312411558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 247190740,
            "unit": "ns",
            "range": "± 5646373.580533559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5783971.40625,
            "unit": "ns",
            "range": "± 127419.76821369954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850335.952919408,
            "unit": "ns",
            "range": "± 36512.96167718812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404613.5620117188,
            "unit": "ns",
            "range": "± 25926.29835123693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144078.3854166665,
            "unit": "ns",
            "range": "± 57120.24308888819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038798.2421875,
            "unit": "ns",
            "range": "± 29019.163040543437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938462.6342773438,
            "unit": "ns",
            "range": "± 18188.23326769869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3995255.172413793,
            "unit": "ns",
            "range": "± 116495.3297230865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6154135.714285715,
            "unit": "ns",
            "range": "± 82736.04560140787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30570782.954545453,
            "unit": "ns",
            "range": "± 1666217.5253129876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7634433.333333333,
            "unit": "ns",
            "range": "± 133405.56138903584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34444488.02816901,
            "unit": "ns",
            "range": "± 1675603.4049488131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217633.84615384616,
            "unit": "ns",
            "range": "± 9500.563748455223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223314.0350877193,
            "unit": "ns",
            "range": "± 9517.773572872025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206466.25,
            "unit": "ns",
            "range": "± 10789.058495895186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13850338.888888888,
            "unit": "ns",
            "range": "± 292120.9603186946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10758386.666666666,
            "unit": "ns",
            "range": "± 108865.44687737024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26771.134020618556,
            "unit": "ns",
            "range": "± 2745.7147962357712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65555.10204081633,
            "unit": "ns",
            "range": "± 4916.291504216239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54668.42105263158,
            "unit": "ns",
            "range": "± 6079.933215581817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123829.47368421052,
            "unit": "ns",
            "range": "± 14948.53492916799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8256.842105263158,
            "unit": "ns",
            "range": "± 1030.456687805135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24792.47311827957,
            "unit": "ns",
            "range": "± 1788.2002464914626"
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
        "date": 1679038384242,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344231,
            "unit": "ns",
            "range": "± 113739.63772981295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517190.1408450706,
            "unit": "ns",
            "range": "± 123064.95283261668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2067834.6153846155,
            "unit": "ns",
            "range": "± 91817.34384292344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5120865.909090909,
            "unit": "ns",
            "range": "± 189289.26177872776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47493.181818181816,
            "unit": "ns",
            "range": "± 2612.1640939876834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7099535.714285715,
            "unit": "ns",
            "range": "± 109585.7767802349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19600473.333333332,
            "unit": "ns",
            "range": "± 185702.29811127682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49717657.14285714,
            "unit": "ns",
            "range": "± 521993.465497393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97314933.33333333,
            "unit": "ns",
            "range": "± 1529171.8317286586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 195644278.57142857,
            "unit": "ns",
            "range": "± 2721835.113464831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4714670.442708333,
            "unit": "ns",
            "range": "± 14329.814785595687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519108.5416666667,
            "unit": "ns",
            "range": "± 5851.091443515507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1203558.3072916667,
            "unit": "ns",
            "range": "± 3670.097403970436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661652.0926339286,
            "unit": "ns",
            "range": "± 11381.71042735156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816089.9204799107,
            "unit": "ns",
            "range": "± 3665.5219889039117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745285.0027901785,
            "unit": "ns",
            "range": "± 3885.2795205205875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3082861.904761905,
            "unit": "ns",
            "range": "± 71013.43870135058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4867730.434782608,
            "unit": "ns",
            "range": "± 121095.99661118825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23469978.57142857,
            "unit": "ns",
            "range": "± 414573.99112930265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6067051.851851852,
            "unit": "ns",
            "range": "± 167366.7216494053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25762926.666666668,
            "unit": "ns",
            "range": "± 479906.05102407676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182720.33898305084,
            "unit": "ns",
            "range": "± 8099.505724830223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184478,
            "unit": "ns",
            "range": "± 7320.959288096006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157900,
            "unit": "ns",
            "range": "± 7129.586243254233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11078931.578947369,
            "unit": "ns",
            "range": "± 233698.17203828337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8829266.666666666,
            "unit": "ns",
            "range": "± 160949.3827559578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19820.833333333332,
            "unit": "ns",
            "range": "± 1433.8697486662973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52547.42268041237,
            "unit": "ns",
            "range": "± 5482.758824706491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40124.17582417582,
            "unit": "ns",
            "range": "± 2474.4175817234996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99371.875,
            "unit": "ns",
            "range": "± 16554.030853541382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6050.549450549451,
            "unit": "ns",
            "range": "± 928.005462911797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18712.371134020617,
            "unit": "ns",
            "range": "± 2082.329311330161"
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
        "date": 1679041921807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454011.111111111,
            "unit": "ns",
            "range": "± 132203.6978772769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2456748.888888889,
            "unit": "ns",
            "range": "± 92330.3151787651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2062206.9892473118,
            "unit": "ns",
            "range": "± 118181.01572500281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5242063.636363637,
            "unit": "ns",
            "range": "± 334080.9166478604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47987.20930232558,
            "unit": "ns",
            "range": "± 2545.6674387316057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7058671.428571428,
            "unit": "ns",
            "range": "± 76357.35246016113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19063753.333333332,
            "unit": "ns",
            "range": "± 308546.73845225427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48564705.2631579,
            "unit": "ns",
            "range": "± 1037529.3770800389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97585373.33333333,
            "unit": "ns",
            "range": "± 1628668.5304552421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 188882571.42857143,
            "unit": "ns",
            "range": "± 3328775.277307435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4780618.697916667,
            "unit": "ns",
            "range": "± 26338.99167777829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496451.3802083333,
            "unit": "ns",
            "range": "± 9782.94659356205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151360.2083333333,
            "unit": "ns",
            "range": "± 7203.957057436473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607759.988839286,
            "unit": "ns",
            "range": "± 13272.43153725746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823479.140625,
            "unit": "ns",
            "range": "± 3831.5553219994767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759241.162109375,
            "unit": "ns",
            "range": "± 1847.0331284447175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065315.909090909,
            "unit": "ns",
            "range": "± 113770.5175836313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4776283.333333333,
            "unit": "ns",
            "range": "± 139371.29542522645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22642684.210526317,
            "unit": "ns",
            "range": "± 488730.42360698635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6066914.285714285,
            "unit": "ns",
            "range": "± 141586.79770979457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25775230,
            "unit": "ns",
            "range": "± 574993.849944227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181356.25,
            "unit": "ns",
            "range": "± 8350.304148058283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180059.74025974027,
            "unit": "ns",
            "range": "± 9235.34770867174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154192.85714285713,
            "unit": "ns",
            "range": "± 8237.729622216522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10607013.636363637,
            "unit": "ns",
            "range": "± 259457.39588877646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8464578.57142857,
            "unit": "ns",
            "range": "± 219885.39920392347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20704.21052631579,
            "unit": "ns",
            "range": "± 2116.5465543921528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54847.72727272727,
            "unit": "ns",
            "range": "± 3669.726328633205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40147.36842105263,
            "unit": "ns",
            "range": "± 1748.581594889115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104004.08163265306,
            "unit": "ns",
            "range": "± 19923.083634795108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5731.395348837209,
            "unit": "ns",
            "range": "± 677.0631437938375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19007.69230769231,
            "unit": "ns",
            "range": "± 1338.9241758658138"
          }
        ]
      }
    ]
  }
}