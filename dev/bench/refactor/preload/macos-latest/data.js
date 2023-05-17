window.BENCHMARK_DATA = {
  "lastUpdate": 1684317576581,
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
          "id": "620aedae81ed0ee369698beb180cc1b34a3f4e40",
          "message": "fix: Fix block pulling and appending to be asynchronous",
          "timestamp": "2023-05-15T14:00:04+09:00",
          "tree_id": "347eb95e41508ecf5d8e3bdad57b63da6f91bec8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/620aedae81ed0ee369698beb180cc1b34a3f4e40"
        },
        "date": 1684127728227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7607219.933333334,
            "unit": "ns",
            "range": "± 123150.21196285145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18973782.375,
            "unit": "ns",
            "range": "± 354078.7282611736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46896540.71428572,
            "unit": "ns",
            "range": "± 781051.7652456922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96333749.66666667,
            "unit": "ns",
            "range": "± 1556142.5160593037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189429574.92857143,
            "unit": "ns",
            "range": "± 2945486.582536602"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55760.055555555555,
            "unit": "ns",
            "range": "± 7663.659080523928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305978.2,
            "unit": "ns",
            "range": "± 14042.700844210845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289119.5,
            "unit": "ns",
            "range": "± 17581.071472977153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259969.09589041097,
            "unit": "ns",
            "range": "± 11656.158112732111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3949981.269230769,
            "unit": "ns",
            "range": "± 60367.83341890206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3584609.580645161,
            "unit": "ns",
            "range": "± 95792.44172402963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19719.9375,
            "unit": "ns",
            "range": "± 3934.3889348651683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116630.21649484536,
            "unit": "ns",
            "range": "± 12820.303912988637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121940.57692307692,
            "unit": "ns",
            "range": "± 4229.399038961591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113752.83333333333,
            "unit": "ns",
            "range": "± 8826.359683416724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8000,
            "unit": "ns",
            "range": "± 1037.2342718897253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23021.052083333332,
            "unit": "ns",
            "range": "± 2218.0270980727646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483555.3673469387,
            "unit": "ns",
            "range": "± 185035.1263461225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2838210.0568181816,
            "unit": "ns",
            "range": "± 151624.76043417474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408154.1276595746,
            "unit": "ns",
            "range": "± 190610.63499159095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6474947.56701031,
            "unit": "ns",
            "range": "± 467676.90475541144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3037156.775862069,
            "unit": "ns",
            "range": "± 111994.45522988339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3189760.345679012,
            "unit": "ns",
            "range": "± 167321.6481899578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4093450.1,
            "unit": "ns",
            "range": "± 122316.84742859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179972.3181818184,
            "unit": "ns",
            "range": "± 229674.61270603616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7575020.976744186,
            "unit": "ns",
            "range": "± 275077.0943762847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7122461.875,
            "unit": "ns",
            "range": "± 80339.78002227508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008867.189174107,
            "unit": "ns",
            "range": "± 13637.135042168102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297860.4118088942,
            "unit": "ns",
            "range": "± 4307.219784689408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644162.4745279946,
            "unit": "ns",
            "range": "± 104325.61643456646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794488.3149088542,
            "unit": "ns",
            "range": "± 11848.232945845628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728065.32421875,
            "unit": "ns",
            "range": "± 7673.367194018844"
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
          "id": "8e82297fb30e9e473fa1a7bfc5d9da5e866187a5",
          "message": "fix: Fix to render on unforked appending",
          "timestamp": "2023-05-15T14:54:25+09:00",
          "tree_id": "34634d61c14d8ea93f9a1fabed12c152db6fcbe0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8e82297fb30e9e473fa1a7bfc5d9da5e866187a5"
        },
        "date": 1684131006245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7850015.068965517,
            "unit": "ns",
            "range": "± 213025.5892246166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19566014.125,
            "unit": "ns",
            "range": "± 502996.5703351234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50433905.75,
            "unit": "ns",
            "range": "± 681838.9016960111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97042163.19444445,
            "unit": "ns",
            "range": "± 2882435.371740113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213220243.7,
            "unit": "ns",
            "range": "± 6341310.0885099685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68205.54639175258,
            "unit": "ns",
            "range": "± 11785.354351394342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332929.3086419753,
            "unit": "ns",
            "range": "± 17389.423488605058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307766.3870967742,
            "unit": "ns",
            "range": "± 19110.784247230138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282208.09375,
            "unit": "ns",
            "range": "± 21598.321797417564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4107397.5555555555,
            "unit": "ns",
            "range": "± 84440.79360413858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3853270.2647058824,
            "unit": "ns",
            "range": "± 72757.78815402635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19403.88172043011,
            "unit": "ns",
            "range": "± 3023.763850371652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93622.23595505618,
            "unit": "ns",
            "range": "± 11233.817773724033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108456.26,
            "unit": "ns",
            "range": "± 12550.69909849687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123180.48421052631,
            "unit": "ns",
            "range": "± 13533.979093506514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8635.273195876289,
            "unit": "ns",
            "range": "± 1077.4968919633698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24193.627659574468,
            "unit": "ns",
            "range": "± 3217.7751020206047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1560645.1368421053,
            "unit": "ns",
            "range": "± 187406.27248486792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2857805.8068181816,
            "unit": "ns",
            "range": "± 206884.64970527636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2413394.7555555557,
            "unit": "ns",
            "range": "± 215176.96835308595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6671492.893617021,
            "unit": "ns",
            "range": "± 528288.4617831573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3334393.4698795183,
            "unit": "ns",
            "range": "± 182997.8182854313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3472743.9078947366,
            "unit": "ns",
            "range": "± 176455.48819190843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493587.02631579,
            "unit": "ns",
            "range": "± 151862.1669572288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4392750.382716049,
            "unit": "ns",
            "range": "± 231027.95528710194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7579807.02,
            "unit": "ns",
            "range": "± 195969.20310666165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6651374.46875,
            "unit": "ns",
            "range": "± 112362.38970549814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030402.6420200893,
            "unit": "ns",
            "range": "± 7432.192683109032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1293416.4608072916,
            "unit": "ns",
            "range": "± 16500.719593787475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735217.782137784,
            "unit": "ns",
            "range": "± 67059.67349415632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856924.7719029018,
            "unit": "ns",
            "range": "± 2284.1274157041216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804343.4199869792,
            "unit": "ns",
            "range": "± 7864.855566507427"
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
          "id": "7ad94a2b74f28a908df29d8f6c4b4d8006ded009",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T16:11:04+09:00",
          "tree_id": "3225248cff7bff4585bb36f4f5db0444c3297b76",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7ad94a2b74f28a908df29d8f6c4b4d8006ded009"
        },
        "date": 1684135649590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10989769.877551021,
            "unit": "ns",
            "range": "± 3842386.141986131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21299434.44680851,
            "unit": "ns",
            "range": "± 2093615.593372941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55808708.52380952,
            "unit": "ns",
            "range": "± 1301365.3683387928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99925674.57142857,
            "unit": "ns",
            "range": "± 1516492.7971796135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203346575.83333334,
            "unit": "ns",
            "range": "± 3153687.7813273068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63112.84848484849,
            "unit": "ns",
            "range": "± 10283.603181530112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323582.2947368421,
            "unit": "ns",
            "range": "± 26211.366469722223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299959.62637362635,
            "unit": "ns",
            "range": "± 19273.721981927363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282639.58510638296,
            "unit": "ns",
            "range": "± 25386.33999310195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3966497.5428571426,
            "unit": "ns",
            "range": "± 112456.21578937834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3870030.172413793,
            "unit": "ns",
            "range": "± 85479.42998592826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16977.333333333332,
            "unit": "ns",
            "range": "± 2469.0344853515253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84043.0744680851,
            "unit": "ns",
            "range": "± 8390.014989976435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89680.59574468085,
            "unit": "ns",
            "range": "± 15945.96725660751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102327.39361702128,
            "unit": "ns",
            "range": "± 15834.46954760886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5458.438775510204,
            "unit": "ns",
            "range": "± 771.7454018554844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16859.17391304348,
            "unit": "ns",
            "range": "± 2243.2198336697043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534443.5606060605,
            "unit": "ns",
            "range": "± 192689.7771573663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2733236.8684210526,
            "unit": "ns",
            "range": "± 91587.53507073749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2442106.1315789474,
            "unit": "ns",
            "range": "± 204662.75536859402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6389829.202531646,
            "unit": "ns",
            "range": "± 331996.2779422338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315844.5,
            "unit": "ns",
            "range": "± 179587.18853616348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3546502.8947368423,
            "unit": "ns",
            "range": "± 72005.2889352926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4488590.7,
            "unit": "ns",
            "range": "± 246839.47129900646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4860543.161764706,
            "unit": "ns",
            "range": "± 232183.8962212194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7763994.5344827585,
            "unit": "ns",
            "range": "± 339425.1796627059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6515702.173403532,
            "unit": "ns",
            "range": "± 161123.15472024438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923573.929796007,
            "unit": "ns",
            "range": "± 34647.9776251797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298933.5263671875,
            "unit": "ns",
            "range": "± 20370.131005375846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2512119.431189904,
            "unit": "ns",
            "range": "± 37276.60455652395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 910798.2238051471,
            "unit": "ns",
            "range": "± 17908.565804606846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743597.1137695312,
            "unit": "ns",
            "range": "± 5410.5360225824215"
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
          "id": "6b9c666338093c48c0f217946698dd27b0b5961e",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T16:09:57+09:00",
          "tree_id": "abe194f9a683713750aa112ba50b0c0c9a29ee54",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6b9c666338093c48c0f217946698dd27b0b5961e"
        },
        "date": 1684135823559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11919864.602150537,
            "unit": "ns",
            "range": "± 2767452.5333493236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26605036.717391305,
            "unit": "ns",
            "range": "± 7142485.759661105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54550984.961538464,
            "unit": "ns",
            "range": "± 3523347.476320575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111311187.2090909,
            "unit": "ns",
            "range": "± 4540936.207801565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226912414.3125,
            "unit": "ns",
            "range": "± 4449141.056749616"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69116.83333333333,
            "unit": "ns",
            "range": "± 10294.482748090099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356413.6590909091,
            "unit": "ns",
            "range": "± 47612.284573377045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315828.2311827957,
            "unit": "ns",
            "range": "± 25619.249808765053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354092.6391752577,
            "unit": "ns",
            "range": "± 48965.28113307802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4419975.285714285,
            "unit": "ns",
            "range": "± 347514.2682263668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3984249.9574468085,
            "unit": "ns",
            "range": "± 300920.67851703725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21426.75,
            "unit": "ns",
            "range": "± 4509.20342524262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113390.67010309278,
            "unit": "ns",
            "range": "± 20378.139054573516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114423.35106382979,
            "unit": "ns",
            "range": "± 13704.51972926587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127704.67894736842,
            "unit": "ns",
            "range": "± 26842.03838891325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6860.239130434783,
            "unit": "ns",
            "range": "± 1109.7040182509534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22044.13186813187,
            "unit": "ns",
            "range": "± 3687.4828939981126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605092.6157894738,
            "unit": "ns",
            "range": "± 184352.0468852579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2885797.625,
            "unit": "ns",
            "range": "± 110524.49185619062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2633972.412371134,
            "unit": "ns",
            "range": "± 288288.48733541317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6411420.871794872,
            "unit": "ns",
            "range": "± 222821.0350655738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555171.5625,
            "unit": "ns",
            "range": "± 293443.2555819667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3931404.293814433,
            "unit": "ns",
            "range": "± 430409.5600567784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4760482.775510204,
            "unit": "ns",
            "range": "± 369995.72701959463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4713899.152173913,
            "unit": "ns",
            "range": "± 446529.390888779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8643455.436170213,
            "unit": "ns",
            "range": "± 787503.6048916097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7534446.881696428,
            "unit": "ns",
            "range": "± 114418.73386375207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2231667.087983631,
            "unit": "ns",
            "range": "± 51272.31284783362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409176.7748325893,
            "unit": "ns",
            "range": "± 22434.984514454845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3040185.753766741,
            "unit": "ns",
            "range": "± 84451.19020489806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030854.2665501644,
            "unit": "ns",
            "range": "± 51977.28077169306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831225.6473535156,
            "unit": "ns",
            "range": "± 57844.499864904385"
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
          "id": "825da086cb7d483ce4417e2747cb2509d3c0b6b7",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:05:45+09:00",
          "tree_id": "98764457e95d330ec6ad09a10d4cbe895b8f3b54",
          "url": "https://github.com/OnedgeLee/libplanet/commit/825da086cb7d483ce4417e2747cb2509d3c0b6b7"
        },
        "date": 1684142558264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7400111.75,
            "unit": "ns",
            "range": "± 23159.82066238071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20766202.115384616,
            "unit": "ns",
            "range": "± 851985.4503784525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50738403.27586207,
            "unit": "ns",
            "range": "± 1458147.731622919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99765512.04761904,
            "unit": "ns",
            "range": "± 2243885.4149221946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209716810,
            "unit": "ns",
            "range": "± 10498960.281337507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57832.572164948455,
            "unit": "ns",
            "range": "± 8455.004880305392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316280.8222222222,
            "unit": "ns",
            "range": "± 19266.198908840484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306188.92553191487,
            "unit": "ns",
            "range": "± 25232.214049793765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268504.4065934066,
            "unit": "ns",
            "range": "± 15248.572175764904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4205131.74,
            "unit": "ns",
            "range": "± 169831.9267741757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3556111.769230769,
            "unit": "ns",
            "range": "± 96754.82999925439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16611.333333333332,
            "unit": "ns",
            "range": "± 2212.6675852230105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88582.78350515464,
            "unit": "ns",
            "range": "± 13178.272743600546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85032.81914893616,
            "unit": "ns",
            "range": "± 9570.014831240702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102423.2258064516,
            "unit": "ns",
            "range": "± 14329.866882576764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5187.569892473119,
            "unit": "ns",
            "range": "± 1033.0932383302504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16193.631868131868,
            "unit": "ns",
            "range": "± 1993.392564386382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435540.4742268042,
            "unit": "ns",
            "range": "± 112657.92960043292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2851111.3684210526,
            "unit": "ns",
            "range": "± 203131.67972692486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2426626.6276595746,
            "unit": "ns",
            "range": "± 216602.8633935866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6415180.681318682,
            "unit": "ns",
            "range": "± 378617.66244821815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3263538.2073170734,
            "unit": "ns",
            "range": "± 234380.38116947384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448414.214285714,
            "unit": "ns",
            "range": "± 234978.82632627353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4402729.136363637,
            "unit": "ns",
            "range": "± 204265.85551774554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4339872.005747126,
            "unit": "ns",
            "range": "± 256120.4794235256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7906135.459459459,
            "unit": "ns",
            "range": "± 396296.96004915785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6380244.423076923,
            "unit": "ns",
            "range": "± 100585.33725908423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932373.1938476562,
            "unit": "ns",
            "range": "± 11497.388733795464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286917.3599494486,
            "unit": "ns",
            "range": "± 24692.83782107866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696306.0625,
            "unit": "ns",
            "range": "± 17020.928241794525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796043.423967634,
            "unit": "ns",
            "range": "± 9712.998507679673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726201.8354116586,
            "unit": "ns",
            "range": "± 6573.41221879132"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "894e21b039d740071b17e1cb8f4d3418e4c8ea79",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:06:53+09:00",
          "tree_id": "8aaf61eb208203d8c717477447f34b1036726196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/894e21b039d740071b17e1cb8f4d3418e4c8ea79"
        },
        "date": 1684142591687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8136846.413793104,
            "unit": "ns",
            "range": "± 234345.47230996334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20072247.076923076,
            "unit": "ns",
            "range": "± 253427.13111545547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50523900.88888889,
            "unit": "ns",
            "range": "± 2476319.6995111182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100987428.65384616,
            "unit": "ns",
            "range": "± 1405759.7977754974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203931736.46153846,
            "unit": "ns",
            "range": "± 2101226.4502411685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66404.2947368421,
            "unit": "ns",
            "range": "± 8924.948684367268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336208.8125,
            "unit": "ns",
            "range": "± 38645.19345732335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312581.74226804124,
            "unit": "ns",
            "range": "± 31170.236960814065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277785.13402061857,
            "unit": "ns",
            "range": "± 16674.484415210605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3981931.6842105263,
            "unit": "ns",
            "range": "± 136934.51589307407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3595204.7647058824,
            "unit": "ns",
            "range": "± 115322.94472225661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16437.876404494382,
            "unit": "ns",
            "range": "± 1901.3594288646163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86790.87368421053,
            "unit": "ns",
            "range": "± 8597.626239991941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90653.31313131313,
            "unit": "ns",
            "range": "± 17909.086402390694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104792.92783505155,
            "unit": "ns",
            "range": "± 16148.302421905568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5209.554347826087,
            "unit": "ns",
            "range": "± 950.8309074679227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16269.553191489362,
            "unit": "ns",
            "range": "± 1131.5790339359723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431025.8469387756,
            "unit": "ns",
            "range": "± 138331.77276106382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2730779.511111111,
            "unit": "ns",
            "range": "± 102154.10792492572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2360624.5,
            "unit": "ns",
            "range": "± 179327.08175222285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6300359.347222222,
            "unit": "ns",
            "range": "± 305213.965962839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3293641.7682926827,
            "unit": "ns",
            "range": "± 164948.1567006605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643175.9777777777,
            "unit": "ns",
            "range": "± 353601.39973326656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4595363.178082191,
            "unit": "ns",
            "range": "± 221587.72717326894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4395844.181818182,
            "unit": "ns",
            "range": "± 269667.18912072474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8268937.2,
            "unit": "ns",
            "range": "± 410375.62075385044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6460914.1640625,
            "unit": "ns",
            "range": "± 62668.82174842663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976057.728298611,
            "unit": "ns",
            "range": "± 37114.98884635319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289214.8184814453,
            "unit": "ns",
            "range": "± 21348.765630038557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665483.4052734375,
            "unit": "ns",
            "range": "± 26594.13905760929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854679.4554966518,
            "unit": "ns",
            "range": "± 9286.876040603862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728656.8749248798,
            "unit": "ns",
            "range": "± 6649.035439760367"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af441e937a7c45265d6e5b70ceac99262b80279c",
          "message": "Merge branch 'main' into refactor/preload",
          "timestamp": "2023-05-15T18:06:13+09:00",
          "tree_id": "8aaf61eb208203d8c717477447f34b1036726196",
          "url": "https://github.com/OnedgeLee/libplanet/commit/af441e937a7c45265d6e5b70ceac99262b80279c"
        },
        "date": 1684142645910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9164789.0625,
            "unit": "ns",
            "range": "± 176946.9094466732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24317503.807692308,
            "unit": "ns",
            "range": "± 656843.3655448622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59064674.384615384,
            "unit": "ns",
            "range": "± 846257.3111262257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120555483.5,
            "unit": "ns",
            "range": "± 1474121.1111003284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271364370.5,
            "unit": "ns",
            "range": "± 2492914.245657045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71654.35393258427,
            "unit": "ns",
            "range": "± 6830.040710231665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378711,
            "unit": "ns",
            "range": "± 19166.826631063974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363077.05479452055,
            "unit": "ns",
            "range": "± 17937.565124071025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337871.76543209876,
            "unit": "ns",
            "range": "± 17697.882930079235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4992864.692307692,
            "unit": "ns",
            "range": "± 32469.090035459405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4294225.571428572,
            "unit": "ns",
            "range": "± 66464.30074682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19992.91935483871,
            "unit": "ns",
            "range": "± 1791.498937145995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100201.13978494624,
            "unit": "ns",
            "range": "± 6467.971363289632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111204.4375,
            "unit": "ns",
            "range": "± 13230.652251744013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121030.57894736843,
            "unit": "ns",
            "range": "± 21949.34516329415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4661.517647058824,
            "unit": "ns",
            "range": "± 592.3220571004689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18949.666666666668,
            "unit": "ns",
            "range": "± 1558.3027924580174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1827645.1458333333,
            "unit": "ns",
            "range": "± 231884.53489119283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3375739.106060606,
            "unit": "ns",
            "range": "± 81481.2902201095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2906182.1530612246,
            "unit": "ns",
            "range": "± 251183.78673181735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7748182.816666666,
            "unit": "ns",
            "range": "± 336065.16264424287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4061362.741573034,
            "unit": "ns",
            "range": "± 301667.0144648328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4277598.873563218,
            "unit": "ns",
            "range": "± 297063.10985205177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5294739.441860465,
            "unit": "ns",
            "range": "± 284926.5963366955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5442185.860759494,
            "unit": "ns",
            "range": "± 409473.8148763648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9315306.986486487,
            "unit": "ns",
            "range": "± 394764.7082399686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7046827.705915178,
            "unit": "ns",
            "range": "± 65687.18196008893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2301223.3609375,
            "unit": "ns",
            "range": "± 12723.78117266045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454372.7545572917,
            "unit": "ns",
            "range": "± 22048.03777173504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124969.84609375,
            "unit": "ns",
            "range": "± 57086.98980489565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939163.6462053572,
            "unit": "ns",
            "range": "± 7959.761886459636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914206.8970703125,
            "unit": "ns",
            "range": "± 9249.262165205995"
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
          "id": "825da086cb7d483ce4417e2747cb2509d3c0b6b7",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:05:45+09:00",
          "tree_id": "98764457e95d330ec6ad09a10d4cbe895b8f3b54",
          "url": "https://github.com/OnedgeLee/libplanet/commit/825da086cb7d483ce4417e2747cb2509d3c0b6b7"
        },
        "date": 1684142695243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8825439.642857144,
            "unit": "ns",
            "range": "± 146438.773246499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22688480.264367815,
            "unit": "ns",
            "range": "± 1237380.87044371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54710404.327586204,
            "unit": "ns",
            "range": "± 3012122.0409672833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120503729.18604651,
            "unit": "ns",
            "range": "± 41605866.85190163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223862233.66666666,
            "unit": "ns",
            "range": "± 8101427.005380654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70181.51648351649,
            "unit": "ns",
            "range": "± 8197.804546696414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402991.43956043955,
            "unit": "ns",
            "range": "± 63440.26071023366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353434.81052631576,
            "unit": "ns",
            "range": "± 41651.0568853402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320659.73333333334,
            "unit": "ns",
            "range": "± 32215.117938266263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210731.945945946,
            "unit": "ns",
            "range": "± 210752.3308346801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3761614.8870967743,
            "unit": "ns",
            "range": "± 111631.11108816616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19035.061855670105,
            "unit": "ns",
            "range": "± 3706.981577078673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96297.41836734694,
            "unit": "ns",
            "range": "± 15368.564032166218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84465.5612244898,
            "unit": "ns",
            "range": "± 11244.234053955404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107627.13541666667,
            "unit": "ns",
            "range": "± 17070.24455540896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5431.05376344086,
            "unit": "ns",
            "range": "± 909.0132055958478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16370.946808510638,
            "unit": "ns",
            "range": "± 1964.3993000516639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1585357.142857143,
            "unit": "ns",
            "range": "± 156236.88297806325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944299.203703704,
            "unit": "ns",
            "range": "± 123521.86166869097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2576567.53125,
            "unit": "ns",
            "range": "± 220841.81518214883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6600032.068181818,
            "unit": "ns",
            "range": "± 360198.3411295797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3891772.4770114943,
            "unit": "ns",
            "range": "± 581029.5656041428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3582368.64893617,
            "unit": "ns",
            "range": "± 281481.40104850667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4952328.826530612,
            "unit": "ns",
            "range": "± 460670.76444858627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4814238.35106383,
            "unit": "ns",
            "range": "± 397038.5757698538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8823182.278350515,
            "unit": "ns",
            "range": "± 762370.6905428803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6537957.207102273,
            "unit": "ns",
            "range": "± 277306.47993801587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2039828.734375,
            "unit": "ns",
            "range": "± 44022.435097208785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322304.7553385417,
            "unit": "ns",
            "range": "± 23244.674273815046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708471.8211348685,
            "unit": "ns",
            "range": "± 59539.57247541702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925653.589983259,
            "unit": "ns",
            "range": "± 11912.22472890372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749685.8853934152,
            "unit": "ns",
            "range": "± 11407.338482966949"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "0e9c536ea2873e274d1ea61f1365a5056b1e90d4",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T18:43:41+09:00",
          "tree_id": "f0d7e7cff71394e74b848e0a49ca56bc1e3d8b16",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0e9c536ea2873e274d1ea61f1365a5056b1e90d4"
        },
        "date": 1684145295001,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8467138.692307692,
            "unit": "ns",
            "range": "± 84221.04903702777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20866868.153846152,
            "unit": "ns",
            "range": "± 188647.33603775332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54254952.5,
            "unit": "ns",
            "range": "± 870594.4344066492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106613613,
            "unit": "ns",
            "range": "± 524955.3137158072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246815290.42771083,
            "unit": "ns",
            "range": "± 23879924.08417767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78910.8829787234,
            "unit": "ns",
            "range": "± 9281.191711645079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 437356.39247311826,
            "unit": "ns",
            "range": "± 98112.47620155835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381825.79032258067,
            "unit": "ns",
            "range": "± 47758.759726581244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 405461.21875,
            "unit": "ns",
            "range": "± 68848.46791005717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4833646.03125,
            "unit": "ns",
            "range": "± 379890.81841047155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257390.670212766,
            "unit": "ns",
            "range": "± 340786.6929868471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24353.340206185567,
            "unit": "ns",
            "range": "± 7360.183562994254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102102.75531914894,
            "unit": "ns",
            "range": "± 15415.900256871479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123736.97894736842,
            "unit": "ns",
            "range": "± 16261.34621954445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155940.02631578947,
            "unit": "ns",
            "range": "± 31034.054990031516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10598.58064516129,
            "unit": "ns",
            "range": "± 1536.511515559648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27769.629032258064,
            "unit": "ns",
            "range": "± 6016.8537391191685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697765.8602150537,
            "unit": "ns",
            "range": "± 183934.7718916653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3274067.4278350514,
            "unit": "ns",
            "range": "± 342578.17404806934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2702872.442105263,
            "unit": "ns",
            "range": "± 258430.76516580884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7721387.188888889,
            "unit": "ns",
            "range": "± 897519.5734282852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3758554.846153846,
            "unit": "ns",
            "range": "± 522103.302382093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3886279.933333333,
            "unit": "ns",
            "range": "± 413436.5483150313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4937203.3977272725,
            "unit": "ns",
            "range": "± 429298.7417743312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4988020.208791208,
            "unit": "ns",
            "range": "± 697855.4939715198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9253219.457446808,
            "unit": "ns",
            "range": "± 1079557.7627805274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7511772.404336735,
            "unit": "ns",
            "range": "± 538906.4043236213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2197002.588771446,
            "unit": "ns",
            "range": "± 89636.26903587935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1430695.1149631077,
            "unit": "ns",
            "range": "± 67479.42960350873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3205352.9537228956,
            "unit": "ns",
            "range": "± 274518.0405279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941630.4352315267,
            "unit": "ns",
            "range": "± 76141.82493148869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850935.2303927952,
            "unit": "ns",
            "range": "± 46984.05566346402"
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
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "0317d29af1203373fbea7c316a537d31f17a8b76",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T20:19:53+09:00",
          "tree_id": "b9ad6199d0bc54c6f35cf50275212abb8c782d81",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0317d29af1203373fbea7c316a537d31f17a8b76"
        },
        "date": 1684150657947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9105498.52631579,
            "unit": "ns",
            "range": "± 311106.2608904376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23499235.418181818,
            "unit": "ns",
            "range": "± 1000316.4922914386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58616397.33783784,
            "unit": "ns",
            "range": "± 1695585.6489704296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119735668.96666667,
            "unit": "ns",
            "range": "± 3570449.924390132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241705663.5,
            "unit": "ns",
            "range": "± 3209111.4522212325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67253.01052631579,
            "unit": "ns",
            "range": "± 6730.41122877337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406826.78125,
            "unit": "ns",
            "range": "± 45042.21265837382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367416.04210526316,
            "unit": "ns",
            "range": "± 24169.975820160525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354207.4726027397,
            "unit": "ns",
            "range": "± 17648.177205980322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4965973.214285715,
            "unit": "ns",
            "range": "± 53499.68380953088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4275716.857142857,
            "unit": "ns",
            "range": "± 60426.24325936174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19987.236559139787,
            "unit": "ns",
            "range": "± 1588.2592973458152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98439.8125,
            "unit": "ns",
            "range": "± 6971.205369325723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99495.57142857143,
            "unit": "ns",
            "range": "± 12583.807058377613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109121.45161290323,
            "unit": "ns",
            "range": "± 15223.534749593793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6064.394736842105,
            "unit": "ns",
            "range": "± 977.3357561714159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18893.172043010753,
            "unit": "ns",
            "range": "± 1876.2723081757886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1709170.5670103093,
            "unit": "ns",
            "range": "± 159920.35847433735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3402481.787234043,
            "unit": "ns",
            "range": "± 122519.59014376937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2898976.43814433,
            "unit": "ns",
            "range": "± 197571.9487354973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8272973.902173913,
            "unit": "ns",
            "range": "± 1037880.6072069174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3890447.3924731184,
            "unit": "ns",
            "range": "± 240032.99375681227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4172205.9081632653,
            "unit": "ns",
            "range": "± 265169.396588628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5512250.70212766,
            "unit": "ns",
            "range": "± 360489.8270948545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5469237.270833333,
            "unit": "ns",
            "range": "± 368482.6661995172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10019368.258241758,
            "unit": "ns",
            "range": "± 578672.4811099462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7224593.473557692,
            "unit": "ns",
            "range": "± 23472.384055941748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2196513.5065104165,
            "unit": "ns",
            "range": "± 7970.5027875468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433170.51703125,
            "unit": "ns",
            "range": "± 37851.63747464241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2793909.6219308036,
            "unit": "ns",
            "range": "± 21522.303609154078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937950.0905198317,
            "unit": "ns",
            "range": "± 5457.997998480472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856139.669546274,
            "unit": "ns",
            "range": "± 4479.291832109332"
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
          "id": "f4ca9181469db424123a81ad8aba5aeef7140efb",
          "message": "feat: Break block pulling by chunk",
          "timestamp": "2023-05-15T23:51:33+09:00",
          "tree_id": "21c9dadffde3b6338d20a5987d316d69519f82b4",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f4ca9181469db424123a81ad8aba5aeef7140efb"
        },
        "date": 1684163241117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7704085.838028169,
            "unit": "ns",
            "range": "± 376332.1616198702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18194688.53846154,
            "unit": "ns",
            "range": "± 189760.3449330301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46164227.914634146,
            "unit": "ns",
            "range": "± 1651105.6508661245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91211066.1,
            "unit": "ns",
            "range": "± 1702705.8716283578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195369933.3,
            "unit": "ns",
            "range": "± 3808913.6282677227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58604.520833333336,
            "unit": "ns",
            "range": "± 8325.842609457386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295384.2802197802,
            "unit": "ns",
            "range": "± 16426.775314036124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288028.32608695654,
            "unit": "ns",
            "range": "± 17744.125994848837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271688.43333333335,
            "unit": "ns",
            "range": "± 15018.103037835914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4086551.3636363638,
            "unit": "ns",
            "range": "± 97563.58127544336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3592557.210526316,
            "unit": "ns",
            "range": "± 78671.44098406214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15599.579545454546,
            "unit": "ns",
            "range": "± 1547.3612965644247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78818.57731958762,
            "unit": "ns",
            "range": "± 7181.296458850373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75722.37234042553,
            "unit": "ns",
            "range": "± 9506.42210544896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92356.97872340426,
            "unit": "ns",
            "range": "± 13044.041303255972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4664.067415730337,
            "unit": "ns",
            "range": "± 683.1321381187871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15231.134831460675,
            "unit": "ns",
            "range": "± 1626.0252443459344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1469607.3064516129,
            "unit": "ns",
            "range": "± 152550.75239523876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791252.950617284,
            "unit": "ns",
            "range": "± 140652.3415913241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366598.5913978494,
            "unit": "ns",
            "range": "± 202974.2460555802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6381927.096491228,
            "unit": "ns",
            "range": "± 273534.17722894595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3002335.8,
            "unit": "ns",
            "range": "± 72498.0210156302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487305.7,
            "unit": "ns",
            "range": "± 56349.73525885332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4132981,
            "unit": "ns",
            "range": "± 54387.88998230463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4233366.919354838,
            "unit": "ns",
            "range": "± 190462.11480616298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7595348.590163934,
            "unit": "ns",
            "range": "± 340613.8064590344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5944267.786272322,
            "unit": "ns",
            "range": "± 43170.94270881476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825977.1358072916,
            "unit": "ns",
            "range": "± 18985.43509456531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1211457.9481670673,
            "unit": "ns",
            "range": "± 6768.2893585580205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595789.1481584823,
            "unit": "ns",
            "range": "± 13645.484342750031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 751694.1867327009,
            "unit": "ns",
            "range": "± 3581.555270482972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 687743.3641880581,
            "unit": "ns",
            "range": "± 5122.277973011898"
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
          "id": "b16f166c4f765fb1642bfcf4f589de8c1e75ca3e",
          "message": "document: Add changelog",
          "timestamp": "2023-05-16T00:28:04+09:00",
          "tree_id": "1fa375dda3474ce670f4b3cb3c76c303f16410d2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b16f166c4f765fb1642bfcf4f589de8c1e75ca3e"
        },
        "date": 1684165590796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11901138.3125,
            "unit": "ns",
            "range": "± 2045962.05655697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24150655.86,
            "unit": "ns",
            "range": "± 3079614.4980382146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59915703.76373626,
            "unit": "ns",
            "range": "± 6357128.142044452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118581924.94791667,
            "unit": "ns",
            "range": "± 7553014.048249897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219835783.47938144,
            "unit": "ns",
            "range": "± 15289848.068294408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69350.62637362638,
            "unit": "ns",
            "range": "± 10107.783287753331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336257.35714285716,
            "unit": "ns",
            "range": "± 32413.179267620766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314047.1022727273,
            "unit": "ns",
            "range": "± 23457.334960992026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297123.33720930235,
            "unit": "ns",
            "range": "± 19701.47444623219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4120772.1875,
            "unit": "ns",
            "range": "± 61553.14373852755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4202273.31443299,
            "unit": "ns",
            "range": "± 679838.8504323154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20514.48979591837,
            "unit": "ns",
            "range": "± 3196.5088889622057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102979.82474226804,
            "unit": "ns",
            "range": "± 15692.098800039937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109055.24742268042,
            "unit": "ns",
            "range": "± 21485.091127837404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128223.41304347826,
            "unit": "ns",
            "range": "± 21466.91842416415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8363.697916666666,
            "unit": "ns",
            "range": "± 1623.0031625600193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18358.797872340427,
            "unit": "ns",
            "range": "± 2598.5188650534046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1831207.275510204,
            "unit": "ns",
            "range": "± 477200.40428614634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3793878.6515151514,
            "unit": "ns",
            "range": "± 839494.8892170569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2977424.2608695654,
            "unit": "ns",
            "range": "± 607841.8927812275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7533220.857894737,
            "unit": "ns",
            "range": "± 996316.5900170757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248086.75,
            "unit": "ns",
            "range": "± 259408.48815485463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453565.761904762,
            "unit": "ns",
            "range": "± 310260.3151920968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749387.097826087,
            "unit": "ns",
            "range": "± 589927.3322766409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782230.106382979,
            "unit": "ns",
            "range": "± 715346.4243827064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8215921.638297873,
            "unit": "ns",
            "range": "± 743311.578401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7230757.668658088,
            "unit": "ns",
            "range": "± 346211.9602711325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052100.849392361,
            "unit": "ns",
            "range": "± 50158.69164836051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369846.6768229166,
            "unit": "ns",
            "range": "± 25611.845173515372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2895072.27578125,
            "unit": "ns",
            "range": "± 104385.73861758389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865795.4974190848,
            "unit": "ns",
            "range": "± 13038.057777253269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757434.6401515151,
            "unit": "ns",
            "range": "± 23467.559625340757"
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
          "id": "59b4c10343a87d868b36d8684b3b04807db005c3",
          "message": "fix: FindBranchpoint to assign when no element satisfies predicate",
          "timestamp": "2023-05-17T18:41:22+09:00",
          "tree_id": "87c474b16c4dbe8cffad25717e3ac4567101a861",
          "url": "https://github.com/OnedgeLee/libplanet/commit/59b4c10343a87d868b36d8684b3b04807db005c3"
        },
        "date": 1684317538552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8477340.833333334,
            "unit": "ns",
            "range": "± 453013.99801232055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22861170.854166668,
            "unit": "ns",
            "range": "± 1317532.4244744955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55122844.35,
            "unit": "ns",
            "range": "± 1950135.4653826507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111879625.5677966,
            "unit": "ns",
            "range": "± 4845457.324338002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230516590.6451613,
            "unit": "ns",
            "range": "± 7002893.539714402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77081.7,
            "unit": "ns",
            "range": "± 6350.5178952745455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379268.2368421053,
            "unit": "ns",
            "range": "± 55853.920917093994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 373420.37,
            "unit": "ns",
            "range": "± 63594.64819768225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358371.8021978022,
            "unit": "ns",
            "range": "± 42883.022328505554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256149.882352941,
            "unit": "ns",
            "range": "± 81808.68726935603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3844897.981818182,
            "unit": "ns",
            "range": "± 155003.9574581399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21660.7,
            "unit": "ns",
            "range": "± 4320.5884033908105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93602.75757575757,
            "unit": "ns",
            "range": "± 12424.65738047788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88230.74,
            "unit": "ns",
            "range": "± 14340.181918897359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113553.36734693877,
            "unit": "ns",
            "range": "± 18590.73388878069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5178.9,
            "unit": "ns",
            "range": "± 1288.0957293094207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17551.584210526315,
            "unit": "ns",
            "range": "± 3168.0355604036517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1621630.8144329898,
            "unit": "ns",
            "range": "± 169043.97950264366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3190138.6666666665,
            "unit": "ns",
            "range": "± 174444.53877216708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2716718.389473684,
            "unit": "ns",
            "range": "± 295134.24886944186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6857321.444444444,
            "unit": "ns",
            "range": "± 617955.4494272495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3598533.5,
            "unit": "ns",
            "range": "± 374736.1020885863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3868413.75,
            "unit": "ns",
            "range": "± 383922.72474784625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4830877.214285715,
            "unit": "ns",
            "range": "± 389091.2776977122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4860835.479591837,
            "unit": "ns",
            "range": "± 455295.06621969846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8463388.551020408,
            "unit": "ns",
            "range": "± 750949.3992202025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7054298.912860577,
            "unit": "ns",
            "range": "± 287188.3445272225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943653.2098958334,
            "unit": "ns",
            "range": "± 35058.06906805754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301580.2025240385,
            "unit": "ns",
            "range": "± 19433.645940171926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2791869.5811060853,
            "unit": "ns",
            "range": "± 60661.730934845895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792470.9403645833,
            "unit": "ns",
            "range": "± 11478.17213009301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793860.1664713542,
            "unit": "ns",
            "range": "± 10686.165990193129"
          }
        ]
      }
    ]
  }
}