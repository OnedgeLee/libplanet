window.BENCHMARK_DATA = {
  "lastUpdate": 1691660391226,
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
      }
    ]
  }
}