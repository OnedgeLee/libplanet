window.BENCHMARK_DATA = {
  "lastUpdate": 1688378027332,
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
          "id": "de7148b69c5ebe792dc5d45c9824d576eb9b7cf6",
          "message": "Add IConsensusMessageCommunicator OnStartHeight(), OnStartRound()",
          "timestamp": "2023-07-03T18:33:37+09:00",
          "tree_id": "6775ed3cb275103fb17539f70b1aeaf076eec7c5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/de7148b69c5ebe792dc5d45c9824d576eb9b7cf6"
        },
        "date": 1688377988808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730998.9247311829,
            "unit": "ns",
            "range": "± 158615.51166991674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3217854.054054054,
            "unit": "ns",
            "range": "± 108121.227216374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200802.0833333335,
            "unit": "ns",
            "range": "± 143404.83510836077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6169363.636363637,
            "unit": "ns",
            "range": "± 336803.4042958081"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62129.56989247312,
            "unit": "ns",
            "range": "± 5457.833603095984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9626207.142857144,
            "unit": "ns",
            "range": "± 86141.73887160727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25339400,
            "unit": "ns",
            "range": "± 221616.48486436284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65523016.27906977,
            "unit": "ns",
            "range": "± 2428413.6275835396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128865641.86046511,
            "unit": "ns",
            "range": "± 4604009.739151947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254373300,
            "unit": "ns",
            "range": "± 5791050.264166704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6104791.692708333,
            "unit": "ns",
            "range": "± 113096.96276283015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959198.8346354167,
            "unit": "ns",
            "range": "± 35774.34669141578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1489927.9067095588,
            "unit": "ns",
            "range": "± 30227.02785342808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3278452.5390625,
            "unit": "ns",
            "range": "± 62409.77501966636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1073547.16796875,
            "unit": "ns",
            "range": "± 18638.923531444303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968732.412109375,
            "unit": "ns",
            "range": "± 22006.16921569314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4037436.6666666665,
            "unit": "ns",
            "range": "± 67292.51568091853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4178775,
            "unit": "ns",
            "range": "± 184316.69863803821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5234748.484848484,
            "unit": "ns",
            "range": "± 164976.66714040982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4677476.785714285,
            "unit": "ns",
            "range": "± 201157.321509194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7831777.083333333,
            "unit": "ns",
            "range": "± 303471.5614560756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327037.5,
            "unit": "ns",
            "range": "± 7723.358837910513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311074.44444444444,
            "unit": "ns",
            "range": "± 11756.973859945181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292448.93617021275,
            "unit": "ns",
            "range": "± 18232.847262186027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5030253.333333333,
            "unit": "ns",
            "range": "± 73148.24347726692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4668871.428571428,
            "unit": "ns",
            "range": "± 49248.27882305093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27877.41935483871,
            "unit": "ns",
            "range": "± 2426.4004934962218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111930.61224489796,
            "unit": "ns",
            "range": "± 9866.410874214474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100973.68421052632,
            "unit": "ns",
            "range": "± 9676.536774165088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123374.22680412371,
            "unit": "ns",
            "range": "± 19171.747216230036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7435.416666666667,
            "unit": "ns",
            "range": "± 1211.8692969881101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24944.086021505376,
            "unit": "ns",
            "range": "± 2629.9471959317802"
          }
        ]
      }
    ]
  }
}