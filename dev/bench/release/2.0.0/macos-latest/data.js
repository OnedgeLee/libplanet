window.BENCHMARK_DATA = {
  "lastUpdate": 1686716367985,
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
          "id": "335fd39e76d19f625d79562010f69e99263dfeec",
          "message": "Release 2.0.0",
          "timestamp": "2023-06-14T13:00:09+09:00",
          "tree_id": "2a1c21dc2c292847a99ea06984255271aafb7ddf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/335fd39e76d19f625d79562010f69e99263dfeec"
        },
        "date": 1686716327483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8997100.5,
            "unit": "ns",
            "range": "± 141281.43573228907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24202838.04,
            "unit": "ns",
            "range": "± 969434.2988779949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58009416.0862069,
            "unit": "ns",
            "range": "± 1654592.050243083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126696608.6904762,
            "unit": "ns",
            "range": "± 2851931.5372887305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240588785.5,
            "unit": "ns",
            "range": "± 4271949.277099089"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69237.58695652174,
            "unit": "ns",
            "range": "± 8304.627750193175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382887.5319148936,
            "unit": "ns",
            "range": "± 27612.13120236475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360011.2368421053,
            "unit": "ns",
            "range": "± 17169.64878527877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319102.737704918,
            "unit": "ns",
            "range": "± 12618.371900925042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4820841.366666666,
            "unit": "ns",
            "range": "± 143110.96478040444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4474467.269230769,
            "unit": "ns",
            "range": "± 152829.48042292128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19310.329545454544,
            "unit": "ns",
            "range": "± 1558.1466276124404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97461.8111111111,
            "unit": "ns",
            "range": "± 6635.199428252639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90541.59523809524,
            "unit": "ns",
            "range": "± 6670.403203288006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115172.8350515464,
            "unit": "ns",
            "range": "± 16582.15992269027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5995.8125,
            "unit": "ns",
            "range": "± 1387.8581097845474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18985.184782608696,
            "unit": "ns",
            "range": "± 1444.2884474115017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1932937.5353535353,
            "unit": "ns",
            "range": "± 216925.36935142303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3566122.1071428573,
            "unit": "ns",
            "range": "± 150825.3341814092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3029247.173469388,
            "unit": "ns",
            "range": "± 230141.02790281762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8308689.10989011,
            "unit": "ns",
            "range": "± 475439.55158768495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3850805.3402061854,
            "unit": "ns",
            "range": "± 257047.40094095023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4113053.5454545454,
            "unit": "ns",
            "range": "± 153952.94586884513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5253621.859649123,
            "unit": "ns",
            "range": "± 228408.04453515384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5378813.875,
            "unit": "ns",
            "range": "± 98097.75885572853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9280383.693548387,
            "unit": "ns",
            "range": "± 395425.0820239329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7358581.094791667,
            "unit": "ns",
            "range": "± 66163.16986035941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2276583.3169270833,
            "unit": "ns",
            "range": "± 32038.93192864119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1535857.8274274555,
            "unit": "ns",
            "range": "± 17989.756098633232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078806.7580915177,
            "unit": "ns",
            "range": "± 34428.32327671621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1043522.705078125,
            "unit": "ns",
            "range": "± 10125.24278783412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 928602.8669782366,
            "unit": "ns",
            "range": "± 8758.118236213762"
          }
        ]
      }
    ]
  }
}