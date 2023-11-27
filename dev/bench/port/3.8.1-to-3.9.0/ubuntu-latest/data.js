window.BENCHMARK_DATA = {
  "lastUpdate": 1701066231099,
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
          "id": "83fe34f9ad4e05510621bad88a9a0fa635d5197b",
          "message": "Merge tag '3.8.1' into port/3.8.1-to-3.9.0\n\nLibplanet 3.8.1",
          "timestamp": "2023-11-27T15:10:57+09:00",
          "tree_id": "32706cbfdb86b43bfbbc5bdf131a3105cb792706",
          "url": "https://github.com/OnedgeLee/libplanet/commit/83fe34f9ad4e05510621bad88a9a0fa635d5197b"
        },
        "date": 1701066220000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199124.4552238806,
            "unit": "ns",
            "range": "± 8479.399824088532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200516.375,
            "unit": "ns",
            "range": "± 10451.72568559671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165069.3125,
            "unit": "ns",
            "range": "± 3035.658077336774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3201470.4166666665,
            "unit": "ns",
            "range": "± 40787.103843022676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2843221.5714285714,
            "unit": "ns",
            "range": "± 40954.725121800024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15193.79292929293,
            "unit": "ns",
            "range": "± 2305.5434316788874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66058.5303030303,
            "unit": "ns",
            "range": "± 8477.459083916625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59448.0206185567,
            "unit": "ns",
            "range": "± 6403.314558328661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67091.25806451614,
            "unit": "ns",
            "range": "± 7822.592643862344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2713.9052631578948,
            "unit": "ns",
            "range": "± 415.0280193997727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14009.57142857143,
            "unit": "ns",
            "range": "± 2420.4369163395654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800951.98203125,
            "unit": "ns",
            "range": "± 45276.16665820265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211460.741373698,
            "unit": "ns",
            "range": "± 6135.250674209475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760574.3892578125,
            "unit": "ns",
            "range": "± 2346.9924466880902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954452.4821614583,
            "unit": "ns",
            "range": "± 25148.00579054029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631977.8909301758,
            "unit": "ns",
            "range": "± 12049.385442079038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571082.0267740885,
            "unit": "ns",
            "range": "± 3139.8527670582375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40988.03684210526,
            "unit": "ns",
            "range": "± 5055.909789986297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387690.396825397,
            "unit": "ns",
            "range": "± 108914.1583234601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476928.197674419,
            "unit": "ns",
            "range": "± 91255.94332909289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110911.4782608696,
            "unit": "ns",
            "range": "± 77570.59050595586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2918444.3928571427,
            "unit": "ns",
            "range": "± 151213.21777415785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6663218.7,
            "unit": "ns",
            "range": "± 149388.4481323069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5656513.357142857,
            "unit": "ns",
            "range": "± 84864.30428505094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14234800.23076923,
            "unit": "ns",
            "range": "± 106791.92900148856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36392291.615384616,
            "unit": "ns",
            "range": "± 155271.77993040593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75110633.6923077,
            "unit": "ns",
            "range": "± 576902.9720658383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149817756.7857143,
            "unit": "ns",
            "range": "± 881232.6484358695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960992.4239130435,
            "unit": "ns",
            "range": "± 89747.7543693145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841787.108695652,
            "unit": "ns",
            "range": "± 44498.59706239894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1345108.7395833333,
            "unit": "ns",
            "range": "± 78574.52987782328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5505151.561403509,
            "unit": "ns",
            "range": "± 239155.41256091028"
          }
        ]
      }
    ]
  }
}