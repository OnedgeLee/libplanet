window.BENCHMARK_DATA = {
  "lastUpdate": 1688739036599,
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
          "id": "efc27e150171b0d54ca29d905eb0afc5d4542eee",
          "message": "fix: Fix flaky test\n\n[skip changelog]",
          "timestamp": "2023-07-07T22:55:31+09:00",
          "tree_id": "a2c35e0829542a513e93e235985027669bce69c8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/efc27e150171b0d54ca29d905eb0afc5d4542eee"
        },
        "date": 1688739024362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299578.96,
            "unit": "ns",
            "range": "± 11428.265270827773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293108.9347826087,
            "unit": "ns",
            "range": "± 11253.97560055443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252819.93,
            "unit": "ns",
            "range": "± 15293.657376989573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4606060.125,
            "unit": "ns",
            "range": "± 88208.39974354295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4201950.576923077,
            "unit": "ns",
            "range": "± 111161.93746104755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22292.255102040817,
            "unit": "ns",
            "range": "± 3018.911462561983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99616.6,
            "unit": "ns",
            "range": "± 10522.622538650196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80320.75257731958,
            "unit": "ns",
            "range": "± 7791.111635798686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103739.14583333333,
            "unit": "ns",
            "range": "± 15209.61232765175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6142.938775510204,
            "unit": "ns",
            "range": "± 1168.222376941186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20940.326315789473,
            "unit": "ns",
            "range": "± 2398.919395212279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532713.663265306,
            "unit": "ns",
            "range": "± 108576.48166799707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911395.7391304346,
            "unit": "ns",
            "range": "± 139639.95934373216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1996478.2087912087,
            "unit": "ns",
            "range": "± 111947.4836630022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5491879.518987342,
            "unit": "ns",
            "range": "± 285213.14691867353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6281899.688616072,
            "unit": "ns",
            "range": "± 38114.385514995585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952908.5434244792,
            "unit": "ns",
            "range": "± 4836.870413874427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397590.2565104167,
            "unit": "ns",
            "range": "± 6771.232921036931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648766.11796875,
            "unit": "ns",
            "range": "± 5197.197964386385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849070.6110026041,
            "unit": "ns",
            "range": "± 3334.9770317545485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771420.052358774,
            "unit": "ns",
            "range": "± 881.2174239566754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3786965.066666667,
            "unit": "ns",
            "range": "± 47018.023950497154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3886970.9210526315,
            "unit": "ns",
            "range": "± 129009.83884884289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4527211.384615385,
            "unit": "ns",
            "range": "± 185582.3326617135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4225428.45,
            "unit": "ns",
            "range": "± 146409.15633163461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6895915.825,
            "unit": "ns",
            "range": "± 243471.39238005233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8005023.333333333,
            "unit": "ns",
            "range": "± 108021.85501069856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23126081.4,
            "unit": "ns",
            "range": "± 265494.1167219557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57427597.61111111,
            "unit": "ns",
            "range": "± 1181946.0097401752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114586095.61904761,
            "unit": "ns",
            "range": "± 2596493.5682493323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232963748.20833334,
            "unit": "ns",
            "range": "± 6052233.108217206"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49405.31460674157,
            "unit": "ns",
            "range": "± 2846.6598433136014"
          }
        ]
      }
    ]
  }
}