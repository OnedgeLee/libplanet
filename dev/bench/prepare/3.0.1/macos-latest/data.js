window.BENCHMARK_DATA = {
  "lastUpdate": 1689754470763,
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
          "id": "27ec7be4dd62adb956c0802b1d41c28bd059f8e9",
          "message": "Prepare 3.0.1",
          "timestamp": "2023-07-19T16:56:09+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/OnedgeLee/libplanet/commit/27ec7be4dd62adb956c0802b1d41c28bd059f8e9"
        },
        "date": 1689754442741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8768763.35,
            "unit": "ns",
            "range": "± 311631.58150039683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22632480.458333332,
            "unit": "ns",
            "range": "± 1400678.5098638062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54411369.527027026,
            "unit": "ns",
            "range": "± 1846624.5910196751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109774991.75,
            "unit": "ns",
            "range": "± 2800125.4883213057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225705854.5882353,
            "unit": "ns",
            "range": "± 4509183.068522668"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75853.63095238095,
            "unit": "ns",
            "range": "± 4902.647924274377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323607.03658536583,
            "unit": "ns",
            "range": "± 16180.771106963011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317264.8880597015,
            "unit": "ns",
            "range": "± 15009.17916007565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311638.5588235294,
            "unit": "ns",
            "range": "± 6346.155080741687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4177726.411764706,
            "unit": "ns",
            "range": "± 58565.04492555566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775895.0714285714,
            "unit": "ns",
            "range": "± 30156.65415718468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20625.957446808512,
            "unit": "ns",
            "range": "± 2431.3526697337365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121124.28865979382,
            "unit": "ns",
            "range": "± 17748.576316707044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123218.75268817204,
            "unit": "ns",
            "range": "± 13914.375137633051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128357.5412371134,
            "unit": "ns",
            "range": "± 16103.52157973886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8598.533333333333,
            "unit": "ns",
            "range": "± 837.7320164949375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24199.844086021505,
            "unit": "ns",
            "range": "± 3313.641175027804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1488343.120879121,
            "unit": "ns",
            "range": "± 84937.36113615795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949865.289473684,
            "unit": "ns",
            "range": "± 120047.29727690916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107812.907216495,
            "unit": "ns",
            "range": "± 196351.7315390336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5928541.820895523,
            "unit": "ns",
            "range": "± 264984.4408974327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3546903.106060606,
            "unit": "ns",
            "range": "± 292239.83067270025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3784490.654639175,
            "unit": "ns",
            "range": "± 341051.1783924854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4816532.391752577,
            "unit": "ns",
            "range": "± 390245.8641520794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4212928.106060606,
            "unit": "ns",
            "range": "± 347244.24678887904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7540617.880952381,
            "unit": "ns",
            "range": "± 403917.7797754993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7638290.468149038,
            "unit": "ns",
            "range": "± 205331.8960055652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198443.9794270834,
            "unit": "ns",
            "range": "± 36516.94564935659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315233.0662760416,
            "unit": "ns",
            "range": "± 24445.90141825368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3002317.4715952934,
            "unit": "ns",
            "range": "± 156864.93110751844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857247.7994290865,
            "unit": "ns",
            "range": "± 6666.222825917737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784831.1091496394,
            "unit": "ns",
            "range": "± 9876.82739656306"
          }
        ]
      }
    ]
  }
}