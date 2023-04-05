window.BENCHMARK_DATA = {
  "lastUpdate": 1680685783344,
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
      },
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
          "id": "8e9373623dda52f70a71b0e207e8ba0a54cc5bce",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:55:41+09:00",
          "tree_id": "5620cd033e9926b29098aaba821eedbdffb8880b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8e9373623dda52f70a71b0e207e8ba0a54cc5bce"
        },
        "date": 1680685721419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452288.8387096776,
            "unit": "ns",
            "range": "± 90417.57049825245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5573795.230769231,
            "unit": "ns",
            "range": "± 148669.04687830826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25339588.85714286,
            "unit": "ns",
            "range": "± 245726.2097535063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6640078,
            "unit": "ns",
            "range": "± 102142.39578716987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28484146.454545453,
            "unit": "ns",
            "range": "± 691319.4421521052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7858039.666666667,
            "unit": "ns",
            "range": "± 175326.08523242493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21866145.533333335,
            "unit": "ns",
            "range": "± 332389.1815077764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54640397,
            "unit": "ns",
            "range": "± 610790.6568168134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108166343.46666667,
            "unit": "ns",
            "range": "± 847332.0412723917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217842234.07142857,
            "unit": "ns",
            "range": "± 1839314.1638343798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391864.244680851,
            "unit": "ns",
            "range": "± 79150.5526902753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2663955.3863636362,
            "unit": "ns",
            "range": "± 99485.67475333481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2216168.4827586208,
            "unit": "ns",
            "range": "± 114943.54308537758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5226035.421052632,
            "unit": "ns",
            "range": "± 114797.66983955137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49400.72580645161,
            "unit": "ns",
            "range": "± 2158.874981531002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900410.7109375,
            "unit": "ns",
            "range": "± 20940.59610690463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887609.3575520834,
            "unit": "ns",
            "range": "± 6192.761537822299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355848.5955636161,
            "unit": "ns",
            "range": "± 2934.0459419768786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611626.951729911,
            "unit": "ns",
            "range": "± 1268.4875832411851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825583.8870442709,
            "unit": "ns",
            "range": "± 432.49272305892316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760632.9027622768,
            "unit": "ns",
            "range": "± 299.4037012343538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201188.87719298244,
            "unit": "ns",
            "range": "± 8528.721056503673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197976.0487804878,
            "unit": "ns",
            "range": "± 5713.6928161707265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172585.86666666667,
            "unit": "ns",
            "range": "± 5107.342947326838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12178299.466666667,
            "unit": "ns",
            "range": "± 208731.07611944358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11225673.133333333,
            "unit": "ns",
            "range": "± 197947.60299233109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21076.28125,
            "unit": "ns",
            "range": "± 1775.4976038053167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60275.74736842105,
            "unit": "ns",
            "range": "± 4608.272900663293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41954.230769230766,
            "unit": "ns",
            "range": "± 413.59927342097563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97196.38383838384,
            "unit": "ns",
            "range": "± 14056.279493454285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5784.5,
            "unit": "ns",
            "range": "± 445.1463153899661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19449.229166666668,
            "unit": "ns",
            "range": "± 1864.0611266189558"
          }
        ]
      },
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
          "id": "d691091fdefe1e5b355fb7249865fb9e9bd40997",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T17:57:20+09:00",
          "tree_id": "c078d231aa751a9cdf4c606dcffdbdcee9df2826",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d691091fdefe1e5b355fb7249865fb9e9bd40997"
        },
        "date": 1680685770784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3236171.3333333335,
            "unit": "ns",
            "range": "± 48706.66523275062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5157745.615384615,
            "unit": "ns",
            "range": "± 68821.41984699538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23717682.727272727,
            "unit": "ns",
            "range": "± 582305.5497037846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6403163.214285715,
            "unit": "ns",
            "range": "± 96707.81969510697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28221041.53846154,
            "unit": "ns",
            "range": "± 403965.1360628405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7974783,
            "unit": "ns",
            "range": "± 29502.06288186835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19963820.866666667,
            "unit": "ns",
            "range": "± 41791.14903193646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48694609.13333333,
            "unit": "ns",
            "range": "± 472276.3723571592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97544889.23076923,
            "unit": "ns",
            "range": "± 565286.421751716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201925265.2,
            "unit": "ns",
            "range": "± 3519649.7693624734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1272481.085106383,
            "unit": "ns",
            "range": "± 82810.18808076197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2372363.6153846155,
            "unit": "ns",
            "range": "± 64888.91956756681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051747.3026315789,
            "unit": "ns",
            "range": "± 103706.89636406633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5168426.073170732,
            "unit": "ns",
            "range": "± 184879.51712891154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45328.316666666666,
            "unit": "ns",
            "range": "± 2017.3723931388747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431166.969270834,
            "unit": "ns",
            "range": "± 40390.428439923664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830105.2378305288,
            "unit": "ns",
            "range": "± 847.725801695754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363243.89296875,
            "unit": "ns",
            "range": "± 2190.6435597878726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571611.815848214,
            "unit": "ns",
            "range": "± 5419.865188156618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799445.4650530134,
            "unit": "ns",
            "range": "± 1331.283116984596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749882.8904157366,
            "unit": "ns",
            "range": "± 944.103760062704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186258.53658536586,
            "unit": "ns",
            "range": "± 6338.768634749027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185302.75,
            "unit": "ns",
            "range": "± 5901.624301229039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160465.38461538462,
            "unit": "ns",
            "range": "± 4248.194186493109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11224701,
            "unit": "ns",
            "range": "± 282636.8743233493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8953178,
            "unit": "ns",
            "range": "± 50013.72460250671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15730.10752688172,
            "unit": "ns",
            "range": "± 975.547220598082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50453.523255813954,
            "unit": "ns",
            "range": "± 2741.3951696031336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36871.42857142857,
            "unit": "ns",
            "range": "± 544.0992152576183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95260.22448979592,
            "unit": "ns",
            "range": "± 10853.862515993795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5083.505154639175,
            "unit": "ns",
            "range": "± 791.9754326433701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21203.114583333332,
            "unit": "ns",
            "range": "± 1483.9005135455939"
          }
        ]
      }
    ]
  }
}