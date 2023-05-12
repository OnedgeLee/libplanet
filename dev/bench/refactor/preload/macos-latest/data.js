window.BENCHMARK_DATA = {
  "lastUpdate": 1683906411949,
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
          "id": "d5885ccd282f4d5d2dc0ba6c2bc1f07c1f923e79",
          "message": "refactor: Inject progress to preload",
          "timestamp": "2023-05-12T12:24:39+09:00",
          "tree_id": "f98bdf26fb70ba24ec41ccfb0fcce56457451a50",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d5885ccd282f4d5d2dc0ba6c2bc1f07c1f923e79"
        },
        "date": 1683862794209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7719894.884615385,
            "unit": "ns",
            "range": "± 210393.74268268092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18919432.318181816,
            "unit": "ns",
            "range": "± 366530.1497758776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50019211.430232555,
            "unit": "ns",
            "range": "± 1781942.8893276707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93799849.13043478,
            "unit": "ns",
            "range": "± 2301643.327939633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190929881.5526316,
            "unit": "ns",
            "range": "± 4216549.414077312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57705.063829787236,
            "unit": "ns",
            "range": "± 7043.581433847187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310367.0588235294,
            "unit": "ns",
            "range": "± 15938.209372711959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297188.47777777776,
            "unit": "ns",
            "range": "± 16556.50442821561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265973.63636363635,
            "unit": "ns",
            "range": "± 13803.29074972418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3979852.9523809524,
            "unit": "ns",
            "range": "± 92124.57545979584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3562915.84,
            "unit": "ns",
            "range": "± 91232.8536706487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17644.325581395347,
            "unit": "ns",
            "range": "± 1954.684824553026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84420.60416666667,
            "unit": "ns",
            "range": "± 8264.563773604901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82550.53846153847,
            "unit": "ns",
            "range": "± 7402.77952499779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100844.81318681319,
            "unit": "ns",
            "range": "± 13545.694097233412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5279.555555555556,
            "unit": "ns",
            "range": "± 594.6016721842401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17272.764367816093,
            "unit": "ns",
            "range": "± 1639.192430633395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569699.641304348,
            "unit": "ns",
            "range": "± 184581.51109067848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877534.2705882355,
            "unit": "ns",
            "range": "± 154610.87485349027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2414784.9340659343,
            "unit": "ns",
            "range": "± 187879.12196355296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6525440.815217392,
            "unit": "ns",
            "range": "± 483963.37516567996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3106923.3035714286,
            "unit": "ns",
            "range": "± 132835.55968871914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3202502.761904762,
            "unit": "ns",
            "range": "± 140476.96369566105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4192453.9571428574,
            "unit": "ns",
            "range": "± 137698.0774120007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4194672.6,
            "unit": "ns",
            "range": "± 263190.2656379657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7521686.328571429,
            "unit": "ns",
            "range": "± 343331.6356306404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5985837.460416666,
            "unit": "ns",
            "range": "± 70656.69078472505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869144.373828125,
            "unit": "ns",
            "range": "± 16262.669506877528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1240701.965625,
            "unit": "ns",
            "range": "± 7525.88179264071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2416032.650260417,
            "unit": "ns",
            "range": "± 19016.734489930186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825102.0514787947,
            "unit": "ns",
            "range": "± 4506.304912215608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761740.7128255208,
            "unit": "ns",
            "range": "± 7583.504438670608"
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
          "id": "bdbd850f161b117bf6c2d80f9627ddce58dd9bb2",
          "message": "refactor: Move tables creation to Swarm<T> constructor",
          "timestamp": "2023-05-12T13:31:49+09:00",
          "tree_id": "d572eb8c5e9aad7405974b9c41a8c4311dffdf39",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bdbd850f161b117bf6c2d80f9627ddce58dd9bb2"
        },
        "date": 1683867016120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324535.430232558,
            "unit": "ns",
            "range": "± 451895.7126840554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20761716.694915254,
            "unit": "ns",
            "range": "± 861616.1023153196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51543015.43902439,
            "unit": "ns",
            "range": "± 1763780.269841797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101753457.64285715,
            "unit": "ns",
            "range": "± 1330528.1024643276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211872338.875,
            "unit": "ns",
            "range": "± 6463238.96127138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70956.42105263157,
            "unit": "ns",
            "range": "± 10288.206204481667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325774.65555555554,
            "unit": "ns",
            "range": "± 27945.136015503103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319404.1382978723,
            "unit": "ns",
            "range": "± 27406.696582526863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284838.98387096776,
            "unit": "ns",
            "range": "± 22616.5269070963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4017460.9444444445,
            "unit": "ns",
            "range": "± 81428.62190429129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828452.1153846155,
            "unit": "ns",
            "range": "± 59598.37188707208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18766.67391304348,
            "unit": "ns",
            "range": "± 2732.365165565048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99622.97916666667,
            "unit": "ns",
            "range": "± 13617.426799184212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104844.87634408602,
            "unit": "ns",
            "range": "± 12808.59925216172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115445.56185567011,
            "unit": "ns",
            "range": "± 17095.963610975567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6483.021978021978,
            "unit": "ns",
            "range": "± 929.8981184101356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17026.6,
            "unit": "ns",
            "range": "± 1776.6829720425835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1600108.8510638298,
            "unit": "ns",
            "range": "± 186720.1216519513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3130308.8229166665,
            "unit": "ns",
            "range": "± 225004.46437192004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2640447.26,
            "unit": "ns",
            "range": "± 350462.4289731785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7054089.329545454,
            "unit": "ns",
            "range": "± 539762.5709361823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3390868.5104166665,
            "unit": "ns",
            "range": "± 364658.8500938347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3443476.1333333333,
            "unit": "ns",
            "range": "± 109437.32081499271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4429448.84057971,
            "unit": "ns",
            "range": "± 209472.3173644855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4707529.274725275,
            "unit": "ns",
            "range": "± 361076.08637352835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8321241.051282051,
            "unit": "ns",
            "range": "± 428038.8924874928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6468889.247209822,
            "unit": "ns",
            "range": "± 71758.36647298587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035919.8823242188,
            "unit": "ns",
            "range": "± 39905.28292235541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366650.6668526786,
            "unit": "ns",
            "range": "± 30882.522463930007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2952359.9207899305,
            "unit": "ns",
            "range": "± 121792.25355619128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832253.7941973286,
            "unit": "ns",
            "range": "± 25359.874276213784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765031.3619791666,
            "unit": "ns",
            "range": "± 17480.57733933304"
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
          "id": "3745ae34c6251c30bce77ecc8a368d960ec585f6",
          "message": "fix: Fix to render on unforked appending",
          "timestamp": "2023-05-12T14:22:39+09:00",
          "tree_id": "6f39115c1bdc5a75bfbd166c2c66fef256bb02a0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3745ae34c6251c30bce77ecc8a368d960ec585f6"
        },
        "date": 1683870379191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8685675.969879517,
            "unit": "ns",
            "range": "± 613862.8287015326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24113308.912087914,
            "unit": "ns",
            "range": "± 3821874.1403408377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52898434.575,
            "unit": "ns",
            "range": "± 1830597.5778145948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106493072.15789473,
            "unit": "ns",
            "range": "± 3596870.8145245127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214103564.4090909,
            "unit": "ns",
            "range": "± 5205986.971444472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70453.90217391304,
            "unit": "ns",
            "range": "± 9381.347649223944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362856.80337078654,
            "unit": "ns",
            "range": "± 38942.91071013279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349775.4772727273,
            "unit": "ns",
            "range": "± 34293.38274327117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341352.7727272727,
            "unit": "ns",
            "range": "± 45173.89612992164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4635885.135416667,
            "unit": "ns",
            "range": "± 309341.8384832928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4162510.875,
            "unit": "ns",
            "range": "± 241686.35418044776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22771.4587628866,
            "unit": "ns",
            "range": "± 5428.881516400512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113687.39795918367,
            "unit": "ns",
            "range": "± 17196.458905886742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122874.125,
            "unit": "ns",
            "range": "± 13910.036397281074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138942.811827957,
            "unit": "ns",
            "range": "± 23162.490270289843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9287.555555555555,
            "unit": "ns",
            "range": "± 1599.809174794077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22022.865979381444,
            "unit": "ns",
            "range": "± 5161.958376811528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576734.9375,
            "unit": "ns",
            "range": "± 167148.42437519968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2896456.1333333333,
            "unit": "ns",
            "range": "± 99921.49398370885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2534834.909090909,
            "unit": "ns",
            "range": "± 203363.05729038315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6354830.720930233,
            "unit": "ns",
            "range": "± 229932.255815586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3481078.4065934066,
            "unit": "ns",
            "range": "± 264405.8093558283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3929752.159090909,
            "unit": "ns",
            "range": "± 921890.9816362509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4795126.588888889,
            "unit": "ns",
            "range": "± 340157.69043438503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4952801.3522727275,
            "unit": "ns",
            "range": "± 572927.5582920542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8635158.324175823,
            "unit": "ns",
            "range": "± 861712.0124396369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6657790.352951389,
            "unit": "ns",
            "range": "± 227110.69304111402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1992054.9069010417,
            "unit": "ns",
            "range": "± 42568.48483715904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456990.2166982323,
            "unit": "ns",
            "range": "± 98645.62042761855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857952.642578125,
            "unit": "ns",
            "range": "± 211799.93845023363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876458.7597167969,
            "unit": "ns",
            "range": "± 38131.917966951456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925346.7872503222,
            "unit": "ns",
            "range": "± 57772.53553161915"
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
          "id": "2c704a9ca704e6642d2dc1926c4d9c1148ad4fb2",
          "message": "fix: Fix to render on unforked appending",
          "timestamp": "2023-05-13T00:29:53+09:00",
          "tree_id": "411b66f387dbe6c860783c08c555afbefd33cddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2c704a9ca704e6642d2dc1926c4d9c1148ad4fb2"
        },
        "date": 1683906388115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8121526.222222222,
            "unit": "ns",
            "range": "± 166076.76561884957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21335743.5,
            "unit": "ns",
            "range": "± 804680.2228319852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49837174.916666664,
            "unit": "ns",
            "range": "± 573113.6648427935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102405453.76923077,
            "unit": "ns",
            "range": "± 1264451.7702866432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202759991.34615386,
            "unit": "ns",
            "range": "± 2962699.2408223185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67409.39795918367,
            "unit": "ns",
            "range": "± 11047.56413651014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324095.4793814433,
            "unit": "ns",
            "range": "± 22700.969789296894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300382.625,
            "unit": "ns",
            "range": "± 19090.14737129849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286956.0729166667,
            "unit": "ns",
            "range": "± 24606.297598804722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4128542.906976744,
            "unit": "ns",
            "range": "± 152806.2156640317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3694015.777777778,
            "unit": "ns",
            "range": "± 117574.58481555103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17808.425531914894,
            "unit": "ns",
            "range": "± 2358.4500582354026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92444.01020408163,
            "unit": "ns",
            "range": "± 14858.542813690938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92079.44791666667,
            "unit": "ns",
            "range": "± 15314.802593961032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109194.05208333333,
            "unit": "ns",
            "range": "± 16261.248245846577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6480.540816326531,
            "unit": "ns",
            "range": "± 1414.8281591650405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17093.091836734693,
            "unit": "ns",
            "range": "± 2739.918875639809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1563865.3469387756,
            "unit": "ns",
            "range": "± 152505.50215168693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006443.55,
            "unit": "ns",
            "range": "± 155458.5841973044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2535599.6938775512,
            "unit": "ns",
            "range": "± 237544.97130619062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6677880.378787879,
            "unit": "ns",
            "range": "± 447267.5586474094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3363605.9444444445,
            "unit": "ns",
            "range": "± 243787.35342562344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3477007.4574468085,
            "unit": "ns",
            "range": "± 244917.10379693314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531192.666666667,
            "unit": "ns",
            "range": "± 231676.0137292979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4509088.0227272725,
            "unit": "ns",
            "range": "± 384514.08425117115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7625987.625,
            "unit": "ns",
            "range": "± 246962.3974457201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6552410.933759973,
            "unit": "ns",
            "range": "± 252937.59240639152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943877.6968149038,
            "unit": "ns",
            "range": "± 10433.633624831704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358034.3334960938,
            "unit": "ns",
            "range": "± 30243.58836905273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2818879.1955422796,
            "unit": "ns",
            "range": "± 55152.0071314892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 896011.3812779018,
            "unit": "ns",
            "range": "± 15679.378238164767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736310.1306501116,
            "unit": "ns",
            "range": "± 12588.358667966217"
          }
        ]
      }
    ]
  }
}