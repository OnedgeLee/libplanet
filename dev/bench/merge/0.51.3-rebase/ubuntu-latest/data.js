window.BENCHMARK_DATA = {
  "lastUpdate": 1679986270026,
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
          "id": "f744e91d159caa20a6a50a25108624fe61221db5",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:37:19+09:00",
          "tree_id": "4ec1541a6ce11138de359316c6b5dcca63b4d153",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f744e91d159caa20a6a50a25108624fe61221db5"
        },
        "date": 1679986256776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3167787.6,
            "unit": "ns",
            "range": "± 34371.96698681728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5006492.933333334,
            "unit": "ns",
            "range": "± 39412.74462017632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23439766.6,
            "unit": "ns",
            "range": "± 310507.32965533313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5996384.95,
            "unit": "ns",
            "range": "± 113323.01512164476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26438335.933333334,
            "unit": "ns",
            "range": "± 476181.5182218506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7503608.8,
            "unit": "ns",
            "range": "± 14557.766023672726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19112366.2,
            "unit": "ns",
            "range": "± 131327.6923240922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49007907.583333336,
            "unit": "ns",
            "range": "± 429130.2664939567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98825141.73333333,
            "unit": "ns",
            "range": "± 999918.5080103468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196671543.53333333,
            "unit": "ns",
            "range": "± 2445444.6098726643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299032.957894737,
            "unit": "ns",
            "range": "± 91560.3082199849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2437443.8857142855,
            "unit": "ns",
            "range": "± 78012.75368838981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2066783.3333333333,
            "unit": "ns",
            "range": "± 91820.2660796507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4968569.151515151,
            "unit": "ns",
            "range": "± 145452.22069358404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45314.20338983051,
            "unit": "ns",
            "range": "± 1945.1377735058632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5781933.028385417,
            "unit": "ns",
            "range": "± 16389.34394842962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1962749.0973958333,
            "unit": "ns",
            "range": "± 2997.2527006477076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331220.7291165865,
            "unit": "ns",
            "range": "± 1233.1117606328346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2498449.2466145833,
            "unit": "ns",
            "range": "± 4609.333649859422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802217.2181919643,
            "unit": "ns",
            "range": "± 598.9212857991229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727771.560171274,
            "unit": "ns",
            "range": "± 491.72706521956667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190383.59375,
            "unit": "ns",
            "range": "± 5902.821549817675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193801.94736842104,
            "unit": "ns",
            "range": "± 4266.636737833627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156814.86956521738,
            "unit": "ns",
            "range": "± 2435.485714191652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11273180.333333334,
            "unit": "ns",
            "range": "± 72106.78011776967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9107420.333333334,
            "unit": "ns",
            "range": "± 43820.72955098937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17204.360824742267,
            "unit": "ns",
            "range": "± 1736.8091503384337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49899.31707317073,
            "unit": "ns",
            "range": "± 2633.7810349759025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38017,
            "unit": "ns",
            "range": "± 566.8843075812014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83548.75531914894,
            "unit": "ns",
            "range": "± 10857.602386560711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4287.421052631579,
            "unit": "ns",
            "range": "± 436.16038868569296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15696.902173913044,
            "unit": "ns",
            "range": "± 1251.2680694134583"
          }
        ]
      }
    ]
  }
}