window.BENCHMARK_DATA = {
  "lastUpdate": 1702260948206,
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
      }
    ]
  }
}