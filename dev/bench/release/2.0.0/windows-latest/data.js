window.BENCHMARK_DATA = {
  "lastUpdate": 1686718320860,
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
          "id": "335fd39e76d19f625d79562010f69e99263dfeec",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:00:09+09:00",
          "tree_id": "2a1c21dc2c292847a99ea06984255271aafb7ddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/335fd39e76d19f625d79562010f69e99263dfeec"
        },
        "date": 1686716309573,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664014.7368421052,
            "unit": "ns",
            "range": "± 160376.3028128513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3035933.3333333335,
            "unit": "ns",
            "range": "± 89115.6796967632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2592959.782608696,
            "unit": "ns",
            "range": "± 165004.46950974985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6255797.560975609,
            "unit": "ns",
            "range": "± 215083.0938123739"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54861.79775280899,
            "unit": "ns",
            "range": "± 3189.9880883924634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8586493.333333334,
            "unit": "ns",
            "range": "± 82173.07055118194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23558369.230769232,
            "unit": "ns",
            "range": "± 208885.20525484558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59839460,
            "unit": "ns",
            "range": "± 1336087.106323615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118692492.3076923,
            "unit": "ns",
            "range": "± 1757210.4528966446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237110064.2857143,
            "unit": "ns",
            "range": "± 2614907.0730972574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5721376.742788462,
            "unit": "ns",
            "range": "± 42614.45848483533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905006.2174479167,
            "unit": "ns",
            "range": "± 16946.52753059236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397840.9877232143,
            "unit": "ns",
            "range": "± 11334.379860406178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3111185.1041666665,
            "unit": "ns",
            "range": "± 22410.683403159157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999480.7756696428,
            "unit": "ns",
            "range": "± 7432.415269739904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920897.3493303572,
            "unit": "ns",
            "range": "± 11707.324989756435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3882779.487179487,
            "unit": "ns",
            "range": "± 134125.0303958119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4080944.117647059,
            "unit": "ns",
            "range": "± 130736.47143911058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4882700,
            "unit": "ns",
            "range": "± 140849.98520885024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4991742.592592592,
            "unit": "ns",
            "range": "± 181331.27674294668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7952576.923076923,
            "unit": "ns",
            "range": "± 147571.81115021204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306174,
            "unit": "ns",
            "range": "± 11194.510498727599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295188.13559322036,
            "unit": "ns",
            "range": "± 12381.397123908035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288428.26086956525,
            "unit": "ns",
            "range": "± 11095.35764870412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4706626.666666667,
            "unit": "ns",
            "range": "± 71287.31069879593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4274300,
            "unit": "ns",
            "range": "± 65813.9940907845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24140,
            "unit": "ns",
            "range": "± 2251.7794381994595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109479.38144329897,
            "unit": "ns",
            "range": "± 8356.957407657528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95340,
            "unit": "ns",
            "range": "± 7537.909863243456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114765.30612244898,
            "unit": "ns",
            "range": "± 15893.187946450493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7088.541666666667,
            "unit": "ns",
            "range": "± 908.3089888899295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24543.617021276597,
            "unit": "ns",
            "range": "± 1793.2105232745064"
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
          "id": "e99d507bbe722d4ed8adda1eb5b9e06edf71c71f",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:03:12+09:00",
          "tree_id": "668448bb952bb72b9773743c6375fe8071a1881f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e99d507bbe722d4ed8adda1eb5b9e06edf71c71f"
        },
        "date": 1686716517272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338685.7142857143,
            "unit": "ns",
            "range": "± 125821.56568630268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2620752.6666666665,
            "unit": "ns",
            "range": "± 131325.34282638849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2144713.1578947366,
            "unit": "ns",
            "range": "± 156932.0018437526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5544057.831325301,
            "unit": "ns",
            "range": "± 295137.1492351549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46600,
            "unit": "ns",
            "range": "± 3026.5491900843112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6910435.714285715,
            "unit": "ns",
            "range": "± 75578.2997665626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19442357.14285714,
            "unit": "ns",
            "range": "± 209181.07619324134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47755986.666666664,
            "unit": "ns",
            "range": "± 813535.742358772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99155639.4736842,
            "unit": "ns",
            "range": "± 3218846.7779238992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189066014.2857143,
            "unit": "ns",
            "range": "± 2446172.559752871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4784784.645432692,
            "unit": "ns",
            "range": "± 36344.43195253502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521272.146267361,
            "unit": "ns",
            "range": "± 32100.68022630535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165222.865513393,
            "unit": "ns",
            "range": "± 8226.549644115814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659584.6540178573,
            "unit": "ns",
            "range": "± 36128.72954693728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817139.4810267857,
            "unit": "ns",
            "range": "± 4316.930905367624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770638.0924479166,
            "unit": "ns",
            "range": "± 7499.297483554526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2981126.3157894737,
            "unit": "ns",
            "range": "± 57972.07030693758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3220020,
            "unit": "ns",
            "range": "± 58121.50081633179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4105175,
            "unit": "ns",
            "range": "± 103281.64637659912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4172738.4615384615,
            "unit": "ns",
            "range": "± 111941.10621902243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6567910.52631579,
            "unit": "ns",
            "range": "± 224469.87252187266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261383.33333333334,
            "unit": "ns",
            "range": "± 9414.335634932211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243512,
            "unit": "ns",
            "range": "± 8741.004472237357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229481.0810810811,
            "unit": "ns",
            "range": "± 11485.854023574826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3890188.888888889,
            "unit": "ns",
            "range": "± 81660.28546498122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3697540.7407407407,
            "unit": "ns",
            "range": "± 100853.79844591209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20343.298969072166,
            "unit": "ns",
            "range": "± 2042.6650900485608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84491.57894736843,
            "unit": "ns",
            "range": "± 7833.719574635039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74280.20833333333,
            "unit": "ns",
            "range": "± 5097.8141815708195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97143.75,
            "unit": "ns",
            "range": "± 12498.688878606848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5455.670103092783,
            "unit": "ns",
            "range": "± 792.8021338062211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19578.494623655915,
            "unit": "ns",
            "range": "± 1464.6448940721607"
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
          "id": "ed894ec9a0bb678538dafc31f06551b6fde13335",
          "message": "Fix typo on changelog",
          "timestamp": "2023-06-14T13:30:08+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ed894ec9a0bb678538dafc31f06551b6fde13335"
        },
        "date": 1686718188195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484415.5555555555,
            "unit": "ns",
            "range": "± 131785.39152055976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828343.4782608696,
            "unit": "ns",
            "range": "± 219750.92008926027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394405.2083333335,
            "unit": "ns",
            "range": "± 234418.87043216673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6205421.875,
            "unit": "ns",
            "range": "± 474040.7751067579"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51348.92473118279,
            "unit": "ns",
            "range": "± 4958.490623769712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148865.625,
            "unit": "ns",
            "range": "± 521339.859618439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22909341.25,
            "unit": "ns",
            "range": "± 1190589.6691033535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58164865.625,
            "unit": "ns",
            "range": "± 1791782.2927428135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112573353.16455697,
            "unit": "ns",
            "range": "± 5831075.154387196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224785018.1818182,
            "unit": "ns",
            "range": "± 7126995.508384589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5577931.7116477275,
            "unit": "ns",
            "range": "± 132486.57515916065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739546.1588541667,
            "unit": "ns",
            "range": "± 29879.139950403893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339161.3932291667,
            "unit": "ns",
            "range": "± 28549.868032960585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2973448.26171875,
            "unit": "ns",
            "range": "± 66488.74330792115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977535.3064903846,
            "unit": "ns",
            "range": "± 26080.0279333578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888225.4356971154,
            "unit": "ns",
            "range": "± 10776.284288117628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3823907.1428571427,
            "unit": "ns",
            "range": "± 257620.37852815463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3786520.4081632653,
            "unit": "ns",
            "range": "± 261153.24645869163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4627623.958333333,
            "unit": "ns",
            "range": "± 345189.3770838481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557893.81443299,
            "unit": "ns",
            "range": "± 352637.4849539872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7715392.929292929,
            "unit": "ns",
            "range": "± 595096.9959101891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283597.7272727273,
            "unit": "ns",
            "range": "± 21952.45634554197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280351.0416666667,
            "unit": "ns",
            "range": "± 20930.949106107357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257890.32258064515,
            "unit": "ns",
            "range": "± 20324.11859426974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4494449.47368421,
            "unit": "ns",
            "range": "± 404301.2353546481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4126648.9583333335,
            "unit": "ns",
            "range": "± 282446.7189604706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21101.11111111111,
            "unit": "ns",
            "range": "± 2115.9370885724616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92291.39784946236,
            "unit": "ns",
            "range": "± 8140.6074967463155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80775.25773195876,
            "unit": "ns",
            "range": "± 9352.851959516534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103859.375,
            "unit": "ns",
            "range": "± 16424.500813531115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5567.391304347826,
            "unit": "ns",
            "range": "± 1110.5002036655092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20363.82978723404,
            "unit": "ns",
            "range": "± 1983.4720867970843"
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
          "id": "d9ed1a98f743ad30c9a27a78e0a5d6d352b10f15",
          "message": "Fix changelog typo",
          "timestamp": "2023-06-14T13:27:50+09:00",
          "tree_id": "f119be8db572f196b39ac3a240a04648deda36bb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d9ed1a98f743ad30c9a27a78e0a5d6d352b10f15"
        },
        "date": 1686718273082,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779925.5555555555,
            "unit": "ns",
            "range": "± 143076.15051151437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3407483.9285714286,
            "unit": "ns",
            "range": "± 134510.48864380358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2863861.052631579,
            "unit": "ns",
            "range": "± 245821.15289707296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7008628.169014084,
            "unit": "ns",
            "range": "± 341248.3771528544"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75819.38775510204,
            "unit": "ns",
            "range": "± 10636.173040190699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9872892.307692308,
            "unit": "ns",
            "range": "± 140349.41195422743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25404923.076923076,
            "unit": "ns",
            "range": "± 350127.61519634083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66358293.333333336,
            "unit": "ns",
            "range": "± 1220687.2733170013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134736173.33333334,
            "unit": "ns",
            "range": "± 3728124.6533597163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265689861.53846154,
            "unit": "ns",
            "range": "± 3034263.3157375725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176115.401785715,
            "unit": "ns",
            "range": "± 50321.3891953094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2067663.7867647058,
            "unit": "ns",
            "range": "± 42114.378192030104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1488785.6705729167,
            "unit": "ns",
            "range": "± 13749.450026745104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3390459.598214286,
            "unit": "ns",
            "range": "± 59682.20532089431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1068752.3307291667,
            "unit": "ns",
            "range": "± 19048.068979679054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1016161.171875,
            "unit": "ns",
            "range": "± 12258.506803381442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4251702.247191011,
            "unit": "ns",
            "range": "± 225964.66587093985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4484959.375,
            "unit": "ns",
            "range": "± 199837.46627343757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5568740.579710145,
            "unit": "ns",
            "range": "± 267483.43396688666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5476890.322580645,
            "unit": "ns",
            "range": "± 246849.70984198985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8767581.081081081,
            "unit": "ns",
            "range": "± 275210.43447377364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353703.125,
            "unit": "ns",
            "range": "± 24109.366832808933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335809.57446808513,
            "unit": "ns",
            "range": "± 21963.30306528154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308877.8947368421,
            "unit": "ns",
            "range": "± 19925.409731484204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5205898.484848484,
            "unit": "ns",
            "range": "± 161316.68993243563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4804046.666666667,
            "unit": "ns",
            "range": "± 67358.56999952531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28014.583333333332,
            "unit": "ns",
            "range": "± 4841.878260315854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128762.88659793814,
            "unit": "ns",
            "range": "± 14021.18426693775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126622.44897959183,
            "unit": "ns",
            "range": "± 19527.86816776943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139640.4255319149,
            "unit": "ns",
            "range": "± 18192.36705796731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9158.510638297872,
            "unit": "ns",
            "range": "± 1942.0313926384235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26473.333333333332,
            "unit": "ns",
            "range": "± 3355.9874382055214"
          }
        ]
      }
    ]
  }
}