window.BENCHMARK_DATA = {
  "lastUpdate": 1702277515071,
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
          "id": "e6cca178282eed916973331c457e46c790195670",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:02:29+09:00",
          "tree_id": "6b20c7740e828ee6028a2080b4ab98ddd351c7ea",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6cca178282eed916973331c457e46c790195670"
        },
        "date": 1702261318782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8474100.257575758,
            "unit": "ns",
            "range": "± 383868.77595570683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21495495.136363637,
            "unit": "ns",
            "range": "± 520952.73069090815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50676748.15,
            "unit": "ns",
            "range": "± 1105643.3360476403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104704179.81818181,
            "unit": "ns",
            "range": "± 3913399.8653752957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237678813.02272728,
            "unit": "ns",
            "range": "± 13020775.909290962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70186.07291666667,
            "unit": "ns",
            "range": "± 12827.349218098345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307944.57608695654,
            "unit": "ns",
            "range": "± 23045.128805313452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322591.8369565217,
            "unit": "ns",
            "range": "± 32110.84235029739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330322.876344086,
            "unit": "ns",
            "range": "± 33399.40587889771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4465806.54,
            "unit": "ns",
            "range": "± 352757.0050966186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3659991.3095238097,
            "unit": "ns",
            "range": "± 131278.4962979677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22462.625,
            "unit": "ns",
            "range": "± 3795.1402827569627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108967.44791666667,
            "unit": "ns",
            "range": "± 15314.262595007234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106405.40217391304,
            "unit": "ns",
            "range": "± 12662.186402230476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109001.35789473684,
            "unit": "ns",
            "range": "± 17259.462843220415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7615.80412371134,
            "unit": "ns",
            "range": "± 1613.3383004346872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23756.284090909092,
            "unit": "ns",
            "range": "± 2615.118350539837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487839.1717171718,
            "unit": "ns",
            "range": "± 157092.6096039024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2797291.3333333335,
            "unit": "ns",
            "range": "± 110033.90178124956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2449047.9823529413,
            "unit": "ns",
            "range": "± 132096.37231182063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28181386.173469387,
            "unit": "ns",
            "range": "± 3709406.73496368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3338189.5368421054,
            "unit": "ns",
            "range": "± 223212.67074115714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3578190.3181818184,
            "unit": "ns",
            "range": "± 313915.41380894976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4642378.010416667,
            "unit": "ns",
            "range": "± 300077.916195672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5004156.060606061,
            "unit": "ns",
            "range": "± 556054.8879801055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31454493.5,
            "unit": "ns",
            "range": "± 4068779.0530971615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6554419.901785715,
            "unit": "ns",
            "range": "± 258266.98154380594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857315.8226841518,
            "unit": "ns",
            "range": "± 20596.007112228945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132874.7216145834,
            "unit": "ns",
            "range": "± 6730.769226045945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3162470.7610294116,
            "unit": "ns",
            "range": "± 60705.08012433197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 897618.3968098959,
            "unit": "ns",
            "range": "± 8513.496885499153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822227.6008463542,
            "unit": "ns",
            "range": "± 8770.429298679377"
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
          "id": "877ad2c5d904f65958e433697945e48f44b288ef",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:35:05+09:00",
          "tree_id": "1fd77fd5532320aa9c70ccb82fefb0641c31ca3a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/877ad2c5d904f65958e433697945e48f44b288ef"
        },
        "date": 1702263067262,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8620003.42857143,
            "unit": "ns",
            "range": "± 727634.2059967149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20613733,
            "unit": "ns",
            "range": "± 1828726.3901633644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52614285.61111111,
            "unit": "ns",
            "range": "± 3691765.7197009097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100481823.73655914,
            "unit": "ns",
            "range": "± 7833377.040954052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205257038.1111111,
            "unit": "ns",
            "range": "± 7733985.453655087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47094.11956521739,
            "unit": "ns",
            "range": "± 8687.755831119533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233309.03,
            "unit": "ns",
            "range": "± 19097.69651531331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242710.32584269662,
            "unit": "ns",
            "range": "± 18438.901629173775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224996.61855670103,
            "unit": "ns",
            "range": "± 18489.282460524766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4111101.551020408,
            "unit": "ns",
            "range": "± 151887.86909977117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3672679.3076923075,
            "unit": "ns",
            "range": "± 51048.04045436777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18207.74226804124,
            "unit": "ns",
            "range": "± 3869.9023950825476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74694.89795918367,
            "unit": "ns",
            "range": "± 12075.737083639728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84371.61855670103,
            "unit": "ns",
            "range": "± 12934.340995520492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75188.54494382022,
            "unit": "ns",
            "range": "± 11659.385042365611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6207.260416666667,
            "unit": "ns",
            "range": "± 1840.6005755833394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16089.166666666666,
            "unit": "ns",
            "range": "± 2466.1483626044915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1131193.9101123596,
            "unit": "ns",
            "range": "± 88870.28931405903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2733405.602272727,
            "unit": "ns",
            "range": "± 477283.23794849386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722583.142857143,
            "unit": "ns",
            "range": "± 108135.94427001715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19512710.135416668,
            "unit": "ns",
            "range": "± 2658782.4230079767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2953318.581395349,
            "unit": "ns",
            "range": "± 108880.43679612897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283214.4368421054,
            "unit": "ns",
            "range": "± 230727.06459511162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3782364.2,
            "unit": "ns",
            "range": "± 97136.66324179557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4430978.965909091,
            "unit": "ns",
            "range": "± 1221315.6536337328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23455451.84090909,
            "unit": "ns",
            "range": "± 3869092.73058042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4499441.268229167,
            "unit": "ns",
            "range": "± 39939.15397277943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1395917.9094401042,
            "unit": "ns",
            "range": "± 11923.134117506459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 895419.6072716346,
            "unit": "ns",
            "range": "± 3651.162903699846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946599.2518028845,
            "unit": "ns",
            "range": "± 48679.24305233513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615336.7451171875,
            "unit": "ns",
            "range": "± 5485.665634275944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554984.8383091518,
            "unit": "ns",
            "range": "± 7431.421433977449"
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
          "id": "5ff28f3a8565242adcacbd8c0e13bf9ae8b29a1a",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:48:51+09:00",
          "tree_id": "182fa8f84cdf2a96ea69c49606901ce7e259db39",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5ff28f3a8565242adcacbd8c0e13bf9ae8b29a1a"
        },
        "date": 1702263623127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634637.428571428,
            "unit": "ns",
            "range": "± 31714.973552819556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19247161.76470588,
            "unit": "ns",
            "range": "± 370427.3099947427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47890694.21428572,
            "unit": "ns",
            "range": "± 832482.3545982294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94304243.75,
            "unit": "ns",
            "range": "± 458848.1902555027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193471169,
            "unit": "ns",
            "range": "± 1960770.2654400046"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36043.683908045976,
            "unit": "ns",
            "range": "± 3847.777049362204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222803.2258064516,
            "unit": "ns",
            "range": "± 13650.12546775354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215381.71666666667,
            "unit": "ns",
            "range": "± 9438.387594074991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193727.9076923077,
            "unit": "ns",
            "range": "± 8191.232333879693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3933349.6428571427,
            "unit": "ns",
            "range": "± 50276.23781876276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525813.0434782607,
            "unit": "ns",
            "range": "± 135604.903495241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12725.08510638298,
            "unit": "ns",
            "range": "± 1148.7267908388176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60230.177083333336,
            "unit": "ns",
            "range": "± 5112.887375610753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58483.55319148936,
            "unit": "ns",
            "range": "± 6977.881567822687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64877.34210526316,
            "unit": "ns",
            "range": "± 10981.036189447377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3490.8444444444444,
            "unit": "ns",
            "range": "± 312.7948644335134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12504.183908045978,
            "unit": "ns",
            "range": "± 1358.319297743266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1107366.948979592,
            "unit": "ns",
            "range": "± 97639.9221812168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2301695.5888888887,
            "unit": "ns",
            "range": "± 127073.7037487481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1776707.6914893617,
            "unit": "ns",
            "range": "± 96868.34573050728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18915632.539325844,
            "unit": "ns",
            "range": "± 2078115.9968183269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2951407.25974026,
            "unit": "ns",
            "range": "± 148227.732186553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3040665.412087912,
            "unit": "ns",
            "range": "± 170305.90618183033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3632072.190909091,
            "unit": "ns",
            "range": "± 146117.2479809068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3700021.2,
            "unit": "ns",
            "range": "± 165054.70736916905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22632434.311827958,
            "unit": "ns",
            "range": "± 2814496.531615337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4420571.873325893,
            "unit": "ns",
            "range": "± 56917.390574049066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1357535.0756293403,
            "unit": "ns",
            "range": "± 23511.725986765363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888774.1381460336,
            "unit": "ns",
            "range": "± 8099.2882038487505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005204.2236979166,
            "unit": "ns",
            "range": "± 14293.247053539462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621227.8401692709,
            "unit": "ns",
            "range": "± 4460.294474127052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565959.3764648438,
            "unit": "ns",
            "range": "± 3231.762453685058"
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
          "id": "4048596eab12f95f6088be61103b97977f68ad2e",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T12:48:29+09:00",
          "tree_id": "2a0a44a1e8aa2d537fb4a3284472cc8b277ca6d5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4048596eab12f95f6088be61103b97977f68ad2e"
        },
        "date": 1702267432758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8007283.592307692,
            "unit": "ns",
            "range": "± 373984.15089219203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18837078.6,
            "unit": "ns",
            "range": "± 432930.48724786483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47530904.26190476,
            "unit": "ns",
            "range": "± 1113229.5750146015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94624662.96153846,
            "unit": "ns",
            "range": "± 1251526.8522766244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193173881.06666666,
            "unit": "ns",
            "range": "± 1909815.357964237"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36213.62222222222,
            "unit": "ns",
            "range": "± 3919.20272670141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216328.96153846153,
            "unit": "ns",
            "range": "± 8937.376744712235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212612.1447368421,
            "unit": "ns",
            "range": "± 10226.540823698497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199882.1157894737,
            "unit": "ns",
            "range": "± 16829.724407588685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3920836.619047619,
            "unit": "ns",
            "range": "± 92707.56512090919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3411590.0263157897,
            "unit": "ns",
            "range": "± 69658.8014311093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13266.198924731183,
            "unit": "ns",
            "range": "± 1637.0228663308694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62075.65217391304,
            "unit": "ns",
            "range": "± 6079.952441497742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61690.99494949495,
            "unit": "ns",
            "range": "± 11301.120624742232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64933.436842105264,
            "unit": "ns",
            "range": "± 11850.743352939731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3779.2604166666665,
            "unit": "ns",
            "range": "± 792.4970030797283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12829.804347826086,
            "unit": "ns",
            "range": "± 1270.4934166453327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1134621.5,
            "unit": "ns",
            "range": "± 112252.93210206632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2434303.698924731,
            "unit": "ns",
            "range": "± 195820.80739331365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855402.9285714286,
            "unit": "ns",
            "range": "± 179841.3514515343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21643430.536082473,
            "unit": "ns",
            "range": "± 5035636.948550027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2909092,
            "unit": "ns",
            "range": "± 87027.30871359308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2977162.466666667,
            "unit": "ns",
            "range": "± 124575.03864065585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3590221.5675675673,
            "unit": "ns",
            "range": "± 119270.0204711842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3663853.5555555555,
            "unit": "ns",
            "range": "± 153606.02538787053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21872109.849462364,
            "unit": "ns",
            "range": "± 2855440.9131860076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4363148.6625,
            "unit": "ns",
            "range": "± 33041.75682742921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396019.51875,
            "unit": "ns",
            "range": "± 6634.75092126132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 885785.0150669643,
            "unit": "ns",
            "range": "± 2691.2550085913576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982428.5320870536,
            "unit": "ns",
            "range": "± 8652.50038848262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622755.8318058894,
            "unit": "ns",
            "range": "± 1380.7831060912506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558961.7171456473,
            "unit": "ns",
            "range": "± 1935.435528150901"
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
          "id": "4e15970ae2da214928f497d10b45ad0aadd42c94",
          "message": "Revive IWorldDelta",
          "timestamp": "2023-12-11T15:27:52+09:00",
          "tree_id": "44352e0952e51643da8174ef84c49b0f62021fcd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4e15970ae2da214928f497d10b45ad0aadd42c94"
        },
        "date": 1702277485422,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7854060,
            "unit": "ns",
            "range": "± 143081.3564270342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19058923.25,
            "unit": "ns",
            "range": "± 373197.21625230095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47392038.63333333,
            "unit": "ns",
            "range": "± 1387670.2390161555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98510513.50526316,
            "unit": "ns",
            "range": "± 5613181.360081949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207638853.76,
            "unit": "ns",
            "range": "± 16933747.80867297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46864.34782608696,
            "unit": "ns",
            "range": "± 8116.94764185064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270997.71276595746,
            "unit": "ns",
            "range": "± 27136.38762730994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258946.84848484848,
            "unit": "ns",
            "range": "± 24162.36105648096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267315.5989010989,
            "unit": "ns",
            "range": "± 20164.907731587642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5246806.444444444,
            "unit": "ns",
            "range": "± 146763.90107304824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4336485.540816327,
            "unit": "ns",
            "range": "± 171152.9934896163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22067.66129032258,
            "unit": "ns",
            "range": "± 4136.296884817969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101189.96376811594,
            "unit": "ns",
            "range": "± 4883.652898670969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94145.94680851063,
            "unit": "ns",
            "range": "± 6549.408469336408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97401.01578947369,
            "unit": "ns",
            "range": "± 17225.919839481357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7165.505263157895,
            "unit": "ns",
            "range": "± 1280.1707821048653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30748.343434343435,
            "unit": "ns",
            "range": "± 6698.270817313511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1164543.587628866,
            "unit": "ns",
            "range": "± 102564.65704767575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600790.101010101,
            "unit": "ns",
            "range": "± 285640.7796540925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2353958.484210526,
            "unit": "ns",
            "range": "± 256982.51703887444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 24413202.29032258,
            "unit": "ns",
            "range": "± 3184461.250488209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3095797.3666666667,
            "unit": "ns",
            "range": "± 53490.317425368376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3302945.4081632653,
            "unit": "ns",
            "range": "± 244692.53503958744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3756400.3865979384,
            "unit": "ns",
            "range": "± 295883.09502149234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3665453.8076923075,
            "unit": "ns",
            "range": "± 188620.5706558724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23469887.021276597,
            "unit": "ns",
            "range": "± 4293274.377914836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6016402.568380376,
            "unit": "ns",
            "range": "± 558793.1104308082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1710949.1439670138,
            "unit": "ns",
            "range": "± 102768.47121891999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1124417.6188753857,
            "unit": "ns",
            "range": "± 58770.896843846014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2499650.311233108,
            "unit": "ns",
            "range": "± 83734.55739791256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764622.6265914352,
            "unit": "ns",
            "range": "± 18933.225706584068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 684011.5888671875,
            "unit": "ns",
            "range": "± 12496.076226373767"
          }
        ]
      }
    ]
  }
}