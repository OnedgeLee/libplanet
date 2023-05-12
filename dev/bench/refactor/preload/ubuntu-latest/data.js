window.BENCHMARK_DATA = {
  "lastUpdate": 1683858485435,
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
          "id": "5b59f24820224f9e9cf31723c5d9a81712b9271d",
          "message": "refactor: replace preload logic with blocksync",
          "timestamp": "2023-05-12T11:13:36+09:00",
          "tree_id": "bcf324b7894514c9753fb06dd952fe13075db52f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5b59f24820224f9e9cf31723c5d9a81712b9271d"
        },
        "date": 1683858472438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3559979.4782608696,
            "unit": "ns",
            "range": "± 79490.8569956145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720144.214285714,
            "unit": "ns",
            "range": "± 40332.545251806405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4384629,
            "unit": "ns",
            "range": "± 109163.80230644222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4688663.125,
            "unit": "ns",
            "range": "± 119045.44337546884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7136125.958333333,
            "unit": "ns",
            "range": "± 179412.71188846152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297666.1206896552,
            "unit": "ns",
            "range": "± 12942.256084783898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285846.5,
            "unit": "ns",
            "range": "± 12721.746536644367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240426.0909090909,
            "unit": "ns",
            "range": "± 5864.093815506048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4413989.6,
            "unit": "ns",
            "range": "± 25154.438585324402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3924359.533333333,
            "unit": "ns",
            "range": "± 46226.50820821111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22102.684210526317,
            "unit": "ns",
            "range": "± 1574.2366286698812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93401.82022471911,
            "unit": "ns",
            "range": "± 5155.24537719901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86743.51851851853,
            "unit": "ns",
            "range": "± 4427.670395114995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108458.28865979382,
            "unit": "ns",
            "range": "± 13691.456801717906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7053.391304347826,
            "unit": "ns",
            "range": "± 653.2299623102252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23304.64210526316,
            "unit": "ns",
            "range": "± 1670.772511577303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6014817.002790178,
            "unit": "ns",
            "range": "± 36185.657075662486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858669.4963942308,
            "unit": "ns",
            "range": "± 1300.39437433892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361820.9888020833,
            "unit": "ns",
            "range": "± 2374.426427258839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663428.1723958333,
            "unit": "ns",
            "range": "± 3007.890899998232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828175.3122395833,
            "unit": "ns",
            "range": "± 1155.0003319625678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753464.5119441106,
            "unit": "ns",
            "range": "± 271.56814982223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8731783.933333334,
            "unit": "ns",
            "range": "± 100228.84339170085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22011576.933333334,
            "unit": "ns",
            "range": "± 175449.25344972734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55871194.13333333,
            "unit": "ns",
            "range": "± 179703.37510379497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111661541.73333333,
            "unit": "ns",
            "range": "± 576151.3338686618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222463114.6,
            "unit": "ns",
            "range": "± 843744.6868925458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1482973.2117647058,
            "unit": "ns",
            "range": "± 77067.53732759556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683502.5,
            "unit": "ns",
            "range": "± 49755.0028452751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2350379.1375,
            "unit": "ns",
            "range": "± 116598.0819299372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5493285.578947368,
            "unit": "ns",
            "range": "± 117749.49526681907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50603.22222222222,
            "unit": "ns",
            "range": "± 3372.7166417545427"
          }
        ]
      }
    ]
  }
}