window.BENCHMARK_DATA = {
  "lastUpdate": 1680685203371,
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
          "id": "a51c482f4e17044007e75869872dba7a252b5f32",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:44:41+09:00",
          "tree_id": "e940990a794e091ec51fad4900f4bc53006d0141",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a51c482f4e17044007e75869872dba7a252b5f32"
        },
        "date": 1680685190299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3511020.7,
            "unit": "ns",
            "range": "± 79314.26124441536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5746869.8125,
            "unit": "ns",
            "range": "± 166586.66488249708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26129451.666666668,
            "unit": "ns",
            "range": "± 252676.4281802962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6979133.625,
            "unit": "ns",
            "range": "± 93558.59406872607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29065127.625,
            "unit": "ns",
            "range": "± 567425.5830155322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8099091.894736842,
            "unit": "ns",
            "range": "± 177373.9040228907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21700917.769230768,
            "unit": "ns",
            "range": "± 120384.75555218349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55020253,
            "unit": "ns",
            "range": "± 531280.0701257832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108995409.33333333,
            "unit": "ns",
            "range": "± 472018.629218422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221840839.46666667,
            "unit": "ns",
            "range": "± 938979.2308026282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446150.5063291139,
            "unit": "ns",
            "range": "± 73999.23290158078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2673151.72,
            "unit": "ns",
            "range": "± 68848.02543677876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2298002.0454545454,
            "unit": "ns",
            "range": "± 125903.16672963249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5374800.586206896,
            "unit": "ns",
            "range": "± 148576.98442642868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51662.10989010989,
            "unit": "ns",
            "range": "± 2934.8878587342215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961706.778459822,
            "unit": "ns",
            "range": "± 33912.21997900512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873641.0220052083,
            "unit": "ns",
            "range": "± 10941.602662780884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370051.6364583333,
            "unit": "ns",
            "range": "± 2983.9027652129225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619523.998604911,
            "unit": "ns",
            "range": "± 4251.937839010236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824938.6613420759,
            "unit": "ns",
            "range": "± 1819.8840070475658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767026.5306640625,
            "unit": "ns",
            "range": "± 1698.7496716138335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213990.43103448275,
            "unit": "ns",
            "range": "± 9401.35494734868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212329.96296296295,
            "unit": "ns",
            "range": "± 8911.217423049813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183794.89285714287,
            "unit": "ns",
            "range": "± 7906.26952068839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12332471.266666668,
            "unit": "ns",
            "range": "± 123740.67233617863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10304907.57142857,
            "unit": "ns",
            "range": "± 37665.48725029583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23621.795698924732,
            "unit": "ns",
            "range": "± 1949.9923275163428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61386.454545454544,
            "unit": "ns",
            "range": "± 5256.423179141775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46004.48,
            "unit": "ns",
            "range": "± 2319.556495120146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106570.44897959183,
            "unit": "ns",
            "range": "± 16053.388164151407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6577.412371134021,
            "unit": "ns",
            "range": "± 810.6525117739171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22137.55319148936,
            "unit": "ns",
            "range": "± 1707.569703654632"
          }
        ]
      }
    ]
  }
}