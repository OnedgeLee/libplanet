window.BENCHMARK_DATA = {
  "lastUpdate": 1698645728517,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "b99343a7dadaeb286c126889b58fd81343c0e4f9",
          "message": "Prepare 4.0.0",
          "timestamp": "2023-10-30T14:43:30+09:00",
          "tree_id": "36a091534bd95b64bbd71255b59a5ba272bccca5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b99343a7dadaeb286c126889b58fd81343c0e4f9"
        },
        "date": 1698645713555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70487,
            "unit": "ns",
            "range": "± 11121.51300722579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6421908.972395834,
            "unit": "ns",
            "range": "± 77919.65568692525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2038154.595982143,
            "unit": "ns",
            "range": "± 27369.15065045936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415867.711216518,
            "unit": "ns",
            "range": "± 21220.67952266779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3243745.841796875,
            "unit": "ns",
            "range": "± 30799.339846939638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1041253.5670072115,
            "unit": "ns",
            "range": "± 10679.860149409351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 975430.6833844866,
            "unit": "ns",
            "range": "± 12056.632760128628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10591684,
            "unit": "ns",
            "range": "± 369898.0599412596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27052242.166666668,
            "unit": "ns",
            "range": "± 305210.02657300915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71312781.53846154,
            "unit": "ns",
            "range": "± 793611.127436019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140770296.33333334,
            "unit": "ns",
            "range": "± 2878052.6106059975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281541141.73333335,
            "unit": "ns",
            "range": "± 4547478.494646888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4228895.150943397,
            "unit": "ns",
            "range": "± 175970.81552013938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4496166.781818182,
            "unit": "ns",
            "range": "± 190995.53582854496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5583366.92,
            "unit": "ns",
            "range": "± 147843.1630247405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5569313.65,
            "unit": "ns",
            "range": "± 195714.55080603407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14019680.693548387,
            "unit": "ns",
            "range": "± 579689.5349612524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343480.25531914894,
            "unit": "ns",
            "range": "± 19922.104067925433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341680.60638297873,
            "unit": "ns",
            "range": "± 27809.54662771579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306662.83516483515,
            "unit": "ns",
            "range": "± 22046.79539538255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5292242.739130435,
            "unit": "ns",
            "range": "± 119499.85040394492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4810134.741935484,
            "unit": "ns",
            "range": "± 146680.3433995089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31249.34693877551,
            "unit": "ns",
            "range": "± 9406.385632212714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120446.03191489361,
            "unit": "ns",
            "range": "± 12856.093828447745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130143.96739130435,
            "unit": "ns",
            "range": "± 10597.922252774268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128802.91489361702,
            "unit": "ns",
            "range": "± 15601.872769900507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8875.956043956045,
            "unit": "ns",
            "range": "± 854.4030003079853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26126.53846153846,
            "unit": "ns",
            "range": "± 4402.096907681086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1734616.1734693877,
            "unit": "ns",
            "range": "± 147783.75338959982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3352993.1794871795,
            "unit": "ns",
            "range": "± 116632.82218250747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2583534.4719101125,
            "unit": "ns",
            "range": "± 141536.8707056968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12139376.279069768,
            "unit": "ns",
            "range": "± 657407.6709179446"
          }
        ]
      }
    ]
  }
}