window.BENCHMARK_DATA = {
  "lastUpdate": 1681831549266,
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
          "id": "da6ff26ce0559ec68832db40f698016be24c6e7f",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-16T17:37:15+09:00",
          "tree_id": "4ee86cb37cfb63efcf2c2049367b295996ac0623",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da6ff26ce0559ec68832db40f698016be24c6e7f"
        },
        "date": 1681635090742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8428274.4,
            "unit": "ns",
            "range": "± 152772.77627144736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22312241,
            "unit": "ns",
            "range": "± 263116.4502320489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56009624.733333334,
            "unit": "ns",
            "range": "± 240880.1071741075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112216677.86666666,
            "unit": "ns",
            "range": "± 455996.6398571166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223651240.8,
            "unit": "ns",
            "range": "± 515303.7653635822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52572.30588235294,
            "unit": "ns",
            "range": "± 2851.2095471067364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1908532.963414634,
            "unit": "ns",
            "range": "± 99822.27005594544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3148158.5,
            "unit": "ns",
            "range": "± 97566.46618554699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790034.3924050634,
            "unit": "ns",
            "range": "± 134324.02274966208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6233459.381818182,
            "unit": "ns",
            "range": "± 264833.5646165336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6030584.8359375,
            "unit": "ns",
            "range": "± 16864.728331675517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906069.37421875,
            "unit": "ns",
            "range": "± 2154.242323900541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366875.9170572916,
            "unit": "ns",
            "range": "± 2955.3752314623325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609942.6247209823,
            "unit": "ns",
            "range": "± 2225.986672210639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812890.9107840402,
            "unit": "ns",
            "range": "± 676.8874671483807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763477.5772235577,
            "unit": "ns",
            "range": "± 388.3920536141004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346092.7931034483,
            "unit": "ns",
            "range": "± 9701.691646965897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294518.1923076923,
            "unit": "ns",
            "range": "± 14362.336663755552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243471.2,
            "unit": "ns",
            "range": "± 7681.631298103288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5854792.533333333,
            "unit": "ns",
            "range": "± 48937.98382189831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4257795,
            "unit": "ns",
            "range": "± 67229.55869577438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23285.536842105263,
            "unit": "ns",
            "range": "± 2118.995028814097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100748.79787234042,
            "unit": "ns",
            "range": "± 6142.266097147492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91633.88,
            "unit": "ns",
            "range": "± 7315.55068907628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211050.2142857143,
            "unit": "ns",
            "range": "± 17619.060710333935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8109.234693877551,
            "unit": "ns",
            "range": "± 860.3778096155033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22206.489583333332,
            "unit": "ns",
            "range": "± 1821.5406434334163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4168484.04,
            "unit": "ns",
            "range": "± 84030.03286051957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4361641.733333333,
            "unit": "ns",
            "range": "± 52572.373112102294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5074570.071428572,
            "unit": "ns",
            "range": "± 88263.38320701485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5345744.428571428,
            "unit": "ns",
            "range": "± 92065.00688661772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8069007.05882353,
            "unit": "ns",
            "range": "± 158370.5536240365"
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
          "id": "823c5018d3a611af22cf99ac4137ce9b0b531e09",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-17T09:17:45+09:00",
          "tree_id": "967e97d2b4b7e8aea56d73e65a0351bb482fa642",
          "url": "https://github.com/OnedgeLee/libplanet/commit/823c5018d3a611af22cf99ac4137ce9b0b531e09"
        },
        "date": 1681691524201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7709886.266666667,
            "unit": "ns",
            "range": "± 125316.53007625283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21209552.333333332,
            "unit": "ns",
            "range": "± 290959.05416954827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52563572.84615385,
            "unit": "ns",
            "range": "± 685425.0060912143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105109353.06666666,
            "unit": "ns",
            "range": "± 1582747.838931551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211541264,
            "unit": "ns",
            "range": "± 1609845.0305258755"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49346.58888888889,
            "unit": "ns",
            "range": "± 2759.9803732181344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1795723.3294117646,
            "unit": "ns",
            "range": "± 95003.81594571524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033924.6666666665,
            "unit": "ns",
            "range": "± 53255.86313753453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2716927.2,
            "unit": "ns",
            "range": "± 114224.23572314062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6447473.368421053,
            "unit": "ns",
            "range": "± 369249.5462930718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6027850.579166667,
            "unit": "ns",
            "range": "± 27820.961734808956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837327.6317708334,
            "unit": "ns",
            "range": "± 7606.694364963976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354502.1126302083,
            "unit": "ns",
            "range": "± 4159.479449946685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614884.6096540177,
            "unit": "ns",
            "range": "± 3406.5287420767922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829463.1706891741,
            "unit": "ns",
            "range": "± 677.4426806121497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753243.7888371394,
            "unit": "ns",
            "range": "± 1054.3590348639657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339391.9,
            "unit": "ns",
            "range": "± 7620.397295209883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283453.76,
            "unit": "ns",
            "range": "± 6576.287518298857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238918.4090909091,
            "unit": "ns",
            "range": "± 5662.587534562277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5849118.714285715,
            "unit": "ns",
            "range": "± 40186.45269515313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4097825.214285714,
            "unit": "ns",
            "range": "± 66865.59882581749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20731,
            "unit": "ns",
            "range": "± 1840.6712822312325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89731.32978723405,
            "unit": "ns",
            "range": "± 5180.948745241899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82140.41836734694,
            "unit": "ns",
            "range": "± 5771.1640000911275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 195168.8775510204,
            "unit": "ns",
            "range": "± 15541.27744836697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6656.876288659794,
            "unit": "ns",
            "range": "± 743.8780037990654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19675.395833333332,
            "unit": "ns",
            "range": "± 1579.44934761032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3817708.6,
            "unit": "ns",
            "range": "± 144218.99100663804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4183622.074074074,
            "unit": "ns",
            "range": "± 115758.93082208053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4707649.761904762,
            "unit": "ns",
            "range": "± 109274.18584364049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5118782.408163265,
            "unit": "ns",
            "range": "± 204403.65041891971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7850041.137931035,
            "unit": "ns",
            "range": "± 228795.81579274128"
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
          "id": "2fbdbe119910ad6a3ffa96724d4c1abf5b29dd9b",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-17T10:47:23+09:00",
          "tree_id": "e1d8544394be1e50abc1f95fa9cb22f052c2f335",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2fbdbe119910ad6a3ffa96724d4c1abf5b29dd9b"
        },
        "date": 1681696882761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7596783.866666666,
            "unit": "ns",
            "range": "± 54143.72430045619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19482142.066666666,
            "unit": "ns",
            "range": "± 86017.33031485711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49812843,
            "unit": "ns",
            "range": "± 200528.61193547727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99327630.73333333,
            "unit": "ns",
            "range": "± 470892.8864266369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204011205.7142857,
            "unit": "ns",
            "range": "± 2955562.873860082"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45394.67391304348,
            "unit": "ns",
            "range": "± 3055.198416637826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1767365.103448276,
            "unit": "ns",
            "range": "± 95428.62620779878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2992892.1,
            "unit": "ns",
            "range": "± 68451.15360290447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2612473.265625,
            "unit": "ns",
            "range": "± 120286.74010433703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5782858.65,
            "unit": "ns",
            "range": "± 117923.17511046848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6198501.787388393,
            "unit": "ns",
            "range": "± 15935.497757583727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840459.138671875,
            "unit": "ns",
            "range": "± 1390.0694385919326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366293.2082868305,
            "unit": "ns",
            "range": "± 905.300452943485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552775.992745536,
            "unit": "ns",
            "range": "± 1047.1641784993494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822614.6690755208,
            "unit": "ns",
            "range": "± 6516.789457087338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723022.12890625,
            "unit": "ns",
            "range": "± 478.8837762816896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333413.9666666667,
            "unit": "ns",
            "range": "± 9723.846562156757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275093.9666666667,
            "unit": "ns",
            "range": "± 7309.460395590953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247083.92424242425,
            "unit": "ns",
            "range": "± 11540.345070578202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5701913.066666666,
            "unit": "ns",
            "range": "± 62692.630007119056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4018442.466666667,
            "unit": "ns",
            "range": "± 27450.11943993444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19326.581632653062,
            "unit": "ns",
            "range": "± 1699.0244618996485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89997.64556962025,
            "unit": "ns",
            "range": "± 4380.289734118037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76679.29166666667,
            "unit": "ns",
            "range": "± 1998.9302678131896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 189498.39583333334,
            "unit": "ns",
            "range": "± 14667.38264562719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5937.113402061856,
            "unit": "ns",
            "range": "± 765.1687705484852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19587.41052631579,
            "unit": "ns",
            "range": "± 1916.4482524042587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3839948.6666666665,
            "unit": "ns",
            "range": "± 56799.235032155986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4003825.3225806453,
            "unit": "ns",
            "range": "± 120293.0081574118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4734139.428571428,
            "unit": "ns",
            "range": "± 55139.53188009528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4805448.279069767,
            "unit": "ns",
            "range": "± 161611.30767344302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7755045,
            "unit": "ns",
            "range": "± 184058.69451682552"
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
          "id": "15fd07602c7c2c0e6ab5cb37ec490829c8ac2c01",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-19T00:01:03+09:00",
          "tree_id": "511c7f5f65d8fe7027913664618f68f9e9d87dad",
          "url": "https://github.com/OnedgeLee/libplanet/commit/15fd07602c7c2c0e6ab5cb37ec490829c8ac2c01"
        },
        "date": 1681831534910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8449685.516129032,
            "unit": "ns",
            "range": "± 452643.55727777525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20920850.208955225,
            "unit": "ns",
            "range": "± 940882.7200752804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51313995.2,
            "unit": "ns",
            "range": "± 543095.7564742282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104492865.22857143,
            "unit": "ns",
            "range": "± 3360459.5890858276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211243299.20833334,
            "unit": "ns",
            "range": "± 5307382.783460003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51898.57731958763,
            "unit": "ns",
            "range": "± 8814.963642431936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1858587.1063829786,
            "unit": "ns",
            "range": "± 149443.01593918438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3370097.7525773197,
            "unit": "ns",
            "range": "± 240496.78189336162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2845795.1938775512,
            "unit": "ns",
            "range": "± 287978.81743619917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6993689.648351648,
            "unit": "ns",
            "range": "± 453617.23620773235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6171700.103125,
            "unit": "ns",
            "range": "± 90382.61052976617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946244.8348958334,
            "unit": "ns",
            "range": "± 28251.33975165634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428615.423571135,
            "unit": "ns",
            "range": "± 30761.16102758961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2728501.552604167,
            "unit": "ns",
            "range": "± 36630.366633124424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901902.9678431919,
            "unit": "ns",
            "range": "± 15027.160667256498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825752.3670654297,
            "unit": "ns",
            "range": "± 15103.495481008931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 362970.60215053766,
            "unit": "ns",
            "range": "± 32982.38871208713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294687.0425531915,
            "unit": "ns",
            "range": "± 26878.756052371562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269944.63157894736,
            "unit": "ns",
            "range": "± 29531.524514492237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6019319.797101449,
            "unit": "ns",
            "range": "± 290688.2903135236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4105899.626506024,
            "unit": "ns",
            "range": "± 217426.15327057996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15192.814814814816,
            "unit": "ns",
            "range": "± 1202.2137716636662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85272.08695652174,
            "unit": "ns",
            "range": "± 9091.655235183109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71738.5,
            "unit": "ns",
            "range": "± 1024.9390225764653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97540.82978723405,
            "unit": "ns",
            "range": "± 15886.026429307349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8172.12,
            "unit": "ns",
            "range": "± 5552.093137518206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18798.19,
            "unit": "ns",
            "range": "± 5445.680979195507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3841444.125,
            "unit": "ns",
            "range": "± 246504.74716578668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4027672.338235294,
            "unit": "ns",
            "range": "± 192775.0605994528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5041598.976190476,
            "unit": "ns",
            "range": "± 180895.9511179094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5196860.701030928,
            "unit": "ns",
            "range": "± 341414.44529999525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8869509.974358974,
            "unit": "ns",
            "range": "± 303318.8566427717"
          }
        ]
      }
    ]
  }
}