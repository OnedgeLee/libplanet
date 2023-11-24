window.BENCHMARK_DATA = {
  "lastUpdate": 1700811878647,
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
          "id": "ee39a7e185928a19acdb013214687d86ccf89e75",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T16:25:59+09:00",
          "tree_id": "6d4a6b44d082edda3683cfeee050f02e64ce3c99",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ee39a7e185928a19acdb013214687d86ccf89e75"
        },
        "date": 1700811827068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7841349.25,
            "unit": "ns",
            "range": "± 176719.82018672652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18918827.92857143,
            "unit": "ns",
            "range": "± 226575.81318146174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48084015.63333333,
            "unit": "ns",
            "range": "± 683157.8352856124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94805346.21052632,
            "unit": "ns",
            "range": "± 1732603.2633148555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209266049.03703704,
            "unit": "ns",
            "range": "± 5735699.44852025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35120.023255813954,
            "unit": "ns",
            "range": "± 2821.7896823146675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215330.20289855072,
            "unit": "ns",
            "range": "± 8352.13185990772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214838.5744680851,
            "unit": "ns",
            "range": "± 13353.433787775426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193926.725,
            "unit": "ns",
            "range": "± 6860.610417962187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3750287.6333333333,
            "unit": "ns",
            "range": "± 69680.97850291576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3523684.230769231,
            "unit": "ns",
            "range": "± 37266.18039445829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13557.236559139785,
            "unit": "ns",
            "range": "± 1730.893080601742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59520.2311827957,
            "unit": "ns",
            "range": "± 4787.245629840829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68145.37373737374,
            "unit": "ns",
            "range": "± 18207.036517419583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60325.10752688172,
            "unit": "ns",
            "range": "± 10657.152161058997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4018.574468085106,
            "unit": "ns",
            "range": "± 1432.6364484123692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12812.244444444445,
            "unit": "ns",
            "range": "± 1988.3012768857286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1090445.4574468085,
            "unit": "ns",
            "range": "± 188158.29234117077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2288336.0808080807,
            "unit": "ns",
            "range": "± 157309.22392326634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474473.91954023,
            "unit": "ns",
            "range": "± 77002.4468219239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6705323.625,
            "unit": "ns",
            "range": "± 390080.63033408206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2963969.2592592593,
            "unit": "ns",
            "range": "± 123800.53268028407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3124364.875,
            "unit": "ns",
            "range": "± 59718.87356816101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3621467.4411764704,
            "unit": "ns",
            "range": "± 99097.73232252155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3438703.807017544,
            "unit": "ns",
            "range": "± 140047.8544947658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12870266.90425532,
            "unit": "ns",
            "range": "± 2064521.527312936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834211.861328125,
            "unit": "ns",
            "range": "± 528438.8868387368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1303221.0149739583,
            "unit": "ns",
            "range": "± 27291.27264510559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 854489.2496744791,
            "unit": "ns",
            "range": "± 10802.092488438671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980732.885967548,
            "unit": "ns",
            "range": "± 40425.034082012804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808776.3349911404,
            "unit": "ns",
            "range": "± 150646.6230650039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 678588.4927472371,
            "unit": "ns",
            "range": "± 35717.42057428382"
          }
        ]
      }
    ]
  }
}