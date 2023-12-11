window.BENCHMARK_DATA = {
  "lastUpdate": 1702283175644,
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
          "id": "c440d85a5ce59c88ba6d826ce8d5b8de04a66844",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:33:28+09:00",
          "tree_id": "89f49ba453970fb5696b15c4ec9a17c3c6119325",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c440d85a5ce59c88ba6d826ce8d5b8de04a66844"
        },
        "date": 1702025129849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1095996.3157894737,
            "unit": "ns",
            "range": "± 159724.08444306641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1829251.5151515151,
            "unit": "ns",
            "range": "± 85288.0228626672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1661946.8085106383,
            "unit": "ns",
            "range": "± 128619.6290159457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7199684.2105263155,
            "unit": "ns",
            "range": "± 123288.68229195473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33988.15789473684,
            "unit": "ns",
            "range": "± 1630.9479538201626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5100380,
            "unit": "ns",
            "range": "± 30861.145243076862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12924193.333333334,
            "unit": "ns",
            "range": "± 125873.60137776914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32095471.42857143,
            "unit": "ns",
            "range": "± 253205.73401142348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63947292.85714286,
            "unit": "ns",
            "range": "± 393724.8736096071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127537514.28571428,
            "unit": "ns",
            "range": "± 1018680.2395989875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3232312.8645833335,
            "unit": "ns",
            "range": "± 12396.014131502592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039693.3872767857,
            "unit": "ns",
            "range": "± 2745.6330844473296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729271.3518415178,
            "unit": "ns",
            "range": "± 1955.2926247609828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966063.2291666667,
            "unit": "ns",
            "range": "± 5334.120892505054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618087.2591145834,
            "unit": "ns",
            "range": "± 2413.1011476138997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569164.6634615385,
            "unit": "ns",
            "range": "± 2105.695808485269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134471.875,
            "unit": "ns",
            "range": "± 66235.48524807821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284446.6666666665,
            "unit": "ns",
            "range": "± 35767.26090129006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2806657.6923076925,
            "unit": "ns",
            "range": "± 66284.03230387798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2814044.4444444445,
            "unit": "ns",
            "range": "± 113745.18968334718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8178054.166666667,
            "unit": "ns",
            "range": "± 322244.8315669798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172685.7142857143,
            "unit": "ns",
            "range": "± 8761.814794678132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160997.33333333334,
            "unit": "ns",
            "range": "± 7697.770356958466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138720,
            "unit": "ns",
            "range": "± 3678.8811705009807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2843355.5555555555,
            "unit": "ns",
            "range": "± 58701.84105963671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432778.5714285714,
            "unit": "ns",
            "range": "± 37607.92016770749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11519.791666666666,
            "unit": "ns",
            "range": "± 1728.9863042693187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56725,
            "unit": "ns",
            "range": "± 6427.588563127085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45653.60824742268,
            "unit": "ns",
            "range": "± 2827.582221604046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51654.76190476191,
            "unit": "ns",
            "range": "± 9318.596574125439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2538.7755102040815,
            "unit": "ns",
            "range": "± 524.9708196232648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10273.033707865168,
            "unit": "ns",
            "range": "± 1663.2227782875343"
          }
        ]
      },
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
          "id": "8ca63e083940b5c631d1b663ea3b013cbdbb5551",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:38:02+09:00",
          "tree_id": "a11bd8115244fd2a1cfc1570ca010fd21bad81ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ca63e083940b5c631d1b663ea3b013cbdbb5551"
        },
        "date": 1702025458819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046776.2886597938,
            "unit": "ns",
            "range": "± 143713.86848323236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1805845,
            "unit": "ns",
            "range": "± 79916.92810853709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699330,
            "unit": "ns",
            "range": "± 154371.67106785762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7019686.666666667,
            "unit": "ns",
            "range": "± 205751.68618462424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34915.730337078654,
            "unit": "ns",
            "range": "± 2573.9472197564446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5202646.666666667,
            "unit": "ns",
            "range": "± 84249.44990635732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13693535.714285715,
            "unit": "ns",
            "range": "± 182946.9221350316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33820100,
            "unit": "ns",
            "range": "± 289778.8778998964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65086356.25,
            "unit": "ns",
            "range": "± 1268958.5771903668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136919873.33333334,
            "unit": "ns",
            "range": "± 1528417.2165379203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3236071.328125,
            "unit": "ns",
            "range": "± 13785.530335052488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040309.5563616072,
            "unit": "ns",
            "range": "± 1793.840752882491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750519.7135416666,
            "unit": "ns",
            "range": "± 1908.9093585255873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933388.0989583333,
            "unit": "ns",
            "range": "± 6275.071469896674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599967.8515625,
            "unit": "ns",
            "range": "± 1468.0039443062924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553989.3484933035,
            "unit": "ns",
            "range": "± 996.399298313077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2279466.6666666665,
            "unit": "ns",
            "range": "± 66375.84902156306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321842.3076923075,
            "unit": "ns",
            "range": "± 53909.8371214525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2935914.705882353,
            "unit": "ns",
            "range": "± 92263.5721554318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2886766,
            "unit": "ns",
            "range": "± 115587.80496723198"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7857981.818181818,
            "unit": "ns",
            "range": "± 152458.15862022646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175495.2380952381,
            "unit": "ns",
            "range": "± 9388.186690741617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162556.25,
            "unit": "ns",
            "range": "± 8473.418507457993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142759.18367346938,
            "unit": "ns",
            "range": "± 5704.162163402664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2853476.6666666665,
            "unit": "ns",
            "range": "± 50582.83823402482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506215.3846153845,
            "unit": "ns",
            "range": "± 28946.929778298487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11613.483146067416,
            "unit": "ns",
            "range": "± 1013.9023410068057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59805.37634408602,
            "unit": "ns",
            "range": "± 6655.471198021608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47774.22680412371,
            "unit": "ns",
            "range": "± 5555.520496739322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61655.102040816324,
            "unit": "ns",
            "range": "± 19719.053125722017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2461.855670103093,
            "unit": "ns",
            "range": "± 492.1134902491736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10394.505494505494,
            "unit": "ns",
            "range": "± 1187.280986808153"
          }
        ]
      },
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
          "id": "e6cca178282eed916973331c457e46c790195670",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:02:29+09:00",
          "tree_id": "6b20c7740e828ee6028a2080b4ab98ddd351c7ea",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6cca178282eed916973331c457e46c790195670"
        },
        "date": 1702260915616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979100,
            "unit": "ns",
            "range": "± 117226.81747234239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739373.4375,
            "unit": "ns",
            "range": "± 77353.05319630042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489222.448979592,
            "unit": "ns",
            "range": "± 149879.40274479525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10969838.94736842,
            "unit": "ns",
            "range": "± 977936.650288557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34843.67816091954,
            "unit": "ns",
            "range": "± 2353.4586695263356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5168566.666666667,
            "unit": "ns",
            "range": "± 69176.7267497496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12852740,
            "unit": "ns",
            "range": "± 134375.96936527433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33252820,
            "unit": "ns",
            "range": "± 476357.1907118199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67190320,
            "unit": "ns",
            "range": "± 1009865.0745803337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131330828.57142857,
            "unit": "ns",
            "range": "± 1594735.960507652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301547.109375,
            "unit": "ns",
            "range": "± 17519.418424271396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060238.5416666667,
            "unit": "ns",
            "range": "± 6431.3839237311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733456.34765625,
            "unit": "ns",
            "range": "± 2772.1041600451945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928992.34375,
            "unit": "ns",
            "range": "± 4997.862009548329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615346.3588169643,
            "unit": "ns",
            "range": "± 1260.061015623471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570274.9674479166,
            "unit": "ns",
            "range": "± 2505.1021064946863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139487.5,
            "unit": "ns",
            "range": "± 64897.09844898132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2235460.8695652173,
            "unit": "ns",
            "range": "± 56119.82909267725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2661171.4285714286,
            "unit": "ns",
            "range": "± 30816.34003555278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2828709.523809524,
            "unit": "ns",
            "range": "± 65050.58727453508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12439574.468085106,
            "unit": "ns",
            "range": "± 1584079.5806510907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169321.66666666666,
            "unit": "ns",
            "range": "± 7518.769545625533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164132.0987654321,
            "unit": "ns",
            "range": "± 8328.322567607685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140688.46153846153,
            "unit": "ns",
            "range": "± 3734.389044872205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2814869.230769231,
            "unit": "ns",
            "range": "± 19355.248410331526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2526863.1578947366,
            "unit": "ns",
            "range": "± 55708.99798183729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10753.370786516854,
            "unit": "ns",
            "range": "± 1293.993943905514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51065.11627906977,
            "unit": "ns",
            "range": "± 2909.84201883116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44075.757575757576,
            "unit": "ns",
            "range": "± 1365.656962561953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53571.739130434784,
            "unit": "ns",
            "range": "± 8554.059843099714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2518.75,
            "unit": "ns",
            "range": "± 413.28275015895275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12886.734693877552,
            "unit": "ns",
            "range": "± 1706.3035199175133"
          }
        ]
      },
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
          "id": "877ad2c5d904f65958e433697945e48f44b288ef",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:35:05+09:00",
          "tree_id": "1fd77fd5532320aa9c70ccb82fefb0641c31ca3a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/877ad2c5d904f65958e433697945e48f44b288ef"
        },
        "date": 1702262833047,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961281.8181818182,
            "unit": "ns",
            "range": "± 92476.60086132365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1709549.3333333333,
            "unit": "ns",
            "range": "± 83924.06859828765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1441680.303030303,
            "unit": "ns",
            "range": "± 134931.1460501134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10478970.212765958,
            "unit": "ns",
            "range": "± 971215.3345087282"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34696.42857142857,
            "unit": "ns",
            "range": "± 1483.7255670916907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5053936.666666667,
            "unit": "ns",
            "range": "± 45800.122686464914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13361460,
            "unit": "ns",
            "range": "± 206519.96375307505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32868158.333333332,
            "unit": "ns",
            "range": "± 147588.8173783892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66042580,
            "unit": "ns",
            "range": "± 1397198.2267531352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129622493.33333333,
            "unit": "ns",
            "range": "± 901820.5091184535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354257.166466346,
            "unit": "ns",
            "range": "± 8793.731680535655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050948.4933035714,
            "unit": "ns",
            "range": "± 4916.062413840421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724322.5934709822,
            "unit": "ns",
            "range": "± 1404.2324334599966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923208.359375,
            "unit": "ns",
            "range": "± 2308.476483039611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610519.2592075893,
            "unit": "ns",
            "range": "± 1119.578731965084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566823.2046274039,
            "unit": "ns",
            "range": "± 1992.8094120203946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174089.4736842103,
            "unit": "ns",
            "range": "± 45482.8404118501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2261605.882352941,
            "unit": "ns",
            "range": "± 71667.15972138979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2797214.6341463416,
            "unit": "ns",
            "range": "± 89622.4066876571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2760440.3846153845,
            "unit": "ns",
            "range": "± 107030.48174879242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12358153.76344086,
            "unit": "ns",
            "range": "± 1567251.639818206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172104.6511627907,
            "unit": "ns",
            "range": "± 9847.447050189849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167619.1011235955,
            "unit": "ns",
            "range": "± 11180.369123078815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140061.53846153847,
            "unit": "ns",
            "range": "± 4153.7310675315175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2808880.9523809524,
            "unit": "ns",
            "range": "± 65286.42752554025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2514193.75,
            "unit": "ns",
            "range": "± 48450.93007363223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10323.333333333334,
            "unit": "ns",
            "range": "± 1100.0561783407327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54973.958333333336,
            "unit": "ns",
            "range": "± 7157.61272744903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44257.142857142855,
            "unit": "ns",
            "range": "± 1224.573326482646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58138.14432989691,
            "unit": "ns",
            "range": "± 11073.57443137875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2557.8947368421054,
            "unit": "ns",
            "range": "± 434.56482203058334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9514.285714285714,
            "unit": "ns",
            "range": "± 1194.0194888202368"
          }
        ]
      },
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
          "id": "5ff28f3a8565242adcacbd8c0e13bf9ae8b29a1a",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:48:51+09:00",
          "tree_id": "182fa8f84cdf2a96ea69c49606901ce7e259db39",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5ff28f3a8565242adcacbd8c0e13bf9ae8b29a1a"
        },
        "date": 1702263678909,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1090772.448979592,
            "unit": "ns",
            "range": "± 128649.9836971652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865976.404494382,
            "unit": "ns",
            "range": "± 110452.63590260998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633539.7959183673,
            "unit": "ns",
            "range": "± 142109.88977228833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11160806.593406593,
            "unit": "ns",
            "range": "± 860728.5652673292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36295.402298850575,
            "unit": "ns",
            "range": "± 2166.1727070431944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5219907.142857143,
            "unit": "ns",
            "range": "± 37251.462837269675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13165146.666666666,
            "unit": "ns",
            "range": "± 84954.13776744205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33183514.285714287,
            "unit": "ns",
            "range": "± 327550.86242067424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67512407.14285715,
            "unit": "ns",
            "range": "± 910396.4710830329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135994980,
            "unit": "ns",
            "range": "± 2006444.1386976826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309309.375,
            "unit": "ns",
            "range": "± 9840.678014579133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077912.7554086538,
            "unit": "ns",
            "range": "± 4365.125743912341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734581.4243861607,
            "unit": "ns",
            "range": "± 1794.8952423558592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963260.3665865385,
            "unit": "ns",
            "range": "± 3298.523781226935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619048.5630580357,
            "unit": "ns",
            "range": "± 1364.1627869484087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558168.3942522322,
            "unit": "ns",
            "range": "± 1133.9977691171619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2223986.0215053763,
            "unit": "ns",
            "range": "± 127539.8092936151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2379346.93877551,
            "unit": "ns",
            "range": "± 94837.45546556843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2928005.4054054054,
            "unit": "ns",
            "range": "± 97127.0415084913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3016113.888888889,
            "unit": "ns",
            "range": "± 100027.4338162937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12846942.105263159,
            "unit": "ns",
            "range": "± 1768212.520837522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184046.66666666666,
            "unit": "ns",
            "range": "± 6742.558187297378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187914.70588235295,
            "unit": "ns",
            "range": "± 8722.526415917742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151103.33333333334,
            "unit": "ns",
            "range": "± 6677.053208416313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2967069.230769231,
            "unit": "ns",
            "range": "± 32649.767345148233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2556192.8571428573,
            "unit": "ns",
            "range": "± 40164.76573557235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13537.5,
            "unit": "ns",
            "range": "± 1601.1714461605916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60276.666666666664,
            "unit": "ns",
            "range": "± 5180.192395889072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49364.83516483517,
            "unit": "ns",
            "range": "± 3289.8961019181684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72261.45833333333,
            "unit": "ns",
            "range": "± 13012.41002631651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3067.0103092783506,
            "unit": "ns",
            "range": "± 620.2690359641892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13588.421052631578,
            "unit": "ns",
            "range": "± 2191.660361456036"
          }
        ]
      },
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
          "id": "4048596eab12f95f6088be61103b97977f68ad2e",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T12:48:29+09:00",
          "tree_id": "2a0a44a1e8aa2d537fb4a3284472cc8b277ca6d5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4048596eab12f95f6088be61103b97977f68ad2e"
        },
        "date": 1702267254361,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975939.5833333334,
            "unit": "ns",
            "range": "± 108494.96372416911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749726.923076923,
            "unit": "ns",
            "range": "± 83898.73096741129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532348.4848484849,
            "unit": "ns",
            "range": "± 160419.341652596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10843915.957446808,
            "unit": "ns",
            "range": "± 872310.4026433631"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34458.02469135803,
            "unit": "ns",
            "range": "± 1828.9931791515014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4939920,
            "unit": "ns",
            "range": "± 48662.76370520453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13250403.333333334,
            "unit": "ns",
            "range": "± 109927.80661264314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32967407.692307692,
            "unit": "ns",
            "range": "± 285965.77435519116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65556442.85714286,
            "unit": "ns",
            "range": "± 781929.4810957017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132506991.30434783,
            "unit": "ns",
            "range": "± 3213342.069745093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3293489.2127403845,
            "unit": "ns",
            "range": "± 2947.1090193823466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035408.1881009615,
            "unit": "ns",
            "range": "± 3616.7581125891547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741352.9575892857,
            "unit": "ns",
            "range": "± 2287.3770625622406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1884437.03125,
            "unit": "ns",
            "range": "± 2776.953082611579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616323.4375,
            "unit": "ns",
            "range": "± 966.4070265554351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560814.7235576923,
            "unit": "ns",
            "range": "± 829.6779434734644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219919.565217391,
            "unit": "ns",
            "range": "± 78626.03362914352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2375300,
            "unit": "ns",
            "range": "± 29055.751008477935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759665,
            "unit": "ns",
            "range": "± 61228.478710998184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2737114.935064935,
            "unit": "ns",
            "range": "± 136646.47699565723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12187796.739130436,
            "unit": "ns",
            "range": "± 1477208.420008191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173318.66666666666,
            "unit": "ns",
            "range": "± 7932.735687989074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165756.98924731184,
            "unit": "ns",
            "range": "± 9666.036437033383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145457.14285714287,
            "unit": "ns",
            "range": "± 4679.070151108187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2848060,
            "unit": "ns",
            "range": "± 51390.310370730396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519392.8571428573,
            "unit": "ns",
            "range": "± 42771.81790143373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10406.451612903225,
            "unit": "ns",
            "range": "± 1180.4389798431937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53819.318181818184,
            "unit": "ns",
            "range": "± 4649.752383829701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45350,
            "unit": "ns",
            "range": "± 1979.5666724125044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59952.52525252525,
            "unit": "ns",
            "range": "± 13707.485988665385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2578.494623655914,
            "unit": "ns",
            "range": "± 423.45613765094834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10490,
            "unit": "ns",
            "range": "± 1024.2070103255494"
          }
        ]
      },
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
          "id": "4e15970ae2da214928f497d10b45ad0aadd42c94",
          "message": "Revive IWorldDelta",
          "timestamp": "2023-12-11T15:27:52+09:00",
          "tree_id": "44352e0952e51643da8174ef84c49b0f62021fcd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4e15970ae2da214928f497d10b45ad0aadd42c94"
        },
        "date": 1702276819635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005380.808080808,
            "unit": "ns",
            "range": "± 125829.70649284308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1735055.357142857,
            "unit": "ns",
            "range": "± 68126.55047681578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644348.9795918367,
            "unit": "ns",
            "range": "± 195257.68342652323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10826445.161290323,
            "unit": "ns",
            "range": "± 867162.8339285449"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34065.079365079364,
            "unit": "ns",
            "range": "± 1570.0995171006168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4907780,
            "unit": "ns",
            "range": "± 42570.7847506446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13453613.333333334,
            "unit": "ns",
            "range": "± 237676.8029629031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32896296.153846152,
            "unit": "ns",
            "range": "± 301207.3333972925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67119442.85714285,
            "unit": "ns",
            "range": "± 962207.6400846974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132310146.66666667,
            "unit": "ns",
            "range": "± 1848370.6102042056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3295573.074776786,
            "unit": "ns",
            "range": "± 16676.52874741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065800.4657451923,
            "unit": "ns",
            "range": "± 4551.242341248215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720806.8708147322,
            "unit": "ns",
            "range": "± 1659.7440128237845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932170.6640625,
            "unit": "ns",
            "range": "± 4071.3438860277083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611242.9617745535,
            "unit": "ns",
            "range": "± 1153.5312305002308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556493.310546875,
            "unit": "ns",
            "range": "± 1413.794753523373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113898.245614035,
            "unit": "ns",
            "range": "± 67644.59246476625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254845.238095238,
            "unit": "ns",
            "range": "± 65079.49061511173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817610.3448275863,
            "unit": "ns",
            "range": "± 81921.35751886677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2940224,
            "unit": "ns",
            "range": "± 363655.99326614133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12377090.217391305,
            "unit": "ns",
            "range": "± 1597859.315215808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188102.0202020202,
            "unit": "ns",
            "range": "± 17555.24213701946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168542.5287356322,
            "unit": "ns",
            "range": "± 9189.473656814136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145589.36170212767,
            "unit": "ns",
            "range": "± 5218.871860542493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2934235.714285714,
            "unit": "ns",
            "range": "± 35390.49431573523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2637540,
            "unit": "ns",
            "range": "± 46715.4425370088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13482.474226804125,
            "unit": "ns",
            "range": "± 2030.138044838246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71991.83673469388,
            "unit": "ns",
            "range": "± 8352.747229645347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48728.42105263158,
            "unit": "ns",
            "range": "± 4544.944892531461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71041.30434782608,
            "unit": "ns",
            "range": "± 10425.42488315304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3413.131313131313,
            "unit": "ns",
            "range": "± 959.1286931000708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12913.04347826087,
            "unit": "ns",
            "range": "± 2488.4885474593048"
          }
        ]
      },
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
          "id": "123fa7cc86917a72619dbcff6c111faa534de050",
          "message": "Revive IWorldDelta",
          "timestamp": "2023-12-11T17:12:12+09:00",
          "tree_id": "a27f4c1ca73c91e15125f40229d3bb7793f46e9c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/123fa7cc86917a72619dbcff6c111faa534de050"
        },
        "date": 1702283140141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044096,
            "unit": "ns",
            "range": "± 120330.15518341464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1963642.105263158,
            "unit": "ns",
            "range": "± 139833.33740864467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1738661.224489796,
            "unit": "ns",
            "range": "± 249579.53657881796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11202768.131868131,
            "unit": "ns",
            "range": "± 947374.0808594297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35202.22222222222,
            "unit": "ns",
            "range": "± 2569.963833863386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5466866.666666667,
            "unit": "ns",
            "range": "± 148087.4248024301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14075736.842105264,
            "unit": "ns",
            "range": "± 312800.97366026056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34543320,
            "unit": "ns",
            "range": "± 574468.1132516034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67459023.33333333,
            "unit": "ns",
            "range": "± 676767.4642494767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133803520,
            "unit": "ns",
            "range": "± 2191222.7060316284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3338674.774639423,
            "unit": "ns",
            "range": "± 10330.187279407824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073402.96875,
            "unit": "ns",
            "range": "± 4149.467115741722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751316.7578125,
            "unit": "ns",
            "range": "± 1965.26931043163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908612.1791294643,
            "unit": "ns",
            "range": "± 6018.404664210471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624111.767578125,
            "unit": "ns",
            "range": "± 1004.3494415062409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574967.7408854166,
            "unit": "ns",
            "range": "± 1419.0390423457318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2216098.1818181816,
            "unit": "ns",
            "range": "± 94280.06837571393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223320.512820513,
            "unit": "ns",
            "range": "± 66445.21755982292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2929929.411764706,
            "unit": "ns",
            "range": "± 56415.010909175166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2785926.1904761903,
            "unit": "ns",
            "range": "± 145198.15551871026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12720487.234042553,
            "unit": "ns",
            "range": "± 1663432.8168517551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188261.95652173914,
            "unit": "ns",
            "range": "± 11587.818939658519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174064.61538461538,
            "unit": "ns",
            "range": "± 8083.807711430585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150276.4705882353,
            "unit": "ns",
            "range": "± 6043.72693742178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2950200,
            "unit": "ns",
            "range": "± 42324.370139345345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532856.25,
            "unit": "ns",
            "range": "± 47746.99946942565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12309.302325581395,
            "unit": "ns",
            "range": "± 1679.7498348039626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64755,
            "unit": "ns",
            "range": "± 9748.259362884259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53283.87096774193,
            "unit": "ns",
            "range": "± 6405.114979156361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72777.55102040817,
            "unit": "ns",
            "range": "± 16771.272263072722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3437.3684210526317,
            "unit": "ns",
            "range": "± 1079.1290918442066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12517.391304347826,
            "unit": "ns",
            "range": "± 1749.6064672529149"
          }
        ]
      }
    ]
  }
}