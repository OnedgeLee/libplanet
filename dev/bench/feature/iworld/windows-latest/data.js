window.BENCHMARK_DATA = {
  "lastUpdate": 1691720887809,
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
      }
    ]
  }
}