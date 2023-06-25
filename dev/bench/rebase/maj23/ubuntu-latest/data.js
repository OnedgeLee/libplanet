window.BENCHMARK_DATA = {
  "lastUpdate": 1687689028576,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c565a178831a711bdf786b79a9e2e6279fa1a65c",
          "message": "Fix maj23",
          "timestamp": "2023-06-25T19:16:18+09:00",
          "tree_id": "39a2af58c0af5ea78020da440b223735127e7419",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c565a178831a711bdf786b79a9e2e6279fa1a65c"
        },
        "date": 1687689015284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3249464.533333333,
            "unit": "ns",
            "range": "± 59847.83855968958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314910.263157895,
            "unit": "ns",
            "range": "± 51931.81656839637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4186030,
            "unit": "ns",
            "range": "± 46318.58359233365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4127361.777777778,
            "unit": "ns",
            "range": "± 97167.32615020075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6810187.533333333,
            "unit": "ns",
            "range": "± 125512.8306724437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7693791.857142857,
            "unit": "ns",
            "range": "± 14020.464015459374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19475371.5,
            "unit": "ns",
            "range": "± 67011.49922071355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49320221.85714286,
            "unit": "ns",
            "range": "± 261790.4337988564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100409619.6,
            "unit": "ns",
            "range": "± 1305254.6842048434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199001769.35714287,
            "unit": "ns",
            "range": "± 1213984.1224878968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277113.4259259259,
            "unit": "ns",
            "range": "± 10761.141469231998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268649.58181818185,
            "unit": "ns",
            "range": "± 11438.880173259173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236587.23076923078,
            "unit": "ns",
            "range": "± 1577.0542769060592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4155313.466666667,
            "unit": "ns",
            "range": "± 37355.50581118564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795231.533333333,
            "unit": "ns",
            "range": "± 43717.681943950105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16637.842105263157,
            "unit": "ns",
            "range": "± 1132.525715416929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81502.67164179105,
            "unit": "ns",
            "range": "± 3659.514669709631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70791.61538461539,
            "unit": "ns",
            "range": "± 840.3221146740435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82980.91111111111,
            "unit": "ns",
            "range": "± 7780.509401948419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4637.863157894737,
            "unit": "ns",
            "range": "± 434.9493639035864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15509.19587628866,
            "unit": "ns",
            "range": "± 1074.262369403374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45046.74698795181,
            "unit": "ns",
            "range": "± 2363.004602677998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6256096.4265625,
            "unit": "ns",
            "range": "± 15489.789831374643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954589.2537760416,
            "unit": "ns",
            "range": "± 7088.953389696729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347922.667217548,
            "unit": "ns",
            "range": "± 2209.3501996282894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614642.0147879464,
            "unit": "ns",
            "range": "± 3304.0697471425074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795405.798046875,
            "unit": "ns",
            "range": "± 960.4619935176468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753764.9694010416,
            "unit": "ns",
            "range": "± 793.4168303283257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333279.0721649486,
            "unit": "ns",
            "range": "± 84068.95519443738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2561574.875,
            "unit": "ns",
            "range": "± 64064.12245712172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137106.5384615385,
            "unit": "ns",
            "range": "± 91736.67253784009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5282281.392857143,
            "unit": "ns",
            "range": "± 114312.6685378631"
          }
        ]
      }
    ]
  }
}