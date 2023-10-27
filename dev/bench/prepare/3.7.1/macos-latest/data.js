window.BENCHMARK_DATA = {
  "lastUpdate": 1698415266536,
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
          "id": "8bb8d9f5d0ee7a07379bf438468f71b5c0cbb152",
          "message": "Prepare 3.7.1",
          "timestamp": "2023-10-27T22:36:50+09:00",
          "tree_id": "906c251257e5839a835901c66606efc8b56c15ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8bb8d9f5d0ee7a07379bf438468f71b5c0cbb152"
        },
        "date": 1698415241579,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7920985.714285715,
            "unit": "ns",
            "range": "± 128564.06578369855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21302357.81111111,
            "unit": "ns",
            "range": "± 2341826.3620524844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54277597.03333333,
            "unit": "ns",
            "range": "± 8296457.415048784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125000064.84408602,
            "unit": "ns",
            "range": "± 20768515.122214228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 313570088.77956986,
            "unit": "ns",
            "range": "± 47548867.73593499"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64043.19565217391,
            "unit": "ns",
            "range": "± 15152.00217882883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256991.90425531915,
            "unit": "ns",
            "range": "± 28790.459279939845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237297.9010989011,
            "unit": "ns",
            "range": "± 24980.262014040403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238139.95876288658,
            "unit": "ns",
            "range": "± 30434.440965690745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4554834.455056179,
            "unit": "ns",
            "range": "± 376075.26318510756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926178.532608696,
            "unit": "ns",
            "range": "± 261018.4330376238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21841.877551020407,
            "unit": "ns",
            "range": "± 6125.690660433802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85028.83684210526,
            "unit": "ns",
            "range": "± 16701.524189337706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75908.04444444444,
            "unit": "ns",
            "range": "± 10535.775338395772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82722.6043956044,
            "unit": "ns",
            "range": "± 14144.357219501682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5404.702127659574,
            "unit": "ns",
            "range": "± 1072.2823270075041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16506.05319148936,
            "unit": "ns",
            "range": "± 3419.7228755452297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353994.3152173914,
            "unit": "ns",
            "range": "± 143154.78393244738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542349.6413043477,
            "unit": "ns",
            "range": "± 258506.09687347803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1985242.1153846155,
            "unit": "ns",
            "range": "± 194606.56405594735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9988901.422222223,
            "unit": "ns",
            "range": "± 1781070.7870712087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281358.930232558,
            "unit": "ns",
            "range": "± 274930.0571752126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3296129.8146067415,
            "unit": "ns",
            "range": "± 195741.06310068478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4765092.130434782,
            "unit": "ns",
            "range": "± 691429.9333666986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5246940.375,
            "unit": "ns",
            "range": "± 977407.276483832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12457234.065934066,
            "unit": "ns",
            "range": "± 1752309.0633340585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5287924.832490809,
            "unit": "ns",
            "range": "± 167675.12081291818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867656.9422789228,
            "unit": "ns",
            "range": "± 241784.63723700284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1066269.2221583945,
            "unit": "ns",
            "range": "± 39429.32034451419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2718429.3735502576,
            "unit": "ns",
            "range": "± 620805.5496177479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 700837.628797743,
            "unit": "ns",
            "range": "± 77221.32241445432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 607769.4455645161,
            "unit": "ns",
            "range": "± 34430.265129804255"
          }
        ]
      }
    ]
  }
}