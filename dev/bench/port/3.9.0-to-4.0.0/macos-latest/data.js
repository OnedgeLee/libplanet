window.BENCHMARK_DATA = {
  "lastUpdate": 1702025854404,
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
          "id": "c440d85a5ce59c88ba6d826ce8d5b8de04a66844",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:33:28+09:00",
          "tree_id": "89f49ba453970fb5696b15c4ec9a17c3c6119325",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c440d85a5ce59c88ba6d826ce8d5b8de04a66844"
        },
        "date": 1702025576741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8857695.823529411,
            "unit": "ns",
            "range": "± 421037.1822047769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21736841.439393938,
            "unit": "ns",
            "range": "± 622027.4008978594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50434075.55555555,
            "unit": "ns",
            "range": "± 1068529.2259741738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106398788.36666666,
            "unit": "ns",
            "range": "± 1959871.5218952808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221804283.54166666,
            "unit": "ns",
            "range": "± 10916909.071507944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48748.163043478264,
            "unit": "ns",
            "range": "± 11325.296464379717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248237.51546391752,
            "unit": "ns",
            "range": "± 39382.039317359246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266503.51136363635,
            "unit": "ns",
            "range": "± 44191.49159122535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257461.32558139536,
            "unit": "ns",
            "range": "± 41438.285731190765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4692814.971910113,
            "unit": "ns",
            "range": "± 402265.8103042432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4462312.395833333,
            "unit": "ns",
            "range": "± 1033322.5851268067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19581.03,
            "unit": "ns",
            "range": "± 7212.955131315018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89523.4387755102,
            "unit": "ns",
            "range": "± 17378.8381647041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87251.57216494845,
            "unit": "ns",
            "range": "± 17856.669079930743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96143.1052631579,
            "unit": "ns",
            "range": "± 13586.105544310416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4967.550505050505,
            "unit": "ns",
            "range": "± 1891.301778085813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17475.255319148935,
            "unit": "ns",
            "range": "± 5000.279651719642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1150070,
            "unit": "ns",
            "range": "± 109759.96221909462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495260.606741573,
            "unit": "ns",
            "range": "± 144503.18495661247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1986518.2967032967,
            "unit": "ns",
            "range": "± 153826.654242906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15941522.38,
            "unit": "ns",
            "range": "± 4995233.466528929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3274293,
            "unit": "ns",
            "range": "± 114875.69738741046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585022.712765957,
            "unit": "ns",
            "range": "± 373371.98025626736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4015858.2536231885,
            "unit": "ns",
            "range": "± 173585.784619374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4282301.7,
            "unit": "ns",
            "range": "± 110140.31989542552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19878985.335164834,
            "unit": "ns",
            "range": "± 2795369.5501806326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4901655.464409722,
            "unit": "ns",
            "range": "± 456233.7747247559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523954.5673519736,
            "unit": "ns",
            "range": "± 101089.03255151057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 957492.3025607639,
            "unit": "ns",
            "range": "± 36115.90061570564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2236698.0677688955,
            "unit": "ns",
            "range": "± 81217.42943359437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640013.9915597098,
            "unit": "ns",
            "range": "± 7622.5224395245305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558048.9801199777,
            "unit": "ns",
            "range": "± 3814.5736341980346"
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
          "id": "8ca63e083940b5c631d1b663ea3b013cbdbb5551",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:38:02+09:00",
          "tree_id": "a11bd8115244fd2a1cfc1570ca010fd21bad81ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ca63e083940b5c631d1b663ea3b013cbdbb5551"
        },
        "date": 1702025830286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8703639.11764706,
            "unit": "ns",
            "range": "± 168285.50618141567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22083975,
            "unit": "ns",
            "range": "± 671591.6445715606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53759764.457446806,
            "unit": "ns",
            "range": "± 5773807.01790382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114694772.0909091,
            "unit": "ns",
            "range": "± 5297261.506979254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224938313.11764705,
            "unit": "ns",
            "range": "± 7179829.383701466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47735.01052631579,
            "unit": "ns",
            "range": "± 8842.002653551961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267705.76136363635,
            "unit": "ns",
            "range": "± 15450.32924917509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244898.9111111111,
            "unit": "ns",
            "range": "± 20912.496791752143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242880.45698924732,
            "unit": "ns",
            "range": "± 17258.735926502228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4487042.0625,
            "unit": "ns",
            "range": "± 85848.24407869874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4133246.619047619,
            "unit": "ns",
            "range": "± 148704.67799716853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16694.622448979593,
            "unit": "ns",
            "range": "± 2805.4219945180976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64233.80434782609,
            "unit": "ns",
            "range": "± 8358.239777673274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58017.217391304344,
            "unit": "ns",
            "range": "± 6538.0739641742275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60289.17894736842,
            "unit": "ns",
            "range": "± 10475.485935998231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3274.3373493975905,
            "unit": "ns",
            "range": "± 331.2018865972408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12425.983870967742,
            "unit": "ns",
            "range": "± 1034.6007590927466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328145.3469387756,
            "unit": "ns",
            "range": "± 126938.5715064982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436275.695652174,
            "unit": "ns",
            "range": "± 209427.5811371852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2040001.8125,
            "unit": "ns",
            "range": "± 243641.47933678515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15216770.31,
            "unit": "ns",
            "range": "± 5539080.482217693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3334245.948051948,
            "unit": "ns",
            "range": "± 163445.70707423694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3427082.1951219514,
            "unit": "ns",
            "range": "± 101876.98400969169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4064116.3636363638,
            "unit": "ns",
            "range": "± 152068.5245091052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4237745.010416667,
            "unit": "ns",
            "range": "± 313201.676955062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19884847.715789475,
            "unit": "ns",
            "range": "± 2456838.1443191078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4313157.093489584,
            "unit": "ns",
            "range": "± 79216.11868362353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1351364.3800603694,
            "unit": "ns",
            "range": "± 32149.64382142675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 884107.6626302083,
            "unit": "ns",
            "range": "± 9456.195383857934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2035160.5778320313,
            "unit": "ns",
            "range": "± 121258.43241849243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621537.0212890625,
            "unit": "ns",
            "range": "± 6348.292671240431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563945.9072265625,
            "unit": "ns",
            "range": "± 8593.63632994719"
          }
        ]
      }
    ]
  }
}