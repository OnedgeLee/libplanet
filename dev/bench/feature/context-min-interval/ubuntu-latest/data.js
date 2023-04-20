window.BENCHMARK_DATA = {
  "lastUpdate": 1681950792337,
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
        "date": 1680152921973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268550.2045454546,
            "unit": "ns",
            "range": "± 120216.63289411765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5124115.055555556,
            "unit": "ns",
            "range": "± 104798.33774808377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24066059.615384616,
            "unit": "ns",
            "range": "± 90280.12936829682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6182970.693877551,
            "unit": "ns",
            "range": "± 246399.81948156975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26928121.64285714,
            "unit": "ns",
            "range": "± 360391.508079671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7776044.357142857,
            "unit": "ns",
            "range": "± 43971.423515046234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19479203.214285713,
            "unit": "ns",
            "range": "± 87481.41682681798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50173828.46666667,
            "unit": "ns",
            "range": "± 217609.60130861698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101460897.26666667,
            "unit": "ns",
            "range": "± 530371.3384833668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201659362.7857143,
            "unit": "ns",
            "range": "± 996290.474698108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349389.888888889,
            "unit": "ns",
            "range": "± 93322.20353566902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497970.074074074,
            "unit": "ns",
            "range": "± 69999.78283643564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141892.6438356163,
            "unit": "ns",
            "range": "± 106554.68336575798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5098955.65,
            "unit": "ns",
            "range": "± 178066.80254771427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45558.1914893617,
            "unit": "ns",
            "range": "± 1564.6465170779807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961000.943229167,
            "unit": "ns",
            "range": "± 13473.05576563335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911138.1544363839,
            "unit": "ns",
            "range": "± 3527.8415168195324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361369.9909319195,
            "unit": "ns",
            "range": "± 1722.6592981772153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552636.4697916666,
            "unit": "ns",
            "range": "± 2233.522573249443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791254.9156668527,
            "unit": "ns",
            "range": "± 358.5626131088137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721173.3406901042,
            "unit": "ns",
            "range": "± 913.3255901385814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196728.69565217392,
            "unit": "ns",
            "range": "± 7570.427068151631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194324.40476190476,
            "unit": "ns",
            "range": "± 7074.249294170679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170265,
            "unit": "ns",
            "range": "± 2921.120993239215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11387363.666666666,
            "unit": "ns",
            "range": "± 50005.42794632637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9243050.066666666,
            "unit": "ns",
            "range": "± 77315.3949791434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18024.815217391304,
            "unit": "ns",
            "range": "± 1435.86541603059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53525.2688172043,
            "unit": "ns",
            "range": "± 4001.0790233216953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39255.148148148146,
            "unit": "ns",
            "range": "± 1068.908418891538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88810.69791666667,
            "unit": "ns",
            "range": "± 11695.329740964567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4547.347368421053,
            "unit": "ns",
            "range": "± 572.9564382910547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17906.26595744681,
            "unit": "ns",
            "range": "± 1118.0451466785403"
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
        "date": 1680155495322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373532.290909091,
            "unit": "ns",
            "range": "± 141152.4905734893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5336935.47368421,
            "unit": "ns",
            "range": "± 112622.1585175495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25771840,
            "unit": "ns",
            "range": "± 443065.45181432116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6513851.090909091,
            "unit": "ns",
            "range": "± 151259.77873651643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29169666.384615384,
            "unit": "ns",
            "range": "± 1200698.0629036077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8328474.325,
            "unit": "ns",
            "range": "± 289043.0946631144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21228758.315789472,
            "unit": "ns",
            "range": "± 455408.90088920854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52756178.615384616,
            "unit": "ns",
            "range": "± 691936.9129700986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106465729.46666667,
            "unit": "ns",
            "range": "± 1262434.2077308914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211635764.8,
            "unit": "ns",
            "range": "± 3345387.8411952523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464183.6875,
            "unit": "ns",
            "range": "± 94491.9354058505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2753160.2352941176,
            "unit": "ns",
            "range": "± 86579.08056136915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317852.6774193547,
            "unit": "ns",
            "range": "± 130560.07771330219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5793873.065789473,
            "unit": "ns",
            "range": "± 293993.20796568686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50702.59574468085,
            "unit": "ns",
            "range": "± 3546.0258091448627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003014.7546875,
            "unit": "ns",
            "range": "± 46366.73164153147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856218.910546875,
            "unit": "ns",
            "range": "± 8389.857943830188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346894.1576822917,
            "unit": "ns",
            "range": "± 4182.363910391165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647030.1643415177,
            "unit": "ns",
            "range": "± 2048.4895513945453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863718.7184244791,
            "unit": "ns",
            "range": "± 2653.9494293977396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758551.2771484375,
            "unit": "ns",
            "range": "± 221.4262671182597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203747,
            "unit": "ns",
            "range": "± 4201.169024982283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198244.13157894736,
            "unit": "ns",
            "range": "± 5637.844969590596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167252.91304347827,
            "unit": "ns",
            "range": "± 4126.3665605584365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11928721.038461538,
            "unit": "ns",
            "range": "± 321172.9838125842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9716710.80952381,
            "unit": "ns",
            "range": "± 227480.9137177489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20142.05376344086,
            "unit": "ns",
            "range": "± 1229.0308073188985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52545.670454545456,
            "unit": "ns",
            "range": "± 3319.094651248231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41776.12195121951,
            "unit": "ns",
            "range": "± 1480.891998005289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92934.91208791209,
            "unit": "ns",
            "range": "± 9870.081481875024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5521.9375,
            "unit": "ns",
            "range": "± 599.6560911318911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20115.17021276596,
            "unit": "ns",
            "range": "± 1795.8386583557876"
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
        "date": 1680159375622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4053765.125,
            "unit": "ns",
            "range": "± 105091.10579555019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6313000.933333334,
            "unit": "ns",
            "range": "± 187778.4965074971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30235430.529411763,
            "unit": "ns",
            "range": "± 578018.4952815218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7780920.323529412,
            "unit": "ns",
            "range": "± 231060.320819992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33640236,
            "unit": "ns",
            "range": "± 550001.7919643535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10083397.152173912,
            "unit": "ns",
            "range": "± 382727.82266972656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27222278.6,
            "unit": "ns",
            "range": "± 1030818.9137445616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67482873.54545455,
            "unit": "ns",
            "range": "± 2460237.1235634703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129114584.77777778,
            "unit": "ns",
            "range": "± 2605874.764309054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275946547.9047619,
            "unit": "ns",
            "range": "± 10002413.043775046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1696347.237113402,
            "unit": "ns",
            "range": "± 107539.0452890613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3172671.6875,
            "unit": "ns",
            "range": "± 98270.13591295581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2622604.770491803,
            "unit": "ns",
            "range": "± 116619.28201236614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6411444.72,
            "unit": "ns",
            "range": "± 169440.20402552045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58482.17021276596,
            "unit": "ns",
            "range": "± 3352.121230640328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7132385.63203125,
            "unit": "ns",
            "range": "± 54274.516652910905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2197170.390950521,
            "unit": "ns",
            "range": "± 16568.06824560319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1714674.1712239583,
            "unit": "ns",
            "range": "± 29191.505371321557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150010.523567708,
            "unit": "ns",
            "range": "± 15642.632704752792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974632.5598958334,
            "unit": "ns",
            "range": "± 3911.0895717172475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914939.808984375,
            "unit": "ns",
            "range": "± 4188.099995842401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234439.16279069768,
            "unit": "ns",
            "range": "± 8661.432576796522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237879.74683544305,
            "unit": "ns",
            "range": "± 12256.011589784506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211421.62666666668,
            "unit": "ns",
            "range": "± 10696.364307524278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14438877.75,
            "unit": "ns",
            "range": "± 270138.18754321523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11812330.214285715,
            "unit": "ns",
            "range": "± 205327.71436719943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24074.744680851065,
            "unit": "ns",
            "range": "± 2181.2042492902724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66369.41935483871,
            "unit": "ns",
            "range": "± 6770.60271275528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49474.12328767123,
            "unit": "ns",
            "range": "± 2474.9644719403186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108736.46987951807,
            "unit": "ns",
            "range": "± 6938.108425242658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6839.03125,
            "unit": "ns",
            "range": "± 945.9186395760306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24116.938144329895,
            "unit": "ns",
            "range": "± 2520.6526222324555"
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
          "id": "521ba16de332ff92e9280c02a8651e8f8fe35401",
          "message": "wip",
          "timestamp": "2023-04-17T11:08:02+09:00",
          "tree_id": "c0e809441d46a2cc676ec1eebd5ba3855d925a65",
          "url": "https://github.com/OnedgeLee/libplanet/commit/521ba16de332ff92e9280c02a8651e8f8fe35401"
        },
        "date": 1681698137742,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7905769.142857143,
            "unit": "ns",
            "range": "± 224878.1659590142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21602054.8,
            "unit": "ns",
            "range": "± 323571.9501105037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55121664.666666664,
            "unit": "ns",
            "range": "± 674042.7029456204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108188197.46666667,
            "unit": "ns",
            "range": "± 1704659.5523800082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214254499.14285713,
            "unit": "ns",
            "range": "± 1662970.7208072804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49704.47826086957,
            "unit": "ns",
            "range": "± 3291.09672584427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465882.1595744682,
            "unit": "ns",
            "range": "± 103901.11972864748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711016.923076923,
            "unit": "ns",
            "range": "± 73416.49903934296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2309029.623529412,
            "unit": "ns",
            "range": "± 122732.3396848738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6054170.464646464,
            "unit": "ns",
            "range": "± 390491.4688527808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6029497.9078125,
            "unit": "ns",
            "range": "± 22668.699058278304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884456.0870535714,
            "unit": "ns",
            "range": "± 2922.540335956387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366134.657421875,
            "unit": "ns",
            "range": "± 4398.14410113815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599825.3450520835,
            "unit": "ns",
            "range": "± 2271.5879226983166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847979.2340494791,
            "unit": "ns",
            "range": "± 755.5021457596264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757663.55078125,
            "unit": "ns",
            "range": "± 675.1763121080302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348624.75,
            "unit": "ns",
            "range": "± 7869.544746245357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281918.23529411765,
            "unit": "ns",
            "range": "± 9005.765718992652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232380.58333333334,
            "unit": "ns",
            "range": "± 1832.325916738481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5750024.428571428,
            "unit": "ns",
            "range": "± 44872.51499648632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995702.653846154,
            "unit": "ns",
            "range": "± 30410.091830526024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19200.68085106383,
            "unit": "ns",
            "range": "± 1321.9349634480375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93571.22222222222,
            "unit": "ns",
            "range": "± 5200.365107704766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81060.31958762887,
            "unit": "ns",
            "range": "± 4815.98699114555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 196359.83673469388,
            "unit": "ns",
            "range": "± 17416.322497413006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6341.061224489796,
            "unit": "ns",
            "range": "± 816.3067042406157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18701.691489361703,
            "unit": "ns",
            "range": "± 1455.2500064308927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635164.0714285714,
            "unit": "ns",
            "range": "± 58724.44353662973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797227.923076923,
            "unit": "ns",
            "range": "± 55863.39851587611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4232679.333333333,
            "unit": "ns",
            "range": "± 50437.922260461724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4618564.163934426,
            "unit": "ns",
            "range": "± 195589.3483655812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7614543.478260869,
            "unit": "ns",
            "range": "± 187289.86365739693"
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
          "id": "0851c06b8f158020ff20e4250239d6795d5f40ce",
          "message": "feat: replace newHeightDelay with contextMinInterval",
          "timestamp": "2023-04-19T22:28:06+09:00",
          "tree_id": "c0e809441d46a2cc676ec1eebd5ba3855d925a65",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0851c06b8f158020ff20e4250239d6795d5f40ce"
        },
        "date": 1681950780169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8341129.266666667,
            "unit": "ns",
            "range": "± 154697.229925087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22075753.333333332,
            "unit": "ns",
            "range": "± 244199.3523943287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54258439.733333334,
            "unit": "ns",
            "range": "± 629481.3171559204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110113909,
            "unit": "ns",
            "range": "± 699092.7827154684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220140935.2,
            "unit": "ns",
            "range": "± 1848613.8180307734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51404.4623655914,
            "unit": "ns",
            "range": "± 3072.2285303326635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1450668.7045454546,
            "unit": "ns",
            "range": "± 76047.8119583912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2698763.535714286,
            "unit": "ns",
            "range": "± 77157.27794263608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363432.2716049384,
            "unit": "ns",
            "range": "± 118446.6126840498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5761924.372093023,
            "unit": "ns",
            "range": "± 211598.69129940326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5934451.709821428,
            "unit": "ns",
            "range": "± 30045.36481552481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836037.5239955357,
            "unit": "ns",
            "range": "± 642.9617574123058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359594.71328125,
            "unit": "ns",
            "range": "± 3498.0242221999883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609693.4815104166,
            "unit": "ns",
            "range": "± 2256.6290928830776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815239.6105018029,
            "unit": "ns",
            "range": "± 406.4675260100668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762220.7737862723,
            "unit": "ns",
            "range": "± 342.1912022571272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343814.2972972973,
            "unit": "ns",
            "range": "± 11507.23416393373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281141.6551724138,
            "unit": "ns",
            "range": "± 8121.2335853782615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236989.46666666667,
            "unit": "ns",
            "range": "± 6879.962929598072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5812433.133333334,
            "unit": "ns",
            "range": "± 35753.809231358566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196827.5,
            "unit": "ns",
            "range": "± 35368.02688815901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21914.135416666668,
            "unit": "ns",
            "range": "± 2842.639757689252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99228.09183673469,
            "unit": "ns",
            "range": "± 6745.036006089057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88864.44897959183,
            "unit": "ns",
            "range": "± 6827.938536799999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 208027.44680851063,
            "unit": "ns",
            "range": "± 17794.982335319823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6593.604395604396,
            "unit": "ns",
            "range": "± 784.425449741839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21829.804347826088,
            "unit": "ns",
            "range": "± 2048.485686952979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486746.28,
            "unit": "ns",
            "range": "± 90104.97842448368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3829178.1666666665,
            "unit": "ns",
            "range": "± 74842.21543944339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4336093.142857143,
            "unit": "ns",
            "range": "± 70031.6447997806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4956014.764705882,
            "unit": "ns",
            "range": "± 98654.45315502072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7701266.071428572,
            "unit": "ns",
            "range": "± 131687.40814021215"
          }
        ]
      }
    ]
  }
}