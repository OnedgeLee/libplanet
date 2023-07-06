window.BENCHMARK_DATA = {
  "lastUpdate": 1688683772822,
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
          "id": "e6ef25fd9741c17342918f27320691c092cd7339",
          "message": "fix: Catch when RoundVoteSet not found\n\n[skip changelog]",
          "timestamp": "2023-07-06T16:45:33+09:00",
          "tree_id": "400c0a03f685ad4839ecb3ca39f1b1f7e21b0268",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6ef25fd9741c17342918f27320691c092cd7339"
        },
        "date": 1688630611095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8274593.5,
            "unit": "ns",
            "range": "± 323226.15618014237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20153376.588235293,
            "unit": "ns",
            "range": "± 342757.8398226397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50578120.190476194,
            "unit": "ns",
            "range": "± 1132485.646185267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99880035.64285715,
            "unit": "ns",
            "range": "± 1696820.1814395182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208601402.53333333,
            "unit": "ns",
            "range": "± 1617309.633954482"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56195.684782608696,
            "unit": "ns",
            "range": "± 6036.8555400667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296580.42045454547,
            "unit": "ns",
            "range": "± 16224.10417817897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290548.4534883721,
            "unit": "ns",
            "range": "± 15523.045687286238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275462.1701030928,
            "unit": "ns",
            "range": "± 22439.6164552977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4049977.588235294,
            "unit": "ns",
            "range": "± 81787.96479545358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3707570.46,
            "unit": "ns",
            "range": "± 98650.33072950135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16661.615384615383,
            "unit": "ns",
            "range": "± 1660.908625282698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85908.54736842106,
            "unit": "ns",
            "range": "± 8176.77557367859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90912.95833333333,
            "unit": "ns",
            "range": "± 13682.645556683277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102198.24468085106,
            "unit": "ns",
            "range": "± 14121.501067015648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5202.631578947368,
            "unit": "ns",
            "range": "± 774.409837789075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15557.04945054945,
            "unit": "ns",
            "range": "± 1417.9342976765433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537950.202020202,
            "unit": "ns",
            "range": "± 161325.70818378445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2832231.697368421,
            "unit": "ns",
            "range": "± 143093.9824230234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2045355.293478261,
            "unit": "ns",
            "range": "± 159742.16373072722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5959471.15,
            "unit": "ns",
            "range": "± 311197.01257051405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324699.9215686275,
            "unit": "ns",
            "range": "± 134917.00679244898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374947.37704918,
            "unit": "ns",
            "range": "± 146447.5622395452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4461719.65625,
            "unit": "ns",
            "range": "± 206252.13348524008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3821240.094117647,
            "unit": "ns",
            "range": "± 204574.8909918428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6672707.047619048,
            "unit": "ns",
            "range": "± 157900.5713420557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6382113.8,
            "unit": "ns",
            "range": "± 42112.56633531755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990007.130580357,
            "unit": "ns",
            "range": "± 26958.121351386548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293244.8604910714,
            "unit": "ns",
            "range": "± 11187.049470889608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2789512.939453125,
            "unit": "ns",
            "range": "± 18950.01024883774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908229.4229817708,
            "unit": "ns",
            "range": "± 6744.68943407862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760732.2822265625,
            "unit": "ns",
            "range": "± 8552.221220648691"
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
          "id": "19d36742b4457f08f39c2567a9e8245aefdd4909",
          "message": "fix: Fix BlockVotes.MappedList()",
          "timestamp": "2023-07-06T21:58:55+09:00",
          "tree_id": "dedec47149216b47c722d4e6fb3b454316a936ba",
          "url": "https://github.com/OnedgeLee/libplanet/commit/19d36742b4457f08f39c2567a9e8245aefdd4909"
        },
        "date": 1688649311326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8207364.8,
            "unit": "ns",
            "range": "± 312067.13002614444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21746506.14,
            "unit": "ns",
            "range": "± 578095.7364648379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52501597.71428572,
            "unit": "ns",
            "range": "± 1912387.282308613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101354315.30555555,
            "unit": "ns",
            "range": "± 3335850.2329721563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223405173.1125,
            "unit": "ns",
            "range": "± 11679662.093061978"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69995.37634408602,
            "unit": "ns",
            "range": "± 11546.372862537337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330295.23333333334,
            "unit": "ns",
            "range": "± 27228.764886676967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320601.1595744681,
            "unit": "ns",
            "range": "± 41372.63220306083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337963.2888888889,
            "unit": "ns",
            "range": "± 54448.56548811326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4207209.266666667,
            "unit": "ns",
            "range": "± 74868.17286162454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3873727.1333333333,
            "unit": "ns",
            "range": "± 60226.10399494163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19489.469387755104,
            "unit": "ns",
            "range": "± 4313.9975916431285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100844.06842105264,
            "unit": "ns",
            "range": "± 21979.917224232184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84021.7032967033,
            "unit": "ns",
            "range": "± 7795.9534139969865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102614.8762886598,
            "unit": "ns",
            "range": "± 13327.614832758689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5692.755102040816,
            "unit": "ns",
            "range": "± 1222.4225403851738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20713.07,
            "unit": "ns",
            "range": "± 4489.963063119987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688289.0808080807,
            "unit": "ns",
            "range": "± 208224.04115380617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3077833.5535714286,
            "unit": "ns",
            "range": "± 132440.0266235002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059888.0252525252,
            "unit": "ns",
            "range": "± 170277.8651919066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5993962.783505155,
            "unit": "ns",
            "range": "± 379876.51209615223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3571426.4318181816,
            "unit": "ns",
            "range": "± 321448.81035520555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3754308.625,
            "unit": "ns",
            "range": "± 427572.64612185775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4301807.01369863,
            "unit": "ns",
            "range": "± 207905.98777382085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3852034.037037037,
            "unit": "ns",
            "range": "± 200815.21137749028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7852047.90625,
            "unit": "ns",
            "range": "± 961003.6416962276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6517629.126041667,
            "unit": "ns",
            "range": "± 108727.06666696795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891235.7015904018,
            "unit": "ns",
            "range": "± 18835.504963834584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318496.3651041666,
            "unit": "ns",
            "range": "± 24397.91634093842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2515620.4850260415,
            "unit": "ns",
            "range": "± 44195.59067499046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866660.4598307292,
            "unit": "ns",
            "range": "± 10263.403532980263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711559.1821614583,
            "unit": "ns",
            "range": "± 4439.1369566055"
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
          "id": "723f96c265433b88e098eb11ca344fd81285d065",
          "message": "fix: Fix VoteSetBitsResponse to skip null votes",
          "timestamp": "2023-07-07T07:23:40+09:00",
          "tree_id": "fdeacd17dc7ae83e77082aae80f55e65d1f16722",
          "url": "https://github.com/OnedgeLee/libplanet/commit/723f96c265433b88e098eb11ca344fd81285d065"
        },
        "date": 1688683302720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10454805.138297873,
            "unit": "ns",
            "range": "± 1422218.3677090772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22917393.268817205,
            "unit": "ns",
            "range": "± 1384124.0622996062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56958717.427083336,
            "unit": "ns",
            "range": "± 3258784.492668881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108629954.54411764,
            "unit": "ns",
            "range": "± 5175008.160555701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230219652.4,
            "unit": "ns",
            "range": "± 9175100.824893517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77712.2311827957,
            "unit": "ns",
            "range": "± 14323.25936472302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350927.98979591834,
            "unit": "ns",
            "range": "± 33580.3786248387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341400.0520833333,
            "unit": "ns",
            "range": "± 42277.96610836922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313826.5752688172,
            "unit": "ns",
            "range": "± 22650.950075206347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4482400.033333333,
            "unit": "ns",
            "range": "± 406671.59136935166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3931483.5681818184,
            "unit": "ns",
            "range": "± 214589.88030980073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20189.02688172043,
            "unit": "ns",
            "range": "± 3131.458739779822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102842.58421052631,
            "unit": "ns",
            "range": "± 14587.141481063993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111778.28888888888,
            "unit": "ns",
            "range": "± 10087.958627469588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121284.00537634408,
            "unit": "ns",
            "range": "± 15277.04650463767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8841.962365591398,
            "unit": "ns",
            "range": "± 1122.4821346417928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23744.275862068964,
            "unit": "ns",
            "range": "± 4437.192905036201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1860992.6063829786,
            "unit": "ns",
            "range": "± 329462.5366352178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3269524.010638298,
            "unit": "ns",
            "range": "± 350911.11261561513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2368165.7444444443,
            "unit": "ns",
            "range": "± 362051.16189548705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8965420.00515464,
            "unit": "ns",
            "range": "± 3158776.0293301176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3650859.3535353537,
            "unit": "ns",
            "range": "± 342498.645211988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474571.5942028984,
            "unit": "ns",
            "range": "± 161665.35786684562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4554490.893333334,
            "unit": "ns",
            "range": "± 229300.27987256603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4034542.659574468,
            "unit": "ns",
            "range": "± 307955.5192139079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7240837.041666667,
            "unit": "ns",
            "range": "± 281814.9234461812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7787111.2600911455,
            "unit": "ns",
            "range": "± 201574.4387830188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271763.197699653,
            "unit": "ns",
            "range": "± 48560.04603891381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368814.1924579327,
            "unit": "ns",
            "range": "± 10667.657149071621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2932052.2255859375,
            "unit": "ns",
            "range": "± 87945.31054405487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024961.0490337171,
            "unit": "ns",
            "range": "± 34990.498964713755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780311.6259114583,
            "unit": "ns",
            "range": "± 10458.604769255631"
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
          "id": "f499f2827179d356f4303edfbca39637150a0eea",
          "message": "fix: Fix VoteSetBitsResponse to skip null votes\n\n[skip changelog]",
          "timestamp": "2023-07-07T07:30:01+09:00",
          "tree_id": "29d78793d9ad4294304115a7f939cab294208c1d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f499f2827179d356f4303edfbca39637150a0eea"
        },
        "date": 1688683732837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9068253.14516129,
            "unit": "ns",
            "range": "± 407342.83071223786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22536785.92857143,
            "unit": "ns",
            "range": "± 739878.2119296744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55422631.86363637,
            "unit": "ns",
            "range": "± 1292978.2509319622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106911990.96153846,
            "unit": "ns",
            "range": "± 1389829.2972792627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227246461.16666666,
            "unit": "ns",
            "range": "± 1578138.934148692"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70323.63265306123,
            "unit": "ns",
            "range": "± 11836.37401497722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329631.0263157895,
            "unit": "ns",
            "range": "± 21377.73090671797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328455.6842105263,
            "unit": "ns",
            "range": "± 21922.291685639986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312243.4693877551,
            "unit": "ns",
            "range": "± 12221.344828656067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4346753,
            "unit": "ns",
            "range": "± 156030.02032946158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4024516.5,
            "unit": "ns",
            "range": "± 180831.78790427235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17364.850574712644,
            "unit": "ns",
            "range": "± 2115.6070464731574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126361.96,
            "unit": "ns",
            "range": "± 24940.244271693035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96908.51,
            "unit": "ns",
            "range": "± 23454.68550570688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111696.12244897959,
            "unit": "ns",
            "range": "± 14133.689292641684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7022.367346938776,
            "unit": "ns",
            "range": "± 1949.893951056335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20965.551020408162,
            "unit": "ns",
            "range": "± 3608.9235054935843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1578173.2268041237,
            "unit": "ns",
            "range": "± 133532.96736109973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3002233.611111111,
            "unit": "ns",
            "range": "± 125631.06381924554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2230080.904040404,
            "unit": "ns",
            "range": "± 285570.6628230253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6159225.901098901,
            "unit": "ns",
            "range": "± 410833.7892779635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3696292.304597701,
            "unit": "ns",
            "range": "± 201773.95108012494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639871.6666666665,
            "unit": "ns",
            "range": "± 258364.75890251575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4705872.011363637,
            "unit": "ns",
            "range": "± 256169.04189944195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4149378.652173913,
            "unit": "ns",
            "range": "± 303691.37034416216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7478608.265625,
            "unit": "ns",
            "range": "± 344607.089743821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7118276.030400815,
            "unit": "ns",
            "range": "± 342559.9151468725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2055453.2733154297,
            "unit": "ns",
            "range": "± 62902.57673147325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363722.7779447115,
            "unit": "ns",
            "range": "± 4869.708487180704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632047.9224759615,
            "unit": "ns",
            "range": "± 36639.76644878115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919667.7224227242,
            "unit": "ns",
            "range": "± 34507.52241884534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805099.3710002493,
            "unit": "ns",
            "range": "± 48846.345886023"
          }
        ]
      }
    ]
  }
}