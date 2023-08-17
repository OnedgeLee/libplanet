window.BENCHMARK_DATA = {
  "lastUpdate": 1692265026017,
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
          "id": "58342035f516267808c027e47fa95880240e0206",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-08-10T17:11:49+09:00",
          "tree_id": "b3df59f6b71ffb5fada57ce7b52a255cd5ea73a7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/58342035f516267808c027e47fa95880240e0206"
        },
        "date": 1691657150115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1432280.612244898,
            "unit": "ns",
            "range": "± 117189.88350321705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643308,
            "unit": "ns",
            "range": "± 103771.88648420051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877113.4020618557,
            "unit": "ns",
            "range": "± 142334.86310814274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4833093.87755102,
            "unit": "ns",
            "range": "± 192150.69759627388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47087.91208791209,
            "unit": "ns",
            "range": "± 2745.494700002378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7461588.888888889,
            "unit": "ns",
            "range": "± 154656.26359537157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20946546.666666668,
            "unit": "ns",
            "range": "± 283183.53177165275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52586293.333333336,
            "unit": "ns",
            "range": "± 585245.3898844076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105584928.57142857,
            "unit": "ns",
            "range": "± 990855.8409690169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213421907.14285713,
            "unit": "ns",
            "range": "± 2389823.821142241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4518589.663461538,
            "unit": "ns",
            "range": "± 15433.01077131332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1444595.4817708333,
            "unit": "ns",
            "range": "± 3683.378263699634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091614.6354166667,
            "unit": "ns",
            "range": "± 7868.313802436173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614686.1177884615,
            "unit": "ns",
            "range": "± 16322.006436855127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840633.7369791666,
            "unit": "ns",
            "range": "± 4792.5238022967815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772540.0948660715,
            "unit": "ns",
            "range": "± 1678.5599276345108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433620,
            "unit": "ns",
            "range": "± 75927.82306763098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577292.3076923075,
            "unit": "ns",
            "range": "± 124487.01133814255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4408556,
            "unit": "ns",
            "range": "± 117607.21732388138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3986250,
            "unit": "ns",
            "range": "± 86575.09906305495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6256863.414634147,
            "unit": "ns",
            "range": "± 185919.69739123606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258775.75757575757,
            "unit": "ns",
            "range": "± 7952.870169906833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252357.6923076923,
            "unit": "ns",
            "range": "± 6696.277955815339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225409.5890410959,
            "unit": "ns",
            "range": "± 11234.942569990704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144350,
            "unit": "ns",
            "range": "± 43698.7898089779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794796.6666666665,
            "unit": "ns",
            "range": "± 60468.83337326602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22126.041666666668,
            "unit": "ns",
            "range": "± 1760.1581742120834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90706.25,
            "unit": "ns",
            "range": "± 6545.964003631711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76008.33333333333,
            "unit": "ns",
            "range": "± 4622.978458154591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89484.69387755102,
            "unit": "ns",
            "range": "± 16399.436450216952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5594.791666666667,
            "unit": "ns",
            "range": "± 869.043005618269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22017.34693877551,
            "unit": "ns",
            "range": "± 2267.430786868246"
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
          "id": "003b5b6e75ba7ac7ac519e097ba2d1998c34da81",
          "message": "document: Update changelog",
          "timestamp": "2023-08-10T18:21:41+09:00",
          "tree_id": "27c8d686e27a4f66b4c94facb50e5858ac53224c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/003b5b6e75ba7ac7ac519e097ba2d1998c34da81"
        },
        "date": 1691660355486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1305704.2857142857,
            "unit": "ns",
            "range": "± 62682.79803719883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2574556.5217391304,
            "unit": "ns",
            "range": "± 123480.00966846329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026883.3333333333,
            "unit": "ns",
            "range": "± 66987.83045129488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4765217.105263158,
            "unit": "ns",
            "range": "± 230622.74960819044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47220.65217391304,
            "unit": "ns",
            "range": "± 2722.1330535453285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7393830.769230769,
            "unit": "ns",
            "range": "± 87708.9351645105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20993626.666666668,
            "unit": "ns",
            "range": "± 206588.91363791822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52089152.941176474,
            "unit": "ns",
            "range": "± 1034285.591070986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104004038.46153846,
            "unit": "ns",
            "range": "± 1105102.4609649412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207113384.6153846,
            "unit": "ns",
            "range": "± 1381701.750165446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4607751.060267857,
            "unit": "ns",
            "range": "± 16850.259540514562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1412324.4791666667,
            "unit": "ns",
            "range": "± 4067.954364818751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064055.9244791667,
            "unit": "ns",
            "range": "± 2346.4005365402154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601069.5572916665,
            "unit": "ns",
            "range": "± 9308.835652255702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840884.9958147322,
            "unit": "ns",
            "range": "± 3074.7780872134595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776143.5416666666,
            "unit": "ns",
            "range": "± 3093.0452855635494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274343.9024390243,
            "unit": "ns",
            "range": "± 118048.55790898185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516093.3333333335,
            "unit": "ns",
            "range": "± 105158.04176156208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4240941.176470588,
            "unit": "ns",
            "range": "± 85953.09810314816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3857470.588235294,
            "unit": "ns",
            "range": "± 184314.69767425847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6141796.428571428,
            "unit": "ns",
            "range": "± 163970.31457201808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255264.70588235295,
            "unit": "ns",
            "range": "± 8060.035429388301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249694.11764705883,
            "unit": "ns",
            "range": "± 10076.178080298221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223681.81818181818,
            "unit": "ns",
            "range": "± 13987.920179433278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4051209.523809524,
            "unit": "ns",
            "range": "± 91099.62626027565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3736925,
            "unit": "ns",
            "range": "± 68371.01237610375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20964.130434782608,
            "unit": "ns",
            "range": "± 1991.5525735288736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85020,
            "unit": "ns",
            "range": "± 4464.101536887973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69986.44067796611,
            "unit": "ns",
            "range": "± 3074.447392292141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83972.44897959183,
            "unit": "ns",
            "range": "± 17034.070047827012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5195.833333333333,
            "unit": "ns",
            "range": "± 735.2646020907843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20098.958333333332,
            "unit": "ns",
            "range": "± 2359.2815495028485"
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
          "id": "28b0e8ac7d6a2603eac4b6300fea17b0c7e20a87",
          "message": "document: Update changelog",
          "timestamp": "2023-08-10T18:34:06+09:00",
          "tree_id": "98be677852fb1381c4a1c8e2de4434a714feafe2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/28b0e8ac7d6a2603eac4b6300fea17b0c7e20a87"
        },
        "date": 1691661186213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386735,
            "unit": "ns",
            "range": "± 98972.72695959317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602674.1379310344,
            "unit": "ns",
            "range": "± 112556.18567388612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1833066.3157894737,
            "unit": "ns",
            "range": "± 132355.51625486073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4839201.01010101,
            "unit": "ns",
            "range": "± 293832.29511411866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48089.24731182796,
            "unit": "ns",
            "range": "± 2963.013388485775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7563645.945945946,
            "unit": "ns",
            "range": "± 254612.16868296269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20732892.85714286,
            "unit": "ns",
            "range": "± 266556.8476366308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52927653.333333336,
            "unit": "ns",
            "range": "± 703403.0056667035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104850983.33333333,
            "unit": "ns",
            "range": "± 1508373.504647907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208974706.66666666,
            "unit": "ns",
            "range": "± 2660863.163783691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4606790.290178572,
            "unit": "ns",
            "range": "± 12540.455079760315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1436400.9505208333,
            "unit": "ns",
            "range": "± 5056.391356365654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1089811.6536458333,
            "unit": "ns",
            "range": "± 3580.397094315216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674429.9739583335,
            "unit": "ns",
            "range": "± 4022.7788324701914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835229.8177083334,
            "unit": "ns",
            "range": "± 2714.3452031086663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774182.7994791666,
            "unit": "ns",
            "range": "± 2776.0138346976582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418235.135135135,
            "unit": "ns",
            "range": "± 115737.70444946294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3692654.6511627906,
            "unit": "ns",
            "range": "± 135927.27213912937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4397662.068965517,
            "unit": "ns",
            "range": "± 126064.95041897225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4003150,
            "unit": "ns",
            "range": "± 162970.65993607562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6323028.846153846,
            "unit": "ns",
            "range": "± 232545.90214098402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266564,
            "unit": "ns",
            "range": "± 10540.316379869966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249955,
            "unit": "ns",
            "range": "± 8732.95996461622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242153.7634408602,
            "unit": "ns",
            "range": "± 13706.857686540841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4233535.714285715,
            "unit": "ns",
            "range": "± 64511.0677104546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3955278.5714285714,
            "unit": "ns",
            "range": "± 45737.7840533392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26104.123711340206,
            "unit": "ns",
            "range": "± 2640.111958081087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95106.3829787234,
            "unit": "ns",
            "range": "± 6162.247329734943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80268.68686868687,
            "unit": "ns",
            "range": "± 8017.69276273935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94955.10204081633,
            "unit": "ns",
            "range": "± 17424.44143345292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5712.244897959184,
            "unit": "ns",
            "range": "± 911.5824358470466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20962.105263157893,
            "unit": "ns",
            "range": "± 1961.5006710217594"
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
          "id": "02910f703c47ed35e32a74edd1399f470264284e",
          "message": "document: Update changelog",
          "timestamp": "2023-08-11T11:10:35+09:00",
          "tree_id": "a45e1b654be30cd142e26ab7a9052f418b2e524a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/02910f703c47ed35e32a74edd1399f470264284e"
        },
        "date": 1691720850685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441237.6288659794,
            "unit": "ns",
            "range": "± 154327.9693931968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2461497.9591836734,
            "unit": "ns",
            "range": "± 97180.97269569611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1820748.4536082475,
            "unit": "ns",
            "range": "± 151337.15884945585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4531445.454545454,
            "unit": "ns",
            "range": "± 156023.6095052425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45512.5,
            "unit": "ns",
            "range": "± 3287.1119943132294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7254473.333333333,
            "unit": "ns",
            "range": "± 66279.8123398786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18177420,
            "unit": "ns",
            "range": "± 77867.15060188824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46481846.666666664,
            "unit": "ns",
            "range": "± 268179.9685357009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92710453.33333333,
            "unit": "ns",
            "range": "± 399601.61566001613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185566528.57142857,
            "unit": "ns",
            "range": "± 611735.8862331803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4365260.714285715,
            "unit": "ns",
            "range": "± 28606.831953884357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381936.2154447115,
            "unit": "ns",
            "range": "± 2145.180363428876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 999296.0658482143,
            "unit": "ns",
            "range": "± 1489.056394712373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2510981.6536458335,
            "unit": "ns",
            "range": "± 5292.508957746278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803547.32421875,
            "unit": "ns",
            "range": "± 1427.5474049530364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 709455.3850446428,
            "unit": "ns",
            "range": "± 1913.1241677384378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3155240,
            "unit": "ns",
            "range": "± 70591.04162636175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3217188.2352941176,
            "unit": "ns",
            "range": "± 63266.90369333065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4049536.8421052634,
            "unit": "ns",
            "range": "± 88852.54458012203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3576552.5423728814,
            "unit": "ns",
            "range": "± 158087.3834699987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5885233.928571428,
            "unit": "ns",
            "range": "± 249099.47248350093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256931.96721311475,
            "unit": "ns",
            "range": "± 10734.671368929145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241738.46153846153,
            "unit": "ns",
            "range": "± 9757.828464681774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225393.75,
            "unit": "ns",
            "range": "± 13017.77580242129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3840120,
            "unit": "ns",
            "range": "± 31807.101632901326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3474513.3333333335,
            "unit": "ns",
            "range": "± 54605.152382047854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21004.255319148935,
            "unit": "ns",
            "range": "± 2298.6632344243003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88911.70212765958,
            "unit": "ns",
            "range": "± 6691.140931416812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70602.12765957447,
            "unit": "ns",
            "range": "± 5070.915989520543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80042.1052631579,
            "unit": "ns",
            "range": "± 12499.272991176354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4632.291666666667,
            "unit": "ns",
            "range": "± 656.6253103906474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19859.574468085106,
            "unit": "ns",
            "range": "± 1606.9954030978654"
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
          "id": "3ed0c3ceb031fa6c23e13402e54d7222342264a1",
          "message": "test: Fix tests to apply IWorldState, IAccountState explorer query",
          "timestamp": "2023-08-15T16:36:27+09:00",
          "tree_id": "8045c18b8adcd2cd93e8299bbf118291eea98b14",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3ed0c3ceb031fa6c23e13402e54d7222342264a1"
        },
        "date": 1692085985717,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363459,
            "unit": "ns",
            "range": "± 121678.47190132864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2419132,
            "unit": "ns",
            "range": "± 61304.30735274643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1782882.8282828282,
            "unit": "ns",
            "range": "± 131140.76176384225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4710173.880597015,
            "unit": "ns",
            "range": "± 223257.5751808254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47047.82608695652,
            "unit": "ns",
            "range": "± 2807.3090733223776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7319157.142857143,
            "unit": "ns",
            "range": "± 65153.72903060428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20283540,
            "unit": "ns",
            "range": "± 320386.23298405675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51175506.666666664,
            "unit": "ns",
            "range": "± 734129.6717558696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101865533.33333333,
            "unit": "ns",
            "range": "± 2621719.57238601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202391493.75,
            "unit": "ns",
            "range": "± 3844059.8363308115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517644.635416667,
            "unit": "ns",
            "range": "± 18838.90956571988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421856.3020833333,
            "unit": "ns",
            "range": "± 5267.718969441561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1055047.7604166667,
            "unit": "ns",
            "range": "± 4343.55878504616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2691097.956730769,
            "unit": "ns",
            "range": "± 6909.318273149727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844245.1729910715,
            "unit": "ns",
            "range": "± 2275.779642997967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761764.8111979166,
            "unit": "ns",
            "range": "± 2208.4076398839225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229092.592592593,
            "unit": "ns",
            "range": "± 85617.09896584698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437476.6666666665,
            "unit": "ns",
            "range": "± 100681.96319422698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4061573.913043478,
            "unit": "ns",
            "range": "± 101969.98318307074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3773050,
            "unit": "ns",
            "range": "± 73682.49000497563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6110751.063829787,
            "unit": "ns",
            "range": "± 235404.20175809396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255593.75,
            "unit": "ns",
            "range": "± 11843.045980457819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243287.5,
            "unit": "ns",
            "range": "± 8605.679099638648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211484.0579710145,
            "unit": "ns",
            "range": "± 10220.418190885828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4053183.3333333335,
            "unit": "ns",
            "range": "± 84217.08817797295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3682464.705882353,
            "unit": "ns",
            "range": "± 75090.27018509514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20800,
            "unit": "ns",
            "range": "± 1815.8873336500362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86146.39175257731,
            "unit": "ns",
            "range": "± 7114.862112971547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72318.03278688525,
            "unit": "ns",
            "range": "± 3241.939141764864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81714.43298969071,
            "unit": "ns",
            "range": "± 14318.119273106378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5050,
            "unit": "ns",
            "range": "± 715.6888474161027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18596.236559139787,
            "unit": "ns",
            "range": "± 1806.844423163894"
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
          "id": "bf39a4e73e6bd8149a0503295427d1fb7dfcb1f1",
          "message": "test: Fix tests to apply IWorldState, IAccountState explorer query",
          "timestamp": "2023-08-15T17:35:56+09:00",
          "tree_id": "df6dd5cf3d99e3a5dc2c35d7528a0b6dff483622",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bf39a4e73e6bd8149a0503295427d1fb7dfcb1f1"
        },
        "date": 1692089607419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1315881.8181818181,
            "unit": "ns",
            "range": "± 106791.96480859826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2429993.5064935065,
            "unit": "ns",
            "range": "± 123772.34337118834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1723302.0833333333,
            "unit": "ns",
            "range": "± 132017.90307551526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4724286,
            "unit": "ns",
            "range": "± 320555.5767442179"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45246.739130434784,
            "unit": "ns",
            "range": "± 2763.9536536148908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7166585.714285715,
            "unit": "ns",
            "range": "± 64651.51383964835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20138100,
            "unit": "ns",
            "range": "± 444825.7349169947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49906335.294117644,
            "unit": "ns",
            "range": "± 1024548.1650105428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99022328.57142857,
            "unit": "ns",
            "range": "± 1237301.0133279685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197749540,
            "unit": "ns",
            "range": "± 3468191.4648498204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4531305.9375,
            "unit": "ns",
            "range": "± 20040.53396069991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1412582.4368990385,
            "unit": "ns",
            "range": "± 3753.7544109896025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059675.0390625,
            "unit": "ns",
            "range": "± 5570.158190910929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620299.0384615385,
            "unit": "ns",
            "range": "± 5327.299761340329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825038.7825520834,
            "unit": "ns",
            "range": "± 1740.4186680706139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766891.7271205357,
            "unit": "ns",
            "range": "± 2450.943106108689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3136822.950819672,
            "unit": "ns",
            "range": "± 141337.39938346425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3326305.714285714,
            "unit": "ns",
            "range": "± 106797.82147716735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3951548,
            "unit": "ns",
            "range": "± 103265.6530507603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3771815.9574468085,
            "unit": "ns",
            "range": "± 144230.13656712684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6043466.666666667,
            "unit": "ns",
            "range": "± 158549.73497782473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246868,
            "unit": "ns",
            "range": "± 5987.954575646011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233846.15384615384,
            "unit": "ns",
            "range": "± 8054.415139466453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209246.42857142858,
            "unit": "ns",
            "range": "± 9005.755014246357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3941680,
            "unit": "ns",
            "range": "± 73368.24147506098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3523407.6923076925,
            "unit": "ns",
            "range": "± 44524.27168669656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18635.05154639175,
            "unit": "ns",
            "range": "± 1544.4821972855364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79177.55102040817,
            "unit": "ns",
            "range": "± 5646.448215101568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69926.76056338029,
            "unit": "ns",
            "range": "± 3297.6596786413274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75194.79166666667,
            "unit": "ns",
            "range": "± 12720.926561682498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4550.549450549451,
            "unit": "ns",
            "range": "± 485.65502762846603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16908.602150537634,
            "unit": "ns",
            "range": "± 1231.794018104814"
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
          "id": "f689c19f050a3b3b0ab033782e4692d664fed703",
          "message": "fix: Fix GetAccount query",
          "timestamp": "2023-08-15T18:11:39+09:00",
          "tree_id": "2fdcdd235646cd6021855d5aa6b987618f7e0cd7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f689c19f050a3b3b0ab033782e4692d664fed703"
        },
        "date": 1692091624546,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373727.0833333333,
            "unit": "ns",
            "range": "± 113399.85935122315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571680.64516129,
            "unit": "ns",
            "range": "± 116020.56324056916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1874509.4736842106,
            "unit": "ns",
            "range": "± 119025.12972074088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4835059.677419355,
            "unit": "ns",
            "range": "± 207661.40588702614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48162.36559139785,
            "unit": "ns",
            "range": "± 3327.909448839128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7714960,
            "unit": "ns",
            "range": "± 110517.13377184035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21067153.333333332,
            "unit": "ns",
            "range": "± 152846.95831669882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51044080,
            "unit": "ns",
            "range": "± 806193.7299965277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102403268.75,
            "unit": "ns",
            "range": "± 1929088.6182232099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203199513.33333334,
            "unit": "ns",
            "range": "± 2337414.695117745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4487059.375,
            "unit": "ns",
            "range": "± 12409.214762733547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1458651.0026041667,
            "unit": "ns",
            "range": "± 7420.652058279987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082557.9427083333,
            "unit": "ns",
            "range": "± 3680.1528451604036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657496.6927083335,
            "unit": "ns",
            "range": "± 8789.991065614466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839112.98828125,
            "unit": "ns",
            "range": "± 3407.689725653544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774414.8893229166,
            "unit": "ns",
            "range": "± 2454.3700208600367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230992.98245614,
            "unit": "ns",
            "range": "± 139825.28365740826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3402484.090909091,
            "unit": "ns",
            "range": "± 127776.19231457068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4126005.263157895,
            "unit": "ns",
            "range": "± 141203.58112633633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3749176.470588235,
            "unit": "ns",
            "range": "± 119939.32319207005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5942308.333333333,
            "unit": "ns",
            "range": "± 152594.4209951353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249779.54545454544,
            "unit": "ns",
            "range": "± 9356.494561867597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242838.33333333334,
            "unit": "ns",
            "range": "± 10606.155738439003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225240.22988505746,
            "unit": "ns",
            "range": "± 11753.638326068516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4091307.8947368423,
            "unit": "ns",
            "range": "± 88634.09373993405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3770040,
            "unit": "ns",
            "range": "± 63689.949868764335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20837.755102040817,
            "unit": "ns",
            "range": "± 1882.7220536126067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84848.97959183673,
            "unit": "ns",
            "range": "± 6380.11561311334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71193.6170212766,
            "unit": "ns",
            "range": "± 2760.860314508091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79007.69230769231,
            "unit": "ns",
            "range": "± 11640.296204414033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4800,
            "unit": "ns",
            "range": "± 720.8119674874428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18010.714285714286,
            "unit": "ns",
            "range": "± 982.2543357167854"
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
          "id": "4c5371f1440b99029a717fc9034e8eec3dc9b75b",
          "message": "feat: Rename block related IBlockChainStates getters",
          "timestamp": "2023-08-15T20:24:57+09:00",
          "tree_id": "c982505b4622d858270949ea73bd453ace315c46",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4c5371f1440b99029a717fc9034e8eec3dc9b75b"
        },
        "date": 1692099651008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343712.7659574468,
            "unit": "ns",
            "range": "± 95823.83055349352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2491238.1578947366,
            "unit": "ns",
            "range": "± 126089.13457508836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1798383.3333333333,
            "unit": "ns",
            "range": "± 148310.48276587066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4799232.323232323,
            "unit": "ns",
            "range": "± 288830.90273223695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45565.591397849465,
            "unit": "ns",
            "range": "± 2775.3767712751896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7107930.769230769,
            "unit": "ns",
            "range": "± 18789.95230681301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20248746.666666668,
            "unit": "ns",
            "range": "± 208258.4550390166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49318007.14285714,
            "unit": "ns",
            "range": "± 608422.9101844889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98698786.66666667,
            "unit": "ns",
            "range": "± 1317358.2574155568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196475607.14285713,
            "unit": "ns",
            "range": "± 2985917.7765649534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4511366.614583333,
            "unit": "ns",
            "range": "± 25162.05648082845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437093.0989583333,
            "unit": "ns",
            "range": "± 4459.47974696807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065397.3958333333,
            "unit": "ns",
            "range": "± 4302.149671062677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644829.6354166665,
            "unit": "ns",
            "range": "± 12277.63273014903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832769.78515625,
            "unit": "ns",
            "range": "± 3572.2119595775907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762391.40625,
            "unit": "ns",
            "range": "± 3427.0663055734553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180963.829787234,
            "unit": "ns",
            "range": "± 122255.77504903382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3307978.378378378,
            "unit": "ns",
            "range": "± 105316.14610604887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4123205.8139534886,
            "unit": "ns",
            "range": "± 150560.88359123722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3736610.909090909,
            "unit": "ns",
            "range": "± 156408.91879553377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5946254.166666667,
            "unit": "ns",
            "range": "± 149369.6173610273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255392.3076923077,
            "unit": "ns",
            "range": "± 10695.067608661768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245875.67567567568,
            "unit": "ns",
            "range": "± 7370.9416481736425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214534.693877551,
            "unit": "ns",
            "range": "± 8443.428189535145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3970043.75,
            "unit": "ns",
            "range": "± 75118.13778975088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678400,
            "unit": "ns",
            "range": "± 75192.68581451257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20580.85106382979,
            "unit": "ns",
            "range": "± 1949.6499049247404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84852.22222222222,
            "unit": "ns",
            "range": "± 5680.406453604558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70458.62068965517,
            "unit": "ns",
            "range": "± 2066.487226703344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83809.1836734694,
            "unit": "ns",
            "range": "± 17227.81308398248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5001.041666666667,
            "unit": "ns",
            "range": "± 869.5425042323502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18727.36842105263,
            "unit": "ns",
            "range": "± 2206.9253718385003"
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
          "id": "0e568f4a49279f71e228476f184537336ed5cbc8",
          "message": "feat: Remove unnecessary APIs, Add proper property on IWorldState, IAccountState",
          "timestamp": "2023-08-16T00:42:40+09:00",
          "tree_id": "6ce054b44adbc1399a90373697d5d9828159d70a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0e568f4a49279f71e228476f184537336ed5cbc8"
        },
        "date": 1692115395018,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672614.8936170214,
            "unit": "ns",
            "range": "± 175607.8861220877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3087274.193548387,
            "unit": "ns",
            "range": "± 313938.55910353793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215313.6842105263,
            "unit": "ns",
            "range": "± 303583.8257859523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5759951.515151516,
            "unit": "ns",
            "range": "± 564090.3508763135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60885.71428571428,
            "unit": "ns",
            "range": "± 14454.680332167662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8170160.674157304,
            "unit": "ns",
            "range": "± 452746.41272058524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22638220,
            "unit": "ns",
            "range": "± 1886879.3090361364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61379849.333333336,
            "unit": "ns",
            "range": "± 3088766.3532494274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120700014.28571428,
            "unit": "ns",
            "range": "± 6141131.417887661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248290088.70967743,
            "unit": "ns",
            "range": "± 11227692.622307487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5205445.703125,
            "unit": "ns",
            "range": "± 116600.32461778444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1678535.8072916667,
            "unit": "ns",
            "range": "± 30130.84471328055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277843.1803385417,
            "unit": "ns",
            "range": "± 14769.733102560462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222115.1822916665,
            "unit": "ns",
            "range": "± 44858.904507647574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010419.0885416666,
            "unit": "ns",
            "range": "± 15958.546147973684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968002.0833333334,
            "unit": "ns",
            "range": "± 17212.87638843748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3478604.255319149,
            "unit": "ns",
            "range": "± 279109.486327573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3924673.9583333335,
            "unit": "ns",
            "range": "± 317118.11023813946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4982178.125,
            "unit": "ns",
            "range": "± 307135.5045383492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4314945.833333333,
            "unit": "ns",
            "range": "± 409854.2767777133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7442935.164835165,
            "unit": "ns",
            "range": "± 515946.7546545705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311910.5263157895,
            "unit": "ns",
            "range": "± 46738.6815828498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304963.91752577317,
            "unit": "ns",
            "range": "± 40036.41099457419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245034.375,
            "unit": "ns",
            "range": "± 32760.424867513546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4525431.182795699,
            "unit": "ns",
            "range": "± 320170.49465479923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4202113.157894737,
            "unit": "ns",
            "range": "± 325497.56905084057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27577.894736842107,
            "unit": "ns",
            "range": "± 10580.373027122301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97747.36842105263,
            "unit": "ns",
            "range": "± 22640.684722491224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107518.55670103093,
            "unit": "ns",
            "range": "± 24954.263705063626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124444.89795918367,
            "unit": "ns",
            "range": "± 30877.012843771477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7760.112359550561,
            "unit": "ns",
            "range": "± 1556.076428350559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27140.40404040404,
            "unit": "ns",
            "range": "± 9970.670450016923"
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
          "id": "2d13b2e7739788db747fccb1157863b1f3ae2899",
          "message": "wip: fix test from removing NullChainStates",
          "timestamp": "2023-08-16T08:49:19+09:00",
          "tree_id": "0fce62ef3dd9534b98b2ef9a67fc2ed95b48bb00",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2d13b2e7739788db747fccb1157863b1f3ae2899"
        },
        "date": 1692144373199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466355.2083333333,
            "unit": "ns",
            "range": "± 82079.62997478878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2869040.8163265307,
            "unit": "ns",
            "range": "± 262424.30222699785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1872713.4020618557,
            "unit": "ns",
            "range": "± 235532.8142517452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5137423,
            "unit": "ns",
            "range": "± 515299.5235400534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45410.46511627907,
            "unit": "ns",
            "range": "± 4910.2301148848155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7548466,
            "unit": "ns",
            "range": "± 303426.7908274362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18926061.702127658,
            "unit": "ns",
            "range": "± 733209.2499099842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48390886.11111111,
            "unit": "ns",
            "range": "± 1606489.3431957732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98209642.85714285,
            "unit": "ns",
            "range": "± 1476404.804670029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188996120.83333334,
            "unit": "ns",
            "range": "± 4847966.877665153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4357110.216346154,
            "unit": "ns",
            "range": "± 4725.706646661055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1405433.384486607,
            "unit": "ns",
            "range": "± 1299.438189179721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 993814.3489583334,
            "unit": "ns",
            "range": "± 1359.6683036528837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523384.0364583335,
            "unit": "ns",
            "range": "± 3027.3977056923745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827754.4080369016,
            "unit": "ns",
            "range": "± 54790.78894712411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738046.6871995192,
            "unit": "ns",
            "range": "± 1022.6696121058119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3057507.3170731706,
            "unit": "ns",
            "range": "± 109845.24202313887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3138371.052631579,
            "unit": "ns",
            "range": "± 105991.09322063465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3944893.3333333335,
            "unit": "ns",
            "range": "± 69819.78297902462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3492805.714285714,
            "unit": "ns",
            "range": "± 168717.56425640112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5862519.565217392,
            "unit": "ns",
            "range": "± 138096.7066778094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263147.87234042556,
            "unit": "ns",
            "range": "± 22173.226753715837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239868.42105263157,
            "unit": "ns",
            "range": "± 10418.718695123709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214813.63636363635,
            "unit": "ns",
            "range": "± 5245.251408432425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572381.818181818,
            "unit": "ns",
            "range": "± 142121.58407184642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4116993.3333333335,
            "unit": "ns",
            "range": "± 123136.79436479083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20463.917525773195,
            "unit": "ns",
            "range": "± 6085.607775163229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78155.38461538461,
            "unit": "ns",
            "range": "± 3379.905267220461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63306.666666666664,
            "unit": "ns",
            "range": "± 1845.7655795665505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71623.4693877551,
            "unit": "ns",
            "range": "± 12816.329797907978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3867.021276595745,
            "unit": "ns",
            "range": "± 449.7043946340657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16635.353535353537,
            "unit": "ns",
            "range": "± 2081.1747629993824"
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
          "id": "81ec0a4ca52f5a64a9bf48243f251743cb69a90a",
          "message": "test: Fix test from removing NullChainStates",
          "timestamp": "2023-08-17T18:16:20+09:00",
          "tree_id": "4341a7076278eab80dcfb26105a1ad35a391e9ba",
          "url": "https://github.com/OnedgeLee/libplanet/commit/81ec0a4ca52f5a64a9bf48243f251743cb69a90a"
        },
        "date": 1692264986055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535034.7368421052,
            "unit": "ns",
            "range": "± 106353.19596116243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3137128.947368421,
            "unit": "ns",
            "range": "± 207022.62128155085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2118014.4444444445,
            "unit": "ns",
            "range": "± 133477.49762893893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5731078.865979382,
            "unit": "ns",
            "range": "± 532863.6068761644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52890.80459770115,
            "unit": "ns",
            "range": "± 2895.932680377937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8506630.303030303,
            "unit": "ns",
            "range": "± 378460.50661541824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24023171.05263158,
            "unit": "ns",
            "range": "± 780079.5007675698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60654948.421052635,
            "unit": "ns",
            "range": "± 3457247.1830727556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122444528,
            "unit": "ns",
            "range": "± 3192735.755393275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250336920.68965518,
            "unit": "ns",
            "range": "± 7286642.630397629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5397906.510416667,
            "unit": "ns",
            "range": "± 90811.1023453357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1676834.946986607,
            "unit": "ns",
            "range": "± 18079.91578163392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280497.0145089286,
            "unit": "ns",
            "range": "± 20321.945748997598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3231119.1145833335,
            "unit": "ns",
            "range": "± 56672.44913873422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1033177.1809895834,
            "unit": "ns",
            "range": "± 16423.4423028219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 910818.8585069445,
            "unit": "ns",
            "range": "± 19084.770827713462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3837884.0206185565,
            "unit": "ns",
            "range": "± 297926.1572683874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3946896.8085106383,
            "unit": "ns",
            "range": "± 227150.2872559433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4763248.863636363,
            "unit": "ns",
            "range": "± 261829.50405578077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4376170.408163265,
            "unit": "ns",
            "range": "± 168756.3529416397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7127467.741935484,
            "unit": "ns",
            "range": "± 320906.9584654388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289980.30303030304,
            "unit": "ns",
            "range": "± 13598.792024372771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282343.3333333333,
            "unit": "ns",
            "range": "± 17714.81986068809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255318.27956989247,
            "unit": "ns",
            "range": "± 15922.044782358387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4902180,
            "unit": "ns",
            "range": "± 79315.4569695322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4431572.222222222,
            "unit": "ns",
            "range": "± 146887.4498404643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24930,
            "unit": "ns",
            "range": "± 2928.8949335739057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100076.59574468085,
            "unit": "ns",
            "range": "± 9488.560464279224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81753.125,
            "unit": "ns",
            "range": "± 7522.023147853382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94247.42268041238,
            "unit": "ns",
            "range": "± 18256.87138211885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5444.897959183673,
            "unit": "ns",
            "range": "± 947.1740332558439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21750,
            "unit": "ns",
            "range": "± 2362.4582094100188"
          }
        ]
      }
    ]
  }
}