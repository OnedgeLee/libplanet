window.BENCHMARK_DATA = {
  "lastUpdate": 1688683412499,
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
        "date": 1688630582132,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8934010.266666668,
            "unit": "ns",
            "range": "± 65278.004304082475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23218209.066666666,
            "unit": "ns",
            "range": "± 248558.78817278583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56997448.53333333,
            "unit": "ns",
            "range": "± 474177.88860042003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114696740.13333334,
            "unit": "ns",
            "range": "± 856002.4914074948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227152226.4,
            "unit": "ns",
            "range": "± 2848355.6375269224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48327.75555555556,
            "unit": "ns",
            "range": "± 2618.2552399209067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295788.875,
            "unit": "ns",
            "range": "± 3476.536147278399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286678.1632653061,
            "unit": "ns",
            "range": "± 11235.559521646253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256012.2340425532,
            "unit": "ns",
            "range": "± 9857.074689989588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4590596.928571428,
            "unit": "ns",
            "range": "± 55280.38290731279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4169211.3571428573,
            "unit": "ns",
            "range": "± 43881.6317409375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21253.59375,
            "unit": "ns",
            "range": "± 1863.9519565647552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96064.35227272728,
            "unit": "ns",
            "range": "± 5252.72253882497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81997.46391752578,
            "unit": "ns",
            "range": "± 6552.403700268219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96105.44680851063,
            "unit": "ns",
            "range": "± 10687.323868753809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5667.4795918367345,
            "unit": "ns",
            "range": "± 854.3096957662625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19151.354166666668,
            "unit": "ns",
            "range": "± 2078.733556654485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563799.698630137,
            "unit": "ns",
            "range": "± 76155.37692217086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964088.5945945946,
            "unit": "ns",
            "range": "± 92195.72879792796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1962705.2528735632,
            "unit": "ns",
            "range": "± 106059.24202935964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5316601.2,
            "unit": "ns",
            "range": "± 157512.04851592385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199582.055803572,
            "unit": "ns",
            "range": "± 30643.611440962835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882233.720703125,
            "unit": "ns",
            "range": "± 4281.0806219451615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398293.201923077,
            "unit": "ns",
            "range": "± 1699.0878991203522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666378.221875,
            "unit": "ns",
            "range": "± 3505.174322879631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834254.7129603794,
            "unit": "ns",
            "range": "± 579.1966639192227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766906.0288411458,
            "unit": "ns",
            "range": "± 756.5787838754976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3580944.275,
            "unit": "ns",
            "range": "± 127187.40019760212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3816239.8571428573,
            "unit": "ns",
            "range": "± 90236.96897906407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4752565.857142857,
            "unit": "ns",
            "range": "± 67124.93986229323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173669.8387096776,
            "unit": "ns",
            "range": "± 123547.65998245285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6738334.2,
            "unit": "ns",
            "range": "± 176125.1551343059"
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
        "date": 1688649576222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398199.10869565216,
            "unit": "ns",
            "range": "± 41064.25291063914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370822.021978022,
            "unit": "ns",
            "range": "± 39492.18990550973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333806.6210526316,
            "unit": "ns",
            "range": "± 38740.40394103353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5921337.758241759,
            "unit": "ns",
            "range": "± 409116.0048236343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5284970.623655914,
            "unit": "ns",
            "range": "± 452843.346100717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27001.967741935485,
            "unit": "ns",
            "range": "± 8380.712624638445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123552.04395604396,
            "unit": "ns",
            "range": "± 19683.72011582278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130140.71276595745,
            "unit": "ns",
            "range": "± 24534.188975388006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145181.02127659574,
            "unit": "ns",
            "range": "± 25640.722825006116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8981.434782608696,
            "unit": "ns",
            "range": "± 2028.9517095426386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27142.53125,
            "unit": "ns",
            "range": "± 8262.116182282809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1905049.452631579,
            "unit": "ns",
            "range": "± 174028.5940539638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3861985.227272727,
            "unit": "ns",
            "range": "± 351382.1654316593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2522517.032608696,
            "unit": "ns",
            "range": "± 253309.49760771633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7554920.625,
            "unit": "ns",
            "range": "± 772587.864371674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8029587.35625,
            "unit": "ns",
            "range": "± 139382.21180061816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2633094.5906661185,
            "unit": "ns",
            "range": "± 56675.867333046284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1855541.1110026042,
            "unit": "ns",
            "range": "± 30993.407511558413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3519222.0133167612,
            "unit": "ns",
            "range": "± 84879.40710856924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1140567.863560268,
            "unit": "ns",
            "range": "± 16622.824766084595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1071775.2430989584,
            "unit": "ns",
            "range": "± 15194.364892915934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4528276.6122448975,
            "unit": "ns",
            "range": "± 434362.3078218248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4878174.549450549,
            "unit": "ns",
            "range": "± 323775.7109965088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6373568.604395605,
            "unit": "ns",
            "range": "± 460531.6405567924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5491967.833333333,
            "unit": "ns",
            "range": "± 497560.4783696397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9587830.692307692,
            "unit": "ns",
            "range": "± 749758.6382520518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10264525.897959184,
            "unit": "ns",
            "range": "± 1448241.5695090478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28808196.86734694,
            "unit": "ns",
            "range": "± 3046690.8583635446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75961732.91525424,
            "unit": "ns",
            "range": "± 3342421.655185082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153760511.2777778,
            "unit": "ns",
            "range": "± 3246317.1448467895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294284197.86567163,
            "unit": "ns",
            "range": "± 13896802.738926033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69123.74736842106,
            "unit": "ns",
            "range": "± 14483.633415487348"
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
        "date": 1688683045410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299968.3870967742,
            "unit": "ns",
            "range": "± 8980.604447650574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282528.70454545453,
            "unit": "ns",
            "range": "± 10599.569055697051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255985.775,
            "unit": "ns",
            "range": "± 8974.250833635084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4555892.666666667,
            "unit": "ns",
            "range": "± 63785.85345476206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4271716.588235294,
            "unit": "ns",
            "range": "± 85923.9676822326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21412.852631578946,
            "unit": "ns",
            "range": "± 1895.8423938468177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97144.14432989691,
            "unit": "ns",
            "range": "± 6431.8751105167785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80933.9255319149,
            "unit": "ns",
            "range": "± 5118.611100342105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103723.94845360825,
            "unit": "ns",
            "range": "± 12006.846893345144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5297.891304347826,
            "unit": "ns",
            "range": "± 576.0513266303323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18785.945652173912,
            "unit": "ns",
            "range": "± 1249.7588107014662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1555540.6082474226,
            "unit": "ns",
            "range": "± 100976.68804745199"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962043.9696969697,
            "unit": "ns",
            "range": "± 92196.84810755627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1997649.6,
            "unit": "ns",
            "range": "± 125097.70569195696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101075.294117647,
            "unit": "ns",
            "range": "± 102005.76786312423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6088169.6078125,
            "unit": "ns",
            "range": "± 22600.200920657142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930291.3816964286,
            "unit": "ns",
            "range": "± 3332.958763173113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415601.4349888393,
            "unit": "ns",
            "range": "± 3065.722007039605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623222.935677083,
            "unit": "ns",
            "range": "± 6699.66425390001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838379.4876534598,
            "unit": "ns",
            "range": "± 632.1588108115428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770833.6265625,
            "unit": "ns",
            "range": "± 549.5948828509503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3587479.303030303,
            "unit": "ns",
            "range": "± 112333.03632460623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779267.703703704,
            "unit": "ns",
            "range": "± 105154.52680983895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4591960.5625,
            "unit": "ns",
            "range": "± 62603.893600924166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4306367.447368421,
            "unit": "ns",
            "range": "± 148040.27707837857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6557799.923076923,
            "unit": "ns",
            "range": "± 176214.56001430145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8236905.368421053,
            "unit": "ns",
            "range": "± 182378.56509079938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22455283.466666665,
            "unit": "ns",
            "range": "± 216048.92175215008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56778364.6,
            "unit": "ns",
            "range": "± 659195.5247708918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116530035.53333333,
            "unit": "ns",
            "range": "± 1508021.0888023258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225367366.2,
            "unit": "ns",
            "range": "± 1866108.5062351085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48222.443181818184,
            "unit": "ns",
            "range": "± 2668.81341258945"
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
        "date": 1688683400070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292462.3448275862,
            "unit": "ns",
            "range": "± 8479.761385944865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281281.4074074074,
            "unit": "ns",
            "range": "± 7643.3466001949855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241137.66666666666,
            "unit": "ns",
            "range": "± 5089.580058950894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4479164.611111111,
            "unit": "ns",
            "range": "± 94472.73707399206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4055726.3636363638,
            "unit": "ns",
            "range": "± 98908.68596820357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17490.351648351647,
            "unit": "ns",
            "range": "± 1201.2047228014824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87221.93,
            "unit": "ns",
            "range": "± 7692.8299323973015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73120.19230769231,
            "unit": "ns",
            "range": "± 1974.0539408887644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89368.85567010309,
            "unit": "ns",
            "range": "± 11906.519052069132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5172.979166666667,
            "unit": "ns",
            "range": "± 554.5193647449953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17713.708333333332,
            "unit": "ns",
            "range": "± 1471.5676418572825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447342.2626262626,
            "unit": "ns",
            "range": "± 93008.81390970162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791557.8928571427,
            "unit": "ns",
            "range": "± 118616.79373828965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1915813.625,
            "unit": "ns",
            "range": "± 104550.63301581288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5310462.129411764,
            "unit": "ns",
            "range": "± 285567.31515703077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6139876.83828125,
            "unit": "ns",
            "range": "± 32816.06279067358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878464.1044270834,
            "unit": "ns",
            "range": "± 4298.567796102553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383291.2998046875,
            "unit": "ns",
            "range": "± 4429.210075965679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641308.954817708,
            "unit": "ns",
            "range": "± 6960.057147082323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846930.5313197544,
            "unit": "ns",
            "range": "± 1274.779998136084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767044.0145182292,
            "unit": "ns",
            "range": "± 1725.727847127892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470414.3666666667,
            "unit": "ns",
            "range": "± 102537.93867519216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3615101.9523809524,
            "unit": "ns",
            "range": "± 131690.29195212797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4359464.0625,
            "unit": "ns",
            "range": "± 123320.16221096169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3973477.7666666666,
            "unit": "ns",
            "range": "± 177107.62683329283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6329770.5,
            "unit": "ns",
            "range": "± 80771.46365292859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7856008.666666667,
            "unit": "ns",
            "range": "± 13655.091180637175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21728854.733333334,
            "unit": "ns",
            "range": "± 389041.9446230273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54287454.058823526,
            "unit": "ns",
            "range": "± 950876.730944032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107898693.64285715,
            "unit": "ns",
            "range": "± 1812879.6086596004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215031513.33333334,
            "unit": "ns",
            "range": "± 3326722.175278256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47555.89189189189,
            "unit": "ns",
            "range": "± 2402.89171435008"
          }
        ]
      }
    ]
  }
}