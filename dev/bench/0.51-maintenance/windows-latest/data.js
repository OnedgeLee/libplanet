window.BENCHMARK_DATA = {
  "lastUpdate": 1678684072492,
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
          "id": "6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T13:44:20+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6fd90b9f6ea861b2478f9196c8bd34d1eabbfd05"
        },
        "date": 1678684029632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708723.1578947369,
            "unit": "ns",
            "range": "± 155434.0274998214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3282530.9278350514,
            "unit": "ns",
            "range": "± 299593.43505018903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2620281.25,
            "unit": "ns",
            "range": "± 275411.2164946312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6915878.125,
            "unit": "ns",
            "range": "± 505786.76892709493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54220.65217391304,
            "unit": "ns",
            "range": "± 7080.86010240108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8712338.144329896,
            "unit": "ns",
            "range": "± 578332.1159527231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23605670,
            "unit": "ns",
            "range": "± 1314565.908737835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61796918.18181818,
            "unit": "ns",
            "range": "± 2890615.901254854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 125758990.69767442,
            "unit": "ns",
            "range": "± 4640152.316917745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 266862651.72413793,
            "unit": "ns",
            "range": "± 7627095.888888543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998335.271139706,
            "unit": "ns",
            "range": "± 118742.94644287848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2072553.984375,
            "unit": "ns",
            "range": "± 45983.847781696546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522815.557391827,
            "unit": "ns",
            "range": "± 41058.893070488084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3192623.3816964286,
            "unit": "ns",
            "range": "± 44645.9881756483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062893.6458333333,
            "unit": "ns",
            "range": "± 9109.984203474676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1002402.5282118055,
            "unit": "ns",
            "range": "± 20879.410895964156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3770766.326530612,
            "unit": "ns",
            "range": "± 326744.04622120614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5758806.701030928,
            "unit": "ns",
            "range": "± 461741.6151348465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30208059.793814432,
            "unit": "ns",
            "range": "± 2004123.2801953056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7154737.755102041,
            "unit": "ns",
            "range": "± 504451.84039857215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36811287.5,
            "unit": "ns",
            "range": "± 2106146.5237802374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219516.12903225806,
            "unit": "ns",
            "range": "± 33681.530515940234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211082.60869565216,
            "unit": "ns",
            "range": "± 23933.70242568505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181929.16666666666,
            "unit": "ns",
            "range": "± 22713.63567582335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13444653.260869564,
            "unit": "ns",
            "range": "± 764145.1604590494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10545730.337078651,
            "unit": "ns",
            "range": "± 581575.9856952358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22090,
            "unit": "ns",
            "range": "± 5406.07336367933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58443.023255813954,
            "unit": "ns",
            "range": "± 10897.33416615571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39811.17647058824,
            "unit": "ns",
            "range": "± 3407.20853896723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116948.93617021276,
            "unit": "ns",
            "range": "± 24625.717585443726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5687.234042553191,
            "unit": "ns",
            "range": "± 822.4320140615724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20312.650602409638,
            "unit": "ns",
            "range": "± 3428.564047121338"
          }
        ]
      }
    ]
  }
}