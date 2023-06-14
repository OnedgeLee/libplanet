window.BENCHMARK_DATA = {
  "lastUpdate": 1686718994679,
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
          "id": "2af02e0e2a1312db09d4422f84717ac606b9e0b3",
          "message": "Prepare 2.0.1",
          "timestamp": "2023-06-14T13:38:47+09:00",
          "tree_id": "8d95562084f47de8fbefeba7a2e4a49badd24b2e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2af02e0e2a1312db09d4422f84717ac606b9e0b3"
        },
        "date": 1686718943048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8633783.901234567,
            "unit": "ns",
            "range": "± 435510.15812483075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25815164.04255319,
            "unit": "ns",
            "range": "± 7538847.073576451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58959590.27173913,
            "unit": "ns",
            "range": "± 10691757.309492731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109082020.24285714,
            "unit": "ns",
            "range": "± 5154514.011417755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220899493.93939394,
            "unit": "ns",
            "range": "± 10305111.138790319"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73882.30303030302,
            "unit": "ns",
            "range": "± 13270.406111970473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323106.90625,
            "unit": "ns",
            "range": "± 29489.2888535118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303764.37234042556,
            "unit": "ns",
            "range": "± 20984.39520880282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293705.9183673469,
            "unit": "ns",
            "range": "± 27086.827818927715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4296558.5,
            "unit": "ns",
            "range": "± 138251.59539064576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892367.076923077,
            "unit": "ns",
            "range": "± 52781.50166561125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18168.90625,
            "unit": "ns",
            "range": "± 2295.1220565094823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97457.97938144329,
            "unit": "ns",
            "range": "± 16560.754822508457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99216.88144329897,
            "unit": "ns",
            "range": "± 15709.642219856632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111835.28947368421,
            "unit": "ns",
            "range": "± 17319.59438428216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6600.288659793814,
            "unit": "ns",
            "range": "± 1296.353917071862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18172.15625,
            "unit": "ns",
            "range": "± 2639.602943937731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1790701.5786516855,
            "unit": "ns",
            "range": "± 281458.2498111489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3381481.8505747127,
            "unit": "ns",
            "range": "± 465297.54249546025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2725054.7204301073,
            "unit": "ns",
            "range": "± 330980.90626107005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6772478.116279069,
            "unit": "ns",
            "range": "± 452002.9941342833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3583875.275862069,
            "unit": "ns",
            "range": "± 376308.423960635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3589338.4891304346,
            "unit": "ns",
            "range": "± 340972.32274235773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4649749.109090909,
            "unit": "ns",
            "range": "± 197321.93333575025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4388776.978260869,
            "unit": "ns",
            "range": "± 258420.3727740111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7922447.273584906,
            "unit": "ns",
            "range": "± 329223.8573461973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6668927.985119048,
            "unit": "ns",
            "range": "± 153685.75421451323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971319.059795673,
            "unit": "ns",
            "range": "± 23286.830911606292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325766.4196289063,
            "unit": "ns",
            "range": "± 28746.291654624536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2855717.0859917533,
            "unit": "ns",
            "range": "± 136860.13874266582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817737.2234825721,
            "unit": "ns",
            "range": "± 7017.447805158763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739878.9305943081,
            "unit": "ns",
            "range": "± 7936.573440152216"
          }
        ]
      }
    ]
  }
}