window.BENCHMARK_DATA = {
  "lastUpdate": 1698414926828,
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
          "id": "a3909c3940c3e1b6b96ec3f62fe4241d07b6fb63",
          "message": "Prepare 4.0.0",
          "timestamp": "2023-10-27T22:39:57+09:00",
          "tree_id": "3448a2d8fe8d9b10d878a6891c06cb8d50ab01fb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a3909c3940c3e1b6b96ec3f62fe4241d07b6fb63"
        },
        "date": 1698414901914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10612549.8814433,
            "unit": "ns",
            "range": "± 1459310.053843928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22682047.233333334,
            "unit": "ns",
            "range": "± 393489.1093113482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54703178.21875,
            "unit": "ns",
            "range": "± 1685385.610766056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110403867.2204301,
            "unit": "ns",
            "range": "± 6339287.1299814405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222697719.42857143,
            "unit": "ns",
            "range": "± 2853794.499189011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49445.63043478261,
            "unit": "ns",
            "range": "± 9418.812565108512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252343.85955056178,
            "unit": "ns",
            "range": "± 14936.105095194962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245167.0625,
            "unit": "ns",
            "range": "± 11969.739249662252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234938.74545454545,
            "unit": "ns",
            "range": "± 10014.525375151947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210513.5625,
            "unit": "ns",
            "range": "± 78226.67968493336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3873075.875,
            "unit": "ns",
            "range": "± 39668.837418264055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16555.630434782608,
            "unit": "ns",
            "range": "± 2523.530102971234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79480.293814433,
            "unit": "ns",
            "range": "± 10255.479845081753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76764.47752808989,
            "unit": "ns",
            "range": "± 10913.81232031803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80746.40625,
            "unit": "ns",
            "range": "± 10805.24722830545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4181.0684210526315,
            "unit": "ns",
            "range": "± 1098.7211875304542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14174.544444444444,
            "unit": "ns",
            "range": "± 1984.1182637432048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1242810.6781609196,
            "unit": "ns",
            "range": "± 105377.7035664648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2601270.0280898875,
            "unit": "ns",
            "range": "± 182568.36422040837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2039652.9882352941,
            "unit": "ns",
            "range": "± 181171.35453023828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8984471.011904761,
            "unit": "ns",
            "range": "± 992151.9658432929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3190346.346153846,
            "unit": "ns",
            "range": "± 203389.47769881872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720255.888888889,
            "unit": "ns",
            "range": "± 533644.2936518468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4194472.466666667,
            "unit": "ns",
            "range": "± 156088.76349119144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3951727.290909091,
            "unit": "ns",
            "range": "± 166229.48113094122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13055281.630434783,
            "unit": "ns",
            "range": "± 1499653.912765159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423051.743408203,
            "unit": "ns",
            "range": "± 116710.98848063346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1354299.1062677556,
            "unit": "ns",
            "range": "± 32447.368862763356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891605.523297991,
            "unit": "ns",
            "range": "± 14105.232372768885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984256.7442434211,
            "unit": "ns",
            "range": "± 43856.763495862935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646632.0298828125,
            "unit": "ns",
            "range": "± 9615.143035372701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572084.3734654018,
            "unit": "ns",
            "range": "± 9187.37900111367"
          }
        ]
      }
    ]
  }
}