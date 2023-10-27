window.BENCHMARK_DATA = {
  "lastUpdate": 1698415004601,
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
        "date": 1698414990253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60391.72340425532,
            "unit": "ns",
            "range": "± 4340.399477190652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6188417.30625,
            "unit": "ns",
            "range": "± 16804.640218282453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1937056.6030970982,
            "unit": "ns",
            "range": "± 5968.863544430814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377158.796875,
            "unit": "ns",
            "range": "± 1530.9321187335624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3133771.80859375,
            "unit": "ns",
            "range": "± 7548.889331681759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980413.7580915178,
            "unit": "ns",
            "range": "± 664.2093991100592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907489.9251953125,
            "unit": "ns",
            "range": "± 3220.943897930635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10051671.05,
            "unit": "ns",
            "range": "± 223657.93055761102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26507193.64285714,
            "unit": "ns",
            "range": "± 169713.73262263957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66700994.5,
            "unit": "ns",
            "range": "± 338017.8851617061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133756393.46666667,
            "unit": "ns",
            "range": "± 1183439.3005990672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267670894.13333333,
            "unit": "ns",
            "range": "± 1644566.8228274698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4138277.75,
            "unit": "ns",
            "range": "± 94255.85226274449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4431759.464285715,
            "unit": "ns",
            "range": "± 125201.56293382583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5221392.928571428,
            "unit": "ns",
            "range": "± 70892.10332552972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5101872.48,
            "unit": "ns",
            "range": "± 117640.6895346022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12564944.852941176,
            "unit": "ns",
            "range": "± 271539.85540606634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323414.94736842107,
            "unit": "ns",
            "range": "± 6231.634888692124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311518.44444444444,
            "unit": "ns",
            "range": "± 9815.520384849538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279888.6111111111,
            "unit": "ns",
            "range": "± 5987.404938593414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5219754.8,
            "unit": "ns",
            "range": "± 82566.4935882416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4824894,
            "unit": "ns",
            "range": "± 38390.5828122818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23977.8064516129,
            "unit": "ns",
            "range": "± 1542.3542652461988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101697.53125,
            "unit": "ns",
            "range": "± 6793.834474151623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86258.76923076923,
            "unit": "ns",
            "range": "± 3575.885123474969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99360.6,
            "unit": "ns",
            "range": "± 10713.969132011822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6063.268041237114,
            "unit": "ns",
            "range": "± 764.4167236563433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23027.20879120879,
            "unit": "ns",
            "range": "± 1512.971788798335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658390.9583333333,
            "unit": "ns",
            "range": "± 73676.95489827704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3148691.580645161,
            "unit": "ns",
            "range": "± 96004.09260504617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2456390,
            "unit": "ns",
            "range": "± 110287.12724163738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10611641.733333332,
            "unit": "ns",
            "range": "± 397814.2824813541"
          }
        ]
      }
    ]
  }
}