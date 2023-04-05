window.BENCHMARK_DATA = {
  "lastUpdate": 1680700187055,
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
          "id": "b8713c10d1151a351bca80e47bab442ec7d4d01d",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-05T18:04:21+09:00",
          "tree_id": "8bc9dbf1522bd49a074c7a8329402bb202d926f2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b8713c10d1151a351bca80e47bab442ec7d4d01d"
        },
        "date": 1680686456359,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4029690.2258064514,
            "unit": "ns",
            "range": "± 226475.78092533856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6498000.611111111,
            "unit": "ns",
            "range": "± 131793.2890312075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29758251.5,
            "unit": "ns",
            "range": "± 693936.6937700098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7592218.368421053,
            "unit": "ns",
            "range": "± 164818.13713511647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33561592.64,
            "unit": "ns",
            "range": "± 880795.7948848435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10258483.611111112,
            "unit": "ns",
            "range": "± 214791.34448744022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27671956.04761905,
            "unit": "ns",
            "range": "± 634764.5909791657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67299667.73333333,
            "unit": "ns",
            "range": "± 1181027.7901012723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130660210.26666667,
            "unit": "ns",
            "range": "± 1497064.8306946908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257822602.46666667,
            "unit": "ns",
            "range": "± 2650760.00863857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691319.1041666667,
            "unit": "ns",
            "range": "± 145889.30671931262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3209431.6056338027,
            "unit": "ns",
            "range": "± 155871.0726928306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2674613.2023809524,
            "unit": "ns",
            "range": "± 138011.12562204746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6382555.05882353,
            "unit": "ns",
            "range": "± 202461.3115251437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56366.011494252874,
            "unit": "ns",
            "range": "± 3663.129204605508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7115666.392708333,
            "unit": "ns",
            "range": "± 28902.82726762766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165703.129166667,
            "unit": "ns",
            "range": "± 23430.436062153898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1603715.908984375,
            "unit": "ns",
            "range": "± 6701.31339335989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3066135.740625,
            "unit": "ns",
            "range": "± 27979.047348904878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983550.48515625,
            "unit": "ns",
            "range": "± 8684.898718848857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929771.260554387,
            "unit": "ns",
            "range": "± 6427.542897934441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242724.41666666666,
            "unit": "ns",
            "range": "± 8851.035926468225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235036.35483870967,
            "unit": "ns",
            "range": "± 10697.373733307544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215962.87037037036,
            "unit": "ns",
            "range": "± 9081.800983069748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14873274.333333334,
            "unit": "ns",
            "range": "± 103882.05850294614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12019750.266666668,
            "unit": "ns",
            "range": "± 128550.16267004581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24858.612903225807,
            "unit": "ns",
            "range": "± 1940.3197631601752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70064.66304347826,
            "unit": "ns",
            "range": "± 6202.480523424026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52112.882352941175,
            "unit": "ns",
            "range": "± 2929.9167240390843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121930.55208333333,
            "unit": "ns",
            "range": "± 13873.978475336511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7355.4375,
            "unit": "ns",
            "range": "± 813.2959817602497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24153.13186813187,
            "unit": "ns",
            "range": "± 2090.3549470460284"
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
          "id": "a9981583bfdeb1c619e0ec777ab5f4f562a25dc5",
          "message": "chore: change property ContextMinInterval to private member",
          "timestamp": "2023-04-05T18:38:32+09:00",
          "tree_id": "4278327d8d63aa06ecce6ab06273d0a7430c92e2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a9981583bfdeb1c619e0ec777ab5f4f562a25dc5"
        },
        "date": 1680688694276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4100495.06122449,
            "unit": "ns",
            "range": "± 288249.70456081704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6380007.125,
            "unit": "ns",
            "range": "± 409856.75145536166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 33502221.16161616,
            "unit": "ns",
            "range": "± 2449893.4558526757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8218399.76344086,
            "unit": "ns",
            "range": "± 584255.6119397347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38947360.303030305,
            "unit": "ns",
            "range": "± 1185935.3455986355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10563497.870588236,
            "unit": "ns",
            "range": "± 565357.8017909963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27210456.76190476,
            "unit": "ns",
            "range": "± 624884.2210993093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71149358.875,
            "unit": "ns",
            "range": "± 1358574.3122291532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143630803.66666666,
            "unit": "ns",
            "range": "± 1256818.2874234687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281481645.15384614,
            "unit": "ns",
            "range": "± 3935380.2030612165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1846021.7872340425,
            "unit": "ns",
            "range": "± 185089.02116414852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3369390.95,
            "unit": "ns",
            "range": "± 148883.44630177115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2838674.063829787,
            "unit": "ns",
            "range": "± 163752.55132726766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7298609.441558441,
            "unit": "ns",
            "range": "± 373247.26297845464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71441.46153846153,
            "unit": "ns",
            "range": "± 10619.433126017073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7593490.1875,
            "unit": "ns",
            "range": "± 107370.55703415473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2382425.0419270834,
            "unit": "ns",
            "range": "± 41388.67442575314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1708339.66796875,
            "unit": "ns",
            "range": "± 20492.67668129243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180693.20546875,
            "unit": "ns",
            "range": "± 58048.86879300011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1078395.123046875,
            "unit": "ns",
            "range": "± 22891.09601884965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1001930.2216796875,
            "unit": "ns",
            "range": "± 24311.52282027276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255725.98969072165,
            "unit": "ns",
            "range": "± 23907.765073774866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255921.6559139785,
            "unit": "ns",
            "range": "± 18481.95204228605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220690.81914893616,
            "unit": "ns",
            "range": "± 22102.728907546454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15687592.234042553,
            "unit": "ns",
            "range": "± 611923.791449777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12656779.45945946,
            "unit": "ns",
            "range": "± 419137.39109817985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28329.239130434784,
            "unit": "ns",
            "range": "± 6082.7659237264415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78865.02040816327,
            "unit": "ns",
            "range": "± 15908.175917115339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53548.81052631579,
            "unit": "ns",
            "range": "± 10164.047023695239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129931.14130434782,
            "unit": "ns",
            "range": "± 20685.25036310195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6489.978947368421,
            "unit": "ns",
            "range": "± 1218.8255681226574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28302.134831460673,
            "unit": "ns",
            "range": "± 5034.294891024532"
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
          "id": "bd5bdb72ed875f76826ca08e28d14fb4bc37afb1",
          "message": "fix: fix local variable startTime to be assigned safely",
          "timestamp": "2023-04-05T21:56:48+09:00",
          "tree_id": "54ced70a9219ac7cb8ec78d2f7c096ab7c0aae99",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bd5bdb72ed875f76826ca08e28d14fb4bc37afb1"
        },
        "date": 1680700173714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3282607.6,
            "unit": "ns",
            "range": "± 86969.57807474979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5151521.333333333,
            "unit": "ns",
            "range": "± 70201.85895245904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24272504.666666668,
            "unit": "ns",
            "range": "± 215308.97598788672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6293783.45,
            "unit": "ns",
            "range": "± 143355.8905376388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27565499.066666666,
            "unit": "ns",
            "range": "± 463438.2421663209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7865261.066666666,
            "unit": "ns",
            "range": "± 58041.50151088525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19988900.214285713,
            "unit": "ns",
            "range": "± 41745.6673978152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51079702.571428575,
            "unit": "ns",
            "range": "± 129444.19531253571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102179006.46666667,
            "unit": "ns",
            "range": "± 439949.6625751416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204036949.13333333,
            "unit": "ns",
            "range": "± 1021828.5122025729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367381.4020618557,
            "unit": "ns",
            "range": "± 104387.9045769771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508126.782608696,
            "unit": "ns",
            "range": "± 62614.687937021554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169009.845238095,
            "unit": "ns",
            "range": "± 113082.90931009865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5202209.514285714,
            "unit": "ns",
            "range": "± 170392.77519245513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45483.44117647059,
            "unit": "ns",
            "range": "± 2192.2488309465816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6224357.1578125,
            "unit": "ns",
            "range": "± 29727.18625014816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863193.4195033482,
            "unit": "ns",
            "range": "± 1472.3576271391603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373770.1751802885,
            "unit": "ns",
            "range": "± 876.6196046489887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649311.882552083,
            "unit": "ns",
            "range": "± 2225.4078171884366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826448.7012369792,
            "unit": "ns",
            "range": "± 889.6009701664743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751925.8479567308,
            "unit": "ns",
            "range": "± 567.4677418215241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199161.68421052632,
            "unit": "ns",
            "range": "± 6418.863047027932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204598.26315789475,
            "unit": "ns",
            "range": "± 4437.205099335307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173053.8775510204,
            "unit": "ns",
            "range": "± 6903.978390007742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11670312.285714285,
            "unit": "ns",
            "range": "± 71343.28010232106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9245437.142857144,
            "unit": "ns",
            "range": "± 65853.72128479107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19861.34375,
            "unit": "ns",
            "range": "± 1884.983757172096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54176.739130434784,
            "unit": "ns",
            "range": "± 3376.9539915239543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40281.71111111111,
            "unit": "ns",
            "range": "± 1523.1171628995558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93520.92783505155,
            "unit": "ns",
            "range": "± 12528.412786249288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4799.9375,
            "unit": "ns",
            "range": "± 630.1261830609385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18504,
            "unit": "ns",
            "range": "± 1509.9484676637146"
          }
        ]
      }
    ]
  }
}