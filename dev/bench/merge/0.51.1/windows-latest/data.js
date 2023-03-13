window.BENCHMARK_DATA = {
  "lastUpdate": 1678697143939,
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
          "id": "e2e3b0918ea906a8252bb4046be907ee1fb5e24c",
          "message": "Merge tag '0.51.1'\n\nLibplanet 0.51.1",
          "timestamp": "2023-03-13T15:38:32+09:00",
          "tree_id": "6d24838bc6e9bee1c1969a025d8f4a1df614b267",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2e3b0918ea906a8252bb4046be907ee1fb5e24c"
        },
        "date": 1678691039445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472370.4545454546,
            "unit": "ns",
            "range": "± 192224.8044318721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922778.350515464,
            "unit": "ns",
            "range": "± 261560.64554372642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2492343.835616438,
            "unit": "ns",
            "range": "± 121666.39153656262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6227644.329896907,
            "unit": "ns",
            "range": "± 380908.1675113965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51920.43010752688,
            "unit": "ns",
            "range": "± 6622.910813160908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9545601.388888888,
            "unit": "ns",
            "range": "± 469790.89039940864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24475953.44827586,
            "unit": "ns",
            "range": "± 1067191.2898812597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59803560.97560976,
            "unit": "ns",
            "range": "± 1992943.3598170883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 117569813.51351352,
            "unit": "ns",
            "range": "± 3934778.7230712906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223723861,
            "unit": "ns",
            "range": "± 15820589.138635553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5743960.074869792,
            "unit": "ns",
            "range": "± 329959.49337052816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876494.9765625,
            "unit": "ns",
            "range": "± 48086.50778603037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370168.1803385417,
            "unit": "ns",
            "range": "± 53255.84423362025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252250.9635416665,
            "unit": "ns",
            "range": "± 31843.441378422547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1111135.8333333333,
            "unit": "ns",
            "range": "± 12337.742613877152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937656.1848958334,
            "unit": "ns",
            "range": "± 7676.59135402853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3654852.0833333335,
            "unit": "ns",
            "range": "± 243451.85452014586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5610513.636363637,
            "unit": "ns",
            "range": "± 135536.20600610058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26589145,
            "unit": "ns",
            "range": "± 610102.2386064746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6955830.303030303,
            "unit": "ns",
            "range": "± 207675.3874512584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31910098.4375,
            "unit": "ns",
            "range": "± 1463228.348765987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201887.03703703705,
            "unit": "ns",
            "range": "± 8522.357860829146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212205.37634408602,
            "unit": "ns",
            "range": "± 21142.43808485774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171107.14285714287,
            "unit": "ns",
            "range": "± 2157.0864558524254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11477982.653061224,
            "unit": "ns",
            "range": "± 1096581.070759261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10128263.265306123,
            "unit": "ns",
            "range": "± 589432.092813678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21923.595505617977,
            "unit": "ns",
            "range": "± 2122.0713761403304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58065.9793814433,
            "unit": "ns",
            "range": "± 7715.594147001066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49663.04347826087,
            "unit": "ns",
            "range": "± 4822.719067795684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119504.1237113402,
            "unit": "ns",
            "range": "± 19798.536969968332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7682.828282828283,
            "unit": "ns",
            "range": "± 1490.037693266578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24303.061224489797,
            "unit": "ns",
            "range": "± 4484.669282514877"
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
          "id": "e2d2936a43be63f056cf8e71638bc3c9c2c7c75e",
          "message": "Release 0.51.1",
          "timestamp": "2023-03-13T17:21:45+09:00",
          "tree_id": "1296bb363dfb2f87c79e21d00e3da59a59a1b825",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e2d2936a43be63f056cf8e71638bc3c9c2c7c75e"
        },
        "date": 1678696899366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466048.9583333333,
            "unit": "ns",
            "range": "± 160358.1734380172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2878580.2083333335,
            "unit": "ns",
            "range": "± 242943.8542976726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315424,
            "unit": "ns",
            "range": "± 285382.692070373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5902987.368421053,
            "unit": "ns",
            "range": "± 429876.9718216779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52154.83870967742,
            "unit": "ns",
            "range": "± 7567.730636364656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8044113.402061855,
            "unit": "ns",
            "range": "± 456922.78515012487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20421352.040816326,
            "unit": "ns",
            "range": "± 1301618.4516422567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50963128.39506173,
            "unit": "ns",
            "range": "± 2681567.6337841353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102634360.60606061,
            "unit": "ns",
            "range": "± 4563064.228711593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 207603384.84848484,
            "unit": "ns",
            "range": "± 6500595.018540669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5446290.673828125,
            "unit": "ns",
            "range": "± 98786.76866342638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1734711.1122532894,
            "unit": "ns",
            "range": "± 38020.26018871251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286324.4710286458,
            "unit": "ns",
            "range": "± 30923.31963041311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2892564.9479166665,
            "unit": "ns",
            "range": "± 50112.93630833085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934485.9130859375,
            "unit": "ns",
            "range": "± 18278.324908935505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874113.4068080357,
            "unit": "ns",
            "range": "± 7932.55183120032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371880.2083333335,
            "unit": "ns",
            "range": "± 282848.784826541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5370486.597938145,
            "unit": "ns",
            "range": "± 454735.30364489375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26173659.595959596,
            "unit": "ns",
            "range": "± 1674574.6460177728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6399390.816326531,
            "unit": "ns",
            "range": "± 396895.18133423716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30476025.773195878,
            "unit": "ns",
            "range": "± 2166705.557228452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192547.87234042553,
            "unit": "ns",
            "range": "± 21156.136041313915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188076.3440860215,
            "unit": "ns",
            "range": "± 19634.936685992307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165656.3829787234,
            "unit": "ns",
            "range": "± 18141.38948876113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12129942.857142856,
            "unit": "ns",
            "range": "± 962626.8436970712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9378067.010309279,
            "unit": "ns",
            "range": "± 613209.7854598188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21801,
            "unit": "ns",
            "range": "± 6861.273183380013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55340,
            "unit": "ns",
            "range": "± 10490.506346418904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40362.886597938144,
            "unit": "ns",
            "range": "± 8484.708298703576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96318.08510638298,
            "unit": "ns",
            "range": "± 17249.316413233937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7889.89898989899,
            "unit": "ns",
            "range": "± 5155.708050296965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21450,
            "unit": "ns",
            "range": "± 6553.871552237832"
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
          "id": "c4188eaf019c71dcd06d2bbd0a5833045e737a31",
          "message": "Merge tag '0.51.1'\n\nLibplanet 0.51.1",
          "timestamp": "2023-03-13T17:28:00+09:00",
          "tree_id": "49d0d5313e846d8a0a998dd5a33189bc7e9b128f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c4188eaf019c71dcd06d2bbd0a5833045e737a31"
        },
        "date": 1678697109638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1276894,
            "unit": "ns",
            "range": "± 92706.12722060189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462663.6363636362,
            "unit": "ns",
            "range": "± 91677.63311940552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2049834.0206185568,
            "unit": "ns",
            "range": "± 126037.3455622363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5039583.720930233,
            "unit": "ns",
            "range": "± 186831.872383183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46435.82089552239,
            "unit": "ns",
            "range": "± 2194.1175828645896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6941540,
            "unit": "ns",
            "range": "± 72514.66649680503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19259580,
            "unit": "ns",
            "range": "± 310934.4836824265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47705907.692307696,
            "unit": "ns",
            "range": "± 1259821.5330507974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93921706.66666667,
            "unit": "ns",
            "range": "± 1226011.204485428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191239011.1111111,
            "unit": "ns",
            "range": "± 4032812.0470619635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4678364.713541667,
            "unit": "ns",
            "range": "± 18434.977942730955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1483072.265625,
            "unit": "ns",
            "range": "± 5537.995568138324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159968.0598958333,
            "unit": "ns",
            "range": "± 9472.551018799088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599703.2552083335,
            "unit": "ns",
            "range": "± 12593.978102532956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819636.640625,
            "unit": "ns",
            "range": "± 2299.103284619357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751297.8255208334,
            "unit": "ns",
            "range": "± 2001.8834535277833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3034022.6415094337,
            "unit": "ns",
            "range": "± 125386.35007526114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4839364.285714285,
            "unit": "ns",
            "range": "± 176786.40387716139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21989181.25,
            "unit": "ns",
            "range": "± 430553.5154019765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5881547.540983606,
            "unit": "ns",
            "range": "± 264825.8255322778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25652056.52173913,
            "unit": "ns",
            "range": "± 641928.3469119977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178384.74576271186,
            "unit": "ns",
            "range": "± 7901.04343958752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181097.14285714287,
            "unit": "ns",
            "range": "± 5575.286102618449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159195.58823529413,
            "unit": "ns",
            "range": "± 7579.615904566342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10502480,
            "unit": "ns",
            "range": "± 237433.79043873528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8546636.842105264,
            "unit": "ns",
            "range": "± 189492.1171345667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19501.041666666668,
            "unit": "ns",
            "range": "± 1518.690210721183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48624.72527472527,
            "unit": "ns",
            "range": "± 3813.4147254307213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38547.36842105263,
            "unit": "ns",
            "range": "± 1339.9751595328203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89393.10344827586,
            "unit": "ns",
            "range": "± 10178.954498140783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5638.659793814433,
            "unit": "ns",
            "range": "± 661.1032900670339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19336.082474226805,
            "unit": "ns",
            "range": "± 2004.0680277360373"
          }
        ]
      }
    ]
  }
}