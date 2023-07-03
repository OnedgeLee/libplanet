window.BENCHMARK_DATA = {
  "lastUpdate": 1688387625142,
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
          "id": "495ef9dba3a51dd2535deaaebaf8f05463c913df",
          "message": "Prepare 2.5.0",
          "timestamp": "2023-07-03T21:20:27+09:00",
          "tree_id": "df6b6dca20ffeaf28ae66c872ced0c91410428f3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/495ef9dba3a51dd2535deaaebaf8f05463c913df"
        },
        "date": 1688387612277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8065814.066666666,
            "unit": "ns",
            "range": "± 77672.29874052972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20251059,
            "unit": "ns",
            "range": "± 72743.04022537668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51705549.13333333,
            "unit": "ns",
            "range": "± 195112.3561298781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103240107.86666666,
            "unit": "ns",
            "range": "± 298510.82371663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206199118.4,
            "unit": "ns",
            "range": "± 574217.215632203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48234.17021276596,
            "unit": "ns",
            "range": "± 3065.0756577807965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289396.92307692306,
            "unit": "ns",
            "range": "± 7877.312673357974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276814.67441860464,
            "unit": "ns",
            "range": "± 7233.89273364964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242997.5,
            "unit": "ns",
            "range": "± 7711.8592312768715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303446.785714285,
            "unit": "ns",
            "range": "± 22718.129446896237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3922487.6428571427,
            "unit": "ns",
            "range": "± 31076.052881741452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20245.943298969072,
            "unit": "ns",
            "range": "± 1442.5909053466974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93671.64285714286,
            "unit": "ns",
            "range": "± 5917.637987014821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74956.6,
            "unit": "ns",
            "range": "± 2779.3371751792424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86888.65384615384,
            "unit": "ns",
            "range": "± 3853.893584641156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5382.484536082474,
            "unit": "ns",
            "range": "± 686.9228048787892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19598.979166666668,
            "unit": "ns",
            "range": "± 1919.9185891685845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443365.9684210527,
            "unit": "ns",
            "range": "± 105360.60672336702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2709666.407407407,
            "unit": "ns",
            "range": "± 74714.4843115645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1857233.4210526317,
            "unit": "ns",
            "range": "± 111422.5457762819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4838947.5,
            "unit": "ns",
            "range": "± 95617.44209003975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6428723.072395833,
            "unit": "ns",
            "range": "± 22551.49675561982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998882.212890625,
            "unit": "ns",
            "range": "± 1268.0498237131164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378229.1927584135,
            "unit": "ns",
            "range": "± 742.3072510228342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613905.7042410714,
            "unit": "ns",
            "range": "± 2048.355452921942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840290.0917271206,
            "unit": "ns",
            "range": "± 885.8379647456657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728306.9731770833,
            "unit": "ns",
            "range": "± 331.9780755795338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3446185.5,
            "unit": "ns",
            "range": "± 80729.12888687287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585290.8571428573,
            "unit": "ns",
            "range": "± 86898.30591014367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4392831.266666667,
            "unit": "ns",
            "range": "± 58843.30113769071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3942435.375,
            "unit": "ns",
            "range": "± 139257.35046321704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6416516.428571428,
            "unit": "ns",
            "range": "± 132867.00418259285"
          }
        ]
      }
    ]
  }
}