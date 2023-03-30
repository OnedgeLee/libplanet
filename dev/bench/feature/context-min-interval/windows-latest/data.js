window.BENCHMARK_DATA = {
  "lastUpdate": 1680159664868,
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
          "id": "23fe38423f0ca0a4e0651562690262ac04658dc4",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T13:54:50+09:00",
          "tree_id": "0501e9e753e591811ca8195fe422f2f2cb826f45",
          "url": "https://github.com/OnedgeLee/libplanet/commit/23fe38423f0ca0a4e0651562690262ac04658dc4"
        },
        "date": 1680153320414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628856.9892473118,
            "unit": "ns",
            "range": "± 149507.61969665147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945204.1666666665,
            "unit": "ns",
            "range": "± 74118.65035003096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559293.6842105263,
            "unit": "ns",
            "range": "± 172214.18122502454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5849976.923076923,
            "unit": "ns",
            "range": "± 92434.55481083319"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58546.23655913978,
            "unit": "ns",
            "range": "± 4673.1555101122385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8717759.45945946,
            "unit": "ns",
            "range": "± 288643.10090438626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23217337.037037037,
            "unit": "ns",
            "range": "± 626478.5189688029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59751291.666666664,
            "unit": "ns",
            "range": "± 1488093.5743475587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118240992.85714285,
            "unit": "ns",
            "range": "± 1693622.1549658615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239325763.63636363,
            "unit": "ns",
            "range": "± 5849029.609426512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5843412.109375,
            "unit": "ns",
            "range": "± 86298.82718700492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880612.1223958333,
            "unit": "ns",
            "range": "± 21589.655753197425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442755.2083333333,
            "unit": "ns",
            "range": "± 13043.729364566521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3262074.6223958335,
            "unit": "ns",
            "range": "± 44626.82736636575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038097.9910714285,
            "unit": "ns",
            "range": "± 17341.866045411367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933469.5638020834,
            "unit": "ns",
            "range": "± 11314.217786707739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3849966.6666666665,
            "unit": "ns",
            "range": "± 99299.37022728912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5942553.333333333,
            "unit": "ns",
            "range": "± 166790.3696329583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28328832.258064516,
            "unit": "ns",
            "range": "± 852943.4195330492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7394023.529411765,
            "unit": "ns",
            "range": "± 149003.71442271062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31249561.53846154,
            "unit": "ns",
            "range": "± 438807.9810472563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215728.57142857142,
            "unit": "ns",
            "range": "± 10456.12146976479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218098.50746268657,
            "unit": "ns",
            "range": "± 10332.978867879017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198681.39534883722,
            "unit": "ns",
            "range": "± 10787.79824483533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13517860,
            "unit": "ns",
            "range": "± 242950.62637734207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10801306.666666666,
            "unit": "ns",
            "range": "± 162912.5245850259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25222.340425531915,
            "unit": "ns",
            "range": "± 2022.1969451601076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67219.56521739131,
            "unit": "ns",
            "range": "± 5228.687544237119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53954.255319148935,
            "unit": "ns",
            "range": "± 3498.7836563434644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124246.8085106383,
            "unit": "ns",
            "range": "± 18926.681980213594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8539.583333333334,
            "unit": "ns",
            "range": "± 1104.581765734426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24728.125,
            "unit": "ns",
            "range": "± 2135.006625159202"
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
          "id": "b2ec5298ae32ef3401423877301164d08efbfa8e",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T14:37:27+09:00",
          "tree_id": "2b3d6df6add38815a8901dd4f3032bfb80548b4d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b2ec5298ae32ef3401423877301164d08efbfa8e"
        },
        "date": 1680155618187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404064.5833333333,
            "unit": "ns",
            "range": "± 110482.16810552844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571483.6363636362,
            "unit": "ns",
            "range": "± 108103.4514192503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217891.5789473685,
            "unit": "ns",
            "range": "± 141205.95540990858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5262909.090909091,
            "unit": "ns",
            "range": "± 223974.3679719121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54224.489795918365,
            "unit": "ns",
            "range": "± 5171.97167182126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7299558.620689655,
            "unit": "ns",
            "range": "± 212773.61631092694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19919000,
            "unit": "ns",
            "range": "± 261154.2155235375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48566461.538461536,
            "unit": "ns",
            "range": "± 533859.5844390506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100704260,
            "unit": "ns",
            "range": "± 1387843.6968395046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195249095.45454547,
            "unit": "ns",
            "range": "± 4778996.415614323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897202.794471154,
            "unit": "ns",
            "range": "± 19922.06675628082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533315.4817708333,
            "unit": "ns",
            "range": "± 11378.202989636526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165471.09375,
            "unit": "ns",
            "range": "± 9752.674285731671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626200.5108173075,
            "unit": "ns",
            "range": "± 4440.465525100436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836455.2278645834,
            "unit": "ns",
            "range": "± 5851.774256713716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763878.6342075893,
            "unit": "ns",
            "range": "± 3424.138507775608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247735.4166666665,
            "unit": "ns",
            "range": "± 125719.6145592607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5034628,
            "unit": "ns",
            "range": "± 201207.3760566243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24046150,
            "unit": "ns",
            "range": "± 583639.3094809743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6360588.888888889,
            "unit": "ns",
            "range": "± 165303.65144027272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27789656.25,
            "unit": "ns",
            "range": "± 850742.8070989758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196917.70833333334,
            "unit": "ns",
            "range": "± 12506.924354062658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192916.39344262294,
            "unit": "ns",
            "range": "± 8716.673301358895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174936,
            "unit": "ns",
            "range": "± 14443.603456481378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11241578.57142857,
            "unit": "ns",
            "range": "± 182412.78707949695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8968412.5,
            "unit": "ns",
            "range": "± 230193.57697476007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25568.367346938776,
            "unit": "ns",
            "range": "± 3839.8237969339307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59710.416666666664,
            "unit": "ns",
            "range": "± 6052.7241220995365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43278.260869565216,
            "unit": "ns",
            "range": "± 3680.17636005251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114812.90322580645,
            "unit": "ns",
            "range": "± 17872.21079367565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8101.0526315789475,
            "unit": "ns",
            "range": "± 1161.116001759029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23140.625,
            "unit": "ns",
            "range": "± 3480.247363410583"
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
          "id": "c20c237da9a315ffb10202910249c40668f954d3",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-03-30T15:38:55+09:00",
          "tree_id": "473b44237d5bc6d9231947d00dfe460c9d988801",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c20c237da9a315ffb10202910249c40668f954d3"
        },
        "date": 1680159624867,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1673625,
            "unit": "ns",
            "range": "± 163827.54711069714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3081811.7021276597,
            "unit": "ns",
            "range": "± 176722.40540255545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2579015.053763441,
            "unit": "ns",
            "range": "± 194011.60260364332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6185126.666666667,
            "unit": "ns",
            "range": "± 155185.75061970833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56722.82608695652,
            "unit": "ns",
            "range": "± 6235.173239939628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9151353.125,
            "unit": "ns",
            "range": "± 278580.9524836426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24325450,
            "unit": "ns",
            "range": "± 557561.8497671711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60894886.666666664,
            "unit": "ns",
            "range": "± 823270.3599206093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122917692.85714285,
            "unit": "ns",
            "range": "± 2133489.11138693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246886616.66666666,
            "unit": "ns",
            "range": "± 5261902.764685034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955028.292410715,
            "unit": "ns",
            "range": "± 43867.07661595789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953001.8229166667,
            "unit": "ns",
            "range": "± 21544.058382879815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400071.5262276786,
            "unit": "ns",
            "range": "± 16433.81896961015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3114079.6354166665,
            "unit": "ns",
            "range": "± 46005.49020994146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002825.9626116072,
            "unit": "ns",
            "range": "± 8931.686367696653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 940059.7005208334,
            "unit": "ns",
            "range": "± 14585.646851961823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3954139.5833333335,
            "unit": "ns",
            "range": "± 153730.93203273206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6256281.818181818,
            "unit": "ns",
            "range": "± 172340.72983218712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28762973.684210528,
            "unit": "ns",
            "range": "± 626016.8562179503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7443486.666666667,
            "unit": "ns",
            "range": "± 120851.41920478024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32631836.363636363,
            "unit": "ns",
            "range": "± 777168.6165914824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225939.2405063291,
            "unit": "ns",
            "range": "± 11707.409638404864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223640.50632911394,
            "unit": "ns",
            "range": "± 11620.59973503444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211640,
            "unit": "ns",
            "range": "± 7544.391702042395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13736830.76923077,
            "unit": "ns",
            "range": "± 148173.3016021858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11070322.5,
            "unit": "ns",
            "range": "± 391470.67905233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23178.72340425532,
            "unit": "ns",
            "range": "± 3974.0521921456902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60771.42857142857,
            "unit": "ns",
            "range": "± 6566.265397457011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48314.583333333336,
            "unit": "ns",
            "range": "± 7175.557622441788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126269.89247311828,
            "unit": "ns",
            "range": "± 20394.216917645168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9164.583333333334,
            "unit": "ns",
            "range": "± 1646.1105140789925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20835.78947368421,
            "unit": "ns",
            "range": "± 3559.312502032107"
          }
        ]
      }
    ]
  }
}