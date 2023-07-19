window.BENCHMARK_DATA = {
  "lastUpdate": 1689752813138,
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
          "id": "f040cdf1aecb6f711eff50e1ce4583d091bf5061",
          "message": "Release 2.6.0",
          "timestamp": "2023-07-19T16:17:54+09:00",
          "tree_id": "6b5f9f2c1707a9486cea6187f894f6e0483f6c6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f040cdf1aecb6f711eff50e1ce4583d091bf5061"
        },
        "date": 1689752175811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322995.918367347,
            "unit": "ns",
            "range": "± 125313.48560266838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2415182.3529411764,
            "unit": "ns",
            "range": "± 66887.43357353065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1637358.6956521738,
            "unit": "ns",
            "range": "± 92161.10255771471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4488285.365853659,
            "unit": "ns",
            "range": "± 161783.5816159594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48493.10344827586,
            "unit": "ns",
            "range": "± 2663.002026191418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6981623.333333333,
            "unit": "ns",
            "range": "± 22529.360737448707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19244680,
            "unit": "ns",
            "range": "± 354705.0670224892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48866336.36363637,
            "unit": "ns",
            "range": "± 1156533.448982224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94924457.14285715,
            "unit": "ns",
            "range": "± 1676490.881717976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191576607.14285713,
            "unit": "ns",
            "range": "± 3245706.2210567663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4789313.958333333,
            "unit": "ns",
            "range": "± 19067.51685819026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508680.9635416667,
            "unit": "ns",
            "range": "± 6736.55300238547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173476.5364583333,
            "unit": "ns",
            "range": "± 8346.174292696482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663443.2942708335,
            "unit": "ns",
            "range": "± 7557.419343499368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847871.54296875,
            "unit": "ns",
            "range": "± 4536.583876621331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774608.2486979166,
            "unit": "ns",
            "range": "± 2332.0124462666104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3102220,
            "unit": "ns",
            "range": "± 92545.66962055676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347920,
            "unit": "ns",
            "range": "± 45240.44018985037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3895081.25,
            "unit": "ns",
            "range": "± 61375.40461509534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3551914.1791044776,
            "unit": "ns",
            "range": "± 153861.91044342576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6045405.555555556,
            "unit": "ns",
            "range": "± 198282.57894003473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256578.26086956522,
            "unit": "ns",
            "range": "± 9018.522003656408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247249.20634920636,
            "unit": "ns",
            "range": "± 11272.845949961878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214125,
            "unit": "ns",
            "range": "± 4760.23827355865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3961900,
            "unit": "ns",
            "range": "± 56247.10590845473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658988.2352941176,
            "unit": "ns",
            "range": "± 73197.8473245025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18411.224489795917,
            "unit": "ns",
            "range": "± 1469.8258998564802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81786.36363636363,
            "unit": "ns",
            "range": "± 4483.947917150685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71495.55555555556,
            "unit": "ns",
            "range": "± 2688.2704439468102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80834.21052631579,
            "unit": "ns",
            "range": "± 3775.3782196959264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4681.632653061224,
            "unit": "ns",
            "range": "± 653.8304169893885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17534.40860215054,
            "unit": "ns",
            "range": "± 1092.2150034852307"
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
          "id": "d4b7fb4ddff53907b8e97d43c7928e32147fd3bf",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:25:42+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d4b7fb4ddff53907b8e97d43c7928e32147fd3bf"
        },
        "date": 1689752549995,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363460.824742268,
            "unit": "ns",
            "range": "± 96063.20896149252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2530179.3103448274,
            "unit": "ns",
            "range": "± 110137.40183846066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1785129,
            "unit": "ns",
            "range": "± 130139.02689901374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4988735.542168675,
            "unit": "ns",
            "range": "± 265177.9628542763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47396.77419354839,
            "unit": "ns",
            "range": "± 2991.1627669615746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7064776.923076923,
            "unit": "ns",
            "range": "± 104772.65987083776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19744653.333333332,
            "unit": "ns",
            "range": "± 312105.57935843867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50147931.81818182,
            "unit": "ns",
            "range": "± 1219867.8801943553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100428241.1764706,
            "unit": "ns",
            "range": "± 2006250.0903610021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200310280,
            "unit": "ns",
            "range": "± 3190846.015490473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4840810.15625,
            "unit": "ns",
            "range": "± 23286.46476791765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579119.4893973214,
            "unit": "ns",
            "range": "± 7155.5476000050685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1214330.8872767857,
            "unit": "ns",
            "range": "± 6333.2734436783585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668789.765625,
            "unit": "ns",
            "range": "± 17866.169164505056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839202.7864583334,
            "unit": "ns",
            "range": "± 5133.736434811211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790142.7943638393,
            "unit": "ns",
            "range": "± 2528.795420682446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3156088.0597014925,
            "unit": "ns",
            "range": "± 148795.81344141826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3352393.9393939395,
            "unit": "ns",
            "range": "± 154650.87816288054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4048026.086956522,
            "unit": "ns",
            "range": "± 153003.33392850208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3751554.347826087,
            "unit": "ns",
            "range": "± 91455.80392269397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6295882.926829268,
            "unit": "ns",
            "range": "± 215587.3742852756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258324.39024390245,
            "unit": "ns",
            "range": "± 9310.579479490114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271771.05263157893,
            "unit": "ns",
            "range": "± 9380.37508311143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224116.8831168831,
            "unit": "ns",
            "range": "± 11275.782183131323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066931.25,
            "unit": "ns",
            "range": "± 76772.35369367457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3691992.3076923075,
            "unit": "ns",
            "range": "± 46249.08037893766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19607.44680851064,
            "unit": "ns",
            "range": "± 1950.4198258683293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84634.06593406593,
            "unit": "ns",
            "range": "± 5546.294454262428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77668.08510638298,
            "unit": "ns",
            "range": "± 7756.314982013423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115661.05263157895,
            "unit": "ns",
            "range": "± 17885.435027256724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5907.291666666667,
            "unit": "ns",
            "range": "± 1166.573461189169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20495.833333333332,
            "unit": "ns",
            "range": "± 2299.3782531104343"
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
          "id": "92d849c4a64513022b6a324844535877aba16760",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:24:44+09:00",
          "tree_id": "6b5f9f2c1707a9486cea6187f894f6e0483f6c6e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/92d849c4a64513022b6a324844535877aba16760"
        },
        "date": 1689752768828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535293.9393939395,
            "unit": "ns",
            "range": "± 165905.86082707206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906493.8775510206,
            "unit": "ns",
            "range": "± 339369.36657930457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2039127.8350515463,
            "unit": "ns",
            "range": "± 262826.83650642016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5857093.617021277,
            "unit": "ns",
            "range": "± 563881.6254194679"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58673.40425531915,
            "unit": "ns",
            "range": "± 13476.943078385622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7310527.551020408,
            "unit": "ns",
            "range": "± 594552.9729861958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19500441.666666668,
            "unit": "ns",
            "range": "± 1474283.389573365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53887488,
            "unit": "ns",
            "range": "± 5408231.118393106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113808762,
            "unit": "ns",
            "range": "± 10207403.590400906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219617948,
            "unit": "ns",
            "range": "± 22270926.391169835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5612685.435267857,
            "unit": "ns",
            "range": "± 158936.4530308681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1799196.5104166667,
            "unit": "ns",
            "range": "± 26826.516497306442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343705.7198660714,
            "unit": "ns",
            "range": "± 15359.639570279918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3074161.015625,
            "unit": "ns",
            "range": "± 35039.64754398901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901503.6044034091,
            "unit": "ns",
            "range": "± 21443.842229243015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845913.671875,
            "unit": "ns",
            "range": "± 23146.428525792122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594966.6666666665,
            "unit": "ns",
            "range": "± 334793.67176376143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3834146.93877551,
            "unit": "ns",
            "range": "± 509598.97093312436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5266063.157894737,
            "unit": "ns",
            "range": "± 502610.77302434965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4772944.086021505,
            "unit": "ns",
            "range": "± 396613.8995520777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8221945,
            "unit": "ns",
            "range": "± 363507.6771273317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351060.5263157895,
            "unit": "ns",
            "range": "± 36458.23455327097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325751.0416666667,
            "unit": "ns",
            "range": "± 34951.8405352028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282162.7659574468,
            "unit": "ns",
            "range": "± 50985.156988357216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462408.1632653065,
            "unit": "ns",
            "range": "± 347521.94373301533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824905.376344086,
            "unit": "ns",
            "range": "± 269468.59757581475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26344.897959183672,
            "unit": "ns",
            "range": "± 12522.337751912999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98690.52631578948,
            "unit": "ns",
            "range": "± 22863.83874288109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95387.23404255319,
            "unit": "ns",
            "range": "± 17058.830740871734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123795.91836734694,
            "unit": "ns",
            "range": "± 32136.910462836342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5479.120879120879,
            "unit": "ns",
            "range": "± 1047.167235239538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25616,
            "unit": "ns",
            "range": "± 10645.089160374526"
          }
        ]
      }
    ]
  }
}