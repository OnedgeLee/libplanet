window.BENCHMARK_DATA = {
  "lastUpdate": 1680155507347,
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
      }
    ]
  }
}