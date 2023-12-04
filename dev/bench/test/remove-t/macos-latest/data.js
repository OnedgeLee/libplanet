window.BENCHMARK_DATA = {
  "lastUpdate": 1701733483854,
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
          "id": "7ac534e31f659ecb30de1ef01da73e3233cf06d0",
          "message": "test: Replace <T> with IActionLoader param",
          "timestamp": "2023-12-05T08:13:56+09:00",
          "tree_id": "44c43ad053606bbc2e73640a0517240d3dcd1890",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7ac534e31f659ecb30de1ef01da73e3233cf06d0"
        },
        "date": 1701733451969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 16107754.164705882,
            "unit": "ns",
            "range": "± 2866856.989237488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 37090650.32608695,
            "unit": "ns",
            "range": "± 9032237.61268605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 89105356.47894737,
            "unit": "ns",
            "range": "± 11395434.76341337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 171590752.3372093,
            "unit": "ns",
            "range": "± 20805851.087190762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 363313181.48913044,
            "unit": "ns",
            "range": "± 45319740.816756405"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79312.05376344085,
            "unit": "ns",
            "range": "± 19186.31143344106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 427988.26804123714,
            "unit": "ns",
            "range": "± 126189.30184585408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344735.64705882355,
            "unit": "ns",
            "range": "± 53367.50798867761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284906.20652173914,
            "unit": "ns",
            "range": "± 16120.134157090455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5419852.357142857,
            "unit": "ns",
            "range": "± 84264.4601173154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4875234.266666667,
            "unit": "ns",
            "range": "± 57868.92564539609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17452.855555555554,
            "unit": "ns",
            "range": "± 2347.6442043806483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78246.21111111112,
            "unit": "ns",
            "range": "± 6280.907687291674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92282.0459770115,
            "unit": "ns",
            "range": "± 9995.635538164395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88284.6530612245,
            "unit": "ns",
            "range": "± 20937.814875971522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6053.163157894737,
            "unit": "ns",
            "range": "± 996.6494999526558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18813.48947368421,
            "unit": "ns",
            "range": "± 2964.3223024249533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515702.5319148935,
            "unit": "ns",
            "range": "± 154907.4943477247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3252171.9655172415,
            "unit": "ns",
            "range": "± 242262.41341802635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2788393.2011494255,
            "unit": "ns",
            "range": "± 295410.61184565787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19730848.078651685,
            "unit": "ns",
            "range": "± 3812135.525973274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5407277.75257732,
            "unit": "ns",
            "range": "± 1212511.827929672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4988421.8125,
            "unit": "ns",
            "range": "± 904079.1441666958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6527439.257575758,
            "unit": "ns",
            "range": "± 1322058.7833895166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6213523.1736842105,
            "unit": "ns",
            "range": "± 1200145.5058538355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26404886.785714287,
            "unit": "ns",
            "range": "± 6949867.092570643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5217421.758295747,
            "unit": "ns",
            "range": "± 782279.675063024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1369940.7903988487,
            "unit": "ns",
            "range": "± 46166.23386860844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 995412.2718359375,
            "unit": "ns",
            "range": "± 93385.32231801112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2969445.9262907607,
            "unit": "ns",
            "range": "± 462735.82063314173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945104.3761935764,
            "unit": "ns",
            "range": "± 73158.22851323397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 712316.9425195312,
            "unit": "ns",
            "range": "± 106734.96025050269"
          }
        ]
      }
    ]
  }
}