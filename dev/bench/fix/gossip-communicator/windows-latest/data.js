window.BENCHMARK_DATA = {
  "lastUpdate": 1704339773161,
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
          "id": "2eff7abe8901207e17ceb653575dd32a3f07c7a7",
          "message": "fix: Fix GossipConsensusMessageCommunicator",
          "timestamp": "2024-01-04T12:29:54+09:00",
          "tree_id": "233a0932b362fbd8924c78581d9802109b20c44d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2eff7abe8901207e17ceb653575dd32a3f07c7a7"
        },
        "date": 1704339738520,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001407.0707070708,
            "unit": "ns",
            "range": "± 123992.68350084148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732394.2028985508,
            "unit": "ns",
            "range": "± 83500.3907776308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512717.0212765958,
            "unit": "ns",
            "range": "± 152402.30619307334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10810359.782608695,
            "unit": "ns",
            "range": "± 870370.9420220988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34049.43820224719,
            "unit": "ns",
            "range": "± 1993.633252239011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4962857.142857143,
            "unit": "ns",
            "range": "± 46226.47783194447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12851707.142857144,
            "unit": "ns",
            "range": "± 146591.27618227236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32264957.14285714,
            "unit": "ns",
            "range": "± 280936.27997571515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64160393.333333336,
            "unit": "ns",
            "range": "± 440417.7472528078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128807157.14285715,
            "unit": "ns",
            "range": "± 674849.1030357319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3226337.109375,
            "unit": "ns",
            "range": "± 5663.790914825111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079409.7806490385,
            "unit": "ns",
            "range": "± 2087.28320195068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735874.8465401785,
            "unit": "ns",
            "range": "± 2408.8247264241677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1979610.1283482143,
            "unit": "ns",
            "range": "± 8184.570524516998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618440.4361979166,
            "unit": "ns",
            "range": "± 2616.9016890230096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574199.5793269231,
            "unit": "ns",
            "range": "± 1944.001417422062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2079840,
            "unit": "ns",
            "range": "± 83531.09221928647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2214568.604651163,
            "unit": "ns",
            "range": "± 80729.74095212446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2737973.076923077,
            "unit": "ns",
            "range": "± 74524.56001986087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2746357.1428571427,
            "unit": "ns",
            "range": "± 109192.58598152777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12537396.808510639,
            "unit": "ns",
            "range": "± 1525833.068876057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169832.39436619717,
            "unit": "ns",
            "range": "± 7564.272689952934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161936.58536585365,
            "unit": "ns",
            "range": "± 8134.980285514472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138261.53846153847,
            "unit": "ns",
            "range": "± 1444.840511116747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2825800,
            "unit": "ns",
            "range": "± 38783.56114882458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505775,
            "unit": "ns",
            "range": "± 47469.5902657691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11096.808510638299,
            "unit": "ns",
            "range": "± 1365.5281484568034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52293.956043956045,
            "unit": "ns",
            "range": "± 5238.515667443058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48492.55319148936,
            "unit": "ns",
            "range": "± 5261.5513342907525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61401.0101010101,
            "unit": "ns",
            "range": "± 12087.719311473033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2430.9278350515465,
            "unit": "ns",
            "range": "± 494.62966465289884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9978.888888888889,
            "unit": "ns",
            "range": "± 1218.074963509672"
          }
        ]
      }
    ]
  }
}