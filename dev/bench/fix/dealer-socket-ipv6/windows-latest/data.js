window.BENCHMARK_DATA = {
  "lastUpdate": 1679032234768,
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
          "id": "1a6649c745a66cf73de53be150868d3aa8b5ccd1",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T14:30:41+09:00",
          "tree_id": "502b7a16d11fe8216d54cf7bbc8270eebd4d60e1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a6649c745a66cf73de53be150868d3aa8b5ccd1"
        },
        "date": 1679032199852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368321.4285714286,
            "unit": "ns",
            "range": "± 90268.53095299807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547603.125,
            "unit": "ns",
            "range": "± 79101.2192898767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176681.25,
            "unit": "ns",
            "range": "± 132377.90188658657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5071414.285714285,
            "unit": "ns",
            "range": "± 179927.83996874638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49222.63157894737,
            "unit": "ns",
            "range": "± 2838.2809490606587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7304692.307692308,
            "unit": "ns",
            "range": "± 84603.31417403676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19941869.230769232,
            "unit": "ns",
            "range": "± 236282.886192996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50410060,
            "unit": "ns",
            "range": "± 308690.93605093105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97905860,
            "unit": "ns",
            "range": "± 1173026.698514817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194130186.66666666,
            "unit": "ns",
            "range": "± 3383568.821075224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862596.205357143,
            "unit": "ns",
            "range": "± 10389.219612235036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503332.6450892857,
            "unit": "ns",
            "range": "± 3187.366618230458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172136.9921875,
            "unit": "ns",
            "range": "± 5122.122604701236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607535.4166666665,
            "unit": "ns",
            "range": "± 9299.10007660109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831187.0638020834,
            "unit": "ns",
            "range": "± 2118.597076680168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759164.3484933035,
            "unit": "ns",
            "range": "± 1519.8924601039396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188118.604651163,
            "unit": "ns",
            "range": "± 117245.30705566886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5151343.902439024,
            "unit": "ns",
            "range": "± 184535.8963031048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22994757.14285714,
            "unit": "ns",
            "range": "± 405265.8609135218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6169131.25,
            "unit": "ns",
            "range": "± 189173.38597085327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27252137.5,
            "unit": "ns",
            "range": "± 1058993.169492568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184233.33333333334,
            "unit": "ns",
            "range": "± 8592.046113136057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181437.5,
            "unit": "ns",
            "range": "± 5829.1349360401755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158898.18181818182,
            "unit": "ns",
            "range": "± 6780.4864599080665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10796007.692307692,
            "unit": "ns",
            "range": "± 159050.40323504613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9088360,
            "unit": "ns",
            "range": "± 163066.85657817076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21893.877551020407,
            "unit": "ns",
            "range": "± 2997.140091340362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52569.47368421053,
            "unit": "ns",
            "range": "± 5349.469523993001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41262.765957446805,
            "unit": "ns",
            "range": "± 2399.9544817615956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104426.80412371134,
            "unit": "ns",
            "range": "± 14786.490987440173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7403.061224489796,
            "unit": "ns",
            "range": "± 961.46945972616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20512.63157894737,
            "unit": "ns",
            "range": "± 1935.7906793636832"
          }
        ]
      }
    ]
  }
}