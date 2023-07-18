window.BENCHMARK_DATA = {
  "lastUpdate": 1689641960450,
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
          "id": "8ef11111b196a865999fcbb79a1c449d92c74daa",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:31:07+09:00",
          "tree_id": "909aec0cf9c83ce9ea2d91206f536afb3dd729a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ef11111b196a865999fcbb79a1c449d92c74daa"
        },
        "date": 1689641505585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8437419.287878787,
            "unit": "ns",
            "range": "± 264057.6125401848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21566218.486111112,
            "unit": "ns",
            "range": "± 996085.7516357657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56241963.12264151,
            "unit": "ns",
            "range": "± 2338181.0599725326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107637509.22307692,
            "unit": "ns",
            "range": "± 5022938.074965042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216568553.2972973,
            "unit": "ns",
            "range": "± 10840214.300984077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72980.83673469388,
            "unit": "ns",
            "range": "± 8644.020496815026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349893.3695652174,
            "unit": "ns",
            "range": "± 30726.78953871403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334383.76804123714,
            "unit": "ns",
            "range": "± 49902.260319447516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325470.34444444446,
            "unit": "ns",
            "range": "± 24864.02090875109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283190.108695652,
            "unit": "ns",
            "range": "± 159337.1221195597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4191376.9318181816,
            "unit": "ns",
            "range": "± 448280.8652890954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24343.940476190477,
            "unit": "ns",
            "range": "± 2977.6274348871357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119701.98913043478,
            "unit": "ns",
            "range": "± 16868.593903304616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106989.60638297872,
            "unit": "ns",
            "range": "± 17704.015057776593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114253.05319148937,
            "unit": "ns",
            "range": "± 14448.493898045961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6088.425531914893,
            "unit": "ns",
            "range": "± 1083.1807451450286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21433.934065934067,
            "unit": "ns",
            "range": "± 4400.446620772836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630707.142857143,
            "unit": "ns",
            "range": "± 175452.41234539807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991546.0217391304,
            "unit": "ns",
            "range": "± 183044.6120612346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163282.457894737,
            "unit": "ns",
            "range": "± 197354.62510522458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6027930.242424242,
            "unit": "ns",
            "range": "± 280280.37715232227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3298951.598901099,
            "unit": "ns",
            "range": "± 177822.8002535767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3506477.0764705883,
            "unit": "ns",
            "range": "± 271209.73032219463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4482555.347826087,
            "unit": "ns",
            "range": "± 168482.7179940908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3888040.805263158,
            "unit": "ns",
            "range": "± 249711.7769028105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7784246.222222222,
            "unit": "ns",
            "range": "± 549994.2560631151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7708084.3121875,
            "unit": "ns",
            "range": "± 204685.6638938305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2043062.1372395833,
            "unit": "ns",
            "range": "± 28489.884496622126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364225.9022135416,
            "unit": "ns",
            "range": "± 18035.14873033194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645647.67265625,
            "unit": "ns",
            "range": "± 25314.51593231896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857383.0401785715,
            "unit": "ns",
            "range": "± 7163.547146270873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755766.7130208333,
            "unit": "ns",
            "range": "± 9730.228096350193"
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641669183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10118858.75,
            "unit": "ns",
            "range": "± 2083789.2119430965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27324709.31111111,
            "unit": "ns",
            "range": "± 6256082.880862254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54156056.725,
            "unit": "ns",
            "range": "± 1806241.9591309123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107588078.1,
            "unit": "ns",
            "range": "± 1734868.0124665226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224308177.5,
            "unit": "ns",
            "range": "± 3488407.995749207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68645.48958333333,
            "unit": "ns",
            "range": "± 10220.904919248167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339749.72826086957,
            "unit": "ns",
            "range": "± 37415.10108337532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375388.8469387755,
            "unit": "ns",
            "range": "± 56250.120681355445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342669.3820224719,
            "unit": "ns",
            "range": "± 31146.837111606466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5249489.045454546,
            "unit": "ns",
            "range": "± 582890.8739675785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4494163.939393939,
            "unit": "ns",
            "range": "± 421233.83127600956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27441.302197802197,
            "unit": "ns",
            "range": "± 5676.294889410757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128207.86597938144,
            "unit": "ns",
            "range": "± 19747.328876663334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135396.96315789473,
            "unit": "ns",
            "range": "± 21777.470391077713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134044.22448979592,
            "unit": "ns",
            "range": "± 22453.920165406435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8637.015789473684,
            "unit": "ns",
            "range": "± 1117.756813873575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23376.063218390806,
            "unit": "ns",
            "range": "± 3093.8875511395845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665410.5684210525,
            "unit": "ns",
            "range": "± 219436.397392136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911472.730769231,
            "unit": "ns",
            "range": "± 135398.19722890158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2102014.8659793814,
            "unit": "ns",
            "range": "± 214587.6770410344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5962866.948717949,
            "unit": "ns",
            "range": "± 305847.4792550466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3594697.15625,
            "unit": "ns",
            "range": "± 304122.66948255664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3691837.387755102,
            "unit": "ns",
            "range": "± 380365.58301874984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4727380.47368421,
            "unit": "ns",
            "range": "± 348852.9258835104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4313671.85106383,
            "unit": "ns",
            "range": "± 307616.78368618735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7920299.364583333,
            "unit": "ns",
            "range": "± 846425.4206651903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8144567.954799107,
            "unit": "ns",
            "range": "± 233513.17390116936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194681.640625,
            "unit": "ns",
            "range": "± 44138.84504649761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397956.4506835938,
            "unit": "ns",
            "range": "± 31499.575744000667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3179462.057350852,
            "unit": "ns",
            "range": "± 77416.08928279894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864987.7168666294,
            "unit": "ns",
            "range": "± 9057.09734069088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816942.5307942708,
            "unit": "ns",
            "range": "± 11958.17751392154"
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641934986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9031889,
            "unit": "ns",
            "range": "± 317092.0923277976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28492494.123655915,
            "unit": "ns",
            "range": "± 5277078.074765261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56295630.28571428,
            "unit": "ns",
            "range": "± 1834906.3659265875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107467156.62068966,
            "unit": "ns",
            "range": "± 3056844.7722116928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228811735.55882353,
            "unit": "ns",
            "range": "± 4490604.591383722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70585,
            "unit": "ns",
            "range": "± 10154.894506104312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369454.4895833333,
            "unit": "ns",
            "range": "± 35698.199026220915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 396250.2878787879,
            "unit": "ns",
            "range": "± 96360.44000218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340953.28723404254,
            "unit": "ns",
            "range": "± 19976.356730740812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4590921.730769231,
            "unit": "ns",
            "range": "± 212976.28619034158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4184195.6315789474,
            "unit": "ns",
            "range": "± 142491.47008252642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25519.40425531915,
            "unit": "ns",
            "range": "± 4843.285478052804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117438.45360824742,
            "unit": "ns",
            "range": "± 18734.813834043376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118259.13,
            "unit": "ns",
            "range": "± 19683.135490579374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127155.32978723405,
            "unit": "ns",
            "range": "± 16745.100837942617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8315.636842105263,
            "unit": "ns",
            "range": "± 2003.134026440452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22120.860824742267,
            "unit": "ns",
            "range": "± 5051.058142412602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702570.3453608248,
            "unit": "ns",
            "range": "± 162036.41188816304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3143581.547368421,
            "unit": "ns",
            "range": "± 180018.43459099077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161602.11827957,
            "unit": "ns",
            "range": "± 168525.59440075318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6124608.545454546,
            "unit": "ns",
            "range": "± 336842.68205427163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467215.7283950616,
            "unit": "ns",
            "range": "± 182087.65680133377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3586250.3421052634,
            "unit": "ns",
            "range": "± 238242.0424090162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4703618.137362638,
            "unit": "ns",
            "range": "± 323755.0970425885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014271.5217391304,
            "unit": "ns",
            "range": "± 238016.13379436507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7929908.483516484,
            "unit": "ns",
            "range": "± 552971.7226865797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7506089.820556641,
            "unit": "ns",
            "range": "± 232575.35992025153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2290047.8624441964,
            "unit": "ns",
            "range": "± 58558.069356683634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383421.10140625,
            "unit": "ns",
            "range": "± 36563.05674603742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2834980.286501736,
            "unit": "ns",
            "range": "± 157568.71856415932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864225.2865947002,
            "unit": "ns",
            "range": "± 43048.946568796564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893101.0919170673,
            "unit": "ns",
            "range": "± 41209.955111127165"
          }
        ]
      }
    ]
  }
}