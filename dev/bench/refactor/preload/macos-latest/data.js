window.BENCHMARK_DATA = {
  "lastUpdate": 1683858798608,
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
          "id": "5b59f24820224f9e9cf31723c5d9a81712b9271d",
          "message": "refactor: replace preload logic with blocksync",
          "timestamp": "2023-05-12T11:13:36+09:00",
          "tree_id": "bcf324b7894514c9753fb06dd952fe13075db52f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5b59f24820224f9e9cf31723c5d9a81712b9271d"
        },
        "date": 1683858772076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8127650.5,
            "unit": "ns",
            "range": "± 214725.57152905661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19595618.192307692,
            "unit": "ns",
            "range": "± 208212.21816109665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49214713.77272727,
            "unit": "ns",
            "range": "± 1159368.370257535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103184123.53703703,
            "unit": "ns",
            "range": "± 2635390.9962145523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203416784.6,
            "unit": "ns",
            "range": "± 3741761.2535159127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60433.75268817204,
            "unit": "ns",
            "range": "± 9911.02706876221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326933.75531914894,
            "unit": "ns",
            "range": "± 36209.73960819452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309608.5,
            "unit": "ns",
            "range": "± 22135.98463450701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285698.7978723404,
            "unit": "ns",
            "range": "± 20590.332194064544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151105.346153846,
            "unit": "ns",
            "range": "± 108324.26005764076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614628.9615384615,
            "unit": "ns",
            "range": "± 38562.43141671996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19784.573684210525,
            "unit": "ns",
            "range": "± 4036.4292473646756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90585.54736842106,
            "unit": "ns",
            "range": "± 11427.964701023482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105175.83333333333,
            "unit": "ns",
            "range": "± 13446.048827319744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111330.05263157895,
            "unit": "ns",
            "range": "± 12090.277126127514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7955.969387755102,
            "unit": "ns",
            "range": "± 1423.5571349893207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22638.01052631579,
            "unit": "ns",
            "range": "± 4156.65532096839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531754.663265306,
            "unit": "ns",
            "range": "± 152851.2551162646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962003.603896104,
            "unit": "ns",
            "range": "± 145684.9959280011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2535666.2263157894,
            "unit": "ns",
            "range": "± 243843.5298839498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7204789.581632653,
            "unit": "ns",
            "range": "± 770965.1762106537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3338222.0425531915,
            "unit": "ns",
            "range": "± 272334.228561745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3493678.9680851065,
            "unit": "ns",
            "range": "± 311729.1502969081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4463573.147058823,
            "unit": "ns",
            "range": "± 137091.84093290038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4400429.088888889,
            "unit": "ns",
            "range": "± 162592.37451967565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7714759.683333334,
            "unit": "ns",
            "range": "± 308445.1546524261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7515091.545973558,
            "unit": "ns",
            "range": "± 110093.28417891715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2340629.025948661,
            "unit": "ns",
            "range": "± 106633.4571576963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370073.0250558036,
            "unit": "ns",
            "range": "± 44825.05279157823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664065.1377949617,
            "unit": "ns",
            "range": "± 159101.04514125103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898157.4135742188,
            "unit": "ns",
            "range": "± 13353.269398950628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810417.3102152123,
            "unit": "ns",
            "range": "± 33819.201215811365"
          }
        ]
      }
    ]
  }
}